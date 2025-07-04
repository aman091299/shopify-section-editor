"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const [sidebarHeadingIndex, setSidebarHeadingIndex] = useState(-1);
  const router=useRouter();
    const pathname = usePathname();
    if(pathname==='/login'){
      return (<></>)
    }
  
const sidebarHeadingData = [
  {  
    headingContext: "HOME",
    svg: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.8049 0H4.19513L0 8.9457V9.11158C0 12.3944 1.44708 14.6199 3.375 15.6208V32H28.75V15.6154C30.617 14.5943 32 12.3699 32 9.11158V8.9457L27.8049 0ZM4.875 30.5058V16.1355C5.14409 16.1849 5.41713 16.2136 5.69211 16.2214C7.14186 16.2621 8.59031 15.705 9.6709 14.5647C10.0776 14.1355 10.4264 13.6302 10.7034 13.0527C11.0076 13.6455 11.3916 14.1633 11.8384 14.6023C13.002 15.7461 14.5468 16.3113 16.0801 16.3113C17.6133 16.3113 19.1581 15.7461 20.3217 14.6023C20.7652 14.1665 21.1469 13.6531 21.45 13.0657C21.7212 13.6389 22.0617 14.1415 22.4584 14.5697C23.5212 15.7169 24.95 16.2864 26.3852 16.2513C26.6768 16.2442 26.9658 16.2128 27.25 16.1575V30.5058H21.625V18.179H10.5V30.5058H4.875ZM12 30.5058H20.125V19.6731H12V30.5058ZM9.92301 9.83658H1.52765C1.78923 13.1794 3.86009 14.6752 5.73439 14.7278C6.76627 14.7568 7.79945 14.3629 8.58008 13.5391C9.3228 12.7553 9.87435 11.5402 9.92301 9.83658ZM1.9385 8.34241L5.15002 1.49416H26.85L30.0615 8.34241H1.9385ZM30.4734 9.83658H22.237C22.2849 11.544 22.8289 12.7664 23.5608 13.5564C24.3292 14.3858 25.342 14.7822 26.3484 14.7576C28.1717 14.713 30.2183 13.2302 30.4734 9.83658ZM20.7298 9.83658H11.4303C11.4832 11.5221 12.0764 12.7372 12.8919 13.5387C13.7545 14.3866 14.9116 14.8171 16.0801 14.8171C17.2485 14.8171 18.4056 14.3866 19.2682 13.5387C20.0837 12.7372 20.6769 11.5221 20.7298 9.83658Z"
          fill="#3D3D3D"
          className={"group-hover:fill-[#06847B]  transition-colors duration-300 " + ( 0 === sidebarHeadingIndex ? "fill-[#06847B]": "")}
        ></path>
      </svg>
    ),
    
  },
  {
    headingContext: "ANALYTICS (BETA)",
    svg: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 17H5V21H3V17ZM7 13H9V21H7V13ZM11 9H13V21H11V9ZM15 5H17V21H15V5ZM19 1H21V21H19V1Z"
          fill="#3D3D3D"
    className={"group-hover:fill-[#06847B]  transition-colors duration-300 " + ( 1 === sidebarHeadingIndex ? "fill-[#06847B]": "")}

        />
      </svg>
    ),
    subHeading:["Report","Monitoring","Live View","Application Analytics"]

  },
  {
    headingContext: "CONTENT",
    svg: (
      <svg
    className={"group-hover:fill-[#06847B]  transition-colors duration-300 " + ( 2=== sidebarHeadingIndex ? "fill-[#06847B]": "")}
        id="light___ZMAtfjzZ"
        enableBackground="new 0 0 24 24"
        height="32"
        viewBox="0 0 24 24"
        width="32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path d="m22.5 6h-21c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h21c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5zm-21-5c-.275 0-.5.224-.5.5v3c0 .276.225.5.5.5h21c.275 0 .5-.224.5-.5v-3c0-.276-.225-.5-.5-.5z"></path>
        </g>
        <g>
          <path d="m23.5 9h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z"></path>
        </g>
        <g>
          <path d="m23.5 12h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z"></path>
        </g>
        <g>
          <path d="m23.5 15h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z"></path>
        </g>
        <g>
          <path d="m23.5 18h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z"></path>
        </g>
        <g>
          <path d="m23.5 21h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z"></path>
        </g>
        <g>
          <path d="m9.5 15h-8c-.827 0-1.5-.673-1.5-1.5v-4c0-.827.673-1.5 1.5-1.5h8c.827 0 1.5.673 1.5 1.5v4c0 .827-.673 1.5-1.5 1.5zm-8-6c-.275 0-.5.224-.5.5v4c0 .276.225.5.5.5h8c.275 0 .5-.224.5-.5v-4c0-.276-.225-.5-.5-.5z"></path>
        </g>
        <g>
          <path d="m9.5 24h-8c-.827 0-1.5-.673-1.5-1.5v-4c0-.827.673-1.5 1.5-1.5h8c.827 0 1.5.673 1.5 1.5v4c0 .827-.673 1.5-1.5 1.5zm-8-6c-.275 0-.5.224-.5.5v4c0 .276.225.5.5.5h8c.275 0 .5-.224.5-.5v-4c0-.276-.225-.5-.5-.5z"></path>
        </g>
        <g>
          <path d="m23.5 24h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z"></path>
        </g>
      </svg>
    ),
    subHeading:["Banners","Blogs","Header","File Upload","Shop Meta","Sections","BookMark"]
  },
  {
    headingContext: "CATALOG",
    svg: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path

          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 0L32 5.74429V26.5168L16 32L0 26.5168V5.74429L16 0ZM11.0139 3.1253L24.6012 7.682L29.4131 6.15075L16 1.3352L11.0139 3.1253ZM30.7451 7.04569L16.6275 11.5382V30.4565L30.7451 25.6184V7.04569ZM15.3726 30.4565V11.5382L1.2549 7.04569V25.6184L15.3726 30.4565ZM2.58688 6.15075L16 10.4191L22.5732 8.32736L9.10504 3.81061L2.58688 6.15075Z"
          fill="#3D3D3D"
    className={"group-hover:fill-[#06847B]  transition-colors duration-300 " + ( 3 === sidebarHeadingIndex ? "fill-[#06847B]": "")}
        ></path>
      </svg>
    ),
