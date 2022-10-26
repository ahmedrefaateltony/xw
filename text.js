//get total 

let title = document.getElementById("title");
let price = document.getElementById("pric");
let texse = document.getElementById("texse");
let ads   = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let catgory = document.getElementById("catgory");
let submit = document.getElementById("submit");


let mood = "creat";
let emp;

function gettotal() {
    if(price.value != "") {
        let result = (+price.value + +texse.value + +ads.value) - discount.value;
        
        total.innerHTML = result;
        total.style.backgroundColor ="green";
    }

    else{
        total.innerHTML = "";
total.style.backgroundColor= "rgb(207, 8, 8)";

    }
}

//creat product

let datapro ;

if(localStorage.product != null) {
    datapro = JSON.parse(localStorage.product)
}
else {
    datapro = [];
}

submit.onclick  = function () {
    let newPRO = {
        title:title.value,
        pric:pric.value,
        texse:texse.value,
        ads:ads.value,
        discount:discount.value,
        count:count.value,
        catgory:catgory.value,
        total:total.innerHTML
     
    }
     if(mood === "creat") {

    if(newPRO.count > 1) {
        for(let i = 0 ; i < newPRO.count; i++) {
            datapro.push(newPRO);
        }
    }else {
        datapro.push(newPRO);
    }

    }

    else {
     datapro [ emp ] = newPRO;
      mood = "CREAT";
      submit.value ="creat";
      count.style.display = 'block';
      total.style.backgroundColor= "rgb(207, 8, 8)";

    }



    localStorage.setItem("product" , JSON.stringify(datapro));
   console.log(datapro);
   deleteNew()
   showData()


   //add to class list

   add.classList.add("add");

 

}

//adddd


   
//save localstoreg
//clear inputs 


function deleteNew() {

    title.value = "";
    pric.value =  "";
    texse.value = '';
    ads.value = '';
    discount.value = "";
    count.value = '';
    catgory.value = '';
    total.innerHTML = '';

}
//read

function showData() {

    let table = "";
    for(let i =0; i < datapro.length; i++) {
        table += `
        <tr>
        <td> ${i}</td>
        <td> ${datapro[i].title}</td>
        <td>  ${datapro[i].pric}</td>
        <td>  ${datapro[i].texse}</td>
        <td>  ${datapro[i].ads}</td>
        <td>  ${datapro[i].discount}</td>
        <td> ${datapro[i].catgory}</td>
        <td> ${datapro[i].total}</td>
        <td><button onclick="ahmed(${i})">dlete</button></td>
        <td><button onclick="update(${i})">updat</button></td>
    </tr>
        `
    }

    document.getElementById("tbody").innerHTML = table;
}

//delelte


function ahmed(i) {
datapro.splice(i,1);

localStorage.product = JSON.stringify(datapro);
showData() 

}
//update

function update(i) {
title.value = datapro[i].title;
price.value = datapro[i].pric;
ads.value = datapro[i].ads;
discount.value = datapro[i].discount;
catgory.value = datapro[i].catgory;
texse.value = datapro[i].texse;
count.style.display = "none";
gettotal()
submit.value = "update";
mood = "update";

emp = i;
scroll({
    top :0,
    behavior:"smooth",
})


}
//search
let searchMood = "title";

function search(id) {

    let search = document.getElementById("serach");
if(id == "title") {

searchMood = "title";
search.placeholder = "search by title";

}
else {
    searchMood = "catgory";
    search.placeholder = "search by category";
}

search.focus()



}

function search1(value) {
    let table = "";

    if(searchMood == "title") {
 
         for( let i = 0;  i < datapro.length; i++) {

            if(datapro[i].title.includes(value)) {
                table += `
                <tr>
                <td> ${i}</td>
                <td> ${datapro[i].title}</td>
                <td>  ${datapro[i].pric}</td>
                <td>  ${datapro[i].texse}</td>
                <td>  ${datapro[i].ads}</td>
                <td>  ${datapro[i].discount}</td>
                <td> ${datapro[i].catgory}</td>
                <td> ${datapro[i].total}</td>
                <td><button onclick="ahmed(${i})">dlete</button></td>
                <td><button onclick="update(${i})">updat</button></td>
            </tr>
                `;
            }
         }

    }

    else {
    }

    document.getElementById("tbody").innerHTML = table;
}

//clen data
showData() 