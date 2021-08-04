const User = require('./User');
const Post = require('./Post');
const Comments = require('./Comments');

User.hasMany(Post, {
    foreignKey: 'user_id',
});

Post.belongsTo(User, {
    foreignKey: 'Post_id',
});
User.hasMany(Comment, {
    foreignKey: 'user_id',
});

Post.belongsTo(User, {
    foreignKey: 'Post_id',
});
User.hasMany(Comment, {
    foreignKey: 'user_id',
});

Post.belongsTo(User, {
    foreignKey: 'Post_id',
});
module.exports = { User, Post, Comments };