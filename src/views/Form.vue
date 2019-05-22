<template>
  <div>
    <FormInput label="Company Name" v-model="form.name" :error="error.name"/>
    <FormInput label="Company Spend" v-model.number="form.spend" :error="error.spend" currency/>
    <FormInput
      label="Minimum Spend"
      v-model.number="form.spendMin"
      :error="error.spendMin"
      currency
    />
    <FormInput
      label="Maximum Spend"
      v-model.number="form.spendMax"
      :error="error.spendMax"
      currency
    />

    <div class="dialog__mask" v-if="showDialog">
      <div class="dialog__container">
        <textarea class="input__textarea" rows="5" v-model="form.note"></textarea>
        <button @click="showDialog = false">Close</button>
      </div>
    </div>

    <div>
      <button @click="showDialog = true">Note</button>
    </div>

    <button @click="handleSubmit">Submit</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import v8n from "v8n";

import FormInput from "@/components/FormInput";

export default {
  name: "Form",

  components: { FormInput },

  data() {
    return {
      showDialog: false,
      error: {
        name: null,
        spend: null,
        spendMin: null,
        spendMax: null
      },
      form: {
        name: "",
        spend: 0,
        spendMin: 0,
        spendMax: 0,
        note: ""
      }
    };
  },

  computed: {
    ...mapState({
      company: state => state.company.company,
      companies: state => state.company.companies,
      query: state => state.company.query
    })
  },

  mounted() {
    this.form = {
      name: this.company.name,
      spend: this.company.spend,
      spendMin: this.company.spendMin,
      spendMax: this.company.spendMax,
      note: this.company.note,
    }
  },

  methods: {
    validNumber(value) {
      return v8n()
        .positive()
        .test(value);
    },
    handleSubmit() {
      let error = false;
      this.error.name = null;
      this.error.spend = null;
      this.error.spendMin = null;
      this.error.spendMax = null;

      if (
        v8n()
          .empty()
          .test(this.form.name)
      ) {
        this.error.name = "Please fill company name";
        error = true;
      }

      if (!this.validNumber(this.form.spend)) {
        this.error.spend = "Please fill with positive number";
        error = true;
      }

      if (!this.validNumber(this.form.spendMin)) {
        this.error.spendMin = "Please fill with positive number";
        error = true;
      }

      if (!this.validNumber(this.form.spendMax)) {
        this.error.spendMax = "Please fill with positive number";
        error = true;
      } else if (
        v8n()
          .lessThanOrEqual(this.form.spendMin)
          .test(this.form.spendMax)
      ) {
        this.error.spendMax = "Please fill number greater than minimum";
        error = true;
      }

      if(!error){
        this.$store.dispatch("submitCompany", this.form)
        alert('Submit')
      }
    }
  }
};
</script>

<style lang="scss">
.input__textarea {
  width: 100%;
}
.dialog {
  &__mask {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
  }
  &__container {
    width: 400px;
    margin: 0px auto;
    margin-top: 20vh;
    padding: 20px 30px;
    background-color: #fff;
  }
}
</style>