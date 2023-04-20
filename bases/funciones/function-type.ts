(() => {
    const addNumber = (a: number, b: number) => a+b;
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvo`;

    let myFunction: () => string;
    // Function para aceptar cualquier funcion
    // (a:number, b:number) => number para especificar para una funcion
    // (y: string) => string

    //! myFunction = 10; error
    //! console.log(myFunction);

    //! myFunction = addNumber;
    //! console.log(myFunction(5,6));

    // myFunction = greet;
    // console.log(myFunction('Diego'));

    myFunction = saveTheWorld;
    console.log(myFunction());

})();