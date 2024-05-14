var F=Object.defineProperty,p=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var i=(u,r,l)=>r in u?F(u,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):u[r]=l,a=(u,r)=>{for(var l in r||(r={}))E.call(r,l)&&i(u,l,r[l]);if(o)for(var l of o(r))v.call(r,l)&&i(u,l,r[l]);return u},h=(u,r)=>p(u,m(r));import{a as n,j as e}from"./main.163abe60.js";import{di as d,ds as t}from"./FloatingPanel.06d5db3f.js";const c=[{label:"\u9009\u9879\u4E00",value:"1"},{label:"\u9009\u9879\u4E8C",value:"2"},{label:"\u9009\u9879\u4E09",value:"3"}];var s=()=>n(d,{layout:"vertical",children:[e(d.Item,{name:"single",label:"\u5355\u9009",children:e(t,{options:c,defaultValue:["1"],onChange:(u,r)=>console.log(u,r.items)})}),e(d.Item,{name:"mulit",label:"\u591A\u9009",children:e(t,{options:c,defaultValue:["2","3"],multiple:!0,onChange:(u,r)=>console.log(u,r.items)})}),e(d.Item,{name:"disabled",label:"\u7981\u7528\u72B6\u6001",children:e(t,{options:[{label:"\u9009\u9879\u4E00",value:"1"},{label:"\u9009\u9879\u4E8C",value:"2",disabled:!0},{label:"\u9009\u9879\u4E09",value:"3"}]})}),e(d.Item,{name:"description",label:"\u63CF\u8FF0\u9009\u9879",children:e(t,{options:[{label:"\u9009\u9879\u4E00",description:"\u63CF\u8FF0\u4FE1\u606F",value:"1"},{label:"\u9009\u9879\u4E8C",description:"\u63CF\u8FF0\u4FE1\u606F",value:"2"}]})}),e(d.Item,{name:"style",label:"\u81EA\u5B9A\u4E49\u6837\u5F0F",children:e(t,{style:{"--rv-selector-border-radius":"100px","--rv-selector-checked-border":"solid var(--adm-color-primary) 1px","--rv-selector-padding":"5px 15px"},showCheckMark:!1,options:c,defaultValue:["1"]})})]});const C=`import React from 'react'
import { Form, Selector } from 'react-vant'
import { options } from './options'

export default () => {
  return (
    <Form layout='vertical'>
      <Form.Item name='single' label='\u5355\u9009'>
        <Selector
          options={options}
          defaultValue={['1']}
          onChange={(arr, extend) => console.log(arr, extend.items)}
        />
      </Form.Item>

      <Form.Item name='mulit' label='\u591A\u9009'>
        <Selector
          options={options}
          defaultValue={['2', '3']}
          multiple={true}
          onChange={(arr, extend) => console.log(arr, extend.items)}
        />
      </Form.Item>

      <Form.Item name='disabled' label='\u7981\u7528\u72B6\u6001'>
        <Selector
          options={[
            {
              label: '\u9009\u9879\u4E00',
              value: '1',
            },
            {
              label: '\u9009\u9879\u4E8C',
              value: '2',
              disabled: true,
            },
            {
              label: '\u9009\u9879\u4E09',
              value: '3',
            },
          ]}
        />
      </Form.Item>
      <Form.Item name='description' label='\u63CF\u8FF0\u9009\u9879'>
        <Selector
          options={[
            {
              label: '\u9009\u9879\u4E00',
              description: '\u63CF\u8FF0\u4FE1\u606F',
              value: '1',
            },
            {
              label: '\u9009\u9879\u4E8C',
              description: '\u63CF\u8FF0\u4FE1\u606F',
              value: '2',
            },
          ]}
        />
      </Form.Item>
      <Form.Item name='style' label='\u81EA\u5B9A\u4E49\u6837\u5F0F'>
        <Selector
          style={{
            '--rv-selector-border-radius': '100px',
            '--rv-selector-checked-border':
              'solid var(--adm-color-primary) 1px',
            '--rv-selector-padding': '5px 15px',
          }}
          showCheckMark={false}
          options={options}
          defaultValue={['1']}
        />
      </Form.Item>
    </Form>
  )
}
`,b={code:C,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.3.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Form, Selector } from 'react-vant'
import { options } from './options'

