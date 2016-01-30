

const commentPropTypes = {
    author: React.PropTypes.string,
    children: React.PropTypes.string
};
let commentArrayPropTypes = React.PropTypes.arrayOf(
    React.PropTypes.shape(commentPropTypes)
);

export { commentPropTypes, commentArrayPropTypes };