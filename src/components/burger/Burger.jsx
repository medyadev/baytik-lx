import React, { useState } from "react";
import MobileMenu from "./ModileMenu";
import '../hero/media.scss'
import "./style.scss";

export default function Burger() {
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <div className=" burger fixed w-[100%] z-[999] bg-[#C9AE5D] max-w-[100px] h-[100%]">
      {<MobileMenu className={openBurger ? "transform" : ""} />}
      <button
        onClick={() => setOpenBurger(!openBurger)}
        className={`burger-button ${openBurger ? "active" : ""} ml-auto`}
      >
        <div className="burger-button-bottom w-[25px] rounded-[10px] ml-auto h-[2px] text-white"></div>

        <div className="burger-button-top w-[25px] rounded-[10px] ml-auto h-[2px] text-white"></div>
      </button>
    </div>
  );
}