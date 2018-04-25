<template>
	<div  :selected="selected" id="marketSpend_box">
		<div class="marketSpend_box_header">
			<div class="marketSpend_box_header_box">
				<p>
					Client: <span class="blueSpan">BMW</span> <span style="	margin: 0px 10px;">|</span> Country: <span class="blueSpan">China</span> <span style="	margin: 0px 10px;">|</span> Currency: <span class="blueSpan">RMB</span>
				</p>
				<p>
					Dealers included? (Yes / No)：<span class="blueSpan">{{tableData.dealer}}</span>
					<span style="	margin: 0px 10px;">|</span>
					Type of Spend (Gross / Est.Net): <span class="blueSpan">Gross</span>
				</p>
			</div>
		</div>
		<div class="marketSpend_box_table_box">
			<el-tabs type="card">
				  <el-tab-pane>
					  <span slot="label">Competitive Spend</span>
					  
				  </el-tab-pane>
				  <el-tab-pane>
                      <span slot="label">Market Spend</span>
				  	  
				  </el-tab-pane>
				  <el-tab-pane >
						<span slot="label">	Media Cost Inflation</span>
				  		
				</el-tab-pane >
			</el-tabs>
		</div>
	</div>
</template>

<script>
export default {
	props:['selected'],
	name:"marketSpend",
	data(){
		return {
			selectedData:this.selected,
			tableData:{
				header:[{"name":""}],
				dealer:"",
				table: [],
			},
			tableHeight:this.selected.tableHeight
		}
	},
	mounted(){
		$("#Audit").css('background','#262626');
		this.$nextTick(function() {
			this.tableHeight =$(".marketSpend_box_table").height()
		  })
	},
	methods:{
		marketSpendLoad(){
			
		},
		setHeight(){
			this.tableHeight=this.selectedData.tableHeight -15
		}

	},
	watch:{
		'selectedData.valueBrand':'marketSpendLoad',
		'selectedData.monthStart':'marketSpendLoad',
		'selectedData.monthEnd':'marketSpendLoad',
		'selectedData.valueYear':'marketSpendLoad',
		'selectedData.tableHeight':'setHeight'

	}

}	
</script>

<style>
#marketSpend_box{
	height: 100%;
	width: 100%;
	display: flex;
	display: -webkit-flex; 
	flex-direction:column;
	padding:10px 20px;
	text-align: left;
}

.marketSpend_box_header{
	height: 80px;
	width: 100%;

}

.marketSpend_box_header>p{
	color: white;


}

.marketSpend_box_header_box{
	width: 100%;
	height: 80px;
	border-top: 5px solid #6ADBD9;
	border-bottom: 2px solid white;
	padding: 10px 5px;
}


.marketSpend_box_header_box>p{
	color: white;
	margin-bottom: 5px;
	margin-top: 5px;
}

.blueSpan{
	color: #6ADBD9;
	margin-left: 5px;
	font-weight: bold;
}

.marketSpend_box_table_box{
	width: 100%;
	flex: 1;
	display: flex;
	display: -webkit-flex; 
	flex-direction:column;
	margin-top: 20px;
}

.marketSpend_box_table_header{
	width: 100%;
	height: 40px;
	color: white;
	font-weight: bold;
}

.marketSpend_box_table_header>P{
	width: 400px;
	border-bottom:5px solid #47A1E6;
	padding-bottom: 5px;
}

.marketSpend_box_table{
	flex: 1;
	width: 100%;
}

.marketSpend_box_table .el-table thead{
	font-weight: 100 !important;
	font-size: 12px;
	color: white;

}

.marketSpend_box_table .el-table th, .el-table tr{
	background: rgba(121,121,121,0.9) !important;
}


.marketSpend_box_table .el-table__empty-block{
	background: transparent !important;
}

.marketSpend_box_table .el-table__body-wrapper{
	background: rgba(121,121,121,0.9) !important;
}
.marketSpend_box_table .el-table__row{
	color: white;
}

.marketSpend_box_table .el-table--enable-row-hover .el-table__body tr:hover>td{
	background: transparent !important;

}

.marketSpend_box_table .el-table__empty-text{
	color: white!important;
}

.marketSpend_box_table_box .el-tabs__item{
	background: url(../assets/img/B2.png) top right!important;
	font-size: 13px;
	width: 200px;
	height: 35px;
	line-height: 35px;
	color: black;
}

.marketSpend_box_table_box .el-tabs__item.is-active{
	background: url(../assets/img/B1.png) top right!important;
	font-size: 13px;
	width: 200px;
	height: 35px;
	line-height: 35px;
	color: black;
}
</style>