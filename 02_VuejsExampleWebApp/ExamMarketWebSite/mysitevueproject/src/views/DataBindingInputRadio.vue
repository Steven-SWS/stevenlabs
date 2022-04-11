<template>
  <div>
    <label><input type="radio" v-bind:value="radioValue1" v-model="isPicked"> 서울 </label>
    <label><input type="radio" v-bind:value="radioValue2" v-model="isPicked"> 경기 </label>
    <label><input type="radio" v-bind:value="radioValue3" v-model="isPicked"> 제주 </label>
    <br>
    <span>선택한 지역 : {{ isPicked }}</span>
    <hr />
    <label><input type="radio" v-bind:value="radioVal1" v-model="checked"> 서울 </label>
    <label><input type="radio" v-bind:value="radioVal2" v-model="checked"> 경기 </label>
    <label><input type="radio" v-bind:value="radioVal3" v-model="checked"> 제주 </label>
    <br>
    <span>선택한 지역 : {{ checked }}</span>
  </div>
</template>

<script>
export default {
  name: 'DataBindingInputRadio',

  data () {
    return {
      isPicked: '',
      radioValue1: '서울',
      radioValue2: '경기',
      radioValue3: '제주',
      checked: '',
      radioVal1: '02',
      radioVal2: '031',
      radioVal3: '064'
    }
  },

  updated () {
    console.log(this.isPicked)
    console.log(this.checked)
  }
}
</script>
