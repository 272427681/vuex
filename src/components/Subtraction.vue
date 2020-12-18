<template>
  <div>Subtraction组件中count值为：{{ count }}</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Subtraction',
  computed: {
    // 方式一
    ...mapState(['count'])
    // 方式二
    // ...mapState({
    //   c: 'count'
    // })
  }
}
</script>
