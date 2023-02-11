import ArrowLinerOrange from "../../assets/svg/ArrowLinerOrange";
import "../objects/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import derf1 from "../../assets/img/Rectangle 80 (1).png";
import derf2 from "../../assets/img/Rectangle 80 (2).png";
import derf3 from "../../assets/img/Rectangle 80 (3).png";
import vil from "../../assets/img/villa 250 3.png";
import wil from "../../assets/img/villa 250 1.png";
import "swiper/css";
import "swiper/css/effect-creative";
import { Autoplay, EffectCreative, Navigation, Pagination } from "swiper";
import { useState } from "react";
import wrt from "../../assets/img/villa 250 3.png";

export default function FristTab() {
  const [showModal, setShowModal] = useState(false);
  const lists = [
    {
      title: "Площадь застройки:",
      subtitle: "250 м2",
      svg: <ArrowLinerOrange />,
    },
    {
      title: "Материал стен:",
      subtitle: "Газобетон",
      svg: <ArrowLinerOrange />,
    },
    {
      title: "Материал кровли:",
      subtitle: "Эксплуатируемая",
      svg: <ArrowLinerOrange />,
    },
    {
      title: "Количество этажей:",
      subtitle: "2 этажа",
      svg: <ArrowLinerOrange />,
    },
  ];

  return (
    <>
      <div className="container  ">
        <div className="flex justify-around items-center frist-tap ">
          <div className="">
            <div>
              <Swiper
                grabCursor={true}
                effect={"creative"}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                  },
                  next: {
                    translate: ["100%", 0, 0],
                  },
                  autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                  },
                  pagination: {
                    clickable: true,
                  },
                  navigation: true,
                }}
                modules={[EffectCreative, Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img className="first-images" src={derf1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="first-images" src={derf1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="first-images" src={derf2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="first-images" src={derf3} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className=" dap flex flex-wrap max-w-[500px]  pt-[50px] gap-[40px]">
              {lists.map((element, index) => (
                <div key={index}>
                  <div className="aza flex items-center w-[223px]">
                    <div className="mr-[13px]">{element.svg}</div>
                    <div className="">
                      <h1 className="mat text-[18px] font-jost font-[500] text-[#252525]">
                        {element.title}
                      </h1>
                      <p className=" pat text-[18px] font-[300] font-jost text-start">
                        {element.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="first-hr"
            style={{
              border: "1px solid #E2E2E2",
              height: "600px",
              rotate: "180deg",
            }}
          ></div>

          <div className=" akna ml-[100px]">
            <div>
              <Swiper
                grabCursor={true}
                effect={"creative"}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                  },
                  next: {
                    translate: ["100%", 0, 0],
                  },
                  autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                  },
                  pagination: {
                    clickable: true,
                  },
                  navigation: true,
                }}
                modules={[EffectCreative, Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img className="first-red" src={vil} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="first-red" src={wil} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className=" aziret flex items-center max-w-[500px] mt-[40px] gap-[20px]">
              <svg
                className="aziret-beka"
                width="50"
                height="37"
                viewBox="0 0 50 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M49.3482 3.01545C49.4366 2.59644 49.1685 2.18515 48.7495 2.09679L41.9214 0.656965C41.5024 0.56861 41.0911 0.836657 41.0027 1.25566C40.9144 1.67467 41.1824 2.08597 41.6014 2.17432L47.6709 3.45417L46.391 9.52359C46.3027 9.9426 46.5707 10.3539 46.9897 10.4423C47.4087 10.5306 47.82 10.2626 47.9084 9.84356L49.3482 3.01545ZM0.241321 33.71C0.152967 34.129 0.421013 34.5403 0.840019 34.6286L7.66813 36.0685C8.08713 36.1568 8.49843 35.8888 8.58679 35.4698C8.67514 35.0508 8.40709 34.6395 7.98809 34.5511L1.91866 33.2713L3.1985 27.2018C3.28686 26.7828 3.01881 26.3715 2.59981 26.2832C2.1808 26.1948 1.7695 26.4629 1.68115 26.8819L0.241321 33.71ZM48.7495 34.6286C49.1685 34.5403 49.4366 34.129 49.3482 33.71L47.9084 26.8819C47.82 26.4629 47.4087 26.1948 46.9897 26.2832C46.5707 26.3715 46.3027 26.7828 46.391 27.2018L47.6709 33.2713L41.6014 34.5511C41.1824 34.6395 40.9144 35.0508 41.0027 35.4698C41.0911 35.8888 41.5024 36.1568 41.9214 36.0685L48.7495 34.6286ZM0.840019 2.09679C0.421013 2.18515 0.152967 2.59644 0.241321 3.01545L1.68115 9.84356C1.7695 10.2626 2.1808 10.5306 2.59981 10.4423C3.01881 10.3539 3.28686 9.9426 3.1985 9.52359L1.91866 3.45417L7.98809 2.17432C8.40709 2.08597 8.67514 1.67467 8.58679 1.25566C8.49843 0.836657 8.08713 0.56861 7.66813 0.656965L0.840019 2.09679ZM48.1662 2.20588L24.3714 17.7131L25.2181 19.0123L49.0129 3.50506L48.1662 2.20588ZM24.3714 17.7131L0.576657 33.2204L1.42334 34.5196L25.2181 19.0123L24.3714 17.7131ZM24.3714 19.0123L48.1662 34.5196L49.0129 33.2204L25.2181 17.7131L24.3714 19.0123ZM25.2181 17.7131L1.42334 2.20588L0.576657 3.50506L24.3714 19.0123L25.2181 17.7131Z"
                  fill="#009EE3"
                />
              </svg>
              <h1 className=" object-h1 text-[37px] mx-[10px] font-[600] font-OpenSans">
                250p
              </h1>
              <p className=" first-black text-[21px] px-[10px] font-[600] font-OpenSans">
                M2
              </p>
              <button
                onClick={() => setShowModal(true)}
                className=" btn-first bg-[#343232]  w-[200px] h-[50px] text-[#fff] font-[200] text-[18px] flex items-center justify-center"
              >
                Подробнее
                <svg
                  className="jyky ml-[14px]"
                  width="44"
                  height="8"
                  viewBox="0 0 44 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43.3536 4.35355C43.5488 4.15829 43.5488 3.84171 43.3536 3.64645L40.1716 0.464466C39.9763 0.269204 39.6597 0.269204 39.4645 0.464466C39.2692 0.659728 39.2692 0.976311 39.4645 1.17157L42.2929 4L39.4645 6.82843C39.2692 7.02369 39.2692 7.34027 39.4645 7.53553C39.6597 7.7308 39.9763 7.7308 40.1716 7.53553L43.3536 4.35355ZM0 4.5H43V3.5H0V4.5Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            {showModal ? (
              <div
                onClick={() => setShowModal(false)}
                className="top-0 left-0  w-[100%] fixed z-[999] h-[100vh]"
                style={{
                    backdropFilter:"blur(5px)"
                }}
              >
                <div className="fixed modal-line top-[7%] left-[25%] z-[10] shadow-2xl transition-[10s]">
                  <div className="bg-[#FFFFFF] w-[800px] h-[800px] rounded-2xl">
                    <div className="flex justify-end">
                      <button
                        onClick={() => setShowModal(false)}
                        className="text-[#000000] text-[14px] font-[200] m-4 "
                      >
                        Закрыть
                      </button>
                    </div>
                    <div className="flex justify-center items-center">
                      <div
                        style={{
                          border: "3px solid #D19D4E",
                        }}
                        className="w-[45px]"
                      ></div>
                      <h1 className="font-jost text-[#343232;] font-[400]">
                        1 этаж
                      </h1>
                    </div>
                    <div className="flex justify-center items-center mt-[50px]">
                      <img src={wrt} alt="" />
                    </div>
                    <div className="flex justify-around items-center pt-[40px]">
                      <div>
                        <h1 className="text-[14px] font-[300] font-jost">
                          № 1
                        </h1>
                        <h1 className="text-[14px]  font-[300] font-jost">
                          ОБЩАЯ ПЛОЩАДЬ 290,71 м2 <br />
                          1. Холл - 22,11 м2 <br />
                          2. Гостиная - 62,61 м2 <br />
                          3. Кухня - 35,91 м2
                          <br />
                          4. Санузел - 3,08 м2
                          <br />
                          5. Гардеробная - 4,46 м2
                          <br />
                          6.Терраса - 40,26 м2
                          <br />
                          S=Общ.1-эт. 168,43 м2
                        </h1>
                      </div>
                      <div>
                        <h2 className="text-[14px] font-[300] font-jost">
                          № 2
                        </h2>
                        <h1 className="text-[14px] font-[300] font-jost">
                          ОБЩАЯ ПЛОЩАДЬ 290,71 м2 <br />
                          1. Холл - 22,11 м2 <br />
                          2. Гостиная - 62,61 м2 <br />
                          3. Кухня - 35,91 м2 <br />
                          4. Санузел - 3,08 м2 <br />
                          5. Гардеробная - 4,46 м2 <br />
                          6.Терраса - 40,26 м2 <br />
                          S=Общ.1-эт. 168,43 м2 <br />
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <hr className=" first-hr2 w-[100%] text-[#E2E2E2]" />
      </div>
    </>
  );
}
