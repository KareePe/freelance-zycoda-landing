<template>
  <div v-if="pending"></div>
  <div v-else class="mt-[70px]">
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

const env = useRuntimeConfig();

const route = useRoute();
const param = route;

let payload = {
  id: route.params.id,
};

const {
  pending,
  data: blogs,
  refresh,
} = await useFetch(env.public.NUXT_API_NODE + `/getDetailBlog`, {
  method: "post",
  body: payload,
  lazy: false,
});

useSeoMeta({
  title: `${blogs.value[0].articleTopic}`,
  ogTitle: `${blogs.value[0].articleTopic}`,
  description:
    "ZYCODA aims to advance Thailand industry by implementing AI through the mechanical maintenance management system",
  ogDescription:
    "ZYCODA aims to advance Thailand industry by implementing AI through the mechanical maintenance management system",
  ogImage: `https://raw.thearkcoding.com/uploads/${blogs.value[0].articleImg}`,
  twitterCard: "summary_large_image",
});
</script>

<style>
.desc a {
  @apply !text-blue;
}
</style>
