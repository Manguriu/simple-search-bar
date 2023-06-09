import React from 'react'
import './list.css';
import { SearchResult } from './SearchResult';

export default function SearchList({results}) {
  return (
    <div className='results-list'>
      {results.map ((result, id) => { 
        return < SearchResult result={result} key={id}/>

      })}

    </div>
  )
}
