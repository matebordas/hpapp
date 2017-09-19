import {template} from "./hotel-item.template";
import {HotelService} from "../../services/hotel.service";

export class HotelItemView {

    constructor() {
        this.options = {};
        this.hotelService = new HotelService();
    }

    formatDate(dateStr) {
        const date = new Date(dateStr);
        return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
    }

    showReview(hotelId) {
        this.hotelService.getReview({
            hotelId: hotelId,
            success: (result) => {
                console.log('result');
                console.log(result);

                //self.showHotels(result);
            },
            error: (error) => {
                console.log('error');
                console.log(error);
            }
        });
    }

    getTemplate(options) {

        let templateResult = template.call(this, options);
        let self = this;

        $('.hotel-list').on('click', '.show-review-button',(e) => {
            console.log('hereeeeee');
            self.showReview(e.target.dataset.hotelId);
            e.stopImmediatePropagation();
        });

        return templateResult;
        //return $el[0].outerHTML;

        /*`
          <div class="hotel">
            <div class="hotel-image">
             <img src="${options.images[0]}" alt="hotel-image">
            </div>


            <div class="hotel-info">
                <header>
                    <span class="header-left">
                        <div class="hotel-name">${options.name}</div>

                        <div class="hotel-location">
                            ${options.city} - ${options.country}
                        </div>
                    </span>

                    <span calss="header-right">
                        <div class="hotel-rating">

                            ${[1,2,3,4,5].map((i) => {
                                let className = 'hotel-star';
                                className += ((i <= options.stars) ? " filled" : "");
                                return '<span class="' + className + '">&#x2605;</span>'
                            }).join(' ')}
                        </div>
                    </span>
                </header>

                <main class="hotel-description">
                     <article class="hotel-description__text">
                        ${options.description}
                    </article>
                </main>

                <footer>
                    <button type="button" class="show-review-button">Show reviews</button>

                    <span class="price-and-date">
                        <div class="hotel-price">${options.price} &#8364;</div>
                        <div class="hotel-date">
                             ${this.formatDate(options.date_start)} - ${this.formatDate(options.date_end)}
                        </div>
                    </span>
                </footer>
            </div>
        </div>
        `*/
    }
}