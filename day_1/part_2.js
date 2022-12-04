const input = require('fs').readFileSync('input.txt').toString('utf-8')

const lines = input.split("\n")
const per_elf = []
let elf_sum = 0
for (let line of lines) {
  line = line.trim()
  if (line === '') {
    per_elf.push(elf_sum)
    elf_sum = 0
    continue
  }
  elf_sum += +line
}
per_elf.sort((a,b) => b-a)
console.log(per_elf[0] +per_elf[1] +per_elf[2])
