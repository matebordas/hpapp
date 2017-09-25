import {template} from 'lodash';
import templateView from './hotel-review.html'

export class HotelReviewView {

    getTemplate(data) {
        return template(templateView)({review: data});
    }
}