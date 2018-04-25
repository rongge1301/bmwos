<template>
	<div id="deal">
		<img src="@/assets/img/dealViewer.png" alt="" width="65%">

		<p>Remark: 1/ Unfulfilled Media (%) = Unfulfilled Media Quantity / Total Media Quantity. 2/ New media include special content co-op.</p>
	</div>
</template>

<script>
import Bus from '@/bus/bus.js'


export default {
  name: 'dealViewer',
  data () {
	    return {
	    	yhToken:sessionStorage.getItem("token"),
	    }
	  },
 
  filters: {
        
  },
  mounted:function(){

  	$("#Deal").css('background','#262626')
  	$("#Deal").siblings().css('background','#4d4d4d')
  	let _this= this;
  	this.$nextTick(function() {
  		// alert(_this.tokenWeb)
 	})
       
  	 
  },
  methods:{
  	// getCookie(name){
   //      name = name + "="
   //      var start = document.cookie.indexOf(name),
   //          value = null;
   //      if(start>-1){
   //          var end = document.cookie.indexOf(";",start);
   //          if(end == -1){
   //              end = document.cookie.length;
   //          }
   //          value = document.cookie.substring(start+name.length,end);
   //      }
   //      return value;
   //  }
  },
}	
</script>

<style>


#deal{
	width: 100%;
	height: 100%;
	text-align: left;
	padding-top: 30px;
	background:url(../assets/img/DT.jpg);
	min-height: 869px;
	overflow: hidden;

}

#deal img{
	margin:0 auto;
	display: block
}

#deal p{
	width: 65%;
	margin: 0 auto;
	font-size: 14px;
	color: white;
	display: block;
	padding-top: 5px;
}
</style>


