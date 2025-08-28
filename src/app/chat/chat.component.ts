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
      question: 'How can you help me with university applications?',
      answer: 'We provide comprehensive support for university applications including document preparation, application submission, and guidance throughout the entire process. Our team has helped over 500 students successfully apply to top international universities.'
    },
    {
      id: 'visa-process',
      question: 'What is the visa application process?',
      answer: 'Our visa procedure service includes document verification, application form completion, interview preparation, and follow-up with embassies. We have a 95% success rate and handle all visa types for students.'
    },
    {
      id: 'scholarships',
      question: 'Do you help with scholarship applications?',
      answer: 'Yes! We provide scholarship guidance including identifying suitable opportunities, application assistance, and essay writing support. We have helped students secure over $2M in scholarships across various programs.'
    },
    {
      id: 'housing',
      question: 'Can you help me find accommodation abroad?',
      answer: 'Absolutely! Our housing search service includes finding suitable accommodation, lease negotiations, and ensuring safe, comfortable living arrangements near your university. We work with trusted partners worldwide.'
    },
    {
      id: 'costs',
      question: 'What are your service fees?',
      answer: 'Our fees vary depending on the services you need. We offer flexible packages and payment plans. Contact us for a personalized quote based on your specific requirements. Initial consultation is always free!'
    }
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