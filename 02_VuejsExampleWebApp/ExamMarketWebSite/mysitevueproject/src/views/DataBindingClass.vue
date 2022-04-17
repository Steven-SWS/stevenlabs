<template>
  <div class="container" v-bind:class="{
    'active': isActive,
    'text-red': hasError
    }">Class Binding
  </div>
</template>

<script>
export default {
  name: 'DataBindingClass',

  data () {
    return {
      isActive: true,
      hasError: true
    }
  },

  updated () {
    console.log(this.isActive)
    console.log(this.hasError)
  }
}
</script>
<style scoped>
  .container {
    width: 100%;
    height: 200px;
    background-color: yellowgreen;
  }
  .active {
    background-color: yellow;
    font-weight: bold;
  }
  .text-red {
    color: red;
  }
</style>
