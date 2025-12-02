
const labels = [
  { id: 1, label: "Đa dạng sản phẩm" },
  { id: 2, label: "Giá cả cạnh tranh" },
  { id: 3, label: "Hỗ trợ 24/7" },
  { id: 4, label: "Thanh toán an toàn" },
  { id: 5, label: "Uy tín hàng đầu" },
  { id: 6, label: "Chất lượng" },
  { id: 7, label: "Chuyên nghiệp" },
];
const LabelTicker = () => {
  const loop2 = [...labels, ...labels];

  return (
    <div className="labels-wrap">
      <div className="labels-track">
        {loop2.map((it, idx) => (
          <div className="chip" key={`${it.id}-${idx}`}>
            <span>{it.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default LabelTicker;