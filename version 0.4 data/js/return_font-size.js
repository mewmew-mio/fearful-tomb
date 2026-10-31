//计算font-size值
        function reset_html_fontsize()
        {
            document.documentElement.style.fontSize = window.innerWidth / 100 - 0.3  + "px";    
        }
        reset_html_fontsize();
        //绑定事件
        window.onresize = reset_html_fontsize;