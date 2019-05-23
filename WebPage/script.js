     function initializeViz(urlParam, widthParam, heightParam, div, flag) {
            // alert("Inside init flag="+flag);
            
            if(flag==1){
                viz = window.tableau.VizManager.getVizs();
                viz.forEach(function(item, index, array) {
                    if (item) {
                        item.dispose();
                    }
                });
            }
            var placeholderDiv = document.getElementById(div);
            placeholderDiv.style.width=widthParam;
            var url = urlParam;
            var options = {
            //width: widthParam,
            //height: heightParam,
            width: '100%',
            height: heightParam,
            float:'left',
            hideTabs: true,
            hideToolbar: true,
        };
        viz = new tableau.Viz(placeholderDiv, url, options);    
    }
    function decideView(){
        a=document.getElementById("sport").value;
        b=document.getElementById("source").value;
        c=document.getElementById("set").value;
        if(a=="baseball"){
            if(b=="twitter"){
                if(c=="partial"){
                    url="https://public.tableau.com/views/PA_2_Viz_Small_Baseball_NYT/Sheet2?:embed=y&:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                }
                else if(c=="full"){
                    url="https://public.tableau.com/views/PA_2_Viz/Sheet2?:embed=y&:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                }
                else{
                    url="https://public.tableau.com/views/PA_2_Viz_Small_Baseball_NYT/Sheet2?:embed=y&:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                    url="https://public.tableau.com/views/PA_2_Viz/Sheet2?:embed=y&:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz1",0);
                }
            }
            else if(b=="nyt"){
                if(c=="partial"){
                    url="https://public.tableau.com/views/PA_2_Viz_Small_Baseball_NYT/Sheet1?:embed=y&:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                }
                else if(c=="full"){
                    url="https://public.tableau.com/views/PA_2_Viz/Sheet1?:embed=y&:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                }
                else{
                    url="https://public.tableau.com/views/PA_2_Viz_Small_Baseball_NYT/Sheet1?:embed=y&:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                    url="https://public.tableau.com/views/PA_2_Viz/Sheet1?:embed=y&:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz1",0);
                }
            }
            else if(b=="commoncrawl"){
                    url="https://public.tableau.com/views/PA_2_Viz/Sheet9?:embed=y&:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
            }
            else{
                if(c=="partial"){
                    url="https://public.tableau.com/views/PA_2_Viz_Small_Baseball_NYT/Sheet1?:embed=y&:display_count=yes";
                    width='50%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                    url="https://public.tableau.com/views/PA_2_Viz_Small_Baseball_NYT/Sheet2?:embed=y&:display_count=yes";
                    width='50%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz1",0);
                    url="https://public.tableau.com/views/PA_2_Viz/Sheet9?:embed=y&:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz4",0);
                }
                else if(c=="full"){
                    url="https://public.tableau.com/views/PA_2_Viz/Sheet1?:embed=y&:display_count=yes";
                    width='50%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                    url="https://public.tableau.com/views/PA_2_Viz/Sheet2?:embed=y&:display_count=yes";
                    width='50%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz1",0);
                    url="https://public.tableau.com/views/PA_2_Viz/Sheet9?:embed=y&:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz4",0);
                }
                else{
                    url="https://public.tableau.com/views/PA_2_Viz_Small_Baseball_NYT/Sheet1?:embed=y&:display_count=yes";
                    width='50%';
                    height='50%';
                    initializeViz(url,width,height,"tableauViz",1);
                    url="https://public.tableau.com/views/PA_2_Viz_Small_Baseball_NYT/Sheet2?:embed=y&:display_count=yes";
                    width='50%';
                    height='50%';
                    initializeViz(url,width,height,"tableauViz1",0);
                    url="https://public.tableau.com/views/PA_2_Viz/Sheet1?:embed=y&:display_count=yes";
                    width='50%';
                    height='50%';
                    initializeViz(url,width,height,"tableauViz2",0);
                    url="https://public.tableau.com/views/PA_2_Viz/Sheet2?:embed=y&:display_count=yes";
                    width='50%';
                    height='50%';
                    initializeViz(url,width,height,"tableauViz3",0);
                    url="https://public.tableau.com/views/PA_2_Viz/Sheet9?:embed=y&:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz4",0);
                }
            }
        }
        else if(a=="basketball"){
            if(b=="twitter"){
                if(c=="partial"){
                    url="https://public.tableau.com/views/PA_2_Viz_Small_Baseball_NYT/Sheet4?:embed=y&:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                }
                else if(c=="full"){
                    url="https://public.tableau.com/views/PA_2_Viz/Sheet4?:embed=y&:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                }
                else{
                    url="https://public.tableau.com/views/PA_2_Viz_Small_Baseball_NYT/Sheet4?:embed=y&:display_count=yes";
                    width='50%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                    url="https://public.tableau.com/views/PA_2_Viz/Sheet4?:embed=y&:display_count=yes";
                    width='50%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz1",0);
                }
            }
            else if(b=="nyt"){
                if(c=="partial"){
                    url="https://public.tableau.com/views/PA_2_Viz_Small_Baseball_NYT/Sheet3?:embed=y&:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                }
                else if(c=="full"){
                    url="https://public.tableau.com/shared/FNBM7WJNN?:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                }
                else{
                    url="https://public.tableau.com/views/PA_2_Viz_Small_Baseball_NYT/Sheet3?:embed=y&:display_count=yes";
                    width='50%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                    url="https://public.tableau.com/shared/FNBM7WJNN?:display_count=yes";
                    width='50%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz1",0);
                }
            }
            else if(b=="commoncrawl"){
                url="https://public.tableau.com/views/PA_2_Viz/Sheet10?:embed=y&:display_count=yes";
                width='100%';
                height='100%';
                initializeViz(url,width,height,"tableauViz",1);
            }
            else{
                if(c=="partial"){
                    url="https://public.tableau.com/views/PA_2_Viz_Small_Baseball_NYT/Sheet3?:embed=y&:display_count=yes";
                    width='50%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                    url="https://public.tableau.com/views/PA_2_Viz_Small_Baseball_NYT/Sheet4?:embed=y&:display_count=yes";
                    width='50%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz1",0);
                    url="https://public.tableau.com/views/PA_2_Viz/Sheet10?:embed=y&:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz4",0);
                }
                else if(c=="full"){
                    url="https://public.tableau.com/shared/FNBM7WJNN?:display_count=yes";
                    width='50%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                    url="https://public.tableau.com/views/PA_2_Viz/Sheet4?:embed=y&:display_count=yes";
                    width='50%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz1",0);
                    url="https://public.tableau.com/views/PA_2_Viz/Sheet10?:embed=y&:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz4",0);
                }
                else{
                    url="https://public.tableau.com/views/PA_2_Viz_Small_Baseball_NYT/Sheet3?:embed=y&:display_count=yes";
                    width='50%';
                    height='50%';
                    initializeViz(url,width,height,"tableauViz",1);
                    url="https://public.tableau.com/views/PA_2_Viz_Small_Baseball_NYT/Sheet4?:embed=y&:display_count=yes";
                    width='50%';
                    height='50%';
                    initializeViz(url,width,height,"tableauViz1",0);
                    url="https://public.tableau.com/shared/FNBM7WJNN?:display_count=yes";
                    width='50%';
                    height='50%';
                    initializeViz(url,width,height,"tableauViz2",0);
                    url="https://public.tableau.com/views/PA_2_Viz/Sheet4?:embed=y&:display_count=yes";
                    width='50%';
                    height='50%';
                    initializeViz(url,width,height,"tableauViz3",0);
                    url="https://public.tableau.com/views/PA_2_Viz/Sheet10?:embed=y&:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz4",0);
                }
            }
        }
        else if(a=="football"){
            if(b=="twitter"){
                if(c=="partial"){
                    url="https://public.tableau.com/views/PA_2_Viz_Small_Baseball_NYT/Sheet6?:embed=y&:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                }
                else if(c=="full"){
                    url="https://public.tableau.com/views/PA_2_Viz/Sheet6?:embed=y&:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                }
                else{
                    url="https://public.tableau.com/views/PA_2_Viz_Small_Baseball_NYT/Sheet6?:embed=y&:display_count=yes";
                    width='50%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                    url="https://public.tableau.com/views/PA_2_Viz/Sheet6?:embed=y&:display_count=yes";
                    width='50%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz1",0);
                }
            }
            else if(b=="nyt"){
                if(c=="partial"){
                    url="https://public.tableau.com/shared/MK74ZP67P?:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                }
                else if(c=="full"){
                    url="https://public.tableau.com/shared/KWFDGPCW4?:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                }
                else{
                    url="https://public.tableau.com/shared/MK74ZP67P?:display_count=yes";
                    width='50%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                    url="https://public.tableau.com/shared/KWFDGPCW4?:display_count=yes";
                    width='50%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz1",0);
                }
            }
            else if(b=="commoncrawl"){
                url="https://public.tableau.com/views/PA_2_Viz/Sheet11?:embed=y&:display_count=yes";
                width='100%';
                height='100%';
                initializeViz(url,width,height,"tableauViz",1);
            }
            else{
                if(c=="partial"){
                    url="https://public.tableau.com/shared/MK74ZP67P?:display_count=yes";
                    width='50%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                    url="https://public.tableau.com/views/PA_2_Viz_Small_Baseball_NYT/Sheet6?:embed=y&:display_count=yes";
                    width='50%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz1",0);
                    url="https://public.tableau.com/views/PA_2_Viz/Sheet11?:embed=y&:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz4",0);
                }
                else if(c=="full"){
                    url="https://public.tableau.com/shared/KWFDGPCW4?:display_count=yes";
                    width='50%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                    url="https://public.tableau.com/views/PA_2_Viz/Sheet6?:embed=y&:display_count=yes";
                    width='50%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz1",0);
                    url="https://public.tableau.com/views/PA_2_Viz/Sheet11?:embed=y&:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz4",0);
                }
                else{
                    url="https://public.tableau.com/shared/MK74ZP67P?:display_count=yes";
                    width='50%';
                    height='50%';
                    initializeViz(url,width,height,"tableauViz",1);
                    url="https://public.tableau.com/views/PA_2_Viz_Small_Baseball_NYT/Sheet6?:embed=y&:display_count=yes";
                    width='50%';
                    height='50%';
                    initializeViz(url,width,height,"tableauViz1",0);
                    url="https://public.tableau.com/shared/KWFDGPCW4?:display_count=yes";
                    width='50%';
                    height='50%';
                    initializeViz(url,width,height,"tableauViz2",0);
                    url="https://public.tableau.com/views/PA_2_Viz/Sheet6?:embed=y&:display_count=yes";
                    width='50%';
                    height='50%';
                    initializeViz(url,width,height,"tableauViz3",0);
                    url="https://public.tableau.com/views/PA_2_Viz/Sheet11?:embed=y&:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz4",0);
                }
            }
        }
        else{
            if(b=="twitter"){
                if(c=="partial"){
                    url="https://public.tableau.com/shared/DFCS6TTZN?:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                }
                else if(c=="full"){
                    url="https://public.tableau.com/views/PA_2_Viz/Sheet8?:embed=y&:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                }
                else{
                    url="https://public.tableau.com/shared/DFCS6TTZN?:display_count=yes";
                    width='50%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                    url="https://public.tableau.com/views/PA_2_Viz/Sheet8?:embed=y&:display_count=yes";
                    width='50%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz1",0);
                }
            }
            else if(b=="nyt"){
                if(c=="partial"){
                    url="https://public.tableau.com/shared/F396TF6TD?:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                }
                else if(c=="full"){
                    url="https://public.tableau.com/shared/84TYXDKRG?:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                }
                else{
                    url="https://public.tableau.com/shared/F396TF6TD?:display_count=yes";
                    width='50%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                    url="https://public.tableau.com/shared/84TYXDKRG?:display_count=yes";
                    width='50%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz1",0);
                }
            }
            else if(b=="commoncrawl"){
                url="https://public.tableau.com/shared/GN99QRSYZ?:display_count=yes";
                width='100%';
                height='100%';
                initializeViz(url,width,height,"tableauViz",1);
            }
            else{
                if(c=="partial"){
                    url="https://public.tableau.com/shared/F396TF6TD?:display_count=yes";
                    width='50%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                    url="https://public.tableau.com/shared/DFCS6TTZN?:display_count=yes";
                    width='50%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz1",0);
                    url="https://public.tableau.com/shared/GN99QRSYZ?:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz4",0);
                }
                else if(c=="full"){
                    url="https://public.tableau.com/shared/84TYXDKRG?:display_count=yes";
                    width='50%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz",1);
                    url="https://public.tableau.com/views/PA_2_Viz/Sheet8?:embed=y&:display_count=yes";
                    width='50%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz1",0);
                    url="https://public.tableau.com/shared/GN99QRSYZ?:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz4",0);
                }
                else{
                    url="https://public.tableau.com/shared/F396TF6TD?:display_count=yes";
                    width='50%';
                    height='50%';
                    initializeViz(url,width,height,"tableauViz",1);
                    url="https://public.tableau.com/shared/DFCS6TTZN?:display_count=yes";
                    width='50%';
                    height='50%';
                    initializeViz(url,width,height,"tableauViz1",0);
                    url="https://public.tableau.com/shared/84TYXDKRG?:display_count=yes";
                    width='50%';
                    height='50%';
                    initializeViz(url,width,height,"tableauViz2",0);
                    url="https://public.tableau.com/views/PA_2_Viz/Sheet8?:embed=y&:display_count=yes";
                    width='50%';
                    height='50%';
                    initializeViz(url,width,height,"tableauViz3",0);
                    url="https://public.tableau.com/shared/GN99QRSYZ?:display_count=yes";
                    width='100%';
                    height='100%';
                    initializeViz(url,width,height,"tableauViz4",0);
                }
            }
        }
    }

    function decideViewCo(){
        a=document.getElementById("sport").value;
        b=document.getElementById("source").value;
        //c=document.getElementById("set").value;
        if(a=="baseball"){
            if(b=="twitter"){
                url="https://public.tableau.com/shared/4T7XGYQRY?:display_count=yes";
                width='100%';
                height='100%';
                initializeViz(url,width,height,"tableauViz",1);
            }
            else if(b=="nyt"){
                url="https://public.tableau.com/views/PA_2_Viz_Coocc/Sheet6?:embed=y&:display_count=yes";
                width='100%';
                height='100%';
                initializeViz(url,width,height,"tableauViz",1);
            }
            else if(b=="commoncrawl"){
                
            }
            else{
                url="https://public.tableau.com/shared/4T7XGYQRY?:display_count=yes";
                width='50%';
                height='100%';
                initializeViz(url,width,height,"tableauViz",1);
                url="https://public.tableau.com/views/PA_2_Viz_Coocc/Sheet6?:embed=y&:display_count=yes";
                width='50%';
                height='100%';
                initializeViz(url,width,height,"tableauViz1",0);
            }
        }
        else if(a=="basketball"){
            if(b=="twitter"){
                url="https://public.tableau.com/views/PA_2_Viz_Coocc/Sheet3?:embed=y&:display_count=yes";
                width='100%';
                height='100%';
                initializeViz(url,width,height,"tableauViz",1);
            }
            else if(b=="nyt"){
                url="https://public.tableau.com/views/PA_2_Viz_Coocc/Sheet7?:embed=y&:display_count=yes";
                width='100%';
                height='100%';
                initializeViz(url,width,height,"tableauViz",1);
            }
            else if(b=="commoncrawl"){
                url="https://public.tableau.com/views/PA_2_Viz_Coocc/Sheet10?:embed=y&:display_count=yes";
                width='100%';
                height='100%';
                initializeViz(url,width,height,"tableauViz",1);
            }
            else{
                url="https://public.tableau.com/views/PA_2_Viz_Coocc/Sheet3?:embed=y&:display_count=yes";
                width='50%';
                height='100%';
                initializeViz(url,width,height,"tableauViz",1);
                url="https://public.tableau.com/views/PA_2_Viz_Coocc/Sheet7?:embed=y&:display_count=yes";
                width='50%';
                height='100%';
                initializeViz(url,width,height,"tableauViz1",0);
                url="https://public.tableau.com/views/PA_2_Viz_Coocc/Sheet10?:embed=y&:display_count=yes";
                width='100%';
                height='100%';
                initializeViz(url,width,height,"tableauViz2",0);
            }
        }
        else if(a=="football"){
            if(b=="twitter"){
                url="https://public.tableau.com/views/PA_2_Viz_Coocc/Sheet4?:embed=y&:display_count=yes";
                width='100%';
                height='100%';
                initializeViz(url,width,height,"tableauViz",1);
            }
            else if(b=="nyt"){
                url="https://public.tableau.com/views/PA_2_Viz_Coocc/Sheet8?:embed=y&:display_count=yes";
                width='100%';
                height='100%';
                initializeViz(url,width,height,"tableauViz",1);
            }
            else if(b=="commoncrawl"){
                url="https://public.tableau.com/views/PA_2_Viz_Coocc/Sheet11?:embed=y&:display_count=yes";
                width='100%';
                height='100%';
                initializeViz(url,width,height,"tableauViz",1);
            }
            else{
                url="https://public.tableau.com/views/PA_2_Viz_Coocc/Sheet4?:embed=y&:display_count=yes";
                width='50%';
                height='100%';
                initializeViz(url,width,height,"tableauViz",1);
                url="https://public.tableau.com/views/PA_2_Viz_Coocc/Sheet8?:embed=y&:display_count=yes";
                width='50%';
                height='100%';
                initializeViz(url,width,height,"tableauViz1",0);
                url="https://public.tableau.com/views/PA_2_Viz_Coocc/Sheet11?:embed=y&:display_count=yes";
                width='100%';
                height='100%';
                initializeViz(url,width,height,"tableauViz2",0);
            }
        }
        else{
            if(b=="twitter"){
                url="https://public.tableau.com/views/PA_2_Viz_Coocc/Sheet5?:embed=y&:display_count=yes";
                width='100%';
                height='100%';
                initializeViz(url,width,height,"tableauViz",1);
            }
            else if(b=="nyt"){
                url="https://public.tableau.com/views/PA_2_Viz_Coocc/Sheet9?:embed=y&:display_count=yes&publish=yes";
                width='100%';
                height='100%';
                initializeViz(url,width,height,"tableauViz",1);
            }
            else if(b=="commoncrawl"){
                url="https://public.tableau.com/views/PA_2_Viz_Coocc/Sheet12?:embed=y&:display_count=yes";
                width='100%';
                height='100%';
                initializeViz(url,width,height,"tableauViz",1);
            }
            else{
                url="https://public.tableau.com/views/PA_2_Viz_Coocc/Sheet5?:embed=y&:display_count=yes";
                width='50%';
                height='100%';
                initializeViz(url,width,height,"tableauViz",1);
                url="https://public.tableau.com/views/PA_2_Viz_Coocc/Sheet9?:embed=y&:display_count=yes&publish=yes";
                width='50%';
                height='100%';
                initializeViz(url,width,height,"tableauViz1",0);
                url="https://public.tableau.com/views/PA_2_Viz_Coocc/Sheet12?:embed=y&:display_count=yes";
                width='100%';
                height='100%';
                initializeViz(url,width,height,"tableauViz2",0);
            }
        }
    }