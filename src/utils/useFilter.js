export function useFilter(keyword, isShort, handleChangeKeyword, handleChangeIsShort) {

  function handleChangeFilter(keyword, isShort) {
    handleChangeKeyword(keyword);
    handleChangeIsShort(isShort)
  };

  const handleChangeInput = (event) => {
    const target = event.target;
    handleChangeKeyword(target.value);
  };

  const handleChangeCheckbox = (event) => {
    const target = event.target;
    target.checked
      ? handleChangeIsShort(true)
      : handleChangeIsShort(false);
  };

  function handleSubmitFilter(moviesArr) {
    return moviesArr.filter((movie) => {
      return isShort
        ? (movie.duration <= 40) && (movie.nameRU.toLowerCase().includes(keyword.toLowerCase()) || movie.nameEN.toLowerCase().includes(keyword.toLowerCase()))
        : movie.nameRU.toLowerCase().includes(keyword.toLowerCase())
        || movie.nameEN.toLowerCase().includes(keyword.toLowerCase())
    })
  }

  const saveSearch = (filterResult) => {
    localStorage.setItem("keyword", JSON.stringify(keyword));
    localStorage.setItem("isShort", JSON.stringify(isShort));
    localStorage.setItem("moviesArr", JSON.stringify(filterResult));
  }

  return { keyword, isShort, handleChangeFilter, handleChangeInput, handleChangeCheckbox, handleSubmitFilter, saveSearch };
}
