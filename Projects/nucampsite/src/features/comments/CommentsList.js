import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByCampsiteId } from './commentsSlice';
import CommentForm from './CommentForm';
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const CommentsList = ({ campsiteId }) => {
    const comments = useSelector(selectCommentsByCampsiteId(campsiteId));

    const isLoading = useSelector((state) => state.comments.isLoading);
    const errMsg = useSelector((state) => state.comments.errMsg);

    return isLoading ? (
        <Loading />
    ) : errMsg ? (
        <Error errMsg={errMsg} />
    ) : (
        comments && comments.length > 0 ? (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} />
                ))}
                <CommentForm campsiteId={campsiteId} />
            </Col>
        ) : (
            <Col md='5' className='m-1'>There are no comments available.</Col>
        )
    );
}

export default CommentsList;
