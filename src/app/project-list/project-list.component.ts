import { Component, OnInit } from '@angular/core';
import { IProject } from '../projects';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})

export class ProjectListComponent implements OnInit {

  projects: IProject[] = [
    {
    "id": 1,
    "title":"Instagram Network Analysis",
    "desc": "Taking an instagram account, list of users who follow the account holder and being followed back (best friends) were found. All the followers of the bestfriends' profiles were scrapped through phantombuster .The directed edges were established between the nodes based on their following (a-->b, means a follows b). Then analysis was made on the resulting network.",
    "url":"https://github.com/navenduraisamy/INSTAGRAM-NETWORK-ANALYSIS"
    },
    {
    "id": 2,
    "title":"Soukya V-Rehab",
    "desc":"The aim is to develop an interactive web application that enables the therapist to assign suitable exercises to the patient and monitor the progress of the patient. On patient’s end, the goal is to develop an effective interface, that aids the patient to learn the exercise provided, and to evaluate the exercise, using Machine learning and computer vision.",
    "url":"https://github.com/heyimpreetham/Soukya-vRehab"
    }];

  constructor() { }

  ngOnInit(): void {
  }

}
