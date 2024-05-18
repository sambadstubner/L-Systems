
class FTree extends LSystem{
    constructor(print=false){
      super(print);
  
      this.axiom = "F";
      this.sentence = this.axiom;
      this.rules = {
        "F": "FF+[+F-F-F]-[-F+F+F]"
      };
      this.len = 100;
      this.angle = radians(25);
      this.alpha = 100;
      this.color = 255;
  
      this.turtle_rules = {
        "F": this.turtle_F,
        "+": this.turtle_right,
        "-": this.turtle_left,
        "[": push,
        "]": pop
      };
    }
  }