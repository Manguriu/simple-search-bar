import React from 'react'
import './results.css'

export const SearchResult = ({result}) => {
  return (
    <div className='results-style' onClick={(e) => alert (`you clicked on ${result.name}`)}>{result.name}</div>
  )
}
