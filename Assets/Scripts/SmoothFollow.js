#pragma strict

     var follow : GameObject;
     
     function FixedUpdate () 
     {
    
    if(follow!=null)
        transform.position = Vector3.Lerp(transform.position, follow.transform.position, Time.deltaTime*3);
     }
