import React from 'react'
import { FaRegCalendar } from "react-icons/fa";
import { RiEditBoxFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import image from "../../assets/article-image.png";
import { useNavigate } from 'react-router-dom';
function MaqolaCard() {
  const navigate = useNavigate();
  return (
    <>
        <section className='w-[343px] p-4 bg-white rounded-[10px]'>
            <div className='flex flex-col gap-6'>
                <div className='overflow-hidden rounded-t-lg'>
                    <img src={image} alt="Article image" className='w-full h-full object-cover' />
                </div>
            
                <div className='flex flex-col gap-5'>
                    <p className='font-semibold text-base'>Teskari proporsional miqdorlar</p>
                    <p className='flex items-center gap-1 text-sm text-[#464B59]'>
                        <FaRegCalendar color='blue' /> May 23, 2025
                    </p>
                    <p className='text-[#464B59] text-sm'>
                    Teskari proporsional miqdorlar - ikki miqdor orasidagi eng sodda bog'lani...
                    </p>
                </div>
                <div className='flex flex-col gap-3 '>
                    <button className='flex gap-3 items-center justify-center bg-[#C2D2FF] text-[#3857AF] px-12 py-3 rounded-[10px] [box-shadow: 0px 0px 11.95px 0px #FFFFFF5] hover:opacity-75 cursor-pointer'>
                        Maqolani tahrirlash
                        <RiEditBoxFill />
                    </button>
                    <button className='flex gap-3 items-center justify-center bg-[#FFD0D0] text-[#FF5858] px-12 py-3 rounded-[10px] [box-shadow: 0px 0px 11.95px 0px #FFFFFF5] hover:opacity-75 cursor-pointer'>
                        Maqolani o'chirish
                        <MdDelete  />
                    </button>
                </div>
            </div>
        </section>
    </>
  )
}

export default  MaqolaCard