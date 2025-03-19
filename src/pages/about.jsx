import React from 'react'
import { GoArrowRight } from 'react-icons/go'
import { AboutSkilList } from '../utils/constant'

export default function About () {
  return (
    <section
      className='w-full h-auto flex justify-center items-center bg-[#F4F7FF]'
      id='about'
    >
      <div className='w-[80%] h-auto flex flex-col justify-center items-center py-16'>
        <div className='w-full h-[108px] flex justify-between items-center mb-10'>
          <div className='w-[25%]'>
            <h2 className='text-[36px] font-semibold text-[#13265C]'>
              Darsliklar muallifi{' '}
              <span className='text-[#3857AF]'>bilan tanishing</span>
            </h2>
          </div>
          <div>
            <button className='w-[241px] h-[44px] rounded-[50px] bg-[#13265C] text-[16px] font-normal text-white cursor-pointer hover:bg-[#BBBBBB] transform duration-500'>
              Darslarni ko’rish <GoArrowRight className='inline text-[20px]' />
            </button>
          </div>
        </div>
        <div className='w-full h-auto flex items-center mb-5'>
          <div className='w-[285px] h-[360px] aboutuser'></div>
          <div className='w-[70%] h-[360px] flex justify-center items-center'>
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
