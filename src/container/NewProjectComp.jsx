import React, { useEffect, useState } from "react";
import SplitPane, { Pane } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { abcdef } from "@uiw/codemirror-theme-abcdef";

import { html as htmlLang } from "@codemirror/lang-html";
import { css as cssLang } from "@codemirror/lang-css";
import { AnimatePresence, motion } from "framer-motion";
import { MdCheck, MdEdit } from "react-icons/md";

function NewProjectComp() {
  const [sizes, setSizes] = useState([33.33, 33.33, 33.33]);
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [outPut, setOutPut] = useState("");
  const [isTitle, setIsTitle] = useState(false);
  const [title, setTitle] = useState("Untitled");

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
    <script>${js}</script>
  </body>
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

  // const saveProgram = ()=>{
  //   const id = new Date()
  //   const _doc ={
  //     id: id,
  //     title: title,
  //     html: html,
  //     css: css,
  //     js: js,
  //     outPut: outPut,

  //     await setDoc(doc(db, "Project", id), _doc).then((res)=>{

  //     }).catch((err)=> console.log(err))
  //   }
  // }

  return (
    <div className="w-full">
      <style>{resizerCSS}</style>

      <div className="flex items-center">
        <AnimatePresence>
          {isTitle ? (
            <motion.input
              key="TitleInput"
              type="text"
              placeholder="your title"
              className="px-3 py-2 text-white text-lg bg-black"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          ) : (
            <motion.p
              key="titleLabel"
              className="px-3 py-2 text-lg text-cyan-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {title}
            </motion.p>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isTitle ? (
            <motion.div
              key="MdCheck"
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
              onClick={() => setIsTitle(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <MdCheck size={24} className="text-cyan-500" />
            </motion.div>
          ) : (
            <motion.div
              key="MdEdit"
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
              onClick={() => setIsTitle(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <MdEdit size={24} className="text-cyan-500" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="flex gap-2">
        <div className="flex items-center justify-center px-3 -mt-2 gap-2 ">
          <motion.p
            whileTap={{ scale: 0.9 }}
            className="text-black text-[15px] p-2 rounded-sm cursor-pointer bg-amber-500"
          >
            + follow
          </motion.p>
        </div>
        <div className="flex items-center justify-center px-3 -mt-2 gap-2 ">
          <motion.p
            whileTap={{ scale: 0.9 }}
            className="text-black text-[15px] p-2 rounded-sm cursor-pointer bg-amber-500"
          >
            save
          </motion.p>
        </div>
      </div>
      <div className="h-[50vh] w-[95%] m-auto">
        <SplitPane
          split="vertical"
          sizes={sizes}
          onChange={setSizes}
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
      <div
        className="bg-white m-auto"
        style={{ height: "100%", overflow: "auto" }}
      >
        <iframe title="Result" srcDoc={outPut} className="h-full w-full" />
      </div>
    </div>
  );
}

export default NewProjectComp;
