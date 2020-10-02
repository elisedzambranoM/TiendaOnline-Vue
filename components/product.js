Vue.component("product-component", {
  props: {
    premium: {
      type: Boolean,
      //required: true,
      default: false,
    },
    cart: {
      type: Array,
      required: true,
    },
  },
  template: "#product-template",
  data() {
    return {
      selectedFormat: {},
      name: "El libro de la Selva",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, adipisci. Eos temporibus, in, omnis quos tempora cum ad pariatur, iste reiciendis illo eaque ipsam accusantium porro dolore laboriosam earum alias",
      formats: [
        {
          sku: "2234",
          type: "Impreso",
          img: "./assets/printed-book.jpg",
          stock: 20,
          default: false,
        },
        {
          sku: "2235",
          type: "pdf",
          img: "./assets/pdf-book.jpg",
          stock: 100,
          default: true,
        },
      ],
    };
  },
  computed: {
    img() {
      return this.selectedFormat.img;
    },
    stock() {
      return this.selectedFormat.stock;
    },
    shipping() {
      if (this.premium) {
        return 0;
      } else {
        return "2500";
      }
    },
    hasStock() {
      if (this.stock > 0) {
        return true;
      } else {
        return false;
      }
    },
    beforeCreate() {
      console.log(`estamos en el beforeCreate ${this.selectedFormat}`);
    },
  },
  created() {
    console.log(`estamos en el beforeCreate ${this.selectedFormat}`);
    var defaultFormat = this.formats.find((format) => format.default == true);
    this.selectedFormat = defaultFormat;
    console.log(`estamos en el beforeCreate ${this.selectedFormat.type}`);
  },
  methods: {
    addToCart() {
      this.selectedFormat.stock -= 1;

      this.$emit("add-to-cart", this.selectedFormat);
    },
    removeFromCart() {
      let variantCart = this.cart.filter(
        (variant) => variant == this.selectedFormat
      );
      if (variantCart.length > 0) {
        this.selectedFormat.stock += 1;
        this.$emit("remove-to-cart", this.selectedFormat);
      }
    },
    restoreStock() {
      console.log("I got you");
      this.cart.forEach((product) => {
        var returnedProduct = this.formats.find(
          (format) => format.type == product.type
        );
        returnedProduct.stock += 1;
      });
    },
  },
  template: "#product-template",
});
