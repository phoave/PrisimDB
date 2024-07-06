# PrismDB
![videoframe_24582](https://github.com/phoave/PrisimDB/assets/85488476/85eb9278-544c-4523-af89-e30889856dc2)

PrismDB is a simple JavaScript key-value store library that provides basic CRUD operations, table-like structures, and saves data to a file.

## Installation

You can install PrismDB via npm:

```bash
npm install prismdb
```
Once installed, you can import PrismDB into your project:
```js
const PrismDB = require('prismdb');
const db = new PrismDB('database.pris');
```
## Features
* Simple API: Easily perform CRUD operations.
* Table-like Structures: Organize your data into tables.
* Persistence: Data is saved and loaded from .pris files.
* Lightweight: Minimal setup for small projects and prototyping.

# Getting Started
Creating a Table

Create a new table to store your data:

```js
db.createTable('users');
```
Inserting Data

Insert data into the 'users' table:
```js
db.insert('users', 'user1', { name: 'Alice', age: 30 });
```
Selecting Data

Retrieve data from the 'users' table:
```js
const user = db.select('users', 'user1');
console.log(user); // Output: { name: 'Alice', age: 30 }
```
Updating Data

Update existing data in the 'users' table:
```js
    db.update('users', 'user1', { name: 'Alice', age: 31 });
```
Deleting Data

Delete data from the 'users' table:

```js
db.delete('users', 'user1');
```
Dropping a Table

If no longer needed, drop a table:
```js
db.dropTable('users');
```
# Contact
[Twitter](https://x.com/neris_phoave)

[Discord Server](https://discord.gg/xsmxAGABgd)
