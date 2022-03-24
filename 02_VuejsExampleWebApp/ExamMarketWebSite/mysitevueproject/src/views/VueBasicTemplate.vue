<template>
  <div></div>
</template>

<script>
export default {
  name: '',  // 컴포넌트 이름 정의. 이름은 정의하지 않아도 동작하는데는 지장 없음.
  components: {  // 외부 컴포넌트를 사용하게 되면, 해당 컴포넌트를 import 한 후, 여기에 배열로 등록해줘야 함.
  },

  data() {  // HTML과 JavaScript 코드에서 사용할 데이터 변수 선언. 'data()' Property는 template(html) 코드와 script(JS) 코드에서 전역 변수로 사용하기 위해 선언하는 Property. 이곳에 작성된 변수는 this를 통해서 접근해야 함.
      return {
          sampleData1: '',
          sampleData2: ''
      }
  },

  setup() {},            // [필수] Composition API를 구현하는 메소드.
  //beforeCreate() {},   // [선택] 컴포넌트가 생성되기 직전 시점에 실행됨.
  created() {},          // [필수] 컴포넌트가 생성된 이후 시점에 실행됨.
  //beforeMount() {},    // [선택] template에 정의된 HTML 코드가 렌더링되기 직전 시점에 실행됨.
  mounted() {},          // [필수] template에 정의된 HTML 코드가 렌더링 된 이후 시점에 실행됨.
  //beforeUpdate() {},   // [선택] data() 에 정의된 변수의 값이 변경되기 직전 시점에 실행됨.
  //updated() {},        // [선택] data() 에 정의된 변수의 값이 변경된 이후 시점에 실행됨.
  //beforeUnmount() {},  // [선택] 컴포넌트를 빠져나가기 직전 시점에 실행됨.
  unmounted() {},        // [필수] 컴포넌트를 빠져나가는 시점에 실행됨. (unmount가 완료된 이후 시점)

  methods() {  // 컴포넌트 내에서 사용할 메소드들을 정의하는 영역. 이곳에 작성된 메소드는 this를 통해서 접근해야 함.
  }
}
</script>
