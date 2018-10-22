module.exports = {
  init(app) {
    const staticRoutes = require('../routes/static');
    const commentRoutes = require('../routes/comments');
    const userRoutes = require('../routes/users');
    app.use(staticRoutes);
    app.use(userRoutes);
    app.use(commentRoutes);
  }
};
