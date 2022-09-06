import { Component, OnInit } from '@angular/core';
import*as $ from 'jquery';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

test66():void{
  
    $("#habilitation").one('click',function(){
      $('#collapse1').toggleClass(' in'),
      $('.active').toggleClass('open');
    }); 
}
test7():void{ 
  $("#Items-Manager").one('click',function(){
    $('#collapse2').toggleClass('collapse in'),
    $('.active1').toggleClass('open');
  });
}
test8():void{
  $("#Charts").one('click',function(){
    $('#collapse3').toggleClass('collapse in'),
    $('.active2').toggleClass('open');
  });
}
test9(){
   $("#Tables").one('click',function(){
  $('#collapse4').toggleClass('collapse in'),
  $('.active3').toggleClass('open');
});}
test10(){$("#UI-Elements").one('click',function(){
  $('#collapse5').toggleClass('collapse in'),
  $('.active4').toggleClass('open');
});}
test11(){$("#Pages").one('click',function(){
  $('#collapse6').toggleClass('collapse in'),
  $('.active5').toggleClass('open');
});}
test12(){$("#Menu-Levels").one('click',function(){
  $('#collapse7').toggleClass('collapse in'),
  $('.active6').toggleClass('open');
});
  $("#second-Level").on('click',function(){
  $('#collapse8').toggleClass('collapse in'),
  $('.active7').toggleClass('open');

});
$("#third-Level").on('click',function(){
  $('#collapse9').toggleClass('collapse in'),
  $('.active8').toggleClass('open');

});
$("#third-Level1").on('click',function(){
  $('#collapse10').toggleClass('collapse in'),
  $('.active9').toggleClass('open');

});
}
}
