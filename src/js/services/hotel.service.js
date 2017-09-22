export class HotelService {

    constructor() {
        this.apiURL =  'http://fake-hotel-api.herokuapp.com/api';
    }

    getHotels(onSuccess, onError) {
        $.ajax({
            url: this.apiURL + '/hotels',
            data:  {
                //force_error: true,
                //no_error: true,
                count: 20
            }
        }).done(function(data, textStatus, jqXHR) {
            onSuccess(data);
        }).fail(function(jqXHR, textStatus, errorThrown) {
            onError(jqXHR);
        });
    }

    getReview(options) {
        $.ajax({
            url: this.apiURL + '/reviews',
            data:  {
                hotel_id: options.hotelId
            }
        }).done(function(data) {
            options.success(data);
        }).fail(function(jqXHR, textStatus, errorThrown) {
            options.error(jqXHR);
        });
    }
}