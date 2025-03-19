import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NavmenuList } from '../utils/constant'
import { FaUser } from 'react-icons/fa'

export default function Header () {
  const location = useLocation()
  console.log(location)

  return (
    <>
      <header className='w-full h-auto flex justify-center items-center bg-[#E2EAFF]'>
        <nav className='w-[80%] h-[95px] flex justify-between items-center'>
          {/* logo */}
          <div>
            <Link to={'/'} className='text-[32px] font-extrabold uppercase'>
              Sayt Nomi
            </Link>
          </div>
          {/* menu list */}
          <div>
            <ul className='flex'>
              {NavmenuList.map((item, index) => {
                // Active holatini aniqlash
                const isActive =
                  (item.link === '/' &&
                    location.pathname === '/' &&
                    !location.hash) || // Faqat home sahifa
                  (item.link.startsWith('#') && location.hash === item.link) // Hash linklar

                return (
                  <li
                    key={item.id}
                    className={`${
                      index === NavmenuList.length - 1 ? 'mr-0' : 'mr-8'
                    }`}
                  >
                    <Link
                      to={item.link}
                      className={`text-[16px] font-normal ${
                        isActive ? 'text-[#13265C]' : 'text-[#464B59]'
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          {/* login button */}
          <div>
            <button className='w-[46px] h-[46px] flex justify-center items-center rounded-full bg-[#13265C] cursor-pointer'>
              <FaUser className='text-[#C0D1FF] text-[18px]' />
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}
