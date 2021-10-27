import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatClientComponent } from './chat-client.component';

import { ChatService } from '../../services/chat-service';
import { RelativeTime } from '../../pipes/relative-time';
import { EmojiPickerComponentModule } from '../../components/emoji-picker/emoji-picker.module';
import { EmojiService } from '../../services/emoji';

@NgModule({
  imports: [
    CommonModule,
    EmojiPickerComponentModule,
  ],
  declarations: [
    ChatClientComponent,
    RelativeTime
  ],
  exports: [
    ChatClientComponent
  ],
  providers: [
    ChatService,
    EmojiService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChatClientModule { }
