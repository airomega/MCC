var columnCount = 0;

$(document).ready(
		function() {

			$('#addColumnButton').click(
					function() {
						var selectValue = $('#columnSelect :selected').val();
						var div = document.createElement('div');
						$(div).addClass("contentColumn").html(selectValue)
								.appendTo($("#contentColumnDiv"));
					});

		});

var getColumnCount = function() {
	return columnCount++;
};