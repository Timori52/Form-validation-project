import React from 'react'
import { useNavigate,Link } from "react-router-dom";

const GoBackToSignUp = () => {
const Navigate =useNavigate();

const HandleClick =()=> {

    Navigate('/')
}

  return ( <>
    <div className='text-3xl text-center mt-11  '> Yay! your form has been submitted </div>
<div className=" text-center mt-9"> <p className="para mb-4"> Want to create another account? <Link to='/' className='underline text-blue-600'> Sign Up</Link> </p>

 <div
            class="flex items-center my-4 before:flex-1 before:border-t before:border-black before:mt-0.5 after:flex-1 after:border-t after:border-black after:mt-0.5"
          >
            <p class="text-center font-semibold mx-4 mb-0">OR</p>
          </div>

    <button  onClick={HandleClick} className="goback  text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> Go back </button>
    </div>  </>
  )
}

export default GoBackToSignUp