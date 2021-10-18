import React from 'react'
import Dashboard from 'src/views/dashboard/Dashboard'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <Dashboard />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
