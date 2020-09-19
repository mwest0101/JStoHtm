"use strict";
class JStoHTML_HTML_gridDivTable{
    
    constructor(){
        
    };

    getNewDivTable(className=""){       
        return "<div class="+className+">";	
    }

    getDivTableRow(text=""){
        return "<!--"+text+" -->";	
    }

    getDivTableTitle(className="",text=""){
        return "<header class=\""+className+"\" >"+text+"</header>";			
    }

    getDivTableCol(className="",text=""){
        return "<div class=\""+className+"\" >"+text+"</div>";	
    }

    getDivTableEnd(){
        return "</div>";	
    }
}