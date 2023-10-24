# Boilerplate: Node.js and socket.io

### How to run this?

```
git clone https://github.com/HEAD-DigitalPool/socket-io.git # or clone your own fork before
$ cd socket-io
$ npm install
$ npm start
```

### What is this?

This is a boilerplate to help you run node.js with socket.io. This is helpful if you are looking to create a web game or a real-time data application where dynamic values are updated on the page based on user actions. In this example, we are simply adding the number of visitors that are connected to the website simultaneously. If 3 visitors are bot on the website together, the website will show:

```
Number of visitors on the site: 3
```

If suddently one visitor closes their page, the text will accross all websites change for:

```
Number of visitors on the site: 2
```

You can start with this base and add pieces of code you already have. Or start writing adding your code on the repository cloned on your local via the terminal (see below). Don't forget to first **<u>fork</u>** the repository on your Github profile if you are using the platform.

### How does the code work?

You have two types of files: server and client files.

The server file is called `index.js`. The client files are inside the `/public` folder.

In the `index.js`, you have this commented of code:

```
// This is where the socket.io engine 'listens' for client connections
io.on('connection', (socket) => {

	// This is a built-in function to get the number of 'clients' logged in;
  nbr_user = io.engine.clientsCount ;
  // this is where you emit - send to the client - the data you want to send;
  io.emit('usercount', io.engine.clientsCount)

	// This is where the socket.io engine 'listens' for client disconnections
  socket.on('disconnect', () => {
    console.log('user disconnected')
    console.log('nbr connected : ', io.engine.clientsCount)
    io.emit('usercount', io.engine.clientsCount)
  })
  
})
```

### How do I deploy this online

Using resources for this example app counts towards your usage. [Delete your app](https://devcenter.heroku.com/articles/heroku-cli-commands#heroku-apps-destroy) and [database](https://devcenter.heroku.com/articles/heroku-postgresql#removing-the-add-on) as soon as you are done experimenting to control costs.

By default, apps use Eco dynos if you are subscribed to Eco. Otherwise, it defaults to Basic dynos. The Eco dynos plan is shared across all Eco dynos in your account and is recommended if you plan on deploying many small apps to Heroku. Learn more about our low-cost plans [here](https://blog.heroku.com/new-low-cost-plans).

Eligible students can apply for platform credits through our new [Heroku for GitHub Students program](https://blog.heroku.com/github-student-developer-program).

```
$ heroku create
$ git push heroku main
$ heroku open
```

or

[![Deploy to Heroku](https://camo.githubusercontent.com/6979881d5a96b7b18a057083bb8aeb87ba35fc279452e29034c1e1c49ade0636/68747470733a2f2f7777772e6865726f6b7563646e2e636f6d2f6465706c6f792f627574746f6e2e737667)](https://heroku.com/deploy)

### [Documentation](https://github.com/HEAD-DigitalPool/ejs-app#documentation)

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