subHeading:["Products","Reviews (βeta)","Combos","Categories","Collection","Bulk Actions (βeta)"]

  },
  {
    headingContext: "ORDER",
    svg: (
      <svg
        className="group-hover:fill-[#06847B]  transition-colors duration-300"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
    className={"group-hover:fill-[#06847B]  transition-colors duration-300 " + ( 4 === sidebarHeadingIndex ? "fill-[#06847B]": "")}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.712 3.5H0V2H6.913L7.78154 5.875H32L28.0625 21.375H10.3559H9.5625H9.23912L8.44877 23H28V24.5H6.05121L8.30067 19.875H9.24194L6.36634 6.4194L5.712 3.5ZM10.3125 28.75C10.9683 28.75 11.5 28.2183 11.5 27.5625C11.5 26.9067 10.9683 26.375 10.3125 26.375C9.65666 26.375 9.125 26.9067 9.125 27.5625C9.125 28.2183 9.65666 28.75 10.3125 28.75ZM10.3125 30.25C11.7968 30.25 13 29.0468 13 27.5625C13 26.0782 11.7968 24.875 10.3125 24.875C8.82823 24.875 7.625 26.0782 7.625 27.5625C7.625 29.0468 8.82823 30.25 10.3125 30.25ZM26 27.5625C26 28.2183 25.4683 28.75 24.8125 28.75C24.1567 28.75 23.625 28.2183 23.625 27.5625C23.625 26.9067 24.1567 26.375 24.8125 26.375C25.4683 26.375 26 26.9067 26 27.5625ZM27.5 27.5625C27.5 29.0468 26.2968 30.25 24.8125 30.25C23.3282 30.25 22.125 29.0468 22.125 27.5625C22.125 26.0782 23.3282 24.875 24.8125 24.875C26.2968 24.875 27.5 26.0782 27.5 27.5625ZM30.0713 7.375L26.8959 19.875H10.7758L8.10444 7.375H30.0713Z"
          fill="#3D3D3D"
        ></path>
      </svg>
    ),
      subHeading:["Orders","Draft Orders","Checkouts","Archives","Subscriptions"],

  },
  {
    headingContext: "EXPORTS",
    svg: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
            className={"group-hover:fill-[#06847B]  transition-colors duration-300 " + ( 5 === sidebarHeadingIndex ? "fill-[#06847B]": "")}

          d="M5 20H19V18H5V20ZM12 4L8 8H11V14H13V8H16L12 4Z"
          fill="#3D3D3D"
        />
      </svg>
    ),
  },
  {
    headingContext: "CUSTOMERS",
    svg: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
    className={"group-hover:fill-[#06847B]  transition-colors duration-300 " + ( 6 === sidebarHeadingIndex ? "fill-[#06847B]": "")}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.5 9C23.5 13.1421 20.1421 16.5 16 16.5C11.8579 16.5 8.5 13.1421 8.5 9C8.5 4.85786 11.8579 1.5 16 1.5C20.1421 1.5 23.5 4.85786 23.5 9ZM25 9C25 13.9706 20.9706 18 16 18C11.0294 18 7 13.9706 7 9C7 4.02944 11.0294 0 16 0C20.9706 0 25 4.02944 25 9ZM1.60633 30.5C2.33418 25.4116 6.71029 21.5 12 21.5H20C25.2897 21.5 29.6658 25.4116 30.3937 30.5H1.60633ZM20 20C26.1194 20 31.169 24.5805 31.9072 30.5C31.9684 30.9914 32 31.492 32 32H0C0 31.492 0.031565 30.9914 0.0928406 30.5C0.830988 24.5805 5.88057 20 12 20H20Z"
          fill="#3D3D3D"
        ></path>
      </svg>
    ),
    
  },
  {
    headingContext: "DISCOUNTS",
    svg: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
    className={"group-hover:fill-[#06847B]  transition-colors duration-300 " + ( 7 === sidebarHeadingIndex ? "fill-[#06847B]": "")}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 32L0 17.9399L18.5 0H28.125L32 3.75V13.2063L15 32ZM2.1737 17.9214L3.27153 16.8569L15.9976 28.6611L14.9118 29.8614L2.1737 17.9214ZM4.34987 15.8112L17.0039 27.5486L30.5 12.6285V4.38577L27.518 1.5H19.1079L4.34987 15.8112ZM26.75 6.375C26.75 7.13439 26.1344 7.75 25.375 7.75C24.6156 7.75 24 7.13439 24 6.375C24 5.61561 24.6156 5 25.375 5C26.1344 5 26.75 5.61561 26.75 6.375ZM28.25 6.375C28.25 7.96282 26.9628 9.25 25.375 9.25C23.7872 9.25 22.5 7.96282 22.5 6.375C22.5 4.78718 23.7872 3.5 25.375 3.5C26.9628 3.5 28.25 4.78718 28.25 6.375Z"
          fill="#3D3D3D"
        ></path>
      </svg>
    ),
          subHeading:["Sales","Vouchers","Gift Cards","Members"],

  },
  {
    headingContext: "SETTINGS",
    svg: (
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50">
     <path
    className={"group-hover:fill-[#06847B]  transition-colors duration-300 " + ( 8 === sidebarHeadingIndex ? "fill-[#06847B]": "")}

      d="M 22.199219 2 A 1.0001 1.0001 0 0 0 21.214844 2.8339844 L 20.205078 8.796875 C 19.01608 9.1476749 17.903339 9.6072866 16.835938 10.173828 L 11.875 6.6816406 A 1.0001 1.0001 0 0 0 10.59375 6.7929688 L 6.6933594 10.693359 A 1.0001 1.0001 0 0 0 6.5820312 11.974609 L 10.076172 16.939453 C 9.5032306 17.983292 9.0447681 19.109183 8.6992188 20.298828 L 2.8457031 21.212891 A 1.0001 1.0001 0 0 0 2 22.199219 L 2 27.699219 A 1.0001 1.0001 0 0 0 2.8339844 28.685547 L 8.7949219 29.693359 C 9.1451119 30.880887 9.6045402 31.990547 10.169922 33.056641 L 6.6875 37.917969 A 1.0001 1.0001 0 0 0 6.7929688 39.207031 L 10.693359 43.107422 A 1.0001 1.0001 0 0 0 11.974609 43.21875 L 16.939453 39.724609 C 17.985462 40.298683 19.114316 40.757752 20.306641 41.103516 L 21.314453 47.066406 A 1.0001 1.0001 0 0 0 22.300781 47.900391 L 27.800781 47.900391 A 1.0001 1.0001 0 0 0 28.783203 47.082031 L 29.884766 41.107422 C 31.077734 40.756262 32.193186 40.294742 33.263672 39.726562 L 38.224609 43.21875 A 1.0001 1.0001 0 0 0 39.507812 43.107422 L 43.40625 39.207031 A 1.0001 1.0001 0 0 0 43.509766 37.914062 L 39.931641 32.957031 C 40.500209 31.91951 40.957756 30.82106 41.300781 29.693359 L 47.169922 28.685547 A 1.0001 1.0001 0 0 0 48 27.699219 L 48 22.199219 A 1.0001 1.0001 0 0 0 47.166016 21.214844 L 41.199219 20.203125 C 40.855563 19.074235 40.397841 17.973827 39.828125 16.935547 L 43.318359 11.974609 A 1.0001 1.0001 0 0 0 43.207031 10.693359 L 39.306641 6.7929688 A 1.0001 1.0001 0 0 0 38.013672 6.6894531 L 33.052734 10.273438 C 32.009656 9.7017023 30.885686 9.2413677 29.697266 8.8964844 L 28.685547 2.8359375 A 1.0001 1.0001 0 0 0 27.699219 2 L 22.199219 2 z M 23.044922 4 L 26.853516 4 L 27.814453 9.7636719 A 1.0001 1.0001 0 0 0 28.556641 10.570312 C 30.07104 10.948913 31.478126 11.514935 32.675781 12.251953 A 1.0001 1.0001 0 0 0 33.785156 12.210938 L 38.494141 8.8085938 L 41.197266 11.511719 L 37.882812 16.224609 A 1.0001 1.0001 0 0 0 37.847656 17.324219 C 38.584675 18.521874 39.154586 19.937607 39.533203 21.357422 A 1.0001 1.0001 0 0 0 40.333984 22.085938 L 46 23.044922 L 46 26.857422 L 40.429688 27.814453 A 1.0001 1.0001 0 0 0 39.632812 28.542969 C 39.254196 29.962783 38.686237 31.378517 37.949219 32.576172 A 1.0001 1.0001 0 0 0 37.990234 33.685547 L 41.390625 38.394531 L 38.6875 41.097656 L 33.974609 37.78125 A 1.0001 1.0001 0 0 0 32.904297 37.732422 C 31.566632 38.496802 30.2627 39.053466 28.757812 39.429688 A 1.0001 1.0001 0 0 0 28.017578 40.21875 L 26.966797 45.900391 L 23.144531 45.900391 L 22.185547 40.232422 A 1.0001 1.0001 0 0 0 21.443359 39.429688 C 19.92896 39.051088 18.521874 38.485065 17.324219 37.748047 A 1.0001 1.0001 0 0 0 16.224609 37.78125 L 11.511719 41.097656 L 8.8066406 38.392578 L 12.113281 33.783203 A 1.0001 1.0001 0 0 0 12.167969 32.703125 C 11.403582 31.365465 10.846925 30.061529 10.470703 28.556641 A 1.0001 1.0001 0 0 0 9.6660156 27.814453 L 4 26.855469 L 4 23.056641 L 9.5546875 22.1875 A 1.0001 1.0001 0 0 0 10.371094 21.443359 C 10.749694 19.92896 11.313763 18.521874 12.050781 17.324219 A 1.0001 1.0001 0 0 0 12.017578 16.224609 L 8.7011719 11.511719 L 11.412109 8.8027344 L 16.125 12.117188 A 1.0001 1.0001 0 0 0 17.195312 12.167969 C 18.532978 11.403589 19.836909 10.846925 21.341797 10.470703 A 1.0001 1.0001 0 0 0 22.085938 9.6660156 L 23.044922 4 z M 25 17 C 20.570085 17 17 20.570085 17 25 C 17 29.429915 20.570085 33 25 33 C 29.429915 33 33 29.429915 33 25 C 33 20.570085 29.429915 17 25 17 z M 25 19 C 28.370085 19 31 21.629915 31 25 C 31 28.370085 28.370085 31 25 31 C 21.629915 31 19 28.370085 19 25 C 19 21.629915 21.629915 19 25 19 z">
      </path>
   </svg>
    ),
    subHeading:["Marketing","Serviceability","Forms","Contact Us","Events and Templates","Trigger Cron","Languages","Store Setup","Periodic Tasks"],

  },
  {
    headingContext: "APPS",
    svg: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
    className={"group-hover:fill-[#06847B]  transition-colors duration-300 " + ( 9 === sidebarHeadingIndex ? "fill-[#06847B]": "")}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.375 1.625H1.625V12.375H12.375V1.625ZM0 0V14H14V0H0ZM12.375 19.625H1.625V30.375H12.375V19.625ZM0 18V32H14V18H0ZM19.625 19.625H30.375V30.375H19.625V19.625ZM18 32V18H32V32H18ZM24.25 2H25.875V6.125H30V7.75H25.875V11.875H24.25V7.75H20.125V6.125H24.25V2Z"
          fill="#3D3D3D"
        ></path>
      </svg>
    ),
  },
  {
    headingContext: "ADMIN LOGS",
    svg: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
            className={"group-hover:fill-[#06847B]  transition-colors duration-300 " + ( 10=== sidebarHeadingIndex ? "fill-[#06847B]": "")}

          d="M4 4H20V6H4V4ZM4 8H20V10H4V8ZM4 12H14V14H4V12ZM4 16H14V18H4V16Z"
          fill="#3D3D3D"
        />
      </svg>
    ),
  },
  {
    headingContext: "CONFIGURATION",
    svg: (
      <svg
      
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
    className={"group-hover:fill-[#06847B]  transition-colors duration-300 " + (11 === sidebarHeadingIndex ? "fill-[#06847B]": "")}
          fillRule="evenodd"
          clipRule="evenodd"
          d="
          M11.8982 1.55016L13.3465 4.12742L14.18 4.02305C14.6746 3.96111 15.179 3.92913 15.6915 3.92913C16.1878 3.92913 16.6765 3.95911 17.156 4.01724L17.9864 4.11791L19.4293 1.55016L23.3858 3.05016L22.4034 5.93429L23.1024 6.48141C23.8614 7.07548 24.5475 7.75873 25.1448 8.51532L25.6426 9.1458L28.6985 8.39818L30.2711 12.2122L27.5599 13.7725L27.6537 14.5887C27.7061 15.0455 27.7332 15.5105 27.7332 15.9823C27.7332 16.4721 27.704 16.9545 27.6476 17.428L27.5491 18.2536L30.3925 19.8654L28.6492 23.7375L25.5782 22.9128L25.0672 23.5465C24.5021 24.2473 23.8602 24.8834 23.1545 25.4421L22.4726 25.9819L23.356 28.6976L19.2006 30.1655L17.8515 27.87L17.0457 27.9602C16.6016 28.0098 16.1498 28.0354 15.6915 28.0354C15.1849 28.0354 14.6861 28.0042 14.1968 27.9436L13.3645 27.8406L11.8982 30.4498L7.94167 28.9498L8.94434 26.0062L8.24955 25.4587C7.51643 24.881 6.85187 24.2198 6.27026 23.4896L5.75832 22.8469L2.8981 23.6227L1.4998 19.8502L3.8209 18.1465L3.73487 17.4227C3.6788 16.9508 3.6499 16.4702 3.6499 15.9823C3.6499 15.5144 3.67647 15.0532 3.72809 14.6001L3.82093 13.7852L1.63811 12.5273L3.53763 8.66363L5.69954 9.20458L6.19976 8.56429C6.7957 7.80148 7.48143 7.11226 8.24092 6.51265L8.93454 5.96504L7.94167 3.05016L11.8982 1.55016ZM24.9586 2.30961L18.8666 0L17.3064 2.77633C16.7771 2.71216 16.2382 2.67913 15.6915 2.67913C15.127 2.67913 14.5707 2.71436 14.0247 2.78273L12.4609 0L6.3689 2.30961L7.46636 5.53155C6.62851 6.19302 5.87212 6.95327 5.21473 7.79473L2.86141 7.2059L1.89925e-05 13.026L2.48612 14.4587C2.42916 14.9586 2.3999 15.467 2.3999 15.9823C2.3999 16.5196 2.43173 17.0495 2.4936 17.5702L0 19.4004L2.12299 25.1282L5.29251 24.2684C5.93408 25.0739 6.66711 25.8032 7.47588 26.4405L6.3689 29.6904L12.4609 32L14.0433 29.1841C14.5833 29.251 15.1334 29.2854 15.6915 29.2854C16.1963 29.2854 16.6946 29.2572 17.1847 29.2024L18.6452 31.6874L24.9218 29.4702L23.9303 26.4222C24.7089 25.8059 25.4169 25.1042 26.0402 24.3312L29.3524 25.2206L32 19.3398L28.8888 17.5761C28.9511 17.0535 28.9832 16.5217 28.9832 15.9823C28.9832 15.4627 28.9534 14.9501 28.8955 14.4461L31.8445 12.7489L29.4447 6.92875L26.1259 7.74071C25.4669 6.90612 24.7101 6.15246 23.8729 5.49709L24.9586 2.30961ZM20.625 16C20.625 18.5543 18.5543 20.625 16 20.625C13.4457 20.625 11.375 18.5543 11.375 16C11.375 13.4457 13.4457 11.375 16 11.375C18.5543 11.375 20.625 13.4457 20.625 16ZM16 21.875C19.2447 21.875 21.875 19.2447 21.875 16C21.875 12.7553 19.2447 10.125 16 10.125C12.7553 10.125 10.125 12.7553 10.125 16C10.125 19.2447 12.7553 21.875 16 21.875Z
          "
         fill="#3D3D3D"
        ></path>
      </svg>
    ),
  },
];

  return (
    <div>
    <div className="mx-2  py-5 flex flex-col items-center overflow-y-scroll max-h-screen min-w-[30%] ">
      <Image
        src="https://cambaytigerstage-media.farziengineer.co/hosted/image-invert-c502e10a8e06.png"
        width="120"
        height="70"
        alt="cambay tiger image"
        priority
        className=""
      />

      <div className="flex flex-col gap-10 mt-12 mx-6 ">

        {sidebarHeadingData?.map((item, index) => (
        <div key={item?.headingContext} >
          <div
          onClick={()=>{
          if(sidebarHeadingIndex===index){
           return  setSidebarHeadingIndex(-1)
         } 
         else{
            setSidebarHeadingIndex(index)
         }
          
          } }
            className={"flex gap-3 hover:text-[#06847B] group cursor-pointer " + (index === sidebarHeadingData?.length - 1 ? "mb-4": "") + 
            (sidebarHeadingIndex===index ? "text-[#06847B]":"") }
          >
            <span>{item?.svg}</span>
            <span>{item?.headingContext}</span>
          </div>
             <div  className="flex  flex-col ml-2 gap-3 mt-3 ">
           {sidebarHeadingIndex===index &&
            sidebarHeadingData[sidebarHeadingIndex]?.subHeading?.map((value,index)=>(
                  <div className="hover:bg-gray-200 px-4 py-2 rounded-lg" key={value} onClick={()=>router.push("/"+value.toLowerCase())}>
                {value}
          </div>
            ))
           }
           
       
          </div>
        
          </div>
        ))}
       
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
