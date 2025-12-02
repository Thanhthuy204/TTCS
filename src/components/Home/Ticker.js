
import React from "react";
import "./Ticker.scss";
import antivirus from "../../assets/ticker/antivirus.jpg";
import vpn from "../../assets/ticker/vpn.jpg";
import elsa from "../../assets/ticker/elsa.jpg";
import microsoft from "../../assets/ticker/Microsoft.jpg";
import spotify from "../../assets/ticker/spotify.jpg";
import netflix from "../../assets/ticker/netflix.jpg";
import adobe from "../../assets/ticker/adobe.jpg";
import chat from "../../assets/ticker/chat.jpg";


const items = [
  { id: 1, label: "Anti Virus", icon: antivirus },
  { id: 2, label: "VPN", icon: vpn },
  { id: 3, label: "Elsa Premium", icon: elsa },
  { id: 4, label: "Microsoft", icon: microsoft },
  { id: 5, label: "Spotify", icon: spotify },
  { id: 6, label: "Netflix", icon: netflix },
  { id: 7, label: "Adobe", icon: adobe },
  { id: 8, label: "Chat GPT 4.0", icon: chat },
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

