<template>
  <div id="app">
    <h3>To Do app</h3>
    <p>Available Task {{taskCount}}</p>
    <ToDo/>
  </div>
</template>

<script>
import ToDo from './components/ToDo.vue'
import { mapState } from 'vuex';
export default {
  name: 'App',
  components: {
    ToDo
  },
  computed: mapState({
    taskCount: state => state.tasks.length
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
