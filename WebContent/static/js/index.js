var columnCount=0;

$(document).ready(function() {
	$('#addColumnButton').click(function() {
		$("#contentColumnDiv").append("<div id='contentColumn'>1</div>");
    });
	
});

var getColumnCount= function(){
	return columnCount++;
};