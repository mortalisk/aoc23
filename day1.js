// part 1
fetch("1/input").then(r => r.text()).then(t => t.trim().split("\n").map((l) => [...l].filter((c) => Number.isInteger(parseInt(c)))).map((l) => l[0] + l[l.length-1]).reduce((cur,next) => cur + parseInt(next), 0)).then(console.log)

// part 2
fetch("1/input").then(r => r.text()).then(t => t.trim().split("\n").map(l => [...l].reduce((acc, next) => (acc + next).replace("one", "1ne").replace("two", "2o").replace("three", "3ee").replace("four", "4").replace("five", "5e").replace("six", "6").replace("seven", "7en").replace("eight", "8t").replace("nine", "9ne"), "")).map((l) => [...l].filter((c) => Number.isInteger(parseInt(c)))).map((l) => l[0] + l[l.length-1]).reduce((cur,next) => cur + parseInt(next), 0)).then(console.log)


