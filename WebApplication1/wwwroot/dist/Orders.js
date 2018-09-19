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
var Orders = /** @class */ (function (_super) {
    __extends(Orders, _super);
    function Orders(props) {
        return _super.call(this, props) || this;
    }
    Orders.prototype.render = function () {
        return (React.createElement(Well, { className: "outer-well" },
            React.createElement("div", null, "this is the order page")));
    };
    return Orders;
}(React.Component));
export { Orders };
//# sourceMappingURL=Orders.js.map