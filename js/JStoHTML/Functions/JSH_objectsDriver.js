class JSH_ObjectDriver extends JStoHTML_strConstruct {
  constructor() {
    super();
    this.objesctList = [];
    this.count = 0;
    this.functions = new JSH_functions();
  }

  getCount() {
    return this.count;
  }

  setCount(value) {
    this.count = value;
  }
  
  incCount() {
    this.setCount(this.getCount() + 1);
  }

  getElementsAmount() {
    return this.objesctList.length;
  }

  add(pObject) {
    this.objesctList[this.getElementsAmount()] = pObject;
  }

  getElement(pElement) {
    return this.objesctList[pElement];
  }

  getOneElement() {
    var retObj;
    if (this.getCount() < this.getElementsAmount()) {
      retObj = this.getElement(this.count);
      this.incCount();
    } else {
      this.setCount(0);
      retObj = false;
    }
    return retObj;
  }

  getLastAndRemove() {
    return this.objesctList.pop();
  }

  convAllObjToString() {
    var strResult = "";
    var pObject;
    this.resetString();    
    while ((pObject = this.getOneElement())) {    
      if (pObject.getStr) {
        this.addString(pObject.getStr());        
      }
      if (pObject instanceof JSH_components) {  
        /*
        this.incTabs()      
        this.addString(pObject.convAllObjToString().setContTab(this.getContTab(value)));         
        this.decTabs();
        */
       pObject.setContTab(this.getContTab()+pObject.getContTab());      
       this.addString(pObject.convAllObjToString().getString());         
      

      }    
    }
    return this;
  }

  getResulString(){
    this.convAllObjToString();
    return this.getString();
  }


  
}
