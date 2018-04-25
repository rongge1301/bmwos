<template>
	<div class="box" :selected="selected" :category="category">
		<el-table
		    :data="tableData3"
		    :height="650"
		    border
    		style="width: 100%">
		    <el-table-column v-for="(item,index) in header" :key='index' :prop="item.name" :label="item.value"></el-table-column>
			<el-table-column label="Check Detail" >
				<template slot-scope="scope">
                	<a @click="checkClick(scope.row)" class="Check_a">></a>
                </template>
		    </el-table-column>	    
		</el-table>
		<!-- <div style="height:100px;width:100%"></div> -->
	</div>
</template>

<script>
export default {
	props:['selected','category'],
	name:"detailList",
	data(){
		return {
			select:this.selected,
	     	yhToken:sessionStorage.getItem("token"),
			header:[{
				name:"",
				value:""
			}],
			tableData3: [{
		          grade: '',
		          year: '',
		          category: '',
		          publisherEn: '',
		          format: '',
		          section: "",
		          device:"",
		          dealDate:""
		        }],
		 
		}
	},
	mounted(){
		    var url1 ='';
			switch(this.category)
			{
			case 'Digital':
				url1 = 'http://114.55.92.124:9090/bmwos/deal/digital/get_by_status.do'	  
			    break;
			case 'OOH':
			    url1 = 'http://114.55.92.124:9090/bmwos/deal/ooh/get_by_status.do'
			    break;
			case 'Magazine':
			    url1 = 'http://114.55.92.124:9090/bmwos/deal/mgz/get_by_status.do'
			    break;
			case 'Newspaper':
			    url1 = 'http://114.55.92.124:9090/bmwos/deal/nsp/get_by_status.do'
			    break;
			case 'TV':
			    url1 = 'http://114.55.92.124:9090/bmwos/deal/tv/get_by_status.do'
			    break;
			case 'Radio':
			    url1 = 'http://114.55.92.124:9090/bmwos/deal/rdo/get_by_status.do'
			    break;
			default:
			    break;
			}

			this.$http({
	  			method:'post',
	            url:url1,
	            data:{
	            	"status":this.select,
	            	"yhToken":this.yhToken
	            }
	  		}).then(response => {
	  			this.tableData3 = response.data.data.table
	  			this.header = response.data.data.header
	  		})

	  		

	},
	methods:{

		checkClick(data){
			this.$emit('check',data)
		}
	},
	watch:{
		
	}
}	
</script>

<style>
.box{
	width: 100%;
	height: 100%;
	/*padding: 20px;
*/	overflow: auto;
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


.Check_a{
	display: block;
	width: 100%;
	text-align: center;
	color: white;
	cursor: pointer;
	font-size: 18px;
}
</style>