var al=Object.defineProperty;var rr=e=>{throw TypeError(e)};var rl=(e,n,o)=>n in e?al(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o;var ir=(e,n,o)=>rl(e,typeof n!="symbol"?n+"":n,o),ua=(e,n,o)=>n.has(e)||rr("Cannot "+o);var _s=(e,n,o)=>(ua(e,n,"read from private field"),o?o.call(e):n.get(e)),bo=(e,n,o)=>n.has(e)?rr("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(e):n.set(e,o),fa=(e,n,o,r)=>(ua(e,n,"write to private field"),r?r.call(e,o):n.set(e,o),o),lr=(e,n,o)=>(ua(e,n,"access private method"),o);import"./CWj6FrbW.js";import"./DtKwcFiI.js";import{s as kt,o as Yn,a as Es,e as Q,c as ja,d as Ze,j as Qr}from"./DqT8BiWK.js";import{h as il,d as ll,bu as cl,b as dl,k as Xs,u as at,ak as je,aG as u,aI as p,aH as d,P as V,a as v,ao as Be,ap as E,am as _,al as s,G as nt,F as t,an as Nn,a7 as c,c as hn,f as Wt,ah as po,aL as ss,aJ as Ke,bv as Ge,aP as He,A as Is,aO as tn,aq as ds,aK as as,bb as pl,a2 as fn,au as Ea,bw as Eo}from"./DNDePMts.js";import{b as Ho}from"./CPwLOqZt.js";import{p as m,s as ht,a as $n}from"./BvUfqvO4.js";import{i as H}from"./7_GdhoKv.js";import{a as ul,s as Ba}from"./CTaXOB1W.js";import{h as fl}from"./CtDcGnID.js";import{a as K,s as Mt,r as os,b as re,f as hl,e as cr,c as vl}from"./Bibs0PdT.js";import{b as Ae}from"./j1QOZA1Z.js";import{i as vn}from"./3IMS1na4.js";/* empty css        */import{v as ho,a as Ta,g as Jr,d as ml}from"./Cx5l-pIF.js";import{e as Cn,i as vs}from"./D_vyVtpX.js";import{a as ro,d as Vs,b as Ko,M as dr,c as pr,e as Aa,h as gl,s as ha,f as ur,p as bl}from"./BqOB0zSo.js";import{a as ks,b as Zr}from"./CVksijcE.js";import{C as jn,b as yo,c as fr,h as yl,S as wl,a as kl,N as xl}from"./BZMwlAK_.js";import{w as Xe,g as Te,d as Qs}from"./PnW2xexJ.js";import{a as Ua,c as Ro,f as _l,g as Sl,h as El,d as Na,i as Tl,j as Al,r as va,k as hr,m as Nl,n as Ml,o as zl,q as Pl,t as Dl,u as Cl,v as $l,w as Ll,x as vr,y as Rl,z as Il,p as Ol,A as Fl,B as Hl,C as Kl}from"./B294P2l4.js";import{n as uo}from"./Dtc39OoY.js";import{d as Xo}from"./Du481A_V.js";import{s as ps}from"./DLS3rfac.js";import{a as io,c as Qo,o as jl,b as ti,r as Ma,d as za,e as mr,f as Bl,u as Ul,g as gr,h as br,j as zo,k as ql,l as ma,m as ga,n as Gl,p as Wl,q as Vl,t as Yl}from"./68IwDytr.js";import{p as Jo,b as Zo}from"./Bdzfmc_G.js";import{D as ei,E as Pa,F as Io,G as Xl,H as Ql,J as Jl,K as Zl,L as tc,M as ec,N as nc,O as sc,P as yr,Q as oc,R as ac,T as rc,U as wr,V as ic,W as lc,X as cc,Y as dc,Z as pc,_ as zs,$ as kr,a0 as uc,j as fc,a as ba,k as hc,a1 as Ws,d as vc,a2 as mc,a3 as gc}from"./DzabhgE0.js";import{r as ta,a as ni,b as bc}from"./Wk6ntuYn.js";import{a as yc}from"./Cq7-cEv1.js";import{c as qa,e as wc,i as si,s as Oo,p as kc,a as xc,b as _c,d as Sc}from"./D_QNEt50.js";import{p as Ec,b as Tc,a as jo}from"./BpTtciTW.js";import{b as lo}from"./D9aR0vt3.js";import{f as Ac,C as Nc,e as Mc,L as xr,s as zc,b as Pc,p as Dc,i as Cc,j as $c,k as Lc,l as Rc}from"./DiyAssUN.js";import{S as Ic,b as Oc,d as Fc,f as _r,a as oi,l as Hc,e as Kc,M as jc}from"./qyY91Cz4.js";import{b as Ls}from"./DTvWttpe.js";import{m as Sr,b as Bc,a as Ga,d as Uc,e as qc,f as Er,g as Bo,D as ai,h as ri,i as ii,j as li,l as Cs,o as Da,p as ci,q as di,r as Tr,t as pi,u as Uo,v as ui,w as Ca,x as Gc,y as Wc,z as Vc,A as ya,B as Yc,C as Xc,E as Qc,F as Jc,k as Zc,G as td,H as ed,I as nd,J as sd,K as od}from"./BSA_hR_d.js";import{B as ad}from"./-IJ4smzM.js";function fi(e){return function(...n){var o=n[0];o.target===this&&(e==null||e.apply(this,n))}}function sn(e){return function(...n){var o=n[0];return o.stopPropagation(),e==null?void 0:e.apply(this,n)}}function hi(e){return function(...n){var o=n[0];return o.preventDefault(),e==null?void 0:e.apply(this,n)}}const rd=Symbol("NaN");function id(e,n,o){il&&ll();var r=new ad(e),a=!cl();dl(()=>{var i=n();i!==i&&(i=rd),a&&i!==null&&typeof i=="object"&&(i={}),r.ensure(i,o)})}var Rs,co,Ao,Vo,vi;const Yo=class Yo{constructor(n){bo(this,Vo);bo(this,Rs,new WeakMap);bo(this,co);bo(this,Ao);fa(this,Ao,n)}observe(n,o){var r=_s(this,Rs).get(n)||new Set;return r.add(o),_s(this,Rs).set(n,r),lr(this,Vo,vi).call(this).observe(n,_s(this,Ao)),()=>{var a=_s(this,Rs).get(n);a.delete(o),a.size===0&&(_s(this,Rs).delete(n),_s(this,co).unobserve(n))}}};Rs=new WeakMap,co=new WeakMap,Ao=new WeakMap,Vo=new WeakSet,vi=function(){return _s(this,co)??fa(this,co,new ResizeObserver(n=>{for(var o of n){Yo.entries.set(o.target,o);for(var r of _s(this,Rs).get(o.target)||[])r(o)}}))},ir(Yo,"entries",new WeakMap);let $a=Yo;var ld=new $a({box:"border-box"});function ao(e,n,o){var r=ld.observe(e,()=>o(e[n]));Xs(()=>(at(()=>o(e[n])),r))}function cd(e){return typeof e!="string"?"":e.replace(/\/+$/,"").split("/").pop()??""}const dd=e=>!Number.isFinite(e)||e<=0?0:e>=1?1:e;function pd(e,n){const o=Array.isArray(e)?e.filter(f=>!!f&&typeof f=="object"):[],r=ho(o),a=r.length,i=typeof n=="string"?n:"",l=i?r.findIndex(f=>f.path===i):-1;if(l<0)return{index:-1,position:0,total:a,fraction:0,present:!1};const g=l+1;return{index:l,position:g,total:a,fraction:dd(g/a),present:!0}}var ud=E('<div class="copyright svelte-i2qyxc"><span class="text svelte-i2qyxc"> </span> <span class="hover-text svelte-i2qyxc"><a target="_blank">Copyright <b> </b> </a></span></div>');function fd(e,n){je(n,!1);let o=m(n,"name",24,()=>Ta.copyright.name),r=m(n,"url",24,()=>Ta.copyright.url),a=m(n,"year",24,()=>new Date().getFullYear().toString());vn();var i=ud(),l=u(i),g=u(l);p(l);var f=d(l,2),L=u(f),k=d(u(L)),X=u(k);p(k);var j=d(k);p(L),p(f),p(i),V(()=>{kt(g,`© ${o()??""} ${a()??""}`),K(L,"href",r()),kt(X,`${o()??""} <${r()??""}>`),kt(j,` ${a()??""}`)}),v(e,i),Be()}const hd=/<(script|style)\b[\s\S]*?<\/\1>/gi,vd=/<!--[\s\S]*?-->/g,md=/\{[^{}]*\}/g,gd=/<[^>]+>/g,bd=/\s+/g,yd={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&nbsp;":" "};function wd(e){if(typeof e!="string")return"";let n=e.replace(hd," ").replace(vd," ").replace(md," ").replace(gd," ");for(const[o,r]of Object.entries(yd))n=n.split(o).join(r);return n.replace(bd," ").trim()}function kd(e){const n={};for(const[o,r]of Object.entries(e??{})){if(typeof o!="string")continue;const a=o.match(/\/src\/routes\/(.+)\/([^/]+)\/\+page\.svelte$/);if(!a)continue;const i=a[2];if(!i||!i.endsWith(".html"))continue;const l=a[1].replace(/\/\([^/]+\)/g,"").replace(/^\([^/]+\)\//,"").replace(/\/{2,}/g,"/").replace(/^\/+|\/+$/g,"");if(!l||l.startsWith("_"))continue;const g=l.replace(/\//g,"-");(n[g]??(n[g]={}))[i]=wd(r)}return n}function xd(e,n,o=48){if(typeof e!="string"||!n)return"";const r=e.toLowerCase().indexOf(n.toLowerCase());if(r<0)return"";const a=Math.max(0,r-o),i=Math.min(e.length,r+n.length+o),l=a>0?"…":"",g=i<e.length?"…":"";return`${l}${e.slice(a,i).trim()}${g}`}function _d(e){return typeof e!="string"?"":e.replace(/\.html?$/i,"")}function mi(e,n){const o=(typeof n=="string"?n:"").trim().toLowerCase();if(!o)return[];const r=[];for(const a of e??[]){if(!a)continue;const i=typeof a.title=="string"?a.title:"",l=typeof a.text=="string"?a.text:"",g=_d(a.path),f=Number.isFinite(a.number)?a.number:void 0;i.toLowerCase().includes(o)?r.push({path:a.path,title:i,snippet:"",where:"title",number:f}):g.toLowerCase().includes(o)?r.push({path:a.path,title:i,snippet:a.path,where:"path",number:f}):f!=null&&String(f).includes(o)?r.push({path:a.path,title:i,snippet:`#${f}`,where:"number",number:f}):l.toLowerCase().includes(o)&&r.push({path:a.path,title:i,snippet:xd(l,o),where:"body",number:f})}return r}function gi(e,n,o){const r=Number.isFinite(o)?Math.floor(o):0;if(r<=0)return-1;const a=Number.isFinite(n)?Math.floor(n):0,i=Number.isFinite(e)?Math.floor(e):-1;return i<0||i>=r?a<0?r-1:0:((i+a)%r+r)%r}const Sd=`<!-- Framework route — the code lives in $lib/framework (shipped in @geekpresent/core).
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
`,zd=`<!--
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
`,Pd=`<!--
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

<Shot kicker="usable · 3 / 4" title="Clipboard" size={120}>
	<p class="d-sub">Need a value somewhere else? Copy it, without showing it.</p>
	<div class="rest">
		<div class="term">
			<Terminal
				typing={false}
				controls={false}
				title="Folio"
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
		For a value you need somewhere else, \`dash c\` copies it to the clipboard, and clears it after
		forty-five seconds.
	</p>
	<!--
		The long version (the 5:15 video) says this instead. Kept for that video; not read out
		for the Short.

		<p>
			If you want an item's value to be used somewhere else, not in an application directly, you can
			use \`dash c\` to put the value on the clipboard, and paste it wherever you want.
		</p>
		<p>The clipboard will hold the value for forty-five seconds, and then it is cleared.</p>
		<p>A plain text, though, stays there.</p>
	-->
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
			alt="Folio logo"
			style="view-transition-name: ep-logo"
		/>
		<div class="name" style="view-transition-name: ep-name">Folio</div>
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
	<p class="punch">Keep your secrets<br />out of sight.</p>
	<p class="more">
		<a href="{base}/">All episodes</a> ·
		<a href="https://github.com/NawaMan/EnvFolio#readme">README</a>
	</p>
</Shot>

<Note>
	<p>Get Folio from GitHub or Homebrew.</p>
	<p>Keep your secrets out of sight.</p>
	<!--
		The long version (the 5:15 video) says this instead. Kept for that video; not read out
		for the Short.

		<p>Get Folio from GitHub or Homebrew, or install it directly using the install script.</p>
		<p>There is also an article version of this video in the link here.</p>
		<p>Keep your secrets out of sight.</p>
	-->
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
  key — trusted, 1: Folio stands on GPG. The store key is your own GPG key, in your own
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
		Folio does not do any cryptographic operations by itself: it delegates all of those to GPG and
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

<Shot kicker="usable · 1 / 4" title="Name it your way" size={110}>
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
	<p>Last, usability. Folio comes with many conveniences.</p>
	<p>
		For example, each item becomes a variable named from its path, or you can pick the name
		yourself.
	</p>
	<!--
		The long version (the 5:15 video) says this instead. Kept for that video; not read out
		for the Short.

		<p>Next, usability.</p>
		<p>There are many things here. One of them is the naming.</p>
		<p>
			Folio automatically converts the names of the items into variable names, so you don't need to
			type them all the time.
		</p>
		<p>But if you want, you can name one explicitly, and Folio will happily use it.</p>
		<p>
			Lastly, you can use namespaces to organize your items, for example to have GitHub tokens for
			different accounts.
		</p>
	-->
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
	<p>Third, portable.</p>
	<p>Folio \`export\` puts just what you need into one locked file.</p>
	<p>A new key will be created specifically for that locked file.</p>
	<p>Your local store's key stays there; it never leaves the computer.</p>
	<p>
		Then you can import it somewhere else, or use the file directly as the store, on any remote
		machine you need.
	</p>
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
`,Hd=`<!--
  readable — trusted, 3: a text is plain, and gpg signs it with the store's key; a text changed
  outside Folio, or signed by another key, is refused (MANUAL \`insert text\`: "signed with the
  store's key as <name>.txt.sig, so a changed text can be told"; \`show text\`: checking needs no
  passphrase; _A text changed outside Folio is not shown_; README _Texts and secrets_). And
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
	sub="<code>gpg</code> signs each one with your key. A text changed behind Folio's back is refused."
	shown={7}
	fresh={1}
/>

<Note>
	<p>
		Plain text items stay plain, and they are stored in the same folder structure as the secrets.
	</p>
	<p>That is, they follow the \`pass\` structure.</p>
	<p>Additionally, Folio uses GPG to sign the text value to ensure its integrity.</p>
</Note>
`,Kd=`<!--
  script — trusted, 4: Folio is one bash script, plain text you can read; check the folio you
  installed against the SHA256SUMS its release publishes (install.sh checks the download
  too); plain, linear bash, so anyone can read it and see that no secret is sent anywhere (README
  _Install_, _Design principles_). Having an AI read it is the viewer's own check, not a claim
  about Folio.

  The terminal, printed whole (no typing, no steps), is real output from demos/ep002/capture.sh: a real 1.1.0 install (Folio's own
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
			title="Folio"
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
	<p>To further the trustworthiness, Folio is implemented as one single bash script.</p>
	<p>It might be long, but it can be read from top to bottom.</p>
	<p>
		You can ask an AI to read it for you, and check if the handling of secrets is proper and secure.
	</p>
	<p>
		Also, with a very limited list of dependencies, such as GPG, pass and git, there is no place to
		hide any misbehavior.
	</p>
</Note>

<style>
	/* The Terminal fills its box: a box just tall enough for its lines, so no empty space below. */
	.term {
		height: 770px;
	}
</style>
`,jd=`<!--
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
			title="Folio"
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
	<p>Second, being secure.</p>
	<p>Folio exec turns each item into a variable, and hands it directly to the command.</p>
	<p>No need to show it to you, to save it to a file, or to copy it to the clipboard.</p>
	<p>Nothing to clean up afterward. Nothing in your shell history.</p>
</Note>

<style>
	/* The Terminal fills its box: a box just tall enough for its lines, so no empty space below. */
	.term {
		height: 600px;
	}
</style>
`,Bd=`<!--
  start — the question a new secret manager has to answer, and the four answers this episode
  gives, one section each: trusted, secure, portable, usable. Each answer's line is a fact from
  ../EnvFolio README (_Built on \`pass\`_, _Security model_, _Easy to move_, _Naming the variables_,
  _Vars files_) and MANUAL (_Never asked_, _Leave no passphrase behind_).
-->
<script>
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
<\/script>

<Shot kicker="EP002 · by design" title="Why & How Folio?" size={90}>
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
	<p>In this video, I will discuss how Folio is designed and built to be:</p>
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
`,Ud=`<!--
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
	<p>The secret store is managed by \`pass\`, another trusted, standard Unix tool.</p>
	<p>So we get the same file and folder structure, and the encryption is done by \`pass\`.</p>
	<p>
		In fact, if you stop using Folio, the existing secrets in the store can be read by just using
		\`pass\`.
	</p>
</Note>
`,qd=`<!--
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

<Shot kicker="usable · 4 / 4" title="Three ways to unlock" size={90}>
	<p class="d-sub">How often you type the passphrase is up to you.</p>
	<div class="rest">
		<div class="ways">
			<div class="way normal">
				<div class="head">
					<span class="d-tag">default</span><span class="when">asked once, then a while</span>
				</div>
				<code>pinentry</code>
				<div class="what">gpg-agent remembers it · the default</div>
			</div>
			<div class="way">
				<div class="head"><span class="d-tag">auto</span><span class="when">never asked</span></div>
				<code>FOLIO_STORE_PASSPHRASE_FILE</code>
				<div class="what">a file only you can read · a machine you trust</div>
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
	<p>
		And you choose how often to type your passphrase: once in a while by default, never on a machine
		you fully trust, or every time on one you don't.
	</p>
	<!--
		The long version (the 5:15 video) says this instead. Kept for that video; not read out
		for the Short.

		<p>Folio (or more like GPG) will ask you for the key passphrase to decrypt the value.</p>
		<p>Folio provides 3 ways to control how the passphrase caching is done.</p>
		<p>
			By default, you will be asked once, and the GPG agent will remember it for an amount of time.
		</p>
		<p>With auto mode, you put the passphrase in a file, and Folio will use it from there.</p>
		<p>This should be done only on a fully trusted machine, and mostly for automation.</p>
		<p>Strict mode: Folio will ask every time a passphrase is needed.</p>
		<p>It can be useful on a machine you are not sure you can trust.</p>
	-->
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
`,Gd=`<!--
  title — the Folio mark, big, alone on the slide. One line of narration: the bridge from EP001.

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
		<div class="name" style="view-transition-name: ep-name">Folio</div>
	</div>
</EmptyPage>
<Note>
	<p>In the previous video, I introduced you to EnvFolio or just Folio -- a secret manager.</p>
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
</style>
`,Wd=`<!--
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

<Shot kicker="usable · 2 / 4" title="A vars file" size={120}>
	<p class="d-sub">List what a command needs, by its own names. No value inside.</p>
	<div class="rest">
		<div class="term">
			<Terminal
				typing={false}
				controls={false}
				title="Folio"
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
			<dt><code class="t">@&#123;name&#125;</code></dt>
			<dd>an item from the store</dd>
			<dt><code class="env">$&#123;NAME&#125;</code></dt>
			<dd>an environmental variable from the running shell</dd>
			<dt><code>:-</code></dt>
			<dd>a fallback, when the item is not there</dd>
		</dl>
	</div>
</Shot>

<Note>
	<p>
		A vars file lists what a project needs, with no value in it, so you can commit it with the code.
	</p>
	<!--
		The long version (the 5:15 video) says this instead. Kept for that video; not read out
		for the Short.

		<p>
			A vars file stores a list of the environment variables you will need, and where each value comes
			from.
		</p>
		<p>Think of it as a \`.env\` example, or a \`.env\` template, something like that.</p>
		<p>
			It holds no value by itself, so you can commit it with the code, as a document of which
			environment variables the application needs.
		</p>
	-->
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
`,Vd=`<!--
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
			title="Folio"
			style="--terminal-ok: var(--ep-text); --terminal-warn: var(--ep-secret); font-size: 0.75em"
			lines={[
				{ cmd: 'folio ls gh' },
				{ out: 'Folio Store', tone: 'muted' },
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
`,Yd=`<!--
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
		<img class="logo" src="{base}/logo-dark.svg" alt="Folio logo" />
		<div class="name">Folio</div>
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
	<p>Get Folio from GitHub, with Homebrew, or with the install script.</p>
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
`,Xd=`<!--
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
				title="Folio"
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
`,Qd=`<!--
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
			title="Folio"
			style="--terminal-ok: var(--ep-text); --terminal-warn: var(--ep-secret); font-size: 0.62em; height: auto"
			lines={[{ cmd: 'folio insert text -t demo@example.com gh/user' }]}
		/>
		<p style="padding-bottom: 0px; margin-bottom: 0px;">Insert secret item.</p>
		<StepTerminal
			{...pace}
			title="Folio"
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
`,Jd=`<!--
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
`,Zd=`<!--
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
			title="Folio"
			style="--terminal-ok: var(--ep-text); --terminal-warn: var(--ep-secret); font-size: 0.75em"
			lines={[
				{ cmd: 'folio ls' },
				{ out: 'Folio Store', tone: 'muted' },
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
`,tp=`<!--
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
`,ep=`<!--
  7 · shell — the same items, for a whole session: names printed, never values; \`exit\` leaves.

  Real \`folio shell\` output from demos/ep003/capture.sh (a sandbox store, fake values). There the
  commands are piped into the shell; here they are typed at its prompt. \`gh repo list\` is not
  from the capture: it stands for a real command that uses an item (gh reads GH_TOKEN by itself),
  so its reply is left out (\`…\`); the sandbox token is fake.

  Inside folio's shell the prompt reads \`%\`, on a band: that stands for your own prompt. Each
  line's background and prompt are set in \`session\` below.
  Folio does not change the prompt; it sets FOLIO_SHELL=1 so yours can show it (MANUAL
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
				title="Folio"
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
`,np=`<!--
  1 · start — the episode in one list: install, init, insert, ls, exec / shell.
-->
<script>
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
<\/script>

<Shot kicker="EP003 · get started" title="Getting started with Folio" size={110}>
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
	<p>Let's get you started with \`Folio\`.</p>
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
`,sp=Object.assign({"/src/routes/_handout/[deck].html/+page.svelte":Sd,"/src/routes/ep001-envfolio-intro/anywhere.html/+page.svelte":Ed,"/src/routes/ep001-envfolio-intro/exec-multiple.html/+page.svelte":Td,"/src/routes/ep001-envfolio-intro/exec.html/+page.svelte":Ad,"/src/routes/ep001-envfolio-intro/get-it.html/+page.svelte":Nd,"/src/routes/ep001-envfolio-intro/meet.html/+page.svelte":Md,"/src/routes/ep001-envfolio-intro/problem.html/+page.svelte":zd,"/src/routes/ep001-envfolio-intro/spread.html/+page.svelte":Pd,"/src/routes/ep001-envfolio-intro/texts-and-secrets.html/+page.svelte":Dd,"/src/routes/ep001-envfolio-intro/trust.html/+page.svelte":Cd,"/src/routes/ep001-envfolio-intro/vars.html/+page.svelte":$d,"/src/routes/ep002-by-design/clipboard.html/+page.svelte":Ld,"/src/routes/ep002-by-design/get-it.html/+page.svelte":Rd,"/src/routes/ep002-by-design/key.html/+page.svelte":Id,"/src/routes/ep002-by-design/names.html/+page.svelte":Od,"/src/routes/ep002-by-design/portable.html/+page.svelte":Fd,"/src/routes/ep002-by-design/readable.html/+page.svelte":Hd,"/src/routes/ep002-by-design/script.html/+page.svelte":Kd,"/src/routes/ep002-by-design/secure.html/+page.svelte":jd,"/src/routes/ep002-by-design/start.html/+page.svelte":Bd,"/src/routes/ep002-by-design/store.html/+page.svelte":Ud,"/src/routes/ep002-by-design/three-ways.html/+page.svelte":qd,"/src/routes/ep002-by-design/title.html/+page.svelte":Gd,"/src/routes/ep002-by-design/vars.html/+page.svelte":Wd,"/src/routes/ep003-get-started/exec.html/+page.svelte":Vd,"/src/routes/ep003-get-started/get-it.html/+page.svelte":Yd,"/src/routes/ep003-get-started/init.html/+page.svelte":Xd,"/src/routes/ep003-get-started/insert.html/+page.svelte":Qd,"/src/routes/ep003-get-started/install.html/+page.svelte":Jd,"/src/routes/ep003-get-started/ls.html/+page.svelte":Zd,"/src/routes/ep003-get-started/more.html/+page.svelte":tp,"/src/routes/ep003-get-started/shell.html/+page.svelte":ep,"/src/routes/ep003-get-started/start.html/+page.svelte":np}),op=kd(sp);function ap(e,n){var o;return((o=op[e])==null?void 0:o[n])??""}function bi(e,n){return(n??[]).map((o,r)=>({path:o.path,title:o.title,text:ap(e,o.path),number:r+1}))}const Os=Xe(!1),Fs=Xe(!1),yi=Xe(0),wi=Xe(0);let Ys;const ki=5e3;function ea(e=ki){Os.set(!0),Ys&&clearTimeout(Ys),Ys=setTimeout(()=>{Os.set(!1),Ys=void 0},e)}function xi(){Os.set(!1),Fs.set(!1),Ys&&(clearTimeout(Ys),Ys=void 0)}function Ar(){Fs.set(!0)}function ns(){Fs.set(!1)}function _i(){const e=!Te(Fs);return Fs.set(e),e}function Kn(e=ki){Te(Os)&&ea(e)}function rp(){yi.update(e=>e+1),ea()}function ip(){wi.update(e=>e+1),ea()}const La="return",Si=",",lp=/^[A-Za-z0-9][A-Za-z0-9._-]*$/;function fo(e){return typeof e!="string"||e.length===0||e.length>128||e.includes("..")?!1:lp.test(e)}function Wa(e){if(typeof e!="string"||!e.trim())return[];let n=e.trim();try{n.includes("%")&&(n=decodeURIComponent(n))}catch{}return n.split(Si).map(o=>o.trim()).filter(fo)}function Ei(e){return!Array.isArray(e)||!e.length?"":e.filter(fo).join(Si)}function Ti(e){return e?Wa(e.get(La)):[]}function Ai(e){const n=typeof e=="string"?e.trim():"";return n?`gp-catalog-return:${n}`:"gp-catalog-return"}function Nr(e,n){return!e||!fo(e)?!1:!(Array.isArray(n)?n:[]).some(r=>r&&r.path===e)}function cp(e,n,o,r=null){const a=Ti(e);if(!o)return a;try{const i=Wa(o.getItem(Ai(n)));return a.length?i.length?Ni(i,a,r):a:i}catch{return a}}function Ni(e,n,o=null){const r=Array.isArray(e)?e.filter(fo):[],a=Array.isArray(n)?n.filter(fo):[];if(!a.length)return r;if(!r.length||a.length>=r.length&&r.every((i,l)=>a[l]===i))return a;if(r.length>a.length){const i=r.length-a.length;if(a.every((l,g)=>r[i+g]===l))return r}if(o){const i=[];for(const l of r)if(Nr(l,o))i.push(l);else break;if(i.length&&a.every(l=>!Nr(l,o))&&!i.every((l,g)=>a[g]===l))return[...i,...a]}return a}function dp(e,n,o,r=null){var i;if(!o)return;const a=Ti(e);if(a.length)try{const l=Ai(n);let g=[];try{g=Wa(((i=o.getItem)==null?void 0:i.call(o,l))??null)}catch{g=[]}const f=Ni(g,a,r);o.setItem(l,Ei(f))}catch{}}function Mi(e,n){if(!e||e.includes(`${La}=`))return e;const o=Array.isArray(n)?Ei(n):n&&fo(n)?n:"";if(!o)return e;const r=e.includes("?")?"&":"?";return`${e}${r}${La}=${encodeURIComponent(o)}`}function pp(e,n){const o=r=>r?Mi(r,n):void 0;return{first:o(e.first),last:o(e.last),prev:o(e.prev),next:o(e.next)}}var up=E('<div id="article" class="svelte-1km5eyp"><a class="svelte-1km5eyp"> </a></div>'),fp=E('<span class="snippet svelte-1km5eyp"> </span>'),hp=E('<li><a class="svelte-1km5eyp"><span class="hit-title svelte-1km5eyp"> </span> <!></a></li>'),vp=E('<ol class="results svelte-1km5eyp" aria-label="Search results"></ol>'),mp=E('<p class="no-matches svelte-1km5eyp" role="status"> </p>'),gp=E('<li><a class="svelte-1km5eyp"> </a></li>'),bp=E('<ol class="svelte-1km5eyp"></ol>'),yp=E('<div class="content svelte-1km5eyp"><div class="head svelte-1km5eyp"><!> <input class="search svelte-1km5eyp" type="search" placeholder="Search slides…" aria-label="Search slides"/></div> <div class="scroll svelte-1km5eyp"><!></div></div>'),wp=E("<div><!> <!></div>");function kp(e,n){je(n,!1);const o=()=>ht(Ua,"$page",a),r=()=>ht(M,"$isContentVisible",a),[a,i]=$n(),l=c(),g=c(),f=c(),L=c(),k=c(),X=c(),j=c();let D=m(n,"pages",24,()=>[]),z=m(n,"deck",8,""),F=m(n,"docs",8,null),B=m(n,"returnTo",8,null);function C(R){return Mi(`./${R}`,B())}let O=c(""),$=c(-1),tt=c("");function J(R){s($,gi(t($)<0?t(j):t($),R,t(X).length))}function q(){var wt;const R=t($)<0&&t(k)?0:t($),G=(wt=t(W))==null?void 0:wt.querySelectorAll(".scroll ol li a"),it=G==null?void 0:G[R];return it?(it.click(),y(),!0):!1}function Z(R){return R.key==="ArrowDown"?(J(1),!0):R.key==="ArrowUp"?(J(-1),!0):R.key==="Enter"?q():!1}let bt=m(n,"article",8,!1),et=m(n,"bar",8,!1),x=m(n,"articleText",8,"View as article"),P=m(n,"articleHref",8,"../text.html"),W=c(),M=Xe(!1);const S=yi.subscribe(R=>{R>0&&M.set(!0)});function b(){M.update(R=>!R)}function y(){M.update(R=>!1)}function N(){t(k)?s(O,""):y()}function pt(R){if(r()){if(R.key==="Escape"){R.preventDefault(),N();return}Z(R)&&R.preventDefault()}}function gt(R){if(R.stopPropagation(),R.key==="Escape"){R.preventDefault(),N();return}Z(R)&&R.preventDefault()}function lt(R){R.focus()}function ut(R,G){const it=wt=>{wt&&typeof R.scrollIntoView=="function"&&R.scrollIntoView({block:"nearest"})};return it(G),{update:it}}function I(R){t(W)&&!t(W).contains(R.target)&&y()}Yn(()=>{window.addEventListener("keydown",pt),document.addEventListener("click",I)}),Es(()=>{S(),window.removeEventListener("keydown",pt),document.removeEventListener("click",I)}),_(()=>nt(D()),()=>{s(l,ho(D()))}),_(()=>o(),()=>{s(g,cd(o().url.pathname))}),_(()=>(nt(F()),nt(z()),t(l)),()=>{s(f,F()??bi(z(),t(l)))}),_(()=>(t(f),t(O)),()=>{s(L,mi(t(f),t(O)))}),_(()=>t(O),()=>{s(k,t(O).trim().length>0)}),_(()=>(t(k),t(L),t(l)),()=>{s(X,t(k)?t(L):t(l))}),_(()=>(t(O),t(tt)),()=>{t(O)!==t(tt)&&(s(tt,t(O)),s($,-1))}),_(()=>(t(k),t(l),t(g)),()=>{s(j,t(k)?-1:t(l).findIndex(R=>R.path===t(g)))}),Nn(),vn();var yt=wp();let dt;var Tt=u(yt);jn(Tt,{chrome:!0,text:"Table of Contents",hoverText:"Table of Contents",mnemonic:"T",get isSelected(){return r()},$$events:{click:b}});var vt=d(Tt,2);{var st=R=>{var G=yp(),it=u(G),wt=u(it);{var $t=xt=>{var Ct=up(),Yt=u(Ct),qt=u(Yt,!0);p(Yt),p(Ct),V(()=>{K(Yt,"href",P()),kt(qt,x())}),v(xt,Ct)};H(wt,xt=>{bt()&&xt($t)})}var Lt=d(wt,2);os(Lt),Xs(()=>ks(Lt,()=>t(O),xt=>s(O,xt))),Xs(()=>Q("keydown",Lt,gt)),ro(Lt,xt=>lt==null?void 0:lt(xt)),p(it);var ye=d(it,2),jt=u(ye);{var Rt=xt=>{var Ct=hn(),Yt=Wt(Ct);{var qt=Qt=>{var _t=vp();Cn(_t,5,()=>t(L),vs,(fe,Jt,we)=>{let Re=()=>t(Jt).path,de=()=>t(Jt).title,ie=()=>t(Jt).snippet;var Qe=hp();let en;var on=u(Qe),kn=u(on),rs=u(kn,!0);p(kn);var is=d(kn,2);{var mn=Ie=>{var xn=fp(),Ln=u(xn,!0);p(xn),V(()=>kt(Ln,ie())),v(Ie,xn)};H(is,Ie=>{ie()&&Ie(mn)})}p(on),ro(on,(Ie,xn)=>ut==null?void 0:ut(Ie,xn),()=>we===t($)),p(Qe),V(Ie=>{en=Mt(Qe,1,"svelte-1km5eyp",null,en,{current:Re()===t(g),selected:we===t($)}),K(on,"href",Ie),K(on,"aria-current",Re()===t(g)?"page":void 0),kt(rs,de())},[()=>(Re(),at(()=>C(Re())))]),v(fe,Qe)}),p(_t),v(Qt,_t)},ce=Qt=>{var _t=mp(),fe=u(_t);p(_t),V(Jt=>kt(fe,`No slides match “${Jt??""}”.`),[()=>(t(O),at(()=>t(O).trim()))]),v(Qt,_t)};H(Yt,Qt=>{t(L),at(()=>t(L).length)?Qt(qt):Qt(ce,-1)})}v(xt,Ct)},Nt=xt=>{var Ct=bp();Cn(Ct,5,()=>t(l),vs,(Yt,qt,ce)=>{let Qt=()=>t(qt).path,_t=()=>t(qt).title;var fe=gp();let Jt;var we=u(fe),Re=u(we,!0);p(we),ro(we,(de,ie)=>ut==null?void 0:ut(de,ie),()=>t($)<0?Qt()===t(g):ce===t($)),p(fe),V(de=>{Jt=Mt(fe,1,"svelte-1km5eyp",null,Jt,{current:Qt()===t(g),selected:ce===t($)}),K(we,"href",de),K(we,"aria-current",Qt()===t(g)?"page":void 0),kt(Re,_t())},[()=>(Qt(),at(()=>C(Qt())))]),v(Yt,fe)}),p(Ct),v(xt,Ct)};H(jt,xt=>{t(k)?xt(Rt):xt(Nt,-1)})}p(ye),p(G),v(R,G)};H(vt,R=>{r()&&R(st)})}p(yt),Ae(yt,R=>s(W,R),()=>t(W)),V(()=>dt=Mt(yt,1,"toc gp-chrome no-print svelte-1km5eyp",null,dt,{expanded:r(),bar:et()})),v(e,yt),Be(),i()}const ws=Xe(!1),xp=Xe(!1),Ps=Xe(!1),_p="/__geekpresent/page-add",Sp="/__geekpresent/page-remove",Ep="/__geekpresent/page-duplicate",Tp="/__geekpresent/page-rename",Ap="/__geekpresent/page-refs";async function na(e,n){let o;try{o=await fetch(e,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(n)})}catch{return{error:"network error — is the dev server running?"}}let r={};try{r=await o.json()}catch{r={error:o.ok?"empty response":`HTTP ${o.status}`}}return o.ok?{ok:!0,...r}:{error:r.error||`HTTP ${o.status}`}}async function Np(e){return na(_p,{deck:e.deck,path:e.path,title:e.title,template:e.template,after:e.after??null})}async function Mp(e){return na(Sp,{deck:e.deck,path:e.path,deleteFiles:!!e.deleteFiles})}async function zp(e){return na(Ep,e)}async function Pp(e){return na(Tp,e)}async function Dp(e,n){try{const o=await fetch(`${Ap}?deck=${encodeURIComponent(e)}&path=${encodeURIComponent(n)}`);if(!o.ok)return[];const r=await o.json();return Array.isArray(r.refs)?r.refs:[]}catch{return[]}}const zi=/^[a-z0-9][a-z0-9-]*$/;function wa(e){const n=String(e??"").normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").replace(/-+/g,"-");return!n||!zi.test(n)?"slide":n.length>48?n.slice(0,48).replace(/-+$/,"")||"slide":n}function Cp(e){let n=String(e??"").trim().toLowerCase();if(!n||n.includes("/")||n.includes("\\")||n.includes(".."))return null;n=n.replace(/^\.+/,""),n.endsWith(".html")||(n=n.replace(/\.html?$/i,""),n=`${n}.html`);const o=n.replace(/\.html$/i,"");return zi.test(o)?`${o}.html`:null}function Po(e,n=0){return Number.isFinite(e)?e:n}function Mr(e,n,o,r){const a=Po(e),i=Po(n),l=Po(o),g=Po(r);return a<=0||i<=0||l<=0||g<=0?0:Math.min(a/l,i/g)}function $p(e,n){return ho(Array.isArray(e)?e:[]).map((r,a)=>({number:a+1,path:r.path,title:r.title,src:`./${r.path}?clean`,isCurrent:r.path===n}))}function Lp(e,n){const o=Array.isArray(e)?e:[],r=(typeof n=="string"?n:"").trim().toLowerCase();return r?o.filter(a=>{if(!a)return!1;const i=typeof a.title=="string"?a.title:"",l=typeof a.path=="string"?a.path:"",g=l.replace(/\.html$/i,""),f=String(a.number??"");return i.toLowerCase().includes(r)||l.toLowerCase().includes(r)||g.toLowerCase().includes(r)||f.includes(r)}):o}function Va(e){const n=e;return n?n.isContentEditable?!0:/^(INPUT|TEXTAREA|SELECT)$/.test(n.tagName??""):!1}function Rp(e,n){return e.ctrlKey||e.metaKey||e.altKey||Va(e.target)?"ignore":e.key==="Escape"?n?"close":"ignore":e.defaultPrevented?"ignore":e.key==="o"||e.key==="O"?n?"close":"open":"ignore"}function Ip(e,n){const o=new Set;for(const r of e)Number.isFinite(r)&&o.add(r);return Number.isFinite(n)&&n>0&&o.add(n),o}function Op(e,n){return n?n.bottom<e.top?"above":n.top>e.bottom?"below":"visible":"unknown"}function Fp(e,n=1){if(e.length===0)return 1;const o=e[0];let r=0;for(const a of e){if(Math.abs(a-o)>n)break;r++}return Math.max(1,r)}function Hp(e,n){return!Number.isFinite(e)||!Number.isFinite(n)||n<=0?1:Math.max(1,Math.floor(e/n))}function Kp(e,n,o,r,a){if(n<=0)return 0;const i=Math.max(1,o),l=Math.max(1,r);switch(a){case"left":return Math.min(n,Math.max(1,e-1));case"right":return Math.min(n,Math.max(1,e+1));case"up":return Math.min(n,Math.max(1,e-i));case"down":return Math.min(n,Math.max(1,e+i));case"pageUp":return Math.min(n,Math.max(1,e-i*l));case"pageDown":return Math.min(n,Math.max(1,e+i*l));case"first":return 1;case"last":return n}}function jp(e){if(e.ctrlKey||e.metaKey||e.altKey||Va(e.target))return"ignore";switch(e.key){case"ArrowLeft":return"left";case"ArrowRight":return"right";case"ArrowUp":return"up";case"ArrowDown":return"down";case"Home":return"first";case"End":return"last";case"PageUp":return"pageUp";case"PageDown":return"pageDown";case"Enter":return"commit";case" ":case"Spacebar":return"toCurrent";default:return"ignore"}}var Bp=E('<button type="button" class="status-open svelte-1szb2dn">Open</button>'),Up=E("<span> <!></span>"),qp=E('<span class="current-arrow svelte-1szb2dn" aria-hidden="true">▲</span>'),Gp=E('<span class="current-arrow svelte-1szb2dn" aria-hidden="true">▼</span>'),Wp=E(`<button type="button" title="Scroll to the slide you're on"><!>CURRENT</button>`),Vp=E('<button type="button" class="edit-btn add-head-btn svelte-1szb2dn" title="Add a slide at the end of the deck">ADD</button>'),Yp=E('<kbd class="edit-kbd svelte-1szb2dn">E</kbd>'),Xp=E('ADD · + between · ✎ rename · ⧉ duplicate · × remove · <kbd class="svelte-1szb2dn">E</kbd> done · <kbd class="svelte-1szb2dn">Esc</kbd>',1),Qp=E('arrows move · <kbd class="svelte-1szb2dn">Tab</kbd> filter · <kbd class="svelte-1szb2dn">↵</kbd> select · <kbd class="svelte-1szb2dn">Space</kbd> current · <kbd class="svelte-1szb2dn">Esc</kbd>',1),Jp=E('<option class="svelte-1szb2dn"> </option>'),Zp=E('<label class="svelte-1szb2dn"><span class="svelte-1szb2dn">Template</span> <select class="svelte-1szb2dn"><option class="svelte-1szb2dn">ContentPage</option><option class="svelte-1szb2dn">TitlePage</option></select></label> <label class="svelte-1szb2dn"><span class="svelte-1szb2dn">After</span> <select class="svelte-1szb2dn"><option class="svelte-1szb2dn">(end of deck)</option><!></select></label>',1),tu=E('<p class="add-form-note svelte-1szb2dn">A new path moves the folder and rewrites links to it under <code class="svelte-1szb2dn">src/routes</code>.</p>'),eu=E('<label class="add-form-check svelte-1szb2dn"><input type="checkbox" class="svelte-1szb2dn"/> <span class="svelte-1szb2dn"> </span></label>'),nu=E('<div class="add-form-wrap svelte-1szb2dn"><form class="add-form svelte-1szb2dn"><div class="add-form-title svelte-1szb2dn"><!></div> <label class="svelte-1szb2dn"><span class="svelte-1szb2dn">Title</span> <input type="text" placeholder="My new slide" class="svelte-1szb2dn"/></label> <label class="svelte-1szb2dn"><span class="svelte-1szb2dn">Path</span> <input type="text" placeholder="my-new-slide.html" spellcheck="false" class="svelte-1szb2dn"/></label> <!> <!> <div class="add-form-actions svelte-1szb2dn"><button type="button" class="form-btn ghost svelte-1szb2dn">Cancel</button> <button type="submit" class="form-btn svelte-1szb2dn"> </button></div></form></div>'),su=E(' <code class="svelte-1szb2dn"> </code>',1),ou=E("Still linked from: <!> — those links will break.",1),au=E(`<div class="add-form-wrap svelte-1szb2dn"><div class="add-form remove-dialog svelte-1szb2dn" role="alertdialog"><div class="add-form-title svelte-1szb2dn"> </div> <p class="add-form-note svelte-1szb2dn"><b class="svelte-1szb2dn">Unlist</b> drops it from <code class="svelte-1szb2dn">pages.ts</code> and keeps the folder. <b class="svelte-1szb2dn">Delete files</b> also removes the folder and everything in it — files git
					does not track cannot be recovered.</p> <p class="add-form-note refs svelte-1szb2dn"><!></p> <div class="add-form-actions svelte-1szb2dn"><button type="button" class="form-btn ghost svelte-1szb2dn">Cancel</button> <button type="button" class="form-btn svelte-1szb2dn">Unlist</button> <button type="button" class="form-btn danger svelte-1szb2dn">Delete files</button></div></div></div>`),ru=E('<p class="no-matches svelte-1szb2dn" role="status"> </p>'),iu=E('<iframe class="frame svelte-1szb2dn" tabindex="-1" loading="lazy"></iframe>'),lu=E('<span class="card svelte-1szb2dn"> </span>'),cu=E('<span class="path-line svelte-1szb2dn"> </span>'),du=E('<span class="tile-tools svelte-1szb2dn"><button type="button" class="tile-tool tile-rename svelte-1szb2dn" title="Rename (title and/or path)">✎</button> <button type="button" class="tile-tool tile-duplicate svelte-1szb2dn" title="Duplicate">⧉</button> <button type="button" class="tile-tool tile-remove svelte-1szb2dn" title="Remove (unlist or delete)">×</button></span> <button type="button" class="gutter-add svelte-1szb2dn" title="Add slide after this one">+</button>',1),pu=E('<div class="tile-wrap svelte-1szb2dn"><button type="button"><span class="shot svelte-1szb2dn"><!></span> <span class="label svelte-1szb2dn"><span class="num svelte-1szb2dn"> </span> <span class="name svelte-1szb2dn"> </span></span> <!></button> <!></div>'),uu=E("<div></div>"),fu=E('<div role="presentation"><div class="head svelte-1szb2dn"><span class="head-title svelte-1szb2dn"> </span> <span class="head-count svelte-1szb2dn"><!></span> <input class="search svelte-1szb2dn" type="search" placeholder="Filter title, file, #…" aria-label="Filter overview by title, file name, or page number"/> <!> <span class="head-actions svelte-1szb2dn"><!> <!> <button type="button" aria-keyshortcuts="e"> <!></button> <span class="head-hint svelte-1szb2dn"><!></span></span></div> <!> <!> <!></div>');function zr(e,n){je(n,!1);const o=()=>ht(Ps,"$overviewEditMode",i),r=()=>ht(xp,"$canEditDeck",i),a=()=>ht(ws,"$overviewOpen",i),[i,l]=$n(),g=c(),f=c(),L=c(),k=c(),X=c();let j=m(n,"pages",24,()=>[]),D=m(n,"width",8,1920),z=m(n,"height",8,1080),F=m(n,"currentPath",8,""),B=m(n,"deck",8,""),C=m(n,"present",8,!1);const O=Xo();let $=c(""),tt=c(),J=c(new Set),q=c(!1),Z=c([]),bt=c([]),et=c(),x=c();const P=new Map;let W=c("unknown");function M(){if(!t(et)){s(W,"unknown");return}const T=P.get(t(k));s(W,Op(t(et).getBoundingClientRect(),T?T.getBoundingClientRect():null))}let S;function b(){S==null&&(S=requestAnimationFrame(()=>{S=void 0,M()}))}function y(){var T;(T=P.get(t(k)))==null||T.scrollIntoView({block:"center",behavior:"smooth"})}let N=c(0);function pt(T){var ot;(ot=P.get(T))==null||ot.focus()}function gt(T=t(N)){var ot;return T>0&&t(f).some(zt=>zt.number===T)?T:t(k)>0&&t(f).some(zt=>zt.number===t(k))?t(k):((ot=t(f)[0])==null?void 0:ot.number)??0}function lt(){var T,ot,zt;(T=t(tt))==null||T.focus(),(zt=(ot=t(tt))==null?void 0:ot.select)==null||zt.call(ot)}function ut(T){if(T.stopPropagation(),T.key==="Tab"){T.preventDefault();const ot=gt();ot>0&&(s(N,ot),po().then(()=>pt(ot)));return}if(T.key==="Escape"){if(T.preventDefault(),t(L)){s($,"");return}if(t(Tt)){mn();return}if(o()){we();return}Jt()}}function I(){return Fp(t(f).map(T=>{var ot;return((ot=P.get(T.number))==null?void 0:ot.getBoundingClientRect().top)??0}))}function yt(T){var We,an;if(!t(et)||t(f).length===0)return 1;const ot=(We=P.get(t(f)[0].number))==null?void 0:We.getBoundingClientRect().top,zt=t(f)[T],Ut=zt?(an=P.get(zt.number))==null?void 0:an.getBoundingClientRect().top:void 0,se=ot!=null&&Ut!=null?Ut-ot:0;return Hp(t(et).getBoundingClientRect().height,se)}function dt(T){var an;if(T.key==="Tab"){T.preventDefault(),T.stopPropagation(),lt();return}const ot=jp(T);if(ot==="ignore"||t(f).length===0)return;if(T.preventDefault(),T.stopPropagation(),ot==="commit"){const rn=t(f).find(ms=>ms.number===t(N))??t(f)[0];rn&&Rn(rn.path,rn.number);return}if(ot==="toCurrent"){t(k)>0&&t(f).some(rn=>rn.number===t(k))&&(s(N,t(k)),pt(t(N)));return}const zt=t(f).findIndex(rn=>rn.number===t(N)),Ut=zt>=0?zt+1:1,se=I(),We=Kp(Ut,t(f).length,se,yt(se),ot);s(N,((an=t(f)[We-1])==null?void 0:an.number)??0),pt(t(N))}let Tt=c(!1),vt=c("add"),st=c(""),R=c(null),G=c([]),it=c(!1),wt=c(""),$t=c(""),Lt=c("content"),ye=c(""),jt=c(!1),Rt=c(!1),Nt=c(""),xt=c("info"),Ct=c(""),Yt=c(!0),qt=c(""),ce=c(""),Qt;function _t(T,ot){var zt;return T.dataset.tile=String(ot),P.set(ot,T),(zt=t(x))==null||zt.observe(T),{destroy(){var Ut;P.delete(ot),(Ut=t(x))==null||Ut.unobserve(T)}}}function fe(){if(!(typeof IntersectionObserver>"u"||t(x))){s(x,new IntersectionObserver(T=>{var zt;let ot=!1;for(const Ut of T){if(!Ut.isIntersecting)continue;const se=Number(Ut.target.dataset.tile);Number.isFinite(se)&&!t(J).has(se)&&(t(J).add(se),ot=!0),(zt=t(x))==null||zt.unobserve(Ut.target)}ot&&s(J,new Set(t(J)))},{root:t(et)??null,rootMargin:"400px 0px"}));for(const T of P.values())t(x).observe(T)}}function Jt(){s(Tt,!1),s(R,null),Ps.set(!1),s(Nt,""),s(Ct,""),s($,""),ws.set(!1)}function we(){s(Tt,!1),s(R,null),s(Nt,""),s(Ct,""),Ps.set(!1)}function Re(){s(qt,"NOT ALLOWED"),s(ce,"Edit deck only works in vite dev — a static host has no source tree."),Qt&&clearTimeout(Qt),Qt=setTimeout(()=>{s(qt,""),s(ce,"")},2600)}function de(){if(!r()){Re();return}o()?we():(Ps.set(!0),s(Nt,""))}function ie(T=""){if(!r()){Re();return}o()||Ps.set(!0),s(vt,"add"),s(st,""),s(R,null),s(wt,""),s($t,"slide.html"),s(Lt,"content"),s(ye,T),s(jt,!1),s(Yt,!0),s(Ct,""),s(Tt,!0),s(Nt,"")}function Qe(T,ot){if(!r()){Re();return}s(vt,"rename"),s(st,T),s(R,null),s(wt,ot),s($t,T),s(jt,!0),s(Ct,""),s(Tt,!0),s(Nt,"")}function en(T,ot){if(!r()){Re();return}s(vt,"duplicate"),s(st,T),s(R,null),s(wt,`${ot} (copy)`),s($t,`${wa(t(wt))}.html`),s(jt,!1),s(Yt,!0),s(Ct,""),s(Tt,!0),s(Nt,"")}function on(){t(vt)==="rename"?rs():t(vt)==="duplicate"?is():Ie()}function kn(){if(!r())return Re(),null;if(!B())return s(xt,"error"),s(Nt,"No deck name — cannot write pages.ts."),null;const T=Cp(t($t));if(!T)return s(xt,"error"),s(Nt,"Path must look like my-slide.html (lowercase, hyphens)."),null;const ot=t(wt).trim();return ot?{path:T,title:ot}:(s(xt,"error"),s(Nt,"Title is required."),null)}async function rs(){var se;const T=kn();if(!T)return;const ot=t(st);s(Rt,!0),s(xt,"info"),s(Nt,"Renaming…");const zt=await Pp({deck:B(),path:ot,newPath:T.path,title:T.title});if(s(Rt,!1),zt.error){s(xt,"error"),s(Nt,zt.error);return}if(s(Tt,!1),T.path!==ot&&ot===F()){Rn(T.path,t(k));return}const Ut=((se=zt.updated)==null?void 0:se.length)??0;s(xt,"ok"),s(Nt,T.path===ot?`Renamed ${ot}`:`Renamed ${ot} → ${T.path}${Ut?` · links updated in ${Ut} file${Ut===1?"":"s"}`:""}`)}async function is(){var We;const T=kn();if(!T)return;const ot=t(Yt),zt=t(st);s(Rt,!0),s(xt,"info"),s(Nt,"Duplicating…");const Ut=await zp({deck:B(),path:zt,newPath:T.path,title:T.title});if(s(Rt,!1),Ut.error){s(xt,"error"),s(Nt,Ut.error);return}s(Tt,!1);const se=(((We=t(g).find(an=>an.path===zt))==null?void 0:We.number)??t(k))+1;if(ot){Rn(T.path,se);return}s(xt,"ok"),s(Nt,`Duplicated ${zt} → ${T.path}`),s(Ct,T.path)}function mn(){s(Tt,!1),s(Nt,"")}async function Ie(){const T=kn();if(!T)return;const{path:ot,title:zt}=T,Ut=t(Yt);s(Rt,!0),s(xt,"info"),s(Nt,"Adding…");const se=await Np({deck:B(),path:ot,title:zt,template:t(Lt),after:t(ye)||null});if(s(Rt,!1),se.error){s(xt,"error"),s(Nt,se.error);return}if(s(Tt,!1),Ut){Rn(ot,t(k)+1);return}s(xt,"ok"),s(Nt,`Added ${ot}`),s(Ct,ot)}function xn(){if(!t(Ct))return;const T=t(Ct);s(Ct,""),Rn(T,t(k)+1)}async function Ln(T,ot){var Ut;if(!r()){Re();return}if(!B()){s(xt,"error"),s(Nt,"No deck name — cannot write pages.ts.");return}s(Tt,!1),s(Nt,""),s(R,{path:T,title:ot}),s(G,[]),s(it,!0);const zt=await Dp(B(),T);((Ut=t(R))==null?void 0:Ut.path)===T&&(s(G,zt),s(it,!1))}function Xn(){s(R,null)}async function Bn(T){if(!t(R))return;const{path:ot}=t(R);s(Rt,!0),s(xt,"info"),s(Nt,T?"Deleting…":"Removing…");const zt=await Mp({deck:B(),path:ot,deleteFiles:T});if(s(Rt,!1),zt.error){s(xt,"error"),s(Nt,zt.error);return}if(s(R,null),T&&ot===F()){const Ut=t(g).findIndex(We=>We.path===ot),se=t(g)[Ut+1]??t(g)[Ut-1];if(se){Rn(se.path,se.number);return}}s(xt,"ok"),s(Nt,T?`Deleted ${ot} — waiting for reload…`:`Removed ${ot} from the deck — waiting for reload…`)}function Rn(T,ot){ws.set(!1),Ps.set(!1),s(Tt,!1),s(R,null);const zt=t(k)>0&&ot<t(k)?"back":"forward";uo(`./${T}${C()?"?present":""}`,{viewTransitions:O,kind:"slide",direction:zt})}function Un(T){if(T.key==="Escape"&&a()&&!T.ctrlKey&&!T.metaKey&&!T.altKey){if(t(Tt)){T.preventDefault(),mn();return}if(t(R)){T.preventDefault(),Xn();return}if(o()){T.preventDefault(),we();return}if(t(L)){T.preventDefault(),s($,"");return}}if(a()&&!T.ctrlKey&&!T.metaKey&&!T.altKey&&!T.defaultPrevented&&(T.key==="e"||T.key==="E")){const zt=T.target,Ut=(zt==null?void 0:zt.tagName)??"";if(zt!=null&&zt.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(Ut))return;T.preventDefault(),de();return}const ot=Rp(T,a());ot!=="ignore"&&(T.preventDefault(),ot==="close"?Jt():ws.set(!0))}Yn(()=>{window.addEventListener("keydown",Un),window.addEventListener("resize",M),typeof IntersectionObserver>"u"&&s(q,!0)}),Es(()=>{var T;window.removeEventListener("keydown",Un),window.removeEventListener("resize",M),S!=null&&cancelAnimationFrame(S),(T=t(x))==null||T.disconnect(),s(x,void 0),Qt&&clearTimeout(Qt)});function gn(){var ot;const T=document.activeElement;return T?!(Va(T)||t(tt)&&(T===t(tt)||t(tt).contains(T))||(ot=T.closest)!=null&&ot.call(T,".add-form-wrap")):!0}_(()=>(nt(j()),nt(F())),()=>{s(g,$p(j(),F()))}),_(()=>(a(),Ps),()=>{a()||(Ps.set(!1),s(Tt,!1),s(R,null),s(N,0),s($,""))}),_(()=>(t(g),t($)),()=>{s(f,Lp(t(g),t($)))}),_(()=>t($),()=>{s(L,t($).trim().length>0)}),_(()=>t(g),()=>{var T;s(k,((T=t(g).find(ot=>ot.isCurrent))==null?void 0:T.number)??0)}),_(()=>(t(q),t(f),t(J),t(k)),()=>{s(X,t(q)?new Set(t(f).map(T=>T.number)):Ip(t(J),t(k)))}),_(()=>(t(jt),t(wt),wa),()=>{!t(jt)&&t(wt)&&s($t,`${wa(t(wt))}.html`)}),_(()=>(a(),t(f),t(N)),()=>{a()&&t(f).length>0&&(!t(N)||!t(f).some(T=>T.number===t(N)))&&s(N,gt(0))}),_(()=>(a(),t(et),t(x)),()=>{a()&&t(et)&&fe(),!a()&&t(x)&&(t(x).disconnect(),s(x,void 0))}),_(()=>(a(),t(et),t(k),t(N),t(f)),()=>{a()&&t(et)&&(t(k),po().then(()=>{M(),(!t(N)||!t(f).some(T=>T.number===t(N)))&&s(N,gt(t(k))),t(N)&&gn()&&pt(t(N))}))}),Nn(),vn();var Qn=hn(),Ts=Wt(Qn);{var As=T=>{var ot=fu();let zt;var Ut=u(ot),se=u(Ut),We=u(se,!0);p(se);var an=d(se,2),rn=u(an);{var ms=At=>{var ft=ss();V(()=>kt(ft,`${t(f),at(()=>t(f).length)??""} of ${t(g),at(()=>t(g).length)??""}`)),v(At,ft)},Ns=At=>{var ft=ss();V(()=>kt(ft,`${t(g),at(()=>t(g).length)??""} slides`)),v(At,ft)};H(rn,At=>{t(L)?At(ms):At(Ns,-1)})}p(an);var qn=d(an,2);os(qn),Ae(qn,At=>s(tt,At),()=>t(tt));var A=d(qn,2);{var Y=At=>{var ft=Up();let $e;var me=u(ft),Dt=d(me);{var ge=Se=>{var nn=Bp();Q("click",nn,sn(xn)),v(Se,nn)};H(Dt,Se=>{t(Ct)&&Se(ge)})}p(ft),V(()=>{$e=Mt(ft,1,"head-status svelte-1szb2dn",null,$e,{err:t(xt)==="error",ok:t(xt)==="ok"}),kt(me,`${t(Nt)??""} `)}),v(At,ft)};H(A,At=>{(t(Nt)||t(Ct))&&At(Y)})}var rt=d(A,2),Ot=u(rt);{var Zt=At=>{var ft=Wp();let $e;var me=u(ft);{var Dt=Se=>{var nn=qp();v(Se,nn)},ge=Se=>{var nn=Gp();v(Se,nn)};H(me,Se=>{t(W)==="above"?Se(Dt):t(W)==="below"&&Se(ge,1)})}Ke(),p(ft),V(()=>$e=Mt(ft,1,"current-btn svelte-1szb2dn",null,$e,{pending:t(W)==="above"||t(W)==="below"})),Q("click",ft,sn(y)),v(At,ft)};H(Ot,At=>{t(k)>0&&At(Zt)})}var ke=d(Ot,2);{var pe=At=>{var ft=Vp();V(()=>ft.disabled=t(Rt)),Q("click",ft,sn(()=>ie(""))),v(At,ft)};H(ke,At=>{o()&&At(pe)})}var It=d(ke,2);let oe;var Vt=u(It),Pt=d(Vt);{var Bt=At=>{var ft=Yp();v(At,ft)};H(Pt,At=>{t(qt)||At(Bt)})}p(It);var Ft=d(It,2),De=u(Ft);{var Ne=At=>{var ft=Xp();Ke(3),v(At,ft)},ve=At=>{var ft=Qp();Ke(7),v(At,ft)};H(De,At=>{o()?At(Ne):At(ve,-1)})}p(Ft),p(rt),p(Ut);var ee=d(Ut,2);{var _e=At=>{var ft=nu(),$e=u(ft),me=u($e),Dt=u(me);{var ge=te=>{var Kt=ss();V(()=>kt(Kt,`Rename ${t(st)??""}`)),v(te,Kt)},Se=te=>{var Kt=ss();V(()=>kt(Kt,`Duplicate ${t(st)??""}`)),v(te,Kt)},nn=te=>{var Kt=ss("Add slide");v(te,Kt)};H(Dt,te=>{t(vt)==="rename"?te(ge):t(vt)==="duplicate"?te(Se,1):te(nn,-1)})}p(me);var bn=d(me,2),Ue=d(u(bn),2);os(Ue),p(bn);var In=d(bn,2),On=d(u(In),2);os(On),p(In);var ln=d(In,2);{var yn=te=>{var Kt=Zp(),ue=Wt(Kt),Fe=d(u(ue),2),_n=u(Fe);_n.value=_n.__value="content";var zn=d(_n);zn.value=zn.__value="title",p(Fe),p(ue);var cs=d(ue,2),Fn=d(u(cs),2),Ms=u(Fn);Ms.value=Ms.__value="";var Hs=d(Ms);Cn(Hs,1,()=>t(g),vs,(Sn,Wn)=>{var En=Jp(),Ks=u(En);p(En);var Pn={};V(()=>{kt(Ks,`${t(Wn),at(()=>t(Wn).number)??""}. ${t(Wn),at(()=>t(Wn).title)??""}`),Pn!==(Pn=(t(Wn),at(()=>t(Wn).path)))&&(En.value=(En.__value=(t(Wn),at(()=>t(Wn).path)))??"")}),v(Sn,En)}),p(Fn),p(cs),V(()=>{Fe.disabled=t(Rt),Fn.disabled=t(Rt)}),cr(Fe,()=>t(Lt),Sn=>s(Lt,Sn)),cr(Fn,()=>t(ye),Sn=>s(ye,Sn)),v(te,Kt)};H(ln,te=>{t(vt)==="add"&&te(yn)})}var he=d(ln,2);{var cn=te=>{var Kt=tu();v(te,Kt)},ls=te=>{var Kt=eu(),ue=u(Kt);os(ue);var Fe=d(ue,2),_n=u(Fe);p(Fe),p(Kt),V(()=>{ue.disabled=t(Rt),kt(_n,`Open after ${t(vt)==="duplicate"?"duplicating":"adding"}`)}),Zr(ue,()=>t(Yt),zn=>s(Yt,zn)),v(te,Kt)};H(he,te=>{t(vt)==="rename"?te(cn):te(ls,-1)})}var gs=d(he,2),dn=u(gs),Gn=d(dn,2),Jn=u(Gn,!0);p(Gn),p(gs),p($e),p(ft),V(()=>{Ue.disabled=t(Rt),hl(On,t($t)),On.disabled=t(Rt),dn.disabled=t(Rt),Gn.disabled=t(Rt),kt(Jn,t(vt)==="rename"?"Rename":t(vt)==="duplicate"?"Duplicate":"Add")}),ks(Ue,()=>t(wt),te=>s(wt,te)),Q("input",On,te=>{s(jt,!0),s($t,te.currentTarget.value)}),Q("click",dn,mn),Q("submit",$e,hi(on)),Q("click",ft,sn(function(te){yo.call(this,n,te)})),Q("keydown",ft,sn(function(te){yo.call(this,n,te)})),v(At,ft)};H(ee,At=>{t(Tt)&&At(_e)})}var Ce=d(ee,2);{var Oe=At=>{var ft=au(),$e=u(ft),me=u($e),Dt=u(me);p(me);var ge=d(me,4),Se=u(ge);{var nn=he=>{var cn=ss("Checking for links to it…");v(he,cn)},bn=he=>{var cn=ou(),ls=d(Wt(cn));Cn(ls,1,()=>t(G),vs,(gs,dn,Gn)=>{Ke();var Jn=su(),te=Wt(Jn,!0);te.nodeValue=Gn?", ":" ";var Kt=d(te),ue=u(Kt,!0);p(Kt),V(()=>kt(ue,(t(dn),at(()=>t(dn).file)))),v(gs,Jn)}),Ke(),v(he,cn)},Ue=he=>{var cn=ss("No other slide links to it.");v(he,cn)};H(Se,he=>{t(it)?he(nn):(t(G),at(()=>t(G).length)?he(bn,1):he(Ue,-1))})}p(ge);var In=d(ge,2),On=u(In),ln=d(On,2),yn=d(ln,2);p(In),p($e),p(ft),V(()=>{K($e,"aria-label",`Remove ${t(R),at(()=>t(R).title)??""}`),kt(Dt,`Remove “${t(R),at(()=>t(R).title)??""}” (${t(R),at(()=>t(R).path)??""})?`),On.disabled=t(Rt),ln.disabled=t(Rt),yn.disabled=t(Rt)}),Q("click",On,Xn),Q("click",ln,()=>Bn(!1)),Q("click",yn,()=>Bn(!0)),Q("click",ft,sn(function(he){yo.call(this,n,he)})),Q("keydown",ft,sn(function(he){yo.call(this,n,he)})),v(At,ft)};H(Ce,At=>{t(R)&&At(Oe)})}var ae=d(Ce,2);{var Me=At=>{var ft=ru(),$e=u(ft);p(ft),V(me=>kt($e,`No slides match “${me??""}”.`),[()=>(t($),at(()=>t($).trim()))]),v(At,ft)},Mn=At=>{var ft=uu();let $e;Cn(ft,5,()=>t(f),me=>me.path,(me,Dt)=>{var ge=pu(),Se=u(ge);let nn;var bn=u(Se),Ue=u(bn);{var In=Kt=>{var ue=iu();V(Fe=>{K(ue,"title",(t(Dt),at(()=>t(Dt).title))),K(ue,"src",(t(Dt),at(()=>t(Dt).src))),re(ue,`width:${D()??""}px; height:${z()??""}px; transform: translate(-50%, -50%) scale(${Fe??""});`)},[()=>(nt(Mr),t(Z),t(Dt),t(bt),nt(D()),nt(z()),at(()=>Mr(t(Z)[t(Dt).number]??0,t(bt)[t(Dt).number]??0,D(),z())))]),v(Kt,ue)},On=He(()=>(t(X),t(Dt),at(()=>t(X).has(t(Dt).number)))),ln=Kt=>{var ue=lu(),Fe=u(ue,!0);p(ue),V(()=>kt(Fe,(t(Dt),at(()=>t(Dt).title)))),v(Kt,ue)};H(Ue,Kt=>{t(On)?Kt(In):Kt(ln,-1)})}p(bn);var yn=d(bn,2),he=u(yn),cn=u(he,!0);p(he);var ls=d(he,2),gs=u(ls,!0);p(ls),p(yn);var dn=d(yn,2);{var Gn=Kt=>{var ue=cu(),Fe=u(ue,!0);p(ue),V(()=>kt(Fe,(t(Dt),at(()=>t(Dt).path)))),v(Kt,ue)};H(dn,Kt=>{o()&&Kt(Gn)})}p(Se),ro(Se,(Kt,ue)=>_t==null?void 0:_t(Kt,ue),()=>t(Dt).number),Xs(()=>Q("click",Se,()=>Rn(t(Dt).path,t(Dt).number)));var Jn=d(Se,2);{var te=Kt=>{var ue=du(),Fe=Wt(ue),_n=u(Fe),zn=d(_n,2),cs=d(zn,2);p(Fe);var Fn=d(Fe,2);V(()=>{K(_n,"aria-label",`Rename ${t(Dt),at(()=>t(Dt).title)??""}`),_n.disabled=t(Rt),K(zn,"aria-label",`Duplicate ${t(Dt),at(()=>t(Dt).title)??""}`),zn.disabled=t(Rt),K(cs,"aria-label",`Remove ${t(Dt),at(()=>t(Dt).title)??""} from deck`),cs.disabled=t(Rt),K(Fn,"aria-label",`Add slide after ${t(Dt),at(()=>t(Dt).title)??""}`),Fn.disabled=t(Rt)}),Q("click",_n,sn(()=>Qe(t(Dt).path,t(Dt).title))),Q("click",zn,sn(()=>en(t(Dt).path,t(Dt).title))),Q("click",cs,sn(()=>Ln(t(Dt).path,t(Dt).title))),Q("click",Fn,sn(()=>ie(t(Dt).path))),v(Kt,ue)};H(Jn,Kt=>{o()&&Kt(te)})}p(ge),V(()=>{nn=Mt(Se,1,"tile svelte-1szb2dn",null,nn,{current:t(Dt).isCurrent}),K(Se,"aria-current",(t(Dt),at(()=>t(Dt).isCurrent?"page":void 0))),re(bn,`aspect-ratio: ${D()??""} / ${z()??""};`),kt(cn,(t(Dt),at(()=>t(Dt).number))),kt(gs,(t(Dt),at(()=>t(Dt).title)))}),ao(bn,"clientWidth",Kt=>Ge(Z,t(Z)[t(Dt).number]=Kt)),ao(bn,"clientHeight",Kt=>Ge(bt,t(bt)[t(Dt).number]=Kt)),v(me,ge)}),p(ft),Ae(ft,me=>s(et,me),()=>t(et)),V(()=>$e=Mt(ft,1,"grid svelte-1szb2dn",null,$e,{editing:o()})),Q("scroll",ft,b),Q("keydown",ft,dt),v(At,ft)};H(ae,At=>{t(L),t(f),at(()=>t(L)&&t(f).length===0)?At(Me):At(Mn,-1)})}p(ot),V(()=>{zt=Mt(ot,1,"scrim no-print svelte-1szb2dn",null,zt,{editing:o(),present:C()}),re(ot,`--canvas-w:${D()??""}px; --canvas-h:${z()??""}px;`),kt(We,o()?"EDIT DECK":"OVERVIEW PAGE"),oe=Mt(It,1,"edit-btn svelte-1szb2dn",null,oe,{on:o(),flash:!!t(qt)}),K(It,"title",t(ce)||(r()?o()?"Leave edit mode (E)":"Add, rename, duplicate or remove slides (E)":"Edit deck only works in vite dev")),K(It,"aria-pressed",o()),kt(Vt,`${(t(qt)||(o()?"DONE":"EDIT"))??""} `)}),ks(qn,()=>t($),At=>s($,At)),Q("keydown",qn,ut),Q("click",qn,sn(function(At){yo.call(this,n,At)})),Q("click",It,sn(de)),Q("click",ot,fi(Jt)),v(T,ot)};H(Ts,T=>{a()&&T(As)})}v(e,Qn),Be(),l()}const hu="toolBarPinned",vu="controlBarPinned",mu="chromePinned";function Pi(){try{return localStorage.getItem(mu)==="true"}catch{return!1}}const Pr=Jo(hu,Pi(),{codec:Zo(),sync:!1}),Dr=Jo(vu,Pi(),{codec:Zo(),sync:!1}),Ya="chromeBare";function gu(e){if(!e||!e.has("bare"))return null;const n=(e.get("bare")??"").trim().toLowerCase();return n!=="off"&&n!=="false"&&n!=="0"}function Di(e,n,o){return e===!0||e===!1?e:n===!0||o===!0}function Ci(){try{return ta(localStorage.getItem(Ya))}catch{return null}}const sa=Xe(Ci()),Xa=Xe(!1),oa=Qs([sa,Ro,Xa,ei],([e,n,o,r])=>r||Di(e,n,o)),bu=Qs([sa,Xa],([e,n])=>Di(e,!0,n));function qo(e){try{localStorage.setItem(Ya,String(e))}catch{}sa.set(e)}window.addEventListener("storage",e=>{(e.key===Ya||e.key===null)&&sa.set(Ci())});const To=Xe(!1);Os.subscribe(e=>{e&&To.set(!1)});function Do(){if(Te(oa)){qo(!1),To.set(!1);return}qo(!0),xi(),To.set(!0),document.activeElement instanceof HTMLElement&&document.activeElement.closest(".annot-tools, .ctrl-bar")&&document.activeElement.blur()}function yu(e){Xa.set(e===!0)}function wu(e){const n=gu(e.searchParams);n!==null&&qo(n)}function Js(e){const n=e;return n?n.isContentEditable?!0:/^(INPUT|TEXTAREA|SELECT)$/.test(n.tagName??""):!1}function ku(e,n){return!n||e.altKey||e.shiftKey||!(e.ctrlKey||e.metaKey)?!1:e.key==="s"||e.key==="S"||e.code==="KeyS"}function $i(e){const n=(e.key??"").toLowerCase();if(/^[a-z]$/.test(n))return n;const o=e.code??"";return/^Key[A-Z]$/.test(o)?o.slice(3).toLowerCase():""}function xu(e,n,o){if(!n&&!o||Js(e.target)||e.ctrlKey||e.metaKey||e.altKey||e.defaultPrevented)return"ignore";switch($i(e)){case"o":return"overview";case"k":return"kiosk";case"b":return"bars";case"i":return"pointer";case"c":return"capture";case"r":return"print";case"s":return"source";case"e":return"edit";default:return"ignore"}}function _u(e,n){if(Js(e.target))return"ignore";if(e.altKey&&!e.ctrlKey&&!e.metaKey&&(e.code==="Period"||e.key==="."))return"arm";if(e.key==="Escape"&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&!e.defaultPrevented)return"disarm";if(!n||e.ctrlKey||e.metaKey||e.altKey||e.defaultPrevented)return"ignore";switch($i(e)){case"a":return"annotate";case"j":return"adjust";case"z":return"display";case"p":return"present";case"m":return"more";case"t":return"toc";case"u":return"kiosk-pause";default:return"ignore"}}const Li=[2,1.5,1.25,1,.75,.5,.25],Ri=[{factor:1600/1920,name:"HD+"},{factor:1280/1920,name:"720p"},{factor:960/1920,name:"qHD"},{factor:854/1920,name:"480p"},{factor:640/1920,name:"nHD"}],Su=.005;function So(e,n){return Math.abs(e-n)<Su}function Cr(e){const n=[{id:"fitted",kind:"fitted"}];for(const o of Li)n.push({id:`s-${o}`,kind:"factor",factor:o});if(e)for(const o of Ri)n.push({id:`r-${o.name}`,kind:"factor",factor:o.factor});return n}function Eu(e,n,o){if(!e.length)return 0;if(n){const a=e.findIndex(i=>i.kind==="fitted");return a>=0?a:0}const r=e.findIndex(a=>a.kind==="factor"&&So(a.factor,o));return r>=0?r:0}function ka(e,n,o){if(o<=0)return 0;const r=Number.isFinite(e)?Math.trunc(e):0,a=Number.isFinite(n)?Math.trunc(n):0;return((r+a)%o+o)%o}var Tu=E('<button type="button" role="menuitem" tabindex="-1"><span class="k"> </span> <span class="v svelte-11jxgp9"> <!></span></button>'),Au=E('<button type="button" role="menuitem" tabindex="-1"><span class="k"> </span><span class="v svelte-11jxgp9"> </span></button>'),Nu=E('<div class="sep svelte-11jxgp9">RESOLUTION</div> <!>',1),Mu=E('<div class="menu svelte-11jxgp9" role="menu" aria-label="Display zoom"><button type="button" role="menuitem" data-choice="fitted" tabindex="-1"><span class="k">FITTED</span><span class="v svelte-11jxgp9">fit to window</span></button> <div class="sep svelte-11jxgp9">SCALE</div> <!> <!> <div class="sep svelte-11jxgp9"><span class="tool-mn">C</span>USTOM</div> <form class="row custom svelte-11jxgp9"><input type="number" step="1" placeholder="%" aria-label="Custom zoom percent" class="svelte-11jxgp9"/> <button type="submit" class="svelte-11jxgp9">Set</button></form></div>'),zu=E("<div><!> <!></div>");function Pu(e,n){je(n,!1);const o=()=>ht(Vs,"$displayMode",a),r=()=>ht(Ko,"$displayFactor",a),[a,i]=$n(),l=c(),g=c(),f=c(),L=c(),k=c();let X=m(n,"width",8,1920),j=m(n,"height",8,1080),D=m(n,"inline",8,!1),z=c(!1),F=c(),B=c(),C=c(),O=c(""),$=0;const tt=X()===1920&&j()===1080,J=I=>`${Math.round(I*100)}%`,q=I=>`${Math.round(X()*I)}×${Math.round(j()*I)}`,Z=I=>So(I,2)?"4K":So(I,1)?"1:1":"";function bt(){Vs.set("FITTED"),s(z,!1)}function et(I){Ko.set(Aa(I)),Vs.set("SCALED"),s(z,!1)}function x(){const I=parseFloat(t(O));Number.isFinite(I)&&I>0&&et(I/100)}function P(I){var Tt,vt;$=ka(I,0,t(l).length);const yt=(Tt=t(l)[$])==null?void 0:Tt.id;if(!yt||!t(B))return;const dt=t(B).querySelector(`[data-choice="${yt}"]`);dt==null||dt.focus(),(vt=dt==null?void 0:dt.scrollIntoView)==null||vt.call(dt,{block:"nearest"})}function W(){var I,yt,dt,Tt;t(C)&&(t(C).focus(),(yt=(I=t(C)).select)==null||yt.call(I),(Tt=(dt=t(C)).scrollIntoView)==null||Tt.call(dt,{block:"nearest"}))}async function M(I){s(z,I),I&&($=Eu(t(l),t(g),t(f)),await po(),await po(),P($))}const S=wi.subscribe(I=>{I>0&&M(!t(z))});function b(I){if(t(z)){if(Js(I.target)){I.key==="Escape"&&(I.preventDefault(),s(z,!1));return}if(!I.ctrlKey&&!I.metaKey&&!I.altKey&&(I.key==="c"||I.key==="C"||I.code==="KeyC")){I.preventDefault(),W();return}switch(I.key){case"Escape":I.preventDefault(),s(z,!1);return;case"ArrowDown":I.preventDefault(),P(ka($,1,t(l).length));return;case"ArrowUp":I.preventDefault(),P(ka($,-1,t(l).length));return;case"Home":I.preventDefault(),P(0);return;case"End":I.preventDefault(),P(t(l).length-1);return;default:return}}}function y(I){t(F)&&!t(F).contains(I.target)&&s(z,!1)}Yn(()=>{window.addEventListener("keydown",b),document.addEventListener("click",y)}),Es(()=>{S(),window.removeEventListener("keydown",b),document.removeEventListener("click",y)}),_(()=>Cr,()=>{s(l,Cr(tt))}),_(()=>o(),()=>{s(g,o()==="FITTED")}),_(()=>r(),()=>{s(f,r())}),_(()=>(t(g),t(f)),()=>{s(L,t(g)?"FITTED":J(t(f)))}),_(()=>(nt(D()),t(L)),()=>{s(k,D()?`${t(L)} (Z)`:t(L))}),Nn(),vn();var N=zu();let pt;var gt=u(N);jn(gt,{chrome:!0,get text(){return t(k)},get hoverText(){return t(k)},get isSelected(){return t(z)},$$events:{click:()=>M(!t(z))}});var lt=d(gt,2);{var ut=I=>{var yt=Mu(),dt=u(yt);let Tt;var vt=d(dt,4);Cn(vt,1,()=>Li,vs,(wt,$t)=>{var Lt=Tu();let ye;var jt=u(Lt),Rt=u(jt,!0);p(jt);var Nt=d(jt,2),xt=u(Nt,!0),Ct=d(xt);{var Yt=ce=>{var Qt=ss();V(_t=>kt(Qt,`· ${_t??""}`),[()=>(t($t),at(()=>Z(t($t))))]),v(ce,Qt)},qt=He(()=>(t($t),at(()=>tt&&Z(t($t)))));H(Ct,ce=>{t(qt)&&ce(Yt)})}p(Nt),p(Lt),V((ce,Qt,_t)=>{ye=Mt(Lt,1,"row svelte-11jxgp9",null,ye,ce),K(Lt,"data-choice",`s-${t($t)}`),kt(Rt,Qt),kt(xt,_t)},[()=>({current:!t(g)&&So(t(f),t($t))}),()=>(t($t),at(()=>J(t($t)))),()=>(t($t),at(()=>q(t($t))))]),Q("click",Lt,()=>et(t($t))),v(wt,Lt)});var st=d(vt,2);{var R=wt=>{var $t=Nu(),Lt=d(Wt($t),2);Cn(Lt,1,()=>Ri,vs,(ye,jt)=>{var Rt=Au();let Nt;var xt=u(Rt),Ct=u(xt,!0);p(xt);var Yt=d(xt),qt=u(Yt);p(Yt),p(Rt),V((ce,Qt,_t)=>{Nt=Mt(Rt,1,"row svelte-11jxgp9",null,Nt,ce),K(Rt,"data-choice",(t(jt),at(()=>`r-${t(jt).name}`))),kt(Ct,Qt),kt(qt,`${_t??""} · ${t(jt),at(()=>t(jt).name)??""}`)},[()=>({current:!t(g)&&So(t(f),t(jt).factor)}),()=>(t(jt),at(()=>q(t(jt).factor))),()=>(t(jt),at(()=>J(t(jt).factor)))]),Q("click",Rt,()=>et(t(jt).factor)),v(ye,Rt)}),v(wt,$t)};H(st,wt=>{tt&&wt(R)})}var G=d(st,4),it=u(G);os(it),Ae(it,wt=>s(C,wt),()=>t(C)),Ke(2),p(G),p(yt),Ae(yt,wt=>s(B,wt),()=>t(B)),V((wt,$t)=>{Tt=Mt(dt,1,"row svelte-11jxgp9",null,Tt,{current:t(g)}),K(it,"min",wt),K(it,"max",$t)},[()=>(nt(dr),at(()=>Math.round(dr*100))),()=>(nt(pr),at(()=>Math.round(pr*100)))]),Q("click",dt,bt),ks(it,()=>t(O),wt=>s(O,wt)),Q("submit",G,hi(x)),v(I,yt)};H(lt,I=>{t(z)&&I(ut)})}p(N),Ae(N,I=>s(F,I),()=>t(F)),V(()=>pt=Mt(N,1,"mode gp-chrome no-print svelte-11jxgp9",null,pt,{expanded:t(z),inline:D()})),v(e,N),Be(),i()}const $r="0.7.2";var Du=E('<div role="group" aria-label="Slide tools"><button type="button"><svg class="pin-icon svelte-1yphv3r" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"></path></svg></button> <span class="annot-bar-sep" aria-hidden="true"></span> <!> <span class="annot-bar-sep" aria-hidden="true"></span> <button type="button"><span class="tool-mn">A</span>NNOTATE</button> <!> <span class="annot-bar-sep" aria-hidden="true"></span> <!> <span class="annot-bar-sep" aria-hidden="true"></span>  <div role="presentation"><button type="button" class="annot-hamburger svelte-1yphv3r" aria-haspopup="menu" aria-label="More tools (M)">☰ (M)</button>  <div class="annot-drop svelte-1yphv3r" role="menu" aria-label="More tools" tabindex="-1"><!> <!> <!> <!> <div class="menu-sep svelte-1yphv3r" role="separator"></div> <!> <!> <div class="menu-sep svelte-1yphv3r" role="separator"></div> <!> <div class="menu-sep svelte-1yphv3r" role="separator"></div> <div class="menu-about svelte-1yphv3r" role="none"> </div></div></div></div>');function Cu(e,n){je(n,!0);const o=()=>ht(ws,"$overviewOpen",k),r=()=>ht(Fs,"$moreMenuOpen",k),a=()=>ht(Pr,"$toolBarPinned",k),i=()=>ht(Os,"$chromeArmed",k),l=()=>ht(oa,"$chromeBare",k),g=()=>ht(To,"$bareTucked",k),f=()=>ht(io,"$annotationMode",k),L=()=>ht(Qo,"$canAnnotate",k),[k,X]=$n();let j=m(n,"width",3,1920),D=m(n,"height",3,1080),z=tn(void 0);Is(()=>{o()&&(ns(),document.activeElement instanceof HTMLElement&&document.activeElement.blur())}),Is(()=>{var tt;if(r())return;const $=document.activeElement;$ instanceof HTMLElement&&((tt=t(z))!=null&&tt.contains($))&&$.blur()});let F=tn(!1);Is(()=>{r()&&s(F,!1)}),Is(()=>{if(!r())return;const $=tt=>{var J;(J=t(z))!=null&&J.contains(tt.target)||ns()};return document.addEventListener("pointerdown",$,!0),()=>document.removeEventListener("pointerdown",$,!0)});var B=hn(),C=Wt(B);{var O=$=>{var tt=Du();let J;var q=u(tt);let Z;var bt=d(q,4);ps(bt,()=>n.presentBtn??ds);var et=d(bt,4);let x;var P=d(et,2);ps(P,()=>n.adjustGroup??ds);var W=d(P,4);Pu(W,{get width(){return j()},get height(){return D()},inline:!0});var M=d(W,4);let S;var b=u(M),y=d(b,2),N=u(y);ps(N,()=>n.overviewBtn??ds);var pt=d(N,2);ps(pt,()=>n.kioskItem??ds);var gt=d(pt,2);ps(gt,()=>n.barsItem??ds);var lt=d(gt,2);ps(lt,()=>n.pointerItem??ds);var ut=d(lt,4);ps(ut,()=>n.captureItem??ds);var I=d(ut,2);ps(I,()=>n.printBtn??ds);var yt=d(I,4);ps(yt,()=>n.sourceItem??ds);var dt=d(yt,4),Tt=u(dt);p(dt),p(y),p(M),Ae(M,vt=>s(z,vt),()=>t(z)),p(tt),V(()=>{J=Mt(tt,1,"annot-tools no-print svelte-1yphv3r",null,J,{pinned:a(),armed:i(),"menu-open":r(),"overview-open":o(),bare:l(),tucked:l()&&g()}),K(tt,"aria-hidden",o()?"true":void 0),Z=Mt(q,1,"annot-tab pin-tab svelte-1yphv3r",null,Z,{on:a()}),K(q,"aria-pressed",a()),K(q,"aria-label",a()?"PIN on":"PIN off"),K(q,"title",a()?"PIN — this bar stays visible (click to auto-hide again)":"PIN — keep this bar visible"),x=Mt(et,1,"annot-tab annotate-tab",null,x,{on:f()}),et.disabled=!L(),K(et,"aria-pressed",f()),K(et,"aria-label",f()?"ANNOTATE on":"ANNOTATE off"),K(et,"title",L()?f()?"ANNOTATE — drawing (click to put the pen down)":"ANNOTATE — draw on this slide":"ANNOTATE — the pen is not offered on this deck"),S=Mt(M,1,"annot-menu svelte-1yphv3r",null,S,{"menu-open":r(),dismissed:t(F)}),K(b,"aria-expanded",r()),K(b,"title",`More — Overview, Kiosk, Bars, Pointer, Capture, Print, Source, Edit · GeekPresent ${$r}`),kt(Tt,`GeekPresent ${$r}`)}),Ze("click",q,()=>Pr.update(vt=>!vt)),Ze("click",et,()=>io.update(vt=>!vt)),Q("pointerleave",M,()=>s(F,!1)),Ze("click",b,()=>_i()),Ze("click",y,()=>{ns(),s(F,!0)}),v($,tt)};H(C,$=>{$(O)})}v(e,B),Be(),X()}ja(["click"]);var $u=E('<span class="ctrl-bar-sep svelte-3it5rl" aria-hidden="true"></span>'),Lu=E('<div role="group" aria-label="Slide controls"><button type="button"><svg class="pin-icon svelte-3it5rl" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"></path></svg></button> <span class="ctrl-bar-sep svelte-3it5rl" aria-hidden="true"></span> <!> <span class="ctrl-bar-sep svelte-3it5rl" aria-hidden="true"></span> <!> <!> <div></div></div>');function Ru(e,n){je(n,!0);const o=()=>ht(yl,"$hostedAnim",f),r=()=>ht(Dr,"$controlBarPinned",f),a=()=>ht(Os,"$chromeArmed",f),i=()=>ht(ws,"$overviewOpen",f),l=()=>ht(oa,"$chromeBare",f),g=()=>ht(To,"$bareTucked",f),[f,L]=$n();let k=tn(void 0);Yn(()=>(t(k)&&fr.set(t(k)),()=>fr.set(null)));let X=He(()=>o().size>0);var j=hn(),D=Wt(j);{var z=F=>{var B=Lu();let C;var O=u(B);let $;var tt=d(O,4);ps(tt,()=>n.tocItem??ds);var J=d(tt,4);ps(J,()=>n.navGroup??ds);var q=d(J,2);{var Z=x=>{var P=$u();v(x,P)};H(q,x=>{t(X)&&x(Z)})}var bt=d(q,2);let et;Ae(bt,x=>s(k,x),()=>t(k)),p(B),V(()=>{C=Mt(B,1,"ctrl-bar no-print svelte-3it5rl",null,C,{pinned:r(),armed:a(),"overview-open":i(),bare:l(),tucked:l()&&g()}),K(B,"aria-hidden",i()?"true":void 0),$=Mt(O,1,"ctrl-pin svelte-3it5rl",null,$,{on:r()}),K(O,"aria-pressed",r()),K(O,"aria-label",r()?"PIN on":"PIN off"),K(O,"title",r()?"PIN — this bar stays visible (click to auto-hide again)":"PIN — keep this bar visible"),et=Mt(bt,1,"ctrl-anim svelte-3it5rl",null,et,{"has-anim":t(X)})}),Ze("click",O,()=>Dr.update(x=>!x)),v(F,B)};H(D,F=>{F(z)})}v(e,j),Be(),L()}ja(["click"]);var Iu=E('<div class="map gp-chrome no-print svelte-qfc4v2"><div class="view svelte-qfc4v2"></div></div>');function Ou(e,n){je(n,!1);const o=c();let r=m(n,"width",8,1920),a=m(n,"height",8,1080),i=m(n,"rect",24,()=>({left:0,top:0,width:1,height:1}));const l=160;_(()=>(nt(r()),nt(a())),()=>{s(o,Math.round(l/(r()/a())))}),Nn(),vn();var g=Iu(),f=u(g);p(g),V(()=>{re(g,`width:160px; height:${t(o)??""}px;`),re(f,`left:${nt(i()),at(()=>i().left*100)??""}%; top:${nt(i()),at(()=>i().top*100)??""}%; width:${nt(i()),at(()=>i().width*100)??""}%; height:${nt(i()),at(()=>i().height*100)??""}%;`)}),v(e,g),Be()}var Fu=as('<svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-s4ryjg"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>'),Hu=as('<svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-s4ryjg"><path d="M8 5v14l11-7z"></path></svg>'),Ku=E('<div class="anim svelte-s4ryjg"><button class="icon svelte-s4ryjg"><!></button> <div class="track svelte-s4ryjg" role="slider" tabindex="0" aria-label="Animation progress (audience)"><div class="fill svelte-s4ryjg"></div> <div class="knob svelte-s4ryjg"></div></div> <button class="icon svelte-s4ryjg" aria-label="Restart"><svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-s4ryjg"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"></path></svg></button> <span class="label svelte-s4ryjg">ANIMATE</span></div>');function ju(e,n){je(n,!1);let o=m(n,"onCommand",8,null),r=m(n,"scope",8,".content"),a=[],i=0,l=c(!1),g=c(!1),f=c(0),L=c(),k=0;function X(){const S=document.querySelector(r())??document;a=qa(S),i=wc(a),s(l,a.length>0&&i>0),t(l)&&(s(g,si(a)),s(f,Oo(a)))}function j(){var S;(S=o())==null||S({playing:t(g),fraction:t(f)})}function D(){s(f,Oo(a)),t(g)&&!a.every(S=>S.playState==="finished")?k=requestAnimationFrame(D):(a.length&&a.every(S=>S.playState==="finished")&&(s(g,!1),s(f,1),j()),k=0)}function z(){!k&&Ho&&(k=requestAnimationFrame(D))}function F(){k&&(cancelAnimationFrame(k),k=0)}function B(S){s(f,Math.max(0,Math.min(1,S)));const b=t(f)*i;for(const y of a)y.currentTime=Math.min(b,_c(y))}function C(){Oo(a)>=1&&B(0),xc(a),s(g,!0),z(),j()}function O(){kc(a),s(g,!1),F(),j()}function $(){t(g)?O():C()}function tt(){B(0),C()}let J=!1;function q(S){const b=t(L).getBoundingClientRect();return(S-b.left)/b.width}function Z(S){var b,y;J=!0,O(),B(q(S.clientX)),j(),(y=(b=t(L)).setPointerCapture)==null||y.call(b,S.pointerId)}function bt(S){J&&(B(q(S.clientX)),j())}function et(S){var b,y;J=!1,(y=(b=t(L)).releasePointerCapture)==null||y.call(b,S.pointerId)}function x(){F(),X(),t(l)?t(g)&&z():requestAnimationFrame(X)}Yn(x),yc(x),Es(F),vn();var P=hn(),W=Wt(P);{var M=S=>{var b=Ku(),y=u(b),N=u(y);{var pt=dt=>{var Tt=Fu();v(dt,Tt)},gt=dt=>{var Tt=Hu();v(dt,Tt)};H(N,dt=>{t(g)?dt(pt):dt(gt,-1)})}p(y);var lt=d(y,2);K(lt,"aria-valuemin",0),K(lt,"aria-valuemax",100);var ut=u(lt),I=d(ut,2);p(lt),Ae(lt,dt=>s(L,dt),()=>t(L));var yt=d(lt,2);Ke(2),p(b),V(dt=>{K(y,"aria-label",t(g)?"Pause":"Play"),K(lt,"aria-valuenow",dt),re(ut,`width:${t(f)*100}%`),re(I,`left:${t(f)*100}%`)},[()=>(t(f),at(()=>Math.round(t(f)*100)))]),Q("click",y,$),Q("pointerdown",lt,Z),Q("pointermove",lt,bt),Q("pointerup",lt,et),Q("click",yt,tt),v(S,b)};H(W,S=>{t(l)&&S(M)})}v(e,P),Be()}const Bu="/__geekpresent/note-load",Uu="/__geekpresent/note-save";async function qu(e){try{const n=await fetch(`${Bu}?route=${encodeURIComponent(e)}`),o=await n.json().catch(()=>({}));return n.ok?typeof o.text!="string"?{ok:!1,error:"server returned no note"}:{ok:!0,text:o.text,fingerprint:o.fingerprint,file:o.file}:{ok:!1,error:o.error||`HTTP ${n.status}`}}catch(n){return{ok:!1,error:n instanceof Error?n.message:String(n)}}}async function Gu(e,n,o){try{const r=await fetch(Uu,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({route:e,text:n,fingerprint:o})}),a=await r.json().catch(()=>({}));return r.ok?{ok:!0,file:a.file,fingerprint:a.fingerprint}:{ok:!1,error:a.error||`HTTP ${r.status}`}}catch(r){return{ok:!1,error:r instanceof Error?r.message:String(r)}}}var Wu=E('<span class="file svelte-4isy8i"> </span>'),Vu=E('<p class="error svelte-4isy8i" role="alert"> </p>'),Yu=E('<p class="hint svelte-4isy8i">Loading…</p>'),Xu=E('<textarea spellcheck="false" aria-label="Note source" class="svelte-4isy8i"></textarea> <p class="hint svelte-4isy8i">The HTML between &lt;Note&gt; and &lt;/Note&gt;. One element per line is one checkable line.</p>',1),Qu=E('<section aria-label="Edit speaker note"><header class="svelte-4isy8i"><span class="title svelte-4isy8i">EDIT NOTE</span> <!> <span class="spacer svelte-4isy8i"></span> <button type="button" class="save svelte-4isy8i" title="Save (Ctrl/Cmd+S)"> </button> <button type="button" title="Cancel (Esc)" class="svelte-4isy8i">CANCEL</button></header> <!> <!></section>');function Ju(e,n){je(n,!1);const o=c();let r=m(n,"route",8),a=m(n,"style",8,""),i=m(n,"id",8,""),l=m(n,"class",8,"");const g=Qr();let f=c("loading"),L=c(""),k=c(""),X="",j=c(""),D=c(""),z=c();Yn(async()=>{const b=await qu(r());if(!b.ok){s(f,"failed"),s(D,b.error??"could not load the note");return}s(L,s(k,b.text??"")),X=b.fingerprint??"",s(j,b.file??""),s(f,"ready"),queueMicrotask(()=>{var y;return(y=t(z))==null?void 0:y.focus()})});function F(b){t(o)&&b.preventDefault()}Yn(()=>window.addEventListener("beforeunload",F)),Es(()=>{typeof window<"u"&&window.removeEventListener("beforeunload",F)});async function B(){if(t(f)!=="ready")return;if(!t(o)){g("close");return}s(f,"saving"),s(D,"");const b=await Gu(r(),t(L),X);if(!b.ok){s(f,"ready"),s(D,b.error??"save failed");return}s(k,t(L)),g("saved",{file:b.file}),g("close")}function C(){t(o)&&!confirm("Discard your changes to this note?")||g("close")}function O(b){b.stopPropagation(),(b.ctrlKey||b.metaKey)&&!b.altKey&&b.key.toLowerCase()==="s"?(b.preventDefault(),B()):b.key==="Escape"&&(b.preventDefault(),C())}_(()=>(t(L),t(k)),()=>{s(o,t(L)!==t(k))}),Nn(),vn();var $=Qu(),tt=u($),J=d(u(tt),2);{var q=b=>{var y=Wu(),N=u(y,!0);p(y),V(()=>{K(y,"title",t(j)),kt(N,t(j))}),v(b,y)};H(J,b=>{t(j)&&b(q)})}var Z=d(J,4),bt=u(Z,!0);p(Z);var et=d(Z,2);p(tt);var x=d(tt,2);{var P=b=>{var y=Vu(),N=u(y,!0);p(y),V(()=>kt(N,t(D))),v(b,y)};H(x,b=>{t(D)&&b(P)})}var W=d(x,2);{var M=b=>{var y=Yu();v(b,y)},S=b=>{var y=Xu(),N=Wt(y);pl(N),Ae(N,pt=>s(z,pt),()=>t(z)),Ke(2),V(()=>N.disabled=t(f)==="saving"),ks(N,()=>t(L),pt=>s(L,pt)),v(b,y)};H(W,b=>{t(f)==="loading"?b(M):t(f)!=="failed"&&b(S,1)})}p($),V(()=>{Mt($,1,`note-editor no-print ${l()??""}`,"svelte-4isy8i"),K($,"id",i()||void 0),re($,a()||void 0),Z.disabled=t(f)!=="ready",kt(bt,t(f)==="saving"?"SAVING…":"SAVE")}),Q("click",Z,B),Q("click",et,C),Q("keydown",$,O),v(e,$),Be()}const Ii="adjustMode",Oi="canAdjust";try{localStorage.removeItem(Ii)}catch{}const Zs=Xe(!1);let Qa=!1;function Fi(){return ta(localStorage.getItem(Oi))}function Hi(){Ki.set(ni(!1,Fi(),Qa))}const Fo=Jo(Ii,!1,{codec:Zo(),sync:!1,storage:"session"}),Ki=Xe(ni(!1,Fi(),Qa));function Zu(e){Qa=e===!0,Hi()}function tf(e){const n=bc(e.searchParams);n!==null&&(localStorage.setItem(Oi,String(n)),n||Fo.set(!1)),Hi()}function ef(e,n=!1,o=!1){const r=((e==null?void 0:e.key)??"").toLowerCase();if(r==="escape"&&!e.ctrlKey&&!e.metaKey&&!e.altKey)return"close";if(Js(e==null?void 0:e.target))return"ignore";const a=Ec(e);if(a!=="ignore")return a;if(e.ctrlKey||e.metaKey||e.altKey||e.defaultPrevented)return"ignore";if(o){if(r==="arrowdown")return"tocDown";if(r==="arrowup")return"tocUp";if(r==="enter")return"tocSelect"}if(Tc(e))return e.shiftKey?"prev":"continue";if(r==="arrowright")return"next";if(r==="arrowleft")return"prev";switch(r){case"t":return"toc";case"c":return"checks";case"a":return n?"ink":"ignore";case"b":return"bars";case"e":return"editNote";case"r":return"record";default:return"ignore"}}var nf=E('<iframe class="preview-frame svelte-hqzamo" title="Current slide" tabindex="-1"></iframe>'),sf=E('<iframe class="preview-frame svelte-hqzamo" title="Next slide" tabindex="-1"></iframe>'),of=E('<div class="preview-end svelte-hqzamo">End of deck</div>'),af=E('<p class="no-matches svelte-hqzamo"> </p>'),rf=E('<span class="snip svelte-hqzamo"> </span>'),lf=E('<li class="svelte-hqzamo"><button type="button"><span class="n svelte-hqzamo"> </span> <span class="t svelte-hqzamo"> </span> <!></button></li>'),cf=E('<ol class="svelte-hqzamo"></ol>'),df=E('<div class="toc-menu svelte-hqzamo"><input class="search svelte-hqzamo" type="search" placeholder="Search slides…" aria-label="Search slides"/> <div class="toc-scroll svelte-hqzamo"><!></div></div>'),pf=E('<div class="toc-menu checks-menu svelte-hqzamo"><button type="button" class="svelte-hqzamo">Reset this page</button> <button type="button" class="svelte-hqzamo">Start over (whole deck)</button></div>'),uf=E('<div class="toc-menu checks-menu svelte-hqzamo"><button type="button" class="svelte-hqzamo"> </button> <button type="button" class="svelte-hqzamo">Reset ALL annotations</button></div>'),ff=E('<div title="Reset annotations (A)"><!> <!></div>'),hf=as('<svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-hqzamo"><path d="M8 5v14l11-7z"></path></svg>'),vf=as('<svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-hqzamo"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>'),mf=E('<div class="timer-menu svelte-hqzamo"><input type="text" inputmode="numeric" placeholder="mm:ss" aria-label="Set elapsed time" class="svelte-hqzamo"/> <button type="button" class="tm-set svelte-hqzamo">Set</button> <button type="button" class="tm-reset svelte-hqzamo">Reset</button></div>'),gf=E('<div class="preview-col no-print svelte-hqzamo"><div class="preview svelte-hqzamo"><div class="preview-label svelte-hqzamo">CURRENT</div> <div class="preview-box svelte-hqzamo"><!></div></div> <div class="preview svelte-hqzamo"><div class="preview-label svelte-hqzamo"> </div> <div class="preview-box svelte-hqzamo"><!></div></div></div> <!> <div role="separator" aria-orientation="vertical" aria-label="Resize previews and notes" title="Drag to resize"></div> <div class="bar no-print svelte-hqzamo"><div class="controls svelte-hqzamo"><div class="tools svelte-hqzamo"><span class="ov-btn svelte-hqzamo" title="All slides — pick one without the audience seeing you browse (O)"><!></span> <div title="Table of contents (T)"><!> <!></div> <div title="Reset checks (C)"><!> <!></div> <span class="bars-btn" title="Hide or show the bars on the audience screen (B)"><!></span> <span class="rec-btn" title="Record the slides window to a video for YouTube, with a replayable timeline (R)"><!></span> <span class="note-btn"><!></span> <!></div> <div class="nav svelte-hqzamo"><!> <!> <!> <!> <!></div> <!></div> <div class="meters svelte-hqzamo"><div class="pos svelte-hqzamo"> <span class="count svelte-hqzamo"> </span></div> <div class="clocks svelte-hqzamo"><span class="clock svelte-hqzamo"> </span> <div><button type="button"><!></button> <button type="button" title="Set / reset timer"> </button> <!></div></div></div></div>',1);function bf(e,n){je(n,!1);const o=()=>ht(Ua,"$page",f),r=()=>ht(bu,"$audienceBare",f),a=()=>ht(Zs,"$canSave",f),i=()=>ht(Qo,"$canAnnotate",f),l=()=>ht(ws,"$overviewOpen",f),g=()=>ht(ti,"$strokes",f),[f,L]=$n(),k=c(),X=c(),j=c(),D=c(),z=c(),F=c(),B=c(),C=c(),O=c(),$=c(),tt=c(),J=c(),q=c(),Z=c(),bt=c(),et=c(),x=c(),P=c(),W=c(),M=c();let S=m(n,"pages",24,()=>[]),b=m(n,"width",8,1920),y=m(n,"height",8,1080);const N=Xo();function pt(w){var mt,Gt;return(w==="back"?(mt=t(j))==null?void 0:mt.transitionBack:(Gt=t(j))==null?void 0:Gt.transition)??"slide"}function gt(w,mt){w&&uo(w+"?present",{viewTransitions:N,kind:pt(mt),direction:mt})}function lt(w){s(st,!1),uo(`./${w}?present`,{viewTransitions:N,kind:pt("forward"),direction:"forward"})}function ut(w){Tl(t(C),w)}function I(){Al(t(C))}let yt=c(0),dt=c(0),Tt=c(0),vt=c(0),st=c(!1),R=c(),G=c(""),it=c(-1),wt=c("");function $t(w){s(it,gi(t(it)<0?t(et):t(it),w,t(bt).length))}function Lt(){const w=t(it)<0&&t(Z)?0:t(it),mt=t(bt)[w];mt&&lt(mt.path)}function ye(w){if(w.stopPropagation(),w.key==="Escape"){w.preventDefault(),t(G)?s(G,""):s(st,!1);return}if(w.key==="ArrowDown"){w.preventDefault(),$t(1);return}if(w.key==="ArrowUp"){w.preventDefault(),$t(-1);return}w.key==="Enter"&&(w.preventDefault(),Lt())}function jt(w){w.focus()}function Rt(w,mt){const Gt=qe=>{qe&&typeof w.scrollIntoView=="function"&&w.scrollIntoView({block:"nearest"})};return Gt(mt),{update:Gt}}let Nt=c(!1),xt=c();function Ct(){s(Nt,!1),Ml(t(C),t(k)),window.dispatchEvent(new CustomEvent("gp:checks-clear"))}function Yt(){s(Nt,!1),zl(t(C)),window.dispatchEvent(new CustomEvent("gp:checks-clear"))}let qt=c(!1),ce=c();function Qt(){s(qt,!1),Ma()}function _t(){s(qt,!1),za()}function fe(w){t(R)&&!t(R).contains(w.target)&&s(st,!1),t(xt)&&!t(xt).contains(w.target)&&s(Nt,!1),t(ce)&&!t(ce).contains(w.target)&&s(qt,!1),t(Un)&&!t(Un).contains(w.target)&&s(gn,!1)}function Jt(){s(st,!1),s(Nt,!1),s(qt,!1),s(gn,!1)}function we(){Jt(),ws.set(!0)}function Re(){qo(!r())}function de(){jl(t(C))}let ie=c(!1),Qe=c(!1),en;function on(){if(!t(ie)){if(Jt(),!a()){s(Qe,!0),clearTimeout(en),en=setTimeout(()=>s(Qe,!1),2500);return}s(ie,!0)}}function kn(w){switch(ef(w,i(),t(st))){case"close":Jt();break;case"toc":{w.preventDefault();const mt=!t(st);Jt(),s(st,mt);break}case"checks":{w.preventDefault();const mt=!t(Nt);Jt(),s(Nt,mt);break}case"ink":{w.preventDefault();const mt=!t(qt);Jt(),s(qt,mt);break}case"bars":w.preventDefault(),Re();break;case"record":w.preventDefault(),de();break;case"editNote":w.preventDefault(),on();break;case"next":w.preventDefault(),gt(t(D).next,"forward");break;case"prev":w.preventDefault(),gt(t(D).prev,"back");break;case"first":w.preventDefault(),gt(t(D).first,"back");break;case"last":w.preventDefault(),gt(t(D).last,"forward");break;case"continue":w.preventDefault(),I();break;case"tocUp":w.preventDefault(),$t(-1);break;case"tocDown":w.preventDefault(),$t(1);break;case"tocSelect":w.preventDefault(),Lt();break}}let rs=c(""),is=c("00:00"),mn=0,Ie=c(null),xn;function Ln(w){const mt=Math.max(0,Math.floor(w)),Gt=Math.floor(mt/3600),qe=Math.floor(mt%3600/60),h=mt%60,U=ct=>String(ct).padStart(2,"0");return Gt>0?`${Gt}:${U(qe)}:${U(h)}`:`${U(qe)}:${U(h)}`}function Xn(){return((t(Ie)??Date.now())-mn)/1e3}function Bn(){s(rs,new Date().toLocaleTimeString()),s(is,Ln(Xn()))}function Rn(){const w=Date.now();t(Ie)==null?s(Ie,w):(mn+=w-t(Ie),va(t(C),mn),s(Ie,null)),hr(t(C),t(Ie)),Bn()}let Un=c(),gn=c(!1),Qn=c("");function Ts(){s(gn,!t(gn)),t(gn)&&s(Qn,t(is))}function As(w){const mt=w.trim().split(":");if(mt.length<1||mt.length>3)return null;const Gt=mt.map(qe=>Number(qe));return Gt.some(qe=>!Number.isFinite(qe)||qe<0)?null:Gt.length===1?Gt[0]*60:Gt.length===2?Gt[0]*60+Gt[1]:Gt[0]*3600+Gt[1]*60+Gt[2]}function T(){const w=As(t(Qn));if(w==null)return;const mt=t(Ie)??Date.now();mn=va(t(C),mt-w*1e3),Bn(),s(gn,!1)}function ot(){mn=va(t(C)),s(Ie,null),hr(t(C),null),Bn(),s(gn,!1)}let zt=c(),Ut=c(!1),se=c(!0),We=c(!1);const an=w=>{const mt=window.innerWidth||1;return Math.max(.2*mt,Math.min(.8*mt,w))};function rn(w){document.body.style.setProperty("--gp-split",`${Math.round(an(w))}px`)}function ms(){if(!t(dt))return;const w=getComputedStyle(document.body),mt=parseFloat(w.getPropertyValue("--gp-inset"))||20,Gt=parseFloat(w.getPropertyValue("--gp-gap"))||16;rn(mt+t(dt)*(b()/y())+Gt/2)}function Ns(w){s(Ut,!0),t(zt).setPointerCapture(w.pointerId),w.preventDefault()}function qn(w){t(Ut)&&rn(w.clientX)}function A(w){var mt,Gt;t(Ut)&&(s(Ut,!1),s(se,!1),(Gt=(mt=t(zt)).releasePointerCapture)==null||Gt.call(mt,w.pointerId),Nl(an(w.clientX)/(window.innerWidth||1)))}Yn(()=>{document.body.classList.add("gp-present"),mn=_l(t(C)),s(Ie,Sl(t(C))),Bn(),xn=setInterval(Bn,1e3);const w=El();w!=null&&(s(se,!1),rn(w*window.innerWidth)),s(We,!0),document.addEventListener("click",fe),window.addEventListener("keydown",kn)}),Es(()=>{xn&&clearInterval(xn),clearTimeout(en),typeof document<"u"&&(document.body.classList.remove("gp-present"),document.body.style.removeProperty("--gp-split"),document.removeEventListener("click",fe)),typeof window<"u"&&window.removeEventListener("keydown",kn)}),_(()=>o(),()=>{s(k,o().url.pathname.replace(/\/+$/,"").split("/").pop()||"")}),_(()=>(nt(S()),t(k)),()=>{s(X,S().findIndex(w=>w.path===t(k)))}),_(()=>(nt(S()),t(X)),()=>{s(j,S()[t(X)])}),_(()=>(nt(S()),t(k)),()=>{s(D,Jr(S(),t(k),"./"))}),_(()=>(t(X),nt(S())),()=>{s(z,t(X)>=0?S()[t(X)+1]:void 0)}),_(()=>t(j),()=>{s(F,t(j)?`./${t(j).path}?clean`:"")}),_(()=>t(z),()=>{s(B,t(z)?`./${t(z).path}?clean`:"")}),_(()=>o(),()=>{s(C,Na(o().url.pathname))}),_(()=>(o(),lo),()=>{s(O,o().url.pathname.replace(lo,"").split("/").filter(Boolean)[0]??"")}),_(()=>(t(yt),t(dt),nt(b()),nt(y())),()=>{s($,t(yt)>0&&t(dt)>0?Math.min(t(yt)/b(),t(dt)/y()):0)}),_(()=>(t(Tt),t(vt),nt(b()),nt(y())),()=>{s(tt,t(Tt)>0&&t(vt)>0?Math.min(t(Tt)/b(),t(vt)/y()):0)}),_(()=>(t(O),nt(S())),()=>{s(J,bi(t(O),S()))}),_(()=>t(st),()=>{t(st)||(s(G,""),s(it,-1))}),_(()=>(t(J),t(G)),()=>{s(q,mi(t(J),t(G)))}),_(()=>t(G),()=>{s(Z,t(G).trim().length>0)}),_(()=>(t(Z),t(q),nt(S())),()=>{s(bt,t(Z)?t(q).map(w=>({path:w.path,title:w.title,number:w.number,snippet:w.snippet})):S().map((w,mt)=>({path:w.path,title:w.title,number:mt+1})))}),_(()=>(t(Z),t(X)),()=>{s(et,t(Z)?-1:t(X))}),_(()=>(t(G),t(wt)),()=>{t(G)!==t(wt)&&(s(wt,t(G)),s(it,-1))}),_(()=>r(),()=>{s(x,r()?"▭ Bars: hidden":"▭ Bars: shown")}),_(()=>t(Qe),()=>{s(P,t(Qe)?"NOT ALLOWED":"EDIT NOTE")}),_(()=>t(Qe),()=>{s(W,t(Qe)?"Editing notes needs the dev server (pnpm dev) — there is no source to write here.":"Edit this slide's speaker note (E)")}),_(()=>t(Ie),()=>{s(M,t(Ie)!=null)}),_(()=>(t(We),t(se),t(dt)),()=>{t(We)&&t(se)&&t(dt)&&ms()}),Nn(),vn();var Y=gf(),rt=Wt(Y),Ot=u(rt),Zt=d(u(Ot),2),ke=u(Zt);{var pe=w=>{var mt=nf();V(()=>{K(mt,"src",t(F)),re(mt,`width:${b()??""}px; height:${y()??""}px; transform: translate(-50%, -50%) scale(${t($)??""});`)}),v(w,mt)};H(ke,w=>{t(F)&&w(pe)})}p(Zt),p(Ot);var It=d(Ot,2),oe=u(It),Vt=u(oe);p(oe);var Pt=d(oe,2),Bt=u(Pt);{var Ft=w=>{var mt=sf();V(()=>{K(mt,"src",t(B)),re(mt,`width:${b()??""}px; height:${y()??""}px; transform: translate(-50%, -50%) scale(${t(tt)??""});`)}),v(w,mt)},De=w=>{var mt=of();v(w,mt)};H(Bt,w=>{t(B)?w(Ft):w(De,-1)})}p(Pt),p(It),p(rt);var Ne=d(rt,2);{var ve=w=>{Ju(w,{get route(){return o(),at(()=>o().url.pathname)},$$events:{close:()=>s(ie,!1)}})};H(Ne,w=>{t(ie)&&w(ve)})}var ee=d(Ne,2);let _e;Ae(ee,w=>s(zt,w),()=>t(zt));var Ce=d(ee,2),Oe=u(Ce),ae=u(Oe),Me=u(ae),Mn=u(Me);jn(Mn,{text:"OVERVIEW",mnemonic:"O",get isSelected(){return l()},$$events:{click:we}}),p(Me);var At=d(Me,2);let ft;var $e=u(At);{let w=fn(()=>t(st)?"ToC ▾":"ToC ▴");jn($e,{get text(){return t(w)},mnemonic:"T",get isSelected(){return t(st)},$$events:{click:()=>s(st,!t(st))}})}var me=d($e,2);{var Dt=w=>{var mt=df(),Gt=u(mt);os(Gt),Xs(()=>ks(Gt,()=>t(G),St=>s(G,St))),Xs(()=>Q("keydown",Gt,ye)),ro(Gt,St=>jt==null?void 0:jt(St));var qe=d(Gt,2),h=u(qe);{var U=St=>{var Ht=af(),le=u(Ht);p(Ht),V(Et=>kt(le,`No slides match "${Et??""}".`),[()=>(t(G),at(()=>t(G).trim()))]),v(St,Ht)},ct=St=>{var Ht=cf();Cn(Ht,5,()=>t(bt),vs,(le,Et,ze)=>{var Pe=lf(),xe=u(Pe);let Zn;var ne=u(xe),be=u(ne,!0);p(ne);var Je=d(ne,2),Ve=u(Je,!0);p(Je);var Le=d(Je,2);{var Tn=Hn=>{var ts=rf(),Ee=u(ts,!0);p(ts),V(()=>kt(Ee,(t(Et),at(()=>t(Et).snippet)))),v(Hn,ts)};H(Le,Hn=>{t(Et),at(()=>t(Et).snippet)&&Hn(Tn)})}p(xe),Xs(()=>Q("click",xe,()=>lt(t(Et).path))),ro(xe,(Hn,ts)=>Rt==null?void 0:Rt(Hn,ts),()=>ze===t(it)),p(Pe),V(()=>{Zn=Mt(xe,1,"svelte-hqzamo",null,Zn,{current:t(Et).path===t(k),selected:ze===t(it)}),kt(be,(t(Et),at(()=>t(Et).number??""))),kt(Ve,(t(Et),at(()=>t(Et).title)))}),v(le,Pe)}),p(Ht),v(St,Ht)};H(h,St=>{t(Z),t(bt),at(()=>t(Z)&&t(bt).length===0)?St(U):St(ct,-1)})}p(qe),p(mt),v(w,mt)};H(me,w=>{t(st)&&w(Dt)})}p(At),Ae(At,w=>s(R,w),()=>t(R));var ge=d(At,2);let Se;var nn=u(ge);{let w=fn(()=>t(Nt)?"☑ Checks ▾":"☑ Checks ▴"),mt=fn(()=>t(Nt)?"☑ Checks ▾":"☑ Checks ▴");jn(nn,{get text(){return t(w)},get hoverText(){return t(mt)},mnemonic:"C",get isSelected(){return t(Nt)},$$events:{click:()=>s(Nt,!t(Nt))}})}var bn=d(nn,2);{var Ue=w=>{var mt=pf(),Gt=u(mt),qe=d(Gt,2);p(mt),Q("click",Gt,Ct),Q("click",qe,Yt),v(w,mt)};H(bn,w=>{t(Nt)&&w(Ue)})}p(ge),Ae(ge,w=>s(xt,w),()=>t(xt));var In=d(ge,2),On=u(In);jn(On,{get text(){return t(x)},get hoverText(){return t(x)},mnemonic:"B",get isSelected(){return r()},$$events:{click:Re}}),p(In);var ln=d(In,2),yn=u(ln);jn(yn,{text:"● REC",hoverText:"● REC",mnemonic:"R",$$events:{click:de}}),p(ln);var he=d(ln,2),cn=u(he);{let w=fn(()=>t(Qe)?"":"E");jn(cn,{get text(){return t(P)},get hoverText(){return t(P)},get mnemonic(){return t(w)},get isSelected(){return t(ie)},$$events:{click:on}})}p(he);var ls=d(he,2);{var gs=w=>{var mt=ff();let Gt;var qe=u(mt);{let ct=fn(()=>t(qt)?"✎ Annotate ▾":"✎ Annotate ▴"),St=fn(()=>t(qt)?"✎ Annotate ▾":"✎ Annotate ▴");jn(qe,{get text(){return t(ct)},get hoverText(){return t(St)},mnemonic:"A",get isSelected(){return t(qt)},$$events:{click:()=>s(qt,!t(qt))}})}var h=d(qe,2);{var U=ct=>{var St=uf(),Ht=u(St),le=u(Ht);p(Ht);var Et=d(Ht,2);p(St),V(()=>{Ht.disabled=(g(),at(()=>g().length===0)),kt(le,`Reset this slide${g(),at(()=>g().length?` (${g().length})`:"")??""}`)}),Q("click",Ht,Qt),Q("click",Et,_t),v(ct,St)};H(h,ct=>{t(qt)&&ct(U)})}p(mt),Ae(mt,ct=>s(ce,ct),()=>t(ce)),V(()=>Gt=Mt(mt,1,"toc checks svelte-hqzamo",null,Gt,{open:t(qt)})),v(w,mt)};H(ls,w=>{i()&&w(gs)})}p(ae);var dn=d(ae,2),Gn=u(dn);{let w=fn(()=>(t(D),at(()=>!t(D).first)));jn(Gn,{text:"FIRST",get isDisabled(){return t(w)},$$events:{click:()=>gt(t(D).first,"back")}})}var Jn=d(Gn,2);{let w=fn(()=>(t(D),at(()=>!t(D).prev)));jn(Jn,{text:"◀ PREV",get isDisabled(){return t(w)},$$events:{click:()=>gt(t(D).prev,"back")}})}var te=d(Jn,2);jn(te,{text:"CONTINUE",$$events:{click:I}});var Kt=d(te,2);{let w=fn(()=>(t(D),at(()=>!t(D).next)));jn(Kt,{text:"NEXT ▶",get isDisabled(){return t(w)},$$events:{click:()=>gt(t(D).next,"forward")}})}var ue=d(Kt,2);{let w=fn(()=>(t(D),at(()=>!t(D).last)));jn(ue,{text:"LAST",get isDisabled(){return t(w)},$$events:{click:()=>gt(t(D).last,"forward")}})}p(dn);var Fe=d(dn,2);ju(Fe,{onCommand:ut}),p(Oe);var _n=d(Oe,2),zn=u(_n),cs=u(zn),Fn=d(cs),Ms=u(Fn);p(Fn),p(zn);var Hs=d(zn,2),Sn=u(Hs),Wn=u(Sn);p(Sn);var En=d(Sn,2);let Ks;var Pn=u(En);let vo;var ra=u(Pn);{var ia=w=>{var mt=hf();v(w,mt)},No=w=>{var mt=vf();v(w,mt)};H(ra,w=>{t(M)?w(ia):w(No,-1)})}p(Pn);var js=d(Pn,2);let mo;var la=u(js);p(js);var Mo=d(js,2);{var ca=w=>{var mt=mf(),Gt=u(mt);os(Gt);var qe=d(Gt,2),h=d(qe,2);p(mt),ks(Gt,()=>t(Qn),U=>s(Qn,U)),Q("keydown",Gt,U=>{U.key==="Enter"&&T()}),Q("click",qe,T),Q("click",h,ot),v(w,mt)};H(Mo,w=>{t(gn)&&w(ca)})}p(En),Ae(En,w=>s(Un,w),()=>t(Un)),p(Hs),p(_n),p(Ce),V(()=>{re(Zt,`aspect-ratio: ${b()??""} / ${y()??""};`),kt(Vt,`NEXT ▸ ${t(z),at(()=>t(z)?t(z).title:"— end of deck —")??""}`),re(Pt,`aspect-ratio: ${b()??""} / ${y()??""};`),_e=Mt(ee,1,"splitter no-print svelte-hqzamo",null,_e,{dragging:t(Ut)}),ft=Mt(At,1,"toc svelte-hqzamo",null,ft,{open:t(st)}),Se=Mt(ge,1,"toc checks svelte-hqzamo",null,Se,{open:t(Nt)}),K(he,"title",t(W)),kt(cs,`${t(j),at(()=>t(j)?t(j).title:"")??""} `),kt(Ms,`${t(X)>=0?t(X)+1:"?"} / ${nt(S()),at(()=>S().length)??""}`),kt(Wn,`🕑 ${t(rs)??""}`),Ks=Mt(En,1,"timer svelte-hqzamo",null,Ks,{open:t(gn)}),vo=Mt(Pn,1,"pause-btn svelte-hqzamo",null,vo,{paused:t(M)}),K(Pn,"title",t(M)?"Resume timer":"Pause timer"),K(Pn,"aria-label",t(M)?"Resume timer":"Pause timer"),mo=Mt(js,1,"elapsed svelte-hqzamo",null,mo,{paused:t(M)}),kt(la,`⏱ ${t(is)??""}`)}),ao(Zt,"clientWidth",w=>s(yt,w)),ao(Zt,"clientHeight",w=>s(dt,w)),ao(Pt,"clientWidth",w=>s(Tt,w)),ao(Pt,"clientHeight",w=>s(vt,w)),Q("pointerdown",ee,Ns),Q("pointermove",ee,qn),Q("pointerup",ee,A),Q("click",Pn,Rn),Q("click",js,Ts),v(e,Y),Be(),L()}const Ja="livePointer";function yf(e){if(!e||!e.has("pointer"))return null;const n=(e.get("pointer")??"").trim().toLowerCase();return n!=="off"&&n!=="false"&&n!=="0"}function wf(e,n){return e!==null?e:n===!0}function kf(e){return e==="dot"||e==="ring"?e:"arrow"}const Za=40;function xf(e){const n=Number(e);return!Number.isFinite(n)||n<=0?Za:Math.min(200,Math.max(8,n))}function _f(e,n){if(e==="arrow"){const o=-.125*n;return[o,o]}return[-n/2,-n/2]}function ji(){try{return ta(localStorage.getItem(Ja))}catch{return null}}const tr=Xe(ji()),Bi=Xe(!1),er=Qs([tr,Bi],([e,n])=>wf(e,n));function Ui(e){try{localStorage.setItem(Ja,String(e))}catch{}tr.set(e)}function Co(){Ui(!Te(er))}function Sf(e){Bi.set(e===!0)}function Ef(e){const n=yf(e.searchParams);n!==null&&Ui(n)}window.addEventListener("storage",e=>{(e.key===Ja||e.key===null)&&tr.set(ji())});var Tf=E('<span class="live-ripple svelte-19i1gra"></span>'),Af=as('<svg viewBox="0 0 24 24" width="100%" height="100%" class="svelte-19i1gra"><circle cx="12" cy="12" r="8" fill="var(--live-pointer-fill, #ffd23f)" stroke="var(--live-pointer-outline, rgba(0, 0, 0, 0.8))" stroke-width="1.4" class="svelte-19i1gra"></circle></svg>'),Nf=as('<svg viewBox="0 0 24 24" width="100%" height="100%" class="svelte-19i1gra"><circle cx="12" cy="12" r="8" fill="none" stroke="var(--live-pointer-fill, #ffd23f)" stroke-width="2.5" class="svelte-19i1gra"></circle></svg>'),Mf=as('<svg viewBox="0 0 24 24" width="100%" height="100%" class="svelte-19i1gra"><path d="M3 3 L10.07 19.97 L12.58 12.58 L19.97 10.07 Z" fill="var(--live-pointer-fill, #ffd23f)" stroke="var(--live-pointer-outline, rgba(0, 0, 0, 0.8))" stroke-width="1.4" stroke-linejoin="round" class="svelte-19i1gra"></path></svg>'),zf=E('<span class="live-glyph svelte-19i1gra"><!></span>'),Pf=E('<div aria-hidden="true"><!> <!></div>');function Df(e,n){je(n,!0);const o=()=>ht(er,"$livePointer",r),[r,a]=$n();let i=m(n,"shape",3,"arrow"),l=m(n,"size",3,Za),g=m(n,"style",3,""),f=m(n,"id",3,""),L=m(n,"class",3,"");const k=He(()=>kf(i())),X=He(()=>xf(l())),j=He(()=>_f(t(k),t(X)));let D=tn(0),z=tn(0),F=tn(!1),B=tn(Ea([])),C=0;function O(x){s(D,x.clientX,!0),s(z,x.clientY,!0),s(F,!0)}function $(x){O(x);const P={id:C++,x:x.clientX,y:x.clientY};s(B,[...t(B),P],!0),setTimeout(()=>{s(B,t(B).filter(W=>W.id!==P.id),!0)},700)}function tt(){s(F,!1)}let J=!1;function q(x){if(x===J)return;J=x;const P=document.documentElement,W={capture:!0,passive:!0};x?(P.classList.add("gp-live-pointer"),window.addEventListener("pointermove",O,W),window.addEventListener("pointerdown",$,W),P.addEventListener("mouseleave",tt)):(P.classList.remove("gp-live-pointer"),window.removeEventListener("pointermove",O,W),window.removeEventListener("pointerdown",$,W),P.removeEventListener("mouseleave",tt),s(F,!1),s(B,[],!0))}Is(()=>{q(o())}),Es(()=>q(!1));var Z=hn(),bt=Wt(Z);{var et=x=>{var P=Pf(),W=u(P);Cn(W,17,()=>t(B),b=>b.id,(b,y)=>{var N=Tf();V(()=>re(N,`left:${t(y).x??""}px; top:${t(y).y??""}px; --live-ripple-size:${t(X)??""}px;`)),v(b,N)});var M=d(W,2);{var S=b=>{var y=zf(),N=u(y);{var pt=ut=>{var I=Af();v(ut,I)},gt=ut=>{var I=Nf();v(ut,I)},lt=ut=>{var I=Mf();v(ut,I)};H(N,ut=>{t(k)==="dot"?ut(pt):t(k)==="ring"?ut(gt,1):ut(lt,-1)})}p(y),V(()=>re(y,`width:${t(X)??""}px; height:${t(X)??""}px; transform: translate3d(${t(D)+t(j)[0]}px, ${t(z)+t(j)[1]}px, 0);`)),v(b,y)};H(M,b=>{t(F)&&b(S)})}p(P),V(()=>{Mt(P,1,`live-pointer no-print ${L()??""}`,"svelte-19i1gra"),K(P,"id",f()||void 0),re(P,g()||void 0)}),v(x,P)};H(bt,x=>{o()&&x(et)})}v(e,Z),Be(),a()}const Cf={mod:"mod",cmd:"cmd",command:"cmd",meta:"cmd","⌘":"cmd",ctrl:"ctrl",control:"ctrl","⌃":"ctrl",alt:"alt",opt:"alt",option:"alt","⌥":"alt",shift:"shift","⇧":"shift",win:"win",windows:"win",super:"win",enter:"enter",return:"enter",esc:"esc",escape:"esc",tab:"tab",space:"space",spacebar:"space",backspace:"backspace",bksp:"backspace",del:"delete",delete:"delete",ins:"insert",insert:"insert",up:"up",arrowup:"up",down:"down",arrowdown:"down",left:"left",arrowleft:"left",right:"right",arrowright:"right",pgup:"pageup",pageup:"pageup",pgdn:"pagedown",pagedown:"pagedown",home:"home",end:"end"},$f={cmd:"Cmd",ctrl:"Ctrl",alt:"Alt",shift:"Shift",win:"Win",enter:"Enter",esc:"Esc",tab:"Tab",space:"Space",backspace:"Backspace",delete:"Delete",insert:"Insert",pageup:"Page Up",pagedown:"Page Down",home:"Home",end:"End"},Lr={up:"↑",down:"↓",left:"←",right:"→"},Rr={cmd:"⌘",ctrl:"⌃",alt:"⌥",shift:"⇧",enter:"↩",esc:"⎋",tab:"⇥",space:"␣",backspace:"⌫",delete:"⌦",pageup:"⇞",pagedown:"⇟",home:"↖",end:"↘"};function Lf(e){const n=[];let o="";for(const r of e){if(r!=="+"){o+=r;continue}o?(n.push(o),o=""):n[n.length-1]!=="+"&&n.push("+")}return o&&n.push(o),n}function Rf(e,n="pc",o=!0){if(typeof e!="string")return"";const r=e.trim();if(!r)return"";let a=Cf[r.toLowerCase()];return a==="mod"&&(a=n==="mac"?"cmd":"ctrl"),a?Lr[a]?Lr[a]:n==="mac"&&o&&Rr[a]?Rr[a]:$f[a]??r:[...r].length===1?r.toUpperCase():r}function Ir(e,n="pc",o=!0){return typeof e!="string"?[]:e.trim().split(/\s+/).filter(Boolean).map(r=>Lf(r).map(a=>Rf(a,n,o)).filter(Boolean)).filter(r=>r.length>0)}function If(e="pc",n=!0){return e==="mac"&&n?"":"+"}function Of(e){var o;if(!e)return"pc";const n=((o=e.userAgentData)==null?void 0:o.platform)||e.platform||e.userAgent||"";return/mac|iphone|ipad|ipod/i.test(n)?"mac":"pc"}var Ff=E('<span class="then svelte-m8sum" aria-hidden="true"> </span>'),Hf=E('<span class="join svelte-m8sum"> </span>'),Kf=E('<!> <kbd class="cap svelte-m8sum"> </kbd>',1),jf=E('<!> <kbd class="chord svelte-m8sum"></kbd>',1),Bf=E("<span></span>"),Uf=E('<span><kbd class="chord svelte-m8sum"><kbd class="cap svelte-m8sum"><!></kbd></kbd></span>');function $o(e,n){const o=ul(n);je(n,!1);const r=c(),a=c(),i=c(),l=c(),g=c();let f=m(n,"keys",8,""),L=m(n,"platform",8,"pc"),k=m(n,"symbols",8,!0),X=m(n,"join",8,null),j=m(n,"then",8,"then"),D=m(n,"style",8,""),z=m(n,"id",8,""),F=m(n,"class",8,""),B=c("pc");Yn(()=>{L()==="auto"&&s(B,Of(globalThis.navigator))}),_(()=>(nt(L()),t(B)),()=>{s(r,L()==="auto"?t(B):L()==="mac"?"mac":"pc")}),_(()=>(nt(f()),t(r),nt(k())),()=>{s(a,Ir(f(),t(r),k()))}),_(()=>(nt(X()),t(r),nt(k())),()=>{s(i,X()??If(t(r),k()))}),_(()=>(t(r),nt(k())),()=>{s(l,t(r)==="mac"&&k())}),_(()=>(t(l),nt(f()),t(r),nt(j())),()=>{s(g,t(l)?Ir(f(),t(r),!1).map(J=>J.join(" ")).join(`, ${j()||"then"} `):"")}),Nn(),vn();var C=hn(),O=Wt(C);{var $=J=>{var q=Bf();Cn(q,5,()=>t(a),vs,(Z,bt,et)=>{var x=jf(),P=Wt(x);{var W=S=>{var b=Ff(),y=u(b,!0);p(b),V(()=>kt(y,j())),v(S,b)};H(P,S=>{et>0&&j()&&S(W)})}var M=d(P,2);Cn(M,5,()=>t(bt),vs,(S,b,y)=>{var N=Kf(),pt=Wt(N);{var gt=I=>{var yt=Hf(),dt=u(yt,!0);p(yt),V(()=>kt(dt,t(i))),v(I,yt)};H(pt,I=>{y>0&&t(i)&&I(gt)})}var lt=d(pt,2),ut=u(lt,!0);p(lt),V(()=>kt(ut,t(b))),v(S,N)}),p(M),V(()=>K(M,"aria-hidden",t(l)?"true":void 0)),v(Z,x)}),p(q),V(()=>{Mt(q,1,`kbd ${F()??""}`,"svelte-m8sum"),K(q,"id",z()||void 0),re(q,D()),K(q,"aria-label",t(l)?t(g):void 0)}),v(J,q)},tt=J=>{var q=Uf(),Z=u(q),bt=u(Z),et=u(bt);Ba(et,n,"default",{},null),p(bt),p(Z),p(q),V(()=>{Mt(q,1,`kbd ${F()??""}`,"svelte-m8sum"),K(q,"id",z()||void 0),re(q,D())}),v(J,q)};H(O,J=>{t(a),at(()=>t(a).length)?J($):at(()=>o.default)&&J(tt,1)})}v(e,C),Be()}const Go=Jo("geekpresent:onboard:done",!1,{codec:Zo(),sync:!0});function $s(){Te(Go)||Go.set(!0)}const qi=8e3;function qf(e){return typeof e=="number"&&Number.isFinite(e)&&e>=0?e:qi}function Gi(e,n){return ho(e).findIndex(o=>o.path===n)}function Gf(e,n){return Gi(e,n)===0&&ho(e).length>1}function Wf(e,n){return Gi(e,n)>0}function Vf(e){return e.suppressed?!1:!!e.force||e.offered&&!e.done&&e.firstSlide}const Yf=new Set([" ","Spacebar","ArrowRight","ArrowLeft","PageDown","PageUp"]),Xf=new Set(["Enter","ArrowDown","ArrowUp"]);function Qf(e,n={}){return n.ctrl||n.meta||n.alt?"none":Yf.has(e)?"explore":Xf.has(e)?"stray":"none"}var Jf=E('<div class="edge top gp-chrome no-print svelte-2rg8pd" aria-hidden="true"></div> <div class="edge bottom gp-chrome no-print svelte-2rg8pd" aria-hidden="true"></div>',1),Zf=E('<p class="row alt-bars svelte-2rg8pd"><!> tool bar <span class="where svelte-2rg8pd">(top)</span> + nav bar <span class="where svelte-2rg8pd">(bottom)</span></p> <p class="row svelte-2rg8pd">or point at the <b class="svelte-2rg8pd">top</b> or <b class="svelte-2rg8pd">bottom</b> edge of the window</p>',1),th=E(`<div><!> <div role="status" aria-live="polite"><p class="title svelte-2rg8pd">New here? Here's how to get around.</p> <p class="row svelte-2rg8pd"><!> next slide <span class="sep svelte-2rg8pd" aria-hidden="true">·</span> <!> next step <span class="sep svelte-2rg8pd" aria-hidden="true">·</span> <!> back</p> <!> <button type="button" class="got-it svelte-2rg8pd">Got it</button></div></div>`);function eh(e,n){je(n,!1);const o=()=>ht(Go,"$onboardDone",r),[r,a]=$n(),i=c(),l=c();let g=m(n,"offered",8,!0),f=m(n,"firstSlide",8,!1),L=m(n,"suppressed",8,!1),k=m(n,"bars",8,!0),X=m(n,"delayMs",8,8e3),j=m(n,"force",8,!1),D=m(n,"themeClass",8,""),z=m(n,"style",8,""),F=m(n,"id",8,""),B=m(n,"class",8,""),C=c(!1),O=c(!1),$=null,tt=c(!1);function J(y){t(O)||$||($=setTimeout(Z,y))}function q(){$&&clearTimeout($),$=null,s(O,!1)}function Z(){$&&clearTimeout($),$=null,s(O,!0)}function bt(){s(tt,!0),$s()}const et='a, button, input, textarea, select, label, [contenteditable], [role="button"], .overlay, .gp-chrome';function x(y){if(!t(l)||Js(y.target))return;const N=Qf(y.key,{ctrl:y.ctrlKey,meta:y.metaKey,alt:y.altKey});N==="explore"?bt():N==="stray"&&Z()}function P(y){var pt;if(!t(l))return;const N=y.target;(pt=N==null?void 0:N.closest)!=null&&pt.call(N,et)||Z()}function W(){t(l)&&Z()}Yn(()=>(j()&&Go.set(!1),s(C,!0),window.addEventListener("keydown",x,!0),window.addEventListener("pointerdown",P,!0),window.addEventListener("wheel",W,{capture:!0,passive:!0}),()=>{window.removeEventListener("keydown",x,!0),window.removeEventListener("pointerdown",P,!0),window.removeEventListener("wheel",W,{capture:!0}),q()})),_(()=>(nt(j()),t(tt)),()=>{s(i,j()&&!t(tt))}),_(()=>(t(C),nt(g()),o(),nt(f()),nt(L()),t(i)),()=>{s(l,t(C)&&Vf({offered:g(),done:o(),firstSlide:f(),suppressed:L(),force:t(i)}))}),_(()=>(t(l),t(i),nt(X())),()=>{t(l)&&t(i)?Z():t(l)?J(qf(X())):q()}),Nn(),vn();var M=hn(),S=Wt(M);{var b=y=>{var N=th(),pt=u(N);{var gt=R=>{var G=Jf();Ke(2),v(R,G)};H(pt,R=>{k()&&R(gt)})}var lt=d(pt,2),ut=d(u(lt),2),I=u(ut);$o(I,{children:(R,G)=>{Ke();var it=ss("→");v(R,it)},$$slots:{default:!0}});var yt=d(I,4);$o(yt,{children:(R,G)=>{Ke();var it=ss("Space");v(R,it)},$$slots:{default:!0}});var dt=d(yt,4);$o(dt,{children:(R,G)=>{Ke();var it=ss("←");v(R,it)},$$slots:{default:!0}}),Ke(),p(ut);var Tt=d(ut,2);{var vt=R=>{var G=Zf(),it=Wt(G),wt=u(it);$o(wt,{keys:"Alt+.",platform:"auto"}),Ke(4),p(it),Ke(2),v(R,G)};H(Tt,R=>{k()&&R(vt)})}var st=d(Tt,2);p(lt),p(N),V(()=>{Mt(N,1,`onboard-theme ${D()??""}`,"svelte-2rg8pd"),Mt(lt,1,`onboard-hint gp-chrome no-print ${B()??""}`,"svelte-2rg8pd"),K(lt,"id",F()||void 0),re(lt,z())}),Q("click",st,bt),v(y,N)};H(S,y=>{t(l)&&t(O)&&y(b)})}v(e,M),Be(),a()}let Ss=null;function nh(e){if(typeof window>"u")return null;const n={...e,ts:Date.now()};try{sessionStorage.setItem(Ic,Oc(n))}catch{}const o=`${lo}/_source-edit`,r="popup=yes,width=1280,height=900,menubar=no,toolbar=no,location=no,status=no";if(!Ss||Ss.closed)Ss=window.open(o,Fc,r);else{Ss.focus();try{Ss.postMessage({type:_r,...n},window.location.origin)}catch{}}if(Ss&&!Ss.closed){const a=Ss,i=()=>{try{a.postMessage({type:_r,...n},window.location.origin)}catch{}};setTimeout(i,50),setTimeout(i,300)}return Ss}const aa=Xe(new Set),sh=new Map,oh=Qs(aa,e=>e.size>0),Wi=Qs([aa,Zs],([e,n])=>e.size>0||n),Vi=Qs([aa,Zs],([e,n])=>n||e.size>0);Qs([Wi,Vi],([e,n])=>e||n);const Ra=Xe(!1),Wo=Xe(null);function Yi(){return typeof location>"u"?"":location.pathname}async function Or(){if(Te(aa).size>0){Wo.set(null),Ra.set(!0);return}if(!Te(Zs))return;const e=Yi(),n=await oi(e);if(!n.ok||typeof n.content!="string"){console.warn("[SOURCE]",n.error??"could not load page source");return}Wo.set({code:n.content,path:n.file??e,route:e}),Ra.set(!0)}async function xa(){const e=[...sh.values()],n=e[e.length-1];if(n){n();return}if(!Te(Zs)){console.warn("[EDIT] no ViewSource on this slide and SAVE is not available");return}const o=Yi(),r=await oi(o);if(!r.ok||typeof r.content!="string"){console.warn("[EDIT]",r.error??"could not load page source");return}nh({route:o,path:r.file??"",source:r.content,language:"svelte",canSave:!0})?Ia():console.warn("[EDIT] popup blocked — allow popups for this origin to edit source in a separate window")}function Ia(){Ra.set(!1),Wo.set(null)}function ah(e){switch(e.key){case"ArrowUp":return"up";case"ArrowDown":return"down";case"ArrowLeft":return"left";case"ArrowRight":return"right";default:return""}}function no(e,n,o){if(o<=0)return 0;const r=Number.isFinite(e)?Math.trunc(e):0,a=Number.isFinite(n)?Math.trunc(n):0;return((r+a)%o+o)%o}function so(e,n){if(!n||!e.length)return-1;const o=e.indexOf(n);if(o>=0)return o;for(let r=0;r<e.length;r++)if(e[r].contains(n))return r;return-1}function rh(e){return e.printOpen&&(e.focusInPrint||e.focusOnHamburger||e.focusInMoreDrop)?"print":e.moreOpen&&(e.focusInMoreDrop||e.focusOnHamburger||e.focusOnBar)||e.moreOpen?"more":e.armed?"bar":"none"}function oo(e,n,o,r){return!n||e==="none"||r<0?null:e==="bar"?n==="left"?no(o<0?0:o,-1,r):n==="right"?no(o<0?-1:o,1,r):null:e==="more"?n==="down"?o<0?r>0?0:null:no(o,1,r):n==="up"?o<=0?-1:no(o,-1,r):null:e==="print"?n==="down"?no(o<0?-1:o,1,r):n==="up"?no(o<0?0:o,-1,r):n==="left"?-1:null:null}var ih=E('<div class="close svelte-20g118" role="button" tabindex="-1">CLOSE</div>'),lh=E('<div class="link svelte-20g118"><a target="_blank" class="svelte-20g118"> </a></div>'),ch=E('<div><div class="img-box svelte-20g118" role="dialog" tabindex="-1"><!> <!> <!></div></div>');function dh(e,n){je(n,!1);let o=m(n,"width",8),r=m(n,"height",8),a=m(n,"expanded",12,!1),i=m(n,"showClose",8,!0),l=m(n,"scrollable",8,!1),g=m(n,"top",8,null),f=m(n,"left",8,null),L=m(n,"bottom",8,null),k=m(n,"right",8,null),X=m(n,"linkUrl",8,null),j=m(n,"linkText",8,"LINK"),D=m(n,"shadowOpacity",8,.8),z=m(n,"onClick",8,null),F=m(n,"containsExternal",8,null),B=m(n,"style",8,""),C=m(n,"id",8,""),O=m(n,"class",8,""),$=c();function tt(){a(!1)}function J(N){N.key==="Escape"&&tt()}function q(N){!a()||!t($)||t($).contains(N.target)||F()&&F()(N.target)||tt()}let Z=!1;function bt(){Z||(document.addEventListener("click",q),Z=!0)}function et(){Z&&(document.removeEventListener("click",q),Z=!1)}Yn(()=>(window.addEventListener("keydown",J),()=>{window.removeEventListener("keydown",J),et()})),_(()=>nt(a()),()=>{a()?setTimeout(bt,0):et()}),Nn(),vn();var x=ch(),P=u(x),W=u(P);Ba(W,n,"default",{},null);var M=d(W,2);{var S=N=>{var pt=ih();Q("click",pt,tt),Q("keydown",pt,tt),v(N,pt)};H(M,N=>{i()&&N(S)})}var b=d(M,2);{var y=N=>{var pt=lh(),gt=u(pt),lt=u(gt,!0);p(gt),p(pt),V(()=>{K(gt,"href",X()),kt(lt,j())}),v(N,pt)};H(b,N=>{X()&&N(y)})}p(P),Ae(P,N=>s($,N),()=>t($)),p(x),V(()=>{Mt(x,1,`parent ${a()?"expanded":""} ${O()??""}`,"svelte-20g118"),K(x,"id",C()||void 0),re(x,`--custom-top: ${g()??""}; --custom-left: ${f()??""}; --custom-bottom: ${L()??""}; --custom-right: ${k()??""}; --shadow-opacity: ${D()??""}; --scrollable: ${l()?"scroll":"hidden"}; ${B()??""}`),re(P,`--full-width: ${o()??""}px; --full-height: ${r()??""}px;`)}),Q("click",P,()=>z()&&z()()),v(e,x),Be()}var ph=E('<div class="code-portal-mount"></div>'),uh=E("<div></div> <!>",1);function fh(e,n){je(n,!1);let o=m(n,"code",8,""),r=m(n,"language",8,"java"),a=m(n,"width",8,"1200px"),i=m(n,"height",8,"600px"),l=m(n,"fontSize",8,20),g=m(n,"foldAllAtStart",8,!1),f=m(n,"readOnly",8,!0),L=m(n,"expanded",8,!0),k=m(n,"revealLines",24,()=>[]),X=m(n,"cursorLine",8,1),j=m(n,"style",8,""),D=m(n,"id",8,""),z=m(n,"class",8,""),F,B=c(),C=c(),O,$=c(null),tt=c(!1),J=c(null),q=c(0);const Z=.5,bt=3;let et;function x(){if(et!==void 0||!t(B))return;let G=t(B).parentElement;for(;G&&G!==document.body;){const it=getComputedStyle(G);if(it.overflowX==="hidden"||it.overflowY==="hidden"||it.overflow==="clip"){et=G;return}G=G.parentElement}et=null}function P(){O||!Ho||(O=document.createElement("div"),O.className="code-portal-host",document.body.appendChild(O))}function W(){if(!t(B)||!t(C)||!O)return;t(C).parentElement!==O&&O.appendChild(t(C));const G=t(B).getBoundingClientRect();if(Ge(C,t(C).style.left=`${G.left}px`),Ge(C,t(C).style.top=`${G.top}px`),Ge(C,t(C).style.width=`${G.width}px`),Ge(C,t(C).style.height=`${G.height}px`),!t(tt)){x();const Lt=(et??t(B)).getBoundingClientRect(),ye=!t(J)||Math.abs(Lt.left-t(J).left)>Z||Math.abs(Lt.top-t(J).top)>Z||Math.abs(Lt.width-t(J).width)>Z||Math.abs(Lt.height-t(J).height)>Z;s(q,ye?0:t(q)+1),s(J,{left:Lt.left,top:Lt.top,width:Lt.width,height:Lt.height}),t(q)>=bt&&(s(tt,!0),Ge(C,t(C).style.visibility="visible"))}if(!F)return;const it=t(B).offsetWidth,wt=it>0?G.width/it:1,$t=Number.isFinite(wt)&&wt>0?l()*wt:l();F.updateOptions({fontSize:$t}),F.layout({width:G.width,height:G.height})}function M(){W(),s($,requestAnimationFrame(M))}let S=!1;function b(G){return!!(O&&G instanceof Node&&O.contains(G))}function y(){return F?F.getValue():o()}function N(){return S}function pt(){S=!1}function gt(G){F&&F.setValue(G),S=!1}function lt(G,it){F&&(F.updateOptions({readOnly:it}),!S&&F.getValue()!==G&&F.setValue(G))}function ut(G){G.forEach(it=>{if(Object.prototype.toString.call(it)==="[object Array]"){setTimeout(function(){ut(it)},200);return}F.setSelection({startLineNumber:it,startColumn:0,endLineNumber:it,endColumn:1}),F.revealLine(X()),F.trigger("keyboard","editor.unfold")})}function I(G=[]){F!=null&&(G.length===0&&(G=k()),g()?setTimeout(function(){F.trigger("keyboard","editor.foldAll"),ut(k())},200):k().length>0&&F.setScrollTop(F.getTopForLineNumber(k()[0])))}Yn(()=>{let G=!1;return Hc().then(async it=>{const wt=await Kc(it,r());G||yt(it,wt)}).catch(it=>console.warn("[Code] Monaco did not load:",it)),()=>{G=!0,t($)!=null&&cancelAnimationFrame(t($)),F&&F.dispose(),O&&(O.remove(),O=void 0)}});function yt(G,it){t(C)&&(F=G.editor.create(t(C),{value:o(),fontSize:l(),fontFamily:"Fira Code, Menlo, Monaco, 'Courier New', monospace",fontLigatures:!0,language:it,minimap:{enabled:!0},folding:!0,automaticLayout:!0,readOnly:f(),theme:jc,foldingImportsByDefault:!0}),F.onDidChangeModelContent(()=>{S=F.getValue()!==o()}),I())}_(()=>(t(C),nt(L()),t($)),()=>{P(),t(C)&&(L()?Ge(C,t(C).style.display=""):(Ge(C,t(C).style.display="none"),Ge(C,t(C).style.visibility="hidden"),s(tt,!1),s(J,null),s(q,0))),L()?t($)==null&&s($,requestAnimationFrame(M)):t($)!=null&&(cancelAnimationFrame(t($)),s($,null))}),_(()=>nt(k()),()=>{I(k())}),_(()=>(nt(o()),nt(f())),()=>{lt(o(),f())}),Nn();var dt={containsPortaled:b,getValue:y,isDirty:N,markClean:pt,setValue:gt};vn();var Tt=uh(),vt=Wt(Tt);Ae(vt,G=>s(B,G),()=>t(B));var st=d(vt,2);{var R=G=>{var it=ph();Ae(it,wt=>s(C,wt),()=>t(C)),v(G,it)};H(st,G=>{G(R)})}return V(()=>{Mt(vt,1,vl(z()||void 0)),K(vt,"id",D()||void 0),re(vt,`width: ${a()??""}; height: ${i()??""}; ${j()??""}`)}),v(e,Tt),Ls(n,"containsPortaled",b),Ls(n,"getValue",y),Ls(n,"isDirty",N),Ls(n,"markClean",pt),Ls(n,"setValue",gt),Be(dt)}var hh=E('<button type="button" class="code-edit svelte-11o1r5p" aria-label="Edit source in a separate window" title="EDIT — open this file in an unscaled editor window">EDIT</button>'),vh=E('<span class="save-flash svelte-11o1r5p"> </span>'),mh=E('<span class="save-tip svelte-11o1r5p" role="status"> </span>'),gh=E('<span class="save-pop svelte-11o1r5p"><!> <!></span>'),bh=E('<span><button type="button" class="code-save svelte-11o1r5p" aria-label="Save source to file" title="SAVE — write this buffer back to the source file">SAVE</button> <!></span>'),yh=E('<div class="code-title svelte-11o1r5p"><span class="code-title-text svelte-11o1r5p"> </span> <span class="code-title-actions svelte-11o1r5p"><!> <!></span></div>'),wh=E("<!> <!>",1);function kh(e,n){je(n,!1);const o=c(),r=c(),a=c();let i=m(n,"code",8),l=m(n,"language",8,"java"),g=m(n,"title",8,""),f=m(n,"expanded",12,!1),L=m(n,"revealedLines",24,()=>[1]),k=m(n,"fontSize",8,20),X=m(n,"readOnly",8,!0),j=m(n,"edit",8,!1),D=m(n,"save",8,!1),z=m(n,"saveLabel",8,"SAVE"),F=m(n,"saveRefused",8,!1),B=m(n,"saveTip",8,""),C=m(n,"style",8,""),O=m(n,"id",8,""),$=m(n,"class",8,"");const tt=Qr();let J=c();function q(){var W;return((W=t(J))==null?void 0:W.getValue())??i()}function Z(){var W;return((W=t(J))==null?void 0:W.isDirty())??!1}function bt(){var W;(W=t(J))==null||W.markClean()}function et(){tt("edit")}function x(){tt("save")}_(()=>(nt(j()),nt(D())),()=>{s(o,j()||D())}),_(()=>(nt(g()),t(o)),()=>{s(r,g()||t(o)?"915px":"975px")}),_(()=>(nt(g()),t(o)),()=>{s(a,!!(g()||t(o)))}),Nn();var P={getValue:q,isDirty:Z,markClean:bt};return vn(),dh(e,{get style(){return C()},get id(){return O()},get class(){return $()},width:1500,height:975,containsExternal:W=>{var M;return((M=t(J))==null?void 0:M.containsPortaled(W))??!1},get expanded(){return f()},set expanded(W){f(W)},children:(W,M)=>{var S=wh(),b=Wt(S);{var y=pt=>{var gt=yh(),lt=u(gt),ut=u(lt,!0);p(lt);var I=d(lt,2),yt=u(I);{var dt=st=>{var R=hh();Q("click",R,sn(et)),v(st,R)};H(yt,st=>{j()&&st(dt)})}var Tt=d(yt,2);{var vt=st=>{var R=bh();let G;var it=u(R),wt=d(it,2);{var $t=Lt=>{var ye=gh(),jt=u(ye);{var Rt=Ct=>{var Yt=vh(),qt=u(Yt,!0);p(Yt),V(()=>kt(qt,z())),v(Ct,Yt)};H(jt,Ct=>{z()!=="SAVE"&&Ct(Rt)})}var Nt=d(jt,2);{var xt=Ct=>{var Yt=mh(),qt=u(Yt,!0);p(Yt),V(()=>kt(qt,B())),v(Ct,Yt)};H(Nt,Ct=>{F()&&Ct(xt)})}p(ye),v(Lt,ye)};H(wt,Lt=>{(z()!=="SAVE"||F())&&Lt($t)})}p(R),V(()=>G=Mt(R,1,"save-btn svelte-11o1r5p",null,G,{refused:F()})),Q("click",it,sn(x)),v(st,R)};H(Tt,st=>{D()&&st(vt)})}p(I),p(gt),V(()=>kt(ut,g())),v(pt,gt)};H(b,pt=>{t(a)&&pt(y)})}var N=d(b,2);Ae(fh(N,{get code(){return i()},get language(){return l()},get revealLines(){return L()},width:"1500px",get height(){return t(r)},get fontSize(){return k()},get readOnly(){return X()},get expanded(){return f()},$$legacy:!0}),pt=>s(J,pt),()=>t(J)),v(W,S)},$$slots:{default:!0},$$legacy:!0}),Ls(n,"getValue",q),Ls(n,"isDirty",Z),Ls(n,"markClean",bt),Be(P)}function xh(e,n){const o=[];for(const r of[e.next,e.prev]){if(!r)continue;const a=n?r+(r.includes("?")?"&":"?")+"present":r;o.includes(a)||o.push(a)}return o}function _h(e){return e.length===0?"":JSON.stringify({prerender:[{source:"list",urls:e,eagerness:"immediate"}]})}const Sh=Xe(new Map),Eh={subscribe:Sh.subscribe},Th=Xe(new Map),Ah={subscribe:Th.subscribe};function Nh(e){return`${e.libImport}/draw`}const Mh="/__geekpresent/adjust-save";async function Xi(e){if(!e.length)return{ok:!0,patched:0,unmatched:[]};try{const n=await fetch(Mh,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({route:location.pathname,changes:e})}),o=await n.json().catch(()=>({}));if(!n.ok)return{ok:!1,patched:0,unmatched:[],error:o.error||`HTTP ${n.status}`};const r=(o.unmatched??[]).map(a=>typeof a=="string"?{label:a,reason:"not-found"}:a);return{ok:!0,patched:o.patched??0,unmatched:r}}catch(n){return{ok:!1,patched:0,unmatched:[],error:n instanceof Error?n.message:String(n)}}}async function zh(e,n=[]){return e.trim()?Xi([{kind:"Draw",insert:e,insertImports:n,importFrom:Nh(Ta)}]):{ok:!0,patched:0,unmatched:[]}}async function Ph(){const e=[...Te(Eh).values()].filter(a=>a.dirty),n=e.filter(a=>a.pasteOf).map(a=>({kind:a.kind,name:a.pasteOf.name||void 0,before:a.pasteOf.before,paste:{name:a.name||void 0,after:a.after},file:a.file})),o=e.filter(a=>!a.pasteOf).map(a=>a.removed?{kind:a.kind,name:a.name||void 0,before:a.before,remove:!0,file:a.file}:{kind:a.kind,name:a.name||void 0,before:a.before,after:a.after,file:a.file}),r=[...Te(Ah).values()].filter(a=>a.dirty).map(a=>({kind:a.kind,name:a.name||void 0,oldTag:a.oldTag,newTag:a.newTag,before:a.before,after:a.after}));return Xi([...n,...o,...r])}function An(e){return String(Math.round((Number.isFinite(e)?e:0)*100)/100+0)}function Oa(e){return`[${An(e[0])}, ${An(e[1])}]`}function _a(e,n){return n.includes('"')?` ${e}='${n}'`:` ${e}="${n}"`}function Dh(e){let n="";return e.arrow&&e.arrow!=="none"&&(n+=` arrow="${e.arrow}"`),e.arrowSize!=null&&(n+=` arrowSize={${An(e.arrowSize)}}`),e.color&&(n+=` color="${e.color}"`),e.thickness!=null&&(n+=` thickness={${An(e.thickness)}}`),e.dash===!0?n+=" dash":typeof e.dash=="string"&&e.dash&&(n+=` dash="${e.dash}"`),e.rough===!0?n+=" rough":e.rough===!1?n+=" rough={false}":typeof e.rough=="number"&&(n+=` rough={${An(e.rough)}}`),e.seed!=null&&(n+=` seed={${An(e.seed)}}`),e.label&&(n+=` label="${e.label}"`),e.labelText&&(n+=` labelText="${e.labelText}"`),e.labelText&&e.labelAt!=null&&e.labelAt!==.5&&(n+=` labelAt={${An(e.labelAt)}}`),e.labelText&&e.labelOffset!=null&&e.labelOffset!==20&&(n+=` labelOffset={${An(e.labelOffset)}}`),e.draw&&(n+=` draw={${An(e.draw)}}`),e.draw&&e.drawDelay&&(n+=` drawDelay={${An(e.drawDelay)}}`),e.grid&&e.grid>1&&(n+=` grid={${An(e.grid)}}`),e.id&&(n+=_a("id",e.id)),e.class&&(n+=_a("class",e.class)),e.style&&(n+=_a("style",e.style)),n}const Ch=6,$h=34,Lh=4,Rh="opacity:var(--annot-highlighter-alpha, 0.45)",Ih=["pen","line","arrow","rectangle","highlighter"];function Fa(e){return!!e&&Ih.includes(e.tool)}function Oh(e){return Array.isArray(e.points)?e.points:[]}function Fh(e){return`points={[${e.map(Oa).join(", ")}]}`}function Hh(e,n){const o=Io(e.tool,n.penWidth??Ch,n.highlighterWidth??$h);return Dh({color:e.color||void 0,thickness:o===Lh?void 0:o,style:e.tool==="highlighter"?Rh:void 0})}function Kh(e,n={}){if(!Fa(e))return"";const o=Oh(e);if(o.length===0)return"";const r=Hh(e,n);if(e.tool==="line"||e.tool==="arrow"){const a=Pa(o),i=a[0]??o[0],l=a[a.length-1]??i,g=e.tool==="arrow"?' arrow="end"':"";return`<Line from={${Oa(i)}} to={${Oa(l)}}${g}${r} />`}if(e.tool==="rectangle"){const a=o[0],i=o[o.length-1],l=Math.min(a[0],i[0]),g=Math.min(a[1],i[1]),f=Math.abs(i[0]-a[0]),L=Math.abs(i[1]-a[1]),k=Math.max(0,Number.isFinite(n.rectRadius)?n.rectRadius:0),X=k>0?` rounded={${An(k)}}`:"";return`<Rect x={${An(l)}} y={${An(g)}} width={${An(f)}} height={${An(L)}}${X}${r} />`}return`<Polyline ${Fh(o)} smooth${r} />`}function nr(e,n,o={}){const r=new Set(n);return r.size===0||!Array.isArray(e)?[]:e.filter(a=>a&&r.has(a.id)).map(a=>Kh(a,o)).filter(a=>a!=="")}function jh(e,n){return nr(e,n).length}function Bh(e,n,o={}){const r=nr(e,n,o);if(r.length===0)return"";const a=o.indent??"";return o.wrap===!1?r.map(i=>`${a}${i}`).join(`
`):[`${a}<Draw>`,...r.map(i=>`${a}	${i}`),`${a}</Draw>`].join(`
`)}function Uh(e,n="$lib/draw"){const o=new Set;for(const a of e){const i=/^<([A-Za-z]+)/.exec(a);i&&o.add(i[1])}return o.size===0?"":`import { ${["Draw",...["Line","Polyline","Rect"].filter(a=>o.has(a))].join(", ")} } from '${n}';`}const qh={size:12,thinning:.7,streamline:.6,smoothing:.5,easing:"linear",start:{taper:0,cap:!0},end:{taper:0,cap:!0}},sr={linear:e=>e,easeIn:e=>e*e,easeOut:e=>e*(2-e),easeInOut:e=>e<.5?2*e*e:-1+(4-2*e)*e},Sa=(e,n,o)=>Math.min(o,Math.max(n,e)),wo=(e,n)=>typeof e=="number"&&Number.isFinite(e)?e:n;function or(e){const n=qh,o=e&&typeof e=="object"?e:{},r=(a,i)=>({taper:Math.max(0,wo(a==null?void 0:a.taper,i.taper)),cap:typeof(a==null?void 0:a.cap)=="boolean"?a.cap:i.cap});return{size:Math.max(.5,wo(o.size,n.size)),thinning:Sa(wo(o.thinning,n.thinning),-1,1),streamline:Sa(wo(o.streamline,n.streamline),0,1),smoothing:Sa(wo(o.smoothing,n.smoothing),0,1),easing:o.easing&&o.easing in sr?o.easing:n.easing,start:r(o.start,n.start),end:r(o.end,n.end)}}function Gh(e){const n=or(e);return n.size*sr[n.easing](.5+Math.abs(n.thinning)/2)}const hs=(e,n)=>[e[0]+n[0],e[1]+n[1]],us=(e,n)=>[e[0]-n[0],e[1]-n[1]],fs=(e,n)=>[e[0]*n,e[1]*n],Wh=e=>[-e[0],-e[1]],ko=e=>[e[1],-e[0]],Fr=(e,n)=>e[0]*n[0]+e[1]*n[1],Vh=(e,n)=>e[0]===n[0]&&e[1]===n[1],Yh=(e,n)=>Math.hypot(e[1]-n[1],e[0]-n[0]),Hr=(e,n)=>(e[0]-n[0])**2+(e[1]-n[1])**2,Ha=(e,n,o)=>hs(e,fs(us(n,e),o)),Kr=(e,n,o)=>hs(e,fs(n,o));function Qi(e){const n=Math.hypot(e[0],e[1]);return n===0?[0,0]:[e[0]/n,e[1]/n]}function xo(e,n,o){const r=Math.sin(o),a=Math.cos(o),i=e[0]-n[0],l=e[1]-n[1];return[i*a-l*r+n[0],i*r+l*a+n[1]]}const Xh=.5,Qh=.25,Jh=.275,_o=Math.PI+1e-4,jr=(e,n,o,r)=>e*r(.5-n*(.5-o));function Zh(e,n,o){var k;if(e.length===0)return[];const r=.15+(1-n.streamline)*.85;let a=e;if(a.length===2){const X=a[1];a=[a[0]];for(let j=1;j<5;j++)a.push(Ha(a[0],X,j/4))}a.length===1&&(a=[a[0],hs(a[0],[1,1])]);const i=[{point:a[0],pressure:Qh,vector:[1,1],distance:0,runningLength:0}];let l=!1,g=0,f=i[0];const L=a.length-1;for(let X=1;X<a.length;X++){const j=o&&X===L?a[X]:Ha(f.point,a[X],r);if(Vh(f.point,j))continue;const D=Yh(j,f.point);if(g+=D,X<L&&!l){if(g<n.size)continue;l=!0}f={point:j,pressure:Xh,vector:Qi(us(f.point,j)),distance:D,runningLength:g},i.push(f)}return i[0].vector=((k=i[1])==null?void 0:k.vector)??[0,0],i}function tv(e,n,o){const{size:r,smoothing:a,thinning:i}=n;if(e.length===0||r<=0)return[];const l=sr[n.easing],g=M=>M*(2-M),f=M=>--M*M*M+1,L=e[e.length-1].runningLength,k=n.start.taper,X=n.end.taper,j=Math.pow(r*a,2),D=[],z=[],F=(M,S)=>{const b=Math.min(1,S/r),y=Math.min(1,1-b);return Math.min(1,M+(y-M)*(b*Jh))};let B=e.slice(0,10).reduce((M,S)=>(M+F(M,S.distance))/2,e[0].pressure),C=jr(r,i,e[e.length-1].pressure,l),O,$=e[0].vector,tt=e[0].point,J=tt,q=tt,Z=J,bt=!1;for(let M=0;M<e.length;M++){let{pressure:S}=e[M];const{point:b,vector:y,distance:N,runningLength:pt}=e[M];if(M<e.length-1&&L-pt<3)continue;i?(S=F(B,N),C=jr(r,i,S,l)):C=r/2,O===void 0&&(O=C);const gt=pt<k?g(pt/k):1,lt=L-pt<X?f((L-pt)/X):1;C=Math.max(.01,C*Math.min(gt,lt));const ut=(M<e.length-1?e[M+1]:e[M]).vector,I=M<e.length-1?Fr(y,ut):1,dt=Fr(y,$)<0&&!bt,Tt=I<0;if(dt||Tt){const st=fs(ko($),C);for(let R=1/13,G=0;G<=1;G+=R)q=xo(us(b,st),b,_o*G),D.push(q),Z=xo(hs(b,st),b,_o*-G),z.push(Z);tt=q,J=Z,Tt&&(bt=!0);continue}if(bt=!1,M===e.length-1){const st=fs(ko(y),C);D.push(us(b,st)),z.push(hs(b,st));continue}const vt=fs(ko(Ha(ut,y,I)),C);q=us(b,vt),(M<=1||Hr(tt,q)>j)&&(D.push(q),tt=q),Z=hs(b,vt),(M<=1||Hr(J,Z)>j)&&(z.push(Z),J=Z),B=S,$=y}const et=e[0].point,x=e.length>1?e[e.length-1].point:hs(e[0].point,[1,1]),P=[],W=[];if(e.length===1){if(!(k||X)||o){const M=Kr(et,Qi(ko(us(et,x))),-(O??C)),S=[];for(let b=1/13,y=b;y<=1;y+=b)S.push(xo(M,et,_o*2*y));return S}}else{if(!k)if(n.start.cap)for(let S=1/13,b=S;b<=1;b+=S)P.push(xo(z[0],et,_o*b));else{const S=us(D[0],z[0]),b=fs(S,.5),y=fs(S,.51);P.push(us(et,b),us(et,y),hs(et,y),hs(et,b))}const M=ko(Wh(e[e.length-1].vector));if(X)W.push(x);else if(n.end.cap){const S=Kr(x,M,C);for(let b=1/29,y=b;y<1;y+=b)W.push(xo(S,x,_o*3*y))}else W.push(hs(x,fs(M,C)),hs(x,fs(M,C*.99)),us(x,fs(M,C*.99)),us(x,fs(M,C)))}return D.concat(W,z.reverse(),P)}function ev(e,n,o=!0){if(!Array.isArray(e)||e.length===0)return[];const r=or(n),a=e.map(Xl);return tv(Zh(a,r,o),r,o)}const Ds=e=>Number.isFinite(e)?e.toFixed(2):"0.00";function nv(e){const n=e.length;if(n<4)return"";let o=e[0],r=e[1];const a=e[2];let i=`M${Ds(o[0])},${Ds(o[1])} Q${Ds(r[0])},${Ds(r[1])} ${Ds((r[0]+a[0])/2)},${Ds((r[1]+a[1])/2)} T`;for(let l=2;l<n-1;l++)o=e[l],r=e[l+1],i+=`${Ds((o[0]+r[0])/2)},${Ds((o[1]+r[1])/2)} `;return i+"Z"}function sv(e,n,o=!0){return nv(ev(e,n,o))}function Br(e,n){var F;const{scaleFrom:o,onMove:r,onEnd:a,onCancel:i}=n,l=typeof o=="function"?o()||1:o&&o.getBoundingClientRect().width/o.offsetWidth||1,g=e.clientX,f=e.clientY,L=e.target,k=e.pointerId,X=B=>r((B.clientX-g)/l,(B.clientY-f)/l,B),j=()=>{z(),a==null||a()},D=B=>{B.key==="Escape"&&(B.preventDefault(),B.stopPropagation(),z(),i==null||i())};function z(){var B;window.removeEventListener("pointermove",X),window.removeEventListener("pointerup",j),i&&window.removeEventListener("keydown",D,!0),(B=L==null?void 0:L.releasePointerCapture)==null||B.call(L,k)}(F=L==null?void 0:L.setPointerCapture)==null||F.call(L,k),window.addEventListener("pointermove",X),window.addEventListener("pointerup",j),i&&window.addEventListener("keydown",D,!0)}var ov=as('<text dominant-baseline="hanging"> </text>'),Ur=as("<path></path>"),av=E('<input class="annot-text-input no-print svelte-aifo2v" aria-label="Annotation text"/>'),rv=as('<svg aria-hidden="true"><!><!></svg><!>',1),iv=E('<div class="annot-stale no-print svelte-aifo2v" role="status"><span class="annot-stale-text svelte-aifo2v">This slide has annotations from <b> </b>.</span> <button type="button" class="annot-btn svelte-aifo2v">RESET SLIDE</button> <button type="button" class="annot-btn svelte-aifo2v">RESET ALL</button> <button type="button" class="annot-btn keep svelte-aifo2v">KEEP</button></div>'),lv=E('<span class="annot-key svelte-aifo2v" aria-hidden="true"> </span>'),cv=E('<button type="button"><svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-aifo2v"><path></path></svg> <!></button>'),dv=E('<span class="annot-said svelte-aifo2v" role="status"> </span>'),pv=E('<span class="annot-said hint svelte-aifo2v">tap a mark to keep it</span>'),uv=E('<span class="annot-sep svelte-aifo2v" aria-hidden="true"></span> <button type="button" class="annot-btn freeze-go svelte-aifo2v"> </button> <!>',1),fv=E('<span class="annot-key svelte-aifo2v" aria-hidden="true"></span>'),hv=E('<button type="button"><!></button>'),vv=E('<span class="annot-sep svelte-aifo2v" aria-hidden="true"></span> <!>',1),mv=E('<div class="annot-bar no-print svelte-aifo2v" role="toolbar" aria-label="Annotation tools"><span class="annot-grip svelte-aifo2v" role="button" tabindex="-1" aria-label="Move the annotation bar" title="Drag to move · double-click to reset">⠿</span> <!> <!> <!> <span class="annot-sep svelte-aifo2v" aria-hidden="true"></span> <button type="button" class="annot-btn svelte-aifo2v">RESET</button> <button type="button" class="annot-btn svelte-aifo2v">RESET ALL</button> <span class="annot-sep svelte-aifo2v" aria-hidden="true"></span> <button type="button" class="annot-close svelte-aifo2v" aria-label="Close annotation tools" title="Close (Esc)"><span aria-hidden="true" class="svelte-aifo2v">×</span></button></div>'),gv=E("<!>  <!> <!>",1);function bv(e,n){je(n,!0);const o=()=>ht(Qo,"$canAnnotate",k),r=()=>ht(io,"$annotationMode",k),a=()=>ht(ti,"$strokes",k),i=()=>ht(mr,"$annotateTool",k),l=()=>ht(gr,"$annotateColor",k),g=()=>ht(Zs,"$canSave",k),f=()=>ht(zo,"$barPos",k),L=()=>ht(Bl,"$staleInk",k),[k,X]=$n();let j=m(n,"canvasWidth",3,1920),D=m(n,"canvasHeight",3,1080),z=m(n,"penWidth",3,6),F=m(n,"highlighterWidth",3,34),B=m(n,"arrowHead",3,36),C=m(n,"rectRadius",3,12),O=m(n,"eraserRadius",3,14),$=m(n,"textSize",3,44),tt=m(n,"inkColors",19,()=>[null,"#E5484D","#3FA9F5","#4BD07A","#FFFFFF"]),J=m(n,"levelHighlight",3,!0),q=m(n,"snapPen",3,!0),Z=m(n,"freehand",19,()=>({}));const bt=He(()=>Z()===!1?null:or(Z())),et=A=>A==="pen"&&t(bt)!==null,x=He(()=>o()&&r()),P=He(()=>t(x)||a().length>0),W=He(()=>t(x)&&i()==="pointer"),M=He(()=>i()==="eraser"||i()==="freeze"||i()==="pointer"),S=He(()=>t(M)||i()==="text"?"pen":i()),b=He(()=>t(M)?null:l());let y=tn(void 0),N=tn(Ea([])),pt=0,gt=0,lt=tn(null),ut=tn(!1);const I=He(()=>!t(x)||i()!=="eraser"||!t(lt)?null:yt(t(lt)));function yt(A){for(let Y=a().length-1;Y>=0;Y--){const rt=a()[Y];if(rt.tool==="text"){if(yr(A,rt.points[0]??[0,0],rt.text??"",rt.size??$(),O()))return rt.id}else{const Ot=et(rt.tool)&&t(bt)?Gh(t(bt)):Io(rt.tool,z(),F())/2,Zt=rt.tool==="rectangle"?oc(rt.points):rt.points;if(ac(A,Zt,O()+Ot))return rt.id}}return null}let dt=tn(Ea([]));const Tt=He(()=>{if(!t(x)||i()!=="freeze"||!t(lt))return null;const A=yt(t(lt));return A&&Fa(a().find(Y=>Y.id===A))?A:null}),vt=He(()=>jh(a(),t(dt))),st=He(()=>({penWidth:z(),highlighterWidth:F(),rectRadius:C()})),R=He(()=>Bh(a(),t(dt),t(st)));function G(A){s(dt,t(dt).includes(A)?t(dt).filter(Y=>Y!==A):[...t(dt),A],!0)}function it(){s(dt,[],!0)}Is(()=>{i()!=="freeze"&&at(it)});let wt=tn(null),$t;function Lt(A){s(wt,A,!0),clearTimeout($t),$t=setTimeout(()=>s(wt,null),2400)}async function ye(){const A=t(dt).slice(),Y=nr(a(),A,t(st));if(Y.length!==0){if(g()){const rt=await zh(Y.join(`
`),jt(Y));if(rt.ok&&rt.patched>0){ga(A),it(),Lt(`FROZEN ${Y.length}`);return}rt.ok&&rt.unmatched.length>0?Lt("PLACE IT YOURSELF"):rt.ok||Lt("COPIED (NO SAVE)")}try{await navigator.clipboard.writeText(t(R)),t(wt)||Lt(`COPIED ${Y.length}`)}catch{window.prompt("Copy this markup into the slide:",t(R))}it()}}function jt(A){const Y=Uh(A),rt=/\{([^}]*)\}/.exec(Y);return rt?rt[1].split(",").map(Ot=>Ot.trim()).filter(Boolean):[]}const Rt=8,Nt=4;let xt=tn(null),Ct=tn(""),Yt=tn(void 0);function qt(A){for(let Y=a().length-1;Y>=0;Y--){const rt=a()[Y];if(rt.tool==="text"&&yr(A,rt.points[0]??[0,0],rt.text??"",rt.size??$(),Rt))return rt.id}return null}function ce(A,Y,rt=$()){const Ot=A?a().find(Zt=>Zt.id===A):void 0;s(xt,{id:A,x:Y[0],y:Y[1],size:(Ot==null?void 0:Ot.size)??rt},!0),s(Ct,(Ot==null?void 0:Ot.text)??"",!0),po().then(()=>{var Zt,ke;(Zt=t(Yt))==null||Zt.focus(),(ke=t(Yt))==null||ke.select()})}function Qt(){if(!t(xt))return;const A=cc(t(Ct)),{id:Y,x:rt,y:Ot,size:Zt}=t(xt);if(s(xt,null),s(Ct,""),Y)A?ma(Y,{text:A}):ga([Y]);else if(A){const ke={id:`ink-${Date.now()}-${++gt}`,tool:"text",points:[[rt,Ot]],text:A,size:Zt};t(b)&&(ke.color=t(b)),br(ke)}}function _t(){s(xt,null),s(Ct,"")}function fe(A){A.stopPropagation(),A.key==="Enter"?(A.preventDefault(),Qt()):A.key==="Escape"&&(A.preventDefault(),_t())}function Jt(A){const Y=en(A);t(xt)&&Qt();const rt=qt(Y);if(!rt){ce(null,Y);return}const Ot=a().find(pe=>pe.id===rt),Zt=(Ot==null?void 0:Ot.points[0])??[Y[0],Y[1]];let ke=!1;Br(A,{scaleFrom:Xn,onMove:(pe,It)=>{Math.hypot(pe,It)>Nt&&(ke=!0),ke&&ma(rt,{points:[[Zt[0]+pe,Zt[1]+It]]})},onEnd:()=>{ke||ce(rt,Zt)},onCancel:()=>{ke&&ma(rt,{points:[Zt]})}})}let we=tn(!1),Re=tn(!1);function de(A,Y){return A?Y&&et(Y)?`fill:${A};`:`stroke:${A};`:""}function ie(A,Y){return Y==="highlighter"&&J()?rc(A):Y==="pen"&&q()&&t(we)?wr(A):Y==="line"||Y==="arrow"?q()&&t(we)?wr(A):Pa(A):Y==="rectangle"?Pa(A):A}function Qe(A,Y,rt=!0){return Y==="arrow"?tc(A,B()):Y==="rectangle"?ec(A,C()):et(Y)?sv(A,t(bt),rt):nc(A)}function en(A){var Y;return dc(A.clientX,A.clientY,(Y=t(y))==null?void 0:Y.getBoundingClientRect(),j(),D())}function on(A,Y){var rt,Ot,Zt,ke;try{Y?(Ot=(rt=t(y))==null?void 0:rt.setPointerCapture)==null||Ot.call(rt,A):(ke=(Zt=t(y))==null?void 0:Zt.releasePointerCapture)==null||ke.call(Zt,A)}catch{}}function kn(A){const Y=yt(A);Y&&ga([Y])}function rs(A){if(!(!t(x)||t(W)||A.button!==0)){if(A.preventDefault(),i()==="eraser"){on(A.pointerId,!0),s(ut,!0),s(lt,en(A),!0),kn(t(lt));return}if(i()==="freeze"){s(lt,en(A),!0);const Y=yt(t(lt));Y&&Fa(a().find(rt=>rt.id===Y))&&G(Y);return}if(i()==="text"){Jt(A);return}s(we,A.shiftKey,!0),on(A.pointerId,!0),s(N,[en(A)],!0),pt=performance.now()}}function is(A){if(!t(x)||t(W))return;if(i()==="eraser"){s(lt,en(A),!0),t(ut)&&kn(t(lt));return}if(i()==="freeze"){s(lt,en(A),!0);return}if(i()==="text"||t(N).length===0)return;s(we,A.shiftKey,!0);const Y=en(A),rt=t(N)[t(N).length-1];Math.hypot(Y[0]-rt[0],Y[1]-rt[1])<2||s(N,[...t(N),Y],!0)}function mn(A){if(i()==="eraser"){if(!t(ut))return;s(ut,!1),on(A.pointerId,!1);return}if(i()==="freeze"||i()==="text"||t(N).length===0)return;s(we,A.shiftKey,!0),on(A.pointerId,!1);const Y=ie(sc(t(N),et(t(S))?2:4),t(S));if(s(N,[],!0),Y.length===0)return;const rt={id:`ink-${Date.now()}-${++gt}`,tool:t(S),points:Y};t(b)&&(rt.color=t(b));const Ot=Math.round(performance.now()-pt);Ot>0&&(rt.ms=Ot),br(rt)}function Ie(){s(lt,null)}const xn=.7;let Ln=tn(void 0);function Xn(){var Y;const A=(Y=t(y))==null?void 0:Y.getBoundingClientRect();return A&&A.width>0?A.width/j():1}function Bn(A){var Vt,Pt;if(A.button!==0)return;A.preventDefault(),A.stopPropagation();const Y=(Vt=t(Ln))==null?void 0:Vt.getBoundingClientRect(),rt=(Pt=t(y))==null?void 0:Pt.getBoundingClientRect();if(!Y||!rt)return;const Ot=Xn(),Zt=(Y.left-rt.left)/Ot,ke=(Y.top-rt.top)/Ot,pe=Y.width/Ot,It=Y.height/Ot,oe=f();Br(A,{scaleFrom:Xn,onMove:(Bt,Ft)=>zo.set(pc(Zt+Bt,ke+Ft,pe,It,j(),D())),onCancel:()=>zo.set(oe)})}function Rn(){zo.set(null)}let Un=tn(0);Is(()=>{const A=t(Ln);if(!A||typeof ResizeObserver>"u")return;const Y=new ResizeObserver(()=>s(Un,A.offsetWidth,!0));return Y.observe(A),()=>Y.disconnect()});const gn=He(()=>ic(t(Un),j(),xn)),Qn=He(()=>`--annot-bar-scale:${t(gn)};`+(f()?`left:${f().x}px; top:${f().y}px; bottom:auto; transform:scale(${t(gn)}); transform-origin:top left;`:""));let Ts=null;Is(()=>{i()!=="pointer"&&(Ts=i())});function As(A){mr.set(Zl(A,i(),Ts))}function T(A){t(M)||gr.set(A)}const ot=[{tool:"pointer",label:"Pointer",d:"M6 3l12 9-5 1 3 6-2.5 1-3-6L6 17z"},{tool:"pen",label:"Pen",d:"M4 20l1-4L15 5l4 4L9 19l-4 1z M14 6l4 4"},{tool:"line",label:"Line",d:"M5 19L19 5"},{tool:"arrow",label:"Arrow",d:"M5 19L19 5M11 5h8v8"},{tool:"rectangle",label:"Rectangle",d:"M5 6h14v12H5z"},{tool:"highlighter",label:"Highlight",d:"M4 20h5M6 18L15 9l3 3-9 9H6zM14 8l3 3"},{tool:"text",label:"Text",d:"M6 6h12M12 6v13M9 19h6"},{tool:"eraser",label:"Erase",d:"M4 20h9M6 18l7-7 6 6-4 4H10z"},{tool:"freeze",label:"Freeze",d:"M12 3v18M4.5 7.5l15 9M19.5 7.5l-15 9"}];function zt(A){if(t(x)){if(A.key==="Shift"&&(s(we,!0),s(Re,!0)),A.key==="Escape")A.preventDefault(),io.set(!1);else if((A.ctrlKey||A.metaKey)&&A.key.toLowerCase()==="z")A.preventDefault(),Ul();else if(!Js(A.target)){const Y=Ql(A,ot.length,tt().length);if(!Y)return;A.preventDefault(),Y.kind==="tool"?As(ot[Y.index].tool):T(tt()[Y.index])}}}function Ut(A){A.key==="Shift"&&(s(we,!1),s(Re,!1))}var se=gv();Q("keydown",Eo,zt),Q("keyup",Eo,Ut),Q("blur",Eo,()=>s(Re,!1));var We=Wt(se);{var an=A=>{var Y=rv(),rt=Wt(Y);let Ot;var Zt=u(rt);Cn(Zt,1,a,Vt=>Vt.id,(Vt,Pt)=>{var Bt=hn(),Ft=Wt(Bt);{var De=ve=>{var ee=hn(),_e=Wt(ee);{var Ce=Oe=>{var ae=ov();let Me;var Mn=u(ae,!0);p(ae),V(()=>{var At,ft;Me=Mt(ae,0,"annot-text svelte-aifo2v",null,Me,{erasing:t(I)===t(Pt).id}),K(ae,"x",((At=t(Pt).points[0])==null?void 0:At[0])??0),K(ae,"y",((ft=t(Pt).points[0])==null?void 0:ft[1])??0),K(ae,"font-size",t(Pt).size??$()),re(ae,t(Pt).color?`fill:${t(Pt).color};`:""),kt(Mn,t(Pt).text)}),v(Oe,ae)};H(_e,Oe=>{t(xt)&&t(xt).id===t(Pt).id||Oe(Ce)})}v(ve,ee)},Ne=ve=>{var ee=Ur();let _e;V((Ce,Oe,ae,Me)=>{_e=Mt(ee,0,"annot-stroke svelte-aifo2v",null,_e,Ce),K(ee,"d",Oe),K(ee,"stroke-width",ae),re(ee,Me)},[()=>({highlighter:t(Pt).tool==="highlighter",freehand:et(t(Pt).tool),erasing:t(I)===t(Pt).id,freezing:t(Tt)===t(Pt).id,frozen:t(dt).includes(t(Pt).id)}),()=>Qe(t(Pt).points,t(Pt).tool),()=>Io(t(Pt).tool,z(),F()),()=>de(t(Pt).color,t(Pt).tool)]),v(ve,ee)};H(Ft,ve=>{t(Pt).tool==="text"?ve(De):ve(Ne,-1)})}v(Vt,Bt)});var ke=d(Zt);{var pe=Vt=>{var Pt=Ur();let Bt;V((Ft,De,Ne,ve)=>{Bt=Mt(Pt,0,"annot-stroke svelte-aifo2v",null,Bt,Ft),K(Pt,"d",De),K(Pt,"stroke-width",Ne),re(Pt,ve)},[()=>({highlighter:t(S)==="highlighter",freehand:et(t(S))}),()=>Qe(ie(t(N),t(S)),t(S),!1),()=>Io(t(S),z(),F()),()=>de(t(b),t(S))]),v(Vt,Pt)};H(ke,Vt=>{t(N).length>0&&Vt(pe)})}p(rt),Ae(rt,Vt=>s(y,Vt),()=>t(y));var It=d(rt);{var oe=Vt=>{var Pt=av();os(Pt),Ae(Pt,Bt=>s(Yt,Bt),()=>t(Yt)),V(()=>{K(Pt,"maxlength",lc),re(Pt,`left:${t(xt).x??""}px; top:${t(xt).y??""}px; font-size:${t(xt).size??""}px; ${t(b)?`color:${t(b)};`:""}`)}),Ze("keydown",Pt,fe),Q("blur",Pt,Qt),ks(Pt,()=>t(Ct),Bt=>s(Ct,Bt)),v(Vt,Pt)};H(It,Vt=>{t(x)&&t(xt)&&Vt(oe)})}V(()=>{Ot=Mt(rt,0,"annot-surface svelte-aifo2v",null,Ot,{armed:t(x),erasing:t(x)&&i()==="eraser",freezing:t(x)&&i()==="freeze",texting:t(x)&&i()==="text"}),K(rt,"viewBox",`0 0 ${j()??""} ${D()??""}`),re(rt,`width:${j()??""}px; height:${D()??""}px; pointer-events:${t(x)&&!t(W)?"auto":"none"};`)}),Ze("pointerdown",rt,rs),Ze("pointermove",rt,is),Ze("pointerup",rt,mn),Q("pointercancel",rt,mn),Q("pointerleave",rt,Ie),v(A,Y)};H(We,A=>{t(P)&&A(an)})}var rn=d(We,2);{var ms=A=>{var Y=iv(),rt=u(Y),Ot=d(u(rt)),Zt=u(Ot,!0);p(Ot),Ke(),p(rt);var ke=d(rt,2),pe=d(ke,2),It=d(pe,2);p(Y),V(oe=>kt(Zt,oe),[()=>Jl(L().ts,Date.now())]),Ze("click",ke,function(...oe){var Vt;(Vt=Ma)==null||Vt.apply(this,oe)}),Ze("click",pe,function(...oe){var Vt;(Vt=za)==null||Vt.apply(this,oe)}),Ze("click",It,function(...oe){var Vt;(Vt=ql)==null||Vt.apply(this,oe)}),v(A,Y)};H(rn,A=>{L()&&A(ms)})}var Ns=d(rn,2);{var qn=A=>{var Y=mv(),rt=u(Y),Ot=d(rt,2);Cn(Ot,19,()=>ot,Bt=>Bt.tool,(Bt,Ft,De)=>{var Ne=cv();let ve;var ee=u(Ne),_e=u(ee);p(ee);var Ce=d(ee,2);{var Oe=ae=>{var Me=lv(),Mn=u(Me,!0);p(Me),V(()=>kt(Mn,t(De)+1)),v(ae,Me)};H(Ce,ae=>{t(Re)||ae(Oe)})}p(Ne),V(ae=>{ve=Mt(Ne,1,"annot-btn icon svelte-aifo2v",null,ve,{on:i()===t(Ft).tool,erase:t(Ft).tool==="eraser",freeze:t(Ft).tool==="freeze"}),K(Ne,"aria-label",t(Ft).label),K(Ne,"aria-pressed",i()===t(Ft).tool),K(Ne,"aria-keyshortcuts",ae),K(Ne,"title",`${t(Ft).label??""} (${t(De)+1})`),K(_e,"d",t(Ft).d)},[()=>String(t(De)+1)]),Ze("click",Ne,()=>As(t(Ft).tool)),v(Bt,Ne)});var Zt=d(Ot,2);{var ke=Bt=>{var Ft=uv(),De=d(Wt(Ft),2),Ne=u(De);p(De);var ve=d(De,2);{var ee=Ce=>{var Oe=dv(),ae=u(Oe,!0);p(Oe),V(()=>kt(ae,t(wt))),v(Ce,Oe)},_e=Ce=>{var Oe=pv();v(Ce,Oe)};H(ve,Ce=>{t(wt)?Ce(ee):Ce(_e,-1)})}V(()=>{De.disabled=t(vt)===0,K(De,"title",g()?"Write the picked marks into this slide’s source":"Copy the picked marks as Draw markup"),kt(Ne,`FREEZE (${t(vt)??""})`)}),Ze("click",De,ye),v(Bt,Ft)};H(Zt,Bt=>{i()==="freeze"&&Bt(ke)})}var pe=d(Zt,2);{var It=Bt=>{var Ft=vv(),De=d(Wt(Ft),2);Cn(De,17,tt,vs,(Ne,ve,ee)=>{var _e=hv();let Ce;K(_e,"aria-keyshortcuts",ee<9?`Shift+${ee+1}`:void 0);var Oe=u(_e);{var ae=Me=>{var Mn=fv();Mn.textContent=ee+1,v(Me,Mn)};H(Oe,Me=>{t(Re)&&ee<9&&Me(ae)})}p(_e),V(()=>{Ce=Mt(_e,1,"annot-swatch svelte-aifo2v",null,Ce,{on:t(b)===t(ve),theme:t(ve)===null,hl:i()==="highlighter"}),re(_e,t(ve)?`--swatch:${t(ve)};`:""),K(_e,"aria-label",t(ve)===null?"Theme colour":`Colour ${t(ve)}`),K(_e,"aria-pressed",t(b)===t(ve)),K(_e,"title",`${(t(ve)===null?"Theme colour":t(ve))??""}${ee<9?` (Shift+${ee+1})`:""}`)}),Ze("click",_e,()=>T(t(ve))),v(Ne,_e)}),v(Bt,Ft)};H(pe,Bt=>{t(M)||Bt(It)})}var oe=d(pe,4),Vt=d(oe,2),Pt=d(Vt,4);p(Y),Ae(Y,Bt=>s(Ln,Bt),()=>t(Ln)),V(()=>{re(Y,t(Qn)),oe.disabled=a().length===0}),Ze("pointerdown",rt,Bn),Ze("dblclick",rt,Rn),Ze("click",oe,function(...Bt){var Ft;(Ft=Ma)==null||Ft.apply(this,Bt)}),Ze("click",Vt,function(...Bt){var Ft;(Ft=za)==null||Ft.apply(this,Bt)}),Ze("click",Pt,()=>io.set(!1)),v(A,Y)};H(Ns,A=>{t(x)&&A(qn)})}v(e,se),Be(),X()}ja(["pointerdown","pointermove","pointerup","keydown","click","dblclick"]);const qr=new Map;async function Ji(e){const n=qr.get(e);if(n)return n;try{const o=await fetch(e,{credentials:"omit"});if(!o.ok)return null;const r=await o.blob(),a=await new Promise(i=>{const l=new FileReader;l.onload=()=>i(typeof l.result=="string"?l.result:null),l.onerror=()=>i(null),l.readAsDataURL(r)});return a&&qr.set(e,a),a}catch{return null}}async function yv(){const e=await Promise.all(Array.from(document.styleSheets).map(n=>Zi(n,0)));return wv(e.join(`
`))}async function Gr(e){try{const n=await fetch(e,{credentials:"omit"});return n.ok?await n.text():""}catch{return""}}async function Zi(e,n){if(n>4)return"";let o=null;try{o=e.cssRules}catch{o=null}if(!o)return e.href?Gr(e.href):"";const r=[];for(const a of Array.from(o)){if(a.type===3){const i=a;if(i.styleSheet)r.push(await Zi(i.styleSheet,n+1));else if(i.href)try{r.push(await Gr(new URL(i.href,e.href??document.baseURI).href))}catch{}continue}r.push(a.cssText)}return r.join(`
`)}async function wv(e){const n=new Set,o=/url\(\s*['"]?([^'")]+)['"]?\s*\)/g;for(const a of e.matchAll(o)){const i=a[1].trim();i&&!i.startsWith("data:")&&n.add(i)}const r=new Map;return await Promise.all(Array.from(n).map(async a=>{let i=a;try{i=new URL(a,document.baseURI).href}catch{return}const l=await Ji(i);l&&r.set(a,l)})),e.replace(o,(a,i)=>{const l=r.get(i.trim());return l?`url("${l}")`:a})}function kv(e,n){const o=Array.from(e.querySelectorAll(xr)),r=Array.from(n.querySelectorAll(xr));o.forEach((a,i)=>{var k;const l=r[i];if(!l)return;let g=null;try{if(a instanceof HTMLCanvasElement)g=a.toDataURL("image/png");else if(a instanceof HTMLVideoElement&&a.videoWidth>0){const X=document.createElement("canvas");X.width=a.videoWidth,X.height=a.videoHeight,(k=X.getContext("2d"))==null||k.drawImage(a,0,0),g=X.toDataURL("image/png")}}catch{g=null}if(!g)return;const f=document.createElement("img");f.src=g;const L=a.getBoundingClientRect();f.style.cssText=l.style.cssText,f.style.width=`${a.offsetWidth||L.width}px`,f.style.height=`${a.offsetHeight||L.height}px`,l.replaceWith(f)})}async function xv(e){const n=Array.from(e.querySelectorAll("img"));await Promise.all(n.map(async o=>{const r=o.getAttribute("src")??"";if(!(!r||r.startsWith("data:")))try{const a=await Ji(new URL(r,document.baseURI).href);a?o.setAttribute("src",a):o.remove()}catch{o.remove()}}))}async function _v(e,n=1920,o=1080,r=1){const a=Ac(e);if(a.length>0)return{blob:null,blockers:a};const i=e.cloneNode(!0);i.style.width=`${n}px`,i.style.height=`${o}px`,i.style.transform="none",i.style.margin="0";const l=i.querySelector(".content");l&&(l.style.transform="none",l.style.transformOrigin="top left"),i.querySelectorAll(Nc).forEach(k=>k.remove()),kv(e,i),await xv(i);const g=await yv(),f=Mc(new XMLSerializer().serializeToString(i),g,n,o);return{blob:await Sv(f,n,o,r),blockers:[]}}function Sv(e,n,o,r){return new Promise(a=>{const i=new Image;i.onload=()=>{const l=document.createElement("canvas"),g=Math.max(1,Number(r)||1);l.width=Math.round(n*g),l.height=Math.round(o*g);const f=l.getContext("2d");if(!f)return a(null);f.drawImage(i,0,0,l.width,l.height);try{l.toBlob(L=>a(L),"image/png")}catch{a(null)}},i.onerror=()=>a(null),i.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`})}function Ev(e,n){const o=URL.createObjectURL(e),r=document.createElement("a");r.href=o,r.download=n,r.click(),setTimeout(()=>URL.revokeObjectURL(o),0)}var Tv=E('<button type="button" class="ghost danger svelte-1il8kf6">Stop</button>'),Av=E(`<div class="kiosk-scrim no-print gp-chrome svelte-1il8kf6" role="presentation"><div class="kiosk-dialog svelte-1il8kf6" role="dialog" aria-modal="true" aria-labelledby="kiosk-dialog-title" tabindex="-1"><h2 id="kiosk-dialog-title" class="svelte-1il8kf6">Kiosk / auto-advance</h2> <p class="lead svelte-1il8kf6">Steps reveal first (like Space), then the slide pages and loops.
				Pause and Stop stay on the small indicator — keys do not exit.</p> <label class="field svelte-1il8kf6"><span class="lbl svelte-1il8kf6">Step pace</span> <span class="ctl svelte-1il8kf6"><input type="number" min="0.25" max="120" step="0.5" class="svelte-1il8kf6"/> <span class="unit svelte-1il8kf6">seconds</span></span> <span class="hint svelte-1il8kf6">Between build reveals on one slide</span></label> <label class="field svelte-1il8kf6"><span class="lbl svelte-1il8kf6">Page pace</span> <span class="ctl svelte-1il8kf6"><input type="number" min="0.25" max="120" step="0.5" class="svelte-1il8kf6"/> <span class="unit svelte-1il8kf6">seconds</span></span> <span class="hint svelte-1il8kf6">After the build (and animations) finish</span></label> <label class="check svelte-1il8kf6"><input type="checkbox" class="svelte-1il8kf6"/> <span>Show speaker notes (one line at a time) <span class="hint svelte-1il8kf6">Each &lt;Note&gt; child is a step (drag the panel; n/N progress).
						Long lines hold longer (~150 wpm); then the deck pages.</span></span></label> <div class="actions svelte-1il8kf6"><!> <span class="spacer svelte-1il8kf6"></span> <button type="button" class="ghost svelte-1il8kf6">Cancel</button> <button type="button" class="primary svelte-1il8kf6"> </button></div></div></div>`);function Nv(e,n){je(n,!1);const o=()=>ht(Bc,"$kioskDialogOpen",i),r=()=>ht(Ga,"$kioskPaces",i),a=()=>ht(Bo,"$kioskStatus",i),[i,l]=$n();let g=c(2),f=c(6),L=c(!1);function k(){qc({stepMs:Er(t(g),ri),pageMs:Er(t(f),ai),useNotes:t(L)})}function X(){Uc()}function j(){ii()}function D(O){o()&&(O.key==="Escape"?(O.preventDefault(),O.stopPropagation(),X()):O.key==="Enter"&&!O.shiftKey&&!O.ctrlKey&&!O.metaKey&&!O.altKey&&(O.preventDefault(),O.stopPropagation(),k()))}let z=c();_(()=>(o(),r()),()=>{o()&&(s(g,Sr(r().stepMs)),s(f,Sr(r().pageMs)),s(L,r().useNotes))}),_(()=>(o(),t(z)),()=>{o()&&t(z)&&queueMicrotask(()=>{var O;return(O=t(z))==null?void 0:O.focus()})}),Nn(),vn();var F=hn();Q("keydown",Eo,D);var B=Wt(F);{var C=O=>{var $=Av(),tt=u($),J=d(u(tt),4),q=d(u(J),2),Z=u(q);os(Z),Ke(2),p(q),Ke(2),p(J);var bt=d(J,2),et=d(u(bt),2),x=u(et);os(x),Ke(2),p(et),Ke(2),p(bt);var P=d(bt,2),W=u(P);os(W),Ke(2),p(P);var M=d(P,2),S=u(M);{var b=gt=>{var lt=Tv();Q("click",lt,j),v(gt,lt)};H(S,gt=>{a()!=="off"&&gt(b)})}var y=d(S,4),N=d(y,2),pt=u(N,!0);p(N),p(M),p(tt),Ae(tt,gt=>s(z,gt),()=>t(z)),p($),V(()=>kt(pt,a()==="off"?"Start":"OK")),ks(Z,()=>t(g),gt=>s(g,gt)),ks(x,()=>t(f),gt=>s(f,gt)),Zr(W,()=>t(L),gt=>s(L,gt)),Q("click",y,X),Q("click",N,k),Q("click",$,fi(X)),v(O,$)};H(B,O=>{o()&&O(C)})}v(e,F),Be(),l()}var Mv=E('<span class="note-count svelte-k4hrdv" title="Note progress"> </span>'),zv=E('<div class="kiosk-note-body svelte-k4hrdv"> </div>'),Pv=E('<div role="status" aria-live="polite"><div class="kiosk-bar svelte-k4hrdv"><span class="grip svelte-k4hrdv" aria-hidden="true" title="Drag to move">⠿</span> <button type="button" class="ring-btn svelte-k4hrdv"><svg class="ring svelte-k4hrdv" viewBox="0 0 28 28" width="26" height="26" aria-hidden="true"><circle class="track svelte-k4hrdv" cx="14" cy="14" fill="none" stroke-width="2.5"></circle><circle class="prog svelte-k4hrdv" cx="14" cy="14" fill="none" stroke-width="2.5" stroke-linecap="round" transform="rotate(-90 14 14)"></circle></svg> <span class="glyph svelte-k4hrdv" aria-hidden="true"> </span></button> <span class="meta svelte-k4hrdv"><span class="tag svelte-k4hrdv">KIOSK</span> <span class="phase svelte-k4hrdv"> </span></span> <!> <span class="spacer svelte-k4hrdv" aria-hidden="true"></span> <button type="button" class="icon-btn svelte-k4hrdv" title="Kiosk settings" aria-label="Kiosk settings">⚙</button> <button type="button" class="icon-btn stop svelte-k4hrdv" title="Stop kiosk" aria-label="Stop kiosk">×</button></div> <!></div>');function Dv(e,n){je(n,!1);const o=()=>ht(Cs,"$kioskDwellFraction",k),r=()=>ht(Bo,"$kioskStatus",k),a=()=>ht(Da,"$kioskPhaseLabel",k),i=()=>ht(ci,"$kioskNoteItems",k),l=()=>ht(di,"$kioskNoteIndex",k),g=()=>ht(Ga,"$kioskPaces",k),f=()=>ht(Tr,"$kioskNotesPos",k),L=()=>ht(pi,"$kioskPanelPinned",k),[k,X]=$n(),j=c(),D=c(),z=c(),F=c(),B=c(),C=c(),O=c(),$=c(),tt=c(),J=c(),q=c(),Z=c(),bt=c(),et=10,x=2*Math.PI*et,P=12,W=16,M=440;let S=c(null),b=c(!1),y=0,N=0;function pt(vt){var G,it,wt,$t,Lt;if(!t(S)||vt.button!==0)return;const st=vt.target;if((G=st==null?void 0:st.closest)!=null&&G.call(st,"button")||!((it=st==null?void 0:st.closest)!=null&&it.call(st,".kiosk-bar"))||(wt=st==null?void 0:st.closest)!=null&&wt.call(st,".kiosk-note-body"))return;const R=t(S).getBoundingClientRect();s(b,!0),y=vt.clientX-R.left,N=vt.clientY-R.top;try{(Lt=($t=t(S)).setPointerCapture)==null||Lt.call($t,vt.pointerId)}catch{}vt.preventDefault()}function gt(vt){if(!t(b)||!t(S))return;const st=t(S).offsetWidth||M,R=t(S).offsetHeight||48,G=Math.max(0,window.innerWidth-st-8),it=Math.max(0,window.innerHeight-R-8),wt=Math.min(G,Math.max(8,vt.clientX-y)),$t=Math.min(it,Math.max(8,vt.clientY-N));Tr.set({left:wt,top:$t})}function lt(vt){var st,R;if(!(!t(b)||!t(S))){s(b,!1);try{(R=(st=t(S)).releasePointerCapture)==null||R.call(st,vt.pointerId)}catch{}}}function ut(){Uo.set(!0)}function I(){Uo.set(!1)}_(()=>o(),()=>{s(j,Math.max(0,Math.min(1,o()||0)))}),_(()=>t(j),()=>{s(D,`${t(j)*x} ${x}`)}),_(()=>r(),()=>{s(z,r()==="paused")}),_(()=>(a(),t(z)),()=>{s(F,a()||(t(z)?"paused":"kiosk"))}),_(()=>i(),()=>{s(B,i())}),_(()=>l(),()=>{s(C,l())}),_(()=>t(B),()=>{s(O,t(B).length)}),_(()=>(g(),t(O)),()=>{s($,g().useNotes&&t(O)>0)}),_(()=>(t($),t(O),t(B),t(C)),()=>{s(tt,t($)&&t(O)>0?t(B)[Math.min(t(C),t(O)-1)]??"":"")}),_(()=>(t($),t(C),t(O)),()=>{s(J,t($)?li(Math.min(t(C),Math.max(0,t(O)-1)),t(O)):"")}),_(()=>r(),()=>{s(q,r()!=="off")}),_(()=>f(),()=>{s(Z,f())}),_(()=>t(Z),()=>{s(bt,t(Z)?`left:${t(Z).left}px;top:${t(Z).top}px;bottom:auto;right:auto;`:`left:${P}px;bottom:${W}px;top:auto;right:auto;`)}),Nn(),vn();var yt=hn(),dt=Wt(yt);{var Tt=vt=>{var st=Pv();let R;var G=u(st),it=d(u(G),2),wt=u(it),$t=u(wt);K($t,"r",et);var Lt=d($t);K(Lt,"r",et),p(wt);var ye=d(wt,2),jt=u(ye,!0);p(ye),p(it);var Rt=d(it,2),Nt=d(u(Rt),2),xt=u(Nt,!0);p(Nt),p(Rt);var Ct=d(Rt,2);{var Yt=fe=>{var Jt=Mv(),we=u(Jt,!0);p(Jt),V(()=>kt(we,t(J))),v(fe,Jt)};H(Ct,fe=>{t(J)&&fe(Yt)})}var qt=d(Ct,4),ce=d(qt,2);p(G);var Qt=d(G,2);{var _t=fe=>{var Jt=zv(),we=u(Jt,!0);p(Jt),V(()=>kt(we,t(tt))),v(fe,Jt)};H(Qt,fe=>{t(tt)&&fe(_t)})}p(st),Ae(st,fe=>s(S,fe),()=>t(S)),V(()=>{R=Mt(st,1,"kiosk-panel no-print gp-chrome svelte-k4hrdv",null,R,{paused:t(z),dragging:t(b),pinned:L(),"has-note":!!t(tt)}),K(st,"aria-label",t(z)?"Kiosk paused":t(tt)?`Kiosk running, note ${t(J)}: ${t(tt)}`:`Kiosk running (${t(F)})`),re(st,t(bt)),K(it,"title",t(z)?"Resume kiosk (Alt+. U)":"Pause kiosk (Alt+. U)"),K(it,"aria-label",t(z)?"Resume":"Pause"),K(Lt,"stroke-dasharray",t(D)),kt(jt,t(z)?"▶":"❚❚"),kt(xt,t(F))}),Q("click",it,sn(function(...fe){var Jt;(Jt=ui)==null||Jt.apply(this,fe)})),Q("click",qt,sn(()=>Ca())),Q("click",ce,sn(function(...fe){var Jt;(Jt=ii)==null||Jt.apply(this,fe)})),Q("pointerdown",st,pt),Q("pointermove",st,gt),Q("pointerup",st,lt),Q("pointercancel",st,lt),Q("mouseenter",st,ut),Q("mouseleave",st,I),v(vt,st)};H(dt,vt=>{t(q)&&vt(Tt)})}v(e,yt),Be(),X()}function Cv(e,n){je(n,!1);const o=()=>ht(Bo,"$kioskStatus",a),r=()=>ht(Uo,"$kioskHoverFrozen",a),[a,i]=$n(),l=c();let g=m(n,"pages",24,()=>[]),f=m(n,"currentSlide",8,""),L=m(n,"prefix",8,"./"),k=m(n,"wpm",8,150);const X=Xo();let j=null,D=0,z=0,F=0,B="",C="",O="";function $(){return document.querySelector(".content")}function tt(){const P=$();if(!P)return!1;const W=qa(P);return W.length?si(W)&&Oo(W)<.999:!1}function J(){const P=ho(g());if(!P.length)return null;const W=P.findIndex(M=>M.path===f());return W<0?L()+P[0].path:W<P.length-1?L()+P[W+1].path:L()+P[0].path}function q(){const P=J();if(!P)return;const W=g().find(S=>S.path===f()),M=(W==null?void 0:W.transition)??"slide";uo(P,{viewTransitions:X,kind:M,direction:"forward"})}function Z(P,W){D=performance.now(),z=P,F=0,B=W,Da.set(W),Cs.set(0)}function bt(){if(Te(Bo)!=="running"||Te(Uo))return;f()!==C&&(C=f(),B="",O="",D=0,z=0,F=0,Cs.set(0));const P=Te(Ga),W=Te(jo),M=Te(ci),S=Te(di),b=P.useNotes&&M.length>0&&S<M.length,y=Te(Gc),N=tt(),pt=Wc({animBusy:N,mediaBusy:y,hasNextStep:!!(W!=null&&W.hasNext),hasNoteItem:b});if(pt==="wait"){if(y&&!N){B!=="media"&&(D=performance.now(),z=0,F=0,B="media",Da.set("video")),Cs.set(Te(Vc));return}B!=="wait"&&Z(0,"wait"),Cs.set(0);return}if(pt==="reveal"){const ut=P.stepMs;(B!=="reveal"||z!==ut)&&Z(ut,"reveal");const I=performance.now()-D;if(Cs.set(ya(I,z)),I<z)return;const yt=Te(jo);yt!=null&&yt.hasNext&&yt.next(),Z(P.stepMs,"reveal");return}if(pt==="note"){const ut=M[S]??"",I=Yc(ut,P.stepMs,k()),yt=`${f()}:${S}:${ut.slice(0,40)}`,dt=`note ${li(S,M.length)}`;(B!==dt||O!==yt||z!==I)&&(O=yt,Z(I,dt));const Tt=performance.now()-D;if(Cs.set(ya(Tt,z)),Tt<z)return;if(Xc()){O="";return}Z(P.pageMs,"page"),q();return}if(B==="media"){Z(0,"page"),q();return}const gt=P.pageMs;(B!=="page"||z!==gt)&&Z(gt,"page");const lt=performance.now()-D;Cs.set(ya(lt,z)),!(lt<z)&&(Z(gt,"page"),q())}function et(){j!=null&&(clearInterval(j),j=null)}function x(P){P==="running"?j==null&&(F>0&&z>0?(D=performance.now()-F,F=0):D||(D=performance.now()),j=setInterval(bt,100),bt()):P==="paused"?(j!=null&&D&&(F=Math.max(0,performance.now()-D)),et()):(et(),D=0,z=0,F=0,B="",C="",O="")}Es(et),_(()=>(o(),r()),()=>{s(l,o()==="off"?"off":o()==="paused"||r()?"paused":"running")}),_(()=>t(l),()=>{x(t(l))}),_(()=>(o(),nt(f())),()=>{o()==="running"&&f()&&f()}),Nn(),vn(),Be(),i()}const Wr=2e3,Ka=6e3;function $v(e,n,o=Ka){if(e==null||!Number.isFinite(e)||e<=0||!Number.isFinite(n))return!1;const r=Number.isFinite(o)&&o>0?o:Ka;return n-e<r}const Lv=Xe(new Map);function Rv(e,n,o,r,a){const i=Math.max(0,zs(n)),l=Math.max(0,zs(r)),g=Math.max(0,zs(a)),f=zs(e.x),L=zs(e.y),k=Math.max(0,zs(e.width)),X=Math.max(0,zs(e.height));let j=f-i,D=L-i,z=f+k+i,F=L+X+i;j=Lo(j,0,l),D=Lo(D,0,g),z=Lo(z,j,l),F=Lo(F,D,g);const B=z-j,C=F-D,O=Math.min(Math.max(0,zs(o)),B/2,C/2);return{x:j,y:D,width:B,height:C,radius:O}}function Lo(e,n,o){return o<n||e<n?n:e>o?o:e}var Iv=as('<defs class="svelte-1rvf8aj"><mask class="svelte-1rvf8aj"><rect x="0" y="0" fill="white" class="svelte-1rvf8aj"></rect><rect fill="black" class="svelte-1rvf8aj"></rect></mask></defs><rect class="spotlight-scrim svelte-1rvf8aj" x="0" y="0"></rect>',1),Ov=as('<svg aria-hidden="true"><!><rect class="spotlight-ring svelte-1rvf8aj"></rect></svg>');function Fv(e,n){je(n,!0);const o=()=>ht(gl,"$highlightTarget",a),r=()=>ht(Lv,"$blockAnchors",a),[a,i]=$n();let l=m(n,"pad",3,14),g=m(n,"radius",3,16),f=m(n,"dim",3,.3),L=m(n,"pulse",3,!0),k=m(n,"canvasWidth",3,1920),X=m(n,"canvasHeight",3,1080);const j=He(()=>o()?r().get(o()):void 0),D=He(()=>t(j)?Rv(t(j),l(),g(),k(),X()):null),z=He(()=>`gp-spotlight-hole-${F(o()??"")}`);function F(tt){return tt.replace(/[^a-zA-Z0-9_-]/g,"-")||"x"}const B=He(()=>Math.min(1,Math.max(0,f())));var C=hn(),O=Wt(C);{var $=tt=>{var J=Ov();let q;var Z=u(J);{var bt=x=>{var P=Iv(),W=Wt(P),M=u(W),S=u(M),b=d(S);p(M),p(W);var y=d(W);V(()=>{K(M,"id",t(z)),K(S,"width",k()),K(S,"height",X()),K(b,"x",t(D).x),K(b,"y",t(D).y),K(b,"width",t(D).width),K(b,"height",t(D).height),K(b,"rx",t(D).radius),K(b,"ry",t(D).radius),K(y,"width",k()),K(y,"height",X()),K(y,"mask",`url(#${t(z)??""})`),re(y,`opacity:${t(B)??""};`)}),v(x,P)};H(Z,x=>{t(B)>0&&x(bt)})}var et=d(Z);p(J),V(()=>{q=Mt(J,0,"spotlight-surface svelte-1rvf8aj",null,q,{pulse:L()}),K(J,"viewBox",`0 0 ${k()??""} ${X()??""}`),re(J,`width:${k()??""}px; height:${X()??""}px; pointer-events:none;`),K(et,"x",t(D).x),K(et,"y",t(D).y),K(et,"width",t(D).width),K(et,"height",t(D).height),K(et,"rx",t(D).radius),K(et,"ry",t(D).radius)}),v(tt,J)};H(O,tt=>{t(D)&&tt($)})}v(e,C),Be(),i()}const Hv=12;function Kv(e,n,o=Hv){if(typeof n!="number"||!Number.isFinite(n))return{kind:"none"};const r=Math.floor(n);if(r<1)return{kind:"none"};const a=typeof e=="number"&&Number.isFinite(e)?Math.floor(e):0,i=Math.max(0,Math.min(r,a)),l=i>=r;if(r>o)return{kind:"bar",fraction:i/r,index:i,total:r,spent:l};const g=[];for(let f=0;f<r;f++)g.push(f<i-1?"done":f===i-1?"current":"todo");return{kind:"dots",dots:g,index:i,total:r,spent:l}}const jv=1e3,tl="SPACE for next step",el="SPACE for next slide";function Bv(e,n){return e.kind==="none"||n.busy||!n.settled?"none":e.spent?n.hasNextSlide?"spent":"none":"next"}function Vr(e){return e.kind==="none"?"":`Step ${e.index} of ${e.total}`}const Uv=["top","bottom","left","right","top-left","top-right","bottom-left","bottom-right"];function qv(e){const n=Uv.includes(e)?e:"bottom",o=n.includes("left")?"start":n.includes("right")?"end":"center",r=n.startsWith("top")?"start":n.startsWith("bottom")?"end":"center";return{position:n,x:o,y:r,vertical:n==="left"||n==="right"}}function Yr(e,n,o,r="var(--stepdots-inset, 36px)"){const a=(l,g)=>l==="start"?r:l==="end"?`calc(${g}px - ${r})`:`${g/2}px`,i=l=>l==="start"?"0":l==="end"?"-100%":"-50%";return`left: ${a(e.x,n)}; top: ${a(e.y,o)}; transform: translate(${i(e.x)}, ${i(e.y)});`}var Gv=E("<span></span>"),Wv=E('<span><span class="fill svelte-1qglbbh"></span></span>'),Vv=E("<div><!></div>"),Yv=E('<span class="cue-tip svelte-1qglbbh" aria-hidden="true"> </span>'),Xv=E('<div role="progressbar" aria-valuemin="0"><!> <!></div>');function Qv(e,n){je(n,!1);const o=()=>ht(jo,"$activeSteps",r),[r,a]=$n(),i=c(),l=c(),g=c(),f=c();let L=m(n,"canvasWidth",8,1920),k=m(n,"canvasHeight",8,1080),X=m(n,"position",8,"bottom"),j=m(n,"cue",8,!1),D=m(n,"cueDelayMs",8,jv),z=m(n,"cueNext",8,tl),F=m(n,"cueSpent",8,el),B=m(n,"hasNextSlide",8,!0),C=m(n,"style",8,""),O=m(n,"id",8,""),$=m(n,"class",8,""),tt=c(!1),J;function q(x,P,W,M){s(tt,!1),clearTimeout(J),x&&P!=="none"&&!M&&(J=setTimeout(()=>s(tt,!0),D()))}Es(()=>clearTimeout(J)),_(()=>o(),()=>{var x,P;s(i,Kv((x=o())==null?void 0:x.index,(P=o())==null?void 0:P.total))}),_(()=>nt(X()),()=>{s(l,qv(X()))}),_(()=>o(),()=>{var x;s(g,!!((x=o())!=null&&x.busy))}),_(()=>(nt(j()),t(i),t(g)),()=>{q(j(),t(i).kind,t(i).kind==="none"?0:t(i).index,t(g))}),_(()=>(nt(j()),t(i),t(g),t(tt),nt(B())),()=>{s(f,j()?Bv(t(i),{busy:t(g),settled:t(tt),hasNextSlide:B()}):"none")}),Nn(),vn();var Z=hn(),bt=Wt(Z);{var et=x=>{var P=Xv();let W;var M=u(P);id(M,()=>(t(i),at(()=>t(i).index)),y=>{var N=Vv();let pt;var gt=u(N);{var lt=I=>{var yt=hn(),dt=Wt(yt);Cn(dt,1,()=>(t(i),at(()=>t(i).dots)),vs,(Tt,vt,st)=>{var R=Gv();let G;V(()=>G=Mt(R,1,`dot ${t(vt)??""}`,"svelte-1qglbbh",G,{next:t(f)==="next"&&st===t(i).index})),v(Tt,R)}),v(I,yt)},ut=I=>{var yt=Wv();let dt;var Tt=u(yt);p(yt),V(vt=>{dt=Mt(yt,1,"bar svelte-1qglbbh",null,dt,{next:t(f)==="next"}),re(Tt,`${t(l),at(()=>t(l).vertical?"height":"width")??""}: ${vt??""}%`)},[()=>(t(i),at(()=>(t(i).fraction*100).toFixed(3)))]),v(I,yt)};H(gt,I=>{t(i),at(()=>t(i).kind==="dots")?I(lt):I(ut,-1)})}p(N),V(()=>pt=Mt(N,1,"row svelte-1qglbbh",null,pt,{spent:t(i).spent})),v(y,N)});var S=d(M,2);{var b=y=>{var N=Yv(),pt=u(N,!0);p(N),V(()=>kt(pt,t(f)==="next"?z():F())),v(y,N)};H(S,y=>{t(f)!=="none"&&y(b)})}p(P),V((y,N)=>{W=Mt(P,1,`step-dots no-print ${$()??""}`,"svelte-1qglbbh",W,{vertical:t(l).vertical,cueing:t(f)!=="none"}),K(P,"data-position",(t(l),at(()=>t(l).position))),K(P,"id",O()||void 0),K(P,"aria-valuemax",(t(i),at(()=>t(i).total))),K(P,"aria-valuenow",(t(i),at(()=>t(i).index))),K(P,"aria-label",y),re(P,`${N??""} ${C()??""}`)},[()=>(nt(Vr),t(i),at(()=>Vr(t(i)))),()=>(nt(Yr),t(l),nt(L()),nt(k()),at(()=>Yr(t(l),L(),k())))]),v(x,P)};H(bt,x=>{t(i),at(()=>t(i).kind!=="none")&&x(et)})}v(e,Z),Be(),a()}var Jv=E('<link rel="icon"/>'),Zv=E("<!> <!> <!> <!> <!> <!> <!>",1),tm=E('<button type="button" class="annot-tool" title="Kiosk — auto-advance this deck (step, then page, then loop)"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="8" cy="8" r="6"></circle><path d="M6.5 5.5v5l4.5-2.5z" fill="currentColor" stroke="none"></path></svg></span> <span class="tool-label"><span class="tool-mn">K</span>IOSK</span></button>'),em=E('<button type="button" class="annot-tool" aria-keyshortcuts="b"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="1.5" y="2" width="13" height="12" rx="1.2"></rect><path d="M1.5 5h13M1.5 11h13"></path></svg></span> <span class="tool-label"> <span class="tool-mn">B</span>ARS</span></button>'),nm=E('<button type="button" class="annot-tool" aria-keyshortcuts="i"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><path d="M3 2l3.3 11 1.8-4.6L13 6.6z"></path></svg></span> <span class="tool-label"> <span class="tool-mn">I</span>NTER</span></button>'),sm=E('<button type="button" class="annot-anchor" title="PRESENT — open speaker console"><span class="tool-mn">P</span>RESENT</button>'),om=E('<span class="save-flash svelte-v9c9xj"> </span>'),am=E('<span class="save-tip svelte-v9c9xj" role="status"> </span>'),rm=E('<span class="save-pop svelte-v9c9xj"><!> <!></span>'),im=E('<span><button type="button" class="annot-act save-act" aria-label="Save layout to source" title="SAVE — write the moved blocks back to the source file">SAVE</button> <!></span>'),lm=E('<span class="annot-bar-sep" aria-hidden="true"></span> <button type="button">AD<span class="tool-mn">J</span>UST</button> <!>',1),cm=E('<div class="print-sub" role="menu" aria-label="Print options"><button type="button" role="menuitem"><span class="print-sub-label">Current slide</span> <kbd class="print-sub-kbd">c</kbd></button> <button type="button" role="menuitem"><span class="print-sub-label">Current + notes</span> <kbd class="print-sub-kbd">C</kbd></button> <div class="print-menu-sep" role="separator"></div> <button type="button" role="menuitem"><span class="print-sub-label">Whole deck</span> <kbd class="print-sub-kbd">w</kbd></button> <button type="button" role="menuitem"><span class="print-sub-label">Whole + notes</span> <kbd class="print-sub-kbd">W</kbd></button> <div class="print-menu-sep" role="separator"></div> <button type="button" role="menuitem"><span class="print-sub-label">Thumbnail grid</span> <kbd class="print-sub-kbd">t</kbd></button> <button type="button" role="menuitem"><span class="print-sub-label">Notes grid</span> <kbd class="print-sub-kbd">T</kbd></button></div>'),dm=E('<div role="presentation"><button type="button" class="annot-tool" aria-haspopup="menu" title="Print current slide or whole deck (hover for options)"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 6V2h8v4"></path><path d="M4 11H2.5A1.5 1.5 0 0 1 1 9.5v-2A1.5 1.5 0 0 1 2.5 6h11A1.5 1.5 0 0 1 15 7.5v2A1.5 1.5 0 0 1 13.5 11H12"></path><rect x="4" y="11" width="8" height="4" rx="0.5"></rect></svg></span> <span class="tool-label">P<span class="tool-mn">R</span>INT</span> <span class="tool-trail" aria-hidden="true">▸</span></button> <!></div>'),pm=E('<span class="tool-mn">C</span>APTURE',1),um=E('<span class="capture-tip svelte-v9c9xj" role="status"> </span>'),fm=E('<button type="button" class="annot-tool" title="Download this slide as a PNG at canvas resolution"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M2.5 5.5h2l1-1.5h5l1 1.5H13.5A1.5 1.5 0 0 1 15 7v5.5A1.5 1.5 0 0 1 13.5 14h-11A1.5 1.5 0 0 1 1 12.5V7A1.5 1.5 0 0 1 2.5 5.5z"></path><circle cx="8" cy="9.5" r="2.2"></circle></svg></span> <span class="tool-label"><!></span></button> <!>',1),hm=E("<span><!></span>"),vm=E('<button type="button" class="annot-tool" title="All slides as a grid (O)" aria-keyshortcuts="o"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor"><rect x="1.5" y="1.5" width="5.5" height="5.5" rx="0.8"></rect><rect x="9" y="1.5" width="5.5" height="5.5" rx="0.8"></rect><rect x="1.5" y="9" width="5.5" height="5.5" rx="0.8"></rect><rect x="9" y="9" width="5.5" height="5.5" rx="0.8"></rect></svg></span> <span class="tool-label"><span class="tool-mn">O</span>VERVIEW</span></button>'),mm=E(`<button type="button" class="annot-tool" title="View this slide's +page.svelte source"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 3.5 2 8l3.5 4.5"></path><path d="M10.5 3.5 14 8l-3.5 4.5"></path></svg></span> <span class="tool-label"><span class="tool-mn">S</span>OURCE</span></button>`),gm=E('<button type="button" class="annot-tool" title="Edit source in a separate window (unscaled)"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 2.5 13.5 4.5 5.5 12.5H3.5v-2z"></path><path d="M10 4l2 2"></path></svg></span> <span class="tool-label"><span class="tool-mn">E</span>DIT</span> <span class="tool-trail tool-ext" aria-hidden="true" title="Opens in a new window"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 3.5H3.5v9h9v-3"></path><path d="M9.5 3.5h3v3"></path><path d="M12.5 3.5 7 9"></path></svg></span></button>'),Xr=E("<!> <!>",1),bm=E("<div><!> <!> <!></div>"),ym=E("<!> <!> <!> <!>",1),wm=E('<div class="replay-shield svelte-v9c9xj" aria-hidden="true"></div>'),km=E("<!>   <div><div><div><!></div></div></div> <!> <!> <!> <!> <!>",1);function ag(e,n){je(n,!1);const o=()=>ht(Wo,"$deckSourceFallback",q),r=()=>ht(Vs,"$displayMode",q),a=()=>ht(Ko,"$displayFactor",q),i=()=>ht(ei,"$recordingLook",q),l=()=>ht(Ua,"$page",q),g=()=>ht(Os,"$chromeArmed",q),f=()=>ht(oa,"$chromeBare",q),L=()=>ht(Zc,"$kioskActive",q),k=()=>ht(Ws,"$replaying",q),X=()=>ht(Ro,"$consoleLive",q),j=()=>ht(Fs,"$moreMenuOpen",q),D=()=>ht(Ki,"$canAdjust",q),z=()=>ht(Fo,"$adjustMode",q),F=()=>ht(od,"$canKiosk",q),B=()=>ht(Wi,"$pageSourceCanView",q),C=()=>ht(Vi,"$pageSourceCanEdit",q),O=()=>ht(Qo,"$canAnnotate",q),$=()=>ht(Zs,"$canSave",q),tt=()=>ht(oh,"$pageSourceHasOwner",q),J=()=>ht(er,"$livePointer",q),[q,Z]=$n(),bt=c(),et=c(),x=c(),P=c(),W=c(),M=c(),S=c(),b=c(),y=c(),N=c(),pt=c(),gt=c(),lt=c(),ut=c(),I=c(),yt=c(),dt=c(),Tt=c(),vt=c(),st=c(),R=c(),G=c(),it=c(),wt=c(),$t=c(),Lt=c(),ye=c(),jt=c(),Rt=c(),Nt=c(),xt=c(),Ct=c(),Yt=c(),qt=c();let ce=c(!1),Qt=c(!1),_t=m(n,"pages",24,()=>[]),fe=m(n,"title",8,void 0),Jt=m(n,"description",8,kl),we=m(n,"image",8,void 0),Re=m(n,"imageAlt",8,void 0),de=m(n,"width",8,1920),ie=m(n,"height",8,1080),Qe=m(n,"baseFontSize",8,"1.5em"),en=m(n,"deckClass",8,""),on=m(n,"fill",8,!1),kn=m(n,"contentBackground",8,void 0),rs=m(n,"contentFont",8,void 0),is=m(n,"article",8,!1),mn=m(n,"articleText",8,"View as article"),Ie=m(n,"articleHref",8,"../text.html"),xn=m(n,"fadeChrome",8,!1),Ln=m(n,"controlBar",8,!0),Xn=m(n,"toolBar",8,!0),Bn=m(n,"hideChrome",8,!1),Rn=m(n,"preloadNeighbours",8,!0),Un=m(n,"adjust",8,!1),gn=m(n,"annotate",8,!1),Qn=m(n,"inkStaleAfter",8,24),Ts=m(n,"inkColors",24,()=>[null,"#E5484D","#3FA9F5","#4BD07A","#FFFFFF"]),As=m(n,"levelHighlight",8,!0),T=m(n,"freehand",24,()=>({})),ot=m(n,"capture",8,!1),zt=m(n,"captureScale",8,1),Ut=m(n,"kiosk",8,!1),se=m(n,"kioskStepMs",8,ri),We=m(n,"kioskPageMs",8,ai),an=m(n,"kioskWpm",8,Jc),rn=m(n,"onboardHint",8,!0),ms=m(n,"stepDots",8,!0),Ns=m(n,"stepDotsAt",8,"bottom"),qn=m(n,"stepCue",8,!0),A=m(n,"stepCueNext",8,tl),Y=m(n,"stepCueSpent",8,el),rt=m(n,"onboardDelayMs",8,qi),Ot=m(n,"pointer",8,!1),Zt=m(n,"pointerShape",8,"arrow"),ke=m(n,"pointerSize",8,Za),pe=c(),It=c(),oe=c(),Vt=c(r()),Pt=Aa(a()),Bt=c(!1),Ft=c(!document.prerendering),De=c(!1),Ne=c(!1),ve=c({left:0,top:0,width:1,height:1});const ee=h=>Math.max(0,Math.min(1,h));function _e(){te()}let Ce=c(!1);const Oe=Xo();let ae=c("CAPTURE"),Me=c(""),Mn=c(!1);async function At(){if(!(t(Mn)||!t(It))){s(Mn,!0),s(ae,"…"),s(Me,"");try{const{blob:h,blockers:U}=await _v(t(It),de(),ie(),zt());U.length>0?(s(Me,Lc(U)),s(ae,"NOT ALLOWED")):h?(Ev(h,Rc(l().url.pathname)),s(ae,"SAVED")):(s(Me,"The browser refused to draw this slide"),s(ae,"FAILED"))}catch{s(Me,"The browser refused to draw this slide"),s(ae,"FAILED")}finally{s(Mn,!1),setTimeout(()=>{s(ae,"CAPTURE"),s(Me,"")},2600)}}}let ft=c(!1);Fs.subscribe(h=>{h||s(ft,!1)});async function $e(h){s(ft,!1),s(Ce,h),await po(),window.print()}function me(h){s(ft,!1),window.location.assign(`${lo}/_handout/${t(jt)}.html${h}`)}function Dt(h){if(!t(ft)||h.ctrlKey||h.metaKey||h.altKey)return!1;if(h.key==="Escape")return h.preventDefault(),s(ft,!1),!0;const ct={c:()=>$e(!1),C:()=>$e(!0),w:()=>me(""),W:()=>me("?notes"),t:()=>me("?grid"),T:()=>me("?grid&notes")}[h.key];return ct?(h.preventDefault(),ct(),ns(),!0):!1}let ge=c();function Se(){var ct;const h=(ct=t(ge))==null?void 0:ct.querySelector(".annot-tools");return h?[...h.querySelectorAll(":scope > button, :scope > .save-btn > button, :scope > .mode button, :scope > .annot-menu > .annot-hamburger")].filter(St=>St instanceof HTMLElement&&!St.disabled):[]}function nn(){var U;const h=(U=t(ge))==null?void 0:U.querySelector(".annot-drop");return h?[...h.querySelectorAll("button.annot-tool")].filter(ct=>ct instanceof HTMLElement&&!ct.disabled):[]}function bn(){var U;const h=(U=t(ge))==null?void 0:U.querySelector(".print-sub");return h?[...h.querySelectorAll("button")].filter(ct=>!ct.disabled):[]}function Ue(h){var U;h&&(h.focus(),(U=h.scrollIntoView)==null||U.call(h,{block:"nearest"}))}function In(h){var be,Je;const U=ah(h);if(!U||Js(h.target))return!1;const ct=(be=t(ge))==null?void 0:be.querySelector(".annot-tools");if(!ct||ct.querySelector(".mode.expanded"))return!1;const St=Se(),Ht=nn(),le=bn(),Et=document.activeElement,ze=ct.querySelector(".annot-hamburger"),Pe=ct.querySelector(".annot-drop"),xe=ct.querySelector(".print-sub"),Zn=ct.querySelector(".print-flyout > .annot-tool"),ne=rh({armed:g(),moreOpen:j(),printOpen:t(ft),focusInPrint:!!(xe&&Et&&xe.contains(Et)),focusInMoreDrop:!!(Pe&&Et&&Pe.contains(Et)),focusOnHamburger:!!(ze&&Et&&(Et===ze||ze.contains(Et))),focusOnBar:!!(Et&&ct.contains(Et)&&!(Pe&&Pe.contains(Et)))});if(ne==="none")return!1;if(ne==="bar"){if(U==="down"&&ze&&Et&&(Et===ze||ze.contains(Et)))return h.preventDefault(),Ar(),Kn(),queueMicrotask(()=>Ue(nn()[0]??ze)),!0;if(U!=="left"&&U!=="right")return!1;const Ve=so(St,Et),Le=oo("bar",U,Ve,St.length);return Le==null||!St.length?!1:(h.preventDefault(),Ue(St[Le]),Kn(),!0)}if(ne==="more"){const Ve=!!(ze&&Et&&(Et===ze||ze.contains(Et))),Le=!!(Pe&&Et&&Pe.contains(Et));if((U==="left"||U==="right")&&!Ve&&!Le){const ts=so(St,Et),Ee=oo("bar",U,ts,St.length);return Ee==null||!St.length?!1:(h.preventDefault(),Ue(St[Ee]),Kn(),!0)}if(U==="right"&&Et&&((Je=Et.closest)!=null&&Je.call(Et,".print-flyout")))return h.preventDefault(),s(ft,!0),Kn(),queueMicrotask(()=>Ue(bn()[0]??Zn)),!0;if(U==="left"){if(Le)return h.preventDefault(),Ue(ze),Kn(),!0;if(Ve){const ts=so(St,ze),Ee=oo("bar","left",ts,St.length);return Ee==null?!1:(h.preventDefault(),Ue(St[Ee]),Kn(),!0)}}if(U==="right"&&Ve){const ts=so(St,ze),Ee=oo("bar","right",ts,St.length);return Ee==null?!1:(h.preventDefault(),Ue(St[Ee]),Kn(),!0)}let Tn=so(Ht,Et);Ve&&(Tn=-1);const Hn=oo("more",U,Tn,Ht.length);return Hn==null?!1:(h.preventDefault(),Hn<0?Ue(ze):Ue(Ht[Hn]),Kn(),!0)}if(ne==="print"){const Ve=so(le,Et),Le=oo("print",U,Ve,le.length);return Le==null?!1:(h.preventDefault(),Le<0?(s(ft,!1),Ue(Zn)):Ue(le[Le]),Kn(),!0)}return!1}function On(h){var Ht;if(ku(h,D()&&z())){h.preventDefault(),Gn();return}if(Dt(h)||In(h))return;const U=xu(h,j(),g());if(U!=="ignore"){switch(h.preventDefault(),j()||Ar(),U){case"overview":ws.set(!0),ns();break;case"kiosk":L()?pi.update(le=>!le):F()&&Ca(),ns();break;case"bars":ns(),Do();return;case"pointer":Co(),ns();break;case"capture":t(ye)&&At(),ns();break;case"print":s(ft,!0),Kn();break;case"source":B()&&Or(),ns();break;case"edit":C()&&xa(),ns();break}Kn();return}function ct(){var le,Et,ze;if(ns(),s(ft,!1),document.activeElement instanceof HTMLElement){const Pe=document.activeElement;((le=Pe.closest)!=null&&le.call(Pe,".overlay")||(Et=Pe.closest)!=null&&Et.call(Pe,".annot-tools")||(ze=Pe.closest)!=null&&ze.call(Pe,".ctrl-bar"))&&Pe.blur()}xi()}const St=_u(h,g());if(St!=="ignore")switch(h.preventDefault(),St){case"arm":ea(),queueMicrotask(()=>Ue(Se()[0]));return;case"disarm":ct();return;case"annotate":O()&&io.update(le=>!le),ct();return;case"adjust":D()&&Fo.update(le=>!le),ct();return;case"display":ip();return;case"present":Jn(),Kn();return;case"more":{const le=_i(),Et=(Ht=t(ge))==null?void 0:Ht.querySelector(".annot-hamburger");le?Et==null||Et.focus():Et==null||Et.blur(),Kn();return}case"toc":rp();return;case"kiosk-pause":L()&&ui(),Kn();return}}let ln=c("SAVE"),yn=c(!1),he=c(0),cn=c([]),ls;const gs={"not-found":"The tag isn't in the source in its literal form (geometry written as expressions, or a reformatted tag), so there is nothing to rewrite — Copy it and paste by hand.",ambiguous:"A tag whose name AND geometry match another (a code sample of itself, say) is ambiguous, so it is never guessed at — Copy that one by hand."};function dn(h,U){s(ln,h),clearTimeout(ls),ls=setTimeout(()=>{s(ln,"SAVE"),s(yn,!1),s(he,0),s(cn,[])},U)}async function Gn(){if(!$()){s(yn,!0),dn("NOT ALLOWED",2600);return}const h=await Ph();h.ok?h.patched===0&&h.unmatched.length===0?dn("NONE",1600):h.unmatched.length?(s(yn,!0),s(he,h.unmatched.length),s(cn,[...new Set(h.unmatched.map(U=>U.reason))]),dn(`${h.patched} OF ${h.patched+h.unmatched.length}`,2600),console.warn("[adjust save] not written — Copy these by hand:",h.unmatched)):(dn("SAVED",1600),setTimeout(()=>location.reload(),550)):(dn("ERROR",1600),console.error("[adjust save] failed:",h.error))}function Jn(){Kl(window.location.href,Na(window.location.pathname))}function te(){if(!t(pe)||!t(It)||t(Vt)!=="SCALED"||t(b)){s(Ne,!1);return}const h=t(pe).clientWidth,U=t(pe).clientHeight,ct=t(It).offsetWidth,St=t(It).offsetHeight;s(Ne,ct>h+1||St>U+1),t(Ne)&&s(ve,{left:ee(t(pe).scrollLeft/ct),top:ee(t(pe).scrollTop/St),width:ee(h/ct),height:ee(U/St)})}function Kt(){!t(pe)||!t(It)||(Ge(pe,t(pe).scrollLeft=Math.max(0,(t(It).offsetWidth-t(pe).clientWidth)/2)),Ge(pe,t(pe).scrollTop=Math.max(0,(t(It).offsetHeight-t(pe).clientHeight)/2)))}function ue(h=!1){if(!t(It)||t(y)||t(N))return;if(t(Vt)==="SCALED"){Ge(It,t(It).style.width=`${Math.round(de()*Pt)}px`),Ge(It,t(It).style.height=`${Math.round(ie()*Pt)}px`),Ge(oe,t(oe).style.transform=`scale(${Pt})`),Ge(oe,t(oe).style.transformOrigin="top left"),t(oe).style.setProperty("--view-scale",String(Pt)),h&&Kt(),_e();return}window.innerWidth/window.innerHeight>t(et)?(Ge(It,t(It).style.height="calc(100vh - 10px)"),Ge(It,t(It).style.width=`${Math.round(t(It).clientHeight*t(et))}px`)):(Ge(It,t(It).style.width="calc(100vw - 10px)"),Ge(It,t(It).style.height=`${Math.round(t(It).clientWidth/t(et))}px`));const ct=on()?de():de()+50,St=ie(),Ht=Math.min(t(It).clientWidth/ct,t(It).clientHeight/St);Ge(oe,t(oe).style.transform=`scale(${Ht})`),Ge(oe,t(oe).style.transformOrigin="center center"),t(oe).style.setProperty("--view-scale",String(Ht)),_e()}function Fe(h){document.body.classList.add("rendering"),ue(h),document.body.classList.remove("rendering")}function _n(h){const U=document.querySelector(".content");if(!U)return;const ct=qa(U);ct.length&&Sc(ct,h)}function zn(h){var U;switch(h.kind){case"goto":{const ct=gc(h.href,t(ut));if(ct===l().url.pathname.replace(/\/+$/,"")+l().url.search){ba(),window.location.reload();return}const St=h.back?"back":"forward",Ht=_t().find(Et=>Et.path===t(x)),le=(h.back?Ht==null?void 0:Ht.transitionBack:Ht==null?void 0:Ht.transition)??"slide";uo(ct,{viewTransitions:Oe,kind:le,direction:St,arriveAtEnd:h.end===!0});return}case"step":{const ct=Te(jo);h.back?(U=ct==null?void 0:ct.prev)==null||U.call(ct):ct==null||ct.next();return}case"continue":window.dispatchEvent(new CustomEvent("gp:slide-continue"));return;case"anim":_n(h);return;case"trigger":ur(h.name);return;case"highlight":ha(h.name);return}}function cs(h){var St;const U=document.getElementById("gp-preload");if((U==null?void 0:U.textContent)===h||(U==null||U.remove(),!h||!((St=HTMLScriptElement.supports)!=null&&St.call(HTMLScriptElement,"speculationrules"))))return;const ct=document.createElement("script");ct.type="speculationrules",ct.id="gp-preload",ct.textContent=h,document.head.appendChild(ct)}Yn(()=>{if(t(Ft))return Fn();let h;const U=()=>{s(Ft,!0),h=Fn()};return document.addEventListener("prerenderingchange",U,{once:!0}),()=>{document.removeEventListener("prerenderingchange",U),h==null||h()}});function Fn(){const h=Vs.subscribe(ne=>{t(De)||(s(Vt,ne),t(Bt)&&Fe(!0))}),U=Ko.subscribe(ne=>{Pt=Aa(ne),t(Bt)&&Fe(!0)}),ct=()=>ue(!1);window.addEventListener("resize",ct),Qc(new URL(window.location.href));const St=()=>{s(Ce,!1)};window.addEventListener("afterprint",St);const Ht=window.self===window.top?Pl(t(ut),ne=>{if(!ne||ne===t(x)||Te(Ws))return;const be=t(y)?`./${ne}?present`:`./${ne}`,Je=_t().findIndex(Hn=>Hn.path===ne),Ve=Je>=0&&Je<(t(P)??0)?"back":"forward",Le=_t().find(Hn=>Hn.path===t(x)),Tn=(Ve==="back"?Le==null?void 0:Le.transitionBack:Le==null?void 0:Le.transition)??"slide";uo(be,{viewTransitions:Oe,kind:Tn,direction:Ve})},t(yt)):()=>{},le=window.self===window.top?Dl(t(ut),ne=>{Te(Ws)||(_n(ne),vc({kind:"anim",...ne}))}):()=>{},Et=window.self===window.top?Cl(t(ut),()=>{Te(Ws)||window.dispatchEvent(new CustomEvent("gp:continue"))}):()=>{},ze=window.self===window.top?$l(t(ut),ne=>{Te(Ws)||ha(ne)}):()=>{},Pe=window.self===window.top?Ll(t(ut),ne=>{Te(Ws)||ur(ne)}):()=>{};let xe=()=>{};if(t(y)){vr(t(ut));const ne=window.setInterval(()=>vr(t(ut)),Wr);xe=()=>window.clearInterval(ne)}else if(window.self===window.top){let ne=Rl(t(ut));const be=()=>Ro.set($v(ne,Date.now(),Ka));be();const Je=Il(t(ut),Le=>{ne=Le,be()}),Ve=window.setInterval(be,Wr);xe=()=>{Je(),window.clearInterval(Ve),Ro.set(!1)}}let Zn=()=>{};if(!t(y)&&window.self===window.top){kr(t(ut));const ne=uc(t(ut)),be=()=>hc({type:"here",deck:t(ut),here:{href:l().url.pathname+l().url.search,path:l().url.pathname.replace(/\/+$/,""),width:de(),height:ie(),title:t(xt)}}),Je=fc(t(ut),Tn=>{Tn.type==="hello"?be():Tn.type==="cmd"&&Te(mc)!=="idle"&&zn(Tn.action)}),Ve=Tn=>{Te(Ws)&&(Tn.stopImmediatePropagation(),Tn.preventDefault())};window.addEventListener("keydown",Ve,!0),window.addEventListener("pagehide",ba);let Le=requestAnimationFrame(()=>{Le=requestAnimationFrame(be)});Zn=()=>{cancelAnimationFrame(Le),Je(),ne(),kr(null),window.removeEventListener("keydown",Ve,!0),window.removeEventListener("pagehide",ba)}}return s(Bt,!0),Fe(!0),()=>{h(),U(),Ht(),le(),Et(),ze(),Pe(),xe(),Zn(),ha(null),window.removeEventListener("resize",ct),window.removeEventListener("afterprint",St)}}_(()=>(o(),t(Qt),t(ce),Ia),()=>{const h=!!o();h&&!t(Qt)&&s(ce,!0),h||s(ce,!1),h&&t(Qt)&&!t(ce)&&Ia(),s(Qt,h)}),_(()=>(t(Bt),i(),t(De),Vs),()=>{t(Bt)&&i()!==t(De)&&(s(De,i()),s(Vt,t(De)?"FITTED":Te(Vs)),Fe(!0))}),_(()=>t(Vt),()=>{s(bt,t(Vt)==="FITTED")}),_(()=>(nt(de()),nt(ie())),()=>{s(et,de()/ie())}),_(()=>l(),()=>{s(x,l().url.pathname.replace(/\/+$/,"").split("/").pop())}),_(()=>(nt(_t()),t(x)),()=>{s(P,_t().findIndex(h=>h.path===t(x)))}),_(()=>(l(),lo),()=>{s(jt,(()=>{var ct;const h=l().url.pathname.replace(lo,"").split("/").filter(Boolean);return h.length===0?"":((ct=h[h.length-1])!=null&&ct.endsWith(".html")?h.slice(0,-1):h).join("-")})())}),_(()=>(t(Ft),l(),t(jt),nt(_t())),()=>{t(Ft)&&dp(l().url.searchParams,t(jt),sessionStorage,_t())}),_(()=>(t(Ft),l(),t(jt),nt(_t())),()=>{s(W,t(Ft)?cp(l().url.searchParams,t(jt),sessionStorage,_t()):[])}),_(()=>(nt(_t()),t(x),t(W)),()=>{s(M,pp(Jr(_t(),t(x)??"","./"),t(W)))}),_(()=>(nt(_t()),t(x)),()=>{var h;s(S,(h=_t().find(U=>U.path===t(x)))==null?void 0:h.favicon)}),_(()=>l(),()=>{s(b,l().url.searchParams.has("clean")||l().url.searchParams.has("shot"))}),_(()=>l(),()=>{s(y,l().url.searchParams.has("present"))}),_(()=>t(y),()=>{Ol.set(t(y))}),_(()=>l(),()=>{s(N,l().url.searchParams.has("shot"))}),_(()=>l(),()=>{s(pt,l().url.searchParams.has("onboard"))}),_(()=>(l(),t(Ce)),()=>{s(gt,l().url.searchParams.has("notes")||t(Ce))}),_(()=>t(gt),()=>{bl.set(t(gt))}),_(()=>(nt(de()),nt(ie()),t(gt)),()=>{s(lt,zc({width:de(),height:ie()},t(gt)))}),_(()=>t(lt),()=>{Pc(Dc(t(lt)))}),_(()=>l(),()=>{s(ut,Na(l().url.pathname))}),_(()=>Ho,()=>{s(I,window.self===window.top)}),_(()=>t(y),()=>{s(yt,Fl(t(y)))}),_(()=>(t(I),t(Ft),t(x),t(ut),t(yt)),()=>{t(I)&&t(Ft)&&t(x)&&Hl(t(ut),t(x),t(yt))}),_(()=>(t(I),t(Ft),t(b),t(y),nt(_t()),t(x),$s),()=>{t(I)&&t(Ft)&&!t(b)&&!t(y)&&Wf(_t(),t(x)??"")&&$s()}),_(()=>(t(ge),$s),()=>{t(ge)&&(t(ge).addEventListener("pointerover",$s),t(ge).addEventListener("focusin",$s))}),_(()=>(g(),t(y),$s),()=>{g()&&!t(y)&&$s()}),_(()=>(nt(_t()),t(x)),()=>{s(dt,Gf(_t(),t(x)??""))}),_(()=>(t(I),t(Ft),f(),L(),k(),i()),()=>{s(Tt,!t(I)||!t(Ft)||f()||L()||k()||i())}),_(()=>(nt(_t()),t(x)),()=>{var h;s(vt,((h=_t().find(U=>U.path===t(x)))==null?void 0:h.adjust)===!0)}),_(()=>(nt(_t()),t(x)),()=>{var h;s(st,(h=_t().find(U=>U.path===t(x)))==null?void 0:h.stepDots)}),_(()=>(nt(ms()),t(b),t(st)),()=>{s(R,ms()&&!t(b)&&t(st)!==!1)}),_(()=>(t(st),nt(Ns())),()=>{s(G,typeof t(st)=="string"?t(st):Ns())}),_(()=>(nt(qn()),nt(_t()),t(x),t(I),L(),X(),i(),k()),()=>{var h;s(it,qn()&&((h=_t().find(U=>U.path===t(x)))==null?void 0:h.stepCue)!==!1&&t(I)&&!L()&&!X()&&!i()&&!k())}),_(()=>(nt(_t()),t(x)),()=>{s(wt,pd(_t(),t(x)??""))}),_(()=>t(wt),()=>{s($t,!t(wt).present||t(wt).position<t(wt).total)}),_(()=>(t(vt),nt(Un())),()=>{s(Lt,t(vt)||Un())}),_(()=>t(Lt),()=>{Zu(t(Lt))}),_(()=>l(),()=>{tf(l().url)}),_(()=>nt(gn()),()=>{Gl(gn())}),_(()=>l(),()=>{Wl(l().url)}),_(()=>nt(Bn()),()=>{yu(Bn())}),_(()=>l(),()=>{wu(l().url)}),_(()=>nt(Ot()),()=>{Sf(Ot())}),_(()=>l(),()=>{Ef(l().url)}),_(()=>nt(Qn()),()=>{Vl.set(Math.max(0,Number(Qn())||24)*60*60*1e3)}),_(()=>l(),()=>{Yl(l().url.pathname.replace(/\/+$/,""))}),_(()=>l(),()=>{{const h=Cc(l().url.searchParams);h!==null&&localStorage.setItem("canCapture",String(h))}}),_(()=>nt(ot()),()=>{s(ye,$c(!1,ta(localStorage.getItem("canCapture")),ot()))}),_(()=>(nt(se()),nt(We()),l(),nt(Ut())),()=>{td.set({stepMs:se(),pageMs:We(),useNotes:!1}),ed(l().url),nd(sd(!1,Ut()))}),_(()=>(t(he),t(cn)),()=>{s(Rt,t(he)?`${t(he)===1?"1 tag":`${t(he)} tags`} not written — see the console. `+(t(cn).length?t(cn):["not-found"]).map(h=>gs[h]).join(" "):"Save not allowed in this setup.")}),_(()=>(nt(_t()),t(x)),()=>{var h;s(Nt,(h=_t().find(U=>U.path===t(x)))==null?void 0:h.title)}),_(()=>(t(Nt),nt(fe())),()=>{s(xt,ml(t(Nt),fe()))}),_(()=>(nt(_t()),t(x),nt(Jt())),()=>{var h;s(Ct,((h=_t().find(U=>U.path===t(x)))==null?void 0:h.description)??Jt())}),_(()=>(nt(_t()),t(x),nt(we())),()=>{var h;s(Yt,((h=_t().find(U=>U.path===t(x)))==null?void 0:h.image)??we())}),_(()=>(nt(_t()),t(x),nt(Re())),()=>{var h;s(qt,((h=_t().find(U=>U.path===t(x)))==null?void 0:h.imageAlt)??Re())}),_(()=>(t(Ft),nt(Rn()),t(I),t(N),t(M),t(y)),()=>{t(Ft)&&cs(Rn()&&t(I)&&!Oe&&!t(N)?_h(xh(t(M),t(y))):"")}),Nn(),vn();var Ms=km();fl("v9c9xj",h=>{var U=hn(),ct=Wt(U);{var St=Ht=>{var le=Jv();V(()=>K(le,"href",t(S))),v(Ht,le)};H(ct,Ht=>{t(S)&&Ht(St)})}v(h,U)}),Q("keydown",Eo,On);var Hs=Wt(Ms);wl(Hs,{get title(){return t(xt)},get description(){return t(Ct)},get image(){return t(Yt)},get imageAlt(){return t(qt)},type:"website"});var Sn=d(Hs,2);let Wn;var En=u(Sn);let Ks;var Pn=u(En);let vo;var ra=u(Pn);{var ia=h=>{var U=Zv(),ct=Wt(U);Ba(ct,n,"default",{},null);var St=d(ct,2);Fv(St,{get canvasWidth(){return de()},get canvasHeight(){return ie()}});var Ht=d(St,2);{var le=be=>{Qv(be,{get canvasWidth(){return de()},get canvasHeight(){return ie()},get position(){return t(G)},get cue(){return t(it)},get cueNext(){return A()},get cueSpent(){return Y()},get hasNextSlide(){return t($t)}})};H(Ht,be=>{t(R)&&be(le)})}var Et=d(Ht,2);bv(Et,{get canvasWidth(){return de()},get canvasHeight(){return ie()},get inkColors(){return Ts()},get levelHighlight(){return As()},get freehand(){return T()}});var ze=d(Et,2);{var Pe=be=>{{let Je=fn(()=>t(x)??"");zr(be,{get pages(){return _t()},get width(){return de()},get height(){return ie()},get currentPath(){return t(Je)},get deck(){return t(jt)}})}};H(ze,be=>{!t(b)&&!t(y)&&be(Pe)})}var xe=d(ze,2);{var Zn=be=>{kh(be,{get code(){return o(),at(()=>o().code)},language:"svelte",get title(){return o(),at(()=>o().path)},readOnly:!0,edit:!0,class:"gp-chrome no-print",get expanded(){return t(ce)},set expanded(Je){s(ce,Je)},$$events:{edit:()=>xa()},$$legacy:!0})};H(xe,be=>{o()&&!tt()&&be(Zn)})}var ne=d(xe,2);fd(ne,{}),v(h,U)};H(ra,h=>{t(Bt)&&h(ia)})}p(Pn),Ae(Pn,h=>s(oe,h),()=>t(oe)),p(En),Ae(En,h=>s(It,h),()=>t(It)),p(Sn),Ae(Sn,h=>s(pe,h),()=>t(pe));var No=d(Sn,2);{var js=h=>{var U=bm();let ct;var St=u(U);{var Ht=xe=>{Cu(xe,{get width(){return de()},get height(){return ie()},kioskItem:Ee=>{var Xt=hn(),pn=Wt(Xt);{var Dn=wn=>{var Vn=tm();Q("click",Vn,()=>{Ca(),document.activeElement instanceof HTMLElement&&document.activeElement.blur()}),v(wn,Vn)};H(pn,wn=>{F()&&wn(Dn)})}v(Ee,Xt)},barsItem:Ee=>{var Xt=em(),pn=d(u(Xt),2),Dn=u(pn);Ke(2),p(pn),p(Xt),V(()=>{K(Xt,"title",f()?"Show the tool bar and the control bar again (B)":"Hide the tool bar and the control bar — Alt+. brings them back (B)"),kt(Dn,`${f()?"SHOW":"HIDE"} `)}),Q("click",Xt,function(...wn){Do==null||Do.apply(this,wn)}),v(Ee,Xt)},pointerItem:Ee=>{var Xt=nm(),pn=d(u(Xt),2),Dn=u(pn);Ke(2),p(pn),p(Xt),V(()=>{K(Xt,"title",J()?"Stop drawing the pointer — show the real cursor again (I)":"Draw a pointer where the mouse is, for screen recorders that leave the cursor out (I)"),K(Xt,"aria-pressed",J()),kt(Dn,`${J()?"HIDE":"DRAW"} PO`)}),Q("click",Xt,function(...wn){Co==null||Co.apply(this,wn)}),v(Ee,Xt)},presentBtn:Ee=>{var Xt=sm();Q("click",Xt,Jn),v(Ee,Xt)},adjustGroup:Ee=>{var Xt=hn(),pn=Wt(Xt);{var Dn=wn=>{var Vn=lm(),Ye=d(Wt(Vn),2);let un;var Bs=d(Ye,2);{var to=bs=>{var xs=im();let Us;var eo=u(xs),es=d(eo,2);{var ys=go=>{var da=rm(),ar=u(da);{var nl=qs=>{var Gs=om(),pa=u(Gs,!0);p(Gs),V(()=>kt(pa,t(ln))),v(qs,Gs)};H(ar,qs=>{t(ln)!=="SAVE"&&qs(nl)})}var sl=d(ar,2);{var ol=qs=>{var Gs=am(),pa=u(Gs,!0);p(Gs),V(()=>kt(pa,t(Rt))),v(qs,Gs)};H(sl,qs=>{t(yn)&&qs(ol)})}p(da),v(go,da)};H(es,go=>{(t(ln)!=="SAVE"||t(yn))&&go(ys)})}p(xs),V(()=>Us=Mt(xs,1,"save-btn svelte-v9c9xj",null,Us,{refused:t(yn)})),Q("click",eo,Gn),v(bs,xs)};H(Bs,bs=>{z()&&bs(to)})}V(()=>{un=Mt(Ye,1,"annot-tab adjust-tab",null,un,{on:z()}),K(Ye,"aria-pressed",z()),K(Ye,"aria-label",z()?"ADJUST on":"ADJUST off"),K(Ye,"title",z()?"ADJUST — placing blocks by hand (click to stop)":"ADJUST — drag and resize blocks at exact pixels")}),Q("click",Ye,()=>Fo.update(bs=>!bs)),v(wn,Vn)};H(pn,wn=>{D()&&wn(Dn)})}v(Ee,Xt)},printBtn:Ee=>{var Xt=dm();let pn;var Dn=u(Xt),wn=d(Dn,2);{var Vn=Ye=>{var un=cm(),Bs=u(un),to=d(Bs,2),bs=d(to,4),xs=d(bs,2),Us=d(xs,4),eo=d(Us,2);p(un),Q("click",Bs,()=>$e(!1)),Q("click",to,()=>$e(!0)),Q("click",bs,()=>me("")),Q("click",xs,()=>me("?notes")),Q("click",Us,()=>me("?grid")),Q("click",eo,()=>me("?grid&notes")),v(Ye,un)};H(wn,Ye=>{t(ft)&&Ye(Vn)})}p(Xt),V(()=>{pn=Mt(Xt,1,"print-flyout",null,pn,{open:t(ft)}),K(Dn,"aria-expanded",t(ft))}),Q("click",Dn,sn(()=>s(ft,!t(ft)))),Q("mouseenter",Xt,()=>s(ft,!0)),Q("mouseleave",Xt,()=>s(ft,!1)),v(Ee,Xt)},captureItem:Ee=>{var Xt=hm();let pn;var Dn=u(Xt);{var wn=Vn=>{var Ye=fm(),un=Wt(Ye),Bs=d(u(un),2),to=u(Bs);{var bs=es=>{var ys=pm();Ke(),v(es,ys)},xs=es=>{var ys=ss();V(()=>kt(ys,t(ae))),v(es,ys)};H(to,es=>{t(ae)==="CAPTURE"?es(bs):es(xs,-1)})}p(Bs),p(un);var Us=d(un,2);{var eo=es=>{var ys=um(),go=u(ys,!0);p(ys),V(()=>kt(go,t(Me))),v(es,ys)};H(Us,es=>{t(Me)&&es(eo)})}V(()=>un.disabled=t(Mn)),Q("click",un,At),v(Vn,Ye)};H(Dn,Vn=>{t(ye)&&Vn(wn)})}p(Xt),V(()=>pn=Mt(Xt,1,"capture-btn svelte-v9c9xj",null,pn,{refused:!!t(Me)})),v(Ee,Xt)},overviewBtn:Ee=>{var Xt=vm();Q("click",Xt,()=>{ws.set(!0),document.activeElement instanceof HTMLElement&&document.activeElement.blur()}),v(Ee,Xt)},sourceItem:Ee=>{var Xt=Xr(),pn=Wt(Xt);{var Dn=Ye=>{var un=mm();Q("click",un,()=>Or()),v(Ye,un)};H(pn,Ye=>{B()&&Ye(Dn)})}var wn=d(pn,2);{var Vn=Ye=>{var un=gm();Q("click",un,()=>xa()),v(Ye,un)};H(wn,Ye=>{C()&&Ye(Vn)})}v(Ee,Xt)},$$slots:{kioskItem:!0,barsItem:!0,pointerItem:!0,presentBtn:!0,adjustGroup:!0,printBtn:!0,captureItem:!0,overviewBtn:!0,sourceItem:!0}})};H(St,xe=>{Xn()&&xe(Ht)})}var le=d(St,2);{var Et=xe=>{Ru(xe,{tocItem:be=>{kp(be,{bar:!0,get pages(){return _t()},get deck(){return t(jt)},get article(){return is()},get articleText(){return mn()},get articleHref(){return Ie()},get returnTo(){return t(W)}})},navGroup:be=>{{let Je=fn(()=>(t(M),at(()=>t(M).first??""))),Ve=fn(()=>(t(M),at(()=>t(M).prev??""))),Le=fn(()=>(t(M),at(()=>t(M).next??""))),Tn=fn(()=>(t(M),at(()=>t(M).last??"")));xl(be,{deckLevel:!0,get firstLink(){return t(Je)},get prevLink(){return t(Ve)},get nextLink(){return t(Le)},get lastLink(){return t(Tn)}})}},$$slots:{tocItem:!0,navGroup:!0}})};H(le,xe=>{Ln()&&xe(Et)})}var ze=d(le,2);{var Pe=xe=>{Ou(xe,{get width(){return de()},get height(){return ie()},get rect(){return t(ve)}})};H(ze,xe=>{t(Ne)&&xe(Pe)})}p(U),Ae(U,xe=>s(ge,xe),()=>t(ge)),V(()=>{ct=Mt(U,1,"overlay svelte-v9c9xj",null,ct,{"fade-chrome":xn()}),re(U,`--base-font:${Qe()??""};`)}),v(h,U)};H(No,h=>{t(Bt)&&!t(b)&&!t(y)&&(Xn()||Ln())&&h(js)})}var mo=d(No,2);{var la=h=>{var U=ym(),ct=Wt(U);Nv(ct,{});var St=d(ct,2);Dv(St,{});var Ht=d(St,2);{let Et=fn(()=>t(x)??"");Cv(Ht,{get pages(){return _t()},get currentSlide(){return t(Et)},prefix:"./",get wpm(){return an()}})}var le=d(Ht,2);{let Et=fn(()=>Xn()||Ln());eh(le,{get offered(){return rn()},get firstSlide(){return t(dt)},get suppressed(){return t(Tt)},get bars(){return t(Et)},get delayMs(){return rt()},get force(){return t(pt)},get themeClass(){return en()}})}v(h,U)};H(mo,h=>{t(Bt)&&Ho&&!t(b)&&!t(y)&&h(la)})}var Mo=d(mo,2);{var ca=h=>{var U=wm();v(h,U)};H(Mo,h=>{k()&&!t(y)&&h(ca)})}var w=d(Mo,2);{var mt=h=>{Df(h,{get shape(){return Zt()},get size(){return ke()}})};H(w,h=>{t(I)&&!t(y)&&h(mt)})}var Gt=d(w,2);{var qe=h=>{var U=Xr(),ct=Wt(U);bf(ct,{get pages(){return _t()},get width(){return de()},get height(){return ie()}});var St=d(ct,2);{let Ht=fn(()=>t(x)??"");zr(St,{get pages(){return _t()},get width(){return de()},get height(){return ie()},get currentPath(){return t(Ht)},get deck(){return t(jt)},get present(){return t(y)}})}v(h,U)};H(Gt,h=>{t(Bt)&&t(y)&&h(qe)})}V(()=>{Wn=Mt(Sn,1,"viewport svelte-v9c9xj",null,Wn,{zoom:!t(bt),shot:t(N)}),Ks=Mt(En,1,`container ${en()??""}`,"svelte-v9c9xj",Ks,{"fit-mode":t(bt),"zoom-mode":!t(bt),clean:t(b),present:t(y),shot:t(N),"fade-chrome":xn(),"print-notes":t(gt)}),re(En,`--canvas-w:${de()??""}px; --canvas-h:${ie()??""}px; --aspect:${t(et)??""}; --base-font:${Qe()??""}; --print-scale:${t(lt),at(()=>t(lt).scale)??""}; --print-w:${t(lt),at(()=>t(lt).slideWidthPx)??""}px; --print-h:${t(lt),at(()=>t(lt).slideHeightPx)??""}px; --print-notes-h:${t(lt),at(()=>t(lt).notesHeightPx)??""}px;${kn()?` --content-bg:${kn()};`:""}${rs()?` --content-font:${rs()};`:""}`),vo=Mt(Pn,1,"content svelte-v9c9xj",null,vo,{fill:on(),ready:t(Bt)})}),Q("scroll",Sn,_e),v(e,Ms),Be(),Z()}export{ag as S};
