<template>

  <div
    class="w-full h-full"
    id="apart"
  >

    <!-- image -->
    <div class="w-full h-3/4 bg-center bg-cover bg-apart text-white">
      <div class="flex p-10 flex-col text-center self-center h-1/2 md:h-1/3">
        <p class="apart-tag font-bold pt-32 sm:pt-5 text-lg md:text-3xl lg:text-4xl sm:mt-24">
          <span class="sm:block">Staying apart is staying safe.</span>

        </p>
        <button class="apart-tag tracking-widest bg-red mt-6 text-xs md:text-md px-3 md:px-8 py-3 md:py-4 self-center md:mt-10">
          Read WHO Advice
        </button>
      </div>

    </div>

    <!-- tag -->
    <div class="flex h-1/4 items-start justify-center text-center p-10 bg-white">
      <p class="pt-5 sm:pt-10">
        <span class="apart-footer block text-md lg:text-3xl font-bold ">Wash your hands.</span>
        <span class="apart-footer pt-3 block text-xs font-thin sm:text-sm">According to WHO washing your hands reduce the risk of blak blah about washing hands here.</span>
      </p>
    </div>
  </div>

</template>
<script>
export default {
  name: "Apart"
}
</script>