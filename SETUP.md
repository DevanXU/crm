- Install node & npm
```
sudo apt install nodejs
```

- Download source code
```
git clone https://github.com/DevanXU/crm
```

- Download [VSCode](https://code.visualstudio.com/)

- Install package
```
cd <source-dir>
npm install
```

- Install `json-server`
```
npm install -g json-server
```

- Run nodejs under `crm`, by default it'd listen on `port 3000`.
```
npm start
```

- Start `json-server` for mocking data
```
cd <source-dir> # where `db.json` is located
json-server --port 3001 --watch db.json
```

OR

```
npm run mock
```
