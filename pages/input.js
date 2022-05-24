import React, { useRef } from 'react'
import axios from 'axios'
import { useDropzone } from 'react-dropzone'

import tw from 'tailwind-styled-components'

const Input = () => {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  const inputPhoto = useRef()

  const formSubmitHandler = async (event) => {
    // stop default action
    event.preventDefault()
    const submittedData = {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    }

    // membuat object FormData
    const formData = new FormData()
    // mengisi formData
    formData.append('data', JSON.stringify(submittedData))
    // memasukkan photo ke formData
    acceptedFiles.forEach(file => {
      formData.append('files.photo', file, file.path)
    })

    const res = await axios.post(
      'https://fejs-c7-api.herokuapp.com/api/students',
      formData
    )
    console.log(res.data)
  }

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone()
  // looping
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-center font-bold text-stone-800 text-2xl pb-8">
        This is <span className="text-emerald-900 ml-2">INPUTPAGE</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <form onSubmit={formSubmitHandler} className="space-y-2 p-8 bg-orange-300/30 rounded-md">
          <div className="border-[1px] border-solid border-stone-400">
            <input 
              type="text" 
              name="name"
              id="name"
              placeholder="Name" 
              className="p-2" 
              ref={inputName}
            />
          </div>
          <div className="border-[1px] border-solid border-stone-400">
            <input 
            type="number" 
            placeholder="Age" 
            className="p-2" 
            ref={inputAge}
          />
          </div>
          <div className="border-[1px] border-solid border-stone-400">
            <input 
              type="email" 
              placeholder="Email" 
              className="p-2" 
              ref={inputEmail}
            />
          </div>
          <StyledDiv {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag & drop your photos here, or click to select files</p>
          </StyledDiv>
          <ul className="text-center text-xs italic">{files}</ul>
          <div>
            <button 
              type="submit" 
              value="submit"
              className="bg-emerald-900 hover:bg-emerald-700 text-white font-bold py-2 px-4 mt-2 w-[200px] rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

const StyledDiv = tw.div`
  bg-white
  border-solid
  border-stone-400
  border-[1px]
  px-2
  py-2
  w-[200px]
  font-md
  text-sm
  text-center
  text-slate-400
  italic
`

export default Input