<template>
  <div>
    <input type="number" v-model.number="numberModel" />
  </div>
</template>

<script>
export default {
  name: 'DataBindingInputNumber',

  data () {
    return {
      numberModel: 0
    }
  },

  updated () {
    console.log(this.numberModel)
    if (this.numberModel <= 0) {
      this.numberModel = 0
    }
  }
}
</script>
