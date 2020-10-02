import{g as a,j as n,A as s,f as t,q as p}from"./common-db3bf608.js";const e='{"title":"useTimeout","frontmatter":{},"headers":[{"level":2,"title":"API","slug":"api"},{"level":2,"title":"Params","slug":"params"},{"level":2,"title":"Result","slug":"result"},{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"Code","slug":"code"}],"relativePath":"effects/useTimeout.md","lastUpdated":1601612170295.3428}';var o={};const c=s('<h1 id="usetimeout"><a class="header-anchor" href="#usetimeout" aria-hidden="true">#</a> useTimeout</h1><hr><p>用于在一段时间后更新值</p><h2 id="api"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><div class="language-typescript"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span>ready<span class="token punctuation">,</span> start<span class="token punctuation">,</span> stop<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useTimeout</span><span class="token punctuation">(</span>delay<span class="token punctuation">,</span> immediate<span class="token punctuation">)</span>\n</code></pre></div><h2 id="params"><a class="header-anchor" href="#params" aria-hidden="true">#</a> Params</h2><table><thead><tr><th>参数名</th><th>描述</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>delay</td><td>延时时间</td><td>number</td><td></td></tr><tr><td>immediate</td><td>是否立即启动定时器</td><td>boolean</td><td>true</td></tr></tbody></table><h2 id="result"><a class="header-anchor" href="#result" aria-hidden="true">#</a> Result</h2><table><thead><tr><th>参数名</th><th>描述</th><th>类型</th></tr></thead><tbody><tr><td>ready</td><td>定时是否结束</td><td>boolean</td></tr><tr><td>start</td><td>开启/重启定时器</td><td>() =&gt; void</td></tr><tr><td>stop</td><td>停止定时器</td><td>() =&gt; void</td></tr></tbody></table><h2 id="example"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2>',10),l=s('<h2 id="code"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Ready: {{ready}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stop<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>stop<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>start<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>restart<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> useTimeout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vhook&#39;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> <span class="token punctuation">{</span>\n        ready<span class="token punctuation">,</span>\n        start<span class="token punctuation">,</span>\n        stop\n      <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useTimeout</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        ready<span class="token punctuation">,</span>\n        start<span class="token punctuation">,</span>\n        stop\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',2);o.render=function(s,e,o,u,i,r){const d=p("UseTimeout");return t(),a("div",null,[c,n(d),l])};export default o;export{e as __pageData};