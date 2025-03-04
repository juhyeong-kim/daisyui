import{t as Z,a as B}from"../chunks/LFhyL0Oe.js";import"../chunks/gclTb0SW.js";import{s as a,f as z,c as s,r as i,b as E}from"../chunks/C4PvZKYF.js";import{h as t}from"../chunks/wz55X6qA.js";import{l as D,s as M}from"../chunks/D6tDoBIA.js";import{L as N}from"../chunks/B7frf8kE.js";const w={title:"Install daisyUI for Rails",desc:"How to install Tailwind CSS and daisyUI in a Rails project"},{title:Q,desc:W}=w;var P=Z('<h3 id="1-create-a-new-rails-project"><a aria-hidden="true" tabindex="-1" href="#1-create-a-new-rails-project"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a>1. Create a new Rails project</h3> <p>Install Ruby on Rails according to the <a href="https://guides.rubyonrails.org/getting_started.html" rel="nofollow" target="_blank">official Rails guide</a>.</p> <p>Create a new Rails project</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">Terminal</div><!></div> <h3 id="2-install-tailwind-css-for-rails"><a aria-hidden="true" tabindex="-1" href="#2-install-tailwind-css-for-rails"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a>2. Install Tailwind CSS for Rails</h3> <p>Install <a href="https://github.com/rails/tailwindcss-rails" rel="nofollow" target="_blank">Tailwind CSS 4 gem</a> for Rails</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">Terminal</div><!></div> <h3 id="3-add-daisyui"><a aria-hidden="true" tabindex="-1" href="#3-add-daisyui"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a>3. Add daisyUI</h3> <p>There are 3 ways to add daisyUI to your Rails project</p> <div class="tabs tabs-lift max-sm:tabs-sm"><input type="radio" name="my_tabs_3" class="tab" aria-label="Node dependency"> <div class="tab-content bg-base-100 border-base-300 px-6 py-3"><p>This method is recommended if are already using Node.js.<br> This works as a Tailwind CSS plugin so only the class names you need will be added to your CSS file.</p> <p>Initialize a package.json (if you don’t have one) and install daisyUI</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">Terminal</div><!></div> <p>Put Tailwind CSS and daisyUI in your CSS file (and remove old styles)</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">app/assets/tailwind/application.css</div><!></div></div> <input type="radio" name="my_tabs_3" class="tab" aria-label="Bundle file" checked="checked"> <div class="tab-content bg-base-100 border-base-300 px-6 py-3"><p>This method is recommended if you are not using Node.js.<br> This works as a Tailwind CSS plugin so only the class names you need will be added to your CSS file.</p> <p>Run this code to download latest verison of daisyUI as a single js file</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">Terminal</div><!></div> <p>Put Tailwind CSS and daisyUI in your CSS file (and remove old styles)</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">app/assets/tailwind/application.css</div><!></div></div> <input type="radio" name="my_tabs_3" class="tab" aria-label="CDN"> <div class="tab-content bg-base-100 border-base-300 px-6 py-3"><p>This method is recommended if you want to quickly add daisyUI without adding any file.</p> <p>Put Tailwind CSS and daisyUI in your CSS file (and remove old styles)</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">app/assets/tailwind/application.css</div><!></div> <ul><li>You can <a href="/docs/cdn/">choose the parts you need</a></li> <li>You can <a href="https://cdn.jsdelivr.net/npm/daisyui@5/chunks.css" rel="nofollow" target="_blank">import small CSS files separately</a></li> <li>You can <a href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" rel="nofollow" target="_blank">import all themes</a> or <a href="https://cdn.jsdelivr.net/npm/daisyui@5/theme/light.css" rel="nofollow" target="_blank">specific themes</a></li></ul></div></div> <h3 id="4-create-a-homepage-in-rails"><a aria-hidden="true" tabindex="-1" href="#4-create-a-homepage-in-rails"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a>4. Create a homepage in Rails</h3> <p>Now you can use daisyUI class names! Let’s create a simple page and try a button</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">app/controllers/pages_controller.rb</div><!></div> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">config/routes.rb</div><!></div> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">app/views/pages/home.html.erb</div><!></div> <h3 id="5-start-rails"><a aria-hidden="true" tabindex="-1" href="#5-start-rails"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a>5. Start Rails</h3> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">Terminal</div><!></div>',1);function X(x,f){const _=D(f,["children","$$slots","$$events","$$legacy"]);N(x,M(()=>_,w,{children:(C,L)=>{var y=P(),e=a(z(y),6),V=a(s(e));t(V,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:#C0CAF5">rails</span><span style="color:var(--shiki-attr-value)"> new</span><span style="color:var(--shiki-attr-value)"> my-app</span></span>
<span class="line"><span style="color:#0DB9D7">cd</span><span style="color:var(--shiki-attr-value)"> my-app</span></span></code></pre>`),i(e);var o=a(e,6),H=a(s(o));t(H,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:#C0CAF5">./bin/bundle</span><span style="color:var(--shiki-attr-value)"> add</span><span style="color:var(--shiki-attr-value)"> tailwindcss-rails</span><span style="color:#E0AF68"> --version</span><span style="color:var(--shiki-punctuation)"> "</span><span style="color:var(--shiki-attr-value)">4.0.0</span><span style="color:var(--shiki-punctuation)">"</span></span>
<span class="line"><span style="color:#C0CAF5">./bin/rails</span><span style="color:var(--shiki-attr-value)"> tailwindcss:install</span></span></code></pre>`),i(o);var n=a(o,6),r=a(s(n),2),l=a(s(r),4),S=a(s(l));t(S,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:#C0CAF5">npm</span><span style="color:var(--shiki-attr-value)"> init</span><span style="color:#E0AF68"> -y</span></span>
<span class="line"><span style="color:#C0CAF5">npm</span><span style="color:var(--shiki-attr-value)"> install</span><span style="color:var(--shiki-attr-value)"> daisyui@latest</span></span></code></pre>`),i(l);var u=a(l,4),F=a(s(u));t(F,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-attr-name)">@import </span><span style="color:var(--shiki-attr-value)">"tailwindcss"</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">@plugin </span><span style="color:var(--shiki-attr-value)">"daisyui"</span><span style="color:var(--shiki-punctuation)">;</span></span></code></pre>`),i(u),i(r);var p=a(r,4),c=a(s(p),4),A=a(s(c));t(A,()=>'<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:#C0CAF5">curl</span><span style="color:#E0AF68"> -sLo</span><span style="color:var(--shiki-attr-value)"> app/assets/tailwind/daisyui.js</span><span style="color:var(--shiki-attr-value)"> https://esm.run/daisyui@5/index.js</span></span></code></pre>'),i(c);var m=a(c,4),T=a(s(m));t(T,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-attr-name)">@import </span><span style="color:var(--shiki-attr-value)">"tailwindcss"</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">@plugin </span><span style="color:var(--shiki-attr-value)">"./daisyui.js"</span><span style="color:var(--shiki-punctuation)">;</span></span></code></pre>`),i(m),i(p);var b=a(p,4),g=a(s(b),4),j=a(s(g));t(j,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-attr-name)">@import </span><span style="color:var(--shiki-attr-value)">"tailwindcss"</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">@import </span><span style="color:var(--shiki-attr-value)">"https://cdn.jsdelivr.net/npm/daisyui@5"</span><span style="color:var(--shiki-punctuation)">;</span></span></code></pre>`),i(g),E(2),i(b),i(n);var d=a(n,6),I=a(s(d));t(I,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-attr-name)">class</span><span style="color:#FF9E64"> PagesController</span><span style="color:var(--shiki-attr-name)"> &#x3C;</span><span style="color:#FF9E64"> ApplicationController</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">  def</span><span style="color:#7AA2F7"> home</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">  end</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">end</span></span></code></pre>`),i(d);var v=a(d,2),R=a(s(v));t(R,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:#0DB9D7">Rails</span><span style="color:var(--shiki-punctuation)">.</span><span style="color:#7AA2F7">application</span><span style="color:var(--shiki-punctuation)">.</span><span style="color:#7AA2F7">routes</span><span style="color:var(--shiki-punctuation)">.</span><span style="color:#7AA2F7">draw</span><span style="color:var(--shiki-attr-name)"> do</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  root </span><span style="color:#FF9E64">to:</span><span style="color:var(--shiki-punctuation)"> '</span><span style="color:var(--shiki-attr-value)">pages#home</span><span style="color:var(--shiki-punctuation)">'</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">end</span></span></code></pre>`),i(v);var h=a(v,2),U=a(s(h));t(U,()=>'<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">btn btn-primary</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">Hello daisyUI!</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span></code></pre>'),i(h);var k=a(h,4),$=a(s(k));t($,()=>'<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:#C0CAF5">./bin/dev</span></span></code></pre>'),i(k),B(C,y)},$$slots:{default:!0}}))}export{X as component};
