import {template} from "./hotel-item.template";
import {HotelService} from "../../services/hotel.service";
import {HotelReviewView} from "../hotel-review/hotel-reivew.view";

export class HotelItemView {

    constructor() {
        this.hotelService = new HotelService();
        this.hotelReviewView = new HotelReviewView();
    }

    formatDate(dateStr) {
        let date = new Date(dateStr);
        let day = date.getDate();
        let month = date.getMonth() + 1;

        if (day.toString().length === 1) {
            day = "0" + day;
        }
        if (month.toString().length === 1) {
            month = "0" + month;
        }

        return `${day}.${month}.${date.getFullYear()}`;
    }

    showReviews(hotelId) {
        let self = this;
        let hotelElement = $(`[data-hotel-id="hotel-${hotelId}"]`);

        this.hotelService.getReview({
            hotelId: hotelId,
            success: (result) => {
                let reviewListEl = hotelElement.find('.review-list');
                reviewListEl.addClass('review-list-open');

                if (result.length === 0) {
                    reviewListEl.find('.no-review').show();
                } else {
                    reviewListEl.find('.no-review').hide();
                    result.forEach(review => {
                        reviewListEl.append(
                            self.hotelReviewView.getTemplate(review)
                        )
                    });
                }
            },
            error: (error) => {
                console.log(error.responseText);
            }
        });
    }

    initEventListeners() {
        let self = this;

        $('.show-review-button').click((e) => {
            let hotelElement = $(`[data-hotel-id="hotel-${e.target.dataset.hotelId}"]`);
            let reviewListEl = hotelElement.find('.review-list');

            if (reviewListEl.height() === 0) {
                $(e.target).text('Hide reviews');
                self.showReviews(e.target.dataset.hotelId);
            } else {
                $(e.target).text('Show reviews');

                let hotelElement = $(`[data-hotel-id="hotel-${e.target.dataset.hotelId}"]`);
                let reviewListEl = hotelElement.find('.review-list');

                reviewListEl.removeClass('review-list-open');
            }

            e.stopImmediatePropagation();
        });
    }

    getTemplate(options) {
        return template.call(this, options);
    }
}