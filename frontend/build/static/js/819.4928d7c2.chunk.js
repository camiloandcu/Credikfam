"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[819],{8918:(t,e,a)=>{a.d(e,{A:()=>i});var n=a(1637),o=(a(5043),a(579));const i=()=>(0,o.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh"},children:(0,o.jsx)(n.A,{})})},3819:(t,e,a)=>{a.r(e),a.d(e,{default:()=>f});var n=a(5043),o=a(8656),i=a(3216),s=a(622),c=a(5865),r=a(6157),l=a(7784),d=a(1906),u=a(7932),p=a(8390),A=a(7283),h=a(9302),g=a(9155),m=a(8918),b=a(579);const f=()=>{const[t,e]=(0,n.useState)([]),[a,f]=(0,n.useState)([]),[v,j]=(0,n.useState)(),[x,y]=(0,n.useState)(),[C,S]=(0,n.useState)(),[w,N]=(0,n.useState)(),[W,k]=(0,n.useState)(),[E,F]=(0,n.useState)(),I=(0,i.Zp)();return(0,n.useEffect)((()=>{(async()=>{const t=await(0,g.nE)();f(t.data)})(),(async()=>{const t=await(0,u.ys)();e(t.data)})()}),[]),t&&a?(0,b.jsx)(p.$,{dateAdapter:h.R,children:(0,b.jsxs)(s.A,{children:[(0,b.jsx)(c.A,{variant:"h4",gutterBottom:!0,children:"Nuevo cr\xe9dito"}),(0,b.jsxs)("form",{onSubmit:async t=>{t.preventDefault();const e={cliente:{id:v},funcionario:{id:x},razonCredito:C,montoSolicitado:Number(w),fechaInicio:W,cuotas:Number(E),aprobado:!1};await(0,o.By)(e),I("/creditos/pendientes")},children:[(0,b.jsx)(A.l,{label:"Fecha",fullWidth:!0,value:W,onChange:t=>k(t),margin:"normal"}),(0,b.jsx)(r.A,{options:t,getOptionLabel:t=>"".concat(t.nombre," ").concat(t.apellido),style:{width:300},renderInput:t=>(0,b.jsx)(l.A,{...t,label:"Cliente",variant:"outlined",margin:"normal"}),onChange:(t,e)=>{j(e?e.id:"")}}),(0,b.jsx)(r.A,{options:a,getOptionLabel:t=>"".concat(t.nombre," ").concat(t.apellido),style:{width:300},renderInput:t=>(0,b.jsx)(l.A,{...t,label:"Funcionario",variant:"outlined",margin:"normal"}),onChange:(t,e)=>{y(e?e.id:"")}}),(0,b.jsx)(l.A,{label:"Razon del cr\xe9dito",fullWidth:!0,value:C,onChange:t=>S(t.target.value),margin:"normal"}),(0,b.jsx)(l.A,{label:"Monto solicitado",inputProps:{type:"number"},fullWidth:!0,value:w,onChange:t=>N(t.target.value),margin:"normal"}),(0,b.jsx)(l.A,{label:"Cuotas",inputProps:{type:"number"},fullWidth:!0,value:E,onChange:t=>F(t.target.value),margin:"normal"}),(0,b.jsx)(d.A,{variant:"contained",color:"primary",type:"submit",children:"A\xf1adir"})]})]})}):(0,b.jsx)(m.A,{})}},4505:(t,e,a)=>{a.d(e,{A:()=>n});const n=a(6213).A.create({baseURL:"http://localhost:8080",headers:{"Content-Type":"application/json"}})},7932:(t,e,a)=>{a.d(e,{GP:()=>c,OE:()=>r,b6:()=>i,hw:()=>s,ys:()=>o});var n=a(4505);const o=()=>n.A.get("/clientes"),i=t=>n.A.get("/clientes/".concat(t)),s=t=>n.A.post("/clientes",t),c=(t,e)=>n.A.put("/clientes/".concat(t),e),r=t=>n.A.delete("/clientes/".concat(t))},8656:(t,e,a)=>{a.d(e,{$d:()=>i,By:()=>c,NT:()=>o,_F:()=>r,_L:()=>l,wZ:()=>d,z8:()=>s});var n=a(4505);const o=()=>n.A.get("/creditos/aprobado/True"),i=()=>n.A.get("/creditos/aprobado/False"),s=t=>n.A.get("/creditos/".concat(t)),c=t=>n.A.post("/creditos",t),r=(t,e)=>n.A.put("/creditos/".concat(t),e),l=t=>n.A.put("/creditos/".concat(t,"/aprobar")),d=t=>n.A.delete("/creditos/".concat(t))},9155:(t,e,a)=>{a.d(e,{GN:()=>i,nE:()=>o,qu:()=>s,vW:()=>c,x4:()=>r});var n=a(4505);const o=()=>n.A.get("/funcionarios"),i=t=>n.A.get("/funcionarios/".concat(t)),s=t=>n.A.post("/funcionarios",t),c=(t,e)=>n.A.put("/funcionarios/".concat(t),e),r=t=>n.A.delete("/funcionarios/".concat(t))}}]);
//# sourceMappingURL=819.4928d7c2.chunk.js.map