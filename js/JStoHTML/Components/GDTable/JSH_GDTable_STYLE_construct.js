class JSH_GDTable_STYLE_construct extends JSH_GDTable_STYLE {
  constructor() {
    var mainClassName = "def_gridMain_01";
    var cellClassName = "def_gridCell_01";
    var cols = 3;
    var rows = 3;
    var spanCols = 3;
    var spanRow = 3;
    var gap = 10;
    var defColor = "#ff8000";
    var initCols = 0;
    var amountCols = 0;
    var initRows = 0;
    var amountRows = 0;
  }

  getMainClassName() {
    return this.mainClassName;
  }

  setMainClassName(in_mainClassName) {
    this.mainClassName = in_mainClassName;
  }

  getCellClassName() {
    return this.cellClassName;
  }

  setCellClassName(in_cellClassName) {
    this.cellClassName = in_cellClassName;
  }

  getCols() {
    return this.cols;
  }

  setCols(in_cols) {
    this.cols = in_cols;
  }

  getRows() {
    return this.rows;
  }

  setRows(in_rows) {
    this.rows = in_rows;
  }

  getSpanCols() {
    return this.spanCols;
  }
  setSpanCols(in_spanCols) {
    this.spanCols = in_spanCols;
  }

  getSpanRow() {
    return this.spanRow;
  }
  setSpanRow(in_spanRow) {
    this.spanRow = in_spanRow;
  }
  getGap() {
    return this.gap;
  }
  setGap(in_gap) {
    this.gap = in_gap;
  }
  getDefColor() {
    return this.defColor;
  }
  setDefColor(in_defColor) {
    this.defColor = in_defColor;
  }
  getInitCols() {
    return this._initCols;
  }

  setInitCols(in_initCols) {
    this.initCols = in_initCols;
  }

  getAmountCols() {
    return this.amountCols;
  }
  setAmountCols(in_amountCols) {
    this.amountCols = in_amountCols;
  }

  getInitRows() {
    return this.initRows;
  }
  setInitRows(in_initRows) {
    this.initRows = in_initRows;
  }

  getAmountRows() {
    return this.amountRows;
  }

  setAmountRows(in_amountRows) {
    this.amountRows = in_amountRows;
  }

  addMainTableStyle() {
    this.addString(this.getStrIniClass(this.getMainClassName));
    this.addString(this.getStrDisplayType());
    this.addString(this.getStrGridGap(this.getGap()));
    this.addString(this.getStrGridTempCols(this.getCols()));
    this.addString(this.getStrGridTempRows(this.getRow()));
    this.addString(this.getStrEndClass());
  }

  addCellSpan(className) {
    this.addString(this.getStrIniClass(className));
    this.addString(this.getStrBackColor(this.defColor));
    this.addString(this.getStrGridSpanCols(this.initInCols, this.amountCols));
    this.addString(this.getStrGridSpanRows(this.initInRows, this.amountRows));
  }
}
