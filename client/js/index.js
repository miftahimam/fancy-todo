
function fetchTodos(){
    $.ajax({
        url:'http://localhost:3000/get',
        method:'GET',
    })
    .done(function(response){
    
        response.forEach(todo =>{
            console.log(todo);
            $('#todo-list').append(`<li>${todo.title}, ${todo.description},${todo.due_date}
            <button onclick="deleteTask('${todo._id}')">delete</button>
            <button type="submit" onclick="updateTask('${todo._id}', '${todo.title}', '${todo.description}', '${todo.due_date}')">update</button></li>`)}) 
        
    })  
    .fail(function(textStatus){
        console.log('request failed', textStatus);
        
    })
}
function updatedTask(){  
    event.preventDefault()
    const title = $('#titleUpdate').val()
    const id = $('#id').val()

    $.ajax({
        url : `http://localhost:3000/updateTask/${id}`,
        method:'PUT',
        data : {title : title}
    })
    .done(function(data){
        console.log('sukses brooooo');
        
       $('#alertRegistered').prepend('#todo-list')
       swal('success')
       
    })
    .fail(function(textStatus){
        console.log('request failed', textStatus);  
    })
}

function createTodo(){
    event.preventDefault()

    const title = $('#title').val()
    const description = $('#description').val()
    const status = $('#status').val()
    const due_date = $('#due_date').val()
    
    $.ajax({
        url : 'http://localhost:3000/create',
        method : 'POST',
        data : { title : title,
                description : description,
                due_date : due_date },
    })
    .done(function(response){
        $('#todo-list').prepend(`<li>${response.title}, ${response.description},${response.due_date}
        <button onclick="deleteTask('${response._id}')">delete</button>
        <button type="submit" onclick="updateTask('${response.title}', '${response.description}', '${response.due_date}')">update</button></li>`)})
        
    .fail(function(textStatus){
        console.log('request failed', textStatus); 
    })
}
function deleteTask(){
   
    $.ajax({
        url:'http://localhost:3000/delete/:_id',
        method:'DELETE',
    })
    .done(function(){
        $('#todo-list').empty()
        fetchTodos()
        swal('success deleted')
        
    })
    .fail(function(textStatus){
        console.log('request failed', textStatus); 
    })
}

function updateTask(id,title, description, due_date){
    
    $('#updateForm').append(`
    <form onsubmit="updatedTask()">
        <input id="id" value="${id}">
        <input id="titleUpdate" value="${title}">
        <input id="description" value="${description}">
        <input id="due_date" value="${due_date}">
        <button type="submit">submit</button>
    </form>`)
    
}

function createUser(){
    event.preventDefault()
    const name = $('#formUser').val()
    const email = $('#formEmail').val()
    const password = $('#formPassword').val()

    $.ajax({
        url : `http://localhost:3000/createUser`,
        method:'POST',
        data : { name : name,
                 email : email,
                 password : password }
    })
    .done(function(){
        console.log('sukses brooooo');
        
       $('#alertRegistered').prepend('#formUser')
       swal('success')
       $('#id01').hide()
    })
    .fail(function(textStatus){
        console.log('request failed', textStatus);  
    })
}
function login(){
    
    event.preventDefault()
    const email = $('#username').val()
    const password = $('#password').val()
    $.ajax({
        url: `http://localhost:3000/login`,
        method:'POST',
        data :{
            email : email,
            password: password
        }
    })
    .done(function(response){
        console.log('udah login brooo');
        swal('success')         
     })
     .fail(function(err){
         console.log('ini fail');
         
         console.log('request failed', err);
         
     })
}
$(document).ready(function(){
    // if(localStorage.getItem('token'))
    fetchTodos()
    $('todo-form').submit(function(){
        
    })
})