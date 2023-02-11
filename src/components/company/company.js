import React, { useEffect } from 'react';
import bit from '../../assets/img/Bitmap (3).png'
import bur from '../../assets/img/Bitmap (2).png'
import Aos from 'aos';

export default function Company() {

    const list = [
        {
            svg: <svg width="50" height="42" viewBox="0 0 50 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M29.351 0.712501C29.2019 0.831259 28.8522 1.33954 28.5739 1.84199L28.0677 2.75556L27.4718 2.87616C25.6927 3.23621 25.3305 3.43766 25.3305 4.06751C25.3305 4.38233 25.5804 4.73622 26.4768 5.69017L26.9441 6.18755L26.83 7.22441C26.6753 8.63039 26.6789 8.67401 26.9775 8.97641C27.3468 9.3506 27.7428 9.31487 28.8878 8.8041L29.8683 8.36686L30.807 8.8041C32.0648 9.39001 32.5486 9.38742 32.8519 8.79331C32.9891 8.52448 32.9941 8.31741 32.8871 7.35396L32.7621 6.22868L33.4539 5.44089C34.4877 4.26357 34.5586 4.06438 34.1282 3.54627C33.8685 3.23351 33.7854 3.20447 32.1805 2.86493C31.6289 2.74822 31.6199 2.7398 31.174 1.91875C30.4262 0.541922 29.9558 0.230561 29.351 0.712501ZM30.3401 2.81937C30.8382 3.73348 31.0138 3.85893 32.0722 4.05725C32.7884 4.19134 33.0018 4.3047 32.7892 4.43782C32.7281 4.47604 32.4333 4.80553 32.1339 5.1699L31.5898 5.83236L31.6593 6.8351C31.6982 7.39542 31.6874 7.83796 31.6349 7.83796C31.5832 7.83796 31.2236 7.69221 30.8358 7.51407C29.9751 7.11861 29.7679 7.11364 28.9835 7.46959C27.8301 7.99299 27.9222 8.00767 28.0079 7.31391C28.1785 5.93341 28.1635 5.87209 27.4485 5.03258C27.0895 4.6111 26.8138 4.25105 26.8358 4.23258C26.8577 4.21401 27.1874 4.14103 27.5684 4.07032C28.709 3.8586 28.8111 3.78875 29.3421 2.85608C29.6077 2.38968 29.8414 2.00804 29.8615 2.00804C29.8816 2.00804 30.097 2.37316 30.3401 2.81937ZM20.261 5.40558C20.0453 5.49811 19.8186 5.7746 19.5279 6.29983L19.107 7.06009L18.2579 7.23262C17.2475 7.43796 17.0181 7.61189 17.0181 8.17242C17.0181 8.51898 17.1086 8.68038 17.6113 9.23044L18.2043 9.8794L18.1135 10.6706C18.0023 11.639 18.0591 11.9122 18.4299 12.1927C18.7531 12.437 18.924 12.4067 20.002 11.913L20.5882 11.6445L21.4113 12.0112C22.7839 12.6226 23.1703 12.3361 23.0533 10.7938L22.9835 9.8727L23.5704 9.20615C24.1474 8.55093 24.2623 8.23849 24.092 7.78883C23.997 7.53782 23.568 7.34641 22.7623 7.19559L22.0589 7.06387L21.615 6.27338C21.1119 5.37741 20.7969 5.17563 20.261 5.40558ZM38.918 5.34998C38.6366 5.46529 38.4349 5.71435 38.0277 6.44946L37.6904 7.05815L36.972 7.19245C35.3702 7.49205 35.1635 7.99655 36.1586 9.17754L36.7561 9.88674L36.681 10.849C36.6117 11.7346 36.6233 11.8291 36.8267 12.0351C37.205 12.4183 37.4828 12.4144 38.351 12.0137L39.1565 11.6418L39.974 12.0071C40.4237 12.208 40.8653 12.3723 40.9553 12.3723C41.0453 12.3723 41.263 12.2265 41.439 12.0482C41.7496 11.7335 41.7568 11.7028 41.6886 10.9956C41.65 10.5949 41.5972 10.1892 41.5714 10.0942C41.5438 9.992 41.7646 9.6489 42.1115 9.25506C42.8121 8.45949 42.9182 8.14878 42.6261 7.74759C42.462 7.52206 42.2239 7.41216 41.5221 7.23791L40.6273 7.01561L40.2424 6.34107C39.6925 5.37762 39.3944 5.15457 38.918 5.34998ZM21.741 8.16551C22.7552 8.42937 22.7172 8.36762 22.2245 8.95115C21.7864 9.47012 21.786 9.4712 21.838 10.2076L21.8901 10.9448L21.3457 10.6879C20.6664 10.3675 20.5091 10.3679 19.8225 10.6918L19.2698 10.9524L19.3298 10.2274L19.3898 9.50229L18.9365 8.97166C18.425 8.37301 18.3663 8.46705 19.4361 8.1722C19.819 8.06662 19.9311 7.96308 20.2239 7.44465L20.5653 6.84018L20.9304 7.44487C21.241 7.95941 21.3618 8.06683 21.741 8.16551ZM39.4943 7.38646C39.7798 7.95315 40.0076 8.12028 40.7071 8.27639L41.3241 8.41404L40.9595 8.80076C40.4158 9.37759 40.3326 9.60269 40.4153 10.2731C40.4981 10.9447 40.4554 10.9714 39.8238 10.645C39.3321 10.3908 39.0654 10.3752 38.6729 10.5773C38.5146 10.6589 38.2725 10.7608 38.1348 10.8039C37.8919 10.8799 37.8852 10.8652 37.9082 10.3048C37.9439 9.43676 37.938 9.41711 37.4782 8.88799L37.0509 8.39612L37.593 8.27833C38.3546 8.11282 38.4944 8.01501 38.8282 7.41323C38.9904 7.12098 39.1616 6.90592 39.2086 6.9354C39.2556 6.96487 39.3841 7.16784 39.4943 7.38646ZM28.1013 10.8657C25.6811 11.4984 23.7016 13.3802 22.9222 15.7888C22.6458 16.6434 22.6135 16.8879 22.6184 18.0943C22.6231 19.2811 22.6594 19.548 22.9193 20.3075C23.3618 21.6011 23.7783 22.2628 24.7887 23.2778C25.8352 24.3293 26.7678 24.869 28.145 25.2205C31.9956 26.2033 35.9593 23.7858 36.9534 19.848C37.6567 17.0621 36.588 13.912 34.3585 12.2005C32.5492 10.8114 30.2143 10.3134 28.1013 10.8657ZM31.2841 11.9978C33.4661 12.5188 35.2498 14.2992 35.8229 16.5283C36.0335 17.3474 36.0335 18.7332 35.8229 19.5523C35.6527 20.2141 35.0537 21.5491 34.927 21.5491C34.8873 21.5491 34.7141 21.3993 34.5419 21.2162C34.1875 20.8392 32.7308 19.8225 32.5415 19.8201C32.4732 19.8191 32.3509 19.7758 32.2698 19.7238C32.1518 19.6481 32.1882 19.5457 32.4514 19.2126C33.5611 17.8083 33.5293 15.9467 32.3732 14.6126C31.9359 14.108 30.9252 13.5956 30.1816 13.5015C29.3139 13.3917 28.2847 13.7377 27.586 14.374C26.2273 15.6117 26.0482 17.5754 27.1586 19.0616C27.3914 19.3732 27.5668 19.6352 27.5485 19.644C26.6865 20.0523 25.9236 20.5354 25.4378 20.9806C24.9751 21.4046 24.7946 21.5125 24.7157 21.4125C24.2348 20.8042 23.7319 19.0802 23.7319 18.0403C23.7319 17.1708 24.0641 15.8755 24.5019 15.0375C25.2308 13.6426 26.8698 12.3751 28.4441 11.989C29.2168 11.7994 30.4699 11.8033 31.2841 11.9978ZM30.4836 14.7562C31.1274 14.9374 31.8021 15.6385 32.0016 16.3338C32.2493 17.1972 32.0689 17.8769 31.4164 18.5378C30.7668 19.196 30.0925 19.3814 29.2505 19.1335C28.2368 18.8349 27.6333 18.0275 27.6266 16.9607C27.6168 15.4126 29.0061 14.3407 30.4836 14.7562ZM31.2406 20.6347C32.1309 20.8697 32.9929 21.3666 33.5993 21.9947L34.1224 22.5364L33.7047 22.8947C32.437 23.9824 30.324 24.4938 28.6127 24.1271C27.5986 23.9097 25.6502 22.8471 25.6502 22.5114C25.6502 22.3453 26.5152 21.5508 27.0297 21.2444C28.2735 20.5037 29.8685 20.2727 31.2406 20.6347ZM0.926275 21.726C0.497017 21.8973 0.500001 21.8412 0.500001 29.8211C0.500001 36.6688 0.51833 37.5305 0.66742 37.6816C0.914019 37.9313 3.87748 37.9283 4.3986 37.6778C4.84938 37.4611 5.1692 36.9486 5.25658 36.3025C5.30038 35.9787 5.38393 35.788 5.49615 35.7553C5.59099 35.7276 6.22582 35.5806 6.9069 35.4286C8.45822 35.0823 9.81154 35.061 10.9817 35.3641C11.4315 35.4807 14.7602 36.7956 18.3786 38.2861C21.997 39.7766 25.2932 41.0914 25.7035 41.2078C27.2613 41.6496 29.1057 41.5878 30.7055 41.0401C31.6389 40.7205 47.7163 32.8584 48.2779 32.447C49.4862 31.5616 49.8524 29.8959 49.1332 28.5573C48.5837 27.5343 47.6241 26.9471 46.5021 26.9471C46.1416 26.9471 43.8923 27.5347 39.4761 28.7825C35.9035 29.7919 32.9194 30.6178 32.8449 30.6178C32.7705 30.6178 32.6501 30.4726 32.5776 30.2951C32.2698 29.5422 31.9461 29.3785 25.5436 26.7392C22.1734 25.3498 18.9755 24.0527 18.4372 23.8568C15.3467 22.732 12.7484 22.5004 8.22622 22.9465C6.99535 23.0679 5.82843 23.1797 5.63309 23.1948C5.30933 23.22 5.26564 23.1865 5.13914 22.8166C4.81933 21.8816 4.4717 21.7288 2.57809 21.6916C1.75751 21.6754 1.01419 21.6909 0.926275 21.726ZM4.0077 23.1514C4.15306 23.4265 4.15573 36.1846 4.01058 36.4595C3.91531 36.6398 3.77219 36.6637 2.78749 36.6637H1.67225V29.8081V22.9526H2.78749C3.76174 22.9526 3.91595 22.9777 4.0077 23.1514ZM14.6272 24.0896C16.519 24.3742 17.7416 24.8071 24.3181 27.5209C27.8348 28.9721 30.8453 30.2224 31.0079 30.2992C31.4447 30.5058 31.7247 31.0361 31.7242 31.6562C31.7235 32.602 31.139 33.2089 30.2286 33.2089C29.9638 33.2089 27.7601 32.5793 24.709 31.6319C19.2135 29.9256 19.1251 29.9088 19.0684 30.5658C19.0532 30.7428 19.082 30.9518 19.1327 31.0302C19.1832 31.1086 21.5696 31.9019 24.4355 32.793C30.1581 34.5723 30.4381 34.6286 31.348 34.1823C31.6125 34.0526 32.0213 33.7249 32.2566 33.4542C32.6223 33.0331 32.7342 32.7927 32.9507 31.9624C32.9881 31.8185 46.0458 28.1329 46.5144 28.134C47.4864 28.1361 48.3537 29.0212 48.3469 30.0041C48.3442 30.4182 48.0321 31.1405 47.7442 31.3996C47.3901 31.7183 30.8692 39.758 30.0195 40.0251C28.9757 40.3533 27.0095 40.3794 26.0232 40.0779C25.6715 39.9705 22.8421 38.8365 19.7356 37.5578C12.294 34.4949 11.8396 34.3174 10.9463 34.1271C9.73289 33.8685 8.23176 33.9187 6.68098 34.2696L5.34887 34.571L5.32116 29.5546C5.30592 26.7956 5.31999 24.5112 5.35249 24.4783C5.385 24.4453 6.45249 24.313 7.72471 24.1842C10.5513 23.8979 13.1187 23.8628 14.6272 24.0896Z"
                      fill="#343232"/>
            </svg>,
            title: '11 000 +',
            desc: 'Счастливых клиентов'
        },
        {
            svg: <svg width="50" height="47" viewBox="0 0 50 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M2.85028 0.618285C2.61246 0.680461 2.30649 0.881868 2.02302 1.16261C1.66404 1.51813 1.55034 1.71176 1.46076 2.12036C1.38018 2.4882 1.35712 4.15481 1.37884 8.035L1.40918 13.4375L1.64844 13.8598C1.78003 14.092 2.07441 14.4119 2.30266 14.5706L2.71754 14.8592L11.889 14.9065C16.9332 14.9326 21.0811 14.9753 21.1066 15.0013C21.1321 15.0274 21.7613 16.0937 22.5049 17.3708C23.2794 18.701 23.9868 19.804 24.1609 19.9529C24.7261 20.4364 25.5601 20.4138 26.0976 19.9005C26.2718 19.7342 27.0074 18.5745 27.7322 17.3234C28.4572 16.0723 29.0971 15.0173 29.1546 14.979C29.2119 14.9408 31.4844 14.9088 34.2044 14.908L39.1502 14.9065L39.3485 14.6568C39.6117 14.3255 39.599 14.0018 39.3119 13.7175L39.0771 13.4848H33.9967C29.143 13.4848 28.8998 13.4931 28.5492 13.6702C28.0171 13.9391 27.8415 14.1829 26.4363 16.6041C25.7378 17.8078 25.1382 18.7925 25.1039 18.7925C25.0698 18.7925 24.4528 17.779 23.7331 16.5404C22.4328 14.3027 22.0408 13.7782 21.5245 13.5854C21.3416 13.5171 18.3781 13.4848 12.2865 13.4848C4.3242 13.4848 3.29415 13.4683 3.10533 13.3373L2.89258 13.1898V7.75995C2.89258 2.62004 2.90196 2.32186 3.06762 2.17334C3.2039 2.05117 3.43837 2.01648 4.12772 2.01648C4.97833 2.01648 5.0237 2.00567 5.29253 1.73944C5.44642 1.58703 5.57227 1.37055 5.57227 1.25824C5.57227 1.14592 5.44642 0.929448 5.29253 0.777042C5.02149 0.508625 4.98503 0.500284 4.12016 0.509762C3.6292 0.515165 3.05776 0.563976 2.85028 0.618285ZM7.19185 0.777042C7.03796 0.929448 6.91211 1.14592 6.91211 1.25824C6.91211 1.37055 7.03796 1.58703 7.19185 1.73944L7.47159 2.01648H27.2349C45.0738 2.01648 47.0127 2.03098 47.1485 2.16538C47.2817 2.29731 47.2988 2.93508 47.2988 7.75208V13.1898L47.0861 13.3373C46.906 13.4623 46.456 13.4853 44.1432 13.4879C41.2091 13.4911 41.1782 13.496 40.9885 13.9901C40.8701 14.2987 40.9911 14.6642 41.2586 14.806C41.3806 14.8706 42.4836 14.9058 44.3496 14.9045C46.9649 14.9026 47.2894 14.8851 47.6406 14.7271C48.1078 14.517 48.571 13.9875 48.7209 13.4922C48.8703 12.9982 48.8734 2.50895 48.7243 1.96909C48.5768 1.43548 47.8487 0.753726 47.2728 0.610134C46.9445 0.528244 41.7815 0.5 27.1514 0.5H7.47159L7.19185 0.777042ZM9.26574 3.63778C9.12486 3.74754 8.8412 4.16883 8.63553 4.57411C8.22535 5.38192 8.29655 5.33946 7.10352 5.48703C6.66902 5.54077 6.51456 5.61385 6.21826 5.90568C5.92656 6.19314 5.85947 6.32783 5.86004 6.62581C5.86081 7.07071 6.03442 7.34131 6.71563 7.95899L7.23693 8.43175L7.1217 9.18117C6.9413 10.355 6.96178 10.52 7.3332 10.8879C7.79038 11.3406 8.21195 11.3275 9.21281 10.8291L9.97796 10.4481L10.7252 10.8291C11.8017 11.378 12.4144 11.3115 12.7989 10.6044C12.9742 10.2819 12.9755 10.2325 12.8282 9.38855L12.6748 8.5089L13.3217 7.84487C14.0437 7.10379 14.1797 6.77045 13.965 6.26774C13.7408 5.74313 13.508 5.61101 12.5286 5.45244L11.6264 5.30648L11.2551 4.55165C11.0509 4.13642 10.7695 3.71607 10.6298 3.6175C10.2766 3.36823 9.59869 3.37837 9.26574 3.63778ZM19.4348 3.58224C19.273 3.66925 19.0312 4.00875 18.767 4.51962L18.3528 5.3206L17.55 5.43889C16.6014 5.57859 16.1967 5.80881 16.0325 6.30195C15.8577 6.82722 16.0131 7.18568 16.7227 7.89387L17.3472 8.51715L17.1965 9.30439C17.0133 10.2606 17.0666 10.5472 17.4974 10.9218C17.9784 11.3401 18.4183 11.3161 19.3215 10.8224L20.0308 10.4345L20.7834 10.8224C21.7697 11.3305 22.2027 11.3456 22.6648 10.8879C23.0354 10.5209 23.0688 10.2487 22.8813 9.1245L22.7724 8.47146L23.3168 7.9788C24.1371 7.2362 24.3224 6.71889 23.9935 6.08889C23.8155 5.74806 23.4747 5.56807 22.8467 5.48343C21.6879 5.32733 21.7707 5.37804 21.3625 4.57411C21.1569 4.16883 20.8732 3.74754 20.7323 3.63778C20.4302 3.40235 19.8178 3.37619 19.4348 3.58224ZM29.4591 3.63778C29.3182 3.74754 29.0346 4.16883 28.8289 4.57411C28.4187 5.38192 28.4899 5.33946 27.2969 5.48703C26.8624 5.54077 26.7079 5.61385 26.4116 5.90568C26.1199 6.19314 26.0528 6.32783 26.0534 6.62581C26.0542 7.07109 26.2278 7.34121 26.9118 7.96155L27.4358 8.43677L27.3185 9.11435C27.1219 10.2498 27.1534 10.5183 27.5266 10.8879C27.9837 11.3406 28.4053 11.3275 29.4062 10.8291L30.1713 10.4481L30.9186 10.8291C32.0048 11.383 32.643 11.3073 32.9899 10.5833C33.1462 10.2571 33.1479 10.1725 33.0133 9.37073L32.8687 8.5089L33.5154 7.84487C34.2371 7.10379 34.373 6.77035 34.1583 6.26774C33.9342 5.74313 33.7013 5.61101 32.722 5.45244L31.8198 5.30648L31.4485 4.54739C31.1988 4.0369 30.9831 3.73105 30.79 3.61352C30.3977 3.37477 29.7823 3.38595 29.4591 3.63778ZM39.6281 3.58224C39.4664 3.66925 39.2245 4.00875 38.9603 4.51962L38.5462 5.3206L37.7434 5.43889C36.7853 5.58001 36.3905 5.80758 36.2212 6.31607C36.0446 6.84684 36.1578 7.11023 36.8813 7.85141L37.5347 8.52084L37.3878 9.27311C37.2021 10.2243 37.2608 10.548 37.687 10.9186C38.1721 11.3404 38.6094 11.3173 39.5148 10.8224L40.2242 10.4345L40.9768 10.8224C41.9631 11.3305 42.3961 11.3456 42.8582 10.8879C43.2288 10.5209 43.2622 10.2487 43.0747 9.1245L42.9658 8.47146L43.5101 7.9788C44.3305 7.2362 44.5158 6.71889 44.1869 6.08889C44.0088 5.74806 43.668 5.56807 43.04 5.48343C41.8813 5.32733 41.9641 5.37804 41.5559 4.57411C41.3502 4.16883 41.0665 3.74754 40.9257 3.63778C40.6235 3.40235 40.0111 3.37619 39.6281 3.58224ZM10.2028 5.78398C10.5503 6.46004 10.8157 6.65804 11.5393 6.78078L12.168 6.88741L11.6934 7.38443C11.3726 7.72033 11.2151 7.9678 11.2075 8.14779C11.1926 8.49573 11.1887 8.43725 11.2653 9.00612L11.3323 9.50324L10.7873 9.21937C10.1077 8.86527 9.8255 8.86376 9.13271 9.21008L8.58337 9.48466L8.67544 8.8249C8.75612 8.24645 8.74492 8.12362 8.58433 7.82829C8.48355 7.64299 8.2599 7.38481 8.08725 7.25439C7.9147 7.12398 7.77344 6.98465 7.77344 6.94475C7.77344 6.90475 8.00236 6.84381 8.2822 6.80912C8.99815 6.72059 9.35388 6.47455 9.66013 5.8562C9.80234 5.56883 9.93059 5.33377 9.94504 5.33377C9.95958 5.33377 10.0755 5.53641 10.2028 5.78398ZM20.9002 6.56136C21.0631 6.65946 21.4538 6.76922 21.7685 6.80542L22.3407 6.8712L21.8281 7.38528C21.3393 7.87549 21.3155 7.9224 21.3172 8.39374C21.3182 8.66557 21.3494 9.02668 21.3866 9.19624L21.4543 9.50447L20.8851 9.21994C20.1721 8.86347 19.9219 8.86395 19.2339 9.22307C18.9313 9.38107 18.6836 9.47414 18.6836 9.42988C18.6836 9.38561 18.7278 9.11265 18.7818 8.82329C18.9061 8.15708 18.81 7.88942 18.2391 7.3124L17.8054 6.87414L18.3641 6.80552C19.124 6.71216 19.3898 6.53208 19.7471 5.86795L20.052 5.30164L20.3281 5.84236C20.4919 6.16319 20.7246 6.45559 20.9002 6.56136ZM30.3961 5.78398C30.7408 6.45464 31.0029 6.65036 31.7354 6.78419L32.3739 6.90096L31.9395 7.3232C31.4377 7.81094 31.3051 8.17613 31.4187 8.75846C31.5685 9.52636 31.5691 9.52589 30.9717 9.21473C30.3008 8.86518 30.017 8.86461 29.3238 9.21122L28.7721 9.48693L28.8617 8.89295C28.9798 8.11035 28.9079 7.87767 28.3955 7.38443C28.1597 7.15743 27.9668 6.9493 27.9668 6.92191C27.9668 6.89451 28.1957 6.84381 28.4756 6.80912C29.1915 6.72059 29.5472 6.47455 29.8535 5.8562C29.9957 5.56883 30.1239 5.33377 30.1384 5.33377C30.1529 5.33377 30.2688 5.53641 30.3961 5.78398ZM41.0935 6.56136C41.2564 6.65946 41.6472 6.76922 41.9618 6.80542L42.5341 6.8712L42.0215 7.38528C41.5326 7.87549 41.5089 7.9224 41.5106 8.39374C41.5116 8.66557 41.5428 9.02668 41.58 9.19624L41.6477 9.50447L41.0785 9.21994C40.3654 8.86347 40.1153 8.86395 39.4272 9.22307C39.1245 9.38107 38.877 9.47414 38.877 9.42988C38.877 9.38561 38.9212 9.11265 38.9751 8.82329C39.0995 8.15708 39.0034 7.88942 38.4324 7.3124L37.9988 6.87414L38.5575 6.80552C39.3174 6.71216 39.5831 6.53208 39.9405 5.86795L40.2453 5.30164L40.5214 5.84236C40.6853 6.16319 40.9179 6.45559 41.0935 6.56136ZM7.29492 20.5386C5.22706 20.9668 3.21184 22.2725 2.05709 23.9322C0.958705 25.5109 0.5 26.9488 0.5 28.8132C0.5 34.5142 6.25013 38.5672 11.6833 36.6955C12.1384 36.5387 12.5679 36.4023 12.6377 36.3923C12.7221 36.3803 12.8437 36.6734 12.9998 37.2649C14.2269 41.9154 18.131 45.4821 22.9409 46.3467C24.0976 46.5546 26.2142 46.5504 27.3227 46.3379C29.8003 45.8631 31.9258 44.7751 33.7499 43.048C35.4578 41.4311 36.7798 39.1712 37.2547 37.057C37.3225 36.7549 37.4055 36.491 37.4389 36.4705C37.4723 36.45 37.8697 36.5564 38.322 36.707C43.8132 38.5344 49.5 34.5138 49.5 28.8041C49.5 24.91 46.9664 21.6813 43.0763 20.6185C42.1299 20.3598 39.841 20.3863 38.8501 20.6675C36.7644 21.2592 34.9519 22.6083 33.8348 24.4005L33.4995 24.9386L32.8625 24.429C28.3797 20.8427 21.8169 20.8587 17.3005 24.467C16.8819 24.8015 16.5238 25.0287 16.5046 24.9719C16.4232 24.7298 15.7117 23.7216 15.2852 23.2437C14.2542 22.0883 12.5036 21.018 11.0273 20.6403C10.1884 20.4257 8.11347 20.3692 7.29492 20.5386ZM10.6431 22.0673C11.9889 22.3828 13.5316 23.3618 14.3904 24.4452C14.9878 25.199 15.4945 26.1634 15.3766 26.3224C13.9593 28.2343 13.012 30.3002 12.789 31.9657C12.754 32.227 12.7048 32.4408 12.6797 32.4408C12.6546 32.4408 12.4705 32.3126 12.2706 32.1558C11.3366 31.4232 9.75966 30.9585 8.55935 31.0622C6.87268 31.2079 5.11825 32.2264 4.34794 33.5071C4.26171 33.6504 4.1593 33.7677 4.12045 33.7677C3.95287 33.7677 3.04226 32.5204 2.70194 31.8248C2.16418 30.7256 2.00015 30.0184 1.99852 28.7918C1.99689 27.5146 2.16102 26.8347 2.76501 25.617C3.71802 23.6956 5.71305 22.2668 7.92044 21.9249C8.63438 21.8143 9.83077 21.8768 10.6431 22.0673ZM42.7671 22.0656C43.0752 22.1427 43.7362 22.4045 44.236 22.6474C44.9909 23.0142 45.2844 23.2272 45.9667 23.903C46.6486 24.5783 46.8644 24.8699 47.235 25.617C47.8375 26.8318 48.0027 27.5145 48.0032 28.7918C48.0036 30.0081 47.7745 30.9678 47.2459 31.9641C46.9216 32.5752 46.0182 33.7677 45.8796 33.7677C45.8407 33.7677 45.7383 33.6504 45.6521 33.5071C45.1233 32.628 43.9436 31.7274 42.8334 31.3554C41.1732 30.7991 39.5271 31.0069 38.0367 31.9609L37.4636 32.3277L37.3986 31.8429C37.2155 30.4758 36.2538 28.2703 35.2355 26.8824C34.9223 26.4554 34.666 26.0517 34.666 25.9853C34.666 25.7261 35.4804 24.5264 36.0394 23.9622C37.7915 22.1933 40.3706 21.4664 42.7671 22.0656ZM7.80559 23.2874C7.13701 23.5957 6.57169 24.1804 6.20879 24.9389C5.9301 25.5215 5.90723 25.6446 5.90723 26.5645C5.90723 27.4845 5.93 27.6073 6.20917 28.1908C7.14247 30.1417 9.32584 30.6871 10.8325 29.3456C12.3583 27.9869 12.4421 25.4891 11.0134 23.954C10.1801 23.0588 8.88503 22.7896 7.80559 23.2874ZM39.9594 23.2421C38.5853 23.8598 37.7306 25.5994 38.0127 27.2038C38.5913 30.4943 42.3748 31.1301 43.7964 28.1757C44.0694 27.6081 44.0928 27.4814 44.0928 26.5645C44.0928 25.6446 44.0699 25.5215 43.7912 24.9389C43.206 23.7157 42.2401 23.0586 41.0303 23.0606C40.5783 23.0614 40.2299 23.1205 39.9594 23.2421ZM27.8976 23.5611C32.0345 24.6449 35.2238 28.0777 35.9609 32.24C36.1228 33.1545 36.1442 34.9546 36.0038 35.8529C35.6651 38.0205 34.4777 40.2945 32.8696 41.8553L32.3003 42.4078L32.0065 41.8923C30.5204 39.2845 27.2896 37.6772 24.2551 38.0361C21.6822 38.3403 19.4106 39.8 18.1537 41.9566L17.883 42.421L17.1541 41.6713C15.1535 39.6142 14.0898 37.0024 14.0898 34.1469C14.0898 28.922 17.6654 24.5691 22.8945 23.4276C24.1315 23.1576 26.61 23.2238 27.8976 23.5611ZM9.63228 24.707C10.1527 25.009 10.4638 25.57 10.5235 26.3139C10.5828 27.0532 10.4297 27.6138 10.052 28.0396C9.5115 28.6493 9.00265 28.7865 8.37493 28.4914C7.31311 27.9924 6.99977 26.2156 7.78444 25.1428C8.2754 24.4716 8.95183 24.312 9.63228 24.707ZM41.6016 24.6142C42.039 24.7952 42.479 25.4212 42.6108 26.0501C42.9397 27.6194 41.6731 29.1063 40.5134 28.5123C39.1461 27.8121 39.0794 25.4396 40.4054 24.6777C40.805 24.4481 41.1555 24.4296 41.6016 24.6142ZM24.3301 25.8412C23.1223 26.1026 22.076 26.9334 21.4373 28.1384C19.931 30.9799 21.1585 34.6382 23.9282 35.5622C24.9392 35.8995 26.1236 35.7724 27.0681 35.2253C28.0208 34.6735 28.9326 33.4029 29.252 32.1826C29.4429 31.4526 29.4452 30.088 29.2567 29.3567C28.7849 27.5265 27.3896 26.1112 25.7541 25.804C25.1551 25.6915 25.0034 25.6955 24.3301 25.8412ZM26.1006 27.4509C28.0176 28.3369 28.5606 31.3889 27.1301 33.2371C25.8671 34.8687 23.5932 34.5376 22.6611 32.5865C21.2923 29.721 23.5898 26.2906 26.1006 27.4509ZM10.173 32.72C11.1441 33.0194 11.9733 33.6883 12.5029 34.5998C12.5981 34.7638 11.313 35.349 10.4687 35.5262C9.54873 35.7194 8.14151 35.7004 7.28631 35.4834C6.50394 35.2849 5.53743 34.8898 5.43579 34.7269C5.26582 34.4546 6.34 33.3409 7.17376 32.925C8.02542 32.5002 9.19941 32.4199 10.173 32.72ZM42.6589 32.8559C43.3573 33.1725 43.9562 33.6533 44.3394 34.2049C44.5734 34.5417 44.6115 34.6579 44.5225 34.7641C44.3664 34.9504 43.0665 35.4326 42.3425 35.5729C41.4752 35.7409 39.7631 35.6415 38.9733 35.3776C37.389 34.8479 37.2717 34.5931 38.2145 33.7287C39.2201 32.8066 39.9629 32.521 41.23 32.5692C41.9221 32.5956 42.2138 32.6542 42.6589 32.8559ZM26.4834 39.5962C26.8519 39.6724 27.5606 39.9338 28.0584 40.1771C28.7846 40.5322 29.106 40.7621 29.6853 41.3409C30.0824 41.7378 30.5674 42.3361 30.7632 42.6708C31.1654 43.358 31.1977 43.2789 30.3176 43.7611C27.8256 45.1264 24.4344 45.4234 21.6943 44.5161C20.7523 44.2041 19.2679 43.4768 19.1964 43.2921C19.0633 42.9488 20.3015 41.3795 21.2144 40.7343C22.8114 39.6057 24.6292 39.2131 26.4834 39.5962Z"
                      fill="#343232"/>
            </svg>,
            title: '97%',
            desc: 'Позитивных отзывов'
        },
        {
            svg: <svg width="50" height="47" viewBox="0 0 50 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M2.85028 0.618285C2.61246 0.680461 2.30649 0.881868 2.02302 1.16261C1.66404 1.51813 1.55034 1.71176 1.46076 2.12036C1.38018 2.4882 1.35712 4.15481 1.37884 8.035L1.40918 13.4375L1.64844 13.8598C1.78003 14.092 2.07441 14.4119 2.30266 14.5706L2.71754 14.8592L11.889 14.9065C16.9332 14.9326 21.0811 14.9753 21.1066 15.0013C21.1321 15.0274 21.7613 16.0937 22.5049 17.3708C23.2794 18.701 23.9868 19.804 24.1609 19.9529C24.7261 20.4364 25.5601 20.4138 26.0976 19.9005C26.2718 19.7342 27.0074 18.5745 27.7322 17.3234C28.4572 16.0723 29.0971 15.0173 29.1546 14.979C29.2119 14.9408 31.4844 14.9088 34.2044 14.908L39.1502 14.9065L39.3485 14.6568C39.6117 14.3255 39.599 14.0018 39.3119 13.7175L39.0771 13.4848H33.9967C29.143 13.4848 28.8998 13.4931 28.5492 13.6702C28.0171 13.9391 27.8415 14.1829 26.4363 16.6041C25.7378 17.8078 25.1382 18.7925 25.1039 18.7925C25.0698 18.7925 24.4528 17.779 23.7331 16.5404C22.4328 14.3027 22.0408 13.7782 21.5245 13.5854C21.3416 13.5171 18.3781 13.4848 12.2865 13.4848C4.3242 13.4848 3.29415 13.4683 3.10533 13.3373L2.89258 13.1898V7.75995C2.89258 2.62004 2.90196 2.32186 3.06762 2.17334C3.2039 2.05117 3.43837 2.01648 4.12772 2.01648C4.97833 2.01648 5.0237 2.00567 5.29253 1.73944C5.44642 1.58703 5.57227 1.37055 5.57227 1.25824C5.57227 1.14592 5.44642 0.929448 5.29253 0.777042C5.02149 0.508625 4.98503 0.500284 4.12016 0.509762C3.6292 0.515165 3.05776 0.563976 2.85028 0.618285ZM7.19185 0.777042C7.03796 0.929448 6.91211 1.14592 6.91211 1.25824C6.91211 1.37055 7.03796 1.58703 7.19185 1.73944L7.47159 2.01648H27.2349C45.0738 2.01648 47.0127 2.03098 47.1485 2.16538C47.2817 2.29731 47.2988 2.93508 47.2988 7.75208V13.1898L47.0861 13.3373C46.906 13.4623 46.456 13.4853 44.1432 13.4879C41.2091 13.4911 41.1782 13.496 40.9885 13.9901C40.8701 14.2987 40.9911 14.6642 41.2586 14.806C41.3806 14.8706 42.4836 14.9058 44.3496 14.9045C46.9649 14.9026 47.2894 14.8851 47.6406 14.7271C48.1078 14.517 48.571 13.9875 48.7209 13.4922C48.8703 12.9982 48.8734 2.50895 48.7243 1.96909C48.5768 1.43548 47.8487 0.753726 47.2728 0.610134C46.9445 0.528244 41.7815 0.5 27.1514 0.5H7.47159L7.19185 0.777042ZM9.26574 3.63778C9.12486 3.74754 8.8412 4.16883 8.63553 4.57411C8.22535 5.38192 8.29655 5.33946 7.10352 5.48703C6.66902 5.54077 6.51456 5.61385 6.21826 5.90568C5.92656 6.19314 5.85947 6.32783 5.86004 6.62581C5.86081 7.07071 6.03442 7.34131 6.71563 7.95899L7.23693 8.43175L7.1217 9.18117C6.9413 10.355 6.96178 10.52 7.3332 10.8879C7.79038 11.3406 8.21195 11.3275 9.21281 10.8291L9.97796 10.4481L10.7252 10.8291C11.8017 11.378 12.4144 11.3115 12.7989 10.6044C12.9742 10.2819 12.9755 10.2325 12.8282 9.38855L12.6748 8.5089L13.3217 7.84487C14.0437 7.10379 14.1797 6.77045 13.965 6.26774C13.7408 5.74313 13.508 5.61101 12.5286 5.45244L11.6264 5.30648L11.2551 4.55165C11.0509 4.13642 10.7695 3.71607 10.6298 3.6175C10.2766 3.36823 9.59869 3.37837 9.26574 3.63778ZM19.4348 3.58224C19.273 3.66925 19.0312 4.00875 18.767 4.51962L18.3528 5.3206L17.55 5.43889C16.6014 5.57859 16.1967 5.80881 16.0325 6.30195C15.8577 6.82722 16.0131 7.18568 16.7227 7.89387L17.3472 8.51715L17.1965 9.30439C17.0133 10.2606 17.0666 10.5472 17.4974 10.9218C17.9784 11.3401 18.4183 11.3161 19.3215 10.8224L20.0308 10.4345L20.7834 10.8224C21.7697 11.3305 22.2027 11.3456 22.6648 10.8879C23.0354 10.5209 23.0688 10.2487 22.8813 9.1245L22.7724 8.47146L23.3168 7.9788C24.1371 7.2362 24.3224 6.71889 23.9935 6.08889C23.8155 5.74806 23.4747 5.56807 22.8467 5.48343C21.6879 5.32733 21.7707 5.37804 21.3625 4.57411C21.1569 4.16883 20.8732 3.74754 20.7323 3.63778C20.4302 3.40235 19.8178 3.37619 19.4348 3.58224ZM29.4591 3.63778C29.3182 3.74754 29.0346 4.16883 28.8289 4.57411C28.4187 5.38192 28.4899 5.33946 27.2969 5.48703C26.8624 5.54077 26.7079 5.61385 26.4116 5.90568C26.1199 6.19314 26.0528 6.32783 26.0534 6.62581C26.0542 7.07109 26.2278 7.34121 26.9118 7.96155L27.4358 8.43677L27.3185 9.11435C27.1219 10.2498 27.1534 10.5183 27.5266 10.8879C27.9837 11.3406 28.4053 11.3275 29.4062 10.8291L30.1713 10.4481L30.9186 10.8291C32.0048 11.383 32.643 11.3073 32.9899 10.5833C33.1462 10.2571 33.1479 10.1725 33.0133 9.37073L32.8687 8.5089L33.5154 7.84487C34.2371 7.10379 34.373 6.77035 34.1583 6.26774C33.9342 5.74313 33.7013 5.61101 32.722 5.45244L31.8198 5.30648L31.4485 4.54739C31.1988 4.0369 30.9831 3.73105 30.79 3.61352C30.3977 3.37477 29.7823 3.38595 29.4591 3.63778ZM39.6281 3.58224C39.4664 3.66925 39.2245 4.00875 38.9603 4.51962L38.5462 5.3206L37.7434 5.43889C36.7853 5.58001 36.3905 5.80758 36.2212 6.31607C36.0446 6.84684 36.1578 7.11023 36.8813 7.85141L37.5347 8.52084L37.3878 9.27311C37.2021 10.2243 37.2608 10.548 37.687 10.9186C38.1721 11.3404 38.6094 11.3173 39.5148 10.8224L40.2242 10.4345L40.9768 10.8224C41.9631 11.3305 42.3961 11.3456 42.8582 10.8879C43.2288 10.5209 43.2622 10.2487 43.0747 9.1245L42.9658 8.47146L43.5101 7.9788C44.3305 7.2362 44.5158 6.71889 44.1869 6.08889C44.0088 5.74806 43.668 5.56807 43.04 5.48343C41.8813 5.32733 41.9641 5.37804 41.5559 4.57411C41.3502 4.16883 41.0665 3.74754 40.9257 3.63778C40.6235 3.40235 40.0111 3.37619 39.6281 3.58224ZM10.2028 5.78398C10.5503 6.46004 10.8157 6.65804 11.5393 6.78078L12.168 6.88741L11.6934 7.38443C11.3726 7.72033 11.2151 7.9678 11.2075 8.14779C11.1926 8.49573 11.1887 8.43725 11.2653 9.00612L11.3323 9.50324L10.7873 9.21937C10.1077 8.86527 9.8255 8.86376 9.13271 9.21008L8.58337 9.48466L8.67544 8.8249C8.75612 8.24645 8.74492 8.12362 8.58433 7.82829C8.48355 7.64299 8.2599 7.38481 8.08725 7.25439C7.9147 7.12398 7.77344 6.98465 7.77344 6.94475C7.77344 6.90475 8.00236 6.84381 8.2822 6.80912C8.99815 6.72059 9.35388 6.47455 9.66013 5.8562C9.80234 5.56883 9.93059 5.33377 9.94504 5.33377C9.95958 5.33377 10.0755 5.53641 10.2028 5.78398ZM20.9002 6.56136C21.0631 6.65946 21.4538 6.76922 21.7685 6.80542L22.3407 6.8712L21.8281 7.38528C21.3393 7.87549 21.3155 7.9224 21.3172 8.39374C21.3182 8.66557 21.3494 9.02668 21.3866 9.19624L21.4543 9.50447L20.8851 9.21994C20.1721 8.86347 19.9219 8.86395 19.2339 9.22307C18.9313 9.38107 18.6836 9.47414 18.6836 9.42988C18.6836 9.38561 18.7278 9.11265 18.7818 8.82329C18.9061 8.15708 18.81 7.88942 18.2391 7.3124L17.8054 6.87414L18.3641 6.80552C19.124 6.71216 19.3898 6.53208 19.7471 5.86795L20.052 5.30164L20.3281 5.84236C20.4919 6.16319 20.7246 6.45559 20.9002 6.56136ZM30.3961 5.78398C30.7408 6.45464 31.0029 6.65036 31.7354 6.78419L32.3739 6.90096L31.9395 7.3232C31.4377 7.81094 31.3051 8.17613 31.4187 8.75846C31.5685 9.52636 31.5691 9.52589 30.9717 9.21473C30.3008 8.86518 30.017 8.86461 29.3238 9.21122L28.7721 9.48693L28.8617 8.89295C28.9798 8.11035 28.9079 7.87767 28.3955 7.38443C28.1597 7.15743 27.9668 6.9493 27.9668 6.92191C27.9668 6.89451 28.1957 6.84381 28.4756 6.80912C29.1915 6.72059 29.5472 6.47455 29.8535 5.8562C29.9957 5.56883 30.1239 5.33377 30.1384 5.33377C30.1529 5.33377 30.2688 5.53641 30.3961 5.78398ZM41.0935 6.56136C41.2564 6.65946 41.6472 6.76922 41.9618 6.80542L42.5341 6.8712L42.0215 7.38528C41.5326 7.87549 41.5089 7.9224 41.5106 8.39374C41.5116 8.66557 41.5428 9.02668 41.58 9.19624L41.6477 9.50447L41.0785 9.21994C40.3654 8.86347 40.1153 8.86395 39.4272 9.22307C39.1245 9.38107 38.877 9.47414 38.877 9.42988C38.877 9.38561 38.9212 9.11265 38.9751 8.82329C39.0995 8.15708 39.0034 7.88942 38.4324 7.3124L37.9988 6.87414L38.5575 6.80552C39.3174 6.71216 39.5831 6.53208 39.9405 5.86795L40.2453 5.30164L40.5214 5.84236C40.6853 6.16319 40.9179 6.45559 41.0935 6.56136ZM7.29492 20.5386C5.22706 20.9668 3.21184 22.2725 2.05709 23.9322C0.958705 25.5109 0.5 26.9488 0.5 28.8132C0.5 34.5142 6.25013 38.5672 11.6833 36.6955C12.1384 36.5387 12.5679 36.4023 12.6377 36.3923C12.7221 36.3803 12.8437 36.6734 12.9998 37.2649C14.2269 41.9154 18.131 45.4821 22.9409 46.3467C24.0976 46.5546 26.2142 46.5504 27.3227 46.3379C29.8003 45.8631 31.9258 44.7751 33.7499 43.048C35.4578 41.4311 36.7798 39.1712 37.2547 37.057C37.3225 36.7549 37.4055 36.491 37.4389 36.4705C37.4723 36.45 37.8697 36.5564 38.322 36.707C43.8132 38.5344 49.5 34.5138 49.5 28.8041C49.5 24.91 46.9664 21.6813 43.0763 20.6185C42.1299 20.3598 39.841 20.3863 38.8501 20.6675C36.7644 21.2592 34.9519 22.6083 33.8348 24.4005L33.4995 24.9386L32.8625 24.429C28.3797 20.8427 21.8169 20.8587 17.3005 24.467C16.8819 24.8015 16.5238 25.0287 16.5046 24.9719C16.4232 24.7298 15.7117 23.7216 15.2852 23.2437C14.2542 22.0883 12.5036 21.018 11.0273 20.6403C10.1884 20.4257 8.11347 20.3692 7.29492 20.5386ZM10.6431 22.0673C11.9889 22.3828 13.5316 23.3618 14.3904 24.4452C14.9878 25.199 15.4945 26.1634 15.3766 26.3224C13.9593 28.2343 13.012 30.3002 12.789 31.9657C12.754 32.227 12.7048 32.4408 12.6797 32.4408C12.6546 32.4408 12.4705 32.3126 12.2706 32.1558C11.3366 31.4232 9.75966 30.9585 8.55935 31.0622C6.87268 31.2079 5.11825 32.2264 4.34794 33.5071C4.26171 33.6504 4.1593 33.7677 4.12045 33.7677C3.95287 33.7677 3.04226 32.5204 2.70194 31.8248C2.16418 30.7256 2.00015 30.0184 1.99852 28.7918C1.99689 27.5146 2.16102 26.8347 2.76501 25.617C3.71802 23.6956 5.71305 22.2668 7.92044 21.9249C8.63438 21.8143 9.83077 21.8768 10.6431 22.0673ZM42.7671 22.0656C43.0752 22.1427 43.7362 22.4045 44.236 22.6474C44.9909 23.0142 45.2844 23.2272 45.9667 23.903C46.6486 24.5783 46.8644 24.8699 47.235 25.617C47.8375 26.8318 48.0027 27.5145 48.0032 28.7918C48.0036 30.0081 47.7745 30.9678 47.2459 31.9641C46.9216 32.5752 46.0182 33.7677 45.8796 33.7677C45.8407 33.7677 45.7383 33.6504 45.6521 33.5071C45.1233 32.628 43.9436 31.7274 42.8334 31.3554C41.1732 30.7991 39.5271 31.0069 38.0367 31.9609L37.4636 32.3277L37.3986 31.8429C37.2155 30.4758 36.2538 28.2703 35.2355 26.8824C34.9223 26.4554 34.666 26.0517 34.666 25.9853C34.666 25.7261 35.4804 24.5264 36.0394 23.9622C37.7915 22.1933 40.3706 21.4664 42.7671 22.0656ZM7.80559 23.2874C7.13701 23.5957 6.57169 24.1804 6.20879 24.9389C5.9301 25.5215 5.90723 25.6446 5.90723 26.5645C5.90723 27.4845 5.93 27.6073 6.20917 28.1908C7.14247 30.1417 9.32584 30.6871 10.8325 29.3456C12.3583 27.9869 12.4421 25.4891 11.0134 23.954C10.1801 23.0588 8.88503 22.7896 7.80559 23.2874ZM39.9594 23.2421C38.5853 23.8598 37.7306 25.5994 38.0127 27.2038C38.5913 30.4943 42.3748 31.1301 43.7964 28.1757C44.0694 27.6081 44.0928 27.4814 44.0928 26.5645C44.0928 25.6446 44.0699 25.5215 43.7912 24.9389C43.206 23.7157 42.2401 23.0586 41.0303 23.0606C40.5783 23.0614 40.2299 23.1205 39.9594 23.2421ZM27.8976 23.5611C32.0345 24.6449 35.2238 28.0777 35.9609 32.24C36.1228 33.1545 36.1442 34.9546 36.0038 35.8529C35.6651 38.0205 34.4777 40.2945 32.8696 41.8553L32.3003 42.4078L32.0065 41.8923C30.5204 39.2845 27.2896 37.6772 24.2551 38.0361C21.6822 38.3403 19.4106 39.8 18.1537 41.9566L17.883 42.421L17.1541 41.6713C15.1535 39.6142 14.0898 37.0024 14.0898 34.1469C14.0898 28.922 17.6654 24.5691 22.8945 23.4276C24.1315 23.1576 26.61 23.2238 27.8976 23.5611ZM9.63228 24.707C10.1527 25.009 10.4638 25.57 10.5235 26.3139C10.5828 27.0532 10.4297 27.6138 10.052 28.0396C9.5115 28.6493 9.00265 28.7865 8.37493 28.4914C7.31311 27.9924 6.99977 26.2156 7.78444 25.1428C8.2754 24.4716 8.95183 24.312 9.63228 24.707ZM41.6016 24.6142C42.039 24.7952 42.479 25.4212 42.6108 26.0501C42.9397 27.6194 41.6731 29.1063 40.5134 28.5123C39.1461 27.8121 39.0794 25.4396 40.4054 24.6777C40.805 24.4481 41.1555 24.4296 41.6016 24.6142ZM24.3301 25.8412C23.1223 26.1026 22.076 26.9334 21.4373 28.1384C19.931 30.9799 21.1585 34.6382 23.9282 35.5622C24.9392 35.8995 26.1236 35.7724 27.0681 35.2253C28.0208 34.6735 28.9326 33.4029 29.252 32.1826C29.4429 31.4526 29.4452 30.088 29.2567 29.3567C28.7849 27.5265 27.3896 26.1112 25.7541 25.804C25.1551 25.6915 25.0034 25.6955 24.3301 25.8412ZM26.1006 27.4509C28.0176 28.3369 28.5606 31.3889 27.1301 33.2371C25.8671 34.8687 23.5932 34.5376 22.6611 32.5865C21.2923 29.721 23.5898 26.2906 26.1006 27.4509ZM10.173 32.72C11.1441 33.0194 11.9733 33.6883 12.5029 34.5998C12.5981 34.7638 11.313 35.349 10.4687 35.5262C9.54873 35.7194 8.14151 35.7004 7.28631 35.4834C6.50394 35.2849 5.53743 34.8898 5.43579 34.7269C5.26582 34.4546 6.34 33.3409 7.17376 32.925C8.02542 32.5002 9.19941 32.4199 10.173 32.72ZM42.6589 32.8559C43.3573 33.1725 43.9562 33.6533 44.3394 34.2049C44.5734 34.5417 44.6115 34.6579 44.5225 34.7641C44.3664 34.9504 43.0665 35.4326 42.3425 35.5729C41.4752 35.7409 39.7631 35.6415 38.9733 35.3776C37.389 34.8479 37.2717 34.5931 38.2145 33.7287C39.2201 32.8066 39.9629 32.521 41.23 32.5692C41.9221 32.5956 42.2138 32.6542 42.6589 32.8559ZM26.4834 39.5962C26.8519 39.6724 27.5606 39.9338 28.0584 40.1771C28.7846 40.5322 29.106 40.7621 29.6853 41.3409C30.0824 41.7378 30.5674 42.3361 30.7632 42.6708C31.1654 43.358 31.1977 43.2789 30.3176 43.7611C27.8256 45.1264 24.4344 45.4234 21.6943 44.5161C20.7523 44.2041 19.2679 43.4768 19.1964 43.2921C19.0633 42.9488 20.3015 41.3795 21.2144 40.7343C22.8114 39.6057 24.6292 39.2131 26.4834 39.5962Z"
                      fill="#343232"/>
            </svg>,
            title: '5 +',
            desc: 'Лет работы'
        },

    ]
    useEffect(() => {
        Aos.init()
    })
    return (
        <section id='about' className='mt-[300px]'>
            <div className="container">
                <div className='flex justify-around items-center company-group'>
                    <div  data-aos-duration="1000" data-aos="fade-right" className="company-content">
                        <div className='bakyt- flex items-center  ml-[55px]'>
                            <div className='drug h-[100px] w-[4px] bg-[#C9AE5D] rotate-90'></div>
                            <h1 className='malika-pne text-[#252525] text-[62px] font-jost font-[300] ml-[100px]'><span
                                className='text-[#C9AE5D] text-[62px] font-jost font-[300]'>О</span> компании</h1>
                        </div>
                        <div className='flex items-center'>
                            <div className='h-[110px] w-[4px] bg-[#343232]'></div>
                            <p className=' malika ml-[20px] w-[550px] text-[#343232] text-[24px] font-[300] font-jost'>Строительная
                                компания «Байтик Люкс» - это команда профессионалов, стремящихся улучшить инфраструктуру
                                города и украсить его. </p>
                        </div>
                        <div>
                            <div className='bekbol flex mt-[70px] justify-between w-[500px]'>
                                {
                                    list.map((el, idx) => (
                                        <div key={idx}>
                                            <div style={{
                                                border: '1px solid  #DDCD9D'
                                            }} className=' blue w-[88px] h-[88px] rounded-full flex justify-center items-center
                                         }
                                         '>
                                            {el.svg}
                                            
                                            </div>
                                            
                                            <h1 className=' dastan text-[44px] pt-[15px] font-[300] font-jost text-center'>{el.title}</h1>
                                            <p className=' 
                                            azit
                                            w-[90px] text-[20px] font-[300] font-jost text-center'>{el.desc}</p>
                                            
                                        </div>

                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div  data-aos-duration="1000" data-aos="fade-left" className='relative company-img'>
                    
                        <div style={{
                            border: '5px solid #C9AE5D'
                        }
                        } className='w-[380px] h-[380px] maxa '></div>
                        <img className='maxa-imgone top-[155px] left-[-120px] absolute ' src={bit} alt=""/>
                        <img className=' maxa-imgtwo absolute right-[-100px] bottom-[120px]' src={bur} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

