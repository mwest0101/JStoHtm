class JStoHTML_strConstruct {
  constructor() {
    this.returnStr = "";
    this.endln = "\n";
    this.tabln = "        ";
    this.contTab = 0;
    this.endIsEnabled = true;
    this.tabIsEnabled = true;
  }
  getEndLine() {
    return this.endln;
  }
  getTabLine() {
    return this.tabln;
  }

  oneLineEnd(text) {
    var retStr;
    if (text.substr(this.getEndLine().length * -1) == this.getEndLine()) {
      retStr = text;
    } else {
      retStr = text + this.getEndLine();
    }
    return retStr;
  }

  setString(text) {
    this.returnStr = text;
    
  }



  getString() {
    return this.returnStr;
  }

  resetString() {
    this.returnStr = "";
  }

  addString(text) {   
    this.setStringFilter(this.getString() + text);    
  }

  setContTab(value) {
    this.contTab = value;
  }

  getContTab(value) {
    return this.contTab;
  }

  incTabs() {
    this.setContTab(this.getContTab() + 1);
  }

  decTabs() {
    this.setContTab(this.getContTab() - 1);
  }

  getStrToTabs() {
    var strRes = "";
    for (let i = 0; i < this.getContTab(); i++) {
        strRes = strRes + this.getTabLine();
    }
    return strRes;
  }
  
  setStringFilter(text){
    text = text.trim();
    if (text != "") {        
        this.setString(this.getStrToTabs()+this.oneLineEnd(text));
    }
  }

  setHtmlToTag(contentId = "") {
    document.getElementById(contentId).innerHTML = this.getEndLine()+this.getString();
  }

  replaceString(searchSourceText, valToReplace) {
    var result = super.getString();
    return result.replace(searchSourceText, valToReplace, "gi");
  }


}