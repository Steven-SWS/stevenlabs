<template>
  <v-container>   
    {{datas}} 
    <e-chart
      :path-option="[
        ['dataset.source', datas],
        ['series[0].type', 'line'],
      ]"
      height="350px"
      width="100%"
    />
  </v-container>
</template>

<script>
import EChart from '@/demo-components/chart/echart';


export default {
    props : {
        datas : Array
    },

  components: {
    EChart,
  },
}
</script>

<style>

</style>