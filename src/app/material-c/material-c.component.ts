import { Component, OnInit } from '@angular/core';
import{NgModule} from '@angular/core';
import{MatButtonModule, MatSelectModule, MatRadioModule, MatListModule, MatCardModule,MatIconModule}from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';



const material=[
  MatButtonModule ,
  MatTableModule  ,
  MatSnackBarModule ,
  MatCheckboxModule ,
  MatSelectModule ,
  MatRadioModule,
  MatListModule,
  MatCardModule,
  MatIconModule
];
@NgModule({
  imports:[material],
  exports:[material]
})
@Component({
  selector: 'app-material-c',
  templateUrl: './material-c.component.html',
  styleUrls: ['./material-c.component.css']
})
export class MaterialCComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
