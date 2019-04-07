# Fancy To Do

##  Routes
|Routes|HTTP|Header(s)|Body|Response|Description| 
|:--:|:--:|:--:|:--:|:--:|:--:|
|/createUser  |POST  |none|name: String (**required**), email: String (**required**), password: String (**required**)|**Success**: Register a user, **Error**: Internal server error (Validation)|Register a user|
|/login  |POST  |none|username: String (**required**),  password: String (**required**)|**Success**: Login as a user, **Error**: Internal server error (Wrong e-mail/password)|Login as a user|
|/create  |POST  |token|title : String, description : String, due_date : new Date()|**Success**: Create a new task, **Error**: Internal server error|create a new task|
|/get  |GET  |token|none|**Success**: show task list, **Error**: Internal server error (Validation)|show task list on a page|
|/delete/:_id  |DELETE |token|none|**Deleted Success**: Deleted success, **Error**: Internal server error|Delete a task|
|/updateTask/:_id  |PUT  |token|none|**Success**: Update a task, **Error**: Internal server error|Update a task|


## Usage
```javascript
$ npm install
$ npm install -g nodemon
$ nodemon app.js
```
Client-Side `http://localhost:8080`<br>
Server-Side using Postman `http://localhost:3000`


