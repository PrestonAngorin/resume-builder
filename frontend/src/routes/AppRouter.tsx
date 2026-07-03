import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestApi from "D:/portfolio_projects/resume_builder/frontend/src/pages/TestApi.tsx"

<Route path="/test-api" element={<TestApi />} />
function Home() {
  return <h1>Home</h1>;
}

function Login() {
  return <h1>Login</h1>;
}

function Register() {
  return <h1>Register</h1>;
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
		<Route path="/test-api" element={<TestApi />} />
      </Routes>
    </BrowserRouter>
  );
}

