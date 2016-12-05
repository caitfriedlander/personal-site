(function() {
  'use strict';

  angular
      .module("personalSite")
      .controller("CaitController", CaitController);
  function CaitController(){
    this.name = 'Cait Friedlander';
    this.about = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac nibh ac est ultrices dignissim ac at sem. Phasellus auctor orci ut aliquet iaculis. Praesent eu sem a nunc eleifend scelerisque. Quisque lobortis pulvinar suscipit. Etiam vitae nunc non justo consequat sollicitudin. Etiam sit amet ante quam. Phasellus non nisl risus. Aenean vel dui a sem laoreet fermentum at vel nunc.';
    this.photo = 'https://avatars2.githubusercontent.com/u/22161677?v=3&s=460';
  }
})();
