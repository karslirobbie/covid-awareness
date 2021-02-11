<template>

  <div
    class="h-screen w-screen"
    id="app"
  >

    <HeroSection :global="global.confirmed" />

    <WorldMap
      :global="global"
      :mapData="map"
    />

    <Body />
    <Graph :graphData="lineData" />
    <WhiteBody :countries="whiteCountries" />
    <BlackBody :countries="blackCountries" />
    <Apart />
    <LastPage />

  </div>

</template>
<script>

import Body from './pages/Body'
import Apart from './pages/Apart'
import Graph from './pages/Graph'
import animation from './js/animation'
import LastPage from './pages/LastPage'
import WorldMap from './pages/WorldMap'
import WhiteBody from './pages/WhiteBody'
import BlackBody from './pages/BlackBody'
import HeroSection from './pages/HeroSection'
import { countriesData, History } from './js/data'

export default {
  name: "App",

  components: {
    Body,
    Apart,
    Graph,
    LastPage,
    WorldMap,
    WhiteBody,
    BlackBody,
    HeroSection,
  },

  data () {
    return {
      map: {},
      global: {},
      countriesData,
      allAbbreviation: {},
      whiteCountries: {},
      blackCountries: {},
      lineData: [
        { date: '2013', confirmed: 100, deaths: 700 },
        { date: '2014', confirmed: 200, deaths: 100 },
        { date: '2015', confirmed: 100, deaths: 100 }]
    }
  },

  methods: {
    async fetchAllData () {
      await countriesData.getAllData()
      this.global = await countriesData.getGlobalData()
      this.allAbbreviation = await countriesData.getMapData()
      this.map = this.getAllConfirmed()
      this.getCountryTags()
      this.lineData = await History.getGraphData()
    },

    getCountryTags () {
      this.whiteCountries = countriesData.getWhiteCountry()
      this.blackCountries = countriesData.getBlackCountry()
    },

    getAllConfirmed () {
      const map = {}
      Object.entries(this.allAbbreviation)
        .map(country => {
          const { confirmed = "Not Available" } = country[1];
          map[country[0]] = confirmed
        })

      return map
    }
  },

  created () {
    this.fetchAllData()

  },

  mounted () {
    animation()
  },

}
</script>