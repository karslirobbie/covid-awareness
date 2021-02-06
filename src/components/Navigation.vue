<template>

  <nav class="text-white">
    <div class="cursor-pointer lg:hidden">
      <svg
        class="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h7"
        />
      </svg>
    </div>
    <div class="hidden text-xs sm:text-sm lg:flex lg:w-1/4 justify-around">
      <button class="p-4">About</button>
      <button class="p-4">FAQ</button>
      <button class="p-4">Contact</button>
    </div>
  </nav>

</template>
<script>
export default {
  name: 'Navigation'
}
</script>