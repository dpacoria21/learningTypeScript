(() => {
    let avengers:number = 10;
    console.log(avengers);

    const villians:number = 20;
    if(avengers < villians) {
        console.log('Estamos en problemas');
    }else {
        console.log('Estamos salvados');
    }

    avengers = Number('55A');
    // NaN Not a Number es considerado un numero


    console.log({avengers});

})();