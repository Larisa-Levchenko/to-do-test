import { createStore } from 'vuex'
import app from './app'
import user from './user'
import todo from './todo'

export default createStore({
  modules: {
    app,
    user,
    todo
  }
});


