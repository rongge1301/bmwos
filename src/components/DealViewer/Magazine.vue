<template>
	<div id="Media">
		<div id="select_div">
			<transition name="fade">
				<div class="select_box" v-if="select_show">
					<div class="select_title">
						Magazine
					</div>
					<!-- 下拉选项  JJ-->
					<div class="set_main">
<!-- 
						<div class="set_main_box">
							<p>Grade</p>
							<el-select v-model="selecteds.grade" filterable clearable v-on:change="changeList()" placeholder="Please select" id="select1">
							    <el-option
							      v-for="item in Options_List.grade"
							      :key="item.label"
							      :label="item.label"
							      :value="item.label">
							    </el-option>
							</el-select>
						</div> -->
						<div class="set_main_box">
							<p>Year</p>
							<el-select v-model="selecteds.year" filterable clearable v-on:change="changeList()" placeholder="Please select" id="select2">
							    <el-option
							      v-for="item in Options_List.year"
							      :key="item.label"
							      :label="item.label"
							      :value="item.label">
							    </el-option>
							</el-select>
						</div><div class="set_main_box">
							<p>Publisher Type</p>
							<el-select v-model="selecteds.publisherType" filterable clearable v-on:change="changeList()" placeholder="Please select" id="select5">
							    <el-option
							      v-for="item in Options_List.publisherType"
							      :key="item.label"
							      :label="item.label"
							      :value="item.label">
							    </el-option>
							</el-select>
						</div>
						<div class="set_main_box">
							<p>Publisher(EN)</p>
							<el-select v-model="selecteds.publisherEn" filterable clearable v-on:change="changeList()" placeholder="Please select" id="select6">
							    <el-option
							      v-for="item in Options_List.publisherEn"
							      :key="item.label"
							      :label="item.label"
							      :value="item.label">
							    </el-option>
							</el-select>
						</div>
						<div class="set_main_box">
							<p>Position</p>
							<el-select v-model="selecteds.section" filterable clearable v-on:change="changeList()" placeholder="Please select" id="select6">
							    <el-option
							      v-for="item in Options_List.section"
							      :key="item.label"
							      :label="item.label"
							      :value="item.label">
							    </el-option>
							</el-select>
						</div>
						<div class="set_main_box">
							<p>Deal Date</p>
							<el-select v-model="selecteds.dealDate" filterable clearable v-on:change="changeList()" placeholder="Please select" id="select7">
							    <el-option
							      v-for="item in Options_List.dealDate"
							      :key="item.label"
							      :label="item.label"
							      :value="item.label">
							    </el-option>
							</el-select>
						</div>
					</div>
					<div class="set-footer">
						<p id="Check" v-on:click="Confirm()">Check</p>
						<!-- <p id="Approve"><i class="fa fa-trash"></i>Approve</p> -->
					</div>
				</div>
			</transition>
			<div v-if="select_hide" class="select_button" @mouseenter="showSelect()">
				>
			</div>
		</div>
		<div id="table_div">
			<transition name="slide-fade">
				<div id="test_box" v-if="list_show">
					<div v-if="detail_show" class="detail_box">
						<div class="detail_box_box">
							<a @click="showDetail()">
							<!-- 图片 -->
							<img src="@/assets/img/Magazine.png" alt="" height="100%"> 
							</a>
							<p>
								Remark: New media include special content co-op.
							</p>
						</div>
						
					</div>
					 <div v-if="detail_close" class="detail_box">
					 	<el-tabs type="card">
							  <el-tab-pane>
								  <span slot="label">Checking List</span>
								  <detail-List :selected="'Checking'" :category="'Magazine'" @check="checkDetail"></detail-List>
							  </el-tab-pane>
							  <el-tab-pane>
			                      <span slot="label">Rejected List</span>
			                      <detail-List :selected="'Rejected'" :category="'Magazine'" @check="checkDetail"></detail-List>
							  </el-tab-pane>
							   <el-tab-pane>
			                      <span slot="label">Approved List</span>
			                      <detail-List :selected="'Approved'" :category="'Magazine'" @check="checkDetail"></detail-List>
							  </el-tab-pane>
						
						</el-tabs>
						<a  @click="closeDetail()">
	                       Back > 
	                   	</a>
					 </div>
				</div>
			</transition>
			<transition name="slide-fade">
				<div id="table_box" v-if="show">
					<div class="table_box_tags">
						<el-tag
						  v-for="tag in tags"
						  :key="tag.name"
						  closable
						  @close="closeTags()"
						  :type="tag.type">
						  {{tag.name}}
						</el-tag>
					</div>
					<div class="table_box_item1">
						<div class="table_box_item1_item">
							<!-- <p>Media List: <span>{{item_box.media_list}}</span></p> -->
							<p>Media: <span>{{item_box.media_attribute}}</span></p>
							<p>Deal Type: <span>{{item_box.deal_type}}</span></p>
							<p>Effected on: <span>{{item_box.effected_on}}</span></p>
							<p>Expired on: <span>{{item_box.expired_on}}</span></p>
							<p>Principal: <span>{{item_box.principal}}</span></p>
						</div>
						<div class="table_box_item1_item" style="margin-left:30px;">
							
							<p>Net Cost-Unit Price (RMB): <span>{{item_box.commitment |formatNull}}</span></p>
							<p>Discount Off: <span>{{item_box.discount_off | formatPercent}}</span></p>
							<!-- <p>Rate card Inflation(vs YA): <span>{{item_box.ratecard_inflation_vsya | formatPercent}}</span></p> -->
							<!-- <p>Unit Price Inflation(vs YA): <span>{{item_box.unit_price_inflation_vsya | formatPercent}}</span></p> -->
							<p>Status: <span>{{item_box.status}}</span></p>
						</div>
						<!-- <div class="table_box_item1_item" style="margin-left:30px;">
							<p>Forecast Scenario 1: {{item_box.scenario_1 | formatNumber}} (<span>{{item_box.scenarioPercent1 | formatPercent}}</span>)</p>
							<p>Forecast Scenario 2: {{item_box.scenario_2 | formatNumber}} (<span>{{item_box.scenarioPercent2 | formatPercent}}</span>)</p>
							<p>Forecast Scenario 3: {{item_box.scenario_3 | formatNumber}} (<span>{{item_box.scenarioPercent3 | formatPercent}}</span>)</p>
							<p>Forecast Scenario 4: {{item_box.scenario_4 | formatNumber}} (<span>{{item_box.scenarioPercent4 | formatPercent}}</span>)</p>
						</div> -->
					</div>
					<div class="table_box_item2">
						<div class="table_box_item2_item_box">
							<div>
								<p>Deal Comment:</p>
								<div class="table_box_item2_item_box_detail">
									
									<!-- <p>{{item_box.available_fixed_position | formatPercent}} available fixed position fee</p> -->
									<p>{{item_box.deal_comment}}</p>
								</div>
							</div>
							<div style="margin-left:40px;">
								<p>Compensation:</p>
								<div class="table_box_item2_item_box_detail">
									<p>{{item_box.compensation}}</p>
								</div>
							</div>
						</div>
						<div class="table_box_item2_item_box">
							<div>
								<p>Pay Comment:</p>
								<div class="table_box_item2_item_box_detail">
									<p>{{item_box.pay_comment}}</p>
								</div>
							</div>
							<div style="margin-left:40px;">
								<p>Bonus:</p>
								<div class="table_box_item2_item_box_detail">
									<p>
										{{item_box.bonus}}
									</p>
								</div>
							</div>
						</div>
						<div class="table_box_item2_item_box">
							<div>
								<p>Remark:</p>
								<div class="table_box_item2_item_box_detail" style="width:99%;">
									<p>{{item_box.remark}}</p>
									
								</div>
							</div>
						</div>
						<div class="table_box_item2_a_box">
							<span class="glyphicon glyphicon-play"></span><a href="javascript:;;"> Approve</a>
							<span class="glyphicon glyphicon-play"></span><a href="javascript:;;"> Reject</a>
							<span class="glyphicon glyphicon-play"></span><a href="javascript:;;"> Contract Full Edition</a>
						</div>
					</div>
					<div class="table_box_highlight">
						<p>Highlights: </p>
						<p>1/ Inflation(vs YA) remarked as “NA“ means this is BMW Tailor-made package which is specially negotiate for BMW in terms of current year media inventory;</p>
						<p>2/ YOY comparable media refers to overlap media utilized in corresponding year only;</p>
						<p>3/ Production costs are excluded from above costs structure.</p>
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
import detailList from './detailList.vue'

