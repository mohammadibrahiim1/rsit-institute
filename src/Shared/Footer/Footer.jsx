import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const actions = [
  { type: "Online courses", number: "6.3k" },
  { type: "Certified Instructor", number: "26k" },
  { type: "Success Rate", number: "99.9%" },
];
const Footer = () => {
  return (
    <>
      <div className="bg-[#1D2026] ">
        <div className="w-[82.5rem]  mx-auto flex justify-center items-center py-[6.25rem] mt-[30px] gap-[12.5rem]">
          <div className="w-[648px]">
            <div className="text-[2.5rem] leading-10 text-white">
              Start learning with 67.1k students around the world.
            </div>
            <div className="flex gap-[1rem] py-[2rem]">
              <button className="bg-[#FF6636] px-[1.5rem] py-[.5rem] font-semibold text-white ">Join the Family</button>
              <button className="bg-[#313335] px-[1.5rem] py-[.5rem] font-semibold text-white  ">
                Browse all courses
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 w-[648px]">
            {actions.map((action) => (
              <>
                <div>
                  <h1 className="text-white text-[2.5rem] font-semibold">{action.number}</h1>
                  <h1 className="text-[#B7BAC7] text-[1rem] font-semibold ">{action.type}</h1>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#1D2026] border-y-[1px] border-[#b7bac7] ">
        <footer className=" w-[82.5rem] footer mx-auto py-10  text-base-content  ">
          <aside className="w-[26.5rem] text-[1.2rem] text-[#8C94A3]">
            <Link className="normal-case text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="40" viewBox="0 0 42 40" fill="none">
                <path
                  d="M2.25 15L21 5L39.75 15L21 25L2.25 15Z"
                  stroke="#FF6636"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M30.375 37.5V20L21 15"
                  stroke="#FF6636"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M35.375 17.3333V25.8521C35.3755 26.1218 35.2884 26.3843 35.1266 26.6001C34.074 28.0008 29.6333 33.1249 21 33.1249C12.3667 33.1249 7.92597 28.0008 6.87336 26.6001C6.71165 26.3843 6.62449 26.1218 6.625 25.8521V17.3333"
                  stroke="#FF6636"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              E-tutor
            </Link>
            <p className="py-[1.25rem] leading-7">
              Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio at.
            </p>

            <div className="flex justify-center items-center gap-3">
              <div className=" cursor-pointer hover:shadow-[#FF6636] hover:bg-[#FF6636] bg-[#363B4766] w-[46px] h-[46px] border-[#363B4766] shadow-xl">
                <svg
                  className="m-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M11.3575 2.98875H13.0008V0.12675C12.7172 0.08775 11.7423 0 10.6068 0C8.2375 0 6.6145 1.49025 6.6145 4.22925V6.75H4V9.9495H6.6145V18H9.82V9.95025H12.3288L12.727 6.75075H9.81925V4.5465C9.82 3.62175 10.069 2.98875 11.3575 2.98875Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className=" cursor-pointer hover:shadow-[#FF6636]  hover:bg-[#FF6636] bg-[#363B4766] w-[46px] h-[46px]  border-[#363B4766] shadow-xl">
                <svg
                  className="m-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M17.9507 5.29205C17.9086 4.33564 17.7539 3.67812 17.5324 3.10836C17.3038 2.50359 16.9522 1.96213 16.4915 1.51201C16.0414 1.05489 15.4963 0.699691 14.8986 0.474702C14.3255 0.253147 13.6714 0.0984842 12.715 0.0563159C11.7515 0.0105764 11.4456 0 9.00174 0C6.55791 0 6.25202 0.0105764 5.29204 0.0527447C4.33563 0.0949129 3.67811 0.249713 3.1085 0.471131C2.50358 0.699691 1.96213 1.05132 1.51201 1.51201C1.05489 1.96213 0.699827 2.50716 0.474701 3.10493C0.253147 3.67812 0.098484 4.33207 0.0563158 5.28848C0.0105764 6.25203 0 6.55792 0 9.00176C0 11.4456 0.0105764 11.7515 0.0527446 12.7115C0.0949128 13.6679 0.249713 14.3254 0.471267 14.8952C0.699827 15.4999 1.05489 16.0414 1.51201 16.4915C1.96213 16.9486 2.50715 17.3038 3.10493 17.5288C3.67811 17.7504 4.33206 17.905 5.28861 17.9472C6.24845 17.9895 6.55448 17.9999 8.99831 17.9999C11.4421 17.9999 11.748 17.9895 12.708 17.9472C13.6644 17.905 14.3219 17.7504 14.8916 17.5288C16.1012 17.0611 17.0577 16.1047 17.5254 14.8952C17.7468 14.322 17.9016 13.6679 17.9437 12.7115C17.9859 11.7515 17.9965 11.4456 17.9965 9.00176C17.9965 6.55792 17.9929 6.25203 17.9507 5.29205ZM16.3298 12.6411C16.2911 13.5202 16.1434 13.9949 16.0203 14.3114C15.7179 15.0956 15.0955 15.7179 14.3114 16.0204C13.9949 16.1434 13.5168 16.2911 12.6411 16.3297C11.6917 16.372 11.407 16.3824 9.00531 16.3824C6.60365 16.3824 6.31534 16.372 5.36937 16.3297C4.4903 16.2911 4.01559 16.1434 3.69913 16.0204C3.3089 15.8761 2.9537 15.6476 2.66539 15.3487C2.3665 15.0568 2.13794 14.7052 1.99372 14.315C1.87065 13.9985 1.72299 13.5202 1.68439 12.6447C1.64209 11.6953 1.63165 11.4104 1.63165 9.00876C1.63165 6.60709 1.64209 6.31878 1.68439 5.37295C1.72299 4.49387 1.87065 4.01917 1.99372 3.7027C2.13794 3.31234 2.3665 2.95727 2.66896 2.66883C2.9607 2.36994 3.31233 2.14138 3.7027 1.99729C4.01917 1.87422 4.49744 1.72656 5.37294 1.68783C6.32235 1.64566 6.60722 1.63508 9.00875 1.63508C11.414 1.63508 11.6987 1.64566 12.6447 1.68783C13.5238 1.72656 13.9985 1.87422 14.3149 1.99729C14.7052 2.14138 15.0604 2.36994 15.3487 2.66883C15.6476 2.96071 15.8761 3.31234 16.0203 3.7027C16.1434 4.01917 16.2911 4.49731 16.3298 5.37295C16.372 6.32236 16.3826 6.60709 16.3826 9.00876C16.3826 11.4104 16.372 11.6917 16.3298 12.6411Z"
                    fill="white"
                  />
                  <path
                    d="M9.00188 4.37744C6.44912 4.37744 4.37793 6.44849 4.37793 9.00139C4.37793 11.5543 6.44912 13.6253 9.00188 13.6253C11.5548 13.6253 13.6258 11.5543 13.6258 9.00139C13.6258 6.44849 11.5548 4.37744 9.00188 4.37744ZM9.00188 12.0008C7.34578 12.0008 6.00244 10.6576 6.00244 9.00139C6.00244 7.34515 7.34578 6.00195 9.00188 6.00195C10.6581 6.00195 12.0013 7.34515 12.0013 9.00139C12.0013 10.6576 10.6581 12.0008 9.00188 12.0008Z"
                    fill="white"
                  />
                  <path
                    d="M14.8876 4.19521C14.8876 4.79133 14.4043 5.27469 13.808 5.27469C13.2119 5.27469 12.7285 4.79133 12.7285 4.19521C12.7285 3.59894 13.2119 3.11572 13.808 3.11572C14.4043 3.11572 14.8876 3.59894 14.8876 4.19521Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className=" cursor-pointer hover:shadow-[#FF6636]  hover:bg-[#FF6636] bg-[#363B4766] w-[46px] h-[46px] border-[#363B4766] shadow-xl">
                <svg
                  className="m-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    d="M18.992 18.0002V17.9994H18.9965V11.3979C18.9965 8.16841 18.3012 5.68066 14.5257 5.68066C12.7107 5.68066 11.4927 6.67666 10.9955 7.62091H10.943V5.98216H7.36322V17.9994H11.0907V12.0489C11.0907 10.4822 11.3877 8.96716 13.328 8.96716C15.2397 8.96716 15.2682 10.7552 15.2682 12.1494V18.0002H18.992Z"
                    fill="white"
                  />
                  <path d="M1.29349 5.98291H5.02549V18.0002H1.29349V5.98291Z" fill="white" />
                  <path
                    d="M3.15799 0C1.96474 0 0.99649 0.96825 0.99649 2.1615C0.99649 3.35475 1.96474 4.34325 3.15799 4.34325C4.35124 4.34325 5.31949 3.35475 5.31949 2.1615C5.31874 0.96825 4.35049 0 3.15799 0V0Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className=" cursor-pointer hover:shadow-[#FF6636]  hover:bg-[#FF6636] bg-[#363B4766] w-[46px] h-[46px] border-[#363B4766] shadow-xl">
                <svg
                  className="m-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <g clip-path="url(#clip0_4578_17773)">
                    <path
                      d="M18.9965 3.73137C18.3271 4.025 17.6139 4.21962 16.8702 4.31412C17.6352 3.85737 18.2191 3.13962 18.4936 2.2745C17.7804 2.69975 16.9929 3.00013 16.1536 3.16775C15.4764 2.44663 14.5111 2 13.4581 2C11.4151 2 9.77036 3.65825 9.77036 5.69113C9.77036 5.98363 9.79512 6.26487 9.85587 6.53262C6.78799 6.383 4.07337 4.91263 2.24974 2.67275C1.93137 3.22513 1.74462 3.85738 1.74462 4.538C1.74462 5.816 2.40274 6.94887 3.38374 7.60475C2.79087 7.5935 2.20924 7.42138 1.71649 7.15025C1.71649 7.1615 1.71649 7.17613 1.71649 7.19075C1.71649 8.984 2.99562 10.4735 4.67299 10.8166C4.37262 10.8988 4.04524 10.9381 3.70549 10.9381C3.46924 10.9381 3.23074 10.9246 3.00687 10.8751C3.48499 12.3365 4.84174 13.4109 6.45499 13.4457C5.19949 14.4279 3.60537 15.0196 1.87962 15.0196C1.57699 15.0196 1.28674 15.0061 0.99649 14.969C2.63112 16.0231 4.56837 16.625 6.65749 16.625C13.448 16.625 17.1605 11 17.1605 6.12425C17.1605 5.96112 17.1549 5.80363 17.147 5.64725C17.8794 5.1275 18.4947 4.47837 18.9965 3.73137Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4578_17773">
                      <rect width="18" height="18" fill="white" transform="translate(0.99649)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className=" hover:shadow-[#FF6636] cursor-pointer hover:bg-[#FF6636] bg-[#363B4766] w-[46px] h-[46px] border-[#363B4766] shadow-xl">
                <svg
                  className="m-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.0392 3.38548C17.8101 3.59312 18.4181 4.20094 18.6256 4.97204C19.0112 6.38048 18.9964 9.31629 18.9964 9.31629C18.9964 9.31629 18.9964 12.2371 18.6257 13.6457C18.4181 14.4167 17.8103 15.0246 17.0392 15.2321C15.6306 15.6029 9.99642 15.6029 9.99642 15.6029C9.99642 15.6029 4.37694 15.6029 2.95367 15.2174C2.18257 15.0098 1.57475 14.4018 1.36711 13.6309C0.99646 12.2371 0.99646 9.30146 0.99646 9.30146C0.99646 9.30146 0.99646 6.38048 1.36711 4.97204C1.57461 4.20108 2.1974 3.57829 2.95353 3.37079C4.36211 3 9.99629 3 9.99629 3C9.99629 3 15.6306 3 17.0392 3.38548ZM12.8878 9.30154L8.20251 12.0001V6.60303L12.8878 9.30154Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </aside>
          <nav className="">
            <header className=" text-[.875rem] font-semibold text-white uppercase ">Top 4 category</header>
            <a className="link link-hover text-[#8C94A3] font-semibold py-2">Development</a>
            <a className="link link-hover text-[#8C94A3] font-semibold py-2">Finance & Accounting</a>
            <a className="llink link-hover text-[#8C94A3] font-semibold py-2">Design</a>
            <a className="link link-hover text-[#8C94A3] font-semibold py-2">Business</a>
          </nav>
          <nav>
            <header className="text-[.875rem] font-semibold text-white uppercase">Quick Links</header>
            <a className="link link-hover text-[#8C94A3] font-semibold py-2">About us</a>
            <a className="link link-hover text-[#8C94A3] font-semibold py-2">Become Instructor</a>
            <a className="link link-hover text-[#8C94A3] font-semibold py-2">Contact</a>
            <a className="link link-hover text-[#8C94A3] font-semibold py-2">Career</a>
          </nav>
          <nav>
            <header className="text-[.875rem] font-semibold text-white uppercase">support</header>
            <a className="link link-hover text-[#8C94A3] font-semibold py-2">Help Center</a>
            <a className="link link-hover text-[#8C94A3] font-semibold py-2">FAQs</a>
            <a className="link link-hover text-[#8C94A3] font-semibold py-2">Terms & Condition</a>
            <a className="link link-hover text-[#8C94A3] font-semibold py-2">Privacy Policy</a>
          </nav>
          <nav>
            <header className="text-[.875rem] font-semibold text-white uppercase ">Download Our App</header>
            <Link to={"/"} className="link link-hover text-[#8C94A3] font-semibold mt-2">
              <div className="flex justify-center items-center gap-2 py-[12px] px-[20px] bg-[#363B4766]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <g clip-path="url(#clip0_4578_17823)">
                    <path
                      d="M21.9986 0C20.2926 0.117999 18.2986 1.20999 17.1366 2.63198C16.0766 3.92198 15.2046 5.83797 15.5446 7.69995C17.4086 7.75795 19.3346 6.63996 20.4506 5.19397C21.4946 3.84798 22.2846 1.94399 21.9986 0Z"
                      fill="white"
                    />
                    <path
                      d="M28.7406 10.7362C27.1026 8.68223 24.8006 7.49023 22.6266 7.49023C19.7566 7.49023 18.5427 8.86423 16.5487 8.86423C14.4927 8.86423 12.9307 7.49423 10.4487 7.49423C8.01071 7.49423 5.41473 8.98423 3.76874 11.5322C1.45475 15.1202 1.85075 21.8662 5.60073 27.6121C6.94272 29.6681 8.73471 31.9801 11.0787 32.0001C13.1647 32.0201 13.7527 30.6621 16.5787 30.6481C19.4046 30.6321 19.9406 32.0181 22.0226 31.9961C24.3686 31.9781 26.2586 29.4161 27.6006 27.3601C28.5626 25.8861 28.9206 25.1441 29.6666 23.4801C24.2406 21.4142 23.3706 13.6982 28.7406 10.7362Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4578_17823">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>
                  <div className="text-[0.625rem]">Download now</div>
                  <div>App Store</div>
                </span>
              </div>
            </Link>
            <Link to={"/"} className="link link-hover text-[#8C94A3] font-semibold ">
              <div className="flex justify-center items-center gap-2 py-[12px] px-[20px] bg-[#363B4766]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M19.8024 9.76833L3.01889 0.123178C2.808 4.82537e-05 2.54267 0.00688879 2.33857 0.130018C2.12767 0.253148 1.99841 0.472045 1.99841 0.718304C1.99841 0.718304 2.00522 1.60757 2.01202 3.07145L14.2374 15.3639L19.8024 9.76833Z"
                    fill="url(#paint0_linear_4578_17834)"
                  />
                  <path
                    d="M2.01196 3.07129C2.03237 8.35219 2.0936 21.1714 2.12081 27.5536L14.2441 15.3637L2.01196 3.07129Z"
                    fill="url(#paint1_linear_4578_17834)"
                  />
                  <path
                    d="M29.4086 15.2889L19.8024 9.76855L14.2306 15.3641L20.5168 21.6848L29.4154 16.4723C29.6263 16.3492 29.7555 16.1234 29.7555 15.884C29.7555 15.6377 29.6195 15.412 29.4086 15.2889Z"
                    fill="url(#paint2_linear_4578_17834)"
                  />
                  <path
                    d="M2.11414 27.5536C2.12774 29.8315 2.13455 31.2885 2.13455 31.2885C2.13455 31.5348 2.26381 31.7605 2.47471 31.8768C2.6856 31.9999 2.94413 31.9999 3.15503 31.8768L20.5236 21.6913L14.2374 15.3706L2.11414 27.5536Z"
                    fill="url(#paint3_linear_4578_17834)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_4578_17834"
                      x1="1.99841"
                      y1="7.70208"
                      x2="19.8055"
                      y2="7.70208"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#63BE6B" />
                      <stop offset="0.506" stop-color="#5BBC6A" />
                      <stop offset="1" stop-color="#4AB96A" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_4578_17834"
                      x1="2.0087"
                      y1="15.3154"
                      x2="14.237"
                      y2="15.3154"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#3EC6F2" />
                      <stop offset="1" stop-color="#45AFE3" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_4578_17834"
                      x1="14.2371"
                      y1="15.731"
                      x2="29.7539"
                      y2="15.731"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FAA51A" />
                      <stop offset="0.387" stop-color="#FAB716" />
                      <stop offset="0.741" stop-color="#FAC412" />
                      <stop offset="1" stop-color="#FAC80F" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_4578_17834"
                      x1="2.11713"
                      y1="23.6696"
                      x2="20.5233"
                      y2="23.6696"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#EC3B50" />
                      <stop offset="1" stop-color="#E7515B" />
                    </linearGradient>
                  </defs>
                </svg>
                <span>
                  <div className="text-[0.625rem]">Download now</div>
                  <div>Play Store</div>
                </span>
              </div>
            </Link>
          </nav>
        </footer>
      </div>
      <div className="bg-[#1D2026] ">
        <footer className=" w-[82.5rem] mx-auto footer flex justify-between items-center py-5 text-base-content ">
          <aside className="items-center grid-flow-col text-[#8C94A3]">
            <p>
              © 2021 - Eduflex. Designed by <strong>Templatecookie</strong>. All rights reserved
            </p>
          </aside>
          <nav className="">
            <div className="dropdown dropdown-hover dropdown-top mr-[4rem]">
              <label tabIndex={0} className="btn">
                Language
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M13 6L8 11L3 6"
                    stroke="#4E5566"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link>Item 1</Link>
                </li>
                <li>
                  <Link>Item 2</Link>
                </li>
              </ul>
            </div>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default Footer;
