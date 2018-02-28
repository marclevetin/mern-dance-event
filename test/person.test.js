const Person = require('../models/person');
const mongoose = require('mongoose');
const expect = require("chai").expect;

describe("Database - Person", function() {
  before('connect', function(){
      return mongoose.createConnection('mongodb://localhost/merndanceevent')
  })

  beforeEach(function(){
      return Person.remove({})
  })

  beforeEach(function(){
      const newPerson = new Book();
      newPerson.firstName  = "First name";
      newPerson.lastName = "Last name";
      return newPerson.save();
  });

  // it('should list all books on /book GET', function(done){
  //     var url = 'http://localhost:8080/book';
  //     request.get(url, (error, response, body) => {
  //         if (error) done(error)
  //         expect(body).to.be.an('array');
  //         expect(body.length).to.equal(1);
  //         done();
  //     });
  // });
  //
  // it('Save person with all required information works', function(){
  //   const testPerson = Person({
  //     firstName: 'Test',
  //     lastName: 'Test',
  //   })
  //
  //   testPerson.save(done);
  // expect(true).to.equal(false)
  })
});