export default () => {
  return (
    <Form layout='vertical'>
      <Form.Item name='single' label='\u5355\u9009'>
        <Selector
          options={options}
          defaultValue={['1']}
          onChange={(arr, extend) => console.log(arr, extend.items)}
        />
      </Form.Item>

      <Form.Item name='mulit' label='\u591A\u9009'>
        <Selector
          options={options}
          defaultValue={['2', '3']}
          multiple={true}
          onChange={(arr, extend) => console.log(arr, extend.items)}
        />
      </Form.Item>

      <Form.Item name='disabled' label='\u7981\u7528\u72B6\u6001'>
        <Selector
          options={[
            {
              label: '\u9009\u9879\u4E00',
              value: '1',
            },
            {
              label: '\u9009\u9879\u4E8C',
              value: '2',
              disabled: true,
            },
            {
              label: '\u9009\u9879\u4E09',
              value: '3',
            },
          ]}
        />
      </Form.Item>
      <Form.Item name='description' label='\u63CF\u8FF0\u9009\u9879'>
        <Selector
          options={[
            {
              label: '\u9009\u9879\u4E00',
              description: '\u63CF\u8FF0\u4FE1\u606F',
              value: '1',
            },
            {
              label: '\u9009\u9879\u4E8C',
              description: '\u63CF\u8FF0\u4FE1\u606F',
              value: '2',
            },
          ]}
        />
      </Form.Item>
      <Form.Item name='style' label='\u81EA\u5B9A\u4E49\u6837\u5F0F'>
        <Selector
          style={{
            '--rv-selector-border-radius': '100px',
            '--rv-selector-checked-border':
              'solid var(--adm-color-primary) 1px',
            '--rv-selector-padding': '5px 15px',
          }}
          showCheckMark={false}
          options={options}
          defaultValue={['1']}
        />
      </Form.Item>
    </Form>
  )
}
`},"options.tsx":{type:"FILE",value:`export const options = [
  {
    label: '\u9009\u9879\u4E00',
    value: '1',
  },
  {
    label: '\u9009\u9879\u4E8C',
    value: '2',
  },
  {
    label: '\u9009\u9879\u4E09',
    value: '3',
  },
]
`}},key:"selector-base",meta:{}},B=function({previewer:u=()=>null,api:r=()=>null}){const l=u;return e("div",{children:n("div",{children:[e("h1",{id:"selector-\u9009\u62E9\u7EC4","data-anchor":"selector-\u9009\u62E9\u7EC4",children:"Selector \u9009\u62E9\u7EC4"}),e("p",{children:"\u5728\u4E00\u7EC4\u9009\u9879\u4E2D\u9009\u62E9\u4E00\u4E2A\u6216\u591A\u4E2A\u3002"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),e("p",{children:"\u63D0\u4F9B\u591A\u4E2A\u9009\u9879\u4F9B\u7528\u6237\u9009\u62E9\uFF0C\u4E00\u822C\u5728\u7B5B\u9009\u548C\u8868\u5355\u4E2D\u4F7F\u7528\u3002"}),e("div",{children:e(l,h(a({},b),{children:e(s,{})}))}),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"props","data-anchor":"props",children:"Props"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u5C5E\u6027"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u9009\u4E2D\u9879"}),e("td",{children:e("code",{children:"SelectorValue[]"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"defaultValue"}),e("td",{children:"\u9ED8\u8BA4\u9879"}),e("td",{children:e("code",{children:"SelectorValue[]"})}),e("td",{children:e("code",{children:"[]"})})]}),n("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u9009\u9879\u6539\u53D8\u65F6\u89E6\u53D1"}),e("td",{children:n("code",{children:["(value: SelectorValue[], extend: ","{"," items: SelectorOption[] ","}",") => void"]})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u5168\u5C40\u7981\u6B62\u9009\u4E2D"}),e("td",{children:e("code",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),n("tr",{children:[e("td",{children:"multiple"}),e("td",{children:"\u662F\u5426\u5141\u8BB8\u591A\u9009"}),e("td",{children:e("code",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),n("tr",{children:[e("td",{children:"options"}),e("td",{children:"\u53EF\u9009\u9879"}),e("td",{children:e("code",{children:"SelectorOption[]"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"showCheckMark"}),e("td",{children:"\u662F\u5426\u663E\u793A\u5BF9\u52FE\u89D2\u6807"}),e("td",{children:e("code",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]})]})]}),e("h2",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),e("h3",{id:"selectorvalue","data-anchor":"selectorvalue",children:"SelectorValue"}),e(l,{code:"type SelectorValue = string | number;",lang:"ts"}),e("h3",{id:"selectoroption","data-anchor":"selectoroption",children:"SelectorOption"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u5C5E\u6027"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"description"}),e("td",{children:"\u63CF\u8FF0"}),e("td",{children:e("code",{children:"ReactNode"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u7981\u7528"}),e("td",{children:e("code",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),n("tr",{children:[e("td",{children:"label"}),e("td",{children:"\u6587\u5B57"}),e("td",{children:e("code",{children:"ReactNode"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u9009\u9879\u7684\u503C"}),e("td",{children:e("code",{children:"SelectorValue"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"selectorvalue-1","data-anchor":"selectorvalue-1",children:"SelectorValue"}),e(l,{code:"type SelectorValue = string | number;",lang:"ts"}),e("h2",{id:"\u6CDB\u578B","data-anchor":"\u6CDB\u578B",children:"\u6CDB\u578B"}),n("p",{children:[e("code",{children:"Selector"})," \u652F\u6301\u6CDB\u578B\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684\u8FD9\u79CD\u65B9\u5F0F\u624B\u52A8\u63A7\u5236 ",e("code",{children:"value"})," ",e("code",{children:"onChange"})," \u7B49\u5C5E\u6027\u7684\u7C7B\u578B\uFF1A"]}),e(l,{code:`<Selector<'a' | 'b' | number>
  options={options}
  defaultValue={['a']}
  onChange={(arr) => console.log(arr)}
