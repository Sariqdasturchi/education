import React from "react";
import MaqolaCard from "../../components/admin/MaqolaCard";
export default function Maqolalarim() {
  return (
    <main className="flex-1 flex pt-13 pb-13 justify-center">
        <div className='hidden sm:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[18px] max-w-8xl'>
            <MaqolaCard />
            <MaqolaCard />
            <MaqolaCard />
            <MaqolaCard />
        </div>
        {/* <div className="sm:hidden flex flex-col gap-3">
          <RecommendedCard />
          <RecommendedCard />
          <RecommendedCard />
        </div> */}
    </main>
  )
}
