#pragma strict

var spawnLeft : Transform;
var spawnRight : Transform;

var llamaLeft : GameObject;
var llamaRight: GameObject;

var canSpawnRight: boolean;
var canSpawnLeft: boolean;

var spawnTimeX : int;
var spawnTimeY : int;

function Start () {
canSpawnRight = true;
canSpawnLeft = true;
spawnTimeX = 2;
spawnTimeY = 10;
}

function Update () {

if(canSpawnRight == true)
spawnEnemyRight();

if(canSpawnLeft == true)
spawnEnemyLeft();

}


function spawnEnemyLeft(){

canSpawnLeft = false;
Instantiate(llamaLeft, spawnRight.position, Quaternion.Euler(new Vector2(0,0)));

yield WaitForSeconds(Random.Range(spawnTimeX,spawnTimeY));
canSpawnLeft = true;
}


function spawnEnemyRight(){

canSpawnRight = false;
Instantiate(llamaRight, spawnLeft.position, Quaternion.Euler(new Vector2(0,0)));

yield WaitForSeconds(Random.Range(spawnTimeX,spawnTimeY));
canSpawnRight = true;
}