/>`,lang:"tsx"}),e("h3",{id:"selectoroption-1","data-anchor":"selectoroption-1",children:"SelectorOption"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u5C5E\u6027"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"description"}),e("td",{children:"\u63CF\u8FF0"}),e("td",{children:e("code",{children:"ReactNode"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u7981\u7528"}),e("td",{children:e("code",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),n("tr",{children:[e("td",{children:"label"}),e("td",{children:"\u6587\u5B57"}),e("td",{children:e("code",{children:"ReactNode"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u9009\u9879\u7684\u503C"}),e("td",{children:e("code",{children:"SelectorValue"})}),e("td",{children:"-"})]})]})]}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),n("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"--rv-selector-color"}),e("td",{children:"var(--rv-gray-2)"}),e("td",{children:"\u80CC\u666F\u8272"})]}),n("tr",{children:[e("td",{children:"--rv-selector-checked-color"}),e("td",{children:"#efefff"}),e("td",{children:"\u9009\u4E2D\u80CC\u666F\u8272"})]}),n("tr",{children:[e("td",{children:"--rv-selector-text-color"}),e("td",{children:"var(--rv-text-color)"}),e("td",{children:"\u6587\u672C\u8272"})]}),n("tr",{children:[e("td",{children:"--rv-selector-checked-text-color"}),e("td",{children:"var(--rv-primary-color)"}),e("td",{children:"\u9009\u4E2D\u6587\u672C\u8272"})]}),n("tr",{children:[e("td",{children:"--rv-selector-border"}),e("td",{children:"none"}),e("td",{children:"\u8FB9\u6846"})]}),n("tr",{children:[e("td",{children:"--rv-selector-checkedborder"}),e("td",{children:"none"}),e("td",{children:"\u9009\u4E2D\u8FB9\u6846"})]}),n("tr",{children:[e("td",{children:"--rv-selector-border-radius"}),e("td",{children:"var(--rv-border-radius-sm)"}),e("td",{children:"\u5706\u89D2"})]}),n("tr",{children:[e("td",{children:"--rv-selector-padding"}),e("td",{children:"var(--rv-padding-xs) var(--rv-padding-md)"}),e("td",{children:"\u5185\u8FB9\u8DDD"})]}),n("tr",{children:[e("td",{children:"--rv-selector-margin"}),e("td",{children:"0 var(--rv-padding-xs) var(--rv-padding-xs) 0"}),e("td",{children:"\u95F4\u8DDD"})]})]})]})]})})},x=[{Component:s,key:"selector-base"}],A=void 0,D=[{depth:1,text:"Selector \u9009\u62E9\u7EC4",id:"selector-\u9009\u62E9\u7EC4"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:2,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:3,text:"SelectorValue",id:"selectorvalue"},{depth:3,text:"SelectorOption",id:"selectoroption"},{depth:3,text:"SelectorValue",id:"selectorvalue-1"},{depth:2,text:"\u6CDB\u578B",id:"\u6CDB\u578B"},{depth:3,text:"SelectorOption",id:"selectoroption-1"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],f="/src/components/selector/README.md",g="Selector \u9009\u62E9\u7EC4",S="1715680574000";var k=u=>u.children({MdContent:B,demos:x,frontmatter:A,slugs:D,filePath:f,title:g,updatedTime:S});export{B as MdContent,k as default,x as demos,f as filePath,A as frontmatter,D as slugs,g as title,S as updatedTime};
