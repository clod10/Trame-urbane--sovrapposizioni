/** @type {SVGImage[]} */
let lista_sotto = []
/** @type {SVGImage[]} */
let lista_in_mezzo = []
/** @type {SVGImage[]} */
let lista_sopra = []

function preload(){
  lista_sopra = [
    loadSVG("./assets/sopra/13.svg"),
    loadSVG("./assets/sopra/13.svg"),
    loadSVG("./assets/sopra/13.svg"),
    loadSVG("./assets/sopra/13.svg"),
    loadSVG("./assets/sopra/13.svg"),
  ]
lista_in_mezzo = [
  loadSVG("./assets/sopra/13.svg"),
    loadSVG("./assets/sopra/13.svg"),
    loadSVG("./assets/sopra/13.svg"),
    loadSVG("./assets/sopra/13.svg"),
    loadSVG("./assets/sopra/13.svg"),
]}
function setup() {
  createCanvas(400, 400, SVG);
  addDownloadButton();
  noLoop(); // Opzionale
}

function draw() {
  clear(); // Non cancellare!
}
