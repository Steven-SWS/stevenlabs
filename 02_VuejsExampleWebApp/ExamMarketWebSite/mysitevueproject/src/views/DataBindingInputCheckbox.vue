<template>
  <div>
    <p><label><input type="checkbox" v-model="isChecked1"> 체크 : {{ isChecked1 }}</label></p>
    <p><label><input type="checkbox" v-model="isChecked2" true-value="yes" false-value="no"> 체크 : {{ isChecked2 }}</label></p>
    <hr />
    <label><input type="checkbox" value="02" v-model="isChecked"> 서울 </label>
    <label><input type="checkbox" value="031" v-model="isChecked"> 경기 </label>
    <label><input type="checkbox" value="064" v-model="isChecked"> 제주 </label>
    <br>
    <span>체크한 지역 : {{ isChecked }}</span>
    <hr />
    <label><input type="checkbox" v-bind:value="checker1" v-model="checker"> X철X </label>
    <label><input type="checkbox" v-bind:value="checker2" v-model="checker"> XX희 </label>
    <label><input type="checkbox" v-bind:value="checker3" v-model="checker"> X석X </label>
    <br>
    <span>출석한 사람 : {{ checker }}</span>
  </div>
</template>

<script>
export default {
  name: 'DataBindingInputCheckbox',

  data () {
    return {
      isChecked1: true,
      isChecked2: 'no',
      isChecked: [],
      checker1: '김철수',
      checker2: '정영희',
      checker3: '유재석',
      checker: []
    }
  },

  updated () {
    console.log(this.isChecked1)
    console.log(this.isChecked2)
    console.log(this.isChecked)
    console.log(this.checker)
  }
}
</script>
