// This is a JavaScript file

angular.module('app', [])
.controller('testCtrl', function($scope) {

    this.hiduke = new Date();
    this.year = this.hiduke.getFullYear();
    this.month = this.hiduke.getMonth()+1;
    this.day = this.hiduke.getDate();
    this.ed = 0;
    this.ppp = 0;
    if(localStorage.getItem("store") == null){
        localStorage.setItem("store", "[]");
    }
    
    this.scores = [
        {"kind":"tati", "order":"1st", "date":"2016.02.27", "Shot1st":"11", "Shot2nd":"12", "Shot3rd":"12", "Shot4th":"12", "Place1st":"1", "Place2nd":"4", "Place3rd":"6", "Place4th":"2", "memo":"test"},
        {"kind":"tati", "order":"1st", "date":"2016.02.27", "Shot1st":"11", "Shot2nd":"12", "Shot3rd":"12", "Shot4th":"12", "Place1st":"1", "Place2nd":"4", "Place3rd":"6", "Place4th":"2", "memo":"test"},
        {"kind":"tati", "order":"1st", "date":"2016.02.27", "Shot1st":"11", "Shot2nd":"12", "Shot3rd":"12", "Shot4th":"12", "Place1st":"1", "Place2nd":"4", "Place3rd":"6", "Place4th":"2", "memo":"test"},
        {"kind":"tati", "order":"1st", "date":"2016.02.27", "Shot1st":"11", "Shot2nd":"12", "Shot3rd":"12", "Shot4th":"12", "Place1st":"1", "Place2nd":"4", "Place3rd":"6", "Place4th":"2", "memo":"test"},
        {"kind":"tati", "order":"1st", "date":"2016.02.27", "Shot1st":"11", "Shot2nd":"12", "Shot3rd":"12", "Shot4th":"12", "Place1st":"1", "Place2nd":"4", "Place3rd":"6", "Place4th":"2", "memo":"test"}
        ];
        this.scores = JSON.parse(localStorage.getItem("store"))
        
    this.dateInit = function(){
        $scope.newDate=this.year+"."+this.month+"."+this.day;
    }
    this.addNewScore = function(){
        if(this.ed == 0){
            this.scores.unshift({"kind":$scope.newStyle, "order":$scope.newOrder, "date":$scope.newDate, "Shot1st":numHit%3+10, "Shot2nd":numHit2%3+10, "Shot3rd":numHit3%3+10, "Shot4th":numHit4%3+10, "Place1st":numPlace%9, "Place2nd":numPlace2%9, "Place3rd":numPlace3%9, "Place4th":numPlace4%9, "memo":$scope.newMemo});
        $scope.newStyle = '';
        $scope.newOrder = '';
        $scope.newDate = '';
        $scope.newMemo = '';
        $("#1Hit").attr({src:"wnone.png"});
        $("#2Hit").attr({src:"wnone.png"});
        $("#3Hit").attr({src:"wnone.png"});
        $("#4Hit").attr({src:"wnone.png"});
        $("#1Place").attr({src:"wnone2.png"});
        $("#2Place").attr({src:"wnone2.png"});
        $("#3Place").attr({src:"wnone2.png"});
        $("#4Place").attr({src:"wnone2.png"});
        numHit = 0;
        numHit2 = 0;
        numHit3 = 0;
        numHit4 = 0;
        numPlace = 0;
        numPlace2 = 0;
        numPlace3 = 0;
        numPlace4 = 0;
        localStorage.setItem("store", JSON.stringify(this.scores));
            this.rateReflesh();
        $("#form").animate({
        top: 1920 
        }, 500 );
    setTimeout( function(){
    $("#form").css('display', 'none');
       },500);
        }else if(this.ed == 1){
            this.scores.splice(this.ppp,1);
           this.scores.splice(this.ppp,0,{"kind":$scope.newStyle, "order":$scope.newOrder, "date":$scope.newDate, "Shot1st":numHit%3+10, "Shot2nd":numHit2%3+10, "Shot3rd":numHit3%3+10, "Shot4th":numHit4%3+10, "Place1st":numPlace%9, "Place2nd":numPlace2%9, "Place3rd":numPlace3%9, "Place4th":numPlace4%9, "memo":$scope.newMemo});
        $scope.newStyle = '';
        $scope.newOrder = '';
        $scope.newDate = '';
        $scope.newMemo = '';
        $("#1Hit").attr({src:"wnone.png"});
        $("#2Hit").attr({src:"wnone.png"});
        $("#3Hit").attr({src:"wnone.png"});
        $("#4Hit").attr({src:"wnone.png"});
        $("#1Place").attr({src:"wnone2.png"});
        $("#2Place").attr({src:"wnone2.png"});
        $("#3Place").attr({src:"wnone2.png"});
        $("#4Place").attr({src:"wnone2.png"});
        numHit = 0;
        numHit2 = 0;
        numHit3 = 0;
        numHit4 = 0;
        numPlace = 0;
        numPlace2 = 0;
        numPlace3 = 0;
        numPlace4 = 0;
            this.ppp = 0;
            this.pp = 0;
            this.ed = 0;
        localStorage.setItem("store", JSON.stringify(this.scores));
       
            this.rateReflesh();
        $("#form").animate({
        top: 1920 
        }, 500 );
    setTimeout( function(){
    $("#form").css('display', 'none');
       },500); 
        }
        
    }
    
   

this.rateReflesh = function(){
    this.hitPoint = 0;
    this.shotPoint = 0;
    if(this.state == "Today"){
        for (var i = 0, len = this.scores.length; i < len; i++) {
    if(this.scores[i].Shot1st == 11 && this.scores[i].date == this.year+"."+this.month+"."+this.day){
        this.hitPoint ++;
        this.shotPoint ++;
    } else if(this.scores[i].Shot1st == 12 && this.scores[i].date == this.year+"."+this.month+"."+this.day){
        this.shotPoint ++;
    }
    if(this.scores[i].Shot2nd == 11 && this.scores[i].date == this.year+"."+this.month+"."+this.day){
        this.hitPoint ++;
        this.shotPoint ++;
    } else if(this.scores[i].Shot2nd == 12 && this.scores[i].date == this.year+"."+this.month+"."+this.day){
        this.shotPoint ++;
    }
    if(this.scores[i].Shot3rd == 11 && this.scores[i].date == this.year+"."+this.month+"."+this.day){
        this.hitPoint ++;
        this.shotPoint ++;
    } else if(this.scores[i].Shot3rd == 12 && this.scores[i].date == this.year+"."+this.month+"."+this.day){
        this.shotPoint ++;
    }
    if(this.scores[i].Shot4th == 11 && this.scores[i].date == this.year+"."+this.month+"."+this.day){
        this.hitPoint ++;
        this.shotPoint ++;
    } else if(this.scores[i].Shot4th == 12 && this.scores[i].date == this.year+"."+this.month+"."+this.day){
        this.shotPoint ++;
    }
}
    } else if(this.state == "Tachi"){
        for (var i = 0, len = this.scores.length; i < len; i++) {
    if(this.scores[i].Shot1st == 11 && this.scores[i].kind == "tati"){
        this.hitPoint ++;
        this.shotPoint ++;
    } else if(this.scores[i].Shot1st == 12 && this.scores[i].kind == "tati"){
        this.shotPoint ++;
    }
    if(this.scores[i].Shot2nd == 11 && this.scores[i].kind == "tati"){
        this.hitPoint ++;
        this.shotPoint ++;
    } else if(this.scores[i].Shot2nd == 12 && this.scores[i].kind == "tati"){
        this.shotPoint ++;
    }
    if(this.scores[i].Shot3rd == 11 && this.scores[i].kind == "tati"){
        this.hitPoint ++;
        this.shotPoint ++;
    } else if(this.scores[i].Shot3rd == 12 && this.scores[i].kind == "tati"){
        this.shotPoint ++;
    }
    if(this.scores[i].Shot4th == 11 && this.scores[i].kind == "tati"){
        this.hitPoint ++;
        this.shotPoint ++;
    } else if(this.scores[i].Shot4th == 12 && this.scores[i].kind == "tati"){
        this.shotPoint ++;
    }
}
    } else if(this.state == "Practice"){
        for (var i = 0, len = this.scores.length; i < len; i++) {
    if(this.scores[i].Shot1st == 11 && this.scores[i].kind == "rensyu"){
        this.hitPoint ++;
        this.shotPoint ++;
    } else if(this.scores[i].Shot1st == 12 && this.scores[i].kind == "rensyu"){
        this.shotPoint ++;
    }
    if(this.scores[i].Shot2nd == 11 && this.scores[i].kind == "rensyu"){
        this.hitPoint ++;
        this.shotPoint ++;
    } else if(this.scores[i].Shot2nd == 12 && this.scores[i].kind == "rensyu"){
        this.shotPoint ++;
    }
    if(this.scores[i].Shot3rd == 11 && this.scores[i].kind == "rensyu"){
        this.hitPoint ++;
        this.shotPoint ++;
    } else if(this.scores[i].Shot3rd == 12 && this.scores[i].kind == "rensyu"){
        this.shotPoint ++;
    }
    if(this.scores[i].Shot4th == 11 && this.scores[i].kind == "rensyu"){
        this.hitPoint ++;
        this.shotPoint ++;
    } else if(this.scores[i].Shot4th == 12 && this.scores[i].kind == "rensyu"){
        this.shotPoint ++;
    }
}
    } else {
        for (var i = 0, len = this.scores.length; i < len; i++) {
    if(this.scores[i].Shot1st == 11){
        this.hitPoint ++;
        this.shotPoint ++;
    } else if(this.scores[i].Shot1st == 12){
        this.shotPoint ++;
    }
    if(this.scores[i].Shot2nd == 11){
        this.hitPoint ++;
        this.shotPoint ++;
    } else if(this.scores[i].Shot2nd == 12){
        this.shotPoint ++;
    }
    if(this.scores[i].Shot3rd == 11){
        this.hitPoint ++;
        this.shotPoint ++;
    } else if(this.scores[i].Shot3rd == 12){
        this.shotPoint ++;
    }
    if(this.scores[i].Shot4th == 11){
        this.hitPoint ++;
        this.shotPoint ++;
    } else if(this.scores[i].Shot4th == 12){
        this.shotPoint ++;
    }
}
    }
    this.ratio = Math.round(this.hitPoint / this.shotPoint * 10000) / 100;
    localStorage.setItem("store", JSON.stringify(this.scores));
    }
this.rateReflesh();

this.state = "Today";
    
    this.todaySort = function(){
        this.state = "Today";
    }
    this.tachiSort = function(){
        this.state = "Tachi";
    }
    this.practiceSort = function(){
        this.state = "Practice";
    }
    this.allSort = function(){
        this.state = "All";
    }
    
    this.sort = function(e){
        if(this.state == "Today"){
            if(e.date == this.year+"."+this.month+"."+this.day){
                return true;
            }
        } else if(this.state == "Tachi"){
            if(e.kind == "tati"){
                return true;
            }
        } else if(this.state == "Practice"){
            if(e.kind == "rensyu"){
                return true;
            }
        } else{
            return true;
        }
    }
    this.del = function(f){
        if(window.confirm('本当に削除しますか？')){
            this.scores.splice(f,1)
        } else{
            
        }
    }
    this.edit = function(o,n){
        this.ed = 1;
        this.ppp = n;
        $scope.newStyle = o.kind;
        $scope.newOrder = o.order;
        $scope.newDate = o.date;
        $scope.newMemo = o.memo;
        numHit = o.Shot1st+1;
        numHit2 = o.Shot2nd+1;
        numHit3 = o.Shot3rd+1;
        numHit4 = o.Shot4th+1;
        numPlace = o.Place1st-1;
        numPlace2 = o.Place2nd-1;
        numPlace3 = o.Place3rd-1;
        numPlace4 = o.Place4th-1;
        changeHit();
        changeHit2();
        changeHit3();
        changeHit4();
        changePlace()
        changePlace2()
        changePlace3()
        changePlace4()
        
        $("#form").css('display', 'block');
    $("#form").animate({
        top: 0 
        }, 300 );
    }
    this.batu = function(){
        $scope.newStyle = '';
        $scope.newOrder = '';
        $scope.newDate = '';
        $scope.newMemo = '';
        $("#1Hit").attr({src:"wnone.png"});
        $("#2Hit").attr({src:"wnone.png"});
        $("#3Hit").attr({src:"wnone.png"});
        $("#4Hit").attr({src:"wnone.png"});
        $("#1Place").attr({src:"wnone2.png"});
        $("#2Place").attr({src:"wnone2.png"});
        $("#3Place").attr({src:"wnone2.png"});
        $("#4Place").attr({src:"wnone2.png"});
        numHit = 0;
        numHit2 = 0;
        numHit3 = 0;
        numHit4 = 0;
        numPlace = 0;
        numPlace2 = 0;
        numPlace3 = 0;
        numPlace4 = 0;
            this.ppp = 0;
            this.pp = 0;
            this.ed = 0;
    }
})

