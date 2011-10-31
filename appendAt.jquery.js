jQuery.fn.appendAt = function( content, index ) {
    this.each(function(i, item) {
        var $content = $(content);
        if ( index === 0 ) {
            $(item).prepend($content);
        } else {
            $content.insertAfter($(item).children().eq(index-1));
        }
    });
    return this;
};
jQuery.fn.appendAtRandom = function( content ) {
    this.each(function(i, item) {
        var max = $(item).children().length,
            pos = Math.floor( Math.random() * (max+1) );
            $(item).appendAt(content, pos);
    });
    return this;
};
