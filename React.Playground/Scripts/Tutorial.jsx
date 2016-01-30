
import CommentList from './comment-list';
import CommentForm from './comment-form';

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: props.initialData || [] };
    }
    loadCommentsFromServer() {
        var xhr = new XMLHttpRequest();
        xhr.open('get', this.props.url, true);
        xhr.onload = function () {
            var data = JSON.parse(xhr.responseText);
            this.setState({ data: data });
        }.bind(this);
        xhr.send();
    }
    handleCommentSubmit(comment) {
        var data = new FormData();
        
        data.append('Author', comment.Author);
        data.append('Text', comment.Text);
        const xhr = new XMLHttpRequest();
        xhr.open('post', this.props.submitUrl, true);
        xhr.onload =  () => this.loadCommentsFromServer();
        xhr.send(data);
    }
    componentDidMount() {
        //setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
    }
    render() {
        return (
          <div className="commentBox">
            <h1>Comments</h1>
            <CommentList data={this.state.data} />
            <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
          </div>
      );
    }
}

CommentBox.defaultProps = { initialData: [], pollInterval: 1000 };

export default CommentBox ;
