import {template} from "./hotel-item.template";
import {HotelService} from "../../services/hotel.service";
import {HotelReviewView} from "../hotel-review/hotel-reivew.view";

export class HotelItemView {

    constructor() {
        this.options = {};
        this.hotelService = new HotelService();
        this.hotelReviewView = new HotelReviewView();
    }

    formatDate(dateStr) {
        let date = new Date(dateStr);
        return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
    }

    showReviews(hotelId) {
        let self = this;
        let hotelElement = $(`[data-hotel-id="hotel-${hotelId}"]`);
        console.log(hotelElement);

        this.hotelService.getReview({
            hotelId: hotelId,
            success: (result) => {
                let reviewListEl = hotelElement.find('.review-list');
                reviewListEl.addClass('review-list-open');

                result.forEach(review => {
                    reviewListEl.append(
                        self.hotelReviewView.getTemplate(review)
                    )
                });
            },
            error: (error) => {
                console.log(error);
            }
        });
    }

    getTemplate(options) {

        let templateResult = template.call(this, options);
        let self = this;

        $('.hotel-list').on('click', '.show-review-button',(e) => {
            self.showReviews(e.target.dataset.hotelId);
            e.stopImmediatePropagation();
        });

        return templateResult;
    }
}