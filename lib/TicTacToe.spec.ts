import TicTacToe from './TicTacToe'

describe('TicTacToe tests', () => {
	let ticTacToe: TicTacToe

	beforeEach(() => {
		// jest.resetModules();
		ticTacToe = new TicTacToe()
	})

	it('render', () => {
		expect(ticTacToe.render()).toEqual(`
 1 | 2 | 3
---+---+---
 4 | 5 | 6
---+---+---
 7 | 8 | 9`)

		ticTacToe.play(1)
		ticTacToe.play(2)
		ticTacToe.play(3)
		ticTacToe.play(4)
		ticTacToe.play(5)
		ticTacToe.play(6)

		expect(ticTacToe.render()).toEqual(`
 x | o | x
---+---+---
 o | x | o
---+---+---
 7 | 8 | 9`)
	})

	it('getNextPlayer', () => {
		expect(ticTacToe.getNextPlayer()).toEqual('x')

		ticTacToe.play(1)
		expect(ticTacToe.getNextPlayer()).toEqual('o')

		ticTacToe.play(2)
		ticTacToe.play(3)
		ticTacToe.play(4)
		ticTacToe.play(5)
		ticTacToe.play(6)
		ticTacToe.play(7)
		expect(ticTacToe.getNextPlayer()).toEqual('')
	})

	it('isWinner', () => {
		expect(ticTacToe.isWinner()).toBeFalsy()

		ticTacToe.play(1)
		ticTacToe.play(2)
		ticTacToe.play(3)
		ticTacToe.play(4)
		ticTacToe.play(5)
		ticTacToe.play(6)
		ticTacToe.play(7)

		expect(ticTacToe.isWinner()).toBeTruthy()
	})

	it('play validation', () => {
		expect(ticTacToe.play(0)).toEqual('Position should be 1-9')
		expect(ticTacToe.play(1)).toBeFalsy()
		expect(ticTacToe.play(1)).toEqual('Position 1 is already taken')
		expect(ticTacToe.play(2)).toBeFalsy()
		expect(ticTacToe.play(3)).toBeFalsy()
		expect(ticTacToe.play(4)).toBeFalsy()
		expect(ticTacToe.play(5)).toBeFalsy()
		expect(ticTacToe.play(6)).toBeFalsy()
		expect(ticTacToe.play(7)).toEqual("Winner is 'x'")
	})

	it('play x wins', () => {
		ticTacToe.play(1)
		ticTacToe.play(2)
		ticTacToe.play(3)
		ticTacToe.play(4)
		ticTacToe.play(5)
		ticTacToe.play(6)
		expect(ticTacToe.play(7)).toEqual("Winner is 'x'")
	})

	it('play o wins', () => {
		ticTacToe.play(4)
		ticTacToe.play(1)
		ticTacToe.play(5)
		ticTacToe.play(2)
		ticTacToe.play(7)
		expect(ticTacToe.play(3)).toEqual("Winner is 'o'")
	})

	it('play draw', () => {
		ticTacToe.play(1)
		ticTacToe.play(4)
		ticTacToe.play(2)
		ticTacToe.play(3)
		ticTacToe.play(5)
		ticTacToe.play(8)
		ticTacToe.play(6)
		ticTacToe.play(9)
		expect(ticTacToe.play(7)).toEqual('It is a draw')
	})
})
