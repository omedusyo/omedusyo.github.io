const chatMessagesDOM = document.querySelector("#chat-messages");
const chatInputDOM = document.querySelector("#chat-input");
const chatNameDOM = document.querySelector("#chat-name");
const chatPublishDOM = document.querySelector("#chat-publish");

function renderMessages(messages) {
  chatMessagesDOM.textContent = '';
  messages.forEach(msg => {

    const messageNameSpanDOM = document.createElement("strong");
    messageNameSpanDOM.appendChild(document.createTextNode(msg.name));
    messageNameSpanDOM.classList.add("name");

    const messageContentSpanDOM = document.createElement("span");
    messageContentSpanDOM.appendChild(document.createTextNode(msg.content));
    messageContentSpanDOM.classList.add("content");


    const messageDOM = document.createElement("div");
    messageDOM.appendChild(messageNameSpanDOM);
    messageDOM.appendChild(messageContentSpanDOM);
    messageDOM.classList.add("message");

    chatMessagesDOM.appendChild(messageDOM);
  });
}

const Scope = {
  global: "chat",
};

const Msg = {
  changed: "changed",
  publishMsg: "publishMsg",
};

class ChatModel extends Croquet.Model {
  init() {
    this.messages = [];

    this.subscribe(Scope.global, Msg.publishMsg, (msg) => {
      this.messages.push(msg);
      this.publish(Scope.global, Msg.changed);
    });
  }
}
ChatModel.register("ChatModel");

class ChatView extends Croquet.View {
  constructor(model) {
    super(model);
    this.model = model;

    this.subscribe(Scope.global, Msg.changed, () => {
      renderMessages(this.model.messages);
    });


    chatPublishDOM.onclick = e => {
      const name = chatNameDOM.value;
      const msgContent = chatInputDOM.value;
      chatInputDOM.value = '';
      this.publish(Scope.global, Msg.publishMsg, { name: name, content: msgContent });
    };
    
    renderMessages(this.model.messages);
  }
}


const apiKey = '1HD1xjEOxt9chDHft7Kej1ExNj3BAujGFiJkIt7q7';
const appId = 'com.gmail.yuriy_2edupyn.chat';
const name = Croquet.App.autoSession();
const password = Croquet.App.autoPassword();
name.then(name => {
  console.log("name ==", name);
});
password.then(pwd => {
  console.log("password ==", pwd);
});
Croquet.Session.join({ apiKey, appId, name, password, model: ChatModel, view: ChatView });

