import { GNodeStr } from "../common/graph";
import { Queue } from "../common/queue";

/** Distance of shortest path between start and end.
 * If no path exists, return Infinity. */

function distShortestPath(start: GNodeStr, sought: GNodeStr): number {
  let queue = new Queue([start]);
  let shortestDistance = Infinity;
  let visited = new Set([start])
  let count = 0

  while (!queue.isEmpty()){
    let currNode = queue.dequeue()
    count++
    if (currNode === sought) {
      return (count);
    }
    for (let adjNode of currNode.adjacent){
      if (!visited.has(adjNode)){
        visited.add(adjNode)
        queue.enqueue(adjNode)
      } else{
        count--
      }
    }

  }

  return shortestDistance;
}

export { distShortestPath };

// Start at R
// Is that what I am looking for? If yes return 1 *
// Look at R's adjacents
// I see T, I , H (Are any of these the sought?)
// I start with T. *
// From T, I look at T's adjacents (Are any of these the sought?)
// I see I, H, R (breadth search)
// I know I and H were seen already in a diff route so I ignore
// I know R is already visied so I ignore and end looking at T
// RESET
// Now I go to I *
// I's adjacents are R and T
// I ignore b/c I saw R and T was seen
// RESET
// Now I go to H *
// H's adjacents: T, R, M
// I haven't seen M. Therefore let me go there *
// Is M value? No. Sad
// Does M have adjacents?
// No?
// Return infinity if all initial adjacents exhausted