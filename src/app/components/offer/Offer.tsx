import React from 'react'
import HeaderBanner from '../headerbanner/HeaderBanner'

function Offer() {
  return (
    <div>
        <HeaderBanner />
        <div className='grid grid-cols-4 px-5 gap-3 pb-20'>
            <div className='text-center'>
                <h3 className='text-xl text-slate-800 my-3'>COFFEE TO GO</h3>
                <p className='text-slate-600'>Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo</p>
            </div>

            <div className='text-center'>
                <h3 className='text-xl text-slate-800 my-3'>Type of Coffee</h3>
                <p className='text-slate-600'>Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo</p>
            </div>

            <div className='text-center'>
                <h3 className='text-xl text-slate-800 my-3'>BEEN VARIETIES</h3>
                <p className='text-slate-600'>Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo</p>
            </div>

            <div className='text-center'>
                <h3 className='text-xl text-slate-800 my-3'>COFFEE $ PASTRY</h3>
                <p className='text-slate-600'>Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo</p>
            </div>

        </div>
    </div>
  )
}

export default Offer