var al=Object.defineProperty;var rr=e=>{throw TypeError(e)};var rl=(e,n,o)=>n in e?al(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o;var ir=(e,n,o)=>rl(e,typeof n!="symbol"?n+"":n,o),ua=(e,n,o)=>n.has(e)||rr("Cannot "+o);var _s=(e,n,o)=>(ua(e,n,"read from private field"),o?o.call(e):n.get(e)),bo=(e,n,o)=>n.has(e)?rr("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(e):n.set(e,o),fa=(e,n,o,r)=>(ua(e,n,"write to private field"),r?r.call(e,o):n.set(e,o),o),lr=(e,n,o)=>(ua(e,n,"access private method"),o);import"./CWj6FrbW.js";import"./Berr-3NL.js";import{s as wt,o as Yn,a as Es,e as Q,c as ja,d as Ze,j as Qr}from"./CFJ5Bxx6.js";import{h as il,d as ll,bu as cl,b as dl,k as Xs,u as at,ak as je,aG as u,aI as p,aH as d,P as V,a as h,ao as Be,ap as E,am as _,al as s,G as nt,F as t,an as Nn,a7 as c,c as vn,f as Wt,ah as po,aM as ss,aJ as Ke,bv as Ge,aP as He,A as Is,aO as tn,aq as ds,aK as as,bb as pl,a2 as fn,au as Ea,bw as Eo}from"./CSYh3vnc.js";import{b as Ho}from"./CPwLOqZt.js";import{p as m,s as vt,a as $n}from"./B9Nryz2n.js";import{i as H}from"./B6KpQeLD.js";import{a as ul,s as Ba}from"./nb-kmySW.js";import{h as fl}from"./DSji4QSa.js";import{a as K,s as Mt,r as os,b as re,f as vl,e as cr,c as hl}from"./B44XmXXC.js";import{b as Ae}from"./BYZ2Dtfh.js";import{i as hn}from"./DzzOqLpP.js";/* empty css        */import{v as vo,a as Ta,g as Jr,d as ml}from"./B-1CTqYU.js";import{e as Cn,i as hs}from"./C52d9OZA.js";import{a as ro,d as Vs,b as Ko,M as dr,c as pr,e as Aa,h as gl,s as va,f as ur,p as bl}from"./NCeYOiG-.js";import{a as ws,b as Zr}from"./CV4reLFE.js";import{C as jn,b as yo,c as fr,h as yl,S as kl,a as wl,N as xl}from"./C3w5ai-Y.js";import{w as Xe,g as Te,d as Qs}from"./DhN2yhbn.js";import{a as Ua,c as Ro,f as _l,g as Sl,h as El,d as Na,i as Tl,j as Al,r as ha,k as vr,m as Nl,n as Ml,o as Pl,q as zl,t as Dl,u as Cl,v as $l,w as Ll,x as hr,y as Rl,z as Il,p as Ol,A as Fl,B as Hl,C as Kl}from"./Q382iuH0.js";import{n as uo}from"./BIi8bPi5.js";import{d as Xo}from"./CBO-Y73m.js";import{s as ps}from"./BfWDMI38.js";import{a as io,c as Qo,o as jl,b as ti,r as Ma,d as Pa,e as mr,f as Bl,u as Ul,g as gr,h as br,j as Po,k as ql,l as ma,m as ga,n as Gl,p as Wl,q as Vl,t as Yl}from"./DbGLs63h.js";import{p as Jo,b as Zo}from"./CxUyZAnk.js";import{D as ei,E as za,F as Io,G as Xl,H as Ql,J as Jl,K as Zl,L as tc,M as ec,N as nc,O as sc,P as yr,Q as oc,R as ac,T as rc,U as kr,V as ic,W as lc,X as cc,Y as dc,Z as pc,_ as Ps,$ as wr,a0 as uc,j as fc,a as ba,k as vc,a1 as Ws,d as hc,a2 as mc,a3 as gc}from"./HBgDpKbP.js";import{r as ta,a as ni,b as bc}from"./Wk6ntuYn.js";import{a as yc}from"./BYpIAWkM.js";import{c as qa,e as kc,i as si,s as Oo,p as wc,a as xc,b as _c,d as Sc}from"./D_QNEt50.js";import{p as Ec,b as Tc,a as jo}from"./Bq_cNW2k.js";import{b as lo}from"./CwzAW-UC.js";import{f as Ac,C as Nc,e as Mc,L as xr,s as Pc,b as zc,p as Dc,i as Cc,j as $c,k as Lc,l as Rc}from"./DiyAssUN.js";import{S as Ic,b as Oc,d as Fc,f as _r,a as oi,l as Hc,e as Kc,M as jc}from"./qyY91Cz4.js";import{b as Ls}from"./CJM3armn.js";import{m as Sr,b as Bc,a as Ga,d as Uc,e as qc,f as Er,g as Bo,D as ai,h as ri,i as ii,j as li,l as Cs,o as Da,p as ci,q as di,r as Tr,t as pi,u as Uo,v as ui,w as Ca,x as Gc,y as Wc,z as Vc,A as ya,B as Yc,C as Xc,E as Qc,F as Jc,k as Zc,G as td,H as ed,I as nd,J as sd,K as od}from"./B-TJFpQu.js";import{B as ad}from"./BV5ROjQ8.js";function fi(e){return function(...n){var o=n[0];o.target===this&&(e==null||e.apply(this,n))}}function sn(e){return function(...n){var o=n[0];return o.stopPropagation(),e==null?void 0:e.apply(this,n)}}function vi(e){return function(...n){var o=n[0];return o.preventDefault(),e==null?void 0:e.apply(this,n)}}const rd=Symbol("NaN");function id(e,n,o){il&&ll();var r=new ad(e),a=!cl();dl(()=>{var i=n();i!==i&&(i=rd),a&&i!==null&&typeof i=="object"&&(i={}),r.ensure(i,o)})}var Rs,co,Ao,Vo,hi;const Yo=class Yo{constructor(n){bo(this,Vo);bo(this,Rs,new WeakMap);bo(this,co);bo(this,Ao);fa(this,Ao,n)}observe(n,o){var r=_s(this,Rs).get(n)||new Set;return r.add(o),_s(this,Rs).set(n,r),lr(this,Vo,hi).call(this).observe(n,_s(this,Ao)),()=>{var a=_s(this,Rs).get(n);a.delete(o),a.size===0&&(_s(this,Rs).delete(n),_s(this,co).unobserve(n))}}};Rs=new WeakMap,co=new WeakMap,Ao=new WeakMap,Vo=new WeakSet,hi=function(){return _s(this,co)??fa(this,co,new ResizeObserver(n=>{for(var o of n){Yo.entries.set(o.target,o);for(var r of _s(this,Rs).get(o.target)||[])r(o)}}))},ir(Yo,"entries",new WeakMap);let $a=Yo;var ld=new $a({box:"border-box"});function ao(e,n,o){var r=ld.observe(e,()=>o(e[n]));Xs(()=>(at(()=>o(e[n])),r))}function cd(e){return typeof e!="string"?"":e.replace(/\/+$/,"").split("/").pop()??""}const dd=e=>!Number.isFinite(e)||e<=0?0:e>=1?1:e;function pd(e,n){const o=Array.isArray(e)?e.filter(f=>!!f&&typeof f=="object"):[],r=vo(o),a=r.length,i=typeof n=="string"?n:"",l=i?r.findIndex(f=>f.path===i):-1;if(l<0)return{index:-1,position:0,total:a,fraction:0,present:!1};const g=l+1;return{index:l,position:g,total:a,fraction:dd(g/a),present:!0}}var ud=E('<div class="copyright svelte-i2qyxc"><span class="text svelte-i2qyxc"> </span> <span class="hover-text svelte-i2qyxc"><a target="_blank">Copyright <b> </b> </a></span></div>');function fd(e,n){je(n,!1);let o=m(n,"name",24,()=>Ta.copyright.name),r=m(n,"url",24,()=>Ta.copyright.url),a=m(n,"year",24,()=>new Date().getFullYear().toString());hn();var i=ud(),l=u(i),g=u(l);p(l);var f=d(l,2),L=u(f),w=d(u(L)),X=u(w);p(w);var j=d(w);p(L),p(f),p(i),V(()=>{wt(g,`© ${o()??""} ${a()??""}`),K(L,"href",r()),wt(X,`${o()??""} <${r()??""}>`),wt(j,` ${a()??""}`)}),h(e,i),Be()}const vd=/<(script|style)\b[\s\S]*?<\/\1>/gi,hd=/<!--[\s\S]*?-->/g,md=/\{[^{}]*\}/g,gd=/<[^>]+>/g,bd=/\s+/g,yd={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&nbsp;":" "};function kd(e){if(typeof e!="string")return"";let n=e.replace(vd," ").replace(hd," ").replace(md," ").replace(gd," ");for(const[o,r]of Object.entries(yd))n=n.split(o).join(r);return n.replace(bd," ").trim()}function wd(e){const n={};for(const[o,r]of Object.entries(e??{})){if(typeof o!="string")continue;const a=o.match(/\/src\/routes\/(.+)\/([^/]+)\/\+page\.svelte$/);if(!a)continue;const i=a[2];if(!i||!i.endsWith(".html"))continue;const l=a[1].replace(/\/\([^/]+\)/g,"").replace(/^\([^/]+\)\//,"").replace(/\/{2,}/g,"/").replace(/^\/+|\/+$/g,"");if(!l||l.startsWith("_"))continue;const g=l.replace(/\//g,"-");(n[g]??(n[g]={}))[i]=kd(r)}return n}function xd(e,n,o=48){if(typeof e!="string"||!n)return"";const r=e.toLowerCase().indexOf(n.toLowerCase());if(r<0)return"";const a=Math.max(0,r-o),i=Math.min(e.length,r+n.length+o),l=a>0?"…":"",g=i<e.length?"…":"";return`${l}${e.slice(a,i).trim()}${g}`}function _d(e){return typeof e!="string"?"":e.replace(/\.html?$/i,"")}function mi(e,n){const o=(typeof n=="string"?n:"").trim().toLowerCase();if(!o)return[];const r=[];for(const a of e??[]){if(!a)continue;const i=typeof a.title=="string"?a.title:"",l=typeof a.text=="string"?a.text:"",g=_d(a.path),f=Number.isFinite(a.number)?a.number:void 0;i.toLowerCase().includes(o)?r.push({path:a.path,title:i,snippet:"",where:"title",number:f}):g.toLowerCase().includes(o)?r.push({path:a.path,title:i,snippet:a.path,where:"path",number:f}):f!=null&&String(f).includes(o)?r.push({path:a.path,title:i,snippet:`#${f}`,where:"number",number:f}):l.toLowerCase().includes(o)&&r.push({path:a.path,title:i,snippet:xd(l,o),where:"body",number:f})}return r}function gi(e,n,o){const r=Number.isFinite(o)?Math.floor(o):0;if(r<=0)return-1;const a=Number.isFinite(n)?Math.floor(n):0,i=Number.isFinite(e)?Math.floor(e):-1;return i<0||i>=r?a<0?r-1:0:((i+a)%r+r)%r}const Sd=`<!-- Framework route — the code lives in $lib/framework (shipped in @geekpresent/core).
     This stub only puts it at its URL; a project using the package has the same file. -->
<script lang="ts">
	import HandoutPage from '@geekpresent/core/framework/HandoutPage.svelte';

	export let data: { deck: string };
<\/script>

<HandoutPage {data} />
`,Ed=`<!--
  7 · anywhere — export just what the vars file names, then run from that file with no store.

  The session is real \`folio\` output from demos/ep001/capture.sh (a sandbox store, fake values).
  The export's long report is cut to two of its lines, and its questions (how to lock the file,
  then gpg's passphrase, twice) are left out: the capture gives the passphrase on fd 3.
-->
<script>
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
	import Steps from '@geekpresent/core/components/Steps.svelte';
	import StepTerminal from '@geekpresent/core/components/StepTerminal.svelte';
	import { pace } from '$lib/pace';
<\/script>

<Shot kicker="another machine" title="Take it anywhere" size={110}>
	<Steps>
		<p class="punch" style="font-size: 45px">Securely export items and use elsewhere.</p>
		<div class="leg">
			<StepTerminal
				{...pace}
				autoplay
				title="💻 your laptop"
				style="--terminal-ok: #00b356; font-size: 0.72em"
				lines={[
					{ cmd: 'folio export -s --vars app2.vars \\\\' },
					{ cmd: '    -o app2.folio', cont: true },
					{ out: '✓ Items: 3 (texts: 1, secrets: 2)', tone: 'ok' },
					{ out: '✓ File: app2.folio', tone: 'ok' }
				]}
			/>
		</div>
		<div class="hop">↓ <code>app2.folio</code> — one encrypted file</div>
		<div class="leg">
			<StepTerminal
				{...pace}
				title="☁️ a server, or a cloud booth — no store"
				style="font-size: 0.72em"
				lines={[
					{ cmd: 'folio exec -s --from app2.folio \\\\' },
					{ cmd: '    --vars app2.vars -- deploy.sh', cont: true },
					{ out: '==| Super Cool App -- Deployment |==' },
					{ out: 'Parameter check:' },
					{ out: ' GH_TOKEN : ✅ Given' },
					{ out: ' DB_URL   : ✅ pg://app:###@12.34.56.7/app' },
					{ out: ' LOG_LEVEL: info' },
					{ out: '...' },
					{ out: '--| Deploying is completed |--' }
				]}
			/>
		</div>
		<ul class="never" style="margin-top: 0px; margin-bottom: 10px">
			<li>Export directly to encrypted folio file.</li>
			<li>Inject directly from the folio file</li>
		</ul>
	</Steps>
</Shot>

<Note>
	<p>You can export your items to an encrypted 'folio; file.</p>
	<p>You can send them anywhere.</p>
	<p>And use it as just like a local item store.</p>
</Note>

<style>
	/* A wrapper keeps each console its own size: a bare one in the slide body stretches. */
	.leg {
		display: flex;
		flex-direction: column;
	}
	.hop {
		color: var(--ep-accent);
		font-size: 40px;
		text-align: center;
	}
	.punch {
		margin: 0;
		font-size: 52px;
		font-weight: 700;
		text-align: center;
	}
</style>
`,Td=`<!--
  5b · exec-multiple — name a folder and every item under it becomes a variable; --names shows
  which variable gets which item, reading no value. One item: ../exec.html.

  The session is real \`folio\` output from demos/ep001/capture.sh (a sandbox store, fake values).
-->
<script>
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
	import Steps from '@geekpresent/core/components/Steps.svelte';
	import StepTerminal from '@geekpresent/core/components/StepTerminal.svelte';
	import { pace } from '$lib/pace';
<\/script>

<Shot kicker="use several" title="A whole folder." size={120}>
	<Steps>
		<div class="map">
			<code>gh</code>
			<span class="arrow">→</span>
			<div class="vars">
				<code class="s">GH_TOKEN</code>
				<code class="t">GH_USER</code>
			</div>
		</div>
		<StepTerminal
			{...pace}
			autoplay
			title="EnvFolio"
			style="--terminal-ok: var(--ep-text); --terminal-warn: var(--ep-secret); font-size: 0.8em"
			lines={[
				{ cmd: '# Use every items in a folder', tone: 'comment' },
				{ cmd: 'folio exec -s gh \\\\' },
				{ cmd: "    -- sh -c 'env | grep GH_'", cont: true },
				'GH_TOKEN=ghp_DEMO0000fake0000token',
				'GH_USER=demo@example.com',
				{ cmd: '' },
				{ cmd: '# See which is which, dryrun', tone: 'comment' },
				{ cmd: 'folio exec --names -s gh \\\\' },
				{ cmd: '    -- gh repo list', cont: true },
				{ lead: 'GH_TOKEN <- ', out: '🔑gh/token', tone: 'warn' },
				{ lead: 'GH_USER  <- ', out: '📄gh/user', tone: 'ok' }
			]}
		/>
		<ul class="never">
			<li>A folder brings every item under it</li>
			<li>
				<code>--names</code> shows where each variable comes from — nothing is read, nothing runs
			</li>
		</ul>
		<p></p>
	</Steps>
</Shot>

<Note>
	<p>Specify the folder and get every keys under it.</p>
	<p>Link in this case, <code>\`gh\`</code> is a folder containing these two items.</p>
	<p>You can organize your items in group for quick grabs.</p>
</Note>

<style>
	.map {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 30px;
		font-size: 64px;
		font-weight: 700;
	}
	.arrow {
		color: var(--ep-accent);
	}
	.vars {
		display: flex;
		flex-direction: column;
	}
	.never {
		margin: 0;
		padding-left: 1.1em;
		font-size: 42px;
	}
	.never li + li {
		margin-top: 12px;
	}
</style>
`,Ad=`<!--
  5 · exec — one item becomes a variable for one command: the naming rule, or a name you
  pick (VAR=<name>); secrets only with --secrets. Several items: ../exec-multiple.html.

  The session is real \`folio\` output from demos/ep001/capture.sh (a sandbox store, fake values).
-->
<script>
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
	import Steps from '@geekpresent/core/components/Steps.svelte';
	import StepTerminal from '@geekpresent/core/components/StepTerminal.svelte';
	import { pace } from '$lib/pace';
<\/script>

<Shot kicker="use them" title="<code>folio exec</code>" size={120}>
	<Steps>
		<p style="margin-bottom: 0px">
			Your command directly gets the secrets. Never shown on screen or saved to a file.
		</p>
		<div class="syntax">
			<div class="tag">▶ usage</div>
			<code class="form"
				>folio exec <span class="s">[-s]</span> &lt;item&gt;… <span class="sep">--</span> &lt;command&gt;</code
			>
			<div>each item → a variable, for <b>that one command</b></div>
		</div>
		<div class="naming">
			<div class="map">
				<code class="s">gh/token</code>
				<span class="arrow">→</span>
				<code>GH_TOKEN</code>
			</div>
			<div class="rule"><code>/</code> becomes <code>_</code>, then UPPERCASE</div>
		</div>
		<StepTerminal
			{...pace}
			autoplay
			title="EnvFolio"
			style="--terminal-ok: var(--ep-text); --terminal-warn: var(--ep-secret); font-size: 0.8em; margin-bottom: 0px"
			lines={[
				{ cmd: '# Use an item as a variable', tone: 'comment' },
				{ cmd: 'folio exec -s gh/token \\\\' },
				{ cmd: "-- sh -c 'echo \${GH_TOKEN}'", cont: true },
				'ghp_DEMO0000fake0000token',
				{ cmd: '# Or pick its name', tone: 'comment' },
				{ cmd: 'folio exec -s GITHUB_TOKEN=gh/token \\\\' },
				{ cmd: "-- sh -c 'echo \${GITHUB_TOKEN}'", cont: true },
				'ghp_DEMO0000fake0000token'
			]}
		/>
		<p style="margin-top: 0px; margin-bottom: 0px">
			-s|--secrets : include secrets in the injection.
		</p>
	</Steps>
</Shot>

<Note>
	<p>
		When needed, it converts the item into an environmental variable and inject directly to the
		command.
	</p>
	<p>The conversion rule is just to change slash to underscore and uppercase the wholething.</p>
	<p>So the command gets it directly -- not showing on screen or saved to file.</p>
</Note>

<style>
	/* The usage card: the same card as texts-and-secrets' text/secret kinds. */
	.syntax {
		background: var(--ep-panel);
		border: 2px solid var(--ep-line);
		border-top: 10px solid var(--ep-accent);
		border-radius: 18px;
		padding: 26px 28px;
		font-size: 36px;
	}
	.tag {
		margin-bottom: 8px;
		color: var(--ep-accent);
		font:
			700 44px 'Fira Code',
			monospace;
	}
	.form {
		display: block;
		margin-bottom: 14px;
		font-size: 36px;
		white-space: nowrap;
	}
	.sep {
		color: var(--ep-accent);
	}
	.naming {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}
	.map {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 30px;
		font-size: 64px;
		font-weight: 700;
	}
	.arrow {
		color: var(--ep-accent);
	}
	.rule {
		color: var(--ep-dim);
		font-size: 38px;
	}
	.rule code {
		color: var(--ep-fg);
	}
</style>
`,Nd=`<!--
  9 · get-it — the call to action: the GitHub release, Homebrew or the install script (README
  _Install_); then the article, all episodes and the README. The Note is as recorded.
-->
<script>
	import { base } from '$app/paths';
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
	import QRCode from '@geekpresent/core/components/QRCode.svelte';
<\/script>

<Shot>
	<div class="hero">
		<img class="logo" src="{base}/logo-dark.svg" alt="EnvFolio logo" />
		<div class="name"><b>Env</b>Folio</div>
	</div>
	<div class="where">
		<div class="label">Get it on GitHub</div>
		<code class="url">github.com/NawaMan/EnvFolio</code>
	</div>
	<div class="qr">
		<QRCode value="https://github.com/NawaMan/EnvFolio/releases/latest" size={300} />
	</div>
	<div class="where">
		<div class="label">or with Homebrew, or the install script</div>
		<div class="install">
			<code class="brew"><span class="prompt">$</span> brew install nawaman/tap/folio</code>
			<a href="https://github.com/NawaMan/EnvFolio#install"
				><code class="brew"><span class="prompt">$</span> curl -fsSL …/install.sh | bash</code></a
			>
		</div>
	</div>
	<p class="punch">Keep your secrets</p>
	<p class="punch">out of plain sight.</p>
	<p class="more">
		<a href="{base}/ep001-envfolio-intro-article">The article</a> ·
		<a href="{base}/">All episodes</a>
		·
		<a href="https://github.com/NawaMan/EnvFolio#readme">README</a>
	</p>
</Shot>

<Note>
	<p>Get EnvFolio now.</p>
	<p>From GitHub, or with Homebrew.</p>
	<p>and Keep your secrets out of plain sight.</p>
</Note>

<style>
	.hero {
		text-align: center;
	}
	.logo {
		display: block;
		width: 220px;
		height: 220px;
		margin: 0 auto 30px;
	}
	.name {
		font-size: 170px;
		font-weight: 300;
		line-height: 1;
	}
	.name b {
		font-weight: 800;
	}
	.where {
		text-align: center;
	}
	.label {
		color: var(--ep-dim);
		font-size: 40px;
	}
	.url {
		font-size: 50px;
	}
	/* The install line, as a one-line terminal: the deck's panel, a green prompt. */
	.brew {
		display: inline-block;
		margin-top: 10px;
		padding: 14px 28px;
		background: var(--ep-panel);
		border: 2px solid var(--ep-line);
		border-radius: 14px;
		font-size: 42px;
	}
	.prompt {
		color: #00b356;
	}
	.install {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 14px;
	}
	.install a {
		color: inherit;
		text-decoration: none;
	}
	.qr {
		display: flex;
		justify-content: center;
	}
	.punch {
		margin: 0;
		font-size: 54px;
		font-weight: 700;
		text-align: center;
	}
	.more {
		margin: 0;
		color: var(--ep-dim);
		font-size: 36px;
		text-align: center;
	}
	.more a {
		color: var(--ep-accent);
	}
</style>
`,Md=`<!--
  3 · meet — the name, what it does in one line, and that it hands them over directly.
-->
<script>
	import { base } from '$app/paths';
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
<\/script>

<Shot kicker="meet">
	<div class="hero">
		<img class="logo" src="{base}/logo-dark.svg" alt="EnvFolio logo" />
		<div class="name"><b>Env</b>Folio</div>
		<code class="cmd">$ folio</code>
	</div>
	<p class="line">
		Your <span class="t">texts</span> and <span class="s">secrets</span> in one store<br />
		handed to a program <b>directly</b>.
	</p>
	<p class="line">
		<b>Secure</b> while <b>Portable</b>.
	</p>
</Shot>

<Note>
	<p>Meet EnvFolio.</p>
	<p>A small command-line tool that keeps your texts and your secrets</p>
	<p>-- Secure while Portable</p>
</Note>

<style>
	.hero {
		text-align: center;
	}
	.logo {
		display: block;
		width: 280px;
		height: 280px;
		margin: 0 auto 30px;
	}
	.name {
		font-size: 190px;
		font-weight: 300;
		line-height: 1;
		letter-spacing: -0.02em;
	}
	.name b {
		font-weight: 800;
	}
	.cmd {
		display: inline-block;
		margin-top: 50px;
		padding: 14px 36px;
		border: 2px solid var(--ep-line);
		border-radius: 14px;
		background: var(--ep-panel);
		color: #00b356;
		font-size: 56px;
	}
	.line {
		margin: 0;
		font-size: 50px;
		text-align: center;
	}
	.stable {
		margin: 0;
		color: var(--ep-dim);
		font-size: 38px;
		text-align: center;
	}
</style>
`,Pd=`<!--
  1 · problem — the token in plain text, in the three places it usually is.
-->
<script>
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
<\/script>

<Shot kicker="quick question" title="Where are your secrets right now?" size={120}>
	<p class="punch">In files as plain text?<br />On every machine?</p>
	<div class="spots">
		<div class="spot">
			<div class="where"><code>.env</code></div>
			<code class="leak">GH_TOKEN=ghp_DEMO0000…</code>
		</div>
		<div class="spot">
			<div class="where"><code>~/.bashrc</code></div>
			<code class="leak">export AWS_SECRET=…</code>
		</div>
		<div class="spot">
			<div class="where"><code>~/.bash_history</code></div>
			<code class="leak">curl -H "Authorization: …"</code>
		</div>
	</div>
</Shot>

<Note>
	<p>Where are your secret credentials right now?</p>
	<p>Are they in plain text in some files.</p>
</Note>

<style>
	.spots {
		display: flex;
		flex-direction: column;
		gap: 28px;
	}
	.spot {
		background: var(--ep-panel);
		border: 2px solid var(--ep-line);
		border-left: 10px solid var(--ep-bad);
		border-radius: 14px;
		padding: 26px 32px;
	}
	.where {
		color: var(--ep-dim);
		font-size: 34px;
	}
	.leak {
		display: block;
		margin-top: 8px;
		color: var(--ep-bad);
		font-size: 38px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.punch {
		margin: 0;
		font-size: 60px;
		font-weight: 700;
		text-align: center;
	}
</style>
`,zd=`<!--
  2 · spread — the same .env, copied into every place you work.
-->
<script>
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';

	const places = [
		{ icon: '💻', name: 'your laptop' },
		{ icon: '📦', name: 'a container' },
		{ icon: '☁️', name: 'a cloud dev box' },
		{ icon: '🤖', name: 'an AI agent' }
	];
<\/script>

<Shot kicker="the problem" title="... everywhere." size={110}>
	<div class="grid">
		{#each places as p}
			<div class="place">
				<div class="icon">{p.icon}</div>
				<div class="name">{p.name}</div>
				<code class="env">.env</code>
			</div>
		{/each}
	</div>
	<p class="punch">Plain-text secrets go wherever you use them.</p>
</Shot>

<Note>
	<p>...and everywhere.</p>
</Note>

<style>
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 28px;
	}
	.place {
		background: var(--ep-panel);
		border: 2px solid var(--ep-line);
		border-radius: 18px;
		padding: 34px 20px;
		text-align: center;
	}
	.icon {
		font-size: 96px;
		line-height: 1.1;
	}
	.name {
		margin: 10px 0 18px;
		font-size: 38px;
	}
	.env {
		display: inline-block;
		padding: 6px 18px;
		border-radius: 10px;
		background: color-mix(in srgb, var(--ep-bad) 18%, transparent);
		color: var(--ep-bad);
		font-size: 34px;
	}
	.punch {
		margin: 0;
		font-size: 56px;
		font-weight: 700;
		text-align: center;
	}
</style>
`,Dd=`<!--
  4 · texts-and-secrets — the two kinds of item, and \`folio ls\` showing both.

  The session is real \`folio\` output from demos/ep001/capture.sh (a sandbox store, fake values).
  On a screen \`folio ls\` marks a text 📄 and a secret 🔑; on a Terminal, tone \`ok\` is a TEXT
  (teal) and \`warn\` a SECRET (amber), as \`folio\` colours them green and yellow.
-->
<script>
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
	import Steps from '@geekpresent/core/components/Steps.svelte';
	import StepTerminal from '@geekpresent/core/components/StepTerminal.svelte';
	import { pace } from '$lib/pace';
<\/script>

<Shot
	kicker="two kinds of item"
	title="<span class='t'>Texts</span> & <span class='s'>secrets</span>"
	size={110}
>
	<Steps>
		<div class="kinds">
			<div class="kind t-kind">
				<div class="tag">📄 text</div>
				<div>stored plain, <b>signed</b></div>
				<code>folio text …</code>
			</div>
			<div class="kind s-kind">
				<div class="tag">🔑 secret</div>
				<div><b>encrypted</b></div>
				<code>folio secret …</code>
			</div>
		</div>
		<StepTerminal
			{...pace}
			autoplay
			title="EnvFolio"
			style="--terminal-ok: var(--ep-text); --terminal-warn: var(--ep-secret); font-size: 0.95em"
			lines={[
				{ cmd: 'folio ls' },
				{ out: 'EnvFolio Store', tone: 'muted' },
				{ lead: '├── ', out: 'aws', tone: 'dir' },
				{ lead: '│   └── ', out: '📄region', tone: 'ok' },
				{ lead: '├── ', out: 'db', tone: 'dir' },
				{ lead: '│   ├── ', out: '🔑pass', tone: 'warn' },
				{ lead: '│   └── ', out: '📄user', tone: 'ok' },
				{ lead: '├── ', out: 'gh', tone: 'dir' },
				{ lead: '│   ├── ', out: '🔑token', tone: 'warn' },
				{ lead: '│   └── ', out: '📄user', tone: 'ok' },
				{ lead: '└── ', out: 'git', tone: 'dir' },
				{ lead: '    └── ', out: '📄user_name', tone: 'ok' }
			]}
		/>
	</Steps>
</Shot>

<Note>
	<p>It can store plain texts and encrypted secrets.</p>
	<p>Because your applications need both.</p>
</Note>

<style>
	.kinds {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
	}
	.kind {
		background: var(--ep-panel);
		border: 2px solid var(--ep-line);
		border-radius: 18px;
		padding: 26px 28px;
		font-size: 38px;
	}
	.t-kind {
		border-top: 10px solid var(--ep-text);
	}
	.s-kind {
		border-top: 10px solid var(--ep-secret);
	}
	.tag {
		font:
			700 44px 'Fira Code',
			monospace;
		margin-bottom: 8px;
	}
	.t-kind .tag {
		color: var(--ep-text);
	}
	.s-kind .tag {
		color: var(--ep-secret);
	}
	.kind code {
		display: block;
		margin-top: 14px;
		color: var(--ep-dim);
		font-size: 32px;
	}
</style>
`,Cd=`<!--
  8 · trust — one bash script, small dependencies, backup and restore, readable.
-->
<script>
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';

	const facts = [
		{ big: '1', small: 'bash script' },
		{ big: 'pass · gpg · git', small: 'and a few standard tools' },
		{ big: 'backup / restore', small: 'the whole store, key included — take it anywhere' }
	];
<\/script>

<Shot kicker="why trust it" title="One script you can read." size={110}>
	<div class="facts">
		{#each facts as f}
			<div class="fact">
				<div class="big">{f.big}</div>
				<div class="small">{f.small}</div>
			</div>
		{/each}
	</div>
	<p class="punch">Read every line. See that no secret goes where it shouldn't.</p>
	<p class="punch">
		No lock-in: <a href="https://www.passwordstore.org/">\`<code>pass</code>\`</a> opens your secrets; texts
		are plain files.
	</p>
</Shot>

<Note>
	<p>EnvFolio is one bash script so there is nothing to hide -- look at the code.</p>
	<p>It needs only a few standard dependencies like pass, gpg, and git.</p>
	<p>Is secret store is readable by \`pass\` so you can always fall back to that.</p>
	<p>It also has built-in backup and restore feature so you don't loose your items.</p>
</Note>

<style>
	.facts {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	.fact {
		background: var(--ep-panel);
		border: 2px solid var(--ep-line);
		border-radius: 18px;
		padding: 26px 34px;
	}
	.big {
		color: var(--ep-accent);
		font-size: 66px;
		font-weight: 800;
		line-height: 1.1;
	}
	.small {
		color: var(--ep-dim);
		font-size: 36px;
	}
	.punch {
		margin: 0;
		font-size: 46px;
		font-weight: 700;
		text-align: center;
	}
</style>
`,$d=`<!--
  6 · vars — a vars file says where each value comes from; it holds no secret, so commit it.

  The session is real \`folio\` output from demos/ep001/capture.sh (a sandbox store, fake values).
-->
<script>
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
	import Steps from '@geekpresent/core/components/Steps.svelte';
	import StepTerminal from '@geekpresent/core/components/StepTerminal.svelte';
	import { pace } from '$lib/pace';
<\/script>

<Shot kicker="for a project" title="Write it once." size={120}>
	<Steps>
		<p class="punch">Specify what items are needed in a file.</p>
		<div class="file">
			<div class="fname">app.vars <span>· committed with the code</span></div>
			<pre><code
					>GH_TOKEN=<span class="s">@&#123;gh/token&#125;</span>
DB_URL=pg://<span class="t">@&#123;db/user&#125;</span>:<span class="s">@&#123;db/pass&#125;</span
					>@<span class="env">$&#123;DB_HOST&#125;</span>/app
LOG_LEVEL=info</code
				></pre>
		</div>
		<StepTerminal
			{...pace}
			autoplay
			title="EnvFolio"
			style="--terminal-ok: var(--ep-text); --terminal-warn: var(--ep-secret); font-size: 0.72em"
			lines={[
				{ cmd: 'folio exec -s --vars app.vars -- deploy.sh' },
				{ out: '==| Super Cool App -- Deployment |==' },
				{ out: 'Parameter check:' },
				{ out: [' GH_TOKEN : ✅ Given'] },
				{ out: ' DB_URL   : ✅ pg://app:###@12.34.56.7/app' },
				{ out: ' LOG_LEVEL: info' },
				{ out: 'Deployment will now start ...' },
				{ out: '...' },
				{ out: '--| Deploying is completed |--' }
			]}
		/>
		<p class="punch">No secrets inside. No code inside.</p>
		<dl class="legend">
			<dt><code class="t">@&#123;name&#125;</code></dt>
			<dd>a text or secret from the store</dd>
			<dt><code class="env">$&#123;NAME&#125;</code></dt>
			<dd>from the running shell environment</dd>
			<dt><code>…:-<i>fallback</i></code></dt>
			<dd>if unset or missing: <code>@&#123;gh/token:-none&#125;</code></dd>
			<dt><code class="t">@&#123;folder/*&#125;</code></dt>
			<dd>every item under a folder</dd>
		</dl>
		<br />
	</Steps>
</Shot>

<Note>
	<p>You can list the items you want in a file and EnvFolio will pupolate them at use.</p>
</Note>

<style>
	.file {
		background: var(--ep-panel);
		border: 2px solid var(--ep-line);
		border-radius: 14px;
		overflow: hidden;
		/* Its whole height: the Terminal below fills the column and would squeeze it. */
		flex-shrink: 0;
	}
	.fname {
		padding: 14px 26px;
		border-bottom: 2px solid var(--ep-line);
		font:
			600 32px 'Fira Code',
			monospace;
	}
	.fname span {
		color: var(--ep-dim);
		font:
			400 28px system-ui,
			sans-serif;
	}
	pre {
		margin: 0;
		padding: 22px 26px;
		font-size: 30px;
		line-height: 1.5;
	}
	.env {
		color: var(--ep-accent);
	}
	/* The syntax legend: what each form in a vars file means (MANUAL, "From a vars file"). */
	.legend {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 14px 28px;
		align-items: baseline;
		margin: 0;
		font-size: 34px;
	}
	.legend dt {
		font-size: 36px;
		font-weight: 700;
	}
	.legend dd {
		margin: 0;
		color: var(--ep-dim);
	}
	.legend dd code {
		color: var(--ep-fg);
	}
	.punch {
		margin: 0;
		font-size: 46px;
		font-weight: 700;
		text-align: center;
	}
</style>
`,Ld=`<!--
  clipboard — usable, 3: show secret -c copies a secret's first line (or --clip=<line>) without
  showing it, and the clipboard is cleared after 45 seconds (PASSWORD_STORE_CLIP_TIME); a text can
  be copied too, and is not cleared (MANUAL \`folio show secret\`, \`folio show text\`; README _Texts
  and secrets_).

  The terminal is real \`folio show secret -c\` output from demos/ep003/capture.sh (a sandbox store,
  fake values), as on EP003's ls slide.
-->
<script>
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
	import Terminal from '@geekpresent/core/components/Terminal.svelte';
<\/script>

<Shot kicker="usable · 3 / 5" title="Clipboard" size={120}>
	<p class="d-sub">Need to use items some whereelse? Export them in a file and move it there.</p>
	<div class="rest">
		<div class="term">
			<Terminal
				typing={false}
				controls={false}
				title="EnvFolio"
				style="--terminal-ok: var(--ep-text); --terminal-warn: var(--ep-secret); font-size: 0.75em"
				lines={[
					{ cmd: 'folio show secret -c gh/token' },
					{ out: 'Copied gh/token to clipboard. Will clear in 45 seconds.', tone: 'muted' }
				]}
			/>
		</div>
		<ul class="d-points">
			<li>never shown on the screen</li>
			<li>the clipboard is cleared after 45 seconds</li>
			<li>a <span class="t">text</span> copies too, and stays</li>
		</ul>
	</div>
</Shot>

<Note>
	<p>
		Need a secret somewhere else? Dash c puts it on the clipboard, and you paste it wherever. A
		quiet transfer nobody has to see.
	</p>
	<p>The clipboard clears after forty-five seconds. A text copies too, and stays.</p>
</Note>

<style>
	/* Under the d-sub, the rest of the body, centred in it, so the d-sub stays right under the
	   headline. The padding below evens the space above and below, as on names.html. */
	.rest {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 40px;
		padding-bottom: 300px;
	}
	/* The Terminal fills its box: a box of four lines, so the card stays small. */
	.term {
		height: 380px;
	}
</style>
`,Rd=`<!--
  get-it — the call to action: the GitHub release, Homebrew or the install script (README
  _Install_); the article, with the whole design in detail; then all episodes and the README. Laid out
  as EP001's and EP003's get-it.
-->
<script>
	import { base } from '$app/paths';
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
	import QRCode from '@geekpresent/core/components/QRCode.svelte';
<\/script>

<!-- The big mark takes the morph names, so the small one at the foot of three-ways grows into it. -->
<Shot morph={false}>
	<div class="hero">
		<img
			class="logo"
			src="{base}/logo-dark.svg"
			alt="EnvFolio logo"
			style="view-transition-name: ep-logo"
		/>
		<div class="name" style="view-transition-name: ep-name"><b>Env</b>Folio</div>
	</div>
	<div class="where">
		<div class="label">Get it on GitHub</div>
		<code class="url">github.com/NawaMan/EnvFolio</code>
	</div>
	<div class="qr">
		<QRCode value="https://github.com/NawaMan/EnvFolio/releases/latest" size={300} />
	</div>
	<div class="where">
		<div class="label">or with Homebrew, or the install script</div>
		<div class="install">
			<code class="brew"><span class="prompt">$</span> brew install nawaman/tap/folio</code>
			<a href="https://github.com/NawaMan/EnvFolio#install"
				><code class="brew"><span class="prompt">$</span> curl -fsSL …/install.sh | bash</code></a
			>
		</div>
	</div>
	<p class="read">
		The whole design, in detail: <a href="{base}/ep002-by-design-article">read the article</a>.
	</p>
	<p class="punch">Keep your secrets<br />out of plain sight.</p>
	<p class="more">
		<a href="{base}/">All episodes</a> ·
		<a href="https://github.com/NawaMan/EnvFolio#readme">README</a>
	</p>
</Shot>

<Note>
	<p>Get EnvFolio from GitHub, with Homebrew, or with the install script.</p>
	<p>The article goes through all of it, in more detail.</p>
	<p>And keep your secrets out of plain sight.</p>
</Note>

<style>
	.hero {
		text-align: center;
	}
	.logo {
		display: block;
		width: 220px;
		height: 220px;
		margin: 0 auto 30px;
	}
	/* As wide as the word, not the slide: the morph scales the word's box, and a full-width box
	   would stretch the small word as it grows. */
	.name {
		width: fit-content;
		margin: 0 auto;
		font-size: 170px;
		font-weight: 300;
		line-height: 1;
	}
	.name b {
		font-weight: 800;
	}
	.where {
		text-align: center;
	}
	.label {
		color: var(--ep-dim);
		font-size: 40px;
	}
	.url {
		font-size: 50px;
	}
	/* The install line, as a one-line terminal: the deck's panel, a green prompt. */
	.brew {
		display: inline-block;
		margin-top: 10px;
		padding: 14px 28px;
		background: var(--ep-panel);
		border: 2px solid var(--ep-line);
		border-radius: 14px;
		font-size: 42px;
	}
	.prompt {
		color: #00b356;
	}
	.install {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 14px;
	}
	.install a {
		color: inherit;
		text-decoration: none;
	}
	.qr {
		display: flex;
		justify-content: center;
	}
	.read {
		margin: 0;
		color: var(--ep-dim);
		font-size: 40px;
		text-align: center;
	}
	.punch {
		margin: 0;
		font-size: 54px;
		font-weight: 700;
		text-align: center;
	}
	.more {
		margin: 0;
		color: var(--ep-dim);
		font-size: 36px;
		text-align: center;
	}
	.more a,
	.read a {
		color: var(--ep-accent);
	}
</style>
`,Id=`<!--
  key — trusted, 1: EnvFolio stands on GPG. The store key is your own GPG key, in your own
  keyring, locked with your passphrase (MANUAL \`folio init\`: picks or creates the key); gpg-agent
  remembers the passphrase for its cache time, so the next \`folio\`, \`pass\` or \`gpg\` needs none
  (MANUAL _Leave no passphrase behind_). It does no cryptography itself: gpg is the only crypto
  tool the folio script calls (README _Built on \`pass\`_, _Why not …?_). The pass store is the
  next slide's; texts, the one after.
-->
<script>
	import Part from '../Part.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
<\/script>

<Part
	kicker="trusted · 1 / 4"
	title="Built on GPG"
	sub="GPG holds your key, locked with your passphrase. <code>gpg-agent</code> remembers it for a while."
	shown={2}
	fresh={2}
/>

<Note>
	<p>How can a new tool be trusted?</p>
	<p>Well, it leans heavily on existing trusted tools, such as GPG and pass.</p>
	<p>
		Folio does not do any cryptography operations by itself: it delegates all of this to GPG and
		pass.
	</p>
	<p>The keys used are all GPG keys managed by the GPG key ring and agent.</p>
</Note>
`,Od=`<!--
  names — usable, 1: naming a variable. Auto naming: from the path, \`/\`, \`-\` and \`.\` turn into \`_\`, uppercased
  (gh/token → GH_TOKEN, gh/api-key → GH_API_KEY); a name that is still not a valid variable
  (gh/api+key) is left out with a warning. Explicit naming: VAR=<name> picks the
  name. Namespace: a top @namespace is dropped (@me/gh/token → GH_TOKEN) (README _Naming the variables_; MANUAL
  \`folio exec\`, Variable names).
-->
<script>
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
<\/script>

<Shot kicker="usable · 1 / 5" title="Name it your way" size={110}>
	<p class="d-sub">Name environmental variables the way you want.</p>
	<div class="parts">
		<section class="part">
			<h2>Auto naming</h2>
			<p class="rule">From the path.</p>
			<div class="map">
				<code class="s">gh/token</code><span class="arrow">→</span><code>GH_TOKEN</code>
				<code class="s">gh/api-key</code><span class="arrow">→</span><code>GH_API_KEY</code>
				<code class="s">gh/api+key</code><span class="arrow">→</span><span class="none"
					>none, with a warning</span
				>
			</div>
		</section>
		<section class="part">
			<h2>Explicit naming</h2>
			<pre class="cmd"><code
					><span class="prompt">$</span> folio exec -s \\
    GITHUB_TOKEN=gh/token \\
    -- gh release list</code
				></pre>
		</section>
		<section class="part">
			<h2>Namespace</h2>
			<p class="rule">A top <code>@namespace</code> is dropped.</p>
			<div class="map">
				<code class="s">@group/gh/token</code><span class="arrow">→</span><code>GH_TOKEN</code>
			</div>
		</section>
	</div>
</Shot>

<Note>
	<p>Fourth, usable. Names come from the path. Or name it yourself.</p>
	<p>A namespace in front, like at-me, is dropped.</p>
</Note>

<style>
	/* Under the d-sub, the rest of the body: the three parts centred in it, so the d-sub stays
	   right under the headline, as on the other slides. The padding below, set by eye, evens the
	   space above the parts and below them. */
	.parts {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-bottom: 120px;
	}
	/* Three parts: auto naming, explicit naming, namespace. Each as tall as its content, so no
	   empty space above a heading. */
	.part {
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding: 28px 0;
		font-size: 40px;
	}
	.part + .part {
		border-top: 3px solid var(--ep-line);
	}
	h2 {
		margin: 0;
		color: var(--ep-accent);
		font-size: 56px;
		font-weight: 800;
	}
	.rule {
		margin: 0;
		color: var(--ep-dim);
	}
	.map {
		display: grid;
		grid-template-columns: auto auto auto;
		justify-content: center;
		align-items: center;
		gap: 24px 24px;
		margin: 0;
		font-size: 48px;
	}
	.arrow {
		color: var(--ep-dim);
	}
	.none {
		color: var(--ep-dim);
		font-size: 40px;
	}
	.cmd {
		margin: 0;
		font-size: 42px;
		line-height: 1.4;
	}
	/* A command, not a name: no chip behind it. */
	.cmd code {
		padding: 0;
		background: none;
	}
	.prompt {
		color: #00b356;
	}
</style>
`,Fd=`<!--
  passphrase — usable, 4: type it once. gpg asks, through pinentry, in the terminal or a window;
  gpg-agent remembers it for its cache time, so the next folio, pass or gpg needs none, and unlocks
  the key's secret half (MANUAL _Passphrase prompts in a window_, _Leave no passphrase behind_; the picture's facts in ./Pieces.svelte).
-->
<script>
	import Part from '../Part.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
<\/script>

<Part
	kicker="usable · 4 / 5"
	title="Type it once"
	sub="<code style='white-space: nowrap'>gpg-agent</code> remembers it, so the next command asks for nothing."
	shown={9}
	fresh={2}
	lit={[1]}
	dimBanner
/>

<Note>
	<p>
		And the passphrase? You type it once. gpg asks, through pinentry, and gpg-agent remembers it for
		a while. So the next folio command just runs, and so does pass, and gpg.
	</p>
</Note>
`,Hd=`<!--
  portable — export some items into one locked file; import it into another store, or use the file
  itself as the store with exec --from, on a machine with no store (MANUAL \`folio export\`: always
  locked, with a passphrase or to a public key, --to; a key made for the export alone, so the
  store's key never leaves; \`folio import\`; _From an export file_: nothing is kept).

  The terminals are real output from demos/ep002/portable.sh (a sandbox store, fake values): the
  same setup as EP001's anywhere slide, with a deploy.sh of its own that prints just these three
  lines. The laptop shows two of the export's ✓ lines; the rest of its report is left out.
-->
<script>
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
	import Terminal from '@geekpresent/core/components/Terminal.svelte';
<\/script>

<Shot kicker="portable" title="Take it with you" size={110}>
	<div class="laptop">
		<Terminal
			typing={false}
			controls={false}
			title="💻 your laptop"
			style="--terminal-ok: #00b356; font-size: 0.7em"
			lines={[
				{ cmd: 'folio export -s --vars app2.vars \\\\' },
				{ cmd: '    -o app2.folio', cont: true },
				{ out: '✓ Items: 3 (texts: 1, secrets: 2)', tone: 'ok' },
				{ out: '✓ File: app2.folio', tone: 'ok' }
			]}
		/>
	</div>
	<div class="hop">↓ <code>app2.folio</code> · one locked file</div>
	<div class="server">
		<Terminal
			typing={false}
			controls={false}
			title="☁️ a server, or a cloud booth · no store"
			style="font-size: 0.7em"
			lines={[
				{ cmd: 'folio exec -s --from app2.folio \\\\' },
				{ cmd: '    --vars app2.vars -- deploy.sh', cont: true },
				{ out: '==| Super Cool App -- Deployment |==' },
				{ out: '...' },
				{ out: '--| Deploying is completed |--' }
			]}
		/>
	</div>
	<ul class="d-points">
		<li>locked: a passphrase, or their public key</li>
		<li>store's key never leaves your machine</li>
		<li><code>import</code> it, or use the file as the store</li>
	</ul>
</Shot>

<Note>
	<p>
		Third, portable. Folio export puts just what a machine needs into one locked file. Your store's
		key never leaves.
	</p>
	<p>There, import it, or use the file itself as the store, and keep nothing.</p>
</Note>

<style>
	/* Each Terminal fills its box: boxes just tall enough for their lines, so no empty space below. */
	.laptop {
		height: 400px;
	}
	.server {
		height: 455px;
	}
	.hop {
		color: var(--ep-dim);
		font-size: 40px;
		text-align: center;
	}
</style>
`,Kd=`<!--
  readable — trusted, 2: a text is plain, and gpg signs it with the store's key; a text changed
  outside EnvFolio, or signed by another key, is refused (MANUAL \`insert text\`: "signed with the
  store's key as <name>.txt.sig, so a changed text can be told"; \`show text\`: checking needs no
  passphrase; _A text changed outside EnvFolio is not shown_; README _Texts and secrets_). And
  folio runs pass, gpg and git for you; pass still opens every secret, so nothing is locked in
  (README _Using \`pass\` directly_).
-->
<script>
	import Part from '../Part.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
<\/script>

<Part
	kicker="trusted · 3 / 4"
	title="<span class='t'>Texts</span> are signed"
	sub="<code>gpg</code> signs each one with your key. A text changed behind EnvFolio's back is refused."
	shown={7}
	fresh={1}
/>

<Note>
	<p>Plain texts stay plain.</p>
	<p>But Folio uses GPG to sign the text value to ensure its integrity.</p>
	<p>The text item is put in the same folder structure as the secrets.</p>
</Note>
`,jd=`<!--
  script — trusted, 3: EnvFolio is one bash script, plain text you can read; check the folio you
  installed against the SHA256SUMS its release publishes (install.sh checks the download
  too); plain, linear bash, so anyone can read it and see that no secret is sent anywhere (README
  _Install_, _Design principles_). Having an AI read it is the viewer's own check, not a claim
  about EnvFolio.

  The terminal, printed whole (no typing, no steps), is real output from demos/ep002/capture.sh: a real 1.1.0 install (EnvFolio's own
  install.sh, in a temp HOME), then these four lines. The long lines are split with \`\\\` to fit; they
  run the same.
-->
<script>
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
	import Terminal from '@geekpresent/core/components/Terminal.svelte';
<\/script>

<Shot kicker="trusted · 4 / 4" title="One readable script" size={88}>
	<p class="d-sub">One bash file, plain text, start to end.</p>
	<div class="term">
		<Terminal
			typing={false}
			controls={false}
			title="EnvFolio"
			style="--terminal-ok: var(--ep-text); font-size: 0.675em"
			lines={[
				{ cmd: 'pushd "$(dirname "$(which folio)")"' },
				{ out: '~/.local/bin ~', tone: 'muted' },
				{ cmd: 'version=$(folio version | cut -d" " -f2)' },
				{ cmd: 'releases=https://github.com/NawaMan/\\\\' },
				{ cmd: 'EnvFolio/releases/download', cont: true },
				{ cmd: 'curl -fsSL $releases/v$version/SHA256SUMS \\\\' },
				{ cmd: '    | sha256sum -c', cont: true },
				{ out: 'folio: OK', tone: 'ok' },
				{ cmd: 'popd' },
				{ out: '~', tone: 'muted' }
			]}
		/>
	</div>
	<ul class="d-points">
		<li>plain text: every line to read</li>
		<li>your <code>folio</code> = the release's hash</li>
		<li>flat, linear: nothing hidden</li>
		<li>or ask an AI: does a secret leave?</li>
	</ul>
</Shot>

<Note>
	<p>
		And folio itself is one plain bash script. Check its hash, then read it, top to bottom. Or have
		an AI read it for you, and ask if any secret is sent anywhere.
	</p>
</Note>

<style>
	/* The Terminal fills its box: a box just tall enough for its lines, so no empty space below. */
	.term {
		height: 770px;
	}
</style>
`,Bd=`<!--
  secure — each item becomes a variable by its path (gh/token → GH_TOKEN; README _Naming
  the variables_: \`/\` turns into \`_\`, uppercased) and goes straight into the environment of the one
  command that needs it (MANUAL \`folio exec\`). No need to show it, save it to a file or copy it,
  so nothing to clean up after: the variables live in that command's environment only. No option
  takes a secret as an argument, so none lands in your shell history (README _Security model_).
  "No need", not "never": \`show secret\` and \`-c\` do show and copy, when you ask.

  The terminal is real \`folio exec\` output from demos/ep003/capture.sh (a sandbox store, fake
  values). release.sh is a stand-in, as EP001's deploy.sh: it uses what it is given, prints the
  text, and only says the secret is there.
-->
<script>
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
	import Terminal from '@geekpresent/core/components/Terminal.svelte';
<\/script>

<Shot kicker="secure" title="Direct to process" size={96}>
	<p class="d-sub">The command gets texts and secrets directly, as variables.</p>
	<div class="term">
		<Terminal
			typing={false}
			controls={false}
			title="EnvFolio"
			style="--terminal-ok: var(--ep-text); --terminal-warn: var(--ep-secret); font-size: 0.75em"
			lines={[
				{ cmd: 'folio exec -s gh -- release.sh' },
				'==| Releasing v1.2.0 |==',
				'GH_USER : demo@example.com',
				'GH_TOKEN: ✅ given',
				'Publishing ...',
				'...',
				'--| Done |--'
			]}
		/>
	</div>
	<ul class="d-points">
		<li>convert item to variable, automatically: <code>gh/token</code> → <code>GH_TOKEN</code></li>
		<li>
			direct to the sub process;
			<ul>
				<li>no need to show on screen</li>
				<li>save it to a file</li>
				<li>nor copy to clipboard</li>
			</ul>
		</li>
		<li>nothing to clean up: no variable left, no file to delete</li>
		<li>nothing in your shell history</li>
	</ul>
</Shot>

<Note>
	<p>
		Second, secure. Folio exec turns each item into a variable, gh slash token becomes GH_TOKEN, and
		hands it straight to the command.
	</p>
	<p>
		No need to show it, save it to a file, or copy it. Nothing to clean up after, and nothing in
		your shell history.
	</p>
</Note>

<style>
	/* The Terminal fills its box: a box just tall enough for its lines, so no empty space below. */
	.term {
		height: 600px;
	}
</style>
`,Ud=`<!--
  start — the question a new secret manager has to answer, and the four answers this episode
  gives, one section each: trusted, secure, portable, usable. Each answer's line is a fact from
  ../EnvFolio README (_Built on \`pass\`_, _Security model_, _Easy to move_, _Naming the variables_,
  _Vars files_) and MANUAL (_Never asked_, _Leave no passphrase behind_).
-->
<script>
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
<\/script>

<Shot kicker="EP002 · by design" title="Why & How EnvFolio?" size={90}>
	<div class="four">
		<div class="one">
			<div class="d-tag">trusted</div>
			<div>built on already trusted tools, and inspectable</div>
		</div>
		<div class="one">
			<div class="d-tag">secure</div>
			<div>secrets go straight to the command</div>
		</div>
		<div class="one">
			<div class="d-tag">portable</div>
			<div>export to a locked file, use it on any machine</div>
		</div>
		<div class="one">
			<div class="d-tag">usable</div>
			<div>plain texts, names, vars files, the clipboard, your passphrase your way</div>
		</div>
	</div>
</Shot>

<Note>
	<p>This new software offers to handle your sensitive information.</p>
	<p>So being suspicious about it is a fair reaction.</p>
	<p>In this VDO, I will discuss how EnvFolio is designed and built to be:</p>
	  <ul>
	    <li>trusted,</li>
	    <li>secure,</li>
	    <li>portable, and</li>
	    <li>easy to use.</li>
	  </ul>
</Note>

<style>
	.four {
		display: flex;
		flex-direction: column;
		gap: 26px;
	}
	.one {
		display: flex;
		flex-direction: column;
		gap: 8px;
		padding: 26px 32px;
		background: var(--ep-panel);
		border: 2px solid var(--ep-line);
		border-left: 10px solid var(--ep-accent);
		border-radius: 14px;
		font-size: 44px;
		line-height: 1.25;
	}
</style>
`,qd=`<!--
  store — trusted, 2: the store is a plain pass store (~/.folio, private, 700), its .gpg-id names
  the store key, secrets are encrypted to it, and git keeps every change (MANUAL \`folio init\`,
  \`insert secret\`; README _Built on \`pass\`_, _Texts and secrets_, _Syncing the store with git_).
  The key is the previous slide's; texts are the next slide's.
-->
<script>
	import Part from '../Part.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
<\/script>

<Part
	kicker="trusted · 2 / 4"
	title="<span class='s'>Secrets</span> in <code>pass</code>"
	sub="<code>pass</code> keeps the <span class='s'>secrets</span> encrypted to your key, and git keeps every change."
	shown={6}
	fresh={4}
/>

<Note>
	<p>The secret store is managed by \`pass\`; another trusted unix standard tool.</p>
	<p>So we get the same file and folder structure, and the encryption is done by \`pass\`.</p>
</Note>
`,Gd=`<!--
  three-ways — usable, 4: how often the passphrase is asked, your choice. Auto: never asked, from a
  file only you can read, FOLIO_STORE_PASSPHRASE_FILE (MANUAL _Never asked, on a machine you
  trust_). Normal: pinentry asks, gpg-agent remembers it for its cache time (the default).
  Strict: --fresh-passphrase or FOLIO_FRESH_PASSPHRASE=1, the agent forgets it when each command
  starts and ends (MANUAL _Leave no passphrase behind_).
-->
<script>
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
<\/script>

<Shot kicker="usable · 5 / 5" title="Three ways to unlock" size={90}>
	<p class="d-sub">How often you type the passphrase is up to you.</p>
	<div class="rest">
		<div class="ways">
			<div class="way">
				<div class="head"><span class="d-tag">auto</span><span class="when">never asked</span></div>
				<code>FOLIO_STORE_PASSPHRASE_FILE</code>
				<div class="what">a file only you can read · a machine you trust</div>
			</div>
			<div class="way normal">
				<div class="head">
					<span class="d-tag">normal</span><span class="when">asked once, then a while</span>
				</div>
				<code>pinentry</code>
				<div class="what">gpg-agent remembers it · the default</div>
			</div>
			<div class="way">
				<div class="head">
					<span class="d-tag">strict</span><span class="when">asked every time</span>
				</div>
				<code>--fresh-passphrase</code>
				<div class="what">forgotten when each command ends · a machine you trust less</div>
			</div>
		</div>
	</div>
</Shot>

<Note>
	<p>How often you type it is up to you.</p>
	<p>Auto: in a file only you can read, never asked.</p>
	<p>Normal: asked once, then remembered. The default.</p>
	<p>Strict: asked every time, and forgotten when the command ends.</p>
</Note>

<style>
	/* Under the d-sub, the rest of the body, centred in it, so the d-sub stays right under the
	   headline. The padding below evens the space above and below, as on names.html. */
	.rest {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 40px;
		padding-bottom: 160px;
	}
	.way code {
		padding: 15px;
	}
	.ways {
		display: flex;
		flex-direction: column;
		gap: 26px;
	}
	.way {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 26px 30px;
		margin-bottom: 40px;
		background: var(--ep-panel);
		border: 2px solid var(--ep-line);
		border-radius: 14px;
		font-size: 38px;
	}
	.normal {
		border-color: var(--ep-accent);
		border-width: 3px;
	}
	.head {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 20px;
	}
	.when {
		font-size: 40px;
		font-weight: 800;
	}
	.what {
		color: var(--ep-dim);
		font-size: 34px;
	}
</style>
`,Wd=`<!--
  title — the EnvFolio mark, big, alone on the slide. Silent: no narration.

  The icon and the word carry the same view-transition names as the small mark at the foot of
  every Shot (../Shot.svelte), so paging on (\`transition: 'morph'\` in pages.ts) glides them down
  into it (../view-transitions.css).
-->
<script>
	import { base } from '$app/paths';
	import EmptyPage from '@geekpresent/core/templates/EmptyPage.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
<\/script>

<EmptyPage style="background: var(--ep-bg)">
	<div class="title">
		<img src="{base}/logo-dark.svg" alt="" style="view-transition-name: ep-logo" />
		<div class="name" style="view-transition-name: ep-name"><b>Env</b>Folio</div>
	</div>
</EmptyPage>
<Note>
<p>In the previous video, I introduced you to EnvFolio -- a secret manager.</p>
</Note>
<style>
	.title {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 40px;
		height: 100%;
		font-family: system-ui, sans-serif;
	}
	img {
		width: 400px;
		height: 400px;
	}
	.name {
		color: var(--ep-dim);
		font-size: 150px;
	}
	.name b {
		color: var(--ep-fg);
	}
</style>
`,Vd=`<!--
  vars — usable, 2: a vars file says what a command needs, by its own names, and where each value
  comes from; it holds no value itself, so it can go in the project's repository (README _Vars
  files_ — the file is the README's deploy.vars; \`folio check vars\` needs no store; with --vars,
  the command gets only what the file sets).
-->
<script>
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
	import Terminal from '@geekpresent/core/components/Terminal.svelte';
<\/script>

<Shot kicker="usable · 2 / 5" title="A vars file" size={120}>
	<p class="d-sub">List what a command needs, by its own names. No value inside.</p>
	<div class="rest">
		<div class="term">
			<Terminal
				typing={false}
				controls={false}
				title="EnvFolio"
				style="--terminal-ok: var(--ep-text); font-size: 0.7em"
				lines={[
					{ cmd: 'folio check vars deploy.vars' },
					{ cmd: 'folio exec -s --vars deploy.vars \\\\' },
					{ cmd: '    -- ./deploy.sh', cont: true }
				]}
			/>
		</div>
		<div class="file">
			<div class="fname">deploy.vars <span>· commit it with the code</span></div>
			<pre><code
					>GITHUB_TOKEN=<span class="s">@&#123;gh/token&#125;</span>
AUTH=Bearer <span class="s">@&#123;gh/token&#125;</span>
REGION=<span class="t">@&#123;aws/region</span>:-<span class="env">$&#123;AWS_REGION&#125;</span
					><span class="t">&#125;</span><span class="t">@&#123;aws/*&#125;</span></code
				></pre>
		</div>
		<dl class="legend">
			<dt><code class="t">@&#123;name&#125;</code></dt>  <dd>an item from the store</dd>
			<dt><code class="env">$&#123;NAME&#125;</code></dt><dd>an environmental variable from the running shell</dd>
			<dt><code>:-</code></dt>                           <dd>a fallback, when the item is not there</dd>
		</dl>
	</div>
</Shot>

<Note>
	<p>A vars file says what a project needs, and where each value comes from.</p>
	<p>It holds no value, so commit it with the code.</p>
</Note>

<style>
	/* Under the d-sub, the rest of the body: the file, the legend and the commands centred in it,
	   so the d-sub stays right under the headline. The padding below evens the space above and
	   below, as on names.html. */
	.rest {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 40px;
		padding-bottom: 160px;
	}
	.file {
		background: var(--ep-panel);
		border: 2px solid var(--ep-line);
		border-radius: 14px;
		overflow: hidden;
	}
	.fname {
		padding: 14px 26px;
		border-bottom: 2px solid var(--ep-line);
		font:
			700 34px 'Fira Code',
			monospace;
	}
	.fname span {
		color: var(--ep-dim);
		font-weight: 400;
	}
	pre {
		margin: 0;
		padding: 22px 26px;
		font-size: 33px;
		line-height: 1.45;
	}
	.env {
		color: #c792ea;
	}
	.legend {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 10px 24px;
		margin: 0;
		font-size: 38px;
	}
	.legend dd {
		margin: 0;
		color: var(--ep-dim);
	}
	/* The Terminal fills its box: a box just tall enough for its three lines. */
	.term {
		height: 360px;
	}
</style>
`,Yd=`<!--
  6 · exec — a folder's items as variables for one command; secrets only with -s; the first read
  of a secret is where pinentry asks and gpg-agent starts remembering (EP002 shows how).

  Real \`folio ls gh\` and \`folio exec\` output from demos/ep003/capture.sh (a sandbox store, fake
  values); \`ls gh\` first shows what the folder holds. The capture has no screen that draws emoji,
  so it printed (S)/(T); a screen shows 🔑/📄, as on the ls slide. The \`env\` is only there to
  show the values arrived; a real command just uses them.
-->
<script>
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
	import Steps from '@geekpresent/core/components/Steps.svelte';
	import StepTerminal from '@geekpresent/core/components/StepTerminal.svelte';
	import { pace } from '$lib/pace';
<\/script>

<Shot kicker="step 5 · use them" title="<code>folio exec</code>" size={120}>
	<Steps>
		<StepTerminal
			{...pace}
			autoplay
			title="EnvFolio"
			style="--terminal-ok: var(--ep-text); --terminal-warn: var(--ep-secret); font-size: 0.75em"
			lines={[
				{ cmd: 'folio ls gh' },
				{ out: 'EnvFolio Store', tone: 'muted' },
				{ out: 'gh', tone: 'dir' },
				{ lead: '├── ', out: '🔑token', tone: 'warn' },
				{ lead: '└── ', out: '📄user', tone: 'ok' },
				{ cmd: 'folio exec -s gh \\\\' },
				{ cmd: "-- sh -c 'env | grep GH_'", cont: true },
				'GH_TOKEN=ghp_DEMO0000fake0000token',
				'GH_USER=demo@example.com'
			]}
		/>
		<div class="rows">
			<div class="row"><span class="t">📄 texts</span> come by default</div>
			<div class="row"><span class="s">🔑 secrets</span> only with <code>-s</code></div>
		</div>
		<div class="ask">
			<div class="tag">the first secret read</div>
			<div>pinentry asks for your passphrase,</div>
			<div>then gpg-agent remembers it a while.</div>
		</div>
	</Steps>
</Shot>

<Note>
	<p>To use them, run your command through \`folio exec\`.</p>
	<p>The folder \`gh\` holds a secret token, and a plain-text user.</p>
	<p>So, \`folio exec\` gives the command the variable GH_TOKEN and GH_USER.</p>
	<p>Texts come by default. But secrets come only with dash s.</p>
</Note>

<style>
	.rows {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
		font-size: 48px;
	}
	.ask {
		display: flex;
		flex-direction: column;
		gap: 6px;
		padding: 26px 30px;
		background: var(--ep-panel);
		border: 2px solid var(--ep-line);
		border-left: 10px solid var(--ep-accent);
		border-radius: 14px;
		font-size: 40px;
	}
	.tag {
		color: var(--ep-accent);
		font:
			700 36px 'Fira Code',
			monospace;
		text-transform: uppercase;
	}
</style>
`,Xd=`<!--
  9 · get-it — the call to action: the GitHub release, Homebrew or the install script (README
  _Install_); the article, which goes through every step; then all episodes and the README. Laid
  out as EP001's get-it.
-->
<script>
	import { base } from '$app/paths';
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
	import QRCode from '@geekpresent/core/components/QRCode.svelte';
<\/script>

<Shot>
	<div class="hero">
		<img class="logo" src="{base}/logo-dark.svg" alt="EnvFolio logo" />
		<div class="name"><b>Env</b>Folio</div>
	</div>
	<div class="where">
		<div class="label">Get it on GitHub</div>
		<code class="url">github.com/NawaMan/EnvFolio</code>
	</div>
	<div class="qr">
		<QRCode value="https://github.com/NawaMan/EnvFolio/releases/latest" size={300} />
	</div>
	<div class="where">
		<div class="label">or with Homebrew, or the install script</div>
		<div class="install">
			<code class="brew"><span class="prompt">$</span> brew install nawaman/tap/folio</code>
			<a href="https://github.com/NawaMan/EnvFolio#install"
				><code class="brew"><span class="prompt">$</span> curl -fsSL …/install.sh | bash</code></a
			>
		</div>
	</div>
	<p class="read">
		Every step, in detail: <a href="{base}/ep003-get-started-article">read the article</a>.
	</p>
	<p class="punch">Keep your secrets<br />out of plain sight.</p>
	<p class="more">
		<a href="{base}/">All episodes</a> ·
		<a href="https://github.com/NawaMan/EnvFolio#readme">README</a>
	</p>
</Shot>

<Note>
	<p>Get EnvFolio from GitHub, with Homebrew, or with the install script.</p>
	<p>The article goes through every step, in detail.</p>
	<p>And keep your secrets out of plain sight.</p>
</Note>

<style>
	.hero {
		text-align: center;
	}
	.logo {
		display: block;
		width: 220px;
		height: 220px;
		margin: 0 auto 30px;
	}
	.name {
		font-size: 170px;
		font-weight: 300;
		line-height: 1;
	}
	.name b {
		font-weight: 800;
	}
	.where {
		text-align: center;
	}
	.label {
		color: var(--ep-dim);
		font-size: 40px;
	}
	.url {
		font-size: 50px;
	}
	/* The install line, as a one-line terminal: the deck's panel, a green prompt. */
	.brew {
		display: inline-block;
		margin-top: 10px;
		padding: 14px 28px;
		background: var(--ep-panel);
		border: 2px solid var(--ep-line);
		border-radius: 14px;
		font-size: 42px;
	}
	.prompt {
		color: #00b356;
	}
	.install {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 14px;
	}
	.install a {
		color: inherit;
		text-decoration: none;
	}
	.qr {
		display: flex;
		justify-content: center;
	}
	.read {
		margin: 0;
		color: var(--ep-dim);
		font-size: 40px;
		text-align: center;
	}
	.punch {
		margin: 0;
		font-size: 54px;
		font-weight: 700;
		text-align: center;
	}
	.more {
		margin: 0;
		color: var(--ep-dim);
		font-size: 36px;
		text-align: center;
	}
	.more a,
	.read a {
		color: var(--ep-accent);
	}
</style>
`,Qd=`<!--
  3 · init — \`folio init\` asks for what a new key needs, then makes the key and the store.

  The session is \`folio init\` at a terminal with no key yet, put together from folio's own prompts
  (../EnvFolio/folio: init, ask-text, ask-choice, acknowledge) and the real run in
  demos/ep003/capture.sh (a sandbox, fake values). Trimmed: the Overview section, the long key-kind
  labels (…), the prompts' examples ([e.g. Jane Doe]), gpg's own lines and the summary box are
  left out.

  Each thing you give it has a number at the right of its line, and the legend below says what it
  is. Your answers are typed (\`cmd\` lines), each behind its question drawn as the row's prompt; the
  numbers and questions are CSS made from \`session\`. A legend entry lights up as its line appears,
  from the Terminal's own schedule.

  One step per point: the console stops on each question with its answer not yet typed, as a
  terminal waits for input ($lib/StopTerminal, \`{ before: n }\`); Space types the answer and runs
  on to the next question. It stops at gpg's passphrase prompt too (\`…\`, 4), and a last Space
  finishes. The first step plays when the slide opens (\`autoplay\`).
  The session is slowed (\`timing\`) to the pace of the Note.
-->
<script lang="ts">
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
	import Steps from '@geekpresent/core/components/Steps.svelte';
	import StopTerminal from '$lib/StopTerminal.svelte';
	import { pace, SPEED } from '$lib/pace';
	import { scheduleLines, type TerminalInput } from '@geekpresent/core/utils/terminalCore';

	// The deck's pace, with output lines slower (800 ms at normal speed) and a 3 s lead.
	const timing = { ...pace, startMs: 3000, outMs: Math.round(800 / SPEED) };

	// The session, one entry per Terminal line. An answer you type is a \`cmd\`, so it types itself
	// out; \`ask\` is the question it answers, drawn as that row's prompt in place of the \`$\`.
	// \`point\` is the legend number the line carries, at its right. The CSS for both is made below
	// from this list.
	type Row = { line: TerminalInput; ask?: string; point?: number };
	const session: Row[] = [
		{ line: { cmd: 'folio init' } },
		{ line: { out: '✓ Store path: ~/.folio', tone: 'ok' } },
		{ line: { cmd: 'Demo User' }, ask: 'Your name:', point: 1 },
		{ line: { out: '✓ Name: Demo User', tone: 'ok' } },
		{ line: { cmd: 'demo@example.com' }, ask: 'Your email:', point: 2 },
		{ line: { out: '✓ Email: demo@example.com', tone: 'ok' } },
		{ line: { out: '✓ Passphrase: gpg asks for it when it makes the key', tone: 'ok' } },
		{ line: 'Which kind of key?' },
		{ line: '1) Post-quantum (recommended) — ML-KEM-768 + …' },
		{ line: '2) Classical — X25519, Ed25519' },
		{ line: { cmd: '' }, ask: 'Pick a number (Enter for 1, Ctrl-D cancels):', point: 3 },
		{ line: { out: '✓ Key type: Post-quantum — ML-KEM-768 + …', tone: 'ok' } },
		{
			line: { out: "Next, gpg asks you to choose the new key's passphrase (twice).", tone: 'warn' }
		},
		{ line: { out: '…', tone: 'muted' }, point: 4 },
		{ line: { out: 'Your pass store is ready.', tone: 'ok' } }
	];
	const lines = session.map((s) => s.line);
	const schedule = scheduleLines(lines, timing);

	// The legend, keyed by the line that carries each number.
	const legend: [line: number, what: string][] = [
		[session.findIndex((s) => s.point === 1), 'your <b>name</b>'],
		[session.findIndex((s) => s.point === 2), 'your <b>email</b>'],
		[session.findIndex((s) => s.point === 3), 'the <b>kind of key</b>: post-quantum or classical'],
		[session.findIndex((s) => s.point === 4), 'your <b>passphrase</b>: gpg asks it, twice']
	];

	// One step per point, and one more to finish. The console stops on each question, its
	// answer not yet typed; at gpg's passphrase prompt (a printed line, \`…\`) once it is shown.
	// The last step plays to the end. The first step plays on arrival (\`autoplay\`), so after
	// \`r\` Spaces points 1..r+1 are lit. Each lights as its line appears: its delay is counted
	// from the start of its step, where the step before it stopped.
	const stopAt = legend.map(([line]) => (session[line].ask ? { before: line } : line));
	const stopTime = (s: (typeof stopAt)[number]) =>
		typeof s === 'number'
			? schedule.lines[s].delayMs + schedule.lines[s].durationMs
			: schedule.lines[s.before].delayMs + 1;
	const stepStart = [0, ...stopAt.map(stopTime)];

	// One rule per question row and per numbered row, by its place in the Terminal (row n =
	// entry n). The question replaces the \`$\` (the row is \`white-space: pre\`, so its trailing
	// space holds); the number is a disc pinned to the right end of the row.
	const row = (i: number) => \`.session .line:nth-child(\${i + 1})\`;
	const css = session
		.flatMap((s, i) => [
			s.ask
				? \`\${row(i)} .prompt { display: none; }
				   \${row(i)}::before { content: '\${s.ask.replace(/'/g, "\\\\'")} '; }\`
				: '',
			s.point ? \`\${row(i)} { position: relative; } \${row(i)}::after { content: '\${s.point}'; }\` : ''
		])
		.join('\\n');
<\/script>

<Shot kicker="step 2" title="<code>folio init</code>" size={120}>
	<Steps let:revealed>
		<p class="sub">Your store, and a GPG key to protect it.</p>
		<div class="session">
			{@html \`<style>\${css}</style>\`}
			<StopTerminal
				autoplay
				{stopAt}
				title="EnvFolio"
				{...timing}
				style="--terminal-ok: var(--ep-text); --terminal-warn: var(--ep-secret); --terminal-cmd-gap: 0; font-size: 0.6em"
				{lines}
			/>
		</div>
		<ol class="legend">
			{#each legend as [line, what], i}
				<li
					class:lit={revealed >= i}
					style="animation-delay: {schedule.lines[line].delayMs - stepStart[i]}ms"
				>
					<span class="num">{i + 1}</span><span>{@html what}</span>
				</li>
			{/each}
		</ol>
		<div class="keep">
			<div class="tag">remember it</div>
			<div style="font-size: 0.9em">🔒 your <b>passphrase</b> can't be reset. Never lose it.</div>
		</div>
	</Steps>
</Shot>

<Note>
	<p>Next, run \`folio init\`. It makes your store, and a GPG key to protect it.</p>
	<p>Use a key you have, or make a new one.</p>
	<p>In the newly-setup case, folio will create a new key.</p>
	<p>So, you will be asked for your name, your email, and the type of key.</p>
	<p>Then, you will be asked for a passphrase needed to use the key.</p>
	<p>The passphrase cannot be reset, so never lose it.</p>
</Note>

<style>
	.sub {
		margin: 0;
		color: var(--ep-dim);
		font-size: 44px;
	}
	/* A number, pinned to the right end of its own line (a float would drop below a full line).
	   Only a row given a \`content\` (the rules made from \`session\`) draws one. */
	.session :global(.line::after) {
		position: absolute;
		top: 0;
		right: 0;
		width: 1.5em;
		height: 1.5em;
		margin-top: 0.075em;
		border-radius: 50%;
		background: var(--ep-accent);
		color: var(--ep-bg);
		font-style: normal;
		font-weight: 700;
		line-height: 1.5em;
		text-align: center;
	}
	.legend {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 12px;
		margin: 0;
		padding: 0;
		list-style: none;
		font-size: 38px;
	}
	.legend li {
		display: flex;
		align-items: center;
		gap: 18px;
		opacity: 0.25;
	}
	/* Its point reached: it lights as its line prints (the delay is set on the element). */
	.legend li.lit {
		opacity: 1;
		animation: lit 600ms both;
	}
	/* Name and email share a row; the longer two take a row each. */
	.legend li:nth-child(n + 3) {
		grid-column: 1 / -1;
	}
	@keyframes lit {
		from {
			opacity: 0.25;
		}
	}
	.num {
		flex: 0 0 auto;
		width: 1.4em;
		height: 1.4em;
		border-radius: 50%;
		background: var(--ep-accent);
		color: var(--ep-bg);
		font:
			700 0.8em 'Fira Code',
			monospace;
		line-height: 1.75em;
		text-align: center;
	}
	@media (prefers-reduced-motion: reduce), print {
		.legend li.lit {
			animation: none;
		}
	}
	.keep {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 26px 30px;
		background: var(--ep-panel);
		border: 2px solid var(--ep-line);
		border-left: 10px solid var(--ep-secret);
		border-radius: 14px;
		font-size: 40px;
	}
	.tag {
		color: var(--ep-secret);
		font:
			700 36px 'Fira Code',
			monospace;
		text-transform: uppercase;
	}
</style>
`,Jd=`<!--
  4 · insert — a text on the command line (or at a prompt), a secret at a hidden prompt (asked
  twice); one terminal each, sized to its lines (\`height: auto\`: a Terminal fills its parent's
  height otherwise, and two in this column would come out the same height).

  Real \`folio\` output from demos/ep003/capture.sh (a sandbox store, fake values). There the
  secret is piped in; at a terminal pass asks for it with the two prompts shown (pass's own
  wording). Trimmed: the two lines git prints after its commit line. The files each one becomes
  are in the article.
-->
<script>
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
	import Steps from '@geekpresent/core/components/Steps.svelte';
	import StepTerminal from '@geekpresent/core/components/StepTerminal.svelte';
	import { pace } from '$lib/pace';
<\/script>

<Shot kicker="step 3" title="<code>folio insert</code>" size={120}>
	<Steps>
		<div class="kinds">
			<div class="kind t-kind">
				<div class="tag">📄 text</div>
				<div>plain, <b>signed</b></div>
				<div class="small">given on the command line</div>
			</div>
			<div class="kind s-kind">
				<div class="tag">🔑 secret</div>
				<div><b>encrypted</b></div>
				<div class="small">asked twice, never shown</div>
			</div>
		</div>
		<p style="padding-bottom: 0px; margin-bottom: 0px;">Insert plain text item.</p>
		<StepTerminal
			{...pace}
			autoplay
			title="EnvFolio"
			style="--terminal-ok: var(--ep-text); --terminal-warn: var(--ep-secret); font-size: 0.62em; height: auto"
			lines={[{ cmd: 'folio insert text -t demo@example.com gh/user' }]}
		/>
		<p style="padding-bottom: 0px; margin-bottom: 0px;">Insert secret item.</p>
		<StepTerminal
			{...pace}
			title="EnvFolio"
			style="--terminal-ok: var(--ep-text); --terminal-warn: var(--ep-secret); font-size: 0.62em; height: auto"
			lines={[
				{ cmd: 'folio insert secret gh/token' },
				'Enter password for gh/token:',
				'Retype password for gh/token:',
				{ out: '[master f696965] Add given password for gh/token to store.', tone: 'muted' }
			]}
		/>
		<p style="padding-bottom: 0px; margin-bottom: 0px;"></p>
	</Steps>
</Shot>

<Note>
	<p>A text goes in plain, on the command line or at a prompt, and folio signs it.</p>
	<p>A secret is asked at a hidden prompt, twice.</p>
</Note>

<style>
	.kinds {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
		margin-top: 30px;
	}
	.kind {
		background: var(--ep-panel);
		border: 2px solid var(--ep-line);
		border-radius: 18px;
		padding: 26px 28px;
		font-size: 40px;
	}
	.t-kind {
		border-top: 10px solid var(--ep-text);
	}
	.s-kind {
		border-top: 10px solid var(--ep-secret);
	}
	.tag {
		font:
			700 44px 'Fira Code',
			monospace;
		margin-bottom: 8px;
	}
	.t-kind .tag {
		color: var(--ep-text);
	}
	.s-kind .tag {
		color: var(--ep-secret);
	}
	.small {
		margin-top: 10px;
		color: var(--ep-dim);
		font-size: 32px;
	}
</style>
`,Zd=`<!--
  2 · install — Homebrew, or by hand: the two lines (to show it is not scary), and a QR code to
  the README's Install section for the rest of the steps; what it needs.

  From ../EnvFolio/README.md (Install, Dependencies).
-->
<script>
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
	import QRCode from '@geekpresent/core/components/QRCode.svelte';
<\/script>

<Shot kicker="step 1" title="Install" size={130}>
	<div class="way">
		<div class="label">with Homebrew · macOS or Linux</div>
		<code class="line"><span class="prompt">$</span> brew install nawaman/tap/folio</code>
	</div>
	<div class="way">
		<div class="label">or by hand · one bash script, from the latest release</div>
		<pre class="lines" style="font-size: 0.4em"><code
				><span class="prompt">$</span
				> URL=https://raw.githubusercontent.com/NawaMan/EnvFolio/main/install.sh</code
			>
<code><span class="prompt">$</span> curl -fsSL "$URL" | bash</code></pre>
		<div class="by-hand">
			<QRCode value="https://github.com/NawaMan/EnvFolio#install" size={300} />
			<a href="https://github.com/NawaMan/EnvFolio#install"
				><code class="url">github.com/NawaMan/EnvFolio<b>#install</b></code></a
			>
		</div>
	</div>
	<div class="needs">
		<div class="label">it needs</div>
		<div class="deps">
			<code>bash 3.2+</code><code>pass</code><code>gpg</code><code>git</code><code>tree</code>
		</div>
		<div class="label">on Windows: in WSL</div>
	</div>
</Shot>

<Note>
	<p>Install it with Homebrew, on macOS or Linux.</p>
	<p>Or install with the install script.</p>
	<p>Scan the code or click the link.</p>
	<p>You will need these dependencies.</p>
</Note>

<style>
	.way {
		display: flex;
		flex-direction: column;
		gap: 14px;
	}
	.label {
		color: var(--ep-dim);
		font-size: 36px;
	}
	.line,
	.lines {
		display: block;
		margin: 0;
		padding: 20px 30px;
		background: var(--ep-panel);
		border: 2px solid var(--ep-line);
		border-radius: 14px;
		font-size: 42px;
		line-height: 1.5;
	}
	.prompt {
		color: #00b356;
	}
	.by-hand {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 14px;
	}
	.url {
		font-size: 40px;
	}
	.url b {
		color: var(--ep-accent);
	}
	.needs {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 18px;
	}
	.deps {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 18px;
	}
	.deps code {
		padding: 10px 24px;
		border: 2px solid var(--ep-accent);
		border-radius: 999px;
		font-size: 40px;
	}
</style>
`,tp=`<!--
  5 · ls and show — the store as a tree, names only; then one value with \`show\`, which always
  says the kind, so a secret is never shown by accident; \`-c\` copies it to the clipboard instead.

  Real \`folio ls\` and \`folio show\` output from demos/ep003/capture.sh (a sandbox store, fake
  values). The \`-c\` line is what \`pass show -c\` (which folio runs) prints, from pass 1.7.4's
  source; it clears after 45 s by default (PASSWORD_STORE_CLIP_TIME). On a screen that draws
  emoji, folio marks a text 📄 and a secret 🔑; on a Terminal, tone \`ok\` is a TEXT (teal) and
  \`warn\` a SECRET (amber), as in EP001.
-->
<script>
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
	import Steps from '@geekpresent/core/components/Steps.svelte';
	import StepTerminal from '@geekpresent/core/components/StepTerminal.svelte';
	import { pace } from '$lib/pace';
<\/script>

<Shot kicker="step 4" title="<code>ls</code> · <code>show</code>" size={120}>
	<Steps>
		<p class="sub">Every name, then one value.</p>
		<StepTerminal
			{...pace}
			autoplay
			title="EnvFolio"
			style="--terminal-ok: var(--ep-text); --terminal-warn: var(--ep-secret); font-size: 0.75em"
			lines={[
				{ cmd: 'folio ls' },
				{ out: 'EnvFolio Store', tone: 'muted' },
				{ lead: '├── ', out: 'db', tone: 'dir' },
				{ lead: '│   ├── ', out: '🔑pass', tone: 'warn' },
				{ lead: '│   └── ', out: '📄user', tone: 'ok' },
				{ lead: '└── ', out: 'gh', tone: 'dir' },
				{ lead: '    ├── ', out: '🔑token', tone: 'warn' },
				{ lead: '    └── ', out: '📄user', tone: 'ok' },
				{ cmd: 'folio show text gh/user' },
				{ out: 'demo@example.com' },
				{ cmd: 'folio show secret gh/token' },
				{ out: 'ghp_DEMO0000fake0000token' },
				{ cmd: 'folio show secret -c gh/token' },
				{ out: 'Copied gh/token to clipboard. Will clear in 45 seconds.', tone: 'muted' }
			]}
		/>
		<div class="more">
			<div>
				names: <code>folio ls</code> · <code>ls <span class="t">text</span></code> ·
				<code>ls <span class="s">secret</span></code>
			</div>
			<div>
				one value: <code>folio show <span class="t">text</span>|<span class="s">secret</span></code>
			</div>
		</div>
	</Steps>
</Shot>

<Note>
	<p>Folio \`ls\` shows items all as a tree: names only, no values.</p>
	<p>A key marks a secret, and a page marks a text.</p>
	<p>Folio show prints one. You say text or secret, so a secret is never shown by accident.</p>
	<p>Add -c, and it copies the secret to the clipboard instead and clears it after 45 seconds.</p>
</Note>

<style>
	.sub {
		margin: 0;
		color: var(--ep-dim);
		font-size: 44px;
	}
	.more {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
		font-size: 40px;
	}
</style>
`,ep=`<!--
  8 · more — the other everyday commands, each for a text or a secret, as in pass; backup; help.
  \`show\` has its own step, on ls.html.

  From \`folio help\` (../EnvFolio/folio, captured in demos/ep003/capture.sh) and the README's
  Commands table and design principles (a command always says which kind it means).
-->
<script>
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';

	const actions = [
		['edit', 'in $EDITOR'],
		['generate', 'a random one'],
		['mv', 'rename, move'],
		['cp', 'copy'],
		['rm', 'remove'],
		['find', 'by name'],
		['grep', 'by value'],
		['help', 'any command']
	];

	// From \`folio help\`.
	const more = [
		['backup', 'the store and its key'],
		['restore', 'back, from a backup'],
		['export', 'some items to a file'],
		['import', 'items in a file into a store']
	];
<\/script>

<Shot kicker="and the rest" title="More commands ..." size={96}>
	<code class="form"
		><span class="prompt">$</span> folio <b>&lt;action&gt;</b> <span class="t">text</span>|<span
			class="s">secret</span
		> &lt;name&gt;</code
	>
	<div class="grid">
		{#each actions as [name, what]}
			<div class="cell"><code>{name}</code><span>{what}</span></div>
		{/each}
	</div>
	<p class="space"></p>

	<code class="form"><span class="prompt">$</span> folio <b>&lt;store-action&gt;</b></code>
	<div class="grid">
		{#each more as [name, what]}
			<div class="cell"><code>{name}</code><span>{what}</span></div>
		{/each}
	</div>
</Shot>

<Note>
	<p>The rest works like pass: edit, generate, move, the whole thing.</p>
	<p>There are \`folio\` specific commands as well.</p>
	<p>Such as backup/restore/import/export.</p>
	<p>We will discuss this later.</p>
</Note>

<style>
	.form {
		display: block;
		padding: 18px 26px;
		background: var(--ep-panel);
		border: 2px solid var(--ep-line);
		border-radius: 14px;
		font-size: 40px;
		text-align: center;
	}
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 18px;
	}
	.cell {
		display: flex;
		flex-direction: column;
		padding: 18px 26px;
		background: var(--ep-panel);
		border: 2px solid var(--ep-line);
		border-radius: 14px;
	}
	.cell code {
		color: var(--ep-accent);
		font-size: 44px;
		font-weight: 700;
	}
	.cell span {
		color: var(--ep-dim);
		font-size: 34px;
	}
	.prompt {
		color: #00b356;
	}
	.space {
		font-size: 8px;
	}
</style>
`,np=`<!--
  7 · shell — the same items, for a whole session: names printed, never values; \`exit\` leaves.

  Real \`folio shell\` output from demos/ep003/capture.sh (a sandbox store, fake values). There the
  commands are piped into the shell; here they are typed at its prompt. \`gh repo list\` is not
  from the capture: it stands for a real command that uses an item (gh reads GH_TOKEN by itself),
  so its reply is left out (\`…\`); the sandbox token is fake.

  Inside folio's shell the prompt reads \`%\`, on a band: that stands for your own prompt. Each
  line's background and prompt are set in \`session\` below.
  EnvFolio does not change the prompt; it sets FOLIO_SHELL=1 so yours can show it (MANUAL
  \`folio shell\`).
-->
<script>
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
	import Steps from '@geekpresent/core/components/Steps.svelte';
	import StepTerminal from '@geekpresent/core/components/StepTerminal.svelte';
	import { pace } from '$lib/pace';

	// The inner shell's look. Any CSS colour works as a \`bg\`.
	const inner = 'color-mix(in srgb, var(--ep-accent) 14%, transparent)';

	// The session, one entry per Terminal line. \`bg\` colours that row; \`prompt\` replaces the \`$\`
	// on a command (a continued row has none). Terminal takes neither yet, so the CSS for them is
	// made below from this list — change a line here, and its look comes with it.
	/** @type {{ line: import('@geekpresent/core/utils/terminalCore').TerminalInput, bg?: string, prompt?: string }[]} */
	const session = [
		{ line: { cmd: 'folio shell -s gh' } },
		{
			line: {
				out: "folio shell: loaded GH_TOKEN, GH_USER (texts: 1, secrets: 1). Type 'exit' to leave.",
				tone: 'muted'
			}
		},
		{ line: { cmd: 'echo $GH_USER' }, bg: inner, prompt: '%' },
		{ line: 'demo@example.com', bg: inner },
		{ line: { cmd: 'gh repo list' }, bg: inner, prompt: '%' },
		{ line: { out: '…', tone: 'muted' }, bg: inner },
		{ line: { cmd: 'exit' }, bg: inner, prompt: '%' }
	];

	const lines = session.map((s) => s.line);

	// One rule per styled row, by its place in the Terminal (row n = entry n). The \`$\` stays,
	// hidden, so the text does not move; the new prompt is drawn over it in the accent colour.
	const row = (/** @type {number} */ i) => \`.inner-shell .line:nth-child(\${i + 1})\`;
	const css = session
		.flatMap((s, i) => [
			s.bg ? \`\${row(i)} { background: \${s.bg}; }\` : '',
			s.prompt
				? \`\${row(i)} .prompt:not(.cont) { position: relative; visibility: hidden; }
				   \${row(i)} .prompt:not(.cont)::after { content: '\${s.prompt}'; position: absolute;
				     left: 0; visibility: visible; color: var(--ep-accent); }\`
				: ''
		])
		.join('\\n');
<\/script>

<Shot kicker="step 5 · use them" title="<code>folio shell</code>" size={120}>
	<Steps>
		<p class="sub">The same, for a whole session.</p>
		<div class="inner-shell">
			{@html \`<style>\${css}</style>\`}
			<StepTerminal
				{...pace}
				autoplay
				title="EnvFolio"
				style="--terminal-ok: var(--ep-text); --terminal-warn: var(--ep-secret); font-size: 0.85em"
				{lines}
			/>
		</div>
		<div class="rows">
			<div class="row">names printed, <b>never values</b></div>
			<div class="row"><code>exit</code> to leave</div>
		</div>
	</Steps>
</Shot>

<Note>
	<p>For a whole session, folio shell starts your shell with them.</p>
	<p>It prints the names it loaded, never the values.</p>
	<p>Inside, every command can use them. gh, for one, picks up the token by itself.</p>
	<p>Type exit to leave.</p>
</Note>

<style>
	.sub {
		margin: 0;
		color: var(--ep-dim);
		font-size: 44px;
	}
	.rows {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
		font-size: 48px;
	}
</style>
`,sp=`<!--
  1 · start — the episode in one list: install, init, insert, ls, exec / shell.
-->
<script>
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
<\/script>

<Shot kicker="EP003 · get started" title="Getting started with EnvFolio" size={110}>
	<ol class="steps">
		<li><span class="n">1</span><b>install</b><code>brew install …</code></li>
		<li><span class="n">2</span><b>make your store</b><code>folio init</code></li>
		<li>
			<span class="n">3</span><b
				>add a <span class="t">text</span> and a <span class="s">secret</span></b
			><code>folio insert</code>
		</li>
		<li><span class="n">4</span><b>see them</b><code>folio ls · folio show</code></li>
		<li><span class="n">5</span><b>use them</b><code>folio exec · folio shell</code></li>
	</ol>
</Shot>

<Note>
	<p>Let's get you started with \`EnvFolio\`.</p>
	<p>Follow these five quick steps:</p>
	<p>install the program</p>
	<p>initialize the store</p>
	<p>add texts and secrets</p>
	<p>view them</p>
	<p>and use them.</p>
</Note>

<style>
	.steps {
		display: flex;
		flex-direction: column;
		gap: 30px;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.steps li {
		display: grid;
		grid-template-columns: 100px 1fr;
		grid-template-rows: auto auto;
		column-gap: 30px;
		align-items: center;
		padding: 26px 30px;
		background: var(--ep-panel);
		border: 2px solid var(--ep-line);
		border-radius: 18px;
	}
	.n {
		grid-row: 1 / 3;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 90px;
		height: 90px;
		border-radius: 50%;
		background: var(--ep-accent);
		color: var(--ep-bg);
		font-size: 52px;
		font-weight: 800;
	}
	.steps b {
		font-size: 50px;
	}
	.steps code {
		color: #00b356;
		font-size: 38px;
	}
</style>
`,op=Object.assign({"/src/routes/_handout/[deck].html/+page.svelte":Sd,"/src/routes/ep001-envfolio-intro/anywhere.html/+page.svelte":Ed,"/src/routes/ep001-envfolio-intro/exec-multiple.html/+page.svelte":Td,"/src/routes/ep001-envfolio-intro/exec.html/+page.svelte":Ad,"/src/routes/ep001-envfolio-intro/get-it.html/+page.svelte":Nd,"/src/routes/ep001-envfolio-intro/meet.html/+page.svelte":Md,"/src/routes/ep001-envfolio-intro/problem.html/+page.svelte":Pd,"/src/routes/ep001-envfolio-intro/spread.html/+page.svelte":zd,"/src/routes/ep001-envfolio-intro/texts-and-secrets.html/+page.svelte":Dd,"/src/routes/ep001-envfolio-intro/trust.html/+page.svelte":Cd,"/src/routes/ep001-envfolio-intro/vars.html/+page.svelte":$d,"/src/routes/ep002-by-design/clipboard.html/+page.svelte":Ld,"/src/routes/ep002-by-design/get-it.html/+page.svelte":Rd,"/src/routes/ep002-by-design/key.html/+page.svelte":Id,"/src/routes/ep002-by-design/names.html/+page.svelte":Od,"/src/routes/ep002-by-design/passphrase.html/+page.svelte":Fd,"/src/routes/ep002-by-design/portable.html/+page.svelte":Hd,"/src/routes/ep002-by-design/readable.html/+page.svelte":Kd,"/src/routes/ep002-by-design/script.html/+page.svelte":jd,"/src/routes/ep002-by-design/secure.html/+page.svelte":Bd,"/src/routes/ep002-by-design/start.html/+page.svelte":Ud,"/src/routes/ep002-by-design/store.html/+page.svelte":qd,"/src/routes/ep002-by-design/three-ways.html/+page.svelte":Gd,"/src/routes/ep002-by-design/title.html/+page.svelte":Wd,"/src/routes/ep002-by-design/vars.html/+page.svelte":Vd,"/src/routes/ep003-get-started/exec.html/+page.svelte":Yd,"/src/routes/ep003-get-started/get-it.html/+page.svelte":Xd,"/src/routes/ep003-get-started/init.html/+page.svelte":Qd,"/src/routes/ep003-get-started/insert.html/+page.svelte":Jd,"/src/routes/ep003-get-started/install.html/+page.svelte":Zd,"/src/routes/ep003-get-started/ls.html/+page.svelte":tp,"/src/routes/ep003-get-started/more.html/+page.svelte":ep,"/src/routes/ep003-get-started/shell.html/+page.svelte":np,"/src/routes/ep003-get-started/start.html/+page.svelte":sp}),ap=wd(op);function rp(e,n){var o;return((o=ap[e])==null?void 0:o[n])??""}function bi(e,n){return(n??[]).map((o,r)=>({path:o.path,title:o.title,text:rp(e,o.path),number:r+1}))}const Os=Xe(!1),Fs=Xe(!1),yi=Xe(0),ki=Xe(0);let Ys;const wi=5e3;function ea(e=wi){Os.set(!0),Ys&&clearTimeout(Ys),Ys=setTimeout(()=>{Os.set(!1),Ys=void 0},e)}function xi(){Os.set(!1),Fs.set(!1),Ys&&(clearTimeout(Ys),Ys=void 0)}function Ar(){Fs.set(!0)}function ns(){Fs.set(!1)}function _i(){const e=!Te(Fs);return Fs.set(e),e}function Kn(e=wi){Te(Os)&&ea(e)}function ip(){yi.update(e=>e+1),ea()}function lp(){ki.update(e=>e+1),ea()}const La="return",Si=",",cp=/^[A-Za-z0-9][A-Za-z0-9._-]*$/;function fo(e){return typeof e!="string"||e.length===0||e.length>128||e.includes("..")?!1:cp.test(e)}function Wa(e){if(typeof e!="string"||!e.trim())return[];let n=e.trim();try{n.includes("%")&&(n=decodeURIComponent(n))}catch{}return n.split(Si).map(o=>o.trim()).filter(fo)}function Ei(e){return!Array.isArray(e)||!e.length?"":e.filter(fo).join(Si)}function Ti(e){return e?Wa(e.get(La)):[]}function Ai(e){const n=typeof e=="string"?e.trim():"";return n?`gp-catalog-return:${n}`:"gp-catalog-return"}function Nr(e,n){return!e||!fo(e)?!1:!(Array.isArray(n)?n:[]).some(r=>r&&r.path===e)}function dp(e,n,o,r=null){const a=Ti(e);if(!o)return a;try{const i=Wa(o.getItem(Ai(n)));return a.length?i.length?Ni(i,a,r):a:i}catch{return a}}function Ni(e,n,o=null){const r=Array.isArray(e)?e.filter(fo):[],a=Array.isArray(n)?n.filter(fo):[];if(!a.length)return r;if(!r.length||a.length>=r.length&&r.every((i,l)=>a[l]===i))return a;if(r.length>a.length){const i=r.length-a.length;if(a.every((l,g)=>r[i+g]===l))return r}if(o){const i=[];for(const l of r)if(Nr(l,o))i.push(l);else break;if(i.length&&a.every(l=>!Nr(l,o))&&!i.every((l,g)=>a[g]===l))return[...i,...a]}return a}function pp(e,n,o,r=null){var i;if(!o)return;const a=Ti(e);if(a.length)try{const l=Ai(n);let g=[];try{g=Wa(((i=o.getItem)==null?void 0:i.call(o,l))??null)}catch{g=[]}const f=Ni(g,a,r);o.setItem(l,Ei(f))}catch{}}function Mi(e,n){if(!e||e.includes(`${La}=`))return e;const o=Array.isArray(n)?Ei(n):n&&fo(n)?n:"";if(!o)return e;const r=e.includes("?")?"&":"?";return`${e}${r}${La}=${encodeURIComponent(o)}`}function up(e,n){const o=r=>r?Mi(r,n):void 0;return{first:o(e.first),last:o(e.last),prev:o(e.prev),next:o(e.next)}}var fp=E('<div id="article" class="svelte-1km5eyp"><a class="svelte-1km5eyp"> </a></div>'),vp=E('<span class="snippet svelte-1km5eyp"> </span>'),hp=E('<li><a class="svelte-1km5eyp"><span class="hit-title svelte-1km5eyp"> </span> <!></a></li>'),mp=E('<ol class="results svelte-1km5eyp" aria-label="Search results"></ol>'),gp=E('<p class="no-matches svelte-1km5eyp" role="status"> </p>'),bp=E('<li><a class="svelte-1km5eyp"> </a></li>'),yp=E('<ol class="svelte-1km5eyp"></ol>'),kp=E('<div class="content svelte-1km5eyp"><div class="head svelte-1km5eyp"><!> <input class="search svelte-1km5eyp" type="search" placeholder="Search slides…" aria-label="Search slides"/></div> <div class="scroll svelte-1km5eyp"><!></div></div>'),wp=E("<div><!> <!></div>");function xp(e,n){je(n,!1);const o=()=>vt(Ua,"$page",a),r=()=>vt(M,"$isContentVisible",a),[a,i]=$n(),l=c(),g=c(),f=c(),L=c(),w=c(),X=c(),j=c();let D=m(n,"pages",24,()=>[]),P=m(n,"deck",8,""),F=m(n,"docs",8,null),B=m(n,"returnTo",8,null);function C(R){return Mi(`./${R}`,B())}let O=c(""),$=c(-1),tt=c("");function J(R){s($,gi(t($)<0?t(j):t($),R,t(X).length))}function q(){var kt;const R=t($)<0&&t(w)?0:t($),G=(kt=t(W))==null?void 0:kt.querySelectorAll(".scroll ol li a"),it=G==null?void 0:G[R];return it?(it.click(),y(),!0):!1}function Z(R){return R.key==="ArrowDown"?(J(1),!0):R.key==="ArrowUp"?(J(-1),!0):R.key==="Enter"?q():!1}let bt=m(n,"article",8,!1),et=m(n,"bar",8,!1),x=m(n,"articleText",8,"View as article"),z=m(n,"articleHref",8,"../text.html"),W=c(),M=Xe(!1);const S=yi.subscribe(R=>{R>0&&M.set(!0)});function b(){M.update(R=>!R)}function y(){M.update(R=>!1)}function N(){t(w)?s(O,""):y()}function pt(R){if(r()){if(R.key==="Escape"){R.preventDefault(),N();return}Z(R)&&R.preventDefault()}}function gt(R){if(R.stopPropagation(),R.key==="Escape"){R.preventDefault(),N();return}Z(R)&&R.preventDefault()}function lt(R){R.focus()}function ut(R,G){const it=kt=>{kt&&typeof R.scrollIntoView=="function"&&R.scrollIntoView({block:"nearest"})};return it(G),{update:it}}function I(R){t(W)&&!t(W).contains(R.target)&&y()}Yn(()=>{window.addEventListener("keydown",pt),document.addEventListener("click",I)}),Es(()=>{S(),window.removeEventListener("keydown",pt),document.removeEventListener("click",I)}),_(()=>nt(D()),()=>{s(l,vo(D()))}),_(()=>o(),()=>{s(g,cd(o().url.pathname))}),_(()=>(nt(F()),nt(P()),t(l)),()=>{s(f,F()??bi(P(),t(l)))}),_(()=>(t(f),t(O)),()=>{s(L,mi(t(f),t(O)))}),_(()=>t(O),()=>{s(w,t(O).trim().length>0)}),_(()=>(t(w),t(L),t(l)),()=>{s(X,t(w)?t(L):t(l))}),_(()=>(t(O),t(tt)),()=>{t(O)!==t(tt)&&(s(tt,t(O)),s($,-1))}),_(()=>(t(w),t(l),t(g)),()=>{s(j,t(w)?-1:t(l).findIndex(R=>R.path===t(g)))}),Nn(),hn();var yt=wp();let dt;var Tt=u(yt);jn(Tt,{chrome:!0,text:"Table of Contents",hoverText:"Table of Contents",mnemonic:"T",get isSelected(){return r()},$$events:{click:b}});var ht=d(Tt,2);{var st=R=>{var G=kp(),it=u(G),kt=u(it);{var $t=xt=>{var Ct=fp(),Yt=u(Ct),qt=u(Yt,!0);p(Yt),p(Ct),V(()=>{K(Yt,"href",z()),wt(qt,x())}),h(xt,Ct)};H(kt,xt=>{bt()&&xt($t)})}var Lt=d(kt,2);os(Lt),Xs(()=>ws(Lt,()=>t(O),xt=>s(O,xt))),Xs(()=>Q("keydown",Lt,gt)),ro(Lt,xt=>lt==null?void 0:lt(xt)),p(it);var ye=d(it,2),jt=u(ye);{var Rt=xt=>{var Ct=vn(),Yt=Wt(Ct);{var qt=Qt=>{var _t=mp();Cn(_t,5,()=>t(L),hs,(fe,Jt,ke)=>{let Re=()=>t(Jt).path,de=()=>t(Jt).title,ie=()=>t(Jt).snippet;var Qe=hp();let en;var on=u(Qe),wn=u(on),rs=u(wn,!0);p(wn);var is=d(wn,2);{var mn=Ie=>{var xn=vp(),Ln=u(xn,!0);p(xn),V(()=>wt(Ln,ie())),h(Ie,xn)};H(is,Ie=>{ie()&&Ie(mn)})}p(on),ro(on,(Ie,xn)=>ut==null?void 0:ut(Ie,xn),()=>ke===t($)),p(Qe),V(Ie=>{en=Mt(Qe,1,"svelte-1km5eyp",null,en,{current:Re()===t(g),selected:ke===t($)}),K(on,"href",Ie),K(on,"aria-current",Re()===t(g)?"page":void 0),wt(rs,de())},[()=>(Re(),at(()=>C(Re())))]),h(fe,Qe)}),p(_t),h(Qt,_t)},ce=Qt=>{var _t=gp(),fe=u(_t);p(_t),V(Jt=>wt(fe,`No slides match “${Jt??""}”.`),[()=>(t(O),at(()=>t(O).trim()))]),h(Qt,_t)};H(Yt,Qt=>{t(L),at(()=>t(L).length)?Qt(qt):Qt(ce,-1)})}h(xt,Ct)},Nt=xt=>{var Ct=yp();Cn(Ct,5,()=>t(l),hs,(Yt,qt,ce)=>{let Qt=()=>t(qt).path,_t=()=>t(qt).title;var fe=bp();let Jt;var ke=u(fe),Re=u(ke,!0);p(ke),ro(ke,(de,ie)=>ut==null?void 0:ut(de,ie),()=>t($)<0?Qt()===t(g):ce===t($)),p(fe),V(de=>{Jt=Mt(fe,1,"svelte-1km5eyp",null,Jt,{current:Qt()===t(g),selected:ce===t($)}),K(ke,"href",de),K(ke,"aria-current",Qt()===t(g)?"page":void 0),wt(Re,_t())},[()=>(Qt(),at(()=>C(Qt())))]),h(Yt,fe)}),p(Ct),h(xt,Ct)};H(jt,xt=>{t(w)?xt(Rt):xt(Nt,-1)})}p(ye),p(G),h(R,G)};H(ht,R=>{r()&&R(st)})}p(yt),Ae(yt,R=>s(W,R),()=>t(W)),V(()=>dt=Mt(yt,1,"toc gp-chrome no-print svelte-1km5eyp",null,dt,{expanded:r(),bar:et()})),h(e,yt),Be(),i()}const ks=Xe(!1),_p=Xe(!1),zs=Xe(!1),Sp="/__geekpresent/page-add",Ep="/__geekpresent/page-remove",Tp="/__geekpresent/page-duplicate",Ap="/__geekpresent/page-rename",Np="/__geekpresent/page-refs";async function na(e,n){let o;try{o=await fetch(e,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(n)})}catch{return{error:"network error — is the dev server running?"}}let r={};try{r=await o.json()}catch{r={error:o.ok?"empty response":`HTTP ${o.status}`}}return o.ok?{ok:!0,...r}:{error:r.error||`HTTP ${o.status}`}}async function Mp(e){return na(Sp,{deck:e.deck,path:e.path,title:e.title,template:e.template,after:e.after??null})}async function Pp(e){return na(Ep,{deck:e.deck,path:e.path,deleteFiles:!!e.deleteFiles})}async function zp(e){return na(Tp,e)}async function Dp(e){return na(Ap,e)}async function Cp(e,n){try{const o=await fetch(`${Np}?deck=${encodeURIComponent(e)}&path=${encodeURIComponent(n)}`);if(!o.ok)return[];const r=await o.json();return Array.isArray(r.refs)?r.refs:[]}catch{return[]}}const Pi=/^[a-z0-9][a-z0-9-]*$/;function ka(e){const n=String(e??"").normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").replace(/-+/g,"-");return!n||!Pi.test(n)?"slide":n.length>48?n.slice(0,48).replace(/-+$/,"")||"slide":n}function $p(e){let n=String(e??"").trim().toLowerCase();if(!n||n.includes("/")||n.includes("\\")||n.includes(".."))return null;n=n.replace(/^\.+/,""),n.endsWith(".html")||(n=n.replace(/\.html?$/i,""),n=`${n}.html`);const o=n.replace(/\.html$/i,"");return Pi.test(o)?`${o}.html`:null}function zo(e,n=0){return Number.isFinite(e)?e:n}function Mr(e,n,o,r){const a=zo(e),i=zo(n),l=zo(o),g=zo(r);return a<=0||i<=0||l<=0||g<=0?0:Math.min(a/l,i/g)}function Lp(e,n){return vo(Array.isArray(e)?e:[]).map((r,a)=>({number:a+1,path:r.path,title:r.title,src:`./${r.path}?clean`,isCurrent:r.path===n}))}function Rp(e,n){const o=Array.isArray(e)?e:[],r=(typeof n=="string"?n:"").trim().toLowerCase();return r?o.filter(a=>{if(!a)return!1;const i=typeof a.title=="string"?a.title:"",l=typeof a.path=="string"?a.path:"",g=l.replace(/\.html$/i,""),f=String(a.number??"");return i.toLowerCase().includes(r)||l.toLowerCase().includes(r)||g.toLowerCase().includes(r)||f.includes(r)}):o}function Va(e){const n=e;return n?n.isContentEditable?!0:/^(INPUT|TEXTAREA|SELECT)$/.test(n.tagName??""):!1}function Ip(e,n){return e.ctrlKey||e.metaKey||e.altKey||Va(e.target)?"ignore":e.key==="Escape"?n?"close":"ignore":e.defaultPrevented?"ignore":e.key==="o"||e.key==="O"?n?"close":"open":"ignore"}function Op(e,n){const o=new Set;for(const r of e)Number.isFinite(r)&&o.add(r);return Number.isFinite(n)&&n>0&&o.add(n),o}function Fp(e,n){return n?n.bottom<e.top?"above":n.top>e.bottom?"below":"visible":"unknown"}function Hp(e,n=1){if(e.length===0)return 1;const o=e[0];let r=0;for(const a of e){if(Math.abs(a-o)>n)break;r++}return Math.max(1,r)}function Kp(e,n){return!Number.isFinite(e)||!Number.isFinite(n)||n<=0?1:Math.max(1,Math.floor(e/n))}function jp(e,n,o,r,a){if(n<=0)return 0;const i=Math.max(1,o),l=Math.max(1,r);switch(a){case"left":return Math.min(n,Math.max(1,e-1));case"right":return Math.min(n,Math.max(1,e+1));case"up":return Math.min(n,Math.max(1,e-i));case"down":return Math.min(n,Math.max(1,e+i));case"pageUp":return Math.min(n,Math.max(1,e-i*l));case"pageDown":return Math.min(n,Math.max(1,e+i*l));case"first":return 1;case"last":return n}}function Bp(e){if(e.ctrlKey||e.metaKey||e.altKey||Va(e.target))return"ignore";switch(e.key){case"ArrowLeft":return"left";case"ArrowRight":return"right";case"ArrowUp":return"up";case"ArrowDown":return"down";case"Home":return"first";case"End":return"last";case"PageUp":return"pageUp";case"PageDown":return"pageDown";case"Enter":return"commit";case" ":case"Spacebar":return"toCurrent";default:return"ignore"}}var Up=E('<button type="button" class="status-open svelte-1szb2dn">Open</button>'),qp=E("<span> <!></span>"),Gp=E('<span class="current-arrow svelte-1szb2dn" aria-hidden="true">▲</span>'),Wp=E('<span class="current-arrow svelte-1szb2dn" aria-hidden="true">▼</span>'),Vp=E(`<button type="button" title="Scroll to the slide you're on"><!>CURRENT</button>`),Yp=E('<button type="button" class="edit-btn add-head-btn svelte-1szb2dn" title="Add a slide at the end of the deck">ADD</button>'),Xp=E('<kbd class="edit-kbd svelte-1szb2dn">E</kbd>'),Qp=E('ADD · + between · ✎ rename · ⧉ duplicate · × remove · <kbd class="svelte-1szb2dn">E</kbd> done · <kbd class="svelte-1szb2dn">Esc</kbd>',1),Jp=E('arrows move · <kbd class="svelte-1szb2dn">Tab</kbd> filter · <kbd class="svelte-1szb2dn">↵</kbd> select · <kbd class="svelte-1szb2dn">Space</kbd> current · <kbd class="svelte-1szb2dn">Esc</kbd>',1),Zp=E('<option class="svelte-1szb2dn"> </option>'),tu=E('<label class="svelte-1szb2dn"><span class="svelte-1szb2dn">Template</span> <select class="svelte-1szb2dn"><option class="svelte-1szb2dn">ContentPage</option><option class="svelte-1szb2dn">TitlePage</option></select></label> <label class="svelte-1szb2dn"><span class="svelte-1szb2dn">After</span> <select class="svelte-1szb2dn"><option class="svelte-1szb2dn">(end of deck)</option><!></select></label>',1),eu=E('<p class="add-form-note svelte-1szb2dn">A new path moves the folder and rewrites links to it under <code class="svelte-1szb2dn">src/routes</code>.</p>'),nu=E('<label class="add-form-check svelte-1szb2dn"><input type="checkbox" class="svelte-1szb2dn"/> <span class="svelte-1szb2dn"> </span></label>'),su=E('<div class="add-form-wrap svelte-1szb2dn"><form class="add-form svelte-1szb2dn"><div class="add-form-title svelte-1szb2dn"><!></div> <label class="svelte-1szb2dn"><span class="svelte-1szb2dn">Title</span> <input type="text" placeholder="My new slide" class="svelte-1szb2dn"/></label> <label class="svelte-1szb2dn"><span class="svelte-1szb2dn">Path</span> <input type="text" placeholder="my-new-slide.html" spellcheck="false" class="svelte-1szb2dn"/></label> <!> <!> <div class="add-form-actions svelte-1szb2dn"><button type="button" class="form-btn ghost svelte-1szb2dn">Cancel</button> <button type="submit" class="form-btn svelte-1szb2dn"> </button></div></form></div>'),ou=E(' <code class="svelte-1szb2dn"> </code>',1),au=E("Still linked from: <!> — those links will break.",1),ru=E(`<div class="add-form-wrap svelte-1szb2dn"><div class="add-form remove-dialog svelte-1szb2dn" role="alertdialog"><div class="add-form-title svelte-1szb2dn"> </div> <p class="add-form-note svelte-1szb2dn"><b class="svelte-1szb2dn">Unlist</b> drops it from <code class="svelte-1szb2dn">pages.ts</code> and keeps the folder. <b class="svelte-1szb2dn">Delete files</b> also removes the folder and everything in it — files git
					does not track cannot be recovered.</p> <p class="add-form-note refs svelte-1szb2dn"><!></p> <div class="add-form-actions svelte-1szb2dn"><button type="button" class="form-btn ghost svelte-1szb2dn">Cancel</button> <button type="button" class="form-btn svelte-1szb2dn">Unlist</button> <button type="button" class="form-btn danger svelte-1szb2dn">Delete files</button></div></div></div>`),iu=E('<p class="no-matches svelte-1szb2dn" role="status"> </p>'),lu=E('<iframe class="frame svelte-1szb2dn" tabindex="-1" loading="lazy"></iframe>'),cu=E('<span class="card svelte-1szb2dn"> </span>'),du=E('<span class="path-line svelte-1szb2dn"> </span>'),pu=E('<span class="tile-tools svelte-1szb2dn"><button type="button" class="tile-tool tile-rename svelte-1szb2dn" title="Rename (title and/or path)">✎</button> <button type="button" class="tile-tool tile-duplicate svelte-1szb2dn" title="Duplicate">⧉</button> <button type="button" class="tile-tool tile-remove svelte-1szb2dn" title="Remove (unlist or delete)">×</button></span> <button type="button" class="gutter-add svelte-1szb2dn" title="Add slide after this one">+</button>',1),uu=E('<div class="tile-wrap svelte-1szb2dn"><button type="button"><span class="shot svelte-1szb2dn"><!></span> <span class="label svelte-1szb2dn"><span class="num svelte-1szb2dn"> </span> <span class="name svelte-1szb2dn"> </span></span> <!></button> <!></div>'),fu=E("<div></div>"),vu=E('<div role="presentation"><div class="head svelte-1szb2dn"><span class="head-title svelte-1szb2dn"> </span> <span class="head-count svelte-1szb2dn"><!></span> <input class="search svelte-1szb2dn" type="search" placeholder="Filter title, file, #…" aria-label="Filter overview by title, file name, or page number"/> <!> <span class="head-actions svelte-1szb2dn"><!> <!> <button type="button" aria-keyshortcuts="e"> <!></button> <span class="head-hint svelte-1szb2dn"><!></span></span></div> <!> <!> <!></div>');function Pr(e,n){je(n,!1);const o=()=>vt(zs,"$overviewEditMode",i),r=()=>vt(_p,"$canEditDeck",i),a=()=>vt(ks,"$overviewOpen",i),[i,l]=$n(),g=c(),f=c(),L=c(),w=c(),X=c();let j=m(n,"pages",24,()=>[]),D=m(n,"width",8,1920),P=m(n,"height",8,1080),F=m(n,"currentPath",8,""),B=m(n,"deck",8,""),C=m(n,"present",8,!1);const O=Xo();let $=c(""),tt=c(),J=c(new Set),q=c(!1),Z=c([]),bt=c([]),et=c(),x=c();const z=new Map;let W=c("unknown");function M(){if(!t(et)){s(W,"unknown");return}const T=z.get(t(w));s(W,Fp(t(et).getBoundingClientRect(),T?T.getBoundingClientRect():null))}let S;function b(){S==null&&(S=requestAnimationFrame(()=>{S=void 0,M()}))}function y(){var T;(T=z.get(t(w)))==null||T.scrollIntoView({block:"center",behavior:"smooth"})}let N=c(0);function pt(T){var ot;(ot=z.get(T))==null||ot.focus()}function gt(T=t(N)){var ot;return T>0&&t(f).some(Pt=>Pt.number===T)?T:t(w)>0&&t(f).some(Pt=>Pt.number===t(w))?t(w):((ot=t(f)[0])==null?void 0:ot.number)??0}function lt(){var T,ot,Pt;(T=t(tt))==null||T.focus(),(Pt=(ot=t(tt))==null?void 0:ot.select)==null||Pt.call(ot)}function ut(T){if(T.stopPropagation(),T.key==="Tab"){T.preventDefault();const ot=gt();ot>0&&(s(N,ot),po().then(()=>pt(ot)));return}if(T.key==="Escape"){if(T.preventDefault(),t(L)){s($,"");return}if(t(Tt)){mn();return}if(o()){ke();return}Jt()}}function I(){return Hp(t(f).map(T=>{var ot;return((ot=z.get(T.number))==null?void 0:ot.getBoundingClientRect().top)??0}))}function yt(T){var We,an;if(!t(et)||t(f).length===0)return 1;const ot=(We=z.get(t(f)[0].number))==null?void 0:We.getBoundingClientRect().top,Pt=t(f)[T],Ut=Pt?(an=z.get(Pt.number))==null?void 0:an.getBoundingClientRect().top:void 0,se=ot!=null&&Ut!=null?Ut-ot:0;return Kp(t(et).getBoundingClientRect().height,se)}function dt(T){var an;if(T.key==="Tab"){T.preventDefault(),T.stopPropagation(),lt();return}const ot=Bp(T);if(ot==="ignore"||t(f).length===0)return;if(T.preventDefault(),T.stopPropagation(),ot==="commit"){const rn=t(f).find(ms=>ms.number===t(N))??t(f)[0];rn&&Rn(rn.path,rn.number);return}if(ot==="toCurrent"){t(w)>0&&t(f).some(rn=>rn.number===t(w))&&(s(N,t(w)),pt(t(N)));return}const Pt=t(f).findIndex(rn=>rn.number===t(N)),Ut=Pt>=0?Pt+1:1,se=I(),We=jp(Ut,t(f).length,se,yt(se),ot);s(N,((an=t(f)[We-1])==null?void 0:an.number)??0),pt(t(N))}let Tt=c(!1),ht=c("add"),st=c(""),R=c(null),G=c([]),it=c(!1),kt=c(""),$t=c(""),Lt=c("content"),ye=c(""),jt=c(!1),Rt=c(!1),Nt=c(""),xt=c("info"),Ct=c(""),Yt=c(!0),qt=c(""),ce=c(""),Qt;function _t(T,ot){var Pt;return T.dataset.tile=String(ot),z.set(ot,T),(Pt=t(x))==null||Pt.observe(T),{destroy(){var Ut;z.delete(ot),(Ut=t(x))==null||Ut.unobserve(T)}}}function fe(){if(!(typeof IntersectionObserver>"u"||t(x))){s(x,new IntersectionObserver(T=>{var Pt;let ot=!1;for(const Ut of T){if(!Ut.isIntersecting)continue;const se=Number(Ut.target.dataset.tile);Number.isFinite(se)&&!t(J).has(se)&&(t(J).add(se),ot=!0),(Pt=t(x))==null||Pt.unobserve(Ut.target)}ot&&s(J,new Set(t(J)))},{root:t(et)??null,rootMargin:"400px 0px"}));for(const T of z.values())t(x).observe(T)}}function Jt(){s(Tt,!1),s(R,null),zs.set(!1),s(Nt,""),s(Ct,""),s($,""),ks.set(!1)}function ke(){s(Tt,!1),s(R,null),s(Nt,""),s(Ct,""),zs.set(!1)}function Re(){s(qt,"NOT ALLOWED"),s(ce,"Edit deck only works in vite dev — a static host has no source tree."),Qt&&clearTimeout(Qt),Qt=setTimeout(()=>{s(qt,""),s(ce,"")},2600)}function de(){if(!r()){Re();return}o()?ke():(zs.set(!0),s(Nt,""))}function ie(T=""){if(!r()){Re();return}o()||zs.set(!0),s(ht,"add"),s(st,""),s(R,null),s(kt,""),s($t,"slide.html"),s(Lt,"content"),s(ye,T),s(jt,!1),s(Yt,!0),s(Ct,""),s(Tt,!0),s(Nt,"")}function Qe(T,ot){if(!r()){Re();return}s(ht,"rename"),s(st,T),s(R,null),s(kt,ot),s($t,T),s(jt,!0),s(Ct,""),s(Tt,!0),s(Nt,"")}function en(T,ot){if(!r()){Re();return}s(ht,"duplicate"),s(st,T),s(R,null),s(kt,`${ot} (copy)`),s($t,`${ka(t(kt))}.html`),s(jt,!1),s(Yt,!0),s(Ct,""),s(Tt,!0),s(Nt,"")}function on(){t(ht)==="rename"?rs():t(ht)==="duplicate"?is():Ie()}function wn(){if(!r())return Re(),null;if(!B())return s(xt,"error"),s(Nt,"No deck name — cannot write pages.ts."),null;const T=$p(t($t));if(!T)return s(xt,"error"),s(Nt,"Path must look like my-slide.html (lowercase, hyphens)."),null;const ot=t(kt).trim();return ot?{path:T,title:ot}:(s(xt,"error"),s(Nt,"Title is required."),null)}async function rs(){var se;const T=wn();if(!T)return;const ot=t(st);s(Rt,!0),s(xt,"info"),s(Nt,"Renaming…");const Pt=await Dp({deck:B(),path:ot,newPath:T.path,title:T.title});if(s(Rt,!1),Pt.error){s(xt,"error"),s(Nt,Pt.error);return}if(s(Tt,!1),T.path!==ot&&ot===F()){Rn(T.path,t(w));return}const Ut=((se=Pt.updated)==null?void 0:se.length)??0;s(xt,"ok"),s(Nt,T.path===ot?`Renamed ${ot}`:`Renamed ${ot} → ${T.path}${Ut?` · links updated in ${Ut} file${Ut===1?"":"s"}`:""}`)}async function is(){var We;const T=wn();if(!T)return;const ot=t(Yt),Pt=t(st);s(Rt,!0),s(xt,"info"),s(Nt,"Duplicating…");const Ut=await zp({deck:B(),path:Pt,newPath:T.path,title:T.title});if(s(Rt,!1),Ut.error){s(xt,"error"),s(Nt,Ut.error);return}s(Tt,!1);const se=(((We=t(g).find(an=>an.path===Pt))==null?void 0:We.number)??t(w))+1;if(ot){Rn(T.path,se);return}s(xt,"ok"),s(Nt,`Duplicated ${Pt} → ${T.path}`),s(Ct,T.path)}function mn(){s(Tt,!1),s(Nt,"")}async function Ie(){const T=wn();if(!T)return;const{path:ot,title:Pt}=T,Ut=t(Yt);s(Rt,!0),s(xt,"info"),s(Nt,"Adding…");const se=await Mp({deck:B(),path:ot,title:Pt,template:t(Lt),after:t(ye)||null});if(s(Rt,!1),se.error){s(xt,"error"),s(Nt,se.error);return}if(s(Tt,!1),Ut){Rn(ot,t(w)+1);return}s(xt,"ok"),s(Nt,`Added ${ot}`),s(Ct,ot)}function xn(){if(!t(Ct))return;const T=t(Ct);s(Ct,""),Rn(T,t(w)+1)}async function Ln(T,ot){var Ut;if(!r()){Re();return}if(!B()){s(xt,"error"),s(Nt,"No deck name — cannot write pages.ts.");return}s(Tt,!1),s(Nt,""),s(R,{path:T,title:ot}),s(G,[]),s(it,!0);const Pt=await Cp(B(),T);((Ut=t(R))==null?void 0:Ut.path)===T&&(s(G,Pt),s(it,!1))}function Xn(){s(R,null)}async function Bn(T){if(!t(R))return;const{path:ot}=t(R);s(Rt,!0),s(xt,"info"),s(Nt,T?"Deleting…":"Removing…");const Pt=await Pp({deck:B(),path:ot,deleteFiles:T});if(s(Rt,!1),Pt.error){s(xt,"error"),s(Nt,Pt.error);return}if(s(R,null),T&&ot===F()){const Ut=t(g).findIndex(We=>We.path===ot),se=t(g)[Ut+1]??t(g)[Ut-1];if(se){Rn(se.path,se.number);return}}s(xt,"ok"),s(Nt,T?`Deleted ${ot} — waiting for reload…`:`Removed ${ot} from the deck — waiting for reload…`)}function Rn(T,ot){ks.set(!1),zs.set(!1),s(Tt,!1),s(R,null);const Pt=t(w)>0&&ot<t(w)?"back":"forward";uo(`./${T}${C()?"?present":""}`,{viewTransitions:O,kind:"slide",direction:Pt})}function Un(T){if(T.key==="Escape"&&a()&&!T.ctrlKey&&!T.metaKey&&!T.altKey){if(t(Tt)){T.preventDefault(),mn();return}if(t(R)){T.preventDefault(),Xn();return}if(o()){T.preventDefault(),ke();return}if(t(L)){T.preventDefault(),s($,"");return}}if(a()&&!T.ctrlKey&&!T.metaKey&&!T.altKey&&!T.defaultPrevented&&(T.key==="e"||T.key==="E")){const Pt=T.target,Ut=(Pt==null?void 0:Pt.tagName)??"";if(Pt!=null&&Pt.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(Ut))return;T.preventDefault(),de();return}const ot=Ip(T,a());ot!=="ignore"&&(T.preventDefault(),ot==="close"?Jt():ks.set(!0))}Yn(()=>{window.addEventListener("keydown",Un),window.addEventListener("resize",M),typeof IntersectionObserver>"u"&&s(q,!0)}),Es(()=>{var T;window.removeEventListener("keydown",Un),window.removeEventListener("resize",M),S!=null&&cancelAnimationFrame(S),(T=t(x))==null||T.disconnect(),s(x,void 0),Qt&&clearTimeout(Qt)});function gn(){var ot;const T=document.activeElement;return T?!(Va(T)||t(tt)&&(T===t(tt)||t(tt).contains(T))||(ot=T.closest)!=null&&ot.call(T,".add-form-wrap")):!0}_(()=>(nt(j()),nt(F())),()=>{s(g,Lp(j(),F()))}),_(()=>(a(),zs),()=>{a()||(zs.set(!1),s(Tt,!1),s(R,null),s(N,0),s($,""))}),_(()=>(t(g),t($)),()=>{s(f,Rp(t(g),t($)))}),_(()=>t($),()=>{s(L,t($).trim().length>0)}),_(()=>t(g),()=>{var T;s(w,((T=t(g).find(ot=>ot.isCurrent))==null?void 0:T.number)??0)}),_(()=>(t(q),t(f),t(J),t(w)),()=>{s(X,t(q)?new Set(t(f).map(T=>T.number)):Op(t(J),t(w)))}),_(()=>(t(jt),t(kt),ka),()=>{!t(jt)&&t(kt)&&s($t,`${ka(t(kt))}.html`)}),_(()=>(a(),t(f),t(N)),()=>{a()&&t(f).length>0&&(!t(N)||!t(f).some(T=>T.number===t(N)))&&s(N,gt(0))}),_(()=>(a(),t(et),t(x)),()=>{a()&&t(et)&&fe(),!a()&&t(x)&&(t(x).disconnect(),s(x,void 0))}),_(()=>(a(),t(et),t(w),t(N),t(f)),()=>{a()&&t(et)&&(t(w),po().then(()=>{M(),(!t(N)||!t(f).some(T=>T.number===t(N)))&&s(N,gt(t(w))),t(N)&&gn()&&pt(t(N))}))}),Nn(),hn();var Qn=vn(),Ts=Wt(Qn);{var As=T=>{var ot=vu();let Pt;var Ut=u(ot),se=u(Ut),We=u(se,!0);p(se);var an=d(se,2),rn=u(an);{var ms=At=>{var ft=ss();V(()=>wt(ft,`${t(f),at(()=>t(f).length)??""} of ${t(g),at(()=>t(g).length)??""}`)),h(At,ft)},Ns=At=>{var ft=ss();V(()=>wt(ft,`${t(g),at(()=>t(g).length)??""} slides`)),h(At,ft)};H(rn,At=>{t(L)?At(ms):At(Ns,-1)})}p(an);var qn=d(an,2);os(qn),Ae(qn,At=>s(tt,At),()=>t(tt));var A=d(qn,2);{var Y=At=>{var ft=qp();let $e;var me=u(ft),Dt=d(me);{var ge=Se=>{var nn=Up();Q("click",nn,sn(xn)),h(Se,nn)};H(Dt,Se=>{t(Ct)&&Se(ge)})}p(ft),V(()=>{$e=Mt(ft,1,"head-status svelte-1szb2dn",null,$e,{err:t(xt)==="error",ok:t(xt)==="ok"}),wt(me,`${t(Nt)??""} `)}),h(At,ft)};H(A,At=>{(t(Nt)||t(Ct))&&At(Y)})}var rt=d(A,2),Ot=u(rt);{var Zt=At=>{var ft=Vp();let $e;var me=u(ft);{var Dt=Se=>{var nn=Gp();h(Se,nn)},ge=Se=>{var nn=Wp();h(Se,nn)};H(me,Se=>{t(W)==="above"?Se(Dt):t(W)==="below"&&Se(ge,1)})}Ke(),p(ft),V(()=>$e=Mt(ft,1,"current-btn svelte-1szb2dn",null,$e,{pending:t(W)==="above"||t(W)==="below"})),Q("click",ft,sn(y)),h(At,ft)};H(Ot,At=>{t(w)>0&&At(Zt)})}var we=d(Ot,2);{var pe=At=>{var ft=Yp();V(()=>ft.disabled=t(Rt)),Q("click",ft,sn(()=>ie(""))),h(At,ft)};H(we,At=>{o()&&At(pe)})}var It=d(we,2);let oe;var Vt=u(It),zt=d(Vt);{var Bt=At=>{var ft=Xp();h(At,ft)};H(zt,At=>{t(qt)||At(Bt)})}p(It);var Ft=d(It,2),De=u(Ft);{var Ne=At=>{var ft=Qp();Ke(3),h(At,ft)},he=At=>{var ft=Jp();Ke(7),h(At,ft)};H(De,At=>{o()?At(Ne):At(he,-1)})}p(Ft),p(rt),p(Ut);var ee=d(Ut,2);{var _e=At=>{var ft=su(),$e=u(ft),me=u($e),Dt=u(me);{var ge=te=>{var Kt=ss();V(()=>wt(Kt,`Rename ${t(st)??""}`)),h(te,Kt)},Se=te=>{var Kt=ss();V(()=>wt(Kt,`Duplicate ${t(st)??""}`)),h(te,Kt)},nn=te=>{var Kt=ss("Add slide");h(te,Kt)};H(Dt,te=>{t(ht)==="rename"?te(ge):t(ht)==="duplicate"?te(Se,1):te(nn,-1)})}p(me);var bn=d(me,2),Ue=d(u(bn),2);os(Ue),p(bn);var In=d(bn,2),On=d(u(In),2);os(On),p(In);var ln=d(In,2);{var yn=te=>{var Kt=tu(),ue=Wt(Kt),Fe=d(u(ue),2),_n=u(Fe);_n.value=_n.__value="content";var Pn=d(_n);Pn.value=Pn.__value="title",p(Fe),p(ue);var cs=d(ue,2),Fn=d(u(cs),2),Ms=u(Fn);Ms.value=Ms.__value="";var Hs=d(Ms);Cn(Hs,1,()=>t(g),hs,(Sn,Wn)=>{var En=Zp(),Ks=u(En);p(En);var zn={};V(()=>{wt(Ks,`${t(Wn),at(()=>t(Wn).number)??""}. ${t(Wn),at(()=>t(Wn).title)??""}`),zn!==(zn=(t(Wn),at(()=>t(Wn).path)))&&(En.value=(En.__value=(t(Wn),at(()=>t(Wn).path)))??"")}),h(Sn,En)}),p(Fn),p(cs),V(()=>{Fe.disabled=t(Rt),Fn.disabled=t(Rt)}),cr(Fe,()=>t(Lt),Sn=>s(Lt,Sn)),cr(Fn,()=>t(ye),Sn=>s(ye,Sn)),h(te,Kt)};H(ln,te=>{t(ht)==="add"&&te(yn)})}var ve=d(ln,2);{var cn=te=>{var Kt=eu();h(te,Kt)},ls=te=>{var Kt=nu(),ue=u(Kt);os(ue);var Fe=d(ue,2),_n=u(Fe);p(Fe),p(Kt),V(()=>{ue.disabled=t(Rt),wt(_n,`Open after ${t(ht)==="duplicate"?"duplicating":"adding"}`)}),Zr(ue,()=>t(Yt),Pn=>s(Yt,Pn)),h(te,Kt)};H(ve,te=>{t(ht)==="rename"?te(cn):te(ls,-1)})}var gs=d(ve,2),dn=u(gs),Gn=d(dn,2),Jn=u(Gn,!0);p(Gn),p(gs),p($e),p(ft),V(()=>{Ue.disabled=t(Rt),vl(On,t($t)),On.disabled=t(Rt),dn.disabled=t(Rt),Gn.disabled=t(Rt),wt(Jn,t(ht)==="rename"?"Rename":t(ht)==="duplicate"?"Duplicate":"Add")}),ws(Ue,()=>t(kt),te=>s(kt,te)),Q("input",On,te=>{s(jt,!0),s($t,te.currentTarget.value)}),Q("click",dn,mn),Q("submit",$e,vi(on)),Q("click",ft,sn(function(te){yo.call(this,n,te)})),Q("keydown",ft,sn(function(te){yo.call(this,n,te)})),h(At,ft)};H(ee,At=>{t(Tt)&&At(_e)})}var Ce=d(ee,2);{var Oe=At=>{var ft=ru(),$e=u(ft),me=u($e),Dt=u(me);p(me);var ge=d(me,4),Se=u(ge);{var nn=ve=>{var cn=ss("Checking for links to it…");h(ve,cn)},bn=ve=>{var cn=au(),ls=d(Wt(cn));Cn(ls,1,()=>t(G),hs,(gs,dn,Gn)=>{Ke();var Jn=ou(),te=Wt(Jn,!0);te.nodeValue=Gn?", ":" ";var Kt=d(te),ue=u(Kt,!0);p(Kt),V(()=>wt(ue,(t(dn),at(()=>t(dn).file)))),h(gs,Jn)}),Ke(),h(ve,cn)},Ue=ve=>{var cn=ss("No other slide links to it.");h(ve,cn)};H(Se,ve=>{t(it)?ve(nn):(t(G),at(()=>t(G).length)?ve(bn,1):ve(Ue,-1))})}p(ge);var In=d(ge,2),On=u(In),ln=d(On,2),yn=d(ln,2);p(In),p($e),p(ft),V(()=>{K($e,"aria-label",`Remove ${t(R),at(()=>t(R).title)??""}`),wt(Dt,`Remove “${t(R),at(()=>t(R).title)??""}” (${t(R),at(()=>t(R).path)??""})?`),On.disabled=t(Rt),ln.disabled=t(Rt),yn.disabled=t(Rt)}),Q("click",On,Xn),Q("click",ln,()=>Bn(!1)),Q("click",yn,()=>Bn(!0)),Q("click",ft,sn(function(ve){yo.call(this,n,ve)})),Q("keydown",ft,sn(function(ve){yo.call(this,n,ve)})),h(At,ft)};H(Ce,At=>{t(R)&&At(Oe)})}var ae=d(Ce,2);{var Me=At=>{var ft=iu(),$e=u(ft);p(ft),V(me=>wt($e,`No slides match “${me??""}”.`),[()=>(t($),at(()=>t($).trim()))]),h(At,ft)},Mn=At=>{var ft=fu();let $e;Cn(ft,5,()=>t(f),me=>me.path,(me,Dt)=>{var ge=uu(),Se=u(ge);let nn;var bn=u(Se),Ue=u(bn);{var In=Kt=>{var ue=lu();V(Fe=>{K(ue,"title",(t(Dt),at(()=>t(Dt).title))),K(ue,"src",(t(Dt),at(()=>t(Dt).src))),re(ue,`width:${D()??""}px; height:${P()??""}px; transform: translate(-50%, -50%) scale(${Fe??""});`)},[()=>(nt(Mr),t(Z),t(Dt),t(bt),nt(D()),nt(P()),at(()=>Mr(t(Z)[t(Dt).number]??0,t(bt)[t(Dt).number]??0,D(),P())))]),h(Kt,ue)},On=He(()=>(t(X),t(Dt),at(()=>t(X).has(t(Dt).number)))),ln=Kt=>{var ue=cu(),Fe=u(ue,!0);p(ue),V(()=>wt(Fe,(t(Dt),at(()=>t(Dt).title)))),h(Kt,ue)};H(Ue,Kt=>{t(On)?Kt(In):Kt(ln,-1)})}p(bn);var yn=d(bn,2),ve=u(yn),cn=u(ve,!0);p(ve);var ls=d(ve,2),gs=u(ls,!0);p(ls),p(yn);var dn=d(yn,2);{var Gn=Kt=>{var ue=du(),Fe=u(ue,!0);p(ue),V(()=>wt(Fe,(t(Dt),at(()=>t(Dt).path)))),h(Kt,ue)};H(dn,Kt=>{o()&&Kt(Gn)})}p(Se),ro(Se,(Kt,ue)=>_t==null?void 0:_t(Kt,ue),()=>t(Dt).number),Xs(()=>Q("click",Se,()=>Rn(t(Dt).path,t(Dt).number)));var Jn=d(Se,2);{var te=Kt=>{var ue=pu(),Fe=Wt(ue),_n=u(Fe),Pn=d(_n,2),cs=d(Pn,2);p(Fe);var Fn=d(Fe,2);V(()=>{K(_n,"aria-label",`Rename ${t(Dt),at(()=>t(Dt).title)??""}`),_n.disabled=t(Rt),K(Pn,"aria-label",`Duplicate ${t(Dt),at(()=>t(Dt).title)??""}`),Pn.disabled=t(Rt),K(cs,"aria-label",`Remove ${t(Dt),at(()=>t(Dt).title)??""} from deck`),cs.disabled=t(Rt),K(Fn,"aria-label",`Add slide after ${t(Dt),at(()=>t(Dt).title)??""}`),Fn.disabled=t(Rt)}),Q("click",_n,sn(()=>Qe(t(Dt).path,t(Dt).title))),Q("click",Pn,sn(()=>en(t(Dt).path,t(Dt).title))),Q("click",cs,sn(()=>Ln(t(Dt).path,t(Dt).title))),Q("click",Fn,sn(()=>ie(t(Dt).path))),h(Kt,ue)};H(Jn,Kt=>{o()&&Kt(te)})}p(ge),V(()=>{nn=Mt(Se,1,"tile svelte-1szb2dn",null,nn,{current:t(Dt).isCurrent}),K(Se,"aria-current",(t(Dt),at(()=>t(Dt).isCurrent?"page":void 0))),re(bn,`aspect-ratio: ${D()??""} / ${P()??""};`),wt(cn,(t(Dt),at(()=>t(Dt).number))),wt(gs,(t(Dt),at(()=>t(Dt).title)))}),ao(bn,"clientWidth",Kt=>Ge(Z,t(Z)[t(Dt).number]=Kt)),ao(bn,"clientHeight",Kt=>Ge(bt,t(bt)[t(Dt).number]=Kt)),h(me,ge)}),p(ft),Ae(ft,me=>s(et,me),()=>t(et)),V(()=>$e=Mt(ft,1,"grid svelte-1szb2dn",null,$e,{editing:o()})),Q("scroll",ft,b),Q("keydown",ft,dt),h(At,ft)};H(ae,At=>{t(L),t(f),at(()=>t(L)&&t(f).length===0)?At(Me):At(Mn,-1)})}p(ot),V(()=>{Pt=Mt(ot,1,"scrim no-print svelte-1szb2dn",null,Pt,{editing:o(),present:C()}),re(ot,`--canvas-w:${D()??""}px; --canvas-h:${P()??""}px;`),wt(We,o()?"EDIT DECK":"OVERVIEW PAGE"),oe=Mt(It,1,"edit-btn svelte-1szb2dn",null,oe,{on:o(),flash:!!t(qt)}),K(It,"title",t(ce)||(r()?o()?"Leave edit mode (E)":"Add, rename, duplicate or remove slides (E)":"Edit deck only works in vite dev")),K(It,"aria-pressed",o()),wt(Vt,`${(t(qt)||(o()?"DONE":"EDIT"))??""} `)}),ws(qn,()=>t($),At=>s($,At)),Q("keydown",qn,ut),Q("click",qn,sn(function(At){yo.call(this,n,At)})),Q("click",It,sn(de)),Q("click",ot,fi(Jt)),h(T,ot)};H(Ts,T=>{a()&&T(As)})}h(e,Qn),Be(),l()}const hu="toolBarPinned",mu="controlBarPinned",gu="chromePinned";function zi(){try{return localStorage.getItem(gu)==="true"}catch{return!1}}const zr=Jo(hu,zi(),{codec:Zo(),sync:!1}),Dr=Jo(mu,zi(),{codec:Zo(),sync:!1}),Ya="chromeBare";function bu(e){if(!e||!e.has("bare"))return null;const n=(e.get("bare")??"").trim().toLowerCase();return n!=="off"&&n!=="false"&&n!=="0"}function Di(e,n,o){return e===!0||e===!1?e:n===!0||o===!0}function Ci(){try{return ta(localStorage.getItem(Ya))}catch{return null}}const sa=Xe(Ci()),Xa=Xe(!1),oa=Qs([sa,Ro,Xa,ei],([e,n,o,r])=>r||Di(e,n,o)),yu=Qs([sa,Xa],([e,n])=>Di(e,!0,n));function qo(e){try{localStorage.setItem(Ya,String(e))}catch{}sa.set(e)}window.addEventListener("storage",e=>{(e.key===Ya||e.key===null)&&sa.set(Ci())});const To=Xe(!1);Os.subscribe(e=>{e&&To.set(!1)});function Do(){if(Te(oa)){qo(!1),To.set(!1);return}qo(!0),xi(),To.set(!0),document.activeElement instanceof HTMLElement&&document.activeElement.closest(".annot-tools, .ctrl-bar")&&document.activeElement.blur()}function ku(e){Xa.set(e===!0)}function wu(e){const n=bu(e.searchParams);n!==null&&qo(n)}function Js(e){const n=e;return n?n.isContentEditable?!0:/^(INPUT|TEXTAREA|SELECT)$/.test(n.tagName??""):!1}function xu(e,n){return!n||e.altKey||e.shiftKey||!(e.ctrlKey||e.metaKey)?!1:e.key==="s"||e.key==="S"||e.code==="KeyS"}function $i(e){const n=(e.key??"").toLowerCase();if(/^[a-z]$/.test(n))return n;const o=e.code??"";return/^Key[A-Z]$/.test(o)?o.slice(3).toLowerCase():""}function _u(e,n,o){if(!n&&!o||Js(e.target)||e.ctrlKey||e.metaKey||e.altKey||e.defaultPrevented)return"ignore";switch($i(e)){case"o":return"overview";case"k":return"kiosk";case"b":return"bars";case"i":return"pointer";case"c":return"capture";case"r":return"print";case"s":return"source";case"e":return"edit";default:return"ignore"}}function Su(e,n){if(Js(e.target))return"ignore";if(e.altKey&&!e.ctrlKey&&!e.metaKey&&(e.code==="Period"||e.key==="."))return"arm";if(e.key==="Escape"&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&!e.defaultPrevented)return"disarm";if(!n||e.ctrlKey||e.metaKey||e.altKey||e.defaultPrevented)return"ignore";switch($i(e)){case"a":return"annotate";case"j":return"adjust";case"z":return"display";case"p":return"present";case"m":return"more";case"t":return"toc";case"u":return"kiosk-pause";default:return"ignore"}}const Li=[2,1.5,1.25,1,.75,.5,.25],Ri=[{factor:1600/1920,name:"HD+"},{factor:1280/1920,name:"720p"},{factor:960/1920,name:"qHD"},{factor:854/1920,name:"480p"},{factor:640/1920,name:"nHD"}],Eu=.005;function So(e,n){return Math.abs(e-n)<Eu}function Cr(e){const n=[{id:"fitted",kind:"fitted"}];for(const o of Li)n.push({id:`s-${o}`,kind:"factor",factor:o});if(e)for(const o of Ri)n.push({id:`r-${o.name}`,kind:"factor",factor:o.factor});return n}function Tu(e,n,o){if(!e.length)return 0;if(n){const a=e.findIndex(i=>i.kind==="fitted");return a>=0?a:0}const r=e.findIndex(a=>a.kind==="factor"&&So(a.factor,o));return r>=0?r:0}function wa(e,n,o){if(o<=0)return 0;const r=Number.isFinite(e)?Math.trunc(e):0,a=Number.isFinite(n)?Math.trunc(n):0;return((r+a)%o+o)%o}var Au=E('<button type="button" role="menuitem" tabindex="-1"><span class="k"> </span> <span class="v svelte-11jxgp9"> <!></span></button>'),Nu=E('<button type="button" role="menuitem" tabindex="-1"><span class="k"> </span><span class="v svelte-11jxgp9"> </span></button>'),Mu=E('<div class="sep svelte-11jxgp9">RESOLUTION</div> <!>',1),Pu=E('<div class="menu svelte-11jxgp9" role="menu" aria-label="Display zoom"><button type="button" role="menuitem" data-choice="fitted" tabindex="-1"><span class="k">FITTED</span><span class="v svelte-11jxgp9">fit to window</span></button> <div class="sep svelte-11jxgp9">SCALE</div> <!> <!> <div class="sep svelte-11jxgp9"><span class="tool-mn">C</span>USTOM</div> <form class="row custom svelte-11jxgp9"><input type="number" step="1" placeholder="%" aria-label="Custom zoom percent" class="svelte-11jxgp9"/> <button type="submit" class="svelte-11jxgp9">Set</button></form></div>'),zu=E("<div><!> <!></div>");function Du(e,n){je(n,!1);const o=()=>vt(Vs,"$displayMode",a),r=()=>vt(Ko,"$displayFactor",a),[a,i]=$n(),l=c(),g=c(),f=c(),L=c(),w=c();let X=m(n,"width",8,1920),j=m(n,"height",8,1080),D=m(n,"inline",8,!1),P=c(!1),F=c(),B=c(),C=c(),O=c(""),$=0;const tt=X()===1920&&j()===1080,J=I=>`${Math.round(I*100)}%`,q=I=>`${Math.round(X()*I)}×${Math.round(j()*I)}`,Z=I=>So(I,2)?"4K":So(I,1)?"1:1":"";function bt(){Vs.set("FITTED"),s(P,!1)}function et(I){Ko.set(Aa(I)),Vs.set("SCALED"),s(P,!1)}function x(){const I=parseFloat(t(O));Number.isFinite(I)&&I>0&&et(I/100)}function z(I){var Tt,ht;$=wa(I,0,t(l).length);const yt=(Tt=t(l)[$])==null?void 0:Tt.id;if(!yt||!t(B))return;const dt=t(B).querySelector(`[data-choice="${yt}"]`);dt==null||dt.focus(),(ht=dt==null?void 0:dt.scrollIntoView)==null||ht.call(dt,{block:"nearest"})}function W(){var I,yt,dt,Tt;t(C)&&(t(C).focus(),(yt=(I=t(C)).select)==null||yt.call(I),(Tt=(dt=t(C)).scrollIntoView)==null||Tt.call(dt,{block:"nearest"}))}async function M(I){s(P,I),I&&($=Tu(t(l),t(g),t(f)),await po(),await po(),z($))}const S=ki.subscribe(I=>{I>0&&M(!t(P))});function b(I){if(t(P)){if(Js(I.target)){I.key==="Escape"&&(I.preventDefault(),s(P,!1));return}if(!I.ctrlKey&&!I.metaKey&&!I.altKey&&(I.key==="c"||I.key==="C"||I.code==="KeyC")){I.preventDefault(),W();return}switch(I.key){case"Escape":I.preventDefault(),s(P,!1);return;case"ArrowDown":I.preventDefault(),z(wa($,1,t(l).length));return;case"ArrowUp":I.preventDefault(),z(wa($,-1,t(l).length));return;case"Home":I.preventDefault(),z(0);return;case"End":I.preventDefault(),z(t(l).length-1);return;default:return}}}function y(I){t(F)&&!t(F).contains(I.target)&&s(P,!1)}Yn(()=>{window.addEventListener("keydown",b),document.addEventListener("click",y)}),Es(()=>{S(),window.removeEventListener("keydown",b),document.removeEventListener("click",y)}),_(()=>Cr,()=>{s(l,Cr(tt))}),_(()=>o(),()=>{s(g,o()==="FITTED")}),_(()=>r(),()=>{s(f,r())}),_(()=>(t(g),t(f)),()=>{s(L,t(g)?"FITTED":J(t(f)))}),_(()=>(nt(D()),t(L)),()=>{s(w,D()?`${t(L)} (Z)`:t(L))}),Nn(),hn();var N=zu();let pt;var gt=u(N);jn(gt,{chrome:!0,get text(){return t(w)},get hoverText(){return t(w)},get isSelected(){return t(P)},$$events:{click:()=>M(!t(P))}});var lt=d(gt,2);{var ut=I=>{var yt=Pu(),dt=u(yt);let Tt;var ht=d(dt,4);Cn(ht,1,()=>Li,hs,(kt,$t)=>{var Lt=Au();let ye;var jt=u(Lt),Rt=u(jt,!0);p(jt);var Nt=d(jt,2),xt=u(Nt,!0),Ct=d(xt);{var Yt=ce=>{var Qt=ss();V(_t=>wt(Qt,`· ${_t??""}`),[()=>(t($t),at(()=>Z(t($t))))]),h(ce,Qt)},qt=He(()=>(t($t),at(()=>tt&&Z(t($t)))));H(Ct,ce=>{t(qt)&&ce(Yt)})}p(Nt),p(Lt),V((ce,Qt,_t)=>{ye=Mt(Lt,1,"row svelte-11jxgp9",null,ye,ce),K(Lt,"data-choice",`s-${t($t)}`),wt(Rt,Qt),wt(xt,_t)},[()=>({current:!t(g)&&So(t(f),t($t))}),()=>(t($t),at(()=>J(t($t)))),()=>(t($t),at(()=>q(t($t))))]),Q("click",Lt,()=>et(t($t))),h(kt,Lt)});var st=d(ht,2);{var R=kt=>{var $t=Mu(),Lt=d(Wt($t),2);Cn(Lt,1,()=>Ri,hs,(ye,jt)=>{var Rt=Nu();let Nt;var xt=u(Rt),Ct=u(xt,!0);p(xt);var Yt=d(xt),qt=u(Yt);p(Yt),p(Rt),V((ce,Qt,_t)=>{Nt=Mt(Rt,1,"row svelte-11jxgp9",null,Nt,ce),K(Rt,"data-choice",(t(jt),at(()=>`r-${t(jt).name}`))),wt(Ct,Qt),wt(qt,`${_t??""} · ${t(jt),at(()=>t(jt).name)??""}`)},[()=>({current:!t(g)&&So(t(f),t(jt).factor)}),()=>(t(jt),at(()=>q(t(jt).factor))),()=>(t(jt),at(()=>J(t(jt).factor)))]),Q("click",Rt,()=>et(t(jt).factor)),h(ye,Rt)}),h(kt,$t)};H(st,kt=>{tt&&kt(R)})}var G=d(st,4),it=u(G);os(it),Ae(it,kt=>s(C,kt),()=>t(C)),Ke(2),p(G),p(yt),Ae(yt,kt=>s(B,kt),()=>t(B)),V((kt,$t)=>{Tt=Mt(dt,1,"row svelte-11jxgp9",null,Tt,{current:t(g)}),K(it,"min",kt),K(it,"max",$t)},[()=>(nt(dr),at(()=>Math.round(dr*100))),()=>(nt(pr),at(()=>Math.round(pr*100)))]),Q("click",dt,bt),ws(it,()=>t(O),kt=>s(O,kt)),Q("submit",G,vi(x)),h(I,yt)};H(lt,I=>{t(P)&&I(ut)})}p(N),Ae(N,I=>s(F,I),()=>t(F)),V(()=>pt=Mt(N,1,"mode gp-chrome no-print svelte-11jxgp9",null,pt,{expanded:t(P),inline:D()})),h(e,N),Be(),i()}const $r="0.7.2";var Cu=E('<div role="group" aria-label="Slide tools"><button type="button"><svg class="pin-icon svelte-1yphv3r" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"></path></svg></button> <span class="annot-bar-sep" aria-hidden="true"></span> <!> <span class="annot-bar-sep" aria-hidden="true"></span> <button type="button"><span class="tool-mn">A</span>NNOTATE</button> <!> <span class="annot-bar-sep" aria-hidden="true"></span> <!> <span class="annot-bar-sep" aria-hidden="true"></span>  <div role="presentation"><button type="button" class="annot-hamburger svelte-1yphv3r" aria-haspopup="menu" aria-label="More tools (M)">☰ (M)</button>  <div class="annot-drop svelte-1yphv3r" role="menu" aria-label="More tools" tabindex="-1"><!> <!> <!> <!> <div class="menu-sep svelte-1yphv3r" role="separator"></div> <!> <!> <div class="menu-sep svelte-1yphv3r" role="separator"></div> <!> <div class="menu-sep svelte-1yphv3r" role="separator"></div> <div class="menu-about svelte-1yphv3r" role="none"> </div></div></div></div>');function $u(e,n){je(n,!0);const o=()=>vt(ks,"$overviewOpen",w),r=()=>vt(Fs,"$moreMenuOpen",w),a=()=>vt(zr,"$toolBarPinned",w),i=()=>vt(Os,"$chromeArmed",w),l=()=>vt(oa,"$chromeBare",w),g=()=>vt(To,"$bareTucked",w),f=()=>vt(io,"$annotationMode",w),L=()=>vt(Qo,"$canAnnotate",w),[w,X]=$n();let j=m(n,"width",3,1920),D=m(n,"height",3,1080),P=tn(void 0);Is(()=>{o()&&(ns(),document.activeElement instanceof HTMLElement&&document.activeElement.blur())}),Is(()=>{var tt;if(r())return;const $=document.activeElement;$ instanceof HTMLElement&&((tt=t(P))!=null&&tt.contains($))&&$.blur()});let F=tn(!1);Is(()=>{r()&&s(F,!1)}),Is(()=>{if(!r())return;const $=tt=>{var J;(J=t(P))!=null&&J.contains(tt.target)||ns()};return document.addEventListener("pointerdown",$,!0),()=>document.removeEventListener("pointerdown",$,!0)});var B=vn(),C=Wt(B);{var O=$=>{var tt=Cu();let J;var q=u(tt);let Z;var bt=d(q,4);ps(bt,()=>n.presentBtn??ds);var et=d(bt,4);let x;var z=d(et,2);ps(z,()=>n.adjustGroup??ds);var W=d(z,4);Du(W,{get width(){return j()},get height(){return D()},inline:!0});var M=d(W,4);let S;var b=u(M),y=d(b,2),N=u(y);ps(N,()=>n.overviewBtn??ds);var pt=d(N,2);ps(pt,()=>n.kioskItem??ds);var gt=d(pt,2);ps(gt,()=>n.barsItem??ds);var lt=d(gt,2);ps(lt,()=>n.pointerItem??ds);var ut=d(lt,4);ps(ut,()=>n.captureItem??ds);var I=d(ut,2);ps(I,()=>n.printBtn??ds);var yt=d(I,4);ps(yt,()=>n.sourceItem??ds);var dt=d(yt,4),Tt=u(dt);p(dt),p(y),p(M),Ae(M,ht=>s(P,ht),()=>t(P)),p(tt),V(()=>{J=Mt(tt,1,"annot-tools no-print svelte-1yphv3r",null,J,{pinned:a(),armed:i(),"menu-open":r(),"overview-open":o(),bare:l(),tucked:l()&&g()}),K(tt,"aria-hidden",o()?"true":void 0),Z=Mt(q,1,"annot-tab pin-tab svelte-1yphv3r",null,Z,{on:a()}),K(q,"aria-pressed",a()),K(q,"aria-label",a()?"PIN on":"PIN off"),K(q,"title",a()?"PIN — this bar stays visible (click to auto-hide again)":"PIN — keep this bar visible"),x=Mt(et,1,"annot-tab annotate-tab",null,x,{on:f()}),et.disabled=!L(),K(et,"aria-pressed",f()),K(et,"aria-label",f()?"ANNOTATE on":"ANNOTATE off"),K(et,"title",L()?f()?"ANNOTATE — drawing (click to put the pen down)":"ANNOTATE — draw on this slide":"ANNOTATE — the pen is not offered on this deck"),S=Mt(M,1,"annot-menu svelte-1yphv3r",null,S,{"menu-open":r(),dismissed:t(F)}),K(b,"aria-expanded",r()),K(b,"title",`More — Overview, Kiosk, Bars, Pointer, Capture, Print, Source, Edit · GeekPresent ${$r}`),wt(Tt,`GeekPresent ${$r}`)}),Ze("click",q,()=>zr.update(ht=>!ht)),Ze("click",et,()=>io.update(ht=>!ht)),Q("pointerleave",M,()=>s(F,!1)),Ze("click",b,()=>_i()),Ze("click",y,()=>{ns(),s(F,!0)}),h($,tt)};H(C,$=>{$(O)})}h(e,B),Be(),X()}ja(["click"]);var Lu=E('<span class="ctrl-bar-sep svelte-3it5rl" aria-hidden="true"></span>'),Ru=E('<div role="group" aria-label="Slide controls"><button type="button"><svg class="pin-icon svelte-3it5rl" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"></path></svg></button> <span class="ctrl-bar-sep svelte-3it5rl" aria-hidden="true"></span> <!> <span class="ctrl-bar-sep svelte-3it5rl" aria-hidden="true"></span> <!> <!> <div></div></div>');function Iu(e,n){je(n,!0);const o=()=>vt(yl,"$hostedAnim",f),r=()=>vt(Dr,"$controlBarPinned",f),a=()=>vt(Os,"$chromeArmed",f),i=()=>vt(ks,"$overviewOpen",f),l=()=>vt(oa,"$chromeBare",f),g=()=>vt(To,"$bareTucked",f),[f,L]=$n();let w=tn(void 0);Yn(()=>(t(w)&&fr.set(t(w)),()=>fr.set(null)));let X=He(()=>o().size>0);var j=vn(),D=Wt(j);{var P=F=>{var B=Ru();let C;var O=u(B);let $;var tt=d(O,4);ps(tt,()=>n.tocItem??ds);var J=d(tt,4);ps(J,()=>n.navGroup??ds);var q=d(J,2);{var Z=x=>{var z=Lu();h(x,z)};H(q,x=>{t(X)&&x(Z)})}var bt=d(q,2);let et;Ae(bt,x=>s(w,x),()=>t(w)),p(B),V(()=>{C=Mt(B,1,"ctrl-bar no-print svelte-3it5rl",null,C,{pinned:r(),armed:a(),"overview-open":i(),bare:l(),tucked:l()&&g()}),K(B,"aria-hidden",i()?"true":void 0),$=Mt(O,1,"ctrl-pin svelte-3it5rl",null,$,{on:r()}),K(O,"aria-pressed",r()),K(O,"aria-label",r()?"PIN on":"PIN off"),K(O,"title",r()?"PIN — this bar stays visible (click to auto-hide again)":"PIN — keep this bar visible"),et=Mt(bt,1,"ctrl-anim svelte-3it5rl",null,et,{"has-anim":t(X)})}),Ze("click",O,()=>Dr.update(x=>!x)),h(F,B)};H(D,F=>{F(P)})}h(e,j),Be(),L()}ja(["click"]);var Ou=E('<div class="map gp-chrome no-print svelte-qfc4v2"><div class="view svelte-qfc4v2"></div></div>');function Fu(e,n){je(n,!1);const o=c();let r=m(n,"width",8,1920),a=m(n,"height",8,1080),i=m(n,"rect",24,()=>({left:0,top:0,width:1,height:1}));const l=160;_(()=>(nt(r()),nt(a())),()=>{s(o,Math.round(l/(r()/a())))}),Nn(),hn();var g=Ou(),f=u(g);p(g),V(()=>{re(g,`width:160px; height:${t(o)??""}px;`),re(f,`left:${nt(i()),at(()=>i().left*100)??""}%; top:${nt(i()),at(()=>i().top*100)??""}%; width:${nt(i()),at(()=>i().width*100)??""}%; height:${nt(i()),at(()=>i().height*100)??""}%;`)}),h(e,g),Be()}var Hu=as('<svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-s4ryjg"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>'),Ku=as('<svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-s4ryjg"><path d="M8 5v14l11-7z"></path></svg>'),ju=E('<div class="anim svelte-s4ryjg"><button class="icon svelte-s4ryjg"><!></button> <div class="track svelte-s4ryjg" role="slider" tabindex="0" aria-label="Animation progress (audience)"><div class="fill svelte-s4ryjg"></div> <div class="knob svelte-s4ryjg"></div></div> <button class="icon svelte-s4ryjg" aria-label="Restart"><svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-s4ryjg"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"></path></svg></button> <span class="label svelte-s4ryjg">ANIMATE</span></div>');function Bu(e,n){je(n,!1);let o=m(n,"onCommand",8,null),r=m(n,"scope",8,".content"),a=[],i=0,l=c(!1),g=c(!1),f=c(0),L=c(),w=0;function X(){const S=document.querySelector(r())??document;a=qa(S),i=kc(a),s(l,a.length>0&&i>0),t(l)&&(s(g,si(a)),s(f,Oo(a)))}function j(){var S;(S=o())==null||S({playing:t(g),fraction:t(f)})}function D(){s(f,Oo(a)),t(g)&&!a.every(S=>S.playState==="finished")?w=requestAnimationFrame(D):(a.length&&a.every(S=>S.playState==="finished")&&(s(g,!1),s(f,1),j()),w=0)}function P(){!w&&Ho&&(w=requestAnimationFrame(D))}function F(){w&&(cancelAnimationFrame(w),w=0)}function B(S){s(f,Math.max(0,Math.min(1,S)));const b=t(f)*i;for(const y of a)y.currentTime=Math.min(b,_c(y))}function C(){Oo(a)>=1&&B(0),xc(a),s(g,!0),P(),j()}function O(){wc(a),s(g,!1),F(),j()}function $(){t(g)?O():C()}function tt(){B(0),C()}let J=!1;function q(S){const b=t(L).getBoundingClientRect();return(S-b.left)/b.width}function Z(S){var b,y;J=!0,O(),B(q(S.clientX)),j(),(y=(b=t(L)).setPointerCapture)==null||y.call(b,S.pointerId)}function bt(S){J&&(B(q(S.clientX)),j())}function et(S){var b,y;J=!1,(y=(b=t(L)).releasePointerCapture)==null||y.call(b,S.pointerId)}function x(){F(),X(),t(l)?t(g)&&P():requestAnimationFrame(X)}Yn(x),yc(x),Es(F),hn();var z=vn(),W=Wt(z);{var M=S=>{var b=ju(),y=u(b),N=u(y);{var pt=dt=>{var Tt=Hu();h(dt,Tt)},gt=dt=>{var Tt=Ku();h(dt,Tt)};H(N,dt=>{t(g)?dt(pt):dt(gt,-1)})}p(y);var lt=d(y,2);K(lt,"aria-valuemin",0),K(lt,"aria-valuemax",100);var ut=u(lt),I=d(ut,2);p(lt),Ae(lt,dt=>s(L,dt),()=>t(L));var yt=d(lt,2);Ke(2),p(b),V(dt=>{K(y,"aria-label",t(g)?"Pause":"Play"),K(lt,"aria-valuenow",dt),re(ut,`width:${t(f)*100}%`),re(I,`left:${t(f)*100}%`)},[()=>(t(f),at(()=>Math.round(t(f)*100)))]),Q("click",y,$),Q("pointerdown",lt,Z),Q("pointermove",lt,bt),Q("pointerup",lt,et),Q("click",yt,tt),h(S,b)};H(W,S=>{t(l)&&S(M)})}h(e,z),Be()}const Uu="/__geekpresent/note-load",qu="/__geekpresent/note-save";async function Gu(e){try{const n=await fetch(`${Uu}?route=${encodeURIComponent(e)}`),o=await n.json().catch(()=>({}));return n.ok?typeof o.text!="string"?{ok:!1,error:"server returned no note"}:{ok:!0,text:o.text,fingerprint:o.fingerprint,file:o.file}:{ok:!1,error:o.error||`HTTP ${n.status}`}}catch(n){return{ok:!1,error:n instanceof Error?n.message:String(n)}}}async function Wu(e,n,o){try{const r=await fetch(qu,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({route:e,text:n,fingerprint:o})}),a=await r.json().catch(()=>({}));return r.ok?{ok:!0,file:a.file,fingerprint:a.fingerprint}:{ok:!1,error:a.error||`HTTP ${r.status}`}}catch(r){return{ok:!1,error:r instanceof Error?r.message:String(r)}}}var Vu=E('<span class="file svelte-4isy8i"> </span>'),Yu=E('<p class="error svelte-4isy8i" role="alert"> </p>'),Xu=E('<p class="hint svelte-4isy8i">Loading…</p>'),Qu=E('<textarea spellcheck="false" aria-label="Note source" class="svelte-4isy8i"></textarea> <p class="hint svelte-4isy8i">The HTML between &lt;Note&gt; and &lt;/Note&gt;. One element per line is one checkable line.</p>',1),Ju=E('<section aria-label="Edit speaker note"><header class="svelte-4isy8i"><span class="title svelte-4isy8i">EDIT NOTE</span> <!> <span class="spacer svelte-4isy8i"></span> <button type="button" class="save svelte-4isy8i" title="Save (Ctrl/Cmd+S)"> </button> <button type="button" title="Cancel (Esc)" class="svelte-4isy8i">CANCEL</button></header> <!> <!></section>');function Zu(e,n){je(n,!1);const o=c();let r=m(n,"route",8),a=m(n,"style",8,""),i=m(n,"id",8,""),l=m(n,"class",8,"");const g=Qr();let f=c("loading"),L=c(""),w=c(""),X="",j=c(""),D=c(""),P=c();Yn(async()=>{const b=await Gu(r());if(!b.ok){s(f,"failed"),s(D,b.error??"could not load the note");return}s(L,s(w,b.text??"")),X=b.fingerprint??"",s(j,b.file??""),s(f,"ready"),queueMicrotask(()=>{var y;return(y=t(P))==null?void 0:y.focus()})});function F(b){t(o)&&b.preventDefault()}Yn(()=>window.addEventListener("beforeunload",F)),Es(()=>{typeof window<"u"&&window.removeEventListener("beforeunload",F)});async function B(){if(t(f)!=="ready")return;if(!t(o)){g("close");return}s(f,"saving"),s(D,"");const b=await Wu(r(),t(L),X);if(!b.ok){s(f,"ready"),s(D,b.error??"save failed");return}s(w,t(L)),g("saved",{file:b.file}),g("close")}function C(){t(o)&&!confirm("Discard your changes to this note?")||g("close")}function O(b){b.stopPropagation(),(b.ctrlKey||b.metaKey)&&!b.altKey&&b.key.toLowerCase()==="s"?(b.preventDefault(),B()):b.key==="Escape"&&(b.preventDefault(),C())}_(()=>(t(L),t(w)),()=>{s(o,t(L)!==t(w))}),Nn(),hn();var $=Ju(),tt=u($),J=d(u(tt),2);{var q=b=>{var y=Vu(),N=u(y,!0);p(y),V(()=>{K(y,"title",t(j)),wt(N,t(j))}),h(b,y)};H(J,b=>{t(j)&&b(q)})}var Z=d(J,4),bt=u(Z,!0);p(Z);var et=d(Z,2);p(tt);var x=d(tt,2);{var z=b=>{var y=Yu(),N=u(y,!0);p(y),V(()=>wt(N,t(D))),h(b,y)};H(x,b=>{t(D)&&b(z)})}var W=d(x,2);{var M=b=>{var y=Xu();h(b,y)},S=b=>{var y=Qu(),N=Wt(y);pl(N),Ae(N,pt=>s(P,pt),()=>t(P)),Ke(2),V(()=>N.disabled=t(f)==="saving"),ws(N,()=>t(L),pt=>s(L,pt)),h(b,y)};H(W,b=>{t(f)==="loading"?b(M):t(f)!=="failed"&&b(S,1)})}p($),V(()=>{Mt($,1,`note-editor no-print ${l()??""}`,"svelte-4isy8i"),K($,"id",i()||void 0),re($,a()||void 0),Z.disabled=t(f)!=="ready",wt(bt,t(f)==="saving"?"SAVING…":"SAVE")}),Q("click",Z,B),Q("click",et,C),Q("keydown",$,O),h(e,$),Be()}const Ii="adjustMode",Oi="canAdjust";try{localStorage.removeItem(Ii)}catch{}const Zs=Xe(!1);let Qa=!1;function Fi(){return ta(localStorage.getItem(Oi))}function Hi(){Ki.set(ni(!1,Fi(),Qa))}const Fo=Jo(Ii,!1,{codec:Zo(),sync:!1,storage:"session"}),Ki=Xe(ni(!1,Fi(),Qa));function tf(e){Qa=e===!0,Hi()}function ef(e){const n=bc(e.searchParams);n!==null&&(localStorage.setItem(Oi,String(n)),n||Fo.set(!1)),Hi()}function nf(e,n=!1,o=!1){const r=((e==null?void 0:e.key)??"").toLowerCase();if(r==="escape"&&!e.ctrlKey&&!e.metaKey&&!e.altKey)return"close";if(Js(e==null?void 0:e.target))return"ignore";const a=Ec(e);if(a!=="ignore")return a;if(e.ctrlKey||e.metaKey||e.altKey||e.defaultPrevented)return"ignore";if(o){if(r==="arrowdown")return"tocDown";if(r==="arrowup")return"tocUp";if(r==="enter")return"tocSelect"}if(Tc(e))return e.shiftKey?"prev":"continue";if(r==="arrowright")return"next";if(r==="arrowleft")return"prev";switch(r){case"t":return"toc";case"c":return"checks";case"a":return n?"ink":"ignore";case"b":return"bars";case"e":return"editNote";case"r":return"record";default:return"ignore"}}var sf=E('<iframe class="preview-frame svelte-hqzamo" title="Current slide" tabindex="-1"></iframe>'),of=E('<iframe class="preview-frame svelte-hqzamo" title="Next slide" tabindex="-1"></iframe>'),af=E('<div class="preview-end svelte-hqzamo">End of deck</div>'),rf=E('<p class="no-matches svelte-hqzamo"> </p>'),lf=E('<span class="snip svelte-hqzamo"> </span>'),cf=E('<li class="svelte-hqzamo"><button type="button"><span class="n svelte-hqzamo"> </span> <span class="t svelte-hqzamo"> </span> <!></button></li>'),df=E('<ol class="svelte-hqzamo"></ol>'),pf=E('<div class="toc-menu svelte-hqzamo"><input class="search svelte-hqzamo" type="search" placeholder="Search slides…" aria-label="Search slides"/> <div class="toc-scroll svelte-hqzamo"><!></div></div>'),uf=E('<div class="toc-menu checks-menu svelte-hqzamo"><button type="button" class="svelte-hqzamo">Reset this page</button> <button type="button" class="svelte-hqzamo">Start over (whole deck)</button></div>'),ff=E('<div class="toc-menu checks-menu svelte-hqzamo"><button type="button" class="svelte-hqzamo"> </button> <button type="button" class="svelte-hqzamo">Reset ALL annotations</button></div>'),vf=E('<div title="Reset annotations (A)"><!> <!></div>'),hf=as('<svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-hqzamo"><path d="M8 5v14l11-7z"></path></svg>'),mf=as('<svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-hqzamo"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>'),gf=E('<div class="timer-menu svelte-hqzamo"><input type="text" inputmode="numeric" placeholder="mm:ss" aria-label="Set elapsed time" class="svelte-hqzamo"/> <button type="button" class="tm-set svelte-hqzamo">Set</button> <button type="button" class="tm-reset svelte-hqzamo">Reset</button></div>'),bf=E('<div class="preview-col no-print svelte-hqzamo"><div class="preview svelte-hqzamo"><div class="preview-label svelte-hqzamo">CURRENT</div> <div class="preview-box svelte-hqzamo"><!></div></div> <div class="preview svelte-hqzamo"><div class="preview-label svelte-hqzamo"> </div> <div class="preview-box svelte-hqzamo"><!></div></div></div> <!> <div role="separator" aria-orientation="vertical" aria-label="Resize previews and notes" title="Drag to resize"></div> <div class="bar no-print svelte-hqzamo"><div class="controls svelte-hqzamo"><div class="tools svelte-hqzamo"><span class="ov-btn svelte-hqzamo" title="All slides — pick one without the audience seeing you browse (O)"><!></span> <div title="Table of contents (T)"><!> <!></div> <div title="Reset checks (C)"><!> <!></div> <span class="bars-btn" title="Hide or show the bars on the audience screen (B)"><!></span> <span class="rec-btn" title="Record the slides window to a video for YouTube, with a replayable timeline (R)"><!></span> <span class="note-btn"><!></span> <!></div> <div class="nav svelte-hqzamo"><!> <!> <!> <!> <!></div> <!></div> <div class="meters svelte-hqzamo"><div class="pos svelte-hqzamo"> <span class="count svelte-hqzamo"> </span></div> <div class="clocks svelte-hqzamo"><span class="clock svelte-hqzamo"> </span> <div><button type="button"><!></button> <button type="button" title="Set / reset timer"> </button> <!></div></div></div></div>',1);function yf(e,n){je(n,!1);const o=()=>vt(Ua,"$page",f),r=()=>vt(yu,"$audienceBare",f),a=()=>vt(Zs,"$canSave",f),i=()=>vt(Qo,"$canAnnotate",f),l=()=>vt(ks,"$overviewOpen",f),g=()=>vt(ti,"$strokes",f),[f,L]=$n(),w=c(),X=c(),j=c(),D=c(),P=c(),F=c(),B=c(),C=c(),O=c(),$=c(),tt=c(),J=c(),q=c(),Z=c(),bt=c(),et=c(),x=c(),z=c(),W=c(),M=c();let S=m(n,"pages",24,()=>[]),b=m(n,"width",8,1920),y=m(n,"height",8,1080);const N=Xo();function pt(k){var mt,Gt;return(k==="back"?(mt=t(j))==null?void 0:mt.transitionBack:(Gt=t(j))==null?void 0:Gt.transition)??"slide"}function gt(k,mt){k&&uo(k+"?present",{viewTransitions:N,kind:pt(mt),direction:mt})}function lt(k){s(st,!1),uo(`./${k}?present`,{viewTransitions:N,kind:pt("forward"),direction:"forward"})}function ut(k){Tl(t(C),k)}function I(){Al(t(C))}let yt=c(0),dt=c(0),Tt=c(0),ht=c(0),st=c(!1),R=c(),G=c(""),it=c(-1),kt=c("");function $t(k){s(it,gi(t(it)<0?t(et):t(it),k,t(bt).length))}function Lt(){const k=t(it)<0&&t(Z)?0:t(it),mt=t(bt)[k];mt&&lt(mt.path)}function ye(k){if(k.stopPropagation(),k.key==="Escape"){k.preventDefault(),t(G)?s(G,""):s(st,!1);return}if(k.key==="ArrowDown"){k.preventDefault(),$t(1);return}if(k.key==="ArrowUp"){k.preventDefault(),$t(-1);return}k.key==="Enter"&&(k.preventDefault(),Lt())}function jt(k){k.focus()}function Rt(k,mt){const Gt=qe=>{qe&&typeof k.scrollIntoView=="function"&&k.scrollIntoView({block:"nearest"})};return Gt(mt),{update:Gt}}let Nt=c(!1),xt=c();function Ct(){s(Nt,!1),Ml(t(C),t(w)),window.dispatchEvent(new CustomEvent("gp:checks-clear"))}function Yt(){s(Nt,!1),Pl(t(C)),window.dispatchEvent(new CustomEvent("gp:checks-clear"))}let qt=c(!1),ce=c();function Qt(){s(qt,!1),Ma()}function _t(){s(qt,!1),Pa()}function fe(k){t(R)&&!t(R).contains(k.target)&&s(st,!1),t(xt)&&!t(xt).contains(k.target)&&s(Nt,!1),t(ce)&&!t(ce).contains(k.target)&&s(qt,!1),t(Un)&&!t(Un).contains(k.target)&&s(gn,!1)}function Jt(){s(st,!1),s(Nt,!1),s(qt,!1),s(gn,!1)}function ke(){Jt(),ks.set(!0)}function Re(){qo(!r())}function de(){jl(t(C))}let ie=c(!1),Qe=c(!1),en;function on(){if(!t(ie)){if(Jt(),!a()){s(Qe,!0),clearTimeout(en),en=setTimeout(()=>s(Qe,!1),2500);return}s(ie,!0)}}function wn(k){switch(nf(k,i(),t(st))){case"close":Jt();break;case"toc":{k.preventDefault();const mt=!t(st);Jt(),s(st,mt);break}case"checks":{k.preventDefault();const mt=!t(Nt);Jt(),s(Nt,mt);break}case"ink":{k.preventDefault();const mt=!t(qt);Jt(),s(qt,mt);break}case"bars":k.preventDefault(),Re();break;case"record":k.preventDefault(),de();break;case"editNote":k.preventDefault(),on();break;case"next":k.preventDefault(),gt(t(D).next,"forward");break;case"prev":k.preventDefault(),gt(t(D).prev,"back");break;case"first":k.preventDefault(),gt(t(D).first,"back");break;case"last":k.preventDefault(),gt(t(D).last,"forward");break;case"continue":k.preventDefault(),I();break;case"tocUp":k.preventDefault(),$t(-1);break;case"tocDown":k.preventDefault(),$t(1);break;case"tocSelect":k.preventDefault(),Lt();break}}let rs=c(""),is=c("00:00"),mn=0,Ie=c(null),xn;function Ln(k){const mt=Math.max(0,Math.floor(k)),Gt=Math.floor(mt/3600),qe=Math.floor(mt%3600/60),v=mt%60,U=ct=>String(ct).padStart(2,"0");return Gt>0?`${Gt}:${U(qe)}:${U(v)}`:`${U(qe)}:${U(v)}`}function Xn(){return((t(Ie)??Date.now())-mn)/1e3}function Bn(){s(rs,new Date().toLocaleTimeString()),s(is,Ln(Xn()))}function Rn(){const k=Date.now();t(Ie)==null?s(Ie,k):(mn+=k-t(Ie),ha(t(C),mn),s(Ie,null)),vr(t(C),t(Ie)),Bn()}let Un=c(),gn=c(!1),Qn=c("");function Ts(){s(gn,!t(gn)),t(gn)&&s(Qn,t(is))}function As(k){const mt=k.trim().split(":");if(mt.length<1||mt.length>3)return null;const Gt=mt.map(qe=>Number(qe));return Gt.some(qe=>!Number.isFinite(qe)||qe<0)?null:Gt.length===1?Gt[0]*60:Gt.length===2?Gt[0]*60+Gt[1]:Gt[0]*3600+Gt[1]*60+Gt[2]}function T(){const k=As(t(Qn));if(k==null)return;const mt=t(Ie)??Date.now();mn=ha(t(C),mt-k*1e3),Bn(),s(gn,!1)}function ot(){mn=ha(t(C)),s(Ie,null),vr(t(C),null),Bn(),s(gn,!1)}let Pt=c(),Ut=c(!1),se=c(!0),We=c(!1);const an=k=>{const mt=window.innerWidth||1;return Math.max(.2*mt,Math.min(.8*mt,k))};function rn(k){document.body.style.setProperty("--gp-split",`${Math.round(an(k))}px`)}function ms(){if(!t(dt))return;const k=getComputedStyle(document.body),mt=parseFloat(k.getPropertyValue("--gp-inset"))||20,Gt=parseFloat(k.getPropertyValue("--gp-gap"))||16;rn(mt+t(dt)*(b()/y())+Gt/2)}function Ns(k){s(Ut,!0),t(Pt).setPointerCapture(k.pointerId),k.preventDefault()}function qn(k){t(Ut)&&rn(k.clientX)}function A(k){var mt,Gt;t(Ut)&&(s(Ut,!1),s(se,!1),(Gt=(mt=t(Pt)).releasePointerCapture)==null||Gt.call(mt,k.pointerId),Nl(an(k.clientX)/(window.innerWidth||1)))}Yn(()=>{document.body.classList.add("gp-present"),mn=_l(t(C)),s(Ie,Sl(t(C))),Bn(),xn=setInterval(Bn,1e3);const k=El();k!=null&&(s(se,!1),rn(k*window.innerWidth)),s(We,!0),document.addEventListener("click",fe),window.addEventListener("keydown",wn)}),Es(()=>{xn&&clearInterval(xn),clearTimeout(en),typeof document<"u"&&(document.body.classList.remove("gp-present"),document.body.style.removeProperty("--gp-split"),document.removeEventListener("click",fe)),typeof window<"u"&&window.removeEventListener("keydown",wn)}),_(()=>o(),()=>{s(w,o().url.pathname.replace(/\/+$/,"").split("/").pop()||"")}),_(()=>(nt(S()),t(w)),()=>{s(X,S().findIndex(k=>k.path===t(w)))}),_(()=>(nt(S()),t(X)),()=>{s(j,S()[t(X)])}),_(()=>(nt(S()),t(w)),()=>{s(D,Jr(S(),t(w),"./"))}),_(()=>(t(X),nt(S())),()=>{s(P,t(X)>=0?S()[t(X)+1]:void 0)}),_(()=>t(j),()=>{s(F,t(j)?`./${t(j).path}?clean`:"")}),_(()=>t(P),()=>{s(B,t(P)?`./${t(P).path}?clean`:"")}),_(()=>o(),()=>{s(C,Na(o().url.pathname))}),_(()=>(o(),lo),()=>{s(O,o().url.pathname.replace(lo,"").split("/").filter(Boolean)[0]??"")}),_(()=>(t(yt),t(dt),nt(b()),nt(y())),()=>{s($,t(yt)>0&&t(dt)>0?Math.min(t(yt)/b(),t(dt)/y()):0)}),_(()=>(t(Tt),t(ht),nt(b()),nt(y())),()=>{s(tt,t(Tt)>0&&t(ht)>0?Math.min(t(Tt)/b(),t(ht)/y()):0)}),_(()=>(t(O),nt(S())),()=>{s(J,bi(t(O),S()))}),_(()=>t(st),()=>{t(st)||(s(G,""),s(it,-1))}),_(()=>(t(J),t(G)),()=>{s(q,mi(t(J),t(G)))}),_(()=>t(G),()=>{s(Z,t(G).trim().length>0)}),_(()=>(t(Z),t(q),nt(S())),()=>{s(bt,t(Z)?t(q).map(k=>({path:k.path,title:k.title,number:k.number,snippet:k.snippet})):S().map((k,mt)=>({path:k.path,title:k.title,number:mt+1})))}),_(()=>(t(Z),t(X)),()=>{s(et,t(Z)?-1:t(X))}),_(()=>(t(G),t(kt)),()=>{t(G)!==t(kt)&&(s(kt,t(G)),s(it,-1))}),_(()=>r(),()=>{s(x,r()?"▭ Bars: hidden":"▭ Bars: shown")}),_(()=>t(Qe),()=>{s(z,t(Qe)?"NOT ALLOWED":"EDIT NOTE")}),_(()=>t(Qe),()=>{s(W,t(Qe)?"Editing notes needs the dev server (pnpm dev) — there is no source to write here.":"Edit this slide's speaker note (E)")}),_(()=>t(Ie),()=>{s(M,t(Ie)!=null)}),_(()=>(t(We),t(se),t(dt)),()=>{t(We)&&t(se)&&t(dt)&&ms()}),Nn(),hn();var Y=bf(),rt=Wt(Y),Ot=u(rt),Zt=d(u(Ot),2),we=u(Zt);{var pe=k=>{var mt=sf();V(()=>{K(mt,"src",t(F)),re(mt,`width:${b()??""}px; height:${y()??""}px; transform: translate(-50%, -50%) scale(${t($)??""});`)}),h(k,mt)};H(we,k=>{t(F)&&k(pe)})}p(Zt),p(Ot);var It=d(Ot,2),oe=u(It),Vt=u(oe);p(oe);var zt=d(oe,2),Bt=u(zt);{var Ft=k=>{var mt=of();V(()=>{K(mt,"src",t(B)),re(mt,`width:${b()??""}px; height:${y()??""}px; transform: translate(-50%, -50%) scale(${t(tt)??""});`)}),h(k,mt)},De=k=>{var mt=af();h(k,mt)};H(Bt,k=>{t(B)?k(Ft):k(De,-1)})}p(zt),p(It),p(rt);var Ne=d(rt,2);{var he=k=>{Zu(k,{get route(){return o(),at(()=>o().url.pathname)},$$events:{close:()=>s(ie,!1)}})};H(Ne,k=>{t(ie)&&k(he)})}var ee=d(Ne,2);let _e;Ae(ee,k=>s(Pt,k),()=>t(Pt));var Ce=d(ee,2),Oe=u(Ce),ae=u(Oe),Me=u(ae),Mn=u(Me);jn(Mn,{text:"OVERVIEW",mnemonic:"O",get isSelected(){return l()},$$events:{click:ke}}),p(Me);var At=d(Me,2);let ft;var $e=u(At);{let k=fn(()=>t(st)?"ToC ▾":"ToC ▴");jn($e,{get text(){return t(k)},mnemonic:"T",get isSelected(){return t(st)},$$events:{click:()=>s(st,!t(st))}})}var me=d($e,2);{var Dt=k=>{var mt=pf(),Gt=u(mt);os(Gt),Xs(()=>ws(Gt,()=>t(G),St=>s(G,St))),Xs(()=>Q("keydown",Gt,ye)),ro(Gt,St=>jt==null?void 0:jt(St));var qe=d(Gt,2),v=u(qe);{var U=St=>{var Ht=rf(),le=u(Ht);p(Ht),V(Et=>wt(le,`No slides match "${Et??""}".`),[()=>(t(G),at(()=>t(G).trim()))]),h(St,Ht)},ct=St=>{var Ht=df();Cn(Ht,5,()=>t(bt),hs,(le,Et,Pe)=>{var ze=cf(),xe=u(ze);let Zn;var ne=u(xe),be=u(ne,!0);p(ne);var Je=d(ne,2),Ve=u(Je,!0);p(Je);var Le=d(Je,2);{var Tn=Hn=>{var ts=lf(),Ee=u(ts,!0);p(ts),V(()=>wt(Ee,(t(Et),at(()=>t(Et).snippet)))),h(Hn,ts)};H(Le,Hn=>{t(Et),at(()=>t(Et).snippet)&&Hn(Tn)})}p(xe),Xs(()=>Q("click",xe,()=>lt(t(Et).path))),ro(xe,(Hn,ts)=>Rt==null?void 0:Rt(Hn,ts),()=>Pe===t(it)),p(ze),V(()=>{Zn=Mt(xe,1,"svelte-hqzamo",null,Zn,{current:t(Et).path===t(w),selected:Pe===t(it)}),wt(be,(t(Et),at(()=>t(Et).number??""))),wt(Ve,(t(Et),at(()=>t(Et).title)))}),h(le,ze)}),p(Ht),h(St,Ht)};H(v,St=>{t(Z),t(bt),at(()=>t(Z)&&t(bt).length===0)?St(U):St(ct,-1)})}p(qe),p(mt),h(k,mt)};H(me,k=>{t(st)&&k(Dt)})}p(At),Ae(At,k=>s(R,k),()=>t(R));var ge=d(At,2);let Se;var nn=u(ge);{let k=fn(()=>t(Nt)?"☑ Checks ▾":"☑ Checks ▴"),mt=fn(()=>t(Nt)?"☑ Checks ▾":"☑ Checks ▴");jn(nn,{get text(){return t(k)},get hoverText(){return t(mt)},mnemonic:"C",get isSelected(){return t(Nt)},$$events:{click:()=>s(Nt,!t(Nt))}})}var bn=d(nn,2);{var Ue=k=>{var mt=uf(),Gt=u(mt),qe=d(Gt,2);p(mt),Q("click",Gt,Ct),Q("click",qe,Yt),h(k,mt)};H(bn,k=>{t(Nt)&&k(Ue)})}p(ge),Ae(ge,k=>s(xt,k),()=>t(xt));var In=d(ge,2),On=u(In);jn(On,{get text(){return t(x)},get hoverText(){return t(x)},mnemonic:"B",get isSelected(){return r()},$$events:{click:Re}}),p(In);var ln=d(In,2),yn=u(ln);jn(yn,{text:"● REC",hoverText:"● REC",mnemonic:"R",$$events:{click:de}}),p(ln);var ve=d(ln,2),cn=u(ve);{let k=fn(()=>t(Qe)?"":"E");jn(cn,{get text(){return t(z)},get hoverText(){return t(z)},get mnemonic(){return t(k)},get isSelected(){return t(ie)},$$events:{click:on}})}p(ve);var ls=d(ve,2);{var gs=k=>{var mt=vf();let Gt;var qe=u(mt);{let ct=fn(()=>t(qt)?"✎ Annotate ▾":"✎ Annotate ▴"),St=fn(()=>t(qt)?"✎ Annotate ▾":"✎ Annotate ▴");jn(qe,{get text(){return t(ct)},get hoverText(){return t(St)},mnemonic:"A",get isSelected(){return t(qt)},$$events:{click:()=>s(qt,!t(qt))}})}var v=d(qe,2);{var U=ct=>{var St=ff(),Ht=u(St),le=u(Ht);p(Ht);var Et=d(Ht,2);p(St),V(()=>{Ht.disabled=(g(),at(()=>g().length===0)),wt(le,`Reset this slide${g(),at(()=>g().length?` (${g().length})`:"")??""}`)}),Q("click",Ht,Qt),Q("click",Et,_t),h(ct,St)};H(v,ct=>{t(qt)&&ct(U)})}p(mt),Ae(mt,ct=>s(ce,ct),()=>t(ce)),V(()=>Gt=Mt(mt,1,"toc checks svelte-hqzamo",null,Gt,{open:t(qt)})),h(k,mt)};H(ls,k=>{i()&&k(gs)})}p(ae);var dn=d(ae,2),Gn=u(dn);{let k=fn(()=>(t(D),at(()=>!t(D).first)));jn(Gn,{text:"FIRST",get isDisabled(){return t(k)},$$events:{click:()=>gt(t(D).first,"back")}})}var Jn=d(Gn,2);{let k=fn(()=>(t(D),at(()=>!t(D).prev)));jn(Jn,{text:"◀ PREV",get isDisabled(){return t(k)},$$events:{click:()=>gt(t(D).prev,"back")}})}var te=d(Jn,2);jn(te,{text:"CONTINUE",$$events:{click:I}});var Kt=d(te,2);{let k=fn(()=>(t(D),at(()=>!t(D).next)));jn(Kt,{text:"NEXT ▶",get isDisabled(){return t(k)},$$events:{click:()=>gt(t(D).next,"forward")}})}var ue=d(Kt,2);{let k=fn(()=>(t(D),at(()=>!t(D).last)));jn(ue,{text:"LAST",get isDisabled(){return t(k)},$$events:{click:()=>gt(t(D).last,"forward")}})}p(dn);var Fe=d(dn,2);Bu(Fe,{onCommand:ut}),p(Oe);var _n=d(Oe,2),Pn=u(_n),cs=u(Pn),Fn=d(cs),Ms=u(Fn);p(Fn),p(Pn);var Hs=d(Pn,2),Sn=u(Hs),Wn=u(Sn);p(Sn);var En=d(Sn,2);let Ks;var zn=u(En);let ho;var ra=u(zn);{var ia=k=>{var mt=hf();h(k,mt)},No=k=>{var mt=mf();h(k,mt)};H(ra,k=>{t(M)?k(ia):k(No,-1)})}p(zn);var js=d(zn,2);let mo;var la=u(js);p(js);var Mo=d(js,2);{var ca=k=>{var mt=gf(),Gt=u(mt);os(Gt);var qe=d(Gt,2),v=d(qe,2);p(mt),ws(Gt,()=>t(Qn),U=>s(Qn,U)),Q("keydown",Gt,U=>{U.key==="Enter"&&T()}),Q("click",qe,T),Q("click",v,ot),h(k,mt)};H(Mo,k=>{t(gn)&&k(ca)})}p(En),Ae(En,k=>s(Un,k),()=>t(Un)),p(Hs),p(_n),p(Ce),V(()=>{re(Zt,`aspect-ratio: ${b()??""} / ${y()??""};`),wt(Vt,`NEXT ▸ ${t(P),at(()=>t(P)?t(P).title:"— end of deck —")??""}`),re(zt,`aspect-ratio: ${b()??""} / ${y()??""};`),_e=Mt(ee,1,"splitter no-print svelte-hqzamo",null,_e,{dragging:t(Ut)}),ft=Mt(At,1,"toc svelte-hqzamo",null,ft,{open:t(st)}),Se=Mt(ge,1,"toc checks svelte-hqzamo",null,Se,{open:t(Nt)}),K(ve,"title",t(W)),wt(cs,`${t(j),at(()=>t(j)?t(j).title:"")??""} `),wt(Ms,`${t(X)>=0?t(X)+1:"?"} / ${nt(S()),at(()=>S().length)??""}`),wt(Wn,`🕑 ${t(rs)??""}`),Ks=Mt(En,1,"timer svelte-hqzamo",null,Ks,{open:t(gn)}),ho=Mt(zn,1,"pause-btn svelte-hqzamo",null,ho,{paused:t(M)}),K(zn,"title",t(M)?"Resume timer":"Pause timer"),K(zn,"aria-label",t(M)?"Resume timer":"Pause timer"),mo=Mt(js,1,"elapsed svelte-hqzamo",null,mo,{paused:t(M)}),wt(la,`⏱ ${t(is)??""}`)}),ao(Zt,"clientWidth",k=>s(yt,k)),ao(Zt,"clientHeight",k=>s(dt,k)),ao(zt,"clientWidth",k=>s(Tt,k)),ao(zt,"clientHeight",k=>s(ht,k)),Q("pointerdown",ee,Ns),Q("pointermove",ee,qn),Q("pointerup",ee,A),Q("click",zn,Rn),Q("click",js,Ts),h(e,Y),Be(),L()}const Ja="livePointer";function kf(e){if(!e||!e.has("pointer"))return null;const n=(e.get("pointer")??"").trim().toLowerCase();return n!=="off"&&n!=="false"&&n!=="0"}function wf(e,n){return e!==null?e:n===!0}function xf(e){return e==="dot"||e==="ring"?e:"arrow"}const Za=40;function _f(e){const n=Number(e);return!Number.isFinite(n)||n<=0?Za:Math.min(200,Math.max(8,n))}function Sf(e,n){if(e==="arrow"){const o=-.125*n;return[o,o]}return[-n/2,-n/2]}function ji(){try{return ta(localStorage.getItem(Ja))}catch{return null}}const tr=Xe(ji()),Bi=Xe(!1),er=Qs([tr,Bi],([e,n])=>wf(e,n));function Ui(e){try{localStorage.setItem(Ja,String(e))}catch{}tr.set(e)}function Co(){Ui(!Te(er))}function Ef(e){Bi.set(e===!0)}function Tf(e){const n=kf(e.searchParams);n!==null&&Ui(n)}window.addEventListener("storage",e=>{(e.key===Ja||e.key===null)&&tr.set(ji())});var Af=E('<span class="live-ripple svelte-19i1gra"></span>'),Nf=as('<svg viewBox="0 0 24 24" width="100%" height="100%" class="svelte-19i1gra"><circle cx="12" cy="12" r="8" fill="var(--live-pointer-fill, #ffd23f)" stroke="var(--live-pointer-outline, rgba(0, 0, 0, 0.8))" stroke-width="1.4" class="svelte-19i1gra"></circle></svg>'),Mf=as('<svg viewBox="0 0 24 24" width="100%" height="100%" class="svelte-19i1gra"><circle cx="12" cy="12" r="8" fill="none" stroke="var(--live-pointer-fill, #ffd23f)" stroke-width="2.5" class="svelte-19i1gra"></circle></svg>'),Pf=as('<svg viewBox="0 0 24 24" width="100%" height="100%" class="svelte-19i1gra"><path d="M3 3 L10.07 19.97 L12.58 12.58 L19.97 10.07 Z" fill="var(--live-pointer-fill, #ffd23f)" stroke="var(--live-pointer-outline, rgba(0, 0, 0, 0.8))" stroke-width="1.4" stroke-linejoin="round" class="svelte-19i1gra"></path></svg>'),zf=E('<span class="live-glyph svelte-19i1gra"><!></span>'),Df=E('<div aria-hidden="true"><!> <!></div>');function Cf(e,n){je(n,!0);const o=()=>vt(er,"$livePointer",r),[r,a]=$n();let i=m(n,"shape",3,"arrow"),l=m(n,"size",3,Za),g=m(n,"style",3,""),f=m(n,"id",3,""),L=m(n,"class",3,"");const w=He(()=>xf(i())),X=He(()=>_f(l())),j=He(()=>Sf(t(w),t(X)));let D=tn(0),P=tn(0),F=tn(!1),B=tn(Ea([])),C=0;function O(x){s(D,x.clientX,!0),s(P,x.clientY,!0),s(F,!0)}function $(x){O(x);const z={id:C++,x:x.clientX,y:x.clientY};s(B,[...t(B),z],!0),setTimeout(()=>{s(B,t(B).filter(W=>W.id!==z.id),!0)},700)}function tt(){s(F,!1)}let J=!1;function q(x){if(x===J)return;J=x;const z=document.documentElement,W={capture:!0,passive:!0};x?(z.classList.add("gp-live-pointer"),window.addEventListener("pointermove",O,W),window.addEventListener("pointerdown",$,W),z.addEventListener("mouseleave",tt)):(z.classList.remove("gp-live-pointer"),window.removeEventListener("pointermove",O,W),window.removeEventListener("pointerdown",$,W),z.removeEventListener("mouseleave",tt),s(F,!1),s(B,[],!0))}Is(()=>{q(o())}),Es(()=>q(!1));var Z=vn(),bt=Wt(Z);{var et=x=>{var z=Df(),W=u(z);Cn(W,17,()=>t(B),b=>b.id,(b,y)=>{var N=Af();V(()=>re(N,`left:${t(y).x??""}px; top:${t(y).y??""}px; --live-ripple-size:${t(X)??""}px;`)),h(b,N)});var M=d(W,2);{var S=b=>{var y=zf(),N=u(y);{var pt=ut=>{var I=Nf();h(ut,I)},gt=ut=>{var I=Mf();h(ut,I)},lt=ut=>{var I=Pf();h(ut,I)};H(N,ut=>{t(w)==="dot"?ut(pt):t(w)==="ring"?ut(gt,1):ut(lt,-1)})}p(y),V(()=>re(y,`width:${t(X)??""}px; height:${t(X)??""}px; transform: translate3d(${t(D)+t(j)[0]}px, ${t(P)+t(j)[1]}px, 0);`)),h(b,y)};H(M,b=>{t(F)&&b(S)})}p(z),V(()=>{Mt(z,1,`live-pointer no-print ${L()??""}`,"svelte-19i1gra"),K(z,"id",f()||void 0),re(z,g()||void 0)}),h(x,z)};H(bt,x=>{o()&&x(et)})}h(e,Z),Be(),a()}const $f={mod:"mod",cmd:"cmd",command:"cmd",meta:"cmd","⌘":"cmd",ctrl:"ctrl",control:"ctrl","⌃":"ctrl",alt:"alt",opt:"alt",option:"alt","⌥":"alt",shift:"shift","⇧":"shift",win:"win",windows:"win",super:"win",enter:"enter",return:"enter",esc:"esc",escape:"esc",tab:"tab",space:"space",spacebar:"space",backspace:"backspace",bksp:"backspace",del:"delete",delete:"delete",ins:"insert",insert:"insert",up:"up",arrowup:"up",down:"down",arrowdown:"down",left:"left",arrowleft:"left",right:"right",arrowright:"right",pgup:"pageup",pageup:"pageup",pgdn:"pagedown",pagedown:"pagedown",home:"home",end:"end"},Lf={cmd:"Cmd",ctrl:"Ctrl",alt:"Alt",shift:"Shift",win:"Win",enter:"Enter",esc:"Esc",tab:"Tab",space:"Space",backspace:"Backspace",delete:"Delete",insert:"Insert",pageup:"Page Up",pagedown:"Page Down",home:"Home",end:"End"},Lr={up:"↑",down:"↓",left:"←",right:"→"},Rr={cmd:"⌘",ctrl:"⌃",alt:"⌥",shift:"⇧",enter:"↩",esc:"⎋",tab:"⇥",space:"␣",backspace:"⌫",delete:"⌦",pageup:"⇞",pagedown:"⇟",home:"↖",end:"↘"};function Rf(e){const n=[];let o="";for(const r of e){if(r!=="+"){o+=r;continue}o?(n.push(o),o=""):n[n.length-1]!=="+"&&n.push("+")}return o&&n.push(o),n}function If(e,n="pc",o=!0){if(typeof e!="string")return"";const r=e.trim();if(!r)return"";let a=$f[r.toLowerCase()];return a==="mod"&&(a=n==="mac"?"cmd":"ctrl"),a?Lr[a]?Lr[a]:n==="mac"&&o&&Rr[a]?Rr[a]:Lf[a]??r:[...r].length===1?r.toUpperCase():r}function Ir(e,n="pc",o=!0){return typeof e!="string"?[]:e.trim().split(/\s+/).filter(Boolean).map(r=>Rf(r).map(a=>If(a,n,o)).filter(Boolean)).filter(r=>r.length>0)}function Of(e="pc",n=!0){return e==="mac"&&n?"":"+"}function Ff(e){var o;if(!e)return"pc";const n=((o=e.userAgentData)==null?void 0:o.platform)||e.platform||e.userAgent||"";return/mac|iphone|ipad|ipod/i.test(n)?"mac":"pc"}var Hf=E('<span class="then svelte-m8sum" aria-hidden="true"> </span>'),Kf=E('<span class="join svelte-m8sum"> </span>'),jf=E('<!> <kbd class="cap svelte-m8sum"> </kbd>',1),Bf=E('<!> <kbd class="chord svelte-m8sum"></kbd>',1),Uf=E("<span></span>"),qf=E('<span><kbd class="chord svelte-m8sum"><kbd class="cap svelte-m8sum"><!></kbd></kbd></span>');function $o(e,n){const o=ul(n);je(n,!1);const r=c(),a=c(),i=c(),l=c(),g=c();let f=m(n,"keys",8,""),L=m(n,"platform",8,"pc"),w=m(n,"symbols",8,!0),X=m(n,"join",8,null),j=m(n,"then",8,"then"),D=m(n,"style",8,""),P=m(n,"id",8,""),F=m(n,"class",8,""),B=c("pc");Yn(()=>{L()==="auto"&&s(B,Ff(globalThis.navigator))}),_(()=>(nt(L()),t(B)),()=>{s(r,L()==="auto"?t(B):L()==="mac"?"mac":"pc")}),_(()=>(nt(f()),t(r),nt(w())),()=>{s(a,Ir(f(),t(r),w()))}),_(()=>(nt(X()),t(r),nt(w())),()=>{s(i,X()??Of(t(r),w()))}),_(()=>(t(r),nt(w())),()=>{s(l,t(r)==="mac"&&w())}),_(()=>(t(l),nt(f()),t(r),nt(j())),()=>{s(g,t(l)?Ir(f(),t(r),!1).map(J=>J.join(" ")).join(`, ${j()||"then"} `):"")}),Nn(),hn();var C=vn(),O=Wt(C);{var $=J=>{var q=Uf();Cn(q,5,()=>t(a),hs,(Z,bt,et)=>{var x=Bf(),z=Wt(x);{var W=S=>{var b=Hf(),y=u(b,!0);p(b),V(()=>wt(y,j())),h(S,b)};H(z,S=>{et>0&&j()&&S(W)})}var M=d(z,2);Cn(M,5,()=>t(bt),hs,(S,b,y)=>{var N=jf(),pt=Wt(N);{var gt=I=>{var yt=Kf(),dt=u(yt,!0);p(yt),V(()=>wt(dt,t(i))),h(I,yt)};H(pt,I=>{y>0&&t(i)&&I(gt)})}var lt=d(pt,2),ut=u(lt,!0);p(lt),V(()=>wt(ut,t(b))),h(S,N)}),p(M),V(()=>K(M,"aria-hidden",t(l)?"true":void 0)),h(Z,x)}),p(q),V(()=>{Mt(q,1,`kbd ${F()??""}`,"svelte-m8sum"),K(q,"id",P()||void 0),re(q,D()),K(q,"aria-label",t(l)?t(g):void 0)}),h(J,q)},tt=J=>{var q=qf(),Z=u(q),bt=u(Z),et=u(bt);Ba(et,n,"default",{},null),p(bt),p(Z),p(q),V(()=>{Mt(q,1,`kbd ${F()??""}`,"svelte-m8sum"),K(q,"id",P()||void 0),re(q,D())}),h(J,q)};H(O,J=>{t(a),at(()=>t(a).length)?J($):at(()=>o.default)&&J(tt,1)})}h(e,C),Be()}const Go=Jo("geekpresent:onboard:done",!1,{codec:Zo(),sync:!0});function $s(){Te(Go)||Go.set(!0)}const qi=8e3;function Gf(e){return typeof e=="number"&&Number.isFinite(e)&&e>=0?e:qi}function Gi(e,n){return vo(e).findIndex(o=>o.path===n)}function Wf(e,n){return Gi(e,n)===0&&vo(e).length>1}function Vf(e,n){return Gi(e,n)>0}function Yf(e){return e.suppressed?!1:!!e.force||e.offered&&!e.done&&e.firstSlide}const Xf=new Set([" ","Spacebar","ArrowRight","ArrowLeft","PageDown","PageUp"]),Qf=new Set(["Enter","ArrowDown","ArrowUp"]);function Jf(e,n={}){return n.ctrl||n.meta||n.alt?"none":Xf.has(e)?"explore":Qf.has(e)?"stray":"none"}var Zf=E('<div class="edge top gp-chrome no-print svelte-2rg8pd" aria-hidden="true"></div> <div class="edge bottom gp-chrome no-print svelte-2rg8pd" aria-hidden="true"></div>',1),tv=E('<p class="row alt-bars svelte-2rg8pd"><!> tool bar <span class="where svelte-2rg8pd">(top)</span> + nav bar <span class="where svelte-2rg8pd">(bottom)</span></p> <p class="row svelte-2rg8pd">or point at the <b class="svelte-2rg8pd">top</b> or <b class="svelte-2rg8pd">bottom</b> edge of the window</p>',1),ev=E(`<div><!> <div role="status" aria-live="polite"><p class="title svelte-2rg8pd">New here? Here's how to get around.</p> <p class="row svelte-2rg8pd"><!> next slide <span class="sep svelte-2rg8pd" aria-hidden="true">·</span> <!> next step <span class="sep svelte-2rg8pd" aria-hidden="true">·</span> <!> back</p> <!> <button type="button" class="got-it svelte-2rg8pd">Got it</button></div></div>`);function nv(e,n){je(n,!1);const o=()=>vt(Go,"$onboardDone",r),[r,a]=$n(),i=c(),l=c();let g=m(n,"offered",8,!0),f=m(n,"firstSlide",8,!1),L=m(n,"suppressed",8,!1),w=m(n,"bars",8,!0),X=m(n,"delayMs",8,8e3),j=m(n,"force",8,!1),D=m(n,"themeClass",8,""),P=m(n,"style",8,""),F=m(n,"id",8,""),B=m(n,"class",8,""),C=c(!1),O=c(!1),$=null,tt=c(!1);function J(y){t(O)||$||($=setTimeout(Z,y))}function q(){$&&clearTimeout($),$=null,s(O,!1)}function Z(){$&&clearTimeout($),$=null,s(O,!0)}function bt(){s(tt,!0),$s()}const et='a, button, input, textarea, select, label, [contenteditable], [role="button"], .overlay, .gp-chrome';function x(y){if(!t(l)||Js(y.target))return;const N=Jf(y.key,{ctrl:y.ctrlKey,meta:y.metaKey,alt:y.altKey});N==="explore"?bt():N==="stray"&&Z()}function z(y){var pt;if(!t(l))return;const N=y.target;(pt=N==null?void 0:N.closest)!=null&&pt.call(N,et)||Z()}function W(){t(l)&&Z()}Yn(()=>(j()&&Go.set(!1),s(C,!0),window.addEventListener("keydown",x,!0),window.addEventListener("pointerdown",z,!0),window.addEventListener("wheel",W,{capture:!0,passive:!0}),()=>{window.removeEventListener("keydown",x,!0),window.removeEventListener("pointerdown",z,!0),window.removeEventListener("wheel",W,{capture:!0}),q()})),_(()=>(nt(j()),t(tt)),()=>{s(i,j()&&!t(tt))}),_(()=>(t(C),nt(g()),o(),nt(f()),nt(L()),t(i)),()=>{s(l,t(C)&&Yf({offered:g(),done:o(),firstSlide:f(),suppressed:L(),force:t(i)}))}),_(()=>(t(l),t(i),nt(X())),()=>{t(l)&&t(i)?Z():t(l)?J(Gf(X())):q()}),Nn(),hn();var M=vn(),S=Wt(M);{var b=y=>{var N=ev(),pt=u(N);{var gt=R=>{var G=Zf();Ke(2),h(R,G)};H(pt,R=>{w()&&R(gt)})}var lt=d(pt,2),ut=d(u(lt),2),I=u(ut);$o(I,{children:(R,G)=>{Ke();var it=ss("→");h(R,it)},$$slots:{default:!0}});var yt=d(I,4);$o(yt,{children:(R,G)=>{Ke();var it=ss("Space");h(R,it)},$$slots:{default:!0}});var dt=d(yt,4);$o(dt,{children:(R,G)=>{Ke();var it=ss("←");h(R,it)},$$slots:{default:!0}}),Ke(),p(ut);var Tt=d(ut,2);{var ht=R=>{var G=tv(),it=Wt(G),kt=u(it);$o(kt,{keys:"Alt+.",platform:"auto"}),Ke(4),p(it),Ke(2),h(R,G)};H(Tt,R=>{w()&&R(ht)})}var st=d(Tt,2);p(lt),p(N),V(()=>{Mt(N,1,`onboard-theme ${D()??""}`,"svelte-2rg8pd"),Mt(lt,1,`onboard-hint gp-chrome no-print ${B()??""}`,"svelte-2rg8pd"),K(lt,"id",F()||void 0),re(lt,P())}),Q("click",st,bt),h(y,N)};H(S,y=>{t(l)&&t(O)&&y(b)})}h(e,M),Be(),a()}let Ss=null;function sv(e){if(typeof window>"u")return null;const n={...e,ts:Date.now()};try{sessionStorage.setItem(Ic,Oc(n))}catch{}const o=`${lo}/_source-edit`,r="popup=yes,width=1280,height=900,menubar=no,toolbar=no,location=no,status=no";if(!Ss||Ss.closed)Ss=window.open(o,Fc,r);else{Ss.focus();try{Ss.postMessage({type:_r,...n},window.location.origin)}catch{}}if(Ss&&!Ss.closed){const a=Ss,i=()=>{try{a.postMessage({type:_r,...n},window.location.origin)}catch{}};setTimeout(i,50),setTimeout(i,300)}return Ss}const aa=Xe(new Set),ov=new Map,av=Qs(aa,e=>e.size>0),Wi=Qs([aa,Zs],([e,n])=>e.size>0||n),Vi=Qs([aa,Zs],([e,n])=>n||e.size>0);Qs([Wi,Vi],([e,n])=>e||n);const Ra=Xe(!1),Wo=Xe(null);function Yi(){return typeof location>"u"?"":location.pathname}async function Or(){if(Te(aa).size>0){Wo.set(null),Ra.set(!0);return}if(!Te(Zs))return;const e=Yi(),n=await oi(e);if(!n.ok||typeof n.content!="string"){console.warn("[SOURCE]",n.error??"could not load page source");return}Wo.set({code:n.content,path:n.file??e,route:e}),Ra.set(!0)}async function xa(){const e=[...ov.values()],n=e[e.length-1];if(n){n();return}if(!Te(Zs)){console.warn("[EDIT] no ViewSource on this slide and SAVE is not available");return}const o=Yi(),r=await oi(o);if(!r.ok||typeof r.content!="string"){console.warn("[EDIT]",r.error??"could not load page source");return}sv({route:o,path:r.file??"",source:r.content,language:"svelte",canSave:!0})?Ia():console.warn("[EDIT] popup blocked — allow popups for this origin to edit source in a separate window")}function Ia(){Ra.set(!1),Wo.set(null)}function rv(e){switch(e.key){case"ArrowUp":return"up";case"ArrowDown":return"down";case"ArrowLeft":return"left";case"ArrowRight":return"right";default:return""}}function no(e,n,o){if(o<=0)return 0;const r=Number.isFinite(e)?Math.trunc(e):0,a=Number.isFinite(n)?Math.trunc(n):0;return((r+a)%o+o)%o}function so(e,n){if(!n||!e.length)return-1;const o=e.indexOf(n);if(o>=0)return o;for(let r=0;r<e.length;r++)if(e[r].contains(n))return r;return-1}function iv(e){return e.printOpen&&(e.focusInPrint||e.focusOnHamburger||e.focusInMoreDrop)?"print":e.moreOpen&&(e.focusInMoreDrop||e.focusOnHamburger||e.focusOnBar)||e.moreOpen?"more":e.armed?"bar":"none"}function oo(e,n,o,r){return!n||e==="none"||r<0?null:e==="bar"?n==="left"?no(o<0?0:o,-1,r):n==="right"?no(o<0?-1:o,1,r):null:e==="more"?n==="down"?o<0?r>0?0:null:no(o,1,r):n==="up"?o<=0?-1:no(o,-1,r):null:e==="print"?n==="down"?no(o<0?-1:o,1,r):n==="up"?no(o<0?0:o,-1,r):n==="left"?-1:null:null}var lv=E('<div class="close svelte-20g118" role="button" tabindex="-1">CLOSE</div>'),cv=E('<div class="link svelte-20g118"><a target="_blank" class="svelte-20g118"> </a></div>'),dv=E('<div><div class="img-box svelte-20g118" role="dialog" tabindex="-1"><!> <!> <!></div></div>');function pv(e,n){je(n,!1);let o=m(n,"width",8),r=m(n,"height",8),a=m(n,"expanded",12,!1),i=m(n,"showClose",8,!0),l=m(n,"scrollable",8,!1),g=m(n,"top",8,null),f=m(n,"left",8,null),L=m(n,"bottom",8,null),w=m(n,"right",8,null),X=m(n,"linkUrl",8,null),j=m(n,"linkText",8,"LINK"),D=m(n,"shadowOpacity",8,.8),P=m(n,"onClick",8,null),F=m(n,"containsExternal",8,null),B=m(n,"style",8,""),C=m(n,"id",8,""),O=m(n,"class",8,""),$=c();function tt(){a(!1)}function J(N){N.key==="Escape"&&tt()}function q(N){!a()||!t($)||t($).contains(N.target)||F()&&F()(N.target)||tt()}let Z=!1;function bt(){Z||(document.addEventListener("click",q),Z=!0)}function et(){Z&&(document.removeEventListener("click",q),Z=!1)}Yn(()=>(window.addEventListener("keydown",J),()=>{window.removeEventListener("keydown",J),et()})),_(()=>nt(a()),()=>{a()?setTimeout(bt,0):et()}),Nn(),hn();var x=dv(),z=u(x),W=u(z);Ba(W,n,"default",{},null);var M=d(W,2);{var S=N=>{var pt=lv();Q("click",pt,tt),Q("keydown",pt,tt),h(N,pt)};H(M,N=>{i()&&N(S)})}var b=d(M,2);{var y=N=>{var pt=cv(),gt=u(pt),lt=u(gt,!0);p(gt),p(pt),V(()=>{K(gt,"href",X()),wt(lt,j())}),h(N,pt)};H(b,N=>{X()&&N(y)})}p(z),Ae(z,N=>s($,N),()=>t($)),p(x),V(()=>{Mt(x,1,`parent ${a()?"expanded":""} ${O()??""}`,"svelte-20g118"),K(x,"id",C()||void 0),re(x,`--custom-top: ${g()??""}; --custom-left: ${f()??""}; --custom-bottom: ${L()??""}; --custom-right: ${w()??""}; --shadow-opacity: ${D()??""}; --scrollable: ${l()?"scroll":"hidden"}; ${B()??""}`),re(z,`--full-width: ${o()??""}px; --full-height: ${r()??""}px;`)}),Q("click",z,()=>P()&&P()()),h(e,x),Be()}var uv=E('<div class="code-portal-mount"></div>'),fv=E("<div></div> <!>",1);function vv(e,n){je(n,!1);let o=m(n,"code",8,""),r=m(n,"language",8,"java"),a=m(n,"width",8,"1200px"),i=m(n,"height",8,"600px"),l=m(n,"fontSize",8,20),g=m(n,"foldAllAtStart",8,!1),f=m(n,"readOnly",8,!0),L=m(n,"expanded",8,!0),w=m(n,"revealLines",24,()=>[]),X=m(n,"cursorLine",8,1),j=m(n,"style",8,""),D=m(n,"id",8,""),P=m(n,"class",8,""),F,B=c(),C=c(),O,$=c(null),tt=c(!1),J=c(null),q=c(0);const Z=.5,bt=3;let et;function x(){if(et!==void 0||!t(B))return;let G=t(B).parentElement;for(;G&&G!==document.body;){const it=getComputedStyle(G);if(it.overflowX==="hidden"||it.overflowY==="hidden"||it.overflow==="clip"){et=G;return}G=G.parentElement}et=null}function z(){O||!Ho||(O=document.createElement("div"),O.className="code-portal-host",document.body.appendChild(O))}function W(){if(!t(B)||!t(C)||!O)return;t(C).parentElement!==O&&O.appendChild(t(C));const G=t(B).getBoundingClientRect();if(Ge(C,t(C).style.left=`${G.left}px`),Ge(C,t(C).style.top=`${G.top}px`),Ge(C,t(C).style.width=`${G.width}px`),Ge(C,t(C).style.height=`${G.height}px`),!t(tt)){x();const Lt=(et??t(B)).getBoundingClientRect(),ye=!t(J)||Math.abs(Lt.left-t(J).left)>Z||Math.abs(Lt.top-t(J).top)>Z||Math.abs(Lt.width-t(J).width)>Z||Math.abs(Lt.height-t(J).height)>Z;s(q,ye?0:t(q)+1),s(J,{left:Lt.left,top:Lt.top,width:Lt.width,height:Lt.height}),t(q)>=bt&&(s(tt,!0),Ge(C,t(C).style.visibility="visible"))}if(!F)return;const it=t(B).offsetWidth,kt=it>0?G.width/it:1,$t=Number.isFinite(kt)&&kt>0?l()*kt:l();F.updateOptions({fontSize:$t}),F.layout({width:G.width,height:G.height})}function M(){W(),s($,requestAnimationFrame(M))}let S=!1;function b(G){return!!(O&&G instanceof Node&&O.contains(G))}function y(){return F?F.getValue():o()}function N(){return S}function pt(){S=!1}function gt(G){F&&F.setValue(G),S=!1}function lt(G,it){F&&(F.updateOptions({readOnly:it}),!S&&F.getValue()!==G&&F.setValue(G))}function ut(G){G.forEach(it=>{if(Object.prototype.toString.call(it)==="[object Array]"){setTimeout(function(){ut(it)},200);return}F.setSelection({startLineNumber:it,startColumn:0,endLineNumber:it,endColumn:1}),F.revealLine(X()),F.trigger("keyboard","editor.unfold")})}function I(G=[]){F!=null&&(G.length===0&&(G=w()),g()?setTimeout(function(){F.trigger("keyboard","editor.foldAll"),ut(w())},200):w().length>0&&F.setScrollTop(F.getTopForLineNumber(w()[0])))}Yn(()=>{let G=!1;return Hc().then(async it=>{const kt=await Kc(it,r());G||yt(it,kt)}).catch(it=>console.warn("[Code] Monaco did not load:",it)),()=>{G=!0,t($)!=null&&cancelAnimationFrame(t($)),F&&F.dispose(),O&&(O.remove(),O=void 0)}});function yt(G,it){t(C)&&(F=G.editor.create(t(C),{value:o(),fontSize:l(),fontFamily:"Fira Code, Menlo, Monaco, 'Courier New', monospace",fontLigatures:!0,language:it,minimap:{enabled:!0},folding:!0,automaticLayout:!0,readOnly:f(),theme:jc,foldingImportsByDefault:!0}),F.onDidChangeModelContent(()=>{S=F.getValue()!==o()}),I())}_(()=>(t(C),nt(L()),t($)),()=>{z(),t(C)&&(L()?Ge(C,t(C).style.display=""):(Ge(C,t(C).style.display="none"),Ge(C,t(C).style.visibility="hidden"),s(tt,!1),s(J,null),s(q,0))),L()?t($)==null&&s($,requestAnimationFrame(M)):t($)!=null&&(cancelAnimationFrame(t($)),s($,null))}),_(()=>nt(w()),()=>{I(w())}),_(()=>(nt(o()),nt(f())),()=>{lt(o(),f())}),Nn();var dt={containsPortaled:b,getValue:y,isDirty:N,markClean:pt,setValue:gt};hn();var Tt=fv(),ht=Wt(Tt);Ae(ht,G=>s(B,G),()=>t(B));var st=d(ht,2);{var R=G=>{var it=uv();Ae(it,kt=>s(C,kt),()=>t(C)),h(G,it)};H(st,G=>{G(R)})}return V(()=>{Mt(ht,1,hl(P()||void 0)),K(ht,"id",D()||void 0),re(ht,`width: ${a()??""}; height: ${i()??""}; ${j()??""}`)}),h(e,Tt),Ls(n,"containsPortaled",b),Ls(n,"getValue",y),Ls(n,"isDirty",N),Ls(n,"markClean",pt),Ls(n,"setValue",gt),Be(dt)}var hv=E('<button type="button" class="code-edit svelte-11o1r5p" aria-label="Edit source in a separate window" title="EDIT — open this file in an unscaled editor window">EDIT</button>'),mv=E('<span class="save-flash svelte-11o1r5p"> </span>'),gv=E('<span class="save-tip svelte-11o1r5p" role="status"> </span>'),bv=E('<span class="save-pop svelte-11o1r5p"><!> <!></span>'),yv=E('<span><button type="button" class="code-save svelte-11o1r5p" aria-label="Save source to file" title="SAVE — write this buffer back to the source file">SAVE</button> <!></span>'),kv=E('<div class="code-title svelte-11o1r5p"><span class="code-title-text svelte-11o1r5p"> </span> <span class="code-title-actions svelte-11o1r5p"><!> <!></span></div>'),wv=E("<!> <!>",1);function xv(e,n){je(n,!1);const o=c(),r=c(),a=c();let i=m(n,"code",8),l=m(n,"language",8,"java"),g=m(n,"title",8,""),f=m(n,"expanded",12,!1),L=m(n,"revealedLines",24,()=>[1]),w=m(n,"fontSize",8,20),X=m(n,"readOnly",8,!0),j=m(n,"edit",8,!1),D=m(n,"save",8,!1),P=m(n,"saveLabel",8,"SAVE"),F=m(n,"saveRefused",8,!1),B=m(n,"saveTip",8,""),C=m(n,"style",8,""),O=m(n,"id",8,""),$=m(n,"class",8,"");const tt=Qr();let J=c();function q(){var W;return((W=t(J))==null?void 0:W.getValue())??i()}function Z(){var W;return((W=t(J))==null?void 0:W.isDirty())??!1}function bt(){var W;(W=t(J))==null||W.markClean()}function et(){tt("edit")}function x(){tt("save")}_(()=>(nt(j()),nt(D())),()=>{s(o,j()||D())}),_(()=>(nt(g()),t(o)),()=>{s(r,g()||t(o)?"915px":"975px")}),_(()=>(nt(g()),t(o)),()=>{s(a,!!(g()||t(o)))}),Nn();var z={getValue:q,isDirty:Z,markClean:bt};return hn(),pv(e,{get style(){return C()},get id(){return O()},get class(){return $()},width:1500,height:975,containsExternal:W=>{var M;return((M=t(J))==null?void 0:M.containsPortaled(W))??!1},get expanded(){return f()},set expanded(W){f(W)},children:(W,M)=>{var S=wv(),b=Wt(S);{var y=pt=>{var gt=kv(),lt=u(gt),ut=u(lt,!0);p(lt);var I=d(lt,2),yt=u(I);{var dt=st=>{var R=hv();Q("click",R,sn(et)),h(st,R)};H(yt,st=>{j()&&st(dt)})}var Tt=d(yt,2);{var ht=st=>{var R=yv();let G;var it=u(R),kt=d(it,2);{var $t=Lt=>{var ye=bv(),jt=u(ye);{var Rt=Ct=>{var Yt=mv(),qt=u(Yt,!0);p(Yt),V(()=>wt(qt,P())),h(Ct,Yt)};H(jt,Ct=>{P()!=="SAVE"&&Ct(Rt)})}var Nt=d(jt,2);{var xt=Ct=>{var Yt=gv(),qt=u(Yt,!0);p(Yt),V(()=>wt(qt,B())),h(Ct,Yt)};H(Nt,Ct=>{F()&&Ct(xt)})}p(ye),h(Lt,ye)};H(kt,Lt=>{(P()!=="SAVE"||F())&&Lt($t)})}p(R),V(()=>G=Mt(R,1,"save-btn svelte-11o1r5p",null,G,{refused:F()})),Q("click",it,sn(x)),h(st,R)};H(Tt,st=>{D()&&st(ht)})}p(I),p(gt),V(()=>wt(ut,g())),h(pt,gt)};H(b,pt=>{t(a)&&pt(y)})}var N=d(b,2);Ae(vv(N,{get code(){return i()},get language(){return l()},get revealLines(){return L()},width:"1500px",get height(){return t(r)},get fontSize(){return w()},get readOnly(){return X()},get expanded(){return f()},$$legacy:!0}),pt=>s(J,pt),()=>t(J)),h(W,S)},$$slots:{default:!0},$$legacy:!0}),Ls(n,"getValue",q),Ls(n,"isDirty",Z),Ls(n,"markClean",bt),Be(z)}function _v(e,n){const o=[];for(const r of[e.next,e.prev]){if(!r)continue;const a=n?r+(r.includes("?")?"&":"?")+"present":r;o.includes(a)||o.push(a)}return o}function Sv(e){return e.length===0?"":JSON.stringify({prerender:[{source:"list",urls:e,eagerness:"immediate"}]})}const Ev=Xe(new Map),Tv={subscribe:Ev.subscribe},Av=Xe(new Map),Nv={subscribe:Av.subscribe};function Mv(e){return`${e.libImport}/draw`}const Pv="/__geekpresent/adjust-save";async function Xi(e){if(!e.length)return{ok:!0,patched:0,unmatched:[]};try{const n=await fetch(Pv,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({route:location.pathname,changes:e})}),o=await n.json().catch(()=>({}));if(!n.ok)return{ok:!1,patched:0,unmatched:[],error:o.error||`HTTP ${n.status}`};const r=(o.unmatched??[]).map(a=>typeof a=="string"?{label:a,reason:"not-found"}:a);return{ok:!0,patched:o.patched??0,unmatched:r}}catch(n){return{ok:!1,patched:0,unmatched:[],error:n instanceof Error?n.message:String(n)}}}async function zv(e,n=[]){return e.trim()?Xi([{kind:"Draw",insert:e,insertImports:n,importFrom:Mv(Ta)}]):{ok:!0,patched:0,unmatched:[]}}async function Dv(){const e=[...Te(Tv).values()].filter(a=>a.dirty),n=e.filter(a=>a.pasteOf).map(a=>({kind:a.kind,name:a.pasteOf.name||void 0,before:a.pasteOf.before,paste:{name:a.name||void 0,after:a.after},file:a.file})),o=e.filter(a=>!a.pasteOf).map(a=>a.removed?{kind:a.kind,name:a.name||void 0,before:a.before,remove:!0,file:a.file}:{kind:a.kind,name:a.name||void 0,before:a.before,after:a.after,file:a.file}),r=[...Te(Nv).values()].filter(a=>a.dirty).map(a=>({kind:a.kind,name:a.name||void 0,oldTag:a.oldTag,newTag:a.newTag,before:a.before,after:a.after}));return Xi([...n,...o,...r])}function An(e){return String(Math.round((Number.isFinite(e)?e:0)*100)/100+0)}function Oa(e){return`[${An(e[0])}, ${An(e[1])}]`}function _a(e,n){return n.includes('"')?` ${e}='${n}'`:` ${e}="${n}"`}function Cv(e){let n="";return e.arrow&&e.arrow!=="none"&&(n+=` arrow="${e.arrow}"`),e.arrowSize!=null&&(n+=` arrowSize={${An(e.arrowSize)}}`),e.color&&(n+=` color="${e.color}"`),e.thickness!=null&&(n+=` thickness={${An(e.thickness)}}`),e.dash===!0?n+=" dash":typeof e.dash=="string"&&e.dash&&(n+=` dash="${e.dash}"`),e.rough===!0?n+=" rough":e.rough===!1?n+=" rough={false}":typeof e.rough=="number"&&(n+=` rough={${An(e.rough)}}`),e.seed!=null&&(n+=` seed={${An(e.seed)}}`),e.label&&(n+=` label="${e.label}"`),e.labelText&&(n+=` labelText="${e.labelText}"`),e.labelText&&e.labelAt!=null&&e.labelAt!==.5&&(n+=` labelAt={${An(e.labelAt)}}`),e.labelText&&e.labelOffset!=null&&e.labelOffset!==20&&(n+=` labelOffset={${An(e.labelOffset)}}`),e.draw&&(n+=` draw={${An(e.draw)}}`),e.draw&&e.drawDelay&&(n+=` drawDelay={${An(e.drawDelay)}}`),e.grid&&e.grid>1&&(n+=` grid={${An(e.grid)}}`),e.id&&(n+=_a("id",e.id)),e.class&&(n+=_a("class",e.class)),e.style&&(n+=_a("style",e.style)),n}const $v=6,Lv=34,Rv=4,Iv="opacity:var(--annot-highlighter-alpha, 0.45)",Ov=["pen","line","arrow","rectangle","highlighter"];function Fa(e){return!!e&&Ov.includes(e.tool)}function Fv(e){return Array.isArray(e.points)?e.points:[]}function Hv(e){return`points={[${e.map(Oa).join(", ")}]}`}function Kv(e,n){const o=Io(e.tool,n.penWidth??$v,n.highlighterWidth??Lv);return Cv({color:e.color||void 0,thickness:o===Rv?void 0:o,style:e.tool==="highlighter"?Iv:void 0})}function jv(e,n={}){if(!Fa(e))return"";const o=Fv(e);if(o.length===0)return"";const r=Kv(e,n);if(e.tool==="line"||e.tool==="arrow"){const a=za(o),i=a[0]??o[0],l=a[a.length-1]??i,g=e.tool==="arrow"?' arrow="end"':"";return`<Line from={${Oa(i)}} to={${Oa(l)}}${g}${r} />`}if(e.tool==="rectangle"){const a=o[0],i=o[o.length-1],l=Math.min(a[0],i[0]),g=Math.min(a[1],i[1]),f=Math.abs(i[0]-a[0]),L=Math.abs(i[1]-a[1]),w=Math.max(0,Number.isFinite(n.rectRadius)?n.rectRadius:0),X=w>0?` rounded={${An(w)}}`:"";return`<Rect x={${An(l)}} y={${An(g)}} width={${An(f)}} height={${An(L)}}${X}${r} />`}return`<Polyline ${Hv(o)} smooth${r} />`}function nr(e,n,o={}){const r=new Set(n);return r.size===0||!Array.isArray(e)?[]:e.filter(a=>a&&r.has(a.id)).map(a=>jv(a,o)).filter(a=>a!=="")}function Bv(e,n){return nr(e,n).length}function Uv(e,n,o={}){const r=nr(e,n,o);if(r.length===0)return"";const a=o.indent??"";return o.wrap===!1?r.map(i=>`${a}${i}`).join(`
`):[`${a}<Draw>`,...r.map(i=>`${a}	${i}`),`${a}</Draw>`].join(`
`)}function qv(e,n="$lib/draw"){const o=new Set;for(const a of e){const i=/^<([A-Za-z]+)/.exec(a);i&&o.add(i[1])}return o.size===0?"":`import { ${["Draw",...["Line","Polyline","Rect"].filter(a=>o.has(a))].join(", ")} } from '${n}';`}const Gv={size:12,thinning:.7,streamline:.6,smoothing:.5,easing:"linear",start:{taper:0,cap:!0},end:{taper:0,cap:!0}},sr={linear:e=>e,easeIn:e=>e*e,easeOut:e=>e*(2-e),easeInOut:e=>e<.5?2*e*e:-1+(4-2*e)*e},Sa=(e,n,o)=>Math.min(o,Math.max(n,e)),ko=(e,n)=>typeof e=="number"&&Number.isFinite(e)?e:n;function or(e){const n=Gv,o=e&&typeof e=="object"?e:{},r=(a,i)=>({taper:Math.max(0,ko(a==null?void 0:a.taper,i.taper)),cap:typeof(a==null?void 0:a.cap)=="boolean"?a.cap:i.cap});return{size:Math.max(.5,ko(o.size,n.size)),thinning:Sa(ko(o.thinning,n.thinning),-1,1),streamline:Sa(ko(o.streamline,n.streamline),0,1),smoothing:Sa(ko(o.smoothing,n.smoothing),0,1),easing:o.easing&&o.easing in sr?o.easing:n.easing,start:r(o.start,n.start),end:r(o.end,n.end)}}function Wv(e){const n=or(e);return n.size*sr[n.easing](.5+Math.abs(n.thinning)/2)}const vs=(e,n)=>[e[0]+n[0],e[1]+n[1]],us=(e,n)=>[e[0]-n[0],e[1]-n[1]],fs=(e,n)=>[e[0]*n,e[1]*n],Vv=e=>[-e[0],-e[1]],wo=e=>[e[1],-e[0]],Fr=(e,n)=>e[0]*n[0]+e[1]*n[1],Yv=(e,n)=>e[0]===n[0]&&e[1]===n[1],Xv=(e,n)=>Math.hypot(e[1]-n[1],e[0]-n[0]),Hr=(e,n)=>(e[0]-n[0])**2+(e[1]-n[1])**2,Ha=(e,n,o)=>vs(e,fs(us(n,e),o)),Kr=(e,n,o)=>vs(e,fs(n,o));function Qi(e){const n=Math.hypot(e[0],e[1]);return n===0?[0,0]:[e[0]/n,e[1]/n]}function xo(e,n,o){const r=Math.sin(o),a=Math.cos(o),i=e[0]-n[0],l=e[1]-n[1];return[i*a-l*r+n[0],i*r+l*a+n[1]]}const Qv=.5,Jv=.25,Zv=.275,_o=Math.PI+1e-4,jr=(e,n,o,r)=>e*r(.5-n*(.5-o));function th(e,n,o){var w;if(e.length===0)return[];const r=.15+(1-n.streamline)*.85;let a=e;if(a.length===2){const X=a[1];a=[a[0]];for(let j=1;j<5;j++)a.push(Ha(a[0],X,j/4))}a.length===1&&(a=[a[0],vs(a[0],[1,1])]);const i=[{point:a[0],pressure:Jv,vector:[1,1],distance:0,runningLength:0}];let l=!1,g=0,f=i[0];const L=a.length-1;for(let X=1;X<a.length;X++){const j=o&&X===L?a[X]:Ha(f.point,a[X],r);if(Yv(f.point,j))continue;const D=Xv(j,f.point);if(g+=D,X<L&&!l){if(g<n.size)continue;l=!0}f={point:j,pressure:Qv,vector:Qi(us(f.point,j)),distance:D,runningLength:g},i.push(f)}return i[0].vector=((w=i[1])==null?void 0:w.vector)??[0,0],i}function eh(e,n,o){const{size:r,smoothing:a,thinning:i}=n;if(e.length===0||r<=0)return[];const l=sr[n.easing],g=M=>M*(2-M),f=M=>--M*M*M+1,L=e[e.length-1].runningLength,w=n.start.taper,X=n.end.taper,j=Math.pow(r*a,2),D=[],P=[],F=(M,S)=>{const b=Math.min(1,S/r),y=Math.min(1,1-b);return Math.min(1,M+(y-M)*(b*Zv))};let B=e.slice(0,10).reduce((M,S)=>(M+F(M,S.distance))/2,e[0].pressure),C=jr(r,i,e[e.length-1].pressure,l),O,$=e[0].vector,tt=e[0].point,J=tt,q=tt,Z=J,bt=!1;for(let M=0;M<e.length;M++){let{pressure:S}=e[M];const{point:b,vector:y,distance:N,runningLength:pt}=e[M];if(M<e.length-1&&L-pt<3)continue;i?(S=F(B,N),C=jr(r,i,S,l)):C=r/2,O===void 0&&(O=C);const gt=pt<w?g(pt/w):1,lt=L-pt<X?f((L-pt)/X):1;C=Math.max(.01,C*Math.min(gt,lt));const ut=(M<e.length-1?e[M+1]:e[M]).vector,I=M<e.length-1?Fr(y,ut):1,dt=Fr(y,$)<0&&!bt,Tt=I<0;if(dt||Tt){const st=fs(wo($),C);for(let R=1/13,G=0;G<=1;G+=R)q=xo(us(b,st),b,_o*G),D.push(q),Z=xo(vs(b,st),b,_o*-G),P.push(Z);tt=q,J=Z,Tt&&(bt=!0);continue}if(bt=!1,M===e.length-1){const st=fs(wo(y),C);D.push(us(b,st)),P.push(vs(b,st));continue}const ht=fs(wo(Ha(ut,y,I)),C);q=us(b,ht),(M<=1||Hr(tt,q)>j)&&(D.push(q),tt=q),Z=vs(b,ht),(M<=1||Hr(J,Z)>j)&&(P.push(Z),J=Z),B=S,$=y}const et=e[0].point,x=e.length>1?e[e.length-1].point:vs(e[0].point,[1,1]),z=[],W=[];if(e.length===1){if(!(w||X)||o){const M=Kr(et,Qi(wo(us(et,x))),-(O??C)),S=[];for(let b=1/13,y=b;y<=1;y+=b)S.push(xo(M,et,_o*2*y));return S}}else{if(!w)if(n.start.cap)for(let S=1/13,b=S;b<=1;b+=S)z.push(xo(P[0],et,_o*b));else{const S=us(D[0],P[0]),b=fs(S,.5),y=fs(S,.51);z.push(us(et,b),us(et,y),vs(et,y),vs(et,b))}const M=wo(Vv(e[e.length-1].vector));if(X)W.push(x);else if(n.end.cap){const S=Kr(x,M,C);for(let b=1/29,y=b;y<1;y+=b)W.push(xo(S,x,_o*3*y))}else W.push(vs(x,fs(M,C)),vs(x,fs(M,C*.99)),us(x,fs(M,C*.99)),us(x,fs(M,C)))}return D.concat(W,P.reverse(),z)}function nh(e,n,o=!0){if(!Array.isArray(e)||e.length===0)return[];const r=or(n),a=e.map(Xl);return eh(th(a,r,o),r,o)}const Ds=e=>Number.isFinite(e)?e.toFixed(2):"0.00";function sh(e){const n=e.length;if(n<4)return"";let o=e[0],r=e[1];const a=e[2];let i=`M${Ds(o[0])},${Ds(o[1])} Q${Ds(r[0])},${Ds(r[1])} ${Ds((r[0]+a[0])/2)},${Ds((r[1]+a[1])/2)} T`;for(let l=2;l<n-1;l++)o=e[l],r=e[l+1],i+=`${Ds((o[0]+r[0])/2)},${Ds((o[1]+r[1])/2)} `;return i+"Z"}function oh(e,n,o=!0){return sh(nh(e,n,o))}function Br(e,n){var F;const{scaleFrom:o,onMove:r,onEnd:a,onCancel:i}=n,l=typeof o=="function"?o()||1:o&&o.getBoundingClientRect().width/o.offsetWidth||1,g=e.clientX,f=e.clientY,L=e.target,w=e.pointerId,X=B=>r((B.clientX-g)/l,(B.clientY-f)/l,B),j=()=>{P(),a==null||a()},D=B=>{B.key==="Escape"&&(B.preventDefault(),B.stopPropagation(),P(),i==null||i())};function P(){var B;window.removeEventListener("pointermove",X),window.removeEventListener("pointerup",j),i&&window.removeEventListener("keydown",D,!0),(B=L==null?void 0:L.releasePointerCapture)==null||B.call(L,w)}(F=L==null?void 0:L.setPointerCapture)==null||F.call(L,w),window.addEventListener("pointermove",X),window.addEventListener("pointerup",j),i&&window.addEventListener("keydown",D,!0)}var ah=as('<text dominant-baseline="hanging"> </text>'),Ur=as("<path></path>"),rh=E('<input class="annot-text-input no-print svelte-aifo2v" aria-label="Annotation text"/>'),ih=as('<svg aria-hidden="true"><!><!></svg><!>',1),lh=E('<div class="annot-stale no-print svelte-aifo2v" role="status"><span class="annot-stale-text svelte-aifo2v">This slide has annotations from <b> </b>.</span> <button type="button" class="annot-btn svelte-aifo2v">RESET SLIDE</button> <button type="button" class="annot-btn svelte-aifo2v">RESET ALL</button> <button type="button" class="annot-btn keep svelte-aifo2v">KEEP</button></div>'),ch=E('<span class="annot-key svelte-aifo2v" aria-hidden="true"> </span>'),dh=E('<button type="button"><svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-aifo2v"><path></path></svg> <!></button>'),ph=E('<span class="annot-said svelte-aifo2v" role="status"> </span>'),uh=E('<span class="annot-said hint svelte-aifo2v">tap a mark to keep it</span>'),fh=E('<span class="annot-sep svelte-aifo2v" aria-hidden="true"></span> <button type="button" class="annot-btn freeze-go svelte-aifo2v"> </button> <!>',1),vh=E('<span class="annot-key svelte-aifo2v" aria-hidden="true"></span>'),hh=E('<button type="button"><!></button>'),mh=E('<span class="annot-sep svelte-aifo2v" aria-hidden="true"></span> <!>',1),gh=E('<div class="annot-bar no-print svelte-aifo2v" role="toolbar" aria-label="Annotation tools"><span class="annot-grip svelte-aifo2v" role="button" tabindex="-1" aria-label="Move the annotation bar" title="Drag to move · double-click to reset">⠿</span> <!> <!> <!> <span class="annot-sep svelte-aifo2v" aria-hidden="true"></span> <button type="button" class="annot-btn svelte-aifo2v">RESET</button> <button type="button" class="annot-btn svelte-aifo2v">RESET ALL</button> <span class="annot-sep svelte-aifo2v" aria-hidden="true"></span> <button type="button" class="annot-close svelte-aifo2v" aria-label="Close annotation tools" title="Close (Esc)"><span aria-hidden="true" class="svelte-aifo2v">×</span></button></div>'),bh=E("<!>  <!> <!>",1);function yh(e,n){je(n,!0);const o=()=>vt(Qo,"$canAnnotate",w),r=()=>vt(io,"$annotationMode",w),a=()=>vt(ti,"$strokes",w),i=()=>vt(mr,"$annotateTool",w),l=()=>vt(gr,"$annotateColor",w),g=()=>vt(Zs,"$canSave",w),f=()=>vt(Po,"$barPos",w),L=()=>vt(Bl,"$staleInk",w),[w,X]=$n();let j=m(n,"canvasWidth",3,1920),D=m(n,"canvasHeight",3,1080),P=m(n,"penWidth",3,6),F=m(n,"highlighterWidth",3,34),B=m(n,"arrowHead",3,36),C=m(n,"rectRadius",3,12),O=m(n,"eraserRadius",3,14),$=m(n,"textSize",3,44),tt=m(n,"inkColors",19,()=>[null,"#E5484D","#3FA9F5","#4BD07A","#FFFFFF"]),J=m(n,"levelHighlight",3,!0),q=m(n,"snapPen",3,!0),Z=m(n,"freehand",19,()=>({}));const bt=He(()=>Z()===!1?null:or(Z())),et=A=>A==="pen"&&t(bt)!==null,x=He(()=>o()&&r()),z=He(()=>t(x)||a().length>0),W=He(()=>t(x)&&i()==="pointer"),M=He(()=>i()==="eraser"||i()==="freeze"||i()==="pointer"),S=He(()=>t(M)||i()==="text"?"pen":i()),b=He(()=>t(M)?null:l());let y=tn(void 0),N=tn(Ea([])),pt=0,gt=0,lt=tn(null),ut=tn(!1);const I=He(()=>!t(x)||i()!=="eraser"||!t(lt)?null:yt(t(lt)));function yt(A){for(let Y=a().length-1;Y>=0;Y--){const rt=a()[Y];if(rt.tool==="text"){if(yr(A,rt.points[0]??[0,0],rt.text??"",rt.size??$(),O()))return rt.id}else{const Ot=et(rt.tool)&&t(bt)?Wv(t(bt)):Io(rt.tool,P(),F())/2,Zt=rt.tool==="rectangle"?oc(rt.points):rt.points;if(ac(A,Zt,O()+Ot))return rt.id}}return null}let dt=tn(Ea([]));const Tt=He(()=>{if(!t(x)||i()!=="freeze"||!t(lt))return null;const A=yt(t(lt));return A&&Fa(a().find(Y=>Y.id===A))?A:null}),ht=He(()=>Bv(a(),t(dt))),st=He(()=>({penWidth:P(),highlighterWidth:F(),rectRadius:C()})),R=He(()=>Uv(a(),t(dt),t(st)));function G(A){s(dt,t(dt).includes(A)?t(dt).filter(Y=>Y!==A):[...t(dt),A],!0)}function it(){s(dt,[],!0)}Is(()=>{i()!=="freeze"&&at(it)});let kt=tn(null),$t;function Lt(A){s(kt,A,!0),clearTimeout($t),$t=setTimeout(()=>s(kt,null),2400)}async function ye(){const A=t(dt).slice(),Y=nr(a(),A,t(st));if(Y.length!==0){if(g()){const rt=await zv(Y.join(`
`),jt(Y));if(rt.ok&&rt.patched>0){ga(A),it(),Lt(`FROZEN ${Y.length}`);return}rt.ok&&rt.unmatched.length>0?Lt("PLACE IT YOURSELF"):rt.ok||Lt("COPIED (NO SAVE)")}try{await navigator.clipboard.writeText(t(R)),t(kt)||Lt(`COPIED ${Y.length}`)}catch{window.prompt("Copy this markup into the slide:",t(R))}it()}}function jt(A){const Y=qv(A),rt=/\{([^}]*)\}/.exec(Y);return rt?rt[1].split(",").map(Ot=>Ot.trim()).filter(Boolean):[]}const Rt=8,Nt=4;let xt=tn(null),Ct=tn(""),Yt=tn(void 0);function qt(A){for(let Y=a().length-1;Y>=0;Y--){const rt=a()[Y];if(rt.tool==="text"&&yr(A,rt.points[0]??[0,0],rt.text??"",rt.size??$(),Rt))return rt.id}return null}function ce(A,Y,rt=$()){const Ot=A?a().find(Zt=>Zt.id===A):void 0;s(xt,{id:A,x:Y[0],y:Y[1],size:(Ot==null?void 0:Ot.size)??rt},!0),s(Ct,(Ot==null?void 0:Ot.text)??"",!0),po().then(()=>{var Zt,we;(Zt=t(Yt))==null||Zt.focus(),(we=t(Yt))==null||we.select()})}function Qt(){if(!t(xt))return;const A=cc(t(Ct)),{id:Y,x:rt,y:Ot,size:Zt}=t(xt);if(s(xt,null),s(Ct,""),Y)A?ma(Y,{text:A}):ga([Y]);else if(A){const we={id:`ink-${Date.now()}-${++gt}`,tool:"text",points:[[rt,Ot]],text:A,size:Zt};t(b)&&(we.color=t(b)),br(we)}}function _t(){s(xt,null),s(Ct,"")}function fe(A){A.stopPropagation(),A.key==="Enter"?(A.preventDefault(),Qt()):A.key==="Escape"&&(A.preventDefault(),_t())}function Jt(A){const Y=en(A);t(xt)&&Qt();const rt=qt(Y);if(!rt){ce(null,Y);return}const Ot=a().find(pe=>pe.id===rt),Zt=(Ot==null?void 0:Ot.points[0])??[Y[0],Y[1]];let we=!1;Br(A,{scaleFrom:Xn,onMove:(pe,It)=>{Math.hypot(pe,It)>Nt&&(we=!0),we&&ma(rt,{points:[[Zt[0]+pe,Zt[1]+It]]})},onEnd:()=>{we||ce(rt,Zt)},onCancel:()=>{we&&ma(rt,{points:[Zt]})}})}let ke=tn(!1),Re=tn(!1);function de(A,Y){return A?Y&&et(Y)?`fill:${A};`:`stroke:${A};`:""}function ie(A,Y){return Y==="highlighter"&&J()?rc(A):Y==="pen"&&q()&&t(ke)?kr(A):Y==="line"||Y==="arrow"?q()&&t(ke)?kr(A):za(A):Y==="rectangle"?za(A):A}function Qe(A,Y,rt=!0){return Y==="arrow"?tc(A,B()):Y==="rectangle"?ec(A,C()):et(Y)?oh(A,t(bt),rt):nc(A)}function en(A){var Y;return dc(A.clientX,A.clientY,(Y=t(y))==null?void 0:Y.getBoundingClientRect(),j(),D())}function on(A,Y){var rt,Ot,Zt,we;try{Y?(Ot=(rt=t(y))==null?void 0:rt.setPointerCapture)==null||Ot.call(rt,A):(we=(Zt=t(y))==null?void 0:Zt.releasePointerCapture)==null||we.call(Zt,A)}catch{}}function wn(A){const Y=yt(A);Y&&ga([Y])}function rs(A){if(!(!t(x)||t(W)||A.button!==0)){if(A.preventDefault(),i()==="eraser"){on(A.pointerId,!0),s(ut,!0),s(lt,en(A),!0),wn(t(lt));return}if(i()==="freeze"){s(lt,en(A),!0);const Y=yt(t(lt));Y&&Fa(a().find(rt=>rt.id===Y))&&G(Y);return}if(i()==="text"){Jt(A);return}s(ke,A.shiftKey,!0),on(A.pointerId,!0),s(N,[en(A)],!0),pt=performance.now()}}function is(A){if(!t(x)||t(W))return;if(i()==="eraser"){s(lt,en(A),!0),t(ut)&&wn(t(lt));return}if(i()==="freeze"){s(lt,en(A),!0);return}if(i()==="text"||t(N).length===0)return;s(ke,A.shiftKey,!0);const Y=en(A),rt=t(N)[t(N).length-1];Math.hypot(Y[0]-rt[0],Y[1]-rt[1])<2||s(N,[...t(N),Y],!0)}function mn(A){if(i()==="eraser"){if(!t(ut))return;s(ut,!1),on(A.pointerId,!1);return}if(i()==="freeze"||i()==="text"||t(N).length===0)return;s(ke,A.shiftKey,!0),on(A.pointerId,!1);const Y=ie(sc(t(N),et(t(S))?2:4),t(S));if(s(N,[],!0),Y.length===0)return;const rt={id:`ink-${Date.now()}-${++gt}`,tool:t(S),points:Y};t(b)&&(rt.color=t(b));const Ot=Math.round(performance.now()-pt);Ot>0&&(rt.ms=Ot),br(rt)}function Ie(){s(lt,null)}const xn=.7;let Ln=tn(void 0);function Xn(){var Y;const A=(Y=t(y))==null?void 0:Y.getBoundingClientRect();return A&&A.width>0?A.width/j():1}function Bn(A){var Vt,zt;if(A.button!==0)return;A.preventDefault(),A.stopPropagation();const Y=(Vt=t(Ln))==null?void 0:Vt.getBoundingClientRect(),rt=(zt=t(y))==null?void 0:zt.getBoundingClientRect();if(!Y||!rt)return;const Ot=Xn(),Zt=(Y.left-rt.left)/Ot,we=(Y.top-rt.top)/Ot,pe=Y.width/Ot,It=Y.height/Ot,oe=f();Br(A,{scaleFrom:Xn,onMove:(Bt,Ft)=>Po.set(pc(Zt+Bt,we+Ft,pe,It,j(),D())),onCancel:()=>Po.set(oe)})}function Rn(){Po.set(null)}let Un=tn(0);Is(()=>{const A=t(Ln);if(!A||typeof ResizeObserver>"u")return;const Y=new ResizeObserver(()=>s(Un,A.offsetWidth,!0));return Y.observe(A),()=>Y.disconnect()});const gn=He(()=>ic(t(Un),j(),xn)),Qn=He(()=>`--annot-bar-scale:${t(gn)};`+(f()?`left:${f().x}px; top:${f().y}px; bottom:auto; transform:scale(${t(gn)}); transform-origin:top left;`:""));let Ts=null;Is(()=>{i()!=="pointer"&&(Ts=i())});function As(A){mr.set(Zl(A,i(),Ts))}function T(A){t(M)||gr.set(A)}const ot=[{tool:"pointer",label:"Pointer",d:"M6 3l12 9-5 1 3 6-2.5 1-3-6L6 17z"},{tool:"pen",label:"Pen",d:"M4 20l1-4L15 5l4 4L9 19l-4 1z M14 6l4 4"},{tool:"line",label:"Line",d:"M5 19L19 5"},{tool:"arrow",label:"Arrow",d:"M5 19L19 5M11 5h8v8"},{tool:"rectangle",label:"Rectangle",d:"M5 6h14v12H5z"},{tool:"highlighter",label:"Highlight",d:"M4 20h5M6 18L15 9l3 3-9 9H6zM14 8l3 3"},{tool:"text",label:"Text",d:"M6 6h12M12 6v13M9 19h6"},{tool:"eraser",label:"Erase",d:"M4 20h9M6 18l7-7 6 6-4 4H10z"},{tool:"freeze",label:"Freeze",d:"M12 3v18M4.5 7.5l15 9M19.5 7.5l-15 9"}];function Pt(A){if(t(x)){if(A.key==="Shift"&&(s(ke,!0),s(Re,!0)),A.key==="Escape")A.preventDefault(),io.set(!1);else if((A.ctrlKey||A.metaKey)&&A.key.toLowerCase()==="z")A.preventDefault(),Ul();else if(!Js(A.target)){const Y=Ql(A,ot.length,tt().length);if(!Y)return;A.preventDefault(),Y.kind==="tool"?As(ot[Y.index].tool):T(tt()[Y.index])}}}function Ut(A){A.key==="Shift"&&(s(ke,!1),s(Re,!1))}var se=bh();Q("keydown",Eo,Pt),Q("keyup",Eo,Ut),Q("blur",Eo,()=>s(Re,!1));var We=Wt(se);{var an=A=>{var Y=ih(),rt=Wt(Y);let Ot;var Zt=u(rt);Cn(Zt,1,a,Vt=>Vt.id,(Vt,zt)=>{var Bt=vn(),Ft=Wt(Bt);{var De=he=>{var ee=vn(),_e=Wt(ee);{var Ce=Oe=>{var ae=ah();let Me;var Mn=u(ae,!0);p(ae),V(()=>{var At,ft;Me=Mt(ae,0,"annot-text svelte-aifo2v",null,Me,{erasing:t(I)===t(zt).id}),K(ae,"x",((At=t(zt).points[0])==null?void 0:At[0])??0),K(ae,"y",((ft=t(zt).points[0])==null?void 0:ft[1])??0),K(ae,"font-size",t(zt).size??$()),re(ae,t(zt).color?`fill:${t(zt).color};`:""),wt(Mn,t(zt).text)}),h(Oe,ae)};H(_e,Oe=>{t(xt)&&t(xt).id===t(zt).id||Oe(Ce)})}h(he,ee)},Ne=he=>{var ee=Ur();let _e;V((Ce,Oe,ae,Me)=>{_e=Mt(ee,0,"annot-stroke svelte-aifo2v",null,_e,Ce),K(ee,"d",Oe),K(ee,"stroke-width",ae),re(ee,Me)},[()=>({highlighter:t(zt).tool==="highlighter",freehand:et(t(zt).tool),erasing:t(I)===t(zt).id,freezing:t(Tt)===t(zt).id,frozen:t(dt).includes(t(zt).id)}),()=>Qe(t(zt).points,t(zt).tool),()=>Io(t(zt).tool,P(),F()),()=>de(t(zt).color,t(zt).tool)]),h(he,ee)};H(Ft,he=>{t(zt).tool==="text"?he(De):he(Ne,-1)})}h(Vt,Bt)});var we=d(Zt);{var pe=Vt=>{var zt=Ur();let Bt;V((Ft,De,Ne,he)=>{Bt=Mt(zt,0,"annot-stroke svelte-aifo2v",null,Bt,Ft),K(zt,"d",De),K(zt,"stroke-width",Ne),re(zt,he)},[()=>({highlighter:t(S)==="highlighter",freehand:et(t(S))}),()=>Qe(ie(t(N),t(S)),t(S),!1),()=>Io(t(S),P(),F()),()=>de(t(b),t(S))]),h(Vt,zt)};H(we,Vt=>{t(N).length>0&&Vt(pe)})}p(rt),Ae(rt,Vt=>s(y,Vt),()=>t(y));var It=d(rt);{var oe=Vt=>{var zt=rh();os(zt),Ae(zt,Bt=>s(Yt,Bt),()=>t(Yt)),V(()=>{K(zt,"maxlength",lc),re(zt,`left:${t(xt).x??""}px; top:${t(xt).y??""}px; font-size:${t(xt).size??""}px; ${t(b)?`color:${t(b)};`:""}`)}),Ze("keydown",zt,fe),Q("blur",zt,Qt),ws(zt,()=>t(Ct),Bt=>s(Ct,Bt)),h(Vt,zt)};H(It,Vt=>{t(x)&&t(xt)&&Vt(oe)})}V(()=>{Ot=Mt(rt,0,"annot-surface svelte-aifo2v",null,Ot,{armed:t(x),erasing:t(x)&&i()==="eraser",freezing:t(x)&&i()==="freeze",texting:t(x)&&i()==="text"}),K(rt,"viewBox",`0 0 ${j()??""} ${D()??""}`),re(rt,`width:${j()??""}px; height:${D()??""}px; pointer-events:${t(x)&&!t(W)?"auto":"none"};`)}),Ze("pointerdown",rt,rs),Ze("pointermove",rt,is),Ze("pointerup",rt,mn),Q("pointercancel",rt,mn),Q("pointerleave",rt,Ie),h(A,Y)};H(We,A=>{t(z)&&A(an)})}var rn=d(We,2);{var ms=A=>{var Y=lh(),rt=u(Y),Ot=d(u(rt)),Zt=u(Ot,!0);p(Ot),Ke(),p(rt);var we=d(rt,2),pe=d(we,2),It=d(pe,2);p(Y),V(oe=>wt(Zt,oe),[()=>Jl(L().ts,Date.now())]),Ze("click",we,function(...oe){var Vt;(Vt=Ma)==null||Vt.apply(this,oe)}),Ze("click",pe,function(...oe){var Vt;(Vt=Pa)==null||Vt.apply(this,oe)}),Ze("click",It,function(...oe){var Vt;(Vt=ql)==null||Vt.apply(this,oe)}),h(A,Y)};H(rn,A=>{L()&&A(ms)})}var Ns=d(rn,2);{var qn=A=>{var Y=gh(),rt=u(Y),Ot=d(rt,2);Cn(Ot,19,()=>ot,Bt=>Bt.tool,(Bt,Ft,De)=>{var Ne=dh();let he;var ee=u(Ne),_e=u(ee);p(ee);var Ce=d(ee,2);{var Oe=ae=>{var Me=ch(),Mn=u(Me,!0);p(Me),V(()=>wt(Mn,t(De)+1)),h(ae,Me)};H(Ce,ae=>{t(Re)||ae(Oe)})}p(Ne),V(ae=>{he=Mt(Ne,1,"annot-btn icon svelte-aifo2v",null,he,{on:i()===t(Ft).tool,erase:t(Ft).tool==="eraser",freeze:t(Ft).tool==="freeze"}),K(Ne,"aria-label",t(Ft).label),K(Ne,"aria-pressed",i()===t(Ft).tool),K(Ne,"aria-keyshortcuts",ae),K(Ne,"title",`${t(Ft).label??""} (${t(De)+1})`),K(_e,"d",t(Ft).d)},[()=>String(t(De)+1)]),Ze("click",Ne,()=>As(t(Ft).tool)),h(Bt,Ne)});var Zt=d(Ot,2);{var we=Bt=>{var Ft=fh(),De=d(Wt(Ft),2),Ne=u(De);p(De);var he=d(De,2);{var ee=Ce=>{var Oe=ph(),ae=u(Oe,!0);p(Oe),V(()=>wt(ae,t(kt))),h(Ce,Oe)},_e=Ce=>{var Oe=uh();h(Ce,Oe)};H(he,Ce=>{t(kt)?Ce(ee):Ce(_e,-1)})}V(()=>{De.disabled=t(ht)===0,K(De,"title",g()?"Write the picked marks into this slide’s source":"Copy the picked marks as Draw markup"),wt(Ne,`FREEZE (${t(ht)??""})`)}),Ze("click",De,ye),h(Bt,Ft)};H(Zt,Bt=>{i()==="freeze"&&Bt(we)})}var pe=d(Zt,2);{var It=Bt=>{var Ft=mh(),De=d(Wt(Ft),2);Cn(De,17,tt,hs,(Ne,he,ee)=>{var _e=hh();let Ce;K(_e,"aria-keyshortcuts",ee<9?`Shift+${ee+1}`:void 0);var Oe=u(_e);{var ae=Me=>{var Mn=vh();Mn.textContent=ee+1,h(Me,Mn)};H(Oe,Me=>{t(Re)&&ee<9&&Me(ae)})}p(_e),V(()=>{Ce=Mt(_e,1,"annot-swatch svelte-aifo2v",null,Ce,{on:t(b)===t(he),theme:t(he)===null,hl:i()==="highlighter"}),re(_e,t(he)?`--swatch:${t(he)};`:""),K(_e,"aria-label",t(he)===null?"Theme colour":`Colour ${t(he)}`),K(_e,"aria-pressed",t(b)===t(he)),K(_e,"title",`${(t(he)===null?"Theme colour":t(he))??""}${ee<9?` (Shift+${ee+1})`:""}`)}),Ze("click",_e,()=>T(t(he))),h(Ne,_e)}),h(Bt,Ft)};H(pe,Bt=>{t(M)||Bt(It)})}var oe=d(pe,4),Vt=d(oe,2),zt=d(Vt,4);p(Y),Ae(Y,Bt=>s(Ln,Bt),()=>t(Ln)),V(()=>{re(Y,t(Qn)),oe.disabled=a().length===0}),Ze("pointerdown",rt,Bn),Ze("dblclick",rt,Rn),Ze("click",oe,function(...Bt){var Ft;(Ft=Ma)==null||Ft.apply(this,Bt)}),Ze("click",Vt,function(...Bt){var Ft;(Ft=Pa)==null||Ft.apply(this,Bt)}),Ze("click",zt,()=>io.set(!1)),h(A,Y)};H(Ns,A=>{t(x)&&A(qn)})}h(e,se),Be(),X()}ja(["pointerdown","pointermove","pointerup","keydown","click","dblclick"]);const qr=new Map;async function Ji(e){const n=qr.get(e);if(n)return n;try{const o=await fetch(e,{credentials:"omit"});if(!o.ok)return null;const r=await o.blob(),a=await new Promise(i=>{const l=new FileReader;l.onload=()=>i(typeof l.result=="string"?l.result:null),l.onerror=()=>i(null),l.readAsDataURL(r)});return a&&qr.set(e,a),a}catch{return null}}async function kh(){const e=await Promise.all(Array.from(document.styleSheets).map(n=>Zi(n,0)));return wh(e.join(`
`))}async function Gr(e){try{const n=await fetch(e,{credentials:"omit"});return n.ok?await n.text():""}catch{return""}}async function Zi(e,n){if(n>4)return"";let o=null;try{o=e.cssRules}catch{o=null}if(!o)return e.href?Gr(e.href):"";const r=[];for(const a of Array.from(o)){if(a.type===3){const i=a;if(i.styleSheet)r.push(await Zi(i.styleSheet,n+1));else if(i.href)try{r.push(await Gr(new URL(i.href,e.href??document.baseURI).href))}catch{}continue}r.push(a.cssText)}return r.join(`
`)}async function wh(e){const n=new Set,o=/url\(\s*['"]?([^'")]+)['"]?\s*\)/g;for(const a of e.matchAll(o)){const i=a[1].trim();i&&!i.startsWith("data:")&&n.add(i)}const r=new Map;return await Promise.all(Array.from(n).map(async a=>{let i=a;try{i=new URL(a,document.baseURI).href}catch{return}const l=await Ji(i);l&&r.set(a,l)})),e.replace(o,(a,i)=>{const l=r.get(i.trim());return l?`url("${l}")`:a})}function xh(e,n){const o=Array.from(e.querySelectorAll(xr)),r=Array.from(n.querySelectorAll(xr));o.forEach((a,i)=>{var w;const l=r[i];if(!l)return;let g=null;try{if(a instanceof HTMLCanvasElement)g=a.toDataURL("image/png");else if(a instanceof HTMLVideoElement&&a.videoWidth>0){const X=document.createElement("canvas");X.width=a.videoWidth,X.height=a.videoHeight,(w=X.getContext("2d"))==null||w.drawImage(a,0,0),g=X.toDataURL("image/png")}}catch{g=null}if(!g)return;const f=document.createElement("img");f.src=g;const L=a.getBoundingClientRect();f.style.cssText=l.style.cssText,f.style.width=`${a.offsetWidth||L.width}px`,f.style.height=`${a.offsetHeight||L.height}px`,l.replaceWith(f)})}async function _h(e){const n=Array.from(e.querySelectorAll("img"));await Promise.all(n.map(async o=>{const r=o.getAttribute("src")??"";if(!(!r||r.startsWith("data:")))try{const a=await Ji(new URL(r,document.baseURI).href);a?o.setAttribute("src",a):o.remove()}catch{o.remove()}}))}async function Sh(e,n=1920,o=1080,r=1){const a=Ac(e);if(a.length>0)return{blob:null,blockers:a};const i=e.cloneNode(!0);i.style.width=`${n}px`,i.style.height=`${o}px`,i.style.transform="none",i.style.margin="0";const l=i.querySelector(".content");l&&(l.style.transform="none",l.style.transformOrigin="top left"),i.querySelectorAll(Nc).forEach(w=>w.remove()),xh(e,i),await _h(i);const g=await kh(),f=Mc(new XMLSerializer().serializeToString(i),g,n,o);return{blob:await Eh(f,n,o,r),blockers:[]}}function Eh(e,n,o,r){return new Promise(a=>{const i=new Image;i.onload=()=>{const l=document.createElement("canvas"),g=Math.max(1,Number(r)||1);l.width=Math.round(n*g),l.height=Math.round(o*g);const f=l.getContext("2d");if(!f)return a(null);f.drawImage(i,0,0,l.width,l.height);try{l.toBlob(L=>a(L),"image/png")}catch{a(null)}},i.onerror=()=>a(null),i.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`})}function Th(e,n){const o=URL.createObjectURL(e),r=document.createElement("a");r.href=o,r.download=n,r.click(),setTimeout(()=>URL.revokeObjectURL(o),0)}var Ah=E('<button type="button" class="ghost danger svelte-1il8kf6">Stop</button>'),Nh=E(`<div class="kiosk-scrim no-print gp-chrome svelte-1il8kf6" role="presentation"><div class="kiosk-dialog svelte-1il8kf6" role="dialog" aria-modal="true" aria-labelledby="kiosk-dialog-title" tabindex="-1"><h2 id="kiosk-dialog-title" class="svelte-1il8kf6">Kiosk / auto-advance</h2> <p class="lead svelte-1il8kf6">Steps reveal first (like Space), then the slide pages and loops.
				Pause and Stop stay on the small indicator — keys do not exit.</p> <label class="field svelte-1il8kf6"><span class="lbl svelte-1il8kf6">Step pace</span> <span class="ctl svelte-1il8kf6"><input type="number" min="0.25" max="120" step="0.5" class="svelte-1il8kf6"/> <span class="unit svelte-1il8kf6">seconds</span></span> <span class="hint svelte-1il8kf6">Between build reveals on one slide</span></label> <label class="field svelte-1il8kf6"><span class="lbl svelte-1il8kf6">Page pace</span> <span class="ctl svelte-1il8kf6"><input type="number" min="0.25" max="120" step="0.5" class="svelte-1il8kf6"/> <span class="unit svelte-1il8kf6">seconds</span></span> <span class="hint svelte-1il8kf6">After the build (and animations) finish</span></label> <label class="check svelte-1il8kf6"><input type="checkbox" class="svelte-1il8kf6"/> <span>Show speaker notes (one line at a time) <span class="hint svelte-1il8kf6">Each &lt;Note&gt; child is a step (drag the panel; n/N progress).
						Long lines hold longer (~150 wpm); then the deck pages.</span></span></label> <div class="actions svelte-1il8kf6"><!> <span class="spacer svelte-1il8kf6"></span> <button type="button" class="ghost svelte-1il8kf6">Cancel</button> <button type="button" class="primary svelte-1il8kf6"> </button></div></div></div>`);function Mh(e,n){je(n,!1);const o=()=>vt(Bc,"$kioskDialogOpen",i),r=()=>vt(Ga,"$kioskPaces",i),a=()=>vt(Bo,"$kioskStatus",i),[i,l]=$n();let g=c(2),f=c(6),L=c(!1);function w(){qc({stepMs:Er(t(g),ri),pageMs:Er(t(f),ai),useNotes:t(L)})}function X(){Uc()}function j(){ii()}function D(O){o()&&(O.key==="Escape"?(O.preventDefault(),O.stopPropagation(),X()):O.key==="Enter"&&!O.shiftKey&&!O.ctrlKey&&!O.metaKey&&!O.altKey&&(O.preventDefault(),O.stopPropagation(),w()))}let P=c();_(()=>(o(),r()),()=>{o()&&(s(g,Sr(r().stepMs)),s(f,Sr(r().pageMs)),s(L,r().useNotes))}),_(()=>(o(),t(P)),()=>{o()&&t(P)&&queueMicrotask(()=>{var O;return(O=t(P))==null?void 0:O.focus()})}),Nn(),hn();var F=vn();Q("keydown",Eo,D);var B=Wt(F);{var C=O=>{var $=Nh(),tt=u($),J=d(u(tt),4),q=d(u(J),2),Z=u(q);os(Z),Ke(2),p(q),Ke(2),p(J);var bt=d(J,2),et=d(u(bt),2),x=u(et);os(x),Ke(2),p(et),Ke(2),p(bt);var z=d(bt,2),W=u(z);os(W),Ke(2),p(z);var M=d(z,2),S=u(M);{var b=gt=>{var lt=Ah();Q("click",lt,j),h(gt,lt)};H(S,gt=>{a()!=="off"&&gt(b)})}var y=d(S,4),N=d(y,2),pt=u(N,!0);p(N),p(M),p(tt),Ae(tt,gt=>s(P,gt),()=>t(P)),p($),V(()=>wt(pt,a()==="off"?"Start":"OK")),ws(Z,()=>t(g),gt=>s(g,gt)),ws(x,()=>t(f),gt=>s(f,gt)),Zr(W,()=>t(L),gt=>s(L,gt)),Q("click",y,X),Q("click",N,w),Q("click",$,fi(X)),h(O,$)};H(B,O=>{o()&&O(C)})}h(e,F),Be(),l()}var Ph=E('<span class="note-count svelte-k4hrdv" title="Note progress"> </span>'),zh=E('<div class="kiosk-note-body svelte-k4hrdv"> </div>'),Dh=E('<div role="status" aria-live="polite"><div class="kiosk-bar svelte-k4hrdv"><span class="grip svelte-k4hrdv" aria-hidden="true" title="Drag to move">⠿</span> <button type="button" class="ring-btn svelte-k4hrdv"><svg class="ring svelte-k4hrdv" viewBox="0 0 28 28" width="26" height="26" aria-hidden="true"><circle class="track svelte-k4hrdv" cx="14" cy="14" fill="none" stroke-width="2.5"></circle><circle class="prog svelte-k4hrdv" cx="14" cy="14" fill="none" stroke-width="2.5" stroke-linecap="round" transform="rotate(-90 14 14)"></circle></svg> <span class="glyph svelte-k4hrdv" aria-hidden="true"> </span></button> <span class="meta svelte-k4hrdv"><span class="tag svelte-k4hrdv">KIOSK</span> <span class="phase svelte-k4hrdv"> </span></span> <!> <span class="spacer svelte-k4hrdv" aria-hidden="true"></span> <button type="button" class="icon-btn svelte-k4hrdv" title="Kiosk settings" aria-label="Kiosk settings">⚙</button> <button type="button" class="icon-btn stop svelte-k4hrdv" title="Stop kiosk" aria-label="Stop kiosk">×</button></div> <!></div>');function Ch(e,n){je(n,!1);const o=()=>vt(Cs,"$kioskDwellFraction",w),r=()=>vt(Bo,"$kioskStatus",w),a=()=>vt(Da,"$kioskPhaseLabel",w),i=()=>vt(ci,"$kioskNoteItems",w),l=()=>vt(di,"$kioskNoteIndex",w),g=()=>vt(Ga,"$kioskPaces",w),f=()=>vt(Tr,"$kioskNotesPos",w),L=()=>vt(pi,"$kioskPanelPinned",w),[w,X]=$n(),j=c(),D=c(),P=c(),F=c(),B=c(),C=c(),O=c(),$=c(),tt=c(),J=c(),q=c(),Z=c(),bt=c(),et=10,x=2*Math.PI*et,z=12,W=16,M=440;let S=c(null),b=c(!1),y=0,N=0;function pt(ht){var G,it,kt,$t,Lt;if(!t(S)||ht.button!==0)return;const st=ht.target;if((G=st==null?void 0:st.closest)!=null&&G.call(st,"button")||!((it=st==null?void 0:st.closest)!=null&&it.call(st,".kiosk-bar"))||(kt=st==null?void 0:st.closest)!=null&&kt.call(st,".kiosk-note-body"))return;const R=t(S).getBoundingClientRect();s(b,!0),y=ht.clientX-R.left,N=ht.clientY-R.top;try{(Lt=($t=t(S)).setPointerCapture)==null||Lt.call($t,ht.pointerId)}catch{}ht.preventDefault()}function gt(ht){if(!t(b)||!t(S))return;const st=t(S).offsetWidth||M,R=t(S).offsetHeight||48,G=Math.max(0,window.innerWidth-st-8),it=Math.max(0,window.innerHeight-R-8),kt=Math.min(G,Math.max(8,ht.clientX-y)),$t=Math.min(it,Math.max(8,ht.clientY-N));Tr.set({left:kt,top:$t})}function lt(ht){var st,R;if(!(!t(b)||!t(S))){s(b,!1);try{(R=(st=t(S)).releasePointerCapture)==null||R.call(st,ht.pointerId)}catch{}}}function ut(){Uo.set(!0)}function I(){Uo.set(!1)}_(()=>o(),()=>{s(j,Math.max(0,Math.min(1,o()||0)))}),_(()=>t(j),()=>{s(D,`${t(j)*x} ${x}`)}),_(()=>r(),()=>{s(P,r()==="paused")}),_(()=>(a(),t(P)),()=>{s(F,a()||(t(P)?"paused":"kiosk"))}),_(()=>i(),()=>{s(B,i())}),_(()=>l(),()=>{s(C,l())}),_(()=>t(B),()=>{s(O,t(B).length)}),_(()=>(g(),t(O)),()=>{s($,g().useNotes&&t(O)>0)}),_(()=>(t($),t(O),t(B),t(C)),()=>{s(tt,t($)&&t(O)>0?t(B)[Math.min(t(C),t(O)-1)]??"":"")}),_(()=>(t($),t(C),t(O)),()=>{s(J,t($)?li(Math.min(t(C),Math.max(0,t(O)-1)),t(O)):"")}),_(()=>r(),()=>{s(q,r()!=="off")}),_(()=>f(),()=>{s(Z,f())}),_(()=>t(Z),()=>{s(bt,t(Z)?`left:${t(Z).left}px;top:${t(Z).top}px;bottom:auto;right:auto;`:`left:${z}px;bottom:${W}px;top:auto;right:auto;`)}),Nn(),hn();var yt=vn(),dt=Wt(yt);{var Tt=ht=>{var st=Dh();let R;var G=u(st),it=d(u(G),2),kt=u(it),$t=u(kt);K($t,"r",et);var Lt=d($t);K(Lt,"r",et),p(kt);var ye=d(kt,2),jt=u(ye,!0);p(ye),p(it);var Rt=d(it,2),Nt=d(u(Rt),2),xt=u(Nt,!0);p(Nt),p(Rt);var Ct=d(Rt,2);{var Yt=fe=>{var Jt=Ph(),ke=u(Jt,!0);p(Jt),V(()=>wt(ke,t(J))),h(fe,Jt)};H(Ct,fe=>{t(J)&&fe(Yt)})}var qt=d(Ct,4),ce=d(qt,2);p(G);var Qt=d(G,2);{var _t=fe=>{var Jt=zh(),ke=u(Jt,!0);p(Jt),V(()=>wt(ke,t(tt))),h(fe,Jt)};H(Qt,fe=>{t(tt)&&fe(_t)})}p(st),Ae(st,fe=>s(S,fe),()=>t(S)),V(()=>{R=Mt(st,1,"kiosk-panel no-print gp-chrome svelte-k4hrdv",null,R,{paused:t(P),dragging:t(b),pinned:L(),"has-note":!!t(tt)}),K(st,"aria-label",t(P)?"Kiosk paused":t(tt)?`Kiosk running, note ${t(J)}: ${t(tt)}`:`Kiosk running (${t(F)})`),re(st,t(bt)),K(it,"title",t(P)?"Resume kiosk (Alt+. U)":"Pause kiosk (Alt+. U)"),K(it,"aria-label",t(P)?"Resume":"Pause"),K(Lt,"stroke-dasharray",t(D)),wt(jt,t(P)?"▶":"❚❚"),wt(xt,t(F))}),Q("click",it,sn(function(...fe){var Jt;(Jt=ui)==null||Jt.apply(this,fe)})),Q("click",qt,sn(()=>Ca())),Q("click",ce,sn(function(...fe){var Jt;(Jt=ii)==null||Jt.apply(this,fe)})),Q("pointerdown",st,pt),Q("pointermove",st,gt),Q("pointerup",st,lt),Q("pointercancel",st,lt),Q("mouseenter",st,ut),Q("mouseleave",st,I),h(ht,st)};H(dt,ht=>{t(q)&&ht(Tt)})}h(e,yt),Be(),X()}function $h(e,n){je(n,!1);const o=()=>vt(Bo,"$kioskStatus",a),r=()=>vt(Uo,"$kioskHoverFrozen",a),[a,i]=$n(),l=c();let g=m(n,"pages",24,()=>[]),f=m(n,"currentSlide",8,""),L=m(n,"prefix",8,"./"),w=m(n,"wpm",8,150);const X=Xo();let j=null,D=0,P=0,F=0,B="",C="",O="";function $(){return document.querySelector(".content")}function tt(){const z=$();if(!z)return!1;const W=qa(z);return W.length?si(W)&&Oo(W)<.999:!1}function J(){const z=vo(g());if(!z.length)return null;const W=z.findIndex(M=>M.path===f());return W<0?L()+z[0].path:W<z.length-1?L()+z[W+1].path:L()+z[0].path}function q(){const z=J();if(!z)return;const W=g().find(S=>S.path===f()),M=(W==null?void 0:W.transition)??"slide";uo(z,{viewTransitions:X,kind:M,direction:"forward"})}function Z(z,W){D=performance.now(),P=z,F=0,B=W,Da.set(W),Cs.set(0)}function bt(){if(Te(Bo)!=="running"||Te(Uo))return;f()!==C&&(C=f(),B="",O="",D=0,P=0,F=0,Cs.set(0));const z=Te(Ga),W=Te(jo),M=Te(ci),S=Te(di),b=z.useNotes&&M.length>0&&S<M.length,y=Te(Gc),N=tt(),pt=Wc({animBusy:N,mediaBusy:y,hasNextStep:!!(W!=null&&W.hasNext),hasNoteItem:b});if(pt==="wait"){if(y&&!N){B!=="media"&&(D=performance.now(),P=0,F=0,B="media",Da.set("video")),Cs.set(Te(Vc));return}B!=="wait"&&Z(0,"wait"),Cs.set(0);return}if(pt==="reveal"){const ut=z.stepMs;(B!=="reveal"||P!==ut)&&Z(ut,"reveal");const I=performance.now()-D;if(Cs.set(ya(I,P)),I<P)return;const yt=Te(jo);yt!=null&&yt.hasNext&&yt.next(),Z(z.stepMs,"reveal");return}if(pt==="note"){const ut=M[S]??"",I=Yc(ut,z.stepMs,w()),yt=`${f()}:${S}:${ut.slice(0,40)}`,dt=`note ${li(S,M.length)}`;(B!==dt||O!==yt||P!==I)&&(O=yt,Z(I,dt));const Tt=performance.now()-D;if(Cs.set(ya(Tt,P)),Tt<P)return;if(Xc()){O="";return}Z(z.pageMs,"page"),q();return}if(B==="media"){Z(0,"page"),q();return}const gt=z.pageMs;(B!=="page"||P!==gt)&&Z(gt,"page");const lt=performance.now()-D;Cs.set(ya(lt,P)),!(lt<P)&&(Z(gt,"page"),q())}function et(){j!=null&&(clearInterval(j),j=null)}function x(z){z==="running"?j==null&&(F>0&&P>0?(D=performance.now()-F,F=0):D||(D=performance.now()),j=setInterval(bt,100),bt()):z==="paused"?(j!=null&&D&&(F=Math.max(0,performance.now()-D)),et()):(et(),D=0,P=0,F=0,B="",C="",O="")}Es(et),_(()=>(o(),r()),()=>{s(l,o()==="off"?"off":o()==="paused"||r()?"paused":"running")}),_(()=>t(l),()=>{x(t(l))}),_(()=>(o(),nt(f())),()=>{o()==="running"&&f()&&f()}),Nn(),hn(),Be(),i()}const Wr=2e3,Ka=6e3;function Lh(e,n,o=Ka){if(e==null||!Number.isFinite(e)||e<=0||!Number.isFinite(n))return!1;const r=Number.isFinite(o)&&o>0?o:Ka;return n-e<r}const Rh=Xe(new Map);function Ih(e,n,o,r,a){const i=Math.max(0,Ps(n)),l=Math.max(0,Ps(r)),g=Math.max(0,Ps(a)),f=Ps(e.x),L=Ps(e.y),w=Math.max(0,Ps(e.width)),X=Math.max(0,Ps(e.height));let j=f-i,D=L-i,P=f+w+i,F=L+X+i;j=Lo(j,0,l),D=Lo(D,0,g),P=Lo(P,j,l),F=Lo(F,D,g);const B=P-j,C=F-D,O=Math.min(Math.max(0,Ps(o)),B/2,C/2);return{x:j,y:D,width:B,height:C,radius:O}}function Lo(e,n,o){return o<n||e<n?n:e>o?o:e}var Oh=as('<defs class="svelte-1rvf8aj"><mask class="svelte-1rvf8aj"><rect x="0" y="0" fill="white" class="svelte-1rvf8aj"></rect><rect fill="black" class="svelte-1rvf8aj"></rect></mask></defs><rect class="spotlight-scrim svelte-1rvf8aj" x="0" y="0"></rect>',1),Fh=as('<svg aria-hidden="true"><!><rect class="spotlight-ring svelte-1rvf8aj"></rect></svg>');function Hh(e,n){je(n,!0);const o=()=>vt(gl,"$highlightTarget",a),r=()=>vt(Rh,"$blockAnchors",a),[a,i]=$n();let l=m(n,"pad",3,14),g=m(n,"radius",3,16),f=m(n,"dim",3,.3),L=m(n,"pulse",3,!0),w=m(n,"canvasWidth",3,1920),X=m(n,"canvasHeight",3,1080);const j=He(()=>o()?r().get(o()):void 0),D=He(()=>t(j)?Ih(t(j),l(),g(),w(),X()):null),P=He(()=>`gp-spotlight-hole-${F(o()??"")}`);function F(tt){return tt.replace(/[^a-zA-Z0-9_-]/g,"-")||"x"}const B=He(()=>Math.min(1,Math.max(0,f())));var C=vn(),O=Wt(C);{var $=tt=>{var J=Fh();let q;var Z=u(J);{var bt=x=>{var z=Oh(),W=Wt(z),M=u(W),S=u(M),b=d(S);p(M),p(W);var y=d(W);V(()=>{K(M,"id",t(P)),K(S,"width",w()),K(S,"height",X()),K(b,"x",t(D).x),K(b,"y",t(D).y),K(b,"width",t(D).width),K(b,"height",t(D).height),K(b,"rx",t(D).radius),K(b,"ry",t(D).radius),K(y,"width",w()),K(y,"height",X()),K(y,"mask",`url(#${t(P)??""})`),re(y,`opacity:${t(B)??""};`)}),h(x,z)};H(Z,x=>{t(B)>0&&x(bt)})}var et=d(Z);p(J),V(()=>{q=Mt(J,0,"spotlight-surface svelte-1rvf8aj",null,q,{pulse:L()}),K(J,"viewBox",`0 0 ${w()??""} ${X()??""}`),re(J,`width:${w()??""}px; height:${X()??""}px; pointer-events:none;`),K(et,"x",t(D).x),K(et,"y",t(D).y),K(et,"width",t(D).width),K(et,"height",t(D).height),K(et,"rx",t(D).radius),K(et,"ry",t(D).radius)}),h(tt,J)};H(O,tt=>{t(D)&&tt($)})}h(e,C),Be(),i()}const Kh=12;function jh(e,n,o=Kh){if(typeof n!="number"||!Number.isFinite(n))return{kind:"none"};const r=Math.floor(n);if(r<1)return{kind:"none"};const a=typeof e=="number"&&Number.isFinite(e)?Math.floor(e):0,i=Math.max(0,Math.min(r,a)),l=i>=r;if(r>o)return{kind:"bar",fraction:i/r,index:i,total:r,spent:l};const g=[];for(let f=0;f<r;f++)g.push(f<i-1?"done":f===i-1?"current":"todo");return{kind:"dots",dots:g,index:i,total:r,spent:l}}const Bh=1e3,tl="SPACE for next step",el="SPACE for next slide";function Uh(e,n){return e.kind==="none"||n.busy||!n.settled?"none":e.spent?n.hasNextSlide?"spent":"none":"next"}function Vr(e){return e.kind==="none"?"":`Step ${e.index} of ${e.total}`}const qh=["top","bottom","left","right","top-left","top-right","bottom-left","bottom-right"];function Gh(e){const n=qh.includes(e)?e:"bottom",o=n.includes("left")?"start":n.includes("right")?"end":"center",r=n.startsWith("top")?"start":n.startsWith("bottom")?"end":"center";return{position:n,x:o,y:r,vertical:n==="left"||n==="right"}}function Yr(e,n,o,r="var(--stepdots-inset, 36px)"){const a=(l,g)=>l==="start"?r:l==="end"?`calc(${g}px - ${r})`:`${g/2}px`,i=l=>l==="start"?"0":l==="end"?"-100%":"-50%";return`left: ${a(e.x,n)}; top: ${a(e.y,o)}; transform: translate(${i(e.x)}, ${i(e.y)});`}var Wh=E("<span></span>"),Vh=E('<span><span class="fill svelte-1qglbbh"></span></span>'),Yh=E("<div><!></div>"),Xh=E('<span class="cue-tip svelte-1qglbbh" aria-hidden="true"> </span>'),Qh=E('<div role="progressbar" aria-valuemin="0"><!> <!></div>');function Jh(e,n){je(n,!1);const o=()=>vt(jo,"$activeSteps",r),[r,a]=$n(),i=c(),l=c(),g=c(),f=c();let L=m(n,"canvasWidth",8,1920),w=m(n,"canvasHeight",8,1080),X=m(n,"position",8,"bottom"),j=m(n,"cue",8,!1),D=m(n,"cueDelayMs",8,Bh),P=m(n,"cueNext",8,tl),F=m(n,"cueSpent",8,el),B=m(n,"hasNextSlide",8,!0),C=m(n,"style",8,""),O=m(n,"id",8,""),$=m(n,"class",8,""),tt=c(!1),J;function q(x,z,W,M){s(tt,!1),clearTimeout(J),x&&z!=="none"&&!M&&(J=setTimeout(()=>s(tt,!0),D()))}Es(()=>clearTimeout(J)),_(()=>o(),()=>{var x,z;s(i,jh((x=o())==null?void 0:x.index,(z=o())==null?void 0:z.total))}),_(()=>nt(X()),()=>{s(l,Gh(X()))}),_(()=>o(),()=>{var x;s(g,!!((x=o())!=null&&x.busy))}),_(()=>(nt(j()),t(i),t(g)),()=>{q(j(),t(i).kind,t(i).kind==="none"?0:t(i).index,t(g))}),_(()=>(nt(j()),t(i),t(g),t(tt),nt(B())),()=>{s(f,j()?Uh(t(i),{busy:t(g),settled:t(tt),hasNextSlide:B()}):"none")}),Nn(),hn();var Z=vn(),bt=Wt(Z);{var et=x=>{var z=Qh();let W;var M=u(z);id(M,()=>(t(i),at(()=>t(i).index)),y=>{var N=Yh();let pt;var gt=u(N);{var lt=I=>{var yt=vn(),dt=Wt(yt);Cn(dt,1,()=>(t(i),at(()=>t(i).dots)),hs,(Tt,ht,st)=>{var R=Wh();let G;V(()=>G=Mt(R,1,`dot ${t(ht)??""}`,"svelte-1qglbbh",G,{next:t(f)==="next"&&st===t(i).index})),h(Tt,R)}),h(I,yt)},ut=I=>{var yt=Vh();let dt;var Tt=u(yt);p(yt),V(ht=>{dt=Mt(yt,1,"bar svelte-1qglbbh",null,dt,{next:t(f)==="next"}),re(Tt,`${t(l),at(()=>t(l).vertical?"height":"width")??""}: ${ht??""}%`)},[()=>(t(i),at(()=>(t(i).fraction*100).toFixed(3)))]),h(I,yt)};H(gt,I=>{t(i),at(()=>t(i).kind==="dots")?I(lt):I(ut,-1)})}p(N),V(()=>pt=Mt(N,1,"row svelte-1qglbbh",null,pt,{spent:t(i).spent})),h(y,N)});var S=d(M,2);{var b=y=>{var N=Xh(),pt=u(N,!0);p(N),V(()=>wt(pt,t(f)==="next"?P():F())),h(y,N)};H(S,y=>{t(f)!=="none"&&y(b)})}p(z),V((y,N)=>{W=Mt(z,1,`step-dots no-print ${$()??""}`,"svelte-1qglbbh",W,{vertical:t(l).vertical,cueing:t(f)!=="none"}),K(z,"data-position",(t(l),at(()=>t(l).position))),K(z,"id",O()||void 0),K(z,"aria-valuemax",(t(i),at(()=>t(i).total))),K(z,"aria-valuenow",(t(i),at(()=>t(i).index))),K(z,"aria-label",y),re(z,`${N??""} ${C()??""}`)},[()=>(nt(Vr),t(i),at(()=>Vr(t(i)))),()=>(nt(Yr),t(l),nt(L()),nt(w()),at(()=>Yr(t(l),L(),w())))]),h(x,z)};H(bt,x=>{t(i),at(()=>t(i).kind!=="none")&&x(et)})}h(e,Z),Be(),a()}var Zh=E('<link rel="icon"/>'),tm=E("<!> <!> <!> <!> <!> <!> <!>",1),em=E('<button type="button" class="annot-tool" title="Kiosk — auto-advance this deck (step, then page, then loop)"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="8" cy="8" r="6"></circle><path d="M6.5 5.5v5l4.5-2.5z" fill="currentColor" stroke="none"></path></svg></span> <span class="tool-label"><span class="tool-mn">K</span>IOSK</span></button>'),nm=E('<button type="button" class="annot-tool" aria-keyshortcuts="b"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="1.5" y="2" width="13" height="12" rx="1.2"></rect><path d="M1.5 5h13M1.5 11h13"></path></svg></span> <span class="tool-label"> <span class="tool-mn">B</span>ARS</span></button>'),sm=E('<button type="button" class="annot-tool" aria-keyshortcuts="i"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><path d="M3 2l3.3 11 1.8-4.6L13 6.6z"></path></svg></span> <span class="tool-label"> <span class="tool-mn">I</span>NTER</span></button>'),om=E('<button type="button" class="annot-anchor" title="PRESENT — open speaker console"><span class="tool-mn">P</span>RESENT</button>'),am=E('<span class="save-flash svelte-v9c9xj"> </span>'),rm=E('<span class="save-tip svelte-v9c9xj" role="status"> </span>'),im=E('<span class="save-pop svelte-v9c9xj"><!> <!></span>'),lm=E('<span><button type="button" class="annot-act save-act" aria-label="Save layout to source" title="SAVE — write the moved blocks back to the source file">SAVE</button> <!></span>'),cm=E('<span class="annot-bar-sep" aria-hidden="true"></span> <button type="button">AD<span class="tool-mn">J</span>UST</button> <!>',1),dm=E('<div class="print-sub" role="menu" aria-label="Print options"><button type="button" role="menuitem"><span class="print-sub-label">Current slide</span> <kbd class="print-sub-kbd">c</kbd></button> <button type="button" role="menuitem"><span class="print-sub-label">Current + notes</span> <kbd class="print-sub-kbd">C</kbd></button> <div class="print-menu-sep" role="separator"></div> <button type="button" role="menuitem"><span class="print-sub-label">Whole deck</span> <kbd class="print-sub-kbd">w</kbd></button> <button type="button" role="menuitem"><span class="print-sub-label">Whole + notes</span> <kbd class="print-sub-kbd">W</kbd></button> <div class="print-menu-sep" role="separator"></div> <button type="button" role="menuitem"><span class="print-sub-label">Thumbnail grid</span> <kbd class="print-sub-kbd">t</kbd></button> <button type="button" role="menuitem"><span class="print-sub-label">Notes grid</span> <kbd class="print-sub-kbd">T</kbd></button></div>'),pm=E('<div role="presentation"><button type="button" class="annot-tool" aria-haspopup="menu" title="Print current slide or whole deck (hover for options)"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 6V2h8v4"></path><path d="M4 11H2.5A1.5 1.5 0 0 1 1 9.5v-2A1.5 1.5 0 0 1 2.5 6h11A1.5 1.5 0 0 1 15 7.5v2A1.5 1.5 0 0 1 13.5 11H12"></path><rect x="4" y="11" width="8" height="4" rx="0.5"></rect></svg></span> <span class="tool-label">P<span class="tool-mn">R</span>INT</span> <span class="tool-trail" aria-hidden="true">▸</span></button> <!></div>'),um=E('<span class="tool-mn">C</span>APTURE',1),fm=E('<span class="capture-tip svelte-v9c9xj" role="status"> </span>'),vm=E('<button type="button" class="annot-tool" title="Download this slide as a PNG at canvas resolution"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M2.5 5.5h2l1-1.5h5l1 1.5H13.5A1.5 1.5 0 0 1 15 7v5.5A1.5 1.5 0 0 1 13.5 14h-11A1.5 1.5 0 0 1 1 12.5V7A1.5 1.5 0 0 1 2.5 5.5z"></path><circle cx="8" cy="9.5" r="2.2"></circle></svg></span> <span class="tool-label"><!></span></button> <!>',1),hm=E("<span><!></span>"),mm=E('<button type="button" class="annot-tool" title="All slides as a grid (O)" aria-keyshortcuts="o"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor"><rect x="1.5" y="1.5" width="5.5" height="5.5" rx="0.8"></rect><rect x="9" y="1.5" width="5.5" height="5.5" rx="0.8"></rect><rect x="1.5" y="9" width="5.5" height="5.5" rx="0.8"></rect><rect x="9" y="9" width="5.5" height="5.5" rx="0.8"></rect></svg></span> <span class="tool-label"><span class="tool-mn">O</span>VERVIEW</span></button>'),gm=E(`<button type="button" class="annot-tool" title="View this slide's +page.svelte source"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 3.5 2 8l3.5 4.5"></path><path d="M10.5 3.5 14 8l-3.5 4.5"></path></svg></span> <span class="tool-label"><span class="tool-mn">S</span>OURCE</span></button>`),bm=E('<button type="button" class="annot-tool" title="Edit source in a separate window (unscaled)"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 2.5 13.5 4.5 5.5 12.5H3.5v-2z"></path><path d="M10 4l2 2"></path></svg></span> <span class="tool-label"><span class="tool-mn">E</span>DIT</span> <span class="tool-trail tool-ext" aria-hidden="true" title="Opens in a new window"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 3.5H3.5v9h9v-3"></path><path d="M9.5 3.5h3v3"></path><path d="M12.5 3.5 7 9"></path></svg></span></button>'),Xr=E("<!> <!>",1),ym=E("<div><!> <!> <!></div>"),km=E("<!> <!> <!> <!>",1),wm=E('<div class="replay-shield svelte-v9c9xj" aria-hidden="true"></div>'),xm=E("<!>   <div><div><div><!></div></div></div> <!> <!> <!> <!> <!>",1);function rg(e,n){je(n,!1);const o=()=>vt(Wo,"$deckSourceFallback",q),r=()=>vt(Vs,"$displayMode",q),a=()=>vt(Ko,"$displayFactor",q),i=()=>vt(ei,"$recordingLook",q),l=()=>vt(Ua,"$page",q),g=()=>vt(Os,"$chromeArmed",q),f=()=>vt(oa,"$chromeBare",q),L=()=>vt(Zc,"$kioskActive",q),w=()=>vt(Ws,"$replaying",q),X=()=>vt(Ro,"$consoleLive",q),j=()=>vt(Fs,"$moreMenuOpen",q),D=()=>vt(Ki,"$canAdjust",q),P=()=>vt(Fo,"$adjustMode",q),F=()=>vt(od,"$canKiosk",q),B=()=>vt(Wi,"$pageSourceCanView",q),C=()=>vt(Vi,"$pageSourceCanEdit",q),O=()=>vt(Qo,"$canAnnotate",q),$=()=>vt(Zs,"$canSave",q),tt=()=>vt(av,"$pageSourceHasOwner",q),J=()=>vt(er,"$livePointer",q),[q,Z]=$n(),bt=c(),et=c(),x=c(),z=c(),W=c(),M=c(),S=c(),b=c(),y=c(),N=c(),pt=c(),gt=c(),lt=c(),ut=c(),I=c(),yt=c(),dt=c(),Tt=c(),ht=c(),st=c(),R=c(),G=c(),it=c(),kt=c(),$t=c(),Lt=c(),ye=c(),jt=c(),Rt=c(),Nt=c(),xt=c(),Ct=c(),Yt=c(),qt=c();let ce=c(!1),Qt=c(!1),_t=m(n,"pages",24,()=>[]),fe=m(n,"title",8,void 0),Jt=m(n,"description",8,wl),ke=m(n,"image",8,void 0),Re=m(n,"imageAlt",8,void 0),de=m(n,"width",8,1920),ie=m(n,"height",8,1080),Qe=m(n,"baseFontSize",8,"1.5em"),en=m(n,"deckClass",8,""),on=m(n,"fill",8,!1),wn=m(n,"contentBackground",8,void 0),rs=m(n,"contentFont",8,void 0),is=m(n,"article",8,!1),mn=m(n,"articleText",8,"View as article"),Ie=m(n,"articleHref",8,"../text.html"),xn=m(n,"fadeChrome",8,!1),Ln=m(n,"controlBar",8,!0),Xn=m(n,"toolBar",8,!0),Bn=m(n,"hideChrome",8,!1),Rn=m(n,"preloadNeighbours",8,!0),Un=m(n,"adjust",8,!1),gn=m(n,"annotate",8,!1),Qn=m(n,"inkStaleAfter",8,24),Ts=m(n,"inkColors",24,()=>[null,"#E5484D","#3FA9F5","#4BD07A","#FFFFFF"]),As=m(n,"levelHighlight",8,!0),T=m(n,"freehand",24,()=>({})),ot=m(n,"capture",8,!1),Pt=m(n,"captureScale",8,1),Ut=m(n,"kiosk",8,!1),se=m(n,"kioskStepMs",8,ri),We=m(n,"kioskPageMs",8,ai),an=m(n,"kioskWpm",8,Jc),rn=m(n,"onboardHint",8,!0),ms=m(n,"stepDots",8,!0),Ns=m(n,"stepDotsAt",8,"bottom"),qn=m(n,"stepCue",8,!0),A=m(n,"stepCueNext",8,tl),Y=m(n,"stepCueSpent",8,el),rt=m(n,"onboardDelayMs",8,qi),Ot=m(n,"pointer",8,!1),Zt=m(n,"pointerShape",8,"arrow"),we=m(n,"pointerSize",8,Za),pe=c(),It=c(),oe=c(),Vt=c(r()),zt=Aa(a()),Bt=c(!1),Ft=c(!document.prerendering),De=c(!1),Ne=c(!1),he=c({left:0,top:0,width:1,height:1});const ee=v=>Math.max(0,Math.min(1,v));function _e(){te()}let Ce=c(!1);const Oe=Xo();let ae=c("CAPTURE"),Me=c(""),Mn=c(!1);async function At(){if(!(t(Mn)||!t(It))){s(Mn,!0),s(ae,"…"),s(Me,"");try{const{blob:v,blockers:U}=await Sh(t(It),de(),ie(),Pt());U.length>0?(s(Me,Lc(U)),s(ae,"NOT ALLOWED")):v?(Th(v,Rc(l().url.pathname)),s(ae,"SAVED")):(s(Me,"The browser refused to draw this slide"),s(ae,"FAILED"))}catch{s(Me,"The browser refused to draw this slide"),s(ae,"FAILED")}finally{s(Mn,!1),setTimeout(()=>{s(ae,"CAPTURE"),s(Me,"")},2600)}}}let ft=c(!1);Fs.subscribe(v=>{v||s(ft,!1)});async function $e(v){s(ft,!1),s(Ce,v),await po(),window.print()}function me(v){s(ft,!1),window.location.assign(`${lo}/_handout/${t(jt)}.html${v}`)}function Dt(v){if(!t(ft)||v.ctrlKey||v.metaKey||v.altKey)return!1;if(v.key==="Escape")return v.preventDefault(),s(ft,!1),!0;const ct={c:()=>$e(!1),C:()=>$e(!0),w:()=>me(""),W:()=>me("?notes"),t:()=>me("?grid"),T:()=>me("?grid&notes")}[v.key];return ct?(v.preventDefault(),ct(),ns(),!0):!1}let ge=c();function Se(){var ct;const v=(ct=t(ge))==null?void 0:ct.querySelector(".annot-tools");return v?[...v.querySelectorAll(":scope > button, :scope > .save-btn > button, :scope > .mode button, :scope > .annot-menu > .annot-hamburger")].filter(St=>St instanceof HTMLElement&&!St.disabled):[]}function nn(){var U;const v=(U=t(ge))==null?void 0:U.querySelector(".annot-drop");return v?[...v.querySelectorAll("button.annot-tool")].filter(ct=>ct instanceof HTMLElement&&!ct.disabled):[]}function bn(){var U;const v=(U=t(ge))==null?void 0:U.querySelector(".print-sub");return v?[...v.querySelectorAll("button")].filter(ct=>!ct.disabled):[]}function Ue(v){var U;v&&(v.focus(),(U=v.scrollIntoView)==null||U.call(v,{block:"nearest"}))}function In(v){var be,Je;const U=rv(v);if(!U||Js(v.target))return!1;const ct=(be=t(ge))==null?void 0:be.querySelector(".annot-tools");if(!ct||ct.querySelector(".mode.expanded"))return!1;const St=Se(),Ht=nn(),le=bn(),Et=document.activeElement,Pe=ct.querySelector(".annot-hamburger"),ze=ct.querySelector(".annot-drop"),xe=ct.querySelector(".print-sub"),Zn=ct.querySelector(".print-flyout > .annot-tool"),ne=iv({armed:g(),moreOpen:j(),printOpen:t(ft),focusInPrint:!!(xe&&Et&&xe.contains(Et)),focusInMoreDrop:!!(ze&&Et&&ze.contains(Et)),focusOnHamburger:!!(Pe&&Et&&(Et===Pe||Pe.contains(Et))),focusOnBar:!!(Et&&ct.contains(Et)&&!(ze&&ze.contains(Et)))});if(ne==="none")return!1;if(ne==="bar"){if(U==="down"&&Pe&&Et&&(Et===Pe||Pe.contains(Et)))return v.preventDefault(),Ar(),Kn(),queueMicrotask(()=>Ue(nn()[0]??Pe)),!0;if(U!=="left"&&U!=="right")return!1;const Ve=so(St,Et),Le=oo("bar",U,Ve,St.length);return Le==null||!St.length?!1:(v.preventDefault(),Ue(St[Le]),Kn(),!0)}if(ne==="more"){const Ve=!!(Pe&&Et&&(Et===Pe||Pe.contains(Et))),Le=!!(ze&&Et&&ze.contains(Et));if((U==="left"||U==="right")&&!Ve&&!Le){const ts=so(St,Et),Ee=oo("bar",U,ts,St.length);return Ee==null||!St.length?!1:(v.preventDefault(),Ue(St[Ee]),Kn(),!0)}if(U==="right"&&Et&&((Je=Et.closest)!=null&&Je.call(Et,".print-flyout")))return v.preventDefault(),s(ft,!0),Kn(),queueMicrotask(()=>Ue(bn()[0]??Zn)),!0;if(U==="left"){if(Le)return v.preventDefault(),Ue(Pe),Kn(),!0;if(Ve){const ts=so(St,Pe),Ee=oo("bar","left",ts,St.length);return Ee==null?!1:(v.preventDefault(),Ue(St[Ee]),Kn(),!0)}}if(U==="right"&&Ve){const ts=so(St,Pe),Ee=oo("bar","right",ts,St.length);return Ee==null?!1:(v.preventDefault(),Ue(St[Ee]),Kn(),!0)}let Tn=so(Ht,Et);Ve&&(Tn=-1);const Hn=oo("more",U,Tn,Ht.length);return Hn==null?!1:(v.preventDefault(),Hn<0?Ue(Pe):Ue(Ht[Hn]),Kn(),!0)}if(ne==="print"){const Ve=so(le,Et),Le=oo("print",U,Ve,le.length);return Le==null?!1:(v.preventDefault(),Le<0?(s(ft,!1),Ue(Zn)):Ue(le[Le]),Kn(),!0)}return!1}function On(v){var Ht;if(xu(v,D()&&P())){v.preventDefault(),Gn();return}if(Dt(v)||In(v))return;const U=_u(v,j(),g());if(U!=="ignore"){switch(v.preventDefault(),j()||Ar(),U){case"overview":ks.set(!0),ns();break;case"kiosk":L()?pi.update(le=>!le):F()&&Ca(),ns();break;case"bars":ns(),Do();return;case"pointer":Co(),ns();break;case"capture":t(ye)&&At(),ns();break;case"print":s(ft,!0),Kn();break;case"source":B()&&Or(),ns();break;case"edit":C()&&xa(),ns();break}Kn();return}function ct(){var le,Et,Pe;if(ns(),s(ft,!1),document.activeElement instanceof HTMLElement){const ze=document.activeElement;((le=ze.closest)!=null&&le.call(ze,".overlay")||(Et=ze.closest)!=null&&Et.call(ze,".annot-tools")||(Pe=ze.closest)!=null&&Pe.call(ze,".ctrl-bar"))&&ze.blur()}xi()}const St=Su(v,g());if(St!=="ignore")switch(v.preventDefault(),St){case"arm":ea(),queueMicrotask(()=>Ue(Se()[0]));return;case"disarm":ct();return;case"annotate":O()&&io.update(le=>!le),ct();return;case"adjust":D()&&Fo.update(le=>!le),ct();return;case"display":lp();return;case"present":Jn(),Kn();return;case"more":{const le=_i(),Et=(Ht=t(ge))==null?void 0:Ht.querySelector(".annot-hamburger");le?Et==null||Et.focus():Et==null||Et.blur(),Kn();return}case"toc":ip();return;case"kiosk-pause":L()&&ui(),Kn();return}}let ln=c("SAVE"),yn=c(!1),ve=c(0),cn=c([]),ls;const gs={"not-found":"The tag isn't in the source in its literal form (geometry written as expressions, or a reformatted tag), so there is nothing to rewrite — Copy it and paste by hand.",ambiguous:"A tag whose name AND geometry match another (a code sample of itself, say) is ambiguous, so it is never guessed at — Copy that one by hand."};function dn(v,U){s(ln,v),clearTimeout(ls),ls=setTimeout(()=>{s(ln,"SAVE"),s(yn,!1),s(ve,0),s(cn,[])},U)}async function Gn(){if(!$()){s(yn,!0),dn("NOT ALLOWED",2600);return}const v=await Dv();v.ok?v.patched===0&&v.unmatched.length===0?dn("NONE",1600):v.unmatched.length?(s(yn,!0),s(ve,v.unmatched.length),s(cn,[...new Set(v.unmatched.map(U=>U.reason))]),dn(`${v.patched} OF ${v.patched+v.unmatched.length}`,2600),console.warn("[adjust save] not written — Copy these by hand:",v.unmatched)):(dn("SAVED",1600),setTimeout(()=>location.reload(),550)):(dn("ERROR",1600),console.error("[adjust save] failed:",v.error))}function Jn(){Kl(window.location.href,Na(window.location.pathname))}function te(){if(!t(pe)||!t(It)||t(Vt)!=="SCALED"||t(b)){s(Ne,!1);return}const v=t(pe).clientWidth,U=t(pe).clientHeight,ct=t(It).offsetWidth,St=t(It).offsetHeight;s(Ne,ct>v+1||St>U+1),t(Ne)&&s(he,{left:ee(t(pe).scrollLeft/ct),top:ee(t(pe).scrollTop/St),width:ee(v/ct),height:ee(U/St)})}function Kt(){!t(pe)||!t(It)||(Ge(pe,t(pe).scrollLeft=Math.max(0,(t(It).offsetWidth-t(pe).clientWidth)/2)),Ge(pe,t(pe).scrollTop=Math.max(0,(t(It).offsetHeight-t(pe).clientHeight)/2)))}function ue(v=!1){if(!t(It)||t(y)||t(N))return;if(t(Vt)==="SCALED"){Ge(It,t(It).style.width=`${Math.round(de()*zt)}px`),Ge(It,t(It).style.height=`${Math.round(ie()*zt)}px`),Ge(oe,t(oe).style.transform=`scale(${zt})`),Ge(oe,t(oe).style.transformOrigin="top left"),t(oe).style.setProperty("--view-scale",String(zt)),v&&Kt(),_e();return}window.innerWidth/window.innerHeight>t(et)?(Ge(It,t(It).style.height="calc(100vh - 10px)"),Ge(It,t(It).style.width=`${Math.round(t(It).clientHeight*t(et))}px`)):(Ge(It,t(It).style.width="calc(100vw - 10px)"),Ge(It,t(It).style.height=`${Math.round(t(It).clientWidth/t(et))}px`));const ct=on()?de():de()+50,St=ie(),Ht=Math.min(t(It).clientWidth/ct,t(It).clientHeight/St);Ge(oe,t(oe).style.transform=`scale(${Ht})`),Ge(oe,t(oe).style.transformOrigin="center center"),t(oe).style.setProperty("--view-scale",String(Ht)),_e()}function Fe(v){document.body.classList.add("rendering"),ue(v),document.body.classList.remove("rendering")}function _n(v){const U=document.querySelector(".content");if(!U)return;const ct=qa(U);ct.length&&Sc(ct,v)}function Pn(v){var U;switch(v.kind){case"goto":{const ct=gc(v.href,t(ut));if(ct===l().url.pathname.replace(/\/+$/,"")+l().url.search){ba(),window.location.reload();return}const St=v.back?"back":"forward",Ht=_t().find(Et=>Et.path===t(x)),le=(v.back?Ht==null?void 0:Ht.transitionBack:Ht==null?void 0:Ht.transition)??"slide";uo(ct,{viewTransitions:Oe,kind:le,direction:St,arriveAtEnd:v.end===!0});return}case"step":{const ct=Te(jo);v.back?(U=ct==null?void 0:ct.prev)==null||U.call(ct):ct==null||ct.next();return}case"continue":window.dispatchEvent(new CustomEvent("gp:slide-continue"));return;case"anim":_n(v);return;case"trigger":ur(v.name);return;case"highlight":va(v.name);return}}function cs(v){var St;const U=document.getElementById("gp-preload");if((U==null?void 0:U.textContent)===v||(U==null||U.remove(),!v||!((St=HTMLScriptElement.supports)!=null&&St.call(HTMLScriptElement,"speculationrules"))))return;const ct=document.createElement("script");ct.type="speculationrules",ct.id="gp-preload",ct.textContent=v,document.head.appendChild(ct)}Yn(()=>{if(t(Ft))return Fn();let v;const U=()=>{s(Ft,!0),v=Fn()};return document.addEventListener("prerenderingchange",U,{once:!0}),()=>{document.removeEventListener("prerenderingchange",U),v==null||v()}});function Fn(){const v=Vs.subscribe(ne=>{t(De)||(s(Vt,ne),t(Bt)&&Fe(!0))}),U=Ko.subscribe(ne=>{zt=Aa(ne),t(Bt)&&Fe(!0)}),ct=()=>ue(!1);window.addEventListener("resize",ct),Qc(new URL(window.location.href));const St=()=>{s(Ce,!1)};window.addEventListener("afterprint",St);const Ht=window.self===window.top?zl(t(ut),ne=>{if(!ne||ne===t(x)||Te(Ws))return;const be=t(y)?`./${ne}?present`:`./${ne}`,Je=_t().findIndex(Hn=>Hn.path===ne),Ve=Je>=0&&Je<(t(z)??0)?"back":"forward",Le=_t().find(Hn=>Hn.path===t(x)),Tn=(Ve==="back"?Le==null?void 0:Le.transitionBack:Le==null?void 0:Le.transition)??"slide";uo(be,{viewTransitions:Oe,kind:Tn,direction:Ve})},t(yt)):()=>{},le=window.self===window.top?Dl(t(ut),ne=>{Te(Ws)||(_n(ne),hc({kind:"anim",...ne}))}):()=>{},Et=window.self===window.top?Cl(t(ut),()=>{Te(Ws)||window.dispatchEvent(new CustomEvent("gp:continue"))}):()=>{},Pe=window.self===window.top?$l(t(ut),ne=>{Te(Ws)||va(ne)}):()=>{},ze=window.self===window.top?Ll(t(ut),ne=>{Te(Ws)||ur(ne)}):()=>{};let xe=()=>{};if(t(y)){hr(t(ut));const ne=window.setInterval(()=>hr(t(ut)),Wr);xe=()=>window.clearInterval(ne)}else if(window.self===window.top){let ne=Rl(t(ut));const be=()=>Ro.set(Lh(ne,Date.now(),Ka));be();const Je=Il(t(ut),Le=>{ne=Le,be()}),Ve=window.setInterval(be,Wr);xe=()=>{Je(),window.clearInterval(Ve),Ro.set(!1)}}let Zn=()=>{};if(!t(y)&&window.self===window.top){wr(t(ut));const ne=uc(t(ut)),be=()=>vc({type:"here",deck:t(ut),here:{href:l().url.pathname+l().url.search,path:l().url.pathname.replace(/\/+$/,""),width:de(),height:ie(),title:t(xt)}}),Je=fc(t(ut),Tn=>{Tn.type==="hello"?be():Tn.type==="cmd"&&Te(mc)!=="idle"&&Pn(Tn.action)}),Ve=Tn=>{Te(Ws)&&(Tn.stopImmediatePropagation(),Tn.preventDefault())};window.addEventListener("keydown",Ve,!0),window.addEventListener("pagehide",ba);let Le=requestAnimationFrame(()=>{Le=requestAnimationFrame(be)});Zn=()=>{cancelAnimationFrame(Le),Je(),ne(),wr(null),window.removeEventListener("keydown",Ve,!0),window.removeEventListener("pagehide",ba)}}return s(Bt,!0),Fe(!0),()=>{v(),U(),Ht(),le(),Et(),Pe(),ze(),xe(),Zn(),va(null),window.removeEventListener("resize",ct),window.removeEventListener("afterprint",St)}}_(()=>(o(),t(Qt),t(ce),Ia),()=>{const v=!!o();v&&!t(Qt)&&s(ce,!0),v||s(ce,!1),v&&t(Qt)&&!t(ce)&&Ia(),s(Qt,v)}),_(()=>(t(Bt),i(),t(De),Vs),()=>{t(Bt)&&i()!==t(De)&&(s(De,i()),s(Vt,t(De)?"FITTED":Te(Vs)),Fe(!0))}),_(()=>t(Vt),()=>{s(bt,t(Vt)==="FITTED")}),_(()=>(nt(de()),nt(ie())),()=>{s(et,de()/ie())}),_(()=>l(),()=>{s(x,l().url.pathname.replace(/\/+$/,"").split("/").pop())}),_(()=>(nt(_t()),t(x)),()=>{s(z,_t().findIndex(v=>v.path===t(x)))}),_(()=>(l(),lo),()=>{s(jt,(()=>{var ct;const v=l().url.pathname.replace(lo,"").split("/").filter(Boolean);return v.length===0?"":((ct=v[v.length-1])!=null&&ct.endsWith(".html")?v.slice(0,-1):v).join("-")})())}),_(()=>(t(Ft),l(),t(jt),nt(_t())),()=>{t(Ft)&&pp(l().url.searchParams,t(jt),sessionStorage,_t())}),_(()=>(t(Ft),l(),t(jt),nt(_t())),()=>{s(W,t(Ft)?dp(l().url.searchParams,t(jt),sessionStorage,_t()):[])}),_(()=>(nt(_t()),t(x),t(W)),()=>{s(M,up(Jr(_t(),t(x)??"","./"),t(W)))}),_(()=>(nt(_t()),t(x)),()=>{var v;s(S,(v=_t().find(U=>U.path===t(x)))==null?void 0:v.favicon)}),_(()=>l(),()=>{s(b,l().url.searchParams.has("clean")||l().url.searchParams.has("shot"))}),_(()=>l(),()=>{s(y,l().url.searchParams.has("present"))}),_(()=>t(y),()=>{Ol.set(t(y))}),_(()=>l(),()=>{s(N,l().url.searchParams.has("shot"))}),_(()=>l(),()=>{s(pt,l().url.searchParams.has("onboard"))}),_(()=>(l(),t(Ce)),()=>{s(gt,l().url.searchParams.has("notes")||t(Ce))}),_(()=>t(gt),()=>{bl.set(t(gt))}),_(()=>(nt(de()),nt(ie()),t(gt)),()=>{s(lt,Pc({width:de(),height:ie()},t(gt)))}),_(()=>t(lt),()=>{zc(Dc(t(lt)))}),_(()=>l(),()=>{s(ut,Na(l().url.pathname))}),_(()=>Ho,()=>{s(I,window.self===window.top)}),_(()=>t(y),()=>{s(yt,Fl(t(y)))}),_(()=>(t(I),t(Ft),t(x),t(ut),t(yt)),()=>{t(I)&&t(Ft)&&t(x)&&Hl(t(ut),t(x),t(yt))}),_(()=>(t(I),t(Ft),t(b),t(y),nt(_t()),t(x),$s),()=>{t(I)&&t(Ft)&&!t(b)&&!t(y)&&Vf(_t(),t(x)??"")&&$s()}),_(()=>(t(ge),$s),()=>{t(ge)&&(t(ge).addEventListener("pointerover",$s),t(ge).addEventListener("focusin",$s))}),_(()=>(g(),t(y),$s),()=>{g()&&!t(y)&&$s()}),_(()=>(nt(_t()),t(x)),()=>{s(dt,Wf(_t(),t(x)??""))}),_(()=>(t(I),t(Ft),f(),L(),w(),i()),()=>{s(Tt,!t(I)||!t(Ft)||f()||L()||w()||i())}),_(()=>(nt(_t()),t(x)),()=>{var v;s(ht,((v=_t().find(U=>U.path===t(x)))==null?void 0:v.adjust)===!0)}),_(()=>(nt(_t()),t(x)),()=>{var v;s(st,(v=_t().find(U=>U.path===t(x)))==null?void 0:v.stepDots)}),_(()=>(nt(ms()),t(b),t(st)),()=>{s(R,ms()&&!t(b)&&t(st)!==!1)}),_(()=>(t(st),nt(Ns())),()=>{s(G,typeof t(st)=="string"?t(st):Ns())}),_(()=>(nt(qn()),nt(_t()),t(x),t(I),L(),X(),i(),w()),()=>{var v;s(it,qn()&&((v=_t().find(U=>U.path===t(x)))==null?void 0:v.stepCue)!==!1&&t(I)&&!L()&&!X()&&!i()&&!w())}),_(()=>(nt(_t()),t(x)),()=>{s(kt,pd(_t(),t(x)??""))}),_(()=>t(kt),()=>{s($t,!t(kt).present||t(kt).position<t(kt).total)}),_(()=>(t(ht),nt(Un())),()=>{s(Lt,t(ht)||Un())}),_(()=>t(Lt),()=>{tf(t(Lt))}),_(()=>l(),()=>{ef(l().url)}),_(()=>nt(gn()),()=>{Gl(gn())}),_(()=>l(),()=>{Wl(l().url)}),_(()=>nt(Bn()),()=>{ku(Bn())}),_(()=>l(),()=>{wu(l().url)}),_(()=>nt(Ot()),()=>{Ef(Ot())}),_(()=>l(),()=>{Tf(l().url)}),_(()=>nt(Qn()),()=>{Vl.set(Math.max(0,Number(Qn())||24)*60*60*1e3)}),_(()=>l(),()=>{Yl(l().url.pathname.replace(/\/+$/,""))}),_(()=>l(),()=>{{const v=Cc(l().url.searchParams);v!==null&&localStorage.setItem("canCapture",String(v))}}),_(()=>nt(ot()),()=>{s(ye,$c(!1,ta(localStorage.getItem("canCapture")),ot()))}),_(()=>(nt(se()),nt(We()),l(),nt(Ut())),()=>{td.set({stepMs:se(),pageMs:We(),useNotes:!1}),ed(l().url),nd(sd(!1,Ut()))}),_(()=>(t(ve),t(cn)),()=>{s(Rt,t(ve)?`${t(ve)===1?"1 tag":`${t(ve)} tags`} not written — see the console. `+(t(cn).length?t(cn):["not-found"]).map(v=>gs[v]).join(" "):"Save not allowed in this setup.")}),_(()=>(nt(_t()),t(x)),()=>{var v;s(Nt,(v=_t().find(U=>U.path===t(x)))==null?void 0:v.title)}),_(()=>(t(Nt),nt(fe())),()=>{s(xt,ml(t(Nt),fe()))}),_(()=>(nt(_t()),t(x),nt(Jt())),()=>{var v;s(Ct,((v=_t().find(U=>U.path===t(x)))==null?void 0:v.description)??Jt())}),_(()=>(nt(_t()),t(x),nt(ke())),()=>{var v;s(Yt,((v=_t().find(U=>U.path===t(x)))==null?void 0:v.image)??ke())}),_(()=>(nt(_t()),t(x),nt(Re())),()=>{var v;s(qt,((v=_t().find(U=>U.path===t(x)))==null?void 0:v.imageAlt)??Re())}),_(()=>(t(Ft),nt(Rn()),t(I),t(N),t(M),t(y)),()=>{t(Ft)&&cs(Rn()&&t(I)&&!Oe&&!t(N)?Sv(_v(t(M),t(y))):"")}),Nn(),hn();var Ms=xm();fl("v9c9xj",v=>{var U=vn(),ct=Wt(U);{var St=Ht=>{var le=Zh();V(()=>K(le,"href",t(S))),h(Ht,le)};H(ct,Ht=>{t(S)&&Ht(St)})}h(v,U)}),Q("keydown",Eo,On);var Hs=Wt(Ms);kl(Hs,{get title(){return t(xt)},get description(){return t(Ct)},get image(){return t(Yt)},get imageAlt(){return t(qt)},type:"website"});var Sn=d(Hs,2);let Wn;var En=u(Sn);let Ks;var zn=u(En);let ho;var ra=u(zn);{var ia=v=>{var U=tm(),ct=Wt(U);Ba(ct,n,"default",{},null);var St=d(ct,2);Hh(St,{get canvasWidth(){return de()},get canvasHeight(){return ie()}});var Ht=d(St,2);{var le=be=>{Jh(be,{get canvasWidth(){return de()},get canvasHeight(){return ie()},get position(){return t(G)},get cue(){return t(it)},get cueNext(){return A()},get cueSpent(){return Y()},get hasNextSlide(){return t($t)}})};H(Ht,be=>{t(R)&&be(le)})}var Et=d(Ht,2);yh(Et,{get canvasWidth(){return de()},get canvasHeight(){return ie()},get inkColors(){return Ts()},get levelHighlight(){return As()},get freehand(){return T()}});var Pe=d(Et,2);{var ze=be=>{{let Je=fn(()=>t(x)??"");Pr(be,{get pages(){return _t()},get width(){return de()},get height(){return ie()},get currentPath(){return t(Je)},get deck(){return t(jt)}})}};H(Pe,be=>{!t(b)&&!t(y)&&be(ze)})}var xe=d(Pe,2);{var Zn=be=>{xv(be,{get code(){return o(),at(()=>o().code)},language:"svelte",get title(){return o(),at(()=>o().path)},readOnly:!0,edit:!0,class:"gp-chrome no-print",get expanded(){return t(ce)},set expanded(Je){s(ce,Je)},$$events:{edit:()=>xa()},$$legacy:!0})};H(xe,be=>{o()&&!tt()&&be(Zn)})}var ne=d(xe,2);fd(ne,{}),h(v,U)};H(ra,v=>{t(Bt)&&v(ia)})}p(zn),Ae(zn,v=>s(oe,v),()=>t(oe)),p(En),Ae(En,v=>s(It,v),()=>t(It)),p(Sn),Ae(Sn,v=>s(pe,v),()=>t(pe));var No=d(Sn,2);{var js=v=>{var U=ym();let ct;var St=u(U);{var Ht=xe=>{$u(xe,{get width(){return de()},get height(){return ie()},kioskItem:Ee=>{var Xt=vn(),pn=Wt(Xt);{var Dn=kn=>{var Vn=em();Q("click",Vn,()=>{Ca(),document.activeElement instanceof HTMLElement&&document.activeElement.blur()}),h(kn,Vn)};H(pn,kn=>{F()&&kn(Dn)})}h(Ee,Xt)},barsItem:Ee=>{var Xt=nm(),pn=d(u(Xt),2),Dn=u(pn);Ke(2),p(pn),p(Xt),V(()=>{K(Xt,"title",f()?"Show the tool bar and the control bar again (B)":"Hide the tool bar and the control bar — Alt+. brings them back (B)"),wt(Dn,`${f()?"SHOW":"HIDE"} `)}),Q("click",Xt,function(...kn){Do==null||Do.apply(this,kn)}),h(Ee,Xt)},pointerItem:Ee=>{var Xt=sm(),pn=d(u(Xt),2),Dn=u(pn);Ke(2),p(pn),p(Xt),V(()=>{K(Xt,"title",J()?"Stop drawing the pointer — show the real cursor again (I)":"Draw a pointer where the mouse is, for screen recorders that leave the cursor out (I)"),K(Xt,"aria-pressed",J()),wt(Dn,`${J()?"HIDE":"DRAW"} PO`)}),Q("click",Xt,function(...kn){Co==null||Co.apply(this,kn)}),h(Ee,Xt)},presentBtn:Ee=>{var Xt=om();Q("click",Xt,Jn),h(Ee,Xt)},adjustGroup:Ee=>{var Xt=vn(),pn=Wt(Xt);{var Dn=kn=>{var Vn=cm(),Ye=d(Wt(Vn),2);let un;var Bs=d(Ye,2);{var to=bs=>{var xs=lm();let Us;var eo=u(xs),es=d(eo,2);{var ys=go=>{var da=im(),ar=u(da);{var nl=qs=>{var Gs=am(),pa=u(Gs,!0);p(Gs),V(()=>wt(pa,t(ln))),h(qs,Gs)};H(ar,qs=>{t(ln)!=="SAVE"&&qs(nl)})}var sl=d(ar,2);{var ol=qs=>{var Gs=rm(),pa=u(Gs,!0);p(Gs),V(()=>wt(pa,t(Rt))),h(qs,Gs)};H(sl,qs=>{t(yn)&&qs(ol)})}p(da),h(go,da)};H(es,go=>{(t(ln)!=="SAVE"||t(yn))&&go(ys)})}p(xs),V(()=>Us=Mt(xs,1,"save-btn svelte-v9c9xj",null,Us,{refused:t(yn)})),Q("click",eo,Gn),h(bs,xs)};H(Bs,bs=>{P()&&bs(to)})}V(()=>{un=Mt(Ye,1,"annot-tab adjust-tab",null,un,{on:P()}),K(Ye,"aria-pressed",P()),K(Ye,"aria-label",P()?"ADJUST on":"ADJUST off"),K(Ye,"title",P()?"ADJUST — placing blocks by hand (click to stop)":"ADJUST — drag and resize blocks at exact pixels")}),Q("click",Ye,()=>Fo.update(bs=>!bs)),h(kn,Vn)};H(pn,kn=>{D()&&kn(Dn)})}h(Ee,Xt)},printBtn:Ee=>{var Xt=pm();let pn;var Dn=u(Xt),kn=d(Dn,2);{var Vn=Ye=>{var un=dm(),Bs=u(un),to=d(Bs,2),bs=d(to,4),xs=d(bs,2),Us=d(xs,4),eo=d(Us,2);p(un),Q("click",Bs,()=>$e(!1)),Q("click",to,()=>$e(!0)),Q("click",bs,()=>me("")),Q("click",xs,()=>me("?notes")),Q("click",Us,()=>me("?grid")),Q("click",eo,()=>me("?grid&notes")),h(Ye,un)};H(kn,Ye=>{t(ft)&&Ye(Vn)})}p(Xt),V(()=>{pn=Mt(Xt,1,"print-flyout",null,pn,{open:t(ft)}),K(Dn,"aria-expanded",t(ft))}),Q("click",Dn,sn(()=>s(ft,!t(ft)))),Q("mouseenter",Xt,()=>s(ft,!0)),Q("mouseleave",Xt,()=>s(ft,!1)),h(Ee,Xt)},captureItem:Ee=>{var Xt=hm();let pn;var Dn=u(Xt);{var kn=Vn=>{var Ye=vm(),un=Wt(Ye),Bs=d(u(un),2),to=u(Bs);{var bs=es=>{var ys=um();Ke(),h(es,ys)},xs=es=>{var ys=ss();V(()=>wt(ys,t(ae))),h(es,ys)};H(to,es=>{t(ae)==="CAPTURE"?es(bs):es(xs,-1)})}p(Bs),p(un);var Us=d(un,2);{var eo=es=>{var ys=fm(),go=u(ys,!0);p(ys),V(()=>wt(go,t(Me))),h(es,ys)};H(Us,es=>{t(Me)&&es(eo)})}V(()=>un.disabled=t(Mn)),Q("click",un,At),h(Vn,Ye)};H(Dn,Vn=>{t(ye)&&Vn(kn)})}p(Xt),V(()=>pn=Mt(Xt,1,"capture-btn svelte-v9c9xj",null,pn,{refused:!!t(Me)})),h(Ee,Xt)},overviewBtn:Ee=>{var Xt=mm();Q("click",Xt,()=>{ks.set(!0),document.activeElement instanceof HTMLElement&&document.activeElement.blur()}),h(Ee,Xt)},sourceItem:Ee=>{var Xt=Xr(),pn=Wt(Xt);{var Dn=Ye=>{var un=gm();Q("click",un,()=>Or()),h(Ye,un)};H(pn,Ye=>{B()&&Ye(Dn)})}var kn=d(pn,2);{var Vn=Ye=>{var un=bm();Q("click",un,()=>xa()),h(Ye,un)};H(kn,Ye=>{C()&&Ye(Vn)})}h(Ee,Xt)},$$slots:{kioskItem:!0,barsItem:!0,pointerItem:!0,presentBtn:!0,adjustGroup:!0,printBtn:!0,captureItem:!0,overviewBtn:!0,sourceItem:!0}})};H(St,xe=>{Xn()&&xe(Ht)})}var le=d(St,2);{var Et=xe=>{Iu(xe,{tocItem:be=>{xp(be,{bar:!0,get pages(){return _t()},get deck(){return t(jt)},get article(){return is()},get articleText(){return mn()},get articleHref(){return Ie()},get returnTo(){return t(W)}})},navGroup:be=>{{let Je=fn(()=>(t(M),at(()=>t(M).first??""))),Ve=fn(()=>(t(M),at(()=>t(M).prev??""))),Le=fn(()=>(t(M),at(()=>t(M).next??""))),Tn=fn(()=>(t(M),at(()=>t(M).last??"")));xl(be,{deckLevel:!0,get firstLink(){return t(Je)},get prevLink(){return t(Ve)},get nextLink(){return t(Le)},get lastLink(){return t(Tn)}})}},$$slots:{tocItem:!0,navGroup:!0}})};H(le,xe=>{Ln()&&xe(Et)})}var Pe=d(le,2);{var ze=xe=>{Fu(xe,{get width(){return de()},get height(){return ie()},get rect(){return t(he)}})};H(Pe,xe=>{t(Ne)&&xe(ze)})}p(U),Ae(U,xe=>s(ge,xe),()=>t(ge)),V(()=>{ct=Mt(U,1,"overlay svelte-v9c9xj",null,ct,{"fade-chrome":xn()}),re(U,`--base-font:${Qe()??""};`)}),h(v,U)};H(No,v=>{t(Bt)&&!t(b)&&!t(y)&&(Xn()||Ln())&&v(js)})}var mo=d(No,2);{var la=v=>{var U=km(),ct=Wt(U);Mh(ct,{});var St=d(ct,2);Ch(St,{});var Ht=d(St,2);{let Et=fn(()=>t(x)??"");$h(Ht,{get pages(){return _t()},get currentSlide(){return t(Et)},prefix:"./",get wpm(){return an()}})}var le=d(Ht,2);{let Et=fn(()=>Xn()||Ln());nv(le,{get offered(){return rn()},get firstSlide(){return t(dt)},get suppressed(){return t(Tt)},get bars(){return t(Et)},get delayMs(){return rt()},get force(){return t(pt)},get themeClass(){return en()}})}h(v,U)};H(mo,v=>{t(Bt)&&Ho&&!t(b)&&!t(y)&&v(la)})}var Mo=d(mo,2);{var ca=v=>{var U=wm();h(v,U)};H(Mo,v=>{w()&&!t(y)&&v(ca)})}var k=d(Mo,2);{var mt=v=>{Cf(v,{get shape(){return Zt()},get size(){return we()}})};H(k,v=>{t(I)&&!t(y)&&v(mt)})}var Gt=d(k,2);{var qe=v=>{var U=Xr(),ct=Wt(U);yf(ct,{get pages(){return _t()},get width(){return de()},get height(){return ie()}});var St=d(ct,2);{let Ht=fn(()=>t(x)??"");Pr(St,{get pages(){return _t()},get width(){return de()},get height(){return ie()},get currentPath(){return t(Ht)},get deck(){return t(jt)},get present(){return t(y)}})}h(v,U)};H(Gt,v=>{t(Bt)&&t(y)&&v(qe)})}V(()=>{Wn=Mt(Sn,1,"viewport svelte-v9c9xj",null,Wn,{zoom:!t(bt),shot:t(N)}),Ks=Mt(En,1,`container ${en()??""}`,"svelte-v9c9xj",Ks,{"fit-mode":t(bt),"zoom-mode":!t(bt),clean:t(b),present:t(y),shot:t(N),"fade-chrome":xn(),"print-notes":t(gt)}),re(En,`--canvas-w:${de()??""}px; --canvas-h:${ie()??""}px; --aspect:${t(et)??""}; --base-font:${Qe()??""}; --print-scale:${t(lt),at(()=>t(lt).scale)??""}; --print-w:${t(lt),at(()=>t(lt).slideWidthPx)??""}px; --print-h:${t(lt),at(()=>t(lt).slideHeightPx)??""}px; --print-notes-h:${t(lt),at(()=>t(lt).notesHeightPx)??""}px;${wn()?` --content-bg:${wn()};`:""}${rs()?` --content-font:${rs()};`:""}`),ho=Mt(zn,1,"content svelte-v9c9xj",null,ho,{fill:on(),ready:t(Bt)})}),Q("scroll",Sn,_e),h(e,Ms),Be(),Z()}export{rg as S};
