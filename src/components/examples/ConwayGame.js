const minToLive = 2
const maxToLive = 3
const numToBirth = 3

class Game {
  constructor () {
    this.minToLive = 2
    this.maxToLive = 3
    this.numToBirth = 3
  }
}


function getGeneration(cells, generations){
  let universe = new Universe(cells)
  universe.show();
  for (let g = 0; g < generations; g++) {
    universe = universe.nextGen()
    universe.show()
  }
  return universe.toArray()
}

class Cell {
  constructor (x,y,alive) {
    this.x = x
    this.y = y
    this.alive = alive
  }
  show () {
    return this.y+'/'+this.x+':'+this.alive
  }
}

function testAndCompare (a, b, compareFunc) {
  return a || a === 0
    ? b || b === 0
      ? compareFunc(a, b)
        ? a
        : b
      : a
    : b || b === 0
      ? b
      : undefined
}

function maxOf (a, b) {
  return testAndCompare(a, b, (a,b) => a>b)
}
function minOf (a, b) {
  return testAndCompare(a, b, (a,b) => a<b)
}

class Universe {
  constructor (arg) {
    this.livingCells = []

    if (arg instanceof Universe) {
      for (let cell of arg.livingCells) {
        this.addCell(cell)
      }
    }

    else if (arg && arg.length && arg[0].length) {
      for (let y = 0; y < arg.length; y++) {
        for (let x = 0; x < arg[y].length; x++) {
          this.addCell(new Cell(x, y, arg[y][x]))
        }
      }
    }
  } // constructor

  show () {
    console.log(htmlize(this.toArray()))
  }

  getStats () {
    let stats = {}
    for (let cell of this.livingCells) {
      stats.maxX = maxOf(stats.maxX, cell.x)
      stats.maxY = maxOf(stats.maxY, cell.y)
      stats.minX = minOf(stats.minX, cell.x)
      stats.minY = minOf(stats.minY, cell.y)
    }
    return stats
  }

  toArray () {
    let array = []
    let stats = this.getStats()
    for (let y = stats.minY; y <= stats.maxY; y++) {
      let row = []
      for (let x = stats.minX; x <= stats.maxX; x++) {
        row.push(this.getCell(x, y).alive)
      }
      array.push(row)
    }
    return array
  }

  addCell (cell) {
    this.livingCells.push(cell)
  }

  getCell (x, y) {
    let matches = this.livingCells.filter(
      cell => cell.x === x && cell.y === y
    )
    return matches.length > 0
      ? matches[0]
      : new Cell(x, y, 0)
  }

  getNeighbors (cell) {
    let neighbors = []
    for (let y = cell.y-1; y <= cell.y + 1; y++) {
      for (let x = cell.x-1; x <= cell.x + 1; x++) {
        if (!(x===cell.x && y===cell.y)) {
          let cell = this.getCell(x,y)
          neighbors.push(cell)
          // console.log(cell.show())
        }
      }
    }
    return neighbors
  }

  willBeAlive (cell) {
    let neighbors = this.getNeighbors(cell)
    let peers = neighbors.filter(cell => cell.alive === 1)
    let peerCount = peers.length
    // console.log('count = '+peerCount)
    if (cell.alive === 1
       && (peerCount < minToLive
           || peerCount > maxToLive)) {
      // console.log('-------KILLED '+cell.show())
      return false
    } else if (cell.alive === 0
              && peerCount === numToBirth) {
      // console.log('-------BIRTH '+cell.show())
      return true
    } else {
      return cell.alive === 1
    }
  }

  nextGen () {
    let next = new Universe()
    let stats = this.getStats()
    for (let y = stats.minY - 1; y <= stats.maxY + 1; y++) {
      for (let x = stats.minX - 1; x <= stats.maxX + 1; x++) {
        let cell = this.getCell(x, y)
        if (this.willBeAlive(cell)) {
          next.addCell(new Cell(x, y, 1))
        }
      }
    }
    return next
  }
}
