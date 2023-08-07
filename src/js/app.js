export default class App {
  constructor(size) {
    this.gobl = document.createElement('div');
    this.gobl.classList.add('goblin');

    this.size = size;
    this.oldHole = 1;

    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('wrapper');
    this.container = document.createElement('div');
    this.container.classList.add('container');
    this.wrapper.append(this.container);
    this.title = document.createElement('h1');
    this.title.classList.add('title');
    this.title.innerText = 'GOBLIN';
    this.container.append(this.title);
    for (let i = 0; i < size * size; i += 1) {
      let elem = document.createElement('div');
      elem.classList.add('hole');
      this.container.append(elem);
    }
    document.body.append(this.wrapper);
	this.cells = document.querySelectorAll(".hole");
  }

  gamePlay() {
    setInterval(() => {
      let newHole = this.oldHole;
      while (newHole === this.oldHole) {
        newHole = Math.floor(Math.random() * (this.size ** 2));
      }
      this.oldHole = newHole;
      this.cells[newHole].append(this.gobl);
    }, 1000);
  }
}
