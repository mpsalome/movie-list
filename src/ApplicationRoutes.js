import { Route } from "react-router-dom"
import { MovieDetail } from "./Components/MovieDetail"
import { Home } from "./Views/Home"

export const ApplicationRoutes = () => {
    return(
        <>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/movie/:id" component={MovieDetail}></Route>
        </>
    )
}