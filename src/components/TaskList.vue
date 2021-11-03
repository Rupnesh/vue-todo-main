<template>
	<div>
		<table class="table table-bordered mt-3">
			<thead>
				<tr>
					<TableHeader v-bind:label="'ID'" v-bind:width="100"></TableHeader>
					<TableHeader v-bind:label="'Task'"></TableHeader>
					<TableHeader v-bind:label="'Status'" v-bind:width="180"></TableHeader>
					<TableHeader v-bind:label="'Action'" v-bind:width="180"></TableHeader>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(task, index) in tasks" :key="index">
					<TableData v-bind:rowIndex="index" v-bind:column="'Index'" v-bind:taskItem="task"></TableData>
					<TableData v-bind:rowIndex="index" v-bind:column="'Edit'" v-bind:taskItem="task" @updateTask="handleUpdateTask"></TableData>
					<TableData v-bind:rowIndex="index" v-bind:column="'Status'" v-bind:taskItem="task" @updateStatus="handleUpdateStatus"></TableData>
					<TableData v-bind:rowIndex="index" v-bind:column="'Actions'" v-bind:taskItem="task" @removeTask="handleRemoveTask"></TableData>

				</tr>
			</tbody>
		</table>

	</div>
</template>

<script>
import TableHeader from './TableHeader.vue'
import TableData from './TableData.vue'
import store from '../store';
import * as type from '../storeTypes';
import { mapState } from 'vuex';
export default {
	name: 'TaskList',
	components: {TableHeader,TableData},
	mounted() {
	},
	computed: mapState({
    tasks: state => state.tasks
  }),
	methods: {
		handleRemoveTask(index) {
			store.dispatch({ type: type.Remove, index })
		},
		handleUpdateTask(index, task) {
			const data = {"index": index, "task": task}
			store.dispatch({ type: type.Update, data })
		},
		handleUpdateStatus(index) {
			store.dispatch({ type: type.UpdateStatus, index })
			this.tasks.map((item) => item.edit = false)
    },
	}
}
</script>

