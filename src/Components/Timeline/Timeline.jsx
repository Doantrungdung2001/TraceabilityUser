import React, { useState } from "react";
import "./timeline.css";
import Navbar from "../Navbar/Navbar";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

const Timeline = () => {
  const [open, setOpen] = useState(false);
  const handleOpen1 = () => setOpen(!open);

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
                class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-green-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="ml-6">
                <Button color="green" onClick={handleOpen1}>
                  Làm tơi đất , sớt đất
                </Button>
                <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                  Chi tiết làm đất,...
                </p>
                <span class="mt-1 block text-sm font-semibold text-green-500">
                  01/02/2023
                </span>
              </div>
            </div>

            <div class="relative w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-green-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="ml-6">
                {/* <h4 class="font-bold text-green-500">Nhập hạt giống</h4> */}
                <Button color="green" onClick={handleOpen1}>
                  Nhập hạt giống
                </Button>
                <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                  Chi tiết quá trình
                </p>
                <span class="mt-1 block text-sm font-semibold text-green-500">
                  03/03/2023
                </span>
              </div>
            </div>

            <div class="relative w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-green-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="ml-6">
                {/* <h4 class="font-bold text-green-500">Gieo hạt</h4> */}
                <Button color="green" onClick={handleOpen1}>
                  Gieo hạt
                </Button>
                <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                  Chi tiết .....
                </p>
                <span class="mt-1 block text-sm font-semibold text-green-500">
                  10/03/2023
                </span>
              </div>
            </div>

            <div class="relative w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-green-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="ml-6">
                {/* <h4 class="font-bold text-green-500">Phun thuốc trừ sâu</h4> */}
                <Button color="green" onClick={handleOpen1}>
                  Phun thuốc trừ sâu
                </Button>
                <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                  Chi tiết quá trình
                </p>
                <span class="mt-1 block text-sm font-semibold text-green-500">
                  10/05/2023
                </span>
              </div>
            </div>

            <div class="relative w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-green-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="ml-6">
                {/* <h4 class="font-bold text-green-500">Thu hoạch</h4> */}
                <Button color="green" onClick={handleOpen1}>
                  Thu hoạch
                </Button>
                <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                  Chi tiết quá trình
                </p>
                <span class="mt-1 block text-sm font-semibold text-green-500">
                  10/08/2023
                </span>
              </div>
            </div>

            <div class="relative w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-green-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="ml-6">
                {/* <h4 class="font-bold text-green-500">Đóng gói sản phẩm</h4> */}
                <Button color="green" onClick={handleOpen1}>
                  Đóng gói sản phẩm
                </Button>
                <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                  Chi tiết quá trình
                </p>
                <span class="mt-1 block text-sm font-semibold text-green-500">
                  10/08/2023
                </span>
              </div>
            </div>

            <Dialog open={open} handler={handleOpen1}>
              <DialogHeader>Long Dialog</DialogHeader>
              <DialogBody className="h-[42rem] overflow-scroll">
                <Typography className="font-normal">
                  I&apos;ve always had unwavering confidence in my abilities,
                  and I believe our thoughts and self-perception are the primary
                  forces that shape us. Many people limit themselves by their
                  own self-doubt, slowing their progress. Fortunately, I was
                  raised with the belief that I could achieve anything.
                  <br />
                  <br />
                  As we journey through life, we often encounter challenges that
                  harden our hearts. Pain, insults, broken trust, and betrayal
                  can make us hesitant to help others. Love can lead to
                  heartbreak, and time can distance us from family. These
                  experiences can gradually erode our optimism.
                  <br /> <br />
                  Life doesn&apos;t always place us where we want to be. We
                  grow, make mistakes, and strive to express ourselves and
                  fulfill our dreams. If we&apos;re fortunate enough to
                  participate in life&apos;s journey, we should cherish every
                  moment. Regrettably, some only recognize the value of a moment
                  after it&apos;s passed.
                  <br /> <br />
                  One thing I&apos;ve learned is that I can excel at anything I
                  set my mind to. My skill is my ability to learn. I&apos;m here
                  to learn, to grow, and to inspire others to do the same.
                  Don&apos;t fear making mistakes; they teach us far more than
                  compliments ever will. Ultimately, what truly matters is how
                  our actions inspire and motivate others. Some will be ignited
                  by our endeavors, while others may be offended—it&apos;s all
                  part of the process. I'm here to pursue my dreams and
                  encourage others to do the same.
                  <br /> <br />
                  Now is the time to embrace greatness without fear of judgment.
                  Some may resent those who shine brightly or stand out, but
                  it&apos;s time to be the best version of ourselves. Do you
                  have faith in your beliefs, even if you&apos;re the only one
                  who does?
                </Typography>
              </DialogBody>
              <DialogFooter className="space-x-2">
                <Button variant="text" color="blue-gray" onClick={handleOpen1}>
                  cancel
                </Button>
                <Button variant="gradient" color="green" onClick={handleOpen1}>
                  confirm
                </Button>
              </DialogFooter>
            </Dialog>
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;
