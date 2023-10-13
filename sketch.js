    let shapes = [];
    let finalShapes = [];
    let shapeOptions = [0,1,2];
    let yourImage

    function setup() {
        createCanvas(windowWidth, windowHeight).parent('imageContainer');
    frameRate(8);
    textSize(40);

    // Create a clear button and set its properties
    let clearButton = createButton('Clear All');
    clearButton.position(10, height - 1); // Position at the bottom left
    clearButton.mousePressed(clearShapes); // Call clearShapes() when clicked
    }

    function draw() {
    background(0);

    for (let i = 0; i < finalShapes.length; i++) {
        finalShapes[i].display();
    }

    for (let shape of shapes) {
        shapes[shapes.length - 1].display();
    }
    }

    function keyPressed() {
    if (key === '1') {
        addShape();
    } else if (key === '2') {
        changeColor();
    } else if (key === '3') {
        changeSize();
    } else if (key === 'Enter') {
        enter();
    } else if (key === 'Backspace') {
        deleteMostRecentShape();
    } else if (key === 'Home') {
        deleteFirstShape();
    }
    }

    function mousePressed() {
    // Check if the clear button was clicked
    if (mouseX >= 10 && mouseX <= 110 && mouseY >= height - 50 && mouseY <= height - 10) {
        clearShapes();
    }
    }

    function addShape() {
    let sColor = color(random(255), random(255), random(255));
    let sSize = random(100);
    let num = int(random(3));
    let x = random(width);
    let y = random(height);

    randomShapeType = shapeOptions[num];

    if (randomShapeType === 0) {
        shapes.push(new Circle(x, y, sSize, sColor));
    } else if (randomShapeType === 1) {
        shapes.push(new Rectangle(x, y, sSize, sColor));
    } else if (randomShapeType === 2) {
        shapes.push(new Line(x, y, sSize, sColor));
    }
    }

    function enter() {
    let s = shapes[shapes.length - 1];
    finalShapes.push(s);
    }

    function changeColor() {
    shapes[shapes.length - 1].setColor(color(random(255), random(255), random(255)));
    }

    function changeSize() {
    shapes[shapes.length - 1].setSize(random(20, 100));
    }

    function deleteMostRecentShape() {
    if (finalShapes.length > 0) {
        finalShapes.pop(); // Remove the most recent shape
    }
    }

    function deleteFirstShape() {
    if (finalShapes.length > 0) {
        finalShapes.shift(); // Remove the first shape
    }
    }

    function clearShapes() {
    finalShapes = [];
    shapes = [];
    }

    class Circle {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }

    display() {
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.size);
    }

    setSize(newSize) {
        this.size = newSize;
    }

    setColor(newColor) {
        this.color = newColor;
    }
    }

    class Rectangle {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.width = size;
        this.height = size;
        this.color = color;
    }

    display() {
        noStroke();
        fill(this.color);
        rect(this.x, this.y, this.width, this.height);
    }

    setSize(newSize) {
        this.width = newSize;
        this.height = newSize;
    }

    setColor(newColor) {
        this.color = newColor;
    }
    }

    class Line {
    constructor(x, y, size, color) {
        this.x1 = x;
        this.y1 = y;
        this.x2 = size;
        this.y2 = size;
        this.color = color;
    }

    display() {
        stroke(this.color);
        line(this.x1, this.y1, this.x2, this.y2);
    }

    setSize(newSize) {
        let randomPos;
        randomPos = random(width) + newSize;
        this.x2 = randomPos;
        this.size = newSize;
    }

    setColor(newColor) {
        this.color = newColor;
    }
    }
