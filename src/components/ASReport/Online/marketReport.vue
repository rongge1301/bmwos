<template>
  		<div class="tree-box">
            <div class="tree-box-title">
                <img src="@/assets/img/folder.png" alt="" height="20px">Market Report
            </div>
            <div class="time_box">
                <span>Period:</span>
                <el-select v-model="selectedYear" placeholder="请选择" id="year">
                    <el-option
                      v-for="item in optionsYear"
                      :key="item.value"
                      :label="item.value"
                      :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="selectedStart" placeholder="请选择" id="start">
                    <el-option
                      v-for="item in optionsMonth"
                      :key="item.value"
                      :label="item.value"
                      :value="item.value">
                    </el-option>
                </el-select>
                —
                <el-select v-model="selectedEnd" placeholder="请选择" id="end">
                  <el-option
                    v-for="item in optionsMonth"
                    :key="item.value"
                    :label="item.value"
                    :value="item.value">
                  </el-option>
                </el-select>
            </div>
            <div class="zTreeDemoBackground left">
                <ul id="treeDemo" class="ztree"></ul>
            </div>
            <button id="run" @click="runReport"><span class="glyphicon glyphicon-play"></span>Run</button>
        </div>
</template>

<script>
import Bus from '@/bus/bus.js'


export default {
      name: 'marketReport',
      components:{

      },
      data:function(){
        return{
            zTree:"",
            setting:{
              check:{
                chkStyle :"checkbox",
                enable: true
              }
            },
            zNodes:[
              { name:"Competitive Spend", open:false, id:1,
                  children: [
                      { name:"Brand", id:"brand",
                          children: [
                              { name:"BMW"},
                              { name:"Audi"},
                              { name:"MB"},
                          ]},
                      { name:"Dealers included", id:"brandDealer",
                          children: [
                              { name:"Yes"},
                              { name:"No"},
                          ]}
                  ]},
              { name:"Market Spend",id:2,
                  children: [
                      { name:"Market", open:false,id:"market",
                          children: [
                              { name:"Total Market"},
                              { name:"Automotive Market"},
                              { name:"Car Market"},
                              { name:"Car Premium Market"}
                          ]},
                      { name:"Dealers included",id:"marketDealer",
                          children: [
                              { name:"Yes"},
                              { name:"No"}
                          ]}
                  ]},
              // { name:"Media Cost Inflation", isParent:true,id:3,}
            ],
            selectedData:{
              "report_id":201,
              "start_date":"",
              "end_date":"",
              "brand":[],
              "market":[],
              "dealer_include":"",
              yhToken:sessionStorage.getItem("token")
            },
            selectedYear:"",
            selectedStart:"",
            selectedEnd:"",
            optionsYear: [{
              value: '2017',      
            },{
              value: '2018',      
            }],
            optionsMonth: [{
              value: '01',
            },{
              value: '02',
            },{
              value: '03',
            },{
              value: '04',
            },{
              value: '05',
            },{
              value: '06',
            },{
              value: '07',
            },{
              value: '08',
            },{
              value: '09',
            },{
              value: '10',
            },{
              value: '11',
            },{
              value: '12',
            }],
            run:true,
        }
      },
      mounted(){
        this.zTree = $.fn.zTree.init($("#treeDemo"), this.setting, this.zNodes);
         this.$nextTick(function() {
            // this.selectedData.userName = $("#admin").html();
         })
      },
      methods:{
        freshArea:function(){
            $.fn.zTree.init($("#treeDemo"), this.setting, this.zNodes);
            // zTree.getNodesByParam("checked", true, null);
        },
        runReport(){
           var selectedList = this.zTree.getNodesByParam("checked", true, null);

           let i= 0;
           let j= 0;
           let report_id= "";
           let brand = [];
           let market= [];
           let dealer_include = "";
           $.each(selectedList,function(index,value){

                if(value.level == 0){
                    report_id = value.name
                    i++
                }

                if(value.parentTId == "treeDemo_2"){
                    brand.push(value.name)
                }

                if(value.parentTId == "treeDemo_10"){
                    market.push(value.name)
                }

                if(value.parentTId == "treeDemo_15"||value.parentTId == "treeDemo_6"){
                    j++
                }

                if(value.tId == "treeDemo_7" || value.tId == "treeDemo_16"){
                    dealer_include = "Yes";
                }else{
                    dealer_include = "No";
                }
                
                return i,report_id,brand,market,j,dealer_include;

           })
           
           if(i != 1 ){
              alert("Notice: Only single report be allowed to run, please reselect it, thanks.")
           }

           
           if(j == 0 ){
              switch (report_id)
              {
                case "Competitive Spend":
                  this.selectedData.report_id = 201;
                  break;
                case "Market Spend":
                  this.selectedData.report_id = 202;
                  break;
                case "Media Cost Inflation":
                  this.selectedData.report_id = 203;
                  break;
              }

              this.selectedData.start_date = this.selectedYear + this.selectedStart;
              this.selectedData.end_date = this.selectedYear + this.selectedEnd;
              this.selectedData.brand = brand;
              this.selectedData.market = market;
              this.selectedData.dealer_include = dealer_include;
              // this.selectedData.userName = this.getQueryString('name')

              this.$http({
                    method:'post',
                    url:'http://114.55.92.124:9090/bmwos/audit_star/create_report.do',
                    data:this.selectedData,
                    }).then(response => {
                      if(response.data.status == 0){
                            Bus.$emit('run',this.run);
                      }
                      
                    })
              
           }else if(j == 1){
              switch (report_id)
              {
                case "Competitive Spend":
                  this.selectedData.report_id = 201;
                  break;
                case "Market Spend":
                  this.selectedData.report_id = 202;
                  break;
                case "Media Cost Inflation":
                  this.selectedData.report_id = 203;
                  break;
              }

              this.selectedData.start_date = this.selectedYear + this.selectedStart;
              this.selectedData.end_date = this.selectedYear + this.selectedEnd;
              this.selectedData.brand = brand;
              this.selectedData.market = market;
              this.selectedData.dealer_include = dealer_include;
              // this.selectedData.userName = this.getQueryString('name')

              this.$http({
                    method:'post',
                    url:'http://114.55.92.124:9090/bmwos/audit_star/create_report.do',
                    data:this.selectedData,
                    }).then(response => {
                      if(response.data.status == 0){
                            Bus.$emit('run',this.run);
                      }
                      
                    })

               }else {
                  alert("Notice: Dealer is only single choice be allowed, please reselect it, thanks.")

               }

          
        
         


        },
        getQueryString(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)",'i'); // 匹配目标参数
            var result = window.location.search.substr(1).match(reg); // 对querystring匹配目标参数
            if (result != null) {
              return decodeURIComponent(result[2]);
            } else {
              return null;
            }
        }
      },
      

    }

</script>

<style>
@import 'ztree/css/zTreeStyle/zTreeStyle.css';


.tree-box{
  padding: 10px;
  font-size:16px;
}
.tree-box-title{ 
  height: 27px;
  line-height: 30px;

  margin-bottom: 5px;
}

.tree-box-title>img{
  margin-top: -5px;
}

#year,#start,#end{
 /* margin-left: 5px;*/
  height: 30px;
  width: 120px;
}

.time_box{
  margin-bottom: 5px;
}

#run{
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 120px;
  height: 30px;
  line-height: 30px;
  background: #3ACBC8;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
}
#run>span{
  margin-right: 10px;
  margin-left: -10px;
}
</style>