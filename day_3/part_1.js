const input = require('fs').readFileSync('input.txt').toString('utf-8')
const lines = input.split("\n")

const common = (l, r) => {
  for (const piece of l) {
    if (r.indexOf(piece) > -1) {
      return piece
    }
  }
  return null
}

let total = 0
for (let line of lines) {
  line = line.trim().split("")
  const l = line.slice(0, line.length /2)
  const r = line.slice(line.length / 2)
  const letter = common(l, r)

  let pos = letter.toUpperCase().charCodeAt(0) - 64
  if (letter === letter.toUpperCase()) {
    pos += 26
  }
  total += pos

}
console.log(total)

