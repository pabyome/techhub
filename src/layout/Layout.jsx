
import Header from '../Components/Header'
import Footer from '../Components/Footer'
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