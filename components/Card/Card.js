import React from 'react'
import Image from 'next/image'

const Card = () => {
  return (
    <div className="text-center border-2 border-neutral-800 rounded-md px-4 py-8">
        <div>
          <Image 
            src='/profile.jpg'
            alt='student'
            width='300'
            height='300'
            className='rounded-full'
          />
        </div>
        <div>Name</div>
        <div>Noki</div>
        <div>Age</div>
        <div>17 years old</div>
        <div>Email</div>
        <div>nokichan@gmail.com</div>
      </div>
  )
}

export default Card