import React from 'react'
import Traning from './Traning'
import Sport from '../../home/Sport'
import Athlete_diet from './Athlete_diet'
import Athleteplan from './Athleteplan'

function Athlete() {
    return (
        <>
        <div className='w-[100%] flex flex-col justify-center items-center'>


    
            <div className="relative w-[99%] h-[25rem] bg-cover bg-center rounded-xl overflow-hidden" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1529900672901-908be5302554?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxVX2lrY01qbkdoTXx8ZW58MHx8fHx8')"
            }}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 flex items-center justify-center h-full text-white text-8xl font-bold text-center flex-col">
                    <span>Train Like an</span>
                    <span className="text-[#FFB22C] text-6xl">Athlete</span>
                </div>
            </div>

            <Traning/>
            <Sport/>
            <Athlete_diet />
             <Athleteplan />
            
        </div>

        </>
    )
}

export default Athlete  