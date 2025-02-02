const fs = require("fs")
// const fs = require ("fs/promises")

//console.log(fs);

console.log("starting");
// fs.writeFileSync("harry.txt", "Harry is a good boy")
fs.writeFile("harry2.txt", "Harry is a good boy", () => {
    console.log("done")
    fs.readFile("harry2.txt", (error, data) => {
        console.log(error, data.toString())
    })
})


fs.appendFile ("harry.txt","\nharryRobo", (e, d) => {
    console.log(d);
})
console.log("ending");

/// yahan tak type common js thi 
// ab watch mainpromise.js