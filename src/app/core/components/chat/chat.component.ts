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
      const updatedMessageList: message[] = [];

      res.forEach((msg) => {
        const timestamp = msg['date']; // Assuming 'date' is a Firestore Timestamp

        // Convert Firestore Timestamp to JavaScript Date
        const date = new Date(
          timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000
        );

        msg['date'] = date; // Store the date object in the 'date' field for sorting
        updatedMessageList.push(<message>msg);
      });

      // Sort the messages by date in descending order (newest first)
      updatedMessageList.sort((a, b) => {
        const dateA: any = a['date'];
        const dateB: any = b['date'];

        return dateB.getTime() - dateA.getTime(); // Compare by milliseconds (including seconds)
      });

      // Now that the messages are sorted, format the date and time
      updatedMessageList.forEach((msg) => {
        const date: any = msg['date'];

        // Format the date as desired
        const formattedDate = `${date.getDate()}/${(date.getMonth() + 1)
          .toString()
          .padStart(2, '0')} ${date
          .getHours()
          .toString()
          .padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;

        msg['date'] = formattedDate;
      });

      this.messageList = updatedMessageList; // Update the messageList with the sorted and formatted messages
    });
  }

  // Scrollea hasta el ultimo msj asi se muestra.
  scrollToTheLastElement() {
    let elements = document.getElementsByClassName('msj');
    if (elements.length > 0) {
      let lastElement: any = elements[elements.length - elements.length + 1];
      let toppos = lastElement.offsetTop;

      let messageContainer = document.getElementById('message-container');

      if (messageContainer) {
        messageContainer.scrollTop = toppos;
      }
    }
  }
}
