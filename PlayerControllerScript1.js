#pragma strict

public var maxSpeed: float;

var move : float;
var theScale : Vector3;
//var anim : Animator;
var facingRight : boolean;


var speed : float = 75f;

var spit : Rigidbody2D; 
var spitInstance : Rigidbody2D;

var spitPos : GameObject;

function Start () {

	
	facingRight = true;
	//anim = GetComponent(Animator);
	
}


function FixedUpdate () {
	
	
	move = Input.GetAxis ("Horizontal");
	
	
	rigidbody2D.velocity = new Vector2(move * maxSpeed, rigidbody2D.velocity.y);
	
	if(move > 0 && !facingRight)
		Flip ();
	else if (move < 0 && facingRight)
		Flip ();
	
}


function Update(){
if(Input.GetMouseButtonDown(0) && facingRight == true){
		
		spitInstance = Instantiate(spit, spitPos.transform.position, Quaternion.Euler(new Vector3(0,0,0))) as Rigidbody2D;
		spitInstance.velocity = new Vector2(10, 0);
	
	}
	
	if(Input.GetMouseButtonDown(0) && facingRight != true){
	
		spitInstance = Instantiate(spit, spitPos.transform.position, Quaternion.Euler(new Vector3(0,0,0))) as Rigidbody2D;
		spitInstance.velocity = new Vector2(-10, 0);
	}

}

function Flip  () { 
facingRight = !facingRight;

theScale = transform.localScale;
theScale.x *= -1;
transform.localScale = theScale;

}
 
 function OnTriggerEnter2D (col: Collider2D){
 if(col.gameObject.tag == "spit")
 {
 Application.LoadLevel(0);
 }
 
 }
 
/*  function OnCollisionEnter2D (col : Collision2D){
  if(col.gameObject.tag == "lose2"){
  scrScript.SaveProgress();
  	Application.LoadLevel(3);
  }
  if(col.gameObject.tag == "lose"){
  scrScript.SaveProgress();
  	Application.LoadLevel(2);
  }
 
   
    } */
