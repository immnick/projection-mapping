
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
				stage.update();
			});
			
			socket.on("error", function() {
				zog("connect error");
				view.pass.text = "connection error";
				view.pass.label.y -= 210;
				stage.update();
			});			
		}

		data.send = function(face) {
			socket.setProperties({face:face});
		}		

		return data;
	}	
	
	return remote;
}(remote||{});