import React, { useState, useEffect } from "react";

function TournamentListV2() {
  const [teamA, setTeamA] = useState([{ nick: "", slot: "", score: "" }]);
  const [teamB, setTeamB] = useState([{ nick: "", slot: "", score: "" }]);

  const totalA = teamA.reduce((sum, p) => sum + (parseInt(p.score) || 0), 0);
  const totalB = teamB.reduce((sum, p) => sum + (parseInt(p.score) || 0), 0);

  const getBarHeight = () => {
    if (totalA + totalB === 0) return { h1: 50, h2: 50 };
    let h1 = (totalA / (totalA + totalB)) * 100;
    let h2 = (totalB / (totalA + totalB)) * 100;
    return { h1: Math.max(5, h1), h2: Math.max(5, h2) };
  };

  const barHeights = getBarHeight();
  const diff = Math.abs(totalA - totalB);
  const ventaja = totalA > totalB ? "LOBO NOCTURNO" : totalB > totalA ? "LOBO PLATA" : "EMPATE";
  const ventajaColor = totalA > totalB ? "#f9fcff8a" : totalB > totalA ? "#E8E8E8" : "#999";

  const handleAdd = (team) => {
    if (team === "A") setTeamA([...teamA, { nick: "", slot: "", score: "" }]);
    else setTeamB([...teamB, { nick: "", slot: "", score: "" }]);
  };

  const handleRemove = (team, idx) => {
    if (team === "A") setTeamA(teamA.filter((_, i) => i !== idx));
    else setTeamB(teamB.filter((_, i) => i !== idx));
  };

  const handleChange = (team, idx, field, value) => {
    if (team === "A") {
      const newTeam = [...teamA];
      newTeam[idx][field] = value;
      setTeamA(newTeam);
    } else {
      const newTeam = [...teamB];
      newTeam[idx][field] = value;
      setTeamB(newTeam);
    }
  };

  const handleReset = () => {
    if (window.confirm("¿ELIMINAR TODOS LOS LOBOS?")) {
      setTeamA([{ nick: "", slot: "", score: "" }]);
      setTeamB([{ nick: "", slot: "", score: "" }]);
    }
  };

  return (
    <>
      <style>{`@keyframes fadeInDown {from {opacity: 0; transform: translateY(-15px);} to {opacity: 1; transform: translateY(0);}} @keyframes slideIn {from {opacity: 0; transform: translateX(-8px);} to {opacity: 1; transform: translateX(0);}} @keyframes glow {0%, 100% {box-shadow: 0 0 15px rgba(74,158,255,0.4), inset 0 0 15px rgba(74,158,255,0.08);} 50% {box-shadow: 0 0 30px rgba(74,158,255,0.6), inset 0 0 20px rgba(74,158,255,0.15);}} @keyframes glowWhite {0%, 100% {box-shadow: 0 0 15px rgba(232,232,232,0.4), inset 0 0 15px rgba(232,232,232,0.08);} 50% {box-shadow: 0 0 30px rgba(232,232,232,0.6), inset 0 0 20px rgba(232,232,232,0.15);}}`}</style>
      <div style={{ background: "linear-gradient(135deg, rgba(10,15,40,0.95) 0%, rgba(20,25,50,0.95) 50%, rgba(10,15,40,0.95) 100%), url('/assets/wolf-romance-desktop-z6izk3kyhlw6blcc.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed", minHeight: "100vh", padding: "1.2rem 0.9rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "'Montserrat', sans-serif", position: "relative", overflow: "hidden" }}>
        
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", maxWidth: "1400px", marginBottom: "1.2rem", position: "relative", zIndex: 10 }}>
          <div style={{ flex: 1 }} />
          <h1 style={{ fontSize: "2.5rem", background: "linear-gradient(135deg, #4A9EFF 0%, #00E5FF 50%, #00c3ff 100%)", backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent", letterSpacing: "1px", margin: 0, animation: "fadeInDown 0.8s ease-out", textAlign: "center", flex: 1, fontWeight: 900 }}>🏆 EL PORNEO DEL LOBO</h1>
          <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <button onClick={handleReset} style={{ background: "linear-gradient(135deg, #d32f2f 0%, #ff5252 100%)", color: "#fff", border: "1px solid rgba(255,82,82,0.5)", borderRadius: "6px", padding: "0.65rem 1.2rem", fontWeight: 900, fontSize: "0.9rem", cursor: "pointer", transition: "all 0.3s", letterSpacing: "0.5px", boxShadow: "0 4px 12px rgba(211,47,47,0.3)" }} onMouseEnter={(e) => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 6px 16px rgba(211,47,47,0.5)"; }} onMouseLeave={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 4px 12px rgba(211,47,47,0.3)"; }}>REINICIAR</button>
          </div>
        </div>

        {/* Team Count */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", width: "100%", maxWidth: "1400px", marginBottom: "1rem", paddingBottom: "1rem", borderBottom: "1px solid rgba(74,158,255,0.2)", zIndex: 10 }}>
          <div style={{ fontSize: "1rem", fontWeight: 900, letterSpacing: "0.4px", background: "rgba(74,158,255,0.05)", padding: "0.85rem 1.2rem", borderRadius: "6px", border: "0.8px solid rgba(74,158,255,0.2)", textAlign: "left", color: "#4A9EFF" }}>🐺 LOBO NOCTURNO: {teamA.length} 🐺</div>
          <div style={{ fontSize: "1rem", fontWeight: 900, letterSpacing: "0.4px", background: "rgba(232,232,232,0.05)", padding: "0.85rem 1.2rem", borderRadius: "6px", border: "0.8px solid rgba(232,232,232,0.2)", textAlign: "right", color: "#E8E8E8" }}>🐺 LOBO PLATA: {teamB.length} 🐺</div>
        </div>

        {/* Advantage */}
        <div style={{ background: "linear-gradient(135deg, rgba(74,158,255,0.25) 0%, rgba(0,229,255,0.15) 100%)", border: "2px solid rgba(74,158,255,0.6)", borderRadius: "22px", padding: "1rem 1.8rem", fontWeight: 900, fontSize: "1.05rem", boxShadow: "0 0 35px rgba(74,158,255,0.3), inset 0 0 20px rgba(74,158,255,0.1)", letterSpacing: "0.5px", textAlign: "center", marginBottom: "1.5rem", color: "#FFFFFF", zIndex: 10, animation: "slideIn 0.6s ease-out", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.9rem" }}>
          <span>VENTAJA:</span> <span style={{ color: ventajaColor, fontWeight: 900, fontSize: "1.4rem", textShadow: "0 0 10px rgba(0,0,0,0.5)" }}>{ventaja}</span> <span style={{ fontSize: "1.15rem", color: "#00c3ff", fontWeight: 900, textShadow: "0 0 8px rgba(255,214,0,0.5)" }}>${diff.toLocaleString('es-AR')}</span>
        </div>

        {/* Arena */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem", maxWidth: "1400px", width: "100%", alignItems: "stretch", margin: "0 auto 0.9rem", zIndex: 10 }}>
          {/* Team A */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", animation: "fadeInDown 0.8s ease-out" }}>
            <div style={{ textAlign: "center", fontWeight: 900, fontSize: "2.4rem", padding: "1.2rem 1.3rem", borderRadius: "9px", letterSpacing: "0.4px", wordBreak: "break-word", background: "linear-gradient(135deg, #1a2a4a 0%, #2a4a6a 100%)", color: "#fff", boxShadow: "0 4px 12px rgba(74,158,255,0.15)", border: "1px solid rgba(74,158,255,0.3)", animation: "glow 3s ease-in-out infinite" }}>${totalA.toLocaleString('es-AR')}</div>
            <div style={{ display: "grid", gridTemplateColumns: "75px 1fr", gap: "0.85rem", alignItems: "stretch" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "245px" }}>
                <div style={{ width: "65px", height: "215px", borderRadius: "7px 7px 0 0", overflow: "hidden", border: "1px solid rgba(74,158,255,0.3)", position: "relative", background: "linear-gradient(to bottom, rgba(10,10,10,0.9), rgba(20,20,40,0.7))", boxShadow: "0 0 15px rgba(74,158,255,0.08)" }}>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, width: "100%", height: `${barHeights.h1}%`, background: "linear-gradient(to top, #1a4a8a, #4a9eff, #0fffff)", boxShadow: "0 0 30px #4a9eff inset 0 1px 10px rgba(74,158,255,0.6)", transition: "height 0.4s ease-out" }} />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem", justifyContent: "flex-start" }}>
                <div style={{ maxHeight: "210px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "0.35rem", paddingRight: "0.4rem" }}>
                  {teamA.map((p, idx) => (
                    <div key={idx} style={{ display: "flex", gap: "0.35rem", alignItems: "center", padding: "0.6rem 0.75rem", borderRadius: "5px", border: "0.7px solid rgba(74,158,255,0.2)", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", transition: "all 0.3s", animation: "slideIn 0.4s ease-out", background: "rgba(74,158,255,0.08)" }}>
                      <input type="text" placeholder="Nick" value={p.nick} onChange={e => handleChange("A", idx, "nick", e.target.value)} style={{ flex: 1, padding: "0.5rem 0.65rem", borderRadius: "4px", border: "0.7px solid rgba(74,158,255,0.25)", background: "rgba(10,10,30,0.6)", color: "#AAE8FF", fontWeight: 600, fontSize: "0.85rem", outline: "none", boxShadow: "0 0 6px rgba(0,0,0,0.08)", transition: "all 0.3s" }} />
                      <input type="text" placeholder="Slot" value={p.slot} onChange={e => handleChange("A", idx, "slot", e.target.value)} style={{ flex: 0.7, padding: "0.5rem 0.65rem", borderRadius: "4px", border: "0.7px solid rgba(74,158,255,0.25)", background: "rgba(10,10,30,0.6)", color: "#AAE8FF", fontWeight: 600, fontSize: "0.85rem", outline: "none", boxShadow: "0 0 6px rgba(0,0,0,0.08)", transition: "all 0.3s" }} />
                      <input type="number" placeholder="$" value={p.score} onChange={e => handleChange("A", idx, "score", e.target.value)} style={{ flex: 0.6, padding: "0.5rem 0.65rem", borderRadius: "4px", border: "0.7px solid rgba(74,158,255,0.25)", background: "rgba(10,10,30,0.6)", color: "#FFD700", fontWeight: 700, fontSize: "0.8rem", textAlign: "center", outline: "none", boxShadow: "0 0 6px rgba(0,0,0,0.08)", transition: "all 0.3s" }} />
                      <button onClick={() => handleRemove("A", idx)} style={{ background: "linear-gradient(135deg, #d32f2f 0%, #ff5252 100%)", color: "#fff", border: "0.7px solid rgba(255,82,82,0.3)", borderRadius: "4px", padding: "0.5rem 0.55rem", cursor: "pointer", fontWeight: 700, fontSize: "0.85rem", transition: "all 0.3s", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }} onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"} onMouseLeave={(e) => e.target.style.transform = "scale(1)"}>✕</button>
                    </div>
                  ))}
                </div>
                <button onClick={() => handleAdd("A")} style={{ width: "100%", borderRadius: "6px", padding: "0.6rem 0.9rem", fontWeight: 900, fontSize: "0.85rem", cursor: "pointer", transition: "all 0.3s", letterSpacing: "0.3px", marginTop: "0.4rem", textTransform: "uppercase", border: "0.8px solid rgba(74,158,255,0.3)", background: "linear-gradient(135deg, rgba(74,158,255,0.2) 0%, rgba(74,158,255,0.1) 100%)", color: "#4A9EFF" }} onMouseEnter={(e) => e.target.style.transform = "translateY(-1px)"} onMouseLeave={(e) => e.target.style.transform = "translateY(0)"}>+ LOBO N</button>
              </div>
            </div>
          </div>

          {/* Team B */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", animation: "fadeInDown 0.8s ease-out" }}>
            <div style={{ textAlign: "center", fontWeight: 900, fontSize: "2.4rem", padding: "1.2rem 1.3rem", borderRadius: "9px", letterSpacing: "0.4px", wordBreak: "break-word", background: "linear-gradient(135deg, #E8E8E8 0%, #FFFFFF 100%)", color: "#000", boxShadow: "0 4px 12px rgba(232,232,232,0.15)", border: "1px solid rgba(232,232,232,0.3)", animation: "glowWhite 3s ease-in-out infinite" }}>${totalB.toLocaleString('es-AR')}</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 75px", gap: "0.85rem", alignItems: "stretch" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem", justifyContent: "flex-start" }}>
                <div style={{ maxHeight: "210px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "0.35rem", paddingRight: "0.4rem" }}>
                  {teamB.map((p, idx) => (
                    <div key={idx} style={{ display: "flex", gap: "0.35rem", alignItems: "center", padding: "0.6rem 0.75rem", borderRadius: "5px", border: "0.7px solid rgba(232,232,232,0.2)", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", transition: "all 0.3s", animation: "slideIn 0.4s ease-out", background: "rgba(232,232,232,0.08)" }}>
                      <input type="text" placeholder="Nick" value={p.nick} onChange={e => handleChange("B", idx, "nick", e.target.value)} style={{ flex: 1, padding: "0.5rem 0.65rem", borderRadius: "4px", border: "0.7px solid rgba(232,232,232,0.25)", background: "rgba(10,10,30,0.6)", color: "#444", fontWeight: 600, fontSize: "0.85rem", outline: "none", boxShadow: "0 0 6px rgba(0,0,0,0.08)", transition: "all 0.3s" }} />
                      <input type="text" placeholder="Slot" value={p.slot} onChange={e => handleChange("B", idx, "slot", e.target.value)} style={{ flex: 0.7, padding: "0.5rem 0.65rem", borderRadius: "4px", border: "0.7px solid rgba(232,232,232,0.25)", background: "rgba(10,10,30,0.6)", color: "#444", fontWeight: 600, fontSize: "0.85rem", outline: "none", boxShadow: "0 0 6px rgba(0,0,0,0.08)", transition: "all 0.3s" }} />
                      <input type="number" placeholder="$" value={p.score} onChange={e => handleChange("B", idx, "score", e.target.value)} style={{ flex: 0.6, padding: "0.5rem 0.65rem", borderRadius: "4px", border: "0.7px solid rgba(232,232,232,0.25)", background: "rgba(10,10,30,0.6)", color: "#FFD700", fontWeight: 700, fontSize: "0.8rem", textAlign: "center", outline: "none", boxShadow: "0 0 6px rgba(0,0,0,0.08)", transition: "all 0.3s" }} />
                      <button onClick={() => handleRemove("B", idx)} style={{ background: "linear-gradient(135deg, #d32f2f 0%, #ff5252 100%)", color: "#fff", border: "0.7px solid rgba(255,82,82,0.3)", borderRadius: "4px", padding: "0.5rem 0.55rem", cursor: "pointer", fontWeight: 700, fontSize: "0.85rem", transition: "all 0.3s", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }} onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"} onMouseLeave={(e) => e.target.style.transform = "scale(1)"}>✕</button>
                    </div>
                  ))}
                </div>
                <button onClick={() => handleAdd("B")} style={{ width: "100%", borderRadius: "6px", padding: "0.6rem 0.9rem", fontWeight: 900, fontSize: "0.85rem", cursor: "pointer", transition: "all 0.3s", letterSpacing: "0.3px", marginTop: "0.4rem", textTransform: "uppercase", border: "0.8px solid rgba(232,232,232,0.3)", background: "linear-gradient(135deg, rgba(232,232,232,0.2) 0%, rgba(232,232,232,0.1) 100%)", color: "#D8D8D8" }} onMouseEnter={(e) => e.target.style.transform = "translateY(-1px)"} onMouseLeave={(e) => e.target.style.transform = "translateY(0)"}>+ LOBO B</button>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "245px" }}>
                <div style={{ width: "65px", height: "215px", borderRadius: "7px 7px 0 0", overflow: "hidden", border: "1px solid rgba(232,232,232,0.2)", position: "relative", background: "linear-gradient(to bottom, rgba(232,232,232,0.3), rgba(200,200,200,0.2))", boxShadow: "0 0 15px rgba(232,232,232,0.08)" }}>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, width: "100%", height: `${barHeights.h2}%`, background: "linear-gradient(to top, #a8d8ea, #ffffff, #d4e7f7)", boxShadow: "0 0 25px rgba(232,232,232,0.4) inset 0 1px 10px rgba(255,255,255,0.7)", transition: "height 0.4s ease-out" }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <button onClick={() => window.location.href = "/"} style={{ background: "transparent", color: "#666", border: "0.8px solid rgba(100,100,100,0.3)", borderRadius: "6px", padding: "0.65rem 1.3rem", fontWeight: 900, fontSize: "0.9rem", cursor: "pointer", transition: "all 0.3s", letterSpacing: "0.4px", boxShadow: "0 0 6px rgba(100,100,100,0.08)", marginTop: "1.1rem" }} onMouseEnter={(e) => { e.target.style.background = "#666"; e.target.style.color = "#fff"; e.target.style.boxShadow = "0 0 16px rgba(150,150,150,0.25)"; }} onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.color = "#666"; e.target.style.boxShadow = "0 0 6px rgba(100,100,100,0.08)"; }}>← VOLVER</button>
      </div>
    </>
  );
}

export default TournamentListV2;
