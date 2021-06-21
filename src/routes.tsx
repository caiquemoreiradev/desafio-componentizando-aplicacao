import { BrowserRouter, Switch, Route  } from 'react-router-dom';

import { Home } from './components/Home';
import { DetailsMovie } from './components/DetailsMovie';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/details' component={DetailsMovie} />
            </Switch>
        </BrowserRouter>
    )
}