import { Component, OnInit, Input } from '@angular/core';
import { Site } from './models/site';

@Component({
  selector: 'site-parent',
  template: `
    <h1>{{siteName}}</h1>
    <h2>E-COMMERCES = {{sites.length}}</h2>
    <site-child *ngFor="let site of sites" [site]="site" (onDispatch)="onDispatch($event)">
    </site-child>    
  `
})
export class SiteParentComponent implements OnInit  {
  sites : Array<Site> = [];  
  siteName : string = '';

  private populate() : void {
    var pontoFrio = new Site();
    pontoFrio.name = "Ponto Frio";
    pontoFrio.description = "Encontre tudo o que você deseja no Pontofrio.com. Eletrodomésticos, eletrônicos, smartphones, notebooks e muito mais para você!";
    this.sites.push(pontoFrio);

    var extra = new Site();
    extra.name = "Extra";
    extra.description = "Leve uma vida mais família no Extra.com.br. Móveis, eletrônicos, celulares, notebooks e tudo o que você precisa para estar e se conectar com quem você ama.";  
    this.sites.push(extra);

    var casasBahia = new Site();
    casasBahia.name = "Casas Bahia";
    casasBahia.description = "Encontre tudo que você precisa com segurança na Casas Bahia. Compre em até 10x sem juros no cartão e aproveite descontos exclusivos. Confira!";  
    this.sites.push(casasBahia);
  }

  ngOnInit(): void {
    this.populate();
  } 

  onDispatch(site: Site) {
    this.siteName = site.name;
  }
}