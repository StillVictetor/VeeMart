import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/onboarding.css";
import logo from "../assets/logo.png"

export default function Onboarding() {
  const navigate = useNavigate();
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExit(true);
      setTimeout(() => navigate("/"), 1200);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={`onboarding-container ${exit ? "exit" : ""}`}>
      <img src={logo} alt="Veemart Logo" className="onboarding-logo" />

      <h1 className="onboarding-text">Welcome to VeeMart</h1>
    </div>
  );
}