var FCM = require('fcm-node');
    var serverKey = 'AAAACP2XLSQ:APA91bE2wiB6q3CjMiaHriYL7FuOPOT3AyGuJG68QYVMVtDWd2e9poPKU5xOsnlXN9LOthL3SwUYIuW52ui9ATvZZh1OorxcE_EEkSYTSw4z2F-mqljVNKZsEbyexvcT-vDmVU1UCq3v';
    var fcm = new FCM(serverKey);

    var message = {
//	to:'e_rwIsipQo-igfxC-UoLw3:APA91bEreNu57Za2JXfSSY92m_qK8qM8HMRZ7xnVGyp_QCGSuTsrwE5wrGOPN8IjlX48SvAdFoaD9TDQUGOuNAwumTec1GwLPimH2du8FHLJh6LBBDKEtAfhYwpS9GTiV_onOoGD2oXl',
	to:'e8xAuDesQy-rExLYEE27IB:APA91bGBYQvEunX7SzOCTKh79PVIJOHmSmuKPjeRvJSw86ARqo_Xeqto4b4wtuSFjjbu9w3GAYlZDcykCv8ceOQc8wNhuixVx8Sm2SmZ_AFjCScpy34eD2BlOGIN5wHSzJONKat3cAtN',
        notification: {
            title: 'NotifcatioTestAPP',
            body: '{"Message from node js app"}',
        },

        data: { //you can send only notification or only data(or include both)
            title: 'ok cdfsdsdfsd',
            body: '{"name" : "okg ooggle ogrlrl","product_id" : "123","final_price" : "0.00035"}'
        }

    };

    fcm.send(message, function(err, response) {
        if (err) {
            console.log("Something has gone wrong!"+err);
			console.log("Respponse:! "+response);
        } else {
            // showToast("Successfully sent with response");
            console.log("Successfully sent with response: ", response);
        }

    });
