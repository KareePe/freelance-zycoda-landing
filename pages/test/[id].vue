<template>
  <div class="my-[70px]" v-if="blogData">
    <!-- {{ blogData }} -->
    <h1 class="tetx-[35px] text-center font-bold">
      {{ blogData.articleTopic }}
    </h1>
    <p class="my-[25px] text-center" v-html="blogData.articleDesc"></p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

let blogData = ref(null);

const env = useRuntimeConfig();
const route = useRoute();
const param = route;

let payload = {
  id: route.params.id,
};

const blog = async () => {
  try {
    let call_api = await axios.post(
      env.public.NUXT_API_NODE + "/getDetailBlog",
      payload
    );

    blogData.value = call_api.data[0];
  } catch (err) {
    console.log(err);
  }
};

const { data: blogSeo } = await useFetch(
  env.public.NUXT_API_NODE + "/getDetailBlog",
  {
    method: "post",
    body: payload,
    lazy: false,
  }
);

// console.log(blogSeo)

onMounted(() => {
  blog();
});

useSeoMeta({
  title: `${blogSeo.value[0].articleTopic}`,
  ogTitle: `${blogSeo.value[0].articleTopic}`,
  description:
    "ZYCODA aims to advance Thailand industry by implementing AI through the mechanical maintenance management system",
  ogDescription:
    "ZYCODA aims to advance Thailand industry by implementing AI through the mechanical maintenance management system",
  ogImage: `https://raw.thearkcoding.com/uploads/${blogSeo.value[0].articleImg}`,
  twitterCard: "summary_large_image",
});
</script>

<style></style>
