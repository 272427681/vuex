<template>
  <div id="app">
    <addition />
    ---------------------------------
    <subtraction />
  </div>
</template>

<script>
import Addition from '@/components/Addition'
import Subtraction from '@/components/Subtraction'
export default {
  name: 'App',
  components: {
    Addition,
    Subtraction
  }
}
</script>
