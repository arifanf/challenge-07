import React from 'react'
import Link from 'next/link'

import styled from 'styled-components'

const Navbar = () => {
  return (
    <Header>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">
                    <div className="logo-panjang"></div>
                </Link>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-3 mb-2 mb-lg-0">
                        <li className="nav-item">
                          <a className="nav-link mx-2" href="#our-services">Our Services</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link mx-2" href="#why-us">Why Us</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link mx-2" href="#testimonial">Testimonial</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link mx-2" href="#faq">FAQ</a>
                        </li>
                    </ul>

                    <button className="btn btn-success" type="submit">Register</button>
                </div>
            </div>
        </nav>
    </Header>
  )
}

const Header = styled.div`
    display: flex;
    align-items: center;
    .bg-light {
      background-color: #F1F3FF !important;
    }
    .navbar {
      width: 100%;
      height: 70px;
      transition: all 0.5s;
      padding: 0 70px;
      top: 0;
      z-index: 100;
      position: fixed;
      .logo-panjang {
          display: block;
          position: relative;
          width: 100px;
          height: 34px;
          background-color: #0D28A6;
      }
      .navbar-collapse {
        flex-grow: 0;
      }
      .form-control {
          border-radius: 2px;
          &:focus {
              box-shadow: none;
          }
          &::placeholder {
              padding-left: 15px;
          }
      }
      .nav-link {
        color: #000;
        text-decoration: none;
      }
      .btn-success {
          background-color: #5CB85F;
          border: none;
          color: #FFF;
          border-radius: 2px;
          position: relative;
          font-weight: bold;
          &:hover, &:focus {
            background-color: #51a754;
            color: #FFF;
            box-shadow: none;
          }
      }
    }
`

export default Navbar