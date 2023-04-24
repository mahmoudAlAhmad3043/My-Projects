//continer
let div = document.getElementsByTagName("div");
// style continer
// continer[0].style.backgroundColor = "gray";
div[0].style.margin = "10px auto";
div[0].style.padding = "20px";
div[0].style.minWidth = "300px";

//form
for( let i = 1 ; i<=2 ;i++ ){
    div[i].style.borderRadius = "7px";
    div[i].style.margin = "20px 0px";
    div[i].style.padding = "20px";
    div[i].style.backgroundColor  = "#8080805c";
}
div[1].style.gap = "5px";
div[1].style.display = "grid";
div[1].style.gridTemplateColumns = "70% 30%" ;
div[1].style.justifyContent = "center";

let input = document.querySelectorAll("input");
// style input
for(let i=0 ; i<2 ; i++){
    input[i].style.borderRadius = "7px";
    input[i].style.border = "0px" ; 
    input[i].style.padding = "10px";
}
input[1].style.backgroundColor = "red";
input[1].style.margin = "5px 0" ;
input[0].style.margin = "5px";
input[1].style.color = "white";
let count;
function createTask(str,count){
    let task = document.createElement("div");
    task.id = count;
    let textBtn = document.createTextNode("Delet");
    let btnDelet = document.createElement("button");
    btnDelet.appendChild(textBtn);
    btnDelet.id =task.id;
    let divText = document.createElement("p");
    divText.id = task.id;
    divText.style.fontWeight = "bold" ;
    divText.style.fontFamily = "sans-serif" ;
    let text = document.createTextNode(str);
    divText.appendChild(text);
    task.appendChild(divText);
    task.appendChild(btnDelet);
    window.localStorage.setItem(task.id,JSON.stringify(divText.innerHTML));
    div[2].appendChild(task);
    //style task
    task.style.backgroundColor = "white";
    task.style.display = "grid";
    task.style.gridTemplateColumns = "71% 29%";
    task.style.gap = "5px";
    task.style.justifyContent = "center";
    task.style.padding = "10px";
    task.style.margin = "20px 0px";
    task.style.borderRadius = "7px";
    // style delet
    btnDelet.style.backgroundColor = "red";
    btnDelet.style.margin = "5px 20%" ;
    btnDelet.style.borderRadius = "7px";
    btnDelet.style.border = "0px";
    btnDelet.style.color = "white";
}

input[1].onclick = function() {
    let text = input[0].value ;
    if(text.length !=0){
        createTask(text,count);
        count++;
    }
};


document.addEventListener("click",function(e){
    if(e.target.id !=""){
        let Id = e.target.id;
        document.getElementById(Id).remove();
        window.localStorage.removeItem(Id);
}
});
window.onload = function (){
    if(window.localStorage.length ==0) count = 0;
    else {
         count = window.localStorage.length;
        }
        
        for(let i=0 ; i<count ; i++){
            let k = window.localStorage.key(i);
            if(window.localStorage.getItem(k) != null){
                let a = JSON.parse(window.localStorage.getItem(k));
                window.localStorage.removeItem(k);
                createTask(a,i);
            }
        }

    };


