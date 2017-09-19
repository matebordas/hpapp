//const apiURL =  'http://fake-hotel-api.herokuapp.com/api/hotels';
/*
*
*  "id": "13ef1108-7f18-40c7-ac0f-0e743b015755", //hotel id
    "name": "soluta aperiam rerum", //hotel name
    "country": "Seychelles", //hotel country
    "city": "Norbertberg", //hotel city
    "price": 140, //offer price
    "images": [ //hotel images
      "http://lorempixel.com/640/480/city?87325",
      ...
    ],
    "date_start": "2016-04-02T08:09:12.088Z", //offer start date
    "date_end": "2016-11-30T04:27:59.359Z", //offer end date
    "stars": 2, //hotel stars
    "rating": 1.811553610023111, //hotel rating
    "description": "Recusandae enim debitis quisquam pariatur..." //hotel description
* */
export class HotelService {

    constructor() {
        //this.apiURL =  'http://fake-hotel-api.herokuapp.com/api/hotels';
        this.apiURL =  'http://fake-hotel-api.herokuapp.com/api';
    }

    getHotels(onSuccess, onError) {
        $.ajax({
            url: this.apiURL + '/hotels',
            data:  {
                //force_error: true,
                no_error: true,
                count: 20
            }
        }).done(function(data, textStatus, jqXHR) {
            onSuccess(data);
        }).fail(function(jqXHR, textStatus, errorThrown) {
            //TODO handle error
            onError(jqXHR);
        }).always(function() {
           //TODO if I need it
        });
    }


    /*
    * {
    "name": "Nigel Kub", //commenter name
    "comment": "Rerum est suscipit adipisci odio hic.", //comment
    "positive": true, //false if comment is negative
    "hotel_id": "13ef1108-7f18-40c7-ac0f-0e743b015755" //hotel id
  },
    * */
    getReview(options) {
        $.ajax({
            url: this.apiURL + '/reviews',
            data:  {
                hotel_id: options.hotelId
            }
        }).done(function(data) {
            //onSuccess(data);
            options.success(data);
        }).fail(function(jqXHR, textStatus, errorThrown) {
            //TODO handle error
            //onError(jqXHR);
            options.error(jqXHR);
        }).always(function() {
            //TODO if I need it
        });
    }
}