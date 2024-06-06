<template>
  <div class="mt-[70px]">
    <div class="container mx-auto p-4 py-[50px]">
      <p class="text-center font-bold text-[35px] capitalize">
        {{ $t("menu_blog") }}
      </p>

      <p v-if="pending" class="h-[1000px]">loading...</p>
      <div v-else class="my-[50px] flex flex-wrap -px-[15]">
        <div
          :class="`md:basis-4/12 basis-full relative px-2 mb-[25px]`"
          v-for="(blog, index) in itemsBlog"
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
      <!-- {{ itemsBlog.length }}
      {{ itemcount }}
      {{ itemlast }}
      {{ itemcount - itemlast }} -->
      <button
        v-if="itemsBlog.length < itemcount"
        @click="fn_loadmore()"
        class="text-[#fff] ml-[50%] -translate-x-[50%] capitalize text-center bg-pink hover:bg-blue transition-colors duration-300 w-[fit-content] h-[50px] flex items-center px-8 rounded-md shadow-xl"
        type="button"
      >
        {{ $t("load") }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import VueFeather from "vue-feather";

const itemcount = ref(0);
const itemlast = ref(0);
const itemsBlog = ref([]);
const limit = ref(6);
const offset = ref(0);
const hasMore = ref(true);

const { pending, data: blogs } = await useAsyncData(
  "blogs",
  () =>
    $fetch("https://node-zycoda-admin.vercel.app/blog", {
      params: {
        limit: limit.value,
        offset: offset.value,
      },
    }),
  { watch: [offset] }
);
console.log(blogs);
if (blogs.value.message.length > 0) {
  itemsBlog.value.push(...blogs.value.message);
  itemcount.value = blogs.value.itemcount;
  itemlast.value = blogs.value.itemlast;
}

const fn_loadmore = async () => {
  limit.value = 3;
  offset.value = offset.value === 0 ? 6 : offset.value + 3;
};

watch(blogs, async () => {
  itemsBlog.value.push(...blogs.value.message);
  itemcount.value = blogs.value.itemcount;
  itemlast.value = blogs.value.itemlast;
});

useSeoMeta({
  title: "บทความ - ZYCODA",
  ogTitle: "บทความ - ZYCODA",
  description:
    "ZYCODA aims to advance Thailand industry by implementing AI through the mechanical maintenance management system",
  ogDescription:
    "ZYCODA aims to advance Thailand industry by implementing AI through the mechanical maintenance management system",
  ogImage: "/images/logo/dark/logo-dark.png",
  twitterCard: "summary_large_image",
});
</script>

<style></style>
