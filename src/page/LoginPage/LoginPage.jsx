import React from 'react'
import FormLogin from './FormLogin'
import Lottie from 'lottie-react'
import animate from './bg-animate.json'


export default function LoginPage() {
  return (
    <div className='container flex'>
      <div className="w-1/2 rounded border-2 border-blue-950 p-10 mr-10"><FormLogin/></div>
      <div className="w-1/2"><Lottie animationData={animate} loop={true}></Lottie></div>
    </div>
  )
}
