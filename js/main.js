
//Variable for clear interval
var loaderinit,sis = new Array(5);
sis[0] = new Array(1);
sis[1] = new Array(3);
sis[2] = new Array(3);
sis[3] = new Array(4);
sis[4] = new Array(4);

//LOADER Remove
$(window).load(function(){
    clearInterval(loaderinit);
    clearInterval(loadtxtt);
    $('#loadertxt').html("Ready to take off");
    $('#loadertxt').fadeIn(300);
    $('.gt_but').fadeIn(300);

    $.ajax({
        method : "GET",
        url : "http://bits-oasis.org/2015/start/",
        data: JSON.parse('{"gauss":"galois"}') ,
        // contentType: "application/json; charset=utf-8",
        success : function(blah) 
          {
             console.log('Creators : Prateek,Smit,Piyush,Abhinav,Rishabh,Amey,Satwik,Kunal,Nikhil');
          } 
    });
    $.ajax({
       type: 'GET',
        url: 'http://www.timeapi.org/utc/now.json',
        async: false,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(data){
          d = new Date(data.dateString).getTime()/60000%7;
          d = parseInt(d);
          if(d==0){
            $('.whirly-loader').css('display','none');
            $('.lightbox').fadeIn();
            $('#black_overlay').fadeIn();
            $("#eventtitle").html("Congratulation");
            $("#eventdetail").html('<p>You won a cleartrip coupon.</p><p>Note down the coupon code: CT1000PKG</p><a href="http://bits-oasis.org/cleartrip" target="_blank"><p><span style="color:#f00;"><b>Click Here</b></span> to know the terms and conditions to use cleartrip coupon.</a>');
            $("#eventtitle").fadeIn();
            $("#eventdetail").fadeIn();
          }
        }
    });
});


//AUTO TOUR 

//LANDING TO

function tolanding()
{
  $('#transition').css({'display':'block'});

  divtransit();
  setTimeout(function(){
    $('#loader').remove();
  },300);
  setTimeout(function(){
    drawlanding();
  },3100);
}
var auto_curr=0;
function autotour()
{
  $('#transition').css({'display':'block'});
  divtransit();
  setTimeout(function(){
    $('#loader').remove();
  },300);
  $('#next_but').css('display','block');
  nexttour();
}
function nexttour(){
  switch(auto_curr)
  {
    case 1:
      riodinit();
      break;
    case 2:
      nycdinit();
      break;
    case 3:
      sydneydinit();
      break;
    case 4:
      venicedinit();
      break;
    case 5:
      tajdinit();
      break;    
  }
  auto_curr++;
  if(auto_curr<6){
    switch(auto_curr)
    {
      case 1:
        rioinit();
        break;
      case 2:
        nycinit();
        break;
      case 3:
        sydneyinit();
        break;
      case 4:
        veniceinit();
        break;
      case 5:
        tajinit();
        break;    
    }
    clearInterval(notify_interval);
    startNotify();
    parallax_open(auto_curr);
  }
  else{
    parallax_open(0);
    clearNotify();
    drawlanding();
    auto_curr=0;
    $('#next_but').css('display','none');
    var len = parseInt($('#auto_tour_notify').css('height'));
    $('#auto_tour_notify').animate({top:-len+'px'},700);
  }
}

// LOADER ANIMAITION
var loadtxt=["Checking your Passport.","Verifing credentials.","Issuing ticket.","Scanning baggages.","Refueling the plane.","Preparing your journey."];
var loadint=0;

var loadtxtt = setInterval(function()
{
  $('#loadertxt').fadeOut(300);

  setTimeout(function()
  {
    $('#loadertxt').html(loadtxt[loadint]);
    $('#loadertxt').fadeIn(300);
  },300);
  ++loadint;

  if(loaderinit==loadtxt.length)
    loadint=0;

},5000);



var loaderjj = $(".spokes1").height();
$(".spokes1, .spokes2").css({"width": loaderjj + "px"});

 var loaderk=3;
 loaderinit = setInterval(function(){ mainfunc();},8000);
 function mainfunc()
{
if(loaderk==1)
 {
   $(".backpack").css({"display": "block","left":"-120%"});  
 }
else if(loaderk==2)
 {  
   $(".bag2").css({"display": "block","left":"-120%"}); 
 }
else if(loaderk==3)
 {  
   $(".bag3").css({"display": "block","left":"-120%"}); 
 }
else if(loaderk==4)
 {  
   $(".suitcase2").css({"display": "block","left":"-120%"});

 }

 $(".outer_cont img").animate({"left": "180%"},7000,function()
  {   
    $(".outer_cont img").fadeOut(1000);   
  });
 
 if(loaderk<4){++loaderk;}
 else{loaderk=1;}

}


mainfunc();


// EVENT TRANSITION
var divtransit,dh,dw,dl,da;

divtransit = function()
 {
  $('#upperdig').animate({"top":"0%"},250);
  $('#lowerdig').animate({"bottom":"0%"},250,function()            {
          $('#car').animate({'left':'120%'},1650,function()
            {
               
              $('#upperdig').animate({"top":"120%"},300,function(){$("#car").css({'left':'0%'});});
              $('#lowerdig').animate({"bottom":"120%"},300,function(){$('#transition').css({'display':'none'});});
           });
         });
 }

$(document).ready(function ()
{
  transit_init();
});

//$(document).resize
$( window ).resize(function(){
  transit_init()
});

function transit_init(){
  dh = $(window).height();
  dw = $(window).width();
  dl = Math.ceil( Math.sqrt((dh*dh) + (dw*dw)) );
  da = (180*Math.atan(dh/dw))/Math.PI;
  $("#upperdig").css({"width":dl,"height":dl/2});
    $("#upperdig").css({
          '-moz-transform':'rotate('+da+'deg)',
          '-webkit-transform':'rotate('+da+'deg)',
          '-o-transform':'rotate('+da+'deg)',
          '-ms-transform':'rotate('+da+'deg)',
          'transform': 'rotate('+da+'deg)'
     }); 
     $("#lowerdig").css({"width":dl,"height":dl/2}); 
     $("#lowerdig").css({
          '-moz-transform':' rotate('+da+'deg)' ,
          '-webkit-transform':'rotate('+da+'deg)' ,
          '-o-transform':'rotate('+da+'deg)' ,
          '-ms-transform':'rotate('+da+'deg)' ,
          'transform': 'rotate('+da+'deg)' 
     });
}


// LANDING JS

function startanim_landing()
{
  $('.svg_paper:nth-of-type(1)').attr("class", "svg_paper lcloud1");
  $('.svg_paper:nth-of-type(2)').attr("class", "svg_paper lcloud2");
  $('.svg_paper:nth-of-type(3)').attr("class", "svg_paper lcloud3");
  $('#sun').attr("class", "svg_paper rotate");
}
function stopanim_landing()
{
  $('.svg_paper:nth-of-type(1)').attr("class", "svg_paper");
  $('.svg_paper:nth-of-type(2)').attr("class", "svg_paper");
  $('.svg_paper:nth-of-type(3)').attr("class", "svg_paper");
  $('#sun').attr("class", "svg_paper");
  $('#compassneedle').attr("class","");
}


