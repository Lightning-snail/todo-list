<template>
	<view class="container">
		<!-- 任务列表区域 -->
		<uni-card v-for="(item, index) in taskList" :key="item.id" is-shadow="true" v-show="!item.isComplete">
			<uni-swipe-action>
				<uni-swipe-action-item  :right-options="options" @click="(e)=>taskClick(item,e,index)">
						<text>{{ item.content }}</text>
				</uni-swipe-action-item>
			</uni-swipe-action>
		</uni-card>
		<!-- 新增任务列表 -->
		<view @click="addTask">
			<uni-fab ref="fab"  horizontal="right" vertical="bottom"/>
		</view>
		<view>
			<uni-popup ref="inputDialog" type="dialog">
				<uni-popup-dialog ref="inputClose"  mode="input" title="输入内容" :value="value"
					placeholder="请输入内容" @confirm="dialogInputConfirm"></uni-popup-dialog>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	import store from '@/store/index.js';
	export default {
		onShow(){
			uni.setTabBarItem({
				index: 0,
				text: '首页'
			})
		},
		computed: {
			taskList(){
				return store.state.taskList;
			}
		},
		data() {
			return {
				value: '',
				options:[
				        {
				            text: '已完成',
				            style: {
				                backgroundColor: '#18bc37'
				            }
				        },
						{
				            text: '删除',
				            style: {
				                backgroundColor: '#dd524d'
				            }
				        },
				      ]
			}
		},
		methods: {
			dialogInputConfirm(val){
				this.value = val;
				let obj = {
					id: new Date().getTime(),
					content: val,
					isComplete: false
				}
				store.commit('addTask', obj)
			},
			addTask(){
				this.value = '';
				this.$refs.inputDialog.open();
			},
			taskClick(item, e, i){
				if(e.index === 0){
					// 已完成 
					let obj = {
						task: item,
						flag: true
					}
					store.commit('changeStatus', obj)
				}else if(e.index === 1){
					// 删除
					store.commit('delTask', i)
				}
			}
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
