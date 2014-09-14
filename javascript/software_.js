//VideoRay
if (document.images) 
{
	base = new Image;
	view = new Image;
	cockpit = new Image;
	camera = new Image;
	aswitch = new Image;
	
	base.src = "../images/cockpit_screenshot.png";
	view.src = "../images/cockpit_screenshot.png";
	cockpit.src = "../images/cockpit_screenshot.png";
	camera.src ="../images/camera_instrument.png";
	aswitch.src="../images/switch_select.png";
	
	function reset()
	{
		document.view.src = base.src;
	}
}