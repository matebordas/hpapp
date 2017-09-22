export function template(hotel) {
    return `
          <div class="hotel" data-hotel-id="hotel-${hotel.id}">
            <div class="hotel__content">
            
            <div class="hotel-image">
             <img src="${hotel.images[0]}" alt="hotel-image">
            </div>

            
            <div class="hotel-info">
                <header>
                    <span class="header-left">
                        <div class="hotel-name">${hotel.name}</div>
                        
                        <div class="hotel-location">
                            ${hotel.city} - ${hotel.country}
                        </div>
                    </span>
                    
                    <span calss="header-right">
                        <div class="hotel-rating">
                            
                            ${[1,2,3,4,5].map((i) => {
                                let className = 'hotel-star';
                                className += ((i <= hotel.stars) ? " filled" : "");
                                return '<span class="' + className + '">&#x2605;</span>'
                            }).join(' ')}
                        </div>
                    </span>
                </header>
       
                <main class="hotel-description">
                     <article class="hotel-description__text">
                        ${hotel.description}
                    </article>
                </main>
                
                <footer class="hotel-footer">       
                    <button type="button" class="show-review-button" data-hotel-id="${hotel.id}">Show reviews</button>
                   
                    <span class="price-and-date">
                        <div class="hotel-price">${hotel.price} &#8364;</div>
                        <div class="hotel-date">
                             ${this.formatDate(hotel.date_start)} - ${this.formatDate(hotel.date_end)}
                        </div>
                    </span>
                </footer>    
            </div>
            
            </div>
            
            <div class="review-section">
                <div class="review-list">
                </div>
                <div class="hotel-review no-review">There are no review for this hotel.</div>
             </div>
        </div>
        `;
}