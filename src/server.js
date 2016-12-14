import 'react-dom/server'; //Important require
import { render } from 'react-fetch-data';

function handler(req, res) {
    render(
        <Provider store = {store}>
            <AppController/>
        </Provider>
    ).then(
        (markup) => {
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(markup);
        }
    ).catch(
        (err) => {
            res.writeHead(400, {'Content-Type':'text/html'});
            res.end(err.toString());
        }
    )
}
