import _ from "lodash";

const companies = [
  {
    id: 1,
    name: "Photobean",
    countryName: "Russia",
    email: "atoulson0@virginia.edu"
  },
  {
    id: 2,
    name: "Browsetype",
    countryName: "Panama",
    email: "kgilyatt1@alexa.com"
  },
  {
    id: 3,
    name: "Aivee",
    countryName: "Indonesia",
    email: "pgilman2@themeforest.net"
  },
  {
    id: 4,
    name: "Demizz",
    countryName: "China",
    email: "cubank3@diigo.com"
  },
  {
    id: 5,
    name: "Trudoo",
    countryName: "Latvia",
    email: "hgoggan4@techcrunch.com"
  },
  {
    id: 6,
    name: "Kayveo",
    countryName: "Nigeria",
    email: "elusty5@newyorker.com"
  },
  {
    id: 7,
    name: "Abatz",
    countryName: "Poland",
    email: "ldangl6@imageshack.us"
  },
  {
    id: 8,
    name: "Jabberbean",
    countryName: "Colombia",
    email: "dtourot7@columbia.edu"
  },
  {
    id: 9,
    name: "Zazio",
    countryName: "Indonesia",
    email: "mmccumskay8@biglobe.ne.jp"
  },
  {
    id: 10,
    name: "Shufflebeat",
    countryName: "Mexico",
    email: "msandiland9@ibm.com"
  }
];

const state = {
  query: {
    search: "",
    column: "id",
    order: "asc"
  },
  companies: [],
  company: {
    name: "XYZ",
    spend: 1000,
    spendMin: 500,
    spendMax: 15000,
    note: "This is note"
  }
};

const mutations = {
  setCompanies(state, action = {}) {
    state.companies = action.companies;
  },
  setCompany(state, action = {}) {
    state.company = action.company;
  }
};

const actions = {
  // Get list companies
  queryCompany({ commit, state }) {
    let companiesTemp = companies;

    // Order
    companiesTemp = _.orderBy(
      companiesTemp,
      state.query.column,
      state.query.order
    );

    // Search
    if (state.query.search !== "") {
      companiesTemp = companiesTemp.filter(item => {
        const name = item.name.toLowerCase();
        if (name.indexOf(state.query.search.toLowerCase()) > -1) {
          return item;
        }
      });
    }
    commit("setCompanies", {
      companies: companiesTemp
    });
  },

  // Submit companies
  submitCompany({ commit, state }, form) {
    commit("setCompany", {
      company: form
    });
  }
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
};
