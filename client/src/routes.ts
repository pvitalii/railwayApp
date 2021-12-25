import Admin from "./pages/Admin";
import {ADMIN_ROUTE, HOME_ROUTE, RETURN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, MYTICKETS_ROUTE} from "./utils/consts";
import Return from "./pages/Return";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Mytickets from "./pages/Mytickets";


export const routes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: RETURN_ROUTE,
        Component: Return
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: MYTICKETS_ROUTE,
        Component: Mytickets
    }
]