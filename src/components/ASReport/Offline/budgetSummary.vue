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
          <input type="radio" name="spend" id="inlineRadio3" value="spend3" tab-label="media"> Media Cost Inflation
        </label>
      </div>
      <div class="tab-content com">
        <div class="list-item">
          <div class="time_box">
            <label class="list-title">Period:</label>
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
        </div>
        <div class="list-item">
          <label class="list-title">
            Brand:
          </label>
          <label class="radio-inline">
            <input type="checkbox" name="" id="" value=""> BMW
          </label>
          <label class="radio-inline">
            <input type="checkbox" name="" id="" value=""> Audi
          </label>
          <label class="radio-inline">
            <input type="checkbox" name="" id="" value=""> MB
          </label>
        </div>
        <div class="list-item">
          <label class="list-title">
            Dealers included:
          </label>
          <label class="radio-inline">
            <input type="radio" name="" id="" value=""> YES
          </label>
          <label class="radio-inline">
            <input type="radio" name="" id="" value=""> NO
          </label>
        </div>
      </div>
      <div class="tab-content market">
        <div class="list-item">
          <div class="time_box">
            <label class="list-title">Period:</label>
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
        </div>
        <div class="list-item">
          <label class="list-title">
            Market Group:
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" name="" id="" value=""> Total Market
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" name="" id="" value=""> Automotive Market
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" name="" id="" value=""> Car Market
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" name="" id="" value=""> Car Market
          </label>
        </div>
        <div class="list-item">
          <label class="list-title">
            Dealers included:
          </label>
          <label class="radio-inline">
            <input type="radio" name="" id="" value=""> YES
          </label>
          <label class="radio-inline">
            <input type="radio" name="" id="" value=""> NO
          </label>
        </div>
      </div>
      <div class="tab-content media">
        <div class="list-item">
          <div class="time_box">
            <label class="list-title">Period:</label>
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
        </div>
      </div>
    </div>


    <!-- <div class="zTreeDemoBackground left">
        <ul id="treeDemo" class="ztree"></ul>
    </div> -->
    <button id="run" @click="runReport"><span class="glyphicon glyphicon-play"></span>Run</button>
  </div>
</template>

<script>
export default {
  name:'budgetSummary',
  data: function () {
      return {
        selectedData: {
          "report_id": 101,
          "start_date": "",
          "end_date": "",
          "brand": [],
          "market": [],
          "dealer_include": "",
          yhToken: sessionStorage.getItem("token")
        },
        selectedYear: "",
        selectedStart: "",
        selectedEnd: "",
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
        run: true,
      }
    },
    methods: {
      freshArea: function () {
        $.fn.zTree.init($("#treeDemo"), this.setting, this.zNodes);
        // zTree.getNodesByParam("checked", true, null);
      },
      runReport() {

      },
      getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", 'i'); // 匹配目标参数
        var result = window.location.search.substr(1).match(reg); // 对querystring匹配目标参数
        if (result != null) {
          return decodeURIComponent(result[2]);
        } else {
          return null;
        }

      },
      //标签切换
      tab:function () {
        $('.tab-content').eq(0).show();
        $('[name=spend]').on('click',function (params) {
          $('.tab-content').hide();
          var tablabel = $(this).attr('tab-label');
          console.log(tablabel);
          $('.' + tablabel).show();
        })
      }
    },
    mounted:function(){
      this.tab();
    }

}
</script>

<style>

</style>