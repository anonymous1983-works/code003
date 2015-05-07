/**
 * @author Anis ABID
 * Created by abid on 27/04/2015.
 */

var actApp = angular.module('actApp', [
  '720kb.tooltips'
]);

/**
 * Created by abid on 29/04/2015.
 */
var obj = {
};
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
(function () {
  'use strict';

  actApp
    .controller('DashboardController', ['$scope', function ($scope) {

    }]);
})();




(function () {
  'use strict';

  actApp
    .controller('DefaultController', ['$scope', function ($scope) {
      $scope.mocks = {

        // Mock Tags
        tags: [
          {
            "count": 5,
            "keyword": "Viewer"
          },
          {
            "count": 5,
            "keyword": "Client"
          },
          {
            "count": 2,
            "keyword": "npm"
          },
          {
            "count": 1,
            "keyword": "rest-services"
          },
          {
            "count": 1,
            "keyword": "library"
          },
          {
            "count": 1,
            "keyword": "Java"
          },
          {
            "count": 1,
            "keyword": "jax-rs"
          },
          {
            "count": 5,
            "keyword": "Designer"
          },
          {
            "count": 5,
            "keyword": "Services"
          },
          {
            "count": 1,
            "keyword": "Symfony"
          },
          {
            "count": 5,
            "keyword": "PhantomJS"
          },
          {
            "count": 2,
            "keyword": "Html5"
          },
          {
            "count": 5,
            "keyword": "Report"
          },
          {
            "count": 1,
            "keyword": "referential"
          },
          {
            "count": 2,
            "keyword": "JavaScript"
          },
          {
            "count": 1,
            "keyword": "JSP"
          },
          {
            "count": 5,
            "keyword": "Web"
          },
          {
            "count": 1,
            "keyword": "reconciliation"
          },
          {
            "count": 1,
            "keyword": "SQL"
          },
          {
            "count": 1,
            "keyword": "pricing"
          },
          {
            "count": 1,
            "keyword": "Grunt"
          },
          {
            "count": 1,
            "keyword": "services"
          },
          {
            "count": 1,
            "keyword": "javascript"
          },
          {
            "count": 1,
            "keyword": "matching"
          },
          {
            "count": 8,
            "keyword": "java"
          },
          {
            "count": 2,
            "keyword": "Less"
          },
          {
            "count": 2,
            "keyword": "gitlab"
          },
          {
            "count": 1,
            "keyword": "dictionary"
          },
          {
            "count": 2,
            "keyword": "computations"
          },
          {
            "count": 3,
            "keyword": "utilities"
          },
          {
            "count": 1,
            "keyword": "data"
          },
          {
            "count": 1,
            "keyword": "collaboration"
          },
          {
            "count": 1,
            "keyword": "active framework"
          },
          {
            "count": 5,
            "keyword": "Reporting"
          },
          {
            "count": 2,
            "keyword": "git"
          },
          {
            "count": 5,
            "keyword": "Symfony 2"
          },
          {
            "count": 5,
            "keyword": "JQuery"
          },
          {
            "count": 5,
            "keyword": "MongoDB"
          },
          {
            "count": 1,
            "keyword": "angularjs"
          },
          {
            "count": 5,
            "keyword": "Factsheet"
          },
          {
            "count": 5,
            "keyword": "Data"
          },
          {
            "count": 2,
            "keyword": "node.js"
          },
          {
            "count": 1,
            "keyword": "gulp"
          },
          {
            "count": 5,
            "keyword": "Solr"
          },
          {
            "count": 1,
            "keyword": "stpml"
          },
          {
            "count": 5,
            "keyword": "Widget"
          },
          {
            "count": 6,
            "keyword": "PHP"
          },
          {
            "count": 1,
            "keyword": "network"
          },
          {
            "count": 1,
            "keyword": "ractive"
          },
          {
            "count": 1,
            "keyword": "AngularJs"
          },
          {
            "count": 2,
            "keyword": "rest"
          },
          {
            "count": 1,
            "keyword": "governance"
          },
          {
            "count": 5,
            "keyword": "HighCharts"
          },
          {
            "count": 5,
            "keyword": "Traduction"
          },
          {
            "count": 5,
            "keyword": "OnDemand"
          }
        ]
        // End Mock Tags
        ,
        projects: [
          {
            "name": "WEB REPORT",
            "id": 21,
            "type": "application",
            "version": "3.1.0",
            "description": "<div>Main features</div><ul><li>Dynamic consultation of daily data</li><li>Display of data in different formats</li><li>Display of information about the source and the control of the data</li><li>Creation of Reporting 2.0 widget and templates</li><li>Data extraction</li></ul>",
            "environment": [
              {
                "id": 1,
                "type": "issues",
                "tool": "mantis",
                "url": "http://mantis.intramundi.com/etudes/my_view_page.php",
                "resource_id": null
              },
              {
                "id": 2,
                "type": "scm",
                "tool": "git",
                "url": "https://git.intramundi.com/gitlab/web-intranet/reportingonline",
                "resource_id": null
              },
              {
                "id": 3,
                "type": "code_quality",
                "tool": "sonar",
                "url": "http://phpci.intramundi.com/sonar/dashboard/index/916",
                "resource_id": "916"
              },
              {
                "id": 4,
                "type": "continuous_integration",
                "tool": "jenkins",
                "url": "http://phpci.intramundi.com/jenkins/job/reportingonline/",
                "resource_id": null
              }
            ],
            "languages": [
              "Symfony 2",
              "JQuery",
              "PHP",
              "HighCharts",
              "PhantomJS",
              "MongoDB",
              "Solr"
            ],
            "idDs": "1081",
            "creationDate": 1427106830000,
            "dsId": 21,
            "lastActivityDate": 1428932511000,
            "healthStatus": 0,
            "screenShots": [
              "s1.png",
              "s2.png",
              "s3.png",
              "s4.png"
            ],
            "idGroup": "0",
            "summary": "Give an outlook of your investment management strategy to your client",
            "demo": "http://preprod-reportingonline.intramundi.com/extranet/reports",
            "homepage": "https://git.intramundi.com/gitlab/reporting/web_report",
            "maintener": {
              "id": 46,
              "name": "Aomar Boucetta",
              "email": "aomar.boucetta@amundi.com",
              "idDs": "212",
              "dsId": 21,
              "avatarPath": null,
              "bio": null
            },
            "ownerId": 46,
            "keywords": [
              "Web",
              "Widget",
              "Reporting",
              "Factsheet",
              "Services",
              "Traduction",
              "Designer",
              "Report",
              "Viewer",
              "Data",
              "Client",
              "OnDemand"
            ],
            "licence": null
          },
          {
            "name": "WIDGET DESIGNER",
            "id": 22,
            "type": "application",
            "version": "3.1.0",
            "description": "<div>Main features</div><ul><li>Create simple widget (Table, Bar chart, Pie chart…)</li><li>Create Advanced widget (Template, Dynamic List…)</li><li>Associate with datasource and select series to render</li><li>Configure the widget parameters (legend, axis, render format, display value…)</li><li>Select title and disclaimer</li></ul>",
            "environment": [
              {
                "id": 5,
                "type": "issues",
                "tool": "mantis",
                "url": "http://mantis.intramundi.com/etudes/my_view_page.php",
                "resource_id": null
              },
              {
                "id": 6,
                "type": "scm",
                "tool": "git",
                "url": "https://git.intramundi.com/gitlab/web-intranet/reportingonline",
                "resource_id": null
              },
              {
                "id": 7,
                "type": "code_quality",
                "tool": "sonar",
                "url": "http://phpci.intramundi.com/sonar/dashboard/index/916",
                "resource_id": "916"
              },
              {
                "id": 8,
                "type": "continuous_integration",
                "tool": "jenkins",
                "url": "http://phpci.intramundi.com/jenkins/job/reportingonline/",
                "resource_id": null
              }
            ],
            "languages": [
              "PHP",
              "Symfony 2",
              "JQuery",
              "HighCharts",
              "PhantomJS",
              "MongoDB",
              "Solr"
            ],
            "idDs": "1080",
            "creationDate": 1427106738000,
            "dsId": 21,
            "lastActivityDate": 1428932301000,
            "healthStatus": 0,
            "screenShots": [
              "s1.png",
              "s2.png",
              "s4.png",
              "s5.png",
              "s6.png",
              "s7.png"
            ],
            "idGroup": "0",
            "summary": "Create your own web-based graphic representation for your reporting",
            "demo": "http://rct-reportingonline.intramundi.com/designer/modules/",
            "homepage": "https://git.intramundi.com/gitlab/reporting/web_report",
            "maintener": {
              "id": 46,
              "name": "Aomar Boucetta",
              "email": "aomar.boucetta@amundi.com",
              "idDs": "212",
              "dsId": 21,
              "avatarPath": null,
              "bio": null
            },
            "ownerId": 46,
            "keywords": [
              "Widget",
              "Reporting",
              "Factsheet",
              "Services",
              "Traduction",
              "Designer",
              "Report",
              "Web",
              "Viewer",
              "Data",
              "Client",
              "OnDemand"
            ],
            "licence": null
          },
          {
            "name": "REPORT DESIGNER",
            "id": 23,
            "type": "application",
            "version": "3.1.0",
            "description": "<div>Main features</div><ul><li>Create new template</li><li>Add widget, set widget position and size</li><li>Customize widget</li><li>Set Orientation : portrait/landscape</li><li>Real-time preview : web view</li><li>PDF, PowerPoint and Word Renderer</li></ul>",
            "environment": [
              {
                "id": 9,
                "type": "issues",
                "tool": "mantis",
                "url": "http://mantis.intramundi.com/etudes/my_view_page.php",
                "resource_id": null
              },
              {
                "id": 10,
                "type": "scm",
                "tool": "git",
                "url": "https://git.intramundi.com/gitlab/web-intranet/reportingonline",
                "resource_id": null
              },
              {
                "id": 11,
                "type": "code_quality",
                "tool": "sonar",
                "url": "http://phpci.intramundi.com/sonar/dashboard/index/916",
                "resource_id": "916"
              },
              {
                "id": 12,
                "type": "continuous_integration",
                "tool": "jenkins",
                "url": "http://phpci.intramundi.com/jenkins/job/reportingonline/",
                "resource_id": null
              }
            ],
            "languages": [
              "PHP",
              "Symfony 2",
              "JQuery",
              "HighCharts",
              "PhantomJS",
              "MongoDB",
              "Solr"
            ],
            "idDs": "1079",
            "creationDate": 1427106629000,
            "dsId": 21,
            "lastActivityDate": 1428932016000,
            "healthStatus": 0,
            "screenShots": [
              "s1.png",
              "s2.png",
              "s3.png",
              "s4.png",
              "s5.png"
            ],
            "idGroup": "0",
            "summary": "Dynamic layout report creator",
            "demo": "http://rct-reportingonline.intramundi.com/designer/layouts/list",
            "homepage": "https://git.intramundi.com/gitlab/reporting/web_report",
            "maintener": {
              "id": 46,
              "name": "Aomar Boucetta",
              "email": "aomar.boucetta@amundi.com",
              "idDs": "212",
              "dsId": 21,
              "avatarPath": null,
              "bio": null
            },
            "ownerId": 46,
            "keywords": [
              "Widget",
              "Reporting",
              "Factsheet",
              "Services",
              "Traduction",
              "Designer",
              "Report",
              "Viewer",
              "Data",
              "Client",
              "OnDemand",
              "Web"
            ],
            "licence": null
          },
          {
            "name": "PRODUCTION WORKFLOW",
            "id": 24,
            "type": "application",
            "version": "3.1.0",
            "description": "<div>Main features</div><ul><li>Management of the validations steps for the factsheet</li><li>Management and subscription of the workflow participants</li><li>Notifications sent in real time to the subscriber during a workflow event</li><li>Control of the missing data and missing translations</li><li>Notion of primary and secondary factsheet enabling a mass validation</li><li>Management and follow-up of production incidents</li><li>Display of the factsheet towards the intranet/extranet</li></ul>",
            "environment": [
              {
                "id": 13,
                "type": "issues",
                "tool": "mantis",
                "url": "http://mantis.intramundi.com/etudes/my_view_page.php",
                "resource_id": null
              },
              {
                "id": 14,
                "type": "scm",
                "tool": "git",
                "url": "https://git.intramundi.com/gitlab/web-intranet/reportingonline",
                "resource_id": null
              },
              {
                "id": 15,
                "type": "code_quality",
                "tool": "sonar",
                "url": "http://phpci.intramundi.com/sonar/dashboard/index/916",
                "resource_id": "916"
              },
              {
                "id": 16,
                "type": "continuous_integration",
                "tool": "jenkins",
                "url": "http://phpci.intramundi.com/jenkins/job/reportingonline/",
                "resource_id": null
              }
            ],
            "languages": [
              "PHP",
              "Symfony 2",
              "JQuery",
              "HighCharts",
              "PhantomJS",
              "MongoDB",
              "Solr"
            ],
            "idDs": "1078",
            "creationDate": 1427106520000,
            "dsId": 21,
            "lastActivityDate": 1428931756000,
            "healthStatus": 0,
            "screenShots": [
              "s1.png",
              "s2.png",
              "s3.png",
              "s4.png"
            ],
            "idGroup": "0",
            "summary": "Follow your factsheets production with a production workflow",
            "demo": "http://rct-reportingonline.intramundi.com/designer/productions/list",
            "homepage": "https://git.intramundi.com/gitlab/reporting/factsheets-production-workflow",
            "maintener": {
              "id": 46,
              "name": "Aomar Boucetta",
              "email": "aomar.boucetta@amundi.com",
              "idDs": "212",
              "dsId": 21,
              "avatarPath": null,
              "bio": null
            },
            "ownerId": 46,
            "keywords": [
              "Web",
              "Widget",
              "Reporting",
              "Factsheet",
              "Services",
              "Traduction",
              "Designer",
              "Report",
              "Viewer",
              "Data",
              "Client",
              "OnDemand"
            ],
            "licence": null
          },
          {
            "name": "ActiveServices",
            "id": 25,
            "type": "library",
            "version": null,
            "description": "Toolkit providing a common way to expose REST services with authentication, authorization, log and many other standard features.",
            "environment": [
              {
                "id": 17,
                "type": "code_quality",
                "tool": "sonar",
                "url": "https://dtp.intramundi.com/jenkins/view/ActiveFwk/view/ActiveServices/view/DEV/job/Active-services%20-%20Sonar/",
                "resource_id": null
              },
              {
                "id": 18,
                "type": "continuous_integration",
                "tool": "jenkins",
                "url": "https://dtp.intramundi.com/jenkins/view/ActiveFwk/view/ActiveServices/view/DEV/job/Active-services%20-%20DEV%20-%20Build%20and%20publish/",
                "resource_id": null
              }
            ],
            "languages": [
              "java"
            ],
            "idDs": "986",
            "creationDate": 1422872756000,
            "dsId": 21,
            "lastActivityDate": 1430904378000,
            "healthStatus": 100,
            "screenShots": [],
            "idGroup": "0",
            "summary": "Rest services Toolkit.",
            "demo": null,
            "homepage": "https://git.intramundi.com/gitlab/groups/activeservices",
            "maintener": {
              "id": 129,
              "name": "Nicolas Nesmon",
              "email": "nicolas.nesmon-ext@amundi.com",
              "idDs": "124",
              "dsId": 21,
              "avatarPath": null,
              "bio": null
            },
            "ownerId": 129,
            "keywords": [
              "rest",
              "services",
              "rest-services",
              "java"
            ],
            "licence": null
          },
          {
            "name": "ActiveToolsJava",
            "id": 26,
            "type": "library",
            "version": null,
            "description": "<p>ActiveToolsJava is a light-weight collection of common utility classes in Java.</p><p>Sonar: <a target='_blank' href='https://dtp.intramundi.com/sonar/dashboard/index/net.active.tools:activetools-parent'>https://dtp.intramundi.com/sonar/dashboard/index/net.active.tools:activetools-parent</a></p><p>Notes to developers:</p><ul><li>Keep the code clean, and Sonar violations at zero</li><li>Keep unit test coverage high</li><li>Think twice before adding external dependencies</li></ul>",
            "environment": [
              {
                "id": 19,
                "type": "code_quality",
                "tool": "sonar",
                "url": "https://dtp.intramundi.com/sonar/dashboard/index/todo",
                "resource_id": "todo"
              },
              {
                "id": 20,
                "type": "issues",
                "tool": "mantis",
                "url": "http://mantis.intramundi.com/etudes",
                "resource_id": null
              },
              {
                "id": 21,
                "type": "continuous_integration",
                "tool": "jenkins",
                "url": "https://dtp.intramundi.com/jenkins/job/todo/",
                "resource_id": null
              },
              {
                "id": 22,
                "type": "repo",
                "tool": "nexus",
                "url": "https://dtp.intramundi.com/nexus",
                "resource_id": null
              },
              {
                "id": 23,
                "type": "scm",
                "tool": "git",
                "url": "https://git.intramundi.com/gitlab/activeframework/activetools-java.git",
                "resource_id": null
              }
            ],
            "languages": [
              "java"
            ],
            "idDs": "976",
            "creationDate": 1422372270000,
            "dsId": 21,
            "lastActivityDate": 1430929553000,
            "healthStatus": 0,
            "screenShots": [],
            "idGroup": "0",
            "summary": "ActiveToolsJava is a light-weight collection of common utility classes in Java.",
            "demo": null,
            "homepage": "https://git.intramundi.com/gitlab/activeframework/activetools-java",
            "maintener": {
              "id": 215,
              "name": "Janos Gyerik",
              "email": "janos.gyerik@amundi.com",
              "idDs": "37",
              "dsId": 21,
              "avatarPath": "https://git.intramundi.com/uploads/user/avatar/37/janos_twitter_photo.jpg",
              "bio": "I like to code and I do it a lot"
            },
            "ownerId": 215,
            "keywords": [
              "utilities",
              "java"
            ],
            "licence": null
          },
          {
            "name": "Active Matching",
            "id": 27,
            "type": "library",
            "version": null,
            "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at rhoncus lacus, viverra auctor lorem. In hac habitasse platea dictumst. Donec convallis elementum congue. In eget rutrum sem. Sed pellentesque tortor ac nunc malesuada lobortis. Donec semper lorem vitae urna tincidunt, non posuere tortor pretium. Aliquam nec dignissim urna, vitae luctus urna. Pellentesque mi risus, commodo et faucibus non, pharetra in sem. Phasellus sit amet mi quis augue imperdiet mollis. Donec non fringilla urna, sed egestas nunc. Nulla posuere maximus auctor. Ut sed interdum orci. Quisque pharetra mi at lectus efficitur fermentum. Aliquam erat volutpat. Vestibulum metus magna, tristique et lectus eget, volutpat commodo urna. Cras eu suscipit nunc.</p><p>Nam vitae nulla vel ante molestie mattis a eu sapien. Aenean pretium ipsum vitae massa lobortis rutrum. In et ornare dui, et sagittis nisl. Donec vulputate erat sit amet nunc interdum eleifend non sit amet magna. Sed quis leo eu sapien varius convallis ac eget erat. Maecenas vitae ante feugiat, convallis mauris sed, hendrerit arcu. Sed metus tortor, lobortis et nisi a, scelerisque vehicula nisl. Vivamus efficitur metus at dolor varius malesuada. Ut vulputate tristique lacus, in semper arcu scelerisque sed. In aliquet lacus id sapien malesuada, vel finibus ante auctor. Etiam condimentum tellus et metus laoreet, ut volutpat quam tincidunt. Duis eget ante porta, euismod magna quis, rutrum velit. Curabitur ac imperdiet diam, eget accumsan massa. Curabitur ultricies accumsan luctus. Cras ornare facilisis risus, tempor dictum felis vestibulum vel. Vestibulum tincidunt purus velit, sit amet pellentesque magna egestas eget.</p>",
            "environment": [
              {
                "id": 24,
                "type": "code_quality",
                "tool": "sonar",
                "url": "https://dtp.intramundi.com/sonar/dashboard/index/",
                "resource_id": null
              },
              {
                "id": 25,
                "type": "continuous_integration",
                "tool": "jenkins",
                "url": "https://dtp.intramundi.com/jenkins/view/ActiveFwk/view/ActiveMatching/view/DEV/job/Active-matching%20-%20DEV%20-%20Build%20and%20publish/",
                "resource_id": null
              }
            ],
            "languages": [
              "java"
            ],
            "idDs": "975",
            "creationDate": 1422352761000,
            "dsId": 21,
            "lastActivityDate": 1430761699000,
            "healthStatus": 0,
            "screenShots": [
              "ActiveMatching.png"
            ],
            "idGroup": "0",
            "summary": null,
            "demo": null,
            "homepage": "https://git.intramundi.com/gitlab/activeframework/active-matching",
            "maintener": {
              "id": 157,
              "name": "Yannick Chailler",
              "email": "yannick.chailler@amundi.com",
              "idDs": "96",
              "dsId": 21,
              "avatarPath": null,
              "bio": null
            },
            "ownerId": 157,
            "keywords": [
              "utilities",
              "java",
              "matching",
              "reconciliation"
            ],
            "licence": null
          },
          {
            "name": "portail-entreprise",
            "id": 28,
            "type": "web application",
            "version": "1.0-SNAPSHOT",
            "description": "<p>Le Portail permet aux correspondants enteprise de gérer l'épargne salariale de leurs salariés, ainsi que les opérations collectives ou non</p>",
            "environment": [
              {
                "id": 26,
                "type": "scm",
                "tool": "git",
                "url": "https://git.intramundi.com/noee-internet/portail-entreprise",
                "resource_id": null
              }
            ],
            "languages": [
              "java",
              "JavaScript",
              "Html5"
            ],
            "idDs": "946",
            "creationDate": 1420636270000,
            "dsId": 21,
            "lastActivityDate": 1430927325000,
            "healthStatus": 0,
            "screenShots": [],
            "idGroup": "0",
            "summary": "Portail dédié pour les correspondants des entreprises qui permet la gestion de l'épargne salariale",
            "demo": "https://dev-noee.intramundi.com/portal",
            "homepage": "https://dev-noee.intramundi.com/portal",
            "maintener": {
              "id": 244,
              "name": "Marc Deschamps",
              "email": "marc.deschamps-ext@amundi.com",
              "idDs": "7",
              "dsId": 21,
              "avatarPath": "https://git.intramundi.com/uploads/user/avatar/7/qrcode-flexitpro.png",
              "bio": null
            },
            "ownerId": 244,
            "keywords": [
              "rest",
              "jax-rs",
              "Html5",
              "Symfony",
              "PHP",
              "Less",
              "ractive",
              "gulp",
              "npm",
              "node.js",
              "git",
              "gitlab"
            ],
            "licence": null
          },
          {
            "name": "DigiCode",
            "id": 29,
            "type": "application",
            "version": "1.1.1",
            "description": "<p>Digicode aggregates a set of applications with integrated Web interfaces, and he hosts multiple independent projects. Software developers who are registered as contributors to the hosted projects can then use the various project management tools, and software development tools.</p><p>Software forges have become popular and have proved successful in allowing development of a large number of free software projects in recent years.</p><p>The term forge refers to a common prefix or suffix adopted by the various software development management systems created after the example of the SourceForge platform.</p><p>Digicode provide similar tools helpful to software developers working in the hosted projects:</p><ul><li>source code management systems</li><li>mailing-lists or forums</li><li>wikis</li><li>software archives download services</li><li>bug tracking system</li></ul>",
            "environment": [
              {
                "id": 27,
                "type": "code_quality",
                "tool": "sonar",
                "url": "https://dtp.intramundi.com/sonar/dashboard/index/247994",
                "resource_id": "247994"
              },
              {
                "id": 28,
                "type": "issues",
                "tool": "mantis",
                "url": "http://mantis.intramundi.com/etudes",
                "resource_id": null
              },
              {
                "id": 29,
                "type": "continuous_integration",
                "tool": "jenkins",
                "url": "https://dtp.intramundi.com/jenkins/view/QOA/view/Digicode/job/Digicode%20-%20DEV%20-%20Publish/",
                "resource_id": null
              },
              {
                "id": 30,
                "type": "scm",
                "tool": "git",
                "url": "https://git.intramundi.com/gitlab/digicode/digicode",
                "resource_id": null
              }
            ],
            "languages": [
              "JavaScript",
              "java",
              "Html5"
            ],
            "idDs": "907",
            "creationDate": 1417515813000,
            "dsId": 21,
            "lastActivityDate": 1430930187000,
            "healthStatus": 100,
            "screenShots": [
              "dgc-login.png",
              "dgc-project.png",
              "dgc-projets.png",
              "dgc-search.png"
            ],
            "idGroup": "0",
            "summary": "Digicode was a project founded by Amundi, it's a collaboration platform allowing collaborative software development",
            "demo": "http://dev-digicode.intramundi.com/digicode",
            "homepage": "https://git.intramundi.com/gitlab/digicode/digicode",
            "maintener": {
              "id": 169,
              "name": "Emmanuel Asfar",
              "email": "emmanuel.asfar@amundi.com",
              "idDs": "84",
              "dsId": 21,
              "avatarPath": "https://git.intramundi.com/uploads/user/avatar/84/asfar3.png",
              "bio": null
            },
            "ownerId": 169,
            "keywords": [
              "Java",
              "SQL",
              "collaboration",
              "Html5",
              "Less",
              "AngularJs",
              "Grunt",
              "npm",
              "node.js",
              "git",
              "gitlab"
            ],
            "licence": null
          },
          {
            "name": "ActiveComputer",
            "id": 30,
            "type": "library",
            "version": null,
            "description": "ActiveComputer is a API designed to handle pricing and other Computer activities. The library provides tools to run computations in service, queue and batch mode.",
            "environment": [
              {
                "id": 31,
                "type": "code_quality",
                "tool": "sonar",
                "url": "https://dtp.intramundi.com/sonar/dashboard/index/271183",
                "resource_id": "271183"
              },
              {
                "id": 32,
                "type": "continuous_integration",
                "tool": "jenkins",
                "url": "https://dtp.intramundi.com/jenkins/view/ActiveFwk/view/ActiveComputer/view/DEV/job/Active-computer-core%20-%20DEV%20-%20Build%20and%20publish/",
                "resource_id": null
              }
            ],
            "languages": [
              "java"
            ],
            "idDs": "771",
            "creationDate": 1410279927000,
            "dsId": 21,
            "lastActivityDate": 1426777172000,
            "healthStatus": 100,
            "screenShots": [],
            "idGroup": "0",
            "summary": "ActiveComputer is a API designed to handle pricing and other Computer activities.",
            "demo": null,
            "homepage": "https://git.intramundi.com/gitlab/activecomputer/computer-core/",
            "maintener": {
              "id": 208,
              "name": "Alexandre Bury",
              "email": "alexandre.bury-ext@amundi.com",
              "idDs": "44",
              "dsId": 21,
              "avatarPath": "https://git.intramundi.com/uploads/user/avatar/44/16180.gif",
              "bio": null
            },
            "ownerId": 208,
            "keywords": [
              "computations",
              "library",
              "active framework"
            ],
            "licence": null
          },
          {
            "name": "Adnet",
            "id": 31,
            "type": "application",
            "version": "1.5.4",
            "description": "Application for network team to verify configurations and network equipment malfunction",
            "environment": [
              {
                "id": 33,
                "type": "code_quality",
                "tool": "sonar",
                "url": "https://dtp.intramundi.com/sonar/dashboard/index/190030",
                "resource_id": "190030"
              },
              {
                "id": 34,
                "type": "continuous_integration",
                "tool": "jenkins",
                "url": "https://dtp.intramundi.com/jenkins/view/QOA/view/Adnet/job/Adnet%20-%20RCT%20-%20Publish%20Manual",
                "resource_id": null
              }
            ],
            "languages": [
              "java",
              "JSP"
            ],
            "idDs": "759",
            "creationDate": 1409226073000,
            "dsId": 21,
            "lastActivityDate": 1430729513000,
            "healthStatus": 100,
            "screenShots": [
              "01_login.png",
              "02_dashboard.png",
              "03_outils.png"
            ],
            "idGroup": "0",
            "summary": "Tools for network administration",
            "demo": "https://dev-adnet.intramundi.com/adnet",
            "homepage": "https://git.intramundi.com/gitlab/qoa/adnet",
            "maintener": {
              "id": 134,
              "name": "Bernard Chesnoy",
              "email": "bernard.chesnoy@amundi.com",
              "idDs": "119",
              "dsId": 21,
              "avatarPath": "https://git.intramundi.com/uploads/user/avatar/119/myself.png",
              "bio": null
            },
            "ownerId": 134,
            "keywords": [
              "utilities",
              "java",
              "JSP",
              "network"
            ],
            "licence": null
          },
          {
            "name": "ActiveDictionary",
            "id": 32,
            "type": "library",
            "version": null,
            "description": "<p>ActiveDictionary is a complete application to create and manage a Data Governance cross referentials. From financial business objects to technical implementation, you will be able to get your way through the vast world of Amundi by finding any information you need.</p>",
            "environment": [
              {
                "id": 35,
                "type": "code_quality",
                "tool": "sonar",
                "url": "https://dtp.intramundi.com/sonar/dashboard/index/247994",
                "resource_id": "247994"
              },
              {
                "id": 36,
                "type": "issues",
                "tool": "mantis",
                "url": "http://mantis.intramundi.com/etudes",
                "resource_id": null
              },
              {
                "id": 37,
                "type": "continuous_integration",
                "tool": "jenkins",
                "url": "https://dtp.intramundi.com/jenkins/job/ActiveDictionary%20-%20DEV%20-%20Build/",
                "resource_id": null
              },
              {
                "id": 38,
                "type": "repo",
                "tool": "nexus",
                "url": "https://dtp.intramundi.com/nexus",
                "resource_id": null
              },
              {
                "id": 39,
                "type": "scm",
                "tool": "git",
                "url": "https://git.intramundi.com/gitlab/activeframework/activedictionary.git",
                "resource_id": null
              }
            ],
            "languages": [
              "java",
              "javascript"
            ],
            "idDs": "710",
            "creationDate": 1406288979000,
            "dsId": 21,
            "lastActivityDate": 1430398286000,
            "healthStatus": 0,
            "screenShots": [],
            "idGroup": "0",
            "summary": "ActiveDictionary is a complete application to create and manage a Data Governance cross referentials.",
            "demo": null,
            "homepage": "https://git.intramundi.com/gitlab/activeframework/activedictionary/wikis/home",
            "maintener": {
              "id": 148,
              "name": "Konstantina Kontoudi",
              "email": "konstantina.kontoudi-ext@amundi.com",
              "idDs": "105",
              "dsId": 21,
              "avatarPath": null,
              "bio": null
            },
            "ownerId": 148,
            "keywords": [
              "data",
              "governance",
              "java",
              "angularjs",
              "referential",
              "dictionary",
              "stpml"
            ],
            "licence": null
          },
          {
            "name": "ActiveComputer",
            "id": 33,
            "type": "library",
            "version": null,
            "description": "ActiveComputer is a API designed to handle pricing and other Computer activities. The library provides tools to run computations in service, queue and batch mode.",
            "environment": [
              {
                "id": 40,
                "type": "code_quality",
                "tool": "sonar",
                "url": "https://dtp.intramundi.com/sonar/dashboard/index/247994",
                "resource_id": "247994"
              },
              {
                "id": 41,
                "type": "issues",
                "tool": "mantis",
                "url": "http://mantis.intramundi.com/etudes",
                "resource_id": null
              },
              {
                "id": 42,
                "type": "continuous_integration",
                "tool": "jenkins",
                "url": "https://dtp.intramundi.com/jenkins/job/ActiveDictionary%20-%20DEV%20-%20Build/",
                "resource_id": null
              },
              {
                "id": 43,
                "type": "scm",
                "tool": "git",
                "url": "https://git.intramundi.com/gitlab/digicode/digicode",
                "resource_id": null
              }
            ],
            "languages": [],
            "idDs": "614",
            "creationDate": 1403002298000,
            "dsId": 21,
            "lastActivityDate": 1426847756000,
            "healthStatus": 0,
            "screenShots": [],
            "idGroup": "0",
            "summary": "ActiveComputer is a API designed to handle pricing and other Computer activities. The library provides tools to run computations in service, queue and batch mode.",
            "demo": null,
            "homepage": "https://git.intramundi.com/gitlab/activeframework/activecomputer/wikis/home",
            "maintener": null,
            "ownerId": 0,
            "keywords": [
              "computations",
              "pricing"
            ],
            "licence": null
          },
          {
            "name": "Reporting 2.0",
            "id": 34,
            "type": "application",
            "version": "3.1.0",
            "description": "<p>Reporting 2.0 plateform provide tools for Manage Reports for our clients:</p><ul><li>Report Dataware</li><li>Report Designer</li><li>Web Designer</li><li>Report Services</li><li>Data Viewer</li></ul>",
            "environment": [
              {
                "id": 44,
                "type": "issues",
                "tool": "mantis",
                "url": "http://mantis.intramundi.com/etudes/my_view_page.php",
                "resource_id": null
              },
              {
                "id": 45,
                "type": "scm",
                "tool": "git",
                "url": "https://git.intramundi.com/gitlab/web-intranet/reportingonline",
                "resource_id": null
              },
              {
                "id": 46,
                "type": "code_quality",
                "tool": "sonar",
                "url": "http://phpci.intramundi.com/sonar/dashboard/index/916",
                "resource_id": "916"
              },
              {
                "id": 47,
                "type": "continuous_integration",
                "tool": "jenkins",
                "url": "http://phpci.intramundi.com/jenkins/job/reportingonline/",
                "resource_id": null
              }
            ],
            "languages": [
              "PHP",
              "Symfony 2",
              "JQuery",
              "HighCharts",
              "PhantomJS",
              "MongoDB",
              "Solr"
            ],
            "idDs": "80",
            "creationDate": 1383126803000,
            "dsId": 21,
            "lastActivityDate": 1430987834000,
            "healthStatus": 0,
            "screenShots": [
              "Data_viewer.png",
              "Factsheet_Amundi_with_alert.png",
              "Factsheet_CPR.png",
              "Interactive_bubble.png",
              "List_of_template.png",
              "Production_dashboard.png",
              "Report_designer.png"
            ],
            "idGroup": "0",
            "summary": "Report your dreams",
            "demo": "http://reportingonline-dev.intramundi.com/",
            "homepage": "http://reportingonline.intramundi.com/",
            "maintener": {
              "id": 138,
              "name": "Michael Esnault",
              "email": "michael.esnault@amundi.com",
              "idDs": "115",
              "dsId": 21,
              "avatarPath": "https://git.intramundi.com/uploads/user/avatar/115/analytics2.png",
              "bio": null
            },
            "ownerId": 138,
            "keywords": [
              "Reporting",
              "Web",
              "Widget",
              "Factsheet",
              "Services",
              "Traduction",
              "Designer",
              "Report",
              "Viewer",
              "Data",
              "Client",
              "OnDemand"
            ],
            "licence": null
          }
        ]
      }
    }]);

})();

