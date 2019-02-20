    var  i=0;
    $(function(){
            $("#all").click(
                function (){

                    $("input[name='test']").prop("checked","checked");
                    //这个地方只能用prop实现多次点击切换全选和全不选的效果，用attr的话不会多次实现。
                    // 因为attr不会记录当前checkbox的选中状态，所以这个地方只能使用prop

                    if(i==1){

                        $("input[name='test']").prop("checked",false);

                    }
                    i++;
                    if(i>1){
                        i=0;
                    }

                }
            );
        }
    );

	
	 function addTr(tab, row, trHtml){
   //獲取table最後一行 $("#tab tr:last")
   //獲取table第一行 $("#tab tr").eq(0)
   //獲取table倒數第二行 $("#tab tr").eq(-2)
   var $tr=$("#"+tab+" tr").eq(row);
   
   if($tr.size()==0){
    alert("指定的table id或行數不存在！");
    return;
   }
   $tr.after(trHtml);
 }
   
 function delTr(test){
   //獲取選中的複選框，然後迴圈遍歷刪除
   var ckbs=$("input[name="+test+"]:checked");
   if(ckbs.size()==0){
    alert("要刪除指定行，需選中要刪除的行！");
    return;
   }
      ckbs.each(function(){
       $(this).parent().parent().remove();
      });
 }
   
 ////////新增一行、刪除一行測試方法///////
   
 function addTr2(tab, row){
  var trHtml="<tr  bgcolor='white' align='center'><td bgcolor='#DDDDDD'><input type='checkbox' name='test'></td><td width='3%'><font size='2' color='#000000' contentEditable='true'><textarea id='text'cols='5' style='width:100px;BORDER-BOTTOM: 0px solid; BORDER-LEFT: 0px solid; BORDER-RIGHT: 0px solid; BORDER-TOP: 0px solid;'></textarea></font></td><td width='3%'><font size='2' color='#000000' contentEditable='true'><textarea id='text'cols='5' style='width:100px;BORDER-BOTTOM: 0px solid; BORDER-LEFT: 0px solid; BORDER-RIGHT: 0px solid; BORDER-TOP: 0px solid;'></textarea></font></td><td width='3%'><font size='2' color='#000000' contentEditable='true'><textarea id='text'cols='5' style='width:100px;BORDER-BOTTOM: 0px solid; BORDER-LEFT: 0px solid; BORDER-RIGHT: 0px solid; BORDER-TOP: 0px solid;'></textarea></font></td><td width='3%'><font size='2' color='#000000' contentEditable='true'><textarea id='text'cols='5' style='width:200px;BORDER-BOTTOM: 0px solid; BORDER-LEFT: 0px solid; BORDER-RIGHT: 0px solid; BORDER-TOP: 0px solid;'></textarea></font></td><td width='13%'><font size='2' color='#000000' contentEditable='true'><textarea id='text'cols='5' style='width:200px;BORDER-BOTTOM: 0px solid; BORDER-LEFT: 0px solid; BORDER-RIGHT: 0px solid; BORDER-TOP: 0px solid;'></textarea></font></td><td width='13%'><font size='2' color='#000000' contentEditable='true'><textarea id='text'cols='5' style='width:200px;BORDER-BOTTOM: 0px solid; BORDER-LEFT: 0px solid; BORDER-RIGHT: 0px solid; BORDER-TOP: 0px solid;'></textarea></font></td><td width='13%'><font size='2' color='#000000' contentEditable='true'><textarea id='text'cols='5' style='width:200px;BORDER-BOTTOM: 0px solid; BORDER-LEFT: 0px solid; BORDER-RIGHT: 0px solid; BORDER-TOP: 0px solid;'></textarea></font></td><td width='13%'><font size='2' color='#000000' contentEditable='true'><textarea id='text'cols='5' style='width:100px;BORDER-BOTTOM: 0px solid; BORDER-LEFT: 0px solid; BORDER-RIGHT: 0px solid; BORDER-TOP: 0px solid;'></textarea></font></td><td width='7%'><font size='2' color='#000000' contentEditable='true'><textarea id='text'cols='5' style='width:100px;BORDER-BOTTOM: 0px solid; BORDER-LEFT: 0px solid; BORDER-RIGHT: 0px solid; BORDER-TOP: 0px solid;'></textarea></font></td><td width='13%'><font size='2' color='#000000' contentEditable='true'><textarea id='text'cols='5' style='width:100px;BORDER-BOTTOM: 0px solid; BORDER-LEFT: 0px solid; BORDER-RIGHT: 0px solid; BORDER-TOP: 0px solid;'></textarea></font></td></tr>";
  addTr(tab, row, trHtml);
 }
   
 function delTr2(){
   delTr('test');
 }
	
	
	
	//edit dropdown
/* 点击按钮，下拉菜单在 显示/隐藏 之间切换 */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// 点击下拉菜单意外区域隐藏
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


 

	

