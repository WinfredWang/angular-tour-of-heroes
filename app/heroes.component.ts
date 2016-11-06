import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './Hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit {
    title = 'Tour of Heroes';
    selectedHero: Hero;
    heroes: Hero[];

    constructor(private heroService: HeroService, private route: Router) {
    }
    ngOnInit(): void {
        this.getHeroes();
    }
    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(hero: Hero): void {
        this.route.navigate(['/detail', this.selectedHero.id]);
    }
}
