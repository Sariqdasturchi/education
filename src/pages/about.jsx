import React from 'react'
import { GoArrowRight } from 'react-icons/go'
import { AboutSkilList } from '../utils/constant'

export default function About () {
  return (
    <section
      className='flex bg-[#F4F7FF] h-auto justify-center w-full items-center'
      id='about'
    >
      <div className='flex flex-col h-auto justify-center w-[80%] items-center py-16'>
        <div className='flex h-[108px] justify-between w-full items-center mb-10'>
          <div className='w-[30%]'>
            <h2 className='text-[#13265C] text-[36px] font-semibold'>
              Darsliklar muallifi{' '}
              <span className='text-[#3857AF]'>bilan tanishing</span>
            </h2>
          </div>
          <div>
            <button className='bg-[#13265C] h-[44px] rounded-[50px] text-[16px] text-white w-[241px] cursor-pointer duration-500 font-normal hover:bg-[#BBBBBB] transform'>
              Darslarni ko’rish <GoArrowRight className='text-[20px] inline' />
            </button>
          </div>
        </div>
        <div className='flex h-auto w-full items-center mb-5'>
          <div className='h-[360px] w-[285px] aboutuser'></div>
          <div className='flex h-[360px] justify-center w-[70%] items-center'>
            <ul className='flex flex-col justify-center'>
              {AboutSkilList.map((item, index) => (
                <li
                  key={item.id}
                  className={`${
                    index === AboutSkilList.length - 5 ? 'mt-0' : 'mt-10'
                  } flex items-center`}
                >
                  <span>
                    <img src={item.icon} alt={item.title} />
                  </span>
                  <p className='text-[24px] font-normal ml-2'>{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
