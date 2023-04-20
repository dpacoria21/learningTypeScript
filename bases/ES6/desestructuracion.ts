(() => {

    type Avenger = {
        nick: string,
        ironman: string,
        vision: string,
        activo: boolean,
        poder: number
    }

    const avenger: Avenger = {
        nick: 'Samuel',
        ironman: 'Tony',
        vision: 'Paul',
        activo: true,
        poder: 500
    }

    const printAvenger = ({vision, ...rest}: Avenger) => {
        console.log({rest, vision});
    }

    printAvenger(avenger);

    // const {poder, vision} = avenger;

    // console.log(poder.toFixed(2), vision.toUpperCase());

})();   