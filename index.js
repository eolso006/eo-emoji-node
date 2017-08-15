const http = require('http')
const emoji = require('node-emoji')

const server = http.createServer((req, res) => {
  
  res.write(emoji.random().emoji);
  res.end();
});

server.listen(8001);



/////// emoji part /////////////
// const emojis = [];
//
// for (var i = 0; i < 10; i++) {
//   emojis.push(emoji.random().emoji);
// }
//
// for (var i = 0; i < emojis.length; i++) {
//   console.log(emojis[i]);
// }
