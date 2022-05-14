import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";

function LoginPage() {
  return (
    <LoginPageBg>
      <LoginPageDiv>
        <LoginTitle>Log in to aimée Furnitures</LoginTitle>
        <FormDiv>
          <Form>
            <div>
              <StyledLabel for="userId">Id</StyledLabel>
              <StyledInput
                type="email"
                placeholder="Write Your Id in Email Form"
                id="userId"
              />
            </div>
            <div>
              <StyledLabel for="password">Password</StyledLabel>
              <StyledInput
                type="password"
                placeholder="Write Your Password"
                id="password"
              />
            </div>
            <LogInBtn>Log In</LogInBtn>
          </Form>
        </FormDiv>
        <ToJoin>
          Don't have an account?{" "}
          <StyledLink to="/joinpage">Create One</StyledLink>
        </ToJoin>
        <Hr />
        <SocialLoginLink>
          <KakaoLink href="https://accounts.kakao.com/login?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fis_popup%3Dfalse%26ka%3Dsdk%252F1.41.5%2520os%252Fjavascript%2520sdk_type%252Fjavascript%2520lang%252Fko-KR%2520device%252FMacIntel%2520origin%252Fhttps%25253A%25252F%25252Fnomadcoders.co%26auth_tran_id%3Ds2sl8p6gsqfe13da49cfe7ac1b771c6f0fcfabbf2acl314g2dg%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fnomadcoders.co%252Fkakao%26client_id%3De13da49cfe7ac1b771c6f0fcfabbf2ac&talk_login=hidden">
            <RiKakaoTalkFill />
            Kakao LogIn
          </KakaoLink>
          <GithubLink href="https://github.com/login/oauth/authorize?client_id=01b478c0264a1fbd7183&scope=user:email&redirect_uri=https%3a%2f%2fstackauth.com%2fauth%2foauth2%2fgithub&state=%7b%22sid%22%3a1%2c%22st%22%3a%2259%3a3%3abbc%2c16%3a51eeaeff0ad60729%2c10%3a1652245861%2c16%3a320e9d538f0befbf%2c9eb4e34f274e0293315431e8df2d0e1d8fee8fe666c7975d91b0c29a628dfa64%22%2c%22cid%22%3a%2201b478c0264a1fbd7183%22%2c%22k%22%3a%22GitHub%22%2c%22ses%22%3a%22254cd8f31a694cc59005ed380bbc401a%22%7d&response_type=code">
            <BsGithub />
            Github LogIn
          </GithubLink>
        </SocialLoginLink>
      </LoginPageDiv>
    </LoginPageBg>
  );
}

export default LoginPage;

const LoginPageBg = styled.div`
  background-color: #d7ccc8;
  height: 100vh;
`;

const LoginPageDiv = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const LoginTitle = styled.h1`
  font-weight: bold;
  font-size: 45px;
  font-family: "DM Serif Text", serif;
  margin-top: 0;
`;

const FormDiv = styled.div`
  width: 400px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 5px 5px 15px 1px gray;
  border-radius: 10px;
`;

const Form = styled.form`
  width: 400px;
  height: 250px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
  width: 390px;
  height: 50px;
  padding: 0 5px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 18px;

  &:focus {
    outline: none;
    border-color: #8d6e63;
    box-shadow: 0 0 10px #8d6e63;
  }
`;

const LogInBtn = styled.button`
  width: 400px;
  height: 50px;
  text-align: center;
  background-color: #8d6e63;
  font-size: 18px;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ToJoin = styled.p`
  font-size: 20px;
`;

const StyledLink = styled(Link)`
  all: unset;
  font-weight: bold;
  color: #9c786c;
  cursor: pointer;
`;

const Hr = styled.hr`
  border: none;
  border-top: 2px solid black;
  overflow: visible;
  width: 440px;
  text-align: center;

  &:after {
    content: "Or";
    display: inline-block;
    position: relative;
    background: #d7ccc8;
    padding: 0 10px;
    font-size: 20px;
    top: -14px;
  }
`;

const SocialLoginLink = styled.div`
  display: flex;
  flex-direction: column;
`;

const KakaoLink = styled.a`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 50px;
  text-align: center;
  font-size: 24px;
  background-color: #fee501;
  border-radius: 10px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const GithubLink = styled.a`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 50px;
  text-align: center;
  font-size: 24px;
  color: white;
  background-color: #374151;
  border-radius: 10px;
  cursor: pointer;
`;
