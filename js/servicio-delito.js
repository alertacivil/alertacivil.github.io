'use strict'
const axios = require('axios');

/* 
 

fetch(uri, {
       method: 'POST',
       mode: 'no-cors',
       contentType: 'application/json;charset=utf-8',
       body:  {
        'FechaDelito': pfechadelito,
        'HoraDelito': phoradelito,
        'Tipo':ptipo,
        'Victima':pvictima,
        'Descripcion':pdescripcion,
        'Latitud':platitud,
        'Longitud':plongitud,
    }                   
      }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
      
    }    
       */
    let registrar_delito = async(pfechadelito,phoradelito,ptipo,pvictima,pdescripcion,platitud,plongitud) => {

        await axios({
                method: 'post',
                url: 'https://alertacivilapi.azurewebsites.net/api/delito',
                responseType: 'json',
                data: {
                    'FechaDelito': pfechadelito,
                    'HoraDelito': phoradelito,
                    'Tipo':ptipo,
                    'Victima':pvictima,
                    'Descripcion':pdescripcion,
                    'Latitud':platitud,
                    'Longitud':plongitud,
                }                   
            }).then((res) => {
                if (res.data.resultado == false) {
                    switch (res.data.err.code) {
                        case 11000:
                            Swal.fire({
                                'title': 'El incidente no ha sido registrado',
                                //'text' : 'El usuario ya se encuentra registrado',
                                'icon': 'error'
                            });
                            break;
                    }
                } else {
                    Swal.fire({
                        'title': 'El incidente ha sido registrado',
                        'text': 'Bienvenido a S.O.S. Vial C.R.!',
                        'icon': 'success'
                    }).then(() => {
                        limpiar();
                    });
                }
            }).catch((err) => {
                console.log(err);
            });
    
    };
 
