function Computador(armazenamento, memRam, processador) {
    this.armazenamento = armazenamento;
    this.memRam = memRam;
    this.processador = processador;
}

function Desktop(armazenamento, memRam, processador, linha, serie) {
    this.linha = linha;
    this.serie = serie;

    Computador.call(this, armazenamento, memRam, processador)
}

function Notebook(armazenamento, memRam, processador, linha, serie) {
    this.linha = linha;
    this.serie = serie;

    Computador.call(this, armazenamento, memRam, processador)
}

const desktopI5 = new Desktop("256GB", "8GB Ram", "Intel I5 12Ger", "DeskNew", "1");
const desktopI7 = new Desktop("512GB", "16GB Ram", "Intel I7 12Ger", "DeskNew", "2");
const notebookI5 = new Notebook("256GB", "8GB Ram", "Intel I5 12Ger", "Snote", "3");
const notebookI7 = new Notebook("512GB", "16GB Ram", "Intel I7 12Ger", "IdeaPad", "4");

console.log(desktopI5);
console.log(desktopI7);
console.log(notebookI5);
console.log(notebookI7);