document.getElementById("submit").addEventListener("click", function(){

const title = document.getElementById("title").value;

const author = document.getElementById("author").value;

const isbn = document.getElementById("isbn").value;

if(title === "" || author === "" || isbn === "") return;

const table = document.getElementById("book-list");

const row = document.createElement("tr");

row.innerHTML = `

<td>${title}</td>
<td>${author}</td>
<td>${isbn}</td>
<td><button class="delete">X</button></td>

`;

table.appendChild(row);

title.value="";
author.value="";
isbn.value="";

});


document.getElementById("book-list").addEventListener("click", function(e){

if(e.target.classList.contains("delete")){

e.target.parentElement.parentElement.remove();

}

});