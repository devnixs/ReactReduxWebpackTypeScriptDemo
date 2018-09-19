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
import * as ReactDOM from "react-dom";
//import 'node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { Router, Route, hashHistory } from 'react-router';
import { Details } from "./Details";
import { Orders } from "./Orders";
var MainNav = /** @class */ (function (_super) {
    __extends(MainNav, _super);
    function MainNav(props) {
        return _super.call(this, props) || this;
    }
    MainNav.prototype.render = function () {
        return (React.createElement(Navbar, { collapseOnSelect: true },
            React.createElement(Navbar.Header, null,
                React.createElement(Navbar.Brand, null,
                    React.createElement("span", null, "Simple React-Redux example")),
                React.createElement(Navbar.Toggle, null)),
            React.createElement(Navbar.Collapse, null,
                React.createElement(Nav, { pullRight: true },
                    React.createElement(NavItem, { eventKey: 2, href: '#/detailsPage' }, "Details"),
                    React.createElement(NavItem, { eventKey: 2, href: '#/ordersPage' }, "Orders")))));
    };
    return MainNav;
}(React.Component));
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement(MainNav, null),
                this.props.children)));
    };
    return App;
}(React.Component));
ReactDOM.render((React.createElement(Router, { history: hashHistory },
    React.createElement(Route, { component: App },
        React.createElement(Route, { path: "/", component: Details }),
        React.createElement(Route, { path: "/orders", component: Orders })))), document.getElementById('root'));
//# sourceMappingURL=Index.js.map