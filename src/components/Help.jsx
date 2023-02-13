import React from 'react'

import appleIOSVersion from '../assets/iosVersion.jpg'
import ps3Soft from "../assets/ps3Software.jpg"
import ps4Soft from "../assets/ps4Software.jpg"

const Help = () => {
  return (
    <div name="help" className="w-full h-screen bg-gradient-to-b from-blue-500 to-blue-600 text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-300">Is Your Device Compatible?</p>
            </div>
            <p className="text-xl mt-20">
            Apple Devices IOS 15 & Below
            <img className="h-80" src={appleIOSVersion} alt="IOS Image" />
            </p>
            <p className="text-xl mt-20">
            PlayStation 3 Version 4.89 & Below [Comes With Homebrew, Emulators Etc]  PlayStation 4 Versions 6.72 & Below
            <img className="h-72" src={ps3Soft} alt="IOS Image" />
            <img className="h-72" src={ps4Soft} alt="IOS Image" />
            </p>
        </div>
    </div>
  )
}

export default Help