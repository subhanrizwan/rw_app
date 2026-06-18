import Header from '../components/header.jsx';
import Footer from '../components/footrer.jsx';
import { Outlet } from 'react-router-dom';

const MainLayout =()=>{
    return(
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}

export default MainLayout;