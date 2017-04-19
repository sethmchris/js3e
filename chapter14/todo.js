$(document).ready(function(e) {
	$('#add-todo').button({
		icons: {
			icons: {
				primary: "ui-icon-circle-plus"
			}
		}
	}).click(function() {
		$('#new-todo').dialog('open');
	}); // end button

	$('#new-todo').dialog({
		modal: true, // require user to close box
		autoOpen: false,
		buttons : {
			"Add task" : function () {

			},
			"Cancel": function () {
				$(this).dialog('close');
			}
		}
	}); // end dialog
}); // end ready