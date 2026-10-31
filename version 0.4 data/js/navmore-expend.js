//导航栏展开

    //左栏

        //左1栏
        function expend_left_001(){
            var content=document.getElementById("left001");
            //console.log(content);
            content.innerHTML="   <span onmouseover='expend_left_001()'>导航001</span>   <img src='css/asset/img/001.gif'alt=''>   "; 
        }
        function disexpend_left_001(){
            var content=document.getElementById('left001');
            //console.log(content);
            content.innerHTML="   <span onmouseover='expend_left_001()'>导航001</span>   "; 
        }
        
        //左2栏
        function expend_left_002(){
            var content=document.getElementById("left002");
            //console.log(content);
            content.innerHTML="    <span onmouseover='expend_left_002()'>导航002</span>   <img src='css/asset/img/002.gif' alt=''>   "; 
        }
        function disexpend_left_002(){
            var content=document.getElementById('left002');
            //console.log(content);
            content.innerHTML="    <span onmouseover='expend_left_002()'>导航002</span>   "; 
        }


    //右栏

        //右1栏
        function expend_right_001(){
            var content=document.getElementById("right001");
            //console.log(content);
            content.innerHTML="    <span onmouseover='expend_right_001()'>创作者</span>   <img src='   css/asset/img/dzqy.jpg   ' alt=''>   ";
        }
        function disexpend_right_001(){
            var content=document.getElementById("right001");
            //console.log(content);
            content.innerHTML="    <span onmouseover='expend_right_001()'>创作者</span>   ";
        }

