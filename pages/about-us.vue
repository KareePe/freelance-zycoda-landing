<template>
  <section
    class="team mt-[70px] md:h-[500px] h-[250px] bg-[url(/images/AboutUs1_Team.jpg)] bg-black/45 bg-blend-multiply bg-center bg-cover flex justify-center items-center"
  >
    <div>
      <img
        src="/images/logo/light/logo-light.svg"
        class="max-w-[350px] ml-[50%] -translate-x-[50%]"
        alt=""
      />
      <div
        v-html="locale === 'en' ? zycoda_about_eng : zycoda_about_th"
        class="text-[#fff] text-center mt-[15px]"
      ></div>
    </div>
  </section>

  <section class="container mx-auto p-4 py-[50px]">
    <h1 class="text-[45px] text-black font-bold text-center">
      “EVERYONE CAN BUILD AI”
    </h1>
    <p
      class="text-black text-center md:ml-[50%] ml-0 md:-translate-x-[50%] -translate-x-0 mt-4"
    >
      {{ $t("cta") }}
    </p>
  </section>

  <section class="trust-video">
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
        class="md:basis-6/12 text-center md:h-[450px] bg-black h-[fit-content] flex justify-center items-center p-[20px]"
      >
        <div>
          <h1 class="text-pink text-[35px] font-bold text-center">
            Zycoda's Products
          </h1>
          <div
            v-html="locale === 'en' ? zycoda_about_eng : zycoda_about_th"
            class="text-white-light text-center"
          ></div>
        </div>
      </div>
    </div>
  </section>

  <section class="trust">
    <div class="w-full flex flex-wrap">
      <div
        class="basis-full text-center md:h-[450px] h-[fit-content] flex justify-center items-center p-[20px]"
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

    <div class="container mx-auto p-4">
      <img src="/images/AboutUs2.png" class="w-full" alt="" />
    </div>
  </section>

  <section
    class="past-activities bg-white-light pb-[100px] pt-[100px] mt-[70px]"
  >
    <div class="">
      <h2
        class="sm:text-[55px] text-center text-[35px] font-bold capitalize text-black"
      >
        {{ $t("pastactivity") }}
      </h2>

      <div class="lightgallery-vue mt-[50px]">
        <a
          href="https://www.facebook.com/zycoda.saas"
          target="_blank"
          class="block relative group"
        >
          <div
            class="bg-black/35 group-hover:bg-black/0 transition-all duration-300 absolute top-0 w-full h-full"
          ></div>
          <img
            alt="img1"
            class="max-w-full block"
            src="/images/activities/PastActivity_Automation2024_1.jpg"
          />
          <p
            class="text-[#fff] text-[18px] font-bold absolute bottom-4 left-4 group-hover:underline z-[9]"
          >
            Automation2024
          </p>
        </a>
        <a
          href="https://www.facebook.com/zycoda.saas"
          target="_blank"
          class="block relative group"
        >
          <div
            class="bg-black/35 group-hover:bg-black/0 transition-all duration-300 absolute top-0 w-full h-full"
          ></div>
          <img
            alt="img1"
            class="max-w-full block"
            src="/images/activities/PastActivity_SM2023_2.jpg"
          />
          <p
            class="text-[#fff] text-[18px] font-bold absolute bottom-4 left-4 group-hover:underline z-[9]"
          >
            SM2023
          </p>
        </a>
        <a
          href="https://www.facebook.com/zycoda.saas"
          target="_blank"
          class="block relative group"
        >
          <div
            class="bg-black/35 group-hover:bg-black/0 transition-all duration-300 absolute top-0 w-full h-full"
          ></div>
          <img
            alt="img1"
            class="max-w-full block"
            src="/images/activities/PastActivity_SM2023_1.jpg"
          />
          <p
            class="text-[#fff] text-[18px] font-bold absolute bottom-4 left-4 group-hover:underline z-[9]"
          >
            SM2023
          </p>
        </a>
        <a
          href="https://www.facebook.com/zycoda.saas"
          target="_blank"
          class="block relative group"
        >
          <div
            class="bg-black/35 group-hover:bg-black/0 transition-all duration-300 absolute top-0 w-full h-full"
          ></div>
          <img
            alt="img1"
            class="max-w-full block"
            src="/images/activities/PastActivity_Automation2024_3.jpg"
          />
          <p
            class="text-[#fff] text-[18px] font-bold absolute bottom-4 left-4 group-hover:underline z-[9]"
          >
            Automation2024
          </p>
        </a>
        <a
          href="https://www.facebook.com/zycoda.saas"
          target="_blank"
          class="block relative group"
        >
          <div
            class="bg-black/35 group-hover:bg-black/0 transition-all duration-300 absolute top-0 w-full h-full"
          ></div>
          <img
            alt="img1"
            class="max-w-full block"
            src="/images/activities/PastActivity_YT2024_2.jpg"
          />
          <p
            class="text-[#fff] text-[18px] font-bold absolute bottom-4 left-4 group-hover:underline z-[9]"
          >
            YT2024
          </p>
        </a>
        <a
          href="https://www.facebook.com/zycoda.saas"
          target="_blank"
          class="block relative group"
        >
          <div
            class="bg-black/35 group-hover:bg-black/0 transition-all duration-300 absolute top-0 w-full h-full"
          ></div>
          <img
            alt="img1"
            class="max-w-full block"
            src="/images/activities/PastActivity_YT2024_1.jpg"
          />
          <p
            class="text-[#fff] text-[18px] font-bold absolute bottom-4 left-4 group-hover:underline z-[9]"
          >
            YT2024
          </p>
        </a>
        <a
          href="https://www.facebook.com/zycoda.saas"
          target="_blank"
          class="block relative group"
        >
          <div
            class="bg-black/35 group-hover:bg-black/0 transition-all duration-300 absolute top-0 w-full h-full"
          ></div>
          <img
            alt="img1"
            class="max-w-full block"
            src="/images/activities/PastActivity_Automation2024_2.jpg"
          />
          <p
            class="text-[#fff] text-[18px] font-bold absolute bottom-4 left-4 group-hover:underline z-[9]"
          >
            Automation2024
          </p>
        </a>
        <a
          href="https://www.facebook.com/zycoda.saas"
          target="_blank"
          class="block relative group"
        >
          <div
            class="bg-black/35 group-hover:bg-black/0 transition-all duration-300 absolute top-0 w-full h-full"
          ></div>
          <img
            alt="img1"
            class="max-w-full block"
            src="/images/activities/PastActivity_Techsauce2023_1.jpg"
          />
          <p
            class="text-[#fff] text-[18px] font-bold absolute bottom-4 left-4 group-hover:underline z-[9]"
          >
            Techsauce2023
          </p>
        </a>
        <a
          href="https://www.facebook.com/zycoda.saas"
          target="_blank"
          class="block relative group"
        >
          <div
            class="bg-black/35 group-hover:bg-black/0 transition-all duration-300 absolute top-0 w-full h-full"
          ></div>
          <img
            alt="img1"
            class="max-w-full block"
            src="/images/activities/PastActivity_Techsauce2023_2.jpg"
          />
          <p
            class="text-[#fff] text-[18px] font-bold absolute bottom-4 left-4 group-hover:underline z-[9]"
          >
            Techsauce2023
          </p>
        </a>
        <a
          href="https://www.facebook.com/zycoda.saas"
          target="_blank"
          class="block relative group"
        >
          <div
            class="bg-black/35 group-hover:bg-black/0 transition-all duration-300 absolute top-0 w-full h-full"
          ></div>
          <img
            alt="img1"
            class="max-w-full block"
            src="/images/activities/PastActivity_Techsauce2023_3.jpg"
          />
          <p
            class="text-[#fff] text-[18px] font-bold absolute bottom-4 left-4 group-hover:underline z-[9]"
          >
            Techsauce2023
          </p>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const { locale } = useI18n();

const zycoda_about_eng =
  "AI solution for mechanical maintenance management system to increase <br> machine performance efficiency and reduce costs of production";

const zycoda_about_th =
  "AI solution สำหรับการบริหารจัดการงานซ่อมบำรุงที่ช่วยเพิ่มประสิทธิภาพการใช้งานของเครื่องจักรและช่วยลดต้นทุนในกระบวนการผลิต";

useSeoMeta({
  title: "ZYCODA | EVERYONE CAN BUILD AI",
  ogTitle: "ZYCODA | EVERYONE CAN BUILD AI",
  description:
    "AI solution สำหรับการบริหารจัดการงานซ่อมบำรุงที่ช่วยเพิ่มประสิทธิภาพการใช้งานของเครื่องจักรและช่วยลดต้นทุนในกระบวนการผลิต",
  ogDescription:
    "AI solution สำหรับการบริหารจัดการงานซ่อมบำรุงที่ช่วยเพิ่มประสิทธิภาพการใช้งานของเครื่องจักรและช่วยลดต้นทุนในกระบวนการผลิต",
  ogImage: "/images/AboutUs1_Team.jpg",
  twitterCard: "summary_large_image",
});
</script>

<style></style>
