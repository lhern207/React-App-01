import React from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';

//COMPONENTS
import Header from './views/header';
import NewsList from './views/news_list';

class App extends React.Component {
    state = {
        news: JSON,
        filtered: []
    }

    getKeyword = (event) => {
        //console.log(event.target.value);
        let keyword = event.target.value;
        let filtered = this.state.news.filter((item) => {
            return item.title.indexOf(keyword) > -1;
        })
        this.setState({
            //Same as 'filtered: filtered' in ES6
            filtered
        })
        //console.log(filtered);
    }

    render() {
        let newsFiltered = this.state.filtered;
        let newsWhole = this.state.news;

        return (
            <div>
                <Header keywords={this.getKeyword}/>
                <NewsList news={newsFiltered.length === 0 ? newsWhole : newsFiltered}>
                    <h3>
                        The news are:
                    </h3>
                </NewsList>
            </div>
        )
    }  
}

//same as:
/*
function App () {}
*/

ReactDOM.render(<App/>, document.querySelector('#root'));