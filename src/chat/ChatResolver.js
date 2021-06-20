export function start(addMessage, roomname) {
    AddMessage = addMessage;
    Roomname = roomname;
    getMessagesFromServer();
    setInterval(() => getMessagesFromServer(), 2000);
}

var AddMessage = (el) => {}
var Roomname = ""

async function getMessagesFromServer() {
    var response = await fetch(`https://fchatiavi.herokuapp.com/get/${Roomname}/?offset=0&limit=1000000`);
    
    response = await response.json();
  
    if (response == null) {
      return;
    }
    
    AddMessage(response)
}

export async function sendUserMessage(data) {
    await fetch(`https://fchatiavi.herokuapp.com/send/${Roomname}/`, {
      method: 'POST',
      body: JSON.stringify(data)
    });

    getMessagesFromServer();
}