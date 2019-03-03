<template lang=pug>

table.table.is-fullwidth
  thead
    tr
      th(v-for="val in tHead") {{ val }}
  tbody()
    tr(v-for="row in tBody")
      td(v-for="val in row")
        span {{ val }}

</template>


<script>
export default {
  name: 'Table',
  props: [ 'tHead', 'tBody' ]
}
</script>


<style lang="sass" scoped>

</style>
