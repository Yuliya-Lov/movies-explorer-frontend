import React, { useCallback } from "react";

export function useFilter() {
  const [keyword, setKeyword] = React.useState('');
  const [isShort, setIsShort] = React.useState(false);

  const handleChangeInput = (event) => {
    const target = event.target;
    setKeyword(target.value);
  };

  const handleChangeCheckbox = (event) => {
    const target = event.target;
    target.checked
      ? setIsShort(true)
      : setIsShort(false);
  };

  function handleSubmitFilter(moviesArr) {
    console.log(keyword, moviesArr, isShort);
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

  const resetFilter = useCallback(
    (newKeyword = '', newIsShort = false) => {
      setKeyword(newKeyword);
      setIsShort(newIsShort);
    },
    [setKeyword, setIsShort]
  );


  return { keyword, isShort, handleChangeInput, handleChangeCheckbox, handleSubmitFilter, saveSearch, resetFilter };
}
