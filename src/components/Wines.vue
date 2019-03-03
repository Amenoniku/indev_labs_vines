<template lang="pug">

.wines
  p.title Коллекционные вина
  Table(:tHead='tHead' :tBody='tBody')
  Pagination(
    :total='wines.length'
    :limit='showLimit'
    :page='page'
    @onChange='page => this.page = page'
  )

</template>


<script>
import { mapState, mapActions } from 'vuex'

import Table from '@/components/Table'
import Pagination from '@/components/Pagination'

export default {
  name: 'Wines',
  components: {
    Table,
    Pagination
  },
  data () {
    return {
      page: 1,
      showLimit: 10,
      tHead: ['Name', 'Vintage', 'Producer'] // название заголовков столбцов таблиц
    }
  },
  computed: {
    tBody () {
      let tBody = []
      if (this.wines.length > 0) {
        tBody = this.wines.slice((this.page - 1) * this.showLimit, this.showLimit * this.page)
        tBody = tBody.map(item => {
          return {
            name: item.name,
            vintage: item.vintage,
            producer: item.producer
          }
        })
      }
      return tBody
    },
    ...mapState('wines', {
      wines: state => state.wineList
    })
  },
  methods: {
    ...mapActions('wines', {
      getWines: 'getWines'
    })
  },
  created () {
    this.getWines()
  }
}
</script>


<style scoped lang="sass">

.wines

</style>
