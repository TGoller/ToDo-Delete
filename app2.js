function get_toDos() {
    // grab data from localstorage
   
    var toDos = new Array();

    var toDoString = localStorage.getItem('toDos');
    // convert to JSON string
    if (toDoString !== null) {
         toDos = JSON.parse(toDoString);
    }
    return toDos;
}


function add(){
   var toDos = get_toDos();
       
   var textBoxContent = document.getElementById('itemToAdd').value;
   
   toDos.push(textBoxContent);

   localStorage.setItem("toDos",JSON.stringify(toDos));

   showList();

}

function showList(){
   var toDos = get_toDos();
   var html = '<ul>';
   
   // add each todo item to the string as <li>
   for (i=0; i < toDos.length; i++) {
       html += '<li>' + toDos[i] + ' '  + '<button id = \"' + i + '\" type = \"button\">Delete</button></li>';
     }
   // html = html + '</ul>';
   html += '</ul>';

   document.getElementById('todos').innerHTML = html;

   for (j=0; j < toDos.length; j++){
      console.log(document.getElementById(j));
      document.getElementById(j).addEventListener('click',removeItem);
   }

   //for (let j = 0; j < toDos.length; j++) { 
   //    let button = toDos[j]; 
   //    button.addEventListener(‘click’, removeItem() { logButtonIndex(j);});
   //  }
       
  // checkForDeletes();
       
}
      

function removeItem() {
   var foo = this.getAttribute('id');
   console.log(foo);
   var toDos = get_toDos();
   console.log('Item to delete is ' + toDos[foo]);
   var newToDos = toDos.splice(foo,1);
   localStorage.setItem("toDos",JSON.stringify(toDos)) 
   showList();
}


showList();
document.getElementById('addtodo').addEventListener('click',add);







/*
notes on deleting todo items:
1. You need a unique id for each item
2. you need a delete button that can be accessed individually in JS
3. you can use the id for each item to give its button a unique id
4. you can grab the id for the todo that is to be deleted using JS
5. remember you can create HTML using string - including IDs.
6. workon delete for about 1 hour before asking for help
*/