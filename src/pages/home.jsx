import React from 'react'
import { GoArrowRight } from 'react-icons/go'

export default function Home () {
  return (
    <section className='w-full h-auto flex justify-center items-center bg-[#E2EAFF]'>
      <div className='w-[80%] h-dvh flex flex-col justify-around items-center'>
        {/* user block */}
        <div className='w-full h-[285px]'>
          <div className='w-[745px] h-[285px] flex justify-around items-center userbacground'>
            <div className='w-[200px] h-[200px] rounded-full homeuser'></div>
            <div className='w-[303px] h-[72px]'>
              <p className='text-[16px] font-normal uppercase'>
                Fanlar Doktori
              </p>
              <h1 className='text-[32px] font-semibold text-[#13265C]'>
                Ahmadjon Sobirov
              </h1>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-between items-center h-auto mt-[-100px]'>
          <div className='w-1/2 h-[252px] py-5'>
            <div className='w-full h-auto mb-4'>
              <p className='uppercase text-[16px] font-medium text-[#464B59]'>
                Matematikani o‘qitish metodikasi bulutli texnologiya asosida
              </p>
            </div>
            <div className='w-[80%] h-auto mb-4'>
              <h1 className='text-[32px] font-semibold text-[#13265C]'>
                Matematikani o‘qitish metodikasi fanini bulutli texnologiya
                asosida o‘qitish tizimi
              </h1>
            </div>
            <div>
              <button className='w-[241px] h-[44px] rounded-[50px] bg-[#13265C] text-[16px] font-normal text-white cursor-pointer hover:bg-[#BBBBBB] transform duration-500'>
                Darslarni ko’rish{' '}
                <GoArrowRight className='inline text-[20px]' />
              </button>
            </div>
          </div>
          <div className='w-[3px] h-[175px] bg-[#C0D1FF]'></div>
          <div className='w-1/2 h-[252px] py-5'>
            <div className='w-[80%] h-auto flex justify-end items-center p-5'>
              <h4 className='text-[24px] font-normal text-[#13265C]'>
                Matematika o‘qitish fanidan elektron platforma: nazariy darslar,
                amaliy ishlanmalar, interaktiv topshiriqlar va mavzular bo‘yicha
                muammoli savollarni forumlar orqali ochiq muhokama qilish
                imkoniyati.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
