export default function movieResults (elementToFillIn, dataObject) {
  elementToFillIn.querySelector('.summary__title').innerText = dataObject.show_title;
  elementToFillIn.querySelector('.summary__genre').innerText = dataObject.category;
  elementToFillIn.querySelector('.summary__rating').innerText = dataObject.rating;
  elementToFillIn.querySelector('.summary-pic__image').innerText = dataObject.poster;
  elementToFillIn.querySelector('.summary__content').innerText = dataObject.summary;
  elementToFillIn.querySelector('.actors__content').innerText = dataObject.show_cast;
}
