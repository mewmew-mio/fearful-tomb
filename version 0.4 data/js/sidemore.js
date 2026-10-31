 function side_expend(){
            var content=document.getElementsByClassName("top")[0];
            //console.log(content);
            content.insertAdjacentHTML("afterend","   <div class='side' onclick='side_disexpend()'>   <div class='side_top'> 返回 </div>  <div class='side_content'>  <a href='日志.html'>日志</a>  </div>  </div>   ")
        }
        function side_disexpend(){
            var content=document.getElementsByClassName("side")[0];
            console.log(content);
            content.remove();
        }