var columnCount = 0;

$(document).ready(
		
		function() {

			$('#addColumnButton').click(
					function() {
						var selectValue = $('#columnSelect :selected').val();
						var div = document.createElement('div');
						$(div).addClass("contentColumn tertiary").html(
								selectValue).appendTo($("#contentColumnDiv"));
					});

			$('#schemeButton').click(function() {
				var selectValue = $('#schemeSelect :selected').val();
				if (selectValue == 'blue') {
					updateStyleSheet('blue');
				} else if (selectValue == 'yellow') {
					updateStyleSheet('yellow');
				} else {
					updateStyleSheet('purple');
				}
			});

			function updateStyleSheet(filename) {

				newstylesheet = "/StevesPlace/static/css/" + filename + ".css";

				if ($("#dynamic_css").length == 0) {
					$("head").append("<link>");
					css = $("head").children(":last");
					css.attr({
						id : "dynamic_css",
						rel : "stylesheet",
						type : "text/css",
						href : newstylesheet
					});

				} else {
					$("#dynamic_css").attr("href", newstylesheet);
				}

			}
		});
