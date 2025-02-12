import {
  Form,
  LoginBox,
  LoginButton,
  LoginContainer,
  LoginError,
  LoginHr,
  LoginId,
  LoginNew,
  LoginPwd,
  LoginSignup,
  LoginText,
} from "./Login.styles";
import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { login } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    setErrorMessage("");

    axios
      .post("http://localhost/members/login", {
        userId: userId,
        userPwd: userPwd,
      })
      .then((response) => {
        console.log(response);
        const { username, tokens } = response.data;
        login(username, tokens.accessToken, tokens.refreshToken);
        window.location = "/";
      })
      .catch((error) => {
        console.log(error);
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("❌ 아이디 혹은 비밀번호가 일치하지 않습니다.");
        }
      });

    /*
    axios
      .post("http://localhost/members/login", {
        userId: userId,
        userPwd: userPwd,
      })
      .then((response) => {
        console.log(response);
        const { username, tokens } = response.data;
        login(username, tokens.accessToken, tokens.refreshToken);
        window.location = "/";
      })
      .catch((error) => {
        console.log(error);
      });
      */
  };

  return (
    <LoginContainer>
      <LoginBox>
        <LoginText>내가기린그린그림</LoginText>
        <Form onSubmit={handleLogin}>
          <LoginId
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            type="text"
            placeholder="사용자명"
          ></LoginId>
          <LoginPwd
            type="password"
            value={userPwd}
            onChange={(e) => setUserPwd(e.target.value)}
            placeholder="비밀번호"
          ></LoginPwd>
          {errorMessage && <LoginError>{errorMessage}</LoginError>}
          <LoginButton type="submit">로그인</LoginButton>
        </Form>
        <LoginHr />
        <LoginNew>도움이 필요하십니까?</LoginNew>
        <LoginSignup href="/members/signup">회원가입</LoginSignup>|
        <LoginSignup href="#">아이디 찾기</LoginSignup>|
        <LoginSignup href="#">비밀번호 찾기</LoginSignup>
      </LoginBox>
    </LoginContainer>
  );
};
export default Login;