// $('.svg_path').click(function(){
//     draw_path($(this)[0].querySelectorAll('path'));
// })
function drawlanding()
{
  $('#compassneedle').attr("class", "compassneedle");
  var frames = [30,30,30,120,120,120,120,120,45,20,20,30,30,30,30,30];
  // $('.svg_paper').css('display','inline');
  // for(i=0;i<$('.svg_paper').length;i++)
  // {
  //     setTimeout(function(){
  //      draw_path($('.svg_paper')[i].querySelectorAll('path'));
  //     },2000*i)
  // };
  var i=0;
  var anim = setInterval(function(){
    if(i<$('.svg_paper').length){
      draw_path($('.svg_paper')[i].querySelectorAll('path'),frames[i]);
      $($('.svg_paper')[i]).css('display','inline');
    }
    else
      clearInterval(anim);
    i++;
  },1000);
  // draw_path($('.svg_paper path'))
  setTimeout(function(){
    startanim_landing();
    $('.svg_paper:nth-of-type(12),.svg_paper:nth-of-type(13),.svg_paper:nth-of-type(14),.svg_paper:nth-of-type(15),.svg_paper:nth-of-type(16)').fadeOut(1000);
    $('.rio_but,.nyc_but,.syd_but,.ven_but,.agr_but').fadeIn(1000);
  },17000);
}
function draw_path(path,frames){   
var current_frame = 0;
var length = new Array();
var total_len = 0;
for(var i=0; i<path.length;i++){
    l = path[i].getTotalLength();
    total_len += l;
    length[i] = l;
    path[i].style.strokeDasharray = l + ' ' + l; 
    path[i].style.strokeDashoffset = l;
}
var handle = 0;
var j=0;
var draw = function() {
   var progress = (total_len*current_frame)/(frames * length[j]); //making total animation to 120 frames for all paths in svg
   if (progress > 1) {
        current_frame=0;
        progress=0;
        j++;
   }
    current_frame++;
    if(j<path.length)
    {
        path[j].style.strokeDashoffset = Math.floor(length[j] * (1 - progress));
        handle = window.requestAnimationFrame(draw);
    }
    else
        window.cancelAnimationFrame(handle);
   
};
draw();
}

$(".landingbg > img:nth-child(16)").hover(
    function(){
        $(this).addClass("ttobfash");
},
    function(){
        $(this).removeClass("ttobfash");
});
$(".landingbg >a:nth-of-type(1) img").hover(
    function(){
        $(this).addClass("rtolguitar");
},
    function(){
        $(this).removeClass("rtolguitar");
});
$(".landingbg > img:nth-child(20)").hover(
    function(){
        $(this).addClass("ltorfan");
},
    function(){
        $(this).removeClass("ltorfan");
});
$(".landingbg >a:nth-of-type(2) img").hover(
    function(){
        $(this).addClass("ttobprof");
},
    function(){
        $(this).removeClass("ttobprof");
});
$(".landingbg > img:nth-child(6),.landingbg > img:nth-child(7),.landingbg > img:nth-child(12)").hover(
    function(){
        $(this).addClass("rtol");
},
    function(){
        $(this).removeClass("rtol");
});
$(".landingbg > img:nth-child(2),.landingbg > img:nth-child(3)").hover(
    function(){
        $(this).addClass("ttob");
},
    function(){
        $(this).removeClass("ttob");
});
$(".landingbg > img:nth-child(8),.landingbg > img:nth-child(9),.landingbg > img:nth-child(21)").hover(
    function(){
        $(this).addClass("btot");
},
    function(){
        $(this).removeClass("btot");
});
$(".landingbg > img:nth-child(11),.landingbg > img:nth-child(13),.landingbg > img:nth-child(14),.landingbg > img:nth-child(15),.landingbg > img:nth-child(17)").hover(
    function(){
        $(this).addClass("ltor");
},
    function(){
        $(this).removeClass("ltor");
});


//Newyork
  function nycinit()
  {
    $('#nyc').parallax({
      calibrateX: false,
      calibrateY: true,
      invertX: true,
      invertY: true,
      limitX: false,
      limitY: false,
      scalarX: 5,
      scalarY: 1,
      frictionX: 0.2,
      frictionY: 1,
      originX: 0.5,
      originY: 0.5
    });1
    $('#nyc').parallax().parallax('enable');

    $('.nycw').addClass('nycwave');
    $('.nyclib').addClass('nycliberty');
    $('.nycb').addClass('nycboat');

    $('.nycboat').animate({"left":"-50vw"},35400,"linear",function(){
             $('.nycboat').css({"left":"150vw"}).animate({"left":"58vw"},34600,"linear");
            });

      sis[0][0] = setInterval(function(){
            $('.nycboat').animate({"left":"-50vw"},35400,"linear",function(){
                $('.nycboat').css({"left":"150vw"}).animate({"left":"58vw"},34600,"linear");
            });

        },60050)  ;
    }

    function nycdinit()
    {
        $('.nycw').removeClass('nycwave');
        $('.nyclib').removeClass('nycliberty'); 
        
        clearInterval(sis[0][0]);
        $('#nyc').parallax().parallax('disable');
    }


//RIO SCENE
function rioinit()
{
    $('#rios').parallax({
      calibrateX: false,
      calibrateY: true,
      invertX: true,
      invertY: true,
      limitX: false,
      limitY: false,
      scalarX: 5,
      scalarY: 1,
      frictionX: 0.2,
      frictionY: 1,
      originX: 0.5,
      originY: 0.5
    });
    $('#rios').parallax().parallax('enable');

    $('.riot').addClass('rtree');
    $('.riob').addClass('rboat');

    var rcloud = $(".rcloud"),i;
    for (i = 0; i < rcloud.length; i++) 
    {     
      
      cloudmove($(rcloud[i]),i%2);  
    }
        $(".rwshade:nth-child(0)").animate({"width":"44vw"},1500,"linear",function(){
            $(".rwshade:nth-child(0)").animate({"width":"36vw"},1500,"linear");
        });
        $(".rwshade:nth-child(1)").animate({"width":"50vw"},1500,"linear",function(){
            $(".rwshade:nth-child(1)").animate({"width":"40vw"},1500,"linear");
        });

    sis[1][0]=setInterval(function(){
    for (i = 0; i < rcloud.length; i++) 
    {     
      cloudmove($(rcloud[i]),i%2);  
    }
            
    
    },8100);
    

    function cloudmove(rcloud,i)
    {
      var rleft = rcloud.position().left;
      if(i==1)
      move = 20 + (Math.random()*20);
      else
      move = -(20 + (Math.random()*20));  
      rcloud.animate({"left": (rleft + move) + "px"},4000,"swing",function(){
      rcloud.animate({"left": (rleft) + "px"},4000,"swing");
      });
    }

         $('.rboat').animate({"left":"-10vw"},34800,"linear",function(){
             $('.rboat').css({"left":"90vw"}).animate({"left":"48vw"},25200,"linear");
            });
    
     sis[1][1]=setInterval(function(){
            $('.rboat').animate({"left":"-10vw"},34800,"linear",function(){
                $('.rboat').css({"left":"90vw"}).animate({"left":"48vw"},25200,"linear");
            });

        },60050)  ; 

         sis[1][2]=setInterval(function(){
            $(".rsun:nth-child(1)").animate({"opacity":"0.3"},1500,"linear",function(){
               $(".rsun:nth-child(1)").animate({"opacity":"0.85"},1500,"linear"); 
            });
            $(".rsun:nth-child(2)").animate({"opacity":"0.3"},1500,"linear",function(){
               $(".rsun:nth-child(2)").animate({"opacity":"0.85"},1500,"linear"); 
            });
            $(".rsun:nth-child(3)").animate({"opacity":"0.3"},1500,"linear",function(){
               $(".rsun:nth-child(3)").animate({"opacity":"0.85"},1500,"linear"); 
            });
            $(".rwshade:nth-child(1)").animate({"width":"44vw"},1500,"linear",function(){
                $(".rwshade:nth-child(1)").animate({"width":"40vw"},1500,"linear");
            });
            $(".rwshade:nth-child(2)").animate({"width":"50vw"},1500,"linear",function(){
                $(".rwshade:nth-child(2)").animate({"width":"45vw"},1500,"linear");
            });
        },3000);    
};

