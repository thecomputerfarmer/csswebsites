		background(89, 216, 255);
			
			function myFunction() {
			document.getElementById("demo").innerHTML = "Paragraph changed.";
			}
			
			var centerX = 200;

			var fish = function(centerX, centerY) {

			var bodyLength = 118;
			var bodyHeight = 74;
			var bodyColor = color(162, 0, 255);

			noStroke();
			fill(bodyColor);
			
			// body
			ellipse(centerX, centerY, bodyLength, bodyHeight);

			// tail
			var tailWidth = bodyLength/4;
			var tailHeight = bodyHeight/2;
			triangle(centerX-bodyLength/2, centerY,
			centerX-bodyLength/2-tailWidth, centerY-tailHeight,
			centerX-bodyLength/2-tailWidth, centerY+tailHeight);
			
			// eye
			fill(33, 33, 33);
			ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);

			};

			draw = function() {
			background(89, 216, 255);
	
			var x = 200;
			fish(mouseX, mouseY);
			fish(x, 353);
			fish(x, 269);
			fish(x, 188);
    
			x += 1;
			};
