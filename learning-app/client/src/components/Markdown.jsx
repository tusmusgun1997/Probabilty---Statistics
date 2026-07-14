import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";

// Code blocks render as a dark "editor" with a filename bar and a Copy button,
// per the design. Language comes from the fence (```python → python.py vibe).
// highlight.js wraps tokens in nested spans — walk the tree to get plain text
function textOf(node) {
  if (node == null || node === false) return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  return textOf(node.props?.children);
}

function CodeBlock({ children, ...props }) {
  const [copied, setCopied] = useState(false);

  // children is the <code> element; dig out its text + language class
  const code = textOf(children);
  const lang = /language-(\w+)/.exec(children?.props?.className || "")?.[1];
  const fname = lang === "python" || lang === "py" ? "simulation.py" : lang || "code";

  const copy = () => {
    navigator.clipboard?.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="codeblock">
      <div className="codeblock-head">
        <span className="fname">{fname}</span>
        <button className="copy" onClick={copy}>
          {copied ? "Copied ✓" : "Copy"}
        </button>
      </div>
      <pre {...props}>{children}</pre>
    </div>
  );
}

// One shared Markdown renderer for every lesson body and question.
// - remark-gfm    → tables, task lists, strikethrough
// - remark-math + rehype-katex → $inline$ and $$block$$ LaTeX
// - rehype-highlight → syntax-highlighted code fences
export default function Markdown({ children }) {
  return (
    <div className="md">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeHighlight]}
        components={{ pre: CodeBlock }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
