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
          <p class="pt-1">Unavaible</p>
        </div>
      </div>
      <div class="map-tag flex flex-1 h-full justify-end items-center text-xs text-center">

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
        @mouseenter="onMouseEnterCountry"
        @mouseleave="onMouseLeaveCountry"
      >
        <template v-slot:overlay>
          <div class="w-full h-full text-xs sm:text-base text-center leading-6">
            <p class="font-bold  pb-2">{{ selected}} </p>
            <p>Confirmed: {{ selectedCountry.confirmed }}</p>
            <p>Recovered: {{ selectedCountry.recovered }} </p>
            <p>Deaths: {{ selectedCountry.deaths }}</p>

          </div>
        </template>
      </WorldMapVue>
    </div>
    <!-- footer -->
    <div class="flex items-center justify-around w-full text-xs md:text-sm font-normal sm:font-medium h-14 mb-5 sm:mb-16 sm:h-20 px-6 sm:px-10 text-center">
      <div class="map-footer">
        <p>Active Cases</p>
        <p>{{ global.confirmed }} </p>
      </div>
      <div class=" map-footer">
        <p>Deaths</p>
        <p>{{ global.deaths }}</p>
      </div>
      <div class="map-footer">
        <p>Recovered</p>
        <p>{{ global.recovered }}</p>
      </div>
    </div>
  </div>

</template>
<script>
import WorldMapVue from 'world-map-vue'
import { countriesData } from '../js/data'
const iso = require('iso-3166-1');

export default {
  name: "WorldMap",

  props: ["global", "mapData"],

  components: {
    WorldMapVue
  },

  data () {
    return {
      showMapOverlay: false,
      selected: '',
      selectedCountry: {},
    }
  },

  methods: {
    onMouseEnterCountry (countryCode) {
      this.showMapOverlay = true
      this.selected = iso.whereAlpha2(countryCode).country;
      this.selectedCountry = countriesData.getSelectedCountry(countryCode)
      document.getElementById(countryCode).style.stroke = 'red'
    },

    onMouseLeaveCountry (countryCode) {
      document.getElementById(countryCode).style.stroke = 'white'
      this.showMapOverlay = false
    }
  },

}
</script>