function riodinit()
{
    $('.riob').removeClass('rboat');
    $('.riot').removeClass('rtree');
    for(i=0;i<3;i++){
      clearInterval(sis[1][i]);
    }
    $('#rios').parallax().parallax('disable');
}

// sydney  ***********
function sydneyinit(){
  $('#sydneys').parallax({
    calibrateX: false,
    calibrateY: true,
    invertX: true,
    invertY: true,
    limitX: false,
    limitY: false,
    scalarX: 4,
    scalarY: 1,
    frictionX: 0.2,
    frictionY: 1,
    originX: 0.5,
    originY: 0.5
  });
  $('#sydneys').parallax().parallax('enable');
  $('.sydc').addClass('vcloud');
  $('.sydc2').addClass('vcloud2');
  $('.sydb').addClass('sboat');
}

function sydneydinit()
{
  $('.sydc').removeClass('vcloud');
  $('.sydc2').removeClass('vcloud2');
  $('.sydb').removeClass('sboat');
  $('#sydneys').parallax().parallax('disable');
}

//  sydney END#######################
// taj*******************************
function tajinit(){
  $('#tajs').parallax({
  calibrateX: false,
  calibrateY: true,
  invertX: true,
  invertY: true,
  limitX: false,
  limitY: false,
  scalarX: 5,
  scalarY: 2,
  frictionX: 0.2,
  frictionY: 1,
  originX: 0.5,
  originY: 0.5
});
  $('#tajs').parallax().parallax('enable');
  $('.tajc').addClass('tajcloud');
}

function tajdinit()
{
  $('.tajc').removeClass('tajcloud');
  $('#tajs').parallax().parallax('disable');
}

// taj END#########################
// venice***********************
function veniceinit(){
$('#venices').parallax({
  calibrateX: false,
  calibrateY: true,
  invertX: true,
  invertY: true,
  limitX: false,
  limitY: false,
  scalarX: 5,
  scalarY: 2,
  frictionX: 0.2,
  frictionY: 1,
  originX: 0.5,
  originY: 0.5
});
$('#venices').parallax().parallax('enable');

var movement41 = function(){
  $("#venices .layer:nth-child(4)>img").animate({"left": "20vw","opacity": "0.1"}, 5000,function(){
      $("#venices .layer:nth-child(4)>img").animate({"left": "18vw","opacity": "1"}, 5000,function(){
          $("#venices .layer:nth-child(4)>img").animate({"left": "20vw","opacity": "0.1"}, 5000);
      });
  });
}

var movement51 = function(){
  $("#venices .layer:nth-child(5)>img").animate({"left": "12vw","opacity": "0.1"}, 5000,function(){
      $("#venices .layer:nth-child(5)>img").animate({"left": "10vw","opacity": "1"}, 5000,function(){
          $("#venices .layer:nth-child(5)>img").animate({"left": "12vw","opacity": "0.1"}, 5000);
      });
  });
}

var movement61 = function(){
  $("#venices .layer:nth-child(6)>img").animate({"left": "9vw","opacity": "0.2"}, 5000,function(){
     $("#venices .layer:nth-child(6)>img").animate({"left": "7vw","opacity": "1"}, 5000,function(){
       $("#venices .layer:nth-child(6)>img").animate({"left": "9vw","opacity": "0.2"}, 5000);
     });
  });
}

var movement71 = function(){
  $("#venices .layer:nth-child(7)>img").animate({"left": "15vw","opacity": "0.1"},5000,function(){
     $("#venices .layer:nth-child(7)>img").animate({"left": "13vw","opacity": "1"},5000,function(){
        $("#venices .layer:nth-child(7)>img").animate({"left": "15vw","opacity": "0.1"},5000);
    });
  });
}


var movement81 = function(){
  $("#venices .layer:nth-child(8)>img").animate({"left": "42vw","opacity": "0.2"}, 5000,function(){
      $("#venices .layer:nth-child(8)>img").animate({"left": "40vw","opacity": "1"}, 5000,function(){
          $("#venices .layer:nth-child(8)>img").animate({"left": "42vw","opacity": "0.2"}, 5000);
      });
  });
}

var movement91 = function(){
  $("#venices .layer:nth-child(9)>img").animate({"left": "35vw","opacity": "0.1"}, 5000,function(){
      $("#venices .layer:nth-child(9)>img").animate({"left": "33vw","opacity": "1"}, 5000,function(){
          $("#venices .layer:nth-child(9)>img").animate({"left": "35vw","opacity": "0.1"}, 5000);
      });    
  });
}


var movement101 = function(){
  $("#venices .layer:nth-child(10)>img").animate({"left": "33vw","opacity": "0.2"}, 5000,function(){
      $("#venices .layer:nth-child(10)>img").animate({"left": "31vw","opacity": "1"}, 5000,function(){
          $("#venices .layer:nth-child(10)>img").animate({"left": "33vw","opacity": "0.2"}, 5000);
        });
  });
}


var movement111 = function(){
  $("#venices .layer:nth-child(11)>img").animate({"left": "42vw","opacity": "0.1"}, 5000,function(){
      $("#venices .layer:nth-child(11)>img").animate({"left": "40vw","opacity": "1"}, 5000,function(){
         $("#venices .layer:nth-child(11)>img").animate({"left": "42vw","opacity": "0.1"}, 5000);
     });    
  });
}

  $('.vcl').addClass('vcloud');
  $('.vcl2').addClass('vcloud2');
  $('.vnb').addClass('vboat');
 sis[4][0] = setInterval(function()
              {  
                setTimeout(function() { movement41();  }, 200);
                setTimeout(function() { movement51();  }, 120);
                setTimeout(function() { movement61();  }, 280);
                setTimeout(function() { movement71();  }, 200);
                setTimeout(function() { movement81();  }, 280);
                setTimeout(function() { movement91();  }, 380);
                setTimeout(function() { movement101();  }, 320);
                setTimeout(function() { movement111();  }, 320);
              },15050);   

 }   

 function venicedinit()
 {
    $('.vcl').removeClass('vcloud');
    $('.vcl2').removeClass('vcloud2');
    $('.vnb').removeClass('vboat');
    clearInterval(sis[4][0]);
    $('#venices').parallax().parallax('disable');  
 }      

// veniceEND#####################

//EVENTS

