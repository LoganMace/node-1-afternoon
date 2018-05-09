let messages = [];
let id = 0;

module.exports = {
  readMessages(req, res){
    return res.status(200).json(messages);
  },
  createMessage(req, res){
    let {text, time} = req.body;
    messages.push({id, text, time});
    id++;
    return res.status(200).json(messages);
  },
  updateMessage(req, res){
    // let index = messages.findIndex(message => message.id == req.params.id);
    // let updateMessage = messages[index];

    messages.forEach(message => message.id == req.params.id ? Object.assign(message, req.body) : null)
    return res.status(200).json(messages);
  },
  deleteMessage(req, res){
    let index = messages.findIndex(message => message.id == req.params.id);
    messages.splice(index, 1);
    return res.status(200).json(messages);
  }
}