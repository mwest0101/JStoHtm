"use strict";

class JStoHTML_String_Construct {

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
    
    addString(text){
        this.setString(this.getReturnStr()+text);
    }

    setHtmlToTag(contentId="") {
        document.getElementById(contentId).innerHTML = this.getRetStr();    
    }

    replaceString(searchSourceText,valToReplace){
        var result=super.getString();
        return result.replace(searchSourceText, valToReplace,"gi");
    }
    
    getEndLine(){
        return this.endln;
    }   

    
    

}