var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Well } from "react-bootstrap";
var AnotherPage = /** @class */ (function (_super) {
    __extends(AnotherPage, _super);
    function AnotherPage(props) {
        return _super.call(this, props) || this;
    }
    AnotherPage.prototype.render = function () {
        return (React.createElement(Well, { className: "outer-well" },
            React.createElement("div", null, "this is the other page")));
    };
    return AnotherPage;
}(React.Component));
export { AnotherPage };
//# sourceMappingURL=AnotherPage.js.map