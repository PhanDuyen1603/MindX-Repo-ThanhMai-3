import mongoose from 'mongoose';
import Collections from '../../databases/collection';

const commentSchema = new mongoose.Schema({
    postId: String,
    authorId: String,
    content: String,
});

const CommentsModel = mongoose.model(Collections.COMMENTS, commentSchema);
export default CommentsModel;