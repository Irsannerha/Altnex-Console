import React from "react";
import Card from "react-bootstrap/Card";
import "../style/stylefooter.css";
import iconLogo from "../assets/img/iconlog.png";
import iconStickTwo from "../assets/img/iconStickTwo.png";
import gameOver from "../assets/img/gameOver.png";

function Footer() {
  return (
    <Card className="footer-card">
      <Card.Body className="footer-body">
        <div className="footer-content d-flex justify-content-center align-item-center">
          <div className="d-flex flex-column align-items-center footer-logo">
            <div className="d-flex justify-content-left align-item-left mr-4 ">
              <img src={iconLogo} alt="Logo" className="logoAlt" />
              <p className="footer-title">ALTNEX CONSOLE</p>
            </div>
            <p>
              PlayStation RENTAL ALTNEX CONSOLE Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="footer-content-links d-flex flex-column align-items-left justify-content-left ">
            <h5>USEFULL LINKS</h5>
            <a className="link" href="">
              Home
            </a>
            <a className="link" href="">
              Profil
            </a>
            <a className="link" href="">
              Produk
            </a>
            <a className="link" href="">
              Login
            </a>
          </div>
          <div className="footer-cotact-links d-flex flex-column align-items-left justify-content-left ">
            <h5>CONTACT</h5>
            <div className="d-flex font-contact">
              <svg
                className="logo-contact"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Dummy address, IDN 2023 Way Nyasar, Lampung Selatan</p>
            </div>
            <div className="d-flex font-contact">
              <svg
                className="logo-contact2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 6L12 13L2 6"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>support@altnexconsole.com</p>
            </div>
            <div className="d-flex font-contact">
              <svg
                className="logo-contact3"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0499 5C16.0267 5.19057 16.9243 5.66826 17.628 6.37194C18.3317 7.07561 18.8094 7.97326 18.9999 8.95L15.0499 5ZM15.0499 1C17.0792 1.22544 18.9715 2.13417 20.4162 3.57701C21.8608 5.01984 22.7719 6.91101 22.9999 8.94L15.0499 1ZM21.9999 16.92V19.92C22.0011 20.1985 21.944 20.4742 21.8324 20.7293C21.7209 20.9845 21.5572 21.2136 21.352 21.4019C21.1468 21.5901 20.9045 21.7335 20.6407 21.8227C20.3769 21.9119 20.0973 21.9451 19.8199 21.92C16.7428 21.5856 13.7869 20.5341 11.1899 18.85C8.77376 17.3147 6.72527 15.2662 5.18993 12.85C3.49991 10.2412 2.44818 7.27099 2.11993 4.18C2.09494 3.90347 2.12781 3.62476 2.21643 3.36162C2.30506 3.09849 2.4475 2.85669 2.6347 2.65162C2.82189 2.44655 3.04974 2.28271 3.30372 2.17052C3.55771 2.05833 3.83227 2.00026 4.10993 2H7.10993C7.59524 1.99522 8.06572 2.16708 8.43369 2.48353C8.80166 2.79999 9.04201 3.23945 9.10993 3.72C9.23656 4.68007 9.47138 5.62273 9.80993 6.53C9.94448 6.88792 9.9736 7.27691 9.89384 7.65088C9.81408 8.02485 9.6288 8.36811 9.35993 8.64L8.08993 9.91C9.51349 12.4135 11.5864 14.4864 14.0899 15.91L15.3599 14.64C15.6318 14.3711 15.9751 14.1858 16.3491 14.1061C16.723 14.0263 17.112 14.0555 17.4699 14.19C18.3772 14.5286 19.3199 14.7634 20.2799 14.89C20.7657 14.9585 21.2093 15.2032 21.5265 15.5775C21.8436 15.9518 22.0121 16.4296 21.9999 16.92Z"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p>+62 0895 1234 56789</p>
            </div>
          </div>
          <div className="footer-news-links d-flex flex-column align-items-left justify-content-left">
            <h5>NEWSLATTER</h5>
            <form>
              <svg
                className="logo-contact2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 6L12 13L2 6"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <input type="email" placeholder="Enter your E-mail" required />
              <button type="submit">
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 7L16.7071 6.29289L17.4142 7L16.7071 7.70711L16 7ZM1 8C0.447715 8 0 7.55228 0 7C0 6.44772 0.447715 6 1 6V8ZM10.7071 0.292893L16.7071 6.29289L15.2929 7.70711L9.29289 1.70711L10.7071 0.292893ZM16.7071 7.70711L10.7071 13.7071L9.29289 12.2929L15.2929 6.29289L16.7071 7.70711ZM16 8H1V6H16V8Z"
                    fill="#33363F"
                  />
                </svg>
              </button>
            </form>
            <Card.Img className="card-img" src={iconStickTwo} />
          </div>
        </div>
      </Card.Body>
      <Card className="card-long">
        <Card.Body className="copyright">
          © 2023 AltNex Console. All Rights Reserved.
          <Card.Img className="card-go" src={gameOver} />
          <a className="card-text-1" href="URL_PRIVASI_POLICY">
            Privacy Policy
          </a>
          <a className="card-text-2" href="URL_TERMS_OF_USE">
            Terms of Use
          </a>
          <svg
            className="icon-plane"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_425_752)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM24.8601 17.7179C22.5257 18.6888 17.8603 20.6984 10.8638 23.7466C9.72766 24.1984 9.13251 24.6404 9.07834 25.0726C8.98677 25.803 9.90142 26.0906 11.1469 26.4822C11.3164 26.5355 11.4919 26.5907 11.6719 26.6492C12.8973 27.0475 14.5457 27.5135 15.4026 27.5321C16.1799 27.5489 17.0475 27.2284 18.0053 26.5707C24.5423 22.158 27.9168 19.9276 28.1286 19.8795C28.2781 19.8456 28.4852 19.803 28.6255 19.9277C28.7659 20.0524 28.7521 20.2886 28.7372 20.352C28.6466 20.7383 25.0562 24.0762 23.1982 25.8036C22.619 26.3421 22.2081 26.724 22.1242 26.8113C21.936 27.0067 21.7443 27.1915 21.56 27.3692C20.4215 28.4667 19.5678 29.2896 21.6072 30.6336C22.5873 31.2794 23.3715 31.8135 24.1539 32.3463C25.0084 32.9282 25.8606 33.5085 26.9632 34.2313C27.2442 34.4155 27.5125 34.6068 27.7738 34.7931C28.7681 35.5019 29.6615 36.1388 30.7652 36.0373C31.4065 35.9782 32.0689 35.3752 32.4053 33.5767C33.2004 29.3263 34.7633 20.1169 35.1244 16.3219C35.1561 15.9895 35.1163 15.5639 35.0843 15.3771C35.0523 15.1904 34.9855 14.9242 34.7427 14.7272C34.4552 14.4939 34.0113 14.4447 33.8127 14.4482C32.91 14.4641 31.5251 14.9456 24.8601 17.7179Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_425_752">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            className="icon-tiktok"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.3529 17.3269C37.4396 19.5413 41.221 20.8442 45.305 20.8442V12.9572C44.5321 12.9574 43.7612 12.8765 43.005 12.7157V18.9239C38.9213 18.9239 35.1404 17.621 32.0529 15.4068V31.5017C32.0529 39.5533 25.5491 46.0798 17.5267 46.0798C14.5333 46.0798 11.7511 45.1716 9.43994 43.6141C12.0778 46.3208 15.7564 48 19.8262 48C27.8491 48 34.3533 41.4734 34.3533 33.4215V17.3269H34.3529ZM37.1902 9.36999C35.6128 7.64045 34.577 5.40535 34.3529 2.93435V1.91992H32.1733C32.722 5.06056 34.5933 7.74374 37.1902 9.36999ZM14.5141 37.4356C13.6328 36.2759 13.1565 34.8572 13.1586 33.3985C13.1586 29.716 16.1334 26.7302 19.8035 26.7302C20.4875 26.7301 21.1674 26.8352 21.8192 27.0427V18.9795C21.0575 18.8748 20.2887 18.8303 19.5202 18.8466V25.1226C18.8679 24.915 18.1877 24.8096 17.5035 24.8103C13.8334 24.8103 10.8588 27.7957 10.8588 31.4787C10.8588 34.0828 12.3457 36.3373 14.5141 37.4356Z"
              fill="#FF004F"
            />
            <path
              d="M32.0529 15.4066C35.1404 17.6208 38.9213 18.9237 43.005 18.9237V12.7156C40.7255 12.2283 38.7075 11.0328 37.1903 9.36999C34.5931 7.74358 32.722 5.0604 32.1733 1.91992H26.4482V33.4212C26.4352 37.0936 23.4655 40.0672 19.8032 40.0672C17.6451 40.0672 15.7279 39.0348 14.5136 37.4356C12.3454 36.3373 10.8585 34.0826 10.8585 31.4788C10.8585 27.7962 13.8331 24.8104 17.5032 24.8104C18.2064 24.8104 18.8842 24.9203 19.5199 25.1228V18.8468C11.6384 19.0102 5.2998 25.473 5.2998 33.4214C5.2998 37.3892 6.87827 40.9861 9.44013 43.6143C11.7513 45.1716 14.5335 46.08 17.5268 46.08C25.5494 46.08 32.0531 39.5531 32.0531 31.5017V15.4066H32.0529Z"
              fill="black"
            />
            <path
              d="M43.0051 12.7156V11.037C40.9495 11.0401 38.9343 10.4624 37.1903 9.36987C38.7342 11.0661 40.7671 12.2357 43.0051 12.7156ZM32.1734 1.91997C32.1211 1.61982 32.0809 1.3177 32.053 1.01443V0H24.148V31.5016C24.1354 35.1735 21.1658 38.1471 17.5033 38.1471C16.428 38.1471 15.4128 37.891 14.5137 37.4358C15.7279 39.0349 17.6452 40.0671 19.8033 40.0671C23.4652 40.0671 26.4354 37.0938 26.4482 33.4214V1.91997H32.1734ZM19.5203 18.8468V17.0598C18.8598 16.9692 18.1938 16.9237 17.5271 16.924C9.50383 16.9239 3 23.4508 3 31.5016C3 36.5491 5.55612 40.9974 9.44034 43.614C6.87848 40.986 5.30002 37.3889 5.30002 33.4213C5.30002 25.473 11.6385 19.0102 19.5203 18.8468Z"
              fill="#00F2EA"
            />
          </svg>
          <svg
            className="icon-ig"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_425_734)">
              <path
                d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z"
                fill="#000100"
              />
              <path
                d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z"
                fill="#000100"
              />
              <path
                d="M39.6937 11.1845C39.6937 12.7783 38.4 14.0627 36.8156 14.0627C35.2219 14.0627 33.9375 12.7689 33.9375 11.1845C33.9375 9.59077 35.2313 8.3064 36.8156 8.3064C38.4 8.3064 39.6937 9.60015 39.6937 11.1845Z"
                fill="#000100"
              />
            </g>
            <defs>
              <clipPath id="clip0_425_734">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            className="icon-dc"
            width="48"
            height="41"
            viewBox="0 0 48 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.634 3.36396C37.5747 1.80693 34.294 0.659777 30.8638 0.00275612C30.8013 -0.00992418 30.7389 0.0217646 30.7067 0.0851436C30.2848 0.917507 29.8175 2.00339 29.4902 2.8569C25.8008 2.24425 22.1304 2.24425 18.5166 2.8569C18.1893 1.98442 17.705 0.917507 17.2811 0.0851436C17.249 0.0238792 17.1866 -0.00780955 17.1241 0.00275612C13.6958 0.657677 10.4151 1.80483 7.35387 3.36396C7.32737 3.37663 7.30465 3.39778 7.28958 3.42522C1.06678 13.737 -0.6379 23.7953 0.19836 33.7289C0.202144 33.7775 0.22674 33.824 0.260796 33.8535C4.36642 37.1978 8.34341 39.2281 12.2466 40.5738C12.309 40.5949 12.3752 40.5696 12.415 40.5125C13.3383 39.114 14.1613 37.6394 14.867 36.0887C14.9086 35.9978 14.8688 35.8901 14.7837 35.8542C13.4783 35.3049 12.2352 34.6352 11.0395 33.8747C10.9449 33.8134 10.9373 33.6633 11.0243 33.5915C11.2759 33.3824 11.5276 33.1648 11.7679 32.9451C11.8114 32.9049 11.872 32.8965 11.9231 32.9218C19.7786 36.8999 28.2831 36.8999 36.0459 32.9218C36.097 32.8944 36.1576 32.9028 36.203 32.943C36.4433 33.1627 36.6949 33.3824 36.9484 33.5915C37.0354 33.6633 37.0298 33.8134 36.9352 33.8747C35.7394 34.65 34.4964 35.3049 33.189 35.8521C33.1039 35.888 33.0661 35.9978 33.1077 36.0887C33.8285 37.6372 34.6515 39.1118 35.5578 40.5104C35.5957 40.5696 35.6637 40.5949 35.7262 40.5738C39.6483 39.2281 43.6252 37.1978 47.7309 33.8535C47.7668 33.824 47.7895 33.7796 47.7933 33.731C48.7942 22.2467 46.117 12.2708 40.6964 3.42732C40.6832 3.39778 40.6605 3.37663 40.634 3.36396ZM16.04 27.6804C13.675 27.6804 11.7263 25.272 11.7263 22.3143C11.7263 19.3566 13.6372 16.9482 16.04 16.9482C18.4617 16.9482 20.3916 19.3777 20.3538 22.3143C20.3538 25.272 18.4428 27.6804 16.04 27.6804ZM31.9895 27.6804C29.6245 27.6804 27.6758 25.272 27.6758 22.3143C27.6758 19.3566 29.5867 16.9482 31.9895 16.9482C34.4113 16.9482 36.3411 19.3777 36.3033 22.3143C36.3033 25.272 34.4113 27.6804 31.9895 27.6804Z"
              fill="black"
            />
          </svg>
        </Card.Body>
      </Card>
    </Card>
  );
}

export default Footer;
