if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let i={};const c=e=>a(e,r),l={module:{uri:r},exports:i,require:c};s[r]=Promise.all(f.map((e=>l[e]||c(e)))).then((e=>(d(...e),i)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./apple-touch-icon.png",revision:"b97d5aab4e5ec39b006ceef0eb6b2fb4"},{url:"./assets/background.jpg",revision:"6b787e926cf318f69f6ebc7b91b34d32"},{url:"./assets/fonts/TradeGothicLTStd-Bd2.woff",revision:"16d668cf8445859b900067ac3219dd54"},{url:"./assets/fonts/TradeGothicLTStd-Bd2.woff2",revision:"fbb79f4d6f9d4f4bd47cb5aae29ae137"},{url:"./assets/fonts/TradeGothicLTStd-Bd2Obl.woff",revision:"a868e09c036177b34428e9624b894ede"},{url:"./assets/fonts/TradeGothicLTStd-Bd2Obl.woff2",revision:"361af33ff94c90c46d9b256d0e9c6eeb"},{url:"./assets/fonts/TradeGothicLTStd-BdCn20.woff",revision:"eae9b53b98ecb62a9b3951f6e8cda1df"},{url:"./assets/fonts/TradeGothicLTStd-BdCn20.woff2",revision:"0e782c799f4a1dc269fda8b7a02e6af6"},{url:"./assets/fonts/TradeGothicLTStd-BdCn20Obl.woff",revision:"a98a709b5aebd4a8e08a8d487311c9ff"},{url:"./assets/fonts/TradeGothicLTStd-BdCn20Obl.woff2",revision:"03ad3043a7f1e5850e4c71a87589b534"},{url:"./assets/fonts/TradeGothicLTStd-Bold.woff",revision:"96382a254d486d694ebca2ccaf7f9d5a"},{url:"./assets/fonts/TradeGothicLTStd-Bold.woff2",revision:"15c01c385821769c09376032c4ae9ddd"},{url:"./assets/fonts/TradeGothicLTStd-BoldExt.woff",revision:"7d2c69102693360814ecd62292308a3a"},{url:"./assets/fonts/TradeGothicLTStd-BoldExt.woff2",revision:"613f7990a4dee0b0a5f1142d98c85a4e"},{url:"./assets/fonts/TradeGothicLTStd-BoldObl.woff",revision:"d366470593fc566f8ead37588708716a"},{url:"./assets/fonts/TradeGothicLTStd-BoldObl.woff2",revision:"ede2a2e0e791822c3f1001334098fa8a"},{url:"./assets/fonts/TradeGothicLTStd-Cn18.woff",revision:"2bbb3d117201a52ec7be8f0054f2f9e9"},{url:"./assets/fonts/TradeGothicLTStd-Cn18.woff2",revision:"64d989099c20efaf1685ca9ce0b69eca"},{url:"./assets/fonts/TradeGothicLTStd-Cn18Obl.woff",revision:"8239280ab1892dc01cf5ff4f9a7128e7"},{url:"./assets/fonts/TradeGothicLTStd-Cn18Obl.woff2",revision:"ba85b4eeca06a1f3b78f2b946d121221"},{url:"./assets/fonts/TradeGothicLTStd-Extended.woff",revision:"4f1c0bc2f70b3d1cecf499595cdc53f8"},{url:"./assets/fonts/TradeGothicLTStd-Extended.woff2",revision:"97a174a30334ff76f061bef382e998a9"},{url:"./assets/fonts/TradeGothicLTStd-Light.woff",revision:"93dc5ceae66f6349416c7ae8e8c774eb"},{url:"./assets/fonts/TradeGothicLTStd-Light.woff2",revision:"bf70bae6003ee58aba6ee347e2623343"},{url:"./assets/fonts/TradeGothicLTStd-LightObl.woff",revision:"69f301c6ac5d9b157d688bd930190926"},{url:"./assets/fonts/TradeGothicLTStd-LightObl.woff2",revision:"2b1bfb094924ef874cf521dec4505a46"},{url:"./assets/fonts/TradeGothicLTStd-Obl.woff",revision:"0a587f9a525dc448f55fabdb467fd288"},{url:"./assets/fonts/TradeGothicLTStd-Obl.woff2",revision:"f985a1b20e2dbd931cff403ca08ea256"},{url:"./assets/fonts/TradeGothicLTStd.woff",revision:"39d973e8109d510976408c5a7c4f09a4"},{url:"./assets/fonts/TradeGothicLTStd.woff2",revision:"a4039ed0781de2b419a0a2c0fdaaeb64"},{url:"./assets/home/indicator.svg",revision:"33fe78bcd0cfa0fc70e5a4f2bd0f32d3"},{url:"./assets/home/menu/1.svg",revision:"7e7f7f54505445e52aa61222d6201de9"},{url:"./assets/home/menu/2.svg",revision:"b92899933816147ff356a39108fcba2b"},{url:"./assets/home/menu/3.svg",revision:"8516546bffdaa044525b1e677afa5db4"},{url:"./assets/home/menu/4.svg",revision:"2cf436ab354095c66dc06ba5c3080bc3"},{url:"./assets/home/menu/5.svg",revision:"16b15ff772393ba472a7f45e9184ff94"},{url:"./assets/home/notice.svg",revision:"86735fe67a1a2308c87d3561df498c5a"},{url:"./assets/legal-pdf/1.jpg",revision:"e55a6f4219f91e449ab9c2cb09c3c985"},{url:"./assets/legal-pdf/10.jpg",revision:"d0c8ed3a259cef6f4763e3c3a603f8ee"},{url:"./assets/legal-pdf/11.jpg",revision:"93f098d4aebe6dfeeb6a2aad27fe7b78"},{url:"./assets/legal-pdf/12.jpg",revision:"4c3e9537be45537a003f4c4ed394d199"},{url:"./assets/legal-pdf/13.jpg",revision:"0c83d616d344040c463c0d168ab3ce41"},{url:"./assets/legal-pdf/14.jpg",revision:"be5c6a7569f96ab4ba7b9fb4f5f5e099"},{url:"./assets/legal-pdf/15.jpg",revision:"e8614559c5712e77e30bbcdeb32a0f19"},{url:"./assets/legal-pdf/16.jpg",revision:"3b4d4c80565ff044529b3d36ee05c36c"},{url:"./assets/legal-pdf/17.jpg",revision:"002cdb4d32bf5874543386f7465aa830"},{url:"./assets/legal-pdf/18.jpg",revision:"36b49f29294d733afb1a0be4590e358c"},{url:"./assets/legal-pdf/19.jpg",revision:"0898dd7277d5d36fb814a0a641e24522"},{url:"./assets/legal-pdf/2.jpg",revision:"39ff5a964b114535b7ea7791929cac24"},{url:"./assets/legal-pdf/20.jpg",revision:"f390a9a1f0ced096f0d1073a85a73bce"},{url:"./assets/legal-pdf/21.jpg",revision:"6e0a719963e1434628a79b2ed0a63f77"},{url:"./assets/legal-pdf/22.jpg",revision:"f062f0b6cefac2bab055cbc9518285f4"},{url:"./assets/legal-pdf/23.jpg",revision:"441b2c7eb362e3f84586e5ec7131cdf4"},{url:"./assets/legal-pdf/24.jpg",revision:"de38471b1968baca4365c046e53a8371"},{url:"./assets/legal-pdf/25.jpg",revision:"a659c723f1ce8f94bd187ede3bfc1e2d"},{url:"./assets/legal-pdf/26.jpg",revision:"44ffdf2a3732969f2c9e2379ea9f29ec"},{url:"./assets/legal-pdf/27.jpg",revision:"838fbcf54982be381872d3a46ab3c474"},{url:"./assets/legal-pdf/28.jpg",revision:"3c8f58b7f2c9b264fb14a79d3f366d5b"},{url:"./assets/legal-pdf/29.jpg",revision:"d1318c9b320a7c8f412b6b54890e11c1"},{url:"./assets/legal-pdf/3.jpg",revision:"405b09e6caabe821c57761e4e133588c"},{url:"./assets/legal-pdf/30.jpg",revision:"c2af44436c6e2a018b8e2a1812545dfc"},{url:"./assets/legal-pdf/31.jpg",revision:"65bed1735fddba1d87cebf1e2010aa35"},{url:"./assets/legal-pdf/32.jpg",revision:"e780d745f21468e737ee4a2060af21dd"},{url:"./assets/legal-pdf/33.jpg",revision:"0b0ad2f6ecc2c34a6a5a2e8ef95a8f9d"},{url:"./assets/legal-pdf/34.jpg",revision:"c757aee860282176b64b90e94f8d46b1"},{url:"./assets/legal-pdf/35.jpg",revision:"ada06b4472143a5ab6adcde15872d177"},{url:"./assets/legal-pdf/36.jpg",revision:"d9e6dc5a4e6f857bc3e926e40ed20ce4"},{url:"./assets/legal-pdf/37.jpg",revision:"48f9cd636d2b764ee24eddcb1e87abb5"},{url:"./assets/legal-pdf/38.jpg",revision:"7f1e4705ef5908d5bdf668070bbf547c"},{url:"./assets/legal-pdf/39.jpg",revision:"7d56bbb2aef19e03cfa34c7ab44b0be3"},{url:"./assets/legal-pdf/4.jpg",revision:"6b422b272627a2d58ac8b76639df2fe0"},{url:"./assets/legal-pdf/40.jpg",revision:"97d1ce3b0c9983dd9033e2cd669e79be"},{url:"./assets/legal-pdf/41.jpg",revision:"2f9aa2c7dbc38d9e247e1f43083a0253"},{url:"./assets/legal-pdf/42.jpg",revision:"c7411f64fdbe426e27913aac0b55be13"},{url:"./assets/legal-pdf/43.jpg",revision:"05f066e3741d54326daf85229357915a"},{url:"./assets/legal-pdf/44.jpg",revision:"f2dfa00ede4d30e1dcbcea5dbf8be167"},{url:"./assets/legal-pdf/45.jpg",revision:"796bd9dbde11b44e8c1de6521d6b68ef"},{url:"./assets/legal-pdf/46.jpg",revision:"a43a670e473ffeeca6871dda70b80dfe"},{url:"./assets/legal-pdf/47.jpg",revision:"1c0011fdd78ac2b71104b0fb091c773c"},{url:"./assets/legal-pdf/48.jpg",revision:"6217477237174c522f99802b6eb26180"},{url:"./assets/legal-pdf/49.jpg",revision:"78cd5f78c05c3fa3d8dc4eae7b74d781"},{url:"./assets/legal-pdf/5.jpg",revision:"8c14eab32bd74e86f4b42d0dd868b94e"},{url:"./assets/legal-pdf/50.jpg",revision:"42e9ed0081fd4f50353106b991342663"},{url:"./assets/legal-pdf/51.jpg",revision:"1a998d6837abcaea104c35f89d291219"},{url:"./assets/legal-pdf/52.jpg",revision:"dcfc9a040ae935e314e562fde264f6ca"},{url:"./assets/legal-pdf/53.jpg",revision:"eb13bf9476631d5ff5a5a70fc179b9a8"},{url:"./assets/legal-pdf/6.jpg",revision:"4f5a9a0ab50f0ae604d14b4971476126"},{url:"./assets/legal-pdf/7.jpg",revision:"d9233d08c0c403a128c73c105449ef8c"},{url:"./assets/legal-pdf/8.jpg",revision:"2d1057fc04b9ed160f4325ed790ac7f7"},{url:"./assets/legal-pdf/9.jpg",revision:"be27238f45b1afbdaf400de90733ebdd"},{url:"./assets/legal.svg",revision:"c999abc23bde08ee72be8073faf702f2"},{url:"./assets/logo.svg",revision:"c5b2fc740b5c4f9cec6fa55c31d1d734"},{url:"./assets/page/1.svg",revision:"e5226f017d4b62702f0c6b3d9b3990e0"},{url:"./assets/page/2.svg",revision:"cfb7bfd363182c3bcaa8c979e81fb9e1"},{url:"./assets/page/3.svg",revision:"3cc3a7c040ec2908914ea45e493a4bb2"},{url:"./assets/page/4.svg",revision:"259b83b0e95531324dc40e85a08a5dd6"},{url:"./assets/page/5.svg",revision:"7f441d933a9e3a8765ced67e2aa1dc1a"},{url:"./assets/page/6.svg",revision:"d72ed5132edb587f76958e5a83de4eff"},{url:"./assets/page/7.svg",revision:"bf84212cae1da30aaec908dda15dc282"},{url:"./assets/page/8.svg",revision:"40fb74cfffd6ec372a96300986e569d8"},{url:"./assets/page/background.png",revision:"f4c13530e5ade1aafc7011a76491059c"},{url:"./assets/page/play.svg",revision:"875e859657c0c67fd132522c859b5724"},{url:"./assets/pdf/1.png",revision:"4e2993cba51afa85fb29bd2592b22359"},{url:"./assets/pdf/2.png",revision:"9d26cf410065b2a78f6a453d17f4e999"},{url:"./assets/pdf/3.png",revision:"c2154eda67e228c7f518c386c58bacf4"},{url:"./assets/pdf/4.png",revision:"1129310af2e828d3b07af7103ba0a31e"},{url:"./assets/screensaver/5989D5568D223CCC.png",revision:"8d0f53d3e2a93b80b2599e786d734f57"},{url:"./assets/screensaver/5989D5568D223CCF.png",revision:"f3f14a21db52dfa8d36ef9de5ed9997e"},{url:"./assets/screensaver/background.jpg",revision:"c560590b8f8efaca2d06f86297eb0021"},{url:"./assets/screensaver/copy.svg",revision:"4431aaa7eebdb9835904b2271f07a52c"},{url:"./assets/screensaver/introduction.svg",revision:"bb8e08c87ea27320a5e9b2b8b843c054"},{url:"./assets/screensaver/legal.svg",revision:"30fd393ace0ca0885a66a3116a4da291"},{url:"./assets/screensaver/title.svg",revision:"7fb9863df7a91a2aafdf7cee8c7cf43a"},{url:"./assets/screensaver/title2.svg",revision:"3dfdb7ad44436541d4537378d3b8133f"},{url:"./favicon-16x16.png",revision:"cac23630c5a54a1bda7e87bcb327742a"},{url:"./favicon-32x32.png",revision:"b7f3251c4a481506ad38e18e1b18745d"},{url:"./favicon.ico",revision:"65e5cf1c430654d55fab533619d63d10"},{url:"./fonts.css",revision:"70a3a1b8c593b4f8b3973db39ea736b7"},{url:"./index.html",revision:"0d2c94f6b37193f24f78b07197045de1"},{url:"./main.074dbac6.js.LICENSE.txt",revision:"ee4267ca2fbac5b172576a0e9ec89e71"},{url:"./robots.txt",revision:"2fe76450f59b1b8bc275f94707509a7c"}],{})}));
//# sourceMappingURL=service-worker.js.map
