Pagination = (function(){

    function Pagination(options){
      this.limit = options && options.limit || 1000;
      try {
          this.setPage(options.page);
          
      } catch(err) {
          log(err);
      }
    }

    Pagination.prototype.getPage = function(){
        return this.page;
    };

    Pagination.prototype.setPage = function(page){
        this.page = page;
        return this;
    };

    Pagination.prototype.getPageLimit = function(){
        return this.limit || 1000;
    };

    Pagination.prototype.setPageLimit = function(max){
        this.limit = max;
        return this;
    };

    Pagination.prototype.prevPage = function(){
        if (this.page > 1) this.page--;
        return this;
     };

    Pagination.prototype.nextPage = function(){
        ++this.page;
        return this;
     };

     return Pagination;

}).call(this);// end of Pagination Module.