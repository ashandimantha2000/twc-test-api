
# TWC Contact Portal Servre-side API
## Resources
export const PORT = 5555;
<br>
export const MONGO_URI = 'mongodb+srv://root:root@twc-db.naymvey.mongodb.net/twc?retryWrites=true&w=majority&appName=TWC-DB';
<br>
export const JWT_SECRET = 'secret';
<br>
export const SALT = 10;

## Tech Stack

NodeJs, ExpressJs, MongoDB, Mongoose, JWT
## Run Locally


```bash
  https://github.com/ashandimantha2000/twc-test-api.git
```

Go to the project directory

```bash
  cd twc-test-api
```
Add .env file to root of the server directory

Define port as

```bash
PORT = '5555'
```
Add connection string as

```bash
DATABASE = MONGODB_CONNECTION_STRING_HERE'
```
Define JSON Web Token secrect as
```bash
JWT = 'JWT_SECRET'
```
Define SALT as
```bash
export const SALT = 10;
```
Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

