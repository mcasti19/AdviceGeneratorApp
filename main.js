export const fetchAdvice = async () => {
  const res = await fetch( 'https://api.adviceslip.com/advice' );
  const data = await res.json();

  return {
    advice: data.slip.advice.trim(),
    id: data.slip.id,
  };
};

export const quoteApp = async () => {
  const idLabel = document.querySelector( 'h4' );
  const adviceLabel = document.querySelector( 'blockquote' );
  const nextAdviceButton = document.querySelector( '#nextButton' );

  const renderQuote = ( { advice, id } ) => {
    idLabel.innerHTML = `ADVICE #${ id }`;
    adviceLabel.innerHTML = `"${ advice }"`;

  };

  nextAdviceButton.addEventListener( 'click', async () => {
    const advice = await fetchAdvice();

    renderQuote( advice );
  } );

  // Fetch a single random quote initially
  const initialAdvice = await fetchAdvice();
  renderQuote( initialAdvice );
};

quoteApp();