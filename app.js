var main = function() {
    "use strict";

    var addCommentInput = function(e) {
        var new_comment = $("<p>");
        if (!e.keyCode) {
            e.keyCode = 13;
        }
        if (e.keyCode === 13) {
            if ($('.comment-input input').val() !== "") {
                new_comment.text($('.comment-input input').val());
                new_comment.hide();
                $('.comments').append(new_comment);
                new_comment.fadeIn();
                $('.comment-input input').val("");
            }
        }
    }

    $('.comment-input').on('click', 'button', addCommentInput);

    $('.comment-input').on('keypress', 'input', addCommentInput);

}

$(document).ready(main);
