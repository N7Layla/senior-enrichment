const db = require('./db');
const Campus = require('./db/models/campus');
const Student = require('./db/models/student');

const campuses = [{
    name: 'Lunar Lovelace',
    description: 'Donec placerat velit ac massa elementum ultrices. Integer ut gravida ante. Phasellus cursus finibus dolor sed consequat.',
    image: '/images/01.png'
   }, {
    name: 'Grace Hopper Harbour',
    description: 'Donec placerat velit ac massa elementum ultrices. Integer ut gravida ante. Phasellus cursus finibus dolor sed consequat.',
    image: '/images/02.png'
  }, {
    name: 'Katherine G-Force Johnson\'s Belt',
    description: 'Donec placerat velit ac massa elementum ultrices. Integer ut gravida ante. Phasellus cursus finibus dolor sed consequat.',
    image: '/images/03.png'
  }
];

var campusId = () => {return Math.floor(Math.random() * campuses.length) + 1};

const students = [{
  name: 'Starfire',
  campusId: campusId(),
  email: 'starfire@spaceschool.edu'
}, {
  name: 'Wonder Woman',
  campusId: campusId(),
  email: 'wonderwoman@spaceschool.edu'
}, {
  name: 'Catwoman',
  campusId: campusId(),
  email: 'catwoman@spaceschool.edu'
}, {
  name: 'Batwoman',
  campusId: campusId(),
  email: 'batwoman@spaceschool.edu'
}, {
  name: 'Poison Ivy',
  campusId: campusId(),
  email: 'poisonivy@spaceschool.edu'
}, {
  name: 'Katana',
  campusId: campusId(),
  email: 'katana@spaceschool.edu'
}, {
  name: 'Harley Quinn',
  campusId: campusId(),
  email: 'harleyquinn@spaceschool.edu'
}, {
  name: 'Gwenpool',
  campusId: campusId(),
  email: 'gwenpool@spaceschool.edu'
}, {
  name: 'Ms. Marvel',
  campusId: campusId(),
  email: 'msmarvel@spaceschool.edu'
}];

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
