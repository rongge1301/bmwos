<template>
	<div id="ASReport">
		<div class="ASReport_div">
			<el-tabs type="card" v-model="activeName">
			  	<el-tab-pane name="Setting">
				   	<span slot="label">Query Setting</span>
				   	<div class="Setting_box">
				   		<div class="Setting_box_left">
						  	<el-menu 
						  		router
						      	class="el-menu-vertical-demo"
						      	background-color="#4D4D4D"
						      	text-color="#fff"
						      	active-text-color="black">
						      	<el-submenu index="1">
							        <template slot="title">
							         
							          <span>Offline Reports</span>
							        </template>
						        	<el-menu-item index="/ASReport/offline/marketReport"><span class="glyphicon glyphicon-folder-open"></span>Market Report</el-menu-item>
						          	<el-menu-item index="/ASReport/offline/budgetSummary"><span class="glyphicon glyphicon-folder-open"></span>Budget Summary</el-menu-item>
						          	<el-menu-item index="/ASReport/offline/TVSummary"><span class="glyphicon glyphicon-folder-open"></span>TV Summary</el-menu-item>
						          	<el-menu-item index="/ASReport/offline/TVCost"><span class="glyphicon glyphicon-folder-open"></span>TV Cost Factors</el-menu-item>
						          	<el-menu-item index="/ASReport/offline/PrintSummary"><span class="glyphicon glyphicon-folder-open"></span>Print Summary</el-menu-item>
						          	<el-menu-item index="/ASReport/offline/OtherSummary"><span class="glyphicon glyphicon-folder-open"></span>Other Summary</el-menu-item>
						      	</el-submenu>
						      	<el-submenu index="2">
							        <template slot="title">
							       
							          <span>Online Reports</span>
							        </template>
						          	<el-menu-item index="/ASReport/online/marketReport"><span class="glyphicon glyphicon-folder-open"></span>Market Report</el-menu-item>
						          	<el-menu-item index="/ASReport/online/budgetSummary"><span class="glyphicon glyphicon-folder-open"></span>Budget Summary</el-menu-item>
						          	<el-menu-item index="/ASReport/online/TVSummary"><span class="glyphicon glyphicon-folder-open"></span>TV Summary</el-menu-item>
						          	<el-menu-item index="/ASReport/online/OnlineSummary"><span class="glyphicon glyphicon-folder-open"></span>Online Summary</el-menu-item>
						     	 </el-submenu>
						    </el-menu>
					    </div>
					    <div class="Setting_box_right">
					    	<router-view/>
					    </div>
					</div>
			  	</el-tab-pane>
			  	<el-tab-pane name="Task">
                  <span slot="label">Query Task</span>
				  <div class="table_div">
				  		<div class="table_div_title"></div>
				  		<el-table
						    :data="tableData3"
						    border
				    		style="width: 100%">
						    <el-table-column v-for="(item,index) in header" :key='index' :prop="item.name" :label="item.value"></el-table-column>
							<el-table-column  :render-header="renderHeader">
								<template slot-scope="scope">
				                	<a  class="Check_a" download="test" :href="'http://114.55.92.124:9090/bmwos/audit_star/download_report.do?userName='+userName+'&taskID='+scope.row.taskID+'&yhToken='+$store.state.token">{{scope.row.status | formatStatus}}</a>
				                </template>
						    </el-table-column>	    
						</el-table>
				  </div>
			  	</el-tab-pane>
				  
			</el-tabs>
		</div>
	</div>
</template>

<script>
import Bus from '@/bus/bus.js'

export default {
  	name: 'ASReport',
  	data () {
	    return {
	    	userName:"",
	    	yhToken:sessionStorage.getItem("token"),
	    	activeName:"Setting",
	    	header:[{
				name:"taskID",
				value:"Task No."
			},
			{
				name:"reportName",
				value:"Report Name"
			},
			{
				name:"size",
				value:"Size(KB)"
			},{
				name:"submitTime",
				value:"Task Submitted Time"
			},
			{
				name:"finishTime",
				value:"Task Finished Time"
			},{
				name:"status",
				value:"Status"
			}],
	    	tableData3: [{
		          taskID: '',
		          reportName: '',
		          size: '',
		          submitTime: '',
		          finishTime: '',
		          status: "",
		        }],
	    }
	},
  	filters: {
        
  	},
  	mounted:function(){

      	$("#Audit").css('background','#262626')
      	$("#Audit").siblings().css('background','#4d4d4d')
	  	Bus.$on('run',data=>{
	  	 	if(data == true){
	  	 		// alert(data)
		  	 	this.activeName ="Task";
		  	 	this.onloadReport();
	  	 	}
	  	})
	  	this.$nextTick(function() {
	  		let _this = this;
	  	
  	
			this.userName = $("#admin").html();
			this.onloadReport()
 			$("#Fresh").click(function(){
 				_this.onloadReport()
 			})
           
		})
  	},
  	filters: {
     formatStatus: function (val) {
        	return val == 'finished' ? 'Export' : '';
	    },
	},
  	methods:{
  	    onloadReport(){
  			// let name = this.getQueryString('name');
  			// this.userName = name;

  			this.userName = $("#admin").html();
  		 	this.$http({
	            method:'post',
	            url:'http://114.55.92.124:9090/bmwos/audit_star/select_report.do?yhToken='+this.yhToken,
            }).then(response => {
              	if(response.data.status == 0){
                   	console.log(response);
	  				this.tableData3 = response.data.data;
              	}
            })

        },
        getQueryString(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)",'i'); // 匹配目标参数
            var result = window.location.search.substr(1).match(reg); // 对querystring匹配目标参数
            if (result != null) {
              return decodeURIComponent(result[2]);
            } else {
              return null;
            }
        },
  		handleOpen(key, keyPath) {
           	console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
        	console.log(key, keyPath);
      	},
      	renderHeader(h) {
	         return ( <el-button id="Fresh">refresh</el-button> )
	    }
  	},


}	
</script>

