import{g as a,j as t,A as n,f as s,q as p}from"./common-db3bf608.js";const o='{"title":"`useHistory`","frontmatter":{},"headers":[{"level":2,"title":"API","slug":"api"},{"level":2,"title":"Result","slug":"result"},{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"Code","slug":"code"}],"relativePath":"state/useHistory.md","lastUpdated":1601612171134.697}';var e={};const c=n('<h1 id="usehistory"><a class="header-anchor" href="#usehistory" aria-hidden="true">#</a> <code>useHistory</code></h1><hr><p>追踪 <code>history</code> 的变化</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>代理拦截 <code>pushState</code> 以及 <code>replaceState</code>，实现调用 <code>popState</code> 、 <code>replaceState</code> 以及 <code>pushState</code> 时，可以追踪到 <code>history</code> 的状态变化</p></div><h2 id="api"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><div class="language-typescript"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span>\n  state<span class="token punctuation">,</span>\n  hash<span class="token punctuation">,</span>\n  search<span class="token punctuation">,</span>\n  host<span class="token punctuation">,</span>\n  hostname<span class="token punctuation">,</span>\n  href<span class="token punctuation">,</span>\n  origin<span class="token punctuation">,</span>\n  pathname<span class="token punctuation">,</span>\n  port<span class="token punctuation">,</span>\n  protocol<span class="token punctuation">,</span>\n  clear\n<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="result"><a class="header-anchor" href="#result" aria-hidden="true">#</a> Result</h2><table><thead><tr><th>参数名</th><th>描述</th><th>类型</th></tr></thead><tbody><tr><td>state</td><td>history.state</td><td>Any</td></tr><tr><td>hash</td><td>location.hash</td><td>DeepReadonly&lt;Ref&lt;string&gt;&gt;</td></tr><tr><td>search</td><td>location.search</td><td>DeepReadonly&lt;Ref&lt;string&gt;&gt;</td></tr><tr><td>host</td><td>location.host</td><td>DeepReadonly&lt;Ref&lt;string&gt;&gt;</td></tr><tr><td>hostname</td><td>location.hostname</td><td>DeepReadonly&lt;Ref&lt;string&gt;&gt;</td></tr><tr><td>origin</td><td>location.origin</td><td>DeepReadonly&lt;Ref&lt;string&gt;&gt;</td></tr><tr><td>pathname</td><td>location.pathname</td><td>DeepReadonly&lt;Ref&lt;string&gt;&gt;</td></tr><tr><td>port</td><td>Location.port</td><td>DeepReadonly&lt;Ref&lt;number&gt;&gt;</td></tr><tr><td>protocol</td><td>location.protocol</td><td>DeepReadonly&lt;Ref&lt;number&gt;&gt;</td></tr><tr><td>clear</td><td>清除对 <code>popstate</code>、<code>pushstate</code>和<code>replacestate</code>的监听，不再响应变化</td><td>() =&gt; void</td></tr></tbody></table><h2 id="example"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2>',9),l=n('<h2 id="code"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>hash: {{hash}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>search: {{search}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>host: {{host}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>hostname: {{hostname}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>origin: {{origin}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>pathname: {{pathname}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>port: {{port}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>protocol: {{protocol}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> useHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vhook&#39;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token function">useHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',2);e.render=function(n,o,e,u,i,d){const r=p("UseHistory");return s(),a("div",null,[c,t(r),l])};export default e;export{o as __pageData};
