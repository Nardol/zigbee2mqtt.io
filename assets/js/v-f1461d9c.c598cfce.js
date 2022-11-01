"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[1012],{7872:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-f1461d9c",path:"/devices/IOMZB-110.html",title:"Develco IOMZB-110 control via MQTT",lang:"en-US",frontmatter:{title:"Develco IOMZB-110 control via MQTT",description:"Integrate your Develco IOMZB-110 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-11-01T16:06:49.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Input (binary, l1 endpoint)",slug:"input-binary-l1-endpoint",children:[]},{level:3,title:"Input (binary, l2 endpoint)",slug:"input-binary-l2-endpoint",children:[]},{level:3,title:"Input (binary, l3 endpoint)",slug:"input-binary-l3-endpoint",children:[]},{level:3,title:"Input (binary, l4 endpoint)",slug:"input-binary-l4-endpoint",children:[]},{level:3,title:"Switch (l11 endpoint)",slug:"switch-l11-endpoint",children:[]},{level:3,title:"Switch (l12 endpoint)",slug:"switch-l12-endpoint",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/IOMZB-110.md",git:{updatedTime:1667331157e3}}},10724:(e,t,o)=>{o.r(t),o.d(t,{default:()=>a});const i=(0,o(66252).uE)('<h1 id="develco-iomzb-110" tabindex="-1"><a class="header-anchor" href="#develco-iomzb-110" aria-hidden="true">#</a> Develco IOMZB-110</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>IOMZB-110</td></tr><tr><td>Vendor</td><td>Develco</td></tr><tr><td>Description</td><td>IO module</td></tr><tr><td>Exposes</td><td>input, switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/IOMZB-110.jpg" alt="Develco IOMZB-110"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="input-binary-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#input-binary-l1-endpoint" aria-hidden="true">#</a> Input (binary, l1 endpoint)</h3><p>State of input 1. Value can be found in the published state on the <code>input_l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;input_l1&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> input is ON, if <code>false</code> OFF.</p><h3 id="input-binary-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#input-binary-l2-endpoint" aria-hidden="true">#</a> Input (binary, l2 endpoint)</h3><p>State of input 2. Value can be found in the published state on the <code>input_l2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;input_l2&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> input is ON, if <code>false</code> OFF.</p><h3 id="input-binary-l3-endpoint" tabindex="-1"><a class="header-anchor" href="#input-binary-l3-endpoint" aria-hidden="true">#</a> Input (binary, l3 endpoint)</h3><p>State of input 3. Value can be found in the published state on the <code>input_l3</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;input_l3&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> input is ON, if <code>false</code> OFF.</p><h3 id="input-binary-l4-endpoint" tabindex="-1"><a class="header-anchor" href="#input-binary-l4-endpoint" aria-hidden="true">#</a> Input (binary, l4 endpoint)</h3><p>State of input 4. Value can be found in the published state on the <code>input_l4</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;input_l4&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> input is ON, if <code>false</code> OFF.</p><h3 id="switch-l11-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l11-endpoint" aria-hidden="true">#</a> Switch (l11 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l11</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l11&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l11&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l11&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l11&quot;: &quot;&quot;}</code>.</p><h3 id="switch-l12-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l12-endpoint" aria-hidden="true">#</a> Switch (l12 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l12</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l12&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l12&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l12&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l12&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17),d={},a=(0,o(83744).Z)(d,[["render",function(e,t){return i}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);