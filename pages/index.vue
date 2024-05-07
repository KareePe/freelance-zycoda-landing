<template>
  <SlideBanner />
  <section class="product w-full pt-24 bg-white-light">
    <div class="container mx-auto p-4">
      <h2 class="sm:text-[55px] text-[35px] font-bold capitalize text-black">
        our products
      </h2>
      <p>{{ $t("description_product_index") }}</p>

      <div class="flex flex-wrap gap-4 my-[50px]">
        <div
          class="grow basis-[350px] h-[400px] relative rounded-lg shadow-lg"
          style="
            background: url(/images/business-analytics.png);
            background-size: cover;
            background-position: center;
          "
        >
          <div
            class="bg-gradient-to-b from-pink to-transparent w-full h-full absolute left-0 top-0 z-[1] rounded-lg"
          ></div>
          <div
            class="p-[20px] h-full relative z-[9] flex flex-col justify-between"
          >
            <h2 class="font-bold text-[25px] text-[#fff]">Z-MPRO</h2>

            <div>
              <h3 class="font-bold text-[#fff] text-[20px]">CMMS Platform</h3>
              <p class="text-[#fff] mb-[15px]">
                The comprehensive maintenance system, including PM planning, can
                easily connect with an ERP system. Moreover, it supports another
                module called z-PAP for AI predictive maintenance in the future.
              </p>

              <NuxtLink
                to="/contact-us"
                class="text-[#fff] capitalize text-center bg-pink hover:bg-blue transition-colors duration-300 px-8 py-2 rounded-full shadow-lg mt-[15px]"
                >free trial</NuxtLink
              >
            </div>
          </div>
        </div>
        <div
          class="grow basis-[350px] h-[400px] relative rounded-lg shadow-lg"
          style="
            background: url(/images/cloud-system.png);
            background-size: cover;
            background-position: center;
          "
        >
          <div
            class="bg-gradient-to-b from-blue to-transparent w-full h-full absolute left-0 top-0 z-[1] rounded-lg"
          ></div>
          <div
            class="p-[20px] h-full relative z-[9] flex flex-col justify-between"
          >
            <h2 class="font-bold text-[25px] text-[#fff]">Z-CONNECT</h2>

            <div>
              <h3 class="font-bold text-[#fff] text-[20px]">
                Connectivity Platform
              </h3>
              <p class="text-[#fff] mb-[15px]">
                The system connects data for AI predictive maintenance. We
                provides sensor installation, PLC & SCADA connection, and
                database connection on either cloud or customer-existing
                customers.
              </p>

              <NuxtLink
                to="/contact-us"
                class="text-[#fff] capitalize text-center bg-pink hover:bg-blue transition-colors duration-300 px-8 py-2 rounded-full shadow-lg mt-[15px]"
                >free trial</NuxtLink
              >
            </div>
          </div>
        </div>
        <div
          class="grow basis-[350px] h-[400px] relative rounded-lg shadow-lg"
          style="
            background: url(/images/business-person.png);
            background-size: cover;
            background-position: center;
          "
        >
          <div
            class="bg-gradient-to-b from-black to-transparent w-full h-full absolute left-0 top-0 z-[1] rounded-lg"
          ></div>
          <div
            class="p-[20px] h-full relative z-[9] flex flex-col justify-between"
          >
            <h2 class="font-bold text-[25px] text-[#fff]">Z-PAP</h2>

            <div>
              <h3 class="font-bold text-[#fff] text-[20px]">
                Predictive Analytics Platform
              </h3>
              <p class="text-[#fff] mb-[15px]">
                The system works with data, AI, and ML to do predictive
                maintenance. In addition, this user-friendly platform does not
                require any coding skills because of its “Anomaly Detection”
                feature.
              </p>

              <NuxtLink
                to="/contact-us"
                class="text-[#fff] capitalize text-center bg-pink hover:bg-blue transition-colors duration-300 px-8 py-2 rounded-full shadow-lg mt-[15px]"
                >free trial</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="testimonial w-full pt-24 bg-black">
    <div class="container mx-auto p-4">
      <h2
        class="sm:text-[55px] text-[35px] font-bold capitalize text-white-light text-center"
      >
        "Discover why countless industries and engineers confidently choose our
        trusted solutions."
      </h2>
    </div>

    <div class="mt-[50px]">
      <swiper
        :slidesPerView="1"
        :spaceBetween="0"
        :centeredSlides="false"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :navigation="false"
        :breakpoints="{
          '480': {
            slidesPerView: 1,
          },
          '640': {
            slidesPerView: 2,
          },
          '768': {
            slidesPerView: 2,
          },
          '1024': {
            slidesPerView: 4,
          },
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <div class="group relative cursor-pointer">
            <div
              class="bg-black/45 w-full h-full absolute top-0 left-0 group-hover:bg-black/0 transition-all duration-300"
            ></div>
            <img src="/images/employees/code.png" class="w-full" />

            <div class="absolute z-[9] top-0 my-4 mx-4">
              <p
                class="text-[14px] text-[#fff] group-hover:text-pink transition-all duration-300"
              >
                Chinaphan Sukakarnpadoong
              </p>
              <h3
                class="font-bold text-[#fff] group-hover:text-blue transition-all duration-300"
              >
                {{ $t("emp_1") }}
              </h3>
            </div>

            <div
              class="text-[#fff] absolute z-[9] bottom-0 py-4 px-4 text-[14px]"
            >
              <p>Operation Excellence and Industry 4.0 Director</p>
              <p>SCG Cement Building Materials</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="group relative cursor-pointer">
            <div
              class="bg-black/45 w-full h-full absolute top-0 left-0 group-hover:bg-black/0 transition-all duration-300"
            ></div>
            <img src="/images/employees/code.png" class="w-full" />

            <div class="absolute z-[9] top-0 my-4 mx-4">
              <p
                class="text-[14px] text-[#fff] group-hover:text-pink transition-all duration-300"
              >
                Niwit Khruesarn
              </p>
              <h3
                class="font-bold text-[#fff] group-hover:text-blue transition-all duration-300"
              >
                {{ $t("emp_2") }}
              </h3>
            </div>

            <div
              class="text-[#fff] absolute z-[9] bottom-0 py-4 px-4 text-[14px]"
            >
              <p>Maintenance & Engineering Manager</p>
              <p>Government Pharmaceutical Organization (GPO)</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="group relative cursor-pointer">
            <div
              class="bg-black/45 w-full h-full absolute top-0 left-0 group-hover:bg-black/0 transition-all duration-300"
            ></div>
            <img src="/images/employees/code.png" class="w-full" />

            <div class="absolute z-[9] top-0 my-4 mx-4">
              <p
                class="text-[14px] text-[#fff] group-hover:text-pink transition-all duration-300"
              >
                Soontorn Sri-on
              </p>
              <h3
                class="font-bold text-[#fff] group-hover:text-blue transition-all duration-300"
              >
                {{ $t("emp_3") }}
              </h3>
            </div>

            <div
              class="text-[#fff] absolute z-[9] bottom-0 py-4 px-4 text-[14px]"
            >
              <p>Systematic Preventive Maintenance Specialist</p>
              <p>SCG Cement Building Materials</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="group relative cursor-pointer">
            <div
              class="bg-black/45 w-full h-full absolute top-0 left-0 group-hover:bg-black/0 transition-all duration-300"
            ></div>
            <img src="/images/employees/code.png" class="w-full" />

            <div class="absolute z-[9] top-0 my-4 mx-4">
              <p
                class="text-[14px] text-[#fff] group-hover:text-pink transition-all duration-300"
              >
                Weerapong Chootong
              </p>
              <h3
                class="font-bold text-[#fff] group-hover:text-blue transition-all duration-300"
              >
                {{ $t("emp_4") }}
              </h3>
            </div>

            <div
              class="text-[#fff] absolute z-[9] bottom-0 py-4 px-4 text-[14px]"
            >
              <p>Energy Control SectionManager</p>
              <p>Bangkok Solar Power</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>

  <section class="blog bg-white-light py-[100px]">
    <div class="container mx-auto p-4">
      <h2 class="sm:text-[55px] text-[35px] font-bold capitalize text-black">
        {{ $t("blog") }}
      </h2>
      <p>{{ $t("description_blog_index") }}</p>

      <div class="my-[50px] flex flex-wrap -px-[15]">
        <div class="md:basis-8/12 basis-full relative px-2">
          <div
            class="rounded-lg shadow-lg h-[400px] relative"
            style="
              background: url(/images/cloud-system.png);
              background-size: cover;
              background-position: center;
            "
          >
            <div
              class="bg-gradient-to-t from-blue to-transparent w-full h-full absolute left-0 top-0 z-[1] rounded-lg"
            ></div>
            <div
              class="h-[fit-content] w-full absolute bottom-0 p-4 z-[9] flex justify-between items-center bg-[#2A282F]/50 backdrop-blur-lg rounded-b-lg"
            >
              <div class="max-w-[75%]">
                <h3 class="font-bold text-[#fff] text-[20px] line-clamp-2">
                  Hackathon & Pitching E-SARN Thailand PMU-B Coding & AI Academy
                </h3>
              </div>

              <NuxtLink
                to="/contact-us"
                class="text-[#fff] capitalize text-center bg-pink hover:bg-blue transition-colors duration-300 w-[50px] h-[50px] block rounded-md shadow-xl"
              >
                <vue-feather
                  type="chevron-right"
                  class="ml-[50%] mt-[50%] -translate-x-[50%] -translate-y-[50%]"
                ></vue-feather>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="md:basis-4/12 basis-full relative px-2">
          <div
            class="rounded-lg shadow-lg h-[400px] relative"
            style="
              background: url(/images/engineer-technician-working-with-robot-arm-factory-industry-engineering-concept.jpeg);
              background-size: cover;
              background-position: center;
            "
          >
            <div
              class="bg-gradient-to-t from-blue to-transparent w-full h-full absolute left-0 top-0 z-[1] rounded-lg"
            ></div>
            <div
              class="h-[fit-content] w-full absolute bottom-0 p-4 z-[9] flex justify-between items-center bg-[#2A282F]/50 backdrop-blur-lg rounded-b-lg"
            >
              <div class="max-w-[75%]">
                <h3 class="font-bold text-[#fff] text-[20px] line-clamp-2">
                  Hackathon & Pitching E-SARN Thailand PMU-B Coding & AI Academy
                </h3>
              </div>

              <NuxtLink
                to="/contact-us"
                class="text-[#fff] capitalize text-center bg-pink hover:bg-blue transition-colors duration-300 w-[50px] h-[50px] block rounded-md shadow-xl"
              >
                <vue-feather
                  type="chevron-right"
                  class="ml-[50%] mt-[50%] -translate-x-[50%] -translate-y-[50%]"
                ></vue-feather>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="md:basis-4/12 basis-full relative px-2 py-4">
          <div
            class="rounded-lg shadow-lg h-[400px] relative"
            style="
              background: url(/images/representation-user-experience-interface-design.png);
              background-size: cover;
              background-position: center;
            "
          >
            <div
              class="bg-gradient-to-t from-blue to-transparent w-full h-full absolute left-0 top-0 z-[1] rounded-lg"
            ></div>
            <div
              class="h-[fit-content] w-full absolute bottom-0 p-4 z-[9] flex justify-between items-center bg-[#2A282F]/50 backdrop-blur-lg rounded-b-lg"
            >
              <div class="max-w-[75%]">
                <h3 class="font-bold text-[#fff] text-[20px] line-clamp-2">
                  Hackathon & Pitching E-SARN Thailand PMU-B Coding & AI Academy
                </h3>
              </div>

              <NuxtLink
                to="/contact-us"
                class="text-[#fff] capitalize text-center bg-pink hover:bg-blue transition-colors duration-300 w-[50px] h-[50px] block rounded-md shadow-xl"
              >
                <vue-feather
                  type="chevron-right"
                  class="ml-[50%] mt-[50%] -translate-x-[50%] -translate-y-[50%]"
                ></vue-feather>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="md:basis-4/12 basis-full relative px-2 py-4">
          <div
            class="rounded-lg shadow-lg h-[400px] relative"
            style="
              background: url(/images/stylish.jpg);
              background-size: cover;
              background-position: center;
            "
          >
            <div
              class="bg-gradient-to-t from-blue to-transparent w-full h-full absolute left-0 top-0 z-[1] rounded-lg"
            ></div>
            <div
              class="h-[fit-content] w-full absolute bottom-0 p-4 z-[9] flex justify-between items-center bg-[#2A282F]/50 backdrop-blur-lg rounded-b-lg"
            >
              <div class="max-w-[75%]">
                <h3 class="font-bold text-[#fff] text-[20px] line-clamp-2">
                  Hackathon & Pitching E-SARN Thailand PMU-B Coding & AI Academy
                </h3>
              </div>

              <NuxtLink
                to="/contact-us"
                class="text-[#fff] capitalize text-center bg-pink hover:bg-blue transition-colors duration-300 w-[50px] h-[50px] block rounded-md shadow-xl"
              >
                <vue-feather
                  type="chevron-right"
                  class="ml-[50%] mt-[50%] -translate-x-[50%] -translate-y-[50%]"
                ></vue-feather>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="md:basis-4/12 basis-full relative px-2 py-4">
          <div
            class="rounded-lg shadow-lg h-[400px] relative"
            style="
              background: url(/images/business-analytics.png);
              background-size: cover;
              background-position: center;
            "
          >
            <div
              class="bg-gradient-to-t from-blue to-transparent w-full h-full absolute left-0 top-0 z-[1] rounded-lg"
            ></div>
            <div
              class="h-[fit-content] w-full absolute bottom-0 p-4 z-[9] flex justify-between items-center bg-[#2A282F]/50 backdrop-blur-lg rounded-b-lg"
            >
              <div class="max-w-[75%]">
                <h3 class="font-bold text-[#fff] text-[20px] line-clamp-2">
                  Hackathon & Pitching E-SARN Thailand PMU-B Coding & AI Academy
                </h3>
              </div>

              <NuxtLink
                to="/contact-us"
                class="text-[#fff] capitalize text-center bg-pink hover:bg-blue transition-colors duration-300 w-[50px] h-[50px] block rounded-md shadow-xl"
              >
                <vue-feather
                  type="chevron-right"
                  class="ml-[50%] mt-[50%] -translate-x-[50%] -translate-y-[50%]"
                ></vue-feather>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="past-activities bg-white-light pb-[100px]">
    <div class="container mx-auto p-4">
      <h2
        class="sm:text-[55px] text-center text-[35px] font-bold capitalize text-black"
      >
        Past-Activities
      </h2>

      <lightgallery
        :settings="{
          speed: 500,
          plugins: plugins,
          lastRow: false,
          rowHeight: 180,
          margins: 5,
        }"
        :onInit="onInit"
        :onBeforeSlide="onBeforeSlide"
        class="mt-[50px]"
      >
        <a href="/images/activities/PastActivity_Automation2024_1.jpg">
          <img
            alt="img1"
            class="max-w-full block"
            src="/images/activities/PastActivity_Automation2024_1.jpg"
          />
        </a>
        <a href="/images/activities/PastActivity_Automation2024_2.jpg">
          <img
            alt="img1"
            class="max-w-full block"
            src="/images/activities/PastActivity_Automation2024_2.jpg"
          />
        </a>
        <a href="/images/activities/PastActivity_Automation2024_3.jpg">
          <img
            alt="img1"
            class="max-w-full block"
            src="/images/activities/PastActivity_Automation2024_3.jpg"
          />
        </a>
        <a href="/images/activities/PastActivity_SM2023_1.jpg">
          <img
            alt="img1"
            class="max-w-full block"
            src="/images/activities/PastActivity_SM2023_1.jpg"
          />
        </a>
        <a href="/images/activities/PastActivity_Techsauce2023_1.jpg">
          <img
            alt="img1"
            class="max-w-full block"
            src="/images/activities/PastActivity_Techsauce2023_1.jpg"
          />
        </a>
        <a href="/images/activities/PastActivity_Techsauce2023_2.jpg">
          <img
            alt="img1"
            class="max-w-full block"
            src="/images/activities/PastActivity_Techsauce2023_2.jpg"
          />
        </a>
        <a href="/images/activities/PastActivity_Techsauce2023_3.jpg">
          <img
            alt="img1"
            class="max-w-full block"
            src="/images/activities/PastActivity_Techsauce2023_3.jpg"
          />
        </a>
        <a href="/images/activities/PastActivity_YT2024_1.jpg">
          <img
            alt="img1"
            class="max-w-full block"
            src="/images/activities/PastActivity_YT2024_1.jpg"
          />
        </a>
        <a href="/images/activities/PastActivity_YT2024_2.jpg">
          <img
            alt="img1"
            class="max-w-full block"
            src="/images/activities/PastActivity_YT2024_2.jpg"
          />
        </a>
      </lightgallery>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import VueFeather from "vue-feather";

