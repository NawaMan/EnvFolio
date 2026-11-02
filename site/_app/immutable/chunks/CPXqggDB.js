var rl=Object.defineProperty;var aa=e=>{throw TypeError(e)};var al=(e,n,o)=>n in e?rl(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o;var ia=(e,n,o)=>al(e,typeof n!="symbol"?n+"":n,o),dr=(e,n,o)=>n.has(e)||aa("Cannot "+o);var _s=(e,n,o)=>(dr(e,n,"read from private field"),o?o.call(e):n.get(e)),go=(e,n,o)=>n.has(e)?aa("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(e):n.set(e,o),pr=(e,n,o,a)=>(dr(e,n,"write to private field"),a?a.call(e,o):n.set(e,o),o),la=(e,n,o)=>(dr(e,n,"access private method"),o);import"./CWj6FrbW.js";import"./BLWjpHvq.js";import{s as gt,o as os,a as Es,e as G,c as Br,d as Je,j as Qa}from"./Q3bMNuUD.js";import{h as il,d as ll,bu as cl,b as dl,k as Ys,u as ot,ac as Ue,az as u,aB as d,aA as p,ay as B,a as h,ag as qe,ah as E,ae as _,ad as s,G as Z,F as t,af as Dn,$ as c,c as fn,f as Wt,a9 as co,aN as ns,aC as Ke,aL as Kn,aR as He,A as Ls,aQ as Ze,ai as ds,aD as rs,bc as pl,W as un,am as Sr,bv as So}from"./BRVe16sT.js";import{b as Er}from"./CPwLOqZt.js";import{p as g,s as dt,a as Cn}from"./DLMLSNRk.js";import{i as L}from"./CU_bAO6Z.js";import{a as ul,s as jr}from"./DXT6Zfjs.js";import{h as fl}from"./DRh-3xQW.js";import{a as I,s as Mt,r as ss,b as le,f as vl,e as ca}from"./BEww2RDn.js";import{b as Re}from"./C9UUp79o.js";import{i as yn}from"./fZTDua3h.js";/* empty css        */import{v as fo,c as Tr,C as Bn,d as bo,e as da,h as hl,g as Ja,S as ml,b as gl,f as bl,N as yl}from"./Bg1UVH7o.js";import{e as $n,i as hs}from"./BWxrDbBf.js";import{a as ro,d as Gs,b as Fo,M as pa,c as ua,e as Ar,h as kl,s as ur,f as fa,p as wl}from"./Dc_rDrF8.js";import{a as ws,b as Za}from"./DG7wWmFy.js";import{w as Ye,g as Ee,d as Xs}from"./BtHsUWj_.js";import{a as Ur,c as Ro,f as xl,g as _l,i as Sl,d as Nr,j as El,k as Tl,r as fr,m as va,n as Al,o as Nl,q as Ml,t as Pl,u as $l,v as Dl,w as Cl,x as zl,y as ha,z as Rl,A as Ll,p as Il,B as Ol,C as Fl,D as Hl}from"./BgYhzhBp.js";import{n as po}from"./BGzeEiaE.js";import{c as Vo}from"./15A-IHH4.js";import{s as ps}from"./BMYBWIuQ.js";import{a as ao,c as Yo,o as Kl,b as ti,r as Mr,d as Pr,e as ma,f as Bl,u as jl,g as ga,h as ba,j as Mo,k as Ul,l as vr,m as hr,n as ql,p as Wl,q as Gl,t as Vl}from"./D9jysOYR.js";import{p as Xo,b as Qo,r as Jo,a as ei,c as Yl}from"./BS9JKjQz.js";import{D as ni,E as $r,F as Lo,G as Xl,H as Ql,J as Jl,K as Zl,L as tc,M as ec,N as nc,O as sc,P as ya,Q as oc,R as rc,T as ac,U as ka,V as ic,W as lc,X as cc,Y as dc,Z as pc,_ as Ps,$ as wa,a0 as uc,j as fc,a as mr,k as vc,a1 as Ws,d as hc,a2 as mc,a3 as gc}from"./BR8aPBCx.js";import{a as bc}from"./dMXFPUcI.js";import{c as qr,e as yc,i as si,s as Io,p as kc,a as wc,b as xc,d as _c}from"./D_QNEt50.js";import{p as Sc,b as Ec,a as Ho}from"./1Ljw8JJr.js";import{b as io}from"./DGQAMjXM.js";import{f as Tc,C as Ac,e as Nc,L as xa,s as Mc,b as Pc,p as $c,i as Dc,j as Cc,k as zc,l as Rc}from"./DiyAssUN.js";import{S as Lc,e as Ic,a as Oc,b as _a,l as oi,C as Fc}from"./C08l-NVb.js";import{b as gr}from"./DqfcH4_Q.js";import{m as Sa,b as Hc,a as Wr,d as Kc,e as Bc,f as Ea,g as Ko,D as ri,h as ai,i as ii,j as li,l as Cs,o as Dr,p as ci,q as di,r as Ta,t as pi,u as Bo,v as ui,w as Cr,x as jc,y as Uc,z as qc,A as br,B as Wc,C as Gc,E as Vc,F as Yc,k as Xc,G as Qc,H as Jc,I as Zc,J as td,K as ed}from"./BE-5Yvix.js";import{B as nd}from"./p5wYZ7pK.js";function fi(e){return function(...n){var o=n[0];o.target===this&&(e==null||e.apply(this,n))}}function nn(e){return function(...n){var o=n[0];return o.stopPropagation(),e==null?void 0:e.apply(this,n)}}function vi(e){return function(...n){var o=n[0];return o.preventDefault(),e==null?void 0:e.apply(this,n)}}const sd=Symbol("NaN");function od(e,n,o){il&&ll();var a=new nd(e),r=!cl();dl(()=>{var i=n();i!==i&&(i=sd),r&&i!==null&&typeof i=="object"&&(i={}),a.ensure(i,o)})}var Rs,lo,To,Wo,hi;const Go=class Go{constructor(n){go(this,Wo);go(this,Rs,new WeakMap);go(this,lo);go(this,To);pr(this,To,n)}observe(n,o){var a=_s(this,Rs).get(n)||new Set;return a.add(o),_s(this,Rs).set(n,a),la(this,Wo,hi).call(this).observe(n,_s(this,To)),()=>{var r=_s(this,Rs).get(n);r.delete(o),r.size===0&&(_s(this,Rs).delete(n),_s(this,lo).unobserve(n))}}};Rs=new WeakMap,lo=new WeakMap,To=new WeakMap,Wo=new WeakSet,hi=function(){return _s(this,lo)??pr(this,lo,new ResizeObserver(n=>{for(var o of n){Go.entries.set(o.target,o);for(var a of _s(this,Rs).get(o.target)||[])a(o)}}))},ia(Go,"entries",new WeakMap);let zr=Go;var rd=new zr({box:"border-box"});function oo(e,n,o){var a=rd.observe(e,()=>o(e[n]));Ys(()=>(ot(()=>o(e[n])),a))}function ad(e){return typeof e!="string"?"":e.replace(/\/+$/,"").split("/").pop()??""}const id=e=>!Number.isFinite(e)||e<=0?0:e>=1?1:e;function ld(e,n){const o=Array.isArray(e)?e.filter(f=>!!f&&typeof f=="object"):[],a=fo(o),r=a.length,i=typeof n=="string"?n:"",l=i?a.findIndex(f=>f.path===i):-1;if(l<0)return{index:-1,position:0,total:r,fraction:0,present:!1};const m=l+1;return{index:l,position:m,total:r,fraction:id(m/r),present:!0}}var cd=E('<div class="copyright svelte-rmi52p"><span class="text svelte-rmi52p"> </span> <span class="hover-text svelte-rmi52p"><a target="_blank">Copyright <b> </b> </a></span></div>');function dd(e,n){Ue(n,!1);let o=g(n,"name",24,()=>Tr.copyright.name),a=g(n,"url",24,()=>Tr.copyright.url),r=g(n,"year",24,()=>new Date().getFullYear().toString());yn();var i=cd(),l=u(i),m=u(l);d(l);var f=p(l,2),z=u(f),x=p(u(z)),V=u(x);d(x);var O=p(x);d(z),d(f),d(i),B(()=>{gt(m,`© ${o()??""} ${r()??""}`),I(z,"href",a()),gt(V,`${o()??""} <${a()??""}>`),gt(O,` ${r()??""}`)}),h(e,i),qe()}const pd=/<(script|style)\b[\s\S]*?<\/\1>/gi,ud=/<!--[\s\S]*?-->/g,fd=/\{[^{}]*\}/g,vd=/<[^>]+>/g,hd=/\s+/g,md={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&nbsp;":" "};function gd(e){if(typeof e!="string")return"";let n=e.replace(pd," ").replace(ud," ").replace(fd," ").replace(vd," ");for(const[o,a]of Object.entries(md))n=n.split(o).join(a);return n.replace(hd," ").trim()}function bd(e){const n={};for(const[o,a]of Object.entries(e??{})){if(typeof o!="string")continue;const r=o.match(/\/src\/routes\/(.+)\/([^/]+)\/\+page\.svelte$/);if(!r)continue;const i=r[2];if(!i||!i.endsWith(".html"))continue;const l=r[1].replace(/\/\([^/]+\)/g,"").replace(/^\([^/]+\)\//,"").replace(/\/{2,}/g,"/").replace(/^\/+|\/+$/g,"");if(!l||l.startsWith("_"))continue;const m=l.replace(/\//g,"-");(n[m]??(n[m]={}))[i]=gd(a)}return n}function yd(e,n,o=48){if(typeof e!="string"||!n)return"";const a=e.toLowerCase().indexOf(n.toLowerCase());if(a<0)return"";const r=Math.max(0,a-o),i=Math.min(e.length,a+n.length+o),l=r>0?"…":"",m=i<e.length?"…":"";return`${l}${e.slice(r,i).trim()}${m}`}function kd(e){return typeof e!="string"?"":e.replace(/\.html?$/i,"")}function mi(e,n){const o=(typeof n=="string"?n:"").trim().toLowerCase();if(!o)return[];const a=[];for(const r of e??[]){if(!r)continue;const i=typeof r.title=="string"?r.title:"",l=typeof r.text=="string"?r.text:"",m=kd(r.path),f=Number.isFinite(r.number)?r.number:void 0;i.toLowerCase().includes(o)?a.push({path:r.path,title:i,snippet:"",where:"title",number:f}):m.toLowerCase().includes(o)?a.push({path:r.path,title:i,snippet:r.path,where:"path",number:f}):f!=null&&String(f).includes(o)?a.push({path:r.path,title:i,snippet:`#${f}`,where:"number",number:f}):l.toLowerCase().includes(o)&&a.push({path:r.path,title:i,snippet:yd(l,o),where:"body",number:f})}return a}function gi(e,n,o){const a=Number.isFinite(o)?Math.floor(o):0;if(a<=0)return-1;const r=Number.isFinite(n)?Math.floor(n):0,i=Number.isFinite(e)?Math.floor(e):-1;return i<0||i>=a?r<0?a-1:0:((i+r)%a+a)%a}const wd=`<!-- Framework route — the code lives in $lib/framework (shipped in @geekpresent/core).
     This stub only puts it at its URL; a project using the package has the same file. -->
<script lang="ts">
	import HandoutPage from '@geekpresent/core/framework/HandoutPage.svelte';

	export let data: { deck: string };
<\/script>

<HandoutPage {data} />
`,xd=`<!--
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
`,_d=`<!--
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
`,Sd=`<!--
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
`,Ed=`<!--
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
`,Td=`<!--
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
`,Ad=`<!--
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
`,Nd=`<!--
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
`,Md=`<!--
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
`,Pd=`<!--
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
`,Dd=`<!--
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
	import Steps from '@geekpresent/core/components/Steps.svelte';
	import StepTerminal from '@geekpresent/core/components/StepTerminal.svelte';
	import { pace } from '$lib/pace';
<\/script>

<Shot kicker="usable · 3 / 4" title="Copy, then gone" size={120}>
	<Steps>
		<p class="d-sub">For the password box in a browser.</p>
		<div class="term">
			<StepTerminal
				{...pace}
				autoplay
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
	</Steps>
</Shot>

<Note>
	<p>
		Need a secret in a password box? Dash c copies it without showing it, and clears the clipboard
		after forty-five seconds.
	</p>
</Note>

<style>
	/* The Terminal fills its box: a box of four lines, so the card stays small. */
	.term {
		height: 380px;
	}
</style>
`,Cd=`<!--
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
`,zd=`<!--
  key — trusted, 1: the store key is your own GPG key, in your own keyring; its public half and its
  secret half (MANUAL \`folio init\`: picks or creates the key; the EP002 article).
-->
<script>
	import Part from '../Part.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
<\/script>

<Part
	kicker="trusted · 1 / 3"
	title="Your own GPG key"
	sub="In your keyring. Its secret half is locked by your passphrase."
	shown={1}
	fresh={1}
/>

<Note>
	<p>
		First, trusted. EnvFolio has no vault and no account of its own. It starts from your own GPG
		key.
	</p>
	<p>Its public half encrypts. Its secret half decrypts, and your passphrase locks it.</p>
</Note>
`,Rd=`<!--
  names — usable, 1: an item's variable name comes from its path: a top @namespace is dropped, /
  turns into _, then uppercase; VAR=<name> picks the name; a name that is not a valid variable is
  left out with a warning (README _Naming the variables_; MANUAL \`folio exec\`, Variable names).
-->
<script>
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
<\/script>

<Shot kicker="usable · 1 / 4" title="Item → variable" size={110}>
	<p class="d-sub">No mapping to write: the name comes from the path.</p>
	<div class="map">
		<code class="s">gh/token</code><span class="arrow">→</span><code>GH_TOKEN</code>
		<code class="s">@me/gh/token</code><span class="arrow">→</span><code>GH_TOKEN</code>
		<code class="t">aws/region</code><span class="arrow">→</span><code>AWS_REGION</code>
	</div>
	<div class="rule">
		<div><code>/</code> becomes <code>_</code>, then UPPERCASE</div>
		<div>a top <code>@namespace</code> is dropped</div>
	</div>
	<div class="own">
		<div class="d-tag">or pick the name</div>
		<pre class="cmd"><code
				><span class="prompt">$</span> folio exec -s GITHUB_TOKEN=gh/token \\
    -- gh release list</code
			></pre>
	</div>
</Shot>

<Note>
	<p>
		Fourth, usable. Variable names come from the path: gh slash token becomes GH underscore TOKEN.
	</p>
	<p>Or pick your own name.</p>
</Note>

<style>
	.map {
		display: grid;
		grid-template-columns: auto auto auto;
		justify-content: center;
		align-items: center;
		gap: 22px 26px;
		font-size: 50px;
	}
	.arrow {
		color: var(--ep-dim);
	}
	.rule {
		display: flex;
		flex-direction: column;
		gap: 8px;
		color: var(--ep-dim);
		font-size: 40px;
		text-align: center;
	}
	.own {
		display: flex;
		flex-direction: column;
		gap: 12px;
		padding: 26px 30px;
		background: var(--ep-panel);
		border: 2px solid var(--ep-line);
		border-radius: 14px;
		font-size: 36px;
	}
	.cmd {
		margin: 0;
		font-size: 36px;
		line-height: 1.4;
	}
	.prompt {
		color: #00b356;
	}
</style>
`,Ld=`<!--
  passphrase — usable, 4: who asks for the passphrase. Not folio: gpg does, through pinentry, in
  the terminal or a window; gpg-agent remembers it for its cache time and unlocks the key's secret
  half (MANUAL _Passphrase prompts in a window_; the picture's facts in ./Pieces.svelte).
-->
<script>
	import Part from '../Part.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
<\/script>

<Part
	kicker="usable · 4 / 4"
	title="Who asks for it?"
	sub="Not <code>folio</code>: gpg, through <code>pinentry</code>. <code>gpg-agent</code> remembers."
	shown={10}
	fresh={4}
/>

<Note>
	<p>
		And the passphrase? Folio never asks. gpg does, through pinentry, and gpg-agent remembers it for
		a while.
	</p>
</Note>
`,Id=`<!--
  portable — export some items into one locked file; import it into another store, or use the file
  itself as the store with exec --from, on a machine with no store (MANUAL \`folio export\`: always
  locked, with a passphrase or to a public key, --to; a key made for the export alone, so the
  store's key never leaves; \`folio import\`; _From an export file_: nothing is kept).

  The terminals are real output from demos/ep001/capture.sh (a sandbox store, fake values), as on
  EP001's anywhere slide.
-->
<script>
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
	import Steps from '@geekpresent/core/components/Steps.svelte';
	import StepTerminal from '@geekpresent/core/components/StepTerminal.svelte';
	import { pace } from '$lib/pace';
<\/script>

<Shot kicker="portable" title="Take it with you" size={110}>
	<Steps>
		<StepTerminal
			{...pace}
			autoplay
			title="💻 your laptop"
			style="--terminal-ok: #00b356; font-size: 0.7em"
			lines={[
				{ cmd: 'folio export -s --vars app2.vars \\\\' },
				{ cmd: '    -o app2.folio', cont: true },
				{ out: '✓ Items: 3 (texts: 1, secrets: 2)', tone: 'ok' },
				{ out: '✓ File: app2.folio', tone: 'ok' }
			]}
		/>
		<div class="hop">↓ <code>app2.folio</code> · one locked file</div>
		<StepTerminal
			{...pace}
			title="☁️ a server, or a cloud booth · no store"
			style="font-size: 0.7em"
			lines={[
				{ cmd: 'folio exec -s --from app2.folio \\\\' },
				{ cmd: '    --vars app2.vars -- deploy.sh', cont: true },
				{ out: '==| Super Cool App -- Deployment |==' },
				{ out: '--| Deploying is completed |--' }
			]}
		/>
		<ul class="d-points">
			<li>locked: a passphrase, or their public key (<code>--to</code>)</li>
			<li>your store's key never leaves your machine</li>
			<li><code>import</code> it, or use the file as the store</li>
		</ul>
	</Steps>
</Shot>

<Note>
	<p>
		Third, portable. Folio export puts just what a machine needs into one locked file. Your store's
		key never leaves.
	</p>
	<p>There, import it, or use the file itself as the store, and keep nothing.</p>
</Note>

<style>
	.hop {
		color: var(--ep-dim);
		font-size: 40px;
		text-align: center;
	}
</style>
`,Od=`<!--
  readable — trusted, 3: folio runs pass, gpg and git for you; it is one plain bash script anyone
  can read, and pass still opens every secret, so nothing is locked in (README _Design
  principles_: "Plain, linear bash, so anyone can read it and see that no secret is sent
  anywhere"; _Using \`pass\` directly_; the real \`pass show\` in demos/ep003/capture.sh).
-->
<script>
	import Part from '../Part.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
<\/script>

<Part
	kicker="trusted · 3 / 3"
	title="Nothing hidden"
	sub="One bash script you can read. <code>pass</code> still opens every secret."
	shown={11}
	fresh={1}
	skip={[6, 7, 8, 9]}
/>

<Note>
	<p>Folio just runs pass, gpg and git for you, in one bash script you can read.</p>
	<p>And pass itself still opens every secret. Nothing is locked in.</p>
</Note>
`,Fd=`<!--
  secure — secrets go straight into the environment of the one command that needs them (README
  _Security model_: never on a command line, into a file, or on the screen; no option takes a
  secret as an argument; MANUAL \`folio exec\`: secrets only with --secrets; --names and --confirm
  show what loads before any value is read).

  The terminal is real \`folio exec\` output from demos/ep003/capture.sh (a sandbox store, fake
  values), as on EP003's exec slide. The \`env\` is only there to show the values arrived; a real
  command just uses them.
-->
<script>
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
	import Steps from '@geekpresent/core/components/Steps.svelte';
	import StepTerminal from '@geekpresent/core/components/StepTerminal.svelte';
	import { pace } from '$lib/pace';
<\/script>

<Shot kicker="secure" title="Straight to the process" size={96}>
	<Steps>
		<p class="d-sub">The command gets them as variables. Nothing else does.</p>
		<StepTerminal
			{...pace}
			autoplay
			title="EnvFolio"
			style="--terminal-ok: var(--ep-text); --terminal-warn: var(--ep-secret); font-size: 0.75em"
			lines={[
				{ cmd: 'folio exec -s gh \\\\' },
				{ cmd: "-- sh -c 'env | grep GH_'", cont: true },
				'GH_TOKEN=ghp_DEMO0000fake0000token',
				'GH_USER=demo@example.com'
			]}
		/>
		<ul class="d-points">
			<li>never on a command line, in a file, or on the screen</li>
			<li><span class="s">secrets</span> only when you say <code>-s</code></li>
			<li>typed at a hidden prompt; no option takes one</li>
			<li><code>--names</code>, <code>--confirm</code>: see what loads, before a value is read</li>
		</ul>
	</Steps>
</Shot>

<Note>
	<p>Second, secure. Folio exec hands your secrets straight to the one command that needs them.</p>
	<p>Never on a command line, in a file, or on the screen. And only when you say dash s.</p>
	<p>Dash dash confirm shows what a run will load, before any value is read.</p>
</Note>
`,Hd=`<!--
  start — the question a new secret manager has to answer, and the four answers this episode
  gives, one section each: trusted, secure, portable, usable. Each answer's line is a fact from
  ../EnvFolio README (_Built on \`pass\`_, _Security model_, _Easy to move_, _Naming the variables_,
  _Vars files_) and MANUAL (_Never asked_, _Leave no passphrase behind_).
-->
<script>
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
<\/script>

<Shot kicker="EP002 · by design" title="Why trust a new secret manager?" size={92}>
	<p class="d-sub">Don't take it on faith. Here is how EnvFolio is built.</p>
	<div class="four">
		<div class="one">
			<div class="d-tag">trusted</div>
			<div>built on <code>pass</code>; one script you can read</div>
		</div>
		<div class="one">
			<div class="d-tag">secure</div>
			<div>secrets go straight to the command</div>
		</div>
		<div class="one">
			<div class="d-tag">portable</div>
			<div>one locked file, to any machine</div>
		</div>
		<div class="one">
			<div class="d-tag">usable</div>
			<div>names, vars files, the clipboard, the passphrase your way</div>
		</div>
	</div>
</Shot>

<Note>
	<p>A new secret manager asks for your most sensitive values. Being suspicious is fair.</p>
	<p>So here is how EnvFolio is built: trusted, secure, portable, and still easy to use.</p>
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
`,Kd=`<!--
  store — trusted, 2: the store is a plain pass store (~/.folio, private, 700), its .gpg-id names
  the key, secrets are encrypted to it, texts are signed by it, and git keeps every change (MANUAL
  \`folio init\`, \`insert secret\`, \`insert text\`; README _Texts and secrets_, _Syncing the store
  with git_).
-->
<script>
	import Part from '../Part.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
<\/script>

<Part
	kicker="trusted · 2 / 3"
	title="A plain <code>pass</code> store"
	sub="<span class='s'>Secrets</span> encrypted, <span class='t'>texts</span> signed, every change in git."
	shown={6}
	fresh={5}
/>

<Note>
	<p>The store is a plain pass store, that only you can read.</p>
	<p>
		Secrets are encrypted to your key. Texts stay readable, but signed, so a change behind
		EnvFolio's back is caught. And git keeps every change.
	</p>
</Note>
`,Bd=`<!--
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

<Shot kicker="usable · 4 / 4" title="Three ways to unlock" size={100}>
	<p class="d-sub">How often you type the passphrase is up to you.</p>
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
</Shot>

<Note>
	<p>How often you type it is up to you.</p>
	<p>Auto: in a file only you can read, never asked.</p>
	<p>Normal: asked once, then remembered. The default.</p>
	<p>Strict: asked every time, and forgotten when the command ends.</p>
</Note>

<style>
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
`,jd=`<!--
  vars — usable, 2: a vars file says what a command needs, by its own names, and where each value
  comes from; it holds no value itself, so it can go in the project's repository (README _Vars
  files_ — the file is the README's deploy.vars; \`folio check vars\` needs no store; with --vars,
  the command gets only what the file sets).
-->
<script>
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
<\/script>

<Shot kicker="usable · 2 / 4" title="A vars file" size={120}>
	<p class="d-sub">What a command needs, by its own names. No value inside.</p>
	<div class="file">
		<div class="fname">deploy.vars <span>· commit it with the code</span></div>
		<pre><code
				>GITHUB_TOKEN=<span class="s">@&#123;gh/token&#125;</span>
AUTH=Bearer <span class="s">@&#123;gh/token&#125;</span>
REGION=<span class="t">@&#123;aws/region</span>:-<span class="env">$&#123;AWS_REGION&#125;</span
				><span class="t">&#125;</span>
<span class="t">@&#123;aws/*&#125;</span></code
			></pre>
	</div>
	<dl class="legend">
		<dt><code class="t">@&#123;name&#125;</code></dt>
		<dd>an item from the store</dd>
		<dt><code class="env">$&#123;NAME&#125;</code></dt>
		<dd>a variable already set</dd>
		<dt><code>:-</code></dt>
		<dd>a fallback, when the item is not there</dd>
	</dl>
	<div class="run">
		<code><span class="prompt">$</span> folio check vars deploy.vars</code>
		<pre class="cmd"><code
				><span class="prompt">$</span> folio exec -s --vars deploy.vars \\
    -- ./deploy.sh</code
			></pre>
	</div>
</Shot>

<Note>
	<p>A vars file says what a project needs, and where each value comes from.</p>
	<p>It holds no value, so commit it with the code.</p>
</Note>

<style>
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
		font-size: 38px;
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
	.run {
		display: flex;
		flex-direction: column;
		gap: 10px;
		font-size: 34px;
	}
	.cmd {
		margin: 0;
		padding: 0;
		font-size: 34px;
		line-height: 1.4;
	}
	.prompt {
		color: #00b356;
	}
</style>
`,Ud=`<!--
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
`,qd=`<!--
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
`,Wd=`<!--
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
`,Gd=`<!--
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
`,Vd=`<!--
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
`,Yd=`<!--
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
`,Xd=`<!--
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
`,Qd=`<!--
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
`,Jd=`<!--
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
`,Zd=Object.assign({"/src/routes/_handout/[deck].html/+page.svelte":wd,"/src/routes/ep001-envfolio-intro/anywhere.html/+page.svelte":xd,"/src/routes/ep001-envfolio-intro/exec-multiple.html/+page.svelte":_d,"/src/routes/ep001-envfolio-intro/exec.html/+page.svelte":Sd,"/src/routes/ep001-envfolio-intro/get-it.html/+page.svelte":Ed,"/src/routes/ep001-envfolio-intro/meet.html/+page.svelte":Td,"/src/routes/ep001-envfolio-intro/problem.html/+page.svelte":Ad,"/src/routes/ep001-envfolio-intro/spread.html/+page.svelte":Nd,"/src/routes/ep001-envfolio-intro/texts-and-secrets.html/+page.svelte":Md,"/src/routes/ep001-envfolio-intro/trust.html/+page.svelte":Pd,"/src/routes/ep001-envfolio-intro/vars.html/+page.svelte":$d,"/src/routes/ep002-by-design/clipboard.html/+page.svelte":Dd,"/src/routes/ep002-by-design/get-it.html/+page.svelte":Cd,"/src/routes/ep002-by-design/key.html/+page.svelte":zd,"/src/routes/ep002-by-design/names.html/+page.svelte":Rd,"/src/routes/ep002-by-design/passphrase.html/+page.svelte":Ld,"/src/routes/ep002-by-design/portable.html/+page.svelte":Id,"/src/routes/ep002-by-design/readable.html/+page.svelte":Od,"/src/routes/ep002-by-design/secure.html/+page.svelte":Fd,"/src/routes/ep002-by-design/start.html/+page.svelte":Hd,"/src/routes/ep002-by-design/store.html/+page.svelte":Kd,"/src/routes/ep002-by-design/three-ways.html/+page.svelte":Bd,"/src/routes/ep002-by-design/vars.html/+page.svelte":jd,"/src/routes/ep003-get-started/exec.html/+page.svelte":Ud,"/src/routes/ep003-get-started/get-it.html/+page.svelte":qd,"/src/routes/ep003-get-started/init.html/+page.svelte":Wd,"/src/routes/ep003-get-started/insert.html/+page.svelte":Gd,"/src/routes/ep003-get-started/install.html/+page.svelte":Vd,"/src/routes/ep003-get-started/ls.html/+page.svelte":Yd,"/src/routes/ep003-get-started/more.html/+page.svelte":Xd,"/src/routes/ep003-get-started/shell.html/+page.svelte":Qd,"/src/routes/ep003-get-started/start.html/+page.svelte":Jd}),tp=bd(Zd);function ep(e,n){var o;return((o=tp[e])==null?void 0:o[n])??""}function bi(e,n){return(n??[]).map((o,a)=>({path:o.path,title:o.title,text:ep(e,o.path),number:a+1}))}const Is=Ye(!1),Os=Ye(!1),yi=Ye(0),ki=Ye(0);let Vs;const wi=5e3;function Zo(e=wi){Is.set(!0),Vs&&clearTimeout(Vs),Vs=setTimeout(()=>{Is.set(!1),Vs=void 0},e)}function xi(){Is.set(!1),Os.set(!1),Vs&&(clearTimeout(Vs),Vs=void 0)}function Aa(){Os.set(!0)}function es(){Os.set(!1)}function _i(){const e=!Ee(Os);return Os.set(e),e}function Hn(e=wi){Ee(Is)&&Zo(e)}function np(){yi.update(e=>e+1),Zo()}function sp(){ki.update(e=>e+1),Zo()}const Rr="return",Si=",",op=/^[A-Za-z0-9][A-Za-z0-9._-]*$/;function uo(e){return typeof e!="string"||e.length===0||e.length>128||e.includes("..")?!1:op.test(e)}function Gr(e){if(typeof e!="string"||!e.trim())return[];let n=e.trim();try{n.includes("%")&&(n=decodeURIComponent(n))}catch{}return n.split(Si).map(o=>o.trim()).filter(uo)}function Ei(e){return!Array.isArray(e)||!e.length?"":e.filter(uo).join(Si)}function Ti(e){return e?Gr(e.get(Rr)):[]}function Ai(e){const n=typeof e=="string"?e.trim():"";return n?`gp-catalog-return:${n}`:"gp-catalog-return"}function Na(e,n){return!e||!uo(e)?!1:!(Array.isArray(n)?n:[]).some(a=>a&&a.path===e)}function rp(e,n,o,a=null){const r=Ti(e);if(!o)return r;try{const i=Gr(o.getItem(Ai(n)));return r.length?i.length?Ni(i,r,a):r:i}catch{return r}}function Ni(e,n,o=null){const a=Array.isArray(e)?e.filter(uo):[],r=Array.isArray(n)?n.filter(uo):[];if(!r.length)return a;if(!a.length||r.length>=a.length&&a.every((i,l)=>r[l]===i))return r;if(a.length>r.length){const i=a.length-r.length;if(r.every((l,m)=>a[i+m]===l))return a}if(o){const i=[];for(const l of a)if(Na(l,o))i.push(l);else break;if(i.length&&r.every(l=>!Na(l,o))&&!i.every((l,m)=>r[m]===l))return[...i,...r]}return r}function ap(e,n,o,a=null){var i;if(!o)return;const r=Ti(e);if(r.length)try{const l=Ai(n);let m=[];try{m=Gr(((i=o.getItem)==null?void 0:i.call(o,l))??null)}catch{m=[]}const f=Ni(m,r,a);o.setItem(l,Ei(f))}catch{}}function Mi(e,n){if(!e||e.includes(`${Rr}=`))return e;const o=Array.isArray(n)?Ei(n):n&&uo(n)?n:"";if(!o)return e;const a=e.includes("?")?"&":"?";return`${e}${a}${Rr}=${encodeURIComponent(o)}`}function ip(e,n){const o=a=>a?Mi(a,n):void 0;return{first:o(e.first),last:o(e.last),prev:o(e.prev),next:o(e.next)}}var lp=E('<div id="article" class="svelte-eixeog"><a class="svelte-eixeog"> </a></div>'),cp=E('<span class="snippet svelte-eixeog"> </span>'),dp=E('<li><a class="svelte-eixeog"><span class="hit-title svelte-eixeog"> </span> <!></a></li>'),pp=E('<ol class="results svelte-eixeog" aria-label="Search results"></ol>'),up=E('<p class="no-matches svelte-eixeog" role="status"> </p>'),fp=E('<li><a class="svelte-eixeog"> </a></li>'),vp=E('<ol class="svelte-eixeog"></ol>'),hp=E('<div class="content svelte-eixeog"><div class="head svelte-eixeog"><!> <input class="search svelte-eixeog" type="search" placeholder="Search slides…" aria-label="Search slides"/></div> <div class="scroll svelte-eixeog"><!></div></div>'),mp=E("<div><!> <!></div>");function gp(e,n){Ue(n,!1);const o=()=>dt(Ur,"$page",r),a=()=>dt($,"$isContentVisible",r),[r,i]=Cn(),l=c(),m=c(),f=c(),z=c(),x=c(),V=c(),O=c();let D=g(n,"pages",24,()=>[]),M=g(n,"deck",8,""),nt=g(n,"docs",8,null),W=g(n,"returnTo",8,null);function Y(C){return Mi(`./${C}`,W())}let U=c(""),F=c(-1),X=c("");function tt(C){s(F,gi(t(F)<0?t(O):t(F),C,t(V).length))}function j(){var Et;const C=t(F)<0&&t(x)?0:t(F),bt=(Et=t(K))==null?void 0:Et.querySelectorAll(".scroll ol li a"),At=bt==null?void 0:bt[C];return At?(At.click(),k(),!0):!1}function Q(C){return C.key==="ArrowDown"?(tt(1),!0):C.key==="ArrowUp"?(tt(-1),!0):C.key==="Enter"?j():!1}let vt=g(n,"article",8,!1),et=g(n,"bar",8,!1),w=g(n,"articleText",8,"View as article"),P=g(n,"articleHref",8,"../text.html"),K=c(),$=Ye(!1);const A=yi.subscribe(C=>{C>0&&$.set(!0)});function b(){$.update(C=>!C)}function k(){$.update(C=>!1)}function N(){t(x)?s(U,""):k()}function pt(C){if(a()){if(C.key==="Escape"){C.preventDefault(),N();return}Q(C)&&C.preventDefault()}}function ht(C){if(C.stopPropagation(),C.key==="Escape"){C.preventDefault(),N();return}Q(C)&&C.preventDefault()}function it(C){C.focus()}function ut(C,bt){const At=Et=>{Et&&typeof C.scrollIntoView=="function"&&C.scrollIntoView({block:"nearest"})};return At(bt),{update:At}}function R(C){t(K)&&!t(K).contains(C.target)&&k()}os(()=>{window.addEventListener("keydown",pt),document.addEventListener("click",R)}),Es(()=>{A(),window.removeEventListener("keydown",pt),document.removeEventListener("click",R)}),_(()=>Z(D()),()=>{s(l,fo(D()))}),_(()=>o(),()=>{s(m,ad(o().url.pathname))}),_(()=>(Z(nt()),Z(M()),t(l)),()=>{s(f,nt()??bi(M(),t(l)))}),_(()=>(t(f),t(U)),()=>{s(z,mi(t(f),t(U)))}),_(()=>t(U),()=>{s(x,t(U).trim().length>0)}),_(()=>(t(x),t(z),t(l)),()=>{s(V,t(x)?t(z):t(l))}),_(()=>(t(U),t(X)),()=>{t(U)!==t(X)&&(s(X,t(U)),s(F,-1))}),_(()=>(t(x),t(l),t(m)),()=>{s(O,t(x)?-1:t(l).findIndex(C=>C.path===t(m)))}),Dn(),yn();var mt=mp();let lt;var Tt=u(mt);Bn(Tt,{chrome:!0,text:"Table of Contents",hoverText:"Table of Contents",mnemonic:"T",get isSelected(){return a()},$$events:{click:b}});var yt=p(Tt,2);{var J=C=>{var bt=hp(),At=u(bt),Et=u(At);{var Lt=kt=>{var Ct=lp(),Yt=u(Ct),Ut=u(Yt,!0);d(Yt),d(Ct),B(()=>{I(Yt,"href",P()),gt(Ut,w())}),h(kt,Ct)};L(Et,kt=>{vt()&&kt(Lt)})}var Gt=p(Et,2);ss(Gt),Ys(()=>ws(Gt,()=>t(U),kt=>s(U,kt))),Ys(()=>G("keydown",Gt,ht)),ro(Gt,kt=>it==null?void 0:it(kt)),d(At);var Te=p(At,2),Kt=u(Te);{var zt=kt=>{var Ct=fn(),Yt=Wt(Ct);{var Ut=Qt=>{var wt=pp();$n(wt,5,()=>t(z),hs,(fe,Jt,ye)=>{let Le=()=>t(Jt).path,de=()=>t(Jt).title,ae=()=>t(Jt).snippet;var Xe=dp();let tn;var sn=u(Xe),kn=u(sn),as=u(kn,!0);d(kn);var is=p(kn,2);{var vn=Ie=>{var wn=cp(),zn=u(wn,!0);d(wn),B(()=>gt(zn,ae())),h(Ie,wn)};L(is,Ie=>{ae()&&Ie(vn)})}d(sn),ro(sn,(Ie,wn)=>ut==null?void 0:ut(Ie,wn),()=>ye===t(F)),d(Xe),B(Ie=>{tn=Mt(Xe,1,"svelte-eixeog",null,tn,{current:Le()===t(m),selected:ye===t(F)}),I(sn,"href",Ie),I(sn,"aria-current",Le()===t(m)?"page":void 0),gt(as,de())},[()=>(Le(),ot(()=>Y(Le())))]),h(fe,Xe)}),d(wt),h(Qt,wt)},ce=Qt=>{var wt=up(),fe=u(wt);d(wt),B(Jt=>gt(fe,`No slides match “${Jt??""}”.`),[()=>(t(U),ot(()=>t(U).trim()))]),h(Qt,wt)};L(Yt,Qt=>{t(z),ot(()=>t(z).length)?Qt(Ut):Qt(ce,-1)})}h(kt,Ct)},Nt=kt=>{var Ct=vp();$n(Ct,5,()=>t(l),hs,(Yt,Ut,ce)=>{let Qt=()=>t(Ut).path,wt=()=>t(Ut).title;var fe=fp();let Jt;var ye=u(fe),Le=u(ye,!0);d(ye),ro(ye,(de,ae)=>ut==null?void 0:ut(de,ae),()=>t(F)<0?Qt()===t(m):ce===t(F)),d(fe),B(de=>{Jt=Mt(fe,1,"svelte-eixeog",null,Jt,{current:Qt()===t(m),selected:ce===t(F)}),I(ye,"href",de),I(ye,"aria-current",Qt()===t(m)?"page":void 0),gt(Le,wt())},[()=>(Qt(),ot(()=>Y(Qt())))]),h(Yt,fe)}),d(Ct),h(kt,Ct)};L(Kt,kt=>{t(x)?kt(zt):kt(Nt,-1)})}d(Te),d(bt),h(C,bt)};L(yt,C=>{a()&&C(J)})}d(mt),Re(mt,C=>s(K,C),()=>t(K)),B(()=>lt=Mt(mt,1,"toc gp-chrome no-print svelte-eixeog",null,lt,{expanded:a(),bar:et()})),h(e,mt),qe(),i()}const ks=Ye(!1),bp=Ye(!1),$s=Ye(!1),yp="/__geekpresent/page-add",kp="/__geekpresent/page-remove",wp="/__geekpresent/page-duplicate",xp="/__geekpresent/page-rename",_p="/__geekpresent/page-refs";async function tr(e,n){let o;try{o=await fetch(e,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(n)})}catch{return{error:"network error — is the dev server running?"}}let a={};try{a=await o.json()}catch{a={error:o.ok?"empty response":`HTTP ${o.status}`}}return o.ok?{ok:!0,...a}:{error:a.error||`HTTP ${o.status}`}}async function Sp(e){return tr(yp,{deck:e.deck,path:e.path,title:e.title,template:e.template,after:e.after??null})}async function Ep(e){return tr(kp,{deck:e.deck,path:e.path,deleteFiles:!!e.deleteFiles})}async function Tp(e){return tr(wp,e)}async function Ap(e){return tr(xp,e)}async function Np(e,n){try{const o=await fetch(`${_p}?deck=${encodeURIComponent(e)}&path=${encodeURIComponent(n)}`);if(!o.ok)return[];const a=await o.json();return Array.isArray(a.refs)?a.refs:[]}catch{return[]}}const Pi=/^[a-z0-9][a-z0-9-]*$/;function yr(e){const n=String(e??"").normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").replace(/-+/g,"-");return!n||!Pi.test(n)?"slide":n.length>48?n.slice(0,48).replace(/-+$/,"")||"slide":n}function Mp(e){let n=String(e??"").trim().toLowerCase();if(!n||n.includes("/")||n.includes("\\")||n.includes(".."))return null;n=n.replace(/^\.+/,""),n.endsWith(".html")||(n=n.replace(/\.html?$/i,""),n=`${n}.html`);const o=n.replace(/\.html$/i,"");return Pi.test(o)?`${o}.html`:null}function Po(e,n=0){return Number.isFinite(e)?e:n}function Ma(e,n,o,a){const r=Po(e),i=Po(n),l=Po(o),m=Po(a);return r<=0||i<=0||l<=0||m<=0?0:Math.min(r/l,i/m)}function Pp(e,n){return fo(Array.isArray(e)?e:[]).map((a,r)=>({number:r+1,path:a.path,title:a.title,src:`./${a.path}?clean`,isCurrent:a.path===n}))}function $p(e,n){const o=Array.isArray(e)?e:[],a=(typeof n=="string"?n:"").trim().toLowerCase();return a?o.filter(r=>{if(!r)return!1;const i=typeof r.title=="string"?r.title:"",l=typeof r.path=="string"?r.path:"",m=l.replace(/\.html$/i,""),f=String(r.number??"");return i.toLowerCase().includes(a)||l.toLowerCase().includes(a)||m.toLowerCase().includes(a)||f.includes(a)}):o}function Vr(e){const n=e;return n?n.isContentEditable?!0:/^(INPUT|TEXTAREA|SELECT)$/.test(n.tagName??""):!1}function Dp(e,n){return e.ctrlKey||e.metaKey||e.altKey||Vr(e.target)?"ignore":e.key==="Escape"?n?"close":"ignore":e.defaultPrevented?"ignore":e.key==="o"||e.key==="O"?n?"close":"open":"ignore"}function Cp(e,n){const o=new Set;for(const a of e)Number.isFinite(a)&&o.add(a);return Number.isFinite(n)&&n>0&&o.add(n),o}function zp(e,n){return n?n.bottom<e.top?"above":n.top>e.bottom?"below":"visible":"unknown"}function Rp(e,n=1){if(e.length===0)return 1;const o=e[0];let a=0;for(const r of e){if(Math.abs(r-o)>n)break;a++}return Math.max(1,a)}function Lp(e,n){return!Number.isFinite(e)||!Number.isFinite(n)||n<=0?1:Math.max(1,Math.floor(e/n))}function Ip(e,n,o,a,r){if(n<=0)return 0;const i=Math.max(1,o),l=Math.max(1,a);switch(r){case"left":return Math.min(n,Math.max(1,e-1));case"right":return Math.min(n,Math.max(1,e+1));case"up":return Math.min(n,Math.max(1,e-i));case"down":return Math.min(n,Math.max(1,e+i));case"pageUp":return Math.min(n,Math.max(1,e-i*l));case"pageDown":return Math.min(n,Math.max(1,e+i*l));case"first":return 1;case"last":return n}}function Op(e){if(e.ctrlKey||e.metaKey||e.altKey||Vr(e.target))return"ignore";switch(e.key){case"ArrowLeft":return"left";case"ArrowRight":return"right";case"ArrowUp":return"up";case"ArrowDown":return"down";case"Home":return"first";case"End":return"last";case"PageUp":return"pageUp";case"PageDown":return"pageDown";case"Enter":return"commit";case" ":case"Spacebar":return"toCurrent";default:return"ignore"}}var Fp=E('<button type="button" class="status-open svelte-lrdyn6">Open</button>'),Hp=E("<span> <!></span>"),Kp=E('<span class="current-arrow svelte-lrdyn6" aria-hidden="true">▲</span>'),Bp=E('<span class="current-arrow svelte-lrdyn6" aria-hidden="true">▼</span>'),jp=E(`<button type="button" title="Scroll to the slide you're on"><!>CURRENT</button>`),Up=E('<button type="button" class="edit-btn add-head-btn svelte-lrdyn6" title="Add a slide at the end of the deck">ADD</button>'),qp=E('<kbd class="edit-kbd svelte-lrdyn6">E</kbd>'),Wp=E('ADD · + between · ✎ rename · ⧉ duplicate · × remove · <kbd class="svelte-lrdyn6">E</kbd> done · <kbd class="svelte-lrdyn6">Esc</kbd>',1),Gp=E('arrows move · <kbd class="svelte-lrdyn6">Tab</kbd> filter · <kbd class="svelte-lrdyn6">↵</kbd> select · <kbd class="svelte-lrdyn6">Space</kbd> current · <kbd class="svelte-lrdyn6">Esc</kbd>',1),Vp=E('<option class="svelte-lrdyn6"> </option>'),Yp=E('<label class="svelte-lrdyn6"><span class="svelte-lrdyn6">Template</span> <select class="svelte-lrdyn6"><option class="svelte-lrdyn6">ContentPage</option><option class="svelte-lrdyn6">TitlePage</option></select></label> <label class="svelte-lrdyn6"><span class="svelte-lrdyn6">After</span> <select class="svelte-lrdyn6"><option class="svelte-lrdyn6">(end of deck)</option><!></select></label>',1),Xp=E('<p class="add-form-note svelte-lrdyn6">A new path moves the folder and rewrites links to it under <code class="svelte-lrdyn6">src/routes</code>.</p>'),Qp=E('<label class="add-form-check svelte-lrdyn6"><input type="checkbox" class="svelte-lrdyn6"/> <span class="svelte-lrdyn6"> </span></label>'),Jp=E('<div class="add-form-wrap svelte-lrdyn6"><form class="add-form svelte-lrdyn6"><div class="add-form-title svelte-lrdyn6"><!></div> <label class="svelte-lrdyn6"><span class="svelte-lrdyn6">Title</span> <input type="text" placeholder="My new slide" class="svelte-lrdyn6"/></label> <label class="svelte-lrdyn6"><span class="svelte-lrdyn6">Path</span> <input type="text" placeholder="my-new-slide.html" spellcheck="false" class="svelte-lrdyn6"/></label> <!> <!> <div class="add-form-actions svelte-lrdyn6"><button type="button" class="form-btn ghost svelte-lrdyn6">Cancel</button> <button type="submit" class="form-btn svelte-lrdyn6"> </button></div></form></div>'),Zp=E(' <code class="svelte-lrdyn6"> </code>',1),tu=E("Still linked from: <!> — those links will break.",1),eu=E(`<div class="add-form-wrap svelte-lrdyn6"><div class="add-form remove-dialog svelte-lrdyn6" role="alertdialog"><div class="add-form-title svelte-lrdyn6"> </div> <p class="add-form-note svelte-lrdyn6"><b class="svelte-lrdyn6">Unlist</b> drops it from <code class="svelte-lrdyn6">pages.ts</code> and keeps the folder. <b class="svelte-lrdyn6">Delete files</b> also removes the folder and everything in it — files git
					does not track cannot be recovered.</p> <p class="add-form-note refs svelte-lrdyn6"><!></p> <div class="add-form-actions svelte-lrdyn6"><button type="button" class="form-btn ghost svelte-lrdyn6">Cancel</button> <button type="button" class="form-btn svelte-lrdyn6">Unlist</button> <button type="button" class="form-btn danger svelte-lrdyn6">Delete files</button></div></div></div>`),nu=E('<p class="no-matches svelte-lrdyn6" role="status"> </p>'),su=E('<iframe class="frame svelte-lrdyn6" tabindex="-1" loading="lazy"></iframe>'),ou=E('<span class="card svelte-lrdyn6"> </span>'),ru=E('<span class="path-line svelte-lrdyn6"> </span>'),au=E('<span class="tile-tools svelte-lrdyn6"><button type="button" class="tile-tool tile-rename svelte-lrdyn6" title="Rename (title and/or path)">✎</button> <button type="button" class="tile-tool tile-duplicate svelte-lrdyn6" title="Duplicate">⧉</button> <button type="button" class="tile-tool tile-remove svelte-lrdyn6" title="Remove (unlist or delete)">×</button></span> <button type="button" class="gutter-add svelte-lrdyn6" title="Add slide after this one">+</button>',1),iu=E('<div class="tile-wrap svelte-lrdyn6"><button type="button"><span class="shot svelte-lrdyn6"><!></span> <span class="label svelte-lrdyn6"><span class="num svelte-lrdyn6"> </span> <span class="name svelte-lrdyn6"> </span></span> <!></button> <!></div>'),lu=E("<div></div>"),cu=E('<div role="presentation"><div class="head svelte-lrdyn6"><span class="head-title svelte-lrdyn6"> </span> <span class="head-count svelte-lrdyn6"><!></span> <input class="search svelte-lrdyn6" type="search" placeholder="Filter title, file, #…" aria-label="Filter overview by title, file name, or page number"/> <!> <span class="head-actions svelte-lrdyn6"><!> <!> <button type="button" aria-keyshortcuts="e"> <!></button> <span class="head-hint svelte-lrdyn6"><!></span></span></div> <!> <!> <!></div>');function Pa(e,n){Ue(n,!1);const o=()=>dt($s,"$overviewEditMode",i),a=()=>dt(bp,"$canEditDeck",i),r=()=>dt(ks,"$overviewOpen",i),[i,l]=Cn(),m=c(),f=c(),z=c(),x=c(),V=c();let O=g(n,"pages",24,()=>[]),D=g(n,"width",8,1920),M=g(n,"height",8,1080),nt=g(n,"currentPath",8,""),W=g(n,"deck",8,""),Y=g(n,"present",8,!1);const U=Vo();let F=c(""),X=c(),tt=c(new Set),j=c(!1),Q=c([]),vt=c([]),et=c(),w=c();const P=new Map;let K=c("unknown");function $(){if(!t(et)){s(K,"unknown");return}const S=P.get(t(x));s(K,zp(t(et).getBoundingClientRect(),S?S.getBoundingClientRect():null))}let A;function b(){A==null&&(A=requestAnimationFrame(()=>{A=void 0,$()}))}function k(){var S;(S=P.get(t(x)))==null||S.scrollIntoView({block:"center",behavior:"smooth"})}let N=c(0);function pt(S){var st;(st=P.get(S))==null||st.focus()}function ht(S=t(N)){var st;return S>0&&t(f).some(Pt=>Pt.number===S)?S:t(x)>0&&t(f).some(Pt=>Pt.number===t(x))?t(x):((st=t(f)[0])==null?void 0:st.number)??0}function it(){var S,st,Pt;(S=t(X))==null||S.focus(),(Pt=(st=t(X))==null?void 0:st.select)==null||Pt.call(st)}function ut(S){if(S.stopPropagation(),S.key==="Tab"){S.preventDefault();const st=ht();st>0&&(s(N,st),co().then(()=>pt(st)));return}if(S.key==="Escape"){if(S.preventDefault(),t(z)){s(F,"");return}if(t(Tt)){vn();return}if(o()){ye();return}Jt()}}function R(){return Rp(t(f).map(S=>{var st;return((st=P.get(S.number))==null?void 0:st.getBoundingClientRect().top)??0}))}function mt(S){var We,on;if(!t(et)||t(f).length===0)return 1;const st=(We=P.get(t(f)[0].number))==null?void 0:We.getBoundingClientRect().top,Pt=t(f)[S],jt=Pt?(on=P.get(Pt.number))==null?void 0:on.getBoundingClientRect().top:void 0,se=st!=null&&jt!=null?jt-st:0;return Lp(t(et).getBoundingClientRect().height,se)}function lt(S){var on;if(S.key==="Tab"){S.preventDefault(),S.stopPropagation(),it();return}const st=Op(S);if(st==="ignore"||t(f).length===0)return;if(S.preventDefault(),S.stopPropagation(),st==="commit"){const rn=t(f).find(ms=>ms.number===t(N))??t(f)[0];rn&&Rn(rn.path,rn.number);return}if(st==="toCurrent"){t(x)>0&&t(f).some(rn=>rn.number===t(x))&&(s(N,t(x)),pt(t(N)));return}const Pt=t(f).findIndex(rn=>rn.number===t(N)),jt=Pt>=0?Pt+1:1,se=R(),We=Ip(jt,t(f).length,se,mt(se),st);s(N,((on=t(f)[We-1])==null?void 0:on.number)??0),pt(t(N))}let Tt=c(!1),yt=c("add"),J=c(""),C=c(null),bt=c([]),At=c(!1),Et=c(""),Lt=c(""),Gt=c("content"),Te=c(""),Kt=c(!1),zt=c(!1),Nt=c(""),kt=c("info"),Ct=c(""),Yt=c(!0),Ut=c(""),ce=c(""),Qt;function wt(S,st){var Pt;return S.dataset.tile=String(st),P.set(st,S),(Pt=t(w))==null||Pt.observe(S),{destroy(){var jt;P.delete(st),(jt=t(w))==null||jt.unobserve(S)}}}function fe(){if(!(typeof IntersectionObserver>"u"||t(w))){s(w,new IntersectionObserver(S=>{var Pt;let st=!1;for(const jt of S){if(!jt.isIntersecting)continue;const se=Number(jt.target.dataset.tile);Number.isFinite(se)&&!t(tt).has(se)&&(t(tt).add(se),st=!0),(Pt=t(w))==null||Pt.unobserve(jt.target)}st&&s(tt,new Set(t(tt)))},{root:t(et)??null,rootMargin:"400px 0px"}));for(const S of P.values())t(w).observe(S)}}function Jt(){s(Tt,!1),s(C,null),$s.set(!1),s(Nt,""),s(Ct,""),s(F,""),ks.set(!1)}function ye(){s(Tt,!1),s(C,null),s(Nt,""),s(Ct,""),$s.set(!1)}function Le(){s(Ut,"NOT ALLOWED"),s(ce,"Edit deck only works in vite dev — a static host has no source tree."),Qt&&clearTimeout(Qt),Qt=setTimeout(()=>{s(Ut,""),s(ce,"")},2600)}function de(){if(!a()){Le();return}o()?ye():($s.set(!0),s(Nt,""))}function ae(S=""){if(!a()){Le();return}o()||$s.set(!0),s(yt,"add"),s(J,""),s(C,null),s(Et,""),s(Lt,"slide.html"),s(Gt,"content"),s(Te,S),s(Kt,!1),s(Yt,!0),s(Ct,""),s(Tt,!0),s(Nt,"")}function Xe(S,st){if(!a()){Le();return}s(yt,"rename"),s(J,S),s(C,null),s(Et,st),s(Lt,S),s(Kt,!0),s(Ct,""),s(Tt,!0),s(Nt,"")}function tn(S,st){if(!a()){Le();return}s(yt,"duplicate"),s(J,S),s(C,null),s(Et,`${st} (copy)`),s(Lt,`${yr(t(Et))}.html`),s(Kt,!1),s(Yt,!0),s(Ct,""),s(Tt,!0),s(Nt,"")}function sn(){t(yt)==="rename"?as():t(yt)==="duplicate"?is():Ie()}function kn(){if(!a())return Le(),null;if(!W())return s(kt,"error"),s(Nt,"No deck name — cannot write pages.ts."),null;const S=Mp(t(Lt));if(!S)return s(kt,"error"),s(Nt,"Path must look like my-slide.html (lowercase, hyphens)."),null;const st=t(Et).trim();return st?{path:S,title:st}:(s(kt,"error"),s(Nt,"Title is required."),null)}async function as(){var se;const S=kn();if(!S)return;const st=t(J);s(zt,!0),s(kt,"info"),s(Nt,"Renaming…");const Pt=await Ap({deck:W(),path:st,newPath:S.path,title:S.title});if(s(zt,!1),Pt.error){s(kt,"error"),s(Nt,Pt.error);return}if(s(Tt,!1),S.path!==st&&st===nt()){Rn(S.path,t(x));return}const jt=((se=Pt.updated)==null?void 0:se.length)??0;s(kt,"ok"),s(Nt,S.path===st?`Renamed ${st}`:`Renamed ${st} → ${S.path}${jt?` · links updated in ${jt} file${jt===1?"":"s"}`:""}`)}async function is(){var We;const S=kn();if(!S)return;const st=t(Yt),Pt=t(J);s(zt,!0),s(kt,"info"),s(Nt,"Duplicating…");const jt=await Tp({deck:W(),path:Pt,newPath:S.path,title:S.title});if(s(zt,!1),jt.error){s(kt,"error"),s(Nt,jt.error);return}s(Tt,!1);const se=(((We=t(m).find(on=>on.path===Pt))==null?void 0:We.number)??t(x))+1;if(st){Rn(S.path,se);return}s(kt,"ok"),s(Nt,`Duplicated ${Pt} → ${S.path}`),s(Ct,S.path)}function vn(){s(Tt,!1),s(Nt,"")}async function Ie(){const S=kn();if(!S)return;const{path:st,title:Pt}=S,jt=t(Yt);s(zt,!0),s(kt,"info"),s(Nt,"Adding…");const se=await Sp({deck:W(),path:st,title:Pt,template:t(Gt),after:t(Te)||null});if(s(zt,!1),se.error){s(kt,"error"),s(Nt,se.error);return}if(s(Tt,!1),jt){Rn(st,t(x)+1);return}s(kt,"ok"),s(Nt,`Added ${st}`),s(Ct,st)}function wn(){if(!t(Ct))return;const S=t(Ct);s(Ct,""),Rn(S,t(x)+1)}async function zn(S,st){var jt;if(!a()){Le();return}if(!W()){s(kt,"error"),s(Nt,"No deck name — cannot write pages.ts.");return}s(Tt,!1),s(Nt,""),s(C,{path:S,title:st}),s(bt,[]),s(At,!0);const Pt=await Np(W(),S);((jt=t(C))==null?void 0:jt.path)===S&&(s(bt,Pt),s(At,!1))}function Yn(){s(C,null)}async function jn(S){if(!t(C))return;const{path:st}=t(C);s(zt,!0),s(kt,"info"),s(Nt,S?"Deleting…":"Removing…");const Pt=await Ep({deck:W(),path:st,deleteFiles:S});if(s(zt,!1),Pt.error){s(kt,"error"),s(Nt,Pt.error);return}if(s(C,null),S&&st===nt()){const jt=t(m).findIndex(We=>We.path===st),se=t(m)[jt+1]??t(m)[jt-1];if(se){Rn(se.path,se.number);return}}s(kt,"ok"),s(Nt,S?`Deleted ${st} — waiting for reload…`:`Removed ${st} from the deck — waiting for reload…`)}function Rn(S,st){ks.set(!1),$s.set(!1),s(Tt,!1),s(C,null);const Pt=t(x)>0&&st<t(x)?"back":"forward";po(`./${S}${Y()?"?present":""}`,{viewTransitions:U,kind:"slide",direction:Pt})}function Un(S){if(S.key==="Escape"&&r()&&!S.ctrlKey&&!S.metaKey&&!S.altKey){if(t(Tt)){S.preventDefault(),vn();return}if(t(C)){S.preventDefault(),Yn();return}if(o()){S.preventDefault(),ye();return}if(t(z)){S.preventDefault(),s(F,"");return}}if(r()&&!S.ctrlKey&&!S.metaKey&&!S.altKey&&!S.defaultPrevented&&(S.key==="e"||S.key==="E")){const Pt=S.target,jt=(Pt==null?void 0:Pt.tagName)??"";if(Pt!=null&&Pt.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(jt))return;S.preventDefault(),de();return}const st=Dp(S,r());st!=="ignore"&&(S.preventDefault(),st==="close"?Jt():ks.set(!0))}os(()=>{window.addEventListener("keydown",Un),window.addEventListener("resize",$),typeof IntersectionObserver>"u"&&s(j,!0)}),Es(()=>{var S;window.removeEventListener("keydown",Un),window.removeEventListener("resize",$),A!=null&&cancelAnimationFrame(A),(S=t(w))==null||S.disconnect(),s(w,void 0),Qt&&clearTimeout(Qt)});function hn(){var st;const S=document.activeElement;return S?!(Vr(S)||t(X)&&(S===t(X)||t(X).contains(S))||(st=S.closest)!=null&&st.call(S,".add-form-wrap")):!0}_(()=>(Z(O()),Z(nt())),()=>{s(m,Pp(O(),nt()))}),_(()=>(r(),$s),()=>{r()||($s.set(!1),s(Tt,!1),s(C,null),s(N,0),s(F,""))}),_(()=>(t(m),t(F)),()=>{s(f,$p(t(m),t(F)))}),_(()=>t(F),()=>{s(z,t(F).trim().length>0)}),_(()=>t(m),()=>{var S;s(x,((S=t(m).find(st=>st.isCurrent))==null?void 0:S.number)??0)}),_(()=>(t(j),t(f),t(tt),t(x)),()=>{s(V,t(j)?new Set(t(f).map(S=>S.number)):Cp(t(tt),t(x)))}),_(()=>(t(Kt),t(Et),yr),()=>{!t(Kt)&&t(Et)&&s(Lt,`${yr(t(Et))}.html`)}),_(()=>(r(),t(f),t(N)),()=>{r()&&t(f).length>0&&(!t(N)||!t(f).some(S=>S.number===t(N)))&&s(N,ht(0))}),_(()=>(r(),t(et),t(w)),()=>{r()&&t(et)&&fe(),!r()&&t(w)&&(t(w).disconnect(),s(w,void 0))}),_(()=>(r(),t(et),t(x),t(N),t(f)),()=>{r()&&t(et)&&(t(x),co().then(()=>{$(),(!t(N)||!t(f).some(S=>S.number===t(N)))&&s(N,ht(t(x))),t(N)&&hn()&&pt(t(N))}))}),Dn(),yn();var Xn=fn(),Ts=Wt(Xn);{var As=S=>{var st=cu();let Pt;var jt=u(st),se=u(jt),We=u(se,!0);d(se);var on=p(se,2),rn=u(on);{var ms=St=>{var ct=ns();B(()=>gt(ct,`${t(f),ot(()=>t(f).length)??""} of ${t(m),ot(()=>t(m).length)??""}`)),h(St,ct)},Ns=St=>{var ct=ns();B(()=>gt(ct,`${t(m),ot(()=>t(m).length)??""} slides`)),h(St,ct)};L(rn,St=>{t(z)?St(ms):St(Ns,-1)})}d(on);var qn=p(on,2);ss(qn),Re(qn,St=>s(X,St),()=>t(X));var T=p(qn,2);{var q=St=>{var ct=Hp();let Ce;var me=u(ct),Dt=p(me);{var ge=_e=>{var en=Fp();G("click",en,nn(wn)),h(_e,en)};L(Dt,_e=>{t(Ct)&&_e(ge)})}d(ct),B(()=>{Ce=Mt(ct,1,"head-status svelte-lrdyn6",null,Ce,{err:t(kt)==="error",ok:t(kt)==="ok"}),gt(me,`${t(Nt)??""} `)}),h(St,ct)};L(T,St=>{(t(Nt)||t(Ct))&&St(q)})}var rt=p(T,2),It=u(rt);{var Zt=St=>{var ct=jp();let Ce;var me=u(ct);{var Dt=_e=>{var en=Kp();h(_e,en)},ge=_e=>{var en=Bp();h(_e,en)};L(me,_e=>{t(K)==="above"?_e(Dt):t(K)==="below"&&_e(ge,1)})}Ke(),d(ct),B(()=>Ce=Mt(ct,1,"current-btn svelte-lrdyn6",null,Ce,{pending:t(K)==="above"||t(K)==="below"})),G("click",ct,nn(k)),h(St,ct)};L(It,St=>{t(x)>0&&St(Zt)})}var ke=p(It,2);{var pe=St=>{var ct=Up();B(()=>ct.disabled=t(zt)),G("click",ct,nn(()=>ae(""))),h(St,ct)};L(ke,St=>{o()&&St(pe)})}var Rt=p(ke,2);let oe;var Vt=u(Rt),$t=p(Vt);{var Bt=St=>{var ct=qp();h(St,ct)};L($t,St=>{t(Ut)||St(Bt)})}d(Rt);var Ot=p(Rt,2),$e=u(Ot);{var Ae=St=>{var ct=Wp();Ke(3),h(St,ct)},he=St=>{var ct=Gp();Ke(7),h(St,ct)};L($e,St=>{o()?St(Ae):St(he,-1)})}d(Ot),d(rt),d(jt);var ee=p(jt,2);{var xe=St=>{var ct=Jp(),Ce=u(ct),me=u(Ce),Dt=u(me);{var ge=te=>{var Ht=ns();B(()=>gt(Ht,`Rename ${t(J)??""}`)),h(te,Ht)},_e=te=>{var Ht=ns();B(()=>gt(Ht,`Duplicate ${t(J)??""}`)),h(te,Ht)},en=te=>{var Ht=ns("Add slide");h(te,Ht)};L(Dt,te=>{t(yt)==="rename"?te(ge):t(yt)==="duplicate"?te(_e,1):te(en,-1)})}d(me);var mn=p(me,2),Be=p(u(mn),2);ss(Be),d(mn);var Ln=p(mn,2),In=p(u(Ln),2);ss(In),d(Ln);var an=p(Ln,2);{var gn=te=>{var Ht=Yp(),ue=Wt(Ht),Fe=p(u(ue),2),xn=u(Fe);xn.value=xn.__value="content";var Nn=p(xn);Nn.value=Nn.__value="title",d(Fe),d(ue);var cs=p(ue,2),On=p(u(cs),2),Ms=u(On);Ms.value=Ms.__value="";var Fs=p(Ms);$n(Fs,1,()=>t(m),hs,(_n,Gn)=>{var Sn=Vp(),Hs=u(Sn);d(Sn);var Mn={};B(()=>{gt(Hs,`${t(Gn),ot(()=>t(Gn).number)??""}. ${t(Gn),ot(()=>t(Gn).title)??""}`),Mn!==(Mn=(t(Gn),ot(()=>t(Gn).path)))&&(Sn.value=(Sn.__value=(t(Gn),ot(()=>t(Gn).path)))??"")}),h(_n,Sn)}),d(On),d(cs),B(()=>{Fe.disabled=t(zt),On.disabled=t(zt)}),ca(Fe,()=>t(Gt),_n=>s(Gt,_n)),ca(On,()=>t(Te),_n=>s(Te,_n)),h(te,Ht)};L(an,te=>{t(yt)==="add"&&te(gn)})}var ve=p(an,2);{var ln=te=>{var Ht=Xp();h(te,Ht)},ls=te=>{var Ht=Qp(),ue=u(Ht);ss(ue);var Fe=p(ue,2),xn=u(Fe);d(Fe),d(Ht),B(()=>{ue.disabled=t(zt),gt(xn,`Open after ${t(yt)==="duplicate"?"duplicating":"adding"}`)}),Za(ue,()=>t(Yt),Nn=>s(Yt,Nn)),h(te,Ht)};L(ve,te=>{t(yt)==="rename"?te(ln):te(ls,-1)})}var gs=p(ve,2),cn=u(gs),Wn=p(cn,2),Qn=u(Wn,!0);d(Wn),d(gs),d(Ce),d(ct),B(()=>{Be.disabled=t(zt),vl(In,t(Lt)),In.disabled=t(zt),cn.disabled=t(zt),Wn.disabled=t(zt),gt(Qn,t(yt)==="rename"?"Rename":t(yt)==="duplicate"?"Duplicate":"Add")}),ws(Be,()=>t(Et),te=>s(Et,te)),G("input",In,te=>{s(Kt,!0),s(Lt,te.currentTarget.value)}),G("click",cn,vn),G("submit",Ce,vi(sn)),G("click",ct,nn(function(te){bo.call(this,n,te)})),G("keydown",ct,nn(function(te){bo.call(this,n,te)})),h(St,ct)};L(ee,St=>{t(Tt)&&St(xe)})}var De=p(ee,2);{var Oe=St=>{var ct=eu(),Ce=u(ct),me=u(Ce),Dt=u(me);d(me);var ge=p(me,4),_e=u(ge);{var en=ve=>{var ln=ns("Checking for links to it…");h(ve,ln)},mn=ve=>{var ln=tu(),ls=p(Wt(ln));$n(ls,1,()=>t(bt),hs,(gs,cn,Wn)=>{Ke();var Qn=Zp(),te=Wt(Qn,!0);te.nodeValue=Wn?", ":" ";var Ht=p(te),ue=u(Ht,!0);d(Ht),B(()=>gt(ue,(t(cn),ot(()=>t(cn).file)))),h(gs,Qn)}),Ke(),h(ve,ln)},Be=ve=>{var ln=ns("No other slide links to it.");h(ve,ln)};L(_e,ve=>{t(At)?ve(en):(t(bt),ot(()=>t(bt).length)?ve(mn,1):ve(Be,-1))})}d(ge);var Ln=p(ge,2),In=u(Ln),an=p(In,2),gn=p(an,2);d(Ln),d(Ce),d(ct),B(()=>{I(Ce,"aria-label",`Remove ${t(C),ot(()=>t(C).title)??""}`),gt(Dt,`Remove “${t(C),ot(()=>t(C).title)??""}” (${t(C),ot(()=>t(C).path)??""})?`),In.disabled=t(zt),an.disabled=t(zt),gn.disabled=t(zt)}),G("click",In,Yn),G("click",an,()=>jn(!1)),G("click",gn,()=>jn(!0)),G("click",ct,nn(function(ve){bo.call(this,n,ve)})),G("keydown",ct,nn(function(ve){bo.call(this,n,ve)})),h(St,ct)};L(De,St=>{t(C)&&St(Oe)})}var re=p(De,2);{var Ne=St=>{var ct=nu(),Ce=u(ct);d(ct),B(me=>gt(Ce,`No slides match “${me??""}”.`),[()=>(t(F),ot(()=>t(F).trim()))]),h(St,ct)},An=St=>{var ct=lu();let Ce;$n(ct,5,()=>t(f),me=>me.path,(me,Dt)=>{var ge=iu(),_e=u(ge);let en;var mn=u(_e),Be=u(mn);{var Ln=Ht=>{var ue=su();B(Fe=>{I(ue,"title",(t(Dt),ot(()=>t(Dt).title))),I(ue,"src",(t(Dt),ot(()=>t(Dt).src))),le(ue,`width:${D()??""}px; height:${M()??""}px; transform: translate(-50%, -50%) scale(${Fe??""});`)},[()=>(Z(Ma),t(Q),t(Dt),t(vt),Z(D()),Z(M()),ot(()=>Ma(t(Q)[t(Dt).number]??0,t(vt)[t(Dt).number]??0,D(),M())))]),h(Ht,ue)},In=He(()=>(t(V),t(Dt),ot(()=>t(V).has(t(Dt).number)))),an=Ht=>{var ue=ou(),Fe=u(ue,!0);d(ue),B(()=>gt(Fe,(t(Dt),ot(()=>t(Dt).title)))),h(Ht,ue)};L(Be,Ht=>{t(In)?Ht(Ln):Ht(an,-1)})}d(mn);var gn=p(mn,2),ve=u(gn),ln=u(ve,!0);d(ve);var ls=p(ve,2),gs=u(ls,!0);d(ls),d(gn);var cn=p(gn,2);{var Wn=Ht=>{var ue=ru(),Fe=u(ue,!0);d(ue),B(()=>gt(Fe,(t(Dt),ot(()=>t(Dt).path)))),h(Ht,ue)};L(cn,Ht=>{o()&&Ht(Wn)})}d(_e),ro(_e,(Ht,ue)=>wt==null?void 0:wt(Ht,ue),()=>t(Dt).number),Ys(()=>G("click",_e,()=>Rn(t(Dt).path,t(Dt).number)));var Qn=p(_e,2);{var te=Ht=>{var ue=au(),Fe=Wt(ue),xn=u(Fe),Nn=p(xn,2),cs=p(Nn,2);d(Fe);var On=p(Fe,2);B(()=>{I(xn,"aria-label",`Rename ${t(Dt),ot(()=>t(Dt).title)??""}`),xn.disabled=t(zt),I(Nn,"aria-label",`Duplicate ${t(Dt),ot(()=>t(Dt).title)??""}`),Nn.disabled=t(zt),I(cs,"aria-label",`Remove ${t(Dt),ot(()=>t(Dt).title)??""} from deck`),cs.disabled=t(zt),I(On,"aria-label",`Add slide after ${t(Dt),ot(()=>t(Dt).title)??""}`),On.disabled=t(zt)}),G("click",xn,nn(()=>Xe(t(Dt).path,t(Dt).title))),G("click",Nn,nn(()=>tn(t(Dt).path,t(Dt).title))),G("click",cs,nn(()=>zn(t(Dt).path,t(Dt).title))),G("click",On,nn(()=>ae(t(Dt).path))),h(Ht,ue)};L(Qn,Ht=>{o()&&Ht(te)})}d(ge),B(()=>{en=Mt(_e,1,"tile svelte-lrdyn6",null,en,{current:t(Dt).isCurrent}),I(_e,"aria-current",(t(Dt),ot(()=>t(Dt).isCurrent?"page":void 0))),le(mn,`aspect-ratio: ${D()??""} / ${M()??""};`),gt(ln,(t(Dt),ot(()=>t(Dt).number))),gt(gs,(t(Dt),ot(()=>t(Dt).title)))}),oo(mn,"clientWidth",Ht=>Kn(Q,t(Q)[t(Dt).number]=Ht)),oo(mn,"clientHeight",Ht=>Kn(vt,t(vt)[t(Dt).number]=Ht)),h(me,ge)}),d(ct),Re(ct,me=>s(et,me),()=>t(et)),B(()=>Ce=Mt(ct,1,"grid svelte-lrdyn6",null,Ce,{editing:o()})),G("scroll",ct,b),G("keydown",ct,lt),h(St,ct)};L(re,St=>{t(z),t(f),ot(()=>t(z)&&t(f).length===0)?St(Ne):St(An,-1)})}d(st),B(()=>{Pt=Mt(st,1,"scrim no-print svelte-lrdyn6",null,Pt,{editing:o(),present:Y()}),le(st,`--canvas-w:${D()??""}px; --canvas-h:${M()??""}px;`),gt(We,o()?"EDIT DECK":"OVERVIEW PAGE"),oe=Mt(Rt,1,"edit-btn svelte-lrdyn6",null,oe,{on:o(),flash:!!t(Ut)}),I(Rt,"title",t(ce)||(a()?o()?"Leave edit mode (E)":"Add, rename, duplicate or remove slides (E)":"Edit deck only works in vite dev")),I(Rt,"aria-pressed",o()),gt(Vt,`${(t(Ut)||(o()?"DONE":"EDIT"))??""} `)}),ws(qn,()=>t(F),St=>s(F,St)),G("keydown",qn,ut),G("click",qn,nn(function(St){bo.call(this,n,St)})),G("click",Rt,nn(de)),G("click",st,fi(Jt)),h(S,st)};L(Ts,S=>{r()&&S(As)})}h(e,Xn),qe(),l()}const du="toolBarPinned",pu="controlBarPinned",uu="chromePinned";function $i(){try{return localStorage.getItem(uu)==="true"}catch{return!1}}const $a=Xo(du,$i(),{codec:Qo(),sync:!1}),Da=Xo(pu,$i(),{codec:Qo(),sync:!1}),Yr="chromeBare";function fu(e){if(!e||!e.has("bare"))return null;const n=(e.get("bare")??"").trim().toLowerCase();return n!=="off"&&n!=="false"&&n!=="0"}function Di(e,n,o){return e===!0||e===!1?e:n===!0||o===!0}function Ci(){try{return Jo(localStorage.getItem(Yr))}catch{return null}}const er=Ye(Ci()),Xr=Ye(!1),nr=Xs([er,Ro,Xr,ni],([e,n,o,a])=>a||Di(e,n,o)),vu=Xs([er,Xr],([e,n])=>Di(e,!0,n));function jo(e){try{localStorage.setItem(Yr,String(e))}catch{}er.set(e)}window.addEventListener("storage",e=>{(e.key===Yr||e.key===null)&&er.set(Ci())});const Eo=Ye(!1);Is.subscribe(e=>{e&&Eo.set(!1)});function $o(){if(Ee(nr)){jo(!1),Eo.set(!1);return}jo(!0),xi(),Eo.set(!0),document.activeElement instanceof HTMLElement&&document.activeElement.closest(".annot-tools, .ctrl-bar")&&document.activeElement.blur()}function hu(e){Xr.set(e===!0)}function mu(e){const n=fu(e.searchParams);n!==null&&jo(n)}function Qs(e){const n=e;return n?n.isContentEditable?!0:/^(INPUT|TEXTAREA|SELECT)$/.test(n.tagName??""):!1}function gu(e,n){return!n||e.altKey||e.shiftKey||!(e.ctrlKey||e.metaKey)?!1:e.key==="s"||e.key==="S"||e.code==="KeyS"}function zi(e){const n=(e.key??"").toLowerCase();if(/^[a-z]$/.test(n))return n;const o=e.code??"";return/^Key[A-Z]$/.test(o)?o.slice(3).toLowerCase():""}function bu(e,n,o){if(!n&&!o||Qs(e.target)||e.ctrlKey||e.metaKey||e.altKey||e.defaultPrevented)return"ignore";switch(zi(e)){case"o":return"overview";case"k":return"kiosk";case"b":return"bars";case"i":return"pointer";case"c":return"capture";case"r":return"print";case"s":return"source";case"e":return"edit";default:return"ignore"}}function yu(e,n){if(Qs(e.target))return"ignore";if(e.altKey&&!e.ctrlKey&&!e.metaKey&&(e.code==="Period"||e.key==="."))return"arm";if(e.key==="Escape"&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&!e.defaultPrevented)return"disarm";if(!n||e.ctrlKey||e.metaKey||e.altKey||e.defaultPrevented)return"ignore";switch(zi(e)){case"a":return"annotate";case"j":return"adjust";case"z":return"display";case"p":return"present";case"m":return"more";case"t":return"toc";case"u":return"kiosk-pause";default:return"ignore"}}const Ri=[2,1.5,1.25,1,.75,.5,.25],Li=[{factor:1600/1920,name:"HD+"},{factor:1280/1920,name:"720p"},{factor:960/1920,name:"qHD"},{factor:854/1920,name:"480p"},{factor:640/1920,name:"nHD"}],ku=.005;function _o(e,n){return Math.abs(e-n)<ku}function Ca(e){const n=[{id:"fitted",kind:"fitted"}];for(const o of Ri)n.push({id:`s-${o}`,kind:"factor",factor:o});if(e)for(const o of Li)n.push({id:`r-${o.name}`,kind:"factor",factor:o.factor});return n}function wu(e,n,o){if(!e.length)return 0;if(n){const r=e.findIndex(i=>i.kind==="fitted");return r>=0?r:0}const a=e.findIndex(r=>r.kind==="factor"&&_o(r.factor,o));return a>=0?a:0}function kr(e,n,o){if(o<=0)return 0;const a=Number.isFinite(e)?Math.trunc(e):0,r=Number.isFinite(n)?Math.trunc(n):0;return((a+r)%o+o)%o}var xu=E('<button type="button" role="menuitem" tabindex="-1"><span class="k"> </span> <span class="v svelte-1qq1kvo"> <!></span></button>'),_u=E('<button type="button" role="menuitem" tabindex="-1"><span class="k"> </span><span class="v svelte-1qq1kvo"> </span></button>'),Su=E('<div class="sep svelte-1qq1kvo">RESOLUTION</div> <!>',1),Eu=E('<div class="menu svelte-1qq1kvo" role="menu" aria-label="Display zoom"><button type="button" role="menuitem" data-choice="fitted" tabindex="-1"><span class="k">FITTED</span><span class="v svelte-1qq1kvo">fit to window</span></button> <div class="sep svelte-1qq1kvo">SCALE</div> <!> <!> <div class="sep svelte-1qq1kvo"><span class="tool-mn">C</span>USTOM</div> <form class="row custom svelte-1qq1kvo"><input type="number" step="1" placeholder="%" aria-label="Custom zoom percent" class="svelte-1qq1kvo"/> <button type="submit" class="svelte-1qq1kvo">Set</button></form></div>'),Tu=E("<div><!> <!></div>");function Au(e,n){Ue(n,!1);const o=()=>dt(Gs,"$displayMode",r),a=()=>dt(Fo,"$displayFactor",r),[r,i]=Cn(),l=c(),m=c(),f=c(),z=c(),x=c();let V=g(n,"width",8,1920),O=g(n,"height",8,1080),D=g(n,"inline",8,!1),M=c(!1),nt=c(),W=c(),Y=c(),U=c(""),F=0;const X=V()===1920&&O()===1080,tt=R=>`${Math.round(R*100)}%`,j=R=>`${Math.round(V()*R)}×${Math.round(O()*R)}`,Q=R=>_o(R,2)?"4K":_o(R,1)?"1:1":"";function vt(){Gs.set("FITTED"),s(M,!1)}function et(R){Fo.set(Ar(R)),Gs.set("SCALED"),s(M,!1)}function w(){const R=parseFloat(t(U));Number.isFinite(R)&&R>0&&et(R/100)}function P(R){var Tt,yt;F=kr(R,0,t(l).length);const mt=(Tt=t(l)[F])==null?void 0:Tt.id;if(!mt||!t(W))return;const lt=t(W).querySelector(`[data-choice="${mt}"]`);lt==null||lt.focus(),(yt=lt==null?void 0:lt.scrollIntoView)==null||yt.call(lt,{block:"nearest"})}function K(){var R,mt,lt,Tt;t(Y)&&(t(Y).focus(),(mt=(R=t(Y)).select)==null||mt.call(R),(Tt=(lt=t(Y)).scrollIntoView)==null||Tt.call(lt,{block:"nearest"}))}async function $(R){s(M,R),R&&(F=wu(t(l),t(m),t(f)),await co(),await co(),P(F))}const A=ki.subscribe(R=>{R>0&&$(!t(M))});function b(R){if(t(M)){if(Qs(R.target)){R.key==="Escape"&&(R.preventDefault(),s(M,!1));return}if(!R.ctrlKey&&!R.metaKey&&!R.altKey&&(R.key==="c"||R.key==="C"||R.code==="KeyC")){R.preventDefault(),K();return}switch(R.key){case"Escape":R.preventDefault(),s(M,!1);return;case"ArrowDown":R.preventDefault(),P(kr(F,1,t(l).length));return;case"ArrowUp":R.preventDefault(),P(kr(F,-1,t(l).length));return;case"Home":R.preventDefault(),P(0);return;case"End":R.preventDefault(),P(t(l).length-1);return;default:return}}}function k(R){t(nt)&&!t(nt).contains(R.target)&&s(M,!1)}os(()=>{window.addEventListener("keydown",b),document.addEventListener("click",k)}),Es(()=>{A(),window.removeEventListener("keydown",b),document.removeEventListener("click",k)}),_(()=>Ca,()=>{s(l,Ca(X))}),_(()=>o(),()=>{s(m,o()==="FITTED")}),_(()=>a(),()=>{s(f,a())}),_(()=>(t(m),t(f)),()=>{s(z,t(m)?"FITTED":tt(t(f)))}),_(()=>(Z(D()),t(z)),()=>{s(x,D()?`${t(z)} (Z)`:t(z))}),Dn(),yn();var N=Tu();let pt;var ht=u(N);Bn(ht,{chrome:!0,get text(){return t(x)},get hoverText(){return t(x)},get isSelected(){return t(M)},$$events:{click:()=>$(!t(M))}});var it=p(ht,2);{var ut=R=>{var mt=Eu(),lt=u(mt);let Tt;var yt=p(lt,4);$n(yt,1,()=>Ri,hs,(Et,Lt)=>{var Gt=xu();let Te;var Kt=u(Gt),zt=u(Kt,!0);d(Kt);var Nt=p(Kt,2),kt=u(Nt,!0),Ct=p(kt);{var Yt=ce=>{var Qt=ns();B(wt=>gt(Qt,`· ${wt??""}`),[()=>(t(Lt),ot(()=>Q(t(Lt))))]),h(ce,Qt)},Ut=He(()=>(t(Lt),ot(()=>X&&Q(t(Lt)))));L(Ct,ce=>{t(Ut)&&ce(Yt)})}d(Nt),d(Gt),B((ce,Qt,wt)=>{Te=Mt(Gt,1,"row svelte-1qq1kvo",null,Te,ce),I(Gt,"data-choice",`s-${t(Lt)}`),gt(zt,Qt),gt(kt,wt)},[()=>({current:!t(m)&&_o(t(f),t(Lt))}),()=>(t(Lt),ot(()=>tt(t(Lt)))),()=>(t(Lt),ot(()=>j(t(Lt))))]),G("click",Gt,()=>et(t(Lt))),h(Et,Gt)});var J=p(yt,2);{var C=Et=>{var Lt=Su(),Gt=p(Wt(Lt),2);$n(Gt,1,()=>Li,hs,(Te,Kt)=>{var zt=_u();let Nt;var kt=u(zt),Ct=u(kt,!0);d(kt);var Yt=p(kt),Ut=u(Yt);d(Yt),d(zt),B((ce,Qt,wt)=>{Nt=Mt(zt,1,"row svelte-1qq1kvo",null,Nt,ce),I(zt,"data-choice",(t(Kt),ot(()=>`r-${t(Kt).name}`))),gt(Ct,Qt),gt(Ut,`${wt??""} · ${t(Kt),ot(()=>t(Kt).name)??""}`)},[()=>({current:!t(m)&&_o(t(f),t(Kt).factor)}),()=>(t(Kt),ot(()=>j(t(Kt).factor))),()=>(t(Kt),ot(()=>tt(t(Kt).factor)))]),G("click",zt,()=>et(t(Kt).factor)),h(Te,zt)}),h(Et,Lt)};L(J,Et=>{X&&Et(C)})}var bt=p(J,4),At=u(bt);ss(At),Re(At,Et=>s(Y,Et),()=>t(Y)),Ke(2),d(bt),d(mt),Re(mt,Et=>s(W,Et),()=>t(W)),B((Et,Lt)=>{Tt=Mt(lt,1,"row svelte-1qq1kvo",null,Tt,{current:t(m)}),I(At,"min",Et),I(At,"max",Lt)},[()=>(Z(pa),ot(()=>Math.round(pa*100))),()=>(Z(ua),ot(()=>Math.round(ua*100)))]),G("click",lt,vt),ws(At,()=>t(U),Et=>s(U,Et)),G("submit",bt,vi(w)),h(R,mt)};L(it,R=>{t(M)&&R(ut)})}d(N),Re(N,R=>s(nt,R),()=>t(nt)),B(()=>pt=Mt(N,1,"mode gp-chrome no-print svelte-1qq1kvo",null,pt,{expanded:t(M),inline:D()})),h(e,N),qe(),i()}const za="0.6.1";var Nu=E('<div role="group" aria-label="Slide tools"><button type="button"><svg class="pin-icon svelte-1bzzyuu" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"></path></svg></button> <span class="annot-bar-sep" aria-hidden="true"></span> <!> <span class="annot-bar-sep" aria-hidden="true"></span> <button type="button"><span class="tool-mn">A</span>NNOTATE</button> <!> <span class="annot-bar-sep" aria-hidden="true"></span> <!> <span class="annot-bar-sep" aria-hidden="true"></span>  <div role="presentation"><button type="button" class="annot-hamburger svelte-1bzzyuu" aria-haspopup="menu" aria-label="More tools (M)">☰ (M)</button>  <div class="annot-drop svelte-1bzzyuu" role="menu" aria-label="More tools" tabindex="-1"><!> <!> <!> <!> <div class="menu-sep svelte-1bzzyuu" role="separator"></div> <!> <!> <div class="menu-sep svelte-1bzzyuu" role="separator"></div> <!> <div class="menu-sep svelte-1bzzyuu" role="separator"></div> <div class="menu-about svelte-1bzzyuu" role="none"> </div></div></div></div>');function Mu(e,n){Ue(n,!0);const o=()=>dt(ks,"$overviewOpen",x),a=()=>dt(Os,"$moreMenuOpen",x),r=()=>dt($a,"$toolBarPinned",x),i=()=>dt(Is,"$chromeArmed",x),l=()=>dt(nr,"$chromeBare",x),m=()=>dt(Eo,"$bareTucked",x),f=()=>dt(ao,"$annotationMode",x),z=()=>dt(Yo,"$canAnnotate",x),[x,V]=Cn();let O=g(n,"width",3,1920),D=g(n,"height",3,1080),M=Ze(void 0);Ls(()=>{o()&&(es(),document.activeElement instanceof HTMLElement&&document.activeElement.blur())}),Ls(()=>{var X;if(a())return;const F=document.activeElement;F instanceof HTMLElement&&((X=t(M))!=null&&X.contains(F))&&F.blur()});let nt=Ze(!1);Ls(()=>{a()&&s(nt,!1)}),Ls(()=>{if(!a())return;const F=X=>{var tt;(tt=t(M))!=null&&tt.contains(X.target)||es()};return document.addEventListener("pointerdown",F,!0),()=>document.removeEventListener("pointerdown",F,!0)});var W=fn(),Y=Wt(W);{var U=F=>{var X=Nu();let tt;var j=u(X);let Q;var vt=p(j,4);ps(vt,()=>n.presentBtn??ds);var et=p(vt,4);let w;var P=p(et,2);ps(P,()=>n.adjustGroup??ds);var K=p(P,4);Au(K,{get width(){return O()},get height(){return D()},inline:!0});var $=p(K,4);let A;var b=u($),k=p(b,2),N=u(k);ps(N,()=>n.overviewBtn??ds);var pt=p(N,2);ps(pt,()=>n.kioskItem??ds);var ht=p(pt,2);ps(ht,()=>n.barsItem??ds);var it=p(ht,2);ps(it,()=>n.pointerItem??ds);var ut=p(it,4);ps(ut,()=>n.captureItem??ds);var R=p(ut,2);ps(R,()=>n.printBtn??ds);var mt=p(R,4);ps(mt,()=>n.sourceItem??ds);var lt=p(mt,4),Tt=u(lt);d(lt),d(k),d($),Re($,yt=>s(M,yt),()=>t(M)),d(X),B(()=>{tt=Mt(X,1,"annot-tools no-print svelte-1bzzyuu",null,tt,{pinned:r(),armed:i(),"menu-open":a(),"overview-open":o(),bare:l(),tucked:l()&&m()}),I(X,"aria-hidden",o()?"true":void 0),Q=Mt(j,1,"annot-tab pin-tab svelte-1bzzyuu",null,Q,{on:r()}),I(j,"aria-pressed",r()),I(j,"aria-label",r()?"PIN on":"PIN off"),I(j,"title",r()?"PIN — this bar stays visible (click to auto-hide again)":"PIN — keep this bar visible"),w=Mt(et,1,"annot-tab annotate-tab",null,w,{on:f()}),et.disabled=!z(),I(et,"aria-pressed",f()),I(et,"aria-label",f()?"ANNOTATE on":"ANNOTATE off"),I(et,"title",z()?f()?"ANNOTATE — drawing (click to put the pen down)":"ANNOTATE — draw on this slide":"ANNOTATE — the pen is not offered on this deck"),A=Mt($,1,"annot-menu svelte-1bzzyuu",null,A,{"menu-open":a(),dismissed:t(nt)}),I(b,"aria-expanded",a()),I(b,"title",`More — Overview, Kiosk, Bars, Pointer, Capture, Print, Source, Edit · GeekPresent ${za}`),gt(Tt,`GeekPresent ${za}`)}),Je("click",j,()=>$a.update(yt=>!yt)),Je("click",et,()=>ao.update(yt=>!yt)),G("pointerleave",$,()=>s(nt,!1)),Je("click",b,()=>_i()),Je("click",k,()=>{es(),s(nt,!0)}),h(F,X)};L(Y,F=>{F(U)})}h(e,W),qe(),V()}Br(["click"]);var Pu=E('<span class="ctrl-bar-sep svelte-1un42o" aria-hidden="true"></span>'),$u=E('<div role="group" aria-label="Slide controls"><button type="button"><svg class="pin-icon svelte-1un42o" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"></path></svg></button> <span class="ctrl-bar-sep svelte-1un42o" aria-hidden="true"></span> <!> <span class="ctrl-bar-sep svelte-1un42o" aria-hidden="true"></span> <!> <!> <div></div></div>');function Du(e,n){Ue(n,!0);const o=()=>dt(hl,"$hostedAnim",f),a=()=>dt(Da,"$controlBarPinned",f),r=()=>dt(Is,"$chromeArmed",f),i=()=>dt(ks,"$overviewOpen",f),l=()=>dt(nr,"$chromeBare",f),m=()=>dt(Eo,"$bareTucked",f),[f,z]=Cn();let x=Ze(void 0);os(()=>(t(x)&&da.set(t(x)),()=>da.set(null)));let V=He(()=>o().size>0);var O=fn(),D=Wt(O);{var M=nt=>{var W=$u();let Y;var U=u(W);let F;var X=p(U,4);ps(X,()=>n.tocItem??ds);var tt=p(X,4);ps(tt,()=>n.navGroup??ds);var j=p(tt,2);{var Q=w=>{var P=Pu();h(w,P)};L(j,w=>{t(V)&&w(Q)})}var vt=p(j,2);let et;Re(vt,w=>s(x,w),()=>t(x)),d(W),B(()=>{Y=Mt(W,1,"ctrl-bar no-print svelte-1un42o",null,Y,{pinned:a(),armed:r(),"overview-open":i(),bare:l(),tucked:l()&&m()}),I(W,"aria-hidden",i()?"true":void 0),F=Mt(U,1,"ctrl-pin svelte-1un42o",null,F,{on:a()}),I(U,"aria-pressed",a()),I(U,"aria-label",a()?"PIN on":"PIN off"),I(U,"title",a()?"PIN — this bar stays visible (click to auto-hide again)":"PIN — keep this bar visible"),et=Mt(vt,1,"ctrl-anim svelte-1un42o",null,et,{"has-anim":t(V)})}),Je("click",U,()=>Da.update(w=>!w)),h(nt,W)};L(D,nt=>{nt(M)})}h(e,O),qe(),z()}Br(["click"]);var Cu=E('<div class="map gp-chrome no-print svelte-ngdolz"><div class="view svelte-ngdolz"></div></div>');function zu(e,n){Ue(n,!1);const o=c();let a=g(n,"width",8,1920),r=g(n,"height",8,1080),i=g(n,"rect",24,()=>({left:0,top:0,width:1,height:1}));const l=160;_(()=>(Z(a()),Z(r())),()=>{s(o,Math.round(l/(a()/r())))}),Dn(),yn();var m=Cu(),f=u(m);d(m),B(()=>{le(m,`width:160px; height:${t(o)??""}px;`),le(f,`left:${Z(i()),ot(()=>i().left*100)??""}%; top:${Z(i()),ot(()=>i().top*100)??""}%; width:${Z(i()),ot(()=>i().width*100)??""}%; height:${Z(i()),ot(()=>i().height*100)??""}%;`)}),h(e,m),qe()}var Ru=rs('<svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-1sadc1x"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>'),Lu=rs('<svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-1sadc1x"><path d="M8 5v14l11-7z"></path></svg>'),Iu=E('<div class="anim svelte-1sadc1x"><button class="icon svelte-1sadc1x"><!></button> <div class="track svelte-1sadc1x" role="slider" tabindex="0" aria-label="Animation progress (audience)"><div class="fill svelte-1sadc1x"></div> <div class="knob svelte-1sadc1x"></div></div> <button class="icon svelte-1sadc1x" aria-label="Restart"><svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-1sadc1x"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"></path></svg></button> <span class="label svelte-1sadc1x">ANIMATE</span></div>');function Ou(e,n){Ue(n,!1);let o=g(n,"onCommand",8,null),a=g(n,"scope",8,".content"),r=[],i=0,l=c(!1),m=c(!1),f=c(0),z=c(),x=0;function V(){const A=document.querySelector(a())??document;r=qr(A),i=yc(r),s(l,r.length>0&&i>0),t(l)&&(s(m,si(r)),s(f,Io(r)))}function O(){var A;(A=o())==null||A({playing:t(m),fraction:t(f)})}function D(){s(f,Io(r)),t(m)&&!r.every(A=>A.playState==="finished")?x=requestAnimationFrame(D):(r.length&&r.every(A=>A.playState==="finished")&&(s(m,!1),s(f,1),O()),x=0)}function M(){!x&&Er&&(x=requestAnimationFrame(D))}function nt(){x&&(cancelAnimationFrame(x),x=0)}function W(A){s(f,Math.max(0,Math.min(1,A)));const b=t(f)*i;for(const k of r)k.currentTime=Math.min(b,xc(k))}function Y(){Io(r)>=1&&W(0),wc(r),s(m,!0),M(),O()}function U(){kc(r),s(m,!1),nt(),O()}function F(){t(m)?U():Y()}function X(){W(0),Y()}let tt=!1;function j(A){const b=t(z).getBoundingClientRect();return(A-b.left)/b.width}function Q(A){var b,k;tt=!0,U(),W(j(A.clientX)),O(),(k=(b=t(z)).setPointerCapture)==null||k.call(b,A.pointerId)}function vt(A){tt&&(W(j(A.clientX)),O())}function et(A){var b,k;tt=!1,(k=(b=t(z)).releasePointerCapture)==null||k.call(b,A.pointerId)}function w(){nt(),V(),t(l)?t(m)&&M():requestAnimationFrame(V)}os(w),bc(w),Es(nt),yn();var P=fn(),K=Wt(P);{var $=A=>{var b=Iu(),k=u(b),N=u(k);{var pt=lt=>{var Tt=Ru();h(lt,Tt)},ht=lt=>{var Tt=Lu();h(lt,Tt)};L(N,lt=>{t(m)?lt(pt):lt(ht,-1)})}d(k);var it=p(k,2);I(it,"aria-valuemin",0),I(it,"aria-valuemax",100);var ut=u(it),R=p(ut,2);d(it),Re(it,lt=>s(z,lt),()=>t(z));var mt=p(it,2);Ke(2),d(b),B(lt=>{I(k,"aria-label",t(m)?"Pause":"Play"),I(it,"aria-valuenow",lt),le(ut,`width:${t(f)*100}%`),le(R,`left:${t(f)*100}%`)},[()=>(t(f),ot(()=>Math.round(t(f)*100)))]),G("click",k,F),G("pointerdown",it,Q),G("pointermove",it,vt),G("pointerup",it,et),G("click",mt,X),h(A,b)};L(K,A=>{t(l)&&A($)})}h(e,P),qe()}const Fu="/__geekpresent/note-load",Hu="/__geekpresent/note-save";async function Ku(e){try{const n=await fetch(`${Fu}?route=${encodeURIComponent(e)}`),o=await n.json().catch(()=>({}));return n.ok?typeof o.text!="string"?{ok:!1,error:"server returned no note"}:{ok:!0,text:o.text,fingerprint:o.fingerprint,file:o.file}:{ok:!1,error:o.error||`HTTP ${n.status}`}}catch(n){return{ok:!1,error:n instanceof Error?n.message:String(n)}}}async function Bu(e,n,o){try{const a=await fetch(Hu,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({route:e,text:n,fingerprint:o})}),r=await a.json().catch(()=>({}));return a.ok?{ok:!0,file:r.file,fingerprint:r.fingerprint}:{ok:!1,error:r.error||`HTTP ${a.status}`}}catch(a){return{ok:!1,error:a instanceof Error?a.message:String(a)}}}var ju=E('<span class="file svelte-vnjyab"> </span>'),Uu=E('<p class="error svelte-vnjyab" role="alert"> </p>'),qu=E('<p class="hint svelte-vnjyab">Loading…</p>'),Wu=E('<textarea spellcheck="false" aria-label="Note source" class="svelte-vnjyab"></textarea> <p class="hint svelte-vnjyab">The HTML between &lt;Note&gt; and &lt;/Note&gt;. One element per line is one checkable line.</p>',1),Gu=E('<section aria-label="Edit speaker note"><header class="svelte-vnjyab"><span class="title svelte-vnjyab">EDIT NOTE</span> <!> <span class="spacer svelte-vnjyab"></span> <button type="button" class="save svelte-vnjyab" title="Save (Ctrl/Cmd+S)"> </button> <button type="button" title="Cancel (Esc)" class="svelte-vnjyab">CANCEL</button></header> <!> <!></section>');function Vu(e,n){Ue(n,!1);const o=c();let a=g(n,"route",8),r=g(n,"style",8,""),i=g(n,"id",8,""),l=g(n,"class",8,"");const m=Qa();let f=c("loading"),z=c(""),x=c(""),V="",O=c(""),D=c(""),M=c();os(async()=>{const b=await Ku(a());if(!b.ok){s(f,"failed"),s(D,b.error??"could not load the note");return}s(z,s(x,b.text??"")),V=b.fingerprint??"",s(O,b.file??""),s(f,"ready"),queueMicrotask(()=>{var k;return(k=t(M))==null?void 0:k.focus()})});function nt(b){t(o)&&b.preventDefault()}os(()=>window.addEventListener("beforeunload",nt)),Es(()=>{typeof window<"u"&&window.removeEventListener("beforeunload",nt)});async function W(){if(t(f)!=="ready")return;if(!t(o)){m("close");return}s(f,"saving"),s(D,"");const b=await Bu(a(),t(z),V);if(!b.ok){s(f,"ready"),s(D,b.error??"save failed");return}s(x,t(z)),m("saved",{file:b.file}),m("close")}function Y(){t(o)&&!confirm("Discard your changes to this note?")||m("close")}function U(b){b.stopPropagation(),(b.ctrlKey||b.metaKey)&&!b.altKey&&b.key.toLowerCase()==="s"?(b.preventDefault(),W()):b.key==="Escape"&&(b.preventDefault(),Y())}_(()=>(t(z),t(x)),()=>{s(o,t(z)!==t(x))}),Dn(),yn();var F=Gu(),X=u(F),tt=p(u(X),2);{var j=b=>{var k=ju(),N=u(k,!0);d(k),B(()=>{I(k,"title",t(O)),gt(N,t(O))}),h(b,k)};L(tt,b=>{t(O)&&b(j)})}var Q=p(tt,4),vt=u(Q,!0);d(Q);var et=p(Q,2);d(X);var w=p(X,2);{var P=b=>{var k=Uu(),N=u(k,!0);d(k),B(()=>gt(N,t(D))),h(b,k)};L(w,b=>{t(D)&&b(P)})}var K=p(w,2);{var $=b=>{var k=qu();h(b,k)},A=b=>{var k=Wu(),N=Wt(k);pl(N),Re(N,pt=>s(M,pt),()=>t(M)),Ke(2),B(()=>N.disabled=t(f)==="saving"),ws(N,()=>t(z),pt=>s(z,pt)),h(b,k)};L(K,b=>{t(f)==="loading"?b($):t(f)!=="failed"&&b(A,1)})}d(F),B(()=>{Mt(F,1,`note-editor no-print ${l()??""}`,"svelte-vnjyab"),I(F,"id",i()||void 0),le(F,r()||void 0),Q.disabled=t(f)!=="ready",gt(vt,t(f)==="saving"?"SAVING…":"SAVE")}),G("click",Q,W),G("click",et,Y),G("keydown",F,U),h(e,F),qe()}const Ii="adjustMode",Oi="canAdjust";try{localStorage.removeItem(Ii)}catch{}const Js=Ye(!1);let Qr=!1;function Fi(){return Jo(localStorage.getItem(Oi))}function Hi(){Ki.set(ei(!1,Fi(),Qr))}const Oo=Xo(Ii,!1,{codec:Qo(),sync:!1,storage:"session"}),Ki=Ye(ei(!1,Fi(),Qr));function Yu(e){Qr=e===!0,Hi()}function Xu(e){const n=Yl(e.searchParams);n!==null&&(localStorage.setItem(Oi,String(n)),n||Oo.set(!1)),Hi()}function Qu(e,n=!1,o=!1){const a=((e==null?void 0:e.key)??"").toLowerCase();if(a==="escape"&&!e.ctrlKey&&!e.metaKey&&!e.altKey)return"close";if(Qs(e==null?void 0:e.target))return"ignore";const r=Sc(e);if(r!=="ignore")return r;if(e.ctrlKey||e.metaKey||e.altKey||e.defaultPrevented)return"ignore";if(o){if(a==="arrowdown")return"tocDown";if(a==="arrowup")return"tocUp";if(a==="enter")return"tocSelect"}if(Ec(e))return e.shiftKey?"prev":"continue";if(a==="arrowright")return"next";if(a==="arrowleft")return"prev";switch(a){case"t":return"toc";case"c":return"checks";case"a":return n?"ink":"ignore";case"b":return"bars";case"e":return"editNote";case"r":return"record";default:return"ignore"}}var Ju=E('<iframe class="preview-frame svelte-1mxcoa9" title="Current slide" tabindex="-1"></iframe>'),Zu=E('<iframe class="preview-frame svelte-1mxcoa9" title="Next slide" tabindex="-1"></iframe>'),tf=E('<div class="preview-end svelte-1mxcoa9">End of deck</div>'),ef=E('<p class="no-matches svelte-1mxcoa9"> </p>'),nf=E('<span class="snip svelte-1mxcoa9"> </span>'),sf=E('<li class="svelte-1mxcoa9"><button type="button"><span class="n svelte-1mxcoa9"> </span> <span class="t svelte-1mxcoa9"> </span> <!></button></li>'),of=E('<ol class="svelte-1mxcoa9"></ol>'),rf=E('<div class="toc-menu svelte-1mxcoa9"><input class="search svelte-1mxcoa9" type="search" placeholder="Search slides…" aria-label="Search slides"/> <div class="toc-scroll svelte-1mxcoa9"><!></div></div>'),af=E('<div class="toc-menu checks-menu svelte-1mxcoa9"><button type="button" class="svelte-1mxcoa9">Reset this page</button> <button type="button" class="svelte-1mxcoa9">Start over (whole deck)</button></div>'),lf=E('<div class="toc-menu checks-menu svelte-1mxcoa9"><button type="button" class="svelte-1mxcoa9"> </button> <button type="button" class="svelte-1mxcoa9">Reset ALL annotations</button></div>'),cf=E('<div title="Reset annotations (A)"><!> <!></div>'),df=rs('<svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-1mxcoa9"><path d="M8 5v14l11-7z"></path></svg>'),pf=rs('<svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-1mxcoa9"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>'),uf=E('<div class="timer-menu svelte-1mxcoa9"><input type="text" inputmode="numeric" placeholder="mm:ss" aria-label="Set elapsed time" class="svelte-1mxcoa9"/> <button type="button" class="tm-set svelte-1mxcoa9">Set</button> <button type="button" class="tm-reset svelte-1mxcoa9">Reset</button></div>'),ff=E('<div class="preview-col no-print svelte-1mxcoa9"><div class="preview svelte-1mxcoa9"><div class="preview-label svelte-1mxcoa9">CURRENT</div> <div class="preview-box svelte-1mxcoa9"><!></div></div> <div class="preview svelte-1mxcoa9"><div class="preview-label svelte-1mxcoa9"> </div> <div class="preview-box svelte-1mxcoa9"><!></div></div></div> <!> <div role="separator" aria-orientation="vertical" aria-label="Resize previews and notes" title="Drag to resize"></div> <div class="bar no-print svelte-1mxcoa9"><div class="controls svelte-1mxcoa9"><div class="tools svelte-1mxcoa9"><span class="ov-btn svelte-1mxcoa9" title="All slides — pick one without the audience seeing you browse (O)"><!></span> <div title="Table of contents (T)"><!> <!></div> <div title="Reset checks (C)"><!> <!></div> <span class="bars-btn" title="Hide or show the bars on the audience screen (B)"><!></span> <span class="rec-btn" title="Record the slides window to a video for YouTube, with a replayable timeline (R)"><!></span> <span class="note-btn"><!></span> <!></div> <div class="nav svelte-1mxcoa9"><!> <!> <!> <!> <!></div> <!></div> <div class="meters svelte-1mxcoa9"><div class="pos svelte-1mxcoa9"> <span class="count svelte-1mxcoa9"> </span></div> <div class="clocks svelte-1mxcoa9"><span class="clock svelte-1mxcoa9"> </span> <div><button type="button"><!></button> <button type="button" title="Set / reset timer"> </button> <!></div></div></div></div>',1);function vf(e,n){Ue(n,!1);const o=()=>dt(Ur,"$page",f),a=()=>dt(vu,"$audienceBare",f),r=()=>dt(Js,"$canSave",f),i=()=>dt(Yo,"$canAnnotate",f),l=()=>dt(ks,"$overviewOpen",f),m=()=>dt(ti,"$strokes",f),[f,z]=Cn(),x=c(),V=c(),O=c(),D=c(),M=c(),nt=c(),W=c(),Y=c(),U=c(),F=c(),X=c(),tt=c(),j=c(),Q=c(),vt=c(),et=c(),w=c(),P=c(),K=c(),$=c();let A=g(n,"pages",24,()=>[]),b=g(n,"width",8,1920),k=g(n,"height",8,1080);const N=Vo();function pt(y){var ft,qt;return(y==="back"?(ft=t(O))==null?void 0:ft.transitionBack:(qt=t(O))==null?void 0:qt.transition)??"slide"}function ht(y,ft){y&&po(y+"?present",{viewTransitions:N,kind:pt(ft),direction:ft})}function it(y){s(J,!1),po(`./${y}?present`,{viewTransitions:N,kind:pt("forward"),direction:"forward"})}function ut(y){El(t(Y),y)}function R(){Tl(t(Y))}let mt=c(0),lt=c(0),Tt=c(0),yt=c(0),J=c(!1),C=c(),bt=c(""),At=c(-1),Et=c("");function Lt(y){s(At,gi(t(At)<0?t(et):t(At),y,t(vt).length))}function Gt(){const y=t(At)<0&&t(Q)?0:t(At),ft=t(vt)[y];ft&&it(ft.path)}function Te(y){if(y.stopPropagation(),y.key==="Escape"){y.preventDefault(),t(bt)?s(bt,""):s(J,!1);return}if(y.key==="ArrowDown"){y.preventDefault(),Lt(1);return}if(y.key==="ArrowUp"){y.preventDefault(),Lt(-1);return}y.key==="Enter"&&(y.preventDefault(),Gt())}function Kt(y){y.focus()}function zt(y,ft){const qt=je=>{je&&typeof y.scrollIntoView=="function"&&y.scrollIntoView({block:"nearest"})};return qt(ft),{update:qt}}let Nt=c(!1),kt=c();function Ct(){s(Nt,!1),Nl(t(Y),t(x)),window.dispatchEvent(new CustomEvent("gp:checks-clear"))}function Yt(){s(Nt,!1),Ml(t(Y)),window.dispatchEvent(new CustomEvent("gp:checks-clear"))}let Ut=c(!1),ce=c();function Qt(){s(Ut,!1),Mr()}function wt(){s(Ut,!1),Pr()}function fe(y){t(C)&&!t(C).contains(y.target)&&s(J,!1),t(kt)&&!t(kt).contains(y.target)&&s(Nt,!1),t(ce)&&!t(ce).contains(y.target)&&s(Ut,!1),t(Un)&&!t(Un).contains(y.target)&&s(hn,!1)}function Jt(){s(J,!1),s(Nt,!1),s(Ut,!1),s(hn,!1)}function ye(){Jt(),ks.set(!0)}function Le(){jo(!a())}function de(){Kl(t(Y))}let ae=c(!1),Xe=c(!1),tn;function sn(){if(!t(ae)){if(Jt(),!r()){s(Xe,!0),clearTimeout(tn),tn=setTimeout(()=>s(Xe,!1),2500);return}s(ae,!0)}}function kn(y){switch(Qu(y,i(),t(J))){case"close":Jt();break;case"toc":{y.preventDefault();const ft=!t(J);Jt(),s(J,ft);break}case"checks":{y.preventDefault();const ft=!t(Nt);Jt(),s(Nt,ft);break}case"ink":{y.preventDefault();const ft=!t(Ut);Jt(),s(Ut,ft);break}case"bars":y.preventDefault(),Le();break;case"record":y.preventDefault(),de();break;case"editNote":y.preventDefault(),sn();break;case"next":y.preventDefault(),ht(t(D).next,"forward");break;case"prev":y.preventDefault(),ht(t(D).prev,"back");break;case"first":y.preventDefault(),ht(t(D).first,"back");break;case"last":y.preventDefault(),ht(t(D).last,"forward");break;case"continue":y.preventDefault(),R();break;case"tocUp":y.preventDefault(),Lt(-1);break;case"tocDown":y.preventDefault(),Lt(1);break;case"tocSelect":y.preventDefault(),Gt();break}}let as=c(""),is=c("00:00"),vn=0,Ie=c(null),wn;function zn(y){const ft=Math.max(0,Math.floor(y)),qt=Math.floor(ft/3600),je=Math.floor(ft%3600/60),v=ft%60,H=at=>String(at).padStart(2,"0");return qt>0?`${qt}:${H(je)}:${H(v)}`:`${H(je)}:${H(v)}`}function Yn(){return((t(Ie)??Date.now())-vn)/1e3}function jn(){s(as,new Date().toLocaleTimeString()),s(is,zn(Yn()))}function Rn(){const y=Date.now();t(Ie)==null?s(Ie,y):(vn+=y-t(Ie),fr(t(Y),vn),s(Ie,null)),va(t(Y),t(Ie)),jn()}let Un=c(),hn=c(!1),Xn=c("");function Ts(){s(hn,!t(hn)),t(hn)&&s(Xn,t(is))}function As(y){const ft=y.trim().split(":");if(ft.length<1||ft.length>3)return null;const qt=ft.map(je=>Number(je));return qt.some(je=>!Number.isFinite(je)||je<0)?null:qt.length===1?qt[0]*60:qt.length===2?qt[0]*60+qt[1]:qt[0]*3600+qt[1]*60+qt[2]}function S(){const y=As(t(Xn));if(y==null)return;const ft=t(Ie)??Date.now();vn=fr(t(Y),ft-y*1e3),jn(),s(hn,!1)}function st(){vn=fr(t(Y)),s(Ie,null),va(t(Y),null),jn(),s(hn,!1)}let Pt=c(),jt=c(!1),se=c(!0),We=c(!1);const on=y=>{const ft=window.innerWidth||1;return Math.max(.2*ft,Math.min(.8*ft,y))};function rn(y){document.body.style.setProperty("--gp-split",`${Math.round(on(y))}px`)}function ms(){if(!t(lt))return;const y=getComputedStyle(document.body),ft=parseFloat(y.getPropertyValue("--gp-inset"))||20,qt=parseFloat(y.getPropertyValue("--gp-gap"))||16;rn(ft+t(lt)*(b()/k())+qt/2)}function Ns(y){s(jt,!0),t(Pt).setPointerCapture(y.pointerId),y.preventDefault()}function qn(y){t(jt)&&rn(y.clientX)}function T(y){var ft,qt;t(jt)&&(s(jt,!1),s(se,!1),(qt=(ft=t(Pt)).releasePointerCapture)==null||qt.call(ft,y.pointerId),Al(on(y.clientX)/(window.innerWidth||1)))}os(()=>{document.body.classList.add("gp-present"),vn=xl(t(Y)),s(Ie,_l(t(Y))),jn(),wn=setInterval(jn,1e3);const y=Sl();y!=null&&(s(se,!1),rn(y*window.innerWidth)),s(We,!0),document.addEventListener("click",fe),window.addEventListener("keydown",kn)}),Es(()=>{wn&&clearInterval(wn),clearTimeout(tn),typeof document<"u"&&(document.body.classList.remove("gp-present"),document.body.style.removeProperty("--gp-split"),document.removeEventListener("click",fe)),typeof window<"u"&&window.removeEventListener("keydown",kn)}),_(()=>o(),()=>{s(x,o().url.pathname.replace(/\/+$/,"").split("/").pop()||"")}),_(()=>(Z(A()),t(x)),()=>{s(V,A().findIndex(y=>y.path===t(x)))}),_(()=>(Z(A()),t(V)),()=>{s(O,A()[t(V)])}),_(()=>(Z(A()),t(x)),()=>{s(D,Ja(A(),t(x),"./"))}),_(()=>(t(V),Z(A())),()=>{s(M,t(V)>=0?A()[t(V)+1]:void 0)}),_(()=>t(O),()=>{s(nt,t(O)?`./${t(O).path}?clean`:"")}),_(()=>t(M),()=>{s(W,t(M)?`./${t(M).path}?clean`:"")}),_(()=>o(),()=>{s(Y,Nr(o().url.pathname))}),_(()=>(o(),io),()=>{s(U,o().url.pathname.replace(io,"").split("/").filter(Boolean)[0]??"")}),_(()=>(t(mt),t(lt),Z(b()),Z(k())),()=>{s(F,t(mt)>0&&t(lt)>0?Math.min(t(mt)/b(),t(lt)/k()):0)}),_(()=>(t(Tt),t(yt),Z(b()),Z(k())),()=>{s(X,t(Tt)>0&&t(yt)>0?Math.min(t(Tt)/b(),t(yt)/k()):0)}),_(()=>(t(U),Z(A())),()=>{s(tt,bi(t(U),A()))}),_(()=>t(J),()=>{t(J)||(s(bt,""),s(At,-1))}),_(()=>(t(tt),t(bt)),()=>{s(j,mi(t(tt),t(bt)))}),_(()=>t(bt),()=>{s(Q,t(bt).trim().length>0)}),_(()=>(t(Q),t(j),Z(A())),()=>{s(vt,t(Q)?t(j).map(y=>({path:y.path,title:y.title,number:y.number,snippet:y.snippet})):A().map((y,ft)=>({path:y.path,title:y.title,number:ft+1})))}),_(()=>(t(Q),t(V)),()=>{s(et,t(Q)?-1:t(V))}),_(()=>(t(bt),t(Et)),()=>{t(bt)!==t(Et)&&(s(Et,t(bt)),s(At,-1))}),_(()=>a(),()=>{s(w,a()?"▭ Bars: hidden":"▭ Bars: shown")}),_(()=>t(Xe),()=>{s(P,t(Xe)?"NOT ALLOWED":"EDIT NOTE")}),_(()=>t(Xe),()=>{s(K,t(Xe)?"Editing notes needs the dev server (pnpm dev) — there is no source to write here.":"Edit this slide's speaker note (E)")}),_(()=>t(Ie),()=>{s($,t(Ie)!=null)}),_(()=>(t(We),t(se),t(lt)),()=>{t(We)&&t(se)&&t(lt)&&ms()}),Dn(),yn();var q=ff(),rt=Wt(q),It=u(rt),Zt=p(u(It),2),ke=u(Zt);{var pe=y=>{var ft=Ju();B(()=>{I(ft,"src",t(nt)),le(ft,`width:${b()??""}px; height:${k()??""}px; transform: translate(-50%, -50%) scale(${t(F)??""});`)}),h(y,ft)};L(ke,y=>{t(nt)&&y(pe)})}d(Zt),d(It);var Rt=p(It,2),oe=u(Rt),Vt=u(oe);d(oe);var $t=p(oe,2),Bt=u($t);{var Ot=y=>{var ft=Zu();B(()=>{I(ft,"src",t(W)),le(ft,`width:${b()??""}px; height:${k()??""}px; transform: translate(-50%, -50%) scale(${t(X)??""});`)}),h(y,ft)},$e=y=>{var ft=tf();h(y,ft)};L(Bt,y=>{t(W)?y(Ot):y($e,-1)})}d($t),d(Rt),d(rt);var Ae=p(rt,2);{var he=y=>{Vu(y,{get route(){return o(),ot(()=>o().url.pathname)},$$events:{close:()=>s(ae,!1)}})};L(Ae,y=>{t(ae)&&y(he)})}var ee=p(Ae,2);let xe;Re(ee,y=>s(Pt,y),()=>t(Pt));var De=p(ee,2),Oe=u(De),re=u(Oe),Ne=u(re),An=u(Ne);Bn(An,{text:"OVERVIEW",mnemonic:"O",get isSelected(){return l()},$$events:{click:ye}}),d(Ne);var St=p(Ne,2);let ct;var Ce=u(St);{let y=un(()=>t(J)?"ToC ▾":"ToC ▴");Bn(Ce,{get text(){return t(y)},mnemonic:"T",get isSelected(){return t(J)},$$events:{click:()=>s(J,!t(J))}})}var me=p(Ce,2);{var Dt=y=>{var ft=rf(),qt=u(ft);ss(qt),Ys(()=>ws(qt,()=>t(bt),xt=>s(bt,xt))),Ys(()=>G("keydown",qt,Te)),ro(qt,xt=>Kt==null?void 0:Kt(xt));var je=p(qt,2),v=u(je);{var H=xt=>{var Ft=ef(),ie=u(Ft);d(Ft),B(_t=>gt(ie,`No slides match "${_t??""}".`),[()=>(t(bt),ot(()=>t(bt).trim()))]),h(xt,Ft)},at=xt=>{var Ft=of();$n(Ft,5,()=>t(vt),hs,(ie,_t,Me)=>{var Pe=sf(),we=u(Pe);let Jn;var ne=u(we),be=u(ne,!0);d(ne);var Qe=p(ne,2),Ge=u(Qe,!0);d(Qe);var ze=p(Qe,2);{var En=Fn=>{var Zn=nf(),Se=u(Zn,!0);d(Zn),B(()=>gt(Se,(t(_t),ot(()=>t(_t).snippet)))),h(Fn,Zn)};L(ze,Fn=>{t(_t),ot(()=>t(_t).snippet)&&Fn(En)})}d(we),Ys(()=>G("click",we,()=>it(t(_t).path))),ro(we,(Fn,Zn)=>zt==null?void 0:zt(Fn,Zn),()=>Me===t(At)),d(Pe),B(()=>{Jn=Mt(we,1,"svelte-1mxcoa9",null,Jn,{current:t(_t).path===t(x),selected:Me===t(At)}),gt(be,(t(_t),ot(()=>t(_t).number??""))),gt(Ge,(t(_t),ot(()=>t(_t).title)))}),h(ie,Pe)}),d(Ft),h(xt,Ft)};L(v,xt=>{t(Q),t(vt),ot(()=>t(Q)&&t(vt).length===0)?xt(H):xt(at,-1)})}d(je),d(ft),h(y,ft)};L(me,y=>{t(J)&&y(Dt)})}d(St),Re(St,y=>s(C,y),()=>t(C));var ge=p(St,2);let _e;var en=u(ge);{let y=un(()=>t(Nt)?"☑ Checks ▾":"☑ Checks ▴"),ft=un(()=>t(Nt)?"☑ Checks ▾":"☑ Checks ▴");Bn(en,{get text(){return t(y)},get hoverText(){return t(ft)},mnemonic:"C",get isSelected(){return t(Nt)},$$events:{click:()=>s(Nt,!t(Nt))}})}var mn=p(en,2);{var Be=y=>{var ft=af(),qt=u(ft),je=p(qt,2);d(ft),G("click",qt,Ct),G("click",je,Yt),h(y,ft)};L(mn,y=>{t(Nt)&&y(Be)})}d(ge),Re(ge,y=>s(kt,y),()=>t(kt));var Ln=p(ge,2),In=u(Ln);Bn(In,{get text(){return t(w)},get hoverText(){return t(w)},mnemonic:"B",get isSelected(){return a()},$$events:{click:Le}}),d(Ln);var an=p(Ln,2),gn=u(an);Bn(gn,{text:"● REC",hoverText:"● REC",mnemonic:"R",$$events:{click:de}}),d(an);var ve=p(an,2),ln=u(ve);{let y=un(()=>t(Xe)?"":"E");Bn(ln,{get text(){return t(P)},get hoverText(){return t(P)},get mnemonic(){return t(y)},get isSelected(){return t(ae)},$$events:{click:sn}})}d(ve);var ls=p(ve,2);{var gs=y=>{var ft=cf();let qt;var je=u(ft);{let at=un(()=>t(Ut)?"✎ Annotate ▾":"✎ Annotate ▴"),xt=un(()=>t(Ut)?"✎ Annotate ▾":"✎ Annotate ▴");Bn(je,{get text(){return t(at)},get hoverText(){return t(xt)},mnemonic:"A",get isSelected(){return t(Ut)},$$events:{click:()=>s(Ut,!t(Ut))}})}var v=p(je,2);{var H=at=>{var xt=lf(),Ft=u(xt),ie=u(Ft);d(Ft);var _t=p(Ft,2);d(xt),B(()=>{Ft.disabled=(m(),ot(()=>m().length===0)),gt(ie,`Reset this slide${m(),ot(()=>m().length?` (${m().length})`:"")??""}`)}),G("click",Ft,Qt),G("click",_t,wt),h(at,xt)};L(v,at=>{t(Ut)&&at(H)})}d(ft),Re(ft,at=>s(ce,at),()=>t(ce)),B(()=>qt=Mt(ft,1,"toc checks svelte-1mxcoa9",null,qt,{open:t(Ut)})),h(y,ft)};L(ls,y=>{i()&&y(gs)})}d(re);var cn=p(re,2),Wn=u(cn);{let y=un(()=>(t(D),ot(()=>!t(D).first)));Bn(Wn,{text:"FIRST",get isDisabled(){return t(y)},$$events:{click:()=>ht(t(D).first,"back")}})}var Qn=p(Wn,2);{let y=un(()=>(t(D),ot(()=>!t(D).prev)));Bn(Qn,{text:"◀ PREV",get isDisabled(){return t(y)},$$events:{click:()=>ht(t(D).prev,"back")}})}var te=p(Qn,2);Bn(te,{text:"CONTINUE",$$events:{click:R}});var Ht=p(te,2);{let y=un(()=>(t(D),ot(()=>!t(D).next)));Bn(Ht,{text:"NEXT ▶",get isDisabled(){return t(y)},$$events:{click:()=>ht(t(D).next,"forward")}})}var ue=p(Ht,2);{let y=un(()=>(t(D),ot(()=>!t(D).last)));Bn(ue,{text:"LAST",get isDisabled(){return t(y)},$$events:{click:()=>ht(t(D).last,"forward")}})}d(cn);var Fe=p(cn,2);Ou(Fe,{onCommand:ut}),d(Oe);var xn=p(Oe,2),Nn=u(xn),cs=u(Nn),On=p(cs),Ms=u(On);d(On),d(Nn);var Fs=p(Nn,2),_n=u(Fs),Gn=u(_n);d(_n);var Sn=p(_n,2);let Hs;var Mn=u(Sn);let vo;var or=u(Mn);{var rr=y=>{var ft=df();h(y,ft)},Ao=y=>{var ft=pf();h(y,ft)};L(or,y=>{t($)?y(rr):y(Ao,-1)})}d(Mn);var Ks=p(Mn,2);let ho;var ar=u(Ks);d(Ks);var No=p(Ks,2);{var ir=y=>{var ft=uf(),qt=u(ft);ss(qt);var je=p(qt,2),v=p(je,2);d(ft),ws(qt,()=>t(Xn),H=>s(Xn,H)),G("keydown",qt,H=>{H.key==="Enter"&&S()}),G("click",je,S),G("click",v,st),h(y,ft)};L(No,y=>{t(hn)&&y(ir)})}d(Sn),Re(Sn,y=>s(Un,y),()=>t(Un)),d(Fs),d(xn),d(De),B(()=>{le(Zt,`aspect-ratio: ${b()??""} / ${k()??""};`),gt(Vt,`NEXT ▸ ${t(M),ot(()=>t(M)?t(M).title:"— end of deck —")??""}`),le($t,`aspect-ratio: ${b()??""} / ${k()??""};`),xe=Mt(ee,1,"splitter no-print svelte-1mxcoa9",null,xe,{dragging:t(jt)}),ct=Mt(St,1,"toc svelte-1mxcoa9",null,ct,{open:t(J)}),_e=Mt(ge,1,"toc checks svelte-1mxcoa9",null,_e,{open:t(Nt)}),I(ve,"title",t(K)),gt(cs,`${t(O),ot(()=>t(O)?t(O).title:"")??""} `),gt(Ms,`${t(V)>=0?t(V)+1:"?"} / ${Z(A()),ot(()=>A().length)??""}`),gt(Gn,`🕑 ${t(as)??""}`),Hs=Mt(Sn,1,"timer svelte-1mxcoa9",null,Hs,{open:t(hn)}),vo=Mt(Mn,1,"pause-btn svelte-1mxcoa9",null,vo,{paused:t($)}),I(Mn,"title",t($)?"Resume timer":"Pause timer"),I(Mn,"aria-label",t($)?"Resume timer":"Pause timer"),ho=Mt(Ks,1,"elapsed svelte-1mxcoa9",null,ho,{paused:t($)}),gt(ar,`⏱ ${t(is)??""}`)}),oo(Zt,"clientWidth",y=>s(mt,y)),oo(Zt,"clientHeight",y=>s(lt,y)),oo($t,"clientWidth",y=>s(Tt,y)),oo($t,"clientHeight",y=>s(yt,y)),G("pointerdown",ee,Ns),G("pointermove",ee,qn),G("pointerup",ee,T),G("click",Mn,Rn),G("click",Ks,Ts),h(e,q),qe(),z()}const Jr="livePointer";function hf(e){if(!e||!e.has("pointer"))return null;const n=(e.get("pointer")??"").trim().toLowerCase();return n!=="off"&&n!=="false"&&n!=="0"}function mf(e,n){return e!==null?e:n===!0}function gf(e){return e==="dot"||e==="ring"?e:"arrow"}const Zr=40;function bf(e){const n=Number(e);return!Number.isFinite(n)||n<=0?Zr:Math.min(200,Math.max(8,n))}function yf(e,n){if(e==="arrow"){const o=-.125*n;return[o,o]}return[-n/2,-n/2]}function Bi(){try{return Jo(localStorage.getItem(Jr))}catch{return null}}const ta=Ye(Bi()),ji=Ye(!1),ea=Xs([ta,ji],([e,n])=>mf(e,n));function Ui(e){try{localStorage.setItem(Jr,String(e))}catch{}ta.set(e)}function Do(){Ui(!Ee(ea))}function kf(e){ji.set(e===!0)}function wf(e){const n=hf(e.searchParams);n!==null&&Ui(n)}window.addEventListener("storage",e=>{(e.key===Jr||e.key===null)&&ta.set(Bi())});var xf=E('<span class="live-ripple svelte-kf03vj"></span>'),_f=rs('<svg viewBox="0 0 24 24" width="100%" height="100%" class="svelte-kf03vj"><circle cx="12" cy="12" r="8" fill="var(--live-pointer-fill, #ffd23f)" stroke="var(--live-pointer-outline, rgba(0, 0, 0, 0.8))" stroke-width="1.4" class="svelte-kf03vj"></circle></svg>'),Sf=rs('<svg viewBox="0 0 24 24" width="100%" height="100%" class="svelte-kf03vj"><circle cx="12" cy="12" r="8" fill="none" stroke="var(--live-pointer-fill, #ffd23f)" stroke-width="2.5" class="svelte-kf03vj"></circle></svg>'),Ef=rs('<svg viewBox="0 0 24 24" width="100%" height="100%" class="svelte-kf03vj"><path d="M3 3 L10.07 19.97 L12.58 12.58 L19.97 10.07 Z" fill="var(--live-pointer-fill, #ffd23f)" stroke="var(--live-pointer-outline, rgba(0, 0, 0, 0.8))" stroke-width="1.4" stroke-linejoin="round" class="svelte-kf03vj"></path></svg>'),Tf=E('<span class="live-glyph svelte-kf03vj"><!></span>'),Af=E('<div aria-hidden="true"><!> <!></div>');function Nf(e,n){Ue(n,!0);const o=()=>dt(ea,"$livePointer",a),[a,r]=Cn();let i=g(n,"shape",3,"arrow"),l=g(n,"size",3,Zr),m=g(n,"style",3,""),f=g(n,"id",3,""),z=g(n,"class",3,"");const x=He(()=>gf(i())),V=He(()=>bf(l())),O=He(()=>yf(t(x),t(V)));let D=Ze(0),M=Ze(0),nt=Ze(!1),W=Ze(Sr([])),Y=0;function U(w){s(D,w.clientX,!0),s(M,w.clientY,!0),s(nt,!0)}function F(w){U(w);const P={id:Y++,x:w.clientX,y:w.clientY};s(W,[...t(W),P],!0),setTimeout(()=>{s(W,t(W).filter(K=>K.id!==P.id),!0)},700)}function X(){s(nt,!1)}let tt=!1;function j(w){if(w===tt)return;tt=w;const P=document.documentElement,K={capture:!0,passive:!0};w?(P.classList.add("gp-live-pointer"),window.addEventListener("pointermove",U,K),window.addEventListener("pointerdown",F,K),P.addEventListener("mouseleave",X)):(P.classList.remove("gp-live-pointer"),window.removeEventListener("pointermove",U,K),window.removeEventListener("pointerdown",F,K),P.removeEventListener("mouseleave",X),s(nt,!1),s(W,[],!0))}Ls(()=>{j(o())}),Es(()=>j(!1));var Q=fn(),vt=Wt(Q);{var et=w=>{var P=Af(),K=u(P);$n(K,17,()=>t(W),b=>b.id,(b,k)=>{var N=xf();B(()=>le(N,`left:${t(k).x??""}px; top:${t(k).y??""}px; --live-ripple-size:${t(V)??""}px;`)),h(b,N)});var $=p(K,2);{var A=b=>{var k=Tf(),N=u(k);{var pt=ut=>{var R=_f();h(ut,R)},ht=ut=>{var R=Sf();h(ut,R)},it=ut=>{var R=Ef();h(ut,R)};L(N,ut=>{t(x)==="dot"?ut(pt):t(x)==="ring"?ut(ht,1):ut(it,-1)})}d(k),B(()=>le(k,`width:${t(V)??""}px; height:${t(V)??""}px; transform: translate3d(${t(D)+t(O)[0]}px, ${t(M)+t(O)[1]}px, 0);`)),h(b,k)};L($,b=>{t(nt)&&b(A)})}d(P),B(()=>{Mt(P,1,`live-pointer no-print ${z()??""}`,"svelte-kf03vj"),I(P,"id",f()||void 0),le(P,m()||void 0)}),h(w,P)};L(vt,w=>{o()&&w(et)})}h(e,Q),qe(),r()}const Mf={mod:"mod",cmd:"cmd",command:"cmd",meta:"cmd","⌘":"cmd",ctrl:"ctrl",control:"ctrl","⌃":"ctrl",alt:"alt",opt:"alt",option:"alt","⌥":"alt",shift:"shift","⇧":"shift",win:"win",windows:"win",super:"win",enter:"enter",return:"enter",esc:"esc",escape:"esc",tab:"tab",space:"space",spacebar:"space",backspace:"backspace",bksp:"backspace",del:"delete",delete:"delete",ins:"insert",insert:"insert",up:"up",arrowup:"up",down:"down",arrowdown:"down",left:"left",arrowleft:"left",right:"right",arrowright:"right",pgup:"pageup",pageup:"pageup",pgdn:"pagedown",pagedown:"pagedown",home:"home",end:"end"},Pf={cmd:"Cmd",ctrl:"Ctrl",alt:"Alt",shift:"Shift",win:"Win",enter:"Enter",esc:"Esc",tab:"Tab",space:"Space",backspace:"Backspace",delete:"Delete",insert:"Insert",pageup:"Page Up",pagedown:"Page Down",home:"Home",end:"End"},Ra={up:"↑",down:"↓",left:"←",right:"→"},La={cmd:"⌘",ctrl:"⌃",alt:"⌥",shift:"⇧",enter:"↩",esc:"⎋",tab:"⇥",space:"␣",backspace:"⌫",delete:"⌦",pageup:"⇞",pagedown:"⇟",home:"↖",end:"↘"};function $f(e){const n=[];let o="";for(const a of e){if(a!=="+"){o+=a;continue}o?(n.push(o),o=""):n[n.length-1]!=="+"&&n.push("+")}return o&&n.push(o),n}function Df(e,n="pc",o=!0){if(typeof e!="string")return"";const a=e.trim();if(!a)return"";let r=Mf[a.toLowerCase()];return r==="mod"&&(r=n==="mac"?"cmd":"ctrl"),r?Ra[r]?Ra[r]:n==="mac"&&o&&La[r]?La[r]:Pf[r]??a:[...a].length===1?a.toUpperCase():a}function Ia(e,n="pc",o=!0){return typeof e!="string"?[]:e.trim().split(/\s+/).filter(Boolean).map(a=>$f(a).map(r=>Df(r,n,o)).filter(Boolean)).filter(a=>a.length>0)}function Cf(e="pc",n=!0){return e==="mac"&&n?"":"+"}function zf(e){var o;if(!e)return"pc";const n=((o=e.userAgentData)==null?void 0:o.platform)||e.platform||e.userAgent||"";return/mac|iphone|ipad|ipod/i.test(n)?"mac":"pc"}var Rf=E('<span class="then svelte-1dl93vr" aria-hidden="true"> </span>'),Lf=E('<span class="join svelte-1dl93vr"> </span>'),If=E('<!> <kbd class="cap svelte-1dl93vr"> </kbd>',1),Of=E('<!> <kbd class="chord svelte-1dl93vr"></kbd>',1),Ff=E("<span></span>"),Hf=E('<span><kbd class="chord svelte-1dl93vr"><kbd class="cap svelte-1dl93vr"><!></kbd></kbd></span>');function Co(e,n){const o=ul(n);Ue(n,!1);const a=c(),r=c(),i=c(),l=c(),m=c();let f=g(n,"keys",8,""),z=g(n,"platform",8,"pc"),x=g(n,"symbols",8,!0),V=g(n,"join",8,null),O=g(n,"then",8,"then"),D=g(n,"style",8,""),M=g(n,"id",8,""),nt=g(n,"class",8,""),W=c("pc");os(()=>{z()==="auto"&&s(W,zf(globalThis.navigator))}),_(()=>(Z(z()),t(W)),()=>{s(a,z()==="auto"?t(W):z()==="mac"?"mac":"pc")}),_(()=>(Z(f()),t(a),Z(x())),()=>{s(r,Ia(f(),t(a),x()))}),_(()=>(Z(V()),t(a),Z(x())),()=>{s(i,V()??Cf(t(a),x()))}),_(()=>(t(a),Z(x())),()=>{s(l,t(a)==="mac"&&x())}),_(()=>(t(l),Z(f()),t(a),Z(O())),()=>{s(m,t(l)?Ia(f(),t(a),!1).map(tt=>tt.join(" ")).join(`, ${O()||"then"} `):"")}),Dn(),yn();var Y=fn(),U=Wt(Y);{var F=tt=>{var j=Ff();$n(j,5,()=>t(r),hs,(Q,vt,et)=>{var w=Of(),P=Wt(w);{var K=A=>{var b=Rf(),k=u(b,!0);d(b),B(()=>gt(k,O())),h(A,b)};L(P,A=>{et>0&&O()&&A(K)})}var $=p(P,2);$n($,5,()=>t(vt),hs,(A,b,k)=>{var N=If(),pt=Wt(N);{var ht=R=>{var mt=Lf(),lt=u(mt,!0);d(mt),B(()=>gt(lt,t(i))),h(R,mt)};L(pt,R=>{k>0&&t(i)&&R(ht)})}var it=p(pt,2),ut=u(it,!0);d(it),B(()=>gt(ut,t(b))),h(A,N)}),d($),B(()=>I($,"aria-hidden",t(l)?"true":void 0)),h(Q,w)}),d(j),B(()=>{Mt(j,1,`kbd ${nt()??""}`,"svelte-1dl93vr"),I(j,"id",M()||void 0),le(j,D()),I(j,"aria-label",t(l)?t(m):void 0)}),h(tt,j)},X=tt=>{var j=Hf(),Q=u(j),vt=u(Q),et=u(vt);jr(et,n,"default",{},null),d(vt),d(Q),d(j),B(()=>{Mt(j,1,`kbd ${nt()??""}`,"svelte-1dl93vr"),I(j,"id",M()||void 0),le(j,D())}),h(tt,j)};L(U,tt=>{t(r),ot(()=>t(r).length)?tt(F):ot(()=>o.default)&&tt(X,1)})}h(e,Y),qe()}const Uo=Xo("geekpresent:onboard:done",!1,{codec:Qo(),sync:!0});function zs(){Ee(Uo)||Uo.set(!0)}const qi=8e3;function Kf(e){return typeof e=="number"&&Number.isFinite(e)&&e>=0?e:qi}function Wi(e,n){return fo(e).findIndex(o=>o.path===n)}function Bf(e,n){return Wi(e,n)===0&&fo(e).length>1}function jf(e,n){return Wi(e,n)>0}function Uf(e){return e.suppressed?!1:!!e.force||e.offered&&!e.done&&e.firstSlide}const qf=new Set([" ","Spacebar","ArrowRight","ArrowLeft","PageDown","PageUp"]),Wf=new Set(["Enter","ArrowDown","ArrowUp"]);function Gf(e,n={}){return n.ctrl||n.meta||n.alt?"none":qf.has(e)?"explore":Wf.has(e)?"stray":"none"}var Vf=E('<div class="edge top gp-chrome no-print svelte-1gtc41s" aria-hidden="true"></div> <div class="edge bottom gp-chrome no-print svelte-1gtc41s" aria-hidden="true"></div>',1),Yf=E('<p class="row alt-bars svelte-1gtc41s"><!> tool bar <span class="where svelte-1gtc41s">(top)</span> + nav bar <span class="where svelte-1gtc41s">(bottom)</span></p> <p class="row svelte-1gtc41s">or point at the <b class="svelte-1gtc41s">top</b> or <b class="svelte-1gtc41s">bottom</b> edge of the window</p>',1),Xf=E(`<div><!> <div role="status" aria-live="polite"><p class="title svelte-1gtc41s">New here? Here's how to get around.</p> <p class="row svelte-1gtc41s"><!> next slide <span class="sep svelte-1gtc41s" aria-hidden="true">·</span> <!> next step <span class="sep svelte-1gtc41s" aria-hidden="true">·</span> <!> back</p> <!> <button type="button" class="got-it svelte-1gtc41s">Got it</button></div></div>`);function Qf(e,n){Ue(n,!1);const o=()=>dt(Uo,"$onboardDone",a),[a,r]=Cn(),i=c(),l=c();let m=g(n,"offered",8,!0),f=g(n,"firstSlide",8,!1),z=g(n,"suppressed",8,!1),x=g(n,"bars",8,!0),V=g(n,"delayMs",8,8e3),O=g(n,"force",8,!1),D=g(n,"themeClass",8,""),M=g(n,"style",8,""),nt=g(n,"id",8,""),W=g(n,"class",8,""),Y=c(!1),U=c(!1),F=null,X=c(!1);function tt(k){t(U)||F||(F=setTimeout(Q,k))}function j(){F&&clearTimeout(F),F=null,s(U,!1)}function Q(){F&&clearTimeout(F),F=null,s(U,!0)}function vt(){s(X,!0),zs()}const et='a, button, input, textarea, select, label, [contenteditable], [role="button"], .overlay, .gp-chrome';function w(k){if(!t(l)||Qs(k.target))return;const N=Gf(k.key,{ctrl:k.ctrlKey,meta:k.metaKey,alt:k.altKey});N==="explore"?vt():N==="stray"&&Q()}function P(k){var pt;if(!t(l))return;const N=k.target;(pt=N==null?void 0:N.closest)!=null&&pt.call(N,et)||Q()}function K(){t(l)&&Q()}os(()=>(O()&&Uo.set(!1),s(Y,!0),window.addEventListener("keydown",w,!0),window.addEventListener("pointerdown",P,!0),window.addEventListener("wheel",K,{capture:!0,passive:!0}),()=>{window.removeEventListener("keydown",w,!0),window.removeEventListener("pointerdown",P,!0),window.removeEventListener("wheel",K,{capture:!0}),j()})),_(()=>(Z(O()),t(X)),()=>{s(i,O()&&!t(X))}),_(()=>(t(Y),Z(m()),o(),Z(f()),Z(z()),t(i)),()=>{s(l,t(Y)&&Uf({offered:m(),done:o(),firstSlide:f(),suppressed:z(),force:t(i)}))}),_(()=>(t(l),t(i),Z(V())),()=>{t(l)&&t(i)?Q():t(l)?tt(Kf(V())):j()}),Dn(),yn();var $=fn(),A=Wt($);{var b=k=>{var N=Xf(),pt=u(N);{var ht=C=>{var bt=Vf();Ke(2),h(C,bt)};L(pt,C=>{x()&&C(ht)})}var it=p(pt,2),ut=p(u(it),2),R=u(ut);Co(R,{children:(C,bt)=>{Ke();var At=ns("→");h(C,At)},$$slots:{default:!0}});var mt=p(R,4);Co(mt,{children:(C,bt)=>{Ke();var At=ns("Space");h(C,At)},$$slots:{default:!0}});var lt=p(mt,4);Co(lt,{children:(C,bt)=>{Ke();var At=ns("←");h(C,At)},$$slots:{default:!0}}),Ke(),d(ut);var Tt=p(ut,2);{var yt=C=>{var bt=Yf(),At=Wt(bt),Et=u(At);Co(Et,{keys:"Alt+.",platform:"auto"}),Ke(4),d(At),Ke(2),h(C,bt)};L(Tt,C=>{x()&&C(yt)})}var J=p(Tt,2);d(it),d(N),B(()=>{Mt(N,1,`onboard-theme ${D()??""}`,"svelte-1gtc41s"),Mt(it,1,`onboard-hint gp-chrome no-print ${W()??""}`,"svelte-1gtc41s"),I(it,"id",nt()||void 0),le(it,M())}),G("click",J,vt),h(k,N)};L(A,k=>{t(l)&&t(U)&&k(b)})}h(e,$),qe(),r()}let Ss=null;function Jf(e){if(typeof window>"u")return null;const n={...e,ts:Date.now()};try{sessionStorage.setItem(Lc,Ic(n))}catch{}const o=`${io}/_source-edit`,a="popup=yes,width=1280,height=900,menubar=no,toolbar=no,location=no,status=no";if(!Ss||Ss.closed)Ss=window.open(o,Oc,a);else{Ss.focus();try{Ss.postMessage({type:_a,...n},window.location.origin)}catch{}}if(Ss&&!Ss.closed){const r=Ss,i=()=>{try{r.postMessage({type:_a,...n},window.location.origin)}catch{}};setTimeout(i,50),setTimeout(i,300)}return Ss}const sr=Ye(new Set),Zf=new Map,tv=Xs(sr,e=>e.size>0),Gi=Xs([sr,Js],([e,n])=>e.size>0||n),Vi=Xs([sr,Js],([e,n])=>n||e.size>0);Xs([Gi,Vi],([e,n])=>e||n);const Lr=Ye(!1),qo=Ye(null);function Yi(){return typeof location>"u"?"":location.pathname}async function Oa(){if(Ee(sr).size>0){qo.set(null),Lr.set(!0);return}if(!Ee(Js))return;const e=Yi(),n=await oi(e);if(!n.ok||typeof n.content!="string"){console.warn("[SOURCE]",n.error??"could not load page source");return}qo.set({code:n.content,path:n.file??e,route:e}),Lr.set(!0)}async function wr(){const e=[...Zf.values()],n=e[e.length-1];if(n){n();return}if(!Ee(Js)){console.warn("[EDIT] no ViewSource on this slide and SAVE is not available");return}const o=Yi(),a=await oi(o);if(!a.ok||typeof a.content!="string"){console.warn("[EDIT]",a.error??"could not load page source");return}Jf({route:o,path:a.file??"",source:a.content,language:"html",canSave:!0})?Ir():console.warn("[EDIT] popup blocked — allow popups for this origin to edit source in a separate window")}function Ir(){Lr.set(!1),qo.set(null)}function ev(e){switch(e.key){case"ArrowUp":return"up";case"ArrowDown":return"down";case"ArrowLeft":return"left";case"ArrowRight":return"right";default:return""}}function eo(e,n,o){if(o<=0)return 0;const a=Number.isFinite(e)?Math.trunc(e):0,r=Number.isFinite(n)?Math.trunc(n):0;return((a+r)%o+o)%o}function no(e,n){if(!n||!e.length)return-1;const o=e.indexOf(n);if(o>=0)return o;for(let a=0;a<e.length;a++)if(e[a].contains(n))return a;return-1}function nv(e){return e.printOpen&&(e.focusInPrint||e.focusOnHamburger||e.focusInMoreDrop)?"print":e.moreOpen&&(e.focusInMoreDrop||e.focusOnHamburger||e.focusOnBar)||e.moreOpen?"more":e.armed?"bar":"none"}function so(e,n,o,a){return!n||e==="none"||a<0?null:e==="bar"?n==="left"?eo(o<0?0:o,-1,a):n==="right"?eo(o<0?-1:o,1,a):null:e==="more"?n==="down"?o<0?a>0?0:null:eo(o,1,a):n==="up"?o<=0?-1:eo(o,-1,a):null:e==="print"?n==="down"?eo(o<0?-1:o,1,a):n==="up"?eo(o<0?0:o,-1,a):n==="left"?-1:null:null}var sv=E('<div class="close svelte-zfoorp" role="button" tabindex="-1">CLOSE</div>'),ov=E('<div class="link svelte-zfoorp"><a target="_blank" class="svelte-zfoorp"> </a></div>'),rv=E('<div><div class="img-box svelte-zfoorp" role="dialog" tabindex="-1"><!> <!> <!></div></div>');function av(e,n){Ue(n,!1);let o=g(n,"width",8),a=g(n,"height",8),r=g(n,"expanded",12,!1),i=g(n,"showClose",8,!0),l=g(n,"scrollable",8,!1),m=g(n,"top",8,null),f=g(n,"left",8,null),z=g(n,"bottom",8,null),x=g(n,"right",8,null),V=g(n,"linkUrl",8,null),O=g(n,"linkText",8,"LINK"),D=g(n,"shadowOpacity",8,.8),M=g(n,"onClick",8,null),nt=g(n,"containsExternal",8,null),W=g(n,"style",8,""),Y=g(n,"id",8,""),U=g(n,"class",8,""),F=c();function X(){r(!1)}function tt(N){N.key==="Escape"&&X()}function j(N){!r()||!t(F)||t(F).contains(N.target)||nt()&&nt()(N.target)||X()}let Q=!1;function vt(){Q||(document.addEventListener("click",j),Q=!0)}function et(){Q&&(document.removeEventListener("click",j),Q=!1)}os(()=>(window.addEventListener("keydown",tt),()=>{window.removeEventListener("keydown",tt),et()})),_(()=>Z(r()),()=>{r()?setTimeout(vt,0):et()}),Dn(),yn();var w=rv(),P=u(w),K=u(P);jr(K,n,"default",{},null);var $=p(K,2);{var A=N=>{var pt=sv();G("click",pt,X),G("keydown",pt,X),h(N,pt)};L($,N=>{i()&&N(A)})}var b=p($,2);{var k=N=>{var pt=ov(),ht=u(pt),it=u(ht,!0);d(ht),d(pt),B(()=>{I(ht,"href",V()),gt(it,O())}),h(N,pt)};L(b,N=>{V()&&N(k)})}d(P),Re(P,N=>s(F,N),()=>t(F)),d(w),B(()=>{Mt(w,1,`parent ${r()?"expanded":""} ${U()??""}`,"svelte-zfoorp"),I(w,"id",Y()||void 0),le(w,`--custom-top: ${m()??""}; --custom-left: ${f()??""}; --custom-bottom: ${z()??""}; --custom-right: ${x()??""}; --shadow-opacity: ${D()??""}; --scrollable: ${l()?"scroll":"hidden"}; ${W()??""}`),le(P,`--full-width: ${o()??""}px; --full-height: ${a()??""}px;`)}),G("click",P,()=>M()&&M()()),h(e,w),qe()}var iv=E('<button type="button" class="code-edit svelte-o9q3b8" aria-label="Edit source in a separate window" title="EDIT — open this file in an unscaled editor window">EDIT</button>'),lv=E('<span class="save-flash svelte-o9q3b8"> </span>'),cv=E('<span class="save-tip svelte-o9q3b8" role="status"> </span>'),dv=E('<span class="save-pop svelte-o9q3b8"><!> <!></span>'),pv=E('<span><button type="button" class="code-save svelte-o9q3b8" aria-label="Save source to file" title="SAVE — write this buffer back to the source file">SAVE</button> <!></span>'),uv=E('<div class="code-title svelte-o9q3b8"><span class="code-title-text svelte-o9q3b8"> </span> <span class="code-title-actions svelte-o9q3b8"><!> <!></span></div>'),fv=E("<!> <!>",1);function vv(e,n){Ue(n,!1);const o=c(),a=c(),r=c();let i=g(n,"code",8),l=g(n,"language",8,"java"),m=g(n,"title",8,""),f=g(n,"expanded",12,!1),z=g(n,"revealedLines",24,()=>[1]),x=g(n,"fontSize",8,20),V=g(n,"readOnly",8,!0),O=g(n,"edit",8,!1),D=g(n,"save",8,!1),M=g(n,"saveLabel",8,"SAVE"),nt=g(n,"saveRefused",8,!1),W=g(n,"saveTip",8,""),Y=g(n,"style",8,""),U=g(n,"id",8,""),F=g(n,"class",8,"");const X=Qa();let tt=c();function j(){var K;return((K=t(tt))==null?void 0:K.getValue())??i()}function Q(){var K;return((K=t(tt))==null?void 0:K.isDirty())??!1}function vt(){var K;(K=t(tt))==null||K.markClean()}function et(){X("edit")}function w(){X("save")}_(()=>(Z(O()),Z(D())),()=>{s(o,O()||D())}),_(()=>(Z(m()),t(o)),()=>{s(a,m()||t(o)?"915px":"975px")}),_(()=>(Z(m()),t(o)),()=>{s(r,!!(m()||t(o)))}),Dn();var P={getValue:j,isDirty:Q,markClean:vt};return yn(),av(e,{get style(){return Y()},get id(){return U()},get class(){return F()},width:1500,height:975,containsExternal:K=>{var $;return(($=t(tt))==null?void 0:$.containsPortaled(K))??!1},get expanded(){return f()},set expanded(K){f(K)},children:(K,$)=>{var A=fv(),b=Wt(A);{var k=pt=>{var ht=uv(),it=u(ht),ut=u(it,!0);d(it);var R=p(it,2),mt=u(R);{var lt=J=>{var C=iv();G("click",C,nn(et)),h(J,C)};L(mt,J=>{O()&&J(lt)})}var Tt=p(mt,2);{var yt=J=>{var C=pv();let bt;var At=u(C),Et=p(At,2);{var Lt=Gt=>{var Te=dv(),Kt=u(Te);{var zt=Ct=>{var Yt=lv(),Ut=u(Yt,!0);d(Yt),B(()=>gt(Ut,M())),h(Ct,Yt)};L(Kt,Ct=>{M()!=="SAVE"&&Ct(zt)})}var Nt=p(Kt,2);{var kt=Ct=>{var Yt=cv(),Ut=u(Yt,!0);d(Yt),B(()=>gt(Ut,W())),h(Ct,Yt)};L(Nt,Ct=>{nt()&&Ct(kt)})}d(Te),h(Gt,Te)};L(Et,Gt=>{(M()!=="SAVE"||nt())&&Gt(Lt)})}d(C),B(()=>bt=Mt(C,1,"save-btn svelte-o9q3b8",null,bt,{refused:nt()})),G("click",At,nn(w)),h(J,C)};L(Tt,J=>{D()&&J(yt)})}d(R),d(ht),B(()=>gt(ut,m())),h(pt,ht)};L(b,pt=>{t(r)&&pt(k)})}var N=p(b,2);Re(Fc(N,{get code(){return i()},get language(){return l()},get revealLines(){return z()},width:"1500px",get height(){return t(a)},get fontSize(){return x()},get readOnly(){return V()},get expanded(){return f()},$$legacy:!0}),pt=>s(tt,pt),()=>t(tt)),h(K,A)},$$slots:{default:!0},$$legacy:!0}),gr(n,"getValue",j),gr(n,"isDirty",Q),gr(n,"markClean",vt),qe(P)}function hv(e,n){const o=[];for(const a of[e.next,e.prev]){if(!a)continue;const r=n?a+(a.includes("?")?"&":"?")+"present":a;o.includes(r)||o.push(r)}return o}function mv(e){return e.length===0?"":JSON.stringify({prerender:[{source:"list",urls:e,eagerness:"immediate"}]})}const gv=Ye(new Map),bv={subscribe:gv.subscribe},yv=Ye(new Map),kv={subscribe:yv.subscribe};function wv(e){return`${e.libImport}/draw`}const xv="/__geekpresent/adjust-save";async function Xi(e){if(!e.length)return{ok:!0,patched:0,unmatched:[]};try{const n=await fetch(xv,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({route:location.pathname,changes:e})}),o=await n.json().catch(()=>({}));if(!n.ok)return{ok:!1,patched:0,unmatched:[],error:o.error||`HTTP ${n.status}`};const a=(o.unmatched??[]).map(r=>typeof r=="string"?{label:r,reason:"not-found"}:r);return{ok:!0,patched:o.patched??0,unmatched:a}}catch(n){return{ok:!1,patched:0,unmatched:[],error:n instanceof Error?n.message:String(n)}}}async function _v(e,n=[]){return e.trim()?Xi([{kind:"Draw",insert:e,insertImports:n,importFrom:wv(Tr)}]):{ok:!0,patched:0,unmatched:[]}}async function Sv(){const e=[...Ee(bv).values()].filter(r=>r.dirty),n=e.filter(r=>r.pasteOf).map(r=>({kind:r.kind,name:r.pasteOf.name||void 0,before:r.pasteOf.before,paste:{name:r.name||void 0,after:r.after},file:r.file})),o=e.filter(r=>!r.pasteOf).map(r=>r.removed?{kind:r.kind,name:r.name||void 0,before:r.before,remove:!0,file:r.file}:{kind:r.kind,name:r.name||void 0,before:r.before,after:r.after,file:r.file}),a=[...Ee(kv).values()].filter(r=>r.dirty).map(r=>({kind:r.kind,name:r.name||void 0,oldTag:r.oldTag,newTag:r.newTag,before:r.before,after:r.after}));return Xi([...n,...o,...a])}function Tn(e){return String(Math.round((Number.isFinite(e)?e:0)*100)/100+0)}function Or(e){return`[${Tn(e[0])}, ${Tn(e[1])}]`}function xr(e,n){return n.includes('"')?` ${e}='${n}'`:` ${e}="${n}"`}function Ev(e){let n="";return e.arrow&&e.arrow!=="none"&&(n+=` arrow="${e.arrow}"`),e.arrowSize!=null&&(n+=` arrowSize={${Tn(e.arrowSize)}}`),e.color&&(n+=` color="${e.color}"`),e.thickness!=null&&(n+=` thickness={${Tn(e.thickness)}}`),e.dash===!0?n+=" dash":typeof e.dash=="string"&&e.dash&&(n+=` dash="${e.dash}"`),e.rough===!0?n+=" rough":e.rough===!1?n+=" rough={false}":typeof e.rough=="number"&&(n+=` rough={${Tn(e.rough)}}`),e.seed!=null&&(n+=` seed={${Tn(e.seed)}}`),e.label&&(n+=` label="${e.label}"`),e.labelText&&(n+=` labelText="${e.labelText}"`),e.labelText&&e.labelAt!=null&&e.labelAt!==.5&&(n+=` labelAt={${Tn(e.labelAt)}}`),e.labelText&&e.labelOffset!=null&&e.labelOffset!==20&&(n+=` labelOffset={${Tn(e.labelOffset)}}`),e.draw&&(n+=` draw={${Tn(e.draw)}}`),e.draw&&e.drawDelay&&(n+=` drawDelay={${Tn(e.drawDelay)}}`),e.grid&&e.grid>1&&(n+=` grid={${Tn(e.grid)}}`),e.id&&(n+=xr("id",e.id)),e.class&&(n+=xr("class",e.class)),e.style&&(n+=xr("style",e.style)),n}const Tv=6,Av=34,Nv=4,Mv="opacity:var(--annot-highlighter-alpha, 0.45)",Pv=["pen","line","arrow","rectangle","highlighter"];function Fr(e){return!!e&&Pv.includes(e.tool)}function $v(e){return Array.isArray(e.points)?e.points:[]}function Dv(e){return`points={[${e.map(Or).join(", ")}]}`}function Cv(e,n){const o=Lo(e.tool,n.penWidth??Tv,n.highlighterWidth??Av);return Ev({color:e.color||void 0,thickness:o===Nv?void 0:o,style:e.tool==="highlighter"?Mv:void 0})}function zv(e,n={}){if(!Fr(e))return"";const o=$v(e);if(o.length===0)return"";const a=Cv(e,n);if(e.tool==="line"||e.tool==="arrow"){const r=$r(o),i=r[0]??o[0],l=r[r.length-1]??i,m=e.tool==="arrow"?' arrow="end"':"";return`<Line from={${Or(i)}} to={${Or(l)}}${m}${a} />`}if(e.tool==="rectangle"){const r=o[0],i=o[o.length-1],l=Math.min(r[0],i[0]),m=Math.min(r[1],i[1]),f=Math.abs(i[0]-r[0]),z=Math.abs(i[1]-r[1]),x=Math.max(0,Number.isFinite(n.rectRadius)?n.rectRadius:0),V=x>0?` rounded={${Tn(x)}}`:"";return`<Rect x={${Tn(l)}} y={${Tn(m)}} width={${Tn(f)}} height={${Tn(z)}}${V}${a} />`}return`<Polyline ${Dv(o)} smooth${a} />`}function na(e,n,o={}){const a=new Set(n);return a.size===0||!Array.isArray(e)?[]:e.filter(r=>r&&a.has(r.id)).map(r=>zv(r,o)).filter(r=>r!=="")}function Rv(e,n){return na(e,n).length}function Lv(e,n,o={}){const a=na(e,n,o);if(a.length===0)return"";const r=o.indent??"";return o.wrap===!1?a.map(i=>`${r}${i}`).join(`
`):[`${r}<Draw>`,...a.map(i=>`${r}	${i}`),`${r}</Draw>`].join(`
`)}function Iv(e,n="$lib/draw"){const o=new Set;for(const r of e){const i=/^<([A-Za-z]+)/.exec(r);i&&o.add(i[1])}return o.size===0?"":`import { ${["Draw",...["Line","Polyline","Rect"].filter(r=>o.has(r))].join(", ")} } from '${n}';`}const Ov={size:12,thinning:.7,streamline:.6,smoothing:.5,easing:"linear",start:{taper:0,cap:!0},end:{taper:0,cap:!0}},sa={linear:e=>e,easeIn:e=>e*e,easeOut:e=>e*(2-e),easeInOut:e=>e<.5?2*e*e:-1+(4-2*e)*e},_r=(e,n,o)=>Math.min(o,Math.max(n,e)),yo=(e,n)=>typeof e=="number"&&Number.isFinite(e)?e:n;function oa(e){const n=Ov,o=e&&typeof e=="object"?e:{},a=(r,i)=>({taper:Math.max(0,yo(r==null?void 0:r.taper,i.taper)),cap:typeof(r==null?void 0:r.cap)=="boolean"?r.cap:i.cap});return{size:Math.max(.5,yo(o.size,n.size)),thinning:_r(yo(o.thinning,n.thinning),-1,1),streamline:_r(yo(o.streamline,n.streamline),0,1),smoothing:_r(yo(o.smoothing,n.smoothing),0,1),easing:o.easing&&o.easing in sa?o.easing:n.easing,start:a(o.start,n.start),end:a(o.end,n.end)}}function Fv(e){const n=oa(e);return n.size*sa[n.easing](.5+Math.abs(n.thinning)/2)}const vs=(e,n)=>[e[0]+n[0],e[1]+n[1]],us=(e,n)=>[e[0]-n[0],e[1]-n[1]],fs=(e,n)=>[e[0]*n,e[1]*n],Hv=e=>[-e[0],-e[1]],ko=e=>[e[1],-e[0]],Fa=(e,n)=>e[0]*n[0]+e[1]*n[1],Kv=(e,n)=>e[0]===n[0]&&e[1]===n[1],Bv=(e,n)=>Math.hypot(e[1]-n[1],e[0]-n[0]),Ha=(e,n)=>(e[0]-n[0])**2+(e[1]-n[1])**2,Hr=(e,n,o)=>vs(e,fs(us(n,e),o)),Ka=(e,n,o)=>vs(e,fs(n,o));function Qi(e){const n=Math.hypot(e[0],e[1]);return n===0?[0,0]:[e[0]/n,e[1]/n]}function wo(e,n,o){const a=Math.sin(o),r=Math.cos(o),i=e[0]-n[0],l=e[1]-n[1];return[i*r-l*a+n[0],i*a+l*r+n[1]]}const jv=.5,Uv=.25,qv=.275,xo=Math.PI+1e-4,Ba=(e,n,o,a)=>e*a(.5-n*(.5-o));function Wv(e,n,o){var x;if(e.length===0)return[];const a=.15+(1-n.streamline)*.85;let r=e;if(r.length===2){const V=r[1];r=[r[0]];for(let O=1;O<5;O++)r.push(Hr(r[0],V,O/4))}r.length===1&&(r=[r[0],vs(r[0],[1,1])]);const i=[{point:r[0],pressure:Uv,vector:[1,1],distance:0,runningLength:0}];let l=!1,m=0,f=i[0];const z=r.length-1;for(let V=1;V<r.length;V++){const O=o&&V===z?r[V]:Hr(f.point,r[V],a);if(Kv(f.point,O))continue;const D=Bv(O,f.point);if(m+=D,V<z&&!l){if(m<n.size)continue;l=!0}f={point:O,pressure:jv,vector:Qi(us(f.point,O)),distance:D,runningLength:m},i.push(f)}return i[0].vector=((x=i[1])==null?void 0:x.vector)??[0,0],i}function Gv(e,n,o){const{size:a,smoothing:r,thinning:i}=n;if(e.length===0||a<=0)return[];const l=sa[n.easing],m=$=>$*(2-$),f=$=>--$*$*$+1,z=e[e.length-1].runningLength,x=n.start.taper,V=n.end.taper,O=Math.pow(a*r,2),D=[],M=[],nt=($,A)=>{const b=Math.min(1,A/a),k=Math.min(1,1-b);return Math.min(1,$+(k-$)*(b*qv))};let W=e.slice(0,10).reduce(($,A)=>($+nt($,A.distance))/2,e[0].pressure),Y=Ba(a,i,e[e.length-1].pressure,l),U,F=e[0].vector,X=e[0].point,tt=X,j=X,Q=tt,vt=!1;for(let $=0;$<e.length;$++){let{pressure:A}=e[$];const{point:b,vector:k,distance:N,runningLength:pt}=e[$];if($<e.length-1&&z-pt<3)continue;i?(A=nt(W,N),Y=Ba(a,i,A,l)):Y=a/2,U===void 0&&(U=Y);const ht=pt<x?m(pt/x):1,it=z-pt<V?f((z-pt)/V):1;Y=Math.max(.01,Y*Math.min(ht,it));const ut=($<e.length-1?e[$+1]:e[$]).vector,R=$<e.length-1?Fa(k,ut):1,lt=Fa(k,F)<0&&!vt,Tt=R<0;if(lt||Tt){const J=fs(ko(F),Y);for(let C=1/13,bt=0;bt<=1;bt+=C)j=wo(us(b,J),b,xo*bt),D.push(j),Q=wo(vs(b,J),b,xo*-bt),M.push(Q);X=j,tt=Q,Tt&&(vt=!0);continue}if(vt=!1,$===e.length-1){const J=fs(ko(k),Y);D.push(us(b,J)),M.push(vs(b,J));continue}const yt=fs(ko(Hr(ut,k,R)),Y);j=us(b,yt),($<=1||Ha(X,j)>O)&&(D.push(j),X=j),Q=vs(b,yt),($<=1||Ha(tt,Q)>O)&&(M.push(Q),tt=Q),W=A,F=k}const et=e[0].point,w=e.length>1?e[e.length-1].point:vs(e[0].point,[1,1]),P=[],K=[];if(e.length===1){if(!(x||V)||o){const $=Ka(et,Qi(ko(us(et,w))),-(U??Y)),A=[];for(let b=1/13,k=b;k<=1;k+=b)A.push(wo($,et,xo*2*k));return A}}else{if(!x)if(n.start.cap)for(let A=1/13,b=A;b<=1;b+=A)P.push(wo(M[0],et,xo*b));else{const A=us(D[0],M[0]),b=fs(A,.5),k=fs(A,.51);P.push(us(et,b),us(et,k),vs(et,k),vs(et,b))}const $=ko(Hv(e[e.length-1].vector));if(V)K.push(w);else if(n.end.cap){const A=Ka(w,$,Y);for(let b=1/29,k=b;k<1;k+=b)K.push(wo(A,w,xo*3*k))}else K.push(vs(w,fs($,Y)),vs(w,fs($,Y*.99)),us(w,fs($,Y*.99)),us(w,fs($,Y)))}return D.concat(K,M.reverse(),P)}function Vv(e,n,o=!0){if(!Array.isArray(e)||e.length===0)return[];const a=oa(n),r=e.map(Xl);return Gv(Wv(r,a,o),a,o)}const Ds=e=>Number.isFinite(e)?e.toFixed(2):"0.00";function Yv(e){const n=e.length;if(n<4)return"";let o=e[0],a=e[1];const r=e[2];let i=`M${Ds(o[0])},${Ds(o[1])} Q${Ds(a[0])},${Ds(a[1])} ${Ds((a[0]+r[0])/2)},${Ds((a[1]+r[1])/2)} T`;for(let l=2;l<n-1;l++)o=e[l],a=e[l+1],i+=`${Ds((o[0]+a[0])/2)},${Ds((o[1]+a[1])/2)} `;return i+"Z"}function Xv(e,n,o=!0){return Yv(Vv(e,n,o))}function ja(e,n){var nt;const{scaleFrom:o,onMove:a,onEnd:r,onCancel:i}=n,l=typeof o=="function"?o()||1:o&&o.getBoundingClientRect().width/o.offsetWidth||1,m=e.clientX,f=e.clientY,z=e.target,x=e.pointerId,V=W=>a((W.clientX-m)/l,(W.clientY-f)/l,W),O=()=>{M(),r==null||r()},D=W=>{W.key==="Escape"&&(W.preventDefault(),W.stopPropagation(),M(),i==null||i())};function M(){var W;window.removeEventListener("pointermove",V),window.removeEventListener("pointerup",O),i&&window.removeEventListener("keydown",D,!0),(W=z==null?void 0:z.releasePointerCapture)==null||W.call(z,x)}(nt=z==null?void 0:z.setPointerCapture)==null||nt.call(z,x),window.addEventListener("pointermove",V),window.addEventListener("pointerup",O),i&&window.addEventListener("keydown",D,!0)}var Qv=rs('<text dominant-baseline="hanging"> </text>'),Ua=rs("<path></path>"),Jv=E('<input class="annot-text-input no-print svelte-sdoi9y" aria-label="Annotation text"/>'),Zv=rs('<svg aria-hidden="true"><!><!></svg><!>',1),th=E('<div class="annot-stale no-print svelte-sdoi9y" role="status"><span class="annot-stale-text svelte-sdoi9y">This slide has annotations from <b> </b>.</span> <button type="button" class="annot-btn svelte-sdoi9y">RESET SLIDE</button> <button type="button" class="annot-btn svelte-sdoi9y">RESET ALL</button> <button type="button" class="annot-btn keep svelte-sdoi9y">KEEP</button></div>'),eh=E('<span class="annot-key svelte-sdoi9y" aria-hidden="true"> </span>'),nh=E('<button type="button"><svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-sdoi9y"><path></path></svg> <!></button>'),sh=E('<span class="annot-said svelte-sdoi9y" role="status"> </span>'),oh=E('<span class="annot-said hint svelte-sdoi9y">tap a mark to keep it</span>'),rh=E('<span class="annot-sep svelte-sdoi9y" aria-hidden="true"></span> <button type="button" class="annot-btn freeze-go svelte-sdoi9y"> </button> <!>',1),ah=E('<span class="annot-key svelte-sdoi9y" aria-hidden="true"></span>'),ih=E('<button type="button"><!></button>'),lh=E('<span class="annot-sep svelte-sdoi9y" aria-hidden="true"></span> <!>',1),ch=E('<div class="annot-bar no-print svelte-sdoi9y" role="toolbar" aria-label="Annotation tools"><span class="annot-grip svelte-sdoi9y" role="button" tabindex="-1" aria-label="Move the annotation bar" title="Drag to move · double-click to reset">⠿</span> <!> <!> <!> <span class="annot-sep svelte-sdoi9y" aria-hidden="true"></span> <button type="button" class="annot-btn svelte-sdoi9y">RESET</button> <button type="button" class="annot-btn svelte-sdoi9y">RESET ALL</button> <span class="annot-sep svelte-sdoi9y" aria-hidden="true"></span> <button type="button" class="annot-close svelte-sdoi9y" aria-label="Close annotation tools" title="Close (Esc)"><span aria-hidden="true" class="svelte-sdoi9y">×</span></button></div>'),dh=E("<!>  <!> <!>",1);function ph(e,n){Ue(n,!0);const o=()=>dt(Yo,"$canAnnotate",x),a=()=>dt(ao,"$annotationMode",x),r=()=>dt(ti,"$strokes",x),i=()=>dt(ma,"$annotateTool",x),l=()=>dt(ga,"$annotateColor",x),m=()=>dt(Js,"$canSave",x),f=()=>dt(Mo,"$barPos",x),z=()=>dt(Bl,"$staleInk",x),[x,V]=Cn();let O=g(n,"canvasWidth",3,1920),D=g(n,"canvasHeight",3,1080),M=g(n,"penWidth",3,6),nt=g(n,"highlighterWidth",3,34),W=g(n,"arrowHead",3,36),Y=g(n,"rectRadius",3,12),U=g(n,"eraserRadius",3,14),F=g(n,"textSize",3,44),X=g(n,"inkColors",19,()=>[null,"#E5484D","#3FA9F5","#4BD07A","#FFFFFF"]),tt=g(n,"levelHighlight",3,!0),j=g(n,"snapPen",3,!0),Q=g(n,"freehand",19,()=>({}));const vt=He(()=>Q()===!1?null:oa(Q())),et=T=>T==="pen"&&t(vt)!==null,w=He(()=>o()&&a()),P=He(()=>t(w)||r().length>0),K=He(()=>t(w)&&i()==="pointer"),$=He(()=>i()==="eraser"||i()==="freeze"||i()==="pointer"),A=He(()=>t($)||i()==="text"?"pen":i()),b=He(()=>t($)?null:l());let k=Ze(void 0),N=Ze(Sr([])),pt=0,ht=0,it=Ze(null),ut=Ze(!1);const R=He(()=>!t(w)||i()!=="eraser"||!t(it)?null:mt(t(it)));function mt(T){for(let q=r().length-1;q>=0;q--){const rt=r()[q];if(rt.tool==="text"){if(ya(T,rt.points[0]??[0,0],rt.text??"",rt.size??F(),U()))return rt.id}else{const It=et(rt.tool)&&t(vt)?Fv(t(vt)):Lo(rt.tool,M(),nt())/2,Zt=rt.tool==="rectangle"?oc(rt.points):rt.points;if(rc(T,Zt,U()+It))return rt.id}}return null}let lt=Ze(Sr([]));const Tt=He(()=>{if(!t(w)||i()!=="freeze"||!t(it))return null;const T=mt(t(it));return T&&Fr(r().find(q=>q.id===T))?T:null}),yt=He(()=>Rv(r(),t(lt))),J=He(()=>({penWidth:M(),highlighterWidth:nt(),rectRadius:Y()})),C=He(()=>Lv(r(),t(lt),t(J)));function bt(T){s(lt,t(lt).includes(T)?t(lt).filter(q=>q!==T):[...t(lt),T],!0)}function At(){s(lt,[],!0)}Ls(()=>{i()!=="freeze"&&ot(At)});let Et=Ze(null),Lt;function Gt(T){s(Et,T,!0),clearTimeout(Lt),Lt=setTimeout(()=>s(Et,null),2400)}async function Te(){const T=t(lt).slice(),q=na(r(),T,t(J));if(q.length!==0){if(m()){const rt=await _v(q.join(`
`),Kt(q));if(rt.ok&&rt.patched>0){hr(T),At(),Gt(`FROZEN ${q.length}`);return}rt.ok&&rt.unmatched.length>0?Gt("PLACE IT YOURSELF"):rt.ok||Gt("COPIED (NO SAVE)")}try{await navigator.clipboard.writeText(t(C)),t(Et)||Gt(`COPIED ${q.length}`)}catch{window.prompt("Copy this markup into the slide:",t(C))}At()}}function Kt(T){const q=Iv(T),rt=/\{([^}]*)\}/.exec(q);return rt?rt[1].split(",").map(It=>It.trim()).filter(Boolean):[]}const zt=8,Nt=4;let kt=Ze(null),Ct=Ze(""),Yt=Ze(void 0);function Ut(T){for(let q=r().length-1;q>=0;q--){const rt=r()[q];if(rt.tool==="text"&&ya(T,rt.points[0]??[0,0],rt.text??"",rt.size??F(),zt))return rt.id}return null}function ce(T,q,rt=F()){const It=T?r().find(Zt=>Zt.id===T):void 0;s(kt,{id:T,x:q[0],y:q[1],size:(It==null?void 0:It.size)??rt},!0),s(Ct,(It==null?void 0:It.text)??"",!0),co().then(()=>{var Zt,ke;(Zt=t(Yt))==null||Zt.focus(),(ke=t(Yt))==null||ke.select()})}function Qt(){if(!t(kt))return;const T=cc(t(Ct)),{id:q,x:rt,y:It,size:Zt}=t(kt);if(s(kt,null),s(Ct,""),q)T?vr(q,{text:T}):hr([q]);else if(T){const ke={id:`ink-${Date.now()}-${++ht}`,tool:"text",points:[[rt,It]],text:T,size:Zt};t(b)&&(ke.color=t(b)),ba(ke)}}function wt(){s(kt,null),s(Ct,"")}function fe(T){T.stopPropagation(),T.key==="Enter"?(T.preventDefault(),Qt()):T.key==="Escape"&&(T.preventDefault(),wt())}function Jt(T){const q=tn(T);t(kt)&&Qt();const rt=Ut(q);if(!rt){ce(null,q);return}const It=r().find(pe=>pe.id===rt),Zt=(It==null?void 0:It.points[0])??[q[0],q[1]];let ke=!1;ja(T,{scaleFrom:Yn,onMove:(pe,Rt)=>{Math.hypot(pe,Rt)>Nt&&(ke=!0),ke&&vr(rt,{points:[[Zt[0]+pe,Zt[1]+Rt]]})},onEnd:()=>{ke||ce(rt,Zt)},onCancel:()=>{ke&&vr(rt,{points:[Zt]})}})}let ye=Ze(!1),Le=Ze(!1);function de(T,q){return T?q&&et(q)?`fill:${T};`:`stroke:${T};`:""}function ae(T,q){return q==="highlighter"&&tt()?ac(T):q==="pen"&&j()&&t(ye)?ka(T):q==="line"||q==="arrow"?j()&&t(ye)?ka(T):$r(T):q==="rectangle"?$r(T):T}function Xe(T,q,rt=!0){return q==="arrow"?tc(T,W()):q==="rectangle"?ec(T,Y()):et(q)?Xv(T,t(vt),rt):nc(T)}function tn(T){var q;return dc(T.clientX,T.clientY,(q=t(k))==null?void 0:q.getBoundingClientRect(),O(),D())}function sn(T,q){var rt,It,Zt,ke;try{q?(It=(rt=t(k))==null?void 0:rt.setPointerCapture)==null||It.call(rt,T):(ke=(Zt=t(k))==null?void 0:Zt.releasePointerCapture)==null||ke.call(Zt,T)}catch{}}function kn(T){const q=mt(T);q&&hr([q])}function as(T){if(!(!t(w)||t(K)||T.button!==0)){if(T.preventDefault(),i()==="eraser"){sn(T.pointerId,!0),s(ut,!0),s(it,tn(T),!0),kn(t(it));return}if(i()==="freeze"){s(it,tn(T),!0);const q=mt(t(it));q&&Fr(r().find(rt=>rt.id===q))&&bt(q);return}if(i()==="text"){Jt(T);return}s(ye,T.shiftKey,!0),sn(T.pointerId,!0),s(N,[tn(T)],!0),pt=performance.now()}}function is(T){if(!t(w)||t(K))return;if(i()==="eraser"){s(it,tn(T),!0),t(ut)&&kn(t(it));return}if(i()==="freeze"){s(it,tn(T),!0);return}if(i()==="text"||t(N).length===0)return;s(ye,T.shiftKey,!0);const q=tn(T),rt=t(N)[t(N).length-1];Math.hypot(q[0]-rt[0],q[1]-rt[1])<2||s(N,[...t(N),q],!0)}function vn(T){if(i()==="eraser"){if(!t(ut))return;s(ut,!1),sn(T.pointerId,!1);return}if(i()==="freeze"||i()==="text"||t(N).length===0)return;s(ye,T.shiftKey,!0),sn(T.pointerId,!1);const q=ae(sc(t(N),et(t(A))?2:4),t(A));if(s(N,[],!0),q.length===0)return;const rt={id:`ink-${Date.now()}-${++ht}`,tool:t(A),points:q};t(b)&&(rt.color=t(b));const It=Math.round(performance.now()-pt);It>0&&(rt.ms=It),ba(rt)}function Ie(){s(it,null)}const wn=.7;let zn=Ze(void 0);function Yn(){var q;const T=(q=t(k))==null?void 0:q.getBoundingClientRect();return T&&T.width>0?T.width/O():1}function jn(T){var Vt,$t;if(T.button!==0)return;T.preventDefault(),T.stopPropagation();const q=(Vt=t(zn))==null?void 0:Vt.getBoundingClientRect(),rt=($t=t(k))==null?void 0:$t.getBoundingClientRect();if(!q||!rt)return;const It=Yn(),Zt=(q.left-rt.left)/It,ke=(q.top-rt.top)/It,pe=q.width/It,Rt=q.height/It,oe=f();ja(T,{scaleFrom:Yn,onMove:(Bt,Ot)=>Mo.set(pc(Zt+Bt,ke+Ot,pe,Rt,O(),D())),onCancel:()=>Mo.set(oe)})}function Rn(){Mo.set(null)}let Un=Ze(0);Ls(()=>{const T=t(zn);if(!T||typeof ResizeObserver>"u")return;const q=new ResizeObserver(()=>s(Un,T.offsetWidth,!0));return q.observe(T),()=>q.disconnect()});const hn=He(()=>ic(t(Un),O(),wn)),Xn=He(()=>`--annot-bar-scale:${t(hn)};`+(f()?`left:${f().x}px; top:${f().y}px; bottom:auto; transform:scale(${t(hn)}); transform-origin:top left;`:""));let Ts=null;Ls(()=>{i()!=="pointer"&&(Ts=i())});function As(T){ma.set(Zl(T,i(),Ts))}function S(T){t($)||ga.set(T)}const st=[{tool:"pointer",label:"Pointer",d:"M6 3l12 9-5 1 3 6-2.5 1-3-6L6 17z"},{tool:"pen",label:"Pen",d:"M4 20l1-4L15 5l4 4L9 19l-4 1z M14 6l4 4"},{tool:"line",label:"Line",d:"M5 19L19 5"},{tool:"arrow",label:"Arrow",d:"M5 19L19 5M11 5h8v8"},{tool:"rectangle",label:"Rectangle",d:"M5 6h14v12H5z"},{tool:"highlighter",label:"Highlight",d:"M4 20h5M6 18L15 9l3 3-9 9H6zM14 8l3 3"},{tool:"text",label:"Text",d:"M6 6h12M12 6v13M9 19h6"},{tool:"eraser",label:"Erase",d:"M4 20h9M6 18l7-7 6 6-4 4H10z"},{tool:"freeze",label:"Freeze",d:"M12 3v18M4.5 7.5l15 9M19.5 7.5l-15 9"}];function Pt(T){if(t(w)){if(T.key==="Shift"&&(s(ye,!0),s(Le,!0)),T.key==="Escape")T.preventDefault(),ao.set(!1);else if((T.ctrlKey||T.metaKey)&&T.key.toLowerCase()==="z")T.preventDefault(),jl();else if(!Qs(T.target)){const q=Ql(T,st.length,X().length);if(!q)return;T.preventDefault(),q.kind==="tool"?As(st[q.index].tool):S(X()[q.index])}}}function jt(T){T.key==="Shift"&&(s(ye,!1),s(Le,!1))}var se=dh();G("keydown",So,Pt),G("keyup",So,jt),G("blur",So,()=>s(Le,!1));var We=Wt(se);{var on=T=>{var q=Zv(),rt=Wt(q);let It;var Zt=u(rt);$n(Zt,1,r,Vt=>Vt.id,(Vt,$t)=>{var Bt=fn(),Ot=Wt(Bt);{var $e=he=>{var ee=fn(),xe=Wt(ee);{var De=Oe=>{var re=Qv();let Ne;var An=u(re,!0);d(re),B(()=>{var St,ct;Ne=Mt(re,0,"annot-text svelte-sdoi9y",null,Ne,{erasing:t(R)===t($t).id}),I(re,"x",((St=t($t).points[0])==null?void 0:St[0])??0),I(re,"y",((ct=t($t).points[0])==null?void 0:ct[1])??0),I(re,"font-size",t($t).size??F()),le(re,t($t).color?`fill:${t($t).color};`:""),gt(An,t($t).text)}),h(Oe,re)};L(xe,Oe=>{t(kt)&&t(kt).id===t($t).id||Oe(De)})}h(he,ee)},Ae=he=>{var ee=Ua();let xe;B((De,Oe,re,Ne)=>{xe=Mt(ee,0,"annot-stroke svelte-sdoi9y",null,xe,De),I(ee,"d",Oe),I(ee,"stroke-width",re),le(ee,Ne)},[()=>({highlighter:t($t).tool==="highlighter",freehand:et(t($t).tool),erasing:t(R)===t($t).id,freezing:t(Tt)===t($t).id,frozen:t(lt).includes(t($t).id)}),()=>Xe(t($t).points,t($t).tool),()=>Lo(t($t).tool,M(),nt()),()=>de(t($t).color,t($t).tool)]),h(he,ee)};L(Ot,he=>{t($t).tool==="text"?he($e):he(Ae,-1)})}h(Vt,Bt)});var ke=p(Zt);{var pe=Vt=>{var $t=Ua();let Bt;B((Ot,$e,Ae,he)=>{Bt=Mt($t,0,"annot-stroke svelte-sdoi9y",null,Bt,Ot),I($t,"d",$e),I($t,"stroke-width",Ae),le($t,he)},[()=>({highlighter:t(A)==="highlighter",freehand:et(t(A))}),()=>Xe(ae(t(N),t(A)),t(A),!1),()=>Lo(t(A),M(),nt()),()=>de(t(b),t(A))]),h(Vt,$t)};L(ke,Vt=>{t(N).length>0&&Vt(pe)})}d(rt),Re(rt,Vt=>s(k,Vt),()=>t(k));var Rt=p(rt);{var oe=Vt=>{var $t=Jv();ss($t),Re($t,Bt=>s(Yt,Bt),()=>t(Yt)),B(()=>{I($t,"maxlength",lc),le($t,`left:${t(kt).x??""}px; top:${t(kt).y??""}px; font-size:${t(kt).size??""}px; ${t(b)?`color:${t(b)};`:""}`)}),Je("keydown",$t,fe),G("blur",$t,Qt),ws($t,()=>t(Ct),Bt=>s(Ct,Bt)),h(Vt,$t)};L(Rt,Vt=>{t(w)&&t(kt)&&Vt(oe)})}B(()=>{It=Mt(rt,0,"annot-surface svelte-sdoi9y",null,It,{armed:t(w),erasing:t(w)&&i()==="eraser",freezing:t(w)&&i()==="freeze",texting:t(w)&&i()==="text"}),I(rt,"viewBox",`0 0 ${O()??""} ${D()??""}`),le(rt,`width:${O()??""}px; height:${D()??""}px; pointer-events:${t(w)&&!t(K)?"auto":"none"};`)}),Je("pointerdown",rt,as),Je("pointermove",rt,is),Je("pointerup",rt,vn),G("pointercancel",rt,vn),G("pointerleave",rt,Ie),h(T,q)};L(We,T=>{t(P)&&T(on)})}var rn=p(We,2);{var ms=T=>{var q=th(),rt=u(q),It=p(u(rt)),Zt=u(It,!0);d(It),Ke(),d(rt);var ke=p(rt,2),pe=p(ke,2),Rt=p(pe,2);d(q),B(oe=>gt(Zt,oe),[()=>Jl(z().ts,Date.now())]),Je("click",ke,function(...oe){var Vt;(Vt=Mr)==null||Vt.apply(this,oe)}),Je("click",pe,function(...oe){var Vt;(Vt=Pr)==null||Vt.apply(this,oe)}),Je("click",Rt,function(...oe){var Vt;(Vt=Ul)==null||Vt.apply(this,oe)}),h(T,q)};L(rn,T=>{z()&&T(ms)})}var Ns=p(rn,2);{var qn=T=>{var q=ch(),rt=u(q),It=p(rt,2);$n(It,19,()=>st,Bt=>Bt.tool,(Bt,Ot,$e)=>{var Ae=nh();let he;var ee=u(Ae),xe=u(ee);d(ee);var De=p(ee,2);{var Oe=re=>{var Ne=eh(),An=u(Ne,!0);d(Ne),B(()=>gt(An,t($e)+1)),h(re,Ne)};L(De,re=>{t(Le)||re(Oe)})}d(Ae),B(re=>{he=Mt(Ae,1,"annot-btn icon svelte-sdoi9y",null,he,{on:i()===t(Ot).tool,erase:t(Ot).tool==="eraser",freeze:t(Ot).tool==="freeze"}),I(Ae,"aria-label",t(Ot).label),I(Ae,"aria-pressed",i()===t(Ot).tool),I(Ae,"aria-keyshortcuts",re),I(Ae,"title",`${t(Ot).label??""} (${t($e)+1})`),I(xe,"d",t(Ot).d)},[()=>String(t($e)+1)]),Je("click",Ae,()=>As(t(Ot).tool)),h(Bt,Ae)});var Zt=p(It,2);{var ke=Bt=>{var Ot=rh(),$e=p(Wt(Ot),2),Ae=u($e);d($e);var he=p($e,2);{var ee=De=>{var Oe=sh(),re=u(Oe,!0);d(Oe),B(()=>gt(re,t(Et))),h(De,Oe)},xe=De=>{var Oe=oh();h(De,Oe)};L(he,De=>{t(Et)?De(ee):De(xe,-1)})}B(()=>{$e.disabled=t(yt)===0,I($e,"title",m()?"Write the picked marks into this slide’s source":"Copy the picked marks as Draw markup"),gt(Ae,`FREEZE (${t(yt)??""})`)}),Je("click",$e,Te),h(Bt,Ot)};L(Zt,Bt=>{i()==="freeze"&&Bt(ke)})}var pe=p(Zt,2);{var Rt=Bt=>{var Ot=lh(),$e=p(Wt(Ot),2);$n($e,17,X,hs,(Ae,he,ee)=>{var xe=ih();let De;I(xe,"aria-keyshortcuts",ee<9?`Shift+${ee+1}`:void 0);var Oe=u(xe);{var re=Ne=>{var An=ah();An.textContent=ee+1,h(Ne,An)};L(Oe,Ne=>{t(Le)&&ee<9&&Ne(re)})}d(xe),B(()=>{De=Mt(xe,1,"annot-swatch svelte-sdoi9y",null,De,{on:t(b)===t(he),theme:t(he)===null,hl:i()==="highlighter"}),le(xe,t(he)?`--swatch:${t(he)};`:""),I(xe,"aria-label",t(he)===null?"Theme colour":`Colour ${t(he)}`),I(xe,"aria-pressed",t(b)===t(he)),I(xe,"title",`${(t(he)===null?"Theme colour":t(he))??""}${ee<9?` (Shift+${ee+1})`:""}`)}),Je("click",xe,()=>S(t(he))),h(Ae,xe)}),h(Bt,Ot)};L(pe,Bt=>{t($)||Bt(Rt)})}var oe=p(pe,4),Vt=p(oe,2),$t=p(Vt,4);d(q),Re(q,Bt=>s(zn,Bt),()=>t(zn)),B(()=>{le(q,t(Xn)),oe.disabled=r().length===0}),Je("pointerdown",rt,jn),Je("dblclick",rt,Rn),Je("click",oe,function(...Bt){var Ot;(Ot=Mr)==null||Ot.apply(this,Bt)}),Je("click",Vt,function(...Bt){var Ot;(Ot=Pr)==null||Ot.apply(this,Bt)}),Je("click",$t,()=>ao.set(!1)),h(T,q)};L(Ns,T=>{t(w)&&T(qn)})}h(e,se),qe(),V()}Br(["pointerdown","pointermove","pointerup","keydown","click","dblclick"]);const qa=new Map;async function Ji(e){const n=qa.get(e);if(n)return n;try{const o=await fetch(e,{credentials:"omit"});if(!o.ok)return null;const a=await o.blob(),r=await new Promise(i=>{const l=new FileReader;l.onload=()=>i(typeof l.result=="string"?l.result:null),l.onerror=()=>i(null),l.readAsDataURL(a)});return r&&qa.set(e,r),r}catch{return null}}async function uh(){const e=await Promise.all(Array.from(document.styleSheets).map(n=>Zi(n,0)));return fh(e.join(`
`))}async function Wa(e){try{const n=await fetch(e,{credentials:"omit"});return n.ok?await n.text():""}catch{return""}}async function Zi(e,n){if(n>4)return"";let o=null;try{o=e.cssRules}catch{o=null}if(!o)return e.href?Wa(e.href):"";const a=[];for(const r of Array.from(o)){if(r.type===3){const i=r;if(i.styleSheet)a.push(await Zi(i.styleSheet,n+1));else if(i.href)try{a.push(await Wa(new URL(i.href,e.href??document.baseURI).href))}catch{}continue}a.push(r.cssText)}return a.join(`
`)}async function fh(e){const n=new Set,o=/url\(\s*['"]?([^'")]+)['"]?\s*\)/g;for(const r of e.matchAll(o)){const i=r[1].trim();i&&!i.startsWith("data:")&&n.add(i)}const a=new Map;return await Promise.all(Array.from(n).map(async r=>{let i=r;try{i=new URL(r,document.baseURI).href}catch{return}const l=await Ji(i);l&&a.set(r,l)})),e.replace(o,(r,i)=>{const l=a.get(i.trim());return l?`url("${l}")`:r})}function vh(e,n){const o=Array.from(e.querySelectorAll(xa)),a=Array.from(n.querySelectorAll(xa));o.forEach((r,i)=>{var x;const l=a[i];if(!l)return;let m=null;try{if(r instanceof HTMLCanvasElement)m=r.toDataURL("image/png");else if(r instanceof HTMLVideoElement&&r.videoWidth>0){const V=document.createElement("canvas");V.width=r.videoWidth,V.height=r.videoHeight,(x=V.getContext("2d"))==null||x.drawImage(r,0,0),m=V.toDataURL("image/png")}}catch{m=null}if(!m)return;const f=document.createElement("img");f.src=m;const z=r.getBoundingClientRect();f.style.cssText=l.style.cssText,f.style.width=`${r.offsetWidth||z.width}px`,f.style.height=`${r.offsetHeight||z.height}px`,l.replaceWith(f)})}async function hh(e){const n=Array.from(e.querySelectorAll("img"));await Promise.all(n.map(async o=>{const a=o.getAttribute("src")??"";if(!(!a||a.startsWith("data:")))try{const r=await Ji(new URL(a,document.baseURI).href);r?o.setAttribute("src",r):o.remove()}catch{o.remove()}}))}async function mh(e,n=1920,o=1080,a=1){const r=Tc(e);if(r.length>0)return{blob:null,blockers:r};const i=e.cloneNode(!0);i.style.width=`${n}px`,i.style.height=`${o}px`,i.style.transform="none",i.style.margin="0";const l=i.querySelector(".content");l&&(l.style.transform="none",l.style.transformOrigin="top left"),i.querySelectorAll(Ac).forEach(x=>x.remove()),vh(e,i),await hh(i);const m=await uh(),f=Nc(new XMLSerializer().serializeToString(i),m,n,o);return{blob:await gh(f,n,o,a),blockers:[]}}function gh(e,n,o,a){return new Promise(r=>{const i=new Image;i.onload=()=>{const l=document.createElement("canvas"),m=Math.max(1,Number(a)||1);l.width=Math.round(n*m),l.height=Math.round(o*m);const f=l.getContext("2d");if(!f)return r(null);f.drawImage(i,0,0,l.width,l.height);try{l.toBlob(z=>r(z),"image/png")}catch{r(null)}},i.onerror=()=>r(null),i.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`})}function bh(e,n){const o=URL.createObjectURL(e),a=document.createElement("a");a.href=o,a.download=n,a.click(),setTimeout(()=>URL.revokeObjectURL(o),0)}var yh=E('<button type="button" class="ghost danger svelte-a0xy2r">Stop</button>'),kh=E(`<div class="kiosk-scrim no-print gp-chrome svelte-a0xy2r" role="presentation"><div class="kiosk-dialog svelte-a0xy2r" role="dialog" aria-modal="true" aria-labelledby="kiosk-dialog-title" tabindex="-1"><h2 id="kiosk-dialog-title" class="svelte-a0xy2r">Kiosk / auto-advance</h2> <p class="lead svelte-a0xy2r">Steps reveal first (like Space), then the slide pages and loops.
				Pause and Stop stay on the small indicator — keys do not exit.</p> <label class="field svelte-a0xy2r"><span class="lbl svelte-a0xy2r">Step pace</span> <span class="ctl svelte-a0xy2r"><input type="number" min="0.25" max="120" step="0.5" class="svelte-a0xy2r"/> <span class="unit svelte-a0xy2r">seconds</span></span> <span class="hint svelte-a0xy2r">Between build reveals on one slide</span></label> <label class="field svelte-a0xy2r"><span class="lbl svelte-a0xy2r">Page pace</span> <span class="ctl svelte-a0xy2r"><input type="number" min="0.25" max="120" step="0.5" class="svelte-a0xy2r"/> <span class="unit svelte-a0xy2r">seconds</span></span> <span class="hint svelte-a0xy2r">After the build (and animations) finish</span></label> <label class="check svelte-a0xy2r"><input type="checkbox" class="svelte-a0xy2r"/> <span>Show speaker notes (one line at a time) <span class="hint svelte-a0xy2r">Each &lt;Note&gt; child is a step (drag the panel; n/N progress).
						Long lines hold longer (~150 wpm); then the deck pages.</span></span></label> <div class="actions svelte-a0xy2r"><!> <span class="spacer svelte-a0xy2r"></span> <button type="button" class="ghost svelte-a0xy2r">Cancel</button> <button type="button" class="primary svelte-a0xy2r"> </button></div></div></div>`);function wh(e,n){Ue(n,!1);const o=()=>dt(Hc,"$kioskDialogOpen",i),a=()=>dt(Wr,"$kioskPaces",i),r=()=>dt(Ko,"$kioskStatus",i),[i,l]=Cn();let m=c(2),f=c(6),z=c(!1);function x(){Bc({stepMs:Ea(t(m),ai),pageMs:Ea(t(f),ri),useNotes:t(z)})}function V(){Kc()}function O(){ii()}function D(U){o()&&(U.key==="Escape"?(U.preventDefault(),U.stopPropagation(),V()):U.key==="Enter"&&!U.shiftKey&&!U.ctrlKey&&!U.metaKey&&!U.altKey&&(U.preventDefault(),U.stopPropagation(),x()))}let M=c();_(()=>(o(),a()),()=>{o()&&(s(m,Sa(a().stepMs)),s(f,Sa(a().pageMs)),s(z,a().useNotes))}),_(()=>(o(),t(M)),()=>{o()&&t(M)&&queueMicrotask(()=>{var U;return(U=t(M))==null?void 0:U.focus()})}),Dn(),yn();var nt=fn();G("keydown",So,D);var W=Wt(nt);{var Y=U=>{var F=kh(),X=u(F),tt=p(u(X),4),j=p(u(tt),2),Q=u(j);ss(Q),Ke(2),d(j),Ke(2),d(tt);var vt=p(tt,2),et=p(u(vt),2),w=u(et);ss(w),Ke(2),d(et),Ke(2),d(vt);var P=p(vt,2),K=u(P);ss(K),Ke(2),d(P);var $=p(P,2),A=u($);{var b=ht=>{var it=yh();G("click",it,O),h(ht,it)};L(A,ht=>{r()!=="off"&&ht(b)})}var k=p(A,4),N=p(k,2),pt=u(N,!0);d(N),d($),d(X),Re(X,ht=>s(M,ht),()=>t(M)),d(F),B(()=>gt(pt,r()==="off"?"Start":"OK")),ws(Q,()=>t(m),ht=>s(m,ht)),ws(w,()=>t(f),ht=>s(f,ht)),Za(K,()=>t(z),ht=>s(z,ht)),G("click",k,V),G("click",N,x),G("click",F,fi(V)),h(U,F)};L(W,U=>{o()&&U(Y)})}h(e,nt),qe(),l()}var xh=E('<span class="note-count svelte-11za50q" title="Note progress"> </span>'),_h=E('<div class="kiosk-note-body svelte-11za50q"> </div>'),Sh=E('<div role="status" aria-live="polite"><div class="kiosk-bar svelte-11za50q"><span class="grip svelte-11za50q" aria-hidden="true" title="Drag to move">⠿</span> <button type="button" class="ring-btn svelte-11za50q"><svg class="ring svelte-11za50q" viewBox="0 0 28 28" width="26" height="26" aria-hidden="true"><circle class="track svelte-11za50q" cx="14" cy="14" fill="none" stroke-width="2.5"></circle><circle class="prog svelte-11za50q" cx="14" cy="14" fill="none" stroke-width="2.5" stroke-linecap="round" transform="rotate(-90 14 14)"></circle></svg> <span class="glyph svelte-11za50q" aria-hidden="true"> </span></button> <span class="meta svelte-11za50q"><span class="tag svelte-11za50q">KIOSK</span> <span class="phase svelte-11za50q"> </span></span> <!> <span class="spacer svelte-11za50q" aria-hidden="true"></span> <button type="button" class="icon-btn svelte-11za50q" title="Kiosk settings" aria-label="Kiosk settings">⚙</button> <button type="button" class="icon-btn stop svelte-11za50q" title="Stop kiosk" aria-label="Stop kiosk">×</button></div> <!></div>');function Eh(e,n){Ue(n,!1);const o=()=>dt(Cs,"$kioskDwellFraction",x),a=()=>dt(Ko,"$kioskStatus",x),r=()=>dt(Dr,"$kioskPhaseLabel",x),i=()=>dt(ci,"$kioskNoteItems",x),l=()=>dt(di,"$kioskNoteIndex",x),m=()=>dt(Wr,"$kioskPaces",x),f=()=>dt(Ta,"$kioskNotesPos",x),z=()=>dt(pi,"$kioskPanelPinned",x),[x,V]=Cn(),O=c(),D=c(),M=c(),nt=c(),W=c(),Y=c(),U=c(),F=c(),X=c(),tt=c(),j=c(),Q=c(),vt=c(),et=10,w=2*Math.PI*et,P=12,K=16,$=440;let A=c(null),b=c(!1),k=0,N=0;function pt(yt){var bt,At,Et,Lt,Gt;if(!t(A)||yt.button!==0)return;const J=yt.target;if((bt=J==null?void 0:J.closest)!=null&&bt.call(J,"button")||!((At=J==null?void 0:J.closest)!=null&&At.call(J,".kiosk-bar"))||(Et=J==null?void 0:J.closest)!=null&&Et.call(J,".kiosk-note-body"))return;const C=t(A).getBoundingClientRect();s(b,!0),k=yt.clientX-C.left,N=yt.clientY-C.top;try{(Gt=(Lt=t(A)).setPointerCapture)==null||Gt.call(Lt,yt.pointerId)}catch{}yt.preventDefault()}function ht(yt){if(!t(b)||!t(A))return;const J=t(A).offsetWidth||$,C=t(A).offsetHeight||48,bt=Math.max(0,window.innerWidth-J-8),At=Math.max(0,window.innerHeight-C-8),Et=Math.min(bt,Math.max(8,yt.clientX-k)),Lt=Math.min(At,Math.max(8,yt.clientY-N));Ta.set({left:Et,top:Lt})}function it(yt){var J,C;if(!(!t(b)||!t(A))){s(b,!1);try{(C=(J=t(A)).releasePointerCapture)==null||C.call(J,yt.pointerId)}catch{}}}function ut(){Bo.set(!0)}function R(){Bo.set(!1)}_(()=>o(),()=>{s(O,Math.max(0,Math.min(1,o()||0)))}),_(()=>t(O),()=>{s(D,`${t(O)*w} ${w}`)}),_(()=>a(),()=>{s(M,a()==="paused")}),_(()=>(r(),t(M)),()=>{s(nt,r()||(t(M)?"paused":"kiosk"))}),_(()=>i(),()=>{s(W,i())}),_(()=>l(),()=>{s(Y,l())}),_(()=>t(W),()=>{s(U,t(W).length)}),_(()=>(m(),t(U)),()=>{s(F,m().useNotes&&t(U)>0)}),_(()=>(t(F),t(U),t(W),t(Y)),()=>{s(X,t(F)&&t(U)>0?t(W)[Math.min(t(Y),t(U)-1)]??"":"")}),_(()=>(t(F),t(Y),t(U)),()=>{s(tt,t(F)?li(Math.min(t(Y),Math.max(0,t(U)-1)),t(U)):"")}),_(()=>a(),()=>{s(j,a()!=="off")}),_(()=>f(),()=>{s(Q,f())}),_(()=>t(Q),()=>{s(vt,t(Q)?`left:${t(Q).left}px;top:${t(Q).top}px;bottom:auto;right:auto;`:`left:${P}px;bottom:${K}px;top:auto;right:auto;`)}),Dn(),yn();var mt=fn(),lt=Wt(mt);{var Tt=yt=>{var J=Sh();let C;var bt=u(J),At=p(u(bt),2),Et=u(At),Lt=u(Et);I(Lt,"r",et);var Gt=p(Lt);I(Gt,"r",et),d(Et);var Te=p(Et,2),Kt=u(Te,!0);d(Te),d(At);var zt=p(At,2),Nt=p(u(zt),2),kt=u(Nt,!0);d(Nt),d(zt);var Ct=p(zt,2);{var Yt=fe=>{var Jt=xh(),ye=u(Jt,!0);d(Jt),B(()=>gt(ye,t(tt))),h(fe,Jt)};L(Ct,fe=>{t(tt)&&fe(Yt)})}var Ut=p(Ct,4),ce=p(Ut,2);d(bt);var Qt=p(bt,2);{var wt=fe=>{var Jt=_h(),ye=u(Jt,!0);d(Jt),B(()=>gt(ye,t(X))),h(fe,Jt)};L(Qt,fe=>{t(X)&&fe(wt)})}d(J),Re(J,fe=>s(A,fe),()=>t(A)),B(()=>{C=Mt(J,1,"kiosk-panel no-print gp-chrome svelte-11za50q",null,C,{paused:t(M),dragging:t(b),pinned:z(),"has-note":!!t(X)}),I(J,"aria-label",t(M)?"Kiosk paused":t(X)?`Kiosk running, note ${t(tt)}: ${t(X)}`:`Kiosk running (${t(nt)})`),le(J,t(vt)),I(At,"title",t(M)?"Resume kiosk (Alt+. U)":"Pause kiosk (Alt+. U)"),I(At,"aria-label",t(M)?"Resume":"Pause"),I(Gt,"stroke-dasharray",t(D)),gt(Kt,t(M)?"▶":"❚❚"),gt(kt,t(nt))}),G("click",At,nn(function(...fe){var Jt;(Jt=ui)==null||Jt.apply(this,fe)})),G("click",Ut,nn(()=>Cr())),G("click",ce,nn(function(...fe){var Jt;(Jt=ii)==null||Jt.apply(this,fe)})),G("pointerdown",J,pt),G("pointermove",J,ht),G("pointerup",J,it),G("pointercancel",J,it),G("mouseenter",J,ut),G("mouseleave",J,R),h(yt,J)};L(lt,yt=>{t(j)&&yt(Tt)})}h(e,mt),qe(),V()}function Th(e,n){Ue(n,!1);const o=()=>dt(Ko,"$kioskStatus",r),a=()=>dt(Bo,"$kioskHoverFrozen",r),[r,i]=Cn(),l=c();let m=g(n,"pages",24,()=>[]),f=g(n,"currentSlide",8,""),z=g(n,"prefix",8,"./"),x=g(n,"wpm",8,150);const V=Vo();let O=null,D=0,M=0,nt=0,W="",Y="",U="";function F(){return document.querySelector(".content")}function X(){const P=F();if(!P)return!1;const K=qr(P);return K.length?si(K)&&Io(K)<.999:!1}function tt(){const P=fo(m());if(!P.length)return null;const K=P.findIndex($=>$.path===f());return K<0?z()+P[0].path:K<P.length-1?z()+P[K+1].path:z()+P[0].path}function j(){const P=tt();if(!P)return;const K=m().find(A=>A.path===f()),$=(K==null?void 0:K.transition)??"slide";po(P,{viewTransitions:V,kind:$,direction:"forward"})}function Q(P,K){D=performance.now(),M=P,nt=0,W=K,Dr.set(K),Cs.set(0)}function vt(){if(Ee(Ko)!=="running"||Ee(Bo))return;f()!==Y&&(Y=f(),W="",U="",D=0,M=0,nt=0,Cs.set(0));const P=Ee(Wr),K=Ee(Ho),$=Ee(ci),A=Ee(di),b=P.useNotes&&$.length>0&&A<$.length,k=Ee(jc),N=X(),pt=Uc({animBusy:N,mediaBusy:k,hasNextStep:!!(K!=null&&K.hasNext),hasNoteItem:b});if(pt==="wait"){if(k&&!N){W!=="media"&&(D=performance.now(),M=0,nt=0,W="media",Dr.set("video")),Cs.set(Ee(qc));return}W!=="wait"&&Q(0,"wait"),Cs.set(0);return}if(pt==="reveal"){const ut=P.stepMs;(W!=="reveal"||M!==ut)&&Q(ut,"reveal");const R=performance.now()-D;if(Cs.set(br(R,M)),R<M)return;const mt=Ee(Ho);mt!=null&&mt.hasNext&&mt.next(),Q(P.stepMs,"reveal");return}if(pt==="note"){const ut=$[A]??"",R=Wc(ut,P.stepMs,x()),mt=`${f()}:${A}:${ut.slice(0,40)}`,lt=`note ${li(A,$.length)}`;(W!==lt||U!==mt||M!==R)&&(U=mt,Q(R,lt));const Tt=performance.now()-D;if(Cs.set(br(Tt,M)),Tt<M)return;if(Gc()){U="";return}Q(P.pageMs,"page"),j();return}if(W==="media"){Q(0,"page"),j();return}const ht=P.pageMs;(W!=="page"||M!==ht)&&Q(ht,"page");const it=performance.now()-D;Cs.set(br(it,M)),!(it<M)&&(Q(ht,"page"),j())}function et(){O!=null&&(clearInterval(O),O=null)}function w(P){P==="running"?O==null&&(nt>0&&M>0?(D=performance.now()-nt,nt=0):D||(D=performance.now()),O=setInterval(vt,100),vt()):P==="paused"?(O!=null&&D&&(nt=Math.max(0,performance.now()-D)),et()):(et(),D=0,M=0,nt=0,W="",Y="",U="")}Es(et),_(()=>(o(),a()),()=>{s(l,o()==="off"?"off":o()==="paused"||a()?"paused":"running")}),_(()=>t(l),()=>{w(t(l))}),_(()=>(o(),Z(f())),()=>{o()==="running"&&f()&&f()}),Dn(),yn(),qe(),i()}const Ga=2e3,Kr=6e3;function Ah(e,n,o=Kr){if(e==null||!Number.isFinite(e)||e<=0||!Number.isFinite(n))return!1;const a=Number.isFinite(o)&&o>0?o:Kr;return n-e<a}const Nh=Ye(new Map);function Mh(e,n,o,a,r){const i=Math.max(0,Ps(n)),l=Math.max(0,Ps(a)),m=Math.max(0,Ps(r)),f=Ps(e.x),z=Ps(e.y),x=Math.max(0,Ps(e.width)),V=Math.max(0,Ps(e.height));let O=f-i,D=z-i,M=f+x+i,nt=z+V+i;O=zo(O,0,l),D=zo(D,0,m),M=zo(M,O,l),nt=zo(nt,D,m);const W=M-O,Y=nt-D,U=Math.min(Math.max(0,Ps(o)),W/2,Y/2);return{x:O,y:D,width:W,height:Y,radius:U}}function zo(e,n,o){return o<n||e<n?n:e>o?o:e}var Ph=rs('<defs class="svelte-1suzrea"><mask class="svelte-1suzrea"><rect x="0" y="0" fill="white" class="svelte-1suzrea"></rect><rect fill="black" class="svelte-1suzrea"></rect></mask></defs><rect class="spotlight-scrim svelte-1suzrea" x="0" y="0"></rect>',1),$h=rs('<svg aria-hidden="true"><!><rect class="spotlight-ring svelte-1suzrea"></rect></svg>');function Dh(e,n){Ue(n,!0);const o=()=>dt(kl,"$highlightTarget",r),a=()=>dt(Nh,"$blockAnchors",r),[r,i]=Cn();let l=g(n,"pad",3,14),m=g(n,"radius",3,16),f=g(n,"dim",3,.3),z=g(n,"pulse",3,!0),x=g(n,"canvasWidth",3,1920),V=g(n,"canvasHeight",3,1080);const O=He(()=>o()?a().get(o()):void 0),D=He(()=>t(O)?Mh(t(O),l(),m(),x(),V()):null),M=He(()=>`gp-spotlight-hole-${nt(o()??"")}`);function nt(X){return X.replace(/[^a-zA-Z0-9_-]/g,"-")||"x"}const W=He(()=>Math.min(1,Math.max(0,f())));var Y=fn(),U=Wt(Y);{var F=X=>{var tt=$h();let j;var Q=u(tt);{var vt=w=>{var P=Ph(),K=Wt(P),$=u(K),A=u($),b=p(A);d($),d(K);var k=p(K);B(()=>{I($,"id",t(M)),I(A,"width",x()),I(A,"height",V()),I(b,"x",t(D).x),I(b,"y",t(D).y),I(b,"width",t(D).width),I(b,"height",t(D).height),I(b,"rx",t(D).radius),I(b,"ry",t(D).radius),I(k,"width",x()),I(k,"height",V()),I(k,"mask",`url(#${t(M)??""})`),le(k,`opacity:${t(W)??""};`)}),h(w,P)};L(Q,w=>{t(W)>0&&w(vt)})}var et=p(Q);d(tt),B(()=>{j=Mt(tt,0,"spotlight-surface svelte-1suzrea",null,j,{pulse:z()}),I(tt,"viewBox",`0 0 ${x()??""} ${V()??""}`),le(tt,`width:${x()??""}px; height:${V()??""}px; pointer-events:none;`),I(et,"x",t(D).x),I(et,"y",t(D).y),I(et,"width",t(D).width),I(et,"height",t(D).height),I(et,"rx",t(D).radius),I(et,"ry",t(D).radius)}),h(X,tt)};L(U,X=>{t(D)&&X(F)})}h(e,Y),qe(),i()}const Ch=12;function zh(e,n,o=Ch){if(typeof n!="number"||!Number.isFinite(n))return{kind:"none"};const a=Math.floor(n);if(a<1)return{kind:"none"};const r=typeof e=="number"&&Number.isFinite(e)?Math.floor(e):0,i=Math.max(0,Math.min(a,r)),l=i>=a;if(a>o)return{kind:"bar",fraction:i/a,index:i,total:a,spent:l};const m=[];for(let f=0;f<a;f++)m.push(f<i-1?"done":f===i-1?"current":"todo");return{kind:"dots",dots:m,index:i,total:a,spent:l}}const Rh=1e3,tl="SPACE for next step",el="SPACE for next slide";function Lh(e,n){return e.kind==="none"||n.busy||!n.settled?"none":e.spent?n.hasNextSlide?"spent":"none":"next"}function Va(e){return e.kind==="none"?"":`Step ${e.index} of ${e.total}`}const Ih=["top","bottom","left","right","top-left","top-right","bottom-left","bottom-right"];function Oh(e){const n=Ih.includes(e)?e:"bottom",o=n.includes("left")?"start":n.includes("right")?"end":"center",a=n.startsWith("top")?"start":n.startsWith("bottom")?"end":"center";return{position:n,x:o,y:a,vertical:n==="left"||n==="right"}}function Ya(e,n,o,a="var(--stepdots-inset, 36px)"){const r=(l,m)=>l==="start"?a:l==="end"?`calc(${m}px - ${a})`:`${m/2}px`,i=l=>l==="start"?"0":l==="end"?"-100%":"-50%";return`left: ${r(e.x,n)}; top: ${r(e.y,o)}; transform: translate(${i(e.x)}, ${i(e.y)});`}var Fh=E("<span></span>"),Hh=E('<span><span class="fill svelte-1vx0378"></span></span>'),Kh=E("<div><!></div>"),Bh=E('<span class="cue-tip svelte-1vx0378" aria-hidden="true"> </span>'),jh=E('<div role="progressbar" aria-valuemin="0"><!> <!></div>');function Uh(e,n){Ue(n,!1);const o=()=>dt(Ho,"$activeSteps",a),[a,r]=Cn(),i=c(),l=c(),m=c(),f=c();let z=g(n,"canvasWidth",8,1920),x=g(n,"canvasHeight",8,1080),V=g(n,"position",8,"bottom"),O=g(n,"cue",8,!1),D=g(n,"cueDelayMs",8,Rh),M=g(n,"cueNext",8,tl),nt=g(n,"cueSpent",8,el),W=g(n,"hasNextSlide",8,!0),Y=g(n,"style",8,""),U=g(n,"id",8,""),F=g(n,"class",8,""),X=c(!1),tt;function j(w,P,K,$){s(X,!1),clearTimeout(tt),w&&P!=="none"&&!$&&(tt=setTimeout(()=>s(X,!0),D()))}Es(()=>clearTimeout(tt)),_(()=>o(),()=>{var w,P;s(i,zh((w=o())==null?void 0:w.index,(P=o())==null?void 0:P.total))}),_(()=>Z(V()),()=>{s(l,Oh(V()))}),_(()=>o(),()=>{var w;s(m,!!((w=o())!=null&&w.busy))}),_(()=>(Z(O()),t(i),t(m)),()=>{j(O(),t(i).kind,t(i).kind==="none"?0:t(i).index,t(m))}),_(()=>(Z(O()),t(i),t(m),t(X),Z(W())),()=>{s(f,O()?Lh(t(i),{busy:t(m),settled:t(X),hasNextSlide:W()}):"none")}),Dn(),yn();var Q=fn(),vt=Wt(Q);{var et=w=>{var P=jh();let K;var $=u(P);od($,()=>(t(i),ot(()=>t(i).index)),k=>{var N=Kh();let pt;var ht=u(N);{var it=R=>{var mt=fn(),lt=Wt(mt);$n(lt,1,()=>(t(i),ot(()=>t(i).dots)),hs,(Tt,yt,J)=>{var C=Fh();let bt;B(()=>bt=Mt(C,1,`dot ${t(yt)??""}`,"svelte-1vx0378",bt,{next:t(f)==="next"&&J===t(i).index})),h(Tt,C)}),h(R,mt)},ut=R=>{var mt=Hh();let lt;var Tt=u(mt);d(mt),B(yt=>{lt=Mt(mt,1,"bar svelte-1vx0378",null,lt,{next:t(f)==="next"}),le(Tt,`${t(l),ot(()=>t(l).vertical?"height":"width")??""}: ${yt??""}%`)},[()=>(t(i),ot(()=>(t(i).fraction*100).toFixed(3)))]),h(R,mt)};L(ht,R=>{t(i),ot(()=>t(i).kind==="dots")?R(it):R(ut,-1)})}d(N),B(()=>pt=Mt(N,1,"row svelte-1vx0378",null,pt,{spent:t(i).spent})),h(k,N)});var A=p($,2);{var b=k=>{var N=Bh(),pt=u(N,!0);d(N),B(()=>gt(pt,t(f)==="next"?M():nt())),h(k,N)};L(A,k=>{t(f)!=="none"&&k(b)})}d(P),B((k,N)=>{K=Mt(P,1,`step-dots no-print ${F()??""}`,"svelte-1vx0378",K,{vertical:t(l).vertical,cueing:t(f)!=="none"}),I(P,"data-position",(t(l),ot(()=>t(l).position))),I(P,"id",U()||void 0),I(P,"aria-valuemax",(t(i),ot(()=>t(i).total))),I(P,"aria-valuenow",(t(i),ot(()=>t(i).index))),I(P,"aria-label",k),le(P,`${N??""} ${Y()??""}`)},[()=>(Z(Va),t(i),ot(()=>Va(t(i)))),()=>(Z(Ya),t(l),Z(z()),Z(x()),ot(()=>Ya(t(l),z(),x())))]),h(w,P)};L(vt,w=>{t(i),ot(()=>t(i).kind!=="none")&&w(et)})}h(e,Q),qe(),r()}var qh=E('<link rel="icon"/>'),Wh=E("<!> <!> <!> <!> <!> <!> <!>",1),Gh=E('<button type="button" class="annot-tool" title="Kiosk — auto-advance this deck (step, then page, then loop)"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="8" cy="8" r="6"></circle><path d="M6.5 5.5v5l4.5-2.5z" fill="currentColor" stroke="none"></path></svg></span> <span class="tool-label"><span class="tool-mn">K</span>IOSK</span></button>'),Vh=E('<button type="button" class="annot-tool" aria-keyshortcuts="b"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="1.5" y="2" width="13" height="12" rx="1.2"></rect><path d="M1.5 5h13M1.5 11h13"></path></svg></span> <span class="tool-label"> <span class="tool-mn">B</span>ARS</span></button>'),Yh=E('<button type="button" class="annot-tool" aria-keyshortcuts="i"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><path d="M3 2l3.3 11 1.8-4.6L13 6.6z"></path></svg></span> <span class="tool-label"> <span class="tool-mn">I</span>NTER</span></button>'),Xh=E('<button type="button" class="annot-anchor" title="PRESENT — open speaker console"><span class="tool-mn">P</span>RESENT</button>'),Qh=E('<span class="save-flash svelte-1ncjz8m"> </span>'),Jh=E('<span class="save-tip svelte-1ncjz8m" role="status"> </span>'),Zh=E('<span class="save-pop svelte-1ncjz8m"><!> <!></span>'),tm=E('<span><button type="button" class="annot-act save-act" aria-label="Save layout to source" title="SAVE — write the moved blocks back to the source file">SAVE</button> <!></span>'),em=E('<span class="annot-bar-sep" aria-hidden="true"></span> <button type="button">AD<span class="tool-mn">J</span>UST</button> <!>',1),nm=E('<div class="print-sub" role="menu" aria-label="Print options"><button type="button" role="menuitem"><span class="print-sub-label">Current slide</span> <kbd class="print-sub-kbd">c</kbd></button> <button type="button" role="menuitem"><span class="print-sub-label">Current + notes</span> <kbd class="print-sub-kbd">C</kbd></button> <div class="print-menu-sep" role="separator"></div> <button type="button" role="menuitem"><span class="print-sub-label">Whole deck</span> <kbd class="print-sub-kbd">w</kbd></button> <button type="button" role="menuitem"><span class="print-sub-label">Whole + notes</span> <kbd class="print-sub-kbd">W</kbd></button> <div class="print-menu-sep" role="separator"></div> <button type="button" role="menuitem"><span class="print-sub-label">Thumbnail grid</span> <kbd class="print-sub-kbd">t</kbd></button> <button type="button" role="menuitem"><span class="print-sub-label">Notes grid</span> <kbd class="print-sub-kbd">T</kbd></button></div>'),sm=E('<div role="presentation"><button type="button" class="annot-tool" aria-haspopup="menu" title="Print current slide or whole deck (hover for options)"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 6V2h8v4"></path><path d="M4 11H2.5A1.5 1.5 0 0 1 1 9.5v-2A1.5 1.5 0 0 1 2.5 6h11A1.5 1.5 0 0 1 15 7.5v2A1.5 1.5 0 0 1 13.5 11H12"></path><rect x="4" y="11" width="8" height="4" rx="0.5"></rect></svg></span> <span class="tool-label">P<span class="tool-mn">R</span>INT</span> <span class="tool-trail" aria-hidden="true">▸</span></button> <!></div>'),om=E('<span class="tool-mn">C</span>APTURE',1),rm=E('<span class="capture-tip svelte-1ncjz8m" role="status"> </span>'),am=E('<button type="button" class="annot-tool" title="Download this slide as a PNG at canvas resolution"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M2.5 5.5h2l1-1.5h5l1 1.5H13.5A1.5 1.5 0 0 1 15 7v5.5A1.5 1.5 0 0 1 13.5 14h-11A1.5 1.5 0 0 1 1 12.5V7A1.5 1.5 0 0 1 2.5 5.5z"></path><circle cx="8" cy="9.5" r="2.2"></circle></svg></span> <span class="tool-label"><!></span></button> <!>',1),im=E("<span><!></span>"),lm=E('<button type="button" class="annot-tool" title="All slides as a grid (O)" aria-keyshortcuts="o"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor"><rect x="1.5" y="1.5" width="5.5" height="5.5" rx="0.8"></rect><rect x="9" y="1.5" width="5.5" height="5.5" rx="0.8"></rect><rect x="1.5" y="9" width="5.5" height="5.5" rx="0.8"></rect><rect x="9" y="9" width="5.5" height="5.5" rx="0.8"></rect></svg></span> <span class="tool-label"><span class="tool-mn">O</span>VERVIEW</span></button>'),cm=E(`<button type="button" class="annot-tool" title="View this slide's +page.svelte source"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 3.5 2 8l3.5 4.5"></path><path d="M10.5 3.5 14 8l-3.5 4.5"></path></svg></span> <span class="tool-label"><span class="tool-mn">S</span>OURCE</span></button>`),dm=E('<button type="button" class="annot-tool" title="Edit source in a separate window (unscaled)"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 2.5 13.5 4.5 5.5 12.5H3.5v-2z"></path><path d="M10 4l2 2"></path></svg></span> <span class="tool-label"><span class="tool-mn">E</span>DIT</span> <span class="tool-trail tool-ext" aria-hidden="true" title="Opens in a new window"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 3.5H3.5v9h9v-3"></path><path d="M9.5 3.5h3v3"></path><path d="M12.5 3.5 7 9"></path></svg></span></button>'),Xa=E("<!> <!>",1),pm=E("<div><!> <!> <!></div>"),um=E("<!> <!> <!> <!>",1),fm=E('<div class="replay-shield svelte-1ncjz8m" aria-hidden="true"></div>'),vm=E("<!>   <div><div><div><!></div></div></div> <!> <!> <!> <!> <!>",1);function Xm(e,n){Ue(n,!1);const o=()=>dt(qo,"$deckSourceFallback",j),a=()=>dt(Gs,"$displayMode",j),r=()=>dt(Fo,"$displayFactor",j),i=()=>dt(ni,"$recordingLook",j),l=()=>dt(Ur,"$page",j),m=()=>dt(Is,"$chromeArmed",j),f=()=>dt(nr,"$chromeBare",j),z=()=>dt(Xc,"$kioskActive",j),x=()=>dt(Ws,"$replaying",j),V=()=>dt(Ro,"$consoleLive",j),O=()=>dt(Os,"$moreMenuOpen",j),D=()=>dt(Ki,"$canAdjust",j),M=()=>dt(Oo,"$adjustMode",j),nt=()=>dt(ed,"$canKiosk",j),W=()=>dt(Gi,"$pageSourceCanView",j),Y=()=>dt(Vi,"$pageSourceCanEdit",j),U=()=>dt(Yo,"$canAnnotate",j),F=()=>dt(Js,"$canSave",j),X=()=>dt(tv,"$pageSourceHasOwner",j),tt=()=>dt(ea,"$livePointer",j),[j,Q]=Cn(),vt=c(),et=c(),w=c(),P=c(),K=c(),$=c(),A=c(),b=c(),k=c(),N=c(),pt=c(),ht=c(),it=c(),ut=c(),R=c(),mt=c(),lt=c(),Tt=c(),yt=c(),J=c(),C=c(),bt=c(),At=c(),Et=c(),Lt=c(),Gt=c(),Te=c(),Kt=c(),zt=c(),Nt=c(),kt=c(),Ct=c(),Yt=c(),Ut=c();let ce=c(!1),Qt=c(!1),wt=g(n,"pages",24,()=>[]),fe=g(n,"title",8,void 0),Jt=g(n,"description",8,gl),ye=g(n,"image",8,void 0),Le=g(n,"imageAlt",8,void 0),de=g(n,"width",8,1920),ae=g(n,"height",8,1080),Xe=g(n,"baseFontSize",8,"1.5em"),tn=g(n,"deckClass",8,""),sn=g(n,"fill",8,!1),kn=g(n,"contentBackground",8,void 0),as=g(n,"contentFont",8,void 0),is=g(n,"article",8,!1),vn=g(n,"articleText",8,"View as article"),Ie=g(n,"articleHref",8,"../text.html"),wn=g(n,"fadeChrome",8,!1),zn=g(n,"controlBar",8,!0),Yn=g(n,"toolBar",8,!0),jn=g(n,"hideChrome",8,!1),Rn=g(n,"preloadNeighbours",8,!0),Un=g(n,"adjust",8,!1),hn=g(n,"annotate",8,!1),Xn=g(n,"inkStaleAfter",8,24),Ts=g(n,"inkColors",24,()=>[null,"#E5484D","#3FA9F5","#4BD07A","#FFFFFF"]),As=g(n,"levelHighlight",8,!0),S=g(n,"freehand",24,()=>({})),st=g(n,"capture",8,!1),Pt=g(n,"captureScale",8,1),jt=g(n,"kiosk",8,!1),se=g(n,"kioskStepMs",8,ai),We=g(n,"kioskPageMs",8,ri),on=g(n,"kioskWpm",8,Yc),rn=g(n,"onboardHint",8,!0),ms=g(n,"stepDots",8,!0),Ns=g(n,"stepDotsAt",8,"bottom"),qn=g(n,"stepCue",8,!0),T=g(n,"stepCueNext",8,tl),q=g(n,"stepCueSpent",8,el),rt=g(n,"onboardDelayMs",8,qi),It=g(n,"pointer",8,!1),Zt=g(n,"pointerShape",8,"arrow"),ke=g(n,"pointerSize",8,Zr),pe=c(),Rt=c(),oe=c(),Vt=c(a()),$t=Ar(r()),Bt=c(!1),Ot=c(!document.prerendering),$e=c(!1),Ae=c(!1),he=c({left:0,top:0,width:1,height:1});const ee=v=>Math.max(0,Math.min(1,v));function xe(){te()}let De=c(!1);const Oe=Vo();let re=c("CAPTURE"),Ne=c(""),An=c(!1);async function St(){if(!(t(An)||!t(Rt))){s(An,!0),s(re,"…"),s(Ne,"");try{const{blob:v,blockers:H}=await mh(t(Rt),de(),ae(),Pt());H.length>0?(s(Ne,zc(H)),s(re,"NOT ALLOWED")):v?(bh(v,Rc(l().url.pathname)),s(re,"SAVED")):(s(Ne,"The browser refused to draw this slide"),s(re,"FAILED"))}catch{s(Ne,"The browser refused to draw this slide"),s(re,"FAILED")}finally{s(An,!1),setTimeout(()=>{s(re,"CAPTURE"),s(Ne,"")},2600)}}}let ct=c(!1);Os.subscribe(v=>{v||s(ct,!1)});async function Ce(v){s(ct,!1),s(De,v),await co(),window.print()}function me(v){s(ct,!1),window.location.assign(`${io}/_handout/${t(Kt)}.html${v}`)}function Dt(v){if(!t(ct)||v.ctrlKey||v.metaKey||v.altKey)return!1;if(v.key==="Escape")return v.preventDefault(),s(ct,!1),!0;const at={c:()=>Ce(!1),C:()=>Ce(!0),w:()=>me(""),W:()=>me("?notes"),t:()=>me("?grid"),T:()=>me("?grid&notes")}[v.key];return at?(v.preventDefault(),at(),es(),!0):!1}let ge=c();function _e(){var at;const v=(at=t(ge))==null?void 0:at.querySelector(".annot-tools");return v?[...v.querySelectorAll(":scope > button, :scope > .save-btn > button, :scope > .mode button, :scope > .annot-menu > .annot-hamburger")].filter(xt=>xt instanceof HTMLElement&&!xt.disabled):[]}function en(){var H;const v=(H=t(ge))==null?void 0:H.querySelector(".annot-drop");return v?[...v.querySelectorAll("button.annot-tool")].filter(at=>at instanceof HTMLElement&&!at.disabled):[]}function mn(){var H;const v=(H=t(ge))==null?void 0:H.querySelector(".print-sub");return v?[...v.querySelectorAll("button")].filter(at=>!at.disabled):[]}function Be(v){var H;v&&(v.focus(),(H=v.scrollIntoView)==null||H.call(v,{block:"nearest"}))}function Ln(v){var be,Qe;const H=ev(v);if(!H||Qs(v.target))return!1;const at=(be=t(ge))==null?void 0:be.querySelector(".annot-tools");if(!at||at.querySelector(".mode.expanded"))return!1;const xt=_e(),Ft=en(),ie=mn(),_t=document.activeElement,Me=at.querySelector(".annot-hamburger"),Pe=at.querySelector(".annot-drop"),we=at.querySelector(".print-sub"),Jn=at.querySelector(".print-flyout > .annot-tool"),ne=nv({armed:m(),moreOpen:O(),printOpen:t(ct),focusInPrint:!!(we&&_t&&we.contains(_t)),focusInMoreDrop:!!(Pe&&_t&&Pe.contains(_t)),focusOnHamburger:!!(Me&&_t&&(_t===Me||Me.contains(_t))),focusOnBar:!!(_t&&at.contains(_t)&&!(Pe&&Pe.contains(_t)))});if(ne==="none")return!1;if(ne==="bar"){if(H==="down"&&Me&&_t&&(_t===Me||Me.contains(_t)))return v.preventDefault(),Aa(),Hn(),queueMicrotask(()=>Be(en()[0]??Me)),!0;if(H!=="left"&&H!=="right")return!1;const Ge=no(xt,_t),ze=so("bar",H,Ge,xt.length);return ze==null||!xt.length?!1:(v.preventDefault(),Be(xt[ze]),Hn(),!0)}if(ne==="more"){const Ge=!!(Me&&_t&&(_t===Me||Me.contains(_t))),ze=!!(Pe&&_t&&Pe.contains(_t));if((H==="left"||H==="right")&&!Ge&&!ze){const Zn=no(xt,_t),Se=so("bar",H,Zn,xt.length);return Se==null||!xt.length?!1:(v.preventDefault(),Be(xt[Se]),Hn(),!0)}if(H==="right"&&_t&&((Qe=_t.closest)!=null&&Qe.call(_t,".print-flyout")))return v.preventDefault(),s(ct,!0),Hn(),queueMicrotask(()=>Be(mn()[0]??Jn)),!0;if(H==="left"){if(ze)return v.preventDefault(),Be(Me),Hn(),!0;if(Ge){const Zn=no(xt,Me),Se=so("bar","left",Zn,xt.length);return Se==null?!1:(v.preventDefault(),Be(xt[Se]),Hn(),!0)}}if(H==="right"&&Ge){const Zn=no(xt,Me),Se=so("bar","right",Zn,xt.length);return Se==null?!1:(v.preventDefault(),Be(xt[Se]),Hn(),!0)}let En=no(Ft,_t);Ge&&(En=-1);const Fn=so("more",H,En,Ft.length);return Fn==null?!1:(v.preventDefault(),Fn<0?Be(Me):Be(Ft[Fn]),Hn(),!0)}if(ne==="print"){const Ge=no(ie,_t),ze=so("print",H,Ge,ie.length);return ze==null?!1:(v.preventDefault(),ze<0?(s(ct,!1),Be(Jn)):Be(ie[ze]),Hn(),!0)}return!1}function In(v){var Ft;if(gu(v,D()&&M())){v.preventDefault(),Wn();return}if(Dt(v)||Ln(v))return;const H=bu(v,O(),m());if(H!=="ignore"){switch(v.preventDefault(),O()||Aa(),H){case"overview":ks.set(!0),es();break;case"kiosk":z()?pi.update(ie=>!ie):nt()&&Cr(),es();break;case"bars":es(),$o();return;case"pointer":Do(),es();break;case"capture":t(Te)&&St(),es();break;case"print":s(ct,!0),Hn();break;case"source":W()&&Oa(),es();break;case"edit":Y()&&wr(),es();break}Hn();return}function at(){var ie,_t,Me;if(es(),s(ct,!1),document.activeElement instanceof HTMLElement){const Pe=document.activeElement;((ie=Pe.closest)!=null&&ie.call(Pe,".overlay")||(_t=Pe.closest)!=null&&_t.call(Pe,".annot-tools")||(Me=Pe.closest)!=null&&Me.call(Pe,".ctrl-bar"))&&Pe.blur()}xi()}const xt=yu(v,m());if(xt!=="ignore")switch(v.preventDefault(),xt){case"arm":Zo(),queueMicrotask(()=>Be(_e()[0]));return;case"disarm":at();return;case"annotate":U()&&ao.update(ie=>!ie),at();return;case"adjust":D()&&Oo.update(ie=>!ie),at();return;case"display":sp();return;case"present":Qn(),Hn();return;case"more":{const ie=_i(),_t=(Ft=t(ge))==null?void 0:Ft.querySelector(".annot-hamburger");ie?_t==null||_t.focus():_t==null||_t.blur(),Hn();return}case"toc":np();return;case"kiosk-pause":z()&&ui(),Hn();return}}let an=c("SAVE"),gn=c(!1),ve=c(0),ln=c([]),ls;const gs={"not-found":"The tag isn't in the source in its literal form (geometry written as expressions, or a reformatted tag), so there is nothing to rewrite — Copy it and paste by hand.",ambiguous:"A tag whose name AND geometry match another (a code sample of itself, say) is ambiguous, so it is never guessed at — Copy that one by hand."};function cn(v,H){s(an,v),clearTimeout(ls),ls=setTimeout(()=>{s(an,"SAVE"),s(gn,!1),s(ve,0),s(ln,[])},H)}async function Wn(){if(!F()){s(gn,!0),cn("NOT ALLOWED",2600);return}const v=await Sv();v.ok?v.patched===0&&v.unmatched.length===0?cn("NONE",1600):v.unmatched.length?(s(gn,!0),s(ve,v.unmatched.length),s(ln,[...new Set(v.unmatched.map(H=>H.reason))]),cn(`${v.patched} OF ${v.patched+v.unmatched.length}`,2600),console.warn("[adjust save] not written — Copy these by hand:",v.unmatched)):(cn("SAVED",1600),setTimeout(()=>location.reload(),550)):(cn("ERROR",1600),console.error("[adjust save] failed:",v.error))}function Qn(){Hl(window.location.href,Nr(window.location.pathname))}function te(){if(!t(pe)||!t(Rt)||t(Vt)!=="SCALED"||t(b)){s(Ae,!1);return}const v=t(pe).clientWidth,H=t(pe).clientHeight,at=t(Rt).offsetWidth,xt=t(Rt).offsetHeight;s(Ae,at>v+1||xt>H+1),t(Ae)&&s(he,{left:ee(t(pe).scrollLeft/at),top:ee(t(pe).scrollTop/xt),width:ee(v/at),height:ee(H/xt)})}function Ht(){!t(pe)||!t(Rt)||(Kn(pe,t(pe).scrollLeft=Math.max(0,(t(Rt).offsetWidth-t(pe).clientWidth)/2)),Kn(pe,t(pe).scrollTop=Math.max(0,(t(Rt).offsetHeight-t(pe).clientHeight)/2)))}function ue(v=!1){if(!t(Rt)||t(k)||t(N))return;if(t(Vt)==="SCALED"){Kn(Rt,t(Rt).style.width=`${Math.round(de()*$t)}px`),Kn(Rt,t(Rt).style.height=`${Math.round(ae()*$t)}px`),Kn(oe,t(oe).style.transform=`scale(${$t})`),Kn(oe,t(oe).style.transformOrigin="top left"),t(oe).style.setProperty("--view-scale",String($t)),v&&Ht(),xe();return}window.innerWidth/window.innerHeight>t(et)?(Kn(Rt,t(Rt).style.height="calc(100vh - 10px)"),Kn(Rt,t(Rt).style.width=`${Math.round(t(Rt).clientHeight*t(et))}px`)):(Kn(Rt,t(Rt).style.width="calc(100vw - 10px)"),Kn(Rt,t(Rt).style.height=`${Math.round(t(Rt).clientWidth/t(et))}px`));const at=sn()?de():de()+50,xt=ae(),Ft=Math.min(t(Rt).clientWidth/at,t(Rt).clientHeight/xt);Kn(oe,t(oe).style.transform=`scale(${Ft})`),Kn(oe,t(oe).style.transformOrigin="center center"),t(oe).style.setProperty("--view-scale",String(Ft)),xe()}function Fe(v){document.body.classList.add("rendering"),ue(v),document.body.classList.remove("rendering")}function xn(v){const H=document.querySelector(".content");if(!H)return;const at=qr(H);at.length&&_c(at,v)}function Nn(v){var H;switch(v.kind){case"goto":{const at=gc(v.href,t(ut));if(at===l().url.pathname.replace(/\/+$/,"")+l().url.search){mr(),window.location.reload();return}const xt=v.back?"back":"forward",Ft=wt().find(_t=>_t.path===t(w)),ie=(v.back?Ft==null?void 0:Ft.transitionBack:Ft==null?void 0:Ft.transition)??"slide";po(at,{viewTransitions:Oe,kind:ie,direction:xt,arriveAtEnd:v.end===!0});return}case"step":{const at=Ee(Ho);v.back?(H=at==null?void 0:at.prev)==null||H.call(at):at==null||at.next();return}case"continue":window.dispatchEvent(new CustomEvent("gp:slide-continue"));return;case"anim":xn(v);return;case"trigger":fa(v.name);return;case"highlight":ur(v.name);return}}function cs(v){var xt;const H=document.getElementById("gp-preload");if((H==null?void 0:H.textContent)===v||(H==null||H.remove(),!v||!((xt=HTMLScriptElement.supports)!=null&&xt.call(HTMLScriptElement,"speculationrules"))))return;const at=document.createElement("script");at.type="speculationrules",at.id="gp-preload",at.textContent=v,document.head.appendChild(at)}os(()=>{if(t(Ot))return On();let v;const H=()=>{s(Ot,!0),v=On()};return document.addEventListener("prerenderingchange",H,{once:!0}),()=>{document.removeEventListener("prerenderingchange",H),v==null||v()}});function On(){const v=Gs.subscribe(ne=>{t($e)||(s(Vt,ne),t(Bt)&&Fe(!0))}),H=Fo.subscribe(ne=>{$t=Ar(ne),t(Bt)&&Fe(!0)}),at=()=>ue(!1);window.addEventListener("resize",at),Vc(new URL(window.location.href));const xt=()=>{s(De,!1)};window.addEventListener("afterprint",xt);const Ft=window.self===window.top?Pl(t(ut),ne=>{if(!ne||ne===t(w)||Ee(Ws))return;const be=t(k)?`./${ne}?present`:`./${ne}`,Qe=wt().findIndex(Fn=>Fn.path===ne),Ge=Qe>=0&&Qe<(t(P)??0)?"back":"forward",ze=wt().find(Fn=>Fn.path===t(w)),En=(Ge==="back"?ze==null?void 0:ze.transitionBack:ze==null?void 0:ze.transition)??"slide";po(be,{viewTransitions:Oe,kind:En,direction:Ge})},t(mt)):()=>{},ie=window.self===window.top?$l(t(ut),ne=>{Ee(Ws)||(xn(ne),hc({kind:"anim",...ne}))}):()=>{},_t=window.self===window.top?Dl(t(ut),()=>{Ee(Ws)||window.dispatchEvent(new CustomEvent("gp:continue"))}):()=>{},Me=window.self===window.top?Cl(t(ut),ne=>{Ee(Ws)||ur(ne)}):()=>{},Pe=window.self===window.top?zl(t(ut),ne=>{Ee(Ws)||fa(ne)}):()=>{};let we=()=>{};if(t(k)){ha(t(ut));const ne=window.setInterval(()=>ha(t(ut)),Ga);we=()=>window.clearInterval(ne)}else if(window.self===window.top){let ne=Rl(t(ut));const be=()=>Ro.set(Ah(ne,Date.now(),Kr));be();const Qe=Ll(t(ut),ze=>{ne=ze,be()}),Ge=window.setInterval(be,Ga);we=()=>{Qe(),window.clearInterval(Ge),Ro.set(!1)}}let Jn=()=>{};if(!t(k)&&window.self===window.top){wa(t(ut));const ne=uc(t(ut)),be=()=>vc({type:"here",deck:t(ut),here:{href:l().url.pathname+l().url.search,path:l().url.pathname.replace(/\/+$/,""),width:de(),height:ae(),title:t(kt)}}),Qe=fc(t(ut),En=>{En.type==="hello"?be():En.type==="cmd"&&Ee(mc)!=="idle"&&Nn(En.action)}),Ge=En=>{Ee(Ws)&&(En.stopImmediatePropagation(),En.preventDefault())};window.addEventListener("keydown",Ge,!0),window.addEventListener("pagehide",mr);let ze=requestAnimationFrame(()=>{ze=requestAnimationFrame(be)});Jn=()=>{cancelAnimationFrame(ze),Qe(),ne(),wa(null),window.removeEventListener("keydown",Ge,!0),window.removeEventListener("pagehide",mr)}}return s(Bt,!0),Fe(!0),()=>{v(),H(),Ft(),ie(),_t(),Me(),Pe(),we(),Jn(),ur(null),window.removeEventListener("resize",at),window.removeEventListener("afterprint",xt)}}_(()=>(o(),t(Qt),t(ce),Ir),()=>{const v=!!o();v&&!t(Qt)&&s(ce,!0),v||s(ce,!1),v&&t(Qt)&&!t(ce)&&Ir(),s(Qt,v)}),_(()=>(t(Bt),i(),t($e),Gs),()=>{t(Bt)&&i()!==t($e)&&(s($e,i()),s(Vt,t($e)?"FITTED":Ee(Gs)),Fe(!0))}),_(()=>t(Vt),()=>{s(vt,t(Vt)==="FITTED")}),_(()=>(Z(de()),Z(ae())),()=>{s(et,de()/ae())}),_(()=>l(),()=>{s(w,l().url.pathname.replace(/\/+$/,"").split("/").pop())}),_(()=>(Z(wt()),t(w)),()=>{s(P,wt().findIndex(v=>v.path===t(w)))}),_(()=>(l(),io),()=>{s(Kt,(()=>{var at;const v=l().url.pathname.replace(io,"").split("/").filter(Boolean);return v.length===0?"":((at=v[v.length-1])!=null&&at.endsWith(".html")?v.slice(0,-1):v).join("-")})())}),_(()=>(t(Ot),l(),t(Kt),Z(wt())),()=>{t(Ot)&&ap(l().url.searchParams,t(Kt),sessionStorage,wt())}),_(()=>(t(Ot),l(),t(Kt),Z(wt())),()=>{s(K,t(Ot)?rp(l().url.searchParams,t(Kt),sessionStorage,wt()):[])}),_(()=>(Z(wt()),t(w),t(K)),()=>{s($,ip(Ja(wt(),t(w)??"","./"),t(K)))}),_(()=>(Z(wt()),t(w)),()=>{var v;s(A,(v=wt().find(H=>H.path===t(w)))==null?void 0:v.favicon)}),_(()=>l(),()=>{s(b,l().url.searchParams.has("clean")||l().url.searchParams.has("shot"))}),_(()=>l(),()=>{s(k,l().url.searchParams.has("present"))}),_(()=>t(k),()=>{Il.set(t(k))}),_(()=>l(),()=>{s(N,l().url.searchParams.has("shot"))}),_(()=>l(),()=>{s(pt,l().url.searchParams.has("onboard"))}),_(()=>(l(),t(De)),()=>{s(ht,l().url.searchParams.has("notes")||t(De))}),_(()=>t(ht),()=>{wl.set(t(ht))}),_(()=>(Z(de()),Z(ae()),t(ht)),()=>{s(it,Mc({width:de(),height:ae()},t(ht)))}),_(()=>t(it),()=>{Pc($c(t(it)))}),_(()=>l(),()=>{s(ut,Nr(l().url.pathname))}),_(()=>Er,()=>{s(R,window.self===window.top)}),_(()=>t(k),()=>{s(mt,Ol(t(k)))}),_(()=>(t(R),t(Ot),t(w),t(ut),t(mt)),()=>{t(R)&&t(Ot)&&t(w)&&Fl(t(ut),t(w),t(mt))}),_(()=>(t(R),t(Ot),t(b),t(k),Z(wt()),t(w),zs),()=>{t(R)&&t(Ot)&&!t(b)&&!t(k)&&jf(wt(),t(w)??"")&&zs()}),_(()=>(t(ge),zs),()=>{t(ge)&&(t(ge).addEventListener("pointerover",zs),t(ge).addEventListener("focusin",zs))}),_(()=>(m(),t(k),zs),()=>{m()&&!t(k)&&zs()}),_(()=>(Z(wt()),t(w)),()=>{s(lt,Bf(wt(),t(w)??""))}),_(()=>(t(R),t(Ot),f(),z(),x(),i()),()=>{s(Tt,!t(R)||!t(Ot)||f()||z()||x()||i())}),_(()=>(Z(wt()),t(w)),()=>{var v;s(yt,((v=wt().find(H=>H.path===t(w)))==null?void 0:v.adjust)===!0)}),_(()=>(Z(wt()),t(w)),()=>{var v;s(J,(v=wt().find(H=>H.path===t(w)))==null?void 0:v.stepDots)}),_(()=>(Z(ms()),t(b),t(J)),()=>{s(C,ms()&&!t(b)&&t(J)!==!1)}),_(()=>(t(J),Z(Ns())),()=>{s(bt,typeof t(J)=="string"?t(J):Ns())}),_(()=>(Z(qn()),Z(wt()),t(w),t(R),z(),V(),i(),x()),()=>{var v;s(At,qn()&&((v=wt().find(H=>H.path===t(w)))==null?void 0:v.stepCue)!==!1&&t(R)&&!z()&&!V()&&!i()&&!x())}),_(()=>(Z(wt()),t(w)),()=>{s(Et,ld(wt(),t(w)??""))}),_(()=>t(Et),()=>{s(Lt,!t(Et).present||t(Et).position<t(Et).total)}),_(()=>(t(yt),Z(Un())),()=>{s(Gt,t(yt)||Un())}),_(()=>t(Gt),()=>{Yu(t(Gt))}),_(()=>l(),()=>{Xu(l().url)}),_(()=>Z(hn()),()=>{ql(hn())}),_(()=>l(),()=>{Wl(l().url)}),_(()=>Z(jn()),()=>{hu(jn())}),_(()=>l(),()=>{mu(l().url)}),_(()=>Z(It()),()=>{kf(It())}),_(()=>l(),()=>{wf(l().url)}),_(()=>Z(Xn()),()=>{Gl.set(Math.max(0,Number(Xn())||24)*60*60*1e3)}),_(()=>l(),()=>{Vl(l().url.pathname.replace(/\/+$/,""))}),_(()=>l(),()=>{{const v=Dc(l().url.searchParams);v!==null&&localStorage.setItem("canCapture",String(v))}}),_(()=>Z(st()),()=>{s(Te,Cc(!1,Jo(localStorage.getItem("canCapture")),st()))}),_(()=>(Z(se()),Z(We()),l(),Z(jt())),()=>{Qc.set({stepMs:se(),pageMs:We(),useNotes:!1}),Jc(l().url),Zc(td(!1,jt()))}),_(()=>(t(ve),t(ln)),()=>{s(zt,t(ve)?`${t(ve)===1?"1 tag":`${t(ve)} tags`} not written — see the console. `+(t(ln).length?t(ln):["not-found"]).map(v=>gs[v]).join(" "):"Save not allowed in this setup.")}),_(()=>(Z(wt()),t(w)),()=>{var v;s(Nt,(v=wt().find(H=>H.path===t(w)))==null?void 0:v.title)}),_(()=>(t(Nt),Z(fe())),()=>{s(kt,bl(t(Nt),fe()))}),_(()=>(Z(wt()),t(w),Z(Jt())),()=>{var v;s(Ct,((v=wt().find(H=>H.path===t(w)))==null?void 0:v.description)??Jt())}),_(()=>(Z(wt()),t(w),Z(ye())),()=>{var v;s(Yt,((v=wt().find(H=>H.path===t(w)))==null?void 0:v.image)??ye())}),_(()=>(Z(wt()),t(w),Z(Le())),()=>{var v;s(Ut,((v=wt().find(H=>H.path===t(w)))==null?void 0:v.imageAlt)??Le())}),_(()=>(t(Ot),Z(Rn()),t(R),t(N),t($),t(k)),()=>{t(Ot)&&cs(Rn()&&t(R)&&!Oe&&!t(N)?mv(hv(t($),t(k))):"")}),Dn(),yn();var Ms=vm();fl("1ncjz8m",v=>{var H=fn(),at=Wt(H);{var xt=Ft=>{var ie=qh();B(()=>I(ie,"href",t(A))),h(Ft,ie)};L(at,Ft=>{t(A)&&Ft(xt)})}h(v,H)}),G("keydown",So,In);var Fs=Wt(Ms);ml(Fs,{get title(){return t(kt)},get description(){return t(Ct)},get image(){return t(Yt)},get imageAlt(){return t(Ut)},type:"website"});var _n=p(Fs,2);let Gn;var Sn=u(_n);let Hs;var Mn=u(Sn);let vo;var or=u(Mn);{var rr=v=>{var H=Wh(),at=Wt(H);jr(at,n,"default",{},null);var xt=p(at,2);Dh(xt,{get canvasWidth(){return de()},get canvasHeight(){return ae()}});var Ft=p(xt,2);{var ie=be=>{Uh(be,{get canvasWidth(){return de()},get canvasHeight(){return ae()},get position(){return t(bt)},get cue(){return t(At)},get cueNext(){return T()},get cueSpent(){return q()},get hasNextSlide(){return t(Lt)}})};L(Ft,be=>{t(C)&&be(ie)})}var _t=p(Ft,2);ph(_t,{get canvasWidth(){return de()},get canvasHeight(){return ae()},get inkColors(){return Ts()},get levelHighlight(){return As()},get freehand(){return S()}});var Me=p(_t,2);{var Pe=be=>{{let Qe=un(()=>t(w)??"");Pa(be,{get pages(){return wt()},get width(){return de()},get height(){return ae()},get currentPath(){return t(Qe)},get deck(){return t(Kt)}})}};L(Me,be=>{!t(b)&&!t(k)&&be(Pe)})}var we=p(Me,2);{var Jn=be=>{vv(be,{get code(){return o(),ot(()=>o().code)},language:"html",get title(){return o(),ot(()=>o().path)},readOnly:!0,edit:!0,class:"gp-chrome no-print",get expanded(){return t(ce)},set expanded(Qe){s(ce,Qe)},$$events:{edit:()=>wr()},$$legacy:!0})};L(we,be=>{o()&&!X()&&be(Jn)})}var ne=p(we,2);dd(ne,{}),h(v,H)};L(or,v=>{t(Bt)&&v(rr)})}d(Mn),Re(Mn,v=>s(oe,v),()=>t(oe)),d(Sn),Re(Sn,v=>s(Rt,v),()=>t(Rt)),d(_n),Re(_n,v=>s(pe,v),()=>t(pe));var Ao=p(_n,2);{var Ks=v=>{var H=pm();let at;var xt=u(H);{var Ft=we=>{Mu(we,{get width(){return de()},get height(){return ae()},kioskItem:Se=>{var Xt=fn(),dn=Wt(Xt);{var Pn=bn=>{var Vn=Gh();G("click",Vn,()=>{Cr(),document.activeElement instanceof HTMLElement&&document.activeElement.blur()}),h(bn,Vn)};L(dn,bn=>{nt()&&bn(Pn)})}h(Se,Xt)},barsItem:Se=>{var Xt=Vh(),dn=p(u(Xt),2),Pn=u(dn);Ke(2),d(dn),d(Xt),B(()=>{I(Xt,"title",f()?"Show the tool bar and the control bar again (B)":"Hide the tool bar and the control bar — Alt+. brings them back (B)"),gt(Pn,`${f()?"SHOW":"HIDE"} `)}),G("click",Xt,function(...bn){$o==null||$o.apply(this,bn)}),h(Se,Xt)},pointerItem:Se=>{var Xt=Yh(),dn=p(u(Xt),2),Pn=u(dn);Ke(2),d(dn),d(Xt),B(()=>{I(Xt,"title",tt()?"Stop drawing the pointer — show the real cursor again (I)":"Draw a pointer where the mouse is, for screen recorders that leave the cursor out (I)"),I(Xt,"aria-pressed",tt()),gt(Pn,`${tt()?"HIDE":"DRAW"} PO`)}),G("click",Xt,function(...bn){Do==null||Do.apply(this,bn)}),h(Se,Xt)},presentBtn:Se=>{var Xt=Xh();G("click",Xt,Qn),h(Se,Xt)},adjustGroup:Se=>{var Xt=fn(),dn=Wt(Xt);{var Pn=bn=>{var Vn=em(),Ve=p(Wt(Vn),2);let pn;var Bs=p(Ve,2);{var Zs=bs=>{var xs=tm();let js;var to=u(xs),ts=p(to,2);{var ys=mo=>{var lr=Zh(),ra=u(lr);{var nl=Us=>{var qs=Qh(),cr=u(qs,!0);d(qs),B(()=>gt(cr,t(an))),h(Us,qs)};L(ra,Us=>{t(an)!=="SAVE"&&Us(nl)})}var sl=p(ra,2);{var ol=Us=>{var qs=Jh(),cr=u(qs,!0);d(qs),B(()=>gt(cr,t(zt))),h(Us,qs)};L(sl,Us=>{t(gn)&&Us(ol)})}d(lr),h(mo,lr)};L(ts,mo=>{(t(an)!=="SAVE"||t(gn))&&mo(ys)})}d(xs),B(()=>js=Mt(xs,1,"save-btn svelte-1ncjz8m",null,js,{refused:t(gn)})),G("click",to,Wn),h(bs,xs)};L(Bs,bs=>{M()&&bs(Zs)})}B(()=>{pn=Mt(Ve,1,"annot-tab adjust-tab",null,pn,{on:M()}),I(Ve,"aria-pressed",M()),I(Ve,"aria-label",M()?"ADJUST on":"ADJUST off"),I(Ve,"title",M()?"ADJUST — placing blocks by hand (click to stop)":"ADJUST — drag and resize blocks at exact pixels")}),G("click",Ve,()=>Oo.update(bs=>!bs)),h(bn,Vn)};L(dn,bn=>{D()&&bn(Pn)})}h(Se,Xt)},printBtn:Se=>{var Xt=sm();let dn;var Pn=u(Xt),bn=p(Pn,2);{var Vn=Ve=>{var pn=nm(),Bs=u(pn),Zs=p(Bs,2),bs=p(Zs,4),xs=p(bs,2),js=p(xs,4),to=p(js,2);d(pn),G("click",Bs,()=>Ce(!1)),G("click",Zs,()=>Ce(!0)),G("click",bs,()=>me("")),G("click",xs,()=>me("?notes")),G("click",js,()=>me("?grid")),G("click",to,()=>me("?grid&notes")),h(Ve,pn)};L(bn,Ve=>{t(ct)&&Ve(Vn)})}d(Xt),B(()=>{dn=Mt(Xt,1,"print-flyout",null,dn,{open:t(ct)}),I(Pn,"aria-expanded",t(ct))}),G("click",Pn,nn(()=>s(ct,!t(ct)))),G("mouseenter",Xt,()=>s(ct,!0)),G("mouseleave",Xt,()=>s(ct,!1)),h(Se,Xt)},captureItem:Se=>{var Xt=im();let dn;var Pn=u(Xt);{var bn=Vn=>{var Ve=am(),pn=Wt(Ve),Bs=p(u(pn),2),Zs=u(Bs);{var bs=ts=>{var ys=om();Ke(),h(ts,ys)},xs=ts=>{var ys=ns();B(()=>gt(ys,t(re))),h(ts,ys)};L(Zs,ts=>{t(re)==="CAPTURE"?ts(bs):ts(xs,-1)})}d(Bs),d(pn);var js=p(pn,2);{var to=ts=>{var ys=rm(),mo=u(ys,!0);d(ys),B(()=>gt(mo,t(Ne))),h(ts,ys)};L(js,ts=>{t(Ne)&&ts(to)})}B(()=>pn.disabled=t(An)),G("click",pn,St),h(Vn,Ve)};L(Pn,Vn=>{t(Te)&&Vn(bn)})}d(Xt),B(()=>dn=Mt(Xt,1,"capture-btn svelte-1ncjz8m",null,dn,{refused:!!t(Ne)})),h(Se,Xt)},overviewBtn:Se=>{var Xt=lm();G("click",Xt,()=>{ks.set(!0),document.activeElement instanceof HTMLElement&&document.activeElement.blur()}),h(Se,Xt)},sourceItem:Se=>{var Xt=Xa(),dn=Wt(Xt);{var Pn=Ve=>{var pn=cm();G("click",pn,()=>Oa()),h(Ve,pn)};L(dn,Ve=>{W()&&Ve(Pn)})}var bn=p(dn,2);{var Vn=Ve=>{var pn=dm();G("click",pn,()=>wr()),h(Ve,pn)};L(bn,Ve=>{Y()&&Ve(Vn)})}h(Se,Xt)},$$slots:{kioskItem:!0,barsItem:!0,pointerItem:!0,presentBtn:!0,adjustGroup:!0,printBtn:!0,captureItem:!0,overviewBtn:!0,sourceItem:!0}})};L(xt,we=>{Yn()&&we(Ft)})}var ie=p(xt,2);{var _t=we=>{Du(we,{tocItem:be=>{gp(be,{bar:!0,get pages(){return wt()},get deck(){return t(Kt)},get article(){return is()},get articleText(){return vn()},get articleHref(){return Ie()},get returnTo(){return t(K)}})},navGroup:be=>{{let Qe=un(()=>(t($),ot(()=>t($).first??""))),Ge=un(()=>(t($),ot(()=>t($).prev??""))),ze=un(()=>(t($),ot(()=>t($).next??""))),En=un(()=>(t($),ot(()=>t($).last??"")));yl(be,{deckLevel:!0,get firstLink(){return t(Qe)},get prevLink(){return t(Ge)},get nextLink(){return t(ze)},get lastLink(){return t(En)}})}},$$slots:{tocItem:!0,navGroup:!0}})};L(ie,we=>{zn()&&we(_t)})}var Me=p(ie,2);{var Pe=we=>{zu(we,{get width(){return de()},get height(){return ae()},get rect(){return t(he)}})};L(Me,we=>{t(Ae)&&we(Pe)})}d(H),Re(H,we=>s(ge,we),()=>t(ge)),B(()=>{at=Mt(H,1,"overlay svelte-1ncjz8m",null,at,{"fade-chrome":wn()}),le(H,`--base-font:${Xe()??""};`)}),h(v,H)};L(Ao,v=>{t(Bt)&&!t(b)&&!t(k)&&(Yn()||zn())&&v(Ks)})}var ho=p(Ao,2);{var ar=v=>{var H=um(),at=Wt(H);wh(at,{});var xt=p(at,2);Eh(xt,{});var Ft=p(xt,2);{let _t=un(()=>t(w)??"");Th(Ft,{get pages(){return wt()},get currentSlide(){return t(_t)},prefix:"./",get wpm(){return on()}})}var ie=p(Ft,2);{let _t=un(()=>Yn()||zn());Qf(ie,{get offered(){return rn()},get firstSlide(){return t(lt)},get suppressed(){return t(Tt)},get bars(){return t(_t)},get delayMs(){return rt()},get force(){return t(pt)},get themeClass(){return tn()}})}h(v,H)};L(ho,v=>{t(Bt)&&Er&&!t(b)&&!t(k)&&v(ar)})}var No=p(ho,2);{var ir=v=>{var H=fm();h(v,H)};L(No,v=>{x()&&!t(k)&&v(ir)})}var y=p(No,2);{var ft=v=>{Nf(v,{get shape(){return Zt()},get size(){return ke()}})};L(y,v=>{t(R)&&!t(k)&&v(ft)})}var qt=p(y,2);{var je=v=>{var H=Xa(),at=Wt(H);vf(at,{get pages(){return wt()},get width(){return de()},get height(){return ae()}});var xt=p(at,2);{let Ft=un(()=>t(w)??"");Pa(xt,{get pages(){return wt()},get width(){return de()},get height(){return ae()},get currentPath(){return t(Ft)},get deck(){return t(Kt)},get present(){return t(k)}})}h(v,H)};L(qt,v=>{t(Bt)&&t(k)&&v(je)})}B(()=>{Gn=Mt(_n,1,"viewport svelte-1ncjz8m",null,Gn,{zoom:!t(vt),shot:t(N)}),Hs=Mt(Sn,1,`container ${tn()??""}`,"svelte-1ncjz8m",Hs,{"fit-mode":t(vt),"zoom-mode":!t(vt),clean:t(b),present:t(k),shot:t(N),"fade-chrome":wn(),"print-notes":t(ht)}),le(Sn,`--canvas-w:${de()??""}px; --canvas-h:${ae()??""}px; --aspect:${t(et)??""}; --base-font:${Xe()??""}; --print-scale:${t(it),ot(()=>t(it).scale)??""}; --print-w:${t(it),ot(()=>t(it).slideWidthPx)??""}px; --print-h:${t(it),ot(()=>t(it).slideHeightPx)??""}px; --print-notes-h:${t(it),ot(()=>t(it).notesHeightPx)??""}px;${kn()?` --content-bg:${kn()};`:""}${as()?` --content-font:${as()};`:""}`),vo=Mt(Mn,1,"content svelte-1ncjz8m",null,vo,{fill:sn(),ready:t(Bt)})}),G("scroll",_n,xe),h(e,Ms),qe(),Q()}export{Xm as S};
