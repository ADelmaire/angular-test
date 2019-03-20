import { Component } from '@angular/core';
import { Enseignant } from './Enseignant';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Hellooooooo!';
  s:string = 'Hello';

  numero:number = 125;

  afficherLaListe: boolean = true;

//enseignant
nom: string = 'Jane';
prenom:string = 'Jones';
dateNaissance:string = '1990-01-01';
dateEmbauche:string = '2019-02-02';
sexe:string='F';
grade:string = 'ASS';
photo:string = 'https://cdn3.iconfinder.com/data/icons/pretty-office-part-10-shadow-style/512/Teacher-female.png';


//enseignant objet
enseignant:Enseignant = {
  id:1,
  nom :'Tom',
  prenom:'Eric',
  numero:124563,
  dateEmbauche:'2008-01-02',
  dateNaissance:'1988-04-08',
  grade:'MCF',
  sexe:'M',
  photo:'https://d3iw72m71ie81c.cloudfront.net/gaurav.JPG'

};

enseignants:Enseignant[]=
[
  {
    id:1,
    nom :'Tom',
    prenom:'Eric',
    numero:124563,
    dateEmbauche:'2008-01-02',
    dateNaissance:'1988-04-08',
    grade:'MCF',
    sexe:'M',
    photo:'https://d3iw72m71ie81c.cloudfront.net/gaurav.JPG'
  
  },
  {
    id:1,
    nom :'Tom',
    prenom:'Eric',
    numero:124563,
    dateEmbauche:'2008-01-02',
    dateNaissance:'1988-04-08',
    grade:'MCF',
    sexe:'M',
    photo:'https://d3iw72m71ie81c.cloudfront.net/gaurav.JPG'
  
  },
  {
    id:1,
    nom :'Tom',
    prenom:'Eric',
    numero:124563,
    dateEmbauche:'2008-01-02',
    dateNaissance:'1988-04-08',
    grade:'MCF',
    sexe:'M',
    photo:'https://d3iw72m71ie81c.cloudfront.net/gaurav.JPG'
  
  },
  {
    id:1,
    nom :'Tom',
    prenom:'Eric',
    numero:124563,
    dateEmbauche:'2008-01-02',
    dateNaissance:'1988-04-08',
    grade:'MCF',
    sexe:'M',
    photo:'https://d3iw72m71ie81c.cloudfront.net/gaurav.JPG'
  
  }
];

}