import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import Lightgallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// If you are using scss you can skip the css imports below and use scss instead
// import styles from "lightgallery/scss/lightgallery.scss";

const plugins = [lgThumbnail, lgZoom];

const onInit = () => {
  console.log("lightGallery has been initialized");
};
const onBeforeSlide = () => {
  console.log("calling before slide");
};

const onSwiper = (swiper) => {
  return swiper;
};

const onSlideChange = () => {};

const modules = [Navigation, Pagination, Autoplay, EffectFade];

useSeoMeta({
  title: 'ZYCODA',
  ogTitle: 'ZYCODA',
  description: 'ZYCODA aims to advance Thailand industry by implementing AI through the mechanical maintenance management system',
  ogDescription: 'ZYCODA aims to advance Thailand industry by implementing AI through the mechanical maintenance management system',
  ogImage: '/images/logo/dark/logo-dark.png',
  twitterCard: 'summary_large_image',
})
</script>

<style>
@import "lightgallery/css/lightgallery.css";
@import "lightgallery/css/lg-thumbnail.css";
@import "lightgallery/css/lg-zoom.css";

#lg-container-1 {
  position: relative;
  z-index: 99999;
}

.lightgallery-vue {
  column-count: 4;
  column-gap: 10px;
}

@media screen and (max-width: 991px) {
  .lightgallery-vue {
    column-count: 2;
  }
}

/* .lightgallery-vue a > img {
  max-width: 100%;
  display: block;
} */

.lightgallery-vue a {
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 10px;
  break-inside: avoid;
}

.lightgallery-vue a > img {
  grid-row: 1 / -1;
  grid-column: 1;
}
</style>
