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
    <div class="map-body h-5/6 xl:h-4/5">
      <WorldMapVue
        :country-data="mapData"
        :countryColors=false
        :showOverlay=showMapOverlay
        country-stroke-color="white"
        lowColor="#F1BEBE"
        highColor="#E03131"
        default-country-fill-color="#E2E2E2"
        @mouseenter="onMouseEnterMapCountry"
        @mouseleave="onMouseLeaveMapCountry"
      >
        <template v-slot:overlay>
          <div class="w-full h-full text-xs text-center leading-5">
            <p class="font-bold text-sm pb-2">{{ selectedCountry }} </p>
            <p>Confirmed: {{ countryConfirmed }}</p>
            <p>Recovered: {{ countryRecovered }} </p>
            <p>Deaths: {{ countryDeaths }}</p>

          </div>
        </template>
      </WorldMapVue>
    </div>
    <!-- footer -->
    <div class="flex items-center justify-around w-full text-xs md:text-sm font-normal sm:font-semibold h-14 pt-5 mb-5 sm:mb-10 sm:h-20 px-6 sm:px-10 text-center">
      <div class="map-footer">
        <p>Active Cases</p>
        <p>{{ globalConfirmedCases }} </p>
      </div>
      <div class=" map-footer">
        <p>Deaths</p>
        <p>{{ globalDeaths }}</p>
      </div>
      <div class="map-footer">
        <p>Recovered</p>
        <p>{{ globalRecovered }}</p>
      </div>
    </div>
  </div>

</template>
<script>
import WorldMapVue from 'world-map-vue'
import { thousandFormat } from '../utility'

const iso = require('iso-3166-1');

export default {
  name: "WorldMap",
  props: ["allData", "globalConfirmedCases", "globalDeaths", "globalRecovered", "mapData"],

  components: {
    WorldMapVue
  },

  data () {
    return {
      showMapOverlay: false,
      selectedCountry: '',
      countryDeaths: '',
      countryRecovered: '',
      countryConfirmed: '',
      globalData: {}
    }
  },

  methods: {
    onMouseEnterMapCountry (countryCode) {
      this.showMapOverlay = true
      const { country } = iso.whereAlpha2(countryCode);
      this.selectedCountry = country;
      const { [country]: countryData } = this.allData;
      const { deaths, recovered, confirmed } = countryData.All
      this.countryDeaths = thousandFormat(deaths)
      this.countryRecovered = thousandFormat(recovered)
      this.countryConfirmed = confirmed
    },

    onMouseLeaveMapCountry () {
      this.showMapOverlay = false
    },

  },

}
</script>