import{g as a,j as n,A as s,f as t,q as p}from"./common-db3bf608.js";const e='{"title":"`useScrollRef`","frontmatter":{},"headers":[{"level":2,"title":"API","slug":"api"},{"level":2,"title":"Params","slug":"params"},{"level":2,"title":"Result","slug":"result"},{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"Code","slug":"code"}],"relativePath":"sensors/useScrollRef.md","lastUpdated":1601612170295.4688}';var o={};const c=s('<h1 id="usescrollref"><a class="header-anchor" href="#usescrollref" aria-hidden="true">#</a> <code>useScrollRef</code></h1><hr><p>追踪特定 <code>DOM</code> 节点的滚动位置</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>功能与 <code>useScroll</code> 相同，区别在于不用传入绑定的目标，内部会生成一个 <code>Ref</code> ，用于在模板中绑定 <code>ref</code></p></div><h2 id="api"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><div class="language-typescript"><pre><code><span class="token keyword">const</span> <span class="token punctuation">[</span>target<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> clear<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useScrollRef</span><span class="token punctuation">(</span>delay<span class="token punctuation">)</span>\n</code></pre></div><h2 id="params"><a class="header-anchor" href="#params" aria-hidden="true">#</a> Params</h2><table><thead><tr><th>参数名</th><th>描述</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>delay</td><td>节流时间</td><td>number</td><td>200</td></tr></tbody></table><h2 id="result"><a class="header-anchor" href="#result" aria-hidden="true">#</a> Result</h2><table><thead><tr><th>参数名</th><th>描述</th><th>类型</th></tr></thead><tbody><tr><td>x</td><td>element.scrollLeft</td><td>DeepReadonly&lt;Ref&lt;number&gt;&gt;</td></tr><tr><td>y</td><td>element.scrollTop</td><td>DeepReadonly&lt;Ref&lt;number&gt;&gt;</td></tr><tr><td>clear</td><td>解绑监听事件</td><td>() =&gt; void</td></tr><tr><td>target</td><td>用于设置 <code>ref</code></td><td>Ref&lt;Element | null&gt;</td></tr></tbody></table><h2 id="example"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2>',11),l=s('<h2 id="code"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>x: {{x}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>y: {{y}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>滚动下方粉色块观测x和y变化<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> \n    <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>target<span class="token punctuation">&quot;</span></span><span class="token style-attr language-css"><span class="token attr-name">\n    <span class="token attr-name">style</span></span><span class="token punctuation">=&quot;</span><span class="token attr-value"><span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span><span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span> <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token style-attr language-css"><span class="token attr-name"> \n      <span class="token attr-name">style</span></span><span class="token punctuation">=&quot;</span><span class="token attr-value"><span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span> <span class="token property">background</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> useScrollRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vhook&#39;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> <span class="token punctuation">[</span>target<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useScrollRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        x<span class="token punctuation">,</span>\n        y<span class="token punctuation">,</span>\n        target\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',2);o.render=function(s,e,o,u,r,k){const i=p("UseScrollRef");return t(),a("div",null,[c,n(i),l])};export default o;export{e as __pageData};
