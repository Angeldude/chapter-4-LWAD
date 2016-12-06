var main = function() {
    "use strict";

    $('.comment-input button').on('click', function(e) {
        var new_comment = $("<p>");
        if ($('.comment-input input').val() !== "") {
            new_comment.text($('.comment-input input').val());
            new_comment.hide();
            $('.comments').append(new_comment);
            new_comment.fadeIn();
            $('.comment-input input').val("");
        }
    });

    $('.comment-input input').on('keypress', function(e) {
        var new_comment = $('<p>');
        if (e.keyCode === 13) {
            if ($(this).val() !== "") {
                new_comment.text($(this).val());
                new_comment.hide();
                $('.comments').append(new_comment);
                new_comment.fadeIn();
                $(this).val("");
            }
        }
    })

}

$(document).ready(main);
