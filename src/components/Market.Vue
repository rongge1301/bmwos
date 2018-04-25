<template>
	<div id="Market" v-bind:style="{'height': clientHeight}"> 
		<div class="Market_main">
			<div class="market_select_box">
				<span>Brand:</span>
				<el-select v-model="selectValue.valueBrand"  collapse-tags multiple placeholder="请选择" id="brand">
				    <el-option
				      v-for="item in brandList"
				      :key="item.label"
				      :label="item.label"
				      :value="item.label">
				    </el-option>
				  </el-select>
				  <span>Year:</span>
				<el-select v-model="selectValue.valueYear"  collapse-tags  placeholder="请选择" id="year">
				    <el-option
				      v-for="item in yearList"
				      :key="item.label"
				      :label="item.label"
				      :value="item.label">
				    </el-option>
				  </el-select>
				 <span></span>
				<el-select v-model="selectValue.monthStart"  collapse-tags  placeholder="请选择" id="monthStart">
				    <el-option
				      v-for="item in monthList"
				      :key="item.label"
				      :label="item.label"
				      :value="item.label">
				    </el-option>
				  </el-select>
				  <span>to</span>
				<el-select v-model="selectValue.monthEnd"  collapse-tags  placeholder="请选择" id="monthEnd">
				    <el-option
				      v-for="item in monthList"
				      :key="item.label"
				      :label="item.label"
				      :value="item.label">
				    </el-option>
				  </el-select>
			</div>
			<el-tabs type="card">
				  <el-tab-pane>
					  <span slot="label">Competitive Spend</span>
					  <competitive-Spend :selected="selectValue"></competitive-Spend>
				  </el-tab-pane>
				  <el-tab-pane>
                      <span slot="label">Market Spend</span>
				  	  <market-Spend :selected="selectValue"></market-Spend>
				  </el-tab-pane>
				  <el-tab-pane >
						<span slot="label">	Media Cost Inflation</span>
				  		<media-Cost :selected="selectValue"></media-Cost>
				</el-tab-pane >
			
			</el-tabs>
		</div>
		<div class="Market_footer">
			 <span class="glyphicon glyphicon-play"></span> Export to Excel
		</div>
	</div>
</template>

<script>
import competitiveSpend from './competitiveSpend.vue'
import marketSpend from './marketSpend.vue'
import mediaCost from './mediaCost.vue'


export default {
	name:'Market',
	data(){
		return {
			clientHeight:"",
			brandList:[{
				label:'BMW'
			}],
			monthList:[
			{
				label:'01'
			},{
				label:'02'
			},
			{
				label:'03'
			},{
				label:'04'
			},
			{
				label:'05'
			},{
				label:'06'
			},
			{
				label:'07'
			},{
				label:'08'
			},
			{
				label:'09'
			},{
				label:'10'
			},
			{
				label:'11'
			},{
				label:'12'
			}
			],
			yearList:[
			{
				label:'2018'
			}],
			selectValue:{
				valueBrand: ['BMW','Audi','Mercedes-Benz'],
	        	monthStart:"",
	        	monthEnd:"",
	        	valueYear:"",
	        	tableHeight:10
			},
			tableHeight:20
		}
	},
	components: {
		competitiveSpend,
		marketSpend,
		mediaCost
	},
	mounted:function(){
      		$("#Audit").css('background','#262626')
      		$("#Audit").siblings().css('background','#4d4d4d')
		 	this.clientHeight = document.documentElement.clientHeight - 80 +'px';  

		    const that = this;
		    window.onresize = function temp() {
		        that.clientHeight = document.documentElement.clientHeight - 80 +'px';
		    	that.selectValue.tableHeight = $(".competitiveSpend_box_table_box").height();
		    	
		    };

		    $("#Audit_ul>li:first").addClass('Audit_ul_actived');

		    this.$nextTick(function() {
		    	this.selectValue.tableHeight = $(".competitiveSpend_box_table_box").height();
	  	 		this.marketOnload()	   
	    	})
	},
	methods:{
		marketOnload(){
			this.$http({
	  			method:'get',
	            url:'http://114.55.92.124:9090/bmwos/monspending/on_load.do'
	  		}).then(response => {
	  			if(response.data.status == 0){
	  				this.yearList = response.data.data.year
	  				this.brandList = response.data.data.brand
	  			}else{
	  				alert("Error!")
	  			}
	  			
	  		})
		}
	}
}

</script>

<style>
@import '../assets/css/market.css';
</style>