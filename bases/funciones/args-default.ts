(() => {

    const fullName = (firstName:string, lastName?:string, upper: boolean = false): string => {

        if(upper) {
            return `${firstName} ${lastName || '----'}`.toUpperCase();
        }else {
            return `${firstName} ${lastName || '----'}`;
        }

    }

    // let noName: string = 'Tony';

    const name: string = fullName('Tony', 'Stark');

    console.log({name})
})();