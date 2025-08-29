import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ChatMessage {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface PredefinedQuestion {
  id: string;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  isOpen = false;
  messages: ChatMessage[] = [];
  isTyping = false;
  showQuestions = false;

  predefinedQuestions: PredefinedQuestion[] = [
    {
      id: 'university-application',
      question: 'How can I go study abroad without compte bloqué?',
      answer: 'there are destinations like Dubai, Turkey, and Malta that don’t require a compte bloqué. We can guide you and help you apply to universities in these countries.'
    },
    {
      id: 'visa-process',
      question: 'How much should I have to study abroad?',
      answer: 'It depends on the destination, but you should plan for at least 25,000 TND for the first year to cover tuition, housing, and living expenses.'
    },
    {
      id: 'scholarships',
      question: ' Is the visa guaranteed?',
      answer: 'No agency or university can guarantee a visa. Visa decisions are made only by the consulate authorities. We prepare and guide you, but the final decision rests with them.'
    },
    {
      id: 'housing',
      question: 'How do you help students?',
      answer: 'We support students in every step: 1) Choosing the right university and program 2) Preparing applications 3) Assisting with visa procedures 4) Helping with housing and settling abroad'
    },
  ];

  toggleChat() {
    this.isOpen = !this.isOpen;
    if (this.isOpen && this.messages.length === 0) {
      this.addWelcomeMessage();
    }
  }

  addWelcomeMessage() {
    setTimeout(() => {
      this.messages.push({
        text: 'Hello! 👋 I\'m here to help you with your international education journey. Please select a question below:',
        isUser: false,
        timestamp: new Date()
      });
      this.showQuestions = true;
    }, 500);
  }

  selectQuestion(question: PredefinedQuestion) {
    // Add user question
    this.messages.push({
      text: question.question,
      isUser: true,
      timestamp: new Date()
    });

    this.showQuestions = false;
    this.isTyping = true;

    // Simulate AI typing delay
    setTimeout(() => {
      this.isTyping = false;
      this.messages.push({
        text: question.answer,
        isUser: false,
        timestamp: new Date()
      });

      // Don't show questions automatically - user needs to click button
    }, 2000);
  }

  showQuestionsMenu() {
    this.showQuestions = true;
  }

  clearChat() {
    this.messages = [];
    this.showQuestions = true;
    this.addWelcomeMessage();
  }
}