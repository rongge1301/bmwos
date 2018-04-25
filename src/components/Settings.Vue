<template>
	<div id="Settings">
		<img src="@/assets/img/Setting.jpg" alt="" width="90%">
	</div>
</template>

<script>


export default {
	name:'Settings',
	data(){
		return {
			
		}
	},
	mounted:function(){
      	$("#Setting").css('background','#262626')
      	$("#Setting").siblings().css('background','#4d4d4d')
	},
	methods:{

	}
}

</script>

<style>
@import '../assets/css/market.css';

#Settings{
	width: 100%;
	height: 100%;
	text-align: center;
	padding-top: 30px;
	background:url(../assets/img/DT.jpg);
	min-height: 869px;
}
</style>