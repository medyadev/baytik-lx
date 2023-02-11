import React, {useEffect, useState} from 'react';
import wer from '../../assets/img/wer.png'
import dxc from '../../assets/img/wertyu.png'
import there from '../../assets/img/3.png'
import foou from '../../assets/img/4.png'
import fave from '../../assets/img/5.png'
import six from '../../assets/img/6.png'
import 'aos/dist/aos.css';
import Aos from 'aos';
const Administration = () => {
    const [bigImg, setBigImg ] = useState(wer)


    const images = [
        {
            id:1,
            img: wer
        },
        {
            id:2,
            img: dxc
        },
        {
            id:3,
            img: there
        },
        {
            id:4,
            img:  six
        },
        {
            id:5,
            img:  fave
        }
    ]

    useEffect(() => {
        Aos.init()
    },[]) 

    
    return (
        <section id='admin' className=' admin mt-[200px]'>
            <div className="container">
                <div className='flex justify-around administration-group'>
                    <div  data-aos-duration="1000" data-aos="zoom-in"  className='afmons'>
                        <div>
                            <img src={bigImg} alt="" className='w-[700px] h-[470] object-cover'/>
                        </div>
                       <div className='flex cursor-pointer '>
                           {
                               images.map((el,idx) => (
                                   <div className='bakyt flex justify-between w-[144px] mt-4'>

                                       <div onClick={() => setBigImg(el.img)}>
                                           <img width={125} height={75}  src={el.img} alt=""/>
                                       </div>
                                   </div>
                               ))
                           }
                       </div>

                    </div>
                    <div  data-aos="zoom-in-up"   data-aos-duration="1000" className='adminstaration-red'>
                        <div className='flex items-center pt-[60px]'>
                            <div style={{
                                border: '1px solid red'
                            }
                            } className='w-[45px] h-[45px] rounded-full flex justify-center items-center'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M22 22.7069V20.2304C22.5273 19.9223 22.8363 19.3472 22.8 18.7414C22.8 17.8654 22.2629 17.1552 21.6 17.1552C20.9371 17.1552 20.4 17.8654 20.4 18.7414C20.3637 19.3472 20.6727 19.9223 21.2 20.2304V22.7069H18.4V10.6589L16 9.46927V11.6034H17.2V12.3966H16V13.9828H17.2V14.7759H16V16.3621H17.2V17.1552H16V18.7414H17.2V19.5345H16V21.1207H17.2V21.9138H16V22.7069H15.2V6.74724L10.4 5.38796V6.84483H13.2V7.63793H10.4V9.22414H13.2V10.0172H10.4V11.6034H13.2V12.3966H10.4V13.9828H13.2V14.7759H10.4V16.3621H13.2V17.1552H10.4V18.7414H13.2V19.5345H10.4V21.1207H13.2V21.9138H10.4V22.7069H9.6V0.5H2.4V2.08621H6V2.87931H2.4V4.46552H6V5.25862H2.4V6.84483H6V7.63793H2.4V9.22414H6V10.0172H2.4V11.6034H6V12.3966H2.4V13.9828H6V14.7759H2.4V16.3621H6V17.1552H2.4V18.7414H6V19.5345H2.4V21.1207H6V21.9138H2.4V22.7069H0V23.5H24V22.7069H22Z"
                                          fill="#B66A20"/>
                                </svg>

                            </div>
                            <h1 className='adminstartion pl-[10px] font-[Spartan] text-[#B66A20] tracking-[3px]  text-center uppercase text-[18px] font-[400]'>Administration</h1>
                        </div>
                        <div>
                            <h1 className=' admon text-[ #252525]  text-[48px] font-[300] font-[Spartan] pt-[40px]'>Customization</h1>
                            <div className='flex pt-[30px] '>
                                <div className='w-[4px] h-[64px] bg-[#C9AE5D]'></div>
                                <p className=' desc-red w-[345px] font-[Spartan] pl-[12px] font-[400]  text-[20px]'>The Ad
                                    Personam customisation program is for the Huracán and Aventador</p>
                            </div>
                            <h6 style={{
                                color: 'rgba(51, 51, 51, 0.5)'
                            }
                            } className='admin-h6 text-[16px] font-[Spartan] font-[400] pt-[30px]  w-[340px]'>Customers wishing
                                to take advantage of the customisation program can design their own vehicle directly
                                with Ad Personam Studio.</h6>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Administration;