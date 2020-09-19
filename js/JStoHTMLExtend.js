"use strict";

class JStoHTMLExtendadd extends JSGrid{
    static countEndDiv;
    static maxVal;
    constructor(pSize=10){
        super();
        this.size=0;
        this.colSizes="";
        this.col=1;
        this.row=1;
        if (isNaN(pSize)){
            this.colSizes=pSize;
        }else{
            this.size=pSize;
        }
        this.countColsTitle=0;
        this.countCols=0;
        this.countRows=0;
        
        this.countMaxColsTitle=0;
        this.countMaxCols=0;
        this.countMaxRows=0;

        this.countEndDiv = 1;
        this.maxVal=1;

        this.sizePad=0.5;
        this.styleBorder=1;
        this.styleBackgroundColor="";
        this.newTable();
        
    };
    
    incCountDiv(){
        this.setCountEndDiv(this.getCountEndDiv()+1);
    }
    
    decCountDiv(){
        this.setCountEndDiv(this.getCountEndDiv()-1);
    }
    
    getSize(){
        return this.size;
    }

    setSize(value){
        this.size=value;
    }
        
    getStyleBorder(){
        return this.styleBorder;
    }

    setStyleBorder(value){
        return this.styleBorder=value;
    }

    getStyleBackgroundColor(){
        return this.styleBackgroundColor;
    }

    setStyleBackgroundColor(value){
        return this.styleBackgroundColor=value;
    }  

    getCountCols(){
        return this.countCols;
    }

    setCountCols(value){
        this.countCols=value;
    }

    getCountColsTitle(){
        return this.countColsTitle;
    }

    setCountColsTitle(value){
        this.countColsTitle=value;
    }


    getCountRows(){
        return this.countRows;
    }

    setCountRows(value){
        this.countRows=value;
    }
    
    setMaxVal(value){
        this.maxVal=value;
    }
    
    getMaxVal(){
        return this.maxVal;
    }
    
    setColSizes(value){
        this.colSizes=value;
    }

    getColSizes(){
        return this.colSizes;
    }

    setCountMaxCols(value){
        this.countMaxCols=value;
    }

    setCountMaxColsTitle(value){
        this.countMaxColsTitle=value;
    }

    incCountMaxCols(value){
        if (value>this.getCountMaxCols()){
            this.setCountMaxCols(value);
           // console.log("this.countMaxCols="+this.getCountCols());
        }
    }

    incCountMaxColsTitle(value){
        if (value>this.getCountMaxColsTitle()){
            this.setCountMaxColsTitle(value);
           // console.log("this.countMaxColsTitle="+this.getCountMaxColsTitle());
        }
    }

    setCountMaxRows(value){
        if (value>this.getCountRows()){
            this.countMaxRows=value;
        }
    }

    getCountMaxCols(){
        return this.countMaxCols;
    }
    
    getCountMaxColsTitle(){
        return this.countMaxColsTitle;
    }

    resetCountMaxCols(){
        //console.log("\n\n");
        this.setCountCols(0);
        this.setCountColsTitle(0);
        this.setMaxVal(1);
        this.setCountMaxCols(0);
        this.setCountMaxColsTitle(0);
    }


    getCountMaxRows(){
        return this.countMaxRows;
    }
    
    calcMaxValFromCols(){
        if (this.getCountMaxCols()>this.getMaxVal()){
            this.setMaxVal(this.getCountMaxCols());
        }else if (this.getCountMaxColsTitle()>this.getMaxVal()){
            this.setMaxVal(this.getCountMaxColsTitle());
        }

        //console.log("this.maxVal="+this.getMaxVal());
    }

    getMaxValFromCols(){
        this.calcMaxValFromCols();
        return this.getMaxVal();
    }

    newTable(){    
        this.incCountDiv();	
    }

    newTableDiv(){
        super.newTableDiv();	
        this.incCountDiv();	
    }
    
    getCountEndDiv(){
        return this.countEndDiv;
    }

    setCountEndDiv(value){
        this.countEndDiv=value;       
    }

    endTableDiv(){
        super.endTableDiv();	
        this.decCountDiv();
    }

    insertTableDivRow(){
        if (this.getCountEndDiv()>1){
            this.endTableDiv();
        }
        super.insertTableDivRow();
        this.incCountDiv();	
        this.replaceStringsCodes();
        this.resetCountMaxCols();
    }
    
    insertTableDivTitle(text,colspan=0){
        this.setCountColsTitle(this.getCountColsTitle()+1);
        this.incCountMaxColsTitle(this.getCountColsTitle());
        var textToAdd="";
        textToAdd=super.getStyleInLineAlter(this.getCountColsTitle());
        super.insertTableDivTitle(text,textToAdd);
    }

    insertTableDivCol(text,colspan=0){
        this.setCountCols(this.getCountCols()+1);
        this.incCountMaxCols(this.getCountCols());
        var textToAdd="";
        textToAdd=super.getStyleInLineAlter(this.getCountCols());
        super.insertTableDivCol(text,textToAdd);
    }


    creatArrayFromString(text){
        return text.split(",");
    }

    getOneColSize(pPosValue){
        var result=this.creatArrayFromString(this.getColSizes());
        return result[pPosValue];
    }

    createMultiHeader(text){
        //this.setCountEndDiv(0);
        var mySplitResult=creatArrayFromString(text);
        this.insertTableDivRow();
        for(var i = 0; i < mySplitResult.length; i++){
            super.insertTableDivTitle(mySplitResult[i]);
            //super.endTableDiv();
        }
        //this.endTableDiv();
    }
    calcEqualSizeOfColumns(){
        var result;
        //result=(this.getSize()/this.getMaxValFromCols())+(this.sizePad+this.getMaxValFromCols());
        result=(this.getSize()/this.getMaxValFromCols());
        return result;
    }

    calcSizeOfColums(pPosValue){
        var result="";
        if(this.getColSizes()!=""){
            result=this.getOneColSize(pPosValue);
        }else{
            result=this.calcEqualSizeOfColumns();
        }
        return result;
    }

    styleComponen(pValueWidth){
        var valToReplace="";
        valToReplace=super.getStyleInline()
        valToReplace=valToReplace+super.getStyleWidthInline(this.calcSizeOfColums(pValueWidth-1));
        if (this.getStyleBorder()!=1){
            valToReplace=valToReplace+super.getStyleBorderInline(this.getStyleBorder());
        }       
        if (this.getStyleBackgroundColor()!=""){
            valToReplace=valToReplace+super.getStylebackgroundColorInline(this.getStyleBackgroundColor());
        }
        
        valToReplace=valToReplace+super.getStyleInlineEnd();
        return valToReplace;
    }

    
    replaceString(searchSourceText,valToReplace){
        var result=super.getReturnStr();
        super.setReturnStr(result.replace(searchSourceText, valToReplace,"gi"));
    }

    replaceStyles(){
        var valToReplace="";
        for(var i=1; i<(this.getMaxValFromCols()+1); i++){  
            valToReplace=this.styleComponen(i);
            this.replaceString(super.getStyleInLineAlter(i),valToReplace);
        }
    }

    replaceStringsCodes(){
        this.replaceStyles();
    }

    getHTML(){
        while(this.getCountEndDiv()>0){
            this.endTableDiv();
        }
         this.replaceStringsCodes();
        return super.getReturnStr();
    }

    setHtmlToTag(contentId="") {
        document.getElementById(contentId).innerHTML = super.getHTML();    
    }

}