import {commentPropTypes} from './comment.proptypes';
import {converter as Converter} from './showdown';

const Comment = (props) => 
{
    var converter = new Converter();
    var rawMarkup = converter.makeHtml(props.children.toString());
    return <div key={props.key} className="comment" >
        <h2 className="commentAuthor">{props.author}</h2>
            <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
        </div>;
    
};
Comment.propTypes = commentPropTypes;

export default Comment;