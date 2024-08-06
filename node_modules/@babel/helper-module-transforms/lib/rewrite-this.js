"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rewriteThis;
var _helperEnvironmentVisitor = require("@babel/helper-environment-visitor");
var _core = require("@babel/core");
const {
  numericLiteral,
  unaryExpression
} = _core.types;
let rewriteThisVisitor;
function rewriteThis(programPath) {
  if (!rewriteThisVisitor) {
    rewriteThisVisitor = _core.traverse.visitors.merge([_helperEnvironmentVisitor.default, {
      ThisExpression(path) {
        path.replaceWith(unaryExpression("void", numericLiteral(0), true));
      }
    }]);
    rewriteThisVisitor.noScope = true;
  }
  (0, _core.traverse)(programPath.node, rewriteThisVisitor);
}

//# sourceMappingURL=rewrite-this.js.map