window.addEventListener("load", function() {
    setTimeout(function() {
        scrollTo(0, 1);
    }, 100);
}, false);

var numHit = 0;
var numHit2 = 0;
var numHit3 = 0;
var numHit4 = 0;

function changeHit(){
    if(numHit%3 == 0){
        $("#1Hit").attr({src:"wmaru.png"});
    } else if(numHit%3 == 1){
        $("#1Hit").attr({src:"wbatu.png"});
    } else{
        $("#1Hit").attr({src:"wnone.png"});
    }
    numHit ++;
}

function changeHit2(){
    if(numHit2%3 == 0){
        $("#2Hit").attr({src:"wmaru.png"});
    } else if(numHit2%3 == 1){
        $("#2Hit").attr({src:"wbatu.png"});
    } else{
        $("#2Hit").attr({src:"wnone.png"});
    }
    numHit2 ++;
}

function changeHit3(){
    if(numHit3%3 == 0){
        $("#3Hit").attr({src:"wmaru.png"});
    } else if(numHit3%3 == 1){
        $("#3Hit").attr({src:"wbatu.png"});
    } else{
        $("#3Hit").attr({src:"wnone.png"});
    }
    numHit3 ++;
}

function changeHit4(){
    if(numHit4%3 == 0){
        $("#4Hit").attr({src:"wmaru.png"});
    } else if(numHit4%3 == 1){
        $("#4Hit").attr({src:"wbatu.png"});
    } else{
        $("#4Hit").attr({src:"wnone.png"});
    }
    numHit4 ++;
}

