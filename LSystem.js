class LSystem {
    constructor(print=false) {
      this.axiom = "";
      this.sentence = this.axiom;
      this.len = 100;
      this.angle = radians(25);
      this.alpha = 100;
      this.color = 255;
      this.turtle_rules = {};
      this.generate = this.generate.bind(this);
      this.reduction_rate = 0.5
      this.print = print
      this.start_x = width / 2;
      this.start_y = height;

      this.turtle_F = this.turtle_F.bind(this);
      this.turtle_right = this.turtle_right.bind(this);
      this.turtle_left = this.turtle_left.bind(this);
      this.turtle();
    }

    

    deleteP() {
        let elements = selectAll('.' + 'output-paragraph'); // Select all elements with the specified class
        for (let i = 0; i < elements.length; i++) {
            elements[i].remove(); // Remove each selected element
        }
    }
    
    reset(){
        this.sentence = this.axiom;
        this.deleteP();
    }

    printSentence() {
        let pElement = createP(this.sentence);
        pElement.class('output-paragraph'); // Add a class to identify the paragraph
    }

    turtle_F() {
        line(0, 0, 0, -this.len);
        translate(0, -this.len);
    }
    
    turtle_right() {
        rotate(this.angle);
    }
    
    turtle_left() {
        rotate(-this.angle);
    }
  
    reduce_length(){
      this.len *= this.reduction_rate;
    }

  
    generate() {
      this.reduce_length()
      let nextSentence = "";
      for (let i = 0; i < this.sentence.length; i++) {
        let current = this.sentence.charAt(i);
        let result = this.rules[current];
        if (result) {
          nextSentence += result;
        } else {
          nextSentence += current;
        }
      }
      this.sentence = nextSentence;
      if(this.print){
        this.printSentence()
      }
      this.turtle();
    }
  
    turtle() {
      background(51);
      resetMatrix();
      translate(this.start_x, this.start_y);
      stroke(this.color, this.alpha);
      for (let i = 0; i < this.sentence.length; i++) {
        let current = this.sentence.charAt(i);
        let action = this.turtle_rules[current];
        if (action) {
          action();
        }
      }
    }
  }