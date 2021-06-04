import React from 'react';
import { OrderBy } from './OrderBy';
import { SuggestionsSearch } from './SuggestionsSearch';

import '../../styles/game-page-style.css';
export const ResultHeader = ( {cleanedGames, data} ) => {
  // debugger
  return (
    <form className="result">
      <div className="header__result">
        <h3 className="list--title">Search <span className="highlight--text">Result ...</span></h3>
        <OrderBy />
      </div>
      {
        cleanedGames.length <= 0 && <SuggestionsSearch data={ data } />
      }
    </form>
  )
}
