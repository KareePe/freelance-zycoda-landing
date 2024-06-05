<template>
  <div class="mt-[70px]">
    <img
        :src="`https://raw.thearkcoding.com/uploads/${blogs[0].articleImg}`"
        class="lg:hidden block mb-[50px]"
        alt=""
      />
    <div class="container mx-auto p-4">
      <img
        :src="`https://raw.thearkcoding.com/uploads/${blogs[0].articleImg}`"
        class="lg:block hidden my-[50px] rounded-[25px] shadow-lg"
        alt=""
      />

      <h1 class="text-[35px] font-bold">{{ blogs[0].articleTopic }}</h1>
      <p class="text-[#000]/40">
        {{ moment(blogs[0].articleDate).format("MMM Do YY, h:mm:ss a") }}
      </p>

      <div v-html="blogs[0].articleDesc" class="desc my-[50px]"></div>
    </div>
  </div>
</template>

<script setup>
import moment from "moment";

const route = useRoute();
const param = route;

const {
  pending,
  data: blogs,
  refresh,
} = await useFetch(`https://node-zycoda-admin.vercel.app/blog/${route.params.id}`, {
  method: "get",
  lazy: false,
});

useSeoMeta({
  title: `${route.params.slug}`,
  ogTitle: `${route.params.slug}`,
  description:
    "ZYCODA aims to advance Thailand industry by implementing AI through the mechanical maintenance management system",
  ogDescription:
    "ZYCODA aims to advance Thailand industry by implementing AI through the mechanical maintenance management system",
  ogImage: "/images/logo/dark/logo-dark.png",
  twitterCard: "summary_large_image",
});
</script>

<style>
.desc a{
  @apply !text-blue
}
</style>
