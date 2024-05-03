<template>
  <SlideBanner />
  <section class="w-full pt-24">
    <div class="container mx-auto p-4">
      <h2 class="sm:text-[55px] text-[35px] font-bold capitalize text-black">
        our products
      </h2>
      <p>{{ $t("description_product_index") }}</p>

      <div class="flex flex-wrap gap-4 my-[50px]">
        <div
          class="grow basis-[350px] h-[400px] relative rounded-lg shadow-lg"
          style="
            background: url(/images/business-analytics.png);
            background-size: cover;
            background-position: center;
          "
        >
          <div
            class="bg-gradient-to-b from-pink to-transparent w-full h-full absolute left-0 top-0 z-[1] rounded-lg"
          ></div>
          <div
            class="p-[20px] h-full relative z-[9] flex flex-col justify-between"
          >
            <h2 class="font-bold text-[25px] text-[#fff]">Z-MPRO</h2>

            <div>
              <h3 class="font-bold text-[#fff] text-[20px]">CMMS Platform</h3>
              <p class="text-[#fff] mb-[15px]">
                The comprehensive maintenance system, including PM planning, can
                easily connect with an ERP system. Moreover, it supports another
                module called z-PAP for AI predictive maintenance in the future.
              </p>

              <NuxtLink
                to="/contact-us"
                class="text-[#fff] capitalize tetx-center bg-pink hover:bg-blue transition-colors duration-300 px-8 py-2 rounded-full shadow-lg mt-[15px]"
                >free trial</NuxtLink
              >
            </div>
          </div>
        </div>
        <div
          class="grow basis-[350px] h-[400px] relative rounded-lg shadow-lg"
          style="
            background: url(/images/cloud-system.png);
            background-size: cover;
            background-position: center;
          "
        >
          <div
            class="bg-gradient-to-b from-blue to-transparent w-full h-full absolute left-0 top-0 z-[1] rounded-lg"
          ></div>
          <div
            class="p-[20px] h-full relative z-[9] flex flex-col justify-between"
          >
            <h2 class="font-bold text-[25px] text-[#fff]">Z-CONNECT</h2>

            <div>
              <h3 class="font-bold text-[#fff] text-[20px]">
                Connectivity Platform
              </h3>
              <p class="text-[#fff] mb-[15px]">
                The system connects data for AI predictive maintenance. We
                provides sensor installation, PLC & SCADA connection, and
                database connection on either cloud or customer-existing
                customers.
              </p>

              <NuxtLink
                to="/contact-us"
                class="text-[#fff] capitalize tetx-center bg-pink hover:bg-blue transition-colors duration-300 px-8 py-2 rounded-full shadow-lg mt-[15px]"
                >free trial</NuxtLink
              >
            </div>
          </div>
        </div>
        <div
          class="grow basis-[350px] h-[400px] relative rounded-lg shadow-lg"
          style="
            background: url(/images/business-person.png);
            background-size: cover;
            background-position: center;
          "
        >
          <div
            class="bg-gradient-to-b from-black to-transparent w-full h-full absolute left-0 top-0 z-[1] rounded-lg"
          ></div>
          <div
            class="p-[20px] h-full relative z-[9] flex flex-col justify-between"
          >
            <h2 class="font-bold text-[25px] text-[#fff]">Z-PAP</h2>

            <div>
              <h3 class="font-bold text-[#fff] text-[20px]">
                Predictive Analytics Platform
              </h3>
              <p class="text-[#fff] mb-[15px]">
                The system works with data, AI, and ML to do predictive
                maintenance. In addition, this user-friendly platform does not
                require any coding skills because of its “Anomaly Detection”
                feature.
              </p>

              <NuxtLink
                to="/contact-us"
                class="text-[#fff] capitalize text-center bg-pink hover:bg-blue transition-colors duration-300 px-8 py-2 rounded-full shadow-lg mt-[15px]"
                >free trial</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="w-full pt-24 bg-black">
    <div class="container mx-auto p-4">
      <h2
        class="sm:text-[55px] text-[35px] font-bold capitalize text-white-light text-center"
      >
        "Discover why countless industries and engineers confidently choose our
        trusted solutions."
      </h2>
    </div>
  </section>
</template>

<script setup></script>

<style></style>
