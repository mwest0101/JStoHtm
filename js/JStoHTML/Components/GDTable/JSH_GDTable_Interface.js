
class JSH_GDTable_Interface extends JSH_GDTable_Properties{

  addTable(className = "") {
    var tObjet = new HTML_GDTable();    
    tObjet.setClassName(className);
    this.add(tObjet);
    this.incTabs();
    return tObjet;
  }

  addRow(text = "", className = "") {
    var tObjet = new HTML_GDRow();
    tObjet.setText(text);
    this.add(tObjet);
    this.incTabs();
    return tObjet;
  }

  addTitle(text = "", className = "") {
    var tObjet = new HTML_GDTitle();
    tObjet.setText(text);
    tObjet.setClassName(className);
    this.add(tObjet);
    return tObjet;
  }

  addCol(text = "", className = "") {
    var tObjet = new HTML_GDCol();
    tObjet.setText(text);
    tObjet.setClassName(className);
    this.add(tObjet);
    return tObjet;
  }
  
  addEnd() {
    var tObjet = new HTML_GDEnd();
    this.decTabs();
    this.add(tObjet);
    return tObjet;
  }
}
