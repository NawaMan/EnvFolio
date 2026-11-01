var rl=Object.defineProperty;var aa=e=>{throw TypeError(e)};var al=(e,n,s)=>n in e?rl(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s;var ia=(e,n,s)=>al(e,typeof n!="symbol"?n+"":n,s),dr=(e,n,s)=>n.has(e)||aa("Cannot "+s);var So=(e,n,s)=>(dr(e,n,"read from private field"),s?s.call(e):n.get(e)),gs=(e,n,s)=>n.has(e)?aa("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(e):n.set(e,s),pr=(e,n,s,a)=>(dr(e,n,"write to private field"),a?a.call(e,s):n.set(e,s),s),la=(e,n,s)=>(dr(e,n,"access private method"),s);import"./CWj6FrbW.js";import"./B9NoErMv.js";import{s as gt,o as so,a as To,e as G,c as Br,d as Je,j as Qa}from"./C1Z8thyi.js";import{h as il,d as ll,bu as cl,b as dl,k as Xo,u as st,ac as Ue,az as u,aB as d,aA as p,ay as B,a as h,ag as qe,ah as E,ae as _,ad as o,G as Z,F as t,af as Cn,$ as c,c as fn,f as Wt,a9 as ds,aN as no,aC as Ke,aL as Kn,aR as He,A as Io,aQ as Ze,ai as po,aD as ro,bc as pl,W as un,am as Sr,bv as Ss}from"./DAnVPQ9k.js";import{b as Er}from"./CPwLOqZt.js";import{p as g,s as dt,a as Dn}from"./2ZiEc9qA.js";import{i as R}from"./Dlgwtvsp.js";import{a as ul,s as jr}from"./CCLEacnN.js";import{h as fl}from"./bRMDh8Ob.js";import{a as I,s as Pt,r as oo,b as le,f as vl,e as ca}from"./DhX7XdXM.js";import{b as Le}from"./BR1gFLuW.js";import{i as yn}from"./CkXqWtkT.js";/* empty css        */import{v as fs,c as Tr,C as Bn,d as bs,e as da,h as hl,g as Ja,S as ml,b as gl,f as bl,N as yl}from"./BCtxsB51.js";import{e as Mn,i as mo}from"./Be-6CH20.js";import{a as as,d as Vo,b as Fs,M as pa,c as ua,e as Ar,h as kl,s as ur,f as fa,p as wl}from"./B_qKpD_j.js";import{a as xo,b as Za}from"./RFLea7LJ.js";import{w as Ye,g as Ee,d as Qo}from"./ZfimbbBy.js";import{a as Ur,c as Ls,f as xl,g as _l,i as Sl,d as Nr,j as El,k as Tl,r as fr,m as va,n as Al,o as Nl,q as Pl,t as $l,u as Ml,v as Cl,w as Dl,x as zl,y as ha,z as Ll,A as Rl,p as Il,B as Ol,C as Fl,D as Hl}from"./C6NRnX5D.js";import{n as ps}from"./YAV5KFX_.js";import{c as Vs}from"./7FVPgLgv.js";import{s as uo}from"./Citdqw02.js";import{a as is,c as Ys,o as Kl,b as ti,r as Pr,d as $r,e as ma,f as Bl,u as jl,g as ga,h as ba,j as Ps,k as Ul,l as vr,m as hr,n as ql,p as Wl,q as Gl,t as Vl}from"./BTP1esHP.js";import{p as Xs,b as Qs,r as Js,a as ei,c as Yl}from"./BT06oTZb.js";import{D as ni,E as Mr,F as Rs,G as Xl,H as Ql,J as Jl,K as Zl,L as tc,M as ec,N as nc,O as oc,P as ya,Q as sc,R as rc,T as ac,U as ka,V as ic,W as lc,X as cc,Y as dc,Z as pc,_ as Mo,$ as wa,a0 as uc,j as fc,a as mr,k as vc,a1 as Go,d as hc,a2 as mc,a3 as gc}from"./CvegiWyF.js";import{a as bc}from"./ia1IEGxR.js";import{c as qr,e as yc,i as oi,s as Is,p as kc,a as wc,b as xc,d as _c}from"./D_QNEt50.js";import{p as Sc,b as Ec,a as Hs}from"./DfkXeKyr.js";import{b as ls}from"./quD-LMME.js";import{f as Tc,C as Ac,e as Nc,L as xa,s as Pc,b as $c,p as Mc,i as Cc,j as Dc,k as zc,l as Lc}from"./DiyAssUN.js";import{S as Rc,e as Ic,a as Oc,b as _a,l as si,C as Fc}from"./N992YIdO.js";import{b as gr}from"./DtEcqdkT.js";import{m as Sa,b as Hc,a as Wr,d as Kc,e as Bc,f as Ea,g as Ks,D as ri,h as ai,i as ii,j as li,l as zo,o as Cr,p as ci,q as di,r as Ta,t as pi,u as Bs,v as ui,w as Dr,x as jc,y as Uc,z as qc,A as br,B as Wc,C as Gc,E as Vc,F as Yc,k as Xc,G as Qc,H as Jc,I as Zc,J as td,K as ed}from"./Dn8hC4tQ.js";import{B as nd}from"./DMDujAJR.js";function fi(e){return function(...n){var s=n[0];s.target===this&&(e==null||e.apply(this,n))}}function nn(e){return function(...n){var s=n[0];return s.stopPropagation(),e==null?void 0:e.apply(this,n)}}function vi(e){return function(...n){var s=n[0];return s.preventDefault(),e==null?void 0:e.apply(this,n)}}const od=Symbol("NaN");function sd(e,n,s){il&&ll();var a=new nd(e),r=!cl();dl(()=>{var i=n();i!==i&&(i=od),r&&i!==null&&typeof i=="object"&&(i={}),a.ensure(i,s)})}var Ro,cs,Ts,Ws,hi;const Gs=class Gs{constructor(n){gs(this,Ws);gs(this,Ro,new WeakMap);gs(this,cs);gs(this,Ts);pr(this,Ts,n)}observe(n,s){var a=So(this,Ro).get(n)||new Set;return a.add(s),So(this,Ro).set(n,a),la(this,Ws,hi).call(this).observe(n,So(this,Ts)),()=>{var r=So(this,Ro).get(n);r.delete(s),r.size===0&&(So(this,Ro).delete(n),So(this,cs).unobserve(n))}}};Ro=new WeakMap,cs=new WeakMap,Ts=new WeakMap,Ws=new WeakSet,hi=function(){return So(this,cs)??pr(this,cs,new ResizeObserver(n=>{for(var s of n){Gs.entries.set(s.target,s);for(var a of So(this,Ro).get(s.target)||[])a(s)}}))},ia(Gs,"entries",new WeakMap);let zr=Gs;var rd=new zr({box:"border-box"});function rs(e,n,s){var a=rd.observe(e,()=>s(e[n]));Xo(()=>(st(()=>s(e[n])),a))}function ad(e){return typeof e!="string"?"":e.replace(/\/+$/,"").split("/").pop()??""}const id=e=>!Number.isFinite(e)||e<=0?0:e>=1?1:e;function ld(e,n){const s=Array.isArray(e)?e.filter(f=>!!f&&typeof f=="object"):[],a=fs(s),r=a.length,i=typeof n=="string"?n:"",l=i?a.findIndex(f=>f.path===i):-1;if(l<0)return{index:-1,position:0,total:r,fraction:0,present:!1};const m=l+1;return{index:l,position:m,total:r,fraction:id(m/r),present:!0}}var cd=E('<div class="copyright svelte-rmi52p"><span class="text svelte-rmi52p"> </span> <span class="hover-text svelte-rmi52p"><a target="_blank">Copyright <b> </b> </a></span></div>');function dd(e,n){Ue(n,!1);let s=g(n,"name",24,()=>Tr.copyright.name),a=g(n,"url",24,()=>Tr.copyright.url),r=g(n,"year",24,()=>new Date().getFullYear().toString());yn();var i=cd(),l=u(i),m=u(l);d(l);var f=p(l,2),z=u(f),x=p(u(z)),V=u(x);d(x);var O=p(x);d(z),d(f),d(i),B(()=>{gt(m,`© ${s()??""} ${r()??""}`),I(z,"href",a()),gt(V,`${s()??""} <${a()??""}>`),gt(O,` ${r()??""}`)}),h(e,i),qe()}const pd=/<(script|style)\b[\s\S]*?<\/\1>/gi,ud=/<!--[\s\S]*?-->/g,fd=/\{[^{}]*\}/g,vd=/<[^>]+>/g,hd=/\s+/g,md={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&nbsp;":" "};function gd(e){if(typeof e!="string")return"";let n=e.replace(pd," ").replace(ud," ").replace(fd," ").replace(vd," ");for(const[s,a]of Object.entries(md))n=n.split(s).join(a);return n.replace(hd," ").trim()}function bd(e){const n={};for(const[s,a]of Object.entries(e??{})){if(typeof s!="string")continue;const r=s.match(/\/src\/routes\/(.+)\/([^/]+)\/\+page\.svelte$/);if(!r)continue;const i=r[2];if(!i||!i.endsWith(".html"))continue;const l=r[1].replace(/\/\([^/]+\)/g,"").replace(/^\([^/]+\)\//,"").replace(/\/{2,}/g,"/").replace(/^\/+|\/+$/g,"");if(!l||l.startsWith("_"))continue;const m=l.replace(/\//g,"-");(n[m]??(n[m]={}))[i]=gd(a)}return n}function yd(e,n,s=48){if(typeof e!="string"||!n)return"";const a=e.toLowerCase().indexOf(n.toLowerCase());if(a<0)return"";const r=Math.max(0,a-s),i=Math.min(e.length,a+n.length+s),l=r>0?"…":"",m=i<e.length?"…":"";return`${l}${e.slice(r,i).trim()}${m}`}function kd(e){return typeof e!="string"?"":e.replace(/\.html?$/i,"")}function mi(e,n){const s=(typeof n=="string"?n:"").trim().toLowerCase();if(!s)return[];const a=[];for(const r of e??[]){if(!r)continue;const i=typeof r.title=="string"?r.title:"",l=typeof r.text=="string"?r.text:"",m=kd(r.path),f=Number.isFinite(r.number)?r.number:void 0;i.toLowerCase().includes(s)?a.push({path:r.path,title:i,snippet:"",where:"title",number:f}):m.toLowerCase().includes(s)?a.push({path:r.path,title:i,snippet:r.path,where:"path",number:f}):f!=null&&String(f).includes(s)?a.push({path:r.path,title:i,snippet:`#${f}`,where:"number",number:f}):l.toLowerCase().includes(s)&&a.push({path:r.path,title:i,snippet:yd(l,s),where:"body",number:f})}return a}function gi(e,n,s){const a=Number.isFinite(s)?Math.floor(s):0;if(a<=0)return-1;const r=Number.isFinite(n)?Math.floor(n):0,i=Number.isFinite(e)?Math.floor(e):-1;return i<0||i>=a?r<0?a-1:0:((i+r)%a+a)%a}const wd=`<!-- Framework route — the code lives in $lib/framework (shipped in @geekpresent/core).
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
  9 · get-it — the call to action: the GitHub release, or Homebrew.

  The brew command comes from the author (2026-10-25); EnvFolio's README does not list it yet.
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
		<div class="label">or with Homebrew</div>
		<code class="brew"><span class="prompt">$</span> brew install nawaman/tap/folio</code>
	</div>
	<p class="punch">Keep your secrets</p>
	<p class="punch">out of plain sight.</p>
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
`,Pd=`<!--
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
`,$d=`<!--
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
`,Md=`<!--
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
`,Cd=`<!--
  6 · exec — a folder's items as variables for one command; secrets only with -s; the first read
  of a secret is where pinentry asks and gpg-agent starts remembering (EP003 shows how).

  Real \`folio ls gh\` and \`folio exec\` output from demos/ep002/capture.sh (a sandbox store, fake
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
`,Dd=`<!--
  9 · get-it — the call to action: the GitHub release, or Homebrew; and the article, which goes
  through every step. Laid out as EP001's get-it.
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
		<div class="label">or with Homebrew</div>
		<code class="brew"><span class="prompt">$</span> brew install nawaman/tap/folio</code>
	</div>
	<p class="read">Every step, in detail: read the article.</p>
	<p class="punch">Keep your secrets<br />out of plain sight.</p>
</Shot>

<Note>
	<p>Get EnvFolio from GitHub, or with Homebrew.</p>
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
</style>
`,zd=`<!--
  3 · init — \`folio init\` asks for what a new key needs, then makes the key and the store.

  The session is \`folio init\` at a terminal with no key yet, put together from folio's own prompts
  (../EnvFolio/folio: init, ask-text, ask-choice, acknowledge) and the real run in
  demos/ep002/capture.sh (a sandbox, fake values). Trimmed: the Overview section, the long key-kind
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
`,Ld=`<!--
  4 · insert — a text on the command line (or at a prompt), a secret at a hidden prompt (asked
  twice); one terminal each, sized to its lines (\`height: auto\`: a Terminal fills its parent's
  height otherwise, and two in this column would come out the same height).

  Real \`folio\` output from demos/ep002/capture.sh (a sandbox store, fake values). There the
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
`,Rd=`<!--
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
`,Id=`<!--
  5 · ls and show — the store as a tree, names only; then one value with \`show\`, which always
  says the kind, so a secret is never shown by accident; \`-c\` copies it to the clipboard instead.

  Real \`folio ls\` and \`folio show\` output from demos/ep002/capture.sh (a sandbox store, fake
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
`,Od=`<!--
  8 · more — the other everyday commands, each for a text or a secret, as in pass; backup; help.
  \`show\` has its own step, on ls.html.

  From \`folio help\` (../EnvFolio/folio, captured in demos/ep002/capture.sh) and the README's
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
`,Fd=`<!--
  7 · shell — the same items, for a whole session: names printed, never values; \`exit\` leaves.

  Real \`folio shell\` output from demos/ep002/capture.sh (a sandbox store, fake values). There the
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
`,Hd=`<!--
  1 · start — the episode in one list: install, init, insert, ls, exec / shell.
-->
<script>
	import Shot from '../Shot.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
<\/script>

<Shot kicker="EP002 · get started" title="Getting started with EnvFolio" size={110}>
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
`,Kd=`<!--
  piece 8 · agent — gpg-agent keeps the passphrase for its cache time, so the next command needs none (MANUAL _Passphrase prompts in a window_).
-->
<script>
	import Part from '../Part.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
<\/script>

<Part
	n={8}
	title="<code>gpg-agent</code>"
	sub="Remembers it a while, and unlocks the key."
	shown={10}
	fresh={2}
/>

<Note>
	<p>Then gpg-agent remembers it for a while, and unlocks the key's secret half.</p>
	<p>That is why you are asked once, and then not again for a while.</p>
</Note>
`,Bd=`<!--
  folio — who does the work: folio runs pass, gpg and git; and the store is still a plain pass
  store (MANUAL \`folio init\`; README _Design principles_; the real \`pass show\` in
  demos/ep002/capture.sh).
-->
<script>
	import Shot from '../Shot.svelte';
	import Pieces from '../Pieces.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
<\/script>

<Shot kicker="the pieces · together" title="<code>folio</code> runs them" size={88}>
	<p class="sub"><code>pass</code>, <code>gpg</code> and <code>git</code>, for you.</p>
	<div class="picture"><Pieces shown={11} fresh={1} /></div>
</Shot>

<Note>
	<p>Folio runs pass, gpg and git for you.</p>
	<p>
		And it is a plain pass store, so pass itself still opens every secret in it. Nothing is locked
		in.
	</p>
</Note>

<style>
	.sub {
		margin: 0;
		color: var(--ep-dim);
		font-size: 44px;
	}
	.picture {
		width: 100%;
		max-width: 940px;
		margin: 0 auto;
	}
</style>
`,jd=`<!--
  get-it — the call to action: the GitHub release, or Homebrew; and the article, with every piece
  in detail. Laid out as EP001's and EP002's get-it.
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
		<div class="label">or with Homebrew</div>
		<code class="brew"><span class="prompt">$</span> brew install nawaman/tap/folio</code>
	</div>
	<p class="read">Every piece, in detail: read the article.</p>
	<p class="punch">Keep your secrets<br />out of plain sight.</p>
</Shot>

<Note>
	<p>Get EnvFolio from GitHub, or with Homebrew.</p>
	<p>The article has every piece, in more detail.</p>
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
</style>
`,Ud=`<!--
  piece 3 · .gpg-id — written by \`pass init\`: the key the store is encrypted to (MANUAL \`folio init\`).
-->
<script>
	import Part from '../Part.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
<\/script>

<Part
	n={3}
	title="<code>.gpg-id</code>"
	sub="One line: the fingerprint of the store key."
	shown={3}
	fresh={1}
/>

<Note>
	<p>In it, the gpg-id file names the key: one line, its fingerprint.</p>
	<p>Everything in the store is encrypted to, or signed by, that key.</p>
</Note>
`,qd=`<!--
  piece 6 · history — the store is a git repository; pass and EnvFolio commit every change (README _Syncing the store with git_; the real \`git log\` in demos/ep002/capture.sh).
-->
<script>
	import Part from '../Part.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
<\/script>

<Part n={6} title="The history" sub="Every change, committed." shown={6} fresh={1} />

<Note>
	<p>Every change is committed to the store's git history.</p>
	<p>Even a removed item is still in it.</p>
</Note>
`,Wd=`<!--
  piece 1 · key — the store key in your GPG keyring; its public half and its secret half (MANUAL \`folio init\`; the article).
-->
<script>
	import Part from '../Part.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
<\/script>

<Part n={1} title="The store key" sub="In your GPG keyring. Two halves." shown={1} fresh={1} />

<Note>
	<p>First, a key, in your GPG keyring.</p>
	<p>Like every GPG key, it has two halves. The public half encrypts, and checks signatures.</p>
	<p>The secret half decrypts, and signs. It is locked by your passphrase.</p>
</Note>
`,Gd=`<!--
  piece 7 · pinentry — EnvFolio never asks for a passphrase itself: gpg does, through its agent's pinentry, in a terminal or a window (MANUAL _Passphrase prompts in a window_).
-->
<script>
	import Part from '../Part.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
<\/script>

<Part
	n={7}
	title="The passphrase"
	sub="gpg asks for it, through <code>pinentry</code>."
	shown={8}
	fresh={2}
/>

<Note>
	<p>So who asks for your passphrase? Not folio.</p>
	<p>gpg does, with a small program called pinentry, in your terminal or in a window.</p>
</Note>
`,Vd=`<!--
  piece 4 · secret — a <name>.gpg file, encrypted to the store key: a pass entry. Encrypting uses the public half, so adding one asks nothing; reading one decrypts (MANUAL \`insert secret\`, \`show secret\`).
-->
<script>
	import Part from '../Part.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
<\/script>

<Part
	n={4}
	title={'A <span class="s">secret</span>'}
	sub="Encrypted to the key. Adding one needs no passphrase."
	shown={4}
	fresh={1}
/>

<Note>
	<p>A secret is a gpg file, encrypted to that key.</p>
	<p>
		Encrypting only needs the public half, so adding a secret needs no passphrase. Reading one does.
	</p>
</Note>
`,Yd=`<!--
  start — the episode: the whole picture first; the next slides take it one piece at a time.
-->
<script>
	import Shot from '../Shot.svelte';
	import Pieces from '../Pieces.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
<\/script>

<Shot kicker="EP003 · the pieces" title="What <code>folio init</code> made" size={76}>
	<p class="sub">And who asks for your passphrase.</p>
	<div class="picture"><Pieces /></div>
</Shot>

<Note>
	<p>Folio init set up a few pieces. Most days, you never think about them.</p>
	<p>
		But when gpg asks for your passphrase, it helps to know who is asking, and for what. Here they
		are, one at a time.
	</p>
</Note>

<style>
	.sub {
		margin: 0;
		color: var(--ep-dim);
		font-size: 44px;
	}
	.picture {
		width: 100%;
		max-width: 940px;
		margin: 0 auto;
	}
</style>
`,Xd=`<!--
  piece 2 · store — ~/.folio, a pass store kept apart from ~/.password-store, private (700), with a git history (MANUAL \`folio init\`).
-->
<script>
	import Part from '../Part.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
<\/script>

<Part
	n={2}
	title="The store"
	sub="<code>~/.folio</code>: a <code>pass</code> store, with a git history."
	shown={2}
	fresh={1}
/>

<Note>
	<p>Next, the store: a folder in your home, dot folio.</p>
	<p>It is a plain pass store, with a git history, and only you can read it.</p>
</Note>
`,Qd=`<!--
  piece 5 · text — a plain <name>.txt, signed in <name>.txt.sig; signing uses the secret half, checking the public half (MANUAL \`insert text\`, \`show text\`).
-->
<script>
	import Part from '../Part.svelte';
	import Note from '@geekpresent/core/components/Note.svelte';
<\/script>

<Part
	n={5}
	title={'A <span class="t">text</span>'}
	sub="Plain, and signed by the key."
	shown={5}
	fresh={1}
/>

<Note>
	<p>A text is a plain file, signed by the key.</p>
	<p>Signing needs the secret half, so adding a text needs the passphrase.</p>
	<p>Reading one only checks the signature. No passphrase.</p>
</Note>
`,Jd=Object.assign({"/src/routes/_handout/[deck].html/+page.svelte":wd,"/src/routes/ep001-envfolio-intro/anywhere.html/+page.svelte":xd,"/src/routes/ep001-envfolio-intro/exec-multiple.html/+page.svelte":_d,"/src/routes/ep001-envfolio-intro/exec.html/+page.svelte":Sd,"/src/routes/ep001-envfolio-intro/get-it.html/+page.svelte":Ed,"/src/routes/ep001-envfolio-intro/meet.html/+page.svelte":Td,"/src/routes/ep001-envfolio-intro/problem.html/+page.svelte":Ad,"/src/routes/ep001-envfolio-intro/spread.html/+page.svelte":Nd,"/src/routes/ep001-envfolio-intro/texts-and-secrets.html/+page.svelte":Pd,"/src/routes/ep001-envfolio-intro/trust.html/+page.svelte":$d,"/src/routes/ep001-envfolio-intro/vars.html/+page.svelte":Md,"/src/routes/ep002-get-started/exec.html/+page.svelte":Cd,"/src/routes/ep002-get-started/get-it.html/+page.svelte":Dd,"/src/routes/ep002-get-started/init.html/+page.svelte":zd,"/src/routes/ep002-get-started/insert.html/+page.svelte":Ld,"/src/routes/ep002-get-started/install.html/+page.svelte":Rd,"/src/routes/ep002-get-started/ls.html/+page.svelte":Id,"/src/routes/ep002-get-started/more.html/+page.svelte":Od,"/src/routes/ep002-get-started/shell.html/+page.svelte":Fd,"/src/routes/ep002-get-started/start.html/+page.svelte":Hd,"/src/routes/ep003-the-pieces/agent.html/+page.svelte":Kd,"/src/routes/ep003-the-pieces/folio.html/+page.svelte":Bd,"/src/routes/ep003-the-pieces/get-it.html/+page.svelte":jd,"/src/routes/ep003-the-pieces/gpg-id.html/+page.svelte":Ud,"/src/routes/ep003-the-pieces/history.html/+page.svelte":qd,"/src/routes/ep003-the-pieces/key.html/+page.svelte":Wd,"/src/routes/ep003-the-pieces/pinentry.html/+page.svelte":Gd,"/src/routes/ep003-the-pieces/secret.html/+page.svelte":Vd,"/src/routes/ep003-the-pieces/start.html/+page.svelte":Yd,"/src/routes/ep003-the-pieces/store.html/+page.svelte":Xd,"/src/routes/ep003-the-pieces/text.html/+page.svelte":Qd}),Zd=bd(Jd);function tp(e,n){var s;return((s=Zd[e])==null?void 0:s[n])??""}function bi(e,n){return(n??[]).map((s,a)=>({path:s.path,title:s.title,text:tp(e,s.path),number:a+1}))}const Oo=Ye(!1),Fo=Ye(!1),yi=Ye(0),ki=Ye(0);let Yo;const wi=5e3;function Zs(e=wi){Oo.set(!0),Yo&&clearTimeout(Yo),Yo=setTimeout(()=>{Oo.set(!1),Yo=void 0},e)}function xi(){Oo.set(!1),Fo.set(!1),Yo&&(clearTimeout(Yo),Yo=void 0)}function Aa(){Fo.set(!0)}function eo(){Fo.set(!1)}function _i(){const e=!Ee(Fo);return Fo.set(e),e}function Hn(e=wi){Ee(Oo)&&Zs(e)}function ep(){yi.update(e=>e+1),Zs()}function np(){ki.update(e=>e+1),Zs()}const Lr="return",Si=",",op=/^[A-Za-z0-9][A-Za-z0-9._-]*$/;function us(e){return typeof e!="string"||e.length===0||e.length>128||e.includes("..")?!1:op.test(e)}function Gr(e){if(typeof e!="string"||!e.trim())return[];let n=e.trim();try{n.includes("%")&&(n=decodeURIComponent(n))}catch{}return n.split(Si).map(s=>s.trim()).filter(us)}function Ei(e){return!Array.isArray(e)||!e.length?"":e.filter(us).join(Si)}function Ti(e){return e?Gr(e.get(Lr)):[]}function Ai(e){const n=typeof e=="string"?e.trim():"";return n?`gp-catalog-return:${n}`:"gp-catalog-return"}function Na(e,n){return!e||!us(e)?!1:!(Array.isArray(n)?n:[]).some(a=>a&&a.path===e)}function sp(e,n,s,a=null){const r=Ti(e);if(!s)return r;try{const i=Gr(s.getItem(Ai(n)));return r.length?i.length?Ni(i,r,a):r:i}catch{return r}}function Ni(e,n,s=null){const a=Array.isArray(e)?e.filter(us):[],r=Array.isArray(n)?n.filter(us):[];if(!r.length)return a;if(!a.length||r.length>=a.length&&a.every((i,l)=>r[l]===i))return r;if(a.length>r.length){const i=a.length-r.length;if(r.every((l,m)=>a[i+m]===l))return a}if(s){const i=[];for(const l of a)if(Na(l,s))i.push(l);else break;if(i.length&&r.every(l=>!Na(l,s))&&!i.every((l,m)=>r[m]===l))return[...i,...r]}return r}function rp(e,n,s,a=null){var i;if(!s)return;const r=Ti(e);if(r.length)try{const l=Ai(n);let m=[];try{m=Gr(((i=s.getItem)==null?void 0:i.call(s,l))??null)}catch{m=[]}const f=Ni(m,r,a);s.setItem(l,Ei(f))}catch{}}function Pi(e,n){if(!e||e.includes(`${Lr}=`))return e;const s=Array.isArray(n)?Ei(n):n&&us(n)?n:"";if(!s)return e;const a=e.includes("?")?"&":"?";return`${e}${a}${Lr}=${encodeURIComponent(s)}`}function ap(e,n){const s=a=>a?Pi(a,n):void 0;return{first:s(e.first),last:s(e.last),prev:s(e.prev),next:s(e.next)}}var ip=E('<div id="article" class="svelte-eixeog"><a class="svelte-eixeog"> </a></div>'),lp=E('<span class="snippet svelte-eixeog"> </span>'),cp=E('<li><a class="svelte-eixeog"><span class="hit-title svelte-eixeog"> </span> <!></a></li>'),dp=E('<ol class="results svelte-eixeog" aria-label="Search results"></ol>'),pp=E('<p class="no-matches svelte-eixeog" role="status"> </p>'),up=E('<li><a class="svelte-eixeog"> </a></li>'),fp=E('<ol class="svelte-eixeog"></ol>'),vp=E('<div class="content svelte-eixeog"><div class="head svelte-eixeog"><!> <input class="search svelte-eixeog" type="search" placeholder="Search slides…" aria-label="Search slides"/></div> <div class="scroll svelte-eixeog"><!></div></div>'),hp=E("<div><!> <!></div>");function mp(e,n){Ue(n,!1);const s=()=>dt(Ur,"$page",r),a=()=>dt(M,"$isContentVisible",r),[r,i]=Dn(),l=c(),m=c(),f=c(),z=c(),x=c(),V=c(),O=c();let C=g(n,"pages",24,()=>[]),P=g(n,"deck",8,""),nt=g(n,"docs",8,null),W=g(n,"returnTo",8,null);function Y(D){return Pi(`./${D}`,W())}let U=c(""),F=c(-1),X=c("");function tt(D){o(F,gi(t(F)<0?t(O):t(F),D,t(V).length))}function j(){var Et;const D=t(F)<0&&t(x)?0:t(F),bt=(Et=t(K))==null?void 0:Et.querySelectorAll(".scroll ol li a"),At=bt==null?void 0:bt[D];return At?(At.click(),k(),!0):!1}function Q(D){return D.key==="ArrowDown"?(tt(1),!0):D.key==="ArrowUp"?(tt(-1),!0):D.key==="Enter"?j():!1}let vt=g(n,"article",8,!1),et=g(n,"bar",8,!1),w=g(n,"articleText",8,"View as article"),$=g(n,"articleHref",8,"../text.html"),K=c(),M=Ye(!1);const A=yi.subscribe(D=>{D>0&&M.set(!0)});function b(){M.update(D=>!D)}function k(){M.update(D=>!1)}function N(){t(x)?o(U,""):k()}function pt(D){if(a()){if(D.key==="Escape"){D.preventDefault(),N();return}Q(D)&&D.preventDefault()}}function ht(D){if(D.stopPropagation(),D.key==="Escape"){D.preventDefault(),N();return}Q(D)&&D.preventDefault()}function it(D){D.focus()}function ut(D,bt){const At=Et=>{Et&&typeof D.scrollIntoView=="function"&&D.scrollIntoView({block:"nearest"})};return At(bt),{update:At}}function L(D){t(K)&&!t(K).contains(D.target)&&k()}so(()=>{window.addEventListener("keydown",pt),document.addEventListener("click",L)}),To(()=>{A(),window.removeEventListener("keydown",pt),document.removeEventListener("click",L)}),_(()=>Z(C()),()=>{o(l,fs(C()))}),_(()=>s(),()=>{o(m,ad(s().url.pathname))}),_(()=>(Z(nt()),Z(P()),t(l)),()=>{o(f,nt()??bi(P(),t(l)))}),_(()=>(t(f),t(U)),()=>{o(z,mi(t(f),t(U)))}),_(()=>t(U),()=>{o(x,t(U).trim().length>0)}),_(()=>(t(x),t(z),t(l)),()=>{o(V,t(x)?t(z):t(l))}),_(()=>(t(U),t(X)),()=>{t(U)!==t(X)&&(o(X,t(U)),o(F,-1))}),_(()=>(t(x),t(l),t(m)),()=>{o(O,t(x)?-1:t(l).findIndex(D=>D.path===t(m)))}),Cn(),yn();var mt=hp();let lt;var Tt=u(mt);Bn(Tt,{chrome:!0,text:"Table of Contents",hoverText:"Table of Contents",mnemonic:"T",get isSelected(){return a()},$$events:{click:b}});var yt=p(Tt,2);{var J=D=>{var bt=vp(),At=u(bt),Et=u(At);{var Rt=kt=>{var Dt=ip(),Yt=u(Dt),Ut=u(Yt,!0);d(Yt),d(Dt),B(()=>{I(Yt,"href",$()),gt(Ut,w())}),h(kt,Dt)};R(Et,kt=>{vt()&&kt(Rt)})}var Gt=p(Et,2);oo(Gt),Xo(()=>xo(Gt,()=>t(U),kt=>o(U,kt))),Xo(()=>G("keydown",Gt,ht)),as(Gt,kt=>it==null?void 0:it(kt)),d(At);var Te=p(At,2),Kt=u(Te);{var zt=kt=>{var Dt=fn(),Yt=Wt(Dt);{var Ut=Qt=>{var wt=dp();Mn(wt,5,()=>t(z),mo,(fe,Jt,ye)=>{let Re=()=>t(Jt).path,de=()=>t(Jt).title,ae=()=>t(Jt).snippet;var Xe=cp();let tn;var on=u(Xe),kn=u(on),ao=u(kn,!0);d(kn);var io=p(kn,2);{var vn=Ie=>{var wn=lp(),zn=u(wn,!0);d(wn),B(()=>gt(zn,ae())),h(Ie,wn)};R(io,Ie=>{ae()&&Ie(vn)})}d(on),as(on,(Ie,wn)=>ut==null?void 0:ut(Ie,wn),()=>ye===t(F)),d(Xe),B(Ie=>{tn=Pt(Xe,1,"svelte-eixeog",null,tn,{current:Re()===t(m),selected:ye===t(F)}),I(on,"href",Ie),I(on,"aria-current",Re()===t(m)?"page":void 0),gt(ao,de())},[()=>(Re(),st(()=>Y(Re())))]),h(fe,Xe)}),d(wt),h(Qt,wt)},ce=Qt=>{var wt=pp(),fe=u(wt);d(wt),B(Jt=>gt(fe,`No slides match “${Jt??""}”.`),[()=>(t(U),st(()=>t(U).trim()))]),h(Qt,wt)};R(Yt,Qt=>{t(z),st(()=>t(z).length)?Qt(Ut):Qt(ce,-1)})}h(kt,Dt)},Nt=kt=>{var Dt=fp();Mn(Dt,5,()=>t(l),mo,(Yt,Ut,ce)=>{let Qt=()=>t(Ut).path,wt=()=>t(Ut).title;var fe=up();let Jt;var ye=u(fe),Re=u(ye,!0);d(ye),as(ye,(de,ae)=>ut==null?void 0:ut(de,ae),()=>t(F)<0?Qt()===t(m):ce===t(F)),d(fe),B(de=>{Jt=Pt(fe,1,"svelte-eixeog",null,Jt,{current:Qt()===t(m),selected:ce===t(F)}),I(ye,"href",de),I(ye,"aria-current",Qt()===t(m)?"page":void 0),gt(Re,wt())},[()=>(Qt(),st(()=>Y(Qt())))]),h(Yt,fe)}),d(Dt),h(kt,Dt)};R(Kt,kt=>{t(x)?kt(zt):kt(Nt,-1)})}d(Te),d(bt),h(D,bt)};R(yt,D=>{a()&&D(J)})}d(mt),Le(mt,D=>o(K,D),()=>t(K)),B(()=>lt=Pt(mt,1,"toc gp-chrome no-print svelte-eixeog",null,lt,{expanded:a(),bar:et()})),h(e,mt),qe(),i()}const wo=Ye(!1),gp=Ye(!1),Co=Ye(!1),bp="/__geekpresent/page-add",yp="/__geekpresent/page-remove",kp="/__geekpresent/page-duplicate",wp="/__geekpresent/page-rename",xp="/__geekpresent/page-refs";async function tr(e,n){let s;try{s=await fetch(e,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(n)})}catch{return{error:"network error — is the dev server running?"}}let a={};try{a=await s.json()}catch{a={error:s.ok?"empty response":`HTTP ${s.status}`}}return s.ok?{ok:!0,...a}:{error:a.error||`HTTP ${s.status}`}}async function _p(e){return tr(bp,{deck:e.deck,path:e.path,title:e.title,template:e.template,after:e.after??null})}async function Sp(e){return tr(yp,{deck:e.deck,path:e.path,deleteFiles:!!e.deleteFiles})}async function Ep(e){return tr(kp,e)}async function Tp(e){return tr(wp,e)}async function Ap(e,n){try{const s=await fetch(`${xp}?deck=${encodeURIComponent(e)}&path=${encodeURIComponent(n)}`);if(!s.ok)return[];const a=await s.json();return Array.isArray(a.refs)?a.refs:[]}catch{return[]}}const $i=/^[a-z0-9][a-z0-9-]*$/;function yr(e){const n=String(e??"").normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").replace(/-+/g,"-");return!n||!$i.test(n)?"slide":n.length>48?n.slice(0,48).replace(/-+$/,"")||"slide":n}function Np(e){let n=String(e??"").trim().toLowerCase();if(!n||n.includes("/")||n.includes("\\")||n.includes(".."))return null;n=n.replace(/^\.+/,""),n.endsWith(".html")||(n=n.replace(/\.html?$/i,""),n=`${n}.html`);const s=n.replace(/\.html$/i,"");return $i.test(s)?`${s}.html`:null}function $s(e,n=0){return Number.isFinite(e)?e:n}function Pa(e,n,s,a){const r=$s(e),i=$s(n),l=$s(s),m=$s(a);return r<=0||i<=0||l<=0||m<=0?0:Math.min(r/l,i/m)}function Pp(e,n){return fs(Array.isArray(e)?e:[]).map((a,r)=>({number:r+1,path:a.path,title:a.title,src:`./${a.path}?clean`,isCurrent:a.path===n}))}function $p(e,n){const s=Array.isArray(e)?e:[],a=(typeof n=="string"?n:"").trim().toLowerCase();return a?s.filter(r=>{if(!r)return!1;const i=typeof r.title=="string"?r.title:"",l=typeof r.path=="string"?r.path:"",m=l.replace(/\.html$/i,""),f=String(r.number??"");return i.toLowerCase().includes(a)||l.toLowerCase().includes(a)||m.toLowerCase().includes(a)||f.includes(a)}):s}function Vr(e){const n=e;return n?n.isContentEditable?!0:/^(INPUT|TEXTAREA|SELECT)$/.test(n.tagName??""):!1}function Mp(e,n){return e.ctrlKey||e.metaKey||e.altKey||Vr(e.target)?"ignore":e.key==="Escape"?n?"close":"ignore":e.defaultPrevented?"ignore":e.key==="o"||e.key==="O"?n?"close":"open":"ignore"}function Cp(e,n){const s=new Set;for(const a of e)Number.isFinite(a)&&s.add(a);return Number.isFinite(n)&&n>0&&s.add(n),s}function Dp(e,n){return n?n.bottom<e.top?"above":n.top>e.bottom?"below":"visible":"unknown"}function zp(e,n=1){if(e.length===0)return 1;const s=e[0];let a=0;for(const r of e){if(Math.abs(r-s)>n)break;a++}return Math.max(1,a)}function Lp(e,n){return!Number.isFinite(e)||!Number.isFinite(n)||n<=0?1:Math.max(1,Math.floor(e/n))}function Rp(e,n,s,a,r){if(n<=0)return 0;const i=Math.max(1,s),l=Math.max(1,a);switch(r){case"left":return Math.min(n,Math.max(1,e-1));case"right":return Math.min(n,Math.max(1,e+1));case"up":return Math.min(n,Math.max(1,e-i));case"down":return Math.min(n,Math.max(1,e+i));case"pageUp":return Math.min(n,Math.max(1,e-i*l));case"pageDown":return Math.min(n,Math.max(1,e+i*l));case"first":return 1;case"last":return n}}function Ip(e){if(e.ctrlKey||e.metaKey||e.altKey||Vr(e.target))return"ignore";switch(e.key){case"ArrowLeft":return"left";case"ArrowRight":return"right";case"ArrowUp":return"up";case"ArrowDown":return"down";case"Home":return"first";case"End":return"last";case"PageUp":return"pageUp";case"PageDown":return"pageDown";case"Enter":return"commit";case" ":case"Spacebar":return"toCurrent";default:return"ignore"}}var Op=E('<button type="button" class="status-open svelte-lrdyn6">Open</button>'),Fp=E("<span> <!></span>"),Hp=E('<span class="current-arrow svelte-lrdyn6" aria-hidden="true">▲</span>'),Kp=E('<span class="current-arrow svelte-lrdyn6" aria-hidden="true">▼</span>'),Bp=E(`<button type="button" title="Scroll to the slide you're on"><!>CURRENT</button>`),jp=E('<button type="button" class="edit-btn add-head-btn svelte-lrdyn6" title="Add a slide at the end of the deck">ADD</button>'),Up=E('<kbd class="edit-kbd svelte-lrdyn6">E</kbd>'),qp=E('ADD · + between · ✎ rename · ⧉ duplicate · × remove · <kbd class="svelte-lrdyn6">E</kbd> done · <kbd class="svelte-lrdyn6">Esc</kbd>',1),Wp=E('arrows move · <kbd class="svelte-lrdyn6">Tab</kbd> filter · <kbd class="svelte-lrdyn6">↵</kbd> select · <kbd class="svelte-lrdyn6">Space</kbd> current · <kbd class="svelte-lrdyn6">Esc</kbd>',1),Gp=E('<option class="svelte-lrdyn6"> </option>'),Vp=E('<label class="svelte-lrdyn6"><span class="svelte-lrdyn6">Template</span> <select class="svelte-lrdyn6"><option class="svelte-lrdyn6">ContentPage</option><option class="svelte-lrdyn6">TitlePage</option></select></label> <label class="svelte-lrdyn6"><span class="svelte-lrdyn6">After</span> <select class="svelte-lrdyn6"><option class="svelte-lrdyn6">(end of deck)</option><!></select></label>',1),Yp=E('<p class="add-form-note svelte-lrdyn6">A new path moves the folder and rewrites links to it under <code class="svelte-lrdyn6">src/routes</code>.</p>'),Xp=E('<label class="add-form-check svelte-lrdyn6"><input type="checkbox" class="svelte-lrdyn6"/> <span class="svelte-lrdyn6"> </span></label>'),Qp=E('<div class="add-form-wrap svelte-lrdyn6"><form class="add-form svelte-lrdyn6"><div class="add-form-title svelte-lrdyn6"><!></div> <label class="svelte-lrdyn6"><span class="svelte-lrdyn6">Title</span> <input type="text" placeholder="My new slide" class="svelte-lrdyn6"/></label> <label class="svelte-lrdyn6"><span class="svelte-lrdyn6">Path</span> <input type="text" placeholder="my-new-slide.html" spellcheck="false" class="svelte-lrdyn6"/></label> <!> <!> <div class="add-form-actions svelte-lrdyn6"><button type="button" class="form-btn ghost svelte-lrdyn6">Cancel</button> <button type="submit" class="form-btn svelte-lrdyn6"> </button></div></form></div>'),Jp=E(' <code class="svelte-lrdyn6"> </code>',1),Zp=E("Still linked from: <!> — those links will break.",1),tu=E(`<div class="add-form-wrap svelte-lrdyn6"><div class="add-form remove-dialog svelte-lrdyn6" role="alertdialog"><div class="add-form-title svelte-lrdyn6"> </div> <p class="add-form-note svelte-lrdyn6"><b class="svelte-lrdyn6">Unlist</b> drops it from <code class="svelte-lrdyn6">pages.ts</code> and keeps the folder. <b class="svelte-lrdyn6">Delete files</b> also removes the folder and everything in it — files git
					does not track cannot be recovered.</p> <p class="add-form-note refs svelte-lrdyn6"><!></p> <div class="add-form-actions svelte-lrdyn6"><button type="button" class="form-btn ghost svelte-lrdyn6">Cancel</button> <button type="button" class="form-btn svelte-lrdyn6">Unlist</button> <button type="button" class="form-btn danger svelte-lrdyn6">Delete files</button></div></div></div>`),eu=E('<p class="no-matches svelte-lrdyn6" role="status"> </p>'),nu=E('<iframe class="frame svelte-lrdyn6" tabindex="-1" loading="lazy"></iframe>'),ou=E('<span class="card svelte-lrdyn6"> </span>'),su=E('<span class="path-line svelte-lrdyn6"> </span>'),ru=E('<span class="tile-tools svelte-lrdyn6"><button type="button" class="tile-tool tile-rename svelte-lrdyn6" title="Rename (title and/or path)">✎</button> <button type="button" class="tile-tool tile-duplicate svelte-lrdyn6" title="Duplicate">⧉</button> <button type="button" class="tile-tool tile-remove svelte-lrdyn6" title="Remove (unlist or delete)">×</button></span> <button type="button" class="gutter-add svelte-lrdyn6" title="Add slide after this one">+</button>',1),au=E('<div class="tile-wrap svelte-lrdyn6"><button type="button"><span class="shot svelte-lrdyn6"><!></span> <span class="label svelte-lrdyn6"><span class="num svelte-lrdyn6"> </span> <span class="name svelte-lrdyn6"> </span></span> <!></button> <!></div>'),iu=E("<div></div>"),lu=E('<div role="presentation"><div class="head svelte-lrdyn6"><span class="head-title svelte-lrdyn6"> </span> <span class="head-count svelte-lrdyn6"><!></span> <input class="search svelte-lrdyn6" type="search" placeholder="Filter title, file, #…" aria-label="Filter overview by title, file name, or page number"/> <!> <span class="head-actions svelte-lrdyn6"><!> <!> <button type="button" aria-keyshortcuts="e"> <!></button> <span class="head-hint svelte-lrdyn6"><!></span></span></div> <!> <!> <!></div>');function $a(e,n){Ue(n,!1);const s=()=>dt(Co,"$overviewEditMode",i),a=()=>dt(gp,"$canEditDeck",i),r=()=>dt(wo,"$overviewOpen",i),[i,l]=Dn(),m=c(),f=c(),z=c(),x=c(),V=c();let O=g(n,"pages",24,()=>[]),C=g(n,"width",8,1920),P=g(n,"height",8,1080),nt=g(n,"currentPath",8,""),W=g(n,"deck",8,""),Y=g(n,"present",8,!1);const U=Vs();let F=c(""),X=c(),tt=c(new Set),j=c(!1),Q=c([]),vt=c([]),et=c(),w=c();const $=new Map;let K=c("unknown");function M(){if(!t(et)){o(K,"unknown");return}const S=$.get(t(x));o(K,Dp(t(et).getBoundingClientRect(),S?S.getBoundingClientRect():null))}let A;function b(){A==null&&(A=requestAnimationFrame(()=>{A=void 0,M()}))}function k(){var S;(S=$.get(t(x)))==null||S.scrollIntoView({block:"center",behavior:"smooth"})}let N=c(0);function pt(S){var ot;(ot=$.get(S))==null||ot.focus()}function ht(S=t(N)){var ot;return S>0&&t(f).some($t=>$t.number===S)?S:t(x)>0&&t(f).some($t=>$t.number===t(x))?t(x):((ot=t(f)[0])==null?void 0:ot.number)??0}function it(){var S,ot,$t;(S=t(X))==null||S.focus(),($t=(ot=t(X))==null?void 0:ot.select)==null||$t.call(ot)}function ut(S){if(S.stopPropagation(),S.key==="Tab"){S.preventDefault();const ot=ht();ot>0&&(o(N,ot),ds().then(()=>pt(ot)));return}if(S.key==="Escape"){if(S.preventDefault(),t(z)){o(F,"");return}if(t(Tt)){vn();return}if(s()){ye();return}Jt()}}function L(){return zp(t(f).map(S=>{var ot;return((ot=$.get(S.number))==null?void 0:ot.getBoundingClientRect().top)??0}))}function mt(S){var We,sn;if(!t(et)||t(f).length===0)return 1;const ot=(We=$.get(t(f)[0].number))==null?void 0:We.getBoundingClientRect().top,$t=t(f)[S],jt=$t?(sn=$.get($t.number))==null?void 0:sn.getBoundingClientRect().top:void 0,oe=ot!=null&&jt!=null?jt-ot:0;return Lp(t(et).getBoundingClientRect().height,oe)}function lt(S){var sn;if(S.key==="Tab"){S.preventDefault(),S.stopPropagation(),it();return}const ot=Ip(S);if(ot==="ignore"||t(f).length===0)return;if(S.preventDefault(),S.stopPropagation(),ot==="commit"){const rn=t(f).find(go=>go.number===t(N))??t(f)[0];rn&&Ln(rn.path,rn.number);return}if(ot==="toCurrent"){t(x)>0&&t(f).some(rn=>rn.number===t(x))&&(o(N,t(x)),pt(t(N)));return}const $t=t(f).findIndex(rn=>rn.number===t(N)),jt=$t>=0?$t+1:1,oe=L(),We=Rp(jt,t(f).length,oe,mt(oe),ot);o(N,((sn=t(f)[We-1])==null?void 0:sn.number)??0),pt(t(N))}let Tt=c(!1),yt=c("add"),J=c(""),D=c(null),bt=c([]),At=c(!1),Et=c(""),Rt=c(""),Gt=c("content"),Te=c(""),Kt=c(!1),zt=c(!1),Nt=c(""),kt=c("info"),Dt=c(""),Yt=c(!0),Ut=c(""),ce=c(""),Qt;function wt(S,ot){var $t;return S.dataset.tile=String(ot),$.set(ot,S),($t=t(w))==null||$t.observe(S),{destroy(){var jt;$.delete(ot),(jt=t(w))==null||jt.unobserve(S)}}}function fe(){if(!(typeof IntersectionObserver>"u"||t(w))){o(w,new IntersectionObserver(S=>{var $t;let ot=!1;for(const jt of S){if(!jt.isIntersecting)continue;const oe=Number(jt.target.dataset.tile);Number.isFinite(oe)&&!t(tt).has(oe)&&(t(tt).add(oe),ot=!0),($t=t(w))==null||$t.unobserve(jt.target)}ot&&o(tt,new Set(t(tt)))},{root:t(et)??null,rootMargin:"400px 0px"}));for(const S of $.values())t(w).observe(S)}}function Jt(){o(Tt,!1),o(D,null),Co.set(!1),o(Nt,""),o(Dt,""),o(F,""),wo.set(!1)}function ye(){o(Tt,!1),o(D,null),o(Nt,""),o(Dt,""),Co.set(!1)}function Re(){o(Ut,"NOT ALLOWED"),o(ce,"Edit deck only works in vite dev — a static host has no source tree."),Qt&&clearTimeout(Qt),Qt=setTimeout(()=>{o(Ut,""),o(ce,"")},2600)}function de(){if(!a()){Re();return}s()?ye():(Co.set(!0),o(Nt,""))}function ae(S=""){if(!a()){Re();return}s()||Co.set(!0),o(yt,"add"),o(J,""),o(D,null),o(Et,""),o(Rt,"slide.html"),o(Gt,"content"),o(Te,S),o(Kt,!1),o(Yt,!0),o(Dt,""),o(Tt,!0),o(Nt,"")}function Xe(S,ot){if(!a()){Re();return}o(yt,"rename"),o(J,S),o(D,null),o(Et,ot),o(Rt,S),o(Kt,!0),o(Dt,""),o(Tt,!0),o(Nt,"")}function tn(S,ot){if(!a()){Re();return}o(yt,"duplicate"),o(J,S),o(D,null),o(Et,`${ot} (copy)`),o(Rt,`${yr(t(Et))}.html`),o(Kt,!1),o(Yt,!0),o(Dt,""),o(Tt,!0),o(Nt,"")}function on(){t(yt)==="rename"?ao():t(yt)==="duplicate"?io():Ie()}function kn(){if(!a())return Re(),null;if(!W())return o(kt,"error"),o(Nt,"No deck name — cannot write pages.ts."),null;const S=Np(t(Rt));if(!S)return o(kt,"error"),o(Nt,"Path must look like my-slide.html (lowercase, hyphens)."),null;const ot=t(Et).trim();return ot?{path:S,title:ot}:(o(kt,"error"),o(Nt,"Title is required."),null)}async function ao(){var oe;const S=kn();if(!S)return;const ot=t(J);o(zt,!0),o(kt,"info"),o(Nt,"Renaming…");const $t=await Tp({deck:W(),path:ot,newPath:S.path,title:S.title});if(o(zt,!1),$t.error){o(kt,"error"),o(Nt,$t.error);return}if(o(Tt,!1),S.path!==ot&&ot===nt()){Ln(S.path,t(x));return}const jt=((oe=$t.updated)==null?void 0:oe.length)??0;o(kt,"ok"),o(Nt,S.path===ot?`Renamed ${ot}`:`Renamed ${ot} → ${S.path}${jt?` · links updated in ${jt} file${jt===1?"":"s"}`:""}`)}async function io(){var We;const S=kn();if(!S)return;const ot=t(Yt),$t=t(J);o(zt,!0),o(kt,"info"),o(Nt,"Duplicating…");const jt=await Ep({deck:W(),path:$t,newPath:S.path,title:S.title});if(o(zt,!1),jt.error){o(kt,"error"),o(Nt,jt.error);return}o(Tt,!1);const oe=(((We=t(m).find(sn=>sn.path===$t))==null?void 0:We.number)??t(x))+1;if(ot){Ln(S.path,oe);return}o(kt,"ok"),o(Nt,`Duplicated ${$t} → ${S.path}`),o(Dt,S.path)}function vn(){o(Tt,!1),o(Nt,"")}async function Ie(){const S=kn();if(!S)return;const{path:ot,title:$t}=S,jt=t(Yt);o(zt,!0),o(kt,"info"),o(Nt,"Adding…");const oe=await _p({deck:W(),path:ot,title:$t,template:t(Gt),after:t(Te)||null});if(o(zt,!1),oe.error){o(kt,"error"),o(Nt,oe.error);return}if(o(Tt,!1),jt){Ln(ot,t(x)+1);return}o(kt,"ok"),o(Nt,`Added ${ot}`),o(Dt,ot)}function wn(){if(!t(Dt))return;const S=t(Dt);o(Dt,""),Ln(S,t(x)+1)}async function zn(S,ot){var jt;if(!a()){Re();return}if(!W()){o(kt,"error"),o(Nt,"No deck name — cannot write pages.ts.");return}o(Tt,!1),o(Nt,""),o(D,{path:S,title:ot}),o(bt,[]),o(At,!0);const $t=await Ap(W(),S);((jt=t(D))==null?void 0:jt.path)===S&&(o(bt,$t),o(At,!1))}function Yn(){o(D,null)}async function jn(S){if(!t(D))return;const{path:ot}=t(D);o(zt,!0),o(kt,"info"),o(Nt,S?"Deleting…":"Removing…");const $t=await Sp({deck:W(),path:ot,deleteFiles:S});if(o(zt,!1),$t.error){o(kt,"error"),o(Nt,$t.error);return}if(o(D,null),S&&ot===nt()){const jt=t(m).findIndex(We=>We.path===ot),oe=t(m)[jt+1]??t(m)[jt-1];if(oe){Ln(oe.path,oe.number);return}}o(kt,"ok"),o(Nt,S?`Deleted ${ot} — waiting for reload…`:`Removed ${ot} from the deck — waiting for reload…`)}function Ln(S,ot){wo.set(!1),Co.set(!1),o(Tt,!1),o(D,null);const $t=t(x)>0&&ot<t(x)?"back":"forward";ps(`./${S}${Y()?"?present":""}`,{viewTransitions:U,kind:"slide",direction:$t})}function Un(S){if(S.key==="Escape"&&r()&&!S.ctrlKey&&!S.metaKey&&!S.altKey){if(t(Tt)){S.preventDefault(),vn();return}if(t(D)){S.preventDefault(),Yn();return}if(s()){S.preventDefault(),ye();return}if(t(z)){S.preventDefault(),o(F,"");return}}if(r()&&!S.ctrlKey&&!S.metaKey&&!S.altKey&&!S.defaultPrevented&&(S.key==="e"||S.key==="E")){const $t=S.target,jt=($t==null?void 0:$t.tagName)??"";if($t!=null&&$t.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(jt))return;S.preventDefault(),de();return}const ot=Mp(S,r());ot!=="ignore"&&(S.preventDefault(),ot==="close"?Jt():wo.set(!0))}so(()=>{window.addEventListener("keydown",Un),window.addEventListener("resize",M),typeof IntersectionObserver>"u"&&o(j,!0)}),To(()=>{var S;window.removeEventListener("keydown",Un),window.removeEventListener("resize",M),A!=null&&cancelAnimationFrame(A),(S=t(w))==null||S.disconnect(),o(w,void 0),Qt&&clearTimeout(Qt)});function hn(){var ot;const S=document.activeElement;return S?!(Vr(S)||t(X)&&(S===t(X)||t(X).contains(S))||(ot=S.closest)!=null&&ot.call(S,".add-form-wrap")):!0}_(()=>(Z(O()),Z(nt())),()=>{o(m,Pp(O(),nt()))}),_(()=>(r(),Co),()=>{r()||(Co.set(!1),o(Tt,!1),o(D,null),o(N,0),o(F,""))}),_(()=>(t(m),t(F)),()=>{o(f,$p(t(m),t(F)))}),_(()=>t(F),()=>{o(z,t(F).trim().length>0)}),_(()=>t(m),()=>{var S;o(x,((S=t(m).find(ot=>ot.isCurrent))==null?void 0:S.number)??0)}),_(()=>(t(j),t(f),t(tt),t(x)),()=>{o(V,t(j)?new Set(t(f).map(S=>S.number)):Cp(t(tt),t(x)))}),_(()=>(t(Kt),t(Et),yr),()=>{!t(Kt)&&t(Et)&&o(Rt,`${yr(t(Et))}.html`)}),_(()=>(r(),t(f),t(N)),()=>{r()&&t(f).length>0&&(!t(N)||!t(f).some(S=>S.number===t(N)))&&o(N,ht(0))}),_(()=>(r(),t(et),t(w)),()=>{r()&&t(et)&&fe(),!r()&&t(w)&&(t(w).disconnect(),o(w,void 0))}),_(()=>(r(),t(et),t(x),t(N),t(f)),()=>{r()&&t(et)&&(t(x),ds().then(()=>{M(),(!t(N)||!t(f).some(S=>S.number===t(N)))&&o(N,ht(t(x))),t(N)&&hn()&&pt(t(N))}))}),Cn(),yn();var Xn=fn(),Ao=Wt(Xn);{var No=S=>{var ot=lu();let $t;var jt=u(ot),oe=u(jt),We=u(oe,!0);d(oe);var sn=p(oe,2),rn=u(sn);{var go=St=>{var ct=no();B(()=>gt(ct,`${t(f),st(()=>t(f).length)??""} of ${t(m),st(()=>t(m).length)??""}`)),h(St,ct)},Po=St=>{var ct=no();B(()=>gt(ct,`${t(m),st(()=>t(m).length)??""} slides`)),h(St,ct)};R(rn,St=>{t(z)?St(go):St(Po,-1)})}d(sn);var qn=p(sn,2);oo(qn),Le(qn,St=>o(X,St),()=>t(X));var T=p(qn,2);{var q=St=>{var ct=Fp();let De;var me=u(ct),Ct=p(me);{var ge=_e=>{var en=Op();G("click",en,nn(wn)),h(_e,en)};R(Ct,_e=>{t(Dt)&&_e(ge)})}d(ct),B(()=>{De=Pt(ct,1,"head-status svelte-lrdyn6",null,De,{err:t(kt)==="error",ok:t(kt)==="ok"}),gt(me,`${t(Nt)??""} `)}),h(St,ct)};R(T,St=>{(t(Nt)||t(Dt))&&St(q)})}var rt=p(T,2),It=u(rt);{var Zt=St=>{var ct=Bp();let De;var me=u(ct);{var Ct=_e=>{var en=Hp();h(_e,en)},ge=_e=>{var en=Kp();h(_e,en)};R(me,_e=>{t(K)==="above"?_e(Ct):t(K)==="below"&&_e(ge,1)})}Ke(),d(ct),B(()=>De=Pt(ct,1,"current-btn svelte-lrdyn6",null,De,{pending:t(K)==="above"||t(K)==="below"})),G("click",ct,nn(k)),h(St,ct)};R(It,St=>{t(x)>0&&St(Zt)})}var ke=p(It,2);{var pe=St=>{var ct=jp();B(()=>ct.disabled=t(zt)),G("click",ct,nn(()=>ae(""))),h(St,ct)};R(ke,St=>{s()&&St(pe)})}var Lt=p(ke,2);let se;var Vt=u(Lt),Mt=p(Vt);{var Bt=St=>{var ct=Up();h(St,ct)};R(Mt,St=>{t(Ut)||St(Bt)})}d(Lt);var Ot=p(Lt,2),Me=u(Ot);{var Ae=St=>{var ct=qp();Ke(3),h(St,ct)},he=St=>{var ct=Wp();Ke(7),h(St,ct)};R(Me,St=>{s()?St(Ae):St(he,-1)})}d(Ot),d(rt),d(jt);var ee=p(jt,2);{var xe=St=>{var ct=Qp(),De=u(ct),me=u(De),Ct=u(me);{var ge=te=>{var Ht=no();B(()=>gt(Ht,`Rename ${t(J)??""}`)),h(te,Ht)},_e=te=>{var Ht=no();B(()=>gt(Ht,`Duplicate ${t(J)??""}`)),h(te,Ht)},en=te=>{var Ht=no("Add slide");h(te,Ht)};R(Ct,te=>{t(yt)==="rename"?te(ge):t(yt)==="duplicate"?te(_e,1):te(en,-1)})}d(me);var mn=p(me,2),Be=p(u(mn),2);oo(Be),d(mn);var Rn=p(mn,2),In=p(u(Rn),2);oo(In),d(Rn);var an=p(Rn,2);{var gn=te=>{var Ht=Vp(),ue=Wt(Ht),Fe=p(u(ue),2),xn=u(Fe);xn.value=xn.__value="content";var Nn=p(xn);Nn.value=Nn.__value="title",d(Fe),d(ue);var co=p(ue,2),On=p(u(co),2),$o=u(On);$o.value=$o.__value="";var Ho=p($o);Mn(Ho,1,()=>t(m),mo,(_n,Gn)=>{var Sn=Gp(),Ko=u(Sn);d(Sn);var Pn={};B(()=>{gt(Ko,`${t(Gn),st(()=>t(Gn).number)??""}. ${t(Gn),st(()=>t(Gn).title)??""}`),Pn!==(Pn=(t(Gn),st(()=>t(Gn).path)))&&(Sn.value=(Sn.__value=(t(Gn),st(()=>t(Gn).path)))??"")}),h(_n,Sn)}),d(On),d(co),B(()=>{Fe.disabled=t(zt),On.disabled=t(zt)}),ca(Fe,()=>t(Gt),_n=>o(Gt,_n)),ca(On,()=>t(Te),_n=>o(Te,_n)),h(te,Ht)};R(an,te=>{t(yt)==="add"&&te(gn)})}var ve=p(an,2);{var ln=te=>{var Ht=Yp();h(te,Ht)},lo=te=>{var Ht=Xp(),ue=u(Ht);oo(ue);var Fe=p(ue,2),xn=u(Fe);d(Fe),d(Ht),B(()=>{ue.disabled=t(zt),gt(xn,`Open after ${t(yt)==="duplicate"?"duplicating":"adding"}`)}),Za(ue,()=>t(Yt),Nn=>o(Yt,Nn)),h(te,Ht)};R(ve,te=>{t(yt)==="rename"?te(ln):te(lo,-1)})}var bo=p(ve,2),cn=u(bo),Wn=p(cn,2),Qn=u(Wn,!0);d(Wn),d(bo),d(De),d(ct),B(()=>{Be.disabled=t(zt),vl(In,t(Rt)),In.disabled=t(zt),cn.disabled=t(zt),Wn.disabled=t(zt),gt(Qn,t(yt)==="rename"?"Rename":t(yt)==="duplicate"?"Duplicate":"Add")}),xo(Be,()=>t(Et),te=>o(Et,te)),G("input",In,te=>{o(Kt,!0),o(Rt,te.currentTarget.value)}),G("click",cn,vn),G("submit",De,vi(on)),G("click",ct,nn(function(te){bs.call(this,n,te)})),G("keydown",ct,nn(function(te){bs.call(this,n,te)})),h(St,ct)};R(ee,St=>{t(Tt)&&St(xe)})}var Ce=p(ee,2);{var Oe=St=>{var ct=tu(),De=u(ct),me=u(De),Ct=u(me);d(me);var ge=p(me,4),_e=u(ge);{var en=ve=>{var ln=no("Checking for links to it…");h(ve,ln)},mn=ve=>{var ln=Zp(),lo=p(Wt(ln));Mn(lo,1,()=>t(bt),mo,(bo,cn,Wn)=>{Ke();var Qn=Jp(),te=Wt(Qn,!0);te.nodeValue=Wn?", ":" ";var Ht=p(te),ue=u(Ht,!0);d(Ht),B(()=>gt(ue,(t(cn),st(()=>t(cn).file)))),h(bo,Qn)}),Ke(),h(ve,ln)},Be=ve=>{var ln=no("No other slide links to it.");h(ve,ln)};R(_e,ve=>{t(At)?ve(en):(t(bt),st(()=>t(bt).length)?ve(mn,1):ve(Be,-1))})}d(ge);var Rn=p(ge,2),In=u(Rn),an=p(In,2),gn=p(an,2);d(Rn),d(De),d(ct),B(()=>{I(De,"aria-label",`Remove ${t(D),st(()=>t(D).title)??""}`),gt(Ct,`Remove “${t(D),st(()=>t(D).title)??""}” (${t(D),st(()=>t(D).path)??""})?`),In.disabled=t(zt),an.disabled=t(zt),gn.disabled=t(zt)}),G("click",In,Yn),G("click",an,()=>jn(!1)),G("click",gn,()=>jn(!0)),G("click",ct,nn(function(ve){bs.call(this,n,ve)})),G("keydown",ct,nn(function(ve){bs.call(this,n,ve)})),h(St,ct)};R(Ce,St=>{t(D)&&St(Oe)})}var re=p(Ce,2);{var Ne=St=>{var ct=eu(),De=u(ct);d(ct),B(me=>gt(De,`No slides match “${me??""}”.`),[()=>(t(F),st(()=>t(F).trim()))]),h(St,ct)},An=St=>{var ct=iu();let De;Mn(ct,5,()=>t(f),me=>me.path,(me,Ct)=>{var ge=au(),_e=u(ge);let en;var mn=u(_e),Be=u(mn);{var Rn=Ht=>{var ue=nu();B(Fe=>{I(ue,"title",(t(Ct),st(()=>t(Ct).title))),I(ue,"src",(t(Ct),st(()=>t(Ct).src))),le(ue,`width:${C()??""}px; height:${P()??""}px; transform: translate(-50%, -50%) scale(${Fe??""});`)},[()=>(Z(Pa),t(Q),t(Ct),t(vt),Z(C()),Z(P()),st(()=>Pa(t(Q)[t(Ct).number]??0,t(vt)[t(Ct).number]??0,C(),P())))]),h(Ht,ue)},In=He(()=>(t(V),t(Ct),st(()=>t(V).has(t(Ct).number)))),an=Ht=>{var ue=ou(),Fe=u(ue,!0);d(ue),B(()=>gt(Fe,(t(Ct),st(()=>t(Ct).title)))),h(Ht,ue)};R(Be,Ht=>{t(In)?Ht(Rn):Ht(an,-1)})}d(mn);var gn=p(mn,2),ve=u(gn),ln=u(ve,!0);d(ve);var lo=p(ve,2),bo=u(lo,!0);d(lo),d(gn);var cn=p(gn,2);{var Wn=Ht=>{var ue=su(),Fe=u(ue,!0);d(ue),B(()=>gt(Fe,(t(Ct),st(()=>t(Ct).path)))),h(Ht,ue)};R(cn,Ht=>{s()&&Ht(Wn)})}d(_e),as(_e,(Ht,ue)=>wt==null?void 0:wt(Ht,ue),()=>t(Ct).number),Xo(()=>G("click",_e,()=>Ln(t(Ct).path,t(Ct).number)));var Qn=p(_e,2);{var te=Ht=>{var ue=ru(),Fe=Wt(ue),xn=u(Fe),Nn=p(xn,2),co=p(Nn,2);d(Fe);var On=p(Fe,2);B(()=>{I(xn,"aria-label",`Rename ${t(Ct),st(()=>t(Ct).title)??""}`),xn.disabled=t(zt),I(Nn,"aria-label",`Duplicate ${t(Ct),st(()=>t(Ct).title)??""}`),Nn.disabled=t(zt),I(co,"aria-label",`Remove ${t(Ct),st(()=>t(Ct).title)??""} from deck`),co.disabled=t(zt),I(On,"aria-label",`Add slide after ${t(Ct),st(()=>t(Ct).title)??""}`),On.disabled=t(zt)}),G("click",xn,nn(()=>Xe(t(Ct).path,t(Ct).title))),G("click",Nn,nn(()=>tn(t(Ct).path,t(Ct).title))),G("click",co,nn(()=>zn(t(Ct).path,t(Ct).title))),G("click",On,nn(()=>ae(t(Ct).path))),h(Ht,ue)};R(Qn,Ht=>{s()&&Ht(te)})}d(ge),B(()=>{en=Pt(_e,1,"tile svelte-lrdyn6",null,en,{current:t(Ct).isCurrent}),I(_e,"aria-current",(t(Ct),st(()=>t(Ct).isCurrent?"page":void 0))),le(mn,`aspect-ratio: ${C()??""} / ${P()??""};`),gt(ln,(t(Ct),st(()=>t(Ct).number))),gt(bo,(t(Ct),st(()=>t(Ct).title)))}),rs(mn,"clientWidth",Ht=>Kn(Q,t(Q)[t(Ct).number]=Ht)),rs(mn,"clientHeight",Ht=>Kn(vt,t(vt)[t(Ct).number]=Ht)),h(me,ge)}),d(ct),Le(ct,me=>o(et,me),()=>t(et)),B(()=>De=Pt(ct,1,"grid svelte-lrdyn6",null,De,{editing:s()})),G("scroll",ct,b),G("keydown",ct,lt),h(St,ct)};R(re,St=>{t(z),t(f),st(()=>t(z)&&t(f).length===0)?St(Ne):St(An,-1)})}d(ot),B(()=>{$t=Pt(ot,1,"scrim no-print svelte-lrdyn6",null,$t,{editing:s(),present:Y()}),le(ot,`--canvas-w:${C()??""}px; --canvas-h:${P()??""}px;`),gt(We,s()?"EDIT DECK":"OVERVIEW PAGE"),se=Pt(Lt,1,"edit-btn svelte-lrdyn6",null,se,{on:s(),flash:!!t(Ut)}),I(Lt,"title",t(ce)||(a()?s()?"Leave edit mode (E)":"Add, rename, duplicate or remove slides (E)":"Edit deck only works in vite dev")),I(Lt,"aria-pressed",s()),gt(Vt,`${(t(Ut)||(s()?"DONE":"EDIT"))??""} `)}),xo(qn,()=>t(F),St=>o(F,St)),G("keydown",qn,ut),G("click",qn,nn(function(St){bs.call(this,n,St)})),G("click",Lt,nn(de)),G("click",ot,fi(Jt)),h(S,ot)};R(Ao,S=>{r()&&S(No)})}h(e,Xn),qe(),l()}const cu="toolBarPinned",du="controlBarPinned",pu="chromePinned";function Mi(){try{return localStorage.getItem(pu)==="true"}catch{return!1}}const Ma=Xs(cu,Mi(),{codec:Qs(),sync:!1}),Ca=Xs(du,Mi(),{codec:Qs(),sync:!1}),Yr="chromeBare";function uu(e){if(!e||!e.has("bare"))return null;const n=(e.get("bare")??"").trim().toLowerCase();return n!=="off"&&n!=="false"&&n!=="0"}function Ci(e,n,s){return e===!0||e===!1?e:n===!0||s===!0}function Di(){try{return Js(localStorage.getItem(Yr))}catch{return null}}const er=Ye(Di()),Xr=Ye(!1),nr=Qo([er,Ls,Xr,ni],([e,n,s,a])=>a||Ci(e,n,s)),fu=Qo([er,Xr],([e,n])=>Ci(e,!0,n));function js(e){try{localStorage.setItem(Yr,String(e))}catch{}er.set(e)}window.addEventListener("storage",e=>{(e.key===Yr||e.key===null)&&er.set(Di())});const Es=Ye(!1);Oo.subscribe(e=>{e&&Es.set(!1)});function Ms(){if(Ee(nr)){js(!1),Es.set(!1);return}js(!0),xi(),Es.set(!0),document.activeElement instanceof HTMLElement&&document.activeElement.closest(".annot-tools, .ctrl-bar")&&document.activeElement.blur()}function vu(e){Xr.set(e===!0)}function hu(e){const n=uu(e.searchParams);n!==null&&js(n)}function Jo(e){const n=e;return n?n.isContentEditable?!0:/^(INPUT|TEXTAREA|SELECT)$/.test(n.tagName??""):!1}function mu(e,n){return!n||e.altKey||e.shiftKey||!(e.ctrlKey||e.metaKey)?!1:e.key==="s"||e.key==="S"||e.code==="KeyS"}function zi(e){const n=(e.key??"").toLowerCase();if(/^[a-z]$/.test(n))return n;const s=e.code??"";return/^Key[A-Z]$/.test(s)?s.slice(3).toLowerCase():""}function gu(e,n,s){if(!n&&!s||Jo(e.target)||e.ctrlKey||e.metaKey||e.altKey||e.defaultPrevented)return"ignore";switch(zi(e)){case"o":return"overview";case"k":return"kiosk";case"b":return"bars";case"i":return"pointer";case"c":return"capture";case"r":return"print";case"s":return"source";case"e":return"edit";default:return"ignore"}}function bu(e,n){if(Jo(e.target))return"ignore";if(e.altKey&&!e.ctrlKey&&!e.metaKey&&(e.code==="Period"||e.key==="."))return"arm";if(e.key==="Escape"&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&!e.defaultPrevented)return"disarm";if(!n||e.ctrlKey||e.metaKey||e.altKey||e.defaultPrevented)return"ignore";switch(zi(e)){case"a":return"annotate";case"j":return"adjust";case"z":return"display";case"p":return"present";case"m":return"more";case"t":return"toc";case"u":return"kiosk-pause";default:return"ignore"}}const Li=[2,1.5,1.25,1,.75,.5,.25],Ri=[{factor:1600/1920,name:"HD+"},{factor:1280/1920,name:"720p"},{factor:960/1920,name:"qHD"},{factor:854/1920,name:"480p"},{factor:640/1920,name:"nHD"}],yu=.005;function _s(e,n){return Math.abs(e-n)<yu}function Da(e){const n=[{id:"fitted",kind:"fitted"}];for(const s of Li)n.push({id:`s-${s}`,kind:"factor",factor:s});if(e)for(const s of Ri)n.push({id:`r-${s.name}`,kind:"factor",factor:s.factor});return n}function ku(e,n,s){if(!e.length)return 0;if(n){const r=e.findIndex(i=>i.kind==="fitted");return r>=0?r:0}const a=e.findIndex(r=>r.kind==="factor"&&_s(r.factor,s));return a>=0?a:0}function kr(e,n,s){if(s<=0)return 0;const a=Number.isFinite(e)?Math.trunc(e):0,r=Number.isFinite(n)?Math.trunc(n):0;return((a+r)%s+s)%s}var wu=E('<button type="button" role="menuitem" tabindex="-1"><span class="k"> </span> <span class="v svelte-1qq1kvo"> <!></span></button>'),xu=E('<button type="button" role="menuitem" tabindex="-1"><span class="k"> </span><span class="v svelte-1qq1kvo"> </span></button>'),_u=E('<div class="sep svelte-1qq1kvo">RESOLUTION</div> <!>',1),Su=E('<div class="menu svelte-1qq1kvo" role="menu" aria-label="Display zoom"><button type="button" role="menuitem" data-choice="fitted" tabindex="-1"><span class="k">FITTED</span><span class="v svelte-1qq1kvo">fit to window</span></button> <div class="sep svelte-1qq1kvo">SCALE</div> <!> <!> <div class="sep svelte-1qq1kvo"><span class="tool-mn">C</span>USTOM</div> <form class="row custom svelte-1qq1kvo"><input type="number" step="1" placeholder="%" aria-label="Custom zoom percent" class="svelte-1qq1kvo"/> <button type="submit" class="svelte-1qq1kvo">Set</button></form></div>'),Eu=E("<div><!> <!></div>");function Tu(e,n){Ue(n,!1);const s=()=>dt(Vo,"$displayMode",r),a=()=>dt(Fs,"$displayFactor",r),[r,i]=Dn(),l=c(),m=c(),f=c(),z=c(),x=c();let V=g(n,"width",8,1920),O=g(n,"height",8,1080),C=g(n,"inline",8,!1),P=c(!1),nt=c(),W=c(),Y=c(),U=c(""),F=0;const X=V()===1920&&O()===1080,tt=L=>`${Math.round(L*100)}%`,j=L=>`${Math.round(V()*L)}×${Math.round(O()*L)}`,Q=L=>_s(L,2)?"4K":_s(L,1)?"1:1":"";function vt(){Vo.set("FITTED"),o(P,!1)}function et(L){Fs.set(Ar(L)),Vo.set("SCALED"),o(P,!1)}function w(){const L=parseFloat(t(U));Number.isFinite(L)&&L>0&&et(L/100)}function $(L){var Tt,yt;F=kr(L,0,t(l).length);const mt=(Tt=t(l)[F])==null?void 0:Tt.id;if(!mt||!t(W))return;const lt=t(W).querySelector(`[data-choice="${mt}"]`);lt==null||lt.focus(),(yt=lt==null?void 0:lt.scrollIntoView)==null||yt.call(lt,{block:"nearest"})}function K(){var L,mt,lt,Tt;t(Y)&&(t(Y).focus(),(mt=(L=t(Y)).select)==null||mt.call(L),(Tt=(lt=t(Y)).scrollIntoView)==null||Tt.call(lt,{block:"nearest"}))}async function M(L){o(P,L),L&&(F=ku(t(l),t(m),t(f)),await ds(),await ds(),$(F))}const A=ki.subscribe(L=>{L>0&&M(!t(P))});function b(L){if(t(P)){if(Jo(L.target)){L.key==="Escape"&&(L.preventDefault(),o(P,!1));return}if(!L.ctrlKey&&!L.metaKey&&!L.altKey&&(L.key==="c"||L.key==="C"||L.code==="KeyC")){L.preventDefault(),K();return}switch(L.key){case"Escape":L.preventDefault(),o(P,!1);return;case"ArrowDown":L.preventDefault(),$(kr(F,1,t(l).length));return;case"ArrowUp":L.preventDefault(),$(kr(F,-1,t(l).length));return;case"Home":L.preventDefault(),$(0);return;case"End":L.preventDefault(),$(t(l).length-1);return;default:return}}}function k(L){t(nt)&&!t(nt).contains(L.target)&&o(P,!1)}so(()=>{window.addEventListener("keydown",b),document.addEventListener("click",k)}),To(()=>{A(),window.removeEventListener("keydown",b),document.removeEventListener("click",k)}),_(()=>Da,()=>{o(l,Da(X))}),_(()=>s(),()=>{o(m,s()==="FITTED")}),_(()=>a(),()=>{o(f,a())}),_(()=>(t(m),t(f)),()=>{o(z,t(m)?"FITTED":tt(t(f)))}),_(()=>(Z(C()),t(z)),()=>{o(x,C()?`${t(z)} (Z)`:t(z))}),Cn(),yn();var N=Eu();let pt;var ht=u(N);Bn(ht,{chrome:!0,get text(){return t(x)},get hoverText(){return t(x)},get isSelected(){return t(P)},$$events:{click:()=>M(!t(P))}});var it=p(ht,2);{var ut=L=>{var mt=Su(),lt=u(mt);let Tt;var yt=p(lt,4);Mn(yt,1,()=>Li,mo,(Et,Rt)=>{var Gt=wu();let Te;var Kt=u(Gt),zt=u(Kt,!0);d(Kt);var Nt=p(Kt,2),kt=u(Nt,!0),Dt=p(kt);{var Yt=ce=>{var Qt=no();B(wt=>gt(Qt,`· ${wt??""}`),[()=>(t(Rt),st(()=>Q(t(Rt))))]),h(ce,Qt)},Ut=He(()=>(t(Rt),st(()=>X&&Q(t(Rt)))));R(Dt,ce=>{t(Ut)&&ce(Yt)})}d(Nt),d(Gt),B((ce,Qt,wt)=>{Te=Pt(Gt,1,"row svelte-1qq1kvo",null,Te,ce),I(Gt,"data-choice",`s-${t(Rt)}`),gt(zt,Qt),gt(kt,wt)},[()=>({current:!t(m)&&_s(t(f),t(Rt))}),()=>(t(Rt),st(()=>tt(t(Rt)))),()=>(t(Rt),st(()=>j(t(Rt))))]),G("click",Gt,()=>et(t(Rt))),h(Et,Gt)});var J=p(yt,2);{var D=Et=>{var Rt=_u(),Gt=p(Wt(Rt),2);Mn(Gt,1,()=>Ri,mo,(Te,Kt)=>{var zt=xu();let Nt;var kt=u(zt),Dt=u(kt,!0);d(kt);var Yt=p(kt),Ut=u(Yt);d(Yt),d(zt),B((ce,Qt,wt)=>{Nt=Pt(zt,1,"row svelte-1qq1kvo",null,Nt,ce),I(zt,"data-choice",(t(Kt),st(()=>`r-${t(Kt).name}`))),gt(Dt,Qt),gt(Ut,`${wt??""} · ${t(Kt),st(()=>t(Kt).name)??""}`)},[()=>({current:!t(m)&&_s(t(f),t(Kt).factor)}),()=>(t(Kt),st(()=>j(t(Kt).factor))),()=>(t(Kt),st(()=>tt(t(Kt).factor)))]),G("click",zt,()=>et(t(Kt).factor)),h(Te,zt)}),h(Et,Rt)};R(J,Et=>{X&&Et(D)})}var bt=p(J,4),At=u(bt);oo(At),Le(At,Et=>o(Y,Et),()=>t(Y)),Ke(2),d(bt),d(mt),Le(mt,Et=>o(W,Et),()=>t(W)),B((Et,Rt)=>{Tt=Pt(lt,1,"row svelte-1qq1kvo",null,Tt,{current:t(m)}),I(At,"min",Et),I(At,"max",Rt)},[()=>(Z(pa),st(()=>Math.round(pa*100))),()=>(Z(ua),st(()=>Math.round(ua*100)))]),G("click",lt,vt),xo(At,()=>t(U),Et=>o(U,Et)),G("submit",bt,vi(w)),h(L,mt)};R(it,L=>{t(P)&&L(ut)})}d(N),Le(N,L=>o(nt,L),()=>t(nt)),B(()=>pt=Pt(N,1,"mode gp-chrome no-print svelte-1qq1kvo",null,pt,{expanded:t(P),inline:C()})),h(e,N),qe(),i()}const za="0.6.1";var Au=E('<div role="group" aria-label="Slide tools"><button type="button"><svg class="pin-icon svelte-1bzzyuu" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"></path></svg></button> <span class="annot-bar-sep" aria-hidden="true"></span> <!> <span class="annot-bar-sep" aria-hidden="true"></span> <button type="button"><span class="tool-mn">A</span>NNOTATE</button> <!> <span class="annot-bar-sep" aria-hidden="true"></span> <!> <span class="annot-bar-sep" aria-hidden="true"></span>  <div role="presentation"><button type="button" class="annot-hamburger svelte-1bzzyuu" aria-haspopup="menu" aria-label="More tools (M)">☰ (M)</button>  <div class="annot-drop svelte-1bzzyuu" role="menu" aria-label="More tools" tabindex="-1"><!> <!> <!> <!> <div class="menu-sep svelte-1bzzyuu" role="separator"></div> <!> <!> <div class="menu-sep svelte-1bzzyuu" role="separator"></div> <!> <div class="menu-sep svelte-1bzzyuu" role="separator"></div> <div class="menu-about svelte-1bzzyuu" role="none"> </div></div></div></div>');function Nu(e,n){Ue(n,!0);const s=()=>dt(wo,"$overviewOpen",x),a=()=>dt(Fo,"$moreMenuOpen",x),r=()=>dt(Ma,"$toolBarPinned",x),i=()=>dt(Oo,"$chromeArmed",x),l=()=>dt(nr,"$chromeBare",x),m=()=>dt(Es,"$bareTucked",x),f=()=>dt(is,"$annotationMode",x),z=()=>dt(Ys,"$canAnnotate",x),[x,V]=Dn();let O=g(n,"width",3,1920),C=g(n,"height",3,1080),P=Ze(void 0);Io(()=>{s()&&(eo(),document.activeElement instanceof HTMLElement&&document.activeElement.blur())}),Io(()=>{var X;if(a())return;const F=document.activeElement;F instanceof HTMLElement&&((X=t(P))!=null&&X.contains(F))&&F.blur()});let nt=Ze(!1);Io(()=>{a()&&o(nt,!1)}),Io(()=>{if(!a())return;const F=X=>{var tt;(tt=t(P))!=null&&tt.contains(X.target)||eo()};return document.addEventListener("pointerdown",F,!0),()=>document.removeEventListener("pointerdown",F,!0)});var W=fn(),Y=Wt(W);{var U=F=>{var X=Au();let tt;var j=u(X);let Q;var vt=p(j,4);uo(vt,()=>n.presentBtn??po);var et=p(vt,4);let w;var $=p(et,2);uo($,()=>n.adjustGroup??po);var K=p($,4);Tu(K,{get width(){return O()},get height(){return C()},inline:!0});var M=p(K,4);let A;var b=u(M),k=p(b,2),N=u(k);uo(N,()=>n.overviewBtn??po);var pt=p(N,2);uo(pt,()=>n.kioskItem??po);var ht=p(pt,2);uo(ht,()=>n.barsItem??po);var it=p(ht,2);uo(it,()=>n.pointerItem??po);var ut=p(it,4);uo(ut,()=>n.captureItem??po);var L=p(ut,2);uo(L,()=>n.printBtn??po);var mt=p(L,4);uo(mt,()=>n.sourceItem??po);var lt=p(mt,4),Tt=u(lt);d(lt),d(k),d(M),Le(M,yt=>o(P,yt),()=>t(P)),d(X),B(()=>{tt=Pt(X,1,"annot-tools no-print svelte-1bzzyuu",null,tt,{pinned:r(),armed:i(),"menu-open":a(),"overview-open":s(),bare:l(),tucked:l()&&m()}),I(X,"aria-hidden",s()?"true":void 0),Q=Pt(j,1,"annot-tab pin-tab svelte-1bzzyuu",null,Q,{on:r()}),I(j,"aria-pressed",r()),I(j,"aria-label",r()?"PIN on":"PIN off"),I(j,"title",r()?"PIN — this bar stays visible (click to auto-hide again)":"PIN — keep this bar visible"),w=Pt(et,1,"annot-tab annotate-tab",null,w,{on:f()}),et.disabled=!z(),I(et,"aria-pressed",f()),I(et,"aria-label",f()?"ANNOTATE on":"ANNOTATE off"),I(et,"title",z()?f()?"ANNOTATE — drawing (click to put the pen down)":"ANNOTATE — draw on this slide":"ANNOTATE — the pen is not offered on this deck"),A=Pt(M,1,"annot-menu svelte-1bzzyuu",null,A,{"menu-open":a(),dismissed:t(nt)}),I(b,"aria-expanded",a()),I(b,"title",`More — Overview, Kiosk, Bars, Pointer, Capture, Print, Source, Edit · GeekPresent ${za}`),gt(Tt,`GeekPresent ${za}`)}),Je("click",j,()=>Ma.update(yt=>!yt)),Je("click",et,()=>is.update(yt=>!yt)),G("pointerleave",M,()=>o(nt,!1)),Je("click",b,()=>_i()),Je("click",k,()=>{eo(),o(nt,!0)}),h(F,X)};R(Y,F=>{F(U)})}h(e,W),qe(),V()}Br(["click"]);var Pu=E('<span class="ctrl-bar-sep svelte-1un42o" aria-hidden="true"></span>'),$u=E('<div role="group" aria-label="Slide controls"><button type="button"><svg class="pin-icon svelte-1un42o" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"></path></svg></button> <span class="ctrl-bar-sep svelte-1un42o" aria-hidden="true"></span> <!> <span class="ctrl-bar-sep svelte-1un42o" aria-hidden="true"></span> <!> <!> <div></div></div>');function Mu(e,n){Ue(n,!0);const s=()=>dt(hl,"$hostedAnim",f),a=()=>dt(Ca,"$controlBarPinned",f),r=()=>dt(Oo,"$chromeArmed",f),i=()=>dt(wo,"$overviewOpen",f),l=()=>dt(nr,"$chromeBare",f),m=()=>dt(Es,"$bareTucked",f),[f,z]=Dn();let x=Ze(void 0);so(()=>(t(x)&&da.set(t(x)),()=>da.set(null)));let V=He(()=>s().size>0);var O=fn(),C=Wt(O);{var P=nt=>{var W=$u();let Y;var U=u(W);let F;var X=p(U,4);uo(X,()=>n.tocItem??po);var tt=p(X,4);uo(tt,()=>n.navGroup??po);var j=p(tt,2);{var Q=w=>{var $=Pu();h(w,$)};R(j,w=>{t(V)&&w(Q)})}var vt=p(j,2);let et;Le(vt,w=>o(x,w),()=>t(x)),d(W),B(()=>{Y=Pt(W,1,"ctrl-bar no-print svelte-1un42o",null,Y,{pinned:a(),armed:r(),"overview-open":i(),bare:l(),tucked:l()&&m()}),I(W,"aria-hidden",i()?"true":void 0),F=Pt(U,1,"ctrl-pin svelte-1un42o",null,F,{on:a()}),I(U,"aria-pressed",a()),I(U,"aria-label",a()?"PIN on":"PIN off"),I(U,"title",a()?"PIN — this bar stays visible (click to auto-hide again)":"PIN — keep this bar visible"),et=Pt(vt,1,"ctrl-anim svelte-1un42o",null,et,{"has-anim":t(V)})}),Je("click",U,()=>Ca.update(w=>!w)),h(nt,W)};R(C,nt=>{nt(P)})}h(e,O),qe(),z()}Br(["click"]);var Cu=E('<div class="map gp-chrome no-print svelte-ngdolz"><div class="view svelte-ngdolz"></div></div>');function Du(e,n){Ue(n,!1);const s=c();let a=g(n,"width",8,1920),r=g(n,"height",8,1080),i=g(n,"rect",24,()=>({left:0,top:0,width:1,height:1}));const l=160;_(()=>(Z(a()),Z(r())),()=>{o(s,Math.round(l/(a()/r())))}),Cn(),yn();var m=Cu(),f=u(m);d(m),B(()=>{le(m,`width:160px; height:${t(s)??""}px;`),le(f,`left:${Z(i()),st(()=>i().left*100)??""}%; top:${Z(i()),st(()=>i().top*100)??""}%; width:${Z(i()),st(()=>i().width*100)??""}%; height:${Z(i()),st(()=>i().height*100)??""}%;`)}),h(e,m),qe()}var zu=ro('<svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-1sadc1x"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>'),Lu=ro('<svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-1sadc1x"><path d="M8 5v14l11-7z"></path></svg>'),Ru=E('<div class="anim svelte-1sadc1x"><button class="icon svelte-1sadc1x"><!></button> <div class="track svelte-1sadc1x" role="slider" tabindex="0" aria-label="Animation progress (audience)"><div class="fill svelte-1sadc1x"></div> <div class="knob svelte-1sadc1x"></div></div> <button class="icon svelte-1sadc1x" aria-label="Restart"><svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-1sadc1x"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"></path></svg></button> <span class="label svelte-1sadc1x">ANIMATE</span></div>');function Iu(e,n){Ue(n,!1);let s=g(n,"onCommand",8,null),a=g(n,"scope",8,".content"),r=[],i=0,l=c(!1),m=c(!1),f=c(0),z=c(),x=0;function V(){const A=document.querySelector(a())??document;r=qr(A),i=yc(r),o(l,r.length>0&&i>0),t(l)&&(o(m,oi(r)),o(f,Is(r)))}function O(){var A;(A=s())==null||A({playing:t(m),fraction:t(f)})}function C(){o(f,Is(r)),t(m)&&!r.every(A=>A.playState==="finished")?x=requestAnimationFrame(C):(r.length&&r.every(A=>A.playState==="finished")&&(o(m,!1),o(f,1),O()),x=0)}function P(){!x&&Er&&(x=requestAnimationFrame(C))}function nt(){x&&(cancelAnimationFrame(x),x=0)}function W(A){o(f,Math.max(0,Math.min(1,A)));const b=t(f)*i;for(const k of r)k.currentTime=Math.min(b,xc(k))}function Y(){Is(r)>=1&&W(0),wc(r),o(m,!0),P(),O()}function U(){kc(r),o(m,!1),nt(),O()}function F(){t(m)?U():Y()}function X(){W(0),Y()}let tt=!1;function j(A){const b=t(z).getBoundingClientRect();return(A-b.left)/b.width}function Q(A){var b,k;tt=!0,U(),W(j(A.clientX)),O(),(k=(b=t(z)).setPointerCapture)==null||k.call(b,A.pointerId)}function vt(A){tt&&(W(j(A.clientX)),O())}function et(A){var b,k;tt=!1,(k=(b=t(z)).releasePointerCapture)==null||k.call(b,A.pointerId)}function w(){nt(),V(),t(l)?t(m)&&P():requestAnimationFrame(V)}so(w),bc(w),To(nt),yn();var $=fn(),K=Wt($);{var M=A=>{var b=Ru(),k=u(b),N=u(k);{var pt=lt=>{var Tt=zu();h(lt,Tt)},ht=lt=>{var Tt=Lu();h(lt,Tt)};R(N,lt=>{t(m)?lt(pt):lt(ht,-1)})}d(k);var it=p(k,2);I(it,"aria-valuemin",0),I(it,"aria-valuemax",100);var ut=u(it),L=p(ut,2);d(it),Le(it,lt=>o(z,lt),()=>t(z));var mt=p(it,2);Ke(2),d(b),B(lt=>{I(k,"aria-label",t(m)?"Pause":"Play"),I(it,"aria-valuenow",lt),le(ut,`width:${t(f)*100}%`),le(L,`left:${t(f)*100}%`)},[()=>(t(f),st(()=>Math.round(t(f)*100)))]),G("click",k,F),G("pointerdown",it,Q),G("pointermove",it,vt),G("pointerup",it,et),G("click",mt,X),h(A,b)};R(K,A=>{t(l)&&A(M)})}h(e,$),qe()}const Ou="/__geekpresent/note-load",Fu="/__geekpresent/note-save";async function Hu(e){try{const n=await fetch(`${Ou}?route=${encodeURIComponent(e)}`),s=await n.json().catch(()=>({}));return n.ok?typeof s.text!="string"?{ok:!1,error:"server returned no note"}:{ok:!0,text:s.text,fingerprint:s.fingerprint,file:s.file}:{ok:!1,error:s.error||`HTTP ${n.status}`}}catch(n){return{ok:!1,error:n instanceof Error?n.message:String(n)}}}async function Ku(e,n,s){try{const a=await fetch(Fu,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({route:e,text:n,fingerprint:s})}),r=await a.json().catch(()=>({}));return a.ok?{ok:!0,file:r.file,fingerprint:r.fingerprint}:{ok:!1,error:r.error||`HTTP ${a.status}`}}catch(a){return{ok:!1,error:a instanceof Error?a.message:String(a)}}}var Bu=E('<span class="file svelte-vnjyab"> </span>'),ju=E('<p class="error svelte-vnjyab" role="alert"> </p>'),Uu=E('<p class="hint svelte-vnjyab">Loading…</p>'),qu=E('<textarea spellcheck="false" aria-label="Note source" class="svelte-vnjyab"></textarea> <p class="hint svelte-vnjyab">The HTML between &lt;Note&gt; and &lt;/Note&gt;. One element per line is one checkable line.</p>',1),Wu=E('<section aria-label="Edit speaker note"><header class="svelte-vnjyab"><span class="title svelte-vnjyab">EDIT NOTE</span> <!> <span class="spacer svelte-vnjyab"></span> <button type="button" class="save svelte-vnjyab" title="Save (Ctrl/Cmd+S)"> </button> <button type="button" title="Cancel (Esc)" class="svelte-vnjyab">CANCEL</button></header> <!> <!></section>');function Gu(e,n){Ue(n,!1);const s=c();let a=g(n,"route",8),r=g(n,"style",8,""),i=g(n,"id",8,""),l=g(n,"class",8,"");const m=Qa();let f=c("loading"),z=c(""),x=c(""),V="",O=c(""),C=c(""),P=c();so(async()=>{const b=await Hu(a());if(!b.ok){o(f,"failed"),o(C,b.error??"could not load the note");return}o(z,o(x,b.text??"")),V=b.fingerprint??"",o(O,b.file??""),o(f,"ready"),queueMicrotask(()=>{var k;return(k=t(P))==null?void 0:k.focus()})});function nt(b){t(s)&&b.preventDefault()}so(()=>window.addEventListener("beforeunload",nt)),To(()=>{typeof window<"u"&&window.removeEventListener("beforeunload",nt)});async function W(){if(t(f)!=="ready")return;if(!t(s)){m("close");return}o(f,"saving"),o(C,"");const b=await Ku(a(),t(z),V);if(!b.ok){o(f,"ready"),o(C,b.error??"save failed");return}o(x,t(z)),m("saved",{file:b.file}),m("close")}function Y(){t(s)&&!confirm("Discard your changes to this note?")||m("close")}function U(b){b.stopPropagation(),(b.ctrlKey||b.metaKey)&&!b.altKey&&b.key.toLowerCase()==="s"?(b.preventDefault(),W()):b.key==="Escape"&&(b.preventDefault(),Y())}_(()=>(t(z),t(x)),()=>{o(s,t(z)!==t(x))}),Cn(),yn();var F=Wu(),X=u(F),tt=p(u(X),2);{var j=b=>{var k=Bu(),N=u(k,!0);d(k),B(()=>{I(k,"title",t(O)),gt(N,t(O))}),h(b,k)};R(tt,b=>{t(O)&&b(j)})}var Q=p(tt,4),vt=u(Q,!0);d(Q);var et=p(Q,2);d(X);var w=p(X,2);{var $=b=>{var k=ju(),N=u(k,!0);d(k),B(()=>gt(N,t(C))),h(b,k)};R(w,b=>{t(C)&&b($)})}var K=p(w,2);{var M=b=>{var k=Uu();h(b,k)},A=b=>{var k=qu(),N=Wt(k);pl(N),Le(N,pt=>o(P,pt),()=>t(P)),Ke(2),B(()=>N.disabled=t(f)==="saving"),xo(N,()=>t(z),pt=>o(z,pt)),h(b,k)};R(K,b=>{t(f)==="loading"?b(M):t(f)!=="failed"&&b(A,1)})}d(F),B(()=>{Pt(F,1,`note-editor no-print ${l()??""}`,"svelte-vnjyab"),I(F,"id",i()||void 0),le(F,r()||void 0),Q.disabled=t(f)!=="ready",gt(vt,t(f)==="saving"?"SAVING…":"SAVE")}),G("click",Q,W),G("click",et,Y),G("keydown",F,U),h(e,F),qe()}const Ii="adjustMode",Oi="canAdjust";try{localStorage.removeItem(Ii)}catch{}const Zo=Ye(!1);let Qr=!1;function Fi(){return Js(localStorage.getItem(Oi))}function Hi(){Ki.set(ei(!1,Fi(),Qr))}const Os=Xs(Ii,!1,{codec:Qs(),sync:!1,storage:"session"}),Ki=Ye(ei(!1,Fi(),Qr));function Vu(e){Qr=e===!0,Hi()}function Yu(e){const n=Yl(e.searchParams);n!==null&&(localStorage.setItem(Oi,String(n)),n||Os.set(!1)),Hi()}function Xu(e,n=!1,s=!1){const a=((e==null?void 0:e.key)??"").toLowerCase();if(a==="escape"&&!e.ctrlKey&&!e.metaKey&&!e.altKey)return"close";if(Jo(e==null?void 0:e.target))return"ignore";const r=Sc(e);if(r!=="ignore")return r;if(e.ctrlKey||e.metaKey||e.altKey||e.defaultPrevented)return"ignore";if(s){if(a==="arrowdown")return"tocDown";if(a==="arrowup")return"tocUp";if(a==="enter")return"tocSelect"}if(Ec(e))return e.shiftKey?"prev":"continue";if(a==="arrowright")return"next";if(a==="arrowleft")return"prev";switch(a){case"t":return"toc";case"c":return"checks";case"a":return n?"ink":"ignore";case"b":return"bars";case"e":return"editNote";case"r":return"record";default:return"ignore"}}var Qu=E('<iframe class="preview-frame svelte-1mxcoa9" title="Current slide" tabindex="-1"></iframe>'),Ju=E('<iframe class="preview-frame svelte-1mxcoa9" title="Next slide" tabindex="-1"></iframe>'),Zu=E('<div class="preview-end svelte-1mxcoa9">End of deck</div>'),tf=E('<p class="no-matches svelte-1mxcoa9"> </p>'),ef=E('<span class="snip svelte-1mxcoa9"> </span>'),nf=E('<li class="svelte-1mxcoa9"><button type="button"><span class="n svelte-1mxcoa9"> </span> <span class="t svelte-1mxcoa9"> </span> <!></button></li>'),of=E('<ol class="svelte-1mxcoa9"></ol>'),sf=E('<div class="toc-menu svelte-1mxcoa9"><input class="search svelte-1mxcoa9" type="search" placeholder="Search slides…" aria-label="Search slides"/> <div class="toc-scroll svelte-1mxcoa9"><!></div></div>'),rf=E('<div class="toc-menu checks-menu svelte-1mxcoa9"><button type="button" class="svelte-1mxcoa9">Reset this page</button> <button type="button" class="svelte-1mxcoa9">Start over (whole deck)</button></div>'),af=E('<div class="toc-menu checks-menu svelte-1mxcoa9"><button type="button" class="svelte-1mxcoa9"> </button> <button type="button" class="svelte-1mxcoa9">Reset ALL annotations</button></div>'),lf=E('<div title="Reset annotations (A)"><!> <!></div>'),cf=ro('<svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-1mxcoa9"><path d="M8 5v14l11-7z"></path></svg>'),df=ro('<svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-1mxcoa9"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>'),pf=E('<div class="timer-menu svelte-1mxcoa9"><input type="text" inputmode="numeric" placeholder="mm:ss" aria-label="Set elapsed time" class="svelte-1mxcoa9"/> <button type="button" class="tm-set svelte-1mxcoa9">Set</button> <button type="button" class="tm-reset svelte-1mxcoa9">Reset</button></div>'),uf=E('<div class="preview-col no-print svelte-1mxcoa9"><div class="preview svelte-1mxcoa9"><div class="preview-label svelte-1mxcoa9">CURRENT</div> <div class="preview-box svelte-1mxcoa9"><!></div></div> <div class="preview svelte-1mxcoa9"><div class="preview-label svelte-1mxcoa9"> </div> <div class="preview-box svelte-1mxcoa9"><!></div></div></div> <!> <div role="separator" aria-orientation="vertical" aria-label="Resize previews and notes" title="Drag to resize"></div> <div class="bar no-print svelte-1mxcoa9"><div class="controls svelte-1mxcoa9"><div class="tools svelte-1mxcoa9"><span class="ov-btn svelte-1mxcoa9" title="All slides — pick one without the audience seeing you browse (O)"><!></span> <div title="Table of contents (T)"><!> <!></div> <div title="Reset checks (C)"><!> <!></div> <span class="bars-btn" title="Hide or show the bars on the audience screen (B)"><!></span> <span class="rec-btn" title="Record the slides window to a video for YouTube, with a replayable timeline (R)"><!></span> <span class="note-btn"><!></span> <!></div> <div class="nav svelte-1mxcoa9"><!> <!> <!> <!> <!></div> <!></div> <div class="meters svelte-1mxcoa9"><div class="pos svelte-1mxcoa9"> <span class="count svelte-1mxcoa9"> </span></div> <div class="clocks svelte-1mxcoa9"><span class="clock svelte-1mxcoa9"> </span> <div><button type="button"><!></button> <button type="button" title="Set / reset timer"> </button> <!></div></div></div></div>',1);function ff(e,n){Ue(n,!1);const s=()=>dt(Ur,"$page",f),a=()=>dt(fu,"$audienceBare",f),r=()=>dt(Zo,"$canSave",f),i=()=>dt(Ys,"$canAnnotate",f),l=()=>dt(wo,"$overviewOpen",f),m=()=>dt(ti,"$strokes",f),[f,z]=Dn(),x=c(),V=c(),O=c(),C=c(),P=c(),nt=c(),W=c(),Y=c(),U=c(),F=c(),X=c(),tt=c(),j=c(),Q=c(),vt=c(),et=c(),w=c(),$=c(),K=c(),M=c();let A=g(n,"pages",24,()=>[]),b=g(n,"width",8,1920),k=g(n,"height",8,1080);const N=Vs();function pt(y){var ft,qt;return(y==="back"?(ft=t(O))==null?void 0:ft.transitionBack:(qt=t(O))==null?void 0:qt.transition)??"slide"}function ht(y,ft){y&&ps(y+"?present",{viewTransitions:N,kind:pt(ft),direction:ft})}function it(y){o(J,!1),ps(`./${y}?present`,{viewTransitions:N,kind:pt("forward"),direction:"forward"})}function ut(y){El(t(Y),y)}function L(){Tl(t(Y))}let mt=c(0),lt=c(0),Tt=c(0),yt=c(0),J=c(!1),D=c(),bt=c(""),At=c(-1),Et=c("");function Rt(y){o(At,gi(t(At)<0?t(et):t(At),y,t(vt).length))}function Gt(){const y=t(At)<0&&t(Q)?0:t(At),ft=t(vt)[y];ft&&it(ft.path)}function Te(y){if(y.stopPropagation(),y.key==="Escape"){y.preventDefault(),t(bt)?o(bt,""):o(J,!1);return}if(y.key==="ArrowDown"){y.preventDefault(),Rt(1);return}if(y.key==="ArrowUp"){y.preventDefault(),Rt(-1);return}y.key==="Enter"&&(y.preventDefault(),Gt())}function Kt(y){y.focus()}function zt(y,ft){const qt=je=>{je&&typeof y.scrollIntoView=="function"&&y.scrollIntoView({block:"nearest"})};return qt(ft),{update:qt}}let Nt=c(!1),kt=c();function Dt(){o(Nt,!1),Nl(t(Y),t(x)),window.dispatchEvent(new CustomEvent("gp:checks-clear"))}function Yt(){o(Nt,!1),Pl(t(Y)),window.dispatchEvent(new CustomEvent("gp:checks-clear"))}let Ut=c(!1),ce=c();function Qt(){o(Ut,!1),Pr()}function wt(){o(Ut,!1),$r()}function fe(y){t(D)&&!t(D).contains(y.target)&&o(J,!1),t(kt)&&!t(kt).contains(y.target)&&o(Nt,!1),t(ce)&&!t(ce).contains(y.target)&&o(Ut,!1),t(Un)&&!t(Un).contains(y.target)&&o(hn,!1)}function Jt(){o(J,!1),o(Nt,!1),o(Ut,!1),o(hn,!1)}function ye(){Jt(),wo.set(!0)}function Re(){js(!a())}function de(){Kl(t(Y))}let ae=c(!1),Xe=c(!1),tn;function on(){if(!t(ae)){if(Jt(),!r()){o(Xe,!0),clearTimeout(tn),tn=setTimeout(()=>o(Xe,!1),2500);return}o(ae,!0)}}function kn(y){switch(Xu(y,i(),t(J))){case"close":Jt();break;case"toc":{y.preventDefault();const ft=!t(J);Jt(),o(J,ft);break}case"checks":{y.preventDefault();const ft=!t(Nt);Jt(),o(Nt,ft);break}case"ink":{y.preventDefault();const ft=!t(Ut);Jt(),o(Ut,ft);break}case"bars":y.preventDefault(),Re();break;case"record":y.preventDefault(),de();break;case"editNote":y.preventDefault(),on();break;case"next":y.preventDefault(),ht(t(C).next,"forward");break;case"prev":y.preventDefault(),ht(t(C).prev,"back");break;case"first":y.preventDefault(),ht(t(C).first,"back");break;case"last":y.preventDefault(),ht(t(C).last,"forward");break;case"continue":y.preventDefault(),L();break;case"tocUp":y.preventDefault(),Rt(-1);break;case"tocDown":y.preventDefault(),Rt(1);break;case"tocSelect":y.preventDefault(),Gt();break}}let ao=c(""),io=c("00:00"),vn=0,Ie=c(null),wn;function zn(y){const ft=Math.max(0,Math.floor(y)),qt=Math.floor(ft/3600),je=Math.floor(ft%3600/60),v=ft%60,H=at=>String(at).padStart(2,"0");return qt>0?`${qt}:${H(je)}:${H(v)}`:`${H(je)}:${H(v)}`}function Yn(){return((t(Ie)??Date.now())-vn)/1e3}function jn(){o(ao,new Date().toLocaleTimeString()),o(io,zn(Yn()))}function Ln(){const y=Date.now();t(Ie)==null?o(Ie,y):(vn+=y-t(Ie),fr(t(Y),vn),o(Ie,null)),va(t(Y),t(Ie)),jn()}let Un=c(),hn=c(!1),Xn=c("");function Ao(){o(hn,!t(hn)),t(hn)&&o(Xn,t(io))}function No(y){const ft=y.trim().split(":");if(ft.length<1||ft.length>3)return null;const qt=ft.map(je=>Number(je));return qt.some(je=>!Number.isFinite(je)||je<0)?null:qt.length===1?qt[0]*60:qt.length===2?qt[0]*60+qt[1]:qt[0]*3600+qt[1]*60+qt[2]}function S(){const y=No(t(Xn));if(y==null)return;const ft=t(Ie)??Date.now();vn=fr(t(Y),ft-y*1e3),jn(),o(hn,!1)}function ot(){vn=fr(t(Y)),o(Ie,null),va(t(Y),null),jn(),o(hn,!1)}let $t=c(),jt=c(!1),oe=c(!0),We=c(!1);const sn=y=>{const ft=window.innerWidth||1;return Math.max(.2*ft,Math.min(.8*ft,y))};function rn(y){document.body.style.setProperty("--gp-split",`${Math.round(sn(y))}px`)}function go(){if(!t(lt))return;const y=getComputedStyle(document.body),ft=parseFloat(y.getPropertyValue("--gp-inset"))||20,qt=parseFloat(y.getPropertyValue("--gp-gap"))||16;rn(ft+t(lt)*(b()/k())+qt/2)}function Po(y){o(jt,!0),t($t).setPointerCapture(y.pointerId),y.preventDefault()}function qn(y){t(jt)&&rn(y.clientX)}function T(y){var ft,qt;t(jt)&&(o(jt,!1),o(oe,!1),(qt=(ft=t($t)).releasePointerCapture)==null||qt.call(ft,y.pointerId),Al(sn(y.clientX)/(window.innerWidth||1)))}so(()=>{document.body.classList.add("gp-present"),vn=xl(t(Y)),o(Ie,_l(t(Y))),jn(),wn=setInterval(jn,1e3);const y=Sl();y!=null&&(o(oe,!1),rn(y*window.innerWidth)),o(We,!0),document.addEventListener("click",fe),window.addEventListener("keydown",kn)}),To(()=>{wn&&clearInterval(wn),clearTimeout(tn),typeof document<"u"&&(document.body.classList.remove("gp-present"),document.body.style.removeProperty("--gp-split"),document.removeEventListener("click",fe)),typeof window<"u"&&window.removeEventListener("keydown",kn)}),_(()=>s(),()=>{o(x,s().url.pathname.replace(/\/+$/,"").split("/").pop()||"")}),_(()=>(Z(A()),t(x)),()=>{o(V,A().findIndex(y=>y.path===t(x)))}),_(()=>(Z(A()),t(V)),()=>{o(O,A()[t(V)])}),_(()=>(Z(A()),t(x)),()=>{o(C,Ja(A(),t(x),"./"))}),_(()=>(t(V),Z(A())),()=>{o(P,t(V)>=0?A()[t(V)+1]:void 0)}),_(()=>t(O),()=>{o(nt,t(O)?`./${t(O).path}?clean`:"")}),_(()=>t(P),()=>{o(W,t(P)?`./${t(P).path}?clean`:"")}),_(()=>s(),()=>{o(Y,Nr(s().url.pathname))}),_(()=>(s(),ls),()=>{o(U,s().url.pathname.replace(ls,"").split("/").filter(Boolean)[0]??"")}),_(()=>(t(mt),t(lt),Z(b()),Z(k())),()=>{o(F,t(mt)>0&&t(lt)>0?Math.min(t(mt)/b(),t(lt)/k()):0)}),_(()=>(t(Tt),t(yt),Z(b()),Z(k())),()=>{o(X,t(Tt)>0&&t(yt)>0?Math.min(t(Tt)/b(),t(yt)/k()):0)}),_(()=>(t(U),Z(A())),()=>{o(tt,bi(t(U),A()))}),_(()=>t(J),()=>{t(J)||(o(bt,""),o(At,-1))}),_(()=>(t(tt),t(bt)),()=>{o(j,mi(t(tt),t(bt)))}),_(()=>t(bt),()=>{o(Q,t(bt).trim().length>0)}),_(()=>(t(Q),t(j),Z(A())),()=>{o(vt,t(Q)?t(j).map(y=>({path:y.path,title:y.title,number:y.number,snippet:y.snippet})):A().map((y,ft)=>({path:y.path,title:y.title,number:ft+1})))}),_(()=>(t(Q),t(V)),()=>{o(et,t(Q)?-1:t(V))}),_(()=>(t(bt),t(Et)),()=>{t(bt)!==t(Et)&&(o(Et,t(bt)),o(At,-1))}),_(()=>a(),()=>{o(w,a()?"▭ Bars: hidden":"▭ Bars: shown")}),_(()=>t(Xe),()=>{o($,t(Xe)?"NOT ALLOWED":"EDIT NOTE")}),_(()=>t(Xe),()=>{o(K,t(Xe)?"Editing notes needs the dev server (pnpm dev) — there is no source to write here.":"Edit this slide's speaker note (E)")}),_(()=>t(Ie),()=>{o(M,t(Ie)!=null)}),_(()=>(t(We),t(oe),t(lt)),()=>{t(We)&&t(oe)&&t(lt)&&go()}),Cn(),yn();var q=uf(),rt=Wt(q),It=u(rt),Zt=p(u(It),2),ke=u(Zt);{var pe=y=>{var ft=Qu();B(()=>{I(ft,"src",t(nt)),le(ft,`width:${b()??""}px; height:${k()??""}px; transform: translate(-50%, -50%) scale(${t(F)??""});`)}),h(y,ft)};R(ke,y=>{t(nt)&&y(pe)})}d(Zt),d(It);var Lt=p(It,2),se=u(Lt),Vt=u(se);d(se);var Mt=p(se,2),Bt=u(Mt);{var Ot=y=>{var ft=Ju();B(()=>{I(ft,"src",t(W)),le(ft,`width:${b()??""}px; height:${k()??""}px; transform: translate(-50%, -50%) scale(${t(X)??""});`)}),h(y,ft)},Me=y=>{var ft=Zu();h(y,ft)};R(Bt,y=>{t(W)?y(Ot):y(Me,-1)})}d(Mt),d(Lt),d(rt);var Ae=p(rt,2);{var he=y=>{Gu(y,{get route(){return s(),st(()=>s().url.pathname)},$$events:{close:()=>o(ae,!1)}})};R(Ae,y=>{t(ae)&&y(he)})}var ee=p(Ae,2);let xe;Le(ee,y=>o($t,y),()=>t($t));var Ce=p(ee,2),Oe=u(Ce),re=u(Oe),Ne=u(re),An=u(Ne);Bn(An,{text:"OVERVIEW",mnemonic:"O",get isSelected(){return l()},$$events:{click:ye}}),d(Ne);var St=p(Ne,2);let ct;var De=u(St);{let y=un(()=>t(J)?"ToC ▾":"ToC ▴");Bn(De,{get text(){return t(y)},mnemonic:"T",get isSelected(){return t(J)},$$events:{click:()=>o(J,!t(J))}})}var me=p(De,2);{var Ct=y=>{var ft=sf(),qt=u(ft);oo(qt),Xo(()=>xo(qt,()=>t(bt),xt=>o(bt,xt))),Xo(()=>G("keydown",qt,Te)),as(qt,xt=>Kt==null?void 0:Kt(xt));var je=p(qt,2),v=u(je);{var H=xt=>{var Ft=tf(),ie=u(Ft);d(Ft),B(_t=>gt(ie,`No slides match "${_t??""}".`),[()=>(t(bt),st(()=>t(bt).trim()))]),h(xt,Ft)},at=xt=>{var Ft=of();Mn(Ft,5,()=>t(vt),mo,(ie,_t,Pe)=>{var $e=nf(),we=u($e);let Jn;var ne=u(we),be=u(ne,!0);d(ne);var Qe=p(ne,2),Ge=u(Qe,!0);d(Qe);var ze=p(Qe,2);{var En=Fn=>{var Zn=ef(),Se=u(Zn,!0);d(Zn),B(()=>gt(Se,(t(_t),st(()=>t(_t).snippet)))),h(Fn,Zn)};R(ze,Fn=>{t(_t),st(()=>t(_t).snippet)&&Fn(En)})}d(we),Xo(()=>G("click",we,()=>it(t(_t).path))),as(we,(Fn,Zn)=>zt==null?void 0:zt(Fn,Zn),()=>Pe===t(At)),d($e),B(()=>{Jn=Pt(we,1,"svelte-1mxcoa9",null,Jn,{current:t(_t).path===t(x),selected:Pe===t(At)}),gt(be,(t(_t),st(()=>t(_t).number??""))),gt(Ge,(t(_t),st(()=>t(_t).title)))}),h(ie,$e)}),d(Ft),h(xt,Ft)};R(v,xt=>{t(Q),t(vt),st(()=>t(Q)&&t(vt).length===0)?xt(H):xt(at,-1)})}d(je),d(ft),h(y,ft)};R(me,y=>{t(J)&&y(Ct)})}d(St),Le(St,y=>o(D,y),()=>t(D));var ge=p(St,2);let _e;var en=u(ge);{let y=un(()=>t(Nt)?"☑ Checks ▾":"☑ Checks ▴"),ft=un(()=>t(Nt)?"☑ Checks ▾":"☑ Checks ▴");Bn(en,{get text(){return t(y)},get hoverText(){return t(ft)},mnemonic:"C",get isSelected(){return t(Nt)},$$events:{click:()=>o(Nt,!t(Nt))}})}var mn=p(en,2);{var Be=y=>{var ft=rf(),qt=u(ft),je=p(qt,2);d(ft),G("click",qt,Dt),G("click",je,Yt),h(y,ft)};R(mn,y=>{t(Nt)&&y(Be)})}d(ge),Le(ge,y=>o(kt,y),()=>t(kt));var Rn=p(ge,2),In=u(Rn);Bn(In,{get text(){return t(w)},get hoverText(){return t(w)},mnemonic:"B",get isSelected(){return a()},$$events:{click:Re}}),d(Rn);var an=p(Rn,2),gn=u(an);Bn(gn,{text:"● REC",hoverText:"● REC",mnemonic:"R",$$events:{click:de}}),d(an);var ve=p(an,2),ln=u(ve);{let y=un(()=>t(Xe)?"":"E");Bn(ln,{get text(){return t($)},get hoverText(){return t($)},get mnemonic(){return t(y)},get isSelected(){return t(ae)},$$events:{click:on}})}d(ve);var lo=p(ve,2);{var bo=y=>{var ft=lf();let qt;var je=u(ft);{let at=un(()=>t(Ut)?"✎ Annotate ▾":"✎ Annotate ▴"),xt=un(()=>t(Ut)?"✎ Annotate ▾":"✎ Annotate ▴");Bn(je,{get text(){return t(at)},get hoverText(){return t(xt)},mnemonic:"A",get isSelected(){return t(Ut)},$$events:{click:()=>o(Ut,!t(Ut))}})}var v=p(je,2);{var H=at=>{var xt=af(),Ft=u(xt),ie=u(Ft);d(Ft);var _t=p(Ft,2);d(xt),B(()=>{Ft.disabled=(m(),st(()=>m().length===0)),gt(ie,`Reset this slide${m(),st(()=>m().length?` (${m().length})`:"")??""}`)}),G("click",Ft,Qt),G("click",_t,wt),h(at,xt)};R(v,at=>{t(Ut)&&at(H)})}d(ft),Le(ft,at=>o(ce,at),()=>t(ce)),B(()=>qt=Pt(ft,1,"toc checks svelte-1mxcoa9",null,qt,{open:t(Ut)})),h(y,ft)};R(lo,y=>{i()&&y(bo)})}d(re);var cn=p(re,2),Wn=u(cn);{let y=un(()=>(t(C),st(()=>!t(C).first)));Bn(Wn,{text:"FIRST",get isDisabled(){return t(y)},$$events:{click:()=>ht(t(C).first,"back")}})}var Qn=p(Wn,2);{let y=un(()=>(t(C),st(()=>!t(C).prev)));Bn(Qn,{text:"◀ PREV",get isDisabled(){return t(y)},$$events:{click:()=>ht(t(C).prev,"back")}})}var te=p(Qn,2);Bn(te,{text:"CONTINUE",$$events:{click:L}});var Ht=p(te,2);{let y=un(()=>(t(C),st(()=>!t(C).next)));Bn(Ht,{text:"NEXT ▶",get isDisabled(){return t(y)},$$events:{click:()=>ht(t(C).next,"forward")}})}var ue=p(Ht,2);{let y=un(()=>(t(C),st(()=>!t(C).last)));Bn(ue,{text:"LAST",get isDisabled(){return t(y)},$$events:{click:()=>ht(t(C).last,"forward")}})}d(cn);var Fe=p(cn,2);Iu(Fe,{onCommand:ut}),d(Oe);var xn=p(Oe,2),Nn=u(xn),co=u(Nn),On=p(co),$o=u(On);d(On),d(Nn);var Ho=p(Nn,2),_n=u(Ho),Gn=u(_n);d(_n);var Sn=p(_n,2);let Ko;var Pn=u(Sn);let vs;var sr=u(Pn);{var rr=y=>{var ft=cf();h(y,ft)},As=y=>{var ft=df();h(y,ft)};R(sr,y=>{t(M)?y(rr):y(As,-1)})}d(Pn);var Bo=p(Pn,2);let hs;var ar=u(Bo);d(Bo);var Ns=p(Bo,2);{var ir=y=>{var ft=pf(),qt=u(ft);oo(qt);var je=p(qt,2),v=p(je,2);d(ft),xo(qt,()=>t(Xn),H=>o(Xn,H)),G("keydown",qt,H=>{H.key==="Enter"&&S()}),G("click",je,S),G("click",v,ot),h(y,ft)};R(Ns,y=>{t(hn)&&y(ir)})}d(Sn),Le(Sn,y=>o(Un,y),()=>t(Un)),d(Ho),d(xn),d(Ce),B(()=>{le(Zt,`aspect-ratio: ${b()??""} / ${k()??""};`),gt(Vt,`NEXT ▸ ${t(P),st(()=>t(P)?t(P).title:"— end of deck —")??""}`),le(Mt,`aspect-ratio: ${b()??""} / ${k()??""};`),xe=Pt(ee,1,"splitter no-print svelte-1mxcoa9",null,xe,{dragging:t(jt)}),ct=Pt(St,1,"toc svelte-1mxcoa9",null,ct,{open:t(J)}),_e=Pt(ge,1,"toc checks svelte-1mxcoa9",null,_e,{open:t(Nt)}),I(ve,"title",t(K)),gt(co,`${t(O),st(()=>t(O)?t(O).title:"")??""} `),gt($o,`${t(V)>=0?t(V)+1:"?"} / ${Z(A()),st(()=>A().length)??""}`),gt(Gn,`🕑 ${t(ao)??""}`),Ko=Pt(Sn,1,"timer svelte-1mxcoa9",null,Ko,{open:t(hn)}),vs=Pt(Pn,1,"pause-btn svelte-1mxcoa9",null,vs,{paused:t(M)}),I(Pn,"title",t(M)?"Resume timer":"Pause timer"),I(Pn,"aria-label",t(M)?"Resume timer":"Pause timer"),hs=Pt(Bo,1,"elapsed svelte-1mxcoa9",null,hs,{paused:t(M)}),gt(ar,`⏱ ${t(io)??""}`)}),rs(Zt,"clientWidth",y=>o(mt,y)),rs(Zt,"clientHeight",y=>o(lt,y)),rs(Mt,"clientWidth",y=>o(Tt,y)),rs(Mt,"clientHeight",y=>o(yt,y)),G("pointerdown",ee,Po),G("pointermove",ee,qn),G("pointerup",ee,T),G("click",Pn,Ln),G("click",Bo,Ao),h(e,q),qe(),z()}const Jr="livePointer";function vf(e){if(!e||!e.has("pointer"))return null;const n=(e.get("pointer")??"").trim().toLowerCase();return n!=="off"&&n!=="false"&&n!=="0"}function hf(e,n){return e!==null?e:n===!0}function mf(e){return e==="dot"||e==="ring"?e:"arrow"}const Zr=40;function gf(e){const n=Number(e);return!Number.isFinite(n)||n<=0?Zr:Math.min(200,Math.max(8,n))}function bf(e,n){if(e==="arrow"){const s=-.125*n;return[s,s]}return[-n/2,-n/2]}function Bi(){try{return Js(localStorage.getItem(Jr))}catch{return null}}const ta=Ye(Bi()),ji=Ye(!1),ea=Qo([ta,ji],([e,n])=>hf(e,n));function Ui(e){try{localStorage.setItem(Jr,String(e))}catch{}ta.set(e)}function Cs(){Ui(!Ee(ea))}function yf(e){ji.set(e===!0)}function kf(e){const n=vf(e.searchParams);n!==null&&Ui(n)}window.addEventListener("storage",e=>{(e.key===Jr||e.key===null)&&ta.set(Bi())});var wf=E('<span class="live-ripple svelte-kf03vj"></span>'),xf=ro('<svg viewBox="0 0 24 24" width="100%" height="100%" class="svelte-kf03vj"><circle cx="12" cy="12" r="8" fill="var(--live-pointer-fill, #ffd23f)" stroke="var(--live-pointer-outline, rgba(0, 0, 0, 0.8))" stroke-width="1.4" class="svelte-kf03vj"></circle></svg>'),_f=ro('<svg viewBox="0 0 24 24" width="100%" height="100%" class="svelte-kf03vj"><circle cx="12" cy="12" r="8" fill="none" stroke="var(--live-pointer-fill, #ffd23f)" stroke-width="2.5" class="svelte-kf03vj"></circle></svg>'),Sf=ro('<svg viewBox="0 0 24 24" width="100%" height="100%" class="svelte-kf03vj"><path d="M3 3 L10.07 19.97 L12.58 12.58 L19.97 10.07 Z" fill="var(--live-pointer-fill, #ffd23f)" stroke="var(--live-pointer-outline, rgba(0, 0, 0, 0.8))" stroke-width="1.4" stroke-linejoin="round" class="svelte-kf03vj"></path></svg>'),Ef=E('<span class="live-glyph svelte-kf03vj"><!></span>'),Tf=E('<div aria-hidden="true"><!> <!></div>');function Af(e,n){Ue(n,!0);const s=()=>dt(ea,"$livePointer",a),[a,r]=Dn();let i=g(n,"shape",3,"arrow"),l=g(n,"size",3,Zr),m=g(n,"style",3,""),f=g(n,"id",3,""),z=g(n,"class",3,"");const x=He(()=>mf(i())),V=He(()=>gf(l())),O=He(()=>bf(t(x),t(V)));let C=Ze(0),P=Ze(0),nt=Ze(!1),W=Ze(Sr([])),Y=0;function U(w){o(C,w.clientX,!0),o(P,w.clientY,!0),o(nt,!0)}function F(w){U(w);const $={id:Y++,x:w.clientX,y:w.clientY};o(W,[...t(W),$],!0),setTimeout(()=>{o(W,t(W).filter(K=>K.id!==$.id),!0)},700)}function X(){o(nt,!1)}let tt=!1;function j(w){if(w===tt)return;tt=w;const $=document.documentElement,K={capture:!0,passive:!0};w?($.classList.add("gp-live-pointer"),window.addEventListener("pointermove",U,K),window.addEventListener("pointerdown",F,K),$.addEventListener("mouseleave",X)):($.classList.remove("gp-live-pointer"),window.removeEventListener("pointermove",U,K),window.removeEventListener("pointerdown",F,K),$.removeEventListener("mouseleave",X),o(nt,!1),o(W,[],!0))}Io(()=>{j(s())}),To(()=>j(!1));var Q=fn(),vt=Wt(Q);{var et=w=>{var $=Tf(),K=u($);Mn(K,17,()=>t(W),b=>b.id,(b,k)=>{var N=wf();B(()=>le(N,`left:${t(k).x??""}px; top:${t(k).y??""}px; --live-ripple-size:${t(V)??""}px;`)),h(b,N)});var M=p(K,2);{var A=b=>{var k=Ef(),N=u(k);{var pt=ut=>{var L=xf();h(ut,L)},ht=ut=>{var L=_f();h(ut,L)},it=ut=>{var L=Sf();h(ut,L)};R(N,ut=>{t(x)==="dot"?ut(pt):t(x)==="ring"?ut(ht,1):ut(it,-1)})}d(k),B(()=>le(k,`width:${t(V)??""}px; height:${t(V)??""}px; transform: translate3d(${t(C)+t(O)[0]}px, ${t(P)+t(O)[1]}px, 0);`)),h(b,k)};R(M,b=>{t(nt)&&b(A)})}d($),B(()=>{Pt($,1,`live-pointer no-print ${z()??""}`,"svelte-kf03vj"),I($,"id",f()||void 0),le($,m()||void 0)}),h(w,$)};R(vt,w=>{s()&&w(et)})}h(e,Q),qe(),r()}const Nf={mod:"mod",cmd:"cmd",command:"cmd",meta:"cmd","⌘":"cmd",ctrl:"ctrl",control:"ctrl","⌃":"ctrl",alt:"alt",opt:"alt",option:"alt","⌥":"alt",shift:"shift","⇧":"shift",win:"win",windows:"win",super:"win",enter:"enter",return:"enter",esc:"esc",escape:"esc",tab:"tab",space:"space",spacebar:"space",backspace:"backspace",bksp:"backspace",del:"delete",delete:"delete",ins:"insert",insert:"insert",up:"up",arrowup:"up",down:"down",arrowdown:"down",left:"left",arrowleft:"left",right:"right",arrowright:"right",pgup:"pageup",pageup:"pageup",pgdn:"pagedown",pagedown:"pagedown",home:"home",end:"end"},Pf={cmd:"Cmd",ctrl:"Ctrl",alt:"Alt",shift:"Shift",win:"Win",enter:"Enter",esc:"Esc",tab:"Tab",space:"Space",backspace:"Backspace",delete:"Delete",insert:"Insert",pageup:"Page Up",pagedown:"Page Down",home:"Home",end:"End"},La={up:"↑",down:"↓",left:"←",right:"→"},Ra={cmd:"⌘",ctrl:"⌃",alt:"⌥",shift:"⇧",enter:"↩",esc:"⎋",tab:"⇥",space:"␣",backspace:"⌫",delete:"⌦",pageup:"⇞",pagedown:"⇟",home:"↖",end:"↘"};function $f(e){const n=[];let s="";for(const a of e){if(a!=="+"){s+=a;continue}s?(n.push(s),s=""):n[n.length-1]!=="+"&&n.push("+")}return s&&n.push(s),n}function Mf(e,n="pc",s=!0){if(typeof e!="string")return"";const a=e.trim();if(!a)return"";let r=Nf[a.toLowerCase()];return r==="mod"&&(r=n==="mac"?"cmd":"ctrl"),r?La[r]?La[r]:n==="mac"&&s&&Ra[r]?Ra[r]:Pf[r]??a:[...a].length===1?a.toUpperCase():a}function Ia(e,n="pc",s=!0){return typeof e!="string"?[]:e.trim().split(/\s+/).filter(Boolean).map(a=>$f(a).map(r=>Mf(r,n,s)).filter(Boolean)).filter(a=>a.length>0)}function Cf(e="pc",n=!0){return e==="mac"&&n?"":"+"}function Df(e){var s;if(!e)return"pc";const n=((s=e.userAgentData)==null?void 0:s.platform)||e.platform||e.userAgent||"";return/mac|iphone|ipad|ipod/i.test(n)?"mac":"pc"}var zf=E('<span class="then svelte-1dl93vr" aria-hidden="true"> </span>'),Lf=E('<span class="join svelte-1dl93vr"> </span>'),Rf=E('<!> <kbd class="cap svelte-1dl93vr"> </kbd>',1),If=E('<!> <kbd class="chord svelte-1dl93vr"></kbd>',1),Of=E("<span></span>"),Ff=E('<span><kbd class="chord svelte-1dl93vr"><kbd class="cap svelte-1dl93vr"><!></kbd></kbd></span>');function Ds(e,n){const s=ul(n);Ue(n,!1);const a=c(),r=c(),i=c(),l=c(),m=c();let f=g(n,"keys",8,""),z=g(n,"platform",8,"pc"),x=g(n,"symbols",8,!0),V=g(n,"join",8,null),O=g(n,"then",8,"then"),C=g(n,"style",8,""),P=g(n,"id",8,""),nt=g(n,"class",8,""),W=c("pc");so(()=>{z()==="auto"&&o(W,Df(globalThis.navigator))}),_(()=>(Z(z()),t(W)),()=>{o(a,z()==="auto"?t(W):z()==="mac"?"mac":"pc")}),_(()=>(Z(f()),t(a),Z(x())),()=>{o(r,Ia(f(),t(a),x()))}),_(()=>(Z(V()),t(a),Z(x())),()=>{o(i,V()??Cf(t(a),x()))}),_(()=>(t(a),Z(x())),()=>{o(l,t(a)==="mac"&&x())}),_(()=>(t(l),Z(f()),t(a),Z(O())),()=>{o(m,t(l)?Ia(f(),t(a),!1).map(tt=>tt.join(" ")).join(`, ${O()||"then"} `):"")}),Cn(),yn();var Y=fn(),U=Wt(Y);{var F=tt=>{var j=Of();Mn(j,5,()=>t(r),mo,(Q,vt,et)=>{var w=If(),$=Wt(w);{var K=A=>{var b=zf(),k=u(b,!0);d(b),B(()=>gt(k,O())),h(A,b)};R($,A=>{et>0&&O()&&A(K)})}var M=p($,2);Mn(M,5,()=>t(vt),mo,(A,b,k)=>{var N=Rf(),pt=Wt(N);{var ht=L=>{var mt=Lf(),lt=u(mt,!0);d(mt),B(()=>gt(lt,t(i))),h(L,mt)};R(pt,L=>{k>0&&t(i)&&L(ht)})}var it=p(pt,2),ut=u(it,!0);d(it),B(()=>gt(ut,t(b))),h(A,N)}),d(M),B(()=>I(M,"aria-hidden",t(l)?"true":void 0)),h(Q,w)}),d(j),B(()=>{Pt(j,1,`kbd ${nt()??""}`,"svelte-1dl93vr"),I(j,"id",P()||void 0),le(j,C()),I(j,"aria-label",t(l)?t(m):void 0)}),h(tt,j)},X=tt=>{var j=Ff(),Q=u(j),vt=u(Q),et=u(vt);jr(et,n,"default",{},null),d(vt),d(Q),d(j),B(()=>{Pt(j,1,`kbd ${nt()??""}`,"svelte-1dl93vr"),I(j,"id",P()||void 0),le(j,C())}),h(tt,j)};R(U,tt=>{t(r),st(()=>t(r).length)?tt(F):st(()=>s.default)&&tt(X,1)})}h(e,Y),qe()}const Us=Xs("geekpresent:onboard:done",!1,{codec:Qs(),sync:!0});function Lo(){Ee(Us)||Us.set(!0)}const qi=8e3;function Hf(e){return typeof e=="number"&&Number.isFinite(e)&&e>=0?e:qi}function Wi(e,n){return fs(e).findIndex(s=>s.path===n)}function Kf(e,n){return Wi(e,n)===0&&fs(e).length>1}function Bf(e,n){return Wi(e,n)>0}function jf(e){return e.suppressed?!1:!!e.force||e.offered&&!e.done&&e.firstSlide}const Uf=new Set([" ","Spacebar","ArrowRight","ArrowLeft","PageDown","PageUp"]),qf=new Set(["Enter","ArrowDown","ArrowUp"]);function Wf(e,n={}){return n.ctrl||n.meta||n.alt?"none":Uf.has(e)?"explore":qf.has(e)?"stray":"none"}var Gf=E('<div class="edge top gp-chrome no-print svelte-1gtc41s" aria-hidden="true"></div> <div class="edge bottom gp-chrome no-print svelte-1gtc41s" aria-hidden="true"></div>',1),Vf=E('<p class="row alt-bars svelte-1gtc41s"><!> tool bar <span class="where svelte-1gtc41s">(top)</span> + nav bar <span class="where svelte-1gtc41s">(bottom)</span></p> <p class="row svelte-1gtc41s">or point at the <b class="svelte-1gtc41s">top</b> or <b class="svelte-1gtc41s">bottom</b> edge of the window</p>',1),Yf=E(`<div><!> <div role="status" aria-live="polite"><p class="title svelte-1gtc41s">New here? Here's how to get around.</p> <p class="row svelte-1gtc41s"><!> next slide <span class="sep svelte-1gtc41s" aria-hidden="true">·</span> <!> next step <span class="sep svelte-1gtc41s" aria-hidden="true">·</span> <!> back</p> <!> <button type="button" class="got-it svelte-1gtc41s">Got it</button></div></div>`);function Xf(e,n){Ue(n,!1);const s=()=>dt(Us,"$onboardDone",a),[a,r]=Dn(),i=c(),l=c();let m=g(n,"offered",8,!0),f=g(n,"firstSlide",8,!1),z=g(n,"suppressed",8,!1),x=g(n,"bars",8,!0),V=g(n,"delayMs",8,8e3),O=g(n,"force",8,!1),C=g(n,"themeClass",8,""),P=g(n,"style",8,""),nt=g(n,"id",8,""),W=g(n,"class",8,""),Y=c(!1),U=c(!1),F=null,X=c(!1);function tt(k){t(U)||F||(F=setTimeout(Q,k))}function j(){F&&clearTimeout(F),F=null,o(U,!1)}function Q(){F&&clearTimeout(F),F=null,o(U,!0)}function vt(){o(X,!0),Lo()}const et='a, button, input, textarea, select, label, [contenteditable], [role="button"], .overlay, .gp-chrome';function w(k){if(!t(l)||Jo(k.target))return;const N=Wf(k.key,{ctrl:k.ctrlKey,meta:k.metaKey,alt:k.altKey});N==="explore"?vt():N==="stray"&&Q()}function $(k){var pt;if(!t(l))return;const N=k.target;(pt=N==null?void 0:N.closest)!=null&&pt.call(N,et)||Q()}function K(){t(l)&&Q()}so(()=>(O()&&Us.set(!1),o(Y,!0),window.addEventListener("keydown",w,!0),window.addEventListener("pointerdown",$,!0),window.addEventListener("wheel",K,{capture:!0,passive:!0}),()=>{window.removeEventListener("keydown",w,!0),window.removeEventListener("pointerdown",$,!0),window.removeEventListener("wheel",K,{capture:!0}),j()})),_(()=>(Z(O()),t(X)),()=>{o(i,O()&&!t(X))}),_(()=>(t(Y),Z(m()),s(),Z(f()),Z(z()),t(i)),()=>{o(l,t(Y)&&jf({offered:m(),done:s(),firstSlide:f(),suppressed:z(),force:t(i)}))}),_(()=>(t(l),t(i),Z(V())),()=>{t(l)&&t(i)?Q():t(l)?tt(Hf(V())):j()}),Cn(),yn();var M=fn(),A=Wt(M);{var b=k=>{var N=Yf(),pt=u(N);{var ht=D=>{var bt=Gf();Ke(2),h(D,bt)};R(pt,D=>{x()&&D(ht)})}var it=p(pt,2),ut=p(u(it),2),L=u(ut);Ds(L,{children:(D,bt)=>{Ke();var At=no("→");h(D,At)},$$slots:{default:!0}});var mt=p(L,4);Ds(mt,{children:(D,bt)=>{Ke();var At=no("Space");h(D,At)},$$slots:{default:!0}});var lt=p(mt,4);Ds(lt,{children:(D,bt)=>{Ke();var At=no("←");h(D,At)},$$slots:{default:!0}}),Ke(),d(ut);var Tt=p(ut,2);{var yt=D=>{var bt=Vf(),At=Wt(bt),Et=u(At);Ds(Et,{keys:"Alt+.",platform:"auto"}),Ke(4),d(At),Ke(2),h(D,bt)};R(Tt,D=>{x()&&D(yt)})}var J=p(Tt,2);d(it),d(N),B(()=>{Pt(N,1,`onboard-theme ${C()??""}`,"svelte-1gtc41s"),Pt(it,1,`onboard-hint gp-chrome no-print ${W()??""}`,"svelte-1gtc41s"),I(it,"id",nt()||void 0),le(it,P())}),G("click",J,vt),h(k,N)};R(A,k=>{t(l)&&t(U)&&k(b)})}h(e,M),qe(),r()}let Eo=null;function Qf(e){if(typeof window>"u")return null;const n={...e,ts:Date.now()};try{sessionStorage.setItem(Rc,Ic(n))}catch{}const s=`${ls}/_source-edit`,a="popup=yes,width=1280,height=900,menubar=no,toolbar=no,location=no,status=no";if(!Eo||Eo.closed)Eo=window.open(s,Oc,a);else{Eo.focus();try{Eo.postMessage({type:_a,...n},window.location.origin)}catch{}}if(Eo&&!Eo.closed){const r=Eo,i=()=>{try{r.postMessage({type:_a,...n},window.location.origin)}catch{}};setTimeout(i,50),setTimeout(i,300)}return Eo}const or=Ye(new Set),Jf=new Map,Zf=Qo(or,e=>e.size>0),Gi=Qo([or,Zo],([e,n])=>e.size>0||n),Vi=Qo([or,Zo],([e,n])=>n||e.size>0);Qo([Gi,Vi],([e,n])=>e||n);const Rr=Ye(!1),qs=Ye(null);function Yi(){return typeof location>"u"?"":location.pathname}async function Oa(){if(Ee(or).size>0){qs.set(null),Rr.set(!0);return}if(!Ee(Zo))return;const e=Yi(),n=await si(e);if(!n.ok||typeof n.content!="string"){console.warn("[SOURCE]",n.error??"could not load page source");return}qs.set({code:n.content,path:n.file??e,route:e}),Rr.set(!0)}async function wr(){const e=[...Jf.values()],n=e[e.length-1];if(n){n();return}if(!Ee(Zo)){console.warn("[EDIT] no ViewSource on this slide and SAVE is not available");return}const s=Yi(),a=await si(s);if(!a.ok||typeof a.content!="string"){console.warn("[EDIT]",a.error??"could not load page source");return}Qf({route:s,path:a.file??"",source:a.content,language:"html",canSave:!0})?Ir():console.warn("[EDIT] popup blocked — allow popups for this origin to edit source in a separate window")}function Ir(){Rr.set(!1),qs.set(null)}function tv(e){switch(e.key){case"ArrowUp":return"up";case"ArrowDown":return"down";case"ArrowLeft":return"left";case"ArrowRight":return"right";default:return""}}function ns(e,n,s){if(s<=0)return 0;const a=Number.isFinite(e)?Math.trunc(e):0,r=Number.isFinite(n)?Math.trunc(n):0;return((a+r)%s+s)%s}function os(e,n){if(!n||!e.length)return-1;const s=e.indexOf(n);if(s>=0)return s;for(let a=0;a<e.length;a++)if(e[a].contains(n))return a;return-1}function ev(e){return e.printOpen&&(e.focusInPrint||e.focusOnHamburger||e.focusInMoreDrop)?"print":e.moreOpen&&(e.focusInMoreDrop||e.focusOnHamburger||e.focusOnBar)||e.moreOpen?"more":e.armed?"bar":"none"}function ss(e,n,s,a){return!n||e==="none"||a<0?null:e==="bar"?n==="left"?ns(s<0?0:s,-1,a):n==="right"?ns(s<0?-1:s,1,a):null:e==="more"?n==="down"?s<0?a>0?0:null:ns(s,1,a):n==="up"?s<=0?-1:ns(s,-1,a):null:e==="print"?n==="down"?ns(s<0?-1:s,1,a):n==="up"?ns(s<0?0:s,-1,a):n==="left"?-1:null:null}var nv=E('<div class="close svelte-zfoorp" role="button" tabindex="-1">CLOSE</div>'),ov=E('<div class="link svelte-zfoorp"><a target="_blank" class="svelte-zfoorp"> </a></div>'),sv=E('<div><div class="img-box svelte-zfoorp" role="dialog" tabindex="-1"><!> <!> <!></div></div>');function rv(e,n){Ue(n,!1);let s=g(n,"width",8),a=g(n,"height",8),r=g(n,"expanded",12,!1),i=g(n,"showClose",8,!0),l=g(n,"scrollable",8,!1),m=g(n,"top",8,null),f=g(n,"left",8,null),z=g(n,"bottom",8,null),x=g(n,"right",8,null),V=g(n,"linkUrl",8,null),O=g(n,"linkText",8,"LINK"),C=g(n,"shadowOpacity",8,.8),P=g(n,"onClick",8,null),nt=g(n,"containsExternal",8,null),W=g(n,"style",8,""),Y=g(n,"id",8,""),U=g(n,"class",8,""),F=c();function X(){r(!1)}function tt(N){N.key==="Escape"&&X()}function j(N){!r()||!t(F)||t(F).contains(N.target)||nt()&&nt()(N.target)||X()}let Q=!1;function vt(){Q||(document.addEventListener("click",j),Q=!0)}function et(){Q&&(document.removeEventListener("click",j),Q=!1)}so(()=>(window.addEventListener("keydown",tt),()=>{window.removeEventListener("keydown",tt),et()})),_(()=>Z(r()),()=>{r()?setTimeout(vt,0):et()}),Cn(),yn();var w=sv(),$=u(w),K=u($);jr(K,n,"default",{},null);var M=p(K,2);{var A=N=>{var pt=nv();G("click",pt,X),G("keydown",pt,X),h(N,pt)};R(M,N=>{i()&&N(A)})}var b=p(M,2);{var k=N=>{var pt=ov(),ht=u(pt),it=u(ht,!0);d(ht),d(pt),B(()=>{I(ht,"href",V()),gt(it,O())}),h(N,pt)};R(b,N=>{V()&&N(k)})}d($),Le($,N=>o(F,N),()=>t(F)),d(w),B(()=>{Pt(w,1,`parent ${r()?"expanded":""} ${U()??""}`,"svelte-zfoorp"),I(w,"id",Y()||void 0),le(w,`--custom-top: ${m()??""}; --custom-left: ${f()??""}; --custom-bottom: ${z()??""}; --custom-right: ${x()??""}; --shadow-opacity: ${C()??""}; --scrollable: ${l()?"scroll":"hidden"}; ${W()??""}`),le($,`--full-width: ${s()??""}px; --full-height: ${a()??""}px;`)}),G("click",$,()=>P()&&P()()),h(e,w),qe()}var av=E('<button type="button" class="code-edit svelte-o9q3b8" aria-label="Edit source in a separate window" title="EDIT — open this file in an unscaled editor window">EDIT</button>'),iv=E('<span class="save-flash svelte-o9q3b8"> </span>'),lv=E('<span class="save-tip svelte-o9q3b8" role="status"> </span>'),cv=E('<span class="save-pop svelte-o9q3b8"><!> <!></span>'),dv=E('<span><button type="button" class="code-save svelte-o9q3b8" aria-label="Save source to file" title="SAVE — write this buffer back to the source file">SAVE</button> <!></span>'),pv=E('<div class="code-title svelte-o9q3b8"><span class="code-title-text svelte-o9q3b8"> </span> <span class="code-title-actions svelte-o9q3b8"><!> <!></span></div>'),uv=E("<!> <!>",1);function fv(e,n){Ue(n,!1);const s=c(),a=c(),r=c();let i=g(n,"code",8),l=g(n,"language",8,"java"),m=g(n,"title",8,""),f=g(n,"expanded",12,!1),z=g(n,"revealedLines",24,()=>[1]),x=g(n,"fontSize",8,20),V=g(n,"readOnly",8,!0),O=g(n,"edit",8,!1),C=g(n,"save",8,!1),P=g(n,"saveLabel",8,"SAVE"),nt=g(n,"saveRefused",8,!1),W=g(n,"saveTip",8,""),Y=g(n,"style",8,""),U=g(n,"id",8,""),F=g(n,"class",8,"");const X=Qa();let tt=c();function j(){var K;return((K=t(tt))==null?void 0:K.getValue())??i()}function Q(){var K;return((K=t(tt))==null?void 0:K.isDirty())??!1}function vt(){var K;(K=t(tt))==null||K.markClean()}function et(){X("edit")}function w(){X("save")}_(()=>(Z(O()),Z(C())),()=>{o(s,O()||C())}),_(()=>(Z(m()),t(s)),()=>{o(a,m()||t(s)?"915px":"975px")}),_(()=>(Z(m()),t(s)),()=>{o(r,!!(m()||t(s)))}),Cn();var $={getValue:j,isDirty:Q,markClean:vt};return yn(),rv(e,{get style(){return Y()},get id(){return U()},get class(){return F()},width:1500,height:975,containsExternal:K=>{var M;return((M=t(tt))==null?void 0:M.containsPortaled(K))??!1},get expanded(){return f()},set expanded(K){f(K)},children:(K,M)=>{var A=uv(),b=Wt(A);{var k=pt=>{var ht=pv(),it=u(ht),ut=u(it,!0);d(it);var L=p(it,2),mt=u(L);{var lt=J=>{var D=av();G("click",D,nn(et)),h(J,D)};R(mt,J=>{O()&&J(lt)})}var Tt=p(mt,2);{var yt=J=>{var D=dv();let bt;var At=u(D),Et=p(At,2);{var Rt=Gt=>{var Te=cv(),Kt=u(Te);{var zt=Dt=>{var Yt=iv(),Ut=u(Yt,!0);d(Yt),B(()=>gt(Ut,P())),h(Dt,Yt)};R(Kt,Dt=>{P()!=="SAVE"&&Dt(zt)})}var Nt=p(Kt,2);{var kt=Dt=>{var Yt=lv(),Ut=u(Yt,!0);d(Yt),B(()=>gt(Ut,W())),h(Dt,Yt)};R(Nt,Dt=>{nt()&&Dt(kt)})}d(Te),h(Gt,Te)};R(Et,Gt=>{(P()!=="SAVE"||nt())&&Gt(Rt)})}d(D),B(()=>bt=Pt(D,1,"save-btn svelte-o9q3b8",null,bt,{refused:nt()})),G("click",At,nn(w)),h(J,D)};R(Tt,J=>{C()&&J(yt)})}d(L),d(ht),B(()=>gt(ut,m())),h(pt,ht)};R(b,pt=>{t(r)&&pt(k)})}var N=p(b,2);Le(Fc(N,{get code(){return i()},get language(){return l()},get revealLines(){return z()},width:"1500px",get height(){return t(a)},get fontSize(){return x()},get readOnly(){return V()},get expanded(){return f()},$$legacy:!0}),pt=>o(tt,pt),()=>t(tt)),h(K,A)},$$slots:{default:!0},$$legacy:!0}),gr(n,"getValue",j),gr(n,"isDirty",Q),gr(n,"markClean",vt),qe($)}function vv(e,n){const s=[];for(const a of[e.next,e.prev]){if(!a)continue;const r=n?a+(a.includes("?")?"&":"?")+"present":a;s.includes(r)||s.push(r)}return s}function hv(e){return e.length===0?"":JSON.stringify({prerender:[{source:"list",urls:e,eagerness:"immediate"}]})}const mv=Ye(new Map),gv={subscribe:mv.subscribe},bv=Ye(new Map),yv={subscribe:bv.subscribe};function kv(e){return`${e.libImport}/draw`}const wv="/__geekpresent/adjust-save";async function Xi(e){if(!e.length)return{ok:!0,patched:0,unmatched:[]};try{const n=await fetch(wv,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({route:location.pathname,changes:e})}),s=await n.json().catch(()=>({}));if(!n.ok)return{ok:!1,patched:0,unmatched:[],error:s.error||`HTTP ${n.status}`};const a=(s.unmatched??[]).map(r=>typeof r=="string"?{label:r,reason:"not-found"}:r);return{ok:!0,patched:s.patched??0,unmatched:a}}catch(n){return{ok:!1,patched:0,unmatched:[],error:n instanceof Error?n.message:String(n)}}}async function xv(e,n=[]){return e.trim()?Xi([{kind:"Draw",insert:e,insertImports:n,importFrom:kv(Tr)}]):{ok:!0,patched:0,unmatched:[]}}async function _v(){const e=[...Ee(gv).values()].filter(r=>r.dirty),n=e.filter(r=>r.pasteOf).map(r=>({kind:r.kind,name:r.pasteOf.name||void 0,before:r.pasteOf.before,paste:{name:r.name||void 0,after:r.after},file:r.file})),s=e.filter(r=>!r.pasteOf).map(r=>r.removed?{kind:r.kind,name:r.name||void 0,before:r.before,remove:!0,file:r.file}:{kind:r.kind,name:r.name||void 0,before:r.before,after:r.after,file:r.file}),a=[...Ee(yv).values()].filter(r=>r.dirty).map(r=>({kind:r.kind,name:r.name||void 0,oldTag:r.oldTag,newTag:r.newTag,before:r.before,after:r.after}));return Xi([...n,...s,...a])}function Tn(e){return String(Math.round((Number.isFinite(e)?e:0)*100)/100+0)}function Or(e){return`[${Tn(e[0])}, ${Tn(e[1])}]`}function xr(e,n){return n.includes('"')?` ${e}='${n}'`:` ${e}="${n}"`}function Sv(e){let n="";return e.arrow&&e.arrow!=="none"&&(n+=` arrow="${e.arrow}"`),e.arrowSize!=null&&(n+=` arrowSize={${Tn(e.arrowSize)}}`),e.color&&(n+=` color="${e.color}"`),e.thickness!=null&&(n+=` thickness={${Tn(e.thickness)}}`),e.dash===!0?n+=" dash":typeof e.dash=="string"&&e.dash&&(n+=` dash="${e.dash}"`),e.rough===!0?n+=" rough":e.rough===!1?n+=" rough={false}":typeof e.rough=="number"&&(n+=` rough={${Tn(e.rough)}}`),e.seed!=null&&(n+=` seed={${Tn(e.seed)}}`),e.label&&(n+=` label="${e.label}"`),e.labelText&&(n+=` labelText="${e.labelText}"`),e.labelText&&e.labelAt!=null&&e.labelAt!==.5&&(n+=` labelAt={${Tn(e.labelAt)}}`),e.labelText&&e.labelOffset!=null&&e.labelOffset!==20&&(n+=` labelOffset={${Tn(e.labelOffset)}}`),e.draw&&(n+=` draw={${Tn(e.draw)}}`),e.draw&&e.drawDelay&&(n+=` drawDelay={${Tn(e.drawDelay)}}`),e.grid&&e.grid>1&&(n+=` grid={${Tn(e.grid)}}`),e.id&&(n+=xr("id",e.id)),e.class&&(n+=xr("class",e.class)),e.style&&(n+=xr("style",e.style)),n}const Ev=6,Tv=34,Av=4,Nv="opacity:var(--annot-highlighter-alpha, 0.45)",Pv=["pen","line","arrow","rectangle","highlighter"];function Fr(e){return!!e&&Pv.includes(e.tool)}function $v(e){return Array.isArray(e.points)?e.points:[]}function Mv(e){return`points={[${e.map(Or).join(", ")}]}`}function Cv(e,n){const s=Rs(e.tool,n.penWidth??Ev,n.highlighterWidth??Tv);return Sv({color:e.color||void 0,thickness:s===Av?void 0:s,style:e.tool==="highlighter"?Nv:void 0})}function Dv(e,n={}){if(!Fr(e))return"";const s=$v(e);if(s.length===0)return"";const a=Cv(e,n);if(e.tool==="line"||e.tool==="arrow"){const r=Mr(s),i=r[0]??s[0],l=r[r.length-1]??i,m=e.tool==="arrow"?' arrow="end"':"";return`<Line from={${Or(i)}} to={${Or(l)}}${m}${a} />`}if(e.tool==="rectangle"){const r=s[0],i=s[s.length-1],l=Math.min(r[0],i[0]),m=Math.min(r[1],i[1]),f=Math.abs(i[0]-r[0]),z=Math.abs(i[1]-r[1]),x=Math.max(0,Number.isFinite(n.rectRadius)?n.rectRadius:0),V=x>0?` rounded={${Tn(x)}}`:"";return`<Rect x={${Tn(l)}} y={${Tn(m)}} width={${Tn(f)}} height={${Tn(z)}}${V}${a} />`}return`<Polyline ${Mv(s)} smooth${a} />`}function na(e,n,s={}){const a=new Set(n);return a.size===0||!Array.isArray(e)?[]:e.filter(r=>r&&a.has(r.id)).map(r=>Dv(r,s)).filter(r=>r!=="")}function zv(e,n){return na(e,n).length}function Lv(e,n,s={}){const a=na(e,n,s);if(a.length===0)return"";const r=s.indent??"";return s.wrap===!1?a.map(i=>`${r}${i}`).join(`
`):[`${r}<Draw>`,...a.map(i=>`${r}	${i}`),`${r}</Draw>`].join(`
`)}function Rv(e,n="$lib/draw"){const s=new Set;for(const r of e){const i=/^<([A-Za-z]+)/.exec(r);i&&s.add(i[1])}return s.size===0?"":`import { ${["Draw",...["Line","Polyline","Rect"].filter(r=>s.has(r))].join(", ")} } from '${n}';`}const Iv={size:12,thinning:.7,streamline:.6,smoothing:.5,easing:"linear",start:{taper:0,cap:!0},end:{taper:0,cap:!0}},oa={linear:e=>e,easeIn:e=>e*e,easeOut:e=>e*(2-e),easeInOut:e=>e<.5?2*e*e:-1+(4-2*e)*e},_r=(e,n,s)=>Math.min(s,Math.max(n,e)),ys=(e,n)=>typeof e=="number"&&Number.isFinite(e)?e:n;function sa(e){const n=Iv,s=e&&typeof e=="object"?e:{},a=(r,i)=>({taper:Math.max(0,ys(r==null?void 0:r.taper,i.taper)),cap:typeof(r==null?void 0:r.cap)=="boolean"?r.cap:i.cap});return{size:Math.max(.5,ys(s.size,n.size)),thinning:_r(ys(s.thinning,n.thinning),-1,1),streamline:_r(ys(s.streamline,n.streamline),0,1),smoothing:_r(ys(s.smoothing,n.smoothing),0,1),easing:s.easing&&s.easing in oa?s.easing:n.easing,start:a(s.start,n.start),end:a(s.end,n.end)}}function Ov(e){const n=sa(e);return n.size*oa[n.easing](.5+Math.abs(n.thinning)/2)}const ho=(e,n)=>[e[0]+n[0],e[1]+n[1]],fo=(e,n)=>[e[0]-n[0],e[1]-n[1]],vo=(e,n)=>[e[0]*n,e[1]*n],Fv=e=>[-e[0],-e[1]],ks=e=>[e[1],-e[0]],Fa=(e,n)=>e[0]*n[0]+e[1]*n[1],Hv=(e,n)=>e[0]===n[0]&&e[1]===n[1],Kv=(e,n)=>Math.hypot(e[1]-n[1],e[0]-n[0]),Ha=(e,n)=>(e[0]-n[0])**2+(e[1]-n[1])**2,Hr=(e,n,s)=>ho(e,vo(fo(n,e),s)),Ka=(e,n,s)=>ho(e,vo(n,s));function Qi(e){const n=Math.hypot(e[0],e[1]);return n===0?[0,0]:[e[0]/n,e[1]/n]}function ws(e,n,s){const a=Math.sin(s),r=Math.cos(s),i=e[0]-n[0],l=e[1]-n[1];return[i*r-l*a+n[0],i*a+l*r+n[1]]}const Bv=.5,jv=.25,Uv=.275,xs=Math.PI+1e-4,Ba=(e,n,s,a)=>e*a(.5-n*(.5-s));function qv(e,n,s){var x;if(e.length===0)return[];const a=.15+(1-n.streamline)*.85;let r=e;if(r.length===2){const V=r[1];r=[r[0]];for(let O=1;O<5;O++)r.push(Hr(r[0],V,O/4))}r.length===1&&(r=[r[0],ho(r[0],[1,1])]);const i=[{point:r[0],pressure:jv,vector:[1,1],distance:0,runningLength:0}];let l=!1,m=0,f=i[0];const z=r.length-1;for(let V=1;V<r.length;V++){const O=s&&V===z?r[V]:Hr(f.point,r[V],a);if(Hv(f.point,O))continue;const C=Kv(O,f.point);if(m+=C,V<z&&!l){if(m<n.size)continue;l=!0}f={point:O,pressure:Bv,vector:Qi(fo(f.point,O)),distance:C,runningLength:m},i.push(f)}return i[0].vector=((x=i[1])==null?void 0:x.vector)??[0,0],i}function Wv(e,n,s){const{size:a,smoothing:r,thinning:i}=n;if(e.length===0||a<=0)return[];const l=oa[n.easing],m=M=>M*(2-M),f=M=>--M*M*M+1,z=e[e.length-1].runningLength,x=n.start.taper,V=n.end.taper,O=Math.pow(a*r,2),C=[],P=[],nt=(M,A)=>{const b=Math.min(1,A/a),k=Math.min(1,1-b);return Math.min(1,M+(k-M)*(b*Uv))};let W=e.slice(0,10).reduce((M,A)=>(M+nt(M,A.distance))/2,e[0].pressure),Y=Ba(a,i,e[e.length-1].pressure,l),U,F=e[0].vector,X=e[0].point,tt=X,j=X,Q=tt,vt=!1;for(let M=0;M<e.length;M++){let{pressure:A}=e[M];const{point:b,vector:k,distance:N,runningLength:pt}=e[M];if(M<e.length-1&&z-pt<3)continue;i?(A=nt(W,N),Y=Ba(a,i,A,l)):Y=a/2,U===void 0&&(U=Y);const ht=pt<x?m(pt/x):1,it=z-pt<V?f((z-pt)/V):1;Y=Math.max(.01,Y*Math.min(ht,it));const ut=(M<e.length-1?e[M+1]:e[M]).vector,L=M<e.length-1?Fa(k,ut):1,lt=Fa(k,F)<0&&!vt,Tt=L<0;if(lt||Tt){const J=vo(ks(F),Y);for(let D=1/13,bt=0;bt<=1;bt+=D)j=ws(fo(b,J),b,xs*bt),C.push(j),Q=ws(ho(b,J),b,xs*-bt),P.push(Q);X=j,tt=Q,Tt&&(vt=!0);continue}if(vt=!1,M===e.length-1){const J=vo(ks(k),Y);C.push(fo(b,J)),P.push(ho(b,J));continue}const yt=vo(ks(Hr(ut,k,L)),Y);j=fo(b,yt),(M<=1||Ha(X,j)>O)&&(C.push(j),X=j),Q=ho(b,yt),(M<=1||Ha(tt,Q)>O)&&(P.push(Q),tt=Q),W=A,F=k}const et=e[0].point,w=e.length>1?e[e.length-1].point:ho(e[0].point,[1,1]),$=[],K=[];if(e.length===1){if(!(x||V)||s){const M=Ka(et,Qi(ks(fo(et,w))),-(U??Y)),A=[];for(let b=1/13,k=b;k<=1;k+=b)A.push(ws(M,et,xs*2*k));return A}}else{if(!x)if(n.start.cap)for(let A=1/13,b=A;b<=1;b+=A)$.push(ws(P[0],et,xs*b));else{const A=fo(C[0],P[0]),b=vo(A,.5),k=vo(A,.51);$.push(fo(et,b),fo(et,k),ho(et,k),ho(et,b))}const M=ks(Fv(e[e.length-1].vector));if(V)K.push(w);else if(n.end.cap){const A=Ka(w,M,Y);for(let b=1/29,k=b;k<1;k+=b)K.push(ws(A,w,xs*3*k))}else K.push(ho(w,vo(M,Y)),ho(w,vo(M,Y*.99)),fo(w,vo(M,Y*.99)),fo(w,vo(M,Y)))}return C.concat(K,P.reverse(),$)}function Gv(e,n,s=!0){if(!Array.isArray(e)||e.length===0)return[];const a=sa(n),r=e.map(Xl);return Wv(qv(r,a,s),a,s)}const Do=e=>Number.isFinite(e)?e.toFixed(2):"0.00";function Vv(e){const n=e.length;if(n<4)return"";let s=e[0],a=e[1];const r=e[2];let i=`M${Do(s[0])},${Do(s[1])} Q${Do(a[0])},${Do(a[1])} ${Do((a[0]+r[0])/2)},${Do((a[1]+r[1])/2)} T`;for(let l=2;l<n-1;l++)s=e[l],a=e[l+1],i+=`${Do((s[0]+a[0])/2)},${Do((s[1]+a[1])/2)} `;return i+"Z"}function Yv(e,n,s=!0){return Vv(Gv(e,n,s))}function ja(e,n){var nt;const{scaleFrom:s,onMove:a,onEnd:r,onCancel:i}=n,l=typeof s=="function"?s()||1:s&&s.getBoundingClientRect().width/s.offsetWidth||1,m=e.clientX,f=e.clientY,z=e.target,x=e.pointerId,V=W=>a((W.clientX-m)/l,(W.clientY-f)/l,W),O=()=>{P(),r==null||r()},C=W=>{W.key==="Escape"&&(W.preventDefault(),W.stopPropagation(),P(),i==null||i())};function P(){var W;window.removeEventListener("pointermove",V),window.removeEventListener("pointerup",O),i&&window.removeEventListener("keydown",C,!0),(W=z==null?void 0:z.releasePointerCapture)==null||W.call(z,x)}(nt=z==null?void 0:z.setPointerCapture)==null||nt.call(z,x),window.addEventListener("pointermove",V),window.addEventListener("pointerup",O),i&&window.addEventListener("keydown",C,!0)}var Xv=ro('<text dominant-baseline="hanging"> </text>'),Ua=ro("<path></path>"),Qv=E('<input class="annot-text-input no-print svelte-sdoi9y" aria-label="Annotation text"/>'),Jv=ro('<svg aria-hidden="true"><!><!></svg><!>',1),Zv=E('<div class="annot-stale no-print svelte-sdoi9y" role="status"><span class="annot-stale-text svelte-sdoi9y">This slide has annotations from <b> </b>.</span> <button type="button" class="annot-btn svelte-sdoi9y">RESET SLIDE</button> <button type="button" class="annot-btn svelte-sdoi9y">RESET ALL</button> <button type="button" class="annot-btn keep svelte-sdoi9y">KEEP</button></div>'),th=E('<span class="annot-key svelte-sdoi9y" aria-hidden="true"> </span>'),eh=E('<button type="button"><svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-sdoi9y"><path></path></svg> <!></button>'),nh=E('<span class="annot-said svelte-sdoi9y" role="status"> </span>'),oh=E('<span class="annot-said hint svelte-sdoi9y">tap a mark to keep it</span>'),sh=E('<span class="annot-sep svelte-sdoi9y" aria-hidden="true"></span> <button type="button" class="annot-btn freeze-go svelte-sdoi9y"> </button> <!>',1),rh=E('<span class="annot-key svelte-sdoi9y" aria-hidden="true"></span>'),ah=E('<button type="button"><!></button>'),ih=E('<span class="annot-sep svelte-sdoi9y" aria-hidden="true"></span> <!>',1),lh=E('<div class="annot-bar no-print svelte-sdoi9y" role="toolbar" aria-label="Annotation tools"><span class="annot-grip svelte-sdoi9y" role="button" tabindex="-1" aria-label="Move the annotation bar" title="Drag to move · double-click to reset">⠿</span> <!> <!> <!> <span class="annot-sep svelte-sdoi9y" aria-hidden="true"></span> <button type="button" class="annot-btn svelte-sdoi9y">RESET</button> <button type="button" class="annot-btn svelte-sdoi9y">RESET ALL</button> <span class="annot-sep svelte-sdoi9y" aria-hidden="true"></span> <button type="button" class="annot-close svelte-sdoi9y" aria-label="Close annotation tools" title="Close (Esc)"><span aria-hidden="true" class="svelte-sdoi9y">×</span></button></div>'),ch=E("<!>  <!> <!>",1);function dh(e,n){Ue(n,!0);const s=()=>dt(Ys,"$canAnnotate",x),a=()=>dt(is,"$annotationMode",x),r=()=>dt(ti,"$strokes",x),i=()=>dt(ma,"$annotateTool",x),l=()=>dt(ga,"$annotateColor",x),m=()=>dt(Zo,"$canSave",x),f=()=>dt(Ps,"$barPos",x),z=()=>dt(Bl,"$staleInk",x),[x,V]=Dn();let O=g(n,"canvasWidth",3,1920),C=g(n,"canvasHeight",3,1080),P=g(n,"penWidth",3,6),nt=g(n,"highlighterWidth",3,34),W=g(n,"arrowHead",3,36),Y=g(n,"rectRadius",3,12),U=g(n,"eraserRadius",3,14),F=g(n,"textSize",3,44),X=g(n,"inkColors",19,()=>[null,"#E5484D","#3FA9F5","#4BD07A","#FFFFFF"]),tt=g(n,"levelHighlight",3,!0),j=g(n,"snapPen",3,!0),Q=g(n,"freehand",19,()=>({}));const vt=He(()=>Q()===!1?null:sa(Q())),et=T=>T==="pen"&&t(vt)!==null,w=He(()=>s()&&a()),$=He(()=>t(w)||r().length>0),K=He(()=>t(w)&&i()==="pointer"),M=He(()=>i()==="eraser"||i()==="freeze"||i()==="pointer"),A=He(()=>t(M)||i()==="text"?"pen":i()),b=He(()=>t(M)?null:l());let k=Ze(void 0),N=Ze(Sr([])),pt=0,ht=0,it=Ze(null),ut=Ze(!1);const L=He(()=>!t(w)||i()!=="eraser"||!t(it)?null:mt(t(it)));function mt(T){for(let q=r().length-1;q>=0;q--){const rt=r()[q];if(rt.tool==="text"){if(ya(T,rt.points[0]??[0,0],rt.text??"",rt.size??F(),U()))return rt.id}else{const It=et(rt.tool)&&t(vt)?Ov(t(vt)):Rs(rt.tool,P(),nt())/2,Zt=rt.tool==="rectangle"?sc(rt.points):rt.points;if(rc(T,Zt,U()+It))return rt.id}}return null}let lt=Ze(Sr([]));const Tt=He(()=>{if(!t(w)||i()!=="freeze"||!t(it))return null;const T=mt(t(it));return T&&Fr(r().find(q=>q.id===T))?T:null}),yt=He(()=>zv(r(),t(lt))),J=He(()=>({penWidth:P(),highlighterWidth:nt(),rectRadius:Y()})),D=He(()=>Lv(r(),t(lt),t(J)));function bt(T){o(lt,t(lt).includes(T)?t(lt).filter(q=>q!==T):[...t(lt),T],!0)}function At(){o(lt,[],!0)}Io(()=>{i()!=="freeze"&&st(At)});let Et=Ze(null),Rt;function Gt(T){o(Et,T,!0),clearTimeout(Rt),Rt=setTimeout(()=>o(Et,null),2400)}async function Te(){const T=t(lt).slice(),q=na(r(),T,t(J));if(q.length!==0){if(m()){const rt=await xv(q.join(`
`),Kt(q));if(rt.ok&&rt.patched>0){hr(T),At(),Gt(`FROZEN ${q.length}`);return}rt.ok&&rt.unmatched.length>0?Gt("PLACE IT YOURSELF"):rt.ok||Gt("COPIED (NO SAVE)")}try{await navigator.clipboard.writeText(t(D)),t(Et)||Gt(`COPIED ${q.length}`)}catch{window.prompt("Copy this markup into the slide:",t(D))}At()}}function Kt(T){const q=Rv(T),rt=/\{([^}]*)\}/.exec(q);return rt?rt[1].split(",").map(It=>It.trim()).filter(Boolean):[]}const zt=8,Nt=4;let kt=Ze(null),Dt=Ze(""),Yt=Ze(void 0);function Ut(T){for(let q=r().length-1;q>=0;q--){const rt=r()[q];if(rt.tool==="text"&&ya(T,rt.points[0]??[0,0],rt.text??"",rt.size??F(),zt))return rt.id}return null}function ce(T,q,rt=F()){const It=T?r().find(Zt=>Zt.id===T):void 0;o(kt,{id:T,x:q[0],y:q[1],size:(It==null?void 0:It.size)??rt},!0),o(Dt,(It==null?void 0:It.text)??"",!0),ds().then(()=>{var Zt,ke;(Zt=t(Yt))==null||Zt.focus(),(ke=t(Yt))==null||ke.select()})}function Qt(){if(!t(kt))return;const T=cc(t(Dt)),{id:q,x:rt,y:It,size:Zt}=t(kt);if(o(kt,null),o(Dt,""),q)T?vr(q,{text:T}):hr([q]);else if(T){const ke={id:`ink-${Date.now()}-${++ht}`,tool:"text",points:[[rt,It]],text:T,size:Zt};t(b)&&(ke.color=t(b)),ba(ke)}}function wt(){o(kt,null),o(Dt,"")}function fe(T){T.stopPropagation(),T.key==="Enter"?(T.preventDefault(),Qt()):T.key==="Escape"&&(T.preventDefault(),wt())}function Jt(T){const q=tn(T);t(kt)&&Qt();const rt=Ut(q);if(!rt){ce(null,q);return}const It=r().find(pe=>pe.id===rt),Zt=(It==null?void 0:It.points[0])??[q[0],q[1]];let ke=!1;ja(T,{scaleFrom:Yn,onMove:(pe,Lt)=>{Math.hypot(pe,Lt)>Nt&&(ke=!0),ke&&vr(rt,{points:[[Zt[0]+pe,Zt[1]+Lt]]})},onEnd:()=>{ke||ce(rt,Zt)},onCancel:()=>{ke&&vr(rt,{points:[Zt]})}})}let ye=Ze(!1),Re=Ze(!1);function de(T,q){return T?q&&et(q)?`fill:${T};`:`stroke:${T};`:""}function ae(T,q){return q==="highlighter"&&tt()?ac(T):q==="pen"&&j()&&t(ye)?ka(T):q==="line"||q==="arrow"?j()&&t(ye)?ka(T):Mr(T):q==="rectangle"?Mr(T):T}function Xe(T,q,rt=!0){return q==="arrow"?tc(T,W()):q==="rectangle"?ec(T,Y()):et(q)?Yv(T,t(vt),rt):nc(T)}function tn(T){var q;return dc(T.clientX,T.clientY,(q=t(k))==null?void 0:q.getBoundingClientRect(),O(),C())}function on(T,q){var rt,It,Zt,ke;try{q?(It=(rt=t(k))==null?void 0:rt.setPointerCapture)==null||It.call(rt,T):(ke=(Zt=t(k))==null?void 0:Zt.releasePointerCapture)==null||ke.call(Zt,T)}catch{}}function kn(T){const q=mt(T);q&&hr([q])}function ao(T){if(!(!t(w)||t(K)||T.button!==0)){if(T.preventDefault(),i()==="eraser"){on(T.pointerId,!0),o(ut,!0),o(it,tn(T),!0),kn(t(it));return}if(i()==="freeze"){o(it,tn(T),!0);const q=mt(t(it));q&&Fr(r().find(rt=>rt.id===q))&&bt(q);return}if(i()==="text"){Jt(T);return}o(ye,T.shiftKey,!0),on(T.pointerId,!0),o(N,[tn(T)],!0),pt=performance.now()}}function io(T){if(!t(w)||t(K))return;if(i()==="eraser"){o(it,tn(T),!0),t(ut)&&kn(t(it));return}if(i()==="freeze"){o(it,tn(T),!0);return}if(i()==="text"||t(N).length===0)return;o(ye,T.shiftKey,!0);const q=tn(T),rt=t(N)[t(N).length-1];Math.hypot(q[0]-rt[0],q[1]-rt[1])<2||o(N,[...t(N),q],!0)}function vn(T){if(i()==="eraser"){if(!t(ut))return;o(ut,!1),on(T.pointerId,!1);return}if(i()==="freeze"||i()==="text"||t(N).length===0)return;o(ye,T.shiftKey,!0),on(T.pointerId,!1);const q=ae(oc(t(N),et(t(A))?2:4),t(A));if(o(N,[],!0),q.length===0)return;const rt={id:`ink-${Date.now()}-${++ht}`,tool:t(A),points:q};t(b)&&(rt.color=t(b));const It=Math.round(performance.now()-pt);It>0&&(rt.ms=It),ba(rt)}function Ie(){o(it,null)}const wn=.7;let zn=Ze(void 0);function Yn(){var q;const T=(q=t(k))==null?void 0:q.getBoundingClientRect();return T&&T.width>0?T.width/O():1}function jn(T){var Vt,Mt;if(T.button!==0)return;T.preventDefault(),T.stopPropagation();const q=(Vt=t(zn))==null?void 0:Vt.getBoundingClientRect(),rt=(Mt=t(k))==null?void 0:Mt.getBoundingClientRect();if(!q||!rt)return;const It=Yn(),Zt=(q.left-rt.left)/It,ke=(q.top-rt.top)/It,pe=q.width/It,Lt=q.height/It,se=f();ja(T,{scaleFrom:Yn,onMove:(Bt,Ot)=>Ps.set(pc(Zt+Bt,ke+Ot,pe,Lt,O(),C())),onCancel:()=>Ps.set(se)})}function Ln(){Ps.set(null)}let Un=Ze(0);Io(()=>{const T=t(zn);if(!T||typeof ResizeObserver>"u")return;const q=new ResizeObserver(()=>o(Un,T.offsetWidth,!0));return q.observe(T),()=>q.disconnect()});const hn=He(()=>ic(t(Un),O(),wn)),Xn=He(()=>`--annot-bar-scale:${t(hn)};`+(f()?`left:${f().x}px; top:${f().y}px; bottom:auto; transform:scale(${t(hn)}); transform-origin:top left;`:""));let Ao=null;Io(()=>{i()!=="pointer"&&(Ao=i())});function No(T){ma.set(Zl(T,i(),Ao))}function S(T){t(M)||ga.set(T)}const ot=[{tool:"pointer",label:"Pointer",d:"M6 3l12 9-5 1 3 6-2.5 1-3-6L6 17z"},{tool:"pen",label:"Pen",d:"M4 20l1-4L15 5l4 4L9 19l-4 1z M14 6l4 4"},{tool:"line",label:"Line",d:"M5 19L19 5"},{tool:"arrow",label:"Arrow",d:"M5 19L19 5M11 5h8v8"},{tool:"rectangle",label:"Rectangle",d:"M5 6h14v12H5z"},{tool:"highlighter",label:"Highlight",d:"M4 20h5M6 18L15 9l3 3-9 9H6zM14 8l3 3"},{tool:"text",label:"Text",d:"M6 6h12M12 6v13M9 19h6"},{tool:"eraser",label:"Erase",d:"M4 20h9M6 18l7-7 6 6-4 4H10z"},{tool:"freeze",label:"Freeze",d:"M12 3v18M4.5 7.5l15 9M19.5 7.5l-15 9"}];function $t(T){if(t(w)){if(T.key==="Shift"&&(o(ye,!0),o(Re,!0)),T.key==="Escape")T.preventDefault(),is.set(!1);else if((T.ctrlKey||T.metaKey)&&T.key.toLowerCase()==="z")T.preventDefault(),jl();else if(!Jo(T.target)){const q=Ql(T,ot.length,X().length);if(!q)return;T.preventDefault(),q.kind==="tool"?No(ot[q.index].tool):S(X()[q.index])}}}function jt(T){T.key==="Shift"&&(o(ye,!1),o(Re,!1))}var oe=ch();G("keydown",Ss,$t),G("keyup",Ss,jt),G("blur",Ss,()=>o(Re,!1));var We=Wt(oe);{var sn=T=>{var q=Jv(),rt=Wt(q);let It;var Zt=u(rt);Mn(Zt,1,r,Vt=>Vt.id,(Vt,Mt)=>{var Bt=fn(),Ot=Wt(Bt);{var Me=he=>{var ee=fn(),xe=Wt(ee);{var Ce=Oe=>{var re=Xv();let Ne;var An=u(re,!0);d(re),B(()=>{var St,ct;Ne=Pt(re,0,"annot-text svelte-sdoi9y",null,Ne,{erasing:t(L)===t(Mt).id}),I(re,"x",((St=t(Mt).points[0])==null?void 0:St[0])??0),I(re,"y",((ct=t(Mt).points[0])==null?void 0:ct[1])??0),I(re,"font-size",t(Mt).size??F()),le(re,t(Mt).color?`fill:${t(Mt).color};`:""),gt(An,t(Mt).text)}),h(Oe,re)};R(xe,Oe=>{t(kt)&&t(kt).id===t(Mt).id||Oe(Ce)})}h(he,ee)},Ae=he=>{var ee=Ua();let xe;B((Ce,Oe,re,Ne)=>{xe=Pt(ee,0,"annot-stroke svelte-sdoi9y",null,xe,Ce),I(ee,"d",Oe),I(ee,"stroke-width",re),le(ee,Ne)},[()=>({highlighter:t(Mt).tool==="highlighter",freehand:et(t(Mt).tool),erasing:t(L)===t(Mt).id,freezing:t(Tt)===t(Mt).id,frozen:t(lt).includes(t(Mt).id)}),()=>Xe(t(Mt).points,t(Mt).tool),()=>Rs(t(Mt).tool,P(),nt()),()=>de(t(Mt).color,t(Mt).tool)]),h(he,ee)};R(Ot,he=>{t(Mt).tool==="text"?he(Me):he(Ae,-1)})}h(Vt,Bt)});var ke=p(Zt);{var pe=Vt=>{var Mt=Ua();let Bt;B((Ot,Me,Ae,he)=>{Bt=Pt(Mt,0,"annot-stroke svelte-sdoi9y",null,Bt,Ot),I(Mt,"d",Me),I(Mt,"stroke-width",Ae),le(Mt,he)},[()=>({highlighter:t(A)==="highlighter",freehand:et(t(A))}),()=>Xe(ae(t(N),t(A)),t(A),!1),()=>Rs(t(A),P(),nt()),()=>de(t(b),t(A))]),h(Vt,Mt)};R(ke,Vt=>{t(N).length>0&&Vt(pe)})}d(rt),Le(rt,Vt=>o(k,Vt),()=>t(k));var Lt=p(rt);{var se=Vt=>{var Mt=Qv();oo(Mt),Le(Mt,Bt=>o(Yt,Bt),()=>t(Yt)),B(()=>{I(Mt,"maxlength",lc),le(Mt,`left:${t(kt).x??""}px; top:${t(kt).y??""}px; font-size:${t(kt).size??""}px; ${t(b)?`color:${t(b)};`:""}`)}),Je("keydown",Mt,fe),G("blur",Mt,Qt),xo(Mt,()=>t(Dt),Bt=>o(Dt,Bt)),h(Vt,Mt)};R(Lt,Vt=>{t(w)&&t(kt)&&Vt(se)})}B(()=>{It=Pt(rt,0,"annot-surface svelte-sdoi9y",null,It,{armed:t(w),erasing:t(w)&&i()==="eraser",freezing:t(w)&&i()==="freeze",texting:t(w)&&i()==="text"}),I(rt,"viewBox",`0 0 ${O()??""} ${C()??""}`),le(rt,`width:${O()??""}px; height:${C()??""}px; pointer-events:${t(w)&&!t(K)?"auto":"none"};`)}),Je("pointerdown",rt,ao),Je("pointermove",rt,io),Je("pointerup",rt,vn),G("pointercancel",rt,vn),G("pointerleave",rt,Ie),h(T,q)};R(We,T=>{t($)&&T(sn)})}var rn=p(We,2);{var go=T=>{var q=Zv(),rt=u(q),It=p(u(rt)),Zt=u(It,!0);d(It),Ke(),d(rt);var ke=p(rt,2),pe=p(ke,2),Lt=p(pe,2);d(q),B(se=>gt(Zt,se),[()=>Jl(z().ts,Date.now())]),Je("click",ke,function(...se){var Vt;(Vt=Pr)==null||Vt.apply(this,se)}),Je("click",pe,function(...se){var Vt;(Vt=$r)==null||Vt.apply(this,se)}),Je("click",Lt,function(...se){var Vt;(Vt=Ul)==null||Vt.apply(this,se)}),h(T,q)};R(rn,T=>{z()&&T(go)})}var Po=p(rn,2);{var qn=T=>{var q=lh(),rt=u(q),It=p(rt,2);Mn(It,19,()=>ot,Bt=>Bt.tool,(Bt,Ot,Me)=>{var Ae=eh();let he;var ee=u(Ae),xe=u(ee);d(ee);var Ce=p(ee,2);{var Oe=re=>{var Ne=th(),An=u(Ne,!0);d(Ne),B(()=>gt(An,t(Me)+1)),h(re,Ne)};R(Ce,re=>{t(Re)||re(Oe)})}d(Ae),B(re=>{he=Pt(Ae,1,"annot-btn icon svelte-sdoi9y",null,he,{on:i()===t(Ot).tool,erase:t(Ot).tool==="eraser",freeze:t(Ot).tool==="freeze"}),I(Ae,"aria-label",t(Ot).label),I(Ae,"aria-pressed",i()===t(Ot).tool),I(Ae,"aria-keyshortcuts",re),I(Ae,"title",`${t(Ot).label??""} (${t(Me)+1})`),I(xe,"d",t(Ot).d)},[()=>String(t(Me)+1)]),Je("click",Ae,()=>No(t(Ot).tool)),h(Bt,Ae)});var Zt=p(It,2);{var ke=Bt=>{var Ot=sh(),Me=p(Wt(Ot),2),Ae=u(Me);d(Me);var he=p(Me,2);{var ee=Ce=>{var Oe=nh(),re=u(Oe,!0);d(Oe),B(()=>gt(re,t(Et))),h(Ce,Oe)},xe=Ce=>{var Oe=oh();h(Ce,Oe)};R(he,Ce=>{t(Et)?Ce(ee):Ce(xe,-1)})}B(()=>{Me.disabled=t(yt)===0,I(Me,"title",m()?"Write the picked marks into this slide’s source":"Copy the picked marks as Draw markup"),gt(Ae,`FREEZE (${t(yt)??""})`)}),Je("click",Me,Te),h(Bt,Ot)};R(Zt,Bt=>{i()==="freeze"&&Bt(ke)})}var pe=p(Zt,2);{var Lt=Bt=>{var Ot=ih(),Me=p(Wt(Ot),2);Mn(Me,17,X,mo,(Ae,he,ee)=>{var xe=ah();let Ce;I(xe,"aria-keyshortcuts",ee<9?`Shift+${ee+1}`:void 0);var Oe=u(xe);{var re=Ne=>{var An=rh();An.textContent=ee+1,h(Ne,An)};R(Oe,Ne=>{t(Re)&&ee<9&&Ne(re)})}d(xe),B(()=>{Ce=Pt(xe,1,"annot-swatch svelte-sdoi9y",null,Ce,{on:t(b)===t(he),theme:t(he)===null,hl:i()==="highlighter"}),le(xe,t(he)?`--swatch:${t(he)};`:""),I(xe,"aria-label",t(he)===null?"Theme colour":`Colour ${t(he)}`),I(xe,"aria-pressed",t(b)===t(he)),I(xe,"title",`${(t(he)===null?"Theme colour":t(he))??""}${ee<9?` (Shift+${ee+1})`:""}`)}),Je("click",xe,()=>S(t(he))),h(Ae,xe)}),h(Bt,Ot)};R(pe,Bt=>{t(M)||Bt(Lt)})}var se=p(pe,4),Vt=p(se,2),Mt=p(Vt,4);d(q),Le(q,Bt=>o(zn,Bt),()=>t(zn)),B(()=>{le(q,t(Xn)),se.disabled=r().length===0}),Je("pointerdown",rt,jn),Je("dblclick",rt,Ln),Je("click",se,function(...Bt){var Ot;(Ot=Pr)==null||Ot.apply(this,Bt)}),Je("click",Vt,function(...Bt){var Ot;(Ot=$r)==null||Ot.apply(this,Bt)}),Je("click",Mt,()=>is.set(!1)),h(T,q)};R(Po,T=>{t(w)&&T(qn)})}h(e,oe),qe(),V()}Br(["pointerdown","pointermove","pointerup","keydown","click","dblclick"]);const qa=new Map;async function Ji(e){const n=qa.get(e);if(n)return n;try{const s=await fetch(e,{credentials:"omit"});if(!s.ok)return null;const a=await s.blob(),r=await new Promise(i=>{const l=new FileReader;l.onload=()=>i(typeof l.result=="string"?l.result:null),l.onerror=()=>i(null),l.readAsDataURL(a)});return r&&qa.set(e,r),r}catch{return null}}async function ph(){const e=await Promise.all(Array.from(document.styleSheets).map(n=>Zi(n,0)));return uh(e.join(`
`))}async function Wa(e){try{const n=await fetch(e,{credentials:"omit"});return n.ok?await n.text():""}catch{return""}}async function Zi(e,n){if(n>4)return"";let s=null;try{s=e.cssRules}catch{s=null}if(!s)return e.href?Wa(e.href):"";const a=[];for(const r of Array.from(s)){if(r.type===3){const i=r;if(i.styleSheet)a.push(await Zi(i.styleSheet,n+1));else if(i.href)try{a.push(await Wa(new URL(i.href,e.href??document.baseURI).href))}catch{}continue}a.push(r.cssText)}return a.join(`
`)}async function uh(e){const n=new Set,s=/url\(\s*['"]?([^'")]+)['"]?\s*\)/g;for(const r of e.matchAll(s)){const i=r[1].trim();i&&!i.startsWith("data:")&&n.add(i)}const a=new Map;return await Promise.all(Array.from(n).map(async r=>{let i=r;try{i=new URL(r,document.baseURI).href}catch{return}const l=await Ji(i);l&&a.set(r,l)})),e.replace(s,(r,i)=>{const l=a.get(i.trim());return l?`url("${l}")`:r})}function fh(e,n){const s=Array.from(e.querySelectorAll(xa)),a=Array.from(n.querySelectorAll(xa));s.forEach((r,i)=>{var x;const l=a[i];if(!l)return;let m=null;try{if(r instanceof HTMLCanvasElement)m=r.toDataURL("image/png");else if(r instanceof HTMLVideoElement&&r.videoWidth>0){const V=document.createElement("canvas");V.width=r.videoWidth,V.height=r.videoHeight,(x=V.getContext("2d"))==null||x.drawImage(r,0,0),m=V.toDataURL("image/png")}}catch{m=null}if(!m)return;const f=document.createElement("img");f.src=m;const z=r.getBoundingClientRect();f.style.cssText=l.style.cssText,f.style.width=`${r.offsetWidth||z.width}px`,f.style.height=`${r.offsetHeight||z.height}px`,l.replaceWith(f)})}async function vh(e){const n=Array.from(e.querySelectorAll("img"));await Promise.all(n.map(async s=>{const a=s.getAttribute("src")??"";if(!(!a||a.startsWith("data:")))try{const r=await Ji(new URL(a,document.baseURI).href);r?s.setAttribute("src",r):s.remove()}catch{s.remove()}}))}async function hh(e,n=1920,s=1080,a=1){const r=Tc(e);if(r.length>0)return{blob:null,blockers:r};const i=e.cloneNode(!0);i.style.width=`${n}px`,i.style.height=`${s}px`,i.style.transform="none",i.style.margin="0";const l=i.querySelector(".content");l&&(l.style.transform="none",l.style.transformOrigin="top left"),i.querySelectorAll(Ac).forEach(x=>x.remove()),fh(e,i),await vh(i);const m=await ph(),f=Nc(new XMLSerializer().serializeToString(i),m,n,s);return{blob:await mh(f,n,s,a),blockers:[]}}function mh(e,n,s,a){return new Promise(r=>{const i=new Image;i.onload=()=>{const l=document.createElement("canvas"),m=Math.max(1,Number(a)||1);l.width=Math.round(n*m),l.height=Math.round(s*m);const f=l.getContext("2d");if(!f)return r(null);f.drawImage(i,0,0,l.width,l.height);try{l.toBlob(z=>r(z),"image/png")}catch{r(null)}},i.onerror=()=>r(null),i.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`})}function gh(e,n){const s=URL.createObjectURL(e),a=document.createElement("a");a.href=s,a.download=n,a.click(),setTimeout(()=>URL.revokeObjectURL(s),0)}var bh=E('<button type="button" class="ghost danger svelte-a0xy2r">Stop</button>'),yh=E(`<div class="kiosk-scrim no-print gp-chrome svelte-a0xy2r" role="presentation"><div class="kiosk-dialog svelte-a0xy2r" role="dialog" aria-modal="true" aria-labelledby="kiosk-dialog-title" tabindex="-1"><h2 id="kiosk-dialog-title" class="svelte-a0xy2r">Kiosk / auto-advance</h2> <p class="lead svelte-a0xy2r">Steps reveal first (like Space), then the slide pages and loops.
				Pause and Stop stay on the small indicator — keys do not exit.</p> <label class="field svelte-a0xy2r"><span class="lbl svelte-a0xy2r">Step pace</span> <span class="ctl svelte-a0xy2r"><input type="number" min="0.25" max="120" step="0.5" class="svelte-a0xy2r"/> <span class="unit svelte-a0xy2r">seconds</span></span> <span class="hint svelte-a0xy2r">Between build reveals on one slide</span></label> <label class="field svelte-a0xy2r"><span class="lbl svelte-a0xy2r">Page pace</span> <span class="ctl svelte-a0xy2r"><input type="number" min="0.25" max="120" step="0.5" class="svelte-a0xy2r"/> <span class="unit svelte-a0xy2r">seconds</span></span> <span class="hint svelte-a0xy2r">After the build (and animations) finish</span></label> <label class="check svelte-a0xy2r"><input type="checkbox" class="svelte-a0xy2r"/> <span>Show speaker notes (one line at a time) <span class="hint svelte-a0xy2r">Each &lt;Note&gt; child is a step (drag the panel; n/N progress).
						Long lines hold longer (~150 wpm); then the deck pages.</span></span></label> <div class="actions svelte-a0xy2r"><!> <span class="spacer svelte-a0xy2r"></span> <button type="button" class="ghost svelte-a0xy2r">Cancel</button> <button type="button" class="primary svelte-a0xy2r"> </button></div></div></div>`);function kh(e,n){Ue(n,!1);const s=()=>dt(Hc,"$kioskDialogOpen",i),a=()=>dt(Wr,"$kioskPaces",i),r=()=>dt(Ks,"$kioskStatus",i),[i,l]=Dn();let m=c(2),f=c(6),z=c(!1);function x(){Bc({stepMs:Ea(t(m),ai),pageMs:Ea(t(f),ri),useNotes:t(z)})}function V(){Kc()}function O(){ii()}function C(U){s()&&(U.key==="Escape"?(U.preventDefault(),U.stopPropagation(),V()):U.key==="Enter"&&!U.shiftKey&&!U.ctrlKey&&!U.metaKey&&!U.altKey&&(U.preventDefault(),U.stopPropagation(),x()))}let P=c();_(()=>(s(),a()),()=>{s()&&(o(m,Sa(a().stepMs)),o(f,Sa(a().pageMs)),o(z,a().useNotes))}),_(()=>(s(),t(P)),()=>{s()&&t(P)&&queueMicrotask(()=>{var U;return(U=t(P))==null?void 0:U.focus()})}),Cn(),yn();var nt=fn();G("keydown",Ss,C);var W=Wt(nt);{var Y=U=>{var F=yh(),X=u(F),tt=p(u(X),4),j=p(u(tt),2),Q=u(j);oo(Q),Ke(2),d(j),Ke(2),d(tt);var vt=p(tt,2),et=p(u(vt),2),w=u(et);oo(w),Ke(2),d(et),Ke(2),d(vt);var $=p(vt,2),K=u($);oo(K),Ke(2),d($);var M=p($,2),A=u(M);{var b=ht=>{var it=bh();G("click",it,O),h(ht,it)};R(A,ht=>{r()!=="off"&&ht(b)})}var k=p(A,4),N=p(k,2),pt=u(N,!0);d(N),d(M),d(X),Le(X,ht=>o(P,ht),()=>t(P)),d(F),B(()=>gt(pt,r()==="off"?"Start":"OK")),xo(Q,()=>t(m),ht=>o(m,ht)),xo(w,()=>t(f),ht=>o(f,ht)),Za(K,()=>t(z),ht=>o(z,ht)),G("click",k,V),G("click",N,x),G("click",F,fi(V)),h(U,F)};R(W,U=>{s()&&U(Y)})}h(e,nt),qe(),l()}var wh=E('<span class="note-count svelte-11za50q" title="Note progress"> </span>'),xh=E('<div class="kiosk-note-body svelte-11za50q"> </div>'),_h=E('<div role="status" aria-live="polite"><div class="kiosk-bar svelte-11za50q"><span class="grip svelte-11za50q" aria-hidden="true" title="Drag to move">⠿</span> <button type="button" class="ring-btn svelte-11za50q"><svg class="ring svelte-11za50q" viewBox="0 0 28 28" width="26" height="26" aria-hidden="true"><circle class="track svelte-11za50q" cx="14" cy="14" fill="none" stroke-width="2.5"></circle><circle class="prog svelte-11za50q" cx="14" cy="14" fill="none" stroke-width="2.5" stroke-linecap="round" transform="rotate(-90 14 14)"></circle></svg> <span class="glyph svelte-11za50q" aria-hidden="true"> </span></button> <span class="meta svelte-11za50q"><span class="tag svelte-11za50q">KIOSK</span> <span class="phase svelte-11za50q"> </span></span> <!> <span class="spacer svelte-11za50q" aria-hidden="true"></span> <button type="button" class="icon-btn svelte-11za50q" title="Kiosk settings" aria-label="Kiosk settings">⚙</button> <button type="button" class="icon-btn stop svelte-11za50q" title="Stop kiosk" aria-label="Stop kiosk">×</button></div> <!></div>');function Sh(e,n){Ue(n,!1);const s=()=>dt(zo,"$kioskDwellFraction",x),a=()=>dt(Ks,"$kioskStatus",x),r=()=>dt(Cr,"$kioskPhaseLabel",x),i=()=>dt(ci,"$kioskNoteItems",x),l=()=>dt(di,"$kioskNoteIndex",x),m=()=>dt(Wr,"$kioskPaces",x),f=()=>dt(Ta,"$kioskNotesPos",x),z=()=>dt(pi,"$kioskPanelPinned",x),[x,V]=Dn(),O=c(),C=c(),P=c(),nt=c(),W=c(),Y=c(),U=c(),F=c(),X=c(),tt=c(),j=c(),Q=c(),vt=c(),et=10,w=2*Math.PI*et,$=12,K=16,M=440;let A=c(null),b=c(!1),k=0,N=0;function pt(yt){var bt,At,Et,Rt,Gt;if(!t(A)||yt.button!==0)return;const J=yt.target;if((bt=J==null?void 0:J.closest)!=null&&bt.call(J,"button")||!((At=J==null?void 0:J.closest)!=null&&At.call(J,".kiosk-bar"))||(Et=J==null?void 0:J.closest)!=null&&Et.call(J,".kiosk-note-body"))return;const D=t(A).getBoundingClientRect();o(b,!0),k=yt.clientX-D.left,N=yt.clientY-D.top;try{(Gt=(Rt=t(A)).setPointerCapture)==null||Gt.call(Rt,yt.pointerId)}catch{}yt.preventDefault()}function ht(yt){if(!t(b)||!t(A))return;const J=t(A).offsetWidth||M,D=t(A).offsetHeight||48,bt=Math.max(0,window.innerWidth-J-8),At=Math.max(0,window.innerHeight-D-8),Et=Math.min(bt,Math.max(8,yt.clientX-k)),Rt=Math.min(At,Math.max(8,yt.clientY-N));Ta.set({left:Et,top:Rt})}function it(yt){var J,D;if(!(!t(b)||!t(A))){o(b,!1);try{(D=(J=t(A)).releasePointerCapture)==null||D.call(J,yt.pointerId)}catch{}}}function ut(){Bs.set(!0)}function L(){Bs.set(!1)}_(()=>s(),()=>{o(O,Math.max(0,Math.min(1,s()||0)))}),_(()=>t(O),()=>{o(C,`${t(O)*w} ${w}`)}),_(()=>a(),()=>{o(P,a()==="paused")}),_(()=>(r(),t(P)),()=>{o(nt,r()||(t(P)?"paused":"kiosk"))}),_(()=>i(),()=>{o(W,i())}),_(()=>l(),()=>{o(Y,l())}),_(()=>t(W),()=>{o(U,t(W).length)}),_(()=>(m(),t(U)),()=>{o(F,m().useNotes&&t(U)>0)}),_(()=>(t(F),t(U),t(W),t(Y)),()=>{o(X,t(F)&&t(U)>0?t(W)[Math.min(t(Y),t(U)-1)]??"":"")}),_(()=>(t(F),t(Y),t(U)),()=>{o(tt,t(F)?li(Math.min(t(Y),Math.max(0,t(U)-1)),t(U)):"")}),_(()=>a(),()=>{o(j,a()!=="off")}),_(()=>f(),()=>{o(Q,f())}),_(()=>t(Q),()=>{o(vt,t(Q)?`left:${t(Q).left}px;top:${t(Q).top}px;bottom:auto;right:auto;`:`left:${$}px;bottom:${K}px;top:auto;right:auto;`)}),Cn(),yn();var mt=fn(),lt=Wt(mt);{var Tt=yt=>{var J=_h();let D;var bt=u(J),At=p(u(bt),2),Et=u(At),Rt=u(Et);I(Rt,"r",et);var Gt=p(Rt);I(Gt,"r",et),d(Et);var Te=p(Et,2),Kt=u(Te,!0);d(Te),d(At);var zt=p(At,2),Nt=p(u(zt),2),kt=u(Nt,!0);d(Nt),d(zt);var Dt=p(zt,2);{var Yt=fe=>{var Jt=wh(),ye=u(Jt,!0);d(Jt),B(()=>gt(ye,t(tt))),h(fe,Jt)};R(Dt,fe=>{t(tt)&&fe(Yt)})}var Ut=p(Dt,4),ce=p(Ut,2);d(bt);var Qt=p(bt,2);{var wt=fe=>{var Jt=xh(),ye=u(Jt,!0);d(Jt),B(()=>gt(ye,t(X))),h(fe,Jt)};R(Qt,fe=>{t(X)&&fe(wt)})}d(J),Le(J,fe=>o(A,fe),()=>t(A)),B(()=>{D=Pt(J,1,"kiosk-panel no-print gp-chrome svelte-11za50q",null,D,{paused:t(P),dragging:t(b),pinned:z(),"has-note":!!t(X)}),I(J,"aria-label",t(P)?"Kiosk paused":t(X)?`Kiosk running, note ${t(tt)}: ${t(X)}`:`Kiosk running (${t(nt)})`),le(J,t(vt)),I(At,"title",t(P)?"Resume kiosk (Alt+. U)":"Pause kiosk (Alt+. U)"),I(At,"aria-label",t(P)?"Resume":"Pause"),I(Gt,"stroke-dasharray",t(C)),gt(Kt,t(P)?"▶":"❚❚"),gt(kt,t(nt))}),G("click",At,nn(function(...fe){var Jt;(Jt=ui)==null||Jt.apply(this,fe)})),G("click",Ut,nn(()=>Dr())),G("click",ce,nn(function(...fe){var Jt;(Jt=ii)==null||Jt.apply(this,fe)})),G("pointerdown",J,pt),G("pointermove",J,ht),G("pointerup",J,it),G("pointercancel",J,it),G("mouseenter",J,ut),G("mouseleave",J,L),h(yt,J)};R(lt,yt=>{t(j)&&yt(Tt)})}h(e,mt),qe(),V()}function Eh(e,n){Ue(n,!1);const s=()=>dt(Ks,"$kioskStatus",r),a=()=>dt(Bs,"$kioskHoverFrozen",r),[r,i]=Dn(),l=c();let m=g(n,"pages",24,()=>[]),f=g(n,"currentSlide",8,""),z=g(n,"prefix",8,"./"),x=g(n,"wpm",8,150);const V=Vs();let O=null,C=0,P=0,nt=0,W="",Y="",U="";function F(){return document.querySelector(".content")}function X(){const $=F();if(!$)return!1;const K=qr($);return K.length?oi(K)&&Is(K)<.999:!1}function tt(){const $=fs(m());if(!$.length)return null;const K=$.findIndex(M=>M.path===f());return K<0?z()+$[0].path:K<$.length-1?z()+$[K+1].path:z()+$[0].path}function j(){const $=tt();if(!$)return;const K=m().find(A=>A.path===f()),M=(K==null?void 0:K.transition)??"slide";ps($,{viewTransitions:V,kind:M,direction:"forward"})}function Q($,K){C=performance.now(),P=$,nt=0,W=K,Cr.set(K),zo.set(0)}function vt(){if(Ee(Ks)!=="running"||Ee(Bs))return;f()!==Y&&(Y=f(),W="",U="",C=0,P=0,nt=0,zo.set(0));const $=Ee(Wr),K=Ee(Hs),M=Ee(ci),A=Ee(di),b=$.useNotes&&M.length>0&&A<M.length,k=Ee(jc),N=X(),pt=Uc({animBusy:N,mediaBusy:k,hasNextStep:!!(K!=null&&K.hasNext),hasNoteItem:b});if(pt==="wait"){if(k&&!N){W!=="media"&&(C=performance.now(),P=0,nt=0,W="media",Cr.set("video")),zo.set(Ee(qc));return}W!=="wait"&&Q(0,"wait"),zo.set(0);return}if(pt==="reveal"){const ut=$.stepMs;(W!=="reveal"||P!==ut)&&Q(ut,"reveal");const L=performance.now()-C;if(zo.set(br(L,P)),L<P)return;const mt=Ee(Hs);mt!=null&&mt.hasNext&&mt.next(),Q($.stepMs,"reveal");return}if(pt==="note"){const ut=M[A]??"",L=Wc(ut,$.stepMs,x()),mt=`${f()}:${A}:${ut.slice(0,40)}`,lt=`note ${li(A,M.length)}`;(W!==lt||U!==mt||P!==L)&&(U=mt,Q(L,lt));const Tt=performance.now()-C;if(zo.set(br(Tt,P)),Tt<P)return;if(Gc()){U="";return}Q($.pageMs,"page"),j();return}if(W==="media"){Q(0,"page"),j();return}const ht=$.pageMs;(W!=="page"||P!==ht)&&Q(ht,"page");const it=performance.now()-C;zo.set(br(it,P)),!(it<P)&&(Q(ht,"page"),j())}function et(){O!=null&&(clearInterval(O),O=null)}function w($){$==="running"?O==null&&(nt>0&&P>0?(C=performance.now()-nt,nt=0):C||(C=performance.now()),O=setInterval(vt,100),vt()):$==="paused"?(O!=null&&C&&(nt=Math.max(0,performance.now()-C)),et()):(et(),C=0,P=0,nt=0,W="",Y="",U="")}To(et),_(()=>(s(),a()),()=>{o(l,s()==="off"?"off":s()==="paused"||a()?"paused":"running")}),_(()=>t(l),()=>{w(t(l))}),_(()=>(s(),Z(f())),()=>{s()==="running"&&f()&&f()}),Cn(),yn(),qe(),i()}const Ga=2e3,Kr=6e3;function Th(e,n,s=Kr){if(e==null||!Number.isFinite(e)||e<=0||!Number.isFinite(n))return!1;const a=Number.isFinite(s)&&s>0?s:Kr;return n-e<a}const Ah=Ye(new Map);function Nh(e,n,s,a,r){const i=Math.max(0,Mo(n)),l=Math.max(0,Mo(a)),m=Math.max(0,Mo(r)),f=Mo(e.x),z=Mo(e.y),x=Math.max(0,Mo(e.width)),V=Math.max(0,Mo(e.height));let O=f-i,C=z-i,P=f+x+i,nt=z+V+i;O=zs(O,0,l),C=zs(C,0,m),P=zs(P,O,l),nt=zs(nt,C,m);const W=P-O,Y=nt-C,U=Math.min(Math.max(0,Mo(s)),W/2,Y/2);return{x:O,y:C,width:W,height:Y,radius:U}}function zs(e,n,s){return s<n||e<n?n:e>s?s:e}var Ph=ro('<defs class="svelte-1suzrea"><mask class="svelte-1suzrea"><rect x="0" y="0" fill="white" class="svelte-1suzrea"></rect><rect fill="black" class="svelte-1suzrea"></rect></mask></defs><rect class="spotlight-scrim svelte-1suzrea" x="0" y="0"></rect>',1),$h=ro('<svg aria-hidden="true"><!><rect class="spotlight-ring svelte-1suzrea"></rect></svg>');function Mh(e,n){Ue(n,!0);const s=()=>dt(kl,"$highlightTarget",r),a=()=>dt(Ah,"$blockAnchors",r),[r,i]=Dn();let l=g(n,"pad",3,14),m=g(n,"radius",3,16),f=g(n,"dim",3,.3),z=g(n,"pulse",3,!0),x=g(n,"canvasWidth",3,1920),V=g(n,"canvasHeight",3,1080);const O=He(()=>s()?a().get(s()):void 0),C=He(()=>t(O)?Nh(t(O),l(),m(),x(),V()):null),P=He(()=>`gp-spotlight-hole-${nt(s()??"")}`);function nt(X){return X.replace(/[^a-zA-Z0-9_-]/g,"-")||"x"}const W=He(()=>Math.min(1,Math.max(0,f())));var Y=fn(),U=Wt(Y);{var F=X=>{var tt=$h();let j;var Q=u(tt);{var vt=w=>{var $=Ph(),K=Wt($),M=u(K),A=u(M),b=p(A);d(M),d(K);var k=p(K);B(()=>{I(M,"id",t(P)),I(A,"width",x()),I(A,"height",V()),I(b,"x",t(C).x),I(b,"y",t(C).y),I(b,"width",t(C).width),I(b,"height",t(C).height),I(b,"rx",t(C).radius),I(b,"ry",t(C).radius),I(k,"width",x()),I(k,"height",V()),I(k,"mask",`url(#${t(P)??""})`),le(k,`opacity:${t(W)??""};`)}),h(w,$)};R(Q,w=>{t(W)>0&&w(vt)})}var et=p(Q);d(tt),B(()=>{j=Pt(tt,0,"spotlight-surface svelte-1suzrea",null,j,{pulse:z()}),I(tt,"viewBox",`0 0 ${x()??""} ${V()??""}`),le(tt,`width:${x()??""}px; height:${V()??""}px; pointer-events:none;`),I(et,"x",t(C).x),I(et,"y",t(C).y),I(et,"width",t(C).width),I(et,"height",t(C).height),I(et,"rx",t(C).radius),I(et,"ry",t(C).radius)}),h(X,tt)};R(U,X=>{t(C)&&X(F)})}h(e,Y),qe(),i()}const Ch=12;function Dh(e,n,s=Ch){if(typeof n!="number"||!Number.isFinite(n))return{kind:"none"};const a=Math.floor(n);if(a<1)return{kind:"none"};const r=typeof e=="number"&&Number.isFinite(e)?Math.floor(e):0,i=Math.max(0,Math.min(a,r)),l=i>=a;if(a>s)return{kind:"bar",fraction:i/a,index:i,total:a,spent:l};const m=[];for(let f=0;f<a;f++)m.push(f<i-1?"done":f===i-1?"current":"todo");return{kind:"dots",dots:m,index:i,total:a,spent:l}}const zh=1e3,tl="SPACE for next step",el="SPACE for next slide";function Lh(e,n){return e.kind==="none"||n.busy||!n.settled?"none":e.spent?n.hasNextSlide?"spent":"none":"next"}function Va(e){return e.kind==="none"?"":`Step ${e.index} of ${e.total}`}const Rh=["top","bottom","left","right","top-left","top-right","bottom-left","bottom-right"];function Ih(e){const n=Rh.includes(e)?e:"bottom",s=n.includes("left")?"start":n.includes("right")?"end":"center",a=n.startsWith("top")?"start":n.startsWith("bottom")?"end":"center";return{position:n,x:s,y:a,vertical:n==="left"||n==="right"}}function Ya(e,n,s,a="var(--stepdots-inset, 36px)"){const r=(l,m)=>l==="start"?a:l==="end"?`calc(${m}px - ${a})`:`${m/2}px`,i=l=>l==="start"?"0":l==="end"?"-100%":"-50%";return`left: ${r(e.x,n)}; top: ${r(e.y,s)}; transform: translate(${i(e.x)}, ${i(e.y)});`}var Oh=E("<span></span>"),Fh=E('<span><span class="fill svelte-1vx0378"></span></span>'),Hh=E("<div><!></div>"),Kh=E('<span class="cue-tip svelte-1vx0378" aria-hidden="true"> </span>'),Bh=E('<div role="progressbar" aria-valuemin="0"><!> <!></div>');function jh(e,n){Ue(n,!1);const s=()=>dt(Hs,"$activeSteps",a),[a,r]=Dn(),i=c(),l=c(),m=c(),f=c();let z=g(n,"canvasWidth",8,1920),x=g(n,"canvasHeight",8,1080),V=g(n,"position",8,"bottom"),O=g(n,"cue",8,!1),C=g(n,"cueDelayMs",8,zh),P=g(n,"cueNext",8,tl),nt=g(n,"cueSpent",8,el),W=g(n,"hasNextSlide",8,!0),Y=g(n,"style",8,""),U=g(n,"id",8,""),F=g(n,"class",8,""),X=c(!1),tt;function j(w,$,K,M){o(X,!1),clearTimeout(tt),w&&$!=="none"&&!M&&(tt=setTimeout(()=>o(X,!0),C()))}To(()=>clearTimeout(tt)),_(()=>s(),()=>{var w,$;o(i,Dh((w=s())==null?void 0:w.index,($=s())==null?void 0:$.total))}),_(()=>Z(V()),()=>{o(l,Ih(V()))}),_(()=>s(),()=>{var w;o(m,!!((w=s())!=null&&w.busy))}),_(()=>(Z(O()),t(i),t(m)),()=>{j(O(),t(i).kind,t(i).kind==="none"?0:t(i).index,t(m))}),_(()=>(Z(O()),t(i),t(m),t(X),Z(W())),()=>{o(f,O()?Lh(t(i),{busy:t(m),settled:t(X),hasNextSlide:W()}):"none")}),Cn(),yn();var Q=fn(),vt=Wt(Q);{var et=w=>{var $=Bh();let K;var M=u($);sd(M,()=>(t(i),st(()=>t(i).index)),k=>{var N=Hh();let pt;var ht=u(N);{var it=L=>{var mt=fn(),lt=Wt(mt);Mn(lt,1,()=>(t(i),st(()=>t(i).dots)),mo,(Tt,yt,J)=>{var D=Oh();let bt;B(()=>bt=Pt(D,1,`dot ${t(yt)??""}`,"svelte-1vx0378",bt,{next:t(f)==="next"&&J===t(i).index})),h(Tt,D)}),h(L,mt)},ut=L=>{var mt=Fh();let lt;var Tt=u(mt);d(mt),B(yt=>{lt=Pt(mt,1,"bar svelte-1vx0378",null,lt,{next:t(f)==="next"}),le(Tt,`${t(l),st(()=>t(l).vertical?"height":"width")??""}: ${yt??""}%`)},[()=>(t(i),st(()=>(t(i).fraction*100).toFixed(3)))]),h(L,mt)};R(ht,L=>{t(i),st(()=>t(i).kind==="dots")?L(it):L(ut,-1)})}d(N),B(()=>pt=Pt(N,1,"row svelte-1vx0378",null,pt,{spent:t(i).spent})),h(k,N)});var A=p(M,2);{var b=k=>{var N=Kh(),pt=u(N,!0);d(N),B(()=>gt(pt,t(f)==="next"?P():nt())),h(k,N)};R(A,k=>{t(f)!=="none"&&k(b)})}d($),B((k,N)=>{K=Pt($,1,`step-dots no-print ${F()??""}`,"svelte-1vx0378",K,{vertical:t(l).vertical,cueing:t(f)!=="none"}),I($,"data-position",(t(l),st(()=>t(l).position))),I($,"id",U()||void 0),I($,"aria-valuemax",(t(i),st(()=>t(i).total))),I($,"aria-valuenow",(t(i),st(()=>t(i).index))),I($,"aria-label",k),le($,`${N??""} ${Y()??""}`)},[()=>(Z(Va),t(i),st(()=>Va(t(i)))),()=>(Z(Ya),t(l),Z(z()),Z(x()),st(()=>Ya(t(l),z(),x())))]),h(w,$)};R(vt,w=>{t(i),st(()=>t(i).kind!=="none")&&w(et)})}h(e,Q),qe(),r()}var Uh=E('<link rel="icon"/>'),qh=E("<!> <!> <!> <!> <!> <!> <!>",1),Wh=E('<button type="button" class="annot-tool" title="Kiosk — auto-advance this deck (step, then page, then loop)"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="8" cy="8" r="6"></circle><path d="M6.5 5.5v5l4.5-2.5z" fill="currentColor" stroke="none"></path></svg></span> <span class="tool-label"><span class="tool-mn">K</span>IOSK</span></button>'),Gh=E('<button type="button" class="annot-tool" aria-keyshortcuts="b"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="1.5" y="2" width="13" height="12" rx="1.2"></rect><path d="M1.5 5h13M1.5 11h13"></path></svg></span> <span class="tool-label"> <span class="tool-mn">B</span>ARS</span></button>'),Vh=E('<button type="button" class="annot-tool" aria-keyshortcuts="i"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><path d="M3 2l3.3 11 1.8-4.6L13 6.6z"></path></svg></span> <span class="tool-label"> <span class="tool-mn">I</span>NTER</span></button>'),Yh=E('<button type="button" class="annot-anchor" title="PRESENT — open speaker console"><span class="tool-mn">P</span>RESENT</button>'),Xh=E('<span class="save-flash svelte-1ncjz8m"> </span>'),Qh=E('<span class="save-tip svelte-1ncjz8m" role="status"> </span>'),Jh=E('<span class="save-pop svelte-1ncjz8m"><!> <!></span>'),Zh=E('<span><button type="button" class="annot-act save-act" aria-label="Save layout to source" title="SAVE — write the moved blocks back to the source file">SAVE</button> <!></span>'),tm=E('<span class="annot-bar-sep" aria-hidden="true"></span> <button type="button">AD<span class="tool-mn">J</span>UST</button> <!>',1),em=E('<div class="print-sub" role="menu" aria-label="Print options"><button type="button" role="menuitem"><span class="print-sub-label">Current slide</span> <kbd class="print-sub-kbd">c</kbd></button> <button type="button" role="menuitem"><span class="print-sub-label">Current + notes</span> <kbd class="print-sub-kbd">C</kbd></button> <div class="print-menu-sep" role="separator"></div> <button type="button" role="menuitem"><span class="print-sub-label">Whole deck</span> <kbd class="print-sub-kbd">w</kbd></button> <button type="button" role="menuitem"><span class="print-sub-label">Whole + notes</span> <kbd class="print-sub-kbd">W</kbd></button> <div class="print-menu-sep" role="separator"></div> <button type="button" role="menuitem"><span class="print-sub-label">Thumbnail grid</span> <kbd class="print-sub-kbd">t</kbd></button> <button type="button" role="menuitem"><span class="print-sub-label">Notes grid</span> <kbd class="print-sub-kbd">T</kbd></button></div>'),nm=E('<div role="presentation"><button type="button" class="annot-tool" aria-haspopup="menu" title="Print current slide or whole deck (hover for options)"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 6V2h8v4"></path><path d="M4 11H2.5A1.5 1.5 0 0 1 1 9.5v-2A1.5 1.5 0 0 1 2.5 6h11A1.5 1.5 0 0 1 15 7.5v2A1.5 1.5 0 0 1 13.5 11H12"></path><rect x="4" y="11" width="8" height="4" rx="0.5"></rect></svg></span> <span class="tool-label">P<span class="tool-mn">R</span>INT</span> <span class="tool-trail" aria-hidden="true">▸</span></button> <!></div>'),om=E('<span class="tool-mn">C</span>APTURE',1),sm=E('<span class="capture-tip svelte-1ncjz8m" role="status"> </span>'),rm=E('<button type="button" class="annot-tool" title="Download this slide as a PNG at canvas resolution"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M2.5 5.5h2l1-1.5h5l1 1.5H13.5A1.5 1.5 0 0 1 15 7v5.5A1.5 1.5 0 0 1 13.5 14h-11A1.5 1.5 0 0 1 1 12.5V7A1.5 1.5 0 0 1 2.5 5.5z"></path><circle cx="8" cy="9.5" r="2.2"></circle></svg></span> <span class="tool-label"><!></span></button> <!>',1),am=E("<span><!></span>"),im=E('<button type="button" class="annot-tool" title="All slides as a grid (O)" aria-keyshortcuts="o"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor"><rect x="1.5" y="1.5" width="5.5" height="5.5" rx="0.8"></rect><rect x="9" y="1.5" width="5.5" height="5.5" rx="0.8"></rect><rect x="1.5" y="9" width="5.5" height="5.5" rx="0.8"></rect><rect x="9" y="9" width="5.5" height="5.5" rx="0.8"></rect></svg></span> <span class="tool-label"><span class="tool-mn">O</span>VERVIEW</span></button>'),lm=E(`<button type="button" class="annot-tool" title="View this slide's +page.svelte source"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 3.5 2 8l3.5 4.5"></path><path d="M10.5 3.5 14 8l-3.5 4.5"></path></svg></span> <span class="tool-label"><span class="tool-mn">S</span>OURCE</span></button>`),cm=E('<button type="button" class="annot-tool" title="Edit source in a separate window (unscaled)"><span class="tool-ico" aria-hidden="true"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 2.5 13.5 4.5 5.5 12.5H3.5v-2z"></path><path d="M10 4l2 2"></path></svg></span> <span class="tool-label"><span class="tool-mn">E</span>DIT</span> <span class="tool-trail tool-ext" aria-hidden="true" title="Opens in a new window"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 3.5H3.5v9h9v-3"></path><path d="M9.5 3.5h3v3"></path><path d="M12.5 3.5 7 9"></path></svg></span></button>'),Xa=E("<!> <!>",1),dm=E("<div><!> <!> <!></div>"),pm=E("<!> <!> <!> <!>",1),um=E('<div class="replay-shield svelte-1ncjz8m" aria-hidden="true"></div>'),fm=E("<!>   <div><div><div><!></div></div></div> <!> <!> <!> <!> <!>",1);function Ym(e,n){Ue(n,!1);const s=()=>dt(qs,"$deckSourceFallback",j),a=()=>dt(Vo,"$displayMode",j),r=()=>dt(Fs,"$displayFactor",j),i=()=>dt(ni,"$recordingLook",j),l=()=>dt(Ur,"$page",j),m=()=>dt(Oo,"$chromeArmed",j),f=()=>dt(nr,"$chromeBare",j),z=()=>dt(Xc,"$kioskActive",j),x=()=>dt(Go,"$replaying",j),V=()=>dt(Ls,"$consoleLive",j),O=()=>dt(Fo,"$moreMenuOpen",j),C=()=>dt(Ki,"$canAdjust",j),P=()=>dt(Os,"$adjustMode",j),nt=()=>dt(ed,"$canKiosk",j),W=()=>dt(Gi,"$pageSourceCanView",j),Y=()=>dt(Vi,"$pageSourceCanEdit",j),U=()=>dt(Ys,"$canAnnotate",j),F=()=>dt(Zo,"$canSave",j),X=()=>dt(Zf,"$pageSourceHasOwner",j),tt=()=>dt(ea,"$livePointer",j),[j,Q]=Dn(),vt=c(),et=c(),w=c(),$=c(),K=c(),M=c(),A=c(),b=c(),k=c(),N=c(),pt=c(),ht=c(),it=c(),ut=c(),L=c(),mt=c(),lt=c(),Tt=c(),yt=c(),J=c(),D=c(),bt=c(),At=c(),Et=c(),Rt=c(),Gt=c(),Te=c(),Kt=c(),zt=c(),Nt=c(),kt=c(),Dt=c(),Yt=c(),Ut=c();let ce=c(!1),Qt=c(!1),wt=g(n,"pages",24,()=>[]),fe=g(n,"title",8,void 0),Jt=g(n,"description",8,gl),ye=g(n,"image",8,void 0),Re=g(n,"imageAlt",8,void 0),de=g(n,"width",8,1920),ae=g(n,"height",8,1080),Xe=g(n,"baseFontSize",8,"1.5em"),tn=g(n,"deckClass",8,""),on=g(n,"fill",8,!1),kn=g(n,"contentBackground",8,void 0),ao=g(n,"contentFont",8,void 0),io=g(n,"article",8,!1),vn=g(n,"articleText",8,"View as article"),Ie=g(n,"articleHref",8,"../text.html"),wn=g(n,"fadeChrome",8,!1),zn=g(n,"controlBar",8,!0),Yn=g(n,"toolBar",8,!0),jn=g(n,"hideChrome",8,!1),Ln=g(n,"preloadNeighbours",8,!0),Un=g(n,"adjust",8,!1),hn=g(n,"annotate",8,!1),Xn=g(n,"inkStaleAfter",8,24),Ao=g(n,"inkColors",24,()=>[null,"#E5484D","#3FA9F5","#4BD07A","#FFFFFF"]),No=g(n,"levelHighlight",8,!0),S=g(n,"freehand",24,()=>({})),ot=g(n,"capture",8,!1),$t=g(n,"captureScale",8,1),jt=g(n,"kiosk",8,!1),oe=g(n,"kioskStepMs",8,ai),We=g(n,"kioskPageMs",8,ri),sn=g(n,"kioskWpm",8,Yc),rn=g(n,"onboardHint",8,!0),go=g(n,"stepDots",8,!0),Po=g(n,"stepDotsAt",8,"bottom"),qn=g(n,"stepCue",8,!0),T=g(n,"stepCueNext",8,tl),q=g(n,"stepCueSpent",8,el),rt=g(n,"onboardDelayMs",8,qi),It=g(n,"pointer",8,!1),Zt=g(n,"pointerShape",8,"arrow"),ke=g(n,"pointerSize",8,Zr),pe=c(),Lt=c(),se=c(),Vt=c(a()),Mt=Ar(r()),Bt=c(!1),Ot=c(!document.prerendering),Me=c(!1),Ae=c(!1),he=c({left:0,top:0,width:1,height:1});const ee=v=>Math.max(0,Math.min(1,v));function xe(){te()}let Ce=c(!1);const Oe=Vs();let re=c("CAPTURE"),Ne=c(""),An=c(!1);async function St(){if(!(t(An)||!t(Lt))){o(An,!0),o(re,"…"),o(Ne,"");try{const{blob:v,blockers:H}=await hh(t(Lt),de(),ae(),$t());H.length>0?(o(Ne,zc(H)),o(re,"NOT ALLOWED")):v?(gh(v,Lc(l().url.pathname)),o(re,"SAVED")):(o(Ne,"The browser refused to draw this slide"),o(re,"FAILED"))}catch{o(Ne,"The browser refused to draw this slide"),o(re,"FAILED")}finally{o(An,!1),setTimeout(()=>{o(re,"CAPTURE"),o(Ne,"")},2600)}}}let ct=c(!1);Fo.subscribe(v=>{v||o(ct,!1)});async function De(v){o(ct,!1),o(Ce,v),await ds(),window.print()}function me(v){o(ct,!1),window.location.assign(`${ls}/_handout/${t(Kt)}.html${v}`)}function Ct(v){if(!t(ct)||v.ctrlKey||v.metaKey||v.altKey)return!1;if(v.key==="Escape")return v.preventDefault(),o(ct,!1),!0;const at={c:()=>De(!1),C:()=>De(!0),w:()=>me(""),W:()=>me("?notes"),t:()=>me("?grid"),T:()=>me("?grid&notes")}[v.key];return at?(v.preventDefault(),at(),eo(),!0):!1}let ge=c();function _e(){var at;const v=(at=t(ge))==null?void 0:at.querySelector(".annot-tools");return v?[...v.querySelectorAll(":scope > button, :scope > .save-btn > button, :scope > .mode button, :scope > .annot-menu > .annot-hamburger")].filter(xt=>xt instanceof HTMLElement&&!xt.disabled):[]}function en(){var H;const v=(H=t(ge))==null?void 0:H.querySelector(".annot-drop");return v?[...v.querySelectorAll("button.annot-tool")].filter(at=>at instanceof HTMLElement&&!at.disabled):[]}function mn(){var H;const v=(H=t(ge))==null?void 0:H.querySelector(".print-sub");return v?[...v.querySelectorAll("button")].filter(at=>!at.disabled):[]}function Be(v){var H;v&&(v.focus(),(H=v.scrollIntoView)==null||H.call(v,{block:"nearest"}))}function Rn(v){var be,Qe;const H=tv(v);if(!H||Jo(v.target))return!1;const at=(be=t(ge))==null?void 0:be.querySelector(".annot-tools");if(!at||at.querySelector(".mode.expanded"))return!1;const xt=_e(),Ft=en(),ie=mn(),_t=document.activeElement,Pe=at.querySelector(".annot-hamburger"),$e=at.querySelector(".annot-drop"),we=at.querySelector(".print-sub"),Jn=at.querySelector(".print-flyout > .annot-tool"),ne=ev({armed:m(),moreOpen:O(),printOpen:t(ct),focusInPrint:!!(we&&_t&&we.contains(_t)),focusInMoreDrop:!!($e&&_t&&$e.contains(_t)),focusOnHamburger:!!(Pe&&_t&&(_t===Pe||Pe.contains(_t))),focusOnBar:!!(_t&&at.contains(_t)&&!($e&&$e.contains(_t)))});if(ne==="none")return!1;if(ne==="bar"){if(H==="down"&&Pe&&_t&&(_t===Pe||Pe.contains(_t)))return v.preventDefault(),Aa(),Hn(),queueMicrotask(()=>Be(en()[0]??Pe)),!0;if(H!=="left"&&H!=="right")return!1;const Ge=os(xt,_t),ze=ss("bar",H,Ge,xt.length);return ze==null||!xt.length?!1:(v.preventDefault(),Be(xt[ze]),Hn(),!0)}if(ne==="more"){const Ge=!!(Pe&&_t&&(_t===Pe||Pe.contains(_t))),ze=!!($e&&_t&&$e.contains(_t));if((H==="left"||H==="right")&&!Ge&&!ze){const Zn=os(xt,_t),Se=ss("bar",H,Zn,xt.length);return Se==null||!xt.length?!1:(v.preventDefault(),Be(xt[Se]),Hn(),!0)}if(H==="right"&&_t&&((Qe=_t.closest)!=null&&Qe.call(_t,".print-flyout")))return v.preventDefault(),o(ct,!0),Hn(),queueMicrotask(()=>Be(mn()[0]??Jn)),!0;if(H==="left"){if(ze)return v.preventDefault(),Be(Pe),Hn(),!0;if(Ge){const Zn=os(xt,Pe),Se=ss("bar","left",Zn,xt.length);return Se==null?!1:(v.preventDefault(),Be(xt[Se]),Hn(),!0)}}if(H==="right"&&Ge){const Zn=os(xt,Pe),Se=ss("bar","right",Zn,xt.length);return Se==null?!1:(v.preventDefault(),Be(xt[Se]),Hn(),!0)}let En=os(Ft,_t);Ge&&(En=-1);const Fn=ss("more",H,En,Ft.length);return Fn==null?!1:(v.preventDefault(),Fn<0?Be(Pe):Be(Ft[Fn]),Hn(),!0)}if(ne==="print"){const Ge=os(ie,_t),ze=ss("print",H,Ge,ie.length);return ze==null?!1:(v.preventDefault(),ze<0?(o(ct,!1),Be(Jn)):Be(ie[ze]),Hn(),!0)}return!1}function In(v){var Ft;if(mu(v,C()&&P())){v.preventDefault(),Wn();return}if(Ct(v)||Rn(v))return;const H=gu(v,O(),m());if(H!=="ignore"){switch(v.preventDefault(),O()||Aa(),H){case"overview":wo.set(!0),eo();break;case"kiosk":z()?pi.update(ie=>!ie):nt()&&Dr(),eo();break;case"bars":eo(),Ms();return;case"pointer":Cs(),eo();break;case"capture":t(Te)&&St(),eo();break;case"print":o(ct,!0),Hn();break;case"source":W()&&Oa(),eo();break;case"edit":Y()&&wr(),eo();break}Hn();return}function at(){var ie,_t,Pe;if(eo(),o(ct,!1),document.activeElement instanceof HTMLElement){const $e=document.activeElement;((ie=$e.closest)!=null&&ie.call($e,".overlay")||(_t=$e.closest)!=null&&_t.call($e,".annot-tools")||(Pe=$e.closest)!=null&&Pe.call($e,".ctrl-bar"))&&$e.blur()}xi()}const xt=bu(v,m());if(xt!=="ignore")switch(v.preventDefault(),xt){case"arm":Zs(),queueMicrotask(()=>Be(_e()[0]));return;case"disarm":at();return;case"annotate":U()&&is.update(ie=>!ie),at();return;case"adjust":C()&&Os.update(ie=>!ie),at();return;case"display":np();return;case"present":Qn(),Hn();return;case"more":{const ie=_i(),_t=(Ft=t(ge))==null?void 0:Ft.querySelector(".annot-hamburger");ie?_t==null||_t.focus():_t==null||_t.blur(),Hn();return}case"toc":ep();return;case"kiosk-pause":z()&&ui(),Hn();return}}let an=c("SAVE"),gn=c(!1),ve=c(0),ln=c([]),lo;const bo={"not-found":"The tag isn't in the source in its literal form (geometry written as expressions, or a reformatted tag), so there is nothing to rewrite — Copy it and paste by hand.",ambiguous:"A tag whose name AND geometry match another (a code sample of itself, say) is ambiguous, so it is never guessed at — Copy that one by hand."};function cn(v,H){o(an,v),clearTimeout(lo),lo=setTimeout(()=>{o(an,"SAVE"),o(gn,!1),o(ve,0),o(ln,[])},H)}async function Wn(){if(!F()){o(gn,!0),cn("NOT ALLOWED",2600);return}const v=await _v();v.ok?v.patched===0&&v.unmatched.length===0?cn("NONE",1600):v.unmatched.length?(o(gn,!0),o(ve,v.unmatched.length),o(ln,[...new Set(v.unmatched.map(H=>H.reason))]),cn(`${v.patched} OF ${v.patched+v.unmatched.length}`,2600),console.warn("[adjust save] not written — Copy these by hand:",v.unmatched)):(cn("SAVED",1600),setTimeout(()=>location.reload(),550)):(cn("ERROR",1600),console.error("[adjust save] failed:",v.error))}function Qn(){Hl(window.location.href,Nr(window.location.pathname))}function te(){if(!t(pe)||!t(Lt)||t(Vt)!=="SCALED"||t(b)){o(Ae,!1);return}const v=t(pe).clientWidth,H=t(pe).clientHeight,at=t(Lt).offsetWidth,xt=t(Lt).offsetHeight;o(Ae,at>v+1||xt>H+1),t(Ae)&&o(he,{left:ee(t(pe).scrollLeft/at),top:ee(t(pe).scrollTop/xt),width:ee(v/at),height:ee(H/xt)})}function Ht(){!t(pe)||!t(Lt)||(Kn(pe,t(pe).scrollLeft=Math.max(0,(t(Lt).offsetWidth-t(pe).clientWidth)/2)),Kn(pe,t(pe).scrollTop=Math.max(0,(t(Lt).offsetHeight-t(pe).clientHeight)/2)))}function ue(v=!1){if(!t(Lt)||t(k)||t(N))return;if(t(Vt)==="SCALED"){Kn(Lt,t(Lt).style.width=`${Math.round(de()*Mt)}px`),Kn(Lt,t(Lt).style.height=`${Math.round(ae()*Mt)}px`),Kn(se,t(se).style.transform=`scale(${Mt})`),Kn(se,t(se).style.transformOrigin="top left"),t(se).style.setProperty("--view-scale",String(Mt)),v&&Ht(),xe();return}window.innerWidth/window.innerHeight>t(et)?(Kn(Lt,t(Lt).style.height="calc(100vh - 10px)"),Kn(Lt,t(Lt).style.width=`${Math.round(t(Lt).clientHeight*t(et))}px`)):(Kn(Lt,t(Lt).style.width="calc(100vw - 10px)"),Kn(Lt,t(Lt).style.height=`${Math.round(t(Lt).clientWidth/t(et))}px`));const at=on()?de():de()+50,xt=ae(),Ft=Math.min(t(Lt).clientWidth/at,t(Lt).clientHeight/xt);Kn(se,t(se).style.transform=`scale(${Ft})`),Kn(se,t(se).style.transformOrigin="center center"),t(se).style.setProperty("--view-scale",String(Ft)),xe()}function Fe(v){document.body.classList.add("rendering"),ue(v),document.body.classList.remove("rendering")}function xn(v){const H=document.querySelector(".content");if(!H)return;const at=qr(H);at.length&&_c(at,v)}function Nn(v){var H;switch(v.kind){case"goto":{const at=gc(v.href,t(ut));if(at===l().url.pathname.replace(/\/+$/,"")+l().url.search){mr(),window.location.reload();return}const xt=v.back?"back":"forward",Ft=wt().find(_t=>_t.path===t(w)),ie=(v.back?Ft==null?void 0:Ft.transitionBack:Ft==null?void 0:Ft.transition)??"slide";ps(at,{viewTransitions:Oe,kind:ie,direction:xt,arriveAtEnd:v.end===!0});return}case"step":{const at=Ee(Hs);v.back?(H=at==null?void 0:at.prev)==null||H.call(at):at==null||at.next();return}case"continue":window.dispatchEvent(new CustomEvent("gp:slide-continue"));return;case"anim":xn(v);return;case"trigger":fa(v.name);return;case"highlight":ur(v.name);return}}function co(v){var xt;const H=document.getElementById("gp-preload");if((H==null?void 0:H.textContent)===v||(H==null||H.remove(),!v||!((xt=HTMLScriptElement.supports)!=null&&xt.call(HTMLScriptElement,"speculationrules"))))return;const at=document.createElement("script");at.type="speculationrules",at.id="gp-preload",at.textContent=v,document.head.appendChild(at)}so(()=>{if(t(Ot))return On();let v;const H=()=>{o(Ot,!0),v=On()};return document.addEventListener("prerenderingchange",H,{once:!0}),()=>{document.removeEventListener("prerenderingchange",H),v==null||v()}});function On(){const v=Vo.subscribe(ne=>{t(Me)||(o(Vt,ne),t(Bt)&&Fe(!0))}),H=Fs.subscribe(ne=>{Mt=Ar(ne),t(Bt)&&Fe(!0)}),at=()=>ue(!1);window.addEventListener("resize",at),Vc(new URL(window.location.href));const xt=()=>{o(Ce,!1)};window.addEventListener("afterprint",xt);const Ft=window.self===window.top?$l(t(ut),ne=>{if(!ne||ne===t(w)||Ee(Go))return;const be=t(k)?`./${ne}?present`:`./${ne}`,Qe=wt().findIndex(Fn=>Fn.path===ne),Ge=Qe>=0&&Qe<(t($)??0)?"back":"forward",ze=wt().find(Fn=>Fn.path===t(w)),En=(Ge==="back"?ze==null?void 0:ze.transitionBack:ze==null?void 0:ze.transition)??"slide";ps(be,{viewTransitions:Oe,kind:En,direction:Ge})},t(mt)):()=>{},ie=window.self===window.top?Ml(t(ut),ne=>{Ee(Go)||(xn(ne),hc({kind:"anim",...ne}))}):()=>{},_t=window.self===window.top?Cl(t(ut),()=>{Ee(Go)||window.dispatchEvent(new CustomEvent("gp:continue"))}):()=>{},Pe=window.self===window.top?Dl(t(ut),ne=>{Ee(Go)||ur(ne)}):()=>{},$e=window.self===window.top?zl(t(ut),ne=>{Ee(Go)||fa(ne)}):()=>{};let we=()=>{};if(t(k)){ha(t(ut));const ne=window.setInterval(()=>ha(t(ut)),Ga);we=()=>window.clearInterval(ne)}else if(window.self===window.top){let ne=Ll(t(ut));const be=()=>Ls.set(Th(ne,Date.now(),Kr));be();const Qe=Rl(t(ut),ze=>{ne=ze,be()}),Ge=window.setInterval(be,Ga);we=()=>{Qe(),window.clearInterval(Ge),Ls.set(!1)}}let Jn=()=>{};if(!t(k)&&window.self===window.top){wa(t(ut));const ne=uc(t(ut)),be=()=>vc({type:"here",deck:t(ut),here:{href:l().url.pathname+l().url.search,path:l().url.pathname.replace(/\/+$/,""),width:de(),height:ae(),title:t(kt)}}),Qe=fc(t(ut),En=>{En.type==="hello"?be():En.type==="cmd"&&Ee(mc)!=="idle"&&Nn(En.action)}),Ge=En=>{Ee(Go)&&(En.stopImmediatePropagation(),En.preventDefault())};window.addEventListener("keydown",Ge,!0),window.addEventListener("pagehide",mr);let ze=requestAnimationFrame(()=>{ze=requestAnimationFrame(be)});Jn=()=>{cancelAnimationFrame(ze),Qe(),ne(),wa(null),window.removeEventListener("keydown",Ge,!0),window.removeEventListener("pagehide",mr)}}return o(Bt,!0),Fe(!0),()=>{v(),H(),Ft(),ie(),_t(),Pe(),$e(),we(),Jn(),ur(null),window.removeEventListener("resize",at),window.removeEventListener("afterprint",xt)}}_(()=>(s(),t(Qt),t(ce),Ir),()=>{const v=!!s();v&&!t(Qt)&&o(ce,!0),v||o(ce,!1),v&&t(Qt)&&!t(ce)&&Ir(),o(Qt,v)}),_(()=>(t(Bt),i(),t(Me),Vo),()=>{t(Bt)&&i()!==t(Me)&&(o(Me,i()),o(Vt,t(Me)?"FITTED":Ee(Vo)),Fe(!0))}),_(()=>t(Vt),()=>{o(vt,t(Vt)==="FITTED")}),_(()=>(Z(de()),Z(ae())),()=>{o(et,de()/ae())}),_(()=>l(),()=>{o(w,l().url.pathname.replace(/\/+$/,"").split("/").pop())}),_(()=>(Z(wt()),t(w)),()=>{o($,wt().findIndex(v=>v.path===t(w)))}),_(()=>(l(),ls),()=>{o(Kt,(()=>{var at;const v=l().url.pathname.replace(ls,"").split("/").filter(Boolean);return v.length===0?"":((at=v[v.length-1])!=null&&at.endsWith(".html")?v.slice(0,-1):v).join("-")})())}),_(()=>(t(Ot),l(),t(Kt),Z(wt())),()=>{t(Ot)&&rp(l().url.searchParams,t(Kt),sessionStorage,wt())}),_(()=>(t(Ot),l(),t(Kt),Z(wt())),()=>{o(K,t(Ot)?sp(l().url.searchParams,t(Kt),sessionStorage,wt()):[])}),_(()=>(Z(wt()),t(w),t(K)),()=>{o(M,ap(Ja(wt(),t(w)??"","./"),t(K)))}),_(()=>(Z(wt()),t(w)),()=>{var v;o(A,(v=wt().find(H=>H.path===t(w)))==null?void 0:v.favicon)}),_(()=>l(),()=>{o(b,l().url.searchParams.has("clean")||l().url.searchParams.has("shot"))}),_(()=>l(),()=>{o(k,l().url.searchParams.has("present"))}),_(()=>t(k),()=>{Il.set(t(k))}),_(()=>l(),()=>{o(N,l().url.searchParams.has("shot"))}),_(()=>l(),()=>{o(pt,l().url.searchParams.has("onboard"))}),_(()=>(l(),t(Ce)),()=>{o(ht,l().url.searchParams.has("notes")||t(Ce))}),_(()=>t(ht),()=>{wl.set(t(ht))}),_(()=>(Z(de()),Z(ae()),t(ht)),()=>{o(it,Pc({width:de(),height:ae()},t(ht)))}),_(()=>t(it),()=>{$c(Mc(t(it)))}),_(()=>l(),()=>{o(ut,Nr(l().url.pathname))}),_(()=>Er,()=>{o(L,window.self===window.top)}),_(()=>t(k),()=>{o(mt,Ol(t(k)))}),_(()=>(t(L),t(Ot),t(w),t(ut),t(mt)),()=>{t(L)&&t(Ot)&&t(w)&&Fl(t(ut),t(w),t(mt))}),_(()=>(t(L),t(Ot),t(b),t(k),Z(wt()),t(w),Lo),()=>{t(L)&&t(Ot)&&!t(b)&&!t(k)&&Bf(wt(),t(w)??"")&&Lo()}),_(()=>(t(ge),Lo),()=>{t(ge)&&(t(ge).addEventListener("pointerover",Lo),t(ge).addEventListener("focusin",Lo))}),_(()=>(m(),t(k),Lo),()=>{m()&&!t(k)&&Lo()}),_(()=>(Z(wt()),t(w)),()=>{o(lt,Kf(wt(),t(w)??""))}),_(()=>(t(L),t(Ot),f(),z(),x(),i()),()=>{o(Tt,!t(L)||!t(Ot)||f()||z()||x()||i())}),_(()=>(Z(wt()),t(w)),()=>{var v;o(yt,((v=wt().find(H=>H.path===t(w)))==null?void 0:v.adjust)===!0)}),_(()=>(Z(wt()),t(w)),()=>{var v;o(J,(v=wt().find(H=>H.path===t(w)))==null?void 0:v.stepDots)}),_(()=>(Z(go()),t(b),t(J)),()=>{o(D,go()&&!t(b)&&t(J)!==!1)}),_(()=>(t(J),Z(Po())),()=>{o(bt,typeof t(J)=="string"?t(J):Po())}),_(()=>(Z(qn()),Z(wt()),t(w),t(L),z(),V(),i(),x()),()=>{var v;o(At,qn()&&((v=wt().find(H=>H.path===t(w)))==null?void 0:v.stepCue)!==!1&&t(L)&&!z()&&!V()&&!i()&&!x())}),_(()=>(Z(wt()),t(w)),()=>{o(Et,ld(wt(),t(w)??""))}),_(()=>t(Et),()=>{o(Rt,!t(Et).present||t(Et).position<t(Et).total)}),_(()=>(t(yt),Z(Un())),()=>{o(Gt,t(yt)||Un())}),_(()=>t(Gt),()=>{Vu(t(Gt))}),_(()=>l(),()=>{Yu(l().url)}),_(()=>Z(hn()),()=>{ql(hn())}),_(()=>l(),()=>{Wl(l().url)}),_(()=>Z(jn()),()=>{vu(jn())}),_(()=>l(),()=>{hu(l().url)}),_(()=>Z(It()),()=>{yf(It())}),_(()=>l(),()=>{kf(l().url)}),_(()=>Z(Xn()),()=>{Gl.set(Math.max(0,Number(Xn())||24)*60*60*1e3)}),_(()=>l(),()=>{Vl(l().url.pathname.replace(/\/+$/,""))}),_(()=>l(),()=>{{const v=Cc(l().url.searchParams);v!==null&&localStorage.setItem("canCapture",String(v))}}),_(()=>Z(ot()),()=>{o(Te,Dc(!1,Js(localStorage.getItem("canCapture")),ot()))}),_(()=>(Z(oe()),Z(We()),l(),Z(jt())),()=>{Qc.set({stepMs:oe(),pageMs:We(),useNotes:!1}),Jc(l().url),Zc(td(!1,jt()))}),_(()=>(t(ve),t(ln)),()=>{o(zt,t(ve)?`${t(ve)===1?"1 tag":`${t(ve)} tags`} not written — see the console. `+(t(ln).length?t(ln):["not-found"]).map(v=>bo[v]).join(" "):"Save not allowed in this setup.")}),_(()=>(Z(wt()),t(w)),()=>{var v;o(Nt,(v=wt().find(H=>H.path===t(w)))==null?void 0:v.title)}),_(()=>(t(Nt),Z(fe())),()=>{o(kt,bl(t(Nt),fe()))}),_(()=>(Z(wt()),t(w),Z(Jt())),()=>{var v;o(Dt,((v=wt().find(H=>H.path===t(w)))==null?void 0:v.description)??Jt())}),_(()=>(Z(wt()),t(w),Z(ye())),()=>{var v;o(Yt,((v=wt().find(H=>H.path===t(w)))==null?void 0:v.image)??ye())}),_(()=>(Z(wt()),t(w),Z(Re())),()=>{var v;o(Ut,((v=wt().find(H=>H.path===t(w)))==null?void 0:v.imageAlt)??Re())}),_(()=>(t(Ot),Z(Ln()),t(L),t(N),t(M),t(k)),()=>{t(Ot)&&co(Ln()&&t(L)&&!Oe&&!t(N)?hv(vv(t(M),t(k))):"")}),Cn(),yn();var $o=fm();fl("1ncjz8m",v=>{var H=fn(),at=Wt(H);{var xt=Ft=>{var ie=Uh();B(()=>I(ie,"href",t(A))),h(Ft,ie)};R(at,Ft=>{t(A)&&Ft(xt)})}h(v,H)}),G("keydown",Ss,In);var Ho=Wt($o);ml(Ho,{get title(){return t(kt)},get description(){return t(Dt)},get image(){return t(Yt)},get imageAlt(){return t(Ut)},type:"website"});var _n=p(Ho,2);let Gn;var Sn=u(_n);let Ko;var Pn=u(Sn);let vs;var sr=u(Pn);{var rr=v=>{var H=qh(),at=Wt(H);jr(at,n,"default",{},null);var xt=p(at,2);Mh(xt,{get canvasWidth(){return de()},get canvasHeight(){return ae()}});var Ft=p(xt,2);{var ie=be=>{jh(be,{get canvasWidth(){return de()},get canvasHeight(){return ae()},get position(){return t(bt)},get cue(){return t(At)},get cueNext(){return T()},get cueSpent(){return q()},get hasNextSlide(){return t(Rt)}})};R(Ft,be=>{t(D)&&be(ie)})}var _t=p(Ft,2);dh(_t,{get canvasWidth(){return de()},get canvasHeight(){return ae()},get inkColors(){return Ao()},get levelHighlight(){return No()},get freehand(){return S()}});var Pe=p(_t,2);{var $e=be=>{{let Qe=un(()=>t(w)??"");$a(be,{get pages(){return wt()},get width(){return de()},get height(){return ae()},get currentPath(){return t(Qe)},get deck(){return t(Kt)}})}};R(Pe,be=>{!t(b)&&!t(k)&&be($e)})}var we=p(Pe,2);{var Jn=be=>{fv(be,{get code(){return s(),st(()=>s().code)},language:"html",get title(){return s(),st(()=>s().path)},readOnly:!0,edit:!0,class:"gp-chrome no-print",get expanded(){return t(ce)},set expanded(Qe){o(ce,Qe)},$$events:{edit:()=>wr()},$$legacy:!0})};R(we,be=>{s()&&!X()&&be(Jn)})}var ne=p(we,2);dd(ne,{}),h(v,H)};R(sr,v=>{t(Bt)&&v(rr)})}d(Pn),Le(Pn,v=>o(se,v),()=>t(se)),d(Sn),Le(Sn,v=>o(Lt,v),()=>t(Lt)),d(_n),Le(_n,v=>o(pe,v),()=>t(pe));var As=p(_n,2);{var Bo=v=>{var H=dm();let at;var xt=u(H);{var Ft=we=>{Nu(we,{get width(){return de()},get height(){return ae()},kioskItem:Se=>{var Xt=fn(),dn=Wt(Xt);{var $n=bn=>{var Vn=Wh();G("click",Vn,()=>{Dr(),document.activeElement instanceof HTMLElement&&document.activeElement.blur()}),h(bn,Vn)};R(dn,bn=>{nt()&&bn($n)})}h(Se,Xt)},barsItem:Se=>{var Xt=Gh(),dn=p(u(Xt),2),$n=u(dn);Ke(2),d(dn),d(Xt),B(()=>{I(Xt,"title",f()?"Show the tool bar and the control bar again (B)":"Hide the tool bar and the control bar — Alt+. brings them back (B)"),gt($n,`${f()?"SHOW":"HIDE"} `)}),G("click",Xt,function(...bn){Ms==null||Ms.apply(this,bn)}),h(Se,Xt)},pointerItem:Se=>{var Xt=Vh(),dn=p(u(Xt),2),$n=u(dn);Ke(2),d(dn),d(Xt),B(()=>{I(Xt,"title",tt()?"Stop drawing the pointer — show the real cursor again (I)":"Draw a pointer where the mouse is, for screen recorders that leave the cursor out (I)"),I(Xt,"aria-pressed",tt()),gt($n,`${tt()?"HIDE":"DRAW"} PO`)}),G("click",Xt,function(...bn){Cs==null||Cs.apply(this,bn)}),h(Se,Xt)},presentBtn:Se=>{var Xt=Yh();G("click",Xt,Qn),h(Se,Xt)},adjustGroup:Se=>{var Xt=fn(),dn=Wt(Xt);{var $n=bn=>{var Vn=tm(),Ve=p(Wt(Vn),2);let pn;var jo=p(Ve,2);{var ts=yo=>{var _o=Zh();let Uo;var es=u(_o),to=p(es,2);{var ko=ms=>{var lr=Jh(),ra=u(lr);{var nl=qo=>{var Wo=Xh(),cr=u(Wo,!0);d(Wo),B(()=>gt(cr,t(an))),h(qo,Wo)};R(ra,qo=>{t(an)!=="SAVE"&&qo(nl)})}var ol=p(ra,2);{var sl=qo=>{var Wo=Qh(),cr=u(Wo,!0);d(Wo),B(()=>gt(cr,t(zt))),h(qo,Wo)};R(ol,qo=>{t(gn)&&qo(sl)})}d(lr),h(ms,lr)};R(to,ms=>{(t(an)!=="SAVE"||t(gn))&&ms(ko)})}d(_o),B(()=>Uo=Pt(_o,1,"save-btn svelte-1ncjz8m",null,Uo,{refused:t(gn)})),G("click",es,Wn),h(yo,_o)};R(jo,yo=>{P()&&yo(ts)})}B(()=>{pn=Pt(Ve,1,"annot-tab adjust-tab",null,pn,{on:P()}),I(Ve,"aria-pressed",P()),I(Ve,"aria-label",P()?"ADJUST on":"ADJUST off"),I(Ve,"title",P()?"ADJUST — placing blocks by hand (click to stop)":"ADJUST — drag and resize blocks at exact pixels")}),G("click",Ve,()=>Os.update(yo=>!yo)),h(bn,Vn)};R(dn,bn=>{C()&&bn($n)})}h(Se,Xt)},printBtn:Se=>{var Xt=nm();let dn;var $n=u(Xt),bn=p($n,2);{var Vn=Ve=>{var pn=em(),jo=u(pn),ts=p(jo,2),yo=p(ts,4),_o=p(yo,2),Uo=p(_o,4),es=p(Uo,2);d(pn),G("click",jo,()=>De(!1)),G("click",ts,()=>De(!0)),G("click",yo,()=>me("")),G("click",_o,()=>me("?notes")),G("click",Uo,()=>me("?grid")),G("click",es,()=>me("?grid&notes")),h(Ve,pn)};R(bn,Ve=>{t(ct)&&Ve(Vn)})}d(Xt),B(()=>{dn=Pt(Xt,1,"print-flyout",null,dn,{open:t(ct)}),I($n,"aria-expanded",t(ct))}),G("click",$n,nn(()=>o(ct,!t(ct)))),G("mouseenter",Xt,()=>o(ct,!0)),G("mouseleave",Xt,()=>o(ct,!1)),h(Se,Xt)},captureItem:Se=>{var Xt=am();let dn;var $n=u(Xt);{var bn=Vn=>{var Ve=rm(),pn=Wt(Ve),jo=p(u(pn),2),ts=u(jo);{var yo=to=>{var ko=om();Ke(),h(to,ko)},_o=to=>{var ko=no();B(()=>gt(ko,t(re))),h(to,ko)};R(ts,to=>{t(re)==="CAPTURE"?to(yo):to(_o,-1)})}d(jo),d(pn);var Uo=p(pn,2);{var es=to=>{var ko=sm(),ms=u(ko,!0);d(ko),B(()=>gt(ms,t(Ne))),h(to,ko)};R(Uo,to=>{t(Ne)&&to(es)})}B(()=>pn.disabled=t(An)),G("click",pn,St),h(Vn,Ve)};R($n,Vn=>{t(Te)&&Vn(bn)})}d(Xt),B(()=>dn=Pt(Xt,1,"capture-btn svelte-1ncjz8m",null,dn,{refused:!!t(Ne)})),h(Se,Xt)},overviewBtn:Se=>{var Xt=im();G("click",Xt,()=>{wo.set(!0),document.activeElement instanceof HTMLElement&&document.activeElement.blur()}),h(Se,Xt)},sourceItem:Se=>{var Xt=Xa(),dn=Wt(Xt);{var $n=Ve=>{var pn=lm();G("click",pn,()=>Oa()),h(Ve,pn)};R(dn,Ve=>{W()&&Ve($n)})}var bn=p(dn,2);{var Vn=Ve=>{var pn=cm();G("click",pn,()=>wr()),h(Ve,pn)};R(bn,Ve=>{Y()&&Ve(Vn)})}h(Se,Xt)},$$slots:{kioskItem:!0,barsItem:!0,pointerItem:!0,presentBtn:!0,adjustGroup:!0,printBtn:!0,captureItem:!0,overviewBtn:!0,sourceItem:!0}})};R(xt,we=>{Yn()&&we(Ft)})}var ie=p(xt,2);{var _t=we=>{Mu(we,{tocItem:be=>{mp(be,{bar:!0,get pages(){return wt()},get deck(){return t(Kt)},get article(){return io()},get articleText(){return vn()},get articleHref(){return Ie()},get returnTo(){return t(K)}})},navGroup:be=>{{let Qe=un(()=>(t(M),st(()=>t(M).first??""))),Ge=un(()=>(t(M),st(()=>t(M).prev??""))),ze=un(()=>(t(M),st(()=>t(M).next??""))),En=un(()=>(t(M),st(()=>t(M).last??"")));yl(be,{deckLevel:!0,get firstLink(){return t(Qe)},get prevLink(){return t(Ge)},get nextLink(){return t(ze)},get lastLink(){return t(En)}})}},$$slots:{tocItem:!0,navGroup:!0}})};R(ie,we=>{zn()&&we(_t)})}var Pe=p(ie,2);{var $e=we=>{Du(we,{get width(){return de()},get height(){return ae()},get rect(){return t(he)}})};R(Pe,we=>{t(Ae)&&we($e)})}d(H),Le(H,we=>o(ge,we),()=>t(ge)),B(()=>{at=Pt(H,1,"overlay svelte-1ncjz8m",null,at,{"fade-chrome":wn()}),le(H,`--base-font:${Xe()??""};`)}),h(v,H)};R(As,v=>{t(Bt)&&!t(b)&&!t(k)&&(Yn()||zn())&&v(Bo)})}var hs=p(As,2);{var ar=v=>{var H=pm(),at=Wt(H);kh(at,{});var xt=p(at,2);Sh(xt,{});var Ft=p(xt,2);{let _t=un(()=>t(w)??"");Eh(Ft,{get pages(){return wt()},get currentSlide(){return t(_t)},prefix:"./",get wpm(){return sn()}})}var ie=p(Ft,2);{let _t=un(()=>Yn()||zn());Xf(ie,{get offered(){return rn()},get firstSlide(){return t(lt)},get suppressed(){return t(Tt)},get bars(){return t(_t)},get delayMs(){return rt()},get force(){return t(pt)},get themeClass(){return tn()}})}h(v,H)};R(hs,v=>{t(Bt)&&Er&&!t(b)&&!t(k)&&v(ar)})}var Ns=p(hs,2);{var ir=v=>{var H=um();h(v,H)};R(Ns,v=>{x()&&!t(k)&&v(ir)})}var y=p(Ns,2);{var ft=v=>{Af(v,{get shape(){return Zt()},get size(){return ke()}})};R(y,v=>{t(L)&&!t(k)&&v(ft)})}var qt=p(y,2);{var je=v=>{var H=Xa(),at=Wt(H);ff(at,{get pages(){return wt()},get width(){return de()},get height(){return ae()}});var xt=p(at,2);{let Ft=un(()=>t(w)??"");$a(xt,{get pages(){return wt()},get width(){return de()},get height(){return ae()},get currentPath(){return t(Ft)},get deck(){return t(Kt)},get present(){return t(k)}})}h(v,H)};R(qt,v=>{t(Bt)&&t(k)&&v(je)})}B(()=>{Gn=Pt(_n,1,"viewport svelte-1ncjz8m",null,Gn,{zoom:!t(vt),shot:t(N)}),Ko=Pt(Sn,1,`container ${tn()??""}`,"svelte-1ncjz8m",Ko,{"fit-mode":t(vt),"zoom-mode":!t(vt),clean:t(b),present:t(k),shot:t(N),"fade-chrome":wn(),"print-notes":t(ht)}),le(Sn,`--canvas-w:${de()??""}px; --canvas-h:${ae()??""}px; --aspect:${t(et)??""}; --base-font:${Xe()??""}; --print-scale:${t(it),st(()=>t(it).scale)??""}; --print-w:${t(it),st(()=>t(it).slideWidthPx)??""}px; --print-h:${t(it),st(()=>t(it).slideHeightPx)??""}px; --print-notes-h:${t(it),st(()=>t(it).notesHeightPx)??""}px;${kn()?` --content-bg:${kn()};`:""}${ao()?` --content-font:${ao()};`:""}`),vs=Pt(Pn,1,"content svelte-1ncjz8m",null,vs,{fill:on(),ready:t(Bt)})}),G("scroll",_n,xe),h(e,$o),qe(),Q()}export{Ym as S};
