<template>
  <div>
    <input
      v-model="search"
      placeholder="Search by Company"
      @blur="handleSearch"
      @input="handleSearch"
    >
    <CompanyTable :companies="companies" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import CompanyTable from "@/components/CompanyTable";

export default {
  name: "List",

  components: { CompanyTable },

  data() {
    return {
      search: ""
    };
  },

  computed: {
    ...mapState({
      companies: state => state.company.companies,
      query: state => state.company.query
    })
  },

  mounted() {
    this.$store.dispatch("queryCompany");
  },

  methods: {
    handleSort(column) {
      this.query.column = column;
      this.query.order = this.query.order === "asc" ? "desc" : "asc";

      this.$store.dispatch("queryCompany");
    },
    handleSearch() {
      this.query.search = this.search;
      this.$store.dispatch("queryCompany");
    }
  }
};
</script>

<style lang="scss">
</style>