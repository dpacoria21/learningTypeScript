"use strict";
(() => {
    let flash = {
        name: 'Barry Alen',
        age: 24,
        powers: [1, 2],
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        constructor(name, realName, age) {
            this.name = name;
            this.realName = realName;
            this.age = age;
        }
        mutantPower(id) {
            return `${this.name} ${this.realName}`;
        }
    }
})();
(() => {
    const client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 255,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
        address: {
            id: 256,
            zip: 'ksu Otap',
            city: 'Peru'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
})();
//# sourceMappingURL=main.js.map