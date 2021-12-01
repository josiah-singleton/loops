const spiders = ["black widow", "wolf spider", "trapdoor spider"];
for (let i = 0; i < spiders.length; i++) {
    console.log(spiders[i])
}
const reversed = spiders.reverse();
for (let i = 0; i < spiders.length; i++) {
    console.log(spiders[i])
}
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
let x = 0; 
while (x < 10) {
    x++;
    if (x === 2) continue;
    if (x === 4) continue;
    if (x === 6) continue;
    if (x === 8) continue;
    if (x === 10) continue;
    console.log(x);
}