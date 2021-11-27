// import '@fortawesome/fontawesome-free/css/all.css'
//import 'material-design-icons-inconfont/dist/material-design-icons.css'
//import 'material-design-icons-iconfont/src/material-design-icons';
const HOST = 'http://localhost:8000';

export const state = () => ({
  //Current user info
  username: "",
  password: "",
  first_name: "",
  last_name: "",
  email: "",

  itemsInCart: [],
  itemsAmounts: [],
  purchasableProducts: [],
  categories: []
})

export const mutations = {
  setUsername(state, username) {
    state.username = username
  },
  setPassword(state, password) {
    state.password = password
  },
  setUserInfo(state, user){
    state.username = user.username,
    state.password = user.password,
    state.first_name = user.first_name,
    state.last_name = user.last_name
  },
  resetUserState(state) {
    state.username = '';
    state.password = '';
    state.first_name = '';
    state.last_name = '';
    state.email = '';
  },


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
  },
  async login({commit}, payload) {
    let headers = new Headers();

    headers.set('Authorization', 'Basic ' + btoa(payload.username + ":" + payload.password));
    try {
    let result = await fetch(`${HOST}/users/`, {method: "GET", headers: headers});
    
      result = await result.json()
      if (result.detail) {
        return false
      }
      console.log(result);
      commit('setPassword', payload.password);
      commit('setUsername', payload.username);
      commit('setUserInfo', result[0]);
      return true
    } catch {
      console.log("Thông tin đăng nhập sai.")
      return false
    }
  },
  async register({commit}, payload) {
    console.log(payload)
    //send POST request to backend
    let form = new FormData()
    for (let key in payload){
      form.append(key, payload[key])
    }
    try{
      let result = await fetch(`${HOST}/user/register/`, {method : 'POST', body : form})
      result = await result.json()
      if (result.message){
        console.log("result.message");
        console.log(result.message);
        return false;
      } else {
        commit('setUserInfo', result);
        return true;
      }
    } catch(err) {
      console.log(err)
      return false;
    }
   
  },

  async updateProfile({commit}, payload){
    //send POST request to backend
    //waiting for the result
    //handle result
  },

  async deleteAccount({commit}, payload){
    //send DELETE request to backend
    let form = new FormData();
    form.append('username', payload['username']); 
    try{
      let result = await fetch(`${HOST}/user/delete/`, {method: 'DELETE', body: form});
      if (result){
        commit('resetUserState')
        return 0;
      }
    } catch(err) {
      console.log("Cannot delete user account")
      console.log(err)
    }
    //waiting for the result
    //if successful
    //set all user state to ''
    //return
  }
}

export const getters = {
  username(state) {
    return state.username;
  },
  first_name(state) {
    return state.first_name;
  },
  last_name(state) {
    return state.last_name;
  },
  email(state) {
    return state.email;
  },
  isLoggedIn(state) {
    return state.username !== "";
  },
  itemAmounts(state) {
    return state.itemsAmounts
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
