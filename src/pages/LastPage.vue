<template>

  <div class="w-full h-full">
    <div
      id="last"
      class="w-full h-full bg-center bg-cover bg-last bg-low text-white"
    >
      <div class="flex p-10 md:p-20 flex-col text-center lg:text-left justify-center h-1/2 md:h-1/3 lg:items-start lg:justify-center lg:h-3/6">
        <p>
          <span class="last-tag -mt-5 font-bold block text-lg md:text-3xl lg:text-4xl sm:mt-20">Stay Home, Stay Safe</span>
          <span class="last-tag md:pt-5 block text-sm">Protect yourself, protect your family</span>
          <span class="last-tag text-sm">We will celebrate life, when the pandemic ends.</span>
        </p>
        <button class="last-tag lg:self-start lg:justify-center tracking-widest bg-red mt-2 text-xs md:text-md px-3 md:px-8 py-3 md:py-4 self-center md:mt-10">
          Read WHO Advice
        </button>
      </div>
    </div>
    <div class="flex h-1/6 bg-dark justify-around items-center">
      <div class="hidden sm:flex">
        <Navigation />
      </div>
      <div class="text-white text-center text-xs sm:text-sm">
        <p>These live data is being pulled from a public COVID-19 API</p>
        Using information from Johns Hopkins University

        <p class="hidden sm:block">Data updated every hour</p>
        <p class="hidden sm:block">
          <span>Photos by <a href="https://unsplash.com/@jakaylatoney?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jakayla Toney</a>
            on <a href="https://unsplash.com/s/photos/social-distance?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
          <span> & Edward Eyer from Pexels</span>
        </p>
      </div>
      <div class="hidden sm:flex justify-center pb-14">
        <div
          @click="scrollUp()"
          class="flex self-end cursor-pointer hover:animate-none sm:w-12 sm:h-12 animate-bounce-slow text-white"
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
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Navigation from '../components/Navigation'
export default {
  name: "LastPage",
  components: {
    Navigation
  },
  methods: {
    scrollUp () {
      document.querySelector('#hero').scrollIntoView({
        behavior: 'smooth'
      })
    }
  }
}
</script>