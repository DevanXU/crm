- Install node & npm
```
sudo apt install nodejs
```
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
cd <folder of "db.json">
json-server --port 3001 --watch db.json
```
OR
```
npm run mock
```


- Install Nginx
```
sudo apt install nginx
```

- Configure Nginx for proxy

    [How to use Nginx to play as proxy for multi-services](https://www.jianshu.com/p/2fc507c327bc)

    [Nginx Beginners Guide](http://nginx.org/en/docs/beginners_guide.html)

- Configure fake data

    [使用json-server/mockjs/fake模拟REST API](https://www.jianshu.com/p/26a6ab3eea54)