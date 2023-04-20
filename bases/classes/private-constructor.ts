(() => {

    class Apocalipsis {

        static instance: Apocalipsis;

        private constructor(
            public name:string
        ) {

        }

        static callApocalipsis(): Apocalipsis {
            
            if(!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy el unico');
            }

            return Apocalipsis.instance;
        }

        changeName(newName: string) {
            this.name = newName;
        }

    }

    // const apocalipsis = new Apocalipsis('Soy Apocalipsis');
    // const apocalipsis2 = new Apocalipsis('Soy Apocalipsis');
    // const apocalipsis3 = new Apocalipsis('Soy Apocalipsis');
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    apocalipsis1.changeName('Cambio ahora!!!')
    console.log(apocalipsis1, apocalipsis2, apocalipsis3);

})();