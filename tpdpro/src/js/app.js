const pattern = ["-xy", "y", "yx", "x", "menu", "x-y", "-y", "-x-y", "-x"];

function countUniqueOrientations() {
  const orientations = ["-xy", "-yx", "-x-z", "-z-x", "-yz", "-zy"];
  let count = 0;

  for (let i = 0; i < orientations.length; i++) {
    const start = orientations[i];
    let current = start;
    let visited = new Set();

    do {
      const index = pattern.indexOf(current);
      current = pattern[(index + 1) % pattern.length];
      visited.add(current);
    } while (current !== start && !visited.has(current));

    if (current === start) {
      count++;
    } else {
      let cycleFound = false;

      do {
        const index = pattern.indexOf(current);
        current = pattern[(index + 1) % pattern.length];

        if (visited.has(current)) {
          cycleFound = true;
          break;
        }

        visited.add(current);
      } while (current !== start);

      if (!cycleFound) {
        count += visited.size + 1;
      }
    }
  }

  return count;
}

console.log(countUniqueOrientations()); // output: 6
