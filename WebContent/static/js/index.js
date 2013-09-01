var columnCount=0;

$(document).ready(function() {
	$('#addColumnButton').click(function() {
		$("#contentColumnDiv").append("<div class='contentColumn'>1</div>");
    });
	
});

var getColumnCount= function(){
	return columnCount++;
};