//点击任意位置播放背景音乐（仅一次）
    document.body.addEventListener( 
        //触发方式“点击”
        "click" ,   

        //自动播放函数
        function play_background_music(){
            var audio=document.getElementById("background_music");
            //console.log(audio);
            audio.play();
        },

        //仅执行一次
        {once:true});