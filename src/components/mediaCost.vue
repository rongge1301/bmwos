<template>
	<div style="height:100%" :selected="selected">
		xxxxx
	</div>
</template>

<script>
export default {
		props:['selected'],
	name:"mediaCost",
	data(){
		return {
			selectedData:this.selected
		}
	},
	mounted(){
		$("#Audit").css('background','#262626')
		// this.$nextTick(function() {
  // 	 		this.competitiveOnload()	   
  //   	})
  		// console.log(this.selectedData)
	},
	methods:{

		mediaCostLoad(){
			// alert("sdsd")
		}
	},
	watch:{
		'selectedData.valueBrand':'mediaCostLoad',
		'selectedData.monthStart':'mediaCostLoad',
		'selectedData.monthEnd':'mediaCostLoad',
		'selectedData.valueYear':'mediaCostLoad',
	}
}	
</script>

<style>
	

</style>