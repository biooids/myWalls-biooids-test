import React, { useEffect, useState } from "react";
import SplitPane, { Pane } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { abcdef } from "@uiw/codemirror-theme-abcdef";

import { html as htmlLang } from "@codemirror/lang-html";
import { css as cssLang } from "@codemirror/lang-css";

function NewProjectComp() {
  const [sizes, setSizes] = useState([33.33, 33.33, 33.33]);
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [outPut, setOutPut] = useState("");

  const updateOutPut = () => {
    const combinedOutPut = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="" />
    <title>Document</title>
    <style>${css}</style>
  </head>

    <body>
    ${html} 
    </body>

    <script>
    ${js}
    </script>
</html>
    `;
    setOutPut(combinedOutPut);
  };

  const layoutCSS = {
    height: "100%",
    justifyContent: "center",
  };

  const resizerCSS = `
    .custom-resizer {
      background: #FFBF00;
      width: 20px; /* Increase this value to make the resizer wider */
      cursor: col-resize;
    }
  `;

  useEffect(() => {
    updateOutPut();
  }, [html, css, js]);

  return (
    <div>
      <style>{resizerCSS}</style>
      <p className="p-5 border-2 border-cyan-500 text-cyan-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum officiis
        mollitia consequuntur ratione nihil omnis voluptas deserunt! Minus,
        voluptatum veritatis itaque quisquam ipsa recusandae, maiores quae
        dolore illo non error.
      </p>
      <div className="h-[50vh] w-[95%] m-auto">
        <SplitPane
          split="vertical"
          sizes={sizes}
          onChange={setSizes}
          resizerClassName="custom-resizer"
          style={{
            background: "#f0f0f0",
            borderLeft: "10px solid #FFBF00",
          }}
          className="grid grid-cols-3"
        >
          <Pane minSize="10%">
            <div
              className="bg-slate-950 relative border-amber-500"
              style={{ ...layoutCSS, overflow: "auto" }}
            >
              <div className="absolute top-0 left-0 m-1">
                html{" "}
                <span className="p-1 bg-slate-500 cursor-pointer">
                  &#11167;
                </span>
              </div>
              <div className="w-full h-full text-wrap">
                <CodeMirror
                  value={html}
                  height="100%"
                  extensions={[htmlLang()]}
                  theme={abcdef}
                  onChange={(value, viewUpdate) => setHtml(value)}
                  options={{ lineWrapping: true }} // Enable line wrapping
                />
              </div>
            </div>
          </Pane>
          <Pane minSize="10%">
            <div
              className="bg-slate-950 relative"
              style={{ ...layoutCSS, overflow: "auto" }}
            >
              <div className="absolute top-0 left-0 p-3 m-1 border-amber-500 ">
                css{" "}
                <span className="p-1 bg-slate-500 cursor-pointer">
                  &#11167;
                </span>
              </div>
              <div className="w-full h-full  ">
                <CodeMirror
                  value={css}
                  height="100%"
                  extensions={[cssLang()]}
                  theme={abcdef}
                  onChange={(value, viewUpdate) => setCss(value)}
                  options={{ lineWrapping: true }} // Enable line wrapping
                />
              </div>
            </div>
          </Pane>
          <Pane minSize="10%">
            <div
              className="bg-slate-950 relative"
              style={{ ...layoutCSS, overflow: "auto" }}
            >
              <div className="absolute top-0 left-0 p-3 m-1 border-amber-500 ">
                js{" "}
                <span className="p-1 bg-slate-500 cursor-pointer">
                  &#11167;
                </span>
              </div>
              <div className="w-full h-full ">
                <CodeMirror
                  value={js}
                  height="100%"
                  extensions={[javascript({ jsx: true })]}
                  theme={abcdef}
                  onChange={(value, viewUpdate) => setJs(value)}
                  options={{ lineWrapping: true }} // Enable line wrapping
                />
              </div>
            </div>
          </Pane>
        </SplitPane>
      </div>
      <div className="bg-white  m-auto">
        <iframe title="Result" srcDoc={outPut} className="h-full w-full" />
      </div>
    </div>
  );
}

export default NewProjectComp;
