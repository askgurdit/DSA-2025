import fs from "fs/promises"

let  a = fs.readFile("harry.txt")

// let b = await fs.writeFile("harry.txt", "\nthis is amazing promise")
// erases anything previously there

let b = await fs.appendFile("harry.txt", "\nthis is amazing promise")
console.log(a.toString(), b)