import React from "react";

export function usePartialRender(renderedMovies, stepForRendering) {
  const [countStepsForRendering, setCountStepsForRendering] = React.useState(1);
  const [isMoviesEnded, setIsMoviesEnded] = React.useState(true);

  function setInitialMoviesState() {
    setCountStepsForRendering(1);
    if (renderedMovies.length > stepForRendering) {
      setIsMoviesEnded(false);
    } else {
      setIsMoviesEnded(true);
    }
  }

  function setMoviesCount() {
    if (renderedMovies.length < stepForRendering * countStepsForRendering) {
      setIsMoviesEnded(true);
      return renderedMovies;
    } else {
      return renderedMovies.slice(0, stepForRendering * countStepsForRendering)
    }
  }

  function addMoreMovies() {
    setCountStepsForRendering(countStepsForRendering + 1);
  }

  return { stepForRendering, countStepsForRendering, setInitialMoviesState, setMoviesCount, addMoreMovies, isMoviesEnded };
}
