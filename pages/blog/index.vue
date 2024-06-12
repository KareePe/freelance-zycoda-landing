<template>
  <div class="mt-[70px]">
    <div class="container mx-auto p-4 py-[50px]">
      <p class="text-center font-bold text-[35px] capitalize">
        {{ $t("menu_blog") }}
      </p>

      <p v-if="pending" class="h-[1000px]">loading...</p>
      <div v-else>
        <div class="my-[50px] flex flex-wrap -px-[15]">
          <div
            :class="`md:basis-4/12 basis-full relative px-2 mb-[25px]`"
            v-for="(blog, index) in displayBlogs"
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
        <div class="w-full flex gap-2 justify-center items-center">
          <button
          :disabled="newLength >= blogs.message.length"
            @click="loadMore()"
            type="button"
            class="capitalize btn-load relative flex items-center justify-center text-center text-[16px] font-bold px-8 h-[48px] bg-gradient-to-r from-blue to-pink !text-[#fff] transition-all duration-200 group rounded-[10px] shadow-lg hover:shadow-none"
          >
            <div
              class="opacity-0 hover:opacity-100 group-hover:opacity-100 transition duration-500 absolute inset-0 h-full w-full bg-gradient-to-r from-blue from-70% to-pink to-150% rounded-[10px]"
            ></div>
            <div class="flex relative z-[2] group">
              บทความเพิ่มเติม
              <vue-feather
                type="chevrons-down"
                class="text-[25px] !text-[#fff]"
              ></vue-feather>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import VueFeather from "vue-feather";

const env = useRuntimeConfig();

let displayBlogs = ref([]);
const initialBlogsToShow = ref(3);
let blogsToshow = ref(initialBlogsToShow.value);
let loadMoreCount = ref(3);
let newLength = ref(0);

const blogData = ref([]);

const { pending, data: blogs } = await useFetch(
  env.public.NUXT_API_DEV + "/getBlog"
);

if (blogs.value.message.length > 0) {
  displayBlogs.value = blogs.value.message.slice(0, blogsToshow.value);
}

const loadMore = () => {
  newLength.value = displayBlogs.value.length + loadMoreCount.value;
  displayBlogs.value = blogs.value.message.slice(0, newLength.value);
};

const showLess = () => {
  newLength.value = displayBlogs.value.length - loadMoreCount.value;
  displayBlogs.value = blogs.value.message.slice(
    0,
    newLength.value > initialBlogsToShow.value
      ? newLength.value
      : initialBlogsToShow.value
  );
};

// watch(blogs, async () => {
//   blogData.value.push(...blogs.value.message);
// });

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

<style scoped>
.btn-load:disabled,
.btn-load[disabled] {
  opacity: 0.2;
}
</style>
