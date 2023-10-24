<template>
  <div>
    Subtraction组件中count值为：{{ count }} <br />
    {{ showNum }} <br />
    <button id="subtraction" @click="handleSub">-</button>
    <button id="subtractionN" @click="handleSubN">-N</button>
    <button id="subtractionSync" @click="subSync">Sync-</button>
    <button id="subtractionNSync" @click="subNSync(10)">Sync-N</button>
    <button id="sub2" @click="subSync">Sync2</button>
    <div>merge1</div>
    <div>merge2</div>
    <div>merge3</div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'Subtraction',
  computed: {
    // 方式一
    ...mapState(['count']),
    ...mapGetters(['showNum'])
    // 方式二
    // ...mapState({
    //   c: 'count'
    // })
  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subSync', 'subNSync']),
    handleSub() {
      this.sub()
    },
    handleSubN() {
      this.subN(5)
    }
  }
}
</script>
