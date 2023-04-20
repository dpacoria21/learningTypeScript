(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ) {
            // console.log('Constructor Avenger llamado!!!');
        }

        protected getFullName(): string {
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger {

        constructor(
            name: string,
            realName: string,
            public isMutant: boolean,
        ) {
            super(name, realName);
            // console.log('Constructor Xmen llamado!!!');
        }

        getFullNameXmen() {
            // console.log( super.getFullName() );
        }

        get getExtendName() {
            return `${this.name} - ${this.realName}`;
        }

        set setName(newName: string) {

            if(newName.length <= 3) throw new Error('Nombre muy pequeno');
            this.name = newName;
        }

    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);
    // console.log(wolverine);
    wolverine.getFullNameXmen();
    // console.log(wolverine.getExtendName);

    wolverine.setName = 'Wolverine X';
    // console.log(wolverine);

})();