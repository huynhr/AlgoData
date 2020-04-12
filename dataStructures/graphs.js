class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
  }

  removeVertex(vertex) {
    this.adjacencyList[vertex].slice().map(edge => this.removeEdge(vertex, edge));
    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(start) {
    const results = [];
    let visited = {};
    const adjacencyList = this.adjacencyList;
    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      results.push(vertex)
      adjacencyList[vertex].forEach(element => {
        if (!visited[element]) {
          dfs(element);
        }
      });

    })(start)
    return results;
  }

  depthFirstIteratively(start) {
    const stack = [];
    const visited = {};
    const result = [];
    stack.push(start);
    while(stack.length) {
      const vertex = stack.pop();
      if (!visited[vertex]) {
        result.push(vertex);
        visited[vertex] = true;
        this.adjacencyList[vertex].forEach(element => stack.push(element));
      }
    }
    return result;
  }

  breathFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    let currentVertex;

    while(queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      })
    }
    return result;
  }
}

const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')
const output = g.depthFirstRecursive('A')
const outputIterative = g.depthFirstIteratively('A')
console.log(output, outputIterative);
console.log(g.breathFirst('A'))