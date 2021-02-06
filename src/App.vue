<template>

  <div
    class="h-screen w-screen"
    id="app"
  >

    <HeroSection />
    <WorldMap />

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

  mounted () {
    animation()
  }
}
</script>