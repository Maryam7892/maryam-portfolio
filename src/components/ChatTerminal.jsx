import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { playSend } from "../utils/sound";

const Screen = styled.div`
  background: #1c1f1a;
  border: 3px solid var(--border);
  border-radius: 12px;
  box-shadow: var(--shadow);
  padding: 1.25rem;
  max-width: 640px;
  margin: 0 auto;
  font-family: var(--font-mono);
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 10px;
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(p) => p.$color};
`;

const TopLabel = styled.span`
  margin-left: 8px;
  font-size: 0.7rem;
  color: #6f8f6f;
`;

const Log = styled.div`
  height: 260px;
  overflow-y: auto;
  font-size: 0.85rem;
  line-height: 1.6;
  margin-bottom: 0.75rem;
  padding-right: 4px;
`;

const Line = styled.div`
  margin-bottom: 0.5rem;
  color: ${(p) => (p.$user ? "#e0a545" : "#8fd98f")};
  white-space: pre-wrap;
  word-break: break-word;
`;

const InputRow = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
  border-top: 1px solid #3a5a3a;
  padding-top: 0.75rem;
`;

const Prompt = styled.span`
  color: #e0a545;
  font-weight: 700;
`;

const Field = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #d9f0d9;
  font-family: var(--font-mono);
  font-size: 0.85rem;

  &::placeholder {
    color: #4d6b4d;
  }
`;

const SendBtn = styled.button`
  background: transparent;
  border: 1.5px solid #4d6b4d;
  color: #8fd98f;
  border-radius: 6px;
  padding: 4px 10px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  cursor: pointer;

  &:hover {
    background: #2a3a2a;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

const INITIAL = [
  {
    role: "assistant",
    content:
      "hi, I'm maryam's portfolio bot. ask me about her projects, skills, experience, education, or how to get in touch.",
  },
];

const ChatTerminal = () => {
  const [messages, setMessages] = useState(INITIAL);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const logRef = useRef(null);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [messages, loading]);

  const send = async (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;
    playSend();
    const next = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });

      const contentType = res.headers.get("content-type") || "";
      if (!contentType.includes("application/json")) {
        // Most common cause: this environment doesn't run the /api serverless
        // function at all (e.g. plain `npm start`), so the request hits CRA's
        // dev server and comes back as an HTML 404 page instead of JSON.
        setMessages([
          ...next,
          {
            role: "assistant",
            content:
              "[dev note] /api/chat isn't reachable here — this needs `vercel dev` or a real Vercel deployment, plain `npm start` doesn't run serverless functions.",
          },
        ]);
        return;
      }

      const data = await res.json();

      if (!res.ok) {
        const knownErrors = {
          server_not_configured:
            "[dev note] GROQ_API_KEY isn't set for this environment. A local .env file only works with `vercel dev` — the deployed site needs the key added in Vercel's dashboard under Settings -> Environment Variables (then redeploy).",
          upstream_error: "having trouble reaching the AI service right now, try again in a moment.",
          method_not_allowed: "[dev note] unexpected request method.",
          no_messages: "[dev note] no message content was sent.",
        };
        setMessages([
          ...next,
          { role: "assistant", content: knownErrors[data.error] || `[dev note] server error (${data.error || res.status}).` },
        ]);
        return;
      }

      setMessages([
        ...next,
        { role: "assistant", content: data.reply || "I can only chat about Maryam's work and experience: try asking about her projects, skills, or background!" },
      ]);
    } catch {
      setMessages([...next, { role: "assistant", content: "…connection lost, try again." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Screen>
      <TopBar>
        <Dot $color="#e35656" />
        <Dot $color="#e0a545" />
        <Dot $color="#8fd98f" />
        <TopLabel>maryam_bot: professional Q&A only</TopLabel>
      </TopBar>
      <Log ref={logRef}>
        {messages.map((m, i) => (
          <Line key={i} $user={m.role === "user"}>
            {m.role === "user" ? "guest> " : "maryam_bot> "}
            {m.content}
          </Line>
        ))}
        {loading && <Line>maryam_bot&gt; …typing</Line>}
      </Log>
      <InputRow onSubmit={send}>
        <Prompt>&gt;</Prompt>
        <Field
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="ask about my work..."
          maxLength={300}
        />
        <SendBtn type="submit" disabled={loading || !input.trim()}>
          send
        </SendBtn>
      </InputRow>
    </Screen>
  );
};

export default ChatTerminal;
