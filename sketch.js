var ball;
var database, position;

function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(500,500);
    ball = createSprite(250, 250, 10, 10);
    ball.shapeColor = "red";
    var ball_position = database.ref('Ball/Position')
    ball_position.on('value', read_Position)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        storage(-1,0);
    }

    else if(keyDown(RIGHT_ARROW)){
        storage(1,0);
    }

    else if(keyDown(UP_ARROW)){
        storage(0,-1);
    }

    else if(keyDown(DOWN_ARROW)){
        storage(0,+1);
    }

    drawSprites();
}


function read_Position(data)
{
    position = data.val()
    console.log(position.x, position.y)
    ball.x = position.x;
    ball.y = position.y;
}

function storage(x, y)
{
    database.ref('Ball/Position').set(
        {
            'x' : position.x + x, 'y' : position.y + y
        }
    )
}
