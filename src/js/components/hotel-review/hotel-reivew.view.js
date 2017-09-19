import {template} from './hotel-review.template';

export class HotelReviewView {
    constructor() {

    }

    getTemplate(data) {

        //let templateResult = template.call(this, options);
        //let self = this;

       /* $('.hotel-list').on('click', '.show-review-button',(e) => {
            console.log('hereeeeee');
            self.showReviews(e.target.dataset.hotelId);
            e.stopImmediatePropagation();
        });*/

        return template.call(this, data);
    }
}