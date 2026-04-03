import mongoose from 'mongoose';
import Collections from '../database/conllection.js';

const postSchema = new mongoose.Schema({
   authorId: String,
   content: String,  
});

const PostsModel = mongoose.model(Collections.POSTS, postSchema);
export default PostsModel;