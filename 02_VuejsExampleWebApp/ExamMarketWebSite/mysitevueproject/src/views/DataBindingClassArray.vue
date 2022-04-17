<template>
  <div class="container" v-bind:class="[
    activeClass,
    errorClass
    ]">Class Array Binding
  </div>
</template>

<script>
export default {
  name: 'DataBindingClassArray',

  data () {
    return {
      activeClass: 'active',
      errorClass: 'text-red'
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
  }
  .active {
    background-color: yellow;
    font-weight: bold;
  }
  .text-red {
    color: red;
  }
</style>
