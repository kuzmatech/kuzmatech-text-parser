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
        if(!params.type){

        }
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