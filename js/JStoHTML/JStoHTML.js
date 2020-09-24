
"use strict";
class JStoHTML extends JStoHTML_Components{
    
    
    constructor(pInitalString=""){
       var components=[];
       super();

       this.addString(pInitalString);
    };

    newGDTable(){
        let vComp=new JStoHTML_HTML_GDTable_Construct(); 
        return vComp; 
    }

    

}