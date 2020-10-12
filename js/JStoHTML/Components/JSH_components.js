class JSH_components extends JSH_ObjectDriver {
    
    newGDTable(className = "") {
        var tObjet = new JSH_GDTable_Interface(className);
        tObjet.addTable(className);
        return tObjet;
    }
    
    addGDTable(className = "") {
        var tObjet = new JSH_GDTable_Interface(className);
        tObjet.addTable(className);
        this.add(tObjet);        
        return tObjet;
    }

}
