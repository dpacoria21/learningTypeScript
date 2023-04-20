(() => {
    class Avenger {
        // private name: string = '';
        // public team: string = '';
        // public realName: string = '';

        static avgAge: number = 35;
        static getAvgAge() {
            return Avenger.avgAge;
        }

        constructor(
            private name:string, 
            public team:string, 
            public realName:string
        ){
            
        }

        public bio() {
            return `${this.name} (${this.team})!!!`
        }

    }

    const antman: Avenger = new Avenger('Ant-Man', 'Avengers', 'Tomas Jefferson');
    console.log(antman);
    console.log(antman.realName);

    console.log(antman.bio());
    console.log(Avenger.getAvgAge());
    // console.log(Avenger.avgAge);
})();