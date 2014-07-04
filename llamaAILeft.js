#pragma strict

var target : Transform; //the enemy's target
var moveSpeed = .03; //move speed

 
var myTransform : Transform; //current transform data of this enemy
 
var spit : Rigidbody2D; 
var spitInstance : Rigidbody2D; 
 
 var canSpit : boolean;
 
 var spitPos : GameObject;
 
function Awake()
{
    myTransform = transform; //cache transform data for easy access/preformance
    canSpit = true;
}
 
function Start()
{
     target = GameObject.FindWithTag("Player").transform; //target the player
 
}
 
function Update () {
    
    //move towards the player
    myTransform.position.x +=  moveSpeed;
    
    if(canSpit == true)
    spitting();
 
 
}

function spitting(){

		canSpit = false;
		spitInstance = Instantiate(spit, spitPos.transform.position, Quaternion.Euler(new Vector3(0,0,0))) as Rigidbody2D;
		spitInstance.velocity = new Vector2(10, 0);
		
		yield WaitForSeconds(2);
		canSpit = true;

}
function OnTriggerEnter2D (col : Collider2D){

if(col.gameObject.tag == "playerSpit")
Destroy(this.gameObject);

}