import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import Search from './Movies/Search';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };



  return (
    <div>
      <SavedList list={savedList} />
      <Route>
        < Search />
      </Route>
      
      <Route exact path="/" component={MovieList} /> 
      <Route path="/movies/:id" render={(routeProps) => <Movie
        {...routeProps} addToSavedList={addToSavedList}/>} /> 
      
        
    </div>
  );
};

export default App;
