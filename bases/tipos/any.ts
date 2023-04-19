(() => {
    let avenger: any = 123;
    let exists;
    let power;

    avenger = 'Dr Strange';
    console.log( (avenger as string).charAt(0));

    //Casteo en TS (variable as ...(number,string,boolean,etc))

    avenger = 124.123432;
    console.log(<number>avenger.toFixed(2));

    //Otra forma de castear es con <number>variable

    console.log(exists);
    console.log(power);
})()