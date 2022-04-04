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
      htmlString: '<p style="color:red;">This is a red string</p>',
      title: 'World'
    }
  },
  updated () {
    console.log(this.valueModel)
  }
}
</script>
