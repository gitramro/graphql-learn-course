const Query = {
  comments(parent, args, {db}, info) {
    return db.comments;
  },
  posts(parent, args, {db}, info) {
    if (!args.query) {
      return db.posts;
    }
    return db.posts.filter(post => {
      return (
        post.title.toLowerCase().includes(args.query.toLowerCase()) ||
        post.body.toLowerCase().includes(args.query.toLowerCase())
      );
    });
  },
  users(parent, args, {db}, info) {
    if (!args.query) {
      return db.users;
    }
    return db.users.filter(user => {
      return user.name.toLowerCase().includes(args.query.toLowerCase());
    });
  },
  me() {
    return {
      id: '123098',
      name: 'Ramón',
      email: 'ramon.osc93@gmail.com',
      age: 28
    };
  },
  post() {
    return {
      id: '123abc',
      title: 'First Post',
      body: 'This is my first post',
      published: true
    };
  }
}

export default Query;