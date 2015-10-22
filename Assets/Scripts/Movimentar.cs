using UnityEngine;
using System.Collections;

public class Movimentar : MonoBehaviour {

	private Vector3 teste;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void FixedUpdate () {

		if(Input.GetKeyDown(KeyCode.W)){
			transform.rotation = Quaternion.AngleAxis(0f,new Vector3(0,1,0));
		}
		if(Input.GetKeyDown(KeyCode.S)){
			transform.rotation = Quaternion.AngleAxis(180f,new Vector3(0,1,0));
		}
		if(Input.GetKeyDown(KeyCode.D)){
			transform.rotation = Quaternion.AngleAxis(90f,new Vector3(0,1,0));
		}
		if(Input.GetKeyDown(KeyCode.A)){
			transform.rotation = Quaternion.AngleAxis(270f,new Vector3(0,1,0));
		}
		GetComponent<Rigidbody> ().MovePosition (transform.position + transform.forward *5* Time.deltaTime);
	}
}
