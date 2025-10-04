import React , {useState} from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState("")
    const [userData, setuserData] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setuserData({ email, password });
         console.log("Form submitted with:", userData);
        setemail("");
        setpassword("");
    }

  return (
    <div className='min-h-screen p-7 bg-white'>
        <form onSubmit={(e)=>{
            handleSubmit(e)
        }} className='max-w-md mx-auto mt-8'>
            <img 
              className='w-16 mb-10' 
              src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" 
              alt="Uber Logo" 
            />
            
            <div className='space-y-6'>
              <div>
                <h3 className='text-xl font-medium mb-2'>What's your Email?</h3>
                <input 
                  required 
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className='bg-[#eeeeee] rounded px-4 py-3 border border-gray-300 w-full text-lg placeholder:text-gray-500 focus:outline-none focus:border-black transition-colors'
                  type="email" 
                  placeholder='email@example.com' 
                />
              </div>
              <div>
                <h3 className='text-xl font-medium mb-2'>Enter your Password</h3>
                <input 
                  required 
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  className='bg-[#eeeeee] rounded px-4 py-3 border border-gray-300 w-full text-lg placeholder:text-gray-500 focus:outline-none focus:border-black transition-colors'
                  type="password" 
                  placeholder='Enter your password' 
                />
              </div>

              <button 
                className='bg-black text-white font-semibold rounded px-4 py-3 w-full text-lg hover:bg-gray-800 transition-colors mt-4'
                type="submit"
              >
                Login
              </button>

              <p className='text-center text-gray-600 mt-6'>
                Don't have an account? 
                <a href="/signup" className='text-black font-medium ml-1 hover:underline'>
                  Sign up
                </a>
              </p>
              <Link 
                to="/captain-signup" 
                className='block w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold rounded px-4 py-3 text-lg transition-colors mt-6'
              >
                Sign up as a Captain
              </Link>
            </div>
        </form>
    </div>
  )
}

export default UserLogin
