import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="font-sans bg-emerald-200 text-yellow-900" >
        <div className="container py-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold"><Link href="/">StudentApp</Link></h2>
                </div>
                <div>
                    <ul className="flex space-x-4 font-medium">
                        <li><Link href="/input">Input</Link></li>
                        <li><Link href="/chart">Chart</Link></li>
                        <li><Link href="/download">Download</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        
        </div>
  )
}

export default Navbar