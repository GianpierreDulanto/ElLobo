import React, { useState, useEffect } from "react";

function HomePage({ onPlayClick }) {
  const [isLive, setIsLive] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLiveStatus = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://kick.com/api/v2/channels/el_lobito_del_pueblo',
          {
            method: 'GET',
            headers: {
              'Accept': 'application/json'
            }
          }
        );
        
        if (response.ok) {
          const data = await response.json();
          setIsLive(data.livestream !== null && data.livestream.is_live === true);
        } else {
          setIsLive(false);
        }
      } catch (error) {
        console.error('Error checking Kick channel status:', error);
        setIsLive(false);
      } finally {
        setLoading(false);
      }
    };

    checkLiveStatus();
    const interval = setInterval(checkLiveStatus, 30000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      background: "#181818",
      backgroundImage: "url('/assets/4a4fd0f6bcd61d3643876a565bbf4a99.gif')",
      backgroundSize: "cover",
      backgroundPosition: "center bottom",
      backgroundAttachment: "fixed",
      color: "#fff",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "3rem 2rem",
      fontFamily: "'Montserrat', Arial, sans-serif",
      position: "relative",
      overflow: "hidden"
    }}>
      <style>{`
        .home-page-blur::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: inherit;
          filter: blur(5px);
          z-index: 0;
        }
      `}</style>
      
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "linear-gradient(135deg, rgba(10,15,40,0.7) 0%, rgba(20,25,50,0.7) 50%, rgba(10,15,40,0.7) 100%)",
        backdropFilter: "blur(4px)",
        zIndex: 0
      }} />
      
      <div style={{
        border: "1px solid #00c3ff",
        borderRadius: "28px",
        padding: "3rem",
        maxWidth: "900px",
        width: "100%",
        position: "relative",
        zIndex: 10
      }}>
        {/* Contenedor principal con dos columnas */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "0.8fr 1.2fr",
          gap: "0"
        }}>
          <div style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            borderRight: "1px solid rgba(0, 195, 255, 0.3)",
            paddingRight: "3rem"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
              width: "100%"
            }}>
              <img src="/assets/30965c8e-8d7a-43c4-a97f-ffc1495fd24f-fullsize.webp" alt="El Lobito del Pueblo" style={{
                width: "100px",
                height: "100px",
                borderRadius: "8px"
              }} />
              <span style={{ fontSize: "2rem", color: "#00c3ff", fontWeight: "bold" }}>×</span>
              <img src="/assets/rainbet-cropped-transparent.png" alt="Rainbet" style={{
                width: "210px",
                height: "80px",
                borderRadius: "8px"
              }} />            
              </div>

            {/* Status */}
            <div style={{
              display: "inline-block",
              background: isLive ? "rgba(0, 255, 0, 0.1)" : "transparent",
              border: isLive ? "1px solid #00FF00" : "1px solid #555",
              borderRadius: "25px",
              padding: "0.5rem 1.2rem",
              color: isLive ? "#00FF00" : "#777",
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "2px",
              transition: "all 0.3s ease",
              fontWeight: isLive ? "bold" : "normal"
            }}>
              • {loading ? "CARGANDO..." : isLive ? "ONLINE" : "OFFLINE"}
            </div>
          
          <h2 style={{
            fontSize: "1.8rem",
            fontWeight: "bold",
            color: "#fff",
            margin: "0",
            lineHeight: "1.4",
            textAlign: "center",
            letterSpacing: "-0.5px"
          }}>
            <span style={{ color: "#00c3ff" }}>AUUUUUUUUUUUUU</span><br/>
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.5rem",
          maxWidth: "480px",
          paddingLeft: "3rem"
        }}>
          <a href="https://rainbet.com/?r=luiseramos" target="_blank" rel="noopener noreferrer" style={{
            gridColumn: "1 / -1",
            background: "transparent",
            border: "2px solid #00c3ff",
            borderRadius: "20px",
            padding: "1rem 1.5rem",
            textAlign: "center",
            textDecoration: "none",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "all 0.3s",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.4rem"
          }} onMouseEnter={(e) => {
            e.target.style.borderColor = "#00c3ff";
            e.target.style.boxShadow = "0 0 20px #00c3ff55";
          }} onMouseLeave={(e) => {
            e.target.style.boxShadow = "none";
          }}>
              <img src="/assets/rainbet-cropped-transparent.png" alt="Rainbet" style={{
                width: "80px",
                height: "30px",
                borderRadius: "8px"
              }} />
            <div style={{ color: "#00c3ff", fontWeight: "bold", fontSize: "0.85rem", margin: "0.2rem 0" }}>REGÍSTRATE EN RAINBET</div>
            <div style={{ color: "#999", fontSize: "0.75rem", margin: "0" }}>CÓDIGO: luiseramos</div>
          </a>

          <a href="https://kick.com/el_lobito_del_pueblo" target="_blank" rel="noopener noreferrer" style={{
            background: "transparent",
            border: "2px solid #00FF00",
            borderRadius: "16px",
            padding: "1rem 1rem",
            textAlign: "center",
            textDecoration: "none",
            color: "#00FF00",
            fontWeight: "bold",
            fontSize: "0.9rem",
            cursor: "pointer",
            transition: "all 0.3s",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.4rem"
          }} onMouseEnter={(e) => {
            e.target.style.boxShadow = "0 0 20px #00FF0066";
            e.target.style.borderColor = "#00FF00";
          }} onMouseLeave={(e) => {
            e.target.style.boxShadow = "none";
          }}>
            <img src="/assets/kick-logo-vector-descargar-kick-streaming-icono-logo-vector-eps_691560-10814.avif" alt="Kick" style={{ width: "40px", height: "40px", objectFit: "contain" }} />
            <div style={{ margin: "0.2rem 0" }}>CANAL DE KICK</div>
            <div style={{ fontSize: "0.7rem", color: "#999", margin: "0" }}>SORTEOS EN VIVO</div>
          </a>

          <a href="https://chat.whatsapp.com/LHQye4otyO27Urmq07gkOR" target="_blank" rel="noopener noreferrer" style={{
            background: "transparent",
            border: "2px solid #00FF00",
            borderRadius: "16px",
            padding: "1rem 1rem",
            textAlign: "center",
            textDecoration: "none",
            color: "#00FF00",
            fontWeight: "bold",
            fontSize: "0.9rem",
            cursor: "pointer",
            transition: "all 0.3s",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.4rem"
          }} onMouseEnter={(e) => {
            e.target.style.boxShadow = "0 0 20px #00FF0066";
            e.target.style.borderColor = "#00FF00";
          }} onMouseLeave={(e) => {
            e.target.style.boxShadow = "none";
          }}>
            <img src="/assets/WhatsApp-logo-webp-green-medium-size.webp" alt="WhatsApp" style={{ width: "40px", height: "40px", objectFit: "contain" }} />
            <div style={{ margin: "0.2rem 0" }}>COMUNIDAD VIP</div>
            <div style={{ fontSize: "0.7rem", color: "#999", margin: "0" }}>ÚNETE A LA MANADA</div>
          </a>

          <a href="#" style={{
            background: "transparent",
            border: "2px solid #00c3ff",
            borderRadius: "16px",
            padding: "1rem 1rem",
            textAlign: "center",
            textDecoration: "none",
            color: "#00c3ff",
            fontWeight: "bold",
            fontSize: "0.9rem",
            cursor: "pointer",
            transition: "all 0.3s",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.4rem"
          }} onMouseEnter={(e) => {
            e.target.style.boxShadow = "0 0 20px #00c3ff55";
            e.target.style.borderColor = "#00c3ff";
          }} onMouseLeave={(e) => {
            e.target.style.boxShadow = "none";
          }}>
            <div style={{ fontSize: "2rem" }}>🔝</div>
            <div style={{ margin: "0.2rem 0" }}>TOP DONATELOS</div>
            <div style={{ fontSize: "0.7rem", color: "#999", margin: "0" }}>LOS MAS DONATELOS DE LA MANADA</div>
          </a>

          <button onClick={onPlayClick} style={{
            background: "transparent",
            border: "2px solid #00c3ff",
            borderRadius: "16px",
            padding: "1rem 1rem",
            textAlign: "center",
            textDecoration: "none",
            color: "#00c3ff",
            fontWeight: "bold",
            fontSize: "0.9rem",
            cursor: "pointer",
            transition: "all 0.3s",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.4rem"
          }} onMouseEnter={(e) => {
            e.target.style.boxShadow = "0 0 20px #00c3ff55";
            e.target.style.borderColor = "#00c3ff";
          }} onMouseLeave={(e) => {
            e.target.style.boxShadow = "none";
          }}>
            <div style={{ fontSize: "2rem" }}>🏆</div>
            <div style={{ margin: "0.2rem 0" }}>PORNEO</div>
            <div style={{ fontSize: "0.7rem", color: "#999", margin: "0" }}>EL VERDADERO PORNEO</div>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
