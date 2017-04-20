// socket data for app
var remote = function(remote) {
	
	remote.makeData = function(view, server, appName) {
		
		var data = {};
		var socket;
		
		data.makeSocket = function(code) {
	
			socket = data.socket = new zim.Socket(server, appName, code);
		
			socket.on("ready", function() {
				zog("connected");
				view.pass.hide();
				view.code.text = remote.space(code);
				zim.centerReg(view.code); 
				view.code.x +=10;
			});
			
			var currentPic = null;

			villains = {villain1:frame.asset("01-villain.jpg"),
						villain2:frame.asset("02-villain.jpg"),
						villain3:frame.asset("03-villain.jpg"),
						villain4:frame.asset("04-villain.jpg"),
						villain5:frame.asset("05-villain.jpg"),
						villain6:frame.asset("06-villain.jpg"),
						villain7:frame.asset("07-villain.jpg"),
						villain8:frame.asset("08-villain.jpg"),
						villain9:frame.asset("09-villain.jpg"),
						villain10:frame.asset("10-villain.jpg"),
						villain11:frame.asset("01-hero.jpg"),
						villain12:frame.asset("02-hero.jpg"),
						villain13:frame.asset("03-hero.jpg"),
						villain14:frame.asset("04-hero.jpg"),
						villain15:frame.asset("05-hero.jpg"),
						villain16:frame.asset("06-hero.jpg"),
						villain17:frame.asset("07-hero.jpg"),
						villain18:frame.asset("08-hero.jpg"),
						villain19:frame.asset("09-hero.jpg"),
						villain20:frame.asset("10-hero.jpg")
					   };

			villainsound = {villain1:frame.asset("01-villain.wav"),
							villain2:frame.asset("02-villain.wav"),
							villain3:frame.asset("03-villain.wav"),
							villain4:frame.asset("04-villain.wav"),
							villain5:frame.asset("05-villain.wav"),
							villain6:frame.asset("06-villain.wav"),
							villain7:frame.asset("07-villain.wav"),
							villain8:frame.asset("08-villain.wav"),
							villain9:frame.asset("09-villain.wav"),
							villain10:frame.asset("10-villain.wav"),
							villain11:frame.asset("01-hero.wav"),
							villain12:frame.asset("02-hero.wav"),
							villain13:frame.asset("03-hero.wav"),
							villain14:frame.asset("04-hero.wav"),
							villain15:frame.asset("05-hero.wav"),
							villain16:frame.asset("06-hero.wav"),
							villain17:frame.asset("07-hero.wav"),
							villain18:frame.asset("08-hero.wav"),
							villain19:frame.asset("09-hero.wav"),
							villain20:frame.asset("10-hero.wav")	
						   };

			socket.on("data", function(data) {			

				if (currentPic != villains[data.face]) {
					currentPic = villains[data.face];
					view.panel.addChild(currentPic);
					currentPic.scale(view.slider.currentValue);
					currentPic.alpha = 0;
					currentPic.animate({alpha:1}, 1000);
					createjs.Sound.stop();
					villainsound[data.face].play({volume:1, loop:0});
					stage.update();
				}	
			});	
			
			socket.on("error", function() {
				zog("connect error");
				view.pass.text = "connection error";
				view.pass.label.y -= 210;
				stage.update();
			});	
		}

		return data;
	}	
	
	return remote;
}(remote||{});