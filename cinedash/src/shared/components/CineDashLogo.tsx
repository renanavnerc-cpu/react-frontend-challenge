import React from "react";

export const CineDashLogo = () => (
  <svg
    width="160"
    height="40"
    viewBox="0 0 160 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Ícone de claquete */}
    <rect
      x="0"
      y="0"
      width="32"
      height="32"
      rx="4"
      className="fill-gray-900 dark:fill-white"
    />
    <path
      d="M4 4H28V28H4V4Z"
      className="stroke-white dark:stroke-black"
      strokeWidth="2"
    />
    <circle cx="8" cy="8" r="1.5" className="fill-white dark:fill-black" />
    <circle cx="24" cy="8" r="1.5" className="fill-white dark:fill-black" />
    <circle cx="8" cy="24" r="1.5" className="fill-white dark:fill-black" />
    <circle cx="24" cy="24" r="1.5" className="fill-white dark:fill-black" />

    {/* Texto CineDash */}
    <text
      x="40"
      y="24"
      fontFamily="Poppins, sans-serif"
      fontWeight="700"
      fontSize="24"
      className="fill-gray-900 dark:fill-white"
    >
      Cine
    </text>
    <text
      x="100"
      y="24"
      fontFamily="Poppins, sans-serif"
      fontWeight="700"
      fontSize="24"
      fill="#FACC15"
    >
      Dash
    </text>
  </svg>
);
