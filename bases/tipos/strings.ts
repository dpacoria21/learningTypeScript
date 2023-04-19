(() => {
    const batman: string = 'Batman';
    const linternaVerde: string = "Linterna's Verde";
    const volcanNegro: string = `Heroe: Volcan Negro`;

    // const abc: number = 123;

    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());

    console.log(batman[10]?.toUpperCase() || 'No esta presente');
    // ? si existe que aplique el metodo, si no, retorna undefined

})();