var numPlace = 0;
var numPlace2 = 0;
var numPlace3 = 0;
var numPlace4 = 0;

function changePlace(){
    if(numPlace%9 == 0){
        $("#1Place").attr({src:"wup.png"});
    } else if(numPlace%9 == 1){
        $("#1Place").attr({src:"wupright.png"});
    } else if(numPlace%9 == 2){
        $("#1Place").attr({src:"wright.png"});
    } else if(numPlace%9 == 3){
        $("#1Place").attr({src:"wdownright.png"});
    } else if(numPlace%9 == 4){
        $("#1Place").attr({src:"wdown.png"});
    } else if(numPlace%9 == 5){
        $("#1Place").attr({src:"wdownleft.png"});
    } else if(numPlace%9 == 6){
        $("#1Place").attr({src:"wleft.png"});
    } else if(numPlace%9 == 7){
        $("#1Place").attr({src:"wupleft.png"});
    } else if(numPlace%9 == 8){
        $("#1Place").attr({src:"wnone2.png"});
    }
    numPlace ++;
}

function changePlace2(){
    if(numPlace2%9 == 0){
        $("#2Place").attr({src:"wup.png"});
    } else if(numPlace2%9 == 1){
        $("#2Place").attr({src:"wupright.png"});
    } else if(numPlace2%9 == 2){
        $("#2Place").attr({src:"wright.png"});
    } else if(numPlace2%9 == 3){
        $("#2Place").attr({src:"wdownright.png"});
    } else if(numPlace2%9 == 4){
        $("#2Place").attr({src:"wdown.png"});
    } else if(numPlace2%9 == 5){
        $("#2Place").attr({src:"wdownleft.png"});
    } else if(numPlace2%9 == 6){
        $("#2Place").attr({src:"wleft.png"});
    } else if(numPlace2%9 == 7){
        $("#2Place").attr({src:"wupleft.png"});
    } else if(numPlace2%9 == 8){
        $("#2Place").attr({src:"wnone2.png"});
    }
    numPlace2 ++;
}