<style>


#ASReport{
	width: 100%;
	height: auto;
	min-height: 100%;
	/*min-height:90%;*/
/*	min-height:-moz-calc(100% - 80px); 
	min-height:-webkit-calc(100% - 80px);
	min-height: calc(100% - 80px);*/
	text-align: left;
	padding-top: 30px;
	background:url(../assets/img/DT.jpg);
	
	/*overflow: hidden;*/
	position: relative;
	padding-bottom: 30px;
	
}

.ASReport_div{
	position: relative;
	width: 90%;
	left: 50%;
	margin-left: -45%;
/*	margin-top: 10px;*/
	min-height: 85%;
	height: auto;

	/*height:-moz-calc(100% - 200px); 
	height:-webkit-calc(100% - 200px);
	height: calc(100% - 200px);*/
}

.ASReport_div .el-tabs{
    height: 100%;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    display: -webkit-flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}


.ASReport_div .el-tabs{
  height: 100%;
  width: 100%;
  display: flex;
  display: -webkit-flex; 
  flex-direction:column;
}

.ASReport_div .el-tabs .el-tabs__content{
  width: 100%;
  flex: 1;
}

.ASReport_div .el-tabs .el-tabs__content .el-tab-pane{
  height: 100%;
  width: 100%;
}
.ASReport_div .el-tabs__item{
  background: rgba(121,121,121,0.4);
  border-bottom: 0px !important;
  border-color: transparent !important;
  color: white;
  text-align: left;
  font-size: 16px;
  width: 200px;
  height: 50px;
  line-height: 50px;
}

.ASReport_div .el-tabs--card>.el-tabs__header{
  border: 0px;
  margin-bottom: 0px;
  height: 50px;
}


.ASReport_div .el-tabs--card>.el-tabs__header .el-tabs__nav{
  border-radius: 0px;
  border: 0px;
}

.ASReport_div .el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
  background: rgba(121,121,121,0.7);
}

.ASReport_div .el-tab-pane{
/*  	background: #A6A6A6;*/
	min-height: 500px;
  
}

.ASReport_div .el-menu{
	border-color: #4D4D4D;
}
.ASReport_div .el-submenu .el-menu-item{
	background: #BFBFBF !important;
	border-bottom: 1px solid #fff;

}

.ASReport_div .el-submenu .el-menu-item span{
	margin-top: -6px;
	margin-left: -10px;
	margin-right: 5px;
}
.ASReport_div .el-submenu .el-menu-item:hover{
	background: #A6A6A6 !important;
	color: black !important;
}

.ASReport_div .el-menu-item.is-active{
	background: #A6A6A6 !important;
}
.Setting_box{
	width: 100%;
	display: flex;
  	display: -webkit-flex; 
  	height: auto;
  	  	background: #A6A6A6;
}
.Setting_box_left{
	width: 200px;
	height: auto;
	background: #4D4D4D;
	padding-bottom: 30px;
}
.Setting_box_right{
	flex: 1;
	height: 100%;
	min-height: 500px;
	padding-bottom: 30px;

}


.ASReport_div .table_div{
	background: rgba(121,121,121,0.4);
	min-height: 500px;
	height: auto;
	padding: 20px;
}


.table_div_title{
	width: 100%;
	height: 6px;
	background: #3ACBC8;
	margin-bottom: 20px;
}
.el-table thead{
	font-weight: 100 !important;
	font-size: 13px;
	color: white;

}

.el-table th{
	background: #F3F3F3 !important;

}

.el-table tr{
	background: rgba(121,121,121,1) !important;
}

.el-table__body-wrapper, .el-table__footer-wrapper, .el-table__header-wrapper{
font-size: 13px;
width: 101%;
}
.el-table__empty-block{
	background: transparent !important;
}

.el-table__body-wrapper{
	background: rgba(121,121,121,1) !important;
}
.competitiveSpend_box_table .el-table__row{
	color: white;
}

.el-table--enable-row-hover .el-table__body tr:hover>td{
	background: transparent !important;

}

.el-table__empty-text{
	color: white!important;
}

.el-table td{
	padding:3px 0px !important;
	text-align: center;
}

.el-table th{
	padding:10px 0px !important;
}

.box .el-table th .cell{
	color: #808080
}
.cell{
	color: white;
}

.ASReport_div .el-table th {
    background: transparent !important;
    text-align: center;
}

#Fresh{
	height:20px;
	line-height:1px;
	background:transparent;
	border:1px solid #fff;
	color:white;
}


.Check_a{
	display: block;
	width: 100%;
	text-align: center;
	color: #3ACBC8;
	cursor: pointer;
	font-size: 18px;
}
</style>


