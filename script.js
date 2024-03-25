function setup() {
    createCanvas(600, 600); 
    background(200); 
    
    
    fill(255, 255, 0); 
    ellipse(width / 2, height / 2, 80, 80); 
    
    
    fill(255, 255, 0); 
    let numRays = 20; 
    for (let i = 0; i < numRays; i++) {
        let angle = i * TWO_PI / numRays;
        let x1 = width / 2 + cos(angle) * 40; 
        let y1 = height / 2 + sin(angle) * 40; 
        let x2 = width / 2 + cos(angle + PI / numRays) * 55; 
        let y2 = height / 2 + sin(angle + PI / numRays) * 55; 
        let x3 = width / 2 + cos(angle) * 65; 
        let y3 = height / 2 + sin(angle) * 65; 
        triangle(x1, y1, x2, y2, x3, y3);
    }
    
    
    noFill(); 
    stroke(150); 
    ellipse(width / 2, height / 2, 300, 150); 
    ellipse(width / 2, height / 2, 360, 200); 
    ellipse(width / 2, height / 2, 420, 250); 
    ellipse(width / 2, height / 2, 480, 300); 
    ellipse(width / 2, height / 2, 540, 350); 
    
    
    fill(50, 100, 200); 
    ellipse(width / 2 - 150, height / 2 - 25, 20, 20); 
    fill(255, 192, 203); 
    ellipse(width / 2 - 180, height / 2 + 20, 15, 15); 
    fill(221, 160, 221); 
    ellipse(width / 2 - 210, height / 2, 30, 30); 
    fill(173, 216, 230); 
    ellipse(width / 4 + 220, height / 2 - 140, 35, 35); 
    fill(144, 238, 144); 
    ellipse(width / 2 + 275, height / 2, 40, 40); 
}
