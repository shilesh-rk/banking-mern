import React from 'react'
const Loading = () => {
  return (
    <div className='text-center'>
      <div class="spinner-grow text-primary m-3" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-secondary m-3" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-success m-3" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-warning m-3" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Loading