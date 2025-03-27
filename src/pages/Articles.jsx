import React from "react";
import PageHeader from "../components/PageHeader";
import { useSelector, useDispatch } from "react-redux";

const Articles = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  return (
    <div>
   {isOpen?<PageHeader title="Maqolalar" /> : null }   
      <h1 className="text-2xl font-bold">Maqolalar sahifasi</h1>
    </div>
  );
};

export default Articles;
