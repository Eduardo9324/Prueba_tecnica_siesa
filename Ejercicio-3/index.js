// Defino una clase treeNode y en el constructor defino la propiedades "valo", "peso", izquierda y derecha que por defecto son valores nulos
class TreeNode {
  constructor(value, weight, left = null, right = null) {
    this.value = value;
    this.weight = weight;
    this.left = left;
    this.right = right;
  }
}
// Aqui defino la lase "WeightedTree" y en el constructor resibe como argumento el nodo raiz
class WeightedTree {
  constructor(root) {
    this.root = root;
  }
  // El metodo totalWeight recibe un nodo por argumento, si no devuelve 0, si esta devuelve el peso total del nodo con sus hijos izquierdo y derecho
  totalWeight(node) {
    if (!node) return 0;
    return (
      node.weight + this.totalWeight(node.left) + this.totalWeight(node.right)
    );
  }
}
// Aqui crea un objeto node de la clase TreeNode con un valor de "Root", un peso de 10 y dos hijos izquierdo y derecho, cada uno con su peso, y a su vez estos tambien tienen nodos hijos izquierdos y derechos con sus propios pesos
const root = new TreeNode(
  "Root",
  80,
  new TreeNode(
    "Left",
    40,
    new TreeNode("Left-Left", 20),
    new TreeNode("Left-Right", 30)
  ),
  new TreeNode(
    "Right",
    40,
    new TreeNode("Right-Left", 10),
    new TreeNode("Right-Right", 25)
  )
);
// Instancia de la clase "WeightedTree" que recibe el nodo raiz como argumento
const tree = new WeightedTree(root);
// Aqui muestra en la consola el peso total del arbol, llama al metodo "totalWeight" de la instancia "tree" y se le pasa la raiz como argumento, realiza la suma del peso de forma recursiva.
console.log("Peso total del arbol:", tree.totalWeight(root));
