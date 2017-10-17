const db = require('./db');
const Campus = require('./db/models/campus');
const Student = require('./db/models/student');

const campuses = [{
    name: 'Eos',
    description: 'Desert climate.',
    image: '/images/eos.png'
   }, {
    name: 'Aya',
    description: 'Beautiful forests.',
    image: '/images/aya.png'
  }, {
    name: 'Havarl',
    description: 'Lush jungles and wildlife.',
    image: '/images/havarl.png'
  }, {
    name: 'Veold',
    description: 'Icy adventures.',
    image: '/images/veold.png'
  }
];

var campusId = () => {return Math.floor(Math.random() * campuses.length) + 1};

const students = [{
  name: 'Cody',
  campusId: campusId(),
  email: 'cody@spaceschool.edu'
}, {
  name: 'Ben',
  campusId: campusId(),
  email: 'ben@spaceschool.edu'
}, {
  name: 'Star',
  campusId: campusId(),
  email: 'star@spaceschool.edu'
}, {
  name: 'Batman',
  campusId: campusId(),
  email: 'batman@spaceschool.edu'
}, {
  name: 'Elliott',
  campusId: campusId(),
  email: 'elliott@spaceschool.edu'
}, {
  name: 'Fira',
  campusId: campusId(),
  email: 'fira@spaceschool.edu'
}, {
  name: 'Henry',
  campusId: campusId(),
  email: 'henry@spaceschool.edu'
}, {
  name: 'Marcy',
  campusId: campusId(),
  email: 'marcy@spaceschool.edu'
}];

// const id = () => Math.round(Math.random() * (students.length - 1)) + 1;

// const messages = [
//   { authorId: id(), content: 'I like React!', channelId: 1 },
//   { authorId: id(), content: 'I like Redux!', channelId: 1 },
//   { authorId: id(), content: 'I like React-Redux!', channelId: 1 },
//   { authorId: id(), content: 'I like writing web apps!', channelId: 2 },
//   { authorId: id(), content: 'You should learn JavaScript!', channelId: 2 },
//   { authorId: id(), content: 'JavaScript is pretty great!', channelId: 2 },
//   { authorId: id(), content: 'Dogs are great!', channelId: 3 },
//   { authorId: id(), content: 'Cats are also great!', channelId: 3 },
//   { authorId: id(), content: 'Why must we fight so?', channelId: 3 },
//   { authorId: id(), content: 'I want to get tacos!', channelId: 4 },
//   { authorId: id(), content: 'I want to get salad!', channelId: 4 },
//   { authorId: id(), content: 'I want a taco salad!', channelId: 4 }
// ];

const seed = () =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
  )
  .then(() =>
  Promise.all(students.map(student =>
    Student.create(student))
  ));

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
