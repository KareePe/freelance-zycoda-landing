<template>
  <section class="contact mt-[70px]" v-if="done === false">
    <div class="w-full justify-center py-[50px] hidden">
      <img src="/images/logo/dark/logo-dark.svg" class="w-[350px]" alt="" />
    </div>

    <div class="container mx-auto p-4 py-[40px]">
      <h1 class="font-bold text-[20px] text-center text-pink">
        {{ $t("ask") }}
      </h1>
      <p class="font-bold text-[16px] text-center mb-[25px] text-blue">
        {{ $t("ask_2") }}
      </p>

      <div
        class="md:max-w-[550px] w-full md:ml-[50%] ml-0 md:-translate-x-[50%] -translate-x-0"
      >
        <Vueform
          v-model="data"
          ref="form$"
          :display-errors="false"
          :endpoint="false"
          @submit="fn_putInterestCustomer"
          sync
        >
          <GroupElement name="group1">
            <MultiselectElement
              :multiple-label="(values) => `${values.length} ${$t('selected')}`"
              :hide-selected="false"
              :close-on-select="false"
              :label="$t('interest')"
              placeholder=""
              name="interested_credit"
              :native="false"
              :items="interestedLoanItem"
              :rules="['required']"
              :readonly="loading"
            />

            <TextElement
              name="name"
              :label="$t('label_name')"
              placeholder=""
              :rules="['required']"
              :columns="{
                default: 12,
                sm: 12,
                md: 6,
                lg: 6,
              }"
              :readonly="loading"
            />

            <TextElement
              name="mail"
              :label="$t('label_mail')"
              placeholder=""
              :rules="['required', 'email']"
              :columns="{
                default: 12,
                sm: 12,
                md: 6,
                lg: 6,
              }"
              :readonly="loading"
            />

            <TextElement
              name="zipcode"
              :label="$t('label_phone')"
              placeholder=""
              mask="00000"
              @keypress="fn_isNumber($event)"
              @paste="fn_checkPasteNum($event)"
              :rules="['required', 'numeric']"
              :columns="{
                default: 12,
                sm: 12,
                md: 6,
                lg: 6,
              }"
              :readonly="loading"
            />

            <TextElement
              name="company_name"
              :label="$t('label_company')"
              placeholder=""
              :rules="['required']"
              :columns="{
                default: 12,
                sm: 12,
                md: 6,
                lg: 6,
              }"
              :readonly="loading"
            />
          </GroupElement>

          <ButtonElement name="button" submits :loading="loading">
            {{ $t("register") }}
          </ButtonElement>
        </Vueform>
      </div>
    </div>
  </section>

  <section class="contact mt-[70px]" v-else>
    <div
      class="w-full md:px-[150px] px-[25px] h-[650px] bg-[url(/images/bg-footer.jpg)] bg-cover bg-left-bottom flex justify-center items-center"
    >
      <div>
        <div
          v-html="$t('done')"
          class="font-bold text-[35px] text-center"
        ></div>

        <img
          src="/images/logo/dark/logo-dark.svg"
          class="w-[350px] mt-[100px] ml-[50%] -translate-x-[50%]"
          alt=""
        />
        <p class="font-bold text-[25px] text-center mt-4">
          “everyone can build AI”
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import VueFeather from "vue-feather";

import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: "a801073683187fb13910d8115a0daee1-us17",
  server: "us17",
});

const form$ = ref(null);
const data = ref([{}]);
let loading = ref(false);

let done = ref(false);

const interestedLoanItem = [
  { label: "Z-MPRO (CMMS Platform)", value: "Z-MPRO (CMMS Platform)" },
  {
    label: "Z-CONNECT (Connectivity Platform)",
    value: "Z-CONNECT (Connectivity Platform)",
  },
  {
    label: "Z-PAP (Predictive Analytics Platform)",
    value: "Z-PAP (Predictive Analytics Platform)",
  },
];

// ! เช็คให้กดได้แค่ตัวเลข
const fn_isNumber = (_event) => {
  let char = String.fromCharCode(_event.keyCode);
  if (/^[0-9]+$/.test(char)) return true;
  else _event.preventDefault();
};
// ! เช็คให้ paste ได้แค่ตัวเลข
const fn_checkPasteNum = (_event) => {
  console.log("event", _event.clipboardData.getData("Text"));
  let pasteValue = _event.clipboardData.getData("Text");
  let checkPaste = /^[0-9]+$/.test(pasteValue);
  if (checkPaste === false) {
    _event.preventDefault();
  }
};

const fn_putInterestCustomer = async () => {
  loading.value = true;
  setTimeout(() => {
    console.log(form$.value.data);
    done.value = true;
  }, 2000);
};

const run = async () => {
  try {
    const response = await mailchimp.ping.get();
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

onMounted(() => {
  run();
});
</script>

<style>
.vf-btn-primary {
  @apply !bg-pink !border-0;
}
</style>
