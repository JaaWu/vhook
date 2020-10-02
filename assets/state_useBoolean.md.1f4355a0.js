import{g as a,j as n,A as s,f as t,q as p}from"./common-db3bf608.js";const e='{"title":"`useBoolean`","frontmatter":{},"headers":[{"level":2,"title":"API","slug":"api"},{"level":2,"title":"Params","slug":"params"},{"level":2,"title":"Methods","slug":"methods"},{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"Code","slug":"code"}],"relativePath":"state/useBoolean.md","lastUpdated":1601612170295.4314}';var o={};const c=s('<h1 id="useboolean"><a class="header-anchor" href="#useboolean" aria-hidden="true">#</a> <code>useBoolean</code></h1><hr><p>用于管理 <code>Boolean</code> 状态的 <code>Hook</code></p><h2 id="api"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><div class="language-typescript"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span>\n  state<span class="token punctuation">,</span>\n  toggle<span class="token punctuation">,</span>\n  setTrue<span class="token punctuation">,</span>\n  setFalse\n<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useBoolean</span><span class="token punctuation">(</span>defaultValue<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="params"><a class="header-anchor" href="#params" aria-hidden="true">#</a> Params</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>defaultValue</td><td>初始默认状态</td><td>boolean</td><td>false</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2><p>该 Hook 返回以下函数：</p><table><thead><tr><th>函数名</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>toggle</td><td>(next?: boolean) =&gt; void</td><td>用于反转状态</td></tr><tr><td>setTrue</td><td>() =&gt; void</td><td>将状态设置为true</td></tr><tr><td>setFalse</td><td>() =&gt; void</td><td>将状态设置为false</td></tr></tbody></table><h2 id="example"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2>',11),l=s('<h2 id="code"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{state}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toggle()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>toggle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setTrue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>True<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setFalse<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>False<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useBoolean <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vhook&#39;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">useBoolean</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>res\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',2);o.render=function(s,e,o,u,k,r){const i=p("UseBoolean");return t(),a("div",null,[c,n(i),l])};export default o;export{e as __pageData};
