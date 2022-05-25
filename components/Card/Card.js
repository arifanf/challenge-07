import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import axios from 'axios'

const Card = () => {

  const router = useRouter()

  const [students, setStudents] = useState([])

  useEffect(() => {
    axios.get(
      'https://fejs-c7-api.herokuapp.com/api/students/?populate=*'
    ).then(res => {
      setStudents([...res.data.data])
      console.log(res)
    })
  }, [])

  return (
    <div 
      className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 m-12"
    >
      { students.map(student => (
        <div
          key={student.id}
          onClick={() => router.push(`/student/${student.id}`)}
          className="text-center bg-emerald-100 drop-shadow-2xl rounded-md px-4 py-8"
        >
          <Zoom>
            { student.attributes.photo.data === null && 
              <img
                src="/profile.jpg"
                alt='student'
                className='rounded-full w-[200px] h-[200px]'
              />
            }
            { student.attributes.photo.data !== null && <img
                src={student.attributes.photo.data.attributes.url}
                alt='student'
                className='rounded-full w-[200px] h-[200px]'
              />
            }
          </Zoom>
          <div className="mt-4">First Name :</div>
          <div className="font-bold text-emerald-800">
            {student.attributes.firstname}
          </div>
          <div className="mt-4">Last Name :</div>
          <div className="font-bold text-emerald-800">
            {student.attributes.lastname}
          </div>
          <div className="mt-4">Location :</div>
          <div className="font-bold text-emerald-800">
            {student.attributes.location}
          </div>
        </div>
      )) }
    </div>
  )
}

export default Card