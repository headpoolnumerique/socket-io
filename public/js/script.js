let socket = io();
let el;

socket.on('usercount', (usercount) => {
    el = document.getElementById('root');
    el.innerHTML = 'Number of visitors on the site: ' + usercount;
});