<template>
  <div class="my-[70px]">
    <ul>
      <li v-for="(item, index) in blogData" :key="index">
        <NuxtLink :to="`/test/${item.articleId}`">
          {{ item.articleTopic }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

let blogData = ref(null);

const env = useRuntimeConfig();

const blog = async () => {
  try {
    let call_api = await axios.get(env.public.NUXT_API_NODE + "/getBlog");
    blogData.value = call_api.data.message;
  } catch (err) {
    console.log(err);
  }
};

onMounted(() => {
  blog();
});
</script>

<style></style>
