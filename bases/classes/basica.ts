(() => {
    class Avenger {
        // private name: string = '';
        // public team: string = '';
        // public realName: string = '';

        static avgAge: number = 35;

        constructor(private name:string, public team:string, public realName:string) {
            
        }

    }

    const antman: Avenger = new Avenger('Ant-Man', 'Avengers', 'Tomas Jefferson');
    console.log(antman);
    console.log(antman.realName);
    // console.log(Avenger.avgAge);
})();