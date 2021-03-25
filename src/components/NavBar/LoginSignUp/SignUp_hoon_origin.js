import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase from "../../../firebase";
import md5 from "md5";

// import { useSelector } from "react-redux";

const MainLocation = styled.div`
  /* padding-top: 4rem;
  height: 100vw;
  button {
    cursor: pointer;
  } */

  .auth-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    /* height: 90vh; */
    justify-content: center;
  }

  .auth-wrapper form {
    width: 375px;
    margin: 0 auto;
  }

  /* .auth-wrapper h1 {
    font-weight: 100;
    color: white;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(79, 98, 148);
  } */

  .auth-wrapper .form {
    background: #0e101c;
    max-width: 400px;
    margin: 0 auto;
  }

  .auth-wrapper p {
    color: #bf1650;
    margin: 0;
    display: flex;
    align-items: center;
  }

  .auth-wrapper p::before {
    display: inline;
    content: "⚠ ";
    margin-left: 0.5rem;
  }

  .auth-wrapper input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid black;
    padding: 10px 15px;
    margin-bottom: 1rem;
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
    /* background: #7a84eb; */
    background: #ff0f17;
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
    /* background: #636ee6; */
    background: #d11717;
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

  /* .auth-wrapper hr {
    margin-top: 30px;
  } */

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

function SignUp() {
  const { register, watch, errors, handleSubmit } = useForm({
    // {mode: 'onChange'}를 빼면 submit후에 경고가 뜸
    mode: "onChange",
  });
  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);

  const password = useRef();
  password.current = watch("password");

  const onSubmit = (data) => {
    console.log("data", data);

    // let createdUser = await firebase.auth().createUserWithEmailAndPassword()
  };

  // const onSubmit = async (data) => {
  //   // console.log("data", data);

  //   try {
  //     //유저생성
  //     setLoading(true);
  //     let createdUser = await firebase
  //       .auth()
  //       .createUserWithEmailAndPassword(data.email, data.password);

  //     console.log("createdUser", createdUser);

  //     await createdUser.user.updateProfile({
  //       displayName: data.name,
  //       photoURL: `http://gravatar.com/avatar/${md5(
  //         createdUser.user.email
  //       )}?d=identicon`,
  //     });

  //     //firebase 데이터베이스에 저장해주기
  //     await firebase.database().ref("users").child(createdUser.user.uid).set({
  //       name: createdUser.user.displayName,
  //       image: createdUser.user.photoURL,
  //     });

  //     setLoading(false);
  //   } catch (error) {
  //     setErrorFromSubmit(error.message);
  //     setLoading(false);
  //     setTimeout(() => {
  //       setErrorFromSubmit("");
  //     }, 10000);
  //   }
  // };

  // const user = useSelector((state) => state.user.currentUser);

  // if (user) {
  //   return (
  //     <div
  //       style={{
  //         fontSize: "1.5rem",
  //         paddingTop: "5rem",
  //         paddingBottom: "1rem",
  //         marginLeft: "1rem",
  //       }}
  //     >
  //       이미 로그인 된 상태입니다
  //     </div>
  //   );
  // } else {
  return (
    <MainLocation>
      <div className="auth-wrapper">
        <div style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "1.5rem" }}>회원가입</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: "flex" }}>
            <label>Email</label>
            {errors.email && <p>이메일 양식을 지켜서 입력해 주세요</p>}
          </div>
          <input
            autoFocus
            name="email"
            type="email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />

          <div style={{ display: "flex" }}>
            <label>이름</label>
            {errors.name && errors.name.type === "required" && (
              <p>이름을 입력해 주세요</p>
            )}
            {errors.name && errors.name.type === "maxLength" && (
              <p>최대 글자수를 초과했습니다</p>
            )}
          </div>
          <input
            name="name"
            ref={register({ required: true, maxLength: 12 })}
          />

          <div style={{ display: "flex" }}>
            <label>비밀번호</label>
            {errors.password && errors.password.type === "required" && (
              <p>비밀번호를 입력해 주세요</p>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <p>비밀번호를 6자 이상 작성해주세요</p>
            )}
          </div>
          <input
            name="password"
            type="password"
            ref={register({ required: true, minLength: 6 })}
          />

          <div style={{ display: "flex" }}>
            <label>비밀번호 확인</label>
            {errors.password_confirm &&
              errors.password_confirm.type === "required" && (
                <p>비밀번호를 입력해주세요</p>
              )}
            {errors.password_confirm &&
              errors.password_confirm.type === "validate" && (
                <p>비밀번호가 동일하지 않습니다</p>
              )}
          </div>
          <input
            name="password_confirm"
            type="password"
            ref={register({
              required: true,
              validate: (value) => value === password.current,
            })}
          />

          <div style={{ display: "flex" }}>
            <label>휴대전화</label>
            {errors.phone && errors.phone.type === "required" && (
              <p>핸드폰 번호를 입력해 주세요</p>
            )}
            {errors.phone && errors.phone.type === "maxLength" && (
              <p>핸드폰 번호의 길이가 초과되었습니다</p>
            )}
          </div>
          <input
            name="phone"
            ref={register({
              required: true,
              maxLength: 11,
              pattern: /^01(?:0|1|[6-9])[0-9]{4}[0-9]{4}$/,
            })}
          />

          {errorFromSubmit && <p>{errorFromSubmit}</p>}
          <input type="submit" disabled={loading} />
          <Link style={{ color: "gray", textDecoration: "none" }} to="login">
            이미 아이디가 있다면 로그인 하기
          </Link>
        </form>
      </div>
    </MainLocation>
  );
  // }
}

export default SignUp;
