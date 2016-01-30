import Comment from './comment';
import {commentArrayPropTypes} from './comment.proptypes';

const CommentList = (props) => {
    const commentNodes = props.data.map(function(comment, i) {
        return (
            <Comment key={i} author={comment.Author}>
              {comment.Text}
            </Comment>
        );
    });
    return (<div className="commentList">{commentNodes}</div>);
};
CommentList.propTypes = { data: commentArrayPropTypes.isRequired };

export default CommentList;