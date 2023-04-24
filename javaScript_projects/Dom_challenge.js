
//header
document.body.style.margin = "0";
let myHeader = document.createElement("header");
document.body.style.minWidth = "360px";

// style header
myHeader.style.display = "grid";
myHeader.style.gridTemplateColumns = "10% 70% 20%";
myHeader.style.fontFamily = "sans-serif";
myHeader.style.fontWeight = "bold";
myHeader.style.margin = "20px 0px"

//h3
let myH3 = document.createElement("h3");

let textH3 = document.createTextNode("Mahmoud");

myH3.appendChild(textH3);
//style h3
myH3.style.color = "#59af93";
myH3.style.display = "inline";
myH3.style.margin = "0 20px";
myH3.style.padding = "0";
myH3.style.fontFamily = "sans-serif";

myHeader.appendChild(myH3);

//tabs

let myTabs = document.createElement("div");
// style Tabs
myTabs.style.display = "inline";
myTabs.style.gridArea = "1/3/1/4"
myTabs.style.justifySelf ="flex-end";
myTabs.style.alignSelf = "center";
myTabs.style.margin = "0 20px";

let ArrayTabs = ["Home","About","Service","Contact"];

 let mySpan =[];
 let textSpan = [];
 
for(let index=0 ; index<ArrayTabs.length ; index++){
    mySpan[index]=document.createElement("span");
    mySpan[index].className = `span${index+1}`;
    textSpan[index] = document.createTextNode(ArrayTabs[index]);
    mySpan[index].appendChild(textSpan[index]);
    myTabs.appendChild(mySpan[index]);
    // style span
    mySpan[index].style.marginLeft = "5px";
    mySpan[index].style.fontSize = "15px";
    mySpan[index].style.color = "#80808091";
    mySpan[index].onmouseenter = function (){
        mySpan[index].style.color ="gray";
    }
    mySpan[index].onmouseleave = function (){
        mySpan[index].style.color ="#80808091";
    }
}


myHeader.appendChild(myTabs);

document.body.appendChild(myHeader);


//div Content

myContent = document.createElement("div");
//style myContent 
myContent.style.display = "grid";
myContent.style.gridTemplateColumns = "auto  auto auto";
myContent.style.gridGap = "20px";
myContent.style.textAlign = "center";
myContent.style.backgroundColor = "#80808050";
myContent.style.padding = "20px";
myContent.style.margin = "0";
myContent.style.fontSize = "13px";
myContent.style.color = "#80808090";


let myProduct = [];
let NumberProduct = [];
let textSpanProduct = [];
let textProduct = [];
let counter = 18;
function Product(index){
    myProduct[index]=document.createElement("div");
    myProduct[index].id = `productID${index+1}`;
    //style myProduct div 
    myProduct[index].style.backgroundColor = "white";
    myProduct[index].style.padding = "10px";
    myProduct[index].style.fontWeight = "italic";
    myProduct[index].style.fontFamily = "sans-serif";
    myProduct[index].style.borderRadius = "7px";
    myProduct[index].onmouseenter = function (){
        myProduct[index].style.margin ="-7px";
    }
    myProduct[index].onmouseleave = function (){
        myProduct[index].style.margin ="0";
    }

    NumberProduct[index]=document.createElement("span");
    NumberProduct[index].id = `spanID${index+1}`;
    //style NumberProduct
    NumberProduct[index].style.display = "block";
    NumberProduct[index].style.fontSize = "25px";
    NumberProduct[index].style.marginBottom = "10px";
    NumberProduct[index].style.color = "black";

    textSpanProduct[index]=document.createTextNode(`${index+1}`);
    textSpanProduct[index].id = `txtSpanID${index+1}`;

    NumberProduct[index].appendChild(textSpanProduct[index]);

    textProduct[index]=document.createTextNode("Product");
    textProduct[index].id = `textProductID${index+1}`;

    myProduct[index].appendChild(NumberProduct[index]);

    myProduct[index].appendChild(textProduct[index]);

    myContent.appendChild(myProduct[index]);
}
for(let index=0; index <counter ; index++){
 Product(index);
}
document.body.appendChild(myContent);


//footer

let myFooter = document.createElement("footer");
let divFooter = document.createElement("div");
let textFooter = document.createTextNode("Mahmoud-AL-Ahmad 2022");
let addProduct = document.createElement("button") ;
let removeProduct = document.createElement("button");
let textAdd =document.createTextNode("Create Product");
let textRemove =document.createTextNode("Remove Product");
addProduct.appendChild(textAdd);
addProduct.onclick = function () {Product(counter++)};
removeProduct.onclick = function () {if(counter>0) myProduct[--counter].remove()};
removeProduct.appendChild(textRemove);
let arrBtn = [addProduct ,removeProduct];

//style addProduct
addProduct.style.gridArea = "1/1/1/2";

//style removeProduct
removeProduct.style.gridArea = "1/2/1/3";
for(let i = 0 ; i < arrBtn.length ;i++){
    arrBtn[i].style.borderRadius = "7px";
    arrBtn[i].style.color = "white";
    arrBtn[i].style.fontFamily = "sans-serif";
    arrBtn[i].style.fontWeight = "bold"; 
    arrBtn[i].style.backgroundColor = "#000000";
    arrBtn[i].style.border = "0px";
    arrBtn[i].style.width = "50%";
    arrBtn[i].style.padding = "5px";
    arrBtn[0].style.justifySelf = "end";
    arrBtn[1].style.justifySelf = "start";
    arrBtn[i].onmouseenter = function (){
        arrBtn[i].style.color = "#365758";
    }
    arrBtn[i].onmouseleave = function (){
        arrBtn[i].style.color = "white";
    }
}




//style divFooter
// divFooter.style.padding = "0px";
divFooter.appendChild(textFooter);
myFooter.appendChild(divFooter);
myFooter.appendChild(addProduct);
myFooter.appendChild(removeProduct);

divFooter.style.gridArea = "2/1/3/3";
divFooter.style.textAlign= "center";
divFooter.style.marginTop= "10px";

myFooter.style.display = "grid";
myFooter.style.gridTemplateColumns = "50%  50%";
myFooter.style.gridTemplateRows = "50% 50%";
myFooter.style.gap ="10px";
myFooter.style.padding = "20px";
myFooter.style.backgroundColor = "#365758";
myFooter.style.color = "white";
myFooter.style.fontFamily = "sans-serif";
myFooter.style.fontWeight = "bold"; 
myFooter.style.justifyContent = "center" ;

//add footer
document.body.appendChild(myFooter);

