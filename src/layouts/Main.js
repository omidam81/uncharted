import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "../assets/css/index.css";

import routes from "./../routes.js";

export default function Main(props) {


    const getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.collapse) {
                return getRoutes(prop.views);
            }
            if (prop.layout === "/") {
                console.log(prop)
                return (
                    <Route
                        exact={prop.exact}
                        path={  prop.path}
                        render={props => <prop.component {...props} />}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };
 
    return (
        <Switch>
            {getRoutes(routes)}
            <Redirect from="/" to="/auth/main" />
        </Switch>
    );
}
