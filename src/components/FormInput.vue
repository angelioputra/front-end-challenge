<template>
  <div class="form">
    <div class="form__label">{{label}}</div>
    <input
    v-show="!currency"
      type="text"
      class="input"
      :value="value"
      @input="updateSelf($event.target.value)"
    >
    <FormInputNumber :value="value" v-if="currency" @input="updateSelf" />
    <div class="form__message--error">{{error}}</div>
  </div>
</template>

<script>
import FormInputNumber from "@/components/FormInputNumber";

export default {
  name: "FormInput",

  components: { FormInputNumber },

  props: {
    value: null,
    label: {
      type: String,
      default: ""
    },
    error: {
      type: String,
      default: null
    },
    currency: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    updateSelf(value) {
      this.$emit("input", value);
    }
  }
};
</script>

<style lang="scss" scope>
.form {
  &__label {
    font-size: 14px;
  }
  &__message--error {
    font-size: 12px;
    color: #cc0000;
  }
}
</style>
