export type Player = 'x' | 'o' | ''

class TicTacToe {
	protected winningLines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]
	protected diagonal = 3
	protected size = Math.pow(this.diagonal, 2)
	protected horizontalLine = `\n${new Array(this.diagonal).fill('---').join('+')}\n`
	protected verticalLine = ' | '
	protected state = Array.from({ length: this.size }, (_, i) => String(i + 1))

	private stepCount = 0
	private player: Player = 'x'

	render(): string {
		let grid = ''
		for (let i = 0; i < this.size; i += this.diagonal) {
			const row = this.state.slice(i, i + this.diagonal).join(this.verticalLine)
			grid += ` ${row}`
			if (i < this.size - this.diagonal) grid += this.horizontalLine
		}
		return `\n${grid}`
	}

	getNextPlayer(): Player {
		return this.player
	}

	isWinner(): boolean {
		return this.winningLines.some((line) => {
			const winningLineStates = line.map((i) => this.state[i])
			return winningLineStates.every((state) => state === winningLineStates[0])
		})
	}

	play(position: number): string {
		if (position < 1 || position > this.size || isNaN(position))
			return `Position should be 1-${this.size}`
		if (isNaN(parseInt(this.state[position - 1]))) return `Position ${position} is already taken`

		this.state[position - 1] = this.player
		this.stepCount++

		if (this.isWinner()) {
			const winner = this.player
			this.player = ''
			return `Winner is '${winner}'`
		}
		if (this.stepCount === this.size) {
			this.player = ''
			return `It is a draw`
		} else this.player = this.player === 'x' ? 'o' : 'x'

		return ''
	}
}

export default TicTacToe
