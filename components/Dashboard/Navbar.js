import React from 'react'
import Link from 'next/link'

import styled from 'styled-components'

const Navbar = () => {
  return (
    <Header>
        <nav className="navbar fixed-top navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">
                    <div className="logo-panjang"></div>
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/dashboard">
                                <img src="/images/icon_menu.svg" className="bx-menu" alt="" />
                            </Link>
                        </li>
                    </ul>

                    <form className="d-flex align-items-center">
                        <img src="/images/icon_search.svg" className="btn-search" alt="" />
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                    <button className="btn btn-outline-success" type="submit">Search</button>

                    <div className="d-flex profile">
                        <img src="/images/profile.svg" alt="" />
                        <span className="d-flex align-items-center uname">Unis Badri</span>
                        <img src="/images/icon_dropdown.svg" alt="" />
                    </div>
                </div>
            </div>
        </nav>
    </Header>
  )
}

const Header = styled.div`
    display: flex;
    align-items: center;
    .navbar {
        height: 70px;
        box-shadow: 0px 2px 20px rgba(1, 41, 112, 0.1);
        background-color: #FFF;
        transition: all 0.5s;
        padding-left: 70px;
        .logo-panjang {
            display: block;
            position: relative;
            width: 100px;
            height: 34px;
            background-color: #CFD4ED;
            margin-right: 100px;
        }
        .form-control {
            border-radius: 2px 0 0 2px;
            &:focus {
                box-shadow: none;
            }
            &::placeholder {
                padding-left: 15px;
            }
        }
        .btn-outline-success {
            border-radius: 0 2px 2px 0;
            background-color: #FFF;
            border: 1px solid #0D28A6;
            color: #0D28A6;
            position: relative;
            font-weight: bold;
            &:hover, &:focus {
                background-color: #0D28A6;
                color: #FFF;
                box-shadow: none;
            }

        }
        .btn-search {  
            padding: 0px 5px;
            font-size: 24px;
            color: #D0D0D0;
            position: absolute;
        }
        .profile {
            margin: 0 10px;
            .uname {
                margin: 10px;
            }
        }
    }
`

export default Navbar