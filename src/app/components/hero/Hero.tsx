import React from 'react'


function Hero() {
  return (
    <div className="bg-[url('/images/one.jpg')] min-h-screen bg-cover bg-center bg-no-repeat bg-fixed bg-black bg-opacity-50 bg-blend-overlay flex items-center md:justify-end justify-center text-white">
        <div className='flex flex-col items-center'>

<h2 className="text-6xl my-3 font-semibold">COFFEE HEAVEN</h2>

<p className='max-w-[500px] text-lg md:block hidden'>
    Coffee is more than just adrink. it's a daily ritual that energizes and inspires. Rich, aromatic, and invigorating, it fuel our minds and connects us with others. 
</p>
<button className='border-2 p-4 hover:bg-[#BE9C79] hover:border-[#BE9C79] md:mt-5 mt-2'>
    SHOP HERE
</button>

            </div>
            </div>
  )
}

export default Hero