// add blockly block with three input
// left input is a list of float
// middle input is a operator: <, <=, >, >=, ==, !=
// right input is a list of float or a singe float
// output is a list of boolean

import Blockly from "blockly";

Blockly.Blocks["compare"] = {
  init: function () {
    this.appendValueInput("LEFT").setCheck("Array");
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ["<", "LT"],
        ["<=", "LE"],
        [">", "GT"],
        [">=", "GE"],
        ["==", "EQ"],
        ["!=", "NE"],
      ]),
      "OP",
    );
    this.appendValueInput("RIGHT").setCheck(["Array", "Number"]);
    this.setOutput(true, "Boolean[]");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["compare"] = function (block) {
  const value_left: string = Blockly.JavaScript.valueToCode(
    block,
    "LEFT",
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  const dropdown_op: string = block.getFieldValue("OP");
  const value_right: string = Blockly.JavaScript.valueToCode(
    block,
    "RIGHT",
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  const code = `compare(${
    value_left === "" ? "[]" : value_left
  }, "${dropdown_op}", ${value_right === "" ? "0" : value_right})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};