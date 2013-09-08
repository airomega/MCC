$(document).ready(function(){

	$('.S-text').click(function(){
		
		
		var selectedColour = randomColour();
		var selectedFontSize = randomFontSize();
		var selectedFontType = randomFontType();		
		$(this).css({'color':selectedColour,'font-size':selectedFontSize,'font-family':selectedFontType});
	});
	
	
	$('T-text').click();
	$('E1-text').click();
	$('V-text').click();
	$('E-text').click();
	$('M-text').click();
	$('c-text').click();
	$('C-text').click();
	$('U-text').click();
	$('L1-text').click();
	$('L2-text').click();
	$('O-text').click();
	$('U-text').click();
	$('G-text').click();
	$('H-text').click();


	
	function randomColour(){
		colours = [ '#F80012', '#FF6C00','#009E8E','#1DD300','#FC717B','#A2000C','#FF9140','#A64600','#5DCFC3','#00675C','#52E93A','#138900'];
		return colours[randomInt(colours.length)];
	}
	
	function randomFontSize(){
		fontSize = [ 'xx-small', 'x-small','small','medium','large','x-large','xx-large'];
		return fontSize[randomInt(fontSize.length)];
	}
	
	function randomFontType(){
		fontType = [ 'Times New Roman','Georgia','Serif','Calibri','cursive','monospace','sans-serif','Verdana'];
		return fontType[randomInt(fontType.length)];
	}
	
	function randomInt(base){		
		var random= Math.floor(Math.random()*base);
		return random;
	}
	
});