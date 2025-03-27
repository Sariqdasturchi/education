import React from "react";
import PageHeader from "../components/PageHeader";
import ArticleCard from "../components/ArticleCard";
import RecommendedCard from "../components/RecommendedCard";
const Articles = () => {
  return (
    
    <>
        <PageHeader title="Maqolalarim" />
        {/* Page Content */}
        <main className="flex-1 flex pt-13 pb-13 bg-gray-100 justify-center">
            <div className='hidden sm:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[18px] max-w-8xl'>
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </div>
            <div className="sm:hidden flex flex-col gap-3">
              <RecommendedCard />
              <RecommendedCard />
              <RecommendedCard />
            </div>
        </main>
    
    </>
  );
};

export default Articles;