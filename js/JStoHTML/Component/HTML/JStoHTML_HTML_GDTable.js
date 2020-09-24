"use strict";
class JStoHTML_HTML_GDTable extends JStoHTML_strConstruct{
    
    getNewTable(className=""){       
        return "<div class="+className+">";	
    }

    getTableRow(text=""){
        return "<!--"+text+" -->";	
    }

    getTableTitle(className="",text=""){
        return "<header class=\""+className+"\" >"+text+"</header>";			
    }

    getTableCol(className="",text=""){
        return "<div class=\""+className+"\" >"+text+"</div>";	
    }

    getTableEnd(){
        return "</div>";	
    }
}