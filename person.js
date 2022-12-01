class Person {
    #firstName;
    #lastName;
    gender;
    #age;

        constructor(firstName, lastName, gender, age) {                       //moze da ima ulazne parametre a i ne mora.
               this.#firstName = firstName;                          //# znaci private
               this.#lastName = lastName;
               this.gender = gender;
               this.#age = age;
    }

    getfullName() {                                       // ako vracamo neku vrednost onda je get, ako je postavljamo onda je set
       return this.#firstName + ' ' + this.#lastName;  // metod
    }

    getAge() {
        return this.#age = age;
    }

    setFirstName(firstName) {
        this.#firstName = firstName;
    }

    getAge(age) {
        if (age < 1 || age > 99 ) {
            return;
        }

          this.#age = age;
    }
}

let person1 = new Person('Petar', 'Petrovic', 'M', 20);
console.log(person1); 
person1.setFirstName('Jovan');
person1.setAge(-10);
console.log(person1.getAge());
person1.setAge(10);
console.log(person1.getAge());
console.log(person1.getfullName());
person1.gender= 'Z';
console.log(person1.gender);
