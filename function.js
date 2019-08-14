function ooxxGetStyle(element,style){
    if(element){
        return getComputedStyle(element,null).getPropertyValue(style.toString())
    }
}
function ooxxMonkeyAttack(param) {
    if(param){
        script = document.createElement('script')
        script.src ='https://cdnjs.cloudflare.com/ajax/libs/gremlins.js/0.1.0/gremlins.min.js'
        document.getElementsByTagName('head')[0].appendChild(script)
        setTimeout(() => {
        gremlins
            .createHorde()
            .gremlin(gremlins.species.clicker().clickTypes(['click']))
            .unleash({ nb: 1000 })
        }, 3000)
    }
}