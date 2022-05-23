import React from 'react'
import Link from 'next/link'

import styled from 'styled-components'

const Sidemenu = ({ href, title, submenu }) => {
  return (
    <Menu>
        <div className="menubar col-auto col-md-1">
            <div className="title">
                <h5>{title}</h5>
            </div>
            <div className="menu">
                <Link prefetch href="/dashboard" passHref>
                  <StyledLink>{submenu}</StyledLink>
                </Link>
            </div>
        </div>
    </Menu>
  )
}

const Menu = styled.div`
  padding-top: 100px;
  height: 100vh;
  width: 280px;
  background-color: #FFF;
  position: fixed;
  z-index: 1;
  .title {
    padding-left: 95px;
    margin-bottom: 20px;
    color: #8A8A8A;
  }
  .menu {
    width: 280px;
    padding: 10px 0;
    &:hover, &:focus {
      background-color: #CFD4ED;
    }
  }
`

const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 17px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  &:hover {
    color: black;
    text-decoration: none;
  }
`

export default Sidemenu