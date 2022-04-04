<template>
  <div>
    <div>{{htmlString}}</div>
    <!-- HTML 인젝션 -->
    <div v-html="htmlString"></div>
  </div>
</template>

<script>
export default {
  name: 'DataBindingHtml',

  data () {
    return {
      htmlString: '<p style="color:red;">This is a red string</p>',
      title: 'World'
    }
  }
}
</script>
