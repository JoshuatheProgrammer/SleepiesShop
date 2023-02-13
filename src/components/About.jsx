import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-blue-500 to-blue-600 text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-300">About [ Pricing ]</p>
            </div>
            <p className="text-4xl mt-20">
            To Get In Contact With Me To Arrange My Services Click On The Contact Tab Above
            </p>
            <p className='text-4xl mt-10'>
              Playstation 3 just a jailbreak no homebrew installed - $45 + Shipping
            </p>
            <p className='text-4xl mt-10'>
              PlayStation 3 With HomeBrew And Games[Emulators] Installed - $75 + Shipping [ Please Tell Me What Games You Want / What Consoles You Want Also.]
            </p>
            <p className='text-4xl mt-10'>  
              PlayStation 4 Jailbreak is pretty easy my part would be setting it up for emulations, singleplayer modding etc. I can also turn it into a linux desktop for you. - $75 + Shipping
            </p>
            <p className='text-4xl mt-10'>
              iOS Devices [iPad/iPod/iPhone] - $30 + Shipping [ I Will Add All The Popular Repos ]
            </p>
            <p className='text-4xl mt-10'>
              If i notice you are near me or in my area we can discuss an drop off other then waiting for shipping.
            </p>
        </div>
    </div>
  )
}

export default About