import { useEffect, useState } from "react";
import api from "../api/client";

export default function TestApi() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get("/").then((res) => {
      setMessage(res.data.message);
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold text-green-600">
        Backend says: {message}
      </h1>
    </div>
  );
}