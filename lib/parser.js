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


var KZMPARSER = ((options = defaults) => {
    //Constants defintions
    const isBrowser = typeof window !== 'undefined';
    const _ = isBrowser ? window._ : require('lodash')
    const bbcode = isBrowser ? window.XBBCODE : require('../dependencies/xbbcode/xbbcode');
    const bbcodext = isBrowser ? window.KZMBBCODEEXTENSIONS() : require('../dependencies/xbbcode-extension/xbbcode-extension')()
    const bbparseroptions = options.bbparseroptions
    const defoptions = options.defoptions
    const mdparseroptions = options.mdparseroptions
    const mdit = isBrowser ? window.markdownit(defoptions) : require('markdown-it')(defoptions);
    //Defining the public object that will be exported
    var pblic = {};
    //Defining functions
    let mdrender = (raw) => {
        return mdit.render(raw)
    }
    let bbrender = (raw) => {
        let holder = bbparseroptions;
        holder.text = raw;
        return bbcode.process(holder)
    }
    //Main
    bbcode.addTags(bbcodext)
    pblic.render = (raw, optns = defoptions) => {
        //Checks if an options object was passed and if not then sets the options to default.
        return (_.unescape(bbrender(mdrender(raw)).html)).trim()
    }
    pblic.options = () => {
        return options
    }
    pblic.setOptions = (type = 'def', options) => {
        switch (type) {
            case ('md'):
                Object.assign(mdparseroptions, options)
                break
            case ('bb'):
                Object.assign(bbparseroptions, options)
                break
            case ('def'):
                Object.assign(defoptions, options)
                break
            default:
                throw ReferenceError
        }
    }
    pblic.addBBTags = (tags) => {
        bbcodee.addTags(tags)
    }
    //Return the public object
    return pblic
});
try {
    //Checks if node
    if (module) {
        module.exports = KZMPARSER();
    }
}
catch (ReferenceError) {
    //Handles the errors caused by the node check.
    let debug = window.debug || (typeof v8debug === 'object')
    debug ? console.warn('CommonJS not supported, module not exported.') : null
}