"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[10701],{35011:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d={key:"v-3371f1b0",path:"/devices/HC-SLM-1.html",title:"Home Control AS HC-SLM-1 control via MQTT",lang:"en-US",frontmatter:{title:"Home Control AS HC-SLM-1 control via MQTT",description:"Integrate your Home Control AS HC-SLM-1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-07-01T19:41:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Lock",slug:"lock",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Auto_relock_time (numeric)",slug:"auto-relock-time-numeric",children:[]},{level:3,title:"Sound_volume (enum)",slug:"sound-volume-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/HC-SLM-1.md",git:{updatedTime:1667331157e3}}},75487:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});var d=o(66252);const a=(0,d.uE)('<h1 id="home-control-as-hc-slm-1" tabindex="-1"><a class="header-anchor" href="#home-control-as-hc-slm-1" aria-hidden="true">#</a> Home Control AS HC-SLM-1</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>HC-SLM-1</td></tr><tr><td>Vendor</td><td>Home Control AS</td></tr><tr><td>Description</td><td>Heimgard (Wattle) door lock pro</td></tr><tr><td>Exposes</td><td>lock (state, lock_state), battery, auto_relock_time, sound_volume, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/HC-SLM-1.jpg" alt="Home Control AS HC-SLM-1"></td></tr></tbody></table><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',3),i=(0,d.Uk)("This device supports OTA updates, for more information see "),c=(0,d.Uk)("OTA updates"),l=(0,d.Uk)("."),u=(0,d.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock" aria-hidden="true">#</a> Lock</h3><p>The current state of this lock is in the published state under the <code>state</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;state&quot;: &quot;UNLOCK&quot;}</code>. To read the current state of this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>. This lock exposes a lock state which can be found in the published state under the <code>lock_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>not_fully_locked</code>, <code>locked</code>, <code>unlocked</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="auto-relock-time-numeric" tabindex="-1"><a class="header-anchor" href="#auto-relock-time-numeric" aria-hidden="true">#</a> Auto_relock_time (numeric)</h3><p>The number of seconds to wait after unlocking a lock before it automatically locks again. 0=disabled. Value can be found in the published state on the <code>auto_relock_time</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;auto_relock_time&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;auto_relock_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>3600</code>. The unit of this value is <code>s</code>.</p><h3 id="sound-volume-enum" tabindex="-1"><a class="header-anchor" href="#sound-volume-enum" aria-hidden="true">#</a> Sound_volume (enum)</h3><p>Sound volume of the lock. Value can be found in the published state on the <code>sound_volume</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sound_volume&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sound_volume&quot;: NEW_VALUE}</code>. The possible values are: <code>silent_mode</code>, <code>low_volume</code>, <code>high_volume</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),r={},s=(0,o(83744).Z)(r,[["render",function(e,t){const o=(0,d.up)("RouterLink");return(0,d.wg)(),(0,d.iD)(d.HY,null,[a,(0,d._)("p",null,[i,(0,d.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,d.w5)((()=>[c])),_:1}),l]),u],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,d]of t)e[o]=d;return e}}}]);