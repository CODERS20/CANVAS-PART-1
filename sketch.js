var array = [];
var database;
var positionCount = 0;
var pos;
//var positionCount2 = 0;

function setup(){

var canvas = createCanvas(1200,400);
     database = firebase.database();
     //var pos_ref = database.ref('position')

}



function draw(){
    background("pink");
    show();

   
}

function mouseDragged(){

var position = [mouseX,mouseY];
positionCount = positionCount+1;
var position_index = "Canvas/position" + positionCount;
var POS_ref = database.ref(position_index)
POS_ref.set({
    x: position[0],
    y: position[1]
})
//array.push(position);
}

function mouseReleased(){

  for(var i = 1; i <= positionCount; i = i+1){
    var database_index = "Canvas/position" + i;
    var DB_ref = database.ref(database_index);
    DB_ref.on("value",function(data){
    
   pos = data.val();
   array.push([pos.X,pos.Y]);
   console.log(array)
    })

  }

}



function show(){

    for(var i = 0; i < array.length; i = i + 1){

        strokeWeight(2);
        stroke("blue");
      if(i === array.length-1){  
          line(array[i][0],array[i][1],array[i][0],array[i][1]);
      }

      else {
        line(array[i][0],array[i][1],array[i+1][0],array[i+1][1]);   
      }
    }

}
