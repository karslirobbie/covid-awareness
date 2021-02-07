<template>

  <div
    class="h-screen w-screen"
    id="app"
  >

    <HeroSection :globalConfirmedCases=globalConfirmedCases />

    <WorldMap
      :allData=allCountriesData
      :globalDeaths=globalDeaths
      :globalRecovered=globalRecovered
      :globalConfirmedCases=globalConfirmedCases
      :mapData=globalData
    />

    <Body />
    <Graph />
    <WhiteBody />
    <BlackBody />
    <Apart />
    <LastPage />

  </div>

</template>
<script>

import Body from './pages/Body'
import Apart from './pages/Apart'
import Graph from './pages/Graph'
import animation from './animation'
import LastPage from './pages/LastPage'
import WorldMap from './pages/WorldMap'
import WhiteBody from './pages/WhiteBody'
import BlackBody from './pages/BlackBody'
import HeroSection from './pages/HeroSection'
import { getAllCountriesData } from './service'
import { thousandFormat } from './utility'

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
      allCountriesData: null,
      globalConfirmedCases: '204,970,999',
      globalRecovered: '',
      globalDeaths: '',
      globalData: {}

    }
  },

  methods: {
    getAllCountriesData,
    thousandFormat
  },

  async created () {
    this.allCountriesData = await getAllCountriesData();
    const { confirmed, recovered, deaths } = this.allCountriesData.Global.All;
    this.globalConfirmedCases = this.thousandFormat(confirmed);
    this.globalRecovered = this.thousandFormat(recovered);
    this.globalDeaths = this.thousandFormat(deaths);
    Object.entries(this.allCountriesData)
      .map((country) => {
        const { abbreviation = "NAN" } = country[1].All;
        this.globalData[abbreviation] = country[1].All.confirmed
      })
  },

  mounted () {
    animation()
  },

}
</script>