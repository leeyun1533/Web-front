
 function pa_register_post()
 {
    	
		var patient_number= register_patient.pa_number.value;
		var patient_name= register_patient.pa_name.value;
        var patient_sex= register_patient.pa_sex.value;
     
        var patient_phone= register_patient.Pa_phonebook.value;
        var patient_adresse=register_patient.pa_adresse.value;
       var patient_id=register_patient.pa_id.value;
       var patient_password=register_patient.pa_password.value;
        var patient_brith=register_patient.pa_birth.value;
     
     
		alert(patient_number);
        alert(patient_name);
        alert(patient_sex);
        alert(patient_phone);
        alert(patient_adresse);
        alert(patient_id);
        alert(patient_password);
        alert(patient_brith);
}

function posterimage_register_post()
{
        var posterimage_name=register_posterimg.posterimg_name.value;
        var posterimage_id=register_posterimg.posterimg_id.value;
        var posterimage_detail=register_posterimg.poster_detail.value;
        
        alert(posterimage_name);
        alert(posterimage_id);
        alert(posterimage_detail);
    
}
function movement_register_post()
{
        var movement_name=register_movement.move_name.value;
        var movement_id=register_movement.move_id.value;
        var movement_detail=register_movement.move_detail.value;
        var touch_information=register_movement.touch_info.value;
        var repeat_number=register_movement.repeat_num.value;
    
        alert(movement_name);
        alert(movement_id);
        alert(movement_detail);
        alert(touch_information);
        alert(repeat_number);
    
}
function deviceId_register_post()
{
        
}