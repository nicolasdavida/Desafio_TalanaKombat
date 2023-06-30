type combinacion = {
    movimientos: string,
    golpe: string,
    energia: number,
    nombre: string
};

type secuencia = {
    movimientos: string[],
    golpes: string[]
};

export type secuenciaCompleta = {
    player1: secuencia,
    player2: secuencia
};

export type jugador = {
    puntos: number,
    nombre: string,
    apellido: string,
    combinacion: combinacion[],
    secuencia: secuencia | null
};

