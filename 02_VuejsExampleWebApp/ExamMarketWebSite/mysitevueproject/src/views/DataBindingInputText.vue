<template>
  <div>
    <input type="text" v-model="valueModel">
  </div>
</template>

<script>
export default {
  name: 'DataBindingInputText',

  data () {
    return {
      valueModel: 'South Korea',
      title: 'World'
    }
  },

  updated () {
    console.log(this.valueModel, this.title)
  }
}
</script>
