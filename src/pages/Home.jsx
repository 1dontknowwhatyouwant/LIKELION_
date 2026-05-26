import { Link } from "react-router";
import Header from "../components/Header";
import List from "../components/List";
import Box from "../components/Box";
import { topics } from "../data/topics";

function Home() {
  return (
    <main className="app">
      <Header title="React 기초 수업" />

      <Box title="오늘 배울 내용">
        <List items={topics} />
      </Box>

      <Box title="로그인 API 실습">
        <p>로그인 페이지에서 선생님 API를 호출합니다.</p>

        <Link className="link-button" to="/login">
          로그인 페이지로 이동
        </Link>
      </Box>
    </main>
  );
}

export default Home;
