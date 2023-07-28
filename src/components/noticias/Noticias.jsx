import axios from "axios";
import { useState } from "react";
import NoticiasCard from "./card/noticiasCard";
import FormNoticias from "../formNoticias/FormNoticias";

const Noticias = () => {

  return (
    <>
      <div className="noticias__separator"></div>
      <h2 className="noticias__title">ICA Noticias</h2>
      <div className="noticias__container">

        <div className="noticias__social">
          <div className="noticias__facebook-container">
              {
                <NoticiasCard
                  />
              } 
          </div>
      </div>
        
      </div>
    </>
  );
};

export default Noticias;


