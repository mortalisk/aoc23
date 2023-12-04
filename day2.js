//Del1:
fetch("2/input")
  .then(t => t.text())
	.then(t => 
        t.trim()
         .split("\n")
  			 .map(l => l.split(":"))
				 .map(([game, l]) => [game, l.split(";")])
         .filter(([game, rounds]) => !(rounds.some(r => r.match("(1[3-9]|[2-9][0-9]+) red"))))
         .filter(([game, rounds]) => !(rounds.some(r => r.match("(1[4-9]|[2-9][0-9]+) green"))))
         .filter(([game, rounds]) => !(rounds.some(r => r.match("(1[5-9]|[2-9][0-9]+) blue"))))
         .map(([game, rounds]) => parseInt(game.split(" ")[1]))
         .reduce((acc, cur) => acc + cur)
      )
  .then(console.log)

//Del2:
fetch("2/input")
  .then(t => t.text())
	.then(t => 
        t.trim()
         .split("\n")
         .map(rounds => 
              Math.max(...[...rounds.matchAll("([0-9]+) red")].map(n => parseInt(n[1]))) *
              Math.max(...[...rounds.matchAll("([0-9]+) green")].map(n => parseInt(n[1]))) *
  			  Math.max(...[...rounds.matchAll("([0-9]+) blue")].map(n => parseInt(n[1]))))
         .reduce((acc, cur) => acc + cur)
      )
  .then(console.log)
