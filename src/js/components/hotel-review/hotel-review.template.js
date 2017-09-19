export function template(options) {
    return `
         <div class="hotel-review">
            <span class="review-type"> ${(options.positive) ? '+' : '-'}</span>
            
            <span class="review-content">
                <div class="reviewer-name">${options.name}</div>
                <article class="review-text">
                    ${options.comment}
                </article>
            </span>
         </div>
        `;
}