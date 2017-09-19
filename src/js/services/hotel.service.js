//const apiURL =  'http://fake-hotel-api.herokuapp.com/api/hotels';

export class HotelService {

    constructor() {
        this.apiURL =  'http://fake-hotel-api.herokuapp.com/api/hotels';
    }

    getHotels(onSuccess, onError) {
        $.ajax({
            url: this.apiURL,
            data:  {
                //force_error: true,
                count: 20
            }
        }).done(function(data, textStatus, jqXHR) {
            onSuccess(data);
        }).fail(function(jqXHR, textStatus, errorThrown) {
            //TODO handle error
            //onError(jqXHR);
        }).always(function() {
           //TODO if I need it
        });
    }
}