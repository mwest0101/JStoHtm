"use strict";
class JStoHTML_Style{
    
   
    constructor(){
    };

    getBold(){
       retunr "display: block;";	
    } 

    getStyleInline(){
        return "style=\""; 
    }

    getStyleWidthInline(text){
        return "width: "+text+"%; "; 
    }

    getStyleBorderInline(text){
        return "border: "+text+"; "; 
    }

    getStylebackgroundColorInline(text){
        return "background-color: "+text+"; "; 
    }

    getStyleInlineEnd(){
        return "\" "; 
    }

    getStyleInLineAlter(text){
        return "[ST("+text+")]"; 
    }
    getStyleInlineEnd(){
        return "\" "; 
    }

}