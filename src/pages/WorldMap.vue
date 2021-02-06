<template>
  <div
    class="flex flex-col w-full h-full bg-white"
    id="map"
  >

    <!-- header -->
    <div class="flex items-center w-full h-14 mt-3 sm:h-20 sm:mt-5 px-6 sm:px-10">
      <div class="flex flex-1 h-full items-center justify-start gap-2 sm:gap-5 text-xs text-center">
        <div class="map-tag ">
          <div class="w-6 sm:w-12 bg-severe h-3 rounded-md "></div>
          <p class="pt-1">High</p>
        </div>
        <div class="map-tag ">
          <div class="w-6 sm:w-12 bg-medium h-3 rounded-md "></div>
          <p class="pt-1">Med</p>
        </div>
        <div class="map-tag ">
          <div class="w-6 sm:w-12 bg-low h-3 rounded-md "></div>
          <p class="pt-1">Low</p>
        </div>
      </div>
      <div class="map-tag flex flex-1 h-full justify-end items-center text-xs text-center">
        <input
          type="text"
          placeholder="Search Country"
        >
      </div>
    </div>

    <!-- world map -->
    <div class="map-body h-full">
      <WorldMapVue
        :country-data="{ US: 100000, CA: 200 }"
        :countryColors=false
        :showOverlay=showMapOverlay
        country-stroke-color="white"
        lowColor="#F1BEBE"
        highColor="#E67D7F"
        default-country-fill-color="#E2E2E2"
        @click="onClickMapCountry"
      >
        <template v-slot:overlay>
          <p>{{ selectedCountry }}</p>
        </template>
      </WorldMapVue>
    </div>

    <!-- footer -->
    <div class=" flex items-center justify-around w-full text-xs md:text-sm font-normal sm:font-semibold h-14 pt-5 mb-5 sm:mb-10 sm:h-20 px-6 sm:px-10 text-center">
      <div class="map-footer">
        <p>Active Cases</p>
        <p>100,000,000</p>
      </div>
      <div class=" map-footer">
        <p>Deaths</p>
        <p>100,000,000</p>
      </div>
      <div class="map-footer">
        <p>Mortality Rate</p>
        <p>2%</p>
      </div>
    </div>
  </div>

</template>
<script>
import WorldMapVue from 'world-map-vue'


export default {
  name: "WorldMap",
  components: {
    WorldMapVue
  },

  data () {
    return {
      showMapOverlay: false,
      selectedCountry: '',
    }
  },

  methods: {

    onMouseEnterMapCountry (countryCode) {
      this.showMapOverlay = true
      this.selectedCountry = countryCode
    },
    onMouseLeaveMapCountry () {
      this.showMapOverlay = false
    },
    onClickMapCountry (data) {
      console.log('Click Country', data)
    },
  },

}
</script>