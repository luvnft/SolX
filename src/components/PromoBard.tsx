import React from "react";

const PromoBar: React.FC = () => {
  const cards = [
    {
      name: "Get Your Spot !",
      imgSrc: "https://s12.gifyu.com/images/SVTTI.gif",
      link: "https://t.me/Wickeths",
      linkTitle: "SolX",
    },
    {
      name: "Get Your Spot !",
      imgSrc: "https://s12.gifyu.com/images/SVTTI.gif",
      link: "https://t.me/Wickeths",
      linkTitle: "SolX",
    },
    {
      name: "Get Your Spot !",
      imgSrc: "https://s12.gifyu.com/images/SVTTI.gif",
      link: "https://t.me/Wickeths",
      linkTitle: "SolX",
    },
  ];

  return (
    <aside className="flex flex-col items-center md:items-stretch space-y-2 md:space-y-2 md:ml-6">
      {cards.map((card, index) => (
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
      {/* Centered Promo Inquiry Button */}
      <div className="mt-4 flex justify-center w-full">
        <a href="https://t.me/Wickeths" target="_blank" rel="noopener noreferrer">
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full">
            Ads Inquiry
          </button>
        </a>
      </div>
    </aside>
  );
};

export default PromoBar;
