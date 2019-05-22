<template>
  <table class="table">
    <thead>
      <tr>
        <th @click="handleSort('id')">ID</th>
        <th @click="handleSort('name')">Company</th>
        <th @click="handleSort('countryName')">Country</th>
        <th @click="handleSort('email')">Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="company in companies" :key="company.id">
        <td>{{company.id}}</td>
        <td>{{company.name}}</td>
        <td>{{company.countryName}}</td>
        <td>{{company.email}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CompanyTable",

  props: {
    companies: {
      type: Array,
      default: []
    }
  },

  computed: {
    ...mapState({
      query: state => state.company.query
    })
  },

  methods: {
    handleSort(column) {
      this.query.column = column
      this.query.order = this.query.order === 'asc' ? 'desc' : 'asc'

      this.$store.dispatch("queryCompany");
    },
  }
};
</script>

<style lang="scss" scope>
.table {
  border-collapse: collapse;
  width: 100%;

  td,
  th {
    padding: 8px;
    border: 1px solid #ddd;
  }

  th {
    cursor: pointer;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4caf50;
    color: white;
  }
}
</style>
