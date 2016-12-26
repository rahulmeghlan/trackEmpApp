'use strict';

/**
 * @ngdoc function
 * @name trackEmpApp.controller:MainData
 * @description
 * # MainData
 * Data of the trackEmpApp
 */

angular.module("trackEmpApp")
  .constant("employees", [
    {
      name: "Rahul Meghlan",
      role: "TechLead",
      team: "FrontEnd",
      project: "Dell App Design",
      active: false,
      detailVisible: false,
      image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAANnAAAAJDIyMzk0NDVlLTkxMzctNGQ0OC1hZTRjLWQ3MjkyZjU2YTZmMA.jpg",
      id: 1
    },
    {
      name: "Jatin Marwah",
      role: "SrDev",
      team: "FrontEnd",
      project: "Verizon Wireless",
      active: false,
      detailVisible: false,
      image: "https://media.licdn.com/mpr/mpr/shrink_100_100/p/5/005/031/2a3/16728c3.jpg",
      id: 2
    },
    {
      name: "Kunal Vashist",
      role: "TechLead",
      team: "FrontEnd",
      project: "SurePeople",
      active: false,
      detailVisible: false,
      image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAUNAAAAJGIzOTVlNmFjLTM2ZTYtNGUxMi1hNjViLWY0MjVhNjk1YjUyMg.jpg",
      id: 3
    },
    {
      name: "Harshendra",
      role: "SrDev",
      team: "BackEnd",
      project: "Mobile Programming LLC",
      active: false,
      detailVisible: false,
      image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAUJAAAAJGJjZDE0YWUyLWEyNzEtNDNkYy1iOTVlLTQ5YmVjNGM0OTk0Zg.jpg",
      id: 4
    },
    {
      name: "Dheer Singh",
      role: "CTO",
      team: "BackEnd",
      project: "Microsec Health Buddy",
      active: false,
      detailVisible: false,
      image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAgpAAAAJGY4MmVhNTBjLTQzMGMtNDNmYS1iMzk4LWI1MWE2ZDIzNGU3ZA.jpg",
      id: 5
    },
    {
      name: "Sameer Gupta",
      role: "TechLead",
      team: "FrontEnd",
      project: "Sapient",
      active: false,
      detailVisible: false,
      image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/088/215/29992dd.jpg",
      id: 6
    },
    {
      name: "Shalini Sharma",
      role: "SrDev",
      team: "BackEnd",
      project: "Google",
      active: false,
      detailVisible: false,
      image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAlbAAAAJGZmM2FmOGUxLWM3YTUtNGQ4NS04ZGFjLWU3YjZkMmJhY2ExOQ.jpg",
      id: 7
    },
    {
      name: "Sumit Panwar",
      role: "CreativeDirector",
      team: "Creative",
      project: "Guiddoo",
      active: false,
      detailVisible: false,
      image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/005/0b7/2ef/006b1e8.jpg",
      id: 8
    },
    {
      name: "Bilal Awan",
      role: "SrDev",
      team: "FrontEnd",
      project: "None",
      active: false,
      detailVisible: false,
      image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAPhAAAAJDkyZjcxOWVmLWMwNTctNGM3YS05NTQwLWI3ZGEwOWMzY2EwNg.jpg",
      id: 9
    },
    {
      name: "Abhinav",
      role: "Dev",
      team: "BackEnd",
      project: "Dell App Design",
      active: false,
      detailVisible: false,
      image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAANnAAAAJDIyMzk0NDVlLTkxMzctNGQ0OC1hZTRjLWQ3MjkyZjU2YTZmMA.jpg",
      id: 10
    },
    {
      name: "Preeti",
      role: "PM",
      team: "Management",
      project: "Dell App Design",
      active: false,
      detailVisible: false,
      image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAjCAAAAJDQyNTBmZGU0LThlNmMtNDUzMC1iNDM4LWJiYjAwMDAxYzhiOA.jpg",
      id: 11
    },
    {
      name: "Aakash",
      role: "SrDev",
      team: "FrontEnd",
      project: "GroupM",
      active: false,
      detailVisible: false,
      image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAANnAAAAJDIyMzk0NDVlLTkxMzctNGQ0OC1hZTRjLWQ3MjkyZjU2YTZmMA.jpg",
      id: 12
    },
    {
      name: "Ashutosh",
      role: "TechLead",
      team: "FrontEnd",
      project: "GroupM",
      active: false,
      detailVisible: false,
      image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAANnAAAAJDIyMzk0NDVlLTkxMzctNGQ0OC1hZTRjLWQ3MjkyZjU2YTZmMA.jpg",
      id: 13
    },
    {
      name: "Anand",
      role: "SrDev",
      team: "BackEnd",
      project: "GroupM",
      active: false,
      detailVisible: false,
      image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAANnAAAAJDIyMzk0NDVlLTkxMzctNGQ0OC1hZTRjLWQ3MjkyZjU2YTZmMA.jpg",
      id: 14
    },
    {
      name: "Ashutosh",
      role: "TechLead",
      team: "FrontEnd",
      project: "GroupM",
      active: false,
      detailVisible: false,
      image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAANnAAAAJDIyMzk0NDVlLTkxMzctNGQ0OC1hZTRjLWQ3MjkyZjU2YTZmMA.jpg",
      id: 15
    },
    {
      name: "Anand",
      role: "SrDev",
      team: "BackEnd",
      project: "GroupM",
      active: false,
      detailVisible: false,
      image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAANnAAAAJDIyMzk0NDVlLTkxMzctNGQ0OC1hZTRjLWQ3MjkyZjU2YTZmMA.jpg",
      id: 16
    }
  ]);
