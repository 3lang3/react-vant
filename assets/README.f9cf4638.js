var A=Object.defineProperty,v=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var C=(t,n,l)=>n in t?A(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l,i=(t,n)=>{for(var l in n||(n={}))x.call(n,l)&&C(t,l,n[l]);if(F)for(var l of F(n))k.call(n,l)&&C(t,l,n[l]);return t},a=(t,n)=>v(t,B(n));import{a as u,F as h,j as e}from"./main.cc295cd4.js";import{C as d,i as r,d9 as b}from"./index.c79ab82b.js";import{h as o}from"./index.416454ea.js";const s=t=>`${t.getMonth()+1}/${t.getDate()}`;var m=()=>{const[t,n]=o.useSetState({single:!1,singleText:"",multi:!1,multiText:"",between:!1,betweenText:""});return u(h,{children:[e(d,{title:"\u9009\u62E9\u5355\u4E2A\u65E5\u671F",value:t.singleText,isLink:!0,onClick:()=>n({single:!0})}),e(r,{visible:t.single,onClose:()=>n({single:!1}),onConfirm:l=>{n({single:!1,singleText:s(l)})}}),e(d,{title:"\u9009\u62E9\u591A\u4E2A\u65E5\u671F",value:t.multiText,isLink:!0,onClick:()=>n({multi:!0})}),e(r,{visible:t.multi,type:"multiple",onClose:()=>n({multi:!1}),onConfirm:l=>{n({multi:!1,multiText:`\u9009\u62E9\u4E86 ${l.length} \u4E2A\u65E5\u671F`})}}),e(d,{title:"\u9009\u62E9\u65E5\u671F\u533A\u95F4",value:t.betweenText,isLink:!0,onClick:()=>n({between:!0})}),e(r,{visible:t.between,type:"range",onClose:()=>n({between:!1}),onConfirm:l=>{n({between:!1,betweenText:`${s(l[0])} - ${s(l[1])}`})}})]})};const y=`import React from 'react';
import { hooks, Calendar, Cell } from 'react-vant';

const formatDate = (date) => \`\${date.getMonth() + 1}/\${date.getDate()}\`;

export default () => {
  const [state, set] = hooks.useSetState({
    single: false,
    singleText: '',
    multi: false,
    multiText: '',
    between: false,
    betweenText: '',
  });

  return (
    <>
      <Cell
        title="\u9009\u62E9\u5355\u4E2A\u65E5\u671F"
        value={state.singleText}
        isLink
        onClick={() => set({ single: true })}
      />
      <Calendar
        visible={state.single}
        onClose={() => set({ single: false })}
        onConfirm={(v) => {
          set({ single: false, singleText: formatDate(v) });
        }}
      />

      <Cell
        title="\u9009\u62E9\u591A\u4E2A\u65E5\u671F"
        value={state.multiText}
        isLink
        onClick={() => set({ multi: true })}
      />
      <Calendar
        visible={state.multi}
        type="multiple"
        onClose={() => set({ multi: false })}
        onConfirm={(v: any[]) => {
          set({ multi: false, multiText: \`\u9009\u62E9\u4E86 \${v.length} \u4E2A\u65E5\u671F\` });
        }}
      />

      <Cell
        title="\u9009\u62E9\u65E5\u671F\u533A\u95F4"
        value={state.betweenText}
        isLink
        onClick={() => set({ between: true })}
      />
      <Calendar
        visible={state.between}
        type="range"
        onClose={() => set({ between: false })}
        onConfirm={(v) => {
          set({ between: false, betweenText: \`\${formatDate(v[0])} - \${formatDate(v[1])}\` });
        }}
      />
    </>
  );
};
`,T={code:y,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { hooks, Calendar, Cell } from 'react-vant';

const formatDate = (date) => \`\${date.getMonth() + 1}/\${date.getDate()}\`;

export default () => {
  const [state, set] = hooks.useSetState({
    single: false,
    singleText: '',
    multi: false,
    multiText: '',
    between: false,
    betweenText: '',
  });

  return (
    <>
      <Cell
        title="\u9009\u62E9\u5355\u4E2A\u65E5\u671F"
        value={state.singleText}
        isLink
        onClick={() => set({ single: true })}
      />
      <Calendar
        visible={state.single}
        onClose={() => set({ single: false })}
        onConfirm={(v) => {
          set({ single: false, singleText: formatDate(v) });
        }}
      />

      <Cell
        title="\u9009\u62E9\u591A\u4E2A\u65E5\u671F"
        value={state.multiText}
        isLink
        onClick={() => set({ multi: true })}
      />
      <Calendar
        visible={state.multi}
        type="multiple"
        onClose={() => set({ multi: false })}
        onConfirm={(v: any[]) => {
          set({ multi: false, multiText: \`\u9009\u62E9\u4E86 \${v.length} \u4E2A\u65E5\u671F\` });
        }}
      />

      <Cell
        title="\u9009\u62E9\u65E5\u671F\u533A\u95F4"
        value={state.betweenText}
        isLink
        onClick={() => set({ between: true })}
      />
      <Calendar
        visible={state.between}
        type="range"
        onClose={() => set({ between: false })}
        onConfirm={(v) => {
          set({ between: false, betweenText: \`\${formatDate(v[0])} - \${formatDate(v[1])}\` });
        }}
      />
    </>
  );
};
`}},key:"calendar-base",meta:{title:"\u9009\u62E9\u5355\u4E2A\u65E5\u671F"}},w=t=>`${t.getMonth()+1}/${t.getDate()}`;var f=()=>{const[t,n]=o.useSetState({single:!1,singleText:"",multi:!1,multiText:""});return u(h,{children:[e(d,{title:"\u9009\u62E9\u5355\u4E2A\u65E5\u671F",value:t.singleText,isLink:!0,onClick:()=>n({single:!0})}),e(r,{showConfirm:!1,visible:t.single,onClose:()=>n({single:!1}),onConfirm:l=>{n({single:!1,singleText:w(l)})}}),e(d,{title:"\u9009\u62E9\u65E5\u671F\u533A\u95F4",value:t.multiText,isLink:!0,onClick:()=>n({multi:!0})}),e(r,{showConfirm:!1,visible:t.multi,type:"range",onClose:()=>n({multi:!1}),onConfirm:l=>{n({multi:!1,multiText:`\u9009\u62E9\u4E86 ${l.length} \u4E2A\u65E5\u671F`})}})]})};const $=`import React from 'react';
import { hooks, Calendar, Cell } from 'react-vant';

const formatDate = (date) => \`\${date.getMonth() + 1}/\${date.getDate()}\`;

export default () => {
  const [state, set] = hooks.useSetState({
    single: false,
    singleText: '',
    multi: false,
    multiText: '',
  });

  return (
    <>
      <Cell
        title="\u9009\u62E9\u5355\u4E2A\u65E5\u671F"
        value={state.singleText}
        isLink
        onClick={() => set({ single: true })}
      />
      <Calendar
        showConfirm={false}
        visible={state.single}
        onClose={() => set({ single: false })}
        onConfirm={(v) => {
          set({ single: false, singleText: formatDate(v) });
        }}
      />

      <Cell
        title="\u9009\u62E9\u65E5\u671F\u533A\u95F4"
        value={state.multiText}
        isLink
        onClick={() => set({ multi: true })}
      />
      <Calendar
        showConfirm={false}
        visible={state.multi}
        type="range"
        onClose={() => set({ multi: false })}
        onConfirm={(v: any[]) => {
          set({ multi: false, multiText: \`\u9009\u62E9\u4E86 \${v.length} \u4E2A\u65E5\u671F\` });
        }}
      />
    </>
  );
};
`,M={code:$,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { hooks, Calendar, Cell } from 'react-vant';

const formatDate = (date) => \`\${date.getMonth() + 1}/\${date.getDate()}\`;

export default () => {
  const [state, set] = hooks.useSetState({
    single: false,
    singleText: '',
    multi: false,
    multiText: '',
  });

  return (
    <>
      <Cell
        title="\u9009\u62E9\u5355\u4E2A\u65E5\u671F"
        value={state.singleText}
        isLink
        onClick={() => set({ single: true })}
      />
      <Calendar
        showConfirm={false}
        visible={state.single}
        onClose={() => set({ single: false })}
        onConfirm={(v) => {
          set({ single: false, singleText: formatDate(v) });
        }}
      />

      <Cell
        title="\u9009\u62E9\u65E5\u671F\u533A\u95F4"
        value={state.multiText}
        isLink
        onClick={() => set({ multi: true })}
      />
      <Calendar
        showConfirm={false}
        visible={state.multi}
        type="range"
        onClose={() => set({ multi: false })}
        onConfirm={(v: any[]) => {
          set({ multi: false, multiText: \`\u9009\u62E9\u4E86 \${v.length} \u4E2A\u65E5\u671F\` });
        }}
      />
    </>
  );
};
`}},key:"calendar-quick",meta:{title:"\u5FEB\u6377\u9009\u62E9"}},c=t=>`${t.getMonth()+1}/${t.getDate()}`,R=t=>{const n=t.date.getMonth()+1,l=t.date.getDate();return n===5&&(l===1?t.topInfo="\u52B3\u52A8\u8282":l===4?t.topInfo="\u9752\u5E74\u8282":l===11&&(t.text="\u4ECA\u5929")),t.type==="start"?t.bottomInfo="\u5165\u4F4F":t.type==="end"&&(t.bottomInfo="\u79BB\u5E97"),t};var g=()=>{const[t,n]=o.useSetState({single:!1,singleText:"",multi:!1,multiText:"",range:!1,rangeText:"",title:!1,titleText:""});return u(h,{children:[e(d,{title:"\u81EA\u5B9A\u4E49\u989C\u8272",value:t.singleText,isLink:!0,onClick:()=>n({single:!0})}),e(r,{color:"#1989fa",type:"range",visible:t.single,onClose:()=>n({single:!1}),onConfirm:l=>{n({single:!1,singleText:c(l)})}}),e(d,{title:"\u81EA\u5B9A\u4E49\u65E5\u671F\u8303\u56F4",value:t.multiText,isLink:!0,onClick:()=>n({multi:!0})}),e(r,{minDate:new Date(2010,0,1),maxDate:new Date(2010,0,31),visible:t.multi,type:"multiple",onClose:()=>n({multi:!1}),onConfirm:l=>{n({multi:!1,multiText:`\u9009\u62E9\u4E86 ${l.length} \u4E2A\u65E5\u671F`})}}),e(d,{title:"\u81EA\u5B9A\u4E49\u65E5\u671F\u6587\u6848",value:t.rangeText,isLink:!0,onClick:()=>n({range:!0})}),e(r,{type:"range",minDate:new Date(2010,4,1),maxDate:new Date(2010,4,31),formatter:R,onClose:()=>n({range:!1}),onConfirm:l=>{n({range:!1,rangeText:`${c(l[0])} - ${c(l[1])}`})}}),e(d,{title:"\u81EA\u5B9A\u4E49\u5468/\u6708\u6587\u6848",value:t.titleText,isLink:!0,onClick:()=>n({title:!0})}),e(r,{formatMonthTitle:l=>`${l.getFullYear()}\u{1F951}${l.getMonth()+1}\u{1F36A}`,weekdays:["\u{1F315}","\u{1F316}","\u{1F317}","\u{1F318}","\u{1F311}","\u{1F312}","\u{1F313}"],visible:t.title,onClose:()=>n({title:!1}),onConfirm:l=>{n({title:!1,titleText:c(l)})}})]})};const P=`import React from 'react';
import { hooks, Calendar, Cell } from 'react-vant';

const formatDate = (date) => \`\${date.getMonth() + 1}/\${date.getDate()}\`;

const formatter = (day) => {
  const month = day.date.getMonth() + 1;
  const date = day.date.getDate();

  if (month === 5) {
    if (date === 1) {
      day.topInfo = '\u52B3\u52A8\u8282';
    } else if (date === 4) {
      day.topInfo = '\u9752\u5E74\u8282';
    } else if (date === 11) {
      day.text = '\u4ECA\u5929';
    }
  }

  if (day.type === 'start') {
    day.bottomInfo = '\u5165\u4F4F';
  } else if (day.type === 'end') {
    day.bottomInfo = '\u79BB\u5E97';
  }

  return day;
};

export default () => {
  const [state, set] = hooks.useSetState({
    single: false,
    singleText: '',
    multi: false,
    multiText: '',
    range: false,
    rangeText: '',
    title: false,
    titleText: '',
  });

  return (
    <>
      <Cell
        title="\u81EA\u5B9A\u4E49\u989C\u8272"
        value={state.singleText}
        isLink
        onClick={() => set({ single: true })}
      />
      <Calendar
        color="#1989fa"
        type="range"
        visible={state.single}
        onClose={() => set({ single: false })}
        onConfirm={(v) => {
          set({ single: false, singleText: formatDate(v) });
        }}
      />

      <Cell
        title="\u81EA\u5B9A\u4E49\u65E5\u671F\u8303\u56F4"
        value={state.multiText}
        isLink
        onClick={() => set({ multi: true })}
      />
      <Calendar
        minDate={new Date(2010, 0, 1)}
        maxDate={new Date(2010, 0, 31)}
        visible={state.multi}
        type="multiple"
        onClose={() => set({ multi: false })}
        onConfirm={(v: any[]) => {
          set({ multi: false, multiText: \`\u9009\u62E9\u4E86 \${v.length} \u4E2A\u65E5\u671F\` });
        }}
      />

      <Cell
        title="\u81EA\u5B9A\u4E49\u65E5\u671F\u6587\u6848"
        value={state.rangeText}
        isLink
        onClick={() => set({ range: true })}
      />
      <Calendar
        type="range"
        minDate={new Date(2010, 4, 1)}
        maxDate={new Date(2010, 4, 31)}
        formatter={formatter}
        onClose={() => set({ range: false })}
        onConfirm={(v) => {
          set({ range: false, rangeText: \`\${formatDate(v[0])} - \${formatDate(v[1])}\` });
        }}
      />

      <Cell
        title="\u81EA\u5B9A\u4E49\u5468/\u6708\u6587\u6848"
        value={state.titleText}
        isLink
        onClick={() => set({ title: true })}
      />
      <Calendar
        formatMonthTitle={(date) => \`\${date.getFullYear()}\u{1F951}\${date.getMonth() + 1}\u{1F36A}\`}
        weekdays={['\u{1F315}', '\u{1F316}', '\u{1F317}', '\u{1F318}', '\u{1F311}', '\u{1F312}', '\u{1F313}']}
        visible={state.title}
        onClose={() => set({ title: false })}
        onConfirm={(v) => {
          set({ title: false, titleText: formatDate(v) });
        }}
      />
    </>
  );
};
`,L={code:P,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { hooks, Calendar, Cell } from 'react-vant';

const formatDate = (date) => \`\${date.getMonth() + 1}/\${date.getDate()}\`;

const formatter = (day) => {
  const month = day.date.getMonth() + 1;
  const date = day.date.getDate();

  if (month === 5) {
    if (date === 1) {
      day.topInfo = '\u52B3\u52A8\u8282';
    } else if (date === 4) {
      day.topInfo = '\u9752\u5E74\u8282';
    } else if (date === 11) {
      day.text = '\u4ECA\u5929';
    }
  }

  if (day.type === 'start') {
    day.bottomInfo = '\u5165\u4F4F';
  } else if (day.type === 'end') {
    day.bottomInfo = '\u79BB\u5E97';
  }

  return day;
};

export default () => {
  const [state, set] = hooks.useSetState({
    single: false,
    singleText: '',
    multi: false,
    multiText: '',
    range: false,
    rangeText: '',
    title: false,
    titleText: '',
  });

  return (
    <>
      <Cell
        title="\u81EA\u5B9A\u4E49\u989C\u8272"
        value={state.singleText}
        isLink
        onClick={() => set({ single: true })}
      />
      <Calendar
        color="#1989fa"
        type="range"
        visible={state.single}
        onClose={() => set({ single: false })}
        onConfirm={(v) => {
          set({ single: false, singleText: formatDate(v) });
        }}
      />

      <Cell
        title="\u81EA\u5B9A\u4E49\u65E5\u671F\u8303\u56F4"
        value={state.multiText}
        isLink
        onClick={() => set({ multi: true })}
      />
      <Calendar
        minDate={new Date(2010, 0, 1)}
        maxDate={new Date(2010, 0, 31)}
        visible={state.multi}
        type="multiple"
        onClose={() => set({ multi: false })}
        onConfirm={(v: any[]) => {
          set({ multi: false, multiText: \`\u9009\u62E9\u4E86 \${v.length} \u4E2A\u65E5\u671F\` });
        }}
      />

      <Cell
        title="\u81EA\u5B9A\u4E49\u65E5\u671F\u6587\u6848"
        value={state.rangeText}
        isLink
        onClick={() => set({ range: true })}
      />
      <Calendar
        type="range"
        minDate={new Date(2010, 4, 1)}
        maxDate={new Date(2010, 4, 31)}
        formatter={formatter}
        onClose={() => set({ range: false })}
        onConfirm={(v) => {
          set({ range: false, rangeText: \`\${formatDate(v[0])} - \${formatDate(v[1])}\` });
        }}
      />

      <Cell
        title="\u81EA\u5B9A\u4E49\u5468/\u6708\u6587\u6848"
        value={state.titleText}
        isLink
        onClick={() => set({ title: true })}
      />
      <Calendar
        formatMonthTitle={(date) => \`\${date.getFullYear()}\u{1F951}\${date.getMonth() + 1}\u{1F36A}\`}
        weekdays={['\u{1F315}', '\u{1F316}', '\u{1F317}', '\u{1F318}', '\u{1F311}', '\u{1F312}', '\u{1F313}']}
        visible={state.title}
        onClose={() => set({ title: false })}
        onConfirm={(v) => {
          set({ title: false, titleText: formatDate(v) });
        }}
      />
    </>
  );
};
`}},key:"calendar-custom",meta:{title:"\u81EA\u5B9A\u4E49"}},E=t=>`${t.getMonth()+1}/${t.getDate()}`;var p=()=>{const[t,n]=o.useSetState({week:!1,weekText:"",range:!1,rangeText:""});return u(h,{children:[e(d,{title:"\u65E5\u671F\u533A\u95F4\u6700\u5927\u8303\u56F4",value:t.rangeText,isLink:!0,onClick:()=>n({range:!0})}),e(r,{type:"range",maxRange:3,visible:t.range,onClose:()=>n({range:!1}),onConfirm:l=>{n({range:!1,rangeText:`${E(l[0])} - ${E(l[1])}`})}}),e(d,{title:"\u81EA\u5B9A\u4E49\u5468\u8D77\u59CB\u65E5",value:t.weekText,isLink:!0,onClick:()=>n({week:!0})}),e(r,{firstDayOfWeek:1,visible:t.week,onClose:()=>n({week:!1}),onConfirm:l=>{n({week:!1,weekText:E(l)})}})]})};const S=`import React from 'react';
import { hooks, Calendar, Cell } from 'react-vant';

const formatDate = (date) => \`\${date.getMonth() + 1}/\${date.getDate()}\`;

export default () => {
  const [state, set] = hooks.useSetState({
    week: false,
    weekText: '',
    range: false,
    rangeText: '',
  });

  return (
    <>
      <Cell
        title="\u65E5\u671F\u533A\u95F4\u6700\u5927\u8303\u56F4"
        value={state.rangeText}
        isLink
        onClick={() => set({ range: true })}
      />
      <Calendar
        type="range"
        maxRange={3}
        visible={state.range}
        onClose={() => set({ range: false })}
        onConfirm={(v) => {
          set({ range: false, rangeText: \`\${formatDate(v[0])} - \${formatDate(v[1])}\` });
        }}
      />

      <Cell
        title="\u81EA\u5B9A\u4E49\u5468\u8D77\u59CB\u65E5"
        value={state.weekText}
        isLink
        onClick={() => set({ week: true })}
      />
      <Calendar
        firstDayOfWeek={1}
        visible={state.week}
        onClose={() => set({ week: false })}
        onConfirm={(v) => {
          set({ week: false, weekText: formatDate(v) });
        }}
      />
    </>
  );
};
`,_={code:S,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { hooks, Calendar, Cell } from 'react-vant';

const formatDate = (date) => \`\${date.getMonth() + 1}/\${date.getDate()}\`;

export default () => {
  const [state, set] = hooks.useSetState({
    week: false,
    weekText: '',
    range: false,
    rangeText: '',
  });

  return (
    <>
      <Cell
        title="\u65E5\u671F\u533A\u95F4\u6700\u5927\u8303\u56F4"
        value={state.rangeText}
        isLink
        onClick={() => set({ range: true })}
      />
      <Calendar
        type="range"
        maxRange={3}
        visible={state.range}
        onClose={() => set({ range: false })}
        onConfirm={(v) => {
          set({ range: false, rangeText: \`\${formatDate(v[0])} - \${formatDate(v[1])}\` });
        }}
      />

      <Cell
        title="\u81EA\u5B9A\u4E49\u5468\u8D77\u59CB\u65E5"
        value={state.weekText}
        isLink
        onClick={() => set({ week: true })}
      />
      <Calendar
        firstDayOfWeek={1}
        visible={state.week}
        onClose={() => set({ week: false })}
        onConfirm={(v) => {
          set({ week: false, weekText: formatDate(v) });
        }}
      />
    </>
  );
};
`}},key:"calendar-range",meta:{title:"\u65E5\u671F\u8303\u56F4"}},I=t=>`${t.getMonth()+1}/${t.getDate()}`;var D=()=>e(r,{style:{height:500},showConfirm:!1,poppable:!1,onConfirm:t=>{b.info(I(t))}});const N=`import React from 'react';
import { Toast, Calendar } from 'react-vant';

const formatDate = (date) => \`\${date.getMonth() + 1}/\${date.getDate()}\`;

export default () => {
  return (
    <Calendar
      style={{ height: 500 }}
      showConfirm={false}
      poppable={false}
      onConfirm={(v) => {
        Toast.info(formatDate(v));
      }}
    />
  );
};
`,z={code:N,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Toast, Calendar } from 'react-vant';

