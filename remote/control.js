// all the buttons in the world!
var remote = function(remote) {
	
	remote.makeControl = function(view, data) {
		
		view.goButton.on("click", function() {
			 
			var code = view.pass.num1.currentValue  + "" + view.pass.num2.currentValue + "" + view.pass.num3.currentValue;
			data.makeSocket(code);

			view.button1.on("click", function() {data.send("villain1");});
			view.button2.on("click", function() {data.send("villain2");});
			view.button3.on("click", function() {data.send("villain3");});
			view.button4.on("click", function() {data.send("villain4");});
			view.button5.on("click", function() {data.send("villain5");});
			view.button6.on("click", function() {data.send("villain6");});
			view.button7.on("click", function() {data.send("villain7");});
			view.button8.on("click", function() {data.send("villain8");});
			view.button9.on("click", function() {data.send("villain9");});
			view.button10.on("click", function() {data.send("villain10");});
			view.button11.on("click", function() {data.send("villain11");});
			view.button12.on("click", function() {data.send("villain12");});
			view.button13.on("click", function() {data.send("villain13");});
			view.button14.on("click", function() {data.send("villain14");});
			view.button15.on("click", function() {data.send("villain15");});
			view.button16.on("click", function() {data.send("villain16");});
			view.button17.on("click", function() {data.send("villain17");});
			view.button18.on("click", function() {data.send("villain18");});
			view.button19.on("click", function() {data.send("villain19");});
			view.button20.on("click", function() {data.send("villain20");});			
		});
	}	
	
	return remote;
}(remote||{});