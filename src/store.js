import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tasks: [
      {task: "task 1", status: "to-do", edit: false},
      {task: "task 2", status: "to-do", edit: false},
    ],
    availabelStatus: ['to-do', 'in-progress','finished']
  },
  mutations: {
    addTask (state, payload){
      return state.tasks.push(payload.data);
    },
    removeTask (state, payload){
      return state.tasks.splice(payload.index,1)
    },
    updateTask (state, payload){
      return state.tasks[payload.data.index].task = payload.data.task;
    },
    updateTaskStatus (state, payload){
      const indexObject = {"index": 0}
      indexObject.index = state.availabelStatus.indexOf(state.tasks[payload.index].status) + 1;
      state.tasks[payload.index].status = state.availabelStatus[indexObject.index > 2 ? indexObject.index = 0 : indexObject.index];
      return state.tasks
    },
  },
  actions: {
    addTask (context, payload) {
      context.commit('addTask', payload)
    },
    removeTask (context, payload) {
      context.commit('removeTask', payload)
    },
    updateTask (context, payload) {
      context.commit('updateTask', payload)
    },
    updateTaskStatus(context, payload) {
      context.commit('updateTaskStatus', payload)
    }
  }
})


export default store;