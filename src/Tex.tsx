import katex from "katex";
import styled from "styled-components";

const Inline = styled.span`
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
`;

const Block = styled.div`
  overflow-x: auto;
  padding: 10px 12px;
  margin: 10px 0;
  background: #f3eee4;
  border-radius: 8px;

  .katex-display {
    margin: 0;
  }
`;

type TexProps = {
  expr: string;
  block?: boolean;
};

export function Tex({ expr, block = false }: TexProps) {
  let html = "";
  try {
    html = katex.renderToString(expr, {
      throwOnError: false,
      displayMode: block,
      strict: "ignore",
    });
  } catch {
    html = expr;
  }
  if (block) {
    return <Block dangerouslySetInnerHTML={{ __html: html }} />;
  }
  return <Inline dangerouslySetInnerHTML={{ __html: html }} />;
}
