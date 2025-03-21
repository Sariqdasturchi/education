import React from 'react'
import { FaRegCalendar } from "react-icons/fa";
import image from "../assets/article-image.png";
import { useNavigate } from 'react-router-dom';
function RecommendedCard() {
  const navigate = useNavigate();
  return (
    <>
        <section className=' p-2 bg-white border_stroke rounded-[10px] cursor-pointer max-h-[100px]' onClick={()=>navigate(`/dashboard/articles/${1}`)}>
            <div className='flex gap-2 p-1'>
                <div className='overflow-hidden max-w-[70px] max-h-[70px] rounded-2xl '>
                    <img src={image} alt="Article image" className='w-full h-full object-cover'/>
                </div>
            
                <div className='flex flex-col gap-2'>
                    <p className='font-semibold text-base'>Teskari proporsional miqdorlar</p>
                    <p className='text-[#464B59] text-sm'>
                    ikki miqdor orasidagi eng sodda bog'lani...
                    </p>
                    <p className='flex items-center gap-1 text-sm text-[#464B59]'>
                        <FaRegCalendar color='blue' /> May 23, 2025
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default RecommendedCard