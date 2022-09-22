import './css.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Home = () =>  {
    const [letterClass, setLetterClass] = useState('text-animate')
    // dosn't work
    


    return (
        <div className="home">
            <div className='text-container'>
                <h1 class={letterClass}> Welcome <br/> 
                in Tega <span>Air</span>Space...
                </h1>
                <h2> Scenery creator from <span className='italy'> ITALY </span></h2>
                <Link to='/shop' className='button'>SHOP NOW</Link>

                

            </div>
           
        </div>
    )
}

export default Home