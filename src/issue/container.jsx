import React   from 'react';
import axios   from 'axios';

import Issue   from './component.jsx';
import Loading from '../loading/loading.jsx';

const data_url = '//api.github.com/repos/rails/rails/issues';

export default class IssueContainer extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      loaded: false,
      data: null
    };
  }

  componentDidMount () {
    axios.get(`${data_url}/${this.props.params.id}`)
      .then((response) => {
        if (response.data.comments) {
          axios.get(response.data.comments_url)
            .then((comments) => {
              this.setState({
                loaded: true,
                data: response.data,
                comments: comments.data
              });
            })
            .catch((errComments) => {
              this.setState({
                loaded: true,
                data: response.data,
                comments: null
              });
            });
        } else {
          this.setState({
            loaded: true,
            data: response.data,
            comments: null
          });
        }
      })
      .catch((err) => {
        console.log('err', err);
      });
  }

  render () {
    return (
      <div className="issue">
        {this.state.loaded
          ? <Issue data={this.state.data} comments={this.state.comments} />
          : <Loading />
        }
      </div>
    );
  }
}