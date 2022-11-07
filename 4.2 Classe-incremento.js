classe  pessoa  {
    _nome
    _idade
    _peso
    _altura
    _imc
    static  totalPessoas  =  0


    construtor ( nome ,  idade ,  peso ,  altura ) {
        isso . _nome  =  nome
        isso . _idade  =  idade
        isso . _peso  =  peso
        isso . _altura  =  altura
        isso . _imc  =  isso . _peso  /  ( this . _altura  *  this . _altura )
        pessoa . totalPessoas  +=  1
    }

    obter  nome ( ) {
        devolva  isso . _nome 
    }

    obter  idade ( ) {
        devolva  isso . _idade
    }

    obter  peso ( ) {
        devolva  isso . _peso
    }
    
    obter  altura ( ) {
        devolva  isso . _altura
    }

    obter  imc ( ) {
        devolva  isso . _imc
    }



}



deixe  pessoa1  =  nova  pessoa ( 'Jadley' ,  23 ,  73 ,  1.62 )
deixe  pessoa2  =  nova  pessoa ( 'Jmaria' ,  26 ,  83 ,  1.92 )
deixe  pessoa3  =  nova  pessoa ( 'joao' ,  29 ,  63 ,  1.72 )
deixe  pessoa4  =  nova  pessoa ( 'miro' ,  38 ,  53 ,  1.52 )

consola . log ( 'numero de pessoas: '  +  pessoa . totalPessoas )

consola . log ( '\nnome: '  +  pessoa1 . nome )
consola . log ( 'idade:'  +  pessoa1 . idade )
consola . log ( 'peso:'  +  pessoa1 . peso )
consola . log ( 'altura: '  +  pessoa1 . altura )
consola . log ( 'Imc: '  +  pessoa1 . imc  +  '\n' )

consola . log ( '\nnome: '  +  pessoa2 . nome )
consola . log ( 'idade: '  +  pessoa2 . idade )
consola . log ( 'peso: '  +  pessoa2 . peso )
consola . log ( 'altura: '  +  pessoa2 . altura )
consola . log ( 'Imc: '  +  pessoa2 . imc  +  '\n' )

consola . log ( '\nnome: '  +  pessoa3 . nome )
consola . log ( 'idade: '  +  pessoa3 . idade )
consola . log ( 'peso: '  +  pessoa3 . peso )
consola . log ( 'altura: '  +  pessoa3 . altura )
consola . log ( 'Imc: '  +  pessoa3 . imc  +  '\n' )

consola . log ( '\nnome: '  +  pessoa4 . nome )
consola . log ( 'idade: '  +  pessoa4 . idade )
consola . log ( 'peso: '  +  pessoa4 . peso )
consola . log ( 'altura: '  +  pessoa4 . altura )
consola . log ( 'Imc: '  +  pessoa4 . imc  +  '\n' )
