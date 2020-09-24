"use strict";
class JStoHTML_HTML_GDTable_Construct extends JStoHTML_HTML_GDTable{
   

    constructor(){
        super();
        this.addTable();
    }
    
    addTable(className=""){       
        this.addString(this.getNewTable(className));	
        return this;
    }

    addRow(text=""){
        this.addString(this.getTableRow(text));	
        return this;
    }

    addTitle(className="",text=""){
        this.addString(this.getTableTitle(className,text));	
        return this;	
    }

    addCol(className="",text=""){
        this.addString(this.getTableCol(className,text));	
        return this;
    }

    addEnd(){
        this.addString(this.getTableEnd());	
        return this;
    }

}