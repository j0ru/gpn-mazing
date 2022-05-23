import { MazeServer } from "./MazeServer"

const GAME_PORT = parseInt(process.env.GAME_PORT || '') || 4000
const VIEW_PORT = parseInt(process.env.VIEW_PORT || '') || 5005

const mazeServer = new MazeServer(GAME_PORT, VIEW_PORT)

console.log('Maze server started on port:', GAME_PORT)
console.log('View server started on port:', VIEW_PORT)
