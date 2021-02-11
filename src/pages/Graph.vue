<template>

  <div
    id="graph"
    class="flex flex-col w-full h-full items-center justify-center"
  >
    <p class="h-20 pt-10 font-bold">Death Ratio from January 2020 to present</p>
    <div class="flex justify-center items-center mt-5 w-full ">
      <area-chart
        class="w-full"
        id="area"
        :data="graphData"
        xkey="date"
        ykeys='[ "deaths"]'
        resize="true"
        labels='[ "Deaths", "Confirmed" ]'
        line-colors='[ "#C70F0F", "#F1BEBE" ]'
        grid="true"
        grid-text-weight="bold"
      >
      </area-chart>
    </div>
    <!-- header -->
    <div class="flex items-center w-full h-14 mt-3 sm:h-20 sm:mt-16 px-6 sm:px-10">
      <div class="flex flex-1 h-full items-center justify-center gap-2 sm:gap-5 text-xs text-center">
        <div>
          <div class="w-6 sm:w-12 bg-red h-3 rounded-md "></div>
          <p class="pt-1">Deaths</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Raphael from 'raphael/raphael'
import { AreaChart } from 'vue-morris'
global.Raphael = Raphael

export default {
  name: 'Graph',
  props: ["graphData"],
  components: {
    AreaChart
  }
}
</script>