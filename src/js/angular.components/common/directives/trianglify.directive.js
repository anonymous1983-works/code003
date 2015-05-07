(function () {
  'use strict';

  actApp.directive('amTrianglify', ['$timeout', function ($timeout) {
    return {
      restrict: 'A',
      scope: {},
      link: function (scope, elem, attrs) {

        var attrsObj = angular.fromJson(attrs.amTrianglify);

        var pngURI = Trianglify({
          width: elem[0].clientWidth,
          height: elem[0].clientHeight,
          variance: 0,
          cell_size: 15,
          seed: attrsObj.name.replace(/ /g, "_")
        }).png();

        elem.css({'background-image': 'url(' + pngURI + ')'});
      }
    };
  }]);
})();