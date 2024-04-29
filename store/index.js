// import Vue from 'vue';
import Vuex from 'vuex';

const store = new Vuex.Store({
	state: {
		taskList:[
					{
						id: new Date().getTime(),
						content: '今天下午6点去球场打球',
						isComplete: false
					}
				],
	},
	mutations: {
		// 添加任务
		addTask(state, task){
			state.taskList.push(task);
		},
		// 删除任务
		delTask(state, i){
			state.taskList.splice(i, 1);
		},
		// 更改状态
		changeStatus(state, obj){
			state.taskList.find(item=>item.id === obj.task.id).isComplete = obj.flag;
		}
	}
})

export default store