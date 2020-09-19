"use strict";
class JStoHTML extends JStoHTML_HTML_divTable_construct{
    
    constructor(pStringCreator=""){
        
        if (pStringCreator==null){
            var stringCreator= new classStringCreator();
        }else{
            stringCreator=pStringCreator;
        }
        super.newTableDiv();
    };
    
    setHtmlToTag(contentId="") {
        document.getElementById(contentId).innerHTML = this.stringCreator.getR();    
    }

    

}