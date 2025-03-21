import { GoArrowRight } from 'react-icons/go'

export default function Home () {
  return (
    <section id='home' className='flex bg-[#E2EAFF] h-auto justify-center w-full items-center'>
      <div className='flex flex-col h-dvh justify-around w-[80%] items-center'>
        {/* user block */}
        <div className='h-[285px] w-full'>
          <div className='flex h-[285px] justify-around w-[745px] items-center userbacground'>
            <div className='h-[200px] rounded-full w-[200px] homeuser'></div>
            <div className='h-[72px] w-[303px]'>
              <p className='text-[16px] font-normal uppercase'>
                Fanlar Doktori
              </p>
              <h1 className='text-[#13265C] text-[32px] font-semibold'>
                Ahmadjon Sobirov
              </h1>
            </div>
          </div>
        </div>
        <div className='flex h-auto justify-between w-full items-center mt-[-100px]'>
          <div className='h-[252px] w-1/2 py-5'>
            <div className='h-auto w-full mb-4'>
              <p className='text-[#464B59] text-[16px] font-medium uppercase'>
                Matematikani o‘qitish metodikasi bulutli texnologiya asosida
              </p>
            </div>
            <div className='h-auto w-[80%] mb-4'>
              <h1 className='text-[#13265C] text-[32px] font-semibold'>
                Matematikani o‘qitish metodikasi fanini bulutli texnologiya
                asosida o‘qitish tizimi
              </h1>
            </div>
            <div>
              <button className='bg-[#13265C] h-[44px] rounded-[50px] text-[16px] text-white w-[241px] cursor-pointer duration-500 font-normal hover:bg-[#BBBBBB] transform'>
                Darslarni ko’rish{' '}
                <GoArrowRight className='text-[20px] inline' />
              </button>
            </div>
          </div>
          <div className='bg-[#C0D1FF] h-[175px] w-[3px]'></div>
          <div className='h-[252px] w-1/2 py-5'>
            <div className='flex h-auto justify-end p-5 w-[80%] items-center'>
              <h4 className='text-[#13265C] text-[24px] font-normal'>
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
