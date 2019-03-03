import axios from 'axios'

const UPDATE_WINES = 'indev_labs_vines_UPDATE_WINES'

export default {
  namespaced: true,
  state: {
    wineList: []
  },
  mutations: {
    [UPDATE_WINES] (state, winesArray) {
      state.wineList = winesArray
    }
  },
  actions: {
    getWines ({commit}) {
      axios.get('http://devboapi.vindome.net/api/Wines').then(res => {
        let wineList = res.data.list
        commit(UPDATE_WINES, wineList)
      }).catch(err => {
        throw err
      })
    }
  }
}
