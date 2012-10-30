define(['jquery', 'js!Script/bootstrap.js', 'css!Style/bootstrap.css'], function ($) {
    var exports = {};
    
	//Used to create a moda box
    exports.getModal = function (type, header, body, footer) {
		//If parameter type is different from hide
		if (type != 'hide') {
			type = '';
		}
        var modalHead = '<div class="modal ' + type + '" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
	    '    <div class="modal-header">' +
	    '	    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
	    '	    <h3 id="myModalLabel">' + header + '</h3>' +
	    '    </div>';
        var modalBody = '    <div class="modal-body">' + body + '</div>';
        var modalFooter = '    <div class="modal-footer">' + footer +
	    '	    <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>' +
	    '	    <button class="btn btn-primary">Save changes</button>' +
	    '    </div>' +
        '</div>';
		var modalButton = '<a href="#myModal" class="btn" data-toggle="modal">Launch demo modal</a>'
		//If parameter type is different from hide we want to show modal box
		if (type != 'hide') {
			var modal = modalHead + modalBody + modalFooter;
			return $("#myDiv").html(modal).modal({show:true});
		}
		//If parameter type is hide we want to show a button
		else {
			var modal = modalButton + modalHead + modalBody + modalFooter;
			return $("#myDiv").html(modal);
		} 
    }
	//Used to validate input fields
	exports.getValidation = function () {
		//To check if it is a compare or a RegExpr validation
		$('.validation').keyup(function () {
			if ($(this).attr("data-validation") != "compare"){
				if ((eval($(this).attr("data-validation"))).test($(this).val())) {
					$('#'+$(this).attr("data-lable")).html('<img src="Style/img5.jpg">');
				}
			}
			else {
				if (($(this).val()) == ($('#'+($(this).attr("data-compare"))).val())){
					$('#'+$(this).attr("data-lable")).html('<img src="Style/img5.jpg">');
				}
			}
		})
		return null;
	}
	
	
    return exports;
});