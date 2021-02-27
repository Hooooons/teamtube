import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase from "../../../firebase";
import md5 from "md5";

const MainContainer = styled.div`
  .auth-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
  }

  .auth-wrapper form {
    width: 375px;
    margin: 0 auto;
  }

  .auth-wrapper h1 {
    font-weight: 100;
    color: white;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(79, 98, 148);
  }

  .auth-wrapper .form {
    background: #0e101c;
    max-width: 400px;
    margin: 0 auto;
  }

  .auth-wrapper p {
    color: #bf1650;
  }

  .auth-wrapper p::before {
    display: inline;
    content: "⚠ ";
  }

  .auth-wrapper input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid black;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
  }

  .auth-wrapper label {
    line-height: 2;
    text-align: left;
    display: block;
    margin: 5px 0;

    font-size: 14px;
    font-weight: 200;
  }

  .auth-wrapper button[type="submit"],
  .auth-wrapper input[type="submit"] {
    background: #7a84eb;
    color: white;
    text-transform: uppercase;
    border: none;
    margin-top: 40px;
    padding: 20px;
    font-size: 16px;
    font-weight: 100;
    letter-spacing: 10px;
  }

  .auth-wrapper button[type="submit"]:hover,
  .auth-wrapper input[type="submit"]:hover {
    background: #636ee6;
  }

  .auth-wrapper button[type="submit"]:active,
  .auth-wrapper input[type="button"]:active,
  .auth-wrapper input[type="submit"]:active {
    transition: 0.3s all;
    transform: translateY(3px);
    border: 1px solid transparent;
    opacity: 0.8;
  }

  .auth-wrapper input:disabled {
    opacity: 0.4;
  }

  .auth-wrapper input[type="button"]:hover {
    transition: 0.3s all;
  }

  .auth-wrapper button[type="submit"],
  .auth-wrapper input[type="button"],
  .auth-wrapper input[type="submit"] {
    -webkit-appearance: none;
  }

  .auth-wrapper button[type="button"] {
    display: block;
    appearance: none;
    background: #333;
    color: white;
    border: none;
    text-transform: uppercase;
    padding: 10px 20px;
    border-radius: 4px;
  }

  .auth-wrapper hr {
    margin-top: 30px;
  }

  .auth-wrapper button {
    display: block;
    appearance: none;
    margin-top: 40px;
    border: 1px solid #333;
    margin-bottom: 20px;
    text-transform: uppercase;
    padding: 10px 20px;
    border-radius: 4px;
  }
`;

function RegisterPage() {
  const { register, watch, errors, handleSubmit } = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);

  const password = useRef();
  password.current = watch("password");

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      let createdUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password);

      await createdUser.user.updateProfile({
        displayName: data.name,
        photoURL: `http://gravatar.com/avatar/${md5(
          createdUser.user.email
        )}?d=identicon`,
      });

      //firebase 데이터베이스에 저장해주기
      await firebase.database().ref("users").child(createdUser.user.uid).set({
        email_Id: createdUser.user.email,
        name: createdUser.user.displayName,
        image: createdUser.user.photoURL,
      });

      setLoading(false);
    } catch (error) {
      setErrorFromSubmit(error.message);
      setLoading(false);
      setTimeout(() => {
        setErrorFromSubmit("");
      }, 5000);
    }
  };

  return (
    <MainContainer>
      <div className="auth-wrapper">
        <div style={{ textAlign: "center" }}>
          <h3>Register</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <input
            name="email"
            type="email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <p>This email field is required</p>}

          <label>Name</label>
          <input
            name="name"
            ref={register({ required: true, maxLength: 10 })}
          />
          {errors.name && errors.name.type === "required" && (
            <p>This name field is required</p>
          )}
          {errors.name && errors.name.type === "maxLength" && (
            <p>Your input exceed maximum length</p>
          )}

          <label>Password</label>
          <input
            name="password"
            type="password"
            ref={register({ required: true, minLength: 6 })}
          />
          {errors.password && errors.password.type === "required" && (
            <p>This password field is required</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p>Password must have at least 6 characters</p>
          )}

          <label>Password Confirm</label>
          <input
            name="password_confirm"
            type="password"
            ref={register({
              required: true,
              validate: (value) => value === password.current,
            })}
          />
          {errors.password_confirm &&
            errors.password_confirm.type === "required" && (
              <p>This password confirm field is required</p>
            )}
          {errors.password_confirm &&
            errors.password_confirm.type === "validate" && (
              <p>The passwords do not match</p>
            )}

          {errorFromSubmit && <p>{errorFromSubmit}</p>}

          <input type="submit" disabled={loading} />
          <Link style={{ color: "gray", textDecoration: "none" }} to="/login">
            이미 아이디가 있다면..
          </Link>
        </form>
      </div>
    </MainContainer>
  );
}

export default RegisterPage;
