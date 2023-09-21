import React, { useCallback } from "react";

export function useFilter() {
  const [keyword, setKeyword] = React.useState('');
  const [isShort, setIsShort] = React.useState(true);
  const [filterResult, setFilterResult] = React.useState([]);

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

  async function handleSubmitFilter(moviesArr) {
    console.log(keyword);
    const res = moviesArr.filter((movie) => {
      return (
        isShort
          ? (movie.duration <= 40) && (movie.nameRU.toLowerCase().includes(keyword.toLowerCase()) || movie.nameEN.toLowerCase().includes(keyword.toLowerCase()))
          : movie.nameRU.toLowerCase().includes(keyword.toLowerCase())
          || movie.nameEN.toLowerCase().includes(keyword.toLowerCase()))
    })
    await setFilterResult(res);
  }

const saveSearch = () => {
  console.log(filterResult)
  localStorage.setItem("keyword", JSON.stringify(keyword));
  localStorage.setItem("isShort", JSON.stringify(isShort));
  localStorage.setItem("moviesArr", JSON.stringify(filterResult));
}

const resetFilter = useCallback(
  (newKeyword = '', newIsShort = true, newFilterResult = []) => {
    setKeyword(newKeyword);
    setIsShort(newIsShort);
    setFilterResult(newFilterResult);
  },
  [setKeyword, setIsShort, setFilterResult]
);


return { keyword, isShort, filterResult, handleChangeInput, handleChangeCheckbox, handleSubmitFilter, saveSearch, resetFilter };
}
