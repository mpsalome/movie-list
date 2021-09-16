import { Route } from "react-router-dom"
import { MovieDetail } from "./Components/MovieDetail"
import { Home } from "./Views/Home"
import { NowPlaying } from "./Views/NowPlaying"
import { TopRated } from "./Views/TopRated"
import { Upcoming } from "./Views/Upcoming"

export const ApplicationRoutes = () => {
    return(
        <>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="movie/now_playing" component={NowPlaying}></Route>
            <Route exact path="movie/top_rated" component={TopRated}></Route>
            <Route exact path="movie/upcoming" component={Upcoming}></Route>
            <Route exact path="/movie/:id" component={MovieDetail}></Route>
        </>
    )
}