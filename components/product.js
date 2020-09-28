Vue.component("product-component", {
  props: {
    premium: {
      type: Boolean,
      //required: true,
      default: false,
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
          stock: 0,
          default: true,
        },
        {
          sku: "2235",
          type: "pdf",
          img: "./assets/pdf-book.jpg",
          stock: 100,
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
  },
  created() {
    var defaultFormat = this.formats.find((format) => format.default == true);
    this.selectedFormat = defaultFormat;
  },
  methods: {
    addToCart() {
      this.selectedFormat.stock -= 1;
      this.$emit("add-to-cart", this.selectedFormat);
    },
    removeFromCart() {
      this.selectedFormat.stock++;
      this.$emit("remove-to-cart", this.selectedFormat);
      /*let variantCart = this.cart.filter(
        (variant) => variant == this.selectedFormat
      );

      if (variantCart.length > 0) {
        this.selectedFormat.stock += 1;
      }*/
    },
  },
  template: "#product-template",
});
