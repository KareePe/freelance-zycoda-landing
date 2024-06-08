<template>
  <SlideBanner />

  <section class="product w-full pt-[25px] bg-white-light">
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
          <NuxtLink to="/products">
            <div
              class="bg-gradient-to-t from-blue to-blue/20 w-full h-full absolute left-0 top-0 z-[1] rounded-lg"
            ></div>
            <div
              class="p-[20px] h-full relative z-[9] flex flex-col justify-between"
            >
              <h2 class="font-bold text-[25px] text-[#fff]">Z-MPRO</h2>

              <div>
                <h3 class="font-bold text-[#fff] text-[20px]">CMMS Platform</h3>
                <p class="text-[#fff] mb-[15px]">{{ $t("Z-MPRO") }}</p>

                <NuxtLink
                  to="/contact-us"
                  class="text-[#fff] capitalize text-center bg-pink hover:bg-blue transition-colors duration-300 px-8 py-2 rounded-full shadow-lg mt-[15px]"
                  >free trial</NuxtLink
                >
              </div>
            </div>
          </NuxtLink>
        </div>
        <div
          class="grow basis-[350px] h-[400px] relative rounded-lg shadow-lg"
          style="
            background: url(/images/cloud-system.png);
            background-size: cover;
            background-position: center;
          "
        >
          <NuxtLink to="/products">
            <div
              class="bg-gradient-to-t from-blue to-black/50 w-full h-full absolute left-0 top-0 z-[1] rounded-lg"
            ></div>
            <div
              class="p-[20px] h-full relative z-[9] flex flex-col justify-between"
            >
              <h2 class="font-bold text-[25px] text-[#fff]">Z-CONNECT</h2>

              <div>
                <h3 class="font-bold text-[#fff] text-[20px]">
                  Connectivity Platform
                </h3>
                <p class="text-[#fff] mb-[15px]">{{ $t("Z-CONNECT") }}</p>

                <NuxtLink
                  to="/contact-us"
                  class="text-[#fff] capitalize text-center bg-pink hover:bg-blue transition-colors duration-300 px-8 py-2 rounded-full shadow-lg mt-[15px]"
                  >free trial</NuxtLink
                >
              </div>
            </div>
          </NuxtLink>
        </div>
        <div
          class="grow basis-[350px] h-[400px] relative rounded-lg shadow-lg"
          style="
            background: url(/images/business-person.png);
            background-size: cover;
            background-position: center;
          "
        >
          <NuxtLink to="/products">
            <div
              class="bg-gradient-to-t from-blue to-black/50 w-full h-full absolute left-0 top-0 z-[1] rounded-lg"
            ></div>
            <div
              class="p-[20px] h-full relative z-[9] flex flex-col justify-between"
            >
              <h2 class="font-bold text-[25px] text-[#fff]">Z-PAP</h2>

              <div>
                <h3 class="font-bold text-[#fff] text-[20px]">
                  Predictive Analytics Platform
                </h3>
                <p class="text-[#fff] mb-[15px]">{{ $t("Z-PAP") }}</p>

                <NuxtLink
                  to="/contact-us"
                  class="text-[#fff] capitalize text-center bg-pink hover:bg-blue transition-colors duration-300 px-8 py-2 rounded-full shadow-lg mt-[15px]"
                  >free trial</NuxtLink
                >
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <section class="testimonial w-full py-24 bg-black">
    <div class="container mx-auto p-4">
      <h2
        class="sm:text-[55px] text-[35px] font-bold capitalize text-white-light text-center"
      >
        "Discover why countless industries and engineers confidently choose our
        trusted solutions."
      </h2>
    </div>

    <div class="container mx-auto p-4">
      <div class="mt-[50px]">
        <swiper
          :slidesPerView="1"
          :spaceBetween="30"
          :centeredSlides="false"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :loop="true"
          :pagination="{
            clickable: true,
          }"
          :navigation="true"
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
              slidesPerView: 3,
            },
          }"
          :modules="modules"
          class="mySwiper my-[50px]"
        >
          <swiper-slide>
            <div
              class="group relative cursor-pointer min-h-[430px] bg-white-light p-4 flex justify-center items-start shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 24 24"
                class="absolute top-8 left-[50%] -translate-x-[50%]"
              >
                <path
                  fill="#BF2C7B"
                  d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"
                />
              </svg>
              <div class="text-center mt-[75px]">
                <h3
                  class="font-extrabold text-black text-[18px] group-hover:text-[19px] transition-all duration-300"
                >
                  {{ $t("emp_1") }}
                </h3>
                <div
                  class="max-w-[120px] h-[5px] my-[25px] mx-auto bg-blue/0"
                ></div>
                <div
                  class="text-black w-full text-[14px] mt-4 absolute z-[9] bottom-6 left-0 text-center group-hover:underline"
                >
                  <img
                    src="/images/testimonial/test-1.png"
                    class="w-[65px] h-[65px] my-[25px] ml-[50%] -translate-x-[50%]"
                    alt=""
                  />
                  <p>Chinaphan Sukakarnpadoong</p>
                  <p>Operation Excellence and Industry 4.0 Director</p>
                  <p>SCG Cement Building Materials</p>
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div
              class="group relative cursor-pointer min-h-[430px] bg-white-light p-4 flex justify-center items-start shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 24 24"
                class="absolute top-8 left-[50%] -translate-x-[50%]"
              >
                <path
                  fill="#BF2C7B"
                  d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"
                />
              </svg>
              <div class="text-center mt-[75px]">
                <h3
                  class="font-extrabold min-h-[135px] text-black text-[18px] group-hover:text-[19px] transition-all duration-300"
                >
                  {{ $t("emp_2") }}
                </h3>
                <div
                  class="max-w-[120px] h-[5px] my-[25px] mx-auto bg-blue/0"
                ></div>
                <div
                  class="text-black w-full text-[14px] mt-4 absolute z-[9] bottom-6 left-0 text-center group-hover:underline"
                >
                  <img
                    src="/images/testimonial/test-2.png"
                    class="w-[65px] h-[65px] my-[25px] ml-[50%] -translate-x-[50%]"
                    alt=""
                  />
                  <p>Niwit Khruesarn</p>
                  <p>Maintenance & Engineering Manager</p>
                  <p>Government Pharmaceutical Organization (GPO)</p>
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div
              class="group relative cursor-pointer min-h-[430px] bg-white-light p-4 flex justify-center items-start shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 24 24"
                class="absolute top-8 left-[50%] -translate-x-[50%]"
              >
                <path
                  fill="#BF2C7B"
                  d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"
                />
              </svg>
              <div class="text-center mt-[75px]">
                <h3
                  class="font-extrabold min-h-[135px] text-black text-[18px] group-hover:text-[19px] transition-all duration-300"
                >
                  {{ $t("emp_3") }}
                </h3>
                <div
                  class="max-w-[120px] h-[5px] my-[25px] mx-auto bg-blue/0"
                ></div>
                <div
                  class="text-black w-full text-[14px] mt-4 absolute z-[9] bottom-6 left-0 text-center group-hover:underline"
                >
                  <img
                    src="/images/testimonial/test-3.png"
                    class="w-[65px] h-[65px] my-[25px] ml-[50%] -translate-x-[50%]"
                    alt=""
                  />
                  <p>Soontorn Sri-on</p>
                  <p>Systematic Preventive Maintenance Specialist</p>
                  <p>SCG Cement Building Materials</p>
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div
              class="group relative cursor-pointer min-h-[430px] bg-white-light p-4 flex justify-center items-start shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 24 24"
                class="absolute top-8 left-[50%] -translate-x-[50%]"
              >
                <path
                  fill="#BF2C7B"
                  d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"
                />
              </svg>
              <div class="text-center mt-[75px]">
                <h3
                  class="font-extrabold min-h-[135px] text-black text-[18px] group-hover:text-[19px] transition-all duration-300"
                >
                  {{ $t("emp_4") }}
                </h3>
                <div
                  class="max-w-[120px] h-[5px] my-[25px] mx-auto bg-blue/0"
                ></div>
                <div
                  class="text-black w-full text-[14px] mt-4 absolute z-[9] bottom-6 left-0 text-center group-hover:underline"
                >
                  <img
                    src="/images/testimonial/test-4.png"
                    class="w-[65px] h-[65px] my-[25px] ml-[50%] -translate-x-[50%]"
                    alt=""
                  />
                  <p>Weerapong Chootong</p>
                  <p>Energy Control SectionManager</p>
                  <p>Bangkok Solar Power</p>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>

  <section class="blog bg-white-light py-[100px]">
    <div class="container mx-auto p-4">
      <div class="flex justify-between">
        <div>
          <h2
            class="sm:text-[55px] text-[35px] font-bold capitalize text-black"
          >
            {{ $t("blog") }}
          </h2>
          <p>{{ $t("description_blog_index") }}</p>
        </div>
        <NuxtLink
          to="/blog"
          class="text-[#fff] capitalize text-center bg-pink hover:bg-blue transition-colors duration-300 md:w-[fit-content] w-full h-[50px] flex items-center justify-center px-4 rounded-md shadow-xl"
        >
          {{ $t("blog_more") }}
        </NuxtLink>
      </div>

      <p v-if="pending" class="h-[1000px]">loading...</p>
      <div v-else class="my-[50px] flex flex-wrap -px-[15]">
        <div
          :class="`${
            index === 0
              ? 'md:basis-8/12'
              : index === 6
              ? 'md:basis-6/12'
              : index === 7
              ? 'md:basis-6/12'
              : 'md:basis-4/12'
          } basis-full relative px-2 mb-[25px]`"
          v-for="(blog, index) in itemsBlog.slice(0, 5)"
          :key="index"
        >
          <NuxtLink :to="`/blog/${blog.articleId}`">
            <div
              class="rounded-lg shadow-lg h-[400px] relative group"
              :style="`
              background: url(https://raw.thearkcoding.com/uploads/${blog.articleImg});
              background-size: cover;
              background-position: center;
            `"
            >
              <div
                class="bg-gradient-to-t from-blue to-transparent w-full h-full absolute left-0 top-0 z-[1] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <div
                class="h-[fit-content] w-full absolute bottom-0 p-4 z-[9] flex justify-between items-center bg-[#2A282F]/50 backdrop-blur-lg rounded-b-lg"
              >
                <div class="max-w-[75%]">
                  <h3 class="font-bold text-[#fff] text-[20px] line-clamp-2">
                    {{ blog.articleTopic }}
                  </h3>
                </div>

                <NuxtLink
                  :to="`/blog/${blog.articleId}`"
                  class="text-[#fff] capitalize text-center bg-pink hover:bg-blue transition-colors duration-300 w-[50px] h-[50px] block rounded-md shadow-xl"
                >
                  <vue-feather
                    type="chevron-right"
                    class="ml-[50%] mt-[50%] -translate-x-[50%] -translate-y-[50%]"
                  ></vue-feather>
                </NuxtLink>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <section class="past-activities bg-white-light pb-[100px]">
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
import { ref, onMounted, watch } from "vue";
import VueFeather from "vue-feather";

import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

const env = useRuntimeConfig();

import Lightgallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

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

const blogData = [
  {
    blogId: 1,
    blogName: "Smart KPI สร้าง KPI ที่ดีกว่าด้วย AI",
    blogCover: "blog-1.jpeg",
    blogLink:
      "https://www.facebook.com/zycoda.saas/posts/pfbid04LYoBaZDFtXCbBJ7AVFbSsJuWvFn9P5FFu4Msd5Rd3RKRaF9n8zpRYoskSd2tzF6l",
  },
  {
    blogId: 2,
    blogName:
      "บริษัทต่าง ๆ สามารถประสบความสำเร็จด้วย AI Smart Manufacturing ได้อย่างไร?",
    blogCover: "blog-2.jpeg",
    blogLink:
      "https://www.facebook.com/zycoda.saas/posts/pfbid02GPGtLG6DNnZxvUhiydRWpyQqoKFZ2zwtpdgdSJqQNjDDUPY3qHAp8kG5XF5BCWigl",
  },
  {
    blogId: 3,
    blogName: "พลังของ Predictive Quality ที่จะกำหนดอนาคตธุรกิจของคุณ",
    blogCover: "blog-3.jpeg",
    blogLink:
      "https://www.facebook.com/zycoda.saas/posts/pfbid02B6WA2y3HamsChxweChX6BpYz3D5aKhaNrFTefmWSMHvTkCWfeURc6RmaiGtj8xVyl",
  },
  {
    blogId: 4,
    blogName: "AI สามารถ Transform ความปลอดภัยในอุตสาหกรรมได้อย่างไร",
    blogCover: "blog-4.jpeg",
    blogLink:
      "https://www.facebook.com/zycoda.saas/posts/pfbid02yRqUi1oXyXdk7K6T6B4SPUq1oJUcPbrYJtK1cdXrc8GpkLEWtmpzVtY3DgANFaEVl",
  },
  {
    blogId: 5,
    blogName: "5 Talent Factors ที่สำคัญที่สุดของการทำ Digital Transformation",
    blogCover: "blog-5.jpeg",
    blogLink:
      "https://www.facebook.com/zycoda.saas/posts/pfbid02aTFiHptSAkmPHEqx4Rqd5brySqF1Q3n2sW8u9oZsWk1uWGiedWXrAwHQop1RBEEvl",
  },
  {
    blogId: 6,
    blogName: "Unplanned Downtime มีต้นทุนมากกว่าที่คุณคิด",
    blogCover: "blog-6.jpeg",
    blogLink:
      "https://www.facebook.com/zycoda.saas/posts/pfbid02kgGLvK6fDby2jsdHcCKBGt97fw6yjYVY7frV1XwPifGEWKQdfTcFVmGq5F9j93rRl",
  },
  {
    blogId: 7,
    blogName:
      "ตัวอย่าง Use Case จริงของลูกค้า จาก Z-PAP: AI Predictive maintenance Platform ของ ZYCODA",
    blogCover: "blog-7.jpeg",
    blogLink:
      "https://www.facebook.com/zycoda.saas/posts/pfbid0tLkZqdQexEmh8jXojp74ixGbmR7MmMgCBwJVuS5t3cUfStwYiwtip9xW1BK3Uk4zl",
  },
];

const itemsBlog = ref([]);

const { pending, data: blogs } = await useFetch(
  env.public.NUXT_API_NODE + "/getBlog"
);

if (blogs.value.message.length > 0) {
  itemsBlog.value.push(...blogs.value.message);
}

useSeoMeta({
  title: "ZYCODA",
  ogTitle: "ZYCODA",
  description:
    "ZYCODA aims to advance Thailand industry by implementing AI through the mechanical maintenance management system",
  ogDescription:
    "ZYCODA aims to advance Thailand industry by implementing AI through the mechanical maintenance management system",
  ogImage: "/images/logo/dark/logo-dark.png",
  twitterCard: "summary_large_image",
});
</script>

<style scoped>
@import "lightgallery/css/lightgallery.css";
@import "lightgallery/css/lg-thumbnail.css";
@import "lightgallery/css/lg-zoom.css";

.boxes-con {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  grid-auto-flow: row dense;
  padding: 0;
  grid-template-rows: masonry;
}

.boxes {
  width: 100%;
  height: 100px;
  padding: 0;
  grid-row: auto / span 1;
  background: goldenrod;
}

.boxes:nth-child(odd) {
  width: 100%;
  grid-row: auto / span 3;
  height: 300px;
  background: yellowgreen;
}

.boxes:nth-child(even) {
  width: 100%;
  grid-row: auto / span 2;
  height: 200px;
  background: gold;
}

.boxes:nth-child(4n) {
  width: 100%;

  background: hotpink;
}

.boxes:nth-child(7) {
  width: 100%;

  background: royalblue;
}
</style>
