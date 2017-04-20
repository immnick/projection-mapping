// image container goes here, slider resizer
var remote = function(remote) {
	
	remote.makeView = function(preload) {
		
		view = {}; // collects any references we need outside this function
		stage = frame.stage;
		stageW = frame.width;
		stageH = frame.height;
		
		var title = view.title = new zim.Label("abc", 40, "Verdana", "#bc2929");
		zim.centerReg(title);
		title.x = stageW/2;
		title.y = 80;
		stage.update();
		
		var code = view.code = new zim.Label("", 50, "Verdana", "#bc2929");		
		zim.centerReg(code);
		code.x = stageW/2;
		code.y = 950;
		stage.addChild(code);

		var panel = view.panel = new zim.Container();
		stage.addChild(panel);

		var backing = view.backing = frame.asset("base2.jpg");
		panel.addChild(backing);
		panel.center(stage);
		panel.drag({currentTarget:true});
		stage.update();

		var slider = view.slider = new zim.Slider(1,6,.1,null,300,3,"#666",false,true);
		zim.centerReg(slider);
		stage.addChild(slider);
		slider.x = stageW/2;
		slider.y = 30;
		stage.update();

		slider.on("change", function() {
			backing.scale(slider.currentValue);			
		});
		stage.update();
		
		var passLabel = new zim.Label("ENTER ROOM", 40, "Verdana", "#AAA");
		var pass = view.pass = new zim.Pane(stage, 700, 600, passLabel, "#bc2929", null, null, false, 0);
				
		numbers = new createjs.Container();
		pass.addChild(numbers);
		pass.num1 = new zim.Stepper(null,100,null,null,null,true,null,0,null,null,true);
		numbers.addChild(pass.num1);		
		pass.num2 = new zim.Stepper(null,100,null,null,null,true,null,0,null,null,true);
		numbers.addChild(pass.num2);
		pass.num3 = new zim.Stepper(null,100,null,null,null,true,null,0,null,null,true);
		numbers.addChild(pass.num3);
		pass.num1.x -= 200;
		pass.num3.x += 200;
		numbers.x -= 40;
		numbers.y -= 140;
		zim.scale(numbers, .8);
		
		var goLabel = new zim.Label("GO", 50, "Verdana", "#666");	
		var goButton = view.goButton = new zim.Button(180, 80, goLabel, "#fff", "#ddd", "#666", 1, 0);
		goButton.label.y -= 10;
		zim.centerReg(goButton);
		goButton.y += 180;
		pass.addChild(goButton);
		
		pass.show();			
		passLabel.y -= 210;
		pass.y -= 20;
		
		return view;
	}	
	
	remote.space = function(text) {	
		text = text.replace(/(.)/g, "$1 ");
		return text.trim();
	}
	
	return remote;
}(remote||{});