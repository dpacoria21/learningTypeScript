(() => {

    const numbers: number[] = [1,2,3,4,5,6];
    const villians: string[] = ['Omega Rojo', 'Dormamu', 'Duende Verde'];
    villians.forEach( v => {
        console.log(v.toUpperCase());
    });

    numbers.forEach((v) => console.log(v));

    // const numbers: (string | number | boolean)[] = [1,2,3,4,5,'6',7,8,9,10];

    // numbers.push(true);  
    // numbers.push(11);

    // console.log(numbers);
})();