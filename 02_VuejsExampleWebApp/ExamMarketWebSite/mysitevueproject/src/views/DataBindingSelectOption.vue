<template>
  <div>
    <select v-model="city">
      <option value="02">서울</option>
      <option value="031">경기</option>
      <option value="064">제주</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'DataBindingSelectOption',

  data () {
    return {
      city: '031'
    }
  },

  updated () {
    console.log(this.city)
  }
}
</script>
