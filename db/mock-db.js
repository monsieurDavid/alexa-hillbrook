var Promise = require('bluebird'),
    data = require('./mock-data.json');

function getGrades(userId) {
    return data[userId] && data[userId].grades ? data[userId].grades : [];
}

module.exports = {
    label: 'mock',

    get: function(userId) {
        console.log('mock-db.get '+userId);
        return new Promise(function(resolve) {
            return resolve(getGrades(userId));
        });
    },

    add: function(userId, grade) {
        console.log('mock-db.add '+userId+' grade='+grade);
        return new Promise(function(resolve) {
            var grades = getGrades(userId);
            resolve({'grades': grades, 'added': grades.indexOf(grade) >= 0 ? null : grade});
        });
    },

    remove: function(userId, grade) {
        console.log('mock-db.remove '+userId+' grade='+grade);
        return new Promise(function(resolve) {
            var grades = getGrades(userId);
            resolve({'grades': grades, 'removed': grades.indexOf(grade) >= 0 ?  grade : null});
        });
    }
};
