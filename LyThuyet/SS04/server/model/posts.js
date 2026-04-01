import mongoose from 'mongoose';
import Collections from '../../databases/collection';

const postSchema = new mongoose.Schema({
   authorId: String,
   content: String,  
});

const PostsModel = mongoose.model(Collections.POSTS, postSchema);
export default PostsModel;