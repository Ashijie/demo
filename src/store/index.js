import {
  createStore
} from 'vuex'
import per from 'vuex-persistedstate'

export default createStore({
  plugins:[per()],
  state: {
    list: [],
    checked: false
  },
  getters: {
    Allnum(state){
      let res=0
      state.list.forEach(i =>{
        if(i.status==true){
          res+=i.num*i.retail_price
        }
      })
      return res
    }

  },
  mutations: {
    add(state, obj) {
      let res = state.list.find(i => i.id == obj.id)
      if (res) {
        res.num++
      } else {
        state.list.push({
          ...obj,
          num: 1,
          status: false
        })

      }
    },
    del(state, index) {
      state.list.splice(index, 1)
    },
    one(state) {
      state.checked = state.list.every(i => i.status == true)
    },
    all(state) {
      state.list.forEach(i => {
        i.status = state.checked
      })
    },
  },
  actions: {},
  modules: {}
})