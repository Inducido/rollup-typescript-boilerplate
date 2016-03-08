import { POSITION_MASK, VELOCITY_MASK } from './collection'

const sq = (a: number): number => a * a

interface Rect {
	x: number,
	y: number
}

const r: Rect = { x: 0, y: 10 }

console.log(r, POSITION_MASK, VELOCITY_MASK)
