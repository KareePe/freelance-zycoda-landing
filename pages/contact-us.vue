<template>
  <section class="contact mt-[70px]" v-if="done === false">
    <div class="w-full flex justify-center py-[50px]">
      <img src="/images/logo/dark/logo-dark.svg" class="w-[350px]" alt="" />
    </div>

    <div class="container mx-auto p-4">
      <h1 class="font-bold text-[20px] text-center text-pink">
        {{ $t("ask") }}
      </h1>
      <p class="font-bold text-[16px] text-center mb-[25px] text-blue">
        {{ $t("ask_2") }}
      </p>

      <div class="max-w-[550px] ml-[50%] -translate-x-[50%]">
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
              name="company_name"
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
            ลงทะเบียน
          </ButtonElement>
        </Vueform>

        <p class="font-bold text-black mt-[25px]">
          Any problems, Please contact
        </p>

        <ul class="mt-[15px] p-0 flex gap-[10px]">
          <li class="flex flex-nowrap gap-4 justify-start items-center mb-2">
            <div
              class="min-w-[45px] h-[45px] rounded-full bg-black flex justify-center items-center"
            >
              <vue-feather
                type="phone-call"
                class="text-[#fff] w-[16px]"
              ></vue-feather>
            </div>

            <div>
              <a href="tel:0625910082" class="underline text-[16px] text-black"
                >062-5910-082</a
              >
              ,
              <a href="tel:0836535442" class="underline text-[16px] text-black"
                >083-6535-442</a
              >
            </div>
          </li>
          <li class="flex flex-nowrap gap-4 justify-start items-center mb-2">
            <div
              class="min-w-[45px] h-[45px] rounded-full bg-black flex justify-center items-center"
            >
              <vue-feather
                type="mail"
                class="text-[#fff] w-[16px]"
              ></vue-feather>
            </div>

            <div>
              <a
                href="mailto:admin@zycoda.com"
                class="underline text-[16px] text-black"
                >admin@zycoda.com</a
              >
            </div>
          </li>
          <li class="flex flex-nowrap gap-4 justify-start items-center mb-2">
            <div
              class="w-[45px] h-[45px] rounded-full bg-blue flex justify-center items-center"
            >
              <vue-feather
                type="facebook"
                class="text-[#fff] w-[16px]"
              ></vue-feather>
            </div>

            <div>
              <a
                href="javascript:void(0)"
                class="underline text-[16px] text-black"
                >Zycoda</a
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section class="contact mt-[70px]" v-else>
    <div
      class="w-full md:px-[150px] px-[25px] h-[650px] bg-[url(/images/bg-footer.jpg)] bg-cover bg-left-bottom flex justify-center items-center"
    >
      <div>
        <p class="font-bold text-[45px] text-center">{{ $t("done") }}</p>

        <img
          src="/images/logo/dark/logo-dark.svg"
          class="w-[350px] mt-[100px] ml-[50%] -translate-x-[50%]"
          alt=""
        />
        <p class="font-bold text-[25px] text-center mt-4">“everyone can build AI”</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import VueFeather from "vue-feather";

const form$ = ref(null);
const data = ref([{}]);
let loading = ref(false);

let done = ref(false);

const interestedLoanItem = [
  { label: "Z-MPRO", value: "Z-MPRO" },
  { label: "Z-CONNECT", value: "Z-CONNECT" },
  { label: "Z-PAP", value: "Z-PAP" },
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
</script>

<style>
.vf-btn-primary {
  @apply !bg-pink !border-0;
}
</style>
