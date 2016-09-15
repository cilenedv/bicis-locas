function validateForm(){
	var nombre = document.getElementById("name").value;
	var apellido=  document.getElementById("lastname").value;
	var correo=  document.getElementById("input-email").value;
	var contrasena=  document.getElementById("input-password").value;

	if(nombre==="" || apellido==="" || correo===""||contrasena===""){
		alert("Todos los campos son obligatorios");
		return false;
	}
   
	if(contrasena.length<6 && ){
		alert("La contrasena no puede tener menos de 6");
		return false;
	}
	if( nombre == null || /^\s+$/.test(nombre) ) {
     alert("Campo obligatorio");
    }
    else{
        var letra = /^[a-zA-Z]*$/;
        if(!nombre.search(letra))
               console.log("letra")
               letra=/[a-z]/g;
               if(!nombre.search(letra)){
                   alert("El nombre debe de empezar con mayusculas")
               }
          else
             alert ("Ingrese datos válidos (A-Z)");
    }
	
}