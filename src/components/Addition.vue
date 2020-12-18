<template>
  <div>
    Addition组件中当前count值为：{{ $store.state.count }} <br />
    {{ $store.getters.showNum }} <br />
    <button id="add" @click="handleAdd">+</button>
    <button id="addN" @click="handleAddN">+N</button>
    <button id="addSync" @click="handleAddSync">Sync+</button>
    <button id="addNSync" @click="handleAddNSync">Sync+N</button>
  </div>
</template>

<script>
export default {
  name: 'Addition',
  methods: {
    handleAdd() {
      this.$store.commit('add') // 通过 commit 来触发相应的方法
    },
    handleAddN() {
      this.$store.commit('addN', 5) // 通过 commit 来触发相应的方法
    },
    handleAddSync() {
      this.$store.dispatch('addSync') // 通过 dispatch 来触发异步方法
    },
    handleAddNSync() {
      this.$store.dispatch('addNSync', 5) // 通过 dispatch 来触发异步方法
    }
  }
}
</script>
