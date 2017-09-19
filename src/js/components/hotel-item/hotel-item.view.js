/*
*
* */

export class HotelItemView {

    getTeamplte(options) {
        //this.template =
       return `
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
                             &#x2605;
                            ${options.stars}
                        </div>
                    </span>
                </header>
       
                <main class="hotel-description">
                     <article class="hotel-description__text">
                        ${options.description}
                    </article>
                    <div class="show-review-button"></div>
                    <div class="hotel-price">${options.price}</div>
                </main>
    
                <footer class="hotel-date">
                 ${options.date_start}
                 ${options.date_end}
                </footer>
            </div>
        </div>
        `
    }
}