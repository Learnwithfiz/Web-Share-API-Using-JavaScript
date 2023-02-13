var shareBtn = document.getElementById("shareBtn");
shareBtn.addEventListener("click",function(){
     if(navigator.share){
        navigator.share({
            url:"https://www.learnwithfiz.com/"
        }).then(function(){
            console.log("thanks for share and click");
        }).catch(function(e){
            console.log("error 404");
        })
     }else{
        console.log("cannot support"); 
     }
});

