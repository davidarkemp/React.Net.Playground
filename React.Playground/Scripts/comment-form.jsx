class CommentForm extends React.Component {
    
    render() {
        return (
          <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
              <input type="text" placeholder="Your name" ref="author" />
              <input type="text" placeholder="Say something..." ref="text" />
            <input type="submit" value="Post" />
          </form>
      );
    }
    handleSubmit(e) {
        e.preventDefault();
        let authorNode = this.refs.author;
        let textNode = this.refs.text;
        const author = authorNode.value.trim();
        const text = textNode.value.trim();
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({ Author: author, Text: text });
        authorNode.value = '';
        textNode.value = '';
        return;
    }
};

CommentForm.propTypes = {};

export default CommentForm;