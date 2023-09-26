import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  loggedUser: any;
  newMessage: string = '';
  showChat: boolean = false;

  messageList: any = [
    {
      sender: 'id',  // quien envia el msj.
      text: 'Te abro el site con p90',
      date: '23:13'
    },
    {
      sender: 'id2',
      text: 'Claramente no abriste site!',
      date: '04:20'
    },
    {
      sender: 'id3',
      text: 'Pasame tu wp tengo que hablar seriamente con vos',
      date: '04:20'
    }
  ];

  constructor( private authService : AuthService ) {}

  //TODO: Voy a tener quer cambiar la logica del uid por la de email.
  ngOnInit(): void {
    this.authService.getLoggedUser().subscribe(user => {
      this.loggedUser = user;
    });
  }

  sendMessage() {

    if( this.newMessage == '' ) return;

    let dateTime = new Date();

    let message = {
      sender: this.loggedUser.uid,
      text: this.newMessage,
      date: `${dateTime.getTime()}`,
    }

    this.messageList.push(message);

    this.newMessage = '';

    setTimeout(() => {
      this.scrollToTheLastElement();
    }, 10);
  }

  // Scrollea hasta el ultimo msj asi se muestra.
  scrollToTheLastElement() {
    let elements = document.getElementsByClassName('msj');
    let lastElement: any = elements[elements.length - 1];
    let toppos = lastElement.offsetTop;

    let messageContainer =  document.getElementById('message-container');

    messageContainer!.scrollTop = toppos;
  }
}
