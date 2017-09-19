export function template(options) {
    return `
          <div class="hotel">
            <div class="hotel__content">
            
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
                
                <footer class="hotel-footer">       
                    <button type="button" class="show-review-button" data-hotel-id="${options.id}">Show reviews</button>
                   
                    <span class="price-and-date">
                        <div class="hotel-price">${options.price} &#8364;</div>
                        <div class="hotel-date">
                             ${this.formatDate(options.date_start)} - ${this.formatDate(options.date_end)}
                        </div>
                    </span>
                </footer>    
            </div>
            
            </div>
            
            <div class="review-list"></div>
        </div>
        `;
}