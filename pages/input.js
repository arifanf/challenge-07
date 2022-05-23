import React from 'react'

const Input = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-center font-bold text-stone-800 text-2xl pb-8">
        This is Inputpage
      </div>
      <div className="flex flex-col space-y-2 items-center justify-center">
        <div className="border-[1px] border-solid border-stone-800">
          <input type="text" placeholder="Name" className="border-solid border-stone-700 px-2 py-2" />
        </div>
        <div className="border-[1px] border-solid border-stone-800">
          <input type="number" placeholder="Age" className="border-solid border-stone-700 px-2 py-2" />
        </div>
        <div className="border-[1px] border-solid border-stone-800">
          <input type="email" placeholder="Email" className="border-solid border-stone-700 px-2 py-2" />
        </div>
        <div>
          <button 
            type="submit" 
            value="submit"
            className="bg-stone-800 text-white font-bold py-2 px-4 mt-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Input