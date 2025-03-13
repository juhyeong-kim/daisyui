import{a as H,t as $,b as s,s as a,f as S}from"../chunks/disclose-version.CEbLymSa.js";import{h as n}from"../chunks/html.CRu8H1xh.js";import{l as B,s as q}from"../chunks/props.CBRLfZBG.js";import{M as j}from"../chunks/mdsvex-blog.CXxysKDW.js";var T=$(`<p>Headless UI is a set of completely unstyled, fully accessible UI components for React and Vue. It gives you functionality without design decisions. daisyUI is a Tailwind CSS component library that provides design decisions without functionality. That’s why it is suggested to use them together.</p> <h2 id="why-use-headless-ui"><a aria-hidden="true" tabindex="-1" href="#why-use-headless-ui"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Why use Headless UI?</h2> <p>As a CSS-only component library, daisyUI doesn’t include any JavaScript code. However sometimes you need JS to make interactive components or to improve keyboard navigation. That’s where <a href="https://headlessui.com/" rel="nofollow" target="_blank">Headless UI</a> comes in. It provides you with fully accessible UI components for React and Vue.</p> <h2 id="how-to-install-headless-ui"><a aria-hidden="true" tabindex="-1" href="#how-to-install-headless-ui"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>How to install Headless UI?</h2> <p><a href="https://headlessui.com/" rel="nofollow" target="_blank">Headless UI</a> is available for React and Vue. But there is an <a href="https://github.com/rgossiaux/svelte-headlessui" rel="nofollow" target="_blank">unofficial port of Headless UI for Svelte</a> too.</p> <ol><li>To install Headless UI for Vue, run the following command:</li></ol> <pre class="language-bash"><!></pre> <p>Or this command if you’re using React:</p> <pre class="language-bash"><!></pre> <ol start="2"><li>Now you can use any of the <a href="https://headlessui.com/" rel="nofollow" target="_blank">Headless UI components</a> by copy/pasting the code to your project.</li></ol> <p>For example, according to Headless UI docs, this is how you can create a dropdown menu:</p> <pre class="language-jsx"><!></pre> <ol start="3"><li>Add daisyUI</li></ol> <p>After <a href="https://daisyui.com/docs/install/" rel="nofollow" target="_blank">installing daisyUI</a> you can use daisyUI’s styles in Headless UI components.
Simply add daisyUI class names (and Tailwind CSS utility classes) where it’s needed:</p> <pre class="language-jsx"><!></pre> <p>Visit <a href="https://headlessui.com/" rel="nofollow" target="_blank">Headless UI docs</a> to learn more about its components.</p>`,1);const V={title:"How to use Headless UI and daisyUI together?",desc:"What is Headless UI and why it is suggested to use it with daisyUI?",published:!0,date:"2023-9-28",author:"Pouya Saadeghi",thumbnail:"https://img.daisyui.com/images/blog/headless-ui.webp",tags:["Component Libraries"]};function J(l,c){const u=B(c,["children","$$slots","$$events","$$legacy"]);j(l,q(()=>u,V,{children:(i,C)=>{var t=T(),k=S(t),r=a(a(k,!0)),d=a(a(r,!0)),g=a(a(d,!0)),m=a(a(g,!0)),h=a(a(m,!0)),p=a(a(h,!0)),y=s(p);n(y,()=>'<code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> @headlessui/vue</code>');var f=a(a(p,!0)),e=a(a(f,!0)),x=s(e);n(x,()=>'<code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> @headlessui/react</code>');var v=a(a(e,!0)),w=a(a(v,!0)),o=a(a(w,!0)),I=s(o);n(I,()=>`<code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Menu <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"@headlessui/react"</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MyDropDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu.Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">Button</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu.Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu.Items</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/link<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Item 1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/link<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Item 2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu.Items</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`);var b=a(a(o,!0)),_=a(a(b,!0)),M=a(a(_,!0)),U=s(M);n(U,()=>`<code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Menu <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"@headlessui/react"</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MyDropDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu.Button</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Button</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu.Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu.Items</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu rounded-box bg-base-200 w-52<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/link<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Item 1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/link<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Item 2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu.Items</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`),H(i,t)},$$slots:{default:!0},$$legacy:!0}))}export{J as component};
