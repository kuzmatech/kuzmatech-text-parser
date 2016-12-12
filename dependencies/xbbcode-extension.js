var KZMBBCODEEXTENSIONS = ( () => {
    //Def Const
    let DEFAULTS = {
        type: 'bootstrap',
        button: {
            classes: 'btn btn-large btn-block btn-default btn-primary'
        }
    }
    //Def Vars
    var public = {}
    public.button = {
        openTag: (params, content) => {
            if(!params){
                return `<button class="${DEFAULTS.button.classes}">`
            }
            else{
                return this[`${DEFAULTS.type}ButtonHandler`](params)
            }
        },
        closeTag: (params, content) => {
            return '</button>'
        }
    }
    //Def Functions
    let bootstrapButtonHandler = (params) => {
        let classes = [ 'btn' ]
        params.type? classes.push(`btn-${params.type}`): classes.push('btn-default')
        if(params.block !== false) classes.push('btn-block')
        if(params.size) classes.push(`btn-${params.size}`)
        if(params.active) classes.push('active')
        const classstring = classes.join(' ')
        return `<button class="${classes.join(' ')}" ${params.disabled? 'disabled="disabled"': null}>`
    }
    return public
})

try {
    if(module){
        module.exports = KZMBBCODEEXTENSIONS;
    }
}
catch(ReferenceError){
    const debug = window.debug || (typeof v8debug === 'object')
    debug? console.warn('CommonJS not supported, module not exported.') : null
}