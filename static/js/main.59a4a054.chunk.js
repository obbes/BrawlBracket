(this.webpackJsonprlbracket=this.webpackJsonprlbracket||[]).push([[0],{16:function(e,t,n){e.exports=n(17)},17:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(13),i=n(8),s=n(2),c=n(14),l=n(3),o=n(4),u=n(0),m=n.n(u),d=n(9),h=n.n(d);n(22);function f(){var e=Object(l.a)(["\n  grid-template-columns: ",";\n  grid-template-rows: ",";\n  background-color: white;\n  display: grid;\n  height: 100vh;\n  text-align: center;\n"]);return f=function(){return e},e}function k(){var e=Object(l.a)(["\n  color: #010101;\n  font-size: 20px;\n  font-weight: bold;\n  text-align: center;\n  height: 50px;\n  grid-column-start: ",";\n  grid-row-start: ",";\n  background-color: ",";\n  margin: 25px;\n  border: 2px solid #151221;\n"]);return k=function(){return e},e}var v=o.a.button(k(),(function(e){return e.indexOfColumn}),(function(e){return e.indexOfRow}),(function(e){return e.isClicked})),b=o.a.div(f(),(function(e){return e.mainIndexOfColumn}),(function(e){return e.mainIndexOfRow}));function g(e){return m.a.createElement("div",{className:"intro-components"},m.a.createElement("div",{className:"size-label"},m.a.createElement("h5",null,"Number of Teams")),m.a.createElement("div",{className:"size-label"},m.a.createElement("select",{onChange:e.onChange},m.a.createElement("option",{value:"undefined"},"Clear bracket")," />",m.a.createElement("option",{value:"4"},"4 Teams"),m.a.createElement("option",{value:"8"},"8 Teams"),m.a.createElement("option",{value:"16"},"16 Teams"))),m.a.createElement("div",null,m.a.createElement("input",{type:"text",id:"number",value:e.newName,placeholder:"Enter Team Name",onChange:e.onChangeOfInput,onKeyPress:e.onEnter}),m.a.createElement("button",{onClick:e.onClick},"Submit Team")))}var C=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={numOfSeeds:0,seedNum:[],newName:"",names:[],isClicked:[],class:"container",bracket4:{mainColumn:"30% 20% 20% 30%",column:[1,1,4,4,2,3],row:[2,4,2,4,3,3],match:[4,4,5,5],mainRow:"20% 20% 20% 20% 20%"},bracket8:{mainColumn:"20% 15% 15% 15% 15% 20%",column:[1,1,1,1,6,6,6,6,2,2,5,5,3,4],row:[1,2,4,5,1,2,4,5,2,4,2,4,3,3],match:[8,8,9,9,10,10,11,11,12,12,13,13,13,12],mainRow:"20% 20% 20% 20% 20%"},bracket16:{mainColumn:"12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%",column:[1,1,1,1,1,1,1,1,8,8,8,8,8,8,8,8,2,2,2,2,7,7,7,7,3,3,6,6,4,5],row:[1,2,4,5,7,8,10,11,1,2,4,5,7,8,10,11,2,4,8,10,2,4,8,10,3,9,3,9,6,6],match:[16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,28,29],mainRow:"9% 9% 9% 9% 9% 9% 9% 9% 9% 9% 9%"}},n}return Object(c.a)(t,e),Object(s.a)(t,[{key:"renderInput",value:function(){var e=this;return m.a.createElement(g,{onChangeOfInput:function(t){return e.handleChangeOfInput(t)},onChange:function(t){return e.handleChange(t)},onClick:function(t){return e.handleClickOfInput(t)},onEnter:function(t){return e.handleEnter(t)},newName:this.state.newName})}},{key:"listBrackets",value:function(){var e=this,t=this.state.bracket4;"4"===this.state.numOfSeeds&&(t=this.state.bracket4),"8"===this.state.numOfSeeds&&(t=this.state.bracket8),"16"===this.state.numOfSeeds&&(t=this.state.bracket16);var n=this.state.names.map((function(n,a){return m.a.createElement(v,{indexOfColumn:t.column[a],indexOfRow:t.row[a],key:a,isClicked:e.state.isClicked[a],onClick:function(t){return e.handleClickOfSeed(t,a,n)}},n)}));return m.a.createElement(b,{mainIndexOfColumn:t.mainColumn,mainIndexOfRow:t.mainRow,className:"bracketarea"},n)}}]),Object(s.a)(t,[{key:"enter_or_input",value:function(){var e=this.state.names,t=this.state.names.length,n=0;if(6===t)for(;void 0!==e[n]||n===t-1||n===t-2||!e.indexOf(this.state.newName)<0||n<0;)n+=1;else if(14===t)for(;void 0!==e[n]||n===t-1||n===t-2||n===t-3||n===t-4||n===t-5||n===t-6||!e.indexOf(this.state.newName)<0||n<0;)n+=1;else if(30===t)for(;void 0!==e[n]||n===t-1||n===t-2||n===t-3||n===t-4||n===t-5||n===t-6||n===t-7||n===t-8||n===t-9||n===t-10||n===t-11||n===t-12||n===t-13||n===t-14||!e.indexOf(this.state.newName)<0||n<0;)n+=1;else n=void 0;void 0!==n&&(e.splice(n,1,this.state.newName),this.setState({names:e})),this.setState({newName:""})}},{key:"handleEnter",value:function(e){"Enter"===e.key&&this.enter_or_input()}},{key:"handleClickOfInput",value:function(e){this.enter_or_input()}},{key:"handleChangeOfInput",value:function(e){var t=e.target.value;this.setState({newName:t})}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState({numOfSeeds:t}),"undefined"===t&&this.setState({names:[],class:"",isClicked:[]}),"4"===t&&this.setState({names:Array(6).fill(),class:"bracket4",isClicked:Array(6).fill("#c1c1c1")}),"8"===t&&this.setState({names:Array(14).fill(),class:"bracket8",isClicked:Array(14).fill("#c1c1c1")}),"16"===t&&this.setState({names:Array(30).fill(),class:"bracket16",isClicked:Array(30).fill("#c1c1c1")})}},{key:"handleClickOfSeed",value:function(e,t,n){var a=this.state.names,r=this.state.names,i=this.state.numOfSeeds,s=this.state.isClicked;void 0!==n&&(void 0!==r[t+1]&&t%2===0&&"green"!==s[t+1]&&"4"===i?(r[this.state.bracket4.match[t]]=a[t],s[t]="green",s[t+1]="red"):void 0!==r[t-1]&&t%2!==0&&"green"!==s[t-1]&&"4"===i&&(r[this.state.bracket4.match[t]]=a[t],s[t]="green",s[t-1]="red"),void 0!==r[t+1]&&t%2===0&&"green"!==s[t+1]&&"8"===i?(r[this.state.bracket8.match[t]]=a[t],s[t]="green",s[t+1]="red"):void 0!==r[t-1]&&t%2!==0&&"green"!==s[t-1]&&"8"===i&&(r[this.state.bracket8.match[t]]=a[t],s[t]="green",s[t-1]="red"),void 0!==r[t+1]&&t%2===0&&"green"!==s[t+1]&&"16"===i?(r[this.state.bracket16.match[t]]=a[t],s[t]="green",s[t+1]="red"):void 0!==r[t-1]&&t%2!==0&&"green"!==s[t-1]&&"16"===i&&(r[this.state.bracket16.match[t]]=a[t],s[t]="green",s[t-1]="red")),this.setState({names:r})}},{key:"render",value:function(){return m.a.createElement("div",{className:"bracketMaker"},m.a.createElement("div",{className:"heading"},this.renderInput()),m.a.createElement("div",{className:"body"},this.listBrackets()))}}]),t}(m.a.Component),p=document.getElementById("root");h.a.render(m.a.createElement(C,null),p)},22:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.59a4a054.chunk.js.map