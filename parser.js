var KZMPARSER = ( function () {
    "use strict";
    var pblic = {};
    //Constants defintions
    const mdparseroptions = {
        html: true,
        breaks: true,
        typographer: true
    }
    const bbparseroptions = {
        removeMisalignedTags: false,
        addInLineBreaks: false
    }
    const defoptions = {
        bbcode: true,
        markdown: true
    }
    //Defining functions
    let mdit = window.markdownit(defoptions) || require('markdown-it')(defoptions);
    let bbcode = window.XBBCODE || require('xbbcode') || require('./xbbcode');
    let _ = window._ || require('lodash') || require('./lodash')
    let mdrender = (raw) => {
        return mdit.render(raw)
    }
    let bbrender = (raw) => {
        let holder = bbparseroptions;
        holder.text = raw;
        return bbcode.process(holder)
    }
    pblic.render = (raw, optns = defoptions) => {
        //Checks if an options object was passed and if not then sets the options to default.
        return _.unescape(bbrender(mdrender(raw)).html)
    }
    return pblic
});
try{
    if(module){
        module.exports = KZMPARSER;
    }
}
catch(ReferenceError){
    let debug = window.debug || (typeof v8debug === 'object')
    debug? console.warn('CommonJS not supported, module not exported.') : null
}