class JSH_GDTable_Properties extends JSH_components{
    constructor() {
        super();
        var text = "";
        var className = "";
    }
    getClassName() {
        return this.className;
    }
    setClassName(in_className) {
        this.className = in_className;
    }

    getText() {
        return this.text;
    }

    setText(in_text) {
        this.text = in_text;
    }
  }