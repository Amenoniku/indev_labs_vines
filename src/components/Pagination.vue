<template lang=pug>

nav.pagination.is-centered(role='navigation')
  a.pagination-previous(@click='goToPagi(-1)' :disabled='page <= 1') <
  a.pagination-next(@click='goToPagi(1)' :disabled='page >= numberOfPages') >
  ul.pagination-list
    li
      a.pagination-link(:disabled='page <= 2' @click='goToPagi("start")') 1
    li
      span.pagination-ellipsis …
    li
      a.pagination-link(@click='goToPagi(-1)' :disabled='page <= 1') {{ ((page - 1) <= 1) ? 1 : page - 1}}
    li
      a.pagination-link.is-current( aria-current='page') {{ page }}
    li
      a.pagination-link(@click='goToPagi(1)' :disabled='page >= (numberOfPages)') {{ ((page + 1) >= numberOfPages) ? numberOfPages : page + 1}}
    li
      span.pagination-ellipsis …
    li
      a.pagination-link(:disabled='page >= (numberOfPages - 1)' @click='goToPagi("end")') {{ numberOfPages }}

</template>


<script>
export default {
  name: 'Pagination',
  props: [ 'total', 'limit', 'page' ],
  computed: {
    numberOfPages () {
      return Math.ceil(this.total / this.limit)
    }
  },
  methods: {
    goToPagi (num) {
      let countPage
      switch (num) {
        case 'start': countPage = 1; break
        case 'end': countPage = countPage = this.numberOfPages; break
        default: countPage = this.page + num; break
      }
      if (countPage <= 0 || countPage > this.numberOfPages) return
      else return this.$emit('onChange', countPage)
    }
  }
}
</script>


<style scoped lang="sass">

</style>
