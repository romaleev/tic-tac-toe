export type Player = 'x' | 'o' | ''

class TicTacToe {
	static readonly winningLines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]
	static readonly diagonal = 3
	static readonly size = Math.pow(TicTacToe.diagonal, 2)

	private readonly line = `\n${new Array(TicTacToe.diagonal).fill('---').join('+')}\n`
	private readonly state: string[] = Array.from({ length: TicTacToe.size }, (_, i) => String(i + 1))

	private stepCount = 0
	private player: Player = 'x'

	render(): string {
		let grid = ''
		for (let i = 0; i < TicTacToe.size; i += TicTacToe.diagonal) {
			const row = this.state.slice(i, i + TicTacToe.diagonal).join(' | ')
			grid += ` ${row}`
			if (i < TicTacToe.size - TicTacToe.diagonal) grid += this.line
		}
		return `\n${grid}`
	}

	getNextPlayer(): Player {
		return this.player
	}

	isWinner(): boolean {
		return TicTacToe.winningLines.some((line) => {
			const winningLineStates = line.map((i) => this.state[i])
			return winningLineStates.every((state) => state === winningLineStates[0])
		})
	}

	play(position: number): string {
		if (position < 1 || position > 9 || isNaN(position)) return 'Position should be 1-9'
		if (isNaN(parseInt(this.state[position - 1]))) return `Position ${position} is already taken`

		this.state[position - 1] = this.player
		this.stepCount++

		if (this.isWinner()) {
			const winner = this.player
			this.player = ''
			return `Winner is '${winner}'`
		}
		if (this.stepCount === TicTacToe.size) {
			this.player = ''
			return `It is a draw`
		} else this.player = this.player === 'x' ? 'o' : 'x'

		return ''
	}
}

export default TicTacToe
