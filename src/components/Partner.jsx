import React from 'react';
import PartnerIcons from "../assets/img/PartnerIcon.svg";
import bit from "../assets/img/Bitmap.svg";
import Digital from '../assets/img/Digital.svg';
import Travel from '../assets/img/Travel.svg';
import Vortex from '../assets/img/Vortex.svg';


const Partner = () => {
    return (
        <section id="partner " className='partner'>
            <div className='py-5 mb-16  mt-[200px] max-md:mt-6'>
                <div className="flex justify-center items-center">
                    <img src={PartnerIcons} alt="ContactIcon" width={40} height={40}/> <h2
                    className="text-[#B66A20] pl-3 font-[300] uppercase font-[Jost] py-[30px] text-[22px]">партнеры</h2>
                </div>
                <div className='partner-img flex flex-wrap justify-evenly pt-[20px]'>
                    <img className='mb-[10px]' src={Digital} alt=""/>
                    <img className='mb-[10px]' src={bit} alt=""/>
                    <img className='mb-[15px]' src={Vortex} alt=""/>
                </div>
                <div className=' partner-images flex flex-wrap justify-evenly'>
                    <img src={Travel} alt=""/>
                    <img src={Vortex} alt=""/>
                    <img src={bit} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Partner;