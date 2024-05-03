<template>
  <div class="bg-[#fff] w-full fixed top-0 z-[9999] transition-all duration-300 top-nav">
    <div
      class="container mx-auto px-4 w-full h-[70px] flex justify-between items-center transition-all duration-300 inner-nav"
    >
      <NuxtLink :to="localPath('/')">
        <img src="/images/logo/dark/logo-dark.svg" class="w-[150px] logo" alt=""
      /></NuxtLink>

      <ul class="md:flex hidden gap-[25px]">
        <li>
          <NuxtLink to="/" class="capitalize text-black">home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about-us" class="capitalize text-black"
            >about us</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/products" class="capitalize text-black"
            >products</NuxtLink
          >
        </li>
      </ul>

      <div id="nav-icon4" class="md:hidden block" @click="fn_toggleClassOpen()">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="md:flex hidden gap-[15px]">
        <ul class="flex gap-2 items-center mr-4">
          <li
            :class="`w-[35px] h-[35px] flex justify-center items-center hover:text-blue hover:font-bold transition-all duration-300 cursor-pointer ${
              locale === 'en'
                ? 'bg-blue rounded-md text-[#fff] hover:bg-[#fff] hover:text-blue hover:font-bold'
                : 'hover:text-blue hover:font-bold'
            }`"
            @click="fn_changeLang('en')"
          >
            EN
          </li>
          <li
            :class="`w-[35px] h-[35px] flex justify-center items-center transition-all duration-300 cursor-pointer ${
              locale === 'th'
                ? 'bg-blue rounded-md text-[#fff] hover:bg-[#fff] hover:text-blue hover:font-bold'
                : 'hover:text-blue hover:font-bold'
            }`"
            @click="fn_changeLang('th')"
          >
            TH
          </li>
        </ul>
        <NuxtLink
          to="/contact-us"
          class="capitalize block px-8 py-2 bg-[#BF2C7B] text-white-light rounded-full shadow-lg"
          >contact us</NuxtLink
        >
      </div>
    </div>
  </div>
  <!-- <vue-feather type="feather"></vue-feather> -->
  <div
    class="fixed hidden w-full h-full bg-black/[0.4] top-[0] right-[9999rem] z-[999] transition-opacity duration-300 opacity-0"
    id="mobile-drawer"
  ></div>
  <div
    id="navMb"
    class="fixed bg-[#f5f5f5]/80 backdrop-blur-sm mt-[70px] p-4 max-w-[100%] w-full h-full translate-x-[100%] top-[0] right-[0] transition-transform duration-300 z-[9999]"
  >
    <div
      class="hidden items-center justify-end w-full cursor-pointer bar-close mb-[25px]"
      @click="fn_toggleDrawer()"
    >
      <vue-feather type="x" class="text-[25px] text-black"></vue-feather>
    </div>
    <ul class="md:hidden block gap-[25px] items-center">
      <li>
        <NuxtLink to="/" class="capitalize text-black">home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about-us" class="capitalize text-black"
          >about us</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/products" class="capitalize text-black"
          >products</NuxtLink
        >
      </li>
    </ul>

    <div class="md:hidden block gap-[15px]">
      <ul class="flex gap-2 items-center mt-[20px]">
        <li
          :class="`w-[50%] h-[35px] flex justify-center items-center hover:text-blue hover:font-bold transition-all duration-300 cursor-pointer ${
            locale === 'en'
              ? 'bg-blue rounded-md text-[#fff] hover:bg-[#fff] hover:text-blue hover:font-bold'
              : 'hover:text-blue hover:font-bold'
          }`"
          @click="fn_changeLang('en')"
        >
          EN
        </li>
        <li
          :class="`w-[50%] h-[35px] flex justify-center items-center transition-all duration-300 cursor-pointer ${
            locale === 'th'
              ? 'bg-blue rounded-md text-[#fff] hover:bg-[#fff] hover:text-blue hover:font-bold'
              : 'hover:text-blue hover:font-bold'
          }`"
          @click="fn_changeLang('th')"
        >
          TH
        </li>
      </ul>
      <NuxtLink
        to="/contact-us"
        class="capitalize block mt-[25px] w-full text-center px-8 py-2 bg-pink !text-[#fff] rounded-full shadow-lg"
        >contact us</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import VueFeather from "vue-feather";

const localPath = useLocalePath();
const { locales, locale, setLocale } = useI18n();

let windowTop = 0;

const fn_changeLang = (lang) => {
  setLocale(lang);
};

const fn_toggleClassOpen = () => {
  const hamburger = document.querySelector("#nav-icon4");
  const mobileDrawer = document.querySelector("#mobile-drawer");
  const navMb = document.querySelector("#navMb");

  hamburger.classList.toggle("open");

  mobileDrawer.classList.toggle("right-0");
  //   mobileDrawer.classList.toggle("opacity-0");
  navMb.classList.toggle("translate-x-[100%]");
};

const fn_toggleDrawer = () => {
  const hamburger = document.querySelector("#nav-icon4");
  const mobileDrawer = document.querySelector("#mobile-drawer");
  const navMb = document.querySelector("#navMb");

  mobileDrawer.classList.toggle("right-0");
  //   mobileDrawer.classList.toggle("opacity-0");
  navMb.classList.toggle("translate-x-[100%]");

  setTimeout(function () {
    hamburger.classList.toggle("open");
  }, 300);
};

onMounted(() => {
  window.addEventListener("scroll",() => {
    // console.log(window.scrollY)
    const topNav = document.querySelector('.top-nav')
    const innerNav = document.querySelector('.inner-nav')
    const logo = document.querySelector('.logo')
    if(window.scrollY >= 350) {
      topNav.classList.add('backdrop-blur-md')
      topNav.classList.add('!bg-[#fff]/60')
      innerNav.classList.add('!h-[55px]')
    }else if(window.scrollY <= 70){
      topNav.classList.remove('backdrop-blur-md')
      topNav.classList.remove('!bg-[#fff]/60')
      innerNav.classList.remove('!h-[55px]')
    }
  })
});
</script>

<style scoped>
#nav-icon4 {
  width: 23px;
  height: 30px;
  position: relative;
  margin: 0 15px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

#nav-icon4 span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;

  @apply bg-black;
}

#nav-icon4 span:nth-child(1) {
  top: 5px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#nav-icon4 span:nth-child(2) {
  top: 12px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#nav-icon4 span:nth-child(3) {
  top: 19px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#nav-icon4.open span:nth-child(1) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  top: 5px;
  left: 8px;
}

#nav-icon4.open span:nth-child(2) {
  width: 0%;
  opacity: 0;
}

#nav-icon4.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  top: 22px;
  left: 8px;
}

.router-link-active.router-link-exact-active {
  @apply font-semibold text-blue;
}
</style>
