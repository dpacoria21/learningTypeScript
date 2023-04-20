"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = '';
            this.team = '';
            this.realName = '';
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Ant-Man', 'Avengers', 'Tomas Jefferson');
    console.log(antman);
    console.log(antman.realName);
})();
//# sourceMappingURL=main.js.map