const input = require('fs').readFileSync('input.txt').toString('utf-8')
const lines = input.split("\n")

const common = (a, b, c) => {
  for (const piece of a) {
    if (b.indexOf(piece) > -1 && c.indexOf(piece) > -1)  {
      return piece
    }
  }
}

let total = 0
for (let i = 0; i < lines.length; i+=3) {
  const line1 = lines[i].trim().split("")
  const line2 = lines[i+1].trim().split("")
  const line3 = lines[i+2].trim().split("")
  const letter = common(line1, line2, line3)
  let pos = letter.toUpperCase().charCodeAt(0) - 64
  if (letter === letter.toUpperCase()) {
    pos += 26
  }
  total += pos

}
console.log(total)

