"use strict";

class JStoHTML_strConstruct {

    constructor(){
        this.returnStr = "";
        this.endln="\n";
    };

    setString(text){
        //console.log("html="+text);
        this.returnStr=text+this.getEndLine();
    } 
    
    getString(){
        return this.returnStr;
    } 
    
    add(text){
        this.addString(text);
    }

    addString(text){
        this.setString(this.getString()+text);
    }

    setHtmlToTag(contentId="") {
        document.getElementById(contentId).innerHTML = this.getString();    
    }

    replaceString(searchSourceText,valToReplace){
        var result=super.getString();
        return result.replace(searchSourceText, valToReplace,"gi");
    }
    
    getEndLine(){
        return this.endln;
    }   

    
    

}