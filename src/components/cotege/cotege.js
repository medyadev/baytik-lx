import React, {useState} from 'react';
import rgc from '../../assets/img/wedfc.png'
import erd from '../../assets/img/Rectangle 96.png'
import {AiTwotoneHome} from "react-icons/ai";
import q from '../../assets/img/8.png'
import w from '../../assets/img/10.png'
import e from '../../assets/img/13.png'
import r from '../../assets/img/14.png'
import t from '../../assets/img/15.png'
import y from '../../assets/img/16.png'
import cer from '../../assets/img/Vector.png'

const Cotege = () => {
    const [curentImg, setCurentImg] = useState(1)

    const img = [
        {
            id: 1,
            img: rgc
        },
        {
            id: 2,
            img: q
        },
        {
            id: 3,
            img: w
        },
        {
            id: 4,
            img: e
        },
        {
            id: 5,
            img: r
        },
        {
            id:6,
            img:t
        },
        {
            id:7,
            img:y
        },
    ]
    const [click, setClick] = useState(img[0])

    return (

        <section className='mt-[200px]'>
            <div className="container">
                <div className='flex justify-between'>
                    <div>
                        <img width={780} height={390} src={click.img} alt=""/>

                        <div className='flex gap-2 my-[8px]'>
                            {
                                img.map((element, index) => (
                                    <div key={index} className='flex justify-around w-[100px] '>
                                        <div className=''  onClick={() => setClick(element)}>
                                            <img width={115} src={element.img} alt=""/>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className='ml-[100px]'>
                        <div className='flex items-center '>
                            <div style={{
                                border: '1px solid #DDCD9D'
                            }} className='w-[45px] h-[45px] rounded-full flex justify-center items-center'>
                                <AiTwotoneHome className='text-[#B66A20]'/>
                            </div>

                            <h1 className='text-[#B66A20;] text-[22px] pl-[10px] font-[300] font-jost uppercase'>Коттеджи</h1>
                        </div>
                        <div>
                            <h1 className='leading-[70px] py-[50px]  w-[330px] text-[#252525] text-[62px] font-[300] font-jost'>
                                <span className='text-[#C9AE5D] text-[62px] font-[300] font-jost'>Комфорт</span> для
                                счастья</h1>
                            <p className='  w-[497px] text-[#252525] text-[22px] font-[300]'>Основная деятельность
                                компании - строительство и реализация жилой недвижимости для вашего счастья .</p>
                            <p className='text-[#252525] text-[22px] font-[300]'>Все для комфортного проживания и
                                отдыха. </p>

                        </div>
                        <div className='flex justify-between w-[200px] mt-[70px]'>
                            <button disabled={click.id === img[0].id} onClick={() => {
                                setClick(img.find((item) => item.id === click.id - 1))
                            }}><svg width="20" height="39" viewBox="0 0 20 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 1L1 19.6529L19 38" stroke="black"/>
                            </svg>

                            </button>
                            <button disabled={click.id === img[img.length - 1].id} onClick={() => {
                                setClick(img.find((item) => item.id === click.id + 1))
                            }}><img src={cer} alt=""/>

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cotege;