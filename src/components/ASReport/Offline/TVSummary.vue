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
          <input type="radio" name="spend" checked="checked" id="inlineRadio1" value="spend1" tab-label="Audience"> Audience Report
        </label>
        <label class="radio-inline">
          <input type="radio" name="spend" id="inlineRadio2" value="spend2" tab-label="Monitoring"> Monitoring Spot List
        </label>
        <label class="radio-inline">
          <input type="radio" name="spend" id="inlineRadio3" value="spend3" tab-label="BMWGroup"> BMW Group Spot List
        </label>
        <label class="radio-inline">
          <input type="radio" name="spend" id="inlineRadio3" value="spend3" tab-label="TVSales"> TV Sales House
        </label>
        <label class="radio-inline">
          <input type="radio" name="spend" id="inlineRadio3" value="spend3" tab-label="TVNet"> TV Net Spend
        </label>
      </div>
      <div class="tab-content Audience">
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
            Target audience:
          </label>
          <label class="radio-inline">
            <input type="checkbox" name="" id="" value=""> People 4+
          </label>
          <label class="radio-inline">
            <input type="checkbox" name="" id="" value=""> M25-40
          </label>
          <label class="radio-inline">
            <input type="checkbox" name="" id="" value=""> P20-35
          </label>
          <label class="radio-inline">
            <input type="checkbox" name="" id="" value=""> P20-40
          </label>
          <label class="radio-inline">
            <input type="checkbox" name="" id="" value=""> P20-45
          </label>
          <label class="radio-inline">
            <input type="checkbox" name="" id="" value=""> P20-50
          </label>
          <label class="radio-inline">
            <input type="checkbox" name="" id="" value=""> M30-50
          </label>
        </div>
      </div>
      <div class="tab-content Monitoring">
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
            Target audience:
          </label>
          <label class="radio-inline">
            <input type="checkbox" name="" id="" value=""> People 4+
          </label>
          <label class="radio-inline">
            <input type="checkbox" name="" id="" value=""> M25-40
          </label>
          <label class="radio-inline">
            <input type="checkbox" name="" id="" value=""> P20-35
          </label>
          <label class="radio-inline">
            <input type="checkbox" name="" id="" value=""> P20-40
          </label>
          <label class="radio-inline">
            <input type="checkbox" name="" id="" value=""> P20-45
          </label>
          <label class="radio-inline">
            <input type="checkbox" name="" id="" value=""> P20-50
          </label>
          <label class="radio-inline">
            <input type="checkbox" name="" id="" value=""> M30-50
          </label>
        </div>
        <div class="list-item">
          <label class="list-title">
            Brand Group:
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" name="" id="" value=""> BMW Group
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" name="" id="" value=""> MB Group
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" name="" id="" value=""> Audi
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
      <div class="tab-content BMWGroup">
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
            Target audience:
          </label>
          <label class="radio-inline">
            <input type="checkbox" name="" id="" value=""> People 4+
          </label>
          <label class="radio-inline">
            <input type="checkbox" name="" id="" value=""> M25-40
          </label>
          <label class="radio-inline">
            <input type="checkbox" name="" id="" value=""> P20-35
          </label>
          <label class="radio-inline">
            <input type="checkbox" name="" id="" value=""> P20-40
          </label>
          <label class="radio-inline">
            <input type="checkbox" name="" id="" value=""> P20-45
          </label>
          <label class="radio-inline">
            <input type="checkbox" name="" id="" value=""> P20-50
          </label>
          <label class="radio-inline">
            <input type="checkbox" name="" id="" value=""> M30-50
          </label>
        </div>
        <div class="list-item">
          <label class="list-title">
            Brand:
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" name="" id="" value=""> BMW
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" name="" id="" value=""> Mini
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" name="" id="" value=""> Rolls-Royce
          </label>
        </div>
        <div class="list-item">
          <label class="list-title">
            Region:
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" name="" id="" value=""> National
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" name="" id="" value=""> Local
          </label>
        </div>
      </div>
      <div class="tab-content TVSales">
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
      <div class="tab-content TVNet">
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
  name:'TVSummary',
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

      }
    },
    mounted:function(){
      Util.tab('[name=spend]','.tab-content')
    }

}
</script>

<style>

</style>