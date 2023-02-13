import React from 'react'

import apple from "../assets/applelogo.png"
import sony from "../assets/psnlogo1.png"
import nintendo from "../assets/logonintendo1.png"

const Services = () => {

    const langs = [
        {
            id: 1,
            src: apple,
            title: 'IOS',
            style: "shadow-slate-500",
        },
        {
            id: 2,
            src: sony,
            title: 'PlayStation',
            style: "shadow-blue-700",
        },
        // {
        //     id: 3,
        //     src: nintendo,
        //     title: 'Nintendo Devices',
        //     style: "shadow-yellow-500",
        // },
    ];

  return (
    <div name="services" className="bg-gradient-to-b to-blue-500 from-blue-600 w-full h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-300 p-2 inline">My Services</p>
                <p className="py-6">Please Read Under The Help Tab To See If You Have A Compatible Device!</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                {
                    langs.map(({id, src, title, style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                       <img src={src} alt="" className="w-20 mx-auto" />
                        <p className="mt-4">{title}</p>
                    </div>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default Services