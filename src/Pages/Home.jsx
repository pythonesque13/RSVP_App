import React from 'react'
import Form from '../Components/Form'
import { FaCalendar } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="h-screen w-full  bg-amber-100 flex items-center justify-center">
        <div className="absolute right-5 top-5 text-white bg-amber-500 p-2 rounded-full cursor-pointer tansition-all">
            <Link to="/rdv">
                <FaCalendar/>
            </Link>
        </div>
        <Form/>
    </div>
  )
}

export default Home
