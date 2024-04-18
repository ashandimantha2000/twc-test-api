
# TWC Contact Portal Server-side API

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
PORT=5555
```
Add connection string as

```bash
MONGO_URI = 'mongodb+srv://root:root@twc-db.naymvey.mongodb.net/twc?retryWrites=true&w=majority&appName=TWC-DB';
```
Define JSON Web Token secrect as
```bash
JWT_SECRET=yourSuperSecretKey
```
Define SALT as
```bash
SALT = 10;
```
Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

