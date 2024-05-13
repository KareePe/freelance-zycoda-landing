<template>
  <footer
    class="bg-[url(/images/bg-footer.jpg)] bg-cover bg-left border-b-[15px] border-blue"
  >
    <div class="container mx-auto p-4">
      <div class="flex flex-wrap justify-between items-center py-16">
        <div>
          <img src="/images/logo/dark/logo-dark.svg" class="w-[150px]" alt="" />
          <a
            href="https://www.google.co.th/maps/search/1355+%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%A9%E0%B8%8E%E0%B8%A3%E0%B9%8C+1+%E0%B8%A7%E0%B8%87%E0%B8%A8%E0%B9%8C%E0%B8%AA%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%87+%E0%B9%80%E0%B8%82%E0%B8%95%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%8B%E0%B8%B7%E0%B9%88%E0%B8%AD+%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3+%7C+%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97+%E0%B8%9A%E0%B8%B5%E0%B9%84%E0%B8%AD%E0%B9%84%E0%B8%AD%E0%B8%8B%E0%B8%B5+%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94"
            target="_blank"
            class="block text-left text-black text-[16px] mt-[15px]"
          >
            <span v-html="locale === 'en' ? address_eng : address_th"></span>
          </a>
        </div>
        <div class="min-h-[204px]">
          <p class="text-[20px] font-bold capitalize text-black">Contact</p>

          <ul class="mt-[15px] p-0">
            <li class="flex flex-nowrap gap-4 justify-start items-center mb-2">
              <div
                class="w-[45px] h-[45px] rounded-full bg-black flex justify-center items-center"
              >
                <vue-feather
                  type="phone-call"
                  class="text-[#fff] w-[16px]"
                ></vue-feather>
              </div>

              <div>
                <a
                  href="tel:0625910082"
                  class="underline text-[16px] text-black"
                  >062-5910-082</a
                >
                ,
                <a
                  href="tel:0836535442"
                  class="underline text-[16px] text-black"
                  >083-6535-442</a
                >
              </div>
            </li>
            <li class="flex flex-nowrap gap-4 justify-start items-center mb-2">
              <div
                class="w-[45px] h-[45px] rounded-full bg-black flex justify-center items-center"
              >
                <vue-feather
                  type="mail"
                  class="text-[#fff] w-[16px]"
                ></vue-feather>
              </div>

              <div>
                <a
                  href="mailto:admin@zycoda.com"
                  class="underline text-[16px] text-black"
                  >admin@zycoda.com</a
                >
              </div>
            </li>
            <li class="flex flex-nowrap gap-4 justify-start items-center mb-2">
              <div
                class="w-[45px] h-[45px] rounded-full bg-blue flex justify-center items-center"
              >
                <vue-feather
                  type="facebook"
                  class="text-[#fff] w-[16px]"
                ></vue-feather>
              </div>

              <div>
                <a
                  href="https://www.facebook.com/zycoda.saas"
                  target="_blank"
                  class="underline text-[16px] text-black"
                  >Zycoda</a
                >
              </div>
            </li>
          </ul>
        </div>
        <div class="min-h-[204px]">
          <p class="text-[20px] font-bold capitalize text-black">Enquires</p>

          <ul class="mt-[15px] p-0">
            <li class="flex flex-nowrap gap-4 justify-start items-center mb-2">
              <NuxtLink
                to="/about-us"
                class="underline text-[16px] text-black capitalize"
                >about us</NuxtLink
              >
            </li>
            <li class="flex flex-nowrap gap-4 justify-start items-center mb-2">
              <NuxtLink
                to="/products"
                class="underline text-[16px] text-black capitalize"
                >products</NuxtLink
              >
            </li>
            <li class="flex flex-nowrap gap-4 justify-start items-center mb-2">
              <NuxtLink
                to="/products"
                class="underline text-[16px] text-black capitalize"
                >privacy policy</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="min-h-[204px]">
          <p class="text-[20px] font-bold capitalize text-black">Search</p>
          <Vueform
            class="mt-[15px]"
            :endpoint="false"
            ref="form$"
            @change="handleChange"
          >
            <TextElement
              name="first_name"
              :placeholder="$t('search')"
              field-name="First name"
              :loading="loading"
            />
          </Vueform>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from "vue";
import VueFeather from "vue-feather";

const { locale } = useI18n();

const form$ = ref(null);
let loading = ref(false);

let address_eng =
  "BIIC CO., LTD. (ZYCODA)<br>1355 Pracharat Sai 1, Wongsawang,<br>Bang Sue, Bangkok<br>10800";
let address_th =
  "บริษัท บีไอไอซี จำกัด<br>1355 ถนนประชาราษฎร์ 1 แขวงวงศ์สว่าง เขต<br>บางซื่อ กรุงเทพมหานคร 10800";

const handleChange = () => {
  setTimeout(() => {
    loading.value = form$.value.data.first_name !== "" ? true : false;
    console.log(form$.value.data.first_name);
  }, 2000);
};
</script>

<style></style>
