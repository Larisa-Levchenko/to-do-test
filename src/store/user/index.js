export default {
    state: {
      userList: [],
    },
    mutations: {
      setUserList: (state, data) => {
        state.userList = data;
      }
    },
    actions: {
      setUserList: async (context, data) => {
        context.commit("setUserList", data);
      }
    }
  }