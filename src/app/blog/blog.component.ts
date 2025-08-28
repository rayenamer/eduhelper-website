import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface BlogPost {
  id: number;
  title: string;
  date: Date;
  image?: string;
  content: string;
  author: string;
  category: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Your Complete Guide to University Applications in 2024',
      date: new Date('2024-01-15'),
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Sarah Johnson',
      category: 'University Applications',
      content: `Applying to universities can feel overwhelming, but starting early and staying organized makes a big difference. Research programs, craft a clear personal statement, and ask strong recommenders. Prepare for tests if needed and plan finances with scholarships, grants, or loans. Proofread, follow instructions, and submit early. Most importantly, choose a university that fits your goals and growth.`
    },
    {
      id: 2,
      title: 'Navigating Student Visa Requirements: A Step-by-Step Guide',
      date: new Date('2024-01-10'),
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Michael Chen',
      category: 'Visa Procedures',
      content: `Getting a student visa is key to studying abroad. Each country has its own rules, but most require a valid passport, an acceptance letter, financial proof, transcripts, and language scores. Apply early, double-check documents, and prepare for interviews. After approval, know your visa conditions and maintain full-time study to keep it valid. Always check official government sites for updates.`
    },
    {
      id: 3,
      title: 'Scholarship Opportunities: Funding Your International Education',
      date: new Date('2024-01-05'),
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Emily Rodriguez',
      category: 'Scholarships',
      content: `Studying abroad can be costly, but scholarships help. They can be merit-based, need-based, country-specific, or field-specific. Search online databases, university financial aid offices, and organizations. For applications, write a strong personal statement, secure solid recommendations, and apply early. Even small scholarships add up. Stay persistent, and you can make your education more affordable.`
    }
  ];

  constructor() {}

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}