const formatDate = (date) => \`\${date.getMonth() + 1}/\${date.getDate()}\`;

export default () => {
  return (
    <Calendar
      style={{ height: 500 }}
      showConfirm={false}
      poppable={false}
      onConfirm={(v) => {
        Toast.info(formatDate(v));
      }}
    />
  );
};
`}},key:"calendar-poppable",meta:{title:"\u5E73\u94FA\u5C55\u793A"}},O=function({previewer:t=()=>null,api:n=()=>null}){const l=t;return e("div",{children:u("div",{children:[e("h1",{id:"calendar-\u65E5\u5386","data-anchor":"calendar-\u65E5\u5386",children:"Calendar \u65E5\u5386"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u65E5\u5386\u7EC4\u4EF6\u7528\u4E8E\u9009\u62E9\u65E5\u671F\u6216\u65E5\u671F\u533A\u95F4\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(l,{code:"import { Calendar } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u4F7F\u7528","data-anchor":"\u57FA\u7840\u4F7F\u7528",children:"\u57FA\u7840\u4F7F\u7528"}),u("p",{children:["\u4E0B\u9762\u6F14\u793A\u4E86\u7ED3\u5408\u5355\u5143\u683C\u6765\u4F7F\u7528\u65E5\u5386\u7EC4\u4EF6\u7684\u7528\u6CD5\uFF0C\u65E5\u671F\u9009\u62E9\u5B8C\u6210\u540E\u4F1A\u89E6\u53D1 ",e("code",{children:"onConfirm"})," \u4E8B\u4EF6\u3002"]}),e(l,a(i({},T),{children:e(m,{})})),e("blockquote",{children:e("p",{children:"Tips: \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u65E5\u671F\u533A\u95F4\u7684\u8D77\u6B62\u65F6\u95F4\u4E0D\u80FD\u4E3A\u540C\u4E00\u5929\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E allowSameDay \u5C5E\u6027\u6765\u5141\u8BB8\u9009\u62E9\u540C\u4E00\u5929\u3002"})}),e("h3",{id:"\u5FEB\u6377\u9009\u62E9","data-anchor":"\u5FEB\u6377\u9009\u62E9",children:"\u5FEB\u6377\u9009\u62E9"}),u("p",{children:["\u5C06 ",e("code",{children:"showConfirm"})," \u8BBE\u7F6E\u4E3A ",e("code",{children:"false"})," \u53EF\u4EE5\u9690\u85CF\u786E\u8BA4\u6309\u94AE\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\u9009\u62E9\u5B8C\u6210\u540E\u4F1A\u7ACB\u5373\u89E6\u53D1 ",e("code",{children:"onConfirm"})," \u4E8B\u4EF6\u3002"]}),e(l,a(i({},M),{children:e(f,{})})),e("h3",{id:"\u81EA\u5B9A\u4E49\u65E5\u5386","data-anchor":"\u81EA\u5B9A\u4E49\u65E5\u5386",children:"\u81EA\u5B9A\u4E49\u65E5\u5386"}),u("ul",{children:[u("li",{children:["\u901A\u8FC7 ",e("code",{children:"color"})," \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u65E5\u5386\u7684\u989C\u8272\uFF0C\u5BF9\u9009\u4E2D\u65E5\u671F\u548C\u5E95\u90E8\u6309\u94AE\u751F\u6548"]}),u("li",{children:["\u901A\u8FC7 ",e("code",{children:"minDate"})," \u548C ",e("code",{children:"maxDate"})," \u5B9A\u4E49\u65E5\u5386\u7684\u8303\u56F4"]}),u("li",{children:["\u901A\u8FC7\u4F20\u5165 ",e("code",{children:"formatter"})," \u51FD\u6570\u6765\u5BF9\u65E5\u5386\u4E0A\u6BCF\u4E00\u683C\u7684\u5185\u5BB9\u8FDB\u884C\u683C\u5F0F\u5316"]}),e("li",{children:"\u901A\u8FC7 weekdays \u5C5E\u6027\u53EF\u4EE5\u5B9E\u73B0\u5468\u6807\u9898\u81EA\u5B9A\u4E49\uFF0C\u901A\u8FC7 formatMonthTitle \u51FD\u6570\u53EF\u4EE5\u5B9E\u73B0\u6708\u6807\u9898\u81EA\u5B9A\u4E49"})]}),e(l,a(i({},L),{children:e(g,{})})),e("h3",{id:"\u65E5\u671F\u8303\u56F4","data-anchor":"\u65E5\u671F\u8303\u56F4",children:"\u65E5\u671F\u8303\u56F4"}),u("ul",{children:[u("li",{children:["\u9009\u62E9\u65E5\u671F\u533A\u95F4\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"maxRange"})," \u5C5E\u6027\u6765\u6307\u5B9A\u6700\u591A\u53EF\u9009\u5929\u6570\uFF0C\u9009\u62E9\u7684\u8303\u56F4\u8D85\u8FC7\u6700\u591A\u53EF\u9009\u5929\u6570\u65F6\uFF0C\u4F1A\u5F39\u51FA\u76F8\u5E94\u7684\u63D0\u793A\u6587\u6848"]}),u("li",{children:["\u901A\u8FC7 ",e("code",{children:"firstDayOfWeek"})," \u5C5E\u6027\u8BBE\u7F6E\u4E00\u5468\u4ECE\u54EA\u5929\u5F00\u59CB"]})]}),e(l,a(i({},_),{children:e(p,{})})),e("h3",{id:"\u5E73\u94FA\u5C55\u793A","data-anchor":"\u5E73\u94FA\u5C55\u793A",children:"\u5E73\u94FA\u5C55\u793A"}),u("p",{children:["\u5C06 ",e("code",{children:"poppable"})," \u8BBE\u7F6E\u4E3A ",e("code",{children:"false"}),"\uFF0C\u65E5\u5386\u4F1A\u76F4\u63A5\u5C55\u793A\u5728\u9875\u9762\u5185\uFF0C\u800C\u4E0D\u662F\u4EE5\u5F39\u5C42\u7684\u5F62\u5F0F\u51FA\u73B0\u3002"]}),e(l,a(i({},z),{children:e(D,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"props","data-anchor":"props",children:"Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"type"}),u("td",{children:["\u9009\u62E9\u7C7B\u578B:",e("br",{}),e("code",{children:"single"})," \u8868\u793A\u9009\u62E9\u5355\u4E2A\u65E5\u671F\uFF0C",e("br",{}),e("code",{children:"multiple"})," \u8868\u793A\u9009\u62E9\u591A\u4E2A\u65E5\u671F\uFF0C",e("br",{}),e("code",{children:"range"})," \u8868\u793A\u9009\u62E9\u65E5\u671F\u533A\u95F4"]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"single"})})]}),u("tr",{children:[e("td",{children:"title"}),e("td",{children:"\u65E5\u5386\u6807\u9898"}),e("td",{children:e("em",{children:"string|React.ReactNode"})}),e("td",{children:e("code",{children:"\u65E5\u671F\u9009\u62E9"})})]}),u("tr",{children:[e("td",{children:"subtitle"}),e("td",{children:"\u81EA\u5B9A\u4E49\u65E5\u5386\u526F\u6807\u9898"}),e("td",{children:e("em",{children:"string|React.ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"weekdays"}),e("td",{children:"\u81EA\u5B9A\u4E49\u661F\u671F\u6587\u6848"}),e("td",{children:e("em",{children:"React.ReactNode[]"})}),e("td",{children:e("code",{children:"['\u65E5', '\u4E00', '\u4E8C', '\u4E09', '\u56DB', '\u4E94', '\u516D']"})})]}),u("tr",{children:[e("td",{children:"formatMonthTitle"}),e("td",{children:"\u81EA\u5B9A\u4E49\u6708\u6807\u9898"}),e("td",{children:e("em",{children:"(date: Date) => React.ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"footer"}),e("td",{children:"\u81EA\u5B9A\u4E49\u5E95\u90E8\u533A\u57DF\u5185\u5BB9"}),e("td",{children:e("em",{children:"string|React.ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"topInfoRender"}),e("td",{children:"\u81EA\u5B9A\u4E49\u65E5\u671F\u4E0A\u65B9\u7684\u63D0\u793A\u4FE1\u606F"}),e("td",{children:e("em",{children:"(day: Day) => React.ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"bottomInfoRender"}),e("td",{children:"\u81EA\u5B9A\u4E49\u65E5\u671F\u4E0B\u65B9\u7684\u63D0\u793A\u4FE1\u606F"}),e("td",{children:e("em",{children:"(day: Day) => React.ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"color"}),e("td",{children:"\u4E3B\u9898\u8272\uFF0C\u5BF9\u5E95\u90E8\u6309\u94AE\u548C\u9009\u4E2D\u65E5\u671F\u751F\u6548"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#ee0a24"})})]}),u("tr",{children:[e("td",{children:"minDate"}),e("td",{children:"\u53EF\u9009\u62E9\u7684\u6700\u5C0F\u65E5\u671F"}),e("td",{children:e("em",{children:"Date"})}),e("td",{children:"\u5F53\u524D\u65E5\u671F"})]}),u("tr",{children:[e("td",{children:"maxDate"}),e("td",{children:"\u53EF\u9009\u62E9\u7684\u6700\u5927\u65E5\u671F"}),e("td",{children:e("em",{children:"Date"})}),e("td",{children:"\u5F53\u524D\u65E5\u671F\u7684\u516D\u4E2A\u6708\u540E"})]}),u("tr",{children:[e("td",{children:"defaultDate"}),u("td",{children:["\u9ED8\u8BA4\u9009\u4E2D\u7684\u65E5\u671F\uFF0C",e("code",{children:"type"})," \u4E3A ",e("code",{children:"multiple"})," \u6216 ",e("code",{children:"range"})," \u65F6\u4E3A\u6570\u7EC4\uFF0C\u4F20\u5165 ",e("code",{children:"null"})," \u8868\u793A\u9ED8\u8BA4\u4E0D\u9009\u62E9"]}),e("td",{children:e("em",{children:"Date | Date[] | null"})}),e("td",{children:"\u4ECA\u5929"})]}),u("tr",{children:[e("td",{children:"rowHeight"}),e("td",{children:"\u65E5\u671F\u884C\u9AD8"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"64"})})]}),u("tr",{children:[e("td",{children:"formatter"}),e("td",{children:"\u65E5\u671F\u683C\u5F0F\u5316\u51FD\u6570"}),e("td",{children:e("em",{children:"(day: Day) => Day"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"poppable"}),e("td",{children:"\u662F\u5426\u4EE5\u5F39\u5C42\u7684\u5F62\u5F0F\u5C55\u793A\u65E5\u5386"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"lazyRender"}),e("td",{children:"\u662F\u5426\u53EA\u6E32\u67D3\u53EF\u89C6\u533A\u57DF\u7684\u5185\u5BB9"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"showMark"}),e("td",{children:"\u662F\u5426\u663E\u793A\u6708\u4EFD\u80CC\u666F\u6C34\u5370"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"showTitle"}),e("td",{children:"\u662F\u5426\u5C55\u793A\u65E5\u5386\u6807\u9898"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"showSubtitle"}),e("td",{children:"\u662F\u5426\u5C55\u793A\u65E5\u5386\u526F\u6807\u9898\uFF08\u5E74\u6708\uFF09"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"showConfirm"}),e("td",{children:"\u662F\u5426\u5C55\u793A\u786E\u8BA4\u6309\u94AE"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"readonly"}),e("td",{children:"\u662F\u5426\u4E3A\u53EA\u8BFB\u72B6\u6001\uFF0C\u53EA\u8BFB\u72B6\u6001\u4E0B\u4E0D\u80FD\u9009\u62E9\u65E5\u671F"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"confirmText"}),e("td",{children:"\u786E\u8BA4\u6309\u94AE\u7684\u6587\u5B57"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"\u786E\u5B9A"})})]}),u("tr",{children:[e("td",{children:"confirmDisabledText"}),e("td",{children:"\u786E\u8BA4\u6309\u94AE\u5904\u4E8E\u7981\u7528\u72B6\u6001\u65F6\u7684\u6587\u5B57"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"\u786E\u5B9A"})})]}),u("tr",{children:[e("td",{children:"firstDayOfWeek"}),e("td",{children:"\u8BBE\u7F6E\u5468\u8D77\u59CB\u65E5"}),e("td",{children:e("em",{children:"0-6"})}),e("td",{children:e("code",{children:"0"})})]}),u("tr",{children:[e("td",{children:"firstDayOfWeek"}),e("td",{children:"\u8BBE\u7F6E\u5468\u8D77\u59CB\u65E5"}),e("td",{children:e("em",{children:"0-6"})}),e("td",{children:e("code",{children:"0"})})]})]})]}),e("h3",{id:"calendar-poppable-props","data-anchor":"calendar-poppable-props",children:"Calendar Poppable Props"}),u("p",{children:["\u5F53 Calendar \u7684 ",e("code",{children:"poppable"})," \u4E3A ",e("code",{children:"true"})," \u65F6\uFF0C\u652F\u6301\u4EE5\u4E0B props:"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"visible"}),e("td",{children:"\u662F\u5426\u663E\u793A\u65E5\u5386\u5F39\u7A97"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"position"}),u("td",{children:["\u5F39\u51FA\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"top"})," ",e("code",{children:"right"})," ",e("code",{children:"left"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"bottom"})})]}),u("tr",{children:[e("td",{children:"round"}),e("td",{children:"\u662F\u5426\u663E\u793A\u5706\u89D2\u5F39\u7A97"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"closeOnPopstate"}),e("td",{children:"\u662F\u5426\u5728\u9875\u9762\u56DE\u9000\u65F6\u81EA\u52A8\u5173\u95ED"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"closeOnClickOverlay"}),e("td",{children:"\u662F\u5426\u5728\u70B9\u51FB\u906E\u7F69\u5C42\u540E\u5173\u95ED"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"safeAreaInsetBottom"}),u("td",{children:["\u662F\u5426\u5F00\u542F",e("a",{href:"#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei",children:"\u5E95\u90E8\u5B89\u5168\u533A\u9002\u914D"})]}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]})]})]}),e("h3",{id:"calendar-range-props","data-anchor":"calendar-range-props",children:"Calendar Range Props"}),u("p",{children:["\u5F53 Calendar \u7684 ",e("code",{children:"type"})," \u4E3A ",e("code",{children:"range"})," \u65F6\uFF0C\u652F\u6301\u4EE5\u4E0B props:"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"maxRange"}),e("td",{children:"\u65E5\u671F\u533A\u95F4\u6700\u591A\u53EF\u9009\u5929\u6570"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"\u65E0\u9650\u5236"})]}),u("tr",{children:[e("td",{children:"rangePrompt"}),e("td",{children:"\u8303\u56F4\u9009\u62E9\u8D85\u8FC7\u6700\u591A\u53EF\u9009\u5929\u6570\u65F6\u7684\u63D0\u793A\u6587\u6848"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"\u9009\u62E9\u5929\u6570\u4E0D\u80FD\u8D85\u8FC7 xx \u5929"})})]}),u("tr",{children:[e("td",{children:"showRangePrompt"}),e("td",{children:"\u8303\u56F4\u9009\u62E9\u8D85\u8FC7\u6700\u591A\u53EF\u9009\u5929\u6570\u65F6\uFF0C\u662F\u5426\u5C55\u793A\u63D0\u793A\u6587\u6848"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"allowSameDay"}),e("td",{children:"\u662F\u5426\u5141\u8BB8\u65E5\u671F\u8303\u56F4\u7684\u8D77\u6B62\u65F6\u95F4\u4E3A\u540C\u4E00\u5929"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]})]})]}),e("h3",{id:"calendar-multiple-props","data-anchor":"calendar-multiple-props",children:"Calendar Multiple Props"}),u("p",{children:["\u5F53 Calendar \u7684 ",e("code",{children:"type"})," \u4E3A ",e("code",{children:"multiple"})," \u65F6\uFF0C\u652F\u6301\u4EE5\u4E0B props:"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"max-Range"}),e("td",{children:"\u65E5\u671F\u6700\u591A\u53EF\u9009\u5929\u6570"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"\u65E0\u9650\u5236"})]}),u("tr",{children:[e("td",{children:"rangePrompt"}),e("td",{children:"\u9009\u62E9\u8D85\u8FC7\u6700\u591A\u53EF\u9009\u5929\u6570\u65F6\u7684\u63D0\u793A\u6587\u6848"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"\u9009\u62E9\u5929\u6570\u4E0D\u80FD\u8D85\u8FC7 xx \u5929"})})]})]})]}),e("h3",{id:"day-\u6570\u636E\u7ED3\u6784","data-anchor":"day-\u6570\u636E\u7ED3\u6784",children:"Day \u6570\u636E\u7ED3\u6784"}),u("p",{children:["\u65E5\u5386\u4E2D\u7684\u6BCF\u4E2A\u65E5\u671F\u90FD\u5BF9\u5E94\u4E00\u4E2A Day \u5BF9\u8C61\uFF0C\u901A\u8FC7",e("code",{children:"formatter"}),"\u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49 Day \u5BF9\u8C61\u7684\u5185\u5BB9"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u952E\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"date"}),e("td",{children:"\u65E5\u671F\u5BF9\u5E94\u7684 Date \u5BF9\u8C61"}),e("td",{children:e("em",{children:"Date"})})]}),u("tr",{children:[e("td",{children:"type"}),u("td",{children:["\u65E5\u671F\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"selected"}),"\u3001",e("code",{children:"start"}),"\u3001",e("code",{children:"middle"}),"\u3001",e("code",{children:"end"}),"\u3001",e("code",{children:"disabled"})]}),e("td",{children:e("em",{children:"string"})})]}),u("tr",{children:[e("td",{children:"text"}),e("td",{children:"\u4E2D\u95F4\u663E\u793A\u7684\u6587\u5B57"}),e("td",{children:e("em",{children:"string"})})]}),u("tr",{children:[e("td",{children:"topInfo"}),e("td",{children:"\u4E0A\u65B9\u7684\u63D0\u793A\u4FE1\u606F"}),e("td",{children:e("em",{children:"string"})})]}),u("tr",{children:[e("td",{children:"bottomInfo"}),e("td",{children:"\u4E0B\u65B9\u7684\u63D0\u793A\u4FE1\u606F"}),e("td",{children:e("em",{children:"string"})})]}),u("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u989D\u5916\u7C7B\u540D"}),e("td",{children:e("em",{children:"string"})})]})]})]}),e("h3",{id:"events","data-anchor":"events",children:"Events"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"onSelect"}),e("td",{children:"\u70B9\u51FB\u5E76\u9009\u4E2D\u4EFB\u610F\u65E5\u671F\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"value: Date | Date[]"})})]}),u("tr",{children:[e("td",{children:"onConfirm"}),u("td",{children:["\u65E5\u671F\u9009\u62E9\u5B8C\u6210\u540E\u89E6\u53D1\uFF0C\u82E5 ",e("code",{children:"showConfirm"})," \u4E3A ",e("code",{children:"true"}),"\uFF0C\u5219\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u540E\u89E6\u53D1"]}),e("td",{children:e("em",{children:"value: Date | Date[]"})})]}),u("tr",{children:[e("td",{children:"onClose"}),e("td",{children:"\u5173\u95ED\u5F39\u51FA\u5C42\u65F6\u89E6\u53D1"}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"onClosed"}),e("td",{children:"\u5173\u95ED\u5F39\u51FA\u5C42\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1"}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"onUnselect"}),u("td",{children:["\u5F53\u65E5\u5386\u7EC4\u4EF6\u7684 ",e("code",{children:"type"})," \u4E3A ",e("code",{children:"multiple"})," \u65F6\uFF0C\u53D6\u6D88\u9009\u4E2D\u65E5\u671F\u65F6\u89E6\u53D1"]}),e("td",{children:e("em",{children:"value: Date"})})]}),u("tr",{children:[e("td",{children:"onMonthShow"}),e("td",{children:"\u5F53\u67D0\u4E2A\u6708\u4EFD\u8FDB\u5165\u53EF\u89C6\u533A\u57DF\u65F6\u89E6\u53D1"}),e("td",{children:u("em",{children:["{"," date: Date, title: string ","}"]})})]}),u("tr",{children:[e("td",{children:"onOverRange"}),e("td",{children:"\u8303\u56F4\u9009\u62E9\u8D85\u8FC7\u6700\u591A\u53EF\u9009\u5929\u6570\u65F6\u89E6\u53D1"}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"onClickSubtitle"}),e("td",{children:"\u70B9\u51FB\u65E5\u5386\u526F\u6807\u9898\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]})]})]}),e("h3",{id:"\u65B9\u6CD5","data-anchor":"\u65B9\u6CD5",children:"\u65B9\u6CD5"}),e("p",{children:"\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 Calendar \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\u3002"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u65B9\u6CD5\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8FD4\u56DE\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"reset"}),e("td",{children:"\u5C06\u9009\u4E2D\u7684\u65E5\u671F\u91CD\u7F6E\u5230\u6307\u5B9A\u65E5\u671F\uFF0C\u672A\u4F20\u53C2\u65F6\u4F1A\u91CD\u7F6E\u5230\u9ED8\u8BA4\u65E5\u671F"}),e("td",{children:e("em",{children:"date?: Date | Date[]"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"scrollToDate"}),e("td",{children:"\u6EDA\u52A8\u5230\u67D0\u4E2A\u65E5\u671F"}),e("td",{children:e("em",{children:"date: Date"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"CalendarInstance"})," \u83B7\u53D6 Calendar \u5B9E\u4F8B\u7684\u7C7B\u578B\u5B9A\u4E49\uFF08\u4ECE 3.2.0 \u7248\u672C\u5F00\u59CB\u652F\u6301\uFF09\u3002"]}),e(l,{code:`import { useRef } from 'react';
import type { CalendarInstance } from 'react-vant';

const calendarRef = ref<CalendarInstance>();

calendarRef.value?.reset();`,lang:"js"}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),u("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"#/zh-CN/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"--rv-calendar-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-calendar-popup-height"}),e("td",{children:e("em",{children:"80%"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-calendar-header-box-shadow"}),e("td",{children:e("em",{children:"0 2px 10px rgba(125, 126, 128, 0.16)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-calendar-header-title-height"}),e("td",{children:e("em",{children:"44px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-calendar-header-title-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-lg)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-calendar-header-subtitle-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-calendar-weekdays-height"}),e("td",{children:e("em",{children:"30px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-calendar-weekdays-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-calendar-month-title-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-calendar-month-mark-color"}),e("td",{children:e("em",{children:"fade(var(--rv-gray-2), 80%)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-calendar-month-mark-font-size"}),e("td",{children:e("em",{children:"160px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-calendar-day-height"}),e("td",{children:e("em",{children:"64px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-calendar-day-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-lg)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-calendar-range-edge-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-calendar-range-edge-background-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-calendar-range-middle-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-calendar-range-middle-background-opacity"}),e("td",{children:e("em",{children:"0.1"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-calendar-selected-day-size"}),e("td",{children:e("em",{children:"54px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-calendar-selected-day-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-calendar-info-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-xs)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-calendar-info-line-height"}),e("td",{children:e("em",{children:"var(--rv-line-height-xs)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-calendar-selected-day-background-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-calendar-day-disabled-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-calendar-confirm-button-height"}),e("td",{children:e("em",{children:"36px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-calendar-confirm-button-margin"}),e("td",{children:e("em",{children:"7px 0"})}),e("td",{children:"-"})]})]})]}),e("h2",{id:"\u5E38\u89C1\u95EE\u9898","data-anchor":"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),e("h3",{id:"\u5728-ios-\u7CFB\u7EDF\u4E0A\u521D\u59CB\u5316\u7EC4\u4EF6\u5931\u8D25","data-anchor":"\u5728-ios-\u7CFB\u7EDF\u4E0A\u521D\u59CB\u5316\u7EC4\u4EF6\u5931\u8D25",children:"\u5728 iOS \u7CFB\u7EDF\u4E0A\u521D\u59CB\u5316\u7EC4\u4EF6\u5931\u8D25\uFF1F"}),u("p",{children:["\u5982\u679C\u4F60\u9047\u5230\u4E86\u5728 iOS \u4E0A\u65E0\u6CD5\u6E32\u67D3\u7EC4\u4EF6\u7684\u95EE\u9898\uFF0C\u8BF7\u786E\u8BA4\u5728\u521B\u5EFA Date \u5BF9\u8C61\u65F6\u6CA1\u6709\u4F7F\u7528",e("code",{children:"new Date('2020-01-01')"}),"\u8FD9\u6837\u7684\u5199\u6CD5\uFF0CiOS \u4E0D\u652F\u6301\u4EE5\u4E2D\u5212\u7EBF\u5206\u9694\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u6B63\u786E\u5199\u6CD5\u662F",e("code",{children:"new Date('2020/01/01')"}),"\u3002"]}),u("p",{children:["\u5BF9\u6B64\u95EE\u9898\u7684\u8BE6\u7EC6\u89E3\u91CA\uFF1A",e("a",{href:"https://stackoverflow.com/questions/13363673/javascript-date-is-invalid-on-ios",children:"stackoverflow"}),"\u3002"]})]})})},j=[{Component:m,key:"calendar-base",title:"\u9009\u62E9\u5355\u4E2A\u65E5\u671F"},{Component:f,key:"calendar-quick",title:"\u5FEB\u6377\u9009\u62E9"},{Component:g,key:"calendar-custom",title:"\u81EA\u5B9A\u4E49"},{Component:p,key:"calendar-range",title:"\u65E5\u671F\u8303\u56F4"},{Component:D,key:"calendar-poppable",title:"\u5E73\u94FA\u5C55\u793A"}],q=void 0,W=[{depth:1,text:"Calendar \u65E5\u5386",id:"calendar-\u65E5\u5386"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u4F7F\u7528",id:"\u57FA\u7840\u4F7F\u7528"},{depth:3,text:"\u5FEB\u6377\u9009\u62E9",id:"\u5FEB\u6377\u9009\u62E9"},{depth:3,text:"\u81EA\u5B9A\u4E49\u65E5\u5386",id:"\u81EA\u5B9A\u4E49\u65E5\u5386"},{depth:3,text:"\u65E5\u671F\u8303\u56F4",id:"\u65E5\u671F\u8303\u56F4"},{depth:3,text:"\u5E73\u94FA\u5C55\u793A",id:"\u5E73\u94FA\u5C55\u793A"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"Calendar Poppable Props",id:"calendar-poppable-props"},{depth:3,text:"Calendar Range Props",id:"calendar-range-props"},{depth:3,text:"Calendar Multiple Props",id:"calendar-multiple-props"},{depth:3,text:"Day \u6570\u636E\u7ED3\u6784",id:"day-\u6570\u636E\u7ED3\u6784"},{depth:3,text:"Events",id:"events"},{depth:3,text:"\u65B9\u6CD5",id:"\u65B9\u6CD5"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"},{depth:2,text:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898"},{depth:3,text:"\u5728 iOS \u7CFB\u7EDF\u4E0A\u521D\u59CB\u5316\u7EC4\u4EF6\u5931\u8D25\uFF1F",id:"\u5728-ios-\u7CFB\u7EDF\u4E0A\u521D\u59CB\u5316\u7EC4\u4EF6\u5931\u8D25"}],Y="/src/components/calendar/README.md",H="Calendar \u65E5\u5386",U="1652064015000";var V=t=>t.children({MdContent:O,demos:j,frontmatter:q,slugs:W,filePath:Y,title:H,updatedTime:U});export{O as MdContent,V as default,j as demos,Y as filePath,q as frontmatter,W as slugs,H as title,U as updatedTime};
