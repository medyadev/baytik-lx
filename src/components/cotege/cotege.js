import React from 'react';
import rgc from '../../assets/img/wedfc.png'
import erd from '../../assets/img/Rectangle 96.png'
import {AiTwotoneHome} from "react-icons/ai";
const Cotege = () => {
    
    return (

        <section className='mt-[200px]'>
            <div className="container">
                <div className='flex justify-between'>
                    <div>
                        <img src={rgc} alt=""/>
                        <div className='flex'>
                            <img className=' mt-[10px]' src={erd} alt=""/>
                            <img className='ml-[14px] mt-[10px]' src={erd} alt=""/>
                            <img className='ml-[14px] mt-[10px]' src={erd} alt=""/>
                            <img className='ml-[14px] mt-[10px]' src={erd} alt=""/>
                            <img className='ml-[14px] mt-[10px]' src={erd} alt=""/>
                            <img className='ml-[14px] mt-[10px]' src={erd} alt=""/>
                        </div>
                    </div>
                   <div className='ml-[100px]'>
                       <div className='flex items-center '>
                           <div style={{
                               border:'1px solid #DDCD9D'
                           }} className='w-[45px] h-[45px] rounded-full flex justify-center items-center'>
                               <AiTwotoneHome className='text-[#B66A20]'/>
                           </div>

                           <h1 className='text-[#B66A20;] text-[22px] pl-[10px] font-[300] font-jost uppercase'>Коттеджи</h1>
                       </div>
                       <div>
                           <h1 className='leading-[70px] py-[50px]  w-[330px] text-[#252525] text-[62px] font-[300] font-jost'><span className='text-[#C9AE5D] text-[62px] font-[300] font-jost'>Комфорт</span> для счастья</h1>
                           <p className='  w-[497px] text-[#252525] text-[22px] font-[300]'>Основная деятельность компании - строительство и реализация жилой недвижимости для вашего счастья .</p>
                           <p className='text-[#252525] text-[22px] font-[300]'>Все для комфортного проживания и отдыха. </p>

                       </div>
                   </div>
                     </div>
            </div>
        </section>
    );
};

export default Cotege;