TinyTurtle.apply(window, [undefined, 400, 400]);

function square(size){
forward(size);
right(90);
forward(size);
right(90);
forward(size);
right(90);
forward(size);
right(90);
forward(size);
}
function triangle (x) {
    right(30);
    forward(x);
    right(120);
    forward(x);
    right(120);
    forward(x);
}

function rectangle (x,y) {
forward(x);
right(90);
forward(y);
right(90);
forward(x);
right(90);
forward(y);
}
function house () {
    square();
    triangle();
    
    
}
function pentagon () {
    forward(50);
right(72);
forward(50);
right(72);
forward(50);
right(72);
forward(50);
right(72);
forward(50);
right(72); 

}
function hexagon (size) {
    right(60);
    forward(size);
    right(60);
    forward(size);
    right(60);
    forward(size);
    right(60);
    forward(size);
    right(60);
    forward(size);
    right(60);
    forward(size);
    right(60);
}

//     forward(50);
// right(90);
// forward(50);
// right(90);
// forward(50);
// right(90);
// forward(50);
// right(90);
// forward(50);
    




// Type your function call below
// square();
// forward(40)
 //square(100);
//triangle(100); 
//rectangle(100,50);
//house();
//pentagon();
hexagon(50);
stamp();

