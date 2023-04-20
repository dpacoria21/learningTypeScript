(() => {

    const fullName = (firstName:string, lastName?:string): string => {

        if(!firstName) {
            throw new Error('Nombre requerido');
        }

        return `${firstName} ${lastName || '----'}`;
    }

    // let noName: string = 'Tony';

    const name: string = fullName('Tony');

    console.log({name})
})();