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
    addToShoppingCart(product) {
      this.cart.push(product);
    },
    removeToShoppingCart(product) {
      if (this.cart.length > -1) {
        let index = this.cart.indexOf(product);
        this.cart.splice(index, 1);
      }
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
