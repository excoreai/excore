import bannerBg from '../../assets/convex-bg.webp';
export default function PoweredByConvex() {
  // return (
  //   <a
  //     href="https://convex.dev/c/excore"
  //     target="_blank"
  //     className="group absolute top-0 left-0 w-64 h-64 md:block z-10 hidden shape-top-left-corner overflow-hidden"
  //     aria-label="Powered by Convex"
  //   >
  //     <img
  //       src={bannerBg}
  //       className="absolute inset-0 scale-[1.2] -translate-x-6 group-hover:scale-[1.6] transition-transform"
  //       alt=""
  //     />

  //     <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>

  //     <div className="absolute inset-0 flex p-6">
  //       <div className="flex flex-col gap-1 items-center">
  //         <span className="font-system font-medium uppercase tracking-wider text-stone-600">
  //           Powered by
  //         </span>
  //         <svg
  //           width="126"
  //           height="20"
  //           viewBox="0 0 126 20"
  //           fill="black"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <title>Convex</title>
  //           <g clip-path="url(#clip0_5_2)">
  //             <path d="M3.18483 17.4674C1.30005 15.782 0.357666 13.2908 0.357666 10.0003C0.357666 6.70977 1.31835 4.2186 3.24278 2.53321C5.16415 0.847812 7.79308 0.00350952 11.1265 0.00350952C12.5111 0.00350952 13.7341 0.103028 14.7985 0.308486C15.8629 0.510733 16.8815 0.854231 17.8544 1.34219V6.68088C16.3417 5.92646 14.6246 5.54765 12.7033 5.54765C11.0106 5.54765 9.76021 5.88473 8.95506 6.55889C8.14686 7.23304 7.74429 8.37911 7.74429 10.0003C7.74429 11.5669 8.14076 12.7001 8.93676 13.4C9.72971 14.103 10.9862 14.453 12.7063 14.453C14.527 14.453 16.2563 14.0067 17.8971 13.1175V18.7034C16.0763 19.5669 13.8073 19.9971 11.0899 19.9971C7.70159 19.9971 5.06961 19.1528 3.18483 17.4674Z" />
  //             <path d="M19.538 9.99679C19.538 6.73194 20.4224 4.2504 22.1913 2.54896C23.9602 0.847512 26.6257 0 30.1909 0C33.7805 0 36.4644 0.850722 38.2485 2.54896C40.0296 4.24719 40.9201 6.73194 40.9201 9.99679C40.9201 16.6613 37.3427 19.9936 30.1909 19.9936C23.0879 19.9968 19.538 16.6645 19.538 9.99679ZM32.7497 13.3997C33.2743 12.6966 33.5365 11.5634 33.5365 10C33.5365 8.46228 33.2743 7.33547 32.7497 6.61958C32.2251 5.90369 31.3712 5.54735 30.1909 5.54735C29.0381 5.54735 28.2024 5.9069 27.6901 6.61958C27.1777 7.33547 26.9215 8.46228 26.9215 10C26.9215 11.5666 27.1777 12.6998 27.6901 13.3997C28.2024 14.1027 29.035 14.4526 30.1909 14.4526C31.3712 14.4526 32.2221 14.0995 32.7497 13.3997Z" />
  //             <path d="M42.6029 0.404494H49.3704L49.5626 1.86196C50.3067 1.32263 51.2552 0.876404 52.408 0.526485C53.5608 0.176565 54.7533 0 55.9854 0C58.2667 0 59.9319 0.5939 60.9841 1.7817C62.0363 2.9695 62.5608 4.80257 62.5608 7.28732V19.5923H55.3328V8.05458C55.3328 7.19101 55.1467 6.57143 54.7747 6.19262C54.4026 5.8138 53.7804 5.62761 52.9082 5.62761C52.3714 5.62761 51.8194 5.75602 51.2552 6.01284C50.691 6.26966 50.2183 6.60032 49.8309 7.00482V19.5923H42.6029V0.404494Z" />
  //             <path d="M62.5818 0.404617H70.1178L73.5794 11.6566L77.0409 0.404617H84.5769L77.3855 19.5924H69.7702L62.5818 0.404617Z" />
  //             <path d="M86.8523 17.9422C84.6809 16.2279 83.6653 13.252 83.6653 10.0385C83.6653 6.90851 84.4735 4.33066 86.3186 2.54896C88.1637 0.767255 90.9757 0 94.5256 0C97.792 0 100.36 0.796147 102.236 2.38844C104.108 3.98074 105.047 6.15409 105.047 8.9053V12.2665H91.302C91.6436 13.2648 92.0766 13.9872 93.141 14.4334C94.2054 14.8796 95.6907 15.1011 97.5907 15.1011C98.7252 15.1011 99.8841 15.008 101.061 14.8186C101.476 14.7512 102.159 14.6453 102.519 14.565V19.2295C100.723 19.7432 98.3287 20 95.6297 20C91.9973 19.9968 89.0238 19.6565 86.8523 17.9422ZM97.4534 8.13804C97.4534 7.1878 96.4135 5.14286 94.3243 5.14286C92.4396 5.14286 91.1952 7.1557 91.1952 8.13804H97.4534Z" />
  //             <path d="M110.723 9.8364L103.955 0.404617H111.799L125.642 19.5924H117.722L114.645 15.3003L111.567 19.5924H103.684L110.723 9.8364Z" />
  //             <path d="M117.548 0.404617H125.356L119.363 8.8059L115.398 3.42227L117.548 0.404617Z" />
  //           </g>
  //           <defs>
  //             <clipPath id="clip0_5_2">
  //               <rect width="126" height="20" />
  //             </clipPath>
  //           </defs>
  //         </svg>
  //       </div>
  //     </div>
  //   </a>
  // );
}