let main = {
    "name": "Rythian Classes", // Users will see this name in the extension manager
    "description": "Luau OOP Class Rythian's way.", // Also shown in the extension manager
    "version": "1.0.0", // Must be in format Major.Minor.Patch (see https://semver.org/)
    "ludumVersion": "1.0.0", // The version of Ludum this extension was made for
    "categories": [ // The categories that the extension adds to the left toolbox
        {
            "name": "Rythian Class", // The name of the category
            "blocks": [ // The blocks that the category contains
                {
                    "type": "ryth_class", // The internal name of the block
                    "block": { // The block definition (see https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks)
                        init: function() {
                            this.appendStatementInput("CLASS_BASE")
                                .setCheck(null)
                                .appendField("Rythian Class")
                                .appendField(new Blockly.FieldTextInput("Class"), "NAME");
                            this.setColour(230);
                            this.setTooltip("Luau OOP Class Rythian's way");
                            this.setHelpUrl("https://devforum.roblox.com/t/rythian2277s-way-of-implementing-oop-into-games/961252?u=rythian2277");
                        }
                    },
                    "generator": function(block) { // The Lua generator (see https://developers.google.com/blockly/guides/create-custom-blocks/generating-code)
                        return "print(\"Hello World\")\n"; // needs code input.
                    }
                },
                {
                    "type": "ryth_class_func",
                    "block": {
                        init: function() {
                            this.appendStatementInput("MAIN_FUNCTION")
                                .setCheck(null)
                                .appendField("Class.")
                                .appendField(new Blockly.FieldTextInput("new"), "NAME")
                                .appendField("()");
                            this.setColour(230);
                            this.setTooltip("Luau OOP Class Rythian's way");
                            this.setHelpUrl("https://devforum.roblox.com/t/rythian2277s-way-of-implementing-oop-into-games/961252?u=rythian2277");
                        }
                    },
                    "generator": function(block) {
                        return "print(\"Hello World\")\n"; // needs code input.
                    }
                },
                {
                    "type": "ryth_class_method",
                    "block": {
                        init: function() {
                            this.appendStatementInput("METHOD_FUNCTION")
                                .setCheck(null)
                                .appendField("Class:")
                                .appendField(new Blockly.FieldTextInput("new"), "NAME")
                                .appendField("()");
                            this.setColour(230);
                            this.setTooltip("Luau OOP Class Rythian's way");
                            this.setHelpUrl("https://devforum.roblox.com/t/rythian2277s-way-of-implementing-oop-into-games/961252?u=rythian2277");
                        }
                    },
                    "generator": function(block) {
                        return "print(\"Hello World\")\n"; // needs code input.
                    }
                }
            ]
        }
    ]
}
