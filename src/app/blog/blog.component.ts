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
    title: 'Procédure Campus France : Guide complet pour étudier en France',
    date: new Date('2025-08-30'),
    image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'Mootaz Hammami',
    category: 'étudier en France',
    content: `
<p>Chaque année, des milliers d’étudiants tunisiens et nord-africains choisissent la France
comme destination d’études supérieures. Ce choix s’explique par plusieurs raisons. La
proximité géographique facilite les déplacements et les liens familiaux, tandis que les frais
d’inscription dans les universités publiques françaises restent relativement abordables par
rapport à d’autres pays européens. De plus, la maîtrise de la langue française par la majorité
des étudiants de la région représente un atout considérable pour réussir rapidement son
intégration académique. Enfin, la France offre de réelles opportunités professionnelles après
l’obtention du diplôme, ce qui en fait une destination très convoitée.</p>

<p>Cependant, il faut être conscient que l’admission dans une université publique française
n’est jamais garantie. Les titulaires du baccalauréat local, par exemple, rencontrent plus de
difficultés à être acceptés que les étudiants disposant d’un bac français. Cette situation est
principalement liée au nombre limité de places et à la forte demande, ce qui rend la
procédure Campus France particulièrement compétitive.</p>

<h3>Comprendre la procédure Campus France</h3>
<p>La procédure Campus France est le parcours officiel à suivre pour intégrer une université
publique en France depuis la Tunisie ou d’autres pays du Maghreb. Elle s’ouvre chaque
année à partir du 1er octobre et comporte plusieurs étapes essentielles :</p>
<ul>
  <li>Prouver son niveau de français (TCF, DELF, DALF)</li>
  <li>Faire traduire ses diplômes et relevés de notes</li>
  <li>Créer un compte sur la plateforme Campus France</li>
  <li>Choisir ses universités et programmes</li>
  <li>Passer l’entretien Campus France</li>
  <li>Attendre les réponses des universités</li>
  <li>Demander le visa étudiant</li>
</ul>

<h3>Université publique ou université privée en France ?</h3>
<p>Beaucoup d’étudiants visent prioritairement les universités publiques, car elles sont réputées
pour la qualité de leur enseignement et leurs frais de scolarité réduits. Cependant, il faut
garder à l’esprit que la procédure est très compétitive et que l’admission reste incertaine.</p>

<p>Face à ces difficultés, les universités privées et les écoles de commerce apparaissent
comme une alternative crédible. Elles offrent un accès plus facile, une grande diversité de
formations modernes et des programmes conçus pour favoriser l’insertion professionnelle.</p>

<h3>L’accompagnement Eduhelper</h3>
<p>Choisir entre une université publique via la procédure Campus France ou une université
privée en France n’est pas toujours évident. C’est pourquoi de nombreux étudiants se
tournent vers des agences spécialisées. Eduhelper fait partie des acteurs majeurs de ce
domaine et accompagne les candidats tout au long de leur parcours.</p>

<p>De la préparation des documents à la sélection des universités, en passant par le suivi de la
procédure Campus France, la demande de visa ou encore la recherche de logement étudiant,
Eduhelper assure un accompagnement complet, du début à la fin.</p>

<h3>Conclusion</h3>
<p>Étudier en France reste une ambition forte pour de nombreux étudiants tunisiens et
nord-africains. Toutefois, il est essentiel de bien comprendre la procédure Campus France
et d’être conscient de sa compétitivité.</p>

<p>Si les universités publiques apparaissent comme une option abordable, elles ne garantissent
pas une admission. Les universités privées et les écoles de commerce représentent alors une
alternative sérieuse et de qualité, offrant plus de flexibilité et des perspectives
professionnelles intéressantes.</p>

<p>Avec un accompagnement comme celui d’Eduhelper, les étudiants peuvent avancer avec
confiance et clarté dans leurs démarches, que ce soit pour intégrer une université publique
ou un établissement privé.</p>
    `
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