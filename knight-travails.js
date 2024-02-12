function knightMove(start, end) {
  const moves = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];

  const queue = [[start]];
  const visited = new Map();

  while (queue.length) {
    let [position, previous] = queue.shift();
    const key = position.toString();
    visited.set(key, previous);
    if (position[0] === end[0] && position[1] === end[1]) {
      const path = [];
      while (position) {
        path.unshift(position);
        position = visited.get(position.toString());
      }
      console.log(visited);
      return path;
    }
    for (const [dx, dy] of moves) {
      const newPosition = [position[0] + dx, position[1] + dy];
      const newKey = newPosition.toString();
      if (
        newPosition[0] >= 0 &&
        newPosition[0] < 8 &&
        newPosition[1] >= 0 &&
        newPosition[1] < 8 &&
        !visited.has(newKey)
      ) {
        queue.push([newPosition, position]);
      }
    }
  }
  return null;
}

console.log(knightMove([0, 0], [3, 3]));

console.log(knightMove([0, 0], [7, 7]));
