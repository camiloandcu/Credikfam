"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[703],{7703:(e,a,t)=>{t.r(a),t.d(a,{default:()=>g});var n=t(5043),l=t(7932),o=t(3216),i=t(622),r=t(5865),c=t(7784),s=t(1906),u=t(8390),h=t(7283),d=t(9302),m=t(579);const g=()=>{const[e,a]=(0,n.useState)(""),[t,g]=(0,n.useState)(""),[p,A]=(0,n.useState)(""),[v,f]=(0,n.useState)(""),[b,j]=(0,n.useState)(null),[x,C]=(0,n.useState)(""),S=(0,o.Zp)();return(0,m.jsx)(u.$,{dateAdapter:d.R,children:(0,m.jsxs)(i.A,{children:[(0,m.jsx)(r.A,{variant:"h4",gutterBottom:!0,children:"Nuevo cliente"}),(0,m.jsxs)("form",{onSubmit:async a=>{a.preventDefault();const n={nombre:e,apellido:t,direccion:p,telefono:v,fechaNacimiento:b,ocupacion:x};await(0,l.hw)(n),S("/clientes")},children:[(0,m.jsx)(c.A,{label:"Nombre",fullWidth:!0,value:e,onChange:e=>a(e.target.value),margin:"normal"}),(0,m.jsx)(c.A,{label:"Apellido",fullWidth:!0,value:t,onChange:e=>g(e.target.value),margin:"normal"}),(0,m.jsx)(c.A,{label:"Direccion",fullWidth:!0,value:p,onChange:e=>A(e.target.value),margin:"normal"}),(0,m.jsx)(c.A,{label:"Telefono",fullWidth:!0,value:v,onChange:e=>f(e.target.value),margin:"normal"}),(0,m.jsx)(h.l,{label:"Fecha Nacimiento",fullWidth:!0,value:b,onChange:e=>j(e),margin:"normal"}),(0,m.jsx)(c.A,{label:"Ocupacion",fullWidth:!0,value:x,onChange:e=>C(e.target.value),margin:"normal"}),(0,m.jsx)(s.A,{variant:"contained",color:"primary",type:"submit",children:"A\xf1adir"})]})]})})}},4505:(e,a,t)=>{t.d(a,{A:()=>n});const n=t(6213).A.create({baseURL:"http://138.197.86.232:8080",headers:{"Content-Type":"application/json"}})},7932:(e,a,t)=>{t.d(a,{GP:()=>r,OE:()=>c,b6:()=>o,hw:()=>i,ys:()=>l});var n=t(4505);const l=()=>n.A.get("/clientes"),o=e=>n.A.get("/clientes/".concat(e)),i=e=>n.A.post("/clientes",e),r=(e,a)=>n.A.put("/clientes/".concat(e),a),c=e=>n.A.delete("/clientes/".concat(e))}}]);
//# sourceMappingURL=703.fde24dbb.chunk.js.map