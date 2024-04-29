<template>
	<view class="container">
		<!-- 任务列表区域 -->
		<uni-card v-for="(item, index) in taskList" :key="item.id" is-shadow="true" v-show="item.isComplete">
			<uni-swipe-action>
				<uni-swipe-action-item  :right-options="options" @click="(e)=>taskClick(item,e,index)">
						<text>{{ item.content }}</text>
				</uni-swipe-action-item>
			</uni-swipe-action>
		</uni-card>
	</view>
</template>

<script>
	import store from '@/store/index.js';
	export default {
		onShow(){
			uni.setTabBarItem({
				index: 1,
				text: '已完成'
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
				            text: '激活',
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
			taskClick(item, e, i){
				if(e.index === 0){
					// 已完成 
					let obj = {
						task: item,
						flag: false
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
