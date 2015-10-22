#pragma strict

var apple : GameObject;

function Start () {
	var randomComida : GameObject;
	for(var i=0;i<25;i++){
		//randomComida = GameObject.CreatePrimitive(apple);
		randomComida = Instantiate(apple);
		randomComida.transform.position = new Vector3(Random.Range(-25,25), 0, Random.Range(-25,25));
	}
}