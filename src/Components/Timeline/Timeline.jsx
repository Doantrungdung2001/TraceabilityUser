import React from "react";
import "./timeline.css";
import Navbar from "../Navbar/Navbar";
const Timeline = () => {
  return (
    <>
      <section className="r-timeline">
        <div class="flex h-screen items-center justify-center bg-white px-6 md:px-60">
          <div class="space-y-6 border-l-2 border-dashed">
            <div class="relative w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="ml-6">
                <h4 class="font-bold text-blue-500">Frontend Development.</h4>
                <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                  Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac
                  dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet
                  sem in, lobortis ante.
                </p>
                <span class="mt-1 block text-sm font-semibold text-blue-500">
                  2007
                </span>
              </div>
            </div>
            <div class="relative w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="ml-6">
                <h4 class="font-bold text-blue-500">Graphic Design.</h4>
                <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                  Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis
                  iaculis, feugiat risus quis, aliquet urna. Quisque fringilla
                  mollis risus, eu pulvinar dolor.
                </p>
                <span class="mt-1 block text-sm font-semibold text-blue-500">
                  2007
                </span>
              </div>
            </div>
            <div class="relative w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="ml-6">
                <h4 class="font-bold text-blue-500">Lead Ui/Ux Designer.</h4>
                <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                  Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis
                  iaculis, feugiat risus quis, aliquet urna. Quisque fringilla
                  mollis risus, eu pulvinar dolor
                </p>
                <span class="mt-1 block text-sm font-semibold text-blue-500">
                  2007
                </span>
              </div>
            </div>
            <div class="relative w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="ml-6">
                <h4 class="font-bold text-blue-500">Lead Ui/Ux Designer.</h4>
                <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                  Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis
                  iaculis, feugiat risus quis, aliquet urna. Quisque fringilla
                  mollis risus, eu pulvinar dolor
                </p>
                <span class="mt-1 block text-sm font-semibold text-blue-500">
                  2007
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;
