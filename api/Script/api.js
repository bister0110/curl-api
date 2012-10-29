define(['jquery', 'js!/Script/bootstrap.js', 'css!/Style/bootstrap.css'], function ($) {
    var exports = {};
    
    exports.getModal = function (Header, Body, Footer) {

        var modalHead = '<div class="modal hide" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
	    '    <div class="modal-header">' +
	    '	    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
	    '	    <h3 id="myModalLabel">' + Header + '</h3>' +
	    '    </div>';

        var modalBody = '    <div class="modal-body">' + Body + '</div>';

        var modalFooter = '    <div class="modal-footer">' + Footer +
	    '	    <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>' +
	    '	    <button class="btn btn-primary">Save changes</button>' +
	    '    </div>' +
        '</div>';
        var modal = modalHead + modalBody + modalFooter;

        return $("#myDiv").html(modal);
    }
    return exports;
});