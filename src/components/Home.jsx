import React from 'react'
// import { MdArrowRight } from 'react-icons/md'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b to-blue-500 from-black  text-white">

        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">Welcome!</h2>
                <p className="text-gray-200 py-4 max-w-md">‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ To Sleepies Jailbreak Services!</p>
                {/* <div>
                    <button id="svrProv" className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-transparent">
                       Services I Provide
                        <span className="group-hover:rotate-90 duration-300">
                            <MdArrowRight size={35} className="ml-1" />
                        </span>
                    </button>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Home