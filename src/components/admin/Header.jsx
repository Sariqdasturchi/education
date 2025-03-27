import React from 'react'
import {Layout} from 'antd'
import { IoIosArrowBack } from "react-icons/io";

const Header = ( { title, addbtn, backbtn} ) => {
  const {Header} = Layout;
  return (
    <Header
        style={{
            height: '100px',
            padding: '28px 50px',
            background: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #E7E7E7'
        }}
    >
        <div className='flex items-center gap-3'>
        {backbtn && 
        (
        <button className="p-1 border_stroke rounded-sm cursor-pointer hover:opacity-50" onClick={()=>navigate('/admin/maqolalarim')}>
              <IoIosArrowBack color="#13265C"/>
        </button>
        )}
        
        <p className='text-[#13265C] h-[44px] flex items-center font-bold text-[32px]'>{title}</p>
        </div>
        
        { addbtn && (
            <button className='bg-[#13265C] h-[44px] flex items-center px-12 rounded-[50px] cursor-pointer hover:bg-[#BBBBBB] transition text-white'>{addbtn}</button>)
        }
    </Header>
  )
}

export default Header