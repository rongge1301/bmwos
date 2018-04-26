<template>
  <div class="tree-box">
    <!-- <div class="tree-box-title">
        <img src="@/assets/img/folder.png" alt="" height="20px">
    </div> -->
    <div class="list">
      <div class="list-item list-tab">
        <label class="list-title">
          Market Report:
        </label>
        <label class="radio-inline">
          <input type="radio" name="spend" checked="checked" id="inlineRadio1" value="spend1" tab-label="com"> Competitive Spend
        </label>
        <label class="radio-inline">
          <input type="radio" name="spend" id="inlineRadio2" value="spend2" tab-label="market"> Market Spend
        </label>
        <label class="radio-inline">
          <input type="radio" name="spend" id="inlineRadio3" value="spend3" tab-label="media-cost"> Media Cost Inflation
        </label>
      </div>

      <div class="list-item">
        <div class="time_box">
          <label class="list-title">Period:</label>
          <el-select v-model="startYear" placeholder="请选择" id="startYear">
            <el-option
              v-for="item in optionsYear"
              :key="item.value"
              :label="item.value"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="startMon" placeholder="请选择" id="startMon">
            <el-option
              v-for="item in optionsMonth"
              :key="item.value"
              :label="item.value"
              :value="item.value">
            </el-option>
          </el-select>
          —
          <el-select v-model="endYear" placeholder="请选择" id="endYear">
            <el-option
              v-for="item in optionsYear"
              :key="item.value"
              :label="item.value"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="endMon" placeholder="请选择" id="endMon">
            <el-option
              v-for="item in optionsMonth"
              :key="item.value"
              :label="item.value"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="tab-content com">
        <div class="list-item">
          <label class="list-title">
            Brand:
          </label>
          <form id="Brand">
            <label class="radio-inline">
              <input type="checkbox" v-model="Brand" name="Brand" id="" value="BMW"> BMW
            </label>
            <label class="radio-inline">
              <input type="checkbox" v-model="Brand" name="Brand" id="" value="Audi"> Audi
            </label>
            <label class="radio-inline">
              <input type="checkbox" v-model="Brand" name="Brand" id="" value="MB"> MB
            </label>
          </form>
        </div>
        <div class="list-item">
          <label class="list-title">
            Dealers included:
          </label>
          <label class="radio-inline">
            <input type="radio" v-model="Dealers" name="Dealers" id="" value="yes"> YES
          </label>
          <label class="radio-inline">
            <input type="radio" v-model="Dealers" name="Dealers" id="" value="no"> NO
          </label>
        </div>
      </div>
      <div class="tab-content market">
        <div class="list-item">
          <label class="list-title">
            Market Group:
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" v-model="Market" name="Market" id="" value="Total Market"> Total Market
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" v-model="Market" name="Market" id="" value="Automotive Market"> Automotive Market
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" v-model="Market" name="Market" id="" value="Car Market"> Car Market
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" v-model="Market" name="Market" id="" value="Car Market"> Car Market
          </label>
        </div>
        <div class="list-item">
          <label class="list-title">
            Dealers included:
          </label>
          <label class="radio-inline">
            <input type="radio" name="Dealers" id="" value="yes"> YES
          </label>
          <label class="radio-inline">
            <input type="radio" name="Dealers" id="" value="no"> NO
          </label>
        </div>
      </div>
      <div class="tab-content media-cost">
      </div>
    </div>


    <!-- <div class="zTreeDemoBackground left">
        <ul id="treeDemo" class="ztree"></ul>
    </div> -->
    <button id="run" @click="runReport"><span class="glyphicon glyphicon-play"></span>Run</button>
  </div>
</template>

<script>
  import Bus from '@/bus/bus.js'
  import Urls from '../../../common/urls'

  export default {
    name: 'marketReport',
    components: {},
    data: function () {
      return {
        selectedData: {
          "report_id": 101,
          "start_date": "",
          "end_date": "",
          "brand": [],
          "market": [],
          "dealer_include": "",
          yhToken: this.$Util.getCookie('yh_login_token')
        },
        startYear: "",
        startMon: "",
        endYear: "",
        endMon:'',
        optionsYear: [{
          value: '2017',
        }, {
          value: '2018',
        }],
        optionsMonth: [{
          value: '01',
        }, {
          value: '02',
        }, {
          value: '03',
        }, {
          value: '04',
        }, {
          value: '05',
        }, {
          value: '06',
        }, {
          value: '07',
        }, {
          value: '08',
        }, {
          value: '09',
        }, {
          value: '10',
        }, {
          value: '11',
        }, {
          value: '12',
        }],
        Brand:[],
        Dealers:'',
        Market:[],
        run: true,
      }
    },
    mounted:function(){
      this.$Util.tab('[name=spend]','.tab-content');
    },
    methods: {
      runReport() {
        this.selectedData.start_date = this.startYear + this.startMon;
        this.selectedData.end_date = this.endYear + this.endMon;
        this.selectedData.brand = this.Brand;
        this.selectedData.dealer_include = this.Dealers;
        this.selectedData.market = this.Market;
        this.$http({
          url:Urls.create_report,
          method: 'POST',
          data:this.selectedData
        }).then(res => {
          
        });
      }
    }

  }

</script>

<style>

  .list-item {
    height: 50px;
    display: flex; /*Flex布局*/
    display: -webkit-flex; /* Safari */
    align-items: center; /*指定垂直居中*/
    border-bottom: 1px solid #f0f0f0;
  }

  .list-tab {
    height: 56px;
    display: flex; /*Flex布局*/
    display: -webkit-flex; /* Safari */
    align-items: center; /*指定垂直居中*/
  }

  .list-title {
    width: 130px;
    margin-right: 20px;
    text-align: right;
  }
  .tab-content{
    display: none;
  }
  input[type=checkbox] {
    margin-left: -20px;
  }

  .radio-inline {
    margin-right: 10px;
  }

  .tree-box {
    font-size: 14px;
  }

  .tree-box-title {
    height: 27px;
    line-height: 30px;

    margin-bottom: 5px;
  }

  .tree-box-title > img {
    margin-top: -5px;
  }

  #year, #start, #end {
    /* margin-left: 5px;*/
    height: 30px;
    width: 120px;
  }

  .time_box {
    margin-bottom: 5px;
  }

  #run {
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

  #run > span {
    margin-right: 10px;
    margin-left: -10px;
  }
</style>
