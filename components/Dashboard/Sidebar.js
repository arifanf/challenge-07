import React from 'react'
import Link from 'next/link'

import styled from 'styled-components'

const Sidebar = ( href ) => {
  return (
    <Section className="fixed-top">
      <div className="sidenav text-center">
        <Link href="/dashboard">
          <div className="logo"></div>
        </Link>
      </div>
      <div className="link-menu">
        <div className="menu-items d-flex justify-content-center">
          <Link href="/dashboard">
            <img src="/images/icon_home.svg" alt="" />
          </Link>
        </div>
        <div>
          <Link prefetch href="/dashboard" passHref>
            <StyledLink>Dashboard</StyledLink>
          </Link>
        </div>
      </div>

      <div className="link-menu">
        <div className="menu-items d-flex justify-content-center">
          <Link href="/dashboard/cars">
            <img src="/images/icon_truck.svg" alt="" className="d-flex justify-content-center" />
          </Link>
        </div>
        <div>
          <Link prefetch href="/dashboard/cars" passHref>
            <StyledLink>Cars</StyledLink>
          </Link>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.div`
  background: #0D28A6;
  flex-basis: 70px;
  height: 100%;
  width: 70px;
  top: 0;
  left: 0;
  overflow-x: hidden;
  .logo {
    display: block;
    margin: 18px auto;
    position: relative;
    width: 34px;
    height: 34px;
    background-color: #CFD4ED;
  }
  .active {
    background-color: rgba(255, 255, 255, 0.3);
    font-weight: 700;
  }
  .link-menu {
    padding-top: 10px;
    display: block;
    line-height: 18px;
    height: 64px;
    position: relative;
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
`

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 13px;
  display: flex;
  justify-content: center;
  &:hover {
    color: #fff;
    text-decoration: none;
  }
`

export default Sidebar