// import '@fortawesome/fontawesome-free/css/all.css'
//import 'material-design-icons-inconfont/dist/material-design-icons.css'
//import 'material-design-icons-iconfont/src/material-design-icons';
export const state = () => ({
  itemsInCart: []
})

export const mutations = {
  addItemToCart(state, item) {
    state.itemsInCart.push(item.id)
  }
}


export const getters = {
  isLoggedIn(_state) {
    return false;
  },
  itemsInCart(state) {
    return state.itemsInCart
  }
  ,
  purchasableProducts(_state) {
    return [
      {
        id: '00A',
        name: "Rau A",
        price: 1000000,
        image: 'raua.png',
        description: 'Duis ex leo, ultrices a risus quis, consequat egestas odio. Nunc finibus, nisi eget eleifend rhoncus, metus lectus ultricies libero, id efficitur est mauris quis mi. Donec viverra, magna a semper lobortis, quam dolor semper ipsum, vel dapibus tellus justo in turpis. Donec tempor dui purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean ac lectus nulla. Quisque non condimentum massa, vitae imperdiet nisl. Nunc dignissim pulvinar arcu in hendrerit. Quisque imperdiet vel ex non vulputate.\n' +
          '\n'
      },
      {
        id: '00B',
        name: "Rau B",
        price: 2000000,
        image: 'raub.png',
        description: 'Praesent nunc turpis, porta eget gravida in, scelerisque id tortor. Sed sollicitudin vehicula faucibus. Curabitur mollis, neque sit amet efficitur bibendum, est sapien ullamcorper sapien, a sodales purus orci et dolor. In tincidunt mi id orci aliquet, in venenatis ipsum rutrum. Proin pretium enim sit amet vestibulum volutpat. Vivamus non condimentum nibh, id dignissim augue. Sed luctus sollicitudin elit ac imperdiet. Sed egestas magna mauris, id sodales nulla sagittis at. Phasellus vitae facilisis nisi. Integer eu magna a odio elementum congue. Suspendisse potenti. Vivamus eu varius leo.\n' +
          '\n'
      },
      {id: '00C', name: "Rau C", price: 3000000, image: 'raub.png', description: 'Ahihi'},
      {id: '00D', name: "Rau D", price: 3000000, image: 'raub.png', description: 'huh'},
      {
        id: '00E',
        name: "Rau E",
        price: 1000000,
        image: 'raub.png',
        description: 'Proin id risus non risus finibus laoreet non non nulla. Phasellus aliquam eros metus, et eleifend libero gravida at. Mauris semper gravida dolor vitae pulvinar. Etiam pulvinar gravida mauris at sodales. In vitae nulla in turpis consequat consequat vel nec dui. Proin tincidunt luctus dui id ultrices. Integer fringilla efficitur quam nec vestibulum. Donec condimentum ac nisi ut laoreet. In risus dolor, iaculis eu dictum vel, bibendum eu augue. Donec eget neque dui. Vivamus metus dolor, porttitor vel lectus nec, laoreet faucibus magna. Duis feugiat condimentum pulvinar. Nam volutpat lectus non commodo accumsan. Ut aliquam justo at dolor dignissim rhoncus. Curabitur vestibulum convallis interdum.\n' +
          '\n'
      },
    ]
  }
}
