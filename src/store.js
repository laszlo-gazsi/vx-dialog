import A from "./actions";

export default {
  state: {
    isOpen: false,
    title: "",
    message: ""
  },

  actions: {
    [A.SHOW_DIALOG]({ commit }, config) {
      commit(A.SHOW_DIALOG, config);
    },
    [A.HIDE_DIALOG]({ commit }) {
      commit(A.HIDE_DIALOG);
    }
  },

  mutations: {
    [A.SHOW_DIALOG](state) {
      state.isOpen = true;
    },
    [A.HIDE_DIALOG](state) {
      state.isOpen = false;
    }
  }
};
