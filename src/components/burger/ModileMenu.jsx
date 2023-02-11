import "./style.scss";
import {AiFillInstagram, AiFillTwitterCircle,} from "react-icons/ai";
import { FaFacebook} from 'react-icons/fa'
import right from '../../assets/img/Rectangle 3.svg'
export default function MobileMenu({className,setOpenBurger}) {
    
    console.log(setOpenBurger)
    return (
     <div className="w-full"> 
           <div className={`mobile-menu ${className} h-[100%] w-[80%]  bg-[#C9AE5D] left-0 right-0 fixed z-[999] pt-[120px] `}>
            <div className=" mx-auto w-[900px]   ">
                <div className=" burger-adap flex justify-between items-center ml-[250px]">
                  <div>
                      <nav className='flex flex-col'>
                          <a onClick={() => setOpenBurger(false)} className='pt-[20px] font-[Jost] text-white text-3xl font-light leading-[50px]'  href="#about">Главная</a>
                          <a onClick={() => setOpenBurger(false)} className='pt-[20px] font-[Jost] text-white text-3xl font-light leading-[50px]'  href="#admin">Administration</a>
                          <a onClick={() => setOpenBurger(false)} className='pt-[20px] font-[Jost] text-white text-3xl font-light leading-[50px]'  href="#object">Планировки</a>
                          <a onClick={() => setOpenBurger(false)} className='pt-[20px] font-[Jost] text-white text-3xl font-light leading-[50px]'  href="#cotege">Коттеджи</a>
                          <a onClick={() => setOpenBurger(false)} className='pt-[20px] font-[Jost] text-white text-3xl font-light leading-[50px]'  href="#about">О Компании</a>
                          <a onClick={() => setOpenBurger(false)} className='pt-[20px] font-[Jost] text-white text-3xl font-light leading-[50px]'  href="#contact"> Контакты</a>
                          <a onClick={() => setOpenBurger(false)} className='pt-[20px] font-[Jost] text-white text-3xl font-light leading-[50px]'  href="#partner"> Партнеры</a>



                      </nav>
                      <div className='flex justify-between items-center w-[200px] pt-[130px]'>
                        <div className='w-[45px] bg-[#252525] rounded-[50%] h-[45px] flex justify-center items-center'>  <FaFacebook className='text-[24px] text-white' /></div>
                        <div className='w-[45px] bg-[#252525] rounded-[50%] h-[45px] flex justify-center items-center'>  <AiFillTwitterCircle className='text-[24px] text-white' /></div>
                        <div className='w-[45px] bg-[#252525] rounded-[50%] h-[45px] flex justify-center items-center'>  <AiFillInstagram className='text-[24px] text-white' /></div>
                      </div>
                  </div>
                    <img className='mt-[-109px]' src={right} alt=""/>
                    <div className='flex flex-col mt-[-150px] ml-[-40px]'>
                        <a className='text-[20px]  text-white pt-[15px]font-light leading-[50px] pl-[50px]' href="src/components/burger#">+312(0706) 14-15-10</a>
                        <a className='text-[20px]  text-white pt-[15px]font-light leading-[50px] pl-[50px]' href="src/components/burger#">+996(0706) 14-15-10</a>
                        <a className='text-[20px]  text-white pt-[15px]font-light leading-[50px] pl-[50px]' href="src/components/burger#">+996(0706) 14-15-10</a>
                        <a className='text-[20px]  text-white pt-[15px]font-light leading-[50px] pl-[50px]' href="src/components/burger#">+996(0706) 14-15-10</a>
                        <a className='text-[20px]  text-white pt-[15px]font-light leading-[50px] pl-[50px]' href="src/components/burger#">+312(0706) 14-15-10</a>
                    </div>
                </div>
            </div>
        </div>
     </div>
    );
}
