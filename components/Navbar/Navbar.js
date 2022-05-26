import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="font-sans bg-emerald-200 text-yellow-900 w-full" >
        <div className="container py-6">
            <div className="flex justify-between items-center">
                <Link href="/">
                    <div className="flex flex-row">
                        <img src="/list.svg" alt="" className="w-8 h-8" />
                        <h2 className="text-2xl font-bold ml-2">StudentApp</h2>
                    </div>
                </Link>
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