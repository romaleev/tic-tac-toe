import { createInterface } from 'readline/promises'
import { stdin as input, stdout as output } from 'process'
import TicTacToe, { Player } from './TicTacToe'
;(async () => {
	const ticTacToe = new TicTacToe()
	const rl = createInterface({ input, output })
	let player: Player

	console.log(ticTacToe.render())

	while ((player = ticTacToe.getNextPlayer())) {
		const position = parseInt(await rl.question(` ${player} = `))
		const result = ticTacToe.play(position)

		console.log(ticTacToe.render())
		result && console.log(result)
	}

	process.exit()
})()
