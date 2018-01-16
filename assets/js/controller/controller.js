 app = angular.module("myApp", []);

    //Top level information controller
    app.controller("myCtrl", function($scope) {

    $scope.firstName = "Kapeel";
    $scope.lastName = "Kokane";

    $scope.designation = "Android and Web Developer";
    $scope.image = "profile.png";

    $scope.location = "Bangalore, Karnataka";
    $scope.email = "kapeel.kokane@gmail.com";
    $scope.website = "www.simplyaddictivestudios.co.in";

    //all the personal social media profile page links - provide only the ID part
    $scope.twitter = "kapilkdk862";
    $scope.google = "104996380882417950244";
    $scope.linkdin = "kapeel-kokane-30b81973";
    $scope.quora = "Kapeel-Kokane";
    });

    //basic information controller
    app.controller("basicCtrl", function($scope) {

    $scope.heading = "Basic Info";
    //an array of paragraphs for description
    $scope.info_detail = ["Completed my B.Tech in Electronics and Communication from the National Institute of Technology.",
                          "Currently working with Wipro Technologies as a Project Engineer.",
                            "Office project involves working with HP Properietary Switch Operating System called Provision Operating Systems (PVOS).",
                            "Working with IP applications like Telnet, TFTP, DHCP, Network Management applications like SNMP.",
                            "Implemented the REST API for SNMP Server as a feature development.",
                            "As a part of my Github Projects, I have an exposure to Android development, web development using HTML, CSS, Javascript.",
                            "Also, have got a working knowledge of user interface frameworks like Angular JS and React JS."
                            ]
    });

    app.controller("projCtrl", function($scope) {

    //latest proj
    $scope.title_latest_proj = "Form to Resume - React JS";
    $scope.link_latest_proj = "kokanek/resume-form-to-json";
    $scope.image_latest_proj = "json.jpg";
    $scope.ribbon_latest_proj = "App";
    $scope.summary_latest_proj = "A React JS based app that takes the user input in a form and translates it into a well formatted resume based on a pre-selected theme.";
    //detailed description latest project
    $scope.details_latest_proj = ["There is currently a community React JS project present in Github which takes a JSON object in a specific format as an input and then renders a resume based on a pre-selected theme.",
                                    "But the catch is that, the user needs to upload the details of their resume in the form of a JSON Object which may not be feasbile for a layman.",
                                    "This project attempts to bridge that gap and create a form based User interface which takes user input and creates a JSON object based on those details which can then be fed to the above mentioned framework."];

    $scope.proj1 = {};
    $scope.proj1.link = "store/apps/details?id=simplyaddictivestudios.kokane.com.cloudquiz";
    $scope.proj1.name = "CloudQuiz - Instant Quiz !";
    $scope.proj1.description = "A cloud based android app which allows users to create quizzes and share them with other users, Also, getting the access to reports generated for the quiz.";

    $scope.proj2 = {};
    $scope.proj2.link = "store/apps/details?id=com.kokane.kapeel.updown";
    $scope.proj2.name = "Up/Down - The numbers game";
    $scope.proj2.description = "A math based numbers game in which the user strategically chooses a sequence of numbers in a time crunch situation";

    $scope.projects = [$scope.proj1, $scope.proj2];
    });

    app.controller("workCtrl", function($scope) {

    $scope.work1= {};
    $scope.work1.designation = "Project Engineer";
    $scope.work1.name = "Wipro Technologies";
    $scope.work1.duration = "July 2014 to present";
    $scope.work1.description = "Working with the HP client with its proprietary operating system for switches - PVOS. Work revolves around IP Applications like DHCP, TFTP, Telnet. Recently implemented the REST API for an entire feature - SNMP Server. ";

    $scope.works= [$scope.work1];
    });

    app.controller("skillCtrl", function($scope) {

    $scope.skill_summary = "I have a diverse skillset that ranges right from operating system programming to android. Recently, getting into web development by learning Angular JS and React JS."

    $scope.skill1= {};
    $scope.skill1.name = "C language";
    $scope.skill1.level = "Expert";
    $scope.skill1.percentage = "90%";

    $scope.skill2= {};
    $scope.skill2.name = "Android";
    $scope.skill2.level = "Intermediate";
    $scope.skill2.percentage = "50%";

    $scope.skill3= {};
    $scope.skill3.name = "HTML, CSS, Javascript";
    $scope.skill3.level = "Intermediate";
    $scope.skill3.percentage = "50%";

    $scope.skill4= {};
    $scope.skill4.name = "Angular JS, React JS";
    $scope.skill4.level = "Beginner";
    $scope.skill4.percentage = "20%";

    $scope.skills = [$scope.skill1, $scope.skill2, $scope.skill3, $scope.skill4];
  });

  app.controller("eduCtrl", function($scope) {

  $scope.edu1 = {};
  $scope.edu1.degree = "B.Tech, ECE";
  $scope.edu1.institute = "NITK, Surathkal";
  $scope.edu1.duration = "2010 - 2014";

  $scope.education = [$scope.edu1];
  });