function changePlace3(){
    if(numPlace3%9 == 0){
        $("#3Place").attr({src:"wup.png"});
    } else if(numPlace3%9 == 1){
        $("#3Place").attr({src:"wupright.png"});
    } else if(numPlace3%9 == 2){
        $("#3Place").attr({src:"wright.png"});
    } else if(numPlace3%9 == 3){
        $("#3Place").attr({src:"wdownright.png"});
    } else if(numPlace3%9 == 4){
        $("#3Place").attr({src:"wdown.png"});
    } else if(numPlace3%9 == 5){
        $("#3Place").attr({src:"wdownleft.png"});
    } else if(numPlace3%9 == 6){
        $("#3Place").attr({src:"wleft.png"});
    } else if(numPlace3%9 == 7){
        $("#3Place").attr({src:"wupleft.png"});
    } else if(numPlace3%9 == 8){
        $("#3Place").attr({src:"wnone2.png"});
    }
    numPlace3 ++;
}

function changePlace4(){
    if(numPlace4%9 == 0){
        $("#4Place").attr({src:"wup.png"});
    } else if(numPlace4%9 == 1){
        $("#4Place").attr({src:"wupright.png"});
    } else if(numPlace4%9 == 2){
        $("#4Place").attr({src:"wright.png"});
    } else if(numPlace4%9 == 3){
        $("#4Place").attr({src:"wdownright.png"});
    } else if(numPlace4%9 == 4){
        $("#4Place").attr({src:"wdown.png"});
    } else if(numPlace4%9 == 5){
        $("#4Place").attr({src:"wdownleft.png"});
    } else if(numPlace4%9 == 6){
        $("#4Place").attr({src:"wleft.png"});
    } else if(numPlace4%9 == 7){
        $("#4Place").attr({src:"wupleft.png"});
    } else if(numPlace4%9 == 8){
        $("#4Place").attr({src:"wnone2.png"});
    }
    numPlace4 ++;
}

