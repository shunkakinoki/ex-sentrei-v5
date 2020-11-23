import clsx from "clsx";
import Image from "next/image";

import Pulse from "@/styles/pulse.module.css";

export default function LandingGlobe(): JSX.Element {
  return (
    <section className="overflow-hidden">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-16">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-200">
              Deploy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 dark:to-gray-300">
                globally{" "}
              </span>
              in seconds
            </h1>
          </div>
          <div className="flex flex-col items-center pt-3">
            <div className="relative">
              <svg
                className="absolute inset-0 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none left-1/2 top-1/2"
                width="800"
                height="800"
                viewBox="0 0 800 800"
                style={{ maxWidth: "200%" }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g className="text-gray-400 opacity-75 fill-current">
                  <circle
                    className={clsx(Pulse.pulse)}
                    cx="400"
                    cy="400"
                    r="200"
                  />
                  <circle
                    className={clsx(Pulse.pulse, Pulse.pulse1)}
                    cx="400"
                    cy="400"
                    r="200"
                  />
                  <circle
                    className={clsx(Pulse.pulse, Pulse.pulse2)}
                    cx="400"
                    cy="400"
                    r="200"
                  />
                </g>
              </svg>
              <Image
                unoptimized
                priority
                className="relative rounded-full "
                src="/assets/globe.png"
                layout="fixed"
                width={400}
                height={400}
                alt="Globe"
              />
              <svg
                className="absolute top-0 w-full h-auto"
                viewBox="0 0 400 400"
                style={{ left: "12%" }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter
                    x="-41.7%"
                    y="-34.2%"
                    width="183.3%"
                    height="185.6%"
                    filterUnits="objectBoundingBox"
                    id="globe-ill-a"
                  >
                    <feOffset
                      dy="4"
                      in="SourceAlpha"
                      result="shadowOffsetOuter1"
                    />
                    <feGaussianBlur
                      stdDeviation="6"
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                    />
                    <feColorMatrix
                      values="0 0 0 0 0 0 0 0 0 0.439215686 0 0 0 0 0.956862745 0 0 0 0.32 0"
                      in="shadowBlurOuter1"
                    />
                  </filter>
                  <filter
                    x="-83.3%"
                    y="-68.5%"
                    width="266.7%"
                    height="271.2%"
                    filterUnits="objectBoundingBox"
                    id="globe-ill-c"
                  >
                    <feOffset
                      dy="4"
                      in="SourceAlpha"
                      result="shadowOffsetOuter1"
                    />
                    <feGaussianBlur
                      stdDeviation="6"
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                    />
                    <feColorMatrix
                      values="0 0 0 0 0 0 0 0 0 0.439215686 0 0 0 0 0.956862745 0 0 0 0.32 0"
                      in="shadowBlurOuter1"
                    />
                  </filter>
                  <filter
                    x="-7.3%"
                    y="-23.8%"
                    width="114.5%"
                    height="147.6%"
                    filterUnits="objectBoundingBox"
                    id="globe-ill-e"
                  >
                    <feGaussianBlur stdDeviation="2" in="SourceGraphic" />
                  </filter>
                  <ellipse
                    id="globe-ill-b"
                    cx="51"
                    cy="175.402"
                    rx="24"
                    ry="23.364"
                  />
                  <ellipse
                    id="globe-ill-d"
                    cx="246"
                    cy="256.201"
                    rx="12"
                    ry="11.682"
                  />
                  <linearGradient
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                    id="globe-ill-f"
                  >
                    <stop stopColor="#4F46E5" stopOpacity="0" offset="0%" />
                    <stop
                      stopColor="#4F46E5"
                      stopOpacity=".64"
                      offset="52.449%"
                    />
                    <stop stopColor="#4F46E5" stopOpacity="0" offset="100%" />
                  </linearGradient>
                </defs>
                <g
                  transform="translate(0 -.818)"
                  fill="none"
                  fillRule="evenodd"
                >
                  <use
                    fill="#000"
                    filter="url(#globe-ill-a)"
                    xlinkHref="#globe-ill-b"
                  />
                  <use fill="#2563EB" xlinkHref="#globe-ill-b" />
                  <use
                    fill="#000"
                    filter="url(#globe-ill-c)"
                    xlinkHref="#globe-ill-d"
                  />
                  <use fill="#2563EB" xlinkHref="#globe-ill-d" />
                  <ellipse
                    fillOpacity=".32"
                    fill="#4F46E5"
                    cx="293"
                    cy="142.303"
                    rx="8"
                    ry="7.788"
                  />
                  <ellipse
                    fillOpacity=".64"
                    fill="#4F46E5"
                    cx="250"
                    cy="187.083"
                    rx="6"
                    ry="5.841"
                  />
                  <ellipse
                    fillOpacity=".64"
                    fill="#4F46E5"
                    cx="13"
                    cy="233.811"
                    rx="2"
                    ry="1.947"
                  />
                  <ellipse
                    fill="#4F46E5"
                    cx="29"
                    cy="114.072"
                    rx="2"
                    ry="1.947"
                  />
                  <path
                    d="M258 256.2l87-29.204"
                    stroke="#666"
                    strokeWidth="2"
                    opacity=".16"
                    filter="url(#globe-ill-e)"
                  />
                  <path
                    d="M258 251.333c111.333-40.237 141-75.282 89-105.136M136 103.364c66.667 4.543 104.667 32.45 114 83.72"
                    stroke="url(#globe-ill-f)"
                    strokeWidth="2"
                    strokeDasharray="2"
                  />
                </g>
              </svg>
              <svg
                className="absolute max-w-full"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                style={{ left: "50%", top: "45%", width: "12%" }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g className="text-indigo-600 fill-current">
                  <circle
                    className={clsx(Pulse.pulse, Pulse.pulseMini, Pulse.pulse1)}
                    cx="24"
                    cy="24"
                    r="8"
                  />
                  <circle
                    className={clsx(Pulse.pulse, Pulse.pulseMini, Pulse.pulse2)}
                    cx="24"
                    cy="24"
                    r="8"
                  />
                  <circle cx="24" cy="24" r="8" />
                </g>
              </svg>
              <svg
                className="absolute max-w-full"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                style={{ left: "46%", top: "19%", width: "12%" }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g className="text-indigo-600 fill-current">
                  <circle
                    className={clsx(Pulse.pulse, Pulse.pulseMini)}
                    cx="24"
                    cy="24"
                    r="8"
                  />
                  <circle
                    className={clsx(Pulse.pulse, Pulse.pulseMini, Pulse.pulse2)}
                    cx="24"
                    cy="24"
                    r="8"
                  />
                  <circle cx="24" cy="24" r="8" />
                </g>
              </svg>
              <svg
                className="absolute top-0 w-20 h-auto max-w-full rounded-full shadow-xl"
                viewBox="0 0 80 80"
                style={{ width: "20%", left: "6%" }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="text-gray-800 fill-current dark:text-gray-600"
                  cx="40"
                  cy="40"
                  r="40"
                />
                <path
                  className="text-white stroke-current dark:text-gray-200"
                  d="M30.19 41.221c7.074 3.299 12.957-4.7 20.03-1.401l1.769.824-1.419-3.883M43.988 50.877l3.887-1.41-1.769-.824c-2.19-1.021-3.475-2.651-4.42-4.512M38.724 36.91c-.944-1.86-2.23-3.49-4.42-4.512"
                  strokeLinecap="square"
                  strokeWidth="2"
                />
              </svg>
              <svg
                className="absolute w-16 h-auto max-w-full rounded-full shadow-xl"
                viewBox="0 0 64 64"
                style={{ left: "-27%", top: "32%", width: "16%" }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="text-indigo-600 fill-current"
                  cx="32"
                  cy="32"
                  r="32"
                />
                <path
                  className="text-white stroke-current"
                  d="M20.733 31.416l18.127-8.452M43.039 31.926L24.913 40.38"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  className="text-white stroke-current"
                  strokeLinecap="square"
                  d="M32.238 20.595l6.622 2.369-2.442 6.594M31.534 42.747l-6.621-2.368 2.442-6.595"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <svg
                className="absolute w-16 h-auto max-w-full rounded-full shadow-xl"
                viewBox="0 0 64 64"
                style={{ right: "-16%", top: "55%", width: "16%" }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="text-gray-100 fill-current dark:text-gray-800"
                  cx="32"
                  cy="32"
                  r="32"
                />
                <path
                  className="text-gray-700 fill-current dark:text-gray-300"
                  d="M37.11 32.44l-1.69 4.646-8.458-3.078.676-1.859-4.773 1.42 2.744 4.156.677-1.858 9.396 3.42a.994.994 0 001.278-.587l2.03-5.576-1.88-.684zM27.037 30.878l1.691-4.646 8.457 3.078-.676 1.858 4.773-1.42-2.744-4.155-.676 1.858-9.397-3.42a.994.994 0 00-1.278.587l-2.03 5.576 1.88.684z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
