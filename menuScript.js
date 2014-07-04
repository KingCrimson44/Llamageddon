#pragma strict

function Start () {

}

function Update () {

}

function OnGUI()
{
	if (GUI.Button(Rect(1000,400,100,100), "Play"))
	{
		Application.LoadLevel(1);
	}
}
