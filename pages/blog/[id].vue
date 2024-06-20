<template>
  <div v-if="pending"></div>
  <div v-else class="my-[100px]">
    <img
      :src="`https://raw.thearkcoding.com/uploads/${blogs[0].articleImg}`"
      class="lg:hidden block w-full"
      alt=""
    />
    <div class="container mx-auto p-4">
      <img
        :src="`https://raw.thearkcoding.com/uploads/${blogs[0].articleImg}`"
        class="lg:block hidden rounded-[25px] shadow-lg w-full"
        alt=""
      />
      <div class="flex items-center date my-4">
        <p class="text-pink font-bold">{{ blogs[0].userName }}</p>
        <p class="text-[#000]/40">
          {{ moment(blogs[0].articleDate, "YYYYMMDD").fromNow() }}
          <!-- {{ moment(blogs[0].articleDate).calendar() }} -->
        </p>
        <p class="flex items-center gap-2 text-[#000]/60">
          <vue-feather type="eye" class="w-[15px]"></vue-feather
          >{{ blogs[0].articleView }}
        </p>
      </div>

      <h1 class="text-[35px] font-bold">{{ blogs[0].articleTopic }}</h1>

      <div v-html="blogs[0].articleDesc" class="desc my-[50px]"></div>

      <SocialShare
        network="facebook"
        :styled="true"
        class="text-[#fff] w-[fit-content]"
        ><template #label>Share with Facebook</template></SocialShare
      >
    </div>
  </div>
</template>

<script setup>
import moment from "moment";
import axios from "axios";
import VueFeather from "vue-feather";

const env = useRuntimeConfig();

const route = useRoute();
const param = route;

let loading = ref(false);

let payload = {
  id: route.params.id,
};

const fn_updateView = async () => {
  try {
    loading.value = true;

    const update = await axios.post(
      env.public.NUXT_API_NODE + `/updateView`,
      payload
    );
    console.log(update);
    loading.value = false;
  } catch (err) {
    console.log(err);
    loading.value = false;
  }
};

// const fn_getDetailBlog = async () => {
//   try{

//   }catch(err){
//     console.log(err)
//     loading.value = false
//   }
// }

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

onMounted(() => {
  fn_updateView();
});
</script>

<style>
.desc a {
  @apply !text-blue;
}

.date p::after {
  content: "|";
  margin: 0 10px;
}

.date p:nth-last-child(1)::after {
  content: "";
}
</style>
