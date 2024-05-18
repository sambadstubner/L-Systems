system_types = {
  "FractalPlant": FractalPlant,
  "FTree": FTree,
  "HilbertCurve": HilbertCurve
}

let system;
let print_p = false;

function newSystem(type_str) {
  background(51);
  let newSystemInstance = new system_types[type_str](print_p);
  newSystemInstance.reset();
  if (print_p) {
    newSystemInstance.printSentence();
  }
  return newSystemInstance;
}

function setup() {
  createCanvas(400, 400);
  let selectType = createSelect();  
  let selectPrint = createSelect();
  let buttonGenerate = createButton("generate");
  let buttonReset = createButton("reset");

  selectPrint.option("Print");
  selectPrint.option("No Print");
  selectPrint.selected("No Print");

  for (let option in system_types) {
    selectType.option(option);
  }
  selectType.selected('FractalPlant');
  selectType.changed(() => {
    if(system && system.print){
      system.deleteP();
    }
    system = newSystem(selectType.value());
    buttonGenerate.mousePressed(system.generate);
  });

  selectPrint.changed(() => {
    print_p = selectPrint.selected() == "Print" ? true : false;
    if(system){
      system.print = print_p;
      if(!print_p){
        system.deleteP();
      }
    }
  });

  system = newSystem(selectType.value());

  buttonGenerate.mousePressed(() => {system.generate();});

  buttonReset.mousePressed(() => {system = newSystem(selectType.value());});

}
