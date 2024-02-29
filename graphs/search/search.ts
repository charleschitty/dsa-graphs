import { Queue } from "../common/queue";
import { Stack } from "../common/stack";
import { GNodeStr } from "../graph/graph";

/** Return array of nodes, in DFS order (recursive version)  */

function rDfs(
    start: GNodeStr,
    result: string[] = [],
    visited = new Set([start])): string[] {
  //loop through node's adjacent
  //save whomever with have visited
  //if node is not in visited, push node to result
  //recurse back
  result.push(start.value);

  for (const adj of start.adjacent){
    if (!visited.has(adj)){
      visited.add(adj)
      rDfs(adj,result,visited)
    }
  }
  console.log("result", result)
  return result;
}


/** Return array of nodes, in DFS order (iterative version)  */

function iDfs(start: GNodeStr): string[] {
  let stack = new Stack([start]);
  let result: string[] = [];
  let visited = new Set();


  while(!stack.isEmpty()){
    let curNode = stack.pop();
    visited.add(curNode);
    result.push(curNode.value);

    for (const adj of curNode.adjacent){
      if (!visited.has(adj)){
        visited.add(adj)
        stack.push(adj)
      }
    }
  }
  return result;
}

/** Return array of nodes, in BFS order (iterative version)  */

function bfs(start: GNodeStr): string[] {
  let queue = new Queue([start]);
  let result: string[] = [];
  let visited = new Set();


  while(!queue.isEmpty()){
    let curNode = queue.dequeue();
    visited.add(curNode);
    result.push(curNode.value);

    for (const adj of curNode.adjacent){
      if (!visited.has(adj)){
        visited.add(adj)
        queue.enqueue(adj)
      }
    }
  }
  return result;
}


export { iDfs, rDfs, bfs };