var deleteit;
var deg=10,currSw=$('#sb-container>div:last-child').index()+1;
var swatchArr = $('#sb-container>div');
swatchArr.click(function(){
  if($(this).index()==$('#sb-container>div:last-child').index()){
    if(($(this).index()+1)!=currSw){
      closeSwatch();
      currSw=$(this).index()+1;
    }
    else{
      openSwatch(($(this).index()+1));
    }
  }
  else if(($(this).index()+1)==currSw)
  {
    eventget($(this).index());
  }
  else{
    openSwatch(($(this).index()+1));
  }
});
function openSwatch(index){
  var angle=0;
  for(i=1;i<=swatchArr.length;i++){
    if(i<=index)
    {
      angle = deg*(i-index);
    }
    else
    {
      angle = 35 + deg*(i-index);
    }
     $('#sb-container>div:nth-child('+i+')').css({
        '-webkit-transform' : 'rotate('+angle+'deg)',
           '-moz-transform' : 'rotate('+angle+'deg)',  
            '-ms-transform' : 'rotate('+angle+'deg)',  
             '-o-transform' : 'rotate('+angle+'deg)',  
                'transform' : 'rotate('+angle+'deg)',
    });
  }
  currSw=index;
}
function closeSwatch(){
  swatchArr.css({
      '-webkit-transform' : 'rotate(0deg)',
           '-moz-transform' : 'rotate(0deg)',  
            '-ms-transform' : 'rotate(0deg)',  
             '-o-transform' : 'rotate(0deg)',  
                'transform' : 'rotate(0deg)',
    });
}

var eventsdata,selcat;  
    function eventget(catsel_index){
      var catergory_name = ["Art","Dance","Drama","Misc","Music","Online","Oratory","Quizzing"];
      var iconname = ["art","dance","drama","misc","music","online","oratory","quiz"]
      selcat = catergory_name[catsel_index];
      var toattach = "";
      $('#eventlist').html(toattach);
      $('.lightbox').fadeIn(500);
      $('#categorytitle').html(selcat);
      $('#categorytitle').fadeIn(500);
      $('#eventlist').fadeIn(500);
      $('.whirly-loader').css('display','block');
      // $('#black_overlay').fadeIn(500);

      $.ajax({
        method : "GET",
        url : "http://bits-oasis.org/2015/categoryevents/",
        data: {"category": catergory_name[catsel_index]},
        //dataType: "json",
          // contentType: "application/json; charset=utf-8",

        success : function(eventdata) {
            $('.whirly-loader').css('display','none');
            eventsdata = eventdata["Events"];

            for(var i=0;i<eventdata["Events"].length;i++) 
            {
            
              toattach +=   '<div class="eventcontainer" onclick="open_event_det(' + i +')"><div class="eventupper"><img src="./images/icons/'+ iconname[catsel_index] + '.png" class="eventcaticon"/><div class="eventname">'    + eventdata["Events"][i].eventname +'</div> </div><div class="eventlower"><!-- <div class="eventshortdesc"> --> '+ eventdata["Events"][i].eventshortdescription.substr(0,60) +'<!-- </div> -->    </div>  </div>';
            }

            $('#eventlist').html(toattach);
          } 
      });

    };
    
    function btel()
    {
      $("#eventdetail").fadeOut(500);
      $("#eventtitle").fadeOut(500);
      $("#btel_btn").fadeOut(500);
      setTimeout(function(){
        $("#eventlist").fadeIn(500);
        $("#categorytitle").fadeIn(500);
      },500);
    }

    function btcl(){
      $("#eventdetail").fadeOut(500);
      $("#eventtitle").fadeOut(500);
      $("#eventlist").fadeOut(500);
      $("#btel_btn").fadeOut(500);
      $("#categorytitle").fadeOut(500);
      $('.lightbox').fadeOut(500);
      $('#black_overlay').fadeOut(500);
    }

    function open_event_det(eventindex)
    {
      $("#categorytitle").fadeOut(500);     
      $("#eventlist").fadeOut(500);
      //console.log(eventindex);
      setTimeout(function(){
        $("#eventtitle").html(eventsdata[eventindex].eventname);
        $("#eventdetail").html(eventsdata[eventindex].eventcontent);
        $("#eventtitle").fadeIn(500);
        $("#eventdetail").fadeIn(500);
        $("#btel_btn").fadeIn(500);
      },500);
      
    }

    $('#black_overlay').click(function(){
      btcl();
    })

    function eventclose(){
      $('.container').fadeOut(300);
      closeSwatch();
      btcl();
    }

    function eventopen(){
      $('.container').fadeIn(500);
    }


//function for in-scene ajax
  // function eventcall(id)
  // {

  //   var durl="http://bits-oasis.org/2015/events/";
  //   durl +="id/"

  //     $.ajax({
  //       method : "GET",
  //       url : durl,
  //       //dataType: "json",
  //         // contentType: "application/json; charset=utf-8",

  //       success : function(eventdata) {
  //           var toattach = "";
  //           eventsdata = eventdata["Events"];

  //           for(var i=0;i<eventdata["Events"].length;i++) 
  //           {
            
  //             toattach +=   '<div class="eventcontainer" onclick="open_event_det(' + i +')"><div class="eventupper"><img src="./images/icons/'+ iconname[catsel_index] + '.png" class="eventcaticon"/><div class="eventname">'    + eventdata["Events"][i].eventname +'</div> </div><div class="eventlower"><!-- <div class="eventshortdesc"> --> '+ eventdata["Events"][i].eventdescription + eventdata["Events"][i].eventid +'<!-- </div> -->    </div> </div>';
  //           }

  //           $('#eventlist').html(toattach);
  //         } 
  //     });
  // }






//function for moving between pages
var pageid = [$('#landing'),$('#rio'),$('#newyork'),$('#sydney'),$('#venice'),$('#agra')] ;
var par_cur= 0;
function parallax_open(next)
{
  if(par_cur==0)
  {
    stopanim_landing();
  }

  $('#transition').css({'display':'block'});
  divtransit();
  setTimeout(function(){
    pageid[par_cur].css({'display':'none'});
    pageid[next].css({'display':'block'});
    par_cur=next;
  },400);
}



// webcam js complete
var vw = 0;    // We will scale the photo width to this
var vh = 0;     // This will be computed based on the input stream
var streaming = false; //webcam to video on/off
var localStream = null; //webcam stream object
var video = document.getElementById('webvid'); // video object
var canvas = document.getElementById('snap'); // store clicked image for further processing
var ctx = canvas.getContext('2d'); 
var cvs_ovr = document.getElementById('overlay'); // show bobble and make final image here
var ctx_ovr = cvs_ovr.getContext('2d');
var startbutton = document.getElementById('capture_but'); //capture button
var photo = document.getElementById('photo'); // save final image in img object
var img_bob = new Image(); // bobble image
var img = new Image(); //final image
var bob_folder = "./images/bobble/"; //path to images folder
//storing names of images and bobble
var bob_src = [
  ["taj.png","taj_bob.png"],
  ["venice.png","venice_bob.png"],
  ["sydney.png","sydney_bob.png"],
  ["rio.png","rio_bob.png"],
  ["nyc.png","nyc_bob.png"],
];

