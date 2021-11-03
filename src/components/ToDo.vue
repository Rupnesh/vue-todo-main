<template>
  <div class="container">
  <TaskProgress v-bind:todo="countSpecificTask('to-do')" v-bind:progress="countSpecificTask('in-progress')" v-bind:finished="countSpecificTask('finished')"></TaskProgress>
  <CreateTask @addTask="handleAddTask"></CreateTask>
  <TaskList></TaskList>
    
  </div>
</template>

<script>
import store from '../store';
import * as type from '../storeTypes';
import TaskProgress from './TaskProgress.vue';
import CreateTask from './CreateTask.vue';
import TaskList from './TaskList.vue';
import { mapState } from 'vuex';

export default {
  name: 'ToDo',
  components: {
    TaskProgress, CreateTask, TaskList
  },
  computed: mapState({
    tasks: state => state.tasks
  }),
  mounted() {
  },

  methods : {
    countSpecificTask(task) {
      return this.tasks.reduce((previousValue, currentObject) => {
          return previousValue + (currentObject.status === task); 
      }, 0);
    },

    handleAddTask(task) {
      store.dispatch({ type: type.Add, data: task })
    }
  }
}
</script>
