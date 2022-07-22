import{j as u,a as n}from"./main.531c777e.js";const r=function({previewer:e=()=>null,api:h=()=>null}){const t=e;return u("div",{children:n("div",{children:[u("h1",{id:"useformsmart","data-anchor":"useformsmart",children:"useFormSmart"}),u("h3",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),n("p",{children:["\u66F4\u52A0\u8F7B\u677E\u7BA1\u7406",u("code",{children:"Form"}),"\u7EC4\u4EF6,\u63D0\u4F9B\u6570\u636E\u540C\u6B65\u529F\u80FD,\u6BCF\u6B21 value \u53D8\u5316\u90FD\u4F1A\u66F4\u65B0\u8868\u5355"]}),u("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),u("h3",{id:"\u57FA\u672C\u7528\u6CD5","data-anchor":"\u57FA\u672C\u7528\u6CD5",children:"\u57FA\u672C\u7528\u6CD5"}),u("blockquote",{children:u("p",{children:"\u9ED8\u8BA4\u60C5\u51B5 value \u88AB\u8BBE\u7F6E\u503C\u540E\u518D\u6B21\u53D8\u5316\u4E0D\u518D\u91CD\u590D\u8BBE\u7F6E,\u548C Form initialValues \u884C\u4E3A\u4E00\u81F4,\u53EA\u662F\u589E\u52A0\u4E86\u7A7A\u503C\u5224\u5B9A"})}),u(t,{code:`import React from 'react';
import { Field, Form, hooks } from 'react-vant';

function useRequest() {
  const [data, setData] = React.useState({});
  const run = React.useCallback(() => {
    setTimeout(() => {
      setData({
        age: 32,
        name: '\u5F20\u695A\u5C9A',
      });
    }, 2000);
  }, []);

  return [data, run];
}

export default () => {
  const [data, run] = useRequest(); //\u6A21\u62DF\u8BF7\u6C42
  const [ref, { set, get, getAll, clear, submit }] = hooks.useFormSmart({ value: data });
  // \u5F53\u6709\u6570\u636E\u8FD4\u56DE\u4E14\u4E0D\u4E3A\u7A7A\u65F6,\u4F1A\u81EA\u52A8\u8BBE\u7F6E\u8868\u5355
  return (
    <div>
      <Form ref={ref}>
        <Form.Item name="name" label="\u540D\u5B57">
          <Field />
        </Form.Item>
        <Form.Item name="name" label="\u540D\u5B57">
          <Field />
        </Form.Item>
      </Form>
      <button onClick={run}>\u8BF7\u6C42\u6570\u636E</button>
      <button onClick={() => set({ age: 30 })}>\u8BBE\u7F6E\u6570\u636E</button>
      <button onClick={() => get('name')}>\u83B7\u53D6\u6570\u636E</button>
      <button onClick={() => clear()}>\u6E05\u7A7A\u8868\u5355</button>
      <button onClick={() => submit()}>\u63D0\u4EA4\u8868\u5355</button>
      <button onClick={() => getAll()}>\u83B7\u53D6\u8868\u5355\u6570\u636E</button>
    </div>
  );
};`,lang:"jsx"}),u("h3",{id:"\u6570\u636E\u7684\u540C\u6B65","data-anchor":"\u6570\u636E\u7684\u540C\u6B65",children:"\u6570\u636E\u7684\u540C\u6B65"}),u("blockquote",{children:u("p",{children:"\u67D0\u4E9B\u573A\u666F\u4E0B\u9700\u8981\u5C06\u6BCF\u6B21\u53D8\u5316\u7684\u6570\u636E\u90FD\u8BBE\u7F6E\u5230\u8868\u5355\u4E2D,useFormSmart \u63D0\u4F9B\u4E86\u7ED1\u5B9A\u529F\u80FD"})}),u(t,{code:`import React from 'react';
import { Field, Form, hooks } from 'react-vant';

export default () => {
  const [data, run] = useRequest(); //\u6A21\u62DF\u8BF7\u6C42
  const [ref] = hooks.useFormSmart({ value: data, sync: true });
  // \u5F53\u6709\u6570\u636E\u8FD4\u56DE\u4E14\u4E0D\u4E3A\u7A7A\u65F6,\u4F1A\u81EA\u52A8\u8BBE\u7F6E\u8868\u5355
  return (
    <div>
      <Form ref={ref}>
        <Form.Item name="name" label="\u540D\u5B57">
          <Field />
        </Form.Item>
        <Form.Item name="name" label="\u540D\u5B57">
          <Field />
        </Form.Item>
      </Form>
      <button onClick={run}>\u5237\u65B0\u6570\u636E</button>
    </div>
  );
};`,lang:"jsx"}),u("h2",{id:"api","data-anchor":"api",children:"API"}),u("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),u(t,{code:`export type FormOption = {
  /**
   * initialValues
   */
  value?: Record<string, unknown>;
  /**
   * sync
   */
  sync?: boolean;
};
export type FormMethod = {
  set: (values: unknown) => void;
  get: (name: string) => unknown;
  submit: () => void;
  getAll: () => Record<string, unknown>;
  clear: () => void;
};

function useFormSmart(options?: FormOption): [ref, FormMethod];`,lang:"ts"}),u("h3",{id:"\u53C2\u6570","data-anchor":"\u53C2\u6570",children:"\u53C2\u6570"}),n("table",{children:[u("thead",{children:n("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:[n("tr",{children:[u("td",{children:"value"}),u("td",{children:"\u9700\u8981\u8BBE\u7F6E\u5230\u8868\u5355\u7684\u503C"}),u("td",{children:u("em",{children:"object"})}),u("td",{children:"-"})]}),n("tr",{children:[u("td",{children:"sync"}),u("td",{children:"\u5F00\u542F value \u540C\u6B65\u6A21\u5F0F,\u6BCF\u6B21 value \u53D8\u5316\u90FD\u4F1A\u8BBE\u7F6E\u8868\u5355"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]})]})]}),u("h3",{id:"\u8FD4\u56DE\u503C","data-anchor":"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),n("table",{children:[u("thead",{children:n("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"})]})}),n("tbody",{children:[n("tr",{children:[u("td",{children:"ref"}),u("td",{children:"ref \u5F15\u7528,\u5FC5\u987B\u5C06\u5176\u6302\u8F7D\u5728 Form \u4E0A"}),u("td",{children:u("em",{children:"Ref"})})]}),n("tr",{children:[u("td",{children:"set"}),u("td",{children:"\u8BBE\u7F6E\u8868\u5355\u503C"}),u("td",{children:u("em",{children:"(object) => void"})})]}),n("tr",{children:[u("td",{children:"get"}),n("td",{children:["\u83B7\u53D6\u6307\u5B9A",u("code",{children:"name"}),"\u8868\u5355\u503C"]}),u("td",{children:u("em",{children:"(name) => unknown"})})]}),n("tr",{children:[u("td",{children:"clear"}),u("td",{children:"\u91CD\u7F6E\u8868\u5355"}),u("td",{children:u("em",{children:"() => void"})})]}),n("tr",{children:[u("td",{children:"getAll"}),u("td",{children:"\u83B7\u53D6\u6240\u6709\u8868\u5355\u503C"}),u("td",{children:u("em",{children:"() => object"})})]}),n("tr",{children:[u("td",{children:"submit"}),u("td",{children:"\u63D0\u4EA4\u8868\u5355"}),u("td",{children:u("em",{children:"() => void"})})]})]})]})]})})},d=[],i=void 0,o=[{depth:1,text:"useFormSmart",id:"useformsmart"},{depth:3,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u672C\u7528\u6CD5",id:"\u57FA\u672C\u7528\u6CD5"},{depth:3,text:"\u6570\u636E\u7684\u540C\u6B65",id:"\u6570\u636E\u7684\u540C\u6B65"},{depth:2,text:"API",id:"api"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:3,text:"\u53C2\u6570",id:"\u53C2\u6570"},{depth:3,text:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C"}],l="/docs/hooks/use-form-smart.md",c="useFormSmart",a="1658500653000";var F=e=>e.children({MdContent:r,demos:d,frontmatter:i,slugs:o,filePath:l,title:c,updatedTime:a});export{r as MdContent,F as default,d as demos,l as filePath,i as frontmatter,o as slugs,c as title,a as updatedTime};
