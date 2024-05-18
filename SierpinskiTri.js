class SierpinskiTri extends LSystem{
    constructor(print=false){
        super(print);
    
        this.axiom = "F-G-G";
        this.sentence = this.axiom;
        this.rules = {
            "F": "F-G+F+G-F",
            "G": "GG"
        };
        this.len = 300;
        this.angle = radians(120);
        this.start_x = width/2 - (this.len/2);
        this.start_y = height/2 - (this.len/2);
        this.reduction_rate = 0.5;
    
        this.turtle_rules = {
          "F": this.turtle_F,
          "G": this.turtle_F,
          "+": this.turtle_left,
          "-": this.turtle_right,
        };
    }

    turtle_F() {
        line(0, 0, this.len, 0);
        translate(this.len, 0);
    }



}