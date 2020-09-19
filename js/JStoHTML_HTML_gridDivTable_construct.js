"use strict";
class JStoHTML_HTML_gridDivTable_construct{
    
   
    constructor(){
     
        var strConstruct=new JStoHTML_String_Construct();
        var divTable=new JStoHTML_HTML_gridDivTable();
        this.addNewDivTable();
    }

    addNewDivTable(className=""){       
        this.strConstruct.addString(this.divTable.getNewDivTable(className));	
    }

    addDivTableRow(text=""){
        this.strConstruct.addString(this.divTable.getDivTableRow(text));	
    }

    addDivTableTitle(className="",text=""){
        this.strConstruct.addString(this.divTable.getDivTableTitle(className,text));	
    }

    addDivTableCol(className="",text=""){
        this.strConstruct.addString(this.divTable.getDivTableCol(className,text));
    }

    addDivTableEnd(){
        this.strConstruct.addString(this.divTable.getDivTableEnd());
    }

}