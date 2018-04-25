<template>
	<div id="competitiveSpend_box" :selected="selected">
		<div class="competitiveSpend_box_header">
			<div class="competitiveSpend_box_header_box">
				<p>
					Client: <span class="blueSpan">BMW</span> <span style="	margin: 0px 10px;">|</span> Country: <span class="blueSpan">China</span> <span style="	margin: 0px 10px;">|</span> Currency: <span class="blueSpan">RMB</span><span style="margin: 0px 10px;">|</span>
					Brand: <span class="blueSpan">{{brand}}</span>
				</p>
				<p>
					Dealers included? (Yes / No)：<span class="blueSpan">{{tableData.dealer}}</span>
					<span style="	margin: 0px 10px;">|</span>
					Type of Spend (Gross / Est.Net): <span class="blueSpan">Gross</span>
				</p>
			</div>
		</div>
		<div class="competitiveSpend_box_table_box">
			<div class="competitiveSpend_box_table">
				<el-table
				    :data="tableData.table"
				    :height="tableHeight"
				    border
				    style="width: 100%">
				    <el-table-column v-for="(item,index) in tableData.header" :key='index' :prop="item.name" :label="item.name"></el-table-column>
				    
				  </el-table>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	props:['selected'],
	name:"competitiveSpend",
	data(){
		return {
			selectedData:this.selected,
			brand:this.selected.valueBrand.join('/'),
			tableData:{
				header:[{"name":""}],
				dealer:"",
				table: [],
			},
			tableHeight:this.selected.tableHeight

		}
	},
	mounted(){
		$("#Audit").css('background','#262626')
		this.$nextTick(function() {
			
			this.tableHeight =$(".competitiveSpend_box_table").height()
 			
		  })
			// const that = this;
			// window.onresize = function temp() {
		 //        that.tableHeight = $(".competitiveSpend_box_table").height();
		 //    };
	},
	methods:{
		competitiveLoad(){
			let start_date = this.selectedData.valueYear + this.selectedData.monthStart
			let end_date = this.selectedData.valueYear + this.selectedData.monthEnd
			this.$http({
	  			method:'post',
	            url:'http://114.55.92.124:9090/bmwos/monspending/get_media_spend.do',
	            data:{
				  "start_date":start_date,
				  "end_date":end_date,
				  "brand_group":this.selectedData.valueBrand
				}
	  		}).then(response => {
	  			if(response.data.status == 0){
	  				this.tableData = response.data.data

	  			}
	  			
	  		})
			
		},
		setHeight(){
			this.tableHeight=this.selectedData.tableHeight -15
		}

	},
	watch:{
		'selectedData.valueBrand':'competitiveLoad',
		'selectedData.monthStart':'competitiveLoad',
		'selectedData.monthEnd':'competitiveLoad',
		'selectedData.valueYear':'competitiveLoad',
		'selectedData.tableHeight':'setHeight'
	}
}	
</script>

<style>
#competitiveSpend_box{
	height: 100%;
	width: 100%;
	display: flex;
	display: -webkit-flex; 
	flex-direction:column;
	padding:10px 20px;
	text-align: left;
}

.competitiveSpend_box_header{
	height: 80px;
	width: 100%;
	
}

.competitiveSpend_box_header>p{
	color: white;


}

.competitiveSpend_box_header_box{
	width: 100%;
	height: 80px;
	border-top: 5px solid #6ADBD9;
	border-bottom: 2px solid white;
	padding: 10px 5px;
}


.competitiveSpend_box_header_box>p{
	color: white;
	margin-bottom: 5px;
	margin-top: 5px;
}

.blueSpan{
	color: #6ADBD9;
	margin-left: 5px;
	font-weight: bold;
}

.competitiveSpend_box_table_box{
	width: 100%;
	flex: 1;
	display: flex;
	display: -webkit-flex; 
	flex-direction:column;
	margin-top: 20px;
}

.competitiveSpend_box_table_header{
	width: 100%;
	height: 40px;
	color: white;
	font-weight: bold;
}

.competitiveSpend_box_table_header>P{
	width: 400px;
	border-bottom:5px solid #47A1E6;
	padding-bottom: 5px;
}

.competitiveSpend_box_table{
	flex: 1;
	width: 100%;
}

.competitiveSpend_box_table .el-table thead{
	font-weight: 100 !important;
	font-size: 12px;
	color: white;

}

.competitiveSpend_box_table .el-table th, .el-table tr{
	background: rgba(121,121,121,1) !important;
}


.competitiveSpend_box_table .el-table__empty-block{
	background: transparent !important;
}

.competitiveSpend_box_table .el-table__body-wrapper{
	background: rgba(121,121,121,1) !important;
}
.competitiveSpend_box_table .el-table__row{
	color: white;
}

.competitiveSpend_box_table .el-table--enable-row-hover .el-table__body tr:hover>td{
	background: transparent !important;

}

.competitiveSpend_box_table .el-table__empty-text{
	color: white!important;
}

.el-table td{
	padding:3px 0px !important;
}

.el-table th{
	padding:10px 0px !important;
}
</style>