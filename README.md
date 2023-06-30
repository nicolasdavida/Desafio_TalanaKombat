# Desafío TalanaKombat

Desafío TalanaKombat is a TypeScript game for Talana.

## Installation

Install [NodeJS](https://nodejs.org/es/)

```bash
npm install
```

## Usage

Edit **index.ts** file and update **secuencia** constant:

```typescript
const secuencia: secuenciaCompleta = {"player1":{"movimientos":["D","DSD","S","DSD","SD"],"golpes":["K","P","P","K","P"]},"player2":{"movimientos":["SA","SA","SA","ASA","SA"],"golpes":["K","","K","P","P"]}}
//const secuencia: secuenciaCompleta = {"player1":{"movimientos":["SDD", "DSD", "SA", "DSD"] ,"golpes":["K", "P", "K", "P"]},"player2":{"movimientos":["DSD", "WSAW", "ASA", "", "ASA", "SA"],"golpes":["P", "K", "K", "K", "P", "k"]}}
//const secuencia: secuenciaCompleta = {"player1":{"movimientos":["DSD", "S"] ,"golpes":[ "P", ""]}, "player2":{"movimientos":["", "ASA", "DA", "AAA", "", "SA"],"golpes":["P", "", "P", "K", "K", "K"]}}

const juego: TalanaKombat = new TalanaKombat(secuencia1)
juego.jugar()
```

## Run

```bash
npm run start
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
Nicolás David
[MIT](https://choosealicense.com/licenses/mit/)