import { PersonClass } from './models/person.class';
import { PersonInterface } from './models/person.interface';
import { Person } from './models/person';
import { ApplicationUser } from './models/application-user';

export class App {
  run(): void {
    const person1 = <PersonInterface>{
      name: 'name'
    };
    console.log(person1);

    const person2 = new PersonClass();
    console.log(person2);
    console.log(person2.name);
    person2.name = 'name';
    console.log(person2);

    const person3 = new Person('name');
    console.log(person3);
    person3.name = 'aaa';
    console.log(person3);

    const user = new ApplicationUser('changhxu');
    console.log(user);
  }
}
