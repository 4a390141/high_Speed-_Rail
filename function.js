function ooxxGetStyle(element,style){
    if(element){
        return getComputedStyle(element,null).getPropertyValue(style.toString())
    }
}
function ooxxMonkeyAttack(param,time) {
    if(param){
        monkeyAttack = document.createElement('script')
        monkeyAttack.src ='https://cdnjs.cloudflare.com/ajax/libs/gremlins.js/0.1.0/gremlins.min.js'
        document.getElementsByTagName('head')[0].appendChild(monkeyAttack)
        setTimeout(() => {
        gremlins
            .createHorde()
            .gremlin(gremlins.species.clicker().clickTypes(['click']))
            .unleash({ nb: time||1000 })
        }, 3000)
    }
    // script = document.createElement('script')
    // script.src =
    //   'https://4a390141.github.io/high_Speed_Rail/function.js'
    // document.getElementsByTagName('head')[0].appendChild(script)
    // script.onload = ()=>{ooxxMonkeyAttack('click')}
}