import React, { useRef } from 'react'
import axios from 'axios'
import { useDropzone } from 'react-dropzone'
import DefaultLayout from '../layouts/DefaultLayout'
import Head from 'next/head'

import tw from 'tailwind-styled-components'

const Input = () => {

  const inputFirstname = useRef()
  const inputLastname = useRef()
  const inputLocation = useRef()

  const formSubmitHandler = async (event) => {
    // stop default action
    event.preventDefault()

    let formIsCompleted = false

    // Validasi & sanitasi

    let firstname = inputFirstname.current.value
    let lastname = inputLastname.current.value
    let location = inputLocation.current.value

    firstname = firstname.trim()
    lastname = lastname.trim()
    location = location.trim()

    if ( firstname !== '' && lastname !== '' && location !== '' && acceptedFiles.length > 0 ) {
      formIsCompleted = true
    }


    if ( formIsCompleted ) {
      const submittedData = { firstname, lastname, location }

      // membuat object FormData
      const formData = new FormData()
      // mengisi formData
      formData.append('data', JSON.stringify(submittedData))
      // memasukkan photo ke formData
      acceptedFiles.forEach(file => {
        formData.append('files.photo', file, file.path)
      })

      const res = await axios.post(
        'https://fejs-c7-api.herokuapp.com/api/students',formData
      )
      console.log(res.data) 
    } else {
      alert('Form tidak lengkap')
    }

  } 

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone()
  // looping
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))

  return (
    <>
      <Head>
          <title>Input Page</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <DefaultLayout>
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center font-bold text-stone-800 text-2xl pb-8">
            This is <span className="text-emerald-900 ml-2">INPUTPAGE</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <form onSubmit={formSubmitHandler} className="space-y-2 p-8 bg-orange-300/30 rounded-md">
              <div className="border-[1px] border-solid border-stone-400">
                <input 
                  type="text" 
                  name="firstname"
                  id="firstname"
                  placeholder="First Name" 
                  className="p-2" 
                  ref={inputFirstname}
                  required
                />
              </div>
              <div className="border-[1px] border-solid border-stone-400">
                <input 
                type="text"
                name="lastname"
                id="lastname" 
                placeholder="Last Name" 
                className="p-2" 
                ref={inputLastname}
                required
              />
              </div>
              <div className="border-[1px] border-solid border-stone-400">
                <input 
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Location" 
                  className="p-2" 
                  ref={inputLocation}
                  required
                />
              </div>
              <StyledDiv {...getRootProps()}>
                <input {...getInputProps()} required/>
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
      </DefaultLayout>
    </>
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