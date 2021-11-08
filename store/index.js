// import '@fortawesome/fontawesome-free/css/all.css'
//import 'material-design-icons-inconfont/dist/material-design-icons.css'
//import 'material-design-icons-iconfont/src/material-design-icons';
const HOST = 'http://localhost:8000';

export const state = () => ({
  itemsInCart: [],
  itemsAmounts: [],
  username: "",
  purchasableProducts: [],
  categories: []
})

export const mutations = {
  addItemToCart(state, item) {
    state.itemsInCart.push(item.id)
  },
  removeItemFromCart(state, item) {
    state.itemsInCart = state.itemsInCart.filter((x) => x !== item)
  },
  changeAmount(state, payload) {
    state.itemsAmounts = state.itemsAmounts.filter((x) => x.item !== payload.item)
    state.itemsAmounts.push(payload)
  },
  setUsername(state, username) {
    state.username = username
  },
  setPurchasableProduct(state, products) {
    // alert("SET")
    state.purchasableProducts = [...products]
  },
  setCategory(state, categories) {
    state.categories = categories
  }
}

export const actions = {
  async updateData({commit}) {
    console.log('updating...')
    let result = await fetch(`${HOST}/products/`);
    result = await result.json()
    commit('setPurchasableProduct', result)
    // alert(result)
    result = await fetch(`${HOST}/categories/`);
    result = await result.json()
    commit('setCategory', result)
  }
}

export const getters = {
  itemAmounts(state) {
    return state.itemsAmounts
  },
  isLoggedIn(state) {
    return state.username !== "";
  },
  itemsInCart(state) {
    return state.itemsInCart
  },
  purchasableProducts(state) {
    console.log("getter", state.purchasableProducts)
    return state.purchasableProducts;
  },
  categories(state) {
    return state.categories
  }
}
