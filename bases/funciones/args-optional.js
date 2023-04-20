"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        if (!firstName) {
            throw new Error('Nombre requerido');
        }
        return `${firstName} ${lastName || '----'}`;
    };
    // let noName: string = 'Tony';
    const name = fullName('Tony');
    console.log({ name });
})();
