# Boilerplate: Node.js and socket.io

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

