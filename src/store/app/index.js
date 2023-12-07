export default {
  state: {
    appUsers: [
      {
        value: 'root',
        text: 'Администратор'
      },
      {
        value: 'user',
        text: 'Пользователь'
      }
    ],
    selectAppUser: 'root',
    selectTask: null
  },
  getters: {
    isAppUserRoot(state) {
      return state.selectAppUser === 'root'
    }
  },
  mutations: {
    setSelectAppUser: (state, data) => {
      state.selectAppUser = data;
    },
    setSelectTask: (state, data) => {
      state.selectTask = data;
    }
  },
  actions: {
    setSelectAppUser: async (context, data) => {
      context.commit("setSelectAppUser", data);
    },
    setSelectTask: async (context, data) => {
      context.commit("setSelectTask", data);
    },
    resetSelectTask: async (context) => {
      context.commit("setSelectTask", null);
    },
  },
};
