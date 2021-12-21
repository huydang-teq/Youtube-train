import * as React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <svg
        className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
          width="25.091"
          height="27.546"
          viewBox="0 0 25.091 27.546"
        >
          <g
            id="Icon_feather-home"
            data-name="Icon feather-home"
            transform="translate(-3 -1.5)"
          >
            <path
              id="Path_64"
              data-name="Path 64"
              d="M4.5,11.591,15.546,3l11.046,8.591v13.5a2.455,2.455,0,0,1-2.455,2.455H6.955A2.455,2.455,0,0,1,4.5,25.091Z"
              fill="none"
              stroke="#0a3068"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            />
            <path
              id="Path_65"
              data-name="Path 65"
              d="M13.5,30.273V18h7.364V30.273"
              transform="translate(-1.636 -2.727)"
              fill="none"
              stroke="#0a3068"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            />
          </g>
        </svg>
      </button>

      <button className={styles.button}>
        <svg
        className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
          width="22.5"
          height="20.13"
          viewBox="0 0 22.5 20.13"
        >
          <path
            id="backward-solid"
            d="M15.421,5,14,6.06,3.292,14.09l-.948.725.948.725L14,23.57l1.422,1.06v-6.58l7.5,5.521L24.344,24.6V5.028L22.922,6.06l-7.5,5.521Zm7.138,3.541V21.089l-7.5-5.521-1-.753,1-.753Zm-8.923.028V21.061L5.327,14.815Z"
            transform="translate(-2.094 -4.75)"
            fill="#637a9f"
            stroke="#0a3068"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0.5"
          />
        </svg>
      </button>

      <button className={styles.button}>
     <svg
     className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="22.915" height="20.5" viewBox="0 0 22.915 20.5">
  <path id="backward-solid" d="M11.435,5l1.449,1.08,10.909,8.182.966.739-.966.739L12.884,23.92,11.435,25V18.3L3.793,23.92,2.344,24.972V5.028L3.793,6.08,11.435,11.7ZM4.162,8.608V21.392L11.8,15.767,12.827,15,11.8,14.233Zm9.091.028V21.364L21.719,15Z" transform="translate(-2.094 -4.75)" fill="#637a9f" stroke="#0a3068" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
</svg>

      </button>

      <button className={styles.button}>
        <svg
        className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
        >
          <defs>
            <clipPath id="clip-path">
              <rect
                id="Rectangle_39"
                data-name="Rectangle 39"
                width="30"
                height="30"
                transform="translate(138 808)"
                fill="#fff"
                stroke="#707070"
                stroke-width="1"
              />
            </clipPath>
          </defs>
          <g
            id="Mask_Group_15"
            data-name="Mask Group 15"
            transform="translate(-138 -808)"
            clip-path="url(#clip-path)"
          >
            <g
              id="Icon_feather-search"
              data-name="Icon feather-search"
              transform="translate(137.5 807.5)"
            >
              <path
                id="Path_66"
                data-name="Path 66"
                d="M24.056,14.278A9.778,9.778,0,1,1,14.278,4.5,9.778,9.778,0,0,1,24.056,14.278Z"
                fill="none"
                stroke="#0a3068"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
              />
              <path
                id="Path_67"
                data-name="Path 67"
                d="M30.292,30.292l-5.317-5.317"
                transform="translate(-3.792 -3.792)"
                fill="none"
                stroke="#0a3068"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
              />
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
}
