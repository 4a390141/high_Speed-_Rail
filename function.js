function ooxxGetStyle(element,style){
    if(element){
        return getComputedStyle(element,null).getPropertyValue(style.toString())
    }
}