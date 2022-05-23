import React from 'react'
import Navbar from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import Sidemenu from '../../components/Dashboard/Sidemenu'

import styled from 'styled-components'

const Cars = () => {
  return (
    <main>
      <Navbar />
      <Section>
        <Sidebar />
        <Sidemenu title={`Cars`} submenu={`List Car`} />
      </Section>
    </main>
  )
}

const Section = styled.div`
  background-color: #F4F5F7;
  width: 100%;
  height: 100vh;
`

export default Cars