function openForm(){
    $("#form").css('display', 'block');
    $("#form").animate({
        top: 0 
        }, 300 );
}

var menu = 0;

function openMenu(){
    if(menu % 2 == 0){
        $("#today").animate({
    top:"-=3em"
}, 100);
    $("#tachi").delay(50).animate({
    top:"-=1.5em",
    right:"+=3em"
}, 100);
    $("#practice").delay(100).animate({
    top:"+=1.5em",
    right:"+=3em"
}, 100);
    $("#all").delay(150).animate({
    top:"+=3em"
}, 100);
        menu += 1;
    } else{
        $("#today").animate({
    top:"+=3em"
}, 100);
    $("#tachi").delay(50).animate({
    top:"+=1.5em",
    right:"-=3em"
}, 100);
    $("#practice").delay(100).animate({
    top:"-=1.5em",
    right:"-=3em"
}, 100);
    $("#all").delay(150).animate({
    top:"-=3em"
}, 100);
        menu += 1;
    }
}

function closeForm(){
    $("#form").animate({
        top: 1920 
        }, 500 );
    setTimeout( function(){
    $("#form").css('display', 'none');
       },500);
}

function highlight(){
    $("#styleLine").css('opacity', '1');
}

function lowlight(){
    $("#styleLine").css('opacity', '0.5');
}

function highlight2(){
    $("#styleLine2").css('opacity', '1');
}

function lowlight2(){
    $("#styleLine2").css('opacity', '0.5');
}

function highlight3(){
    $("#styleLine3").css('opacity', '1');
}

function lowlight3(){
    $("#styleLine3").css('opacity', '0.5');
}

function highlight4(){
    $("#styleLine4").css('opacity', '1');
    $("#form").animate({
        top: -250
        }, 300 );
}

function lowlight4(){
    $("#styleLine4").css('opacity', '0.5');
    $("#form").animate({
        top: 0 
        }, 300 );
}

