const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      port = 3000,
      mc = require(__dirname + '/controllers/messages_controller.js')

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../public/build'));



app.get('/api/messages', mc.readMessages);
app.post('/api/messages', mc.createMessage);
app.put('/api/messages/:id', mc.updateMessage);
app.delete('/api/messages/:id', mc.deleteMessage);



app.listen(port, ()=>{console.log(`Listening on port ${port}`);});

