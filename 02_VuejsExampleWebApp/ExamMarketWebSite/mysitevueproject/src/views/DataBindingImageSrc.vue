<template>
  <div>
    <img v-bind:src="imgSrc" />
  </div>
</template>

<script>
export default {
  name: 'DataBindingImageSrc',

  data () {
    return {
      imgSrc: 'https://kr.vuejs.org/images/logo.png'
    }
  },

  mounted () {
    console.log(this.imgSrc)
  }
}
</script>
