import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import axios from 'axios'
import Head from 'next/head'
import DefaultLayout from '../../layouts/DefaultLayout'

const Student = () => {
    
    const [students, setStudents] = useState(null)

    const router = useRouter()
    const { id} = router.query

    useEffect(() => {
        axios.get(
          `https://fejs-c7-api.herokuapp.com/api/students/${id}?populate=*`
        ).then(res => {
          setStudents(res.data.data)
          console.log(res)
        })
      }, [])

  return (
    <div>
        { students && (
          <>
            <Head>
                <title>{students.attributes.firstname + ' ' + students.attributes.lastname}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DefaultLayout>
              <div className="flex flex-row m-12">
                <div className="mx-12">
                  <Zoom>
                  { students.attributes.photo.data === null && 
                    <img
                      src="/profile.jpg"
                      alt='student' 
                      className="w-[300px] h-[300px]"
                      />
                  }
                  { students.attributes.photo.data !== null && 
                    <img 
                      src={students.attributes.photo.data.attributes.url}
                      alt='student'
                      className="w-[300px] h-[300px]"
                    />
                  }
                  </Zoom>
                </div>
                <div>
                  <div className="mt-4">First Name :</div>
                  <div className="font-bold text-emerald-800">
                    {students.attributes.firstname}
                  </div>
                  <div className="mt-4">Last Name :</div>
                  <div className="font-bold text-emerald-800">
                    {students.attributes.lastname}
                  </div>
                  <div className="mt-4">Location :</div>
                  <div className="font-bold text-emerald-800">
                    {students.attributes.location}
                  </div>
                </div>
              </div>
            </DefaultLayout>
          </>
        )}
    </div>
  )
}

export default Student