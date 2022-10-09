'use strict'

class ChatController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onMessage(data){
    this.socket.broadcast("mensaje",data);
    console.log(this.socket.id);
    console.log(data);
  }

}

module.exports = ChatController
