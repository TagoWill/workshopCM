using UnityEngine;
using System.Collections;

public class followObject : MonoBehaviour {

	public GameObject follow1;
	private Transform lol;

	// Update is called once per frame
	void Update () {
		lol = follow1.transform;
		//lol.transform.position = new Vector3 (lol.position.x+0.05f,lol.position.y,lol.position.z);
		transform.position = Vector3.Lerp(transform.position, lol.position, Time.deltaTime*5);
	}

	public void setFollow(GameObject fl){
		follow1 = fl;
	}
}
