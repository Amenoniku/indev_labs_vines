<template lang="pug">

section#app.section
  .container
    Wines

</template>

<script>
import Wines from '@/components/Wines'

export default {
  name: 'app',
  components: {
    Wines
  }
}
</script>

<style lang="sass">
@import './assets/style/index'

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  margin-top: 20px

</style>
