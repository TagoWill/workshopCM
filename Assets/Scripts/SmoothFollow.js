#pragma strict

     var follow : GameObject;
     var xOffset : int;
     var yOffset : int;
     var zOffset : int;
     
     function FixedUpdate () 
     {
    
    if(follow!=null)
         //transform.position = Vector3(Mathf.Lerp(transform.position.x, follow.transform.position.x + xOffset, Time.deltaTime),Mathf.Lerp(transform.position.y, follow.transform.position.y + yOffset, Time.deltaTime),Mathf.Lerp(transform.position.z, follow.transform.position.z + zOffset, Time.deltaTime));
     	transform.position = Vector3.Lerp(transform.position, follow.transform.position, Time.deltaTime*3);
     }
