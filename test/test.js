var should = require('chai').should();

require('../lib/lib');

describe('Pagination', function(){
    

    var instance, 
        result
        options = { 
            page: 1,
            limit: 55
        };

    beforeEach(function(){
        //Arrange
        instance = new Pagination(options);
        instance.setPage(44);
    })
 
    describe('#getPage()', function(){
    
        it('should return the current page', function(){
            
            // Act
            var result = instance.getPage();
            // Assert
            result.should.equal(44);
        });

    });

    describe('#setPage()', function(){

        it ('should set the current page', function(){
            
            //Act
            result = instance.setPage(2).getPage();
            //Assert
            result.should.equal(2);
        });

    });

    describe('#getPageLimit()', function(){

        it('should return the provided limit', function () {
            
            //Act
            result = instance.getPageLimit();
            //Assert
            result.should.equal(55);
        });

        it('should return 1000 if not passed a limit', function () {
            //Arrange
            instance = new Pagination({ page: 1});
            //Act
            result = instance.getPageLimit();
            //Assert
            result.should.equal(1000);
        });

    });

    describe('#prevPage()', function(){

        it('should reduce the current page by 1', function () {
            
            //Act
            instance.prevPage();
            result = instance.getPage(); 
            //Assert
            result.should.equal(43);
        });

    });

    describe('#nextPage()', function(){

        it('should increase the current page by 1', function () {
            
            //Act
            instance.nextPage();
             result = instance.getPage(); 
            //Assert
            result.should.equal(45);
        });

    });


    describe('Chainable API', function(){

        it('should return the instance from #setPage', function () {
            var ins = instance.setPage();
            ins.should.equal(instance);
        });

        it('should return the instance from #setPageLimit', function () {
            var ins = instance.setPageLimit(999);
            ins.should.equal(instance);
        });

        it('should return the instance from #nextPage', function () {
            var ins = instance.nextPage();
            ins.should.equal(instance);
        });

        it('should return the instance from #prevPage', function () {
            var ins = instance.prevPage();
            ins.should.equal(instance);
        });
      
    });
  
    
});