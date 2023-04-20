"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo Salvado!';
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
            return 'Conquistar el Mundo!';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
    console.log(wolverine.salvarMundo());
    console.log(magneto.conquistarMundo());
    const printName = (character) => {
        console.log(character.name);
    };
    printName(magneto);
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return Avenger.avgAge;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})!!!`;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Ant-Man', 'Avengers', 'Tomas Jefferson');
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        getFullNameXmen() {
        }
        get getExtendName() {
            return `${this.name} - ${this.realName}`;
        }
        set setName(newName) {
            if (newName.length <= 3)
                throw new Error('Nombre muy pequeno');
            this.name = newName;
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    wolverine.getFullNameXmen();
    wolverine.setName = 'Wolverine X';
})();
//# sourceMappingURL=main.js.map