## Interview Homework

### Getting Started
- use MySQL Workbench import wizard structure.sql using self-contained file method 
  (tutorial: https://dev.mysql.com/doc/workbench/en/wb-admin-export-import-management.html)
- use MySQL Workbench to import the data from the CSVs to the relevant tables 
  (tutorial: http://www.mysqltutorial.org/import-csv-file-mysql-table/)

### Task
write a web-app that includes frontend & backend.
the backend will serve the client with data from MySQL DB. the schema will have the following tables:
1) vasts
2) keyword_lists

the client will render the data as tabbed table, and will allow the user to
make CRUD (create, read, update, delete) operations on those items.

table structure & initial data are included as separate files.

### Frontend Specifications:
- when clicking on table tab (Vast\Keywords) the table will request & render the associated model
- when a model (vast\keywords) is rendered by the table, the model properties should be the headers of the table and each item will be rendered as a row
- the last column will be "actions" and it will render for each row a button(s) that enables editing\deleting of the model.
- above the table there will be a create button that will open a form associated to the currently selected table tab. on submit, the form will add a new row to the
  relevant table.

### Backend Specifications:
- communicates with MySQL for crud operations
- has a total of 8 routes: get_all\create\update\delete for each of the two models: vasts & keyword_lists

### Requirements
- frontend written in react + redux (bonus: react hooks)
- backend written in nodejs + expressjs (crms are allowed: sequelize, knexjs, etc...)
- if not using CRM, using mysql lib is recommended
- can start client from template (create-react-app, bootstrap, material-ui etc...)

### Client Result Example:
--------------------
| Vasts	| Keywords |						 				 // <- table tabs
-------------------------------------------------------
| Id    | name  | ...rest of columns 	    | actions |		 // <- table columns
-------------------------------------------------------
| 1     | first vast... 			        |    *    |		 // <- table rows
| 2     | seconds vast...			        |    *	  |

### Tips & Notes:
- DB  structure & initial data are located in separate files
- Keep code dry & clean, give good names to functions & variables
- Be creative. We are looking to see code that’s written correctly rather than only running..



