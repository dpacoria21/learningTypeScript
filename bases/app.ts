(() => {

    // Tipos
    const batman: string = 'Bruce';
    const superman: string = 'Clark';
  
    const existe: boolean = false;
  
    // Tuplas
    const parejaHeroes: [string, string] = [batman,superman];
    const villano: [string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones

    enum FuerzaLevel {
      acuaman = 0,
      flash = 5,
      superman = 100,
      batman = 1,
    }

    const fuerzaFlash: FuerzaLevel = FuerzaLevel.flash;
    const fuerzaSuperman: FuerzaLevel  = FuerzaLevel.superman;
    const fuerzaBatman: FuerzaLevel  = FuerzaLevel.batman;
    const fuerzaAcuaman: FuerzaLevel  = FuerzaLevel.acuaman;
  
    // Retorno de funciones
    function activar_batiseñal(): string{
      return 'activada';
    }
  
    function pedir_ayuda(): void{
      console.log('Auxilio!!!');
    }

    const arr:any = [1,2,3,4];
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    // const largoDelPoder:number = (<string>poder).length;
    console.log( largoDelPoder );
  
    enum enumeracion {
      a=10,
      b,
      c=9,
      d
    }

    console.log(enumeracion.d);


  })();


  
  