<template>
  	<div>
  		<div class="tree-box">
            <div>Market Report</div>
            <div class="zTreeDemoBackground left">
                <ul id="treeDemo" class="ztree"></ul>
            </div>
            <button @click="testClick">test </button>
        </div>
  	</div>
</template>

<script>
export default {
      name: 'marketReport',
      components:{

      },
      data:function(){
        return{
            zTree:"",
            rls:null,
            IDMark_A :"_a", 
            setting:{  
                view: {  
                    addDiyDom: this.addDiyDom
                },  
                data: {  
                    simpleData: {  
                        enable: true  
                    }  
                }  
            },
            zNodes:[
              { id: 1, pId: 0, name: "父节点 1", open: false },
              { id: 11, pId: 1, name: "叶子节点 1-1" },
              { id: 111, pId: 11, name: "叶子节点 1-1-1" },
              { id: 112, pId: 11, name: "叶子节点 1-1-1" },
              { id: 113, pId: 11, name: "叶子节点 1-1-1" },
              { id: 12, pId: 1, name: "叶子节点 1-2" },
              { id: 121, pId: 12, name: "叶子节点 1-1-1" },
              { id: 122, pId: 12, name: "叶子节点 1-1-1" },
              { id: 123, pId: 12, name: "叶子节点 1-1-1" },
              { id: 124, pId: 12, name: "叶子节点 1-1-1" },
              { id: 13, pId: 1, name: "叶子节点 1-3" },
              { id: 2, pId: 0, name: "父节点 2", open: false },
              { id: 21, pId: 2, name: "叶子节点 2-1" },
              { id: 22, pId: 2, name: "叶子节点 2-2" },
              { id: 23, pId: 2, name: "叶子节点 2-3" },
              { id: 3, pId: 0, name: "父节点 3", open: false },
              { id: 31, pId: 3, name: "叶子节点 3-1" },
              { id: 32, pId: 3, name: "叶子节点 3-2" },
              { id: 33, pId: 3, name: "叶子节点 3-3" },

            ]
        }
      },
      mounted(){
        this.zTree = $.fn.zTree.init($("#treeDemo"), this.setting, this.zNodes);
      },
      methods:{
        // freshArea:function(){
        //     $.fn.zTree.init($("#treeDemo"), this.setting, this.zNodes);
        // },
        addDiyDom(treeId, treeNode) {
          var _this= this;
          var aObj = $("#" + treeNode.tId + _this.IDMark_A);
          if (treeNode.level == 0) {
            var editStr = "<input type='radio' class='radioBtn' id='radio_" + treeNode.id + "_" + treeNode.pId + "' onfocus='this.blur();'></input>";
            aObj.before(editStr);
            var btn = $("#radio_" + treeNode.id + "_" + treeNode.pId);
            if (btn) {
              btn.bind("click", function() { _this.checkAccessories(treeNode, btn); });
            }
          } else {
            var editStr = "<input type='checkbox' class='checkboxBtn' id='checkbox_" + treeNode.id + "_" + treeNode.pId + "' name='checkbox_" + treeNode.getParentNode().id + "_" + treeNode.pId + "' onfocus='this.blur();'></input>";
            aObj.before(editStr);
            var btn = $("#checkbox_" + treeNode.id + "_" + treeNode.pId);
            if (btn) {
              btn.bind("change", function() { _this.checkBrand(treeNode, btn); });
              var isNodeInChecked = false;
              var selectedNodes = null;
              if (_this.zTree != null) {
                selectedNodes = _this.zTree.getNodesByParam("checked", true, null);
              }

              var selectedNode;
              //初始化时判断是否需要选择，这里可以去掉或者通过在zNodes中定义中添加checked:tr//ue来代替  
              if (selectedNodes != null && selectedNodes.length > 0) {
                for (var i = 0; i < selectedNodes.length; i++) {
                  selectedNode = selectedNodes[i];
                  if (selectedNode.id == treeNode.pId) {
                    isNodeInChecked = true;
                    break;
                  }
                }
              }
              if (isNodeInChecked) {
                treeNode.checked = true;
                btn.attr("checked", true);
              }
            }
          }
        },
        checkBrand(treeNode, btn) {
          var _this= this;
          if (btn.is(':checked')) {
      
            var isRootInChecked = _this.isNodeInChecked(treeNode.rootId);
            if (!isRootInChecked) {
              _this.beforeCheckAccessories(treeNode, btn);
              treeNode.checked = true;
            }
            _this.setParentNodeChecked(treeNode);
            _this.setChildSelected(treeNode, btn, true);
          } else {
            
            treeNode.checked = false;
            _this.setChildSelected(treeNode, btn, false);
          }

          // 如果只剩一个被选中项，则取消该被选项  
          var selectedNodes = null;
          var selectedNode;
          if (_this.zTree != null) {
            selectedNodes = _this.zTree.getNodesByParam("checked", true, null);
            if (selectedNodes.length == 1) {
              for (var i = 0; i < selectedNodes.length; i++) {
                selectedNode = selectedNodes[i];
                    // alert("sdsd")
                    // console.log(selectedNode)
                    // console.log()
                $("#radio_" + selectedNode.id + "_" + selectedNode.pId).prop("checked", false);
                $("#checkbox_" + selectedNode.id + "_" + selectedNode.pId).prop("checked", false);
              }
            }
          }
        },
        setChildSelected(treeNode, btn, status) {

          var _this = this;
          var children;
          if (treeNode.children == null) {
            return true;
          }
          var lenth = treeNode.children.length;
          if (lenth == 0) {
            return true;
          }
         
          for (var i = 0; i < lenth; i++) {
            children = treeNode.children[i];
         
            // if(children.children.length == 0){
            //   return true;
            // }else{
            //   for (var j = 0; j < children.children.length; j++) {
            //     let children1 = children.children[j]
            //     $("#checkbox_" + children1.id + "_" + children1.pId).prop("checked", status);
            //     children1.checked = status;
            //     btn = $("#checkbox_" + children1.id + "_" + children1.pId);
            //   }
            // }


            $("#checkbox_" + children.id + "_" + children.pId).prop("checked", status);
            children.checked = status;
            btn = $("#checkbox_" + children.id + "_" + children.pId);


            // rls = _this.setChildSelected(children, btn, status);
            // if (rls) {
            //   continue;
            // }
          }

          
          
          

        },
        checkAccessories(treeNode, btn) {
          var _this = this;
          if (btn.is(':checked')) {
            //点击的节点是否在已选的根节点中  
            var isRootInChecked = _this.isNodeInChecked(treeNode.id);
            if (!isRootInChecked) {
              //去除其余根节点以及下级节点的选择  

              _this.removeOthers();
            }
            treeNode.checked = true;
            //节点下所有节点都勾选  
            _this.setChildSelected(treeNode, btn, true);
          } else {
            treeNode.checked = false;
            _this.setChildSelected(treeNode, btn, false);
          }
        },
        isNodeInChecked(curId) {
          var _this = this;
          if (_this.zTree == null) {
            return false;
          }
          var selectedNodes = _this.zTree.getNodesByParam("checked", true, null);
          var selectedNode;

          if (selectedNodes == null || selectedNodes.length == 0) {
            return false;
          }
          for (var i = 0; i < selectedNodes.length; i++) {
            selectedNode = selectedNodes[i];
            if (selectedNode.id == curId) {
              return true;
            }
          }
          return false;
        },
        removeOthers() {
          var _this = this;
          var selectedNodes = null;
          if (_this.zTree != null) {
            selectedNodes = _this.zTree.getNodesByParam("checked", true, null);
          }

          var selectedNode;
          if (selectedNodes == null || selectedNodes.length == 0) {
            return;
          }
          for (var i = 0; i < selectedNodes.length; i++) {
            selectedNode = selectedNodes[i];
            selectedNode.checked = false;
            $("#radio_" + selectedNode.id + "_" + selectedNode.pId).prop("checked", false);
            $("#checkbox_" + selectedNode.id + "_" + selectedNode.pId).prop("checked", false);
          }
        },
        beforeCheckAccessories(treeNode, btn) {
          var _this = this;
          var selectedNodes = null;
          if (_this.zTree != null) {
            selectedNodes = _this.zTree.getNodesByParam("checked", true, null);
          }

          var selectedNode;

          if (selectedNodes == null || selectedNodes.length == 0) {
            return;
          }

          // alert(_this.zTree.getSelectedNodes().length);  

          for (var i = 0; i < selectedNodes.length; i++) {
            selectedNode = selectedNodes[i];

            if (selectedNode.getParentNode() == null) {
              if (treeNode.getParentNode() == selectedNode) {
                continue
              }
            } else if (selectedNode != null && treeNode.getParentNode() == selectedNode.getParentNode()) {
              continue;
            }

            selectedNode.checked = false;
            $("#radio_" + selectedNode.id + "_" + selectedNode.pId).prop("checked", false);
            $("#checkbox_" + selectedNode.id + "_" + selectedNode.pId).prop("checked", false);
          }
        },
        getCheckedBox(checkedName) {
          var _this = this;
            var r = document.getElementsByName(checkedName);
            for (var i = 0; i < r.length; i++) {
              if (r[i].checked) {
                return $(r[i]);
              }
            }
            return null;
        },
        setParentNodeChecked(treeNode) {
          var _this = this;
          var parentNode;
          if (treeNode == null) {
            return true;
          }
          if (treeNode.getParentNode() != null) {
            parentNode = treeNode.getParentNode();
            $("#checkbox_" + parentNode.id + "_" + parentNode.pId).prop("checked", true);
            parentNode.checked = true;
            return _this.setParentNodeChecked(parentNode);
          } else {
            var pObj = $("#radio_" + treeNode.id + "_" + treeNode.pId);
            if (!pObj.attr("checked")) {
              treeNode.checked = true;
              pObj.attr("checked", true);
            }
            return true;
          }
        },
        testClick(){
          console.log(this.zTree.getNodesByParam("checked", true, null))
        }
      },
      
    }

</script>

<style>
@import 'ztree/css/zTreeStyle/zTreeStyle.css';

</style>