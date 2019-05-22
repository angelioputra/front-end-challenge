<template>
  <div>
    <p>{{company.name}}</p>
    <p>Spend : {{company.spend}}</p>
    <p>Spend Range : {{company.spendMin}} - {{company.spendMax}}</p>
    <p>{{company.note}}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Profile",

  data() {
    return {
     
    };
  },

  computed: {
    ...mapState({
      company: state => state.company.company,
    })
  },

};
</script>

<style lang="scss">

</style>