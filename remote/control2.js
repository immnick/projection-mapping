// pass key code
var remote = function(remote) {
	
	remote.makeControl = function(view, data) {
		
		view.goButton.on("click", function() {
			var code = view.pass.num1.currentValue  + "" + view.pass.num2.currentValue + "" + view.pass.num3.currentValue;
			data.makeSocket(code);		
		});		
	}	
	
	return remote;
}(remote||{});