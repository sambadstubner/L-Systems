class HilbertCurve extends LSystem{
    constructor(print=false){
        super(print);
    
        this.axiom = "A";
        this.sentence = this.axiom;
        this.rules = {
            "A": "+BF-AFA-FB+",
            "B": "-AF+BFB+FA-"
        };
        this.len = 50;
        this.angle = radians(90);
        this.start_x = width - 5;
        this.start_y = height - 5;
        this.reduction_rate = 0.75;
    
        this.turtle_rules = {
          "F": this.turtle_F,
          "+": this.turtle_left,
          "-": this.turtle_right,
        };
    }



}