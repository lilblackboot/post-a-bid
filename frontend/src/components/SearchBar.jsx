import React from 'react'

function SearchBar() {
  return (
    <div className='bg-transparent flex py-5 justify-center align-middle items-center'>
        <input
            className='bg-[#F0F0E5] placeholder-[#160D2D]  p-3 px-7 m-2 rounded-full w-1/2'
            type='text'
            placeholder='Search for a product'
        />
        <button className='bg-[#6B707A] text-[#C9CDD0] p-2 m-5 px-8 rounded-full m-3'>Filter</button>
        <button className='bg-[#6B707A] text-[#C9CDD0] p-2 m-5 px-8 rounded-full m-3'>Sort</button>
    </div>
  )
}

export default SearchBar