$('.frames_sel').click(function(){
  change_frame($(this).index());
});
//call webcam
function request_cam(){
  navigator.getMedia = ( navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
  if (navigator.getMedia) {  //check browser support
    // request webcam
    vw = $('#capture_int').width()<640?$('#capture_int').width():640;
    navigator.getMedia({video: true,audio: false},function(stream){
    if(localStream!=null)
      localStream.stop();
          localStream = stream;
          if (navigator.mozGetUserMedia) {
            video.mozSrcObject = stream;
          } 
          else {
            var vendorURL = window.URL || window.webkitURL;
            video.src = vendorURL.createObjectURL(stream);
          }
          video.play();
        },function(err) {
          console.log("An error occured! " + err);
      });
  }
  else{
    console.log('getUserMedia() is not supported in your browser');
  }

  video.addEventListener('canplay', function(ev){
    if (!streaming) {
      vh = video.videoHeight / (video.videoWidth/vw);
      //firefox has problems with getting height so an approx for height in firefox
      if (isNaN(vh)) {
        vh = vw / (4/3);
      }
      video.setAttribute('width', vw);
      video.setAttribute('height', vh);
      canvas.setAttribute('width', vw);
      canvas.setAttribute('height', vh);
      cvs_ovr.setAttribute('width', vw);
      cvs_ovr.setAttribute('height', vh);
      ctx.save();
      ctx.fillStyle= $('#webcam_container').css('background-color');;
      ctx.fillRect(0,0,vw,vh);
      ctx.restore();
      ctx.clearRect((vw/2-img_bob.width/2),(vh/2-img_bob.height/2),img_bob.width,img_bob.height);
      ctx.drawImage(img_bob,(vw/2-img_bob.width/2),(vh/2-img_bob.height/2),img_bob.width,img_bob.height);
      streaming = true;
      controlsInit();
    }
  }, false);
}

startbutton.addEventListener('click', function(ev){
  ev.preventDefault();
  $('#overlay').css('display','block');
  snapshot();
}, false);

function controlsInit(){
  $('#frames_cont').fadeOut();
  $('#capture_int').css('display','block');
  $('#capture_but').css('display','block');
}


function reinitPhoto(){
  if(streaming)
  {
    localStream.stop();
    streaming = false;
  }
  for(i=1;i<=bob_src.length;i++){
    $('.frames_sel:nth-child('+i+')>img').attr('src',(bob_folder + bob_src[i-1][0]));
  }
  $('#rotate').val(0);
  $('#scale').val(100);
  $('#bright').val(0);
  $('#contrast').val(0);
  tx=0;
  ty=0;
  $('#frames_cont').css('display','block');
  $('#capture_int').css('display','none');
  $('.capture_output').css('display','none');

  $('#overlay').css('display','none');

  $('#controls').css('display','none');
}

//change bobble to use
function change_frame(x){
  c_bob = x;
  img.src= bob_folder + bob_src[x][0];
  img_bob.src= bob_folder + bob_src[x][1];
  img_bob.onload = function(){
    if(!streaming)
    {
      request_cam();
    }
    else
    {
      cvs_ovr.setAttribute('width', vw);
      cvs_ovr.setAttribute('height', vh);
      ctx_ovr.drawImage(img_bob,(vw/2-img_bob.width/2),(vh/2-img_bob.height/2),img_bob.width,img_bob.height);
      controlsInit();
    }
  }
}

function snapshot() {
  if (vw && vh) {
    canvas.width = vw;
    canvas.height = vh;
    ctx.drawImage(video, 0, 0, vw, vh);
    draw();
    localStream.stop();
    streaming =false;
    $('#capture_but').css('display','none');
    $('#controls').css('display','block');
  } 
  else {
    alert("some problem occured while capturing.")
  }
}

var rotate=0,scaleIt=1,tx=0,ty=0,b=0,c=0;
var currX,currY,drag=false;
$(cvs_ovr).mousemove(function(e) {
    if(drag)
  {
    tx = currX - e.offsetX;
    ty = currY - e.offsetY;
    draw();
  }
})
$(cvs_ovr).mousedown(function(e) {
  currX = e.offsetX + tx;
  currY = e.offsetY + ty;
    drag = true;
}).mouseup(function() {
    drag = false;
});

$("#controls input").change(function() {
  draw();
});
$('.done_but').click(function(){
  $('#controls').css('display','none');
  merge();
  $('.capture_output').css('display','block');
  $('#capture_int').css('display','none');
});


$('.share_but').click(function(){
  sharefb();
});
function draw(){
  rotate = $('#rotate').val();
  scaleIt = $('#scale').val()/100;
  b = $('#bright').val();
  c = $('#contrast').val();
  ctx_ovr.fillStyle= $('#webcam_container').css('background-color');;
  ctx_ovr.fillRect(0,0,vw,vh);
  ctx_ovr.save();
  ctx_ovr.beginPath();
  ctx_ovr.moveTo((vw/2-img_bob.width/2),(vh/2-img_bob.height/2));
  ctx_ovr.lineTo((vw/2-img_bob.width/2),(vh/2-img_bob.height/2+img_bob.width));
  ctx_ovr.lineTo((vw/2-img_bob.width/2+img_bob.height),(vh/2-img_bob.height/2+img_bob.width));
  ctx_ovr.lineTo((vw/2-img_bob.width/2+img_bob.height),(vh/2-img_bob.height/2));
  ctx_ovr.closePath();
  ctx_ovr.clip();
  ctx_ovr.translate((vw/2-tx),(vh/2-ty));
  ctx_ovr.scale(scaleIt,scaleIt);
  ctx_ovr.rotate(rotate*Math.PI/180);
  ctx_ovr.drawImage(canvas,-vw/2,-vh/2,vw,vh);
  // ctx_ovr.translate(tx,ty);
  brighten();
  contrast();
  ctx_ovr.restore();
  ctx_ovr.drawImage(img_bob,(vw/2-img_bob.width/2),(vh/2-img_bob.height/2),img_bob.width,img_bob.height);
}
function brighten(){
  var imageData = ctx_ovr.getImageData(0,0,vw,vh);
  var data = imageData.data;
  b= parseInt(b);
  if(b>0)
  {
    for (var i = 0; i < data.length; i += 4) {
      data[i] = data[i]+b < 255 ? data[i]+b : 255;
      data[i+1] = data[i+1]+b < 255 ? data[i+1]+b : 255;
      data[i+2] = data[i+2]+b < 255 ? data[i+2]+b : 255;
      } 
  }
  if(b<0)
  {
    for (var i = 0; i < data.length; i += 4) {
      data[i] = data[i]+b > 0 ? data[i]+b : 0;
      data[i+1] = data[i+1]+b > 0 ? data[i+1]+b : 0;
      data[i+2] = data[i+2]+b > 0 ? data[i+2]+b : 0;
      }
  }
  ctx_ovr.putImageData(imageData, 0, 0);
}
function contrast() {
  var imageData = ctx_ovr.getImageData(0,0,vw,vh);
    var data = imageData.data;
    c = parseInt(c);
    var factor = (259 * (c + 255)) / (255 * (259 - c));
    for(var i=0;i<data.length;i+=4)
    {
        data[i] = factor * (data[i] - 128) + 128;
        data[i+1] = factor * (data[i+1] - 128) + 128;
        data[i+2] = factor * (data[i+2] - 128) + 128;
    }
  ctx_ovr.putImageData(imageData, 0, 0);
}

// merge array
var c_bob=0;
var mA = [
// to_left, to_top, c_width, c_height, left, top, width, height
  [0.205, 0.203, 0.388, 0.452, 0.741, 0.6, 0.127, 0.258,],//taj
  [0.086, 0.314, 0.338, 0.341, 0.726, 0.391, 0.084, 0.159,],//venice
  [0.125, 0.148, 0.325, 0.429, 0.845, 0.734, 0.085, 0.182,],//sydney
  [0.183, 0.128, 0.365, 0.426, 0.153, 0.664, 0.120, 0.228,],//rio
  [0.175, 0.190, 0.310, 0.434, 0.836, 0.620, 0.075, 0.186,],//nyc
];
function merge(){
  var bw= img_bob.width,
  bh= img_bob.height,
  img_w = img.width;
  img_h = img.height;
  canvas.width = img_w;
  canvas.height = img_h;
  var cx = parseFloat((vw/2-(bw*mA[c_bob][0]))<0? 0:(vw/2-(bw*mA[c_bob][0])));
  var cy = parseFloat((vh/2-(bh*mA[c_bob][1]))<0?0:(vh/2-(bh*mA[c_bob][1])));

  ctx.drawImage(cvs_ovr,cx,cy,parseFloat(bw*mA[c_bob][2]),parseFloat(bh*mA[c_bob][3]),parseFloat(img_w*mA[c_bob][4]),parseFloat(img_h*mA[c_bob][5]),parseFloat(img_w*mA[c_bob][6]),parseFloat(img_h*mA[c_bob][7]));
  ctx.drawImage(img,0,0,img_w,img_h);
  var data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
    $('#downloadMerge').attr("href", data);
}
document.addEventListener("touchstart", touch2Mouse, true);
document.addEventListener("touchmove", touch2Mouse, true);
document.addEventListener("touchend", touch2Mouse, true);
function touch2Mouse(e)
{
  var theTouch = e.changedTouches[0];
  var mouseEv;

  switch(e.type)
  {
    case "touchstart": mouseEv="mousedown"; break;  
    case "touchend":   mouseEv="mouseup"; break;
    case "touchmove":  mouseEv="mousemove"; break;
    default: return;
  }
  var mouseEvent = document.createEvent("MouseEvent");
  mouseEvent.initMouseEvent(mouseEv, true, true, window, 1, theTouch.screenX, theTouch.screenY, theTouch.clientX, theTouch.clientY, false, false, false, false, 0, null);
  theTouch.target.dispatchEvent(mouseEvent);
}
// photobooth END ###############################################################
// Auto tour notifications
var notify_list = [
  ['Welcome to the city of Rio','Rio is the second largest city in Brazil and the state capital of Rio de Janeiro. The city is best known for its beaches, carnivals, football, music and its well preserved tropical forests. ','Move your mouse around the screen or shake your phone (gyroscope support required in phone) to explore','<b>Wanna snap?</b> Click on photobooth icon to take selfie at Rio'],
  ['Welcome to the city of New York','Move your mouse around the screen or shake your phone (gyroscope support required in phone) to explore','<b>Wanna snap?</b> Click on photobooth icon to take selfie at Newyork'],
  ['Welcome to the city of Sydney ','Book a window seat for your flight to Sydney: day or night, this city sure is good-lookin’. Scratch the surface and the Harbor City only gets better.','Move your mouse around the screen or shake your phone (gyroscope support required in phone) to explore','<b>Wanna snap?</b> Click on photobooth icon to take selfie at Sydney'],
  ['Welcome to the city of Venice ',"Stunning architecture. Mysterious passageways. And of course, the canals. Venice is one of the most alluring cities in the world—the type of place where, as a visitor, you'll welcome getting lost.",'Move your mouse around the screen or shake your phone (gyroscope support required in phone) to explore','<b>Wanna snap?</b> Click on photobooth icon to take selfie at Venice'],
  ['Welcome to the city of Agra ','The magical allure of the Taj Mahal draws tourists to Agra like moths to a wondrous flameThe legacy of the Mughal empire has left a magnificent fort and a liberal sprinkling of fascinating tombs and mausoleums; and there’s also fun to be had in the bustling chowks (marketplaces).','Move your mouse around the screen or shake your phone (gyroscope support required in phone) to explore','<b>Wanna snap?</b> Click on photobooth icon to take selfie at Agra'],
];
var next_notify=0,notify_show=false,notify_interval=false;
function startNotify(){
  next_notify=0;
  var len = parseInt($('#auto_tour_notify').css('height'));
  $('#auto_tour_notify').animate({top:-len+'px'},700);
  setTimeout(function() {
    $('#notify_head').html(notify_list[par_cur-1][next_notify]);
    len = parseInt($('#auto_tour_notify').css('height'));
    $('#auto_tour_notify').css({'top':-len+'px'});
  }, 1000);
  notify_show=false;

  notify_interval = setInterval(function(){
    if(notify_show==false){
      $('#auto_tour_notify').animate({top:'0px'},700);
      notify_show=true;
    }
    else{
      next_notify++;
      if(next_notify==notify_list[par_cur-1].length){
        next_notify=0;
      }
      var len = parseInt($('#auto_tour_notify').css('height'));
      $('#auto_tour_notify').animate({top:-len+'px'},700);
      setTimeout(function() {
        $('#notify_head').html(notify_list[par_cur-1][next_notify]);
        len = parseInt($('#auto_tour_notify').css('height'));
        $('#auto_tour_notify').css({'top':-len+'px'});
      }, 1000);
      notify_show=false;
    }
  },5000);
}
function clearNotify(){
  next_notify=0;
  clearInterval(notify_interval);
}

// ###########



$('.open_scene').click(function(){
  // console.log($(this));
  
  switch($(this).index())
  {
    case 1:
      parallax_open(1);
      setTimeout(function(){rioinit();$("nav").fadeIn(200);},3000);
      break;
    case 2:
      parallax_open(2);
      setTimeout(function(){nycinit();$("nav").fadeIn(200);},3000);
      break;
    case 3:
      parallax_open(3);
      setTimeout(function(){sydneyinit();$("nav").fadeIn(200);},3000);
      break;
    case 4:
      parallax_open(4);
      setTimeout(function(){veniceinit();$("nav").fadeIn(200);},3000);
      break;
    case 5:
      parallax_open(5);
      setTimeout(function(){tajinit();$("nav").fadeIn(200);},3000);
      break;
  }
});

$('.back_home').click(function(){
  $("nav").css({"display":"none"});
  switch(par_cur)
  {
    case 1:
      riodinit();
      break;
    case 2:
      nycdinit();
      break;
    case 3:
      sydneydinit();
      break;
    case 4:
      venicedinit();
      break;
    case 5:
      tajdinit();
      break;
  }
 setTimeout(function(){
  clearInterval(notify_interval);
  parallax_open(0);
 },1000) ;
setTimeout(function(){
  if(auto_curr==0)
  {
    startanim_landing();
  }
  else
  {
    parallax_open(0);
    clearNotify();
    drawlanding();
    auto_curr=0;
    $('#next_but').css('display','none');
    var len = parseInt($('#auto_tour_notify').css('height'));
    $('#auto_tour_notify').animate({top:-len+'px'},700);
  } 
    
  },3000);

});

$('.photo_icon').click(function(){
  $('#photobooth').fadeIn();
  reinitPhoto();
  switch(par_cur)
  {
    case 1:
      riodinit();
      break;
    case 2:
      nycdinit();
      break;
    case 3:
      sydneydinit();
      break;
    case 4:
      venicedinit();
      break;
    case 5:
      tajdinit();
      break;    
  }
});

$('.cross').click(function(){
  $('#photobooth').fadeOut(500);
  reinitPhoto();
    switch(par_cur)
  {
    case 1:
      rioinit();
      break;
    case 2:
      nycinit();
      break;
    case 3:
      sydneyinit();
      break;
    case 4:
      veniceinit();
      break;
    case 5:
      tajinit();
      break;    
  }
});

// // circular nav
$(document).click(function(e) {
  $("nav *, nav").removeClass("focus");
});

function classy(){
  $("nav *, nav").removeClass("focus");
  $("nav:focus").addClass("focus");
  $("nav a:focus").addClass("focus");
  $("nav a:focus").parentsUntil("body").addClass("focus");
}
// // circular nav end


//CONTACTS

var contactinfo =
[
  {"name":"Maheep Tripathi","dept":"Publications & Correspondence","email":"pcr[at]bits-oasis[dot]org","number":"+91-7240105156"},

  {"name":"Aditya","dept":"Registration related query","email":"pcr[at]bits-oasis[dot]org","number":"+91-7240105157"},
  {"name":"Archana","dept":"Registration related query","email":"pcr[at]bits-oasis[dot]org","number":"+91-7240105150"},
  {"name":"Karthik","dept":"Registration related query","email":"pcr[at]bits-oasis[dot]org","number":"+91-9983084070"},
  {"name":"Tanhya","dept":"Registration related query","email":"pcr[at]bits-oasis[dot]org","number":"+91-7240105155"},
  
  {"name":"Siddhant Tuli","dept":"Website and Online registration","email":"webmaster[at]bits-oasis[dot]org","number":"+91-9810885196"},
  {"name":"Aditya Ruia","dept":"Sponsorship & Marketing","email":"sponsorship[at]bits-oasis[dot]org","number":"+91-9619617661"},
  {"name":"Krishna Akhil","dept":"Events & Scheduling","email":"controls[at]bits-oasis[dot]org","number":"+91-8441000746"},
  {"name":"Krishna Chaitanya","dept":"Publicity & Online Partnership","email":"adp[at]bits-oasis[dot]org","number":"+91-9660570469"},
  {"name":"Saketh Boddu","dept":"Hospitality & Accommodation","email":"recnacc[at]bits-oasis[dot]org","number":"+91-9772048822"},
  {"name":"Akshansh Deva","dept":"Department of Stage Controls","email":"stagecontrols[at]bits-oasis[dot]org","number":"+91-8741064850"},
]

function contactopen()
{
    var ct="";
    for(i=0;i<contactinfo.length;++i)
     {
        ct += '<div class="contactbl"><b>'+contactinfo[i].name+'</b><br>'+contactinfo[i].dept+'<br>'+contactinfo[i].email+'<br>'+contactinfo[i].number+'</div>';
     }
    $('.whirly-loader').css('display','none');
    $('#black_overlay').fadeIn(500);
    $('.lightbox').fadeIn(500);
    $('#eventtitle').html("CONTACTS");
    $('#eventdetail').html(ct);
    $('#eventtitle').fadeIn(500);
    $('#eventdetail').fadeIn(500);
}


var archiveinfo =
[
  {"title":"Oasis'14 Main","imgsrc":"./images/archive_img/oasis14m.jpg","link":"http://bits-oasis.org/2014main/"},
  {"title":"Oasis'14 Intro","imgsrc":"./images/archive_img/oasis14i.jpg","link":"http://bits-oasis.org/2014intro/"},
  {"title":"Oasis'13 Main","imgsrc":"./images/archive_img/oasis13m.jpg","link":"http://bits-oasis.org/2013/"},
  {"title":"Oasis'13 Intro","imgsrc":"./images/archive_img/oasis13i.jpg","link":"http://bits-oasis.org/2013intro/"},
];

function archiveopen()
{
    var at="";
    for(i=0;i<archiveinfo.length;++i)
     {
        at += '<a target="_blank" href="'+ archiveinfo[i].link +'"><div class="archivebl"><img src="'+ archiveinfo[i].imgsrc +'"><div>'+archiveinfo[i].title +'</div></div>';
     }
     $('.whirly-loader').css('display','none');
    $('#black_overlay').fadeIn(500);
    $('.lightbox').fadeIn(500);
    $('#eventtitle').html("ARCHIVES");
    $('#eventdetail').html(at);
    $('#eventtitle').fadeIn(500);
    $('#eventdetail').fadeIn(500);
};

var aboutinfo = ["A globetrotter, you say?<br>Imagine a world where the shapes shift as you blink your eyes.<br>Skydiving in the Alps?<br>A Masquerade Ball in the Venice Carnival?<br>Sipping wine by the Seine?<br>Or the Northern Lights?Dreamy-eyed, are we?<br><br>This October,<br>Samba in the Rio Carnival,<br>Romance the Czech Castle City,<br>Party in the Oktoberfest<br>Hike the Inca Trail<br>Lose yourself in the Spring Festival.<br><br>This October, live the dream.<br>Oasis’15, Around the World in 96 Hours.<br>"];

function aboutopen()
{
    $('.whirly-loader').css('display','none');
    $('#black_overlay').fadeIn(500);
    $('.lightbox').fadeIn(500);
    $('#eventtitle').html("ABOUT US");
    $('#eventdetail').html(aboutinfo);
    $('#eventtitle').fadeIn(500);
    $('#eventdetail').fadeIn(500);
};

var notifydata,notifyindex=0,n1,n2,nLink;
    $(document).ready(
        function getnotification(){
              $.ajax({
                    method:"GET",
                    url : "http://bits-oasis.org/2015/notify/",

                    success : function(data) {
                      notifydata=data.Notifications;
                      setInterval(changenotification,5000);
                      changenotification(); 
                    }
                    
              });             
        });
  $(document).ready(function(){
          $("#updatebox").click(function(){
          if (n1==0) {
            openLiteBox(nLink);
            console.log("lightbox");
            $(".lightbox").fadeIn(500);
            $("#black_overlay").fadeIn(500);
          }
          else if (n2==0) {
            // window.location
            window.open(nLink, '_blank');
            console.log("link");
          }
        });}
  );
      
    function changenotification(){
      var obj = notifydata[notifyindex];
      var type = obj.type;
      var str1="internal";
      var str2="external";
      n1 = str1.localeCompare(type);
      n2 = str2.localeCompare(type);
      nLink = obj.link;
      
      
      $("#updatebox").html(obj.content);
      notifyindex = (notifyindex + 1) % notifydata.length;
    }

    function openLiteBox(nLink) {
      // ajax url = nLink
      // success : function(data) {==> .html(data.eventcontent)
        $.ajax({
                    method:"GET",
                    url : nLink,

                    success : function(data) {
                      $("#eventtitle").html(data.eventname);
                      $("#eventdetail").html(data.eventcontent); 
                      $("eventtitle").fadeIn(500);                      
                      $(".eventheader").fadeIn(500);
                      $("#eventtitle").fadeIn(500);
                      $("#eventdetail").fadeIn(500);
                    }

              });
    }



function sharefb(){
  var my_glob = toBlob(canvas.toDataURL('image/jpg'));
  var file_name = makeid() + ".jpg";

var client = new XMLHttpRequest();
var formData = new FormData();
 formData.append("image",my_glob,file_name);
 client.onreadystatechange=function()
 {
 if (client.readyState==4 && client.status==200)
   {
     console.log(client.responseText);
    var dataimg = JSON.parse(client.responseText);
    fb_share(dataimg.data.link);
    console.log(dataimg);
   }
 }
 client.open("POST","https://api.imgur.com/3/image",true);
 client.setRequestHeader('Authorization','Client-ID 9f6accbddd50b47');
 client.send(formData);
}

function  fb_share(iurl)
{
FB.ui({
  method: 'feed',
  picture: iurl ,
  link: 'http://bits-oasis.org/',
  caption: 'Got Snapped!',
  description: 'Visit bits-oasis.org to get yours now.',
}, function(response){});

};

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '570243296401349',
      xfbml      : true,
      version    : 'v2.4'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

function toBlob(x){
  var base64str = x.slice(22);
  var binary = atob(base64str.replace(/\s/g,''));
  var len = binary.length;
  var buffer = new ArrayBuffer(len);
  var view = new Uint8Array(buffer);
  for(var i=0;i<len;i++){
    view[i] = binary.charCodeAt(i);
  }
  var blob = new Blob( [view],{type:"image/png"});
  return blob;
}

function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for( var i=0; i < 10; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

$('.events_poster').click(function(){
  get_event_details($(this).attr("data-eventId"));
});
function get_event_details(id){
  $('.whirly-loader').css('display','block');
  $('.lightbox').fadeIn();
  $('#black_overlay').fadeIn();
  $.ajax({
    method : "GET",
    url : "http://bits-oasis.org/2015/events/"+id,
    success : function(data) {
      $('.whirly-loader').css('display','none');
      $("#eventtitle").html(data.eventname);
      $("#eventdetail").html(data.eventcontent);
      $("#eventtitle").fadeIn();
      $("#eventdetail").fadeIn();
    }
  });
}

$('.notif_icon,#updatetop').click(function(){
  get_notif();
});
function get_notif(){
  $('.whirly-loader').css('display','block');
  $('.lightbox').fadeIn();
  $('#black_overlay').fadeIn();
  $.ajax({
    method : "GET",
    url : "http://bits-oasis.org/2015/notify",
    success : function(data) {
      $('.whirly-loader').css('display','none');
      var notif = data["Notifications"]
      $("#eventtitle").html("Notifications");
      $("#eventdetail").html('');
      for(i in notif)
      {
        if(notif[i]["type"]=="static")
          $("#eventdetail").append(notif[i]["content"]);
        else if(notif[i]["type"]=="internal")
          $("#eventdetail").append('<div class="events_poster" data-eventId="'+notif[i]["link"].split("/")[5]+'">'+notif[i]["content"]+'</div>');
        else if(notif[i]["type"]=="external")
          $("#eventdetail").append('<a href="'+notif[i]["link"]+'">'+notif[i]["content"]+'</a>');
      }
      $("#eventtitle").fadeIn();
      $("#eventdetail").fadeIn();
    }
  });
}
$('.instr_icon').click(function(){
  getGameInstr();
});
function getGameInstr(){
  $('.whirly-loader').css('display','none');
  $('.lightbox').fadeIn();
  $('#black_overlay').fadeIn();
  $("#eventtitle").html("Game Instructions");
  $("#eventdetail").html('<p>In each city click on the monument to open the question.</p><p>Answer the questions to collect points</p><p>Collect 100 points to win a coupon.</p><a href="http://bits-oasis.org/cleartrip" target="_blank"><p><span style="color:#f00;"><b>Click Here</b></span> to know the terms and conditions to use cleartrip coupon.</a>');
  $("#eventtitle").fadeIn();
  $("#eventdetail").fadeIn();
}
// gamezone
var gotCoupon =false;
var score=[0,0,0,0,0,0];
var my_ans=[" "," "," "," "," "," "];
var qa = 0;
var questions=[
            "Tina Turner, Paul McCartney and KISS, have all played their biggest shows (in terms of attendance) at this venue in Rio de Janeiro. What venue, more popularly known for hosting football matches?",
            "On 29 Sep 2014, at which iconic location did Narendra Modi give his famous speech in front of thousands of American Indians, talking of removing visa restrictions and ‘Make In India’, creating a historic event before meeting Barack Obama?",
            "The rebuilding efforts began in May 2006, with a promise “to make the skyline whole again”, after the attacks five years earlier. The 541-metre tall rebuilt structure was opened in November 2014. What are we talking about?",
            "Which famous beach, located in Sydney, gets its name from the Aboriginal word for water breaking over rocks or the noise of water breaking over rocks?",
            "“Shaped like a banana, weighing slightly more on the left side, using eight different kinds of wood for its components, these structures also have a heavy metal ornament on one end to balance the weight of the human on the other.” What iconic structures?",
            "The oldest Mughal garden in India, it was built by the Emperor Bābar in 1528 on the bankof the Yamuna. It lies about 2.34 km (1 mi) north of the Tāj Mahal. The pavilions in this garden are designed so that the wind from the Yamuna, combined with the greenery, keeps them cool even during the peak of summer. Babur was temporarily buried there before being interred in Kabul. It is also variously known as Baghi Nur Afshan.",
         ]
var answerkey=[
                "00a49334214cd6b5697ebffcc0cb5270",
                "380a9d979fe83c35217860ab812ce57d",
                "f8ee6dfa8c3c652721d09712b3fba392",
                "bd492459f4925391eafbed345b929a9d",
                "cafd30348a1b817543f089d671eb264a",
                "50c64a9219ea7a1a3aa09e8b227d6187",
              ];           
function answercompare(ans)
{
    ans = ans.toLowerCase().replace(/ /g,'');
    if(calcMD5(ans+'oasis')===answerkey[qa])
        {
            score[qa] = 20;
            $('#ans_note').html('You answer was correct').css('color','green');
            my_ans[qa] = ans;
            check_score();
        }
      else{
        $('#ans_note').html("Your answer was incorrect try again!!").css('color','red');
      }
}

function openQues(x){
  qa = x;
  $('.whirly-loader').css('display','none');
  $('.lightbox').fadeIn();
  $('#black_overlay').fadeIn();
  $('#eventtitle').html('Question ' + (x+1));
  $('#eventtitle').fadeIn();
  var add_this = '<div id="ques_cont">'+questions[x]+'<br><div id="ans_cont"><input id="my_ans" type="text" required autocomplete="off" /><button type="submit" class="button" onclick="send_my_ans()">Submit</button><p id="ans_note" style="text-align:center;"></p></div>';
  $('#eventdetail').html(add_this);
  $('#eventdetail').fadeIn();
}

function check_score(){
  var total =0;
  for(var i=0;i<score.length;i++)
  {
    total += score[i];
  }
  $('#game_score span').text(total);
  if(total>=100 && !gotCoupon)
  {
    $('#eventdetail').fadeOut(100);
    setTimeout(function() {
      var add_this = '<div id="ques_cont">Please enter  your email to get your free coupon!!<br><div id="ans_cont"><input id="my_ans" type="text" required autocomplete="off" /><button type="submit" class="button" onclick="send_request()">Submit</button><p id="ans_note" style="text-align:center;"></p></div>';
      $('#eventdetail').html(add_this);
      $('#eventtitle').html("");
      $('#eventdetail').fadeIn();
    }, 150);
  }
}
function send_my_ans(){
  if(score[qa]==0)
    answercompare($('#my_ans').val());
  else
    $('#ans_note').html("You already answered this question.").css('color','green');
};
function send_request(){
  var email = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  if(!email.test($('#my_ans').val()))
  {
    $('#ans_note').html('Enter a valid email!').css('color','red');
    return;
  }
  arrStr = "";
  for(i=0;i<my_ans.length;i++)
  {
    arrStr += my_ans[i] + ",";
  }
  var dataSend = {
    email:$('#my_ans').val(),
    answer:arrStr,
  }
  $.ajax({
    method: 'GET',
    url: 'http://bits-oasis.org/2015/tickets/',
    data: dataSend,
    success: function(data){
      $('#eventdetail').html(data);
      gotCoupon =true;
    }
  });
}