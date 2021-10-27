import { Component, OnInit, ViewChild, EventEmitter, Input } from '@angular/core';
import { Events, Content, TextInput } from 'ionic-angular';
import { ChatService } from '../../services/chat-service';
import { ChatMessage } from '../../shared/chat-message';
import { User } from '../../shared/user';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chat-client',
  templateUrl: './chat-client.component.html',
  styleUrls: ['./chat-client.component.scss']
})
export class ChatClientComponent implements OnInit {
@Input() user: User;
  @Input() userTo: User;

  @ViewChild(Content) content: Content;
  @ViewChild('chat_input') messageInput: TextInput;
  msgList: ChatMessage[] = [];
  editorMsg = '';
  showEmojiPicker = false;

  constructor(public chatService: ChatService, public events: Events) {
  }

  ngOnInit() { }
}
