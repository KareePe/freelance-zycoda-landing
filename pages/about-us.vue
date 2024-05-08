<template>
  <section class="team mt-[70px]">
    <div class="w-full flex flex-wrap">
      <div
        class="md:basis-6/12 md:order-1 order-2 text-center md:h-[450px] h-[250px] flex justify-center items-center px-[15px]"
      >
        <div>
          <img
            src="/images/logo/dark/logo-dark.svg"
            class="w-[150px] ml-[50%] -translate-x-[50%]"
            alt=""
          />
          <div v-html="locale === 'en' ? zycoda_about_eng : zycoda_about_th" class="text-black mt-[15px]"></div>
        </div>
      </div>
      <div
        class="md:basis-6/12 md:order-2 order-1 text-center h-[450px] flex justify-center items-center"
      >
        <img
          src="/images/AboutUs1_Team.jpg"
          class="w-full h-[450px] object-cover"
          alt=""
        />
      </div>
    </div>
  </section>

  <section class="trust">
    <div class="w-full flex flex-wrap">
      <div
        class="md:basis-6/12 basis-full text-center h-[450px] flex justify-center items-center"
      >
        <iframe
          class="!w-full !h-[450px]"
          width="560"
          height="400"
          src="https://www.youtube.com/embed/ySf-IG7sGpY?si=AROaxOFYl6U4yJuj&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div
        class="md:basis-6/12 text-center md:h-[450px] h-[fit-content] flex justify-center items-center p-[20px]"
      >
        <div>
          <div
            class="flex md:flex-nowrap flex-wrap justify-evenly gap-4 mb-[20px]"
          >
            <div class="text-center">
              <p class="text-blue leading-[0] font-bold">
                {{ $t("trust_t_1") }}
              </p>
              <p class="text-pink font-bold text-[45px]">650</p>
              <p class="text-black">{{ $t("trust_d_1") }}</p>
            </div>
            <div class="text-center">
              <p class="text-blue leading-[0] font-bold">
                {{ $t("trust_t_2") }}
              </p>
              <p class="text-pink font-bold text-[45px]">50</p>
              <p class="text-black">{{ $t("trust_d_2") }}</p>
            </div>
            <div class="text-center">
              <p class="text-blue leading-[0] font-bold">
                {{ $t("trust_t_3") }}
              </p>
              <p class="text-pink font-bold text-[45px]">100M</p>
              <p class="text-black">{{ $t("trust_d_3") }}</p>
            </div>
          </div>
          <p class="text-black font-bold my-[15px] text-[20px]">
            {{ $t("zycoda_trust") }}
          </p>
          <img
            src="/images/logo/dark/logo-dark.svg"
            class="w-[150px] ml-[50%] -translate-x-[50%]"
            alt=""
          />
          <NuxtLink
            to="/contact-us"
            class="capitalize block mt-[15px] w-[fit-content] ml-[50%] -translate-x-[50%] px-8 py-2 bg-[#BF2C7B] text-white-light rounded-full shadow-lg"
            >contact us</NuxtLink
          >
        </div>
      </div>
    </div>
  </section>

  <section class="cta bg-black">
    <div class="container mx-auto p-4">
      <div class="text-center text-white-light py-[100px]">
        <img
          src="/images/logo/light/logo-light.svg"
          class="w-[150px] ml-[50%] -translate-x-[50%]"
          alt=""
        />
        <p class="font-bold md:text-[55px] text-[35px] my-[25px]">
          “EVERYONE CAN BUILD AI”
        </p>
        <p>{{ $t("cta") }}</p>
      </div>
    </div>
  </section>

  <section class="past-activities bg-white-light py-[100px]">
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
import Lightgallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const { locale } = useI18n();

const zycoda_about_eng =
  "AI solution for mechanical maintenance management system to increase <br> machine performance efficiency and reduce costs of production";

  const zycoda_about_th =
  "AI solution สำหรับการบริหารจัดการงานซ่อมบำรุงที่ช่วยเพิ่มประสิทธิภาพการใช้งานของเครื่องจักรและช่วยลดต้นทุนในกระบวนการผลิต";

const plugins = [lgThumbnail, lgZoom];

const onInit = () => {
  console.log("lightGallery has been initialized");
};
const onBeforeSlide = () => {
  console.log("calling before slide");
};
</script>

<style>
@import "lightgallery/css/lightgallery.css";
@import "lightgallery/css/lg-thumbnail.css";
@import "lightgallery/css/lg-zoom.css";
</style>
