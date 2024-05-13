<template>
  <section class="product mt-[70px] bg-white-light">
    <div class="py-[50px] text-center">
      <h1 class="font-bold text-[45px]">Product Working Flow</h1>
    </div>

    <img
      src="/images/jump_en.png"
      class="absolute left-[50px] mt-[20px] arrow md:block hidden"
      alt=""
    />
    <!-- <div
      class="w-[2px] min-h-[350px] bg-black absolute left-[50px] mt-[20px] arrow"
    ></div> -->
    <div class="container mx-auto p-4">
      <section class="flex flex-nowrap">
        <div class="max-w-[10%] w-full h-full relative md:block hidden"></div>
        <div class="md:max-w-[90%] max-w-full w-full">
          <p class="text-black text-[14px] font-bold">
            Begin your digital transformation
          </p>
          <div class="mb-[65px]">
            <h1 class="text-[45px] text-pink font-bold">Z-MPRO</h1>
            <div class="w-full h-[2px] bg-black my-[15px]"></div>
            <div class="flex lg:flex-nowrap flex-wrap gap-[20px]">
              <div
                class="lg:basis-6/12 basis-full min-h-[290px] bg-blue py-5 px-8 rounded-lg mt-8"
              >
                <div>
                  <h2 class="text-[18px] text-[#fff] font-bold">
                    {{
                      locale === "en"
                        ? "Managing all maintenance components within one platform"
                        : "การจัดการส่วนประกอบการบำรุงรักษาทั้งหมดภายในแพลตฟอร์มเดียว"
                    }}
                  </h2>
                  <p class="text-[16px] text-[#fff] mt-[20px]">
                    {{
                      locale === "en"
                        ? "If your factory has more than 30 machines and more than 5 employees in a maintenance department, Z-MPRO platform can help you to generate and monitor workload along with your ISO quality control system"
                        : "หากโรงงานของคุณมีเครื่องจักรมากกว่า 30 เครื่องและพนักงานมากกว่า 5 คนในแผนกบำรุงรักษา แพลตฟอร์ม Z-MPRO สามารถช่วยคุณสร้างและติดตามปริมาณงานพร้อมกับระบบควบคุมคุณภาพ ISO ของคุณได้"
                    }}
                  </p>
                  <NuxtLink
                    to="/contact-us"
                    class="text-[#fff] block w-[fit-content] capitalize text-center bg-pink hover:bg-blue transition-colors duration-300 px-8 py-2 rounded-full shadow-lg mt-[15px]"
                    >free trial</NuxtLink
                  >
                </div>
              </div>
              <div class="lg:basis-6/12 basis-full">
                <div
                  class="lg:max-w-[600px] max-w-[300px] ml-[50%] -translate-x-[50%] w-full h-full"
                >
                  <swiper
                    :pagination="{
                      dynamicBullets: true,
                    }"
                    :autoplay="{
                      delay: 2500,
                      disableOnInteraction: false,
                    }"
                    :modules="modules"
                    class="mySwiper mt-8 bg-[#fff] rounded-lg"
                  >
                    <swiper-slide>
                      <img
                        src="/images/products/Z_MPRO_1.png"
                        class="w-full"
                        alt=""
                      />
                    </swiper-slide>
                    <swiper-slide>
                      <img
                        src="/images/products/Z_MPRO_2.png"
                        class="w-full"
                        alt=""
                      />
                    </swiper-slide>
                    <swiper-slide>
                      <img
                        src="/images/products/Z_MPRO_3.png"
                        class="w-full"
                        alt=""
                      />
                    </swiper-slide>
                    <swiper-slide>
                      <img
                        src="/images/products/Z_MPRO_4.png"
                        class="w-full"
                        alt=""
                      />
                    </swiper-slide>
                    <swiper-slide>
                      <img
                        src="/images/products/Z_MPRO_5.png"
                        class="w-full"
                        alt=""
                      />
                    </swiper-slide>
                    <swiper-slide>
                      <img
                        src="/images/products/Z_MPRO_6.png"
                        class="w-full"
                        alt=""
                      />
                    </swiper-slide>
                  </swiper>
                </div>
              </div>
            </div>
          </div>

          <div class="mb-[65px]">
            <h1 class="text-[45px] text-pink font-bold text-right">
              Z-Connect
            </h1>
            <div class="w-full h-[2px] bg-black my-[15px]"></div>
            <div class="flex lg:flex-nowrap flex-wrap gap-[20px]">
              <div class="lg:basis-6/12 basis-full">
                <div
                  class="lg:max-w-[600px] max-w-[300px] ml-[50%] -translate-x-[50%] w-full h-full"
                >
                  <swiper
                    :pagination="{
                      dynamicBullets: true,
                    }"
                    :autoplay="{
                      delay: 2500,
                      disableOnInteraction: false,
                    }"
                    :modules="modules"
                    class="mySwiper mt-8 bg-[#fff] rounded-lg"
                  >
                    <swiper-slide>
                      <img
                        src="/images/products/Z_Connect_2.png"
                        class="w-full"
                        alt=""
                      />
                    </swiper-slide>
                    <swiper-slide>
                      <img
                        src="/images/products/Z_Connect_1.png"
                        class="w-full"
                        alt=""
                      />
                    </swiper-slide>
                    <swiper-slide>
                      <img
                        src="/images/products/Z-Connect.png"
                        class="w-full"
                        alt=""
                      />
                    </swiper-slide>
                  </swiper>
                </div>
              </div>
              <div
                class="lg:basis-6/12 basis-full min-h-[290px] bg-black py-5 px-8 rounded-lg mt-8"
              >
                <div>
                  <h2 class="text-[18px] text-[#fff] font-bold"><pre></pre></h2>
                  <p class="text-[16px] text-[#fff] mt-[20px]">
                    {{
                      locale === "en"
                        ? "Even you have special machines or bottleneck machines 80% of utilization, Z-Connect still be able to generate machine data through sensors and show their real-time performance in a form of dashboard"
                        : "แม้ว่าคุณจะมีเครื่องจักรพิเศษหรือเครื่องจักรที่มีปัญหาคอขวดถึง 80% ของการใช้งาน Z-Connect ยังคงสามารถสร้างข้อมูลเครื่องจักรผ่านเซ็นเซอร์และแสดงประสิทธิภาพแบบเรียลไทม์ในรูปแบบของแดชบอร์ด"
                    }}
                  </p>
                  <div class="w-full flex justify-end">
                    <NuxtLink
                      to="/contact-us"
                      class="text-[#fff] block w-[fit-content] capitalize text-center bg-pink hover:bg-blue transition-colors duration-300 px-8 py-2 rounded-full shadow-lg mt-[15px]"
                      >free trial</NuxtLink
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mb-[65px]">
            <h1 class="text-[45px] text-pink font-bold">Z-PAP</h1>
            <div class="w-full h-[2px] bg-black my-[15px]"></div>
            <div class="flex lg:flex-nowrap flex-wrap gap-[20px]">
              <div
                class="lg:basis-6/12 basis-full min-h-[290px] bg-[#fff] py-5 px-8 rounded-lg mt-8"
              >
                <div>
                  <h2 class="text-[18px] text-black font-bold">
                    <pre></pre>
                  </h2>
                  <p class="text-[16px] text-black mt-[20px]">
                    {{
                      locale === "en"
                        ? "Z-PAP with flexible functions can operate with machines having various condition, and the platform will notify workers before machine- breakdown. Solutions are also suggested based on machine learning"
                        : "Z-PAP พร้อมฟังก์ชันที่ยืดหยุ่นสามารถทำงานได้กับเครื่องจักรที่มีสภาวะต่างๆ และแพลตฟอร์มจะแจ้งให้พนักงานทราบก่อนที่เครื่องจักรจะเสียหาย นอกจากนี้ยังมีการแนะนำโซลูชันโดยอิงจากการเรียนรู้ของเครื่องด้วย"
                    }}
                  </p>
                  <NuxtLink
                    to="/contact-us"
                    class="text-[#fff] block w-[fit-content] capitalize text-center bg-pink hover:bg-blue transition-colors duration-300 px-8 py-2 rounded-full shadow-lg mt-[15px]"
                    >free trial</NuxtLink
                  >
                </div>
              </div>
              <div class="lg:basis-6/12 basis-full">
                <div
                  class="lg:max-w-[600px] max-w-[300px] ml-[50%] -translate-x-[50%] w-full h-full"
                >
                  <swiper
                    :pagination="{
                      dynamicBullets: true,
                    }"
                    :autoplay="{
                      delay: 2500,
                      disableOnInteraction: false,
                    }"
                    :modules="modules"
                    class="mySwiper mt-8 bg-[#fff] rounded-lg"
                  >
                    <swiper-slide>
                      <img
                        src="/images/products/Z_PAP_1.png"
                        class="w-full"
                        alt=""
                      />
                    </swiper-slide>
                    <swiper-slide>
                      <img
                        src="/images/products/Z_PAP_2.png"
                        class="w-full"
                        alt=""
                      />
                    </swiper-slide>
                    <swiper-slide>
                      <img
                        src="/images/products/Z-PAP.png"
                        class="w-full"
                        alt=""
                      />
                    </swiper-slide>
                  </swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="w-full flex-wrap hidden">
      <div
        class="lg:basis-5/12 md:basis-6/12 basis-full md:order-1 order-2 text-center h-[fit-content] flex justify-center items-center px-[15px] py-[25px] bg-black"
      >
        <div class="text-center text-[#fff]">
          <h1 class="text-[35px] font-bold">Z-MPRO</h1>
          <h2>CMMS Software</h2>

          <div class="flex md:flex-nowrap flex-wrap gap-[15px] my-[15px]">
            <div class="bg-pink rounded-lg p-[15px] !text-left w-full">
              <p class="font-bold">Product Module</p>
              <ul class="list-disc pl-[20px]">
                <li>Asset Management</li>
                <li>Job Order Management</li>
                <li>Time Base Management</li>
                <li>Planning & Scheduling</li>
                <li>Maintenance Cost Management</li>
                <li>Performance Monitoring</li>
              </ul>
            </div>
            <div class="bg-blue rounded-lg p-[15px] !text-left w-full">
              <p class="font-bold">Suitable for Factories</p>
              <ul class="list-disc pl-[20px]">
                <li>Having more than 30 machines</li>
                <li>
                  Having more than 5 employees in a maintenance department
                </li>
                <li>Having the ISO quality control system</li>
              </ul>
            </div>
          </div>

          <NuxtLink
            to="/contact-us"
            class="text-[#fff] capitalize text-center bg-pink hover:bg-blue transition-colors duration-300 px-8 py-2 rounded-full shadow-lg mt-[15px]"
            >free trial</NuxtLink
          >
        </div>
      </div>

      <div
        class="lg:basis-7/12 md:basis-6/12 basis-full md:order-2 order-1 text-center min-h-[354px] flex justify-center items-center px-[15px] py-[25px]"
      >
        <img
          src="/images/products/Z-MPRO.png"
          class="md:max-w-[65%] max-w-[90%]"
          alt=""
        />
      </div>
    </div>

    <div class="w-full hidden flex-wrap">
      <div
        class="lg:basis-7/12 md:basis-6/12 basis-full text-center min-h-[354px] flex justify-center items-center px-[15px] py-[25px]"
      >
        <img
          src="/images/products/Z-Connect.png"
          class="md:max-w-[65%] max-w-[90%]"
          alt=""
        />
      </div>
      <div
        class="lg:basis-5/12 md:basis-6/12 basis-full text-center h-[fit-content] flex justify-center items-center px-[15px] py-[25px] bg-black"
      >
        <div class="text-center text-[#fff]">
          <h1 class="text-[35px] font-bold">Z-CONNECT</h1>
          <h2>Sensor Monitoring Software</h2>

          <div class="flex md:flex-nowrap flex-wrap gap-[15px] my-[15px]">
            <div class="bg-pink rounded-lg p-[15px] !text-left w-full">
              <p class="font-bold">Product Module</p>
              <ul class="list-disc pl-[20px]">
                <li>Sensor Vibration & Temperature</li>
                <li>Online Parameter Monitoring</li>
                <li>Notification System Offline</li>
                <li>Alarm Notification with Static Limit</li>
              </ul>
            </div>
            <div class="bg-blue rounded-lg p-[15px] !text-left w-full">
              <p class="font-bold">Suitable for Factories</p>
              <ul class="list-disc pl-[20px]">
                <li>Having special machines or bottleneck machines</li>
                <li>Having more than 80% of utilization</li>
              </ul>
            </div>
          </div>

          <NuxtLink
            to="/contact-us"
            class="text-[#fff] capitalize text-center bg-pink hover:bg-blue transition-colors duration-300 px-8 py-2 rounded-full shadow-lg mt-[15px]"
            >free trial</NuxtLink
          >
        </div>
      </div>
    </div>

    <div class="w-full hidden flex-wrap">
      <div
        class="lg:basis-5/12 md:basis-6/12 basis-full md:order-1 order-2 text-center h-[fit-content] flex justify-center items-center px-[15px] py-[25px] bg-black"
      >
        <div class="text-center text-[#fff]">
          <h1 class="text-[35px] font-bold">Z-PAP</h1>
          <h2>Predictive Analytics Platform & Real-Time AI Monitoring</h2>

          <div class="flex md:flex-nowrap flex-wrap gap-[15px] my-[15px]">
            <div class="bg-pink rounded-lg p-[15px] !text-left w-full">
              <p class="font-bold">Product Module</p>
              <ul class="list-disc pl-[20px]">
                <li>Asset Management</li>
                <li>Job Order Management</li>
                <li>Time Base Management</li>
                <li>Planning & Scheduling</li>
                <li>Maintenance Cost Management</li>
                <li>Performance Monitoring</li>
              </ul>
            </div>
            <div class="bg-blue rounded-lg p-[15px] !text-left w-full">
              <p class="font-bold">Suitable for Factories</p>
              <ul class="list-disc pl-[20px]">
                <li>Having more than 30 machines</li>
                <li>
                  Having more than 5 employees in a maintenance department
                </li>
                <li>Having the ISO quality control system</li>
              </ul>
            </div>
          </div>

          <NuxtLink
            to="/contact-us"
            class="text-[#fff] capitalize text-center bg-pink hover:bg-blue transition-colors duration-300 px-8 py-2 rounded-full shadow-lg mt-[15px]"
            >free trial</NuxtLink
          >
        </div>
      </div>

      <div
        class="lg:basis-7/12 md:basis-6/12 basis-full md:order-2 order-1 text-center min-h-[354px] flex justify-center items-center px-[15px] py-[25px]"
      >
        <img
          src="/images/products/Z-PAP.png"
          class="md:max-w-[65%] max-w-[90%]"
          alt=""
        />
      </div>
    </div>
  </section>

  <section class="product-footer bg-gradient-to-r from-blue to-black">
    <div class="container mx-auto p-4 py-[100px]">
      <div>
        <h3 class="text-[#fff] font-bold text-[45px] text-center">
          {{ $t("getpro") }}
        </h3>
        <div class="w-full flex justify-center">
          <NuxtLink
            to="/contact-us"
            class="text-[#fff] block w-[fit-content] capitalize text-center bg-pink hover:bg-blue transition-colors duration-300 px-8 py-2 rounded-full shadow-lg mt-[15px]"
            >free trial</NuxtLink
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const { locale } = useI18n();

const onBeforeSlide = () => {
  console.log("calling before slide");
};

const onSwiper = (swiper) => {
  return swiper;
};

const onSlideChange = () => {};

const modules = [Pagination, Autoplay];

let windowTop = 0;

onMounted(() => {
  window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    const arrow = document.querySelector(".arrow");

    if (window.scrollY >= 170) {
      arrow.classList.add("!fixed");
      arrow.classList.add("!top-[85px]");
    } else {
      arrow.classList.remove("!fixed");
      arrow.classList.remove("!top-[85px]");
    }
  });
});

useSeoMeta({
  title: "ZYCODA | Product Working Flow",
  ogTitle: "ZYCODA | Product Working Flow",
  description:
    "ZYCODA CMMS Software Sensor Monitoring Software Predictive Analytics Platform & Real-Time AI Monitoring",
  ogDescription:
    "ZYCODA CMMS Software Sensor Monitoring Software Predictive Analytics Platform & Real-Time AI Monitoring",
  ogImage: "/images/products/Z-Connect.png",
  twitterCard: "summary_large_image",
});
</script>

<style></style>
