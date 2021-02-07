<template>

  <div
    id="hero"
    class="flex flex-col bg w-full h-full bg-center bg-cover bg-hero text-white bg-fixed"
  >
    <div class="flex h-10 lg:justify-end lg:items-center p-10">
      <Navigation />
    </div>
    <div class="flex p-10 flex-col  text-center self-center  md:h-1/3">
      <p class="hero-tag font-bold text-lg md:text-3xl lg:text-4xl sm:mt-20">
        <span class="sm:block ">There's {{ globalConfirmedCases }} reported</span>
        <span> covid-19 cases around the world.</span>
      </p>
      <button
        @click="$router.push({name:'WorldMap'})"
        class="hero-tag tracking-widest bg-red mt-6 text-xs md:text-md px-3 md:px-8 py-3 md:py-4 self-center md:mt-10"
      >
        Read WHO Advice
      </button>
    </div>
    <div class="flex justify-center items-end pb-14 h-full">
      <div
        @click="scrollDown()"
        class="cursor-pointer w-12 h-12 animate-bounce-slow text-black "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  </div>

</template>

<script>

import Navigation from '../components/Navigation'


export default {
  name: "HeroSection",

  props: ['globalConfirmedCases'],

  components: {
    Navigation,

  },

  methods: {
    scrollDown () {
      document.querySelector('#map').scrollIntoView({
        behavior: 'smooth'
      });
    }
  },

}

</script>