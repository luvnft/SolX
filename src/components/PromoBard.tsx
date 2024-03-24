import React, { useState, useEffect } from "react";

const PromoBar: React.FC = () => {
  const cards = [
    {
      name: "Get Your Spot 1!",
      imgSrc: "https://s12.gifyu.com/images/SVTTI.gif",
      link: "https://t.me/solx_support",
      linkTitle: "SolX",
    },
    {
      name: "Get Your Spot 2!",
      imgSrc: "https://s12.gifyu.com/images/SVTTI.gif",
      link: "https://t.me/solx_support",
      linkTitle: "SolX",
    },
    {
      name: "Get Your Spot 3!",
      imgSrc: "https://s12.gifyu.com/images/SVTTI.gif",
      link: "https://t.me/solx_support",
      linkTitle: "SolX",
    },
    {
      name: "Get Your Spot 4!",
      imgSrc: "https://s12.gifyu.com/images/SVTTI.gif",
      link: "https://t.me/solx_support",
      linkTitle: "SolX",
    },
    {
      name: "Get Your Spot 5!",
      imgSrc: "https://s12.gifyu.com/images/SVTTI.gif",
      link: "https://t.me/solx_support",
      linkTitle: "SolX",
    },
    {
      name: "Get Your Spot 6!",
      imgSrc: "https://s12.gifyu.com/images/SVTTI.gif",
      link: "https://t.me/solx_support",
      linkTitle: "SolX",
    },
    {
      name: "Get Your Spot 7!",
      imgSrc: "https://s12.gifyu.com/images/SVTTI.gif",
      link: "https://t.me/solx_support",
      linkTitle: "SolX",
    },
    {
      name: "Get Your Spot 8!",
      imgSrc: "https://s12.gifyu.com/images/SVTTI.gif",
      link: "https://t.me/solx_support",
      linkTitle: "SolX",
    },
    {
      name: "Get Your Spot 9!",
      imgSrc: "https://s12.gifyu.com/images/SVTTI.gif",
      link: "https://t.me/solx_support",
      linkTitle: "SolX",
    },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(timer);
  }, [cards.length]);

  const nextSlide = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <aside className="flex flex-col items-center space-y-2 md:space-y-2 md:ml-6">
      <div className="flex flex-col items-center">
        <button onClick={prevSlide}>&#8593;</button>
        {cards.slice(currentCardIndex, currentCardIndex + 3).map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center w-56 bg-muted border border-gray-200 rounded-lg shadow-md p-2"
          >
            <img
              src={card.imgSrc}
              alt={`Ad Spot ${index + 1}`}
              className="h-40 mb-2 rounded-md"
            />
            <h3 className="text-xl font-bold mb-2">{card.name}</h3>
            <a href={card.link} target="_blank" rel="noopener noreferrer">
              <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full">
                @{card.linkTitle}
              </button>
            </a>
          </div>
        ))}
        <button onClick={nextSlide}>&#8595;</button>
      </div>
    </aside>
  );
};

export default PromoBar;
