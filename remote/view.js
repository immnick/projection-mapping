// create, position buttons, logos, passkey layout
var remote = function(remote) {
	
	remote.makeView = function(preload) {
		
		view = {}; // collects any references we need outside this function
		stage = frame.stage;
		stageW = frame.width;
		stageH = frame.height;
		
		var background = frame.asset("remote.jpg");
		background.scale(1).centerReg(stage);
		background.y += 0;
		stage.update();
		
		var button1 = view.button1 = new zim.Button({label:"Ba", width:70, height:70, color:"#ffa826", corner:35});
		button1.center(stage);
		button1.x = 380;
		button1.y = 200;
		stage.update();

		var button2 = view.button2 = new zim.Button({label:"Ch",width:70, height:70, color:"#ffa826", corner:35});
		button2.center(stage);
		button2.x = 380;
		button2.y = 300;
		stage.update();

		var button3 = view.button3 = new zim.Button({label:"Ma",width:70, height:70, color:"#ffa826", corner:35});
		button3.center(stage);
		button3.x = 380;
		button3.y = 400;
		stage.update();

		var button4 = view.button4 = new zim.Button({label:"Fr",width:70, height:70, color:"#ffa826", corner:35});
		button4.center(stage);
		button4.x = 380;
		button4.y = 500;
		stage.update();

		var button5 = view.button5 = new zim.Button({label:"Vo",width:70, height:70, color:"#ffa826", corner:35});
		button5.center(stage);
		button5.x = 380;
		button5.y = 600;
		stage.update();

		var button6 = view.button6 = new zim.Button({label:"Re",width:70, height:70, color:"#ffa826", corner:35});
		button6.center(stage);
		button6.x = 380;
		button6.y = 700;
		stage.update();

		var button7 = view.button7 = new zim.Button({label:"Va",width:70, height:70, color:"#ffa826", corner:35});
		button7.center(stage);
		button7.x = 480;
		button7.y = 250;
		stage.update();

		var button8 = view.button8 = new zim.Button({label:"T8",width:70, height:70, color:"#ffa826", corner:35});
		button8.center(stage);
		button8.x = 480;
		button8.y = 350;
		stage.update();

		var button9 = view.button9 = new zim.Button({label:"Ve",width:70, height:70, color:"#ffa826", corner:35});
		button9.center(stage);
		button9.x = 480;
		button9.y = 450;
		stage.update();

		var button10 = view.button10 = new zim.Button({label:"My",width:70, height:70, color:"#ffa826", corner:35});
		button10.center(stage);
		button10.x = 480;
		button10.y = 550;
		stage.update();

		var button11 = view.button11 = new zim.Button({label:"Wo",width:70, height:70, color:"#2679ff", corner:35});
		button11.center(stage);
		button11.x = 180;
		button11.y = 200;
		stage.update();

		var button12 = view.button12 = new zim.Button({label:"An",width:70, height:70, color:"#2679ff", corner:35});
		button12.center(stage);
		button12.x = 180;
		button12.y = 300;
		stage.update();

		var button13 = view.button13 = new zim.Button({label:"Ca",width:70, height:70, color:"#2679ff", corner:35});
		button13.center(stage);
		button13.x = 180;
		button13.y = 400;
		stage.update();

		var button14 = view.button14 = new zim.Button({label:"Da",width:70, height:70, color:"#2679ff", corner:35});
		button14.center(stage);
		button14.x = 180;
		button14.y = 500;
		stage.update();

		var button15 = view.button15 = new zim.Button({label:"Ir",width:70, height:70, color:"#2679ff", corner:35});
		button15.center(stage);
		button15.x = 180;
		button15.y = 600;
		stage.update();

		var button16 = view.button16 = new zim.Button({label:"Kh",width:70, height:70, color:"#2679ff", corner:35});
		button16.center(stage);
		button16.x = 180;
		button16.y = 700;
		stage.update();

		var button17 = view.button17 = new zim.Button({label:"Ja",width:70, height:70, color:"#2679ff", corner:35});
		button17.center(stage);
		button17.x = 80;
		button17.y = 250;
		stage.update();

		var button18 = view.button18 = new zim.Button({label:"Sp",width:70, height:70, color:"#2679ff", corner:35});
		button18.center(stage);
		button18.x = 80;
		button18.y = 350;
		stage.update();

		var button19 = view.button19 = new zim.Button({label:"De",width:70, height:70, color:"#2679ff", corner:35});
		button19.center(stage);
		button19.x = 80;
		button19.y = 450;
		stage.update();

		var button20 = view.button20 = new zim.Button({label:"Be",width:70, height:70, color:"#2679ff", corner:35});
		button20.center(stage);
		button20.x = 80;
		button20.y = 550;
		stage.update();
		
		var passLabel = new zim.Label("MAKE KEY", 40, "Verdana", "#AAA");
		var pass = view.pass = new zim.Pane(stage, 700, 600, passLabel, "#333", null, null, false, 0);
				
		numbers = new createjs.Container();
		pass.addChild(numbers);
		// (list, width, color, borderColor, label, vertical, arrows, corner, shadowColor, shadowBlur, loop, display, press, hold, holdDelay, holdSpeed, drag, dragSensitivity, dragRange, type, min, max, step, step2, arrows2, arrows2Scale, keyEnabled, keyArrows, rightForward, downForward)
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
		
		var code = view.code = new zim.Label("", 50, "Verdana", "#000");		
		zim.centerReg(code);
		code.x = stageW/2;
		code.y = 900;
		stage.addChild(code);
		
		return view;
	}	
	
	remote.space = function(text) {	
		text = text.replace(/(.)/g, "$1 ");
		return text.trim();
	}
	
	return remote;
}(remote||{});