export default class FormValidator {
  constructor(settings, form) {
    this._form = form;
    this._inputSelector = settings.inputSelector;
    this._submitButton = form.querySelector(settings.submitButtonSelector);
    this._inputList = Array.from(form.querySelectorAll(settings.inputSelector));
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
  }

  _showInputError(input) {
    input.classList.add(this._inputErrorClass);
    if (!input.classList.contains('controlled-input__input_slim')) {
      const errorElement = this._form.querySelector(`.${input.id}-error`);
      errorElement.textContent = input.validationMessage;
    }
  }

  _hideInputError(input) {
    input.classList.remove(this._inputErrorClass);
    console.log(input.classList)
    if (!input.classList.contains('controlled-input__input_slim')) {
      const errorElement = this._form.querySelector(`.${input.id}-error`);
      errorElement.textContent = '';
    }
  }

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(input);
    } else {
      this._hideInputError(input);
    }
  }

  _hasInputsValid() {
    return this._inputList.every((input) => input.validity.valid)
  }

  _disableSubmitButton() {
    console.log(this._submitButton.classList);
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.setAttribute('disabled', 'disabled');
  }

  _enableSubmitButton() {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.removeAttribute('disabled', 'disabled');
  }

  _setButtonState() {
    if (this._hasInputsValid()) {
      this._enableSubmitButton();
    } else {
      this._disableSubmitButton();
    }
  }

  setInitialFormState() {
    this._enableSubmitButton();
    this._inputList.forEach((input) => {
      this._hideInputError(input);
    })
  }

  _setEventListeners() {
    this._setButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', (evt) => {
        this._checkInputValidity(inputElement);
        this._setButtonState();
      })
    })
  }

  enableValidation() {
    this._setEventListeners();
    this._form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    })
    this._setEventListeners();
  }
}
