import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'starter-app',
    providers: [HTTP_PROVIDERS],
    templateUrl: 'src/app/students.html',
    directives: [],
    pipes: []
})

export class StarterApp {
    students: Object[];

    constructor() {
        this.init();
    }

    init() {
        this.students = [
            {name: 'Josh'},
            {name: 'Chris'},
            {name: 'Sarah'}];

        return this.students;
    }
}
