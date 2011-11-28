
;(function($) {
    
    /**
     * Appends content at a given childNode index
     * @param {String|DomNode|jQueryObject} The content to append
     * @param {Number} The index to append at; 0 prepends, 1 appends after the first child, etc
     * @example $('div.advertisments').appendAt('<p>... so give us your cash</p>', 2);
     */
    $.fn.appendAt = function( content, index ) {
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
    /**
     * Appends content at a random childNode index
     * @param {String|DomNode|jQueryObject} The content to append
     * @example
     *  $('div.advertisments').appendAtRandom('<p>... so give us your cash</p>');
     */
    jQuery.fn.appendAtRandom = function( content ) {
        this.each(function(i, item) {
            var max = $(item).children().length,
                pos = Math.floor( Math.random() * (max+1) );
                $(item).appendAt(content, pos);
        });
        return this;
    };

})(jQuery);
