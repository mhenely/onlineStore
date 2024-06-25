import { useState } from 'react'
import { Outlet } from 'react-router';
import Directory from '../../components/directory/directory.component';


function Home() {

  return (
    <div>
      <div>
        <Directory />
        <Outlet />
      </div>
    </div>
  )
}

export default Home
