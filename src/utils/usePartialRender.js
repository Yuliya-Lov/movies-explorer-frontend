import React from "react";

export function usePartialRender(renderedMovies, stepForRendering, additionalCountForRendering) {
  const [countAdditionalStepsForRendering, setCountAdditionalStepsForRendering] = React.useState(0);
  const [isMoviesEnded, setIsMoviesEnded] = React.useState(true);


  function setInitialMoviesState() {
    setCountAdditionalStepsForRendering(0);
    if (renderedMovies.length > stepForRendering) {
      setIsMoviesEnded(false);
    } else {
      setIsMoviesEnded(true);
    }
  }

  function setMoviesCount() {
    if (renderedMovies.length < stepForRendering + additionalCountForRendering * countAdditionalStepsForRendering) {
      setIsMoviesEnded(true);
      return renderedMovies;
    } else {
      return renderedMovies.slice(0, stepForRendering + additionalCountForRendering * countAdditionalStepsForRendering)
    }
  }

  function addMoreMovies() {
    setCountAdditionalStepsForRendering(countAdditionalStepsForRendering + 1);
  }

  return { stepForRendering, countAdditionalStepsForRendering, setInitialMoviesState, setMoviesCount, addMoreMovies, isMoviesEnded };
}
