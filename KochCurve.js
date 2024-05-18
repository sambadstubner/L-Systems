class KochCurve extends LSystem{
    constructor(print=false){
        super(print);
    
        this.axiom = "F";
        this.sentence = this.axiom;
        this.rules = {
            "F": " F+F-F-F+F",
        };
        this.len = 50;
        this.angle = radians(90);
        this.start_x = 10;
        this.start_y = height-10;
        this.reduction_rate = 0.5;
    
        this.turtle_rules = {
          "F": this.turtle_F,
          "+": this.turtle_left,
          "-": this.turtle_right,
        };
    }

    turtle_F() {
        line(0, 0, this.len, 0);
        translate(this.len, 0);
    }



}