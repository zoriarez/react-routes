import React from 'react'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (<>
  <div>Layout</div>
  <div><Outlet/></div>
  </>
    
  )
}

export default Layout