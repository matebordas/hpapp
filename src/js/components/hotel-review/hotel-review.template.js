export function template(review) {
    return `
         <div class="hotel-review">
            <span class="review-type">
                    ${(review.positive) ? '<i class="fa fa-plus-circle"></i>' : '<i class="fa fa-minus-circle"></i>'}
            </span>
            
            <span class="review-content">
                <div class="reviewer-name">${review.name}</div>
                <article class="review-text">
                    ${review.comment}
                </article>
            </span>
         </div>
        `;
}