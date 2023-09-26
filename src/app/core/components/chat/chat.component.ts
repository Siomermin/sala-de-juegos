import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { FirestoreService } from '../../services/firestore.service';

interface message {
  sender: string;
  email: string;
  text: string;
  date: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  loggedUser: any;

  newMessage: message = {
    sender: '',
    email: '',
    text: '',
    date: '',
  };

  showChat: boolean = false;

  message: string = '';

  messageList: message[] = [];

  constructor(
    private authService: AuthService,
    private firestore: FirestoreService
  ) {}

  //TODO: Voy a tener quer cambiar la logica del uid por la de email.
  ngOnInit(): void {
    this.authService.getLoggedUser().subscribe((user) => {
      this.loggedUser = user;
    });

    this.getMessages();
  }

  sendMessage() {
    if (this.message == '') return;

    let date = new Date();
    const timestamp = new Date(date);

    let message = {
      sender: this.loggedUser.uid,
      email: this.loggedUser.email,
      text: this.message,
      date: timestamp,
    };

    this.firestore.save(message, 'chat');

    setTimeout(() => {
      this.messageList = [];
      this.getMessages();
    }, 10);

    this.message = '';

    setTimeout(() => {
      this.scrollToTheLastElement();
    }, 10);
  }

  async getMessages() {
    const observable = this.firestore.get('chat');

    observable.subscribe((res) => {
      console.log(res);
      res.forEach((msg) => {
        if(this.messageList.indexOf(<message>msg) == -1)
        {
          this.messageList.push(<message>msg);
        }
      });
      this.messageList.sort(
        (a, b) => Number.parseInt(a.date) - Number.parseInt(b.date)
      );
    });
  }

  // Scrollea hasta el ultimo msj asi se muestra.
  scrollToTheLastElement() {
    let elements = document.getElementsByClassName('msj');
    let lastElement: any = elements[elements.length - 1];
    let toppos = lastElement.offsetTop;

    let messageContainer = document.getElementById('message-container');

    messageContainer!.scrollTop = toppos;
  }
}
