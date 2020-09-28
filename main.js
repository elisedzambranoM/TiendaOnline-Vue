const app = new Vue({
  el: "#app",
  data: {
    title: "Intro a vue",
    cart: [],
    showStyle: {
      display: "block",
    },
    displayCart: false,
    premiumUser: false,
  },
  methods: {
    addToShoppingCart() {
      this.cart.push();
    },
  },
  computed: {
    modalStyle() {
      if (this.displayCart) {
        return this.showStyle;
      } else {
        return {};
      }
    },
  },
});
