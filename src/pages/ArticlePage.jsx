import React from "react";
import PageHeader from "../components/PageHeader";
import RecommendedCard from "../components/RecommendedCard";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate,useParams } from "react-router-dom";
import { ArticlesData } from "../utils/constant";
import image from "../assets/default.png";
const ArticlePage = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const returnBtn = (
    <button className="p-1 border_stroke rounded-sm cursor-pointer hover:opacity-50" onClick={()=>navigate('/dashboard/articles')}>
      <IoIosArrowBack color="#13265C"/>
    </button>
  )
  const article = ArticlesData.find((article) => {
    if (article.id===id){
      return article
    }
    return {id:1, image:'default.png', title:"couldn't find", text:'.....'}
  }, );

  return (
    
    <>
        <PageHeader title="Teskari Proporsional Miqdorlar" other={returnBtn} />
        <main className="flex flex-wrap justify-evenly p-10 gap-y-5">
          <div className="flex flex-col max-w-[632px] gap-5">
            <h1 className="text-2xl font-bold ">{article.title}</h1>
            <img src={image} alt="Article image" />
            <p className="text-lg font-medium">{article.text}</p>
            <div className="flex w-full justify-between">
              <button className='bg-[#E2EAFF] text-[#3857AF] px-12 py-3 rounded-[10px] [box-shadow: 0px 0px 11.95px 0px #FFFFFF5] hover:opacity-75 cursor-pointer w-[49%]' onClick={()=>navigate(`/dashboard/articles/${1}`)}>Oldingi</button>
              <button className='bg-[#3857AF] text-white px-12 py-3 rounded-[10px] [box-shadow: 0px 0px 11.95px 0px #FFFFFF5] hover:opacity-75 cursor-pointer w-[49%]' onClick={()=>navigate(`/dashboard/articles/${1}`)}>Keyingi</button>
            </div>
          </div>
          <section className="flex flex-col border_stroke rounded-lg py-3 bg-white">
            <div className="flex border-b-1 border-[#E7E7E7] justify-center items-center p-5"><h1 className="text-2xl font-medium">Tavsiya etiladigan maqolalar</h1></div>
            
            <div className="flex flex-col gap-2 p-3">
              <RecommendedCard />
              <RecommendedCard />
              <RecommendedCard />
            </div>

          </section>
        </main>
    </>
  );
};

export default ArticlePage;
