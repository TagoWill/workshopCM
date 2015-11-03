	#pragma strict
	
	var Food : GameObject;
	private var food : int;
	var piece : GameObject;
	private var lastPiece : GameObject;
	private var lives : int;
	private var died: boolean;

	function Start () {
		var i :int=0;
		while(i<6)
		{
			placeFood();
			i++;
		}
		food=0;
		died=false;
	}

	function OnTriggerEnter(col : Collider)
	{
		if(col.gameObject.name.Equals("Food"))
		{
			Debug.Log("Colisao com comida");
			food++;
			addPiece();
			
			placeFood();
		
			Destroy(col.gameObject);
			
		}
		
	if(col.gameObject.name =="Piece" || col.gameObject.name =="Parede" || col.gameObject.name =="Parede1"
		|| col.gameObject.name =="Parede2" || col.gameObject.name =="Parede3")
		{
		Debug.Log("Colisao com cobra");
		transform.position= Vector3(0,-100,0);
		died=true;
	}
	}
	
	function placeFood()
	{

		var food2 : GameObject;
		food2= Instantiate(Food);
		food2.transform.position= new Vector3(Random.Range(-15,15),0.483,Random.Range(-15,15));
		food2.name="Food";
		Debug.Log("Adicionei Food");
	}
	
	function addPiece()
	{ 
		Debug.Log("Adicionei um piece");
		var newPiece : GameObject;
		
		newPiece= Instantiate(piece);
		if(lastPiece==null)
		{
			newPiece.transform.position=this.transform.position;
		newPiece.GetComponent.<SmoothFollow>().follow=this.gameObject;
			newPiece.name="FirstPiece";
		}
		else
		{
		newPiece.transform.position=lastPiece.transform.position;
		newPiece.GetComponent.<SmoothFollow>().follow=lastPiece;
		newPiece.name="Piece";
		}
		
		newPiece.GetComponent.<SmoothFollow>().enabled= true;
		lastPiece=newPiece;
		Debug.Log("Adicionei Piece");
	}
	
	function OnGUI()
	{
		if(died)
		{
			var buttonStyle= new GUIStyle("Button");
	     	buttonStyle.fontSize = 20;
	  		GUI.backgroundColor = Color(0.2, 0.3, 0.4, 0.5);
			GUI.Label(new Rect(Screen.width/2 - 15, Screen.height/2 - 25, 100, 100), "GAME OVER");
			if(GUI.Button (new Rect(Screen.width/2 - 50, Screen.height/2 + 5, 150, 50), "Start Again", buttonStyle))
			{
				Application.LoadLevel(Application.loadedLevel);	
			}
		}	
	}
	