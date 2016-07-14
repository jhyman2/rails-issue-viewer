import React    from 'react';
import axios    from 'axios';
import Issues   from './component.jsx';
import Loading  from '../loading/loading.jsx';
import Error    from '../error/error.jsx';

const ISSUES_PER_PAGE = 25;

let data_url = '//api.github.com/repos/rails/rails/issues';

export default class IssuesContainer extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      loaded: false,
      data: [],
      err: false
    };
  }

  componentDidMount () {
    this.fetchData(1); // first page request
  }

  /**
   * fetchData makes a paginated request for issues by pageNum and sets state to results
   * @param  {string} pageNum - page number for github issue
   * @return {none}
   */
  fetchData (pageNum) {
    let url = `${data_url}?page=${pageNum}&per_page=${ISSUES_PER_PAGE}`;

    axios.get(url)
      .then((response) => {
        this.setState({
          loaded: true,
          data: response.data,
          err: false
        });
      })
      .catch((err) => {
        this.setState({
          loaded: true,
          data: err.data.message,
          err: true
        })
      });
  }

  // When component is re-rendered, new data has to be fetched and displayed
  componentWillReceiveProps (nextProps) {
    this.setState({ loaded: false });
    this.fetchData(nextProps.params.pageNum);
  }

  render () {
    return (
      <div className="main-application">
        {this.state.loaded
          ? this.state.err
            ? <Error err={this.state.data} />
            : <Issues issues={this.state.data} pageNum={this.props.params.pageNum ? this.props.params.pageNum : 1} />
          : <Loading />
        }
      </div>
    );
  }
}