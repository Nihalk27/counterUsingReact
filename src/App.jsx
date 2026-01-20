import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [countToSet, setCountToSet] = useState(0);

  const containerStyle = {
    minHeight: "100vh",
    width: "100%", 
    backgroundColor: "#09090b",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "system-ui, sans-serif",
    padding: "20px",
    margin: "0", 
    boxSizing: "border-box" 
};

  const cardStyle = {
    backgroundColor: "#18181b",
    border: "1px solid #27272a",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    textAlign: "center",
    width: "100%",
    maxWidth: "400px"
  };

  const buttonStyle = (color) => ({
    backgroundColor: color,
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    margin: "0 5px",
    transition: "opacity 0.2s"
  });

  const inputStyle = {
    backgroundColor: "#09090b",
    border: "1px solid #27272a",
    color: "white",
    borderRadius: "8px",
    padding: "10px",
    width: "80px",
    textAlign: "center",
    fontSize: "18px",
    marginRight: "10px"
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={{ fontSize: "32px", marginBottom: "10px", color: "#60a5fa" }}>
          Count: {count}
        </h1>
        <p style={{ color: "#a1a1aa", fontSize: "14px", marginBottom: "30px" }}>
          Nihal's React Learning Journey
        </p>
        <div style={{ marginBottom: "30px" }}>
          <button 
            style={buttonStyle("#2563eb")} 
            onClick={() => setCount(count + 1)}
          >
            Increase
          </button>
          <button 
            style={buttonStyle("#3f3f46")} 
            onClick={() => setCount((count) => Math.max(count - 1, 0))}
          >
            Decrease
          </button>
          <button 
            style={buttonStyle("#7f1d1d")} 
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>

        <div style={{ borderTop: "1px solid #27272a", paddingTop: "20px" }}>
          <p style={{ fontSize: "12px", color: "#71717a", marginBottom: "15px", textTransform: "uppercase" }}>
            Set custom value
          </p>
          <input 
            type="number" 
            style={inputStyle}
            value={countToSet}
            onChange={(e) => {
              const val = Number(e.target.value);
              setCountToSet(Math.max(0, val));
           }}
          />
          <button 
            style={buttonStyle("#059669")}
            onClick={() => {
              setCount(countToSet);
              setCountToSet(0);
            }}
          >
            Set Value
          </button>
        </div>
      </div>
    </div>
  );
}