"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    container: {
      flexDirection: 'column'
    },
    mainTypography: {
      fontSize: 44,
      lineHeight: 1.3
    },
    locationTypography: function locationTypography(_ref) {
      var variant = _ref.variant;
      return {
        color: (0, _styles_utils.getHexFromPaletteColor)(theme, (0, _styles_utils.getColorsFromCardVariant)(theme, variant).color),
        marginTop: spacing * 3,
        fontWeight: 500
      };
    }
  };
};

exports.styles = styles;