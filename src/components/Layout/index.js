import './index.scss'
import { Outlet } from 'react-router-dom'
import  Navbar from '../Navbar/index'

const layout = () => {
    return (
        <div className="App">
            <Navbar />
            <div className="page">
            <span className="tags top-tags">&lt;body&gt;</span>

            <Outlet />
            </div>
            </div>

    )
    }

export default layout