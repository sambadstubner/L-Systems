class FractalPlant extends LSystem{
    constructor(print=false){
        super(print);
    
        this.axiom = "X";
        this.sentence = this.axiom;
        this.rules = {
            "F": "FF",
            "X": "F+[[X]-X]-F[-FX]+X"
        };
        this.len = 150;
        this.angle = radians(25);
        this.alpha = 100;
        this.color = 255;
        this.reduction_rate = 0.5
    
        this.turtle_rules = {
          "F": this.turtle_F,
          "+": this.turtle_left,
          "-": this.turtle_right,
          "[": push,
          "]": pop
        };
    }
}