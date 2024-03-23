import React from "react";

const PromoBar: React.FC = () => {
  const cards = [
    {
      name: "Get Your Spot !",
      imgSrc: "https://learn.g2.com/hs-fs/hubfs/plan%20gif%20marketing%20strategy.gif?width=500&name=plan%20gif%20marketing%20strategy.gif",
      link: "https://t.me/Wickeths",
      linkTitle: "SolX",
    },
    {
      name: "Get Your Spot !",
      imgSrc: "https://pbs.twimg.com/profile_images/1681777814926766080/2NgQaPbr_400x400.jpg",
      link: "https://twitter.com/KeroNFTs",
      linkTitle: "SolX",
    },
    {
      name: "Get Your Spot !",
      imgSrc: "https://www.ship.ph/wp-content/uploads/2017/04/Landscape-GIF-4.gif",
      link: "https://twitter.com/SMLE_SOL",
      linkTitle: "SolX",
    },
  ];

  return (
    <aside className="flex flex-col items-center md:items-stretch space-y-2 md:space-y-2 md:ml-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center w-80 bg-muted border border-gray-200 rounded-lg shadow-md p-2"
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
            Contact Us for Promo Inquiries
          </button>
        </a>
      </div>
    </aside>
  );
};

export default PromoBar;
