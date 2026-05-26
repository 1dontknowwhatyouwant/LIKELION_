import { Link } from "react-router";
import { login } from "../api/auth";

function Login() {
  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const id = formData.get("id");
    const password = formData.get("password");

    try {
      await login({ id, password });
      alert("로그인 API 호출 성공");
      return;
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
      alert("로그인 API 호출 실패");
    }
  }

  return (
    <main className="app">
      <section className="box">
        <h1>로그인 API 테스트</h1>

        <form className="form" onSubmit={handleSubmit}>
          <input name="id" placeholder="아이디" required />
          <input
            name="password"
            type="password"
            placeholder="비밀번호"
            required
          />

          <button type="submit">로그인 API 호출</button>
        </form>

        <Link className="text-link" to="/">
          홈으로
        </Link>
      </section>
    </main>
  );
}

export default Login;