export default {
  name: 'OOH',
  data () {
	    return {
	    	list_show:true,
	    	detail_show:true,
	    	detail_close:false,
	    	show: false,
	    	select_show:true,
	    	select_hide:false,
		    // 下拉选项修改2 JJ
	    	Options_List:{
	    		grade:[{
	    			label: ''
	    		}],
	    		year: [{
		          label: ''
		        }],
		        publisherType: [{
		          label: ''
		        }],
		        publisherEn: [{
		          label: ''
		        }],
		        section:[{
		        	label:''
		        }],
		        dealDate: [{
		          label: ''
		        }]
	    	},
	    	// 下拉选项修改3 JJ
	     	selecteds:{
	     		grade:"Central",
	     		year:null,
	     		publisherType:null,
	     		publisherEn:null,
	     		section:null,
	     		dealDate:null,
	     		yhToken:sessionStorage.getItem("token")
	     	},
	     	tags:[],
	     	// detail修改 JJ
	     	item_box:{
		        "status": "",
		        "principal": "",
		        "media_attribute": "",
		        "media_list": "",
		        "effected_on": "",
		        "expired_on": "",
		        "deal_type": "",
		        "commitment": "",
		        "ratecard_inflation_vsya":"",
		        "unit_price_inflation_vsya": "",
		        "scenario_1": "",
		        "scenario_2": "",
		        "scenario_3": "",
		        "scenario_4": "",
		        "scenarioPercent1": "",
		        "scenarioPercent2": "",
		        "scenarioPercent3": "",
		        "scenarioPercent4": "",
		        "discount_off": "",
		        "available_fixed_position":"",
		        "deal_comment": "",
		        "compensation": "",
		        "pay_comment": "",
		        "bonus": "",
		        "remark":"",
		        
	    	},
	    	"Price_Unit":"RMB"
	    }
	  },
  components: {
  		detailList
	},
  filters: {
        formatPercent:function(value){
        	if(value == null ){
        		return "--"
        	}else{
        		return parseInt(value*100) + '%'
        	}
        },
        formatNumber:function(value){
        	if(value == null ){
        		return "--"
        	}else{
        		var re = /(?=(?!\b)(\d{3})+$)/g; 
  				return value.toString().replace(re, ','); 
        	}
        },
        formatNull:function(value){
        	if(value == null){
        		return "--"
        	}else{
        		return value
        	}
        }
  },
  mounted:function(){

      $("#Deal").css('background','#262626')
      $("#Deal").siblings().css('background','#4d4d4d')

  	 this.$nextTick(function() {
  	 	this.onloadList()
  	 	
  	 	
    })
  },
  methods:{
  	onloadList(){
  		this.$http({
  			method:'post',
            url:'http://114.55.92.124:9090/bmwos/deal/mgz/get_option.do',
            data:this.selecteds
  		}).then(response => {
  			this.Options_List = response.data.data
  		})

  	},
  	Confirm(){
  		// JJ
  		this.tags = [{
  			name: this.selecteds.grade +' > '+ this.selecteds.year +' > '+ this.selecteds.publisherType +' > '+ this.selecteds.publisherEn +' > '+ this.selecteds.section +' > '+ this.selecteds.dealDate, type: ''
  		}];
  		this.show =false;
  		this.$http({
  			method:'post',
            url:'http://114.55.92.124:9090/bmwos/deal/mgz/get_detail.do',
            data:this.selecteds
  		}).then(response => {
  			if(response.data.status == 0){
  				this.select_show = false;
  				$('#select_div').css('width','40px');
  				this.select_hide = true;
  				this.item_box =response.data.data ;
  				this.list_show = false;
  				this.detail_show = false;
  				this.show = true;
  			}else{
  				alert("The choice is wrong, please rechoose!")
  			}
  			
  		})
  		
  	},
  	changeList(){
  		this.onloadList()
  	},
  	showSelect(){
      	this.select_show = true;
  		$('#select_div').css('width','200px')
  		this.select_hide = false;
  	},
  	hideSelect(){
      	this.select_show = false;
  		$('#select_div').css('width','40px')
  		this.select_hide = true;
  	},
  	closeTags(){
      	this.select_show = true;
  		$('#select_div').css('width','200px')
  		this.select_hide = false;
  		this.tags = [];
  		this.list_show = true;
  		this.detail_show = true;
  		this.show =false;
  		this.selecteds={
	     		grade:"Central",
	     		year:null,
	     		publisherType:null,
	     		publisherEn:null,
	     		section:null,
	     		dealDate:null
	     	}

  	},
  	showDetail(){
  		this.detail_show = false;
  		this.detail_close = true;
  		this.select_show = false;
		$('#select_div').css('width','40px');
		this.select_hide = true;
  	},
  	closeDetail(){
  		this.detail_show = true;
  		this.detail_close = false;
  		this.select_show = true;
  		$('#select_div').css('width','200px')
  		this.select_hide = false;
  	},
  	checkDetail(data){
  		this.selecteds = data;
  		this.selecteds.yhToken=sessionStorage.getItem("token");
  		this.list_show = false;
  		this.detail_show = false;
  		this.detail_close = false;
  		
  		this.Confirm()

  	}
  }
}	
</script>

<style>
@import '../../assets/css/media.css';

</style>


