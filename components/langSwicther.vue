<template>
  <ul>
    <li v-for="lang in locales" :key="lang.code">
      <button class="text-uppercase" @click="fn_changeLang(lang.code)">
        {{ lang.code }}
      </button>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

const localPath = useLocalePath();
const { locales, locale, setLocale } = useI18n();

const fn_changeLang = (lang) => {
  setLocale(lang);
};
</script>
