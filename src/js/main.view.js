import {HotelService} from "./services/hotel.service"
import {HotelItemView} from "./components/hotel-item/hotel-item.view";

export class MainView {

    constructor() {
        this.hotelService = new HotelService();
        this.hotelItemView = new HotelItemView();
    }

    initViewListeners() {
        let self = this;
        const loadButton = $('.load-button');

        loadButton.click(function() {
            self.hotelService.getHotels(
                (result) => {
                    console.log('result');
                    console.log(result);

                    self.showHotels(result);
                },
                (error) => {
                    console.log('error');
                    console.log(error);
                }
            )
        });
    }

    showHotels(hotels) {
        //let self = this;
        const hotelListElement = $('.hotel-list');

        hotels.forEach(hotel => {
            hotelListElement.append(
                this.hotelItemView.getTemplate(hotel)
            )
        });
    }
}