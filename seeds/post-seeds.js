const { Post } = require('../models');



const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    contents: 'This is what my article says.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    contents: 'This is what my article says.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    contents: 'This is what my article says.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    contents: 'This is what my article says.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    contents: 'This is what my article says.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    contents: 'This is what my article says.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    contents: 'This is what my article says.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    contents: 'This is what my article says.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    contents: 'This is what my article says.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    contents: 'This is what my article says.',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    contents: 'This is what my article says.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    contents: 'This is what my article says.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    contents: 'This is what my article says.',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    contents: 'This is what my article says.',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    contents: 'This is what my article says.',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    contents: 'This is what my article says.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    contents: 'This is what my article says.',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    contents: 'This is what my article says.',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    contents: 'This is what my article says.',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    contents: 'This is what my article says.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
