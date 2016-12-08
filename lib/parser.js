"use strict";
const defaults = {
    mdparseroptions: {
        html: true,
        breaks: true,
        typographer: true
    },
    bbparseroptions: {
        removeMisalignedTags: false,
        addInLineBreaks: false
    },
    defoptions: {
        bbcode: true,
        markdown: true
    }
}


var KZMPARSER = ( function (options = defaults) {
    var pblic = {};
    //Constants defintions
    const mdparseroptions = options.mdparseroptions
    const bbparseroptions = options.bbparseroptions
    const defoptions = options.defoptions
    const isBrowser = typeof window !== 'undefined';
    //Defining functions
    let mdit = isBrowser? window.markdownit(defoptions) : require('markdown-it')(defoptions);
    let bbcode = isBrowser? window.XBBCODE : require('../dependencies/xbbcode');
    let _ = isBrowser? window._ : require('lodash') || require('../dependecies/lodash')
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
        return (_.unescape(bbrender(mdrender(raw)).html)).trim()
    }
    pblic.options = () => {
        return options
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