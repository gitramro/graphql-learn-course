const users = [
  {
    id: '1',
    name: 'Michael',
    email: 'michael@dunder.com',
    age: 42
  },
  {
    id: '2',
    name: 'Jim',
    email: 'jim@dunder.com'
  },
  {
    id: '3',
    name: 'Dwight',
    email: 'dwight@dunder.com'
  }
];

const posts = [
  {
    id: '1',
    title: 'Post1',
    body: 'This is the body of post1',
    published: true,
    author: '1'
  },
  {
    id: '2',
    title: 'Post2',
    body: 'This is the body of post2',
    published: true,
    author: '1'
  },
  {
    id: '3',
    title: 'Post3',
    body: 'This is the body of post3',
    published: false,
    author: '3'
  }
];

const comments = [
  {
    id: '1',
    text: 'Comment1',
    author: '1',
    post: '1'
  },
  {
    id: '2',
    text: 'Comment2',
    author: '2',
    post: '1'
  },
  {
    id: '3',
    text: 'Comment3',
    author: '1',
    post: '2'
  },
  {
    id: '4',
    text: 'Comment4',
    author: '3',
    post: '3'
  }
];

const db = {
  users,
  posts,
  comments
}

export default db;