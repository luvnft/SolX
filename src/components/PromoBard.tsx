import React from "react";

const PromoBar: React.FC = () => {
  const cards = [
    {
      name: "Get Your Spot !",
      imgSrc:
        "https://i.ibb.co/KrRCZ2k/logotest6.png",
      link: "https://t.me/Wickeths",
      linkTitle: "SolX",
    },
   {
      name: "Get Your Spot !",
      imgSrc:
        "https://learn.g2.com/hs-fs/hubfs/plan%20gif%20marketing%20strategy.gif?width=500&name=plan%20gif%20marketing%20strategy.gif",
      link: "https://t.me/Wickeths",
      linkTitle: "SolX",
    },
    {
      name: "Get Your Spot !",
      imgSrc:
        "https://i.ibb.co/KrRCZ2k/logotest6.png",
      link: "https://t.me/Wickeths",
      linkTitle: "SolX",
    },
  ];

  return (
    <aside className="flex flex-col items-center md:items-stretch space-y-4 md:space-y-6 md:ml-4">
    {cards.map((card, index) => (
      <div
        key={index}
        className="flex flex-col justify-center items-center w-64 bg-muted border border-gray-200 rounded-lg shadow-md p-6"
      >
        <img
          src={card.imgSrc}
          alt={`Ad Spot ${index + 1}`}
          className="h-40 mb-3 rounded-md"
        />
          <h3 className="text-2xl font-bold mb-3">{card.name}</h3>
          <a href={card.link} target="_blank" rel="noopener noreferrer">
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full">
          @{card.linkTitle}
        </button>
        </a>
        </div>
      ))}
    </aside>
  );
};

export default PromoBar;
