"use client";

import React from "react";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
  const { register, handleSubmit, formState: {errors}, watch } = useForm();

  const onSubmit = (data) => {
    alert("Formularz został poprawnie wypełniony!");
  };

  const password = React.useRef({});
  password.current = watch("password", "");

  return (
    <div className="form-container">
      <h2>Formularz rejestracji</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", {
              required: "To pole jest wymagane",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Podaj poprawny adres email!",
              },
            })}
          />
          {errors.email && <div className="error-message">{errors.email.message}</div>}
        </div>

        <div className="form-field">
          <label htmlFor="birthDate">Data urodzenia (RRRR-MM-DD):</label>
          <input
            type="text"
            id="birthDate"
            name="birthDate"
            {...register("birthDate", {
              required: "To pole jest wymagane",
              pattern: {
                value: /^\d{4}-\d{2}-\d{2}$/,
                message: "Podaj poprawną datę urodzenia w formacie RRRR-MM-DD!",
              },
            })}
          />
          {errors.birthDate && <div className="error-message">{errors.birthDate.message}</div>}
        </div>

        <div className="form-field">
          <label htmlFor="password">Hasło:</label>
          <input
            type="password"
            id="password"
            name="password"
            {...register("password", {
              required: "To pole jest wymagane",
              minLength: {
                value: 8,
                message: "Hasło powinno zawierać co najmniej 8 znaków!",
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                message:
                  "Hasło powinno zawierać co najmniej 8 znaków, w tym przynajmniej jedną wielką literę i jedną cyfrę!",
              },
            })}
          />
          {errors.password && <div className="error-message">{errors.password.message}</div>}
        </div>

        <div className="form-field">
          <label htmlFor="confirmPassword">Potwierdź hasło:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            {...register("confirmPassword", {
              required: "To pole jest wymagane",
              validate: (value) =>
                value === password.current || "Potwierdzenie hasła nie jest zgodne z wprowadzonym hasłem!",
            })}
          />
          {errors.confirmPassword && (
            <div className="error-message">{errors.confirmPassword.message}</div>
          )}
        </div>
        
        <div className="form-field">
          <input type="submit" value="Zarejestruj się"/>
        </div>
      </form>
    </div>
  );
};


export default RegistrationForm;