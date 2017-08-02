'use strict'

eventsApp.controller('EventController',

  function EventController($scope) {

      $scope.event = {
        name: 'Angular Boot Camp',
        date: '1/1/2013',
        time: '10:30 am',
        location: {
            address: 'Google Headquarter',
            city:'Moutain View',
            province: 'CA',
        },
        imageUrl: '/img/angularjs-logo.png',
        sessions:[
          {
            name:'Directives Masterclass',
            creatorName:'Bob Smith',
            duration:'1 hr',
            level:'Advanced',
            abstract:'In this session you will learn ins and outs of Directives',
            upVoteCount:0
          },
          {
            name:'Scopes for fun and profit',
            creatorName:'John Doe',
            duration:'30 min',
            level:'Introductory',
            abstract:'This session will take a closed look at scopes',
            upVoteCount:0
          },
          {
            name:'Well behaved Controllers',
            creatorName:'Bob Smith',
            duration:'2 hrs',
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
