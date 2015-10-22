using UnityEngine;
using System.Collections;

public class randomApples : MonoBehaviour {

	public GameObject apple;
	private int size = 25;
	private System.Random rnd = new System.Random();
	// Use this for initialization
	void Start () {
		GameObject teste;
		for (int i=0; i<20; i++) {
			teste = Instantiate(apple);
			teste.GetComponent<Transform>().position = new Vector3(rnd.Next(-25,size), 0, rnd.Next(-25,size));
		}

	}

}
