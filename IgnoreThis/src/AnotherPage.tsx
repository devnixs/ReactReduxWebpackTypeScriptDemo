import * as React from "react";
import * as ReactDOM from "react-dom";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
    Well
} from "react-bootstrap";


export class AnotherPage extends React.Component<undefined, undefined> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Well className="outer-well">
                <div>
				this is the other page
				</div>
            </Well>
        )
    }
}

