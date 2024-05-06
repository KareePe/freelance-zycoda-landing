<template>
  <section class="banner w-full md:h-[520px] h-[650px] mt-[70px]">
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="false"
      :modules="modules"
      @autoplayTimeLeft="onAutoplayTimeLeft"
      class="mySwiper"
    >
      <swiper-slide v-for="(slide, slideIndex) in slideData" :key="slideIndex">
        <div
          class="w-full md:h-[520px] h-[650px]"
          :style="`background:url(/images/${slide.img});background-size:cover;background-position:center;`"
        >
          <div
            class="absolute z-1 right-0 w-full md:h-[520px] h-[650px] bg-white"
            style="
              background: linear-gradient(
                39deg,
                rgba(37, 37, 37, 0.55) 0%,
                rgba(37, 37, 37, 0.55) 70%
              );
            "
          ></div>

          <div
            class="md:h-[520px] h-[650px] lg:max-w-[65%] max-w-full flex items-center px-10"
          >
            <div class="lg:text-left text-center">
              <h1
                class="text-white-light relative z-[9] font-bold md:text-[55px] text-[35px]"
              >
                {{ locale === "en" ? slide.topic_en : slide.topic_th }}
              </h1>
              <p class="text-white-light relative z-[9]">
                {{ locale === "en" ? slide.desc_en : slide.desc_th }}
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <template #container-end>
        <div class="autoplay-progress">
          <svg viewBox="0 0 48 48" ref="progressCircle">
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref="progressContent"></span>
        </div>
      </template>
    </swiper>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

const { locale } = useI18n();

let slideData = [
  {
    topic_en: 'ZYCODA \n "Leading the Way in AI-Driven Maintenance"',
    topic_th: 'ZYCODA \n "Leading the Way in AI-Driven Maintenance"',
    desc_en:
      "ZYCODA aims to advance Thailand industry by implementing AI through the mechanical maintenance management system",
    desc_th:
      "ZYCODA เรามุ่งมั่นที่จะยกระดับอุตสาหกรรมไทยด้วยการใช้เทคโนโลยี AI ในระบบงานซ่อมบำรุง",
    img: "robot-1.png",
  },
  {
    topic_en: "Comprehensive maintenance system with AI supports",
    topic_th: "ระบบบริหารจัดการงานซ่อมบํารุงครบวงจรที่ใช้เทคโนโลยี AI",
    desc_en:
      "The comprehensive ZYCODA's system can monitor different work areas including work-order, human-resource, and spare-part changes. Furthermore, it can accurately predict mechanical abnormality by using recorded data and AI in order to adjust maintenance plans and  nurtures.",
    desc_th:
      "ZYCODA  ช่วยดูแลเครื่องจักรแบบครบวงจร ทั้งการจัดงานงาน จัดการคน และการเปลี่ยนอะไหล่ตามคาบเวลา รวมถึงพยากรณ์ความผิดปกติของเครื่องจักร โดยใช้ข้อมูลในอดีต และ เทคโนโลยี AI เข้ามาช่วยในการกำหนดแผนและวิธีการดูแลรักษาเครื่องจักรอย่างเหมาะสม",
    img: "representation-user-experience-interface-design.png",
  },
  {
    topic_en: "ZYCODA's system will notify before machines break down",
    topic_th: "แจ้งเตือน ก่อนเครื่องจักรเสียหาย ด้วย Zycoda",
    desc_en:
      "Machine fault detection by AI. The systems will accurately notify users ahead to prevent problems and reduce breakdown risks",
    desc_th:
      "ระบบตรวจจับความผิดปกติของเครื่องจักรด้วยเทคโนโลยี AI ป้องกันปัญหา ลดความเสียหายที่ต่อกระบวนการผลิต ด้วยการแจ้งเตือนล่วงหน้าที่มีความแม่นยำสูง",
    img: "woman-is-looking-computer-screen-that-has-design-it.jpeg",
  },
  {
    topic_en:
      "Prescriptive Maintenance will be easier by solutions suggested from Zycoda AI ",
    topic_th:
      "แนะนำวิธีการแก้ไขปัญหางานซ่อมบำรุงให้กลายเป็นเรื่องง่ายด้วยเทคโนโลยี AI ของ ZYCODA",
    desc_en:
      "Zycoda's system will bring implement machine data to do machine learning through AI. By doing this, potential damages and suggested solutions will be provided to better existing the maintenance plan.",
    desc_th:
      "ระบบสามารถดึงข้อมูลจากเครื่องจักรเข้ามาเพื่อให้ AI เรียนรู้ คาดการณ์ความเสียหายของเครื่องจักรที่อาจจะเกิดขึ้นได้ล่วงหน้า พร้อมทั้งแนะนําวิธีการแก้ไขปัญหาได้อย่างแม่นยํา ทําให้สามารถวางแผนงานซ่อมบํารุงได้อย่างมีประสิทธิภาพ",
    img: "engineer-technician-working-with-robot-arm-factory-industry-engineering-concept.jpeg",
  },
  {
    topic_en: "Website-based system, No program installation needed",
    topic_th: "ใช้งานได้ผ่านเว็บ ไม่ต้องติดตั้งโปรแกรม",
    desc_en: "All users can use through smartphones from anywhere and anytime.",
    desc_th:
      "ZYCODA ออกแบบให้ใช้งานง่าย ใช้ได้ทุกที่ทุกเวลา ในทุกระบบ ผ่าน smartphone ของท่าน",
    img: "asian-female.png",
  },
];

const onSwiper = (swiper) => {
  return swiper;
};
const onSlideChange = () => {};

const progressCircle = ref(null);
const progressContent = ref(null);
const onAutoplayTimeLeft = (s, time, progress) => {
  progressCircle.value.style.setProperty("--progress", 1 - progress);
  progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
};

const modules = [Navigation, Pagination, Autoplay, EffectFade];
</script>

<style scoped>
[aria-current]:not([aria-current="false"]) {
  background-color: #2c5ebf;
}
[aria-current]:not([aria-current="true"]) {
  background-color: rgba(77, 113, 245, 0.5);
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #2c5ebf;
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: #2c5ebf;
  fill: none;
  stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
}
</style>
