
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <div>
            <Header />
            <Outlet />
            <div className='mt-24'>
             <Footer />
            </div>
        </div>
    </>
  )
}

export default Layout