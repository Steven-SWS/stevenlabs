<template>
  <div>
    <textarea v-model="inputMessage"></textarea>
  </div>
</template>

<script>
export default {
  name: 'DataBindingTextarea',

  data () {
    return {
      inputMessage: '멀티라인 입력 textarea 입니다'
    }
  },

  updated () {
    console.log(this.inputMessage)
  }
}
</script>
