(() => {

    let flash: {name: string, age: number, powers: string[]} = {
        name: 'Barry Alen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
        getNombre() {
            return this.name;
        }
    };

    flash = {
        name: 'Clark Ken',
        age: 60,
        powers: ['Super fuerza'],
        // getNombre() {
        //      return this.name;
        // }
    }

    console.log(flash);

})();