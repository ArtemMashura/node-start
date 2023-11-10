const { Buffer } = require('node:buffer');

data = [
    [ 84, 4 ],
    [ 67, 4 ],
    [ 54, 4, 56, 4, 66, 4, 66, 4, 86, 4 ],
    [ 59, 4, 78, 4, 52, 4, 56, 4, 61, 4, 56, 4],
    [ 64, 4, 62, 4, 55, 4, 67, 4, 60, 4, 61, 4, 62, 4, 87, 4 ],
    [ 18, 4, 56, 4, 50, 4, 71, 4, 53, 4, 61, 4, 61, 4, 79, 4 ],
    [ 61, 4, 48, 4, 52, 4, 55, 4, 50, 4, 56, 4, 71, 4, 48,
    4, 57, 4, 61, 4, 62, 4],
    [ 63, 4, 64, 4, 62, 4, 51, 4, 64, 4, 48, 4, 60, 4, 67, 4, 50, 4,
    48, 4, 61, 4, 61, 4, 79, 4 ],
    [ 50, 4, 48, 4, 54, 4, 59, 4, 56, 4, 50, 4, 56, 4, 60, 4 ]
]

buffersArray = []

data.forEach(element => {
    buffersArray.push(Buffer.from(element))
});

buffersArray.forEach(element => {
    // console.log(element.toString())  набагато простіший та більш зрозумілий метод
    try{
        text = new TextDecoder("utf16le", { fatal: true }).decode(element)
        encoding = "utf16le"
    }
    catch{
        text = new TextDecoder("utf8", { fatal: true }).decode(element)
        encoding = "utf8"
    }
    console.log(text, encoding)  // Я не знайшов способу декодувати нелатинські символи з буферу, тому лише так
    
})