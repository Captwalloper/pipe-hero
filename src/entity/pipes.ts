export class Pipe {
  id: string;
  vDiff: number;
  hDiff: number;

  constructor(id: string, vDiff: number = 0, hDiff: number = 0) {
    this.id = id;
    this.vDiff = vDiff;
    this.hDiff = hDiff;
  }

  static from(pipe : Partial<Pipe>) {
    return new Pipe(pipe.id!, pipe.vDiff, pipe.hDiff);
  }
}

export const pipes = (function() {
  const maxVert = 3;
  // assume maxHorz = 1
  const pipes: Pipe[] = [ new Pipe('across') ];
  for (let vert = 1; vert <= maxVert; vert++) {
    pipes.push(new Pipe(`down${vert}`));
    pipes.push(new Pipe(`up${vert}`));
  }
  return pipes;
})();