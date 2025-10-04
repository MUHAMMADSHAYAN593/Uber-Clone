import React, { useContext, useEffect, useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext' // ✅ fixed typo (was CapatainContext)
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainProtectWrapper = ({ children }) => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const { setCaptain } = useContext(CaptainDataContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!token) {
      navigate('/captain-login')
      return
    }

    const fetchCaptainProfile = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/captains/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )

        if (response.status === 200) {
          setCaptain(response.data.captain)
          setIsLoading(false)
        }
      } catch (error) {
        console.error('Error fetching captain profile:', error)

        // ✅ only clear token if unauthorized
        if (error.response && error.response.status === 401) {
          localStorage.removeItem('token')
          navigate('/captain-login')
        }

        setIsLoading(false)
      }
    }

    fetchCaptainProfile()
  }, [token, navigate, setCaptain])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-teal-500 rounded-full animate-spin"></div>
      </div>
    )
  }

  return <>{children}</>
}

export default CaptainProtectWrapper
