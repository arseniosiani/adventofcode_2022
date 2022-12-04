const input = require('fs').readFileSync('input.txt').toString('utf-8')
const lines = input.split("\n")

const outcome = (other, me) => {
  const pos = { A: 0, B: 1, C: 2 }
  other = pos[other]
  if (me === "Z") {
    return (other + 1) % 3 + 1 + 6
  }
  if (me === "Y") {
    return other + 1  + 3
  }
  if (me === "X") {
    if (other === 0) {
      other = 3
    }
    return (other - 1) +1 + 0
  }
}

let total = 0
for (let line of lines) {
  line = line.trim().split(" ")
  const match = outcome(line[0], line[1])
  total += match
}
console.log(total)

