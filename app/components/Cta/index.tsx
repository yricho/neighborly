import React from 'react'
import ButtonComponent from '../atom/button'
import Cta from '../atom/button'

export default function Review() {
  return (
      <>

        <img src="/images/bw15.png" alt="bawang" className="gambarBawang"/>

        <div className='flex container mx-auto px-4'>
          <div className="gambar">
            <img src="/images/makanan.png" alt="" />
          </div>

          <div className="text py-32 ps-12 ps-34">
            <h1 className='font-bold text-6xl text-black font-serif'>Wecome to Our Restaurant</h1>
            <p className='text-black mr-32'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="ctabutton my-6 font-serif">
              <button className='rounded-br-lg rounded-tl-lg bg-[#101A24] mr-4 py-2 px-4 '>menu </button>
              <button className='rounded-br-lg rounded-tl-lg bg-[#EA6D27] py-2 px-4'>Book a table </button>

           </div>
          </div>
        </div>
        <img src="/images/bw1.png" alt="wibu" className="gambarBawangBawang "/>

      </>
  )

}