import {template} from './hotel-review.template';

export class HotelReviewView {

    getTemplate(data) {
        return template.call(this, data);
    }
}