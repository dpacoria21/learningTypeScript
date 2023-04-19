"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let FuerzaLevel;
    (function (FuerzaLevel) {
        FuerzaLevel[FuerzaLevel["acuaman"] = 0] = "acuaman";
        FuerzaLevel[FuerzaLevel["flash"] = 5] = "flash";
        FuerzaLevel[FuerzaLevel["superman"] = 100] = "superman";
        FuerzaLevel[FuerzaLevel["batman"] = 1] = "batman";
    })(FuerzaLevel || (FuerzaLevel = {}));
    const fuerzaFlash = FuerzaLevel.flash;
    const fuerzaSuperman = FuerzaLevel.superman;
    const fuerzaBatman = FuerzaLevel.batman;
    const fuerzaAcuaman = FuerzaLevel.acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const arr = [1, 2, 3, 4];
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    // const largoDelPoder:number = (<string>poder).length;
    console.log(largoDelPoder);
    let enumeracion;
    (function (enumeracion) {
        enumeracion[enumeracion["a"] = 10] = "a";
        enumeracion[enumeracion["b"] = 11] = "b";
        enumeracion[enumeracion["c"] = 9] = "c";
        enumeracion[enumeracion["d"] = 10] = "d";
    })(enumeracion || (enumeracion = {}));
    console.log(enumeracion.d);
})();
