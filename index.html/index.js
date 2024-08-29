function callAPI(){
    fetch("http://127.0.0.1:3050/list-employees",{
        method: "GET",
    }).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
    
}

callAPI();