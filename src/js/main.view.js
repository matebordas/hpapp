import {HotelService} from "./services/hotel.service"
import {HotelItemView} from "./components/hotel-item/hotel-item.view";

export class MainView {

    constructor() {
        this.hotelService = new HotelService();
        this.hotelItemView = new HotelItemView();

        this.hotelListElement = $('.hotel-list');
    }

    initViewListeners() {
        let self = this;
        const loadButton = $('.load-button');
        const notificationEl = $('.notification-placeholder');

        loadButton.click(function() {

            self.hotelService.getHotels(
                (result) => {
                    self.hotelListElement.addClass('visible');
                    self.showHotels(result);
                    notificationEl.hide();
                },
                (error) => {
                    console.log(error.responseText);

                    self.hotelListElement.removeClass('visible');
                    notificationEl.text('An error occurred');
                    notificationEl.css('background', '#d9534f');
                }
            )
        });
    }

    showHotels(hotels) {
        let self = this;

        hotels.forEach(hotel => {
            self.hotelListElement.append(
                this.hotelItemView.getTemplate(hotel)
            )
        });

        this.hotelItemView.initEventListeners();
    }
}