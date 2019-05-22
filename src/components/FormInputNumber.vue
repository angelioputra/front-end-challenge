<template>
  <div>
    <!-- Reality -->
    <input
      v-if="visible === false"
      v-model.number="temp"
      type="number"
      @input="onInputNumber"
      @blur="onBlurNumber"
    >
    <!--  Illusion -->
    <input
      v-if="visible === true"
      v-model="amount"
      @focus="onFocusText"
    >
  </div>
</template>

<script>
export default {
  name: "FormInputNumber",
  props: {
    value: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      amount: 0,
      temp: 0,
      visible: true
    };
  },
  watch: {
    value: function(newVal) {
      console.log(newVal);
      if (isNaN(newVal)) {
        newVal = null;
      }
      this.temp = newVal;
      this.amount = this.thousandSeprator(newVal);
    }
  },

  mounted() {
    this.amount = this.thousandSeprator(this.value);
  },

  methods: {
    /**
     * On input
     * @object {Event}
     */
    onInputNumber(e) {
      // console.log('Input')
      this.$emit("input", e.target.value);
    },
    /**
     * On blur
     * @object {Event}
     */
    onBlurNumber(e) {
      // console.log('Blur')
      this.visible = true;
      this.$emit("input", e.target.value);
    },
    /**
     * On focus
     */
    onFocusText() {
      // console.log('Focus')
      this.visible = false;
    },
    /**
     * Format number to thousand separator
     */
    thousandSeprator(amount) {
      if (
        amount !== "" ||
        amount !== undefined ||
        amount !== 0 ||
        amount !== "0" ||
        amount !== null
      ) {
        console.log(amount);

        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      } else {
        return amount;
      }
    }
  }
};
</script>

<style lang="scss" scope></style>
