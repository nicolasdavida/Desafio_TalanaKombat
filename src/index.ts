
import { secuenciaCompleta, jugador } from './types/jugadores';

class TalanaKombat {
    private puntosEnergia: number
    private secuencia: secuenciaCompleta
    private jugadores: jugador[]

    constructor(secuencia: secuenciaCompleta) {
        this.puntosEnergia = 6
        this.secuencia = secuencia
        this.jugadores = [
            {
                puntos: this.puntosEnergia,
                nombre: 'Tonyn',
                apellido: 'Stallone',
                combinacion: [
                    {
                        movimientos: 'DSD',
                        golpe: 'P',
                        energia: 3,
                        nombre: 'Taladoken'
                    },
                    {
                        movimientos: 'SD',
                        golpe: 'K',
                        energia: 2,
                        nombre: 'Remuyuken'
                    },
                    {
                        movimientos: '',
                        golpe: 'P',
                        energia: 1,
                        nombre: 'Puño'
                    },
                    {
                        movimientos: '',
                        golpe: 'K',
                        energia: 1,
                        nombre: 'Patada'
                    },
                ],
                secuencia: null
            },
            {
                puntos: this.puntosEnergia,
                nombre: 'Arnaldor',
                apellido: 'Shuatseneguer',
                combinacion: [
                    {
                        movimientos: 'SA',
                        golpe: 'K',
                        energia: 3,
                        nombre: 'Remuyuken'
                    },
                    {
                        movimientos: 'ASA',
                        golpe: 'P',
                        energia: 2,
                        nombre: 'Taladoken'
                    },
                    {
                        movimientos: '',
                        golpe: 'P',
                        energia: 1,
                        nombre: 'Puño'
                    },
                    {
                        movimientos: '',
                        golpe: 'K',
                        energia: 1,
                        nombre: 'Patada'
                    },
                ],
                secuencia: null
            }
        ]
    }
    
    quienParte(secuencia: any) {
        let p1 = secuencia.player1.movimientos[0].length + secuencia.player1.golpes[0].length
        let p2 = secuencia.player2.movimientos[0].length + secuencia.player2.golpes[0].length
        if(p1<p2) return 0
        if(p2<p1) return 1
        p1 = secuencia.player1.movimientos[0].length
        p2 = secuencia.player2.movimientos[0].length
        if(p1<p2) return 0
        if(p2<p1) return 1
        p1 = secuencia.player1.golpes[0].length
        p2 = secuencia.player2.golpes[0].length
        if(p1<p2) return 0
        if(p2<p1) return 1
        return 0
    }

    realizaJugada(jugador1: jugador, jugador2: jugador) {
        let movimiento = jugador1.secuencia?.movimientos[0]
        let golpe = jugador1.secuencia?.golpes[0]
        jugador1.secuencia?.movimientos.splice(0,1)
        jugador1.secuencia?.golpes.splice(0,1)
    
        let pego = false
        jugador1.combinacion.forEach((c: any) => {
            if(!pego && c.movimientos != '' && movimiento?.endsWith(c.movimientos) && golpe == c.golpe) {
                jugador2.puntos = jugador2.puntos - c.energia
                console.log(jugador1.nombre + ' conecta un ' + c.nombre)
                pego = true
            } else if(!pego && c.movimientos == '' && golpe == c.golpe) {
                jugador2.puntos = jugador2.puntos - c.energia
                console.log(jugador1.nombre + ' le da ' + c.nombre + ' a ' + jugador2.nombre)
                pego = true
            }
        });
        if(!pego) {
            console.log(jugador1.nombre + ' se mueve')
        }
    
        if(jugador2.puntos <= 0) {
            console.log(jugador1.nombre + ' gana la pelea y aun le queda ' + jugador1.puntos + ' de energía')
        } else {
            this.realizaJugada(jugador2, jugador1)
        }
    
    }

    jugar() {
        const primero = this.quienParte(this.secuencia)
        const segundo = primero==0?1:0

        this.jugadores[0].secuencia = this.secuencia.player1
        this.jugadores[1].secuencia = this.secuencia.player2
        
        this.realizaJugada(this.jugadores[primero], this.jugadores[segundo])
    }
}

const secuencia: secuenciaCompleta = {"player1":{"movimientos":["D","DSD","S","DSD","SD"],"golpes":["K","P","P","K","P"]},"player2":{"movimientos":["SA","SA","SA","ASA","SA"],"golpes":["K","","K","P","P"]}}
//const secuencia: secuenciaCompleta = {"player1":{"movimientos":["SDD", "DSD", "SA", "DSD"] ,"golpes":["K", "P", "K", "P"]},"player2":{"movimientos":["DSD", "WSAW", "ASA", "", "ASA", "SA"],"golpes":["P", "K", "K", "K", "P", "k"]}}
//const secuencia: secuenciaCompleta = {"player1":{"movimientos":["DSD", "S"] ,"golpes":[ "P", ""]}, "player2":{"movimientos":["", "ASA", "DA", "AAA", "", "SA"],"golpes":["P", "", "P", "K", "K", "K"]}}

const juego: TalanaKombat = new TalanaKombat(secuencia)
juego.jugar()
