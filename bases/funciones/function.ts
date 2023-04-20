(() => {
    const hero: string = 'Flash';

    function returnName(): string {
        return hero;
    }

    const activateBatisignal = (): string => {
        return 'Batisenal Activa!';
    }

    console.log(typeof(activateBatisignal));

    const heroName: string = returnName();

    console.log(heroName);

})();