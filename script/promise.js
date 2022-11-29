               // fetching from api
function ajaxcall(){
    
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var data=JSON.parse(this.responseText);
    var output="";
    let placeholder=document.getElementById("data-output");
    for(let i=0;i<data.length;i++){
        
        output+=`<tr>`;
        if(data[i].completed == true){
            output+=`<td>${data[i].id}</td><td>${data[i].title}</td><td><input type=checkbox  checked disabled></td>`;
           
           }
           else{
            output+=`<td>${data[i].id}</td><td>${data[i].title}</td><td><input type=checkbox  class=pl onchange=chkcounter()></td>`;
           }
           output+=`</tr>`;
    
        }
            
            placeholder.innerHTML=output;  
            
        }
    }
    xhttp.open('GET','https://jsonplaceholder.typicode.com/todos',true);
    xhttp.send();
}
               // function for checking 5 checkboxes are checked or not
function chkcounter(){
    let j=0;
    var inputs=document.querySelectorAll(".pl");
    for (var i = 0; i < inputs.length; i++) {   

                 if(inputs[i].checked == true){
                         j++;
                        if(j==5){
                        promise(j);
                        }
                        else{
                            continue;
                        }
                    }
                }
}
             // calling promise
function promise(val){

    let mypromise = new Promise(function(resolve,reject){
            if(val == 5){
                resolve(val);
            }
            

    });
    mypromise.then(function(value){
        alert("Congratz!!! "+value+" tasks have been successfully completed");
    }

    );
}