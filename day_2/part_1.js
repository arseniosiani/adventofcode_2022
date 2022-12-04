const input = require('fs').readFileSync('input.txt').toString('utf-8')
const lines = input.split("\n")

const outcome = (other, me) => {
  const pos = { A: 0, B: 1, C: 2, X: 0, Y: 1, Z: 2 }
  me = pos[me]
  other = pos[other]
  if (me === other) {
    return 3 + me + 1
  }
  const i_win = ((other + 1) % 3 === me)

  if (i_win) return 6 + me + 1
  return 0 + me + 1
}

let total = 0
for (let line of lines) {
  line = line.trim().split(" ")
  const match = outcome(line[0], line[1])
  total += match
}
console.log(total)

