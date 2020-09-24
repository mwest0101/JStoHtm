"use strict";

class JStoHTML_Components extends JStoHTML_strConstruct{

    constructor(){
        super();
        this.objesctList = [];
        this.count =0;
        
    };

    getCount(){
        return this.count;
    }

    setCount(value){
        this.count=0;
    }
    
    getElementsAmount(){
        return this.objesctList.length;
    }

    add(pObject){
        this.objesctList[this.getElementsAmount()]=pObject;
    } 
    getElement(pElement){
        return this.objesctList[pElement];
    }
    
    getOneElement(){
        var retObj
        if (this.getCount()<this.getElementsAmount()){
            retObj=this.getElement(this.count);
            this.setCount(this.getCount()+1);
        }else{
            this.setCount(0);
            retObj=false;

        }
        return retObj;
    }

    getLastAndRemove(){
        return this.objesctList.pop();
    }
    
    getAllObjToString(){
        while(this.addString(this.getOneElement().getString()))
        return this.getString();
    }
    
    
}