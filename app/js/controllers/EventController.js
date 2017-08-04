'use strict'

eventsApp.controller('EventController',

  function EventController($scope) {

      $scope.sortorder = 'name'
      $scope.snippet = '<span style="color:red">hi there</span>';
      $scope.boolValue = true;
      $scope.mystyle = {color:'red'};
      $scope.myclass = "blue";
      $scope.buttonDisabled = true;
      $scope.event = {
        name: 'Angular Boot Camp',
        date: 1359781015626,
        time: '10:30 am',
        location: {
            address: 'Google Headquarter',
            city:'Moutain View',
            province: 'CA',
        },
        imageUrl: '/img/angularjs-logo.png',
        sessions:[
          {
            name:'Directives Masterclass Introductory',
            creatorName:'Bob Smith',
            duration:1,
            level:'Advanced',
            abstract:'In this session you will learn ins and outs of Directives',
            upVoteCount:0
          },
          {
            name:'Scopes for fun and profit',
            creatorName:'John Doe',
            duration:2,
            level:'Introductory',
            abstract:'This session will take a closed look at scopes',
            upVoteCount:0
          },
          {
            name:'Well behaved Controllers',
            creatorName:'Bob Smith',
            duration:4,
            level:'Intermediate',
            abstract:'Controllers are the beginning of everything Angular does',
            upVoteCount:0
          }
        ]
      }

      $scope.upVoteSession=function(session) {
        session.upVoteCount++;
      }

      $scope.downVoteSession=function(session) {
        session.upVoteCount--;
      }
  }
);
