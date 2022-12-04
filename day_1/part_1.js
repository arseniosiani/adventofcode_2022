const input = require('fs').readFileSync('input.txt').toString('utf-8')

const lines = input.split("\n")
let most_calories = 0
let elf_sum = 0
for (let line of lines) {
  line = line.trim()
  if (line === '') {
    if (most_calories < elf_sum) {
      most_calories = elf_sum
    }
    elf_sum = 0
    continue
  }
  elf_sum += +line
}
console.log(most_calories)