import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "../assets/css/index.css";

import routes from "../agreements-routes.js";

export default function Auth(props) {


    const getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.collapse) {
                return getRoutes(prop.views);
            }
            if (prop.layout === "/agreements") {
                return (
                    <Route
                        exact={prop.exact}
                        path={prop.layout + prop.path}
                        render={props => <prop.component {...props} />}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };

    const getActiveRoute = routes => {
        let activeRoute = "";
        for (let i = 0; i < routes.length; i++) {
            if (routes[i].collapse) {
                let collapseActiveRoute = getActiveRoute(routes[i].views);
                if (collapseActiveRoute !== activeRoute) {
                    return collapseActiveRoute;
                }
            } else {
                if (
                    window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
                ) {
                    return routes[i].name;
                }
            }
        }
        return activeRoute;
    };
    return (
        <Switch>
            {getRoutes(routes)}
            <Redirect from="/agreements" to="/agreements/initial" />
        </Switch>
    );
}
