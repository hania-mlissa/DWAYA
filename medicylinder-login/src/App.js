import { useState } from "react";
import { MdEmail, MdLock, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import "./App.css";
import logo from "./DWAYA.jpeg";

export default function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="page">
      {/* Logo */}
      <div className="logo-box">
      <img src={logo} alt="DWAYA logo" className="logo-img" />
       </div>

      <h1 className="title">Bienvenue</h1>
      <p className="subtitle">Prenez vos médicaments en toute sérénité</p>

      {/* Carte formulaire */}
      <div className="card">
        <label className="label">Adresse e-mail</label>
        <div className="input-wrapper">
          <MdEmail className="input-icon" />
          <input type="email" placeholder="nom@exemple.fr" className="input" />
        </div>

        <label className="label" style={{ marginTop: "1rem" }}>Mot de passe</label>
        <div className="input-wrapper">
          <MdLock className="input-icon" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className="input"
          />
          <button className="eye-btn" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
          </button>
        </div>

        <p className="forgot">Mot de passe oublié ?</p>

        <button className="btn-primary">Se connecter</button>

        <div className="divider">
          <span className="divider-line" />
          <span className="divider-text">ou</span>
          <span className="divider-line" />
        </div>

        <button className="btn-google">
          <FcGoogle size={20} />
          Continuer avec Google
        </button>
      </div>

      <p className="register-text">
        Pas encore de compte ?{" "}
        <a href="#" className="register-link">Inscrivez-vous ici</a>
      </p>

      <div className="footer-links">
        <a href="#">Confidentialité</a>
        <a href="#">Conditions d'utilisation</a>
        <a href="#">Aide</a>
      </div>
    </div>
  );
}
