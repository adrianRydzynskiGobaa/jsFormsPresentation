"use client";

import React, { useState } from "react";

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<any>({});

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const birthDateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    let newErrors: any = {};

    if (!email.match(emailRegex)) {
      newErrors.email = "Podaj poprawny adres email!";
    }

    if (!birthDate.match(birthDateRegex)) {
      newErrors.birthDate = "Podaj poprawną datę urodzenia w formacie RRRR-MM-DD!";
    }

    if (!password.match(passwordRegex)) {
      newErrors.password =
        "Hasło powinno zawierać co najmniej 8 znaków, w tym przynajmniej jedną wielką literę i jedną cyfrę!";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Potwierdzenie hasła nie jest zgodne z wprowadzonym hasłem!";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Formularz został poprawnie wypełniony!");
    }
  };

  return (
    <div className="form-container">
      <h2>Formularz rejestracji</h2>
      <div className="form-field">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <div className="error-message">{errors.email}</div>}
      </div>
      <div className="form-field">
        <label htmlFor="birthDate">Data urodzenia (RRRR-MM-DD):</label>
        <input
          type="text"
          id="birthDate"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          required
        />
        {errors.birthDate && <div className="error-message">{errors.birthDate}</div>}
      </div>
      <div className="form-field">
        <label htmlFor="password">Hasło:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errors.password && <div className="error-message">{errors.password}</div>}
      </div>
      <div className="form-field">
        <label htmlFor="confirmPassword">Potwierdź hasło:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {errors.confirmPassword && (
          <div className="error-message">{errors.confirmPassword}</div>
        )}
      </div>
      <div className="form-field">
        <input type="submit" value="Zarejestruj się" id="submitBtn" onClick={validateForm} />
      </div>
    </div>
  );
};
export default RegistrationForm;