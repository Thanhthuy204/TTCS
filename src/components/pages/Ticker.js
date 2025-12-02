
import React from "react";
import "./Ticker.css";

const items = [
  { id: 1, label: "Anti Virus", icon: "/ticker/antivirus.jpg" },
  { id: 2, label: "VPN", icon: "/ticker/vpn.jpg" },
  { id: 3, label: "Elsa Premium", icon: "/ticker/elsa.jpg" },
  { id: 4, label: "Microsoft", icon: "/ticker/microsoft.jpg" },
  { id: 5, label: "Spotify", icon: "/ticker/spotify.jpg" },
  { id: 6, label: "Netflix", icon: "/ticker/netflix.jpg" },
  { id: 7, label: "Adobe", icon: "/ticker/adobe.jpg" },
  { id: 8, label: "Chat GPT 4.0", icon: "/ticker/chat.jpg" },
];



const CategoryTicker = () => {
  const loop1 = [...items, ...items]; // nhân đôi mảng để tạo vòng lặp mượt

  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {loop1.map((it, idx) => (
          <div className="chip" key={`${it.id}-${idx}`}>
            <img src={it.icon} alt={it.label} />
            <span>{it.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};



export default CategoryTicker;

