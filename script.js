document.addEventListener("DOMContentLoaded",()=>{
document.querySelector("table").style.display="none";
});
let students = JSON.parse(localStorage.getItem("students")) || [];

function display(){
let table="";
students.forEach((s,i)=>{
table+=`
<tr>
<td>${s.id}</td>
<td>${s.name}</td>
<td>${s.course}</td>
<td>
<button onclick="edit(${i})">Edit</button>
<button onclick="remove(${i})">Delete</button>
</td>
</tr>`;
});
document.getElementById("table").innerHTML=table;
}

function addStudent(){
    document.querySelector("table").style.display="table";
let id=document.getElementById("id").value;
let name=document.getElementById("name").value;
let course=document.getElementById("course").value;

students.push({id,name,course});
localStorage.setItem("students",JSON.stringify(students));
display();
clear();
}
function edit(i){

document.getElementById("id").value = students[i].id;
document.getElementById("name").value = students[i].name;
document.getElementById("course").value = students[i].course;

window.index = i;
}


function updateStudent(){
students[index]={
id:id.value,
name:name.value,
course:course.value
};
localStorage.setItem("students",JSON.stringify(students));
display();
clear();
}

function remove(i){
students.splice(i,1);
localStorage.setItem("students",JSON.stringify(students));
display();
}

function clear(){
document.getElementById("id").value="";
document.getElementById("name").value="";
document.getElementById("course").value="";
}


display();
