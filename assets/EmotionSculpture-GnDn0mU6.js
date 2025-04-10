import{_ as Ic,c as wn,o as Tn,a as It,b as Fc,d as Uc,t as yr,F as po,h as mo,n as Nc,w as Oc,v as Bc,i as zc,j as _o,r as Hn,f as Gc,g as Vc}from"./index-e3potomX.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ja="175",Ci={ROTATE:0,DOLLY:1,PAN:2},Ti={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kc=0,go=1,Hc=2,zl=1,Wc=2,vn=3,Vn=0,kt=1,xn=2,zn=0,Pi=1,Ao=2,vo=3,xo=4,Xc=5,$n=100,Yc=101,qc=102,Qc=103,jc=104,Zc=200,Kc=201,$c=202,Jc=203,ia=204,ra=205,eh=206,th=207,nh=208,ih=209,rh=210,sh=211,ah=212,oh=213,lh=214,sa=0,aa=1,oa=2,Fi=3,la=4,ca=5,ha=6,ua=7,Gl=0,ch=1,hh=2,Gn=0,uh=1,dh=2,fh=3,ph=4,mh=5,_h=6,gh=7,Vl=300,Ui=301,Ni=302,da=303,fa=304,hs=306,pa=1e3,ei=1001,ma=1002,sn=1003,Ah=1004,br=1005,cn=1006,gs=1007,ti=1008,bn=1009,kl=1010,Hl=1011,sr=1012,Za=1013,ii=1014,Mn=1015,fr=1016,Ka=1017,$a=1018,ar=1020,Wl=35902,Xl=1021,Yl=1022,rn=1023,ql=1024,Ql=1025,or=1026,lr=1027,jl=1028,Ja=1029,Zl=1030,eo=1031,to=1033,Zr=33776,Kr=33777,$r=33778,Jr=33779,_a=35840,ga=35841,Aa=35842,va=35843,xa=36196,Ea=37492,Ma=37496,Sa=37808,ya=37809,ba=37810,wa=37811,Ta=37812,Ra=37813,Ca=37814,Pa=37815,Da=37816,La=37817,Ia=37818,Fa=37819,Ua=37820,Na=37821,es=36492,Oa=36494,Ba=36495,Kl=36283,za=36284,Ga=36285,Va=36286,vh=3200,xh=3201,$l=0,Eh=1,Bn="",jt="srgb",Oi="srgb-linear",rs="linear",at="srgb",di=7680,Eo=519,Mh=512,Sh=513,yh=514,Jl=515,bh=516,wh=517,Th=518,Rh=519,Mo=35044,So="300 es",Sn=2e3,ss=2001;class oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ts=Math.PI/180,ka=180/Math.PI;function pr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function Ch(i,e){return(i%e+e)%e}function As(i,e,t){return(1-t)*i+t*e}function Qi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ph={DEG2RAD:ts};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,r,s,a,o,c,u){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u)}set(e,t,n,r,s,a,o,c,u){const p=this.elements;return p[0]=e,p[1]=r,p[2]=o,p[3]=t,p[4]=s,p[5]=c,p[6]=n,p[7]=a,p[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],p=n[4],_=n[7],g=n[2],x=n[5],y=n[8],w=r[0],A=r[3],m=r[6],I=r[1],P=r[4],T=r[7],z=r[2],D=r[5],U=r[8];return s[0]=a*w+o*I+c*z,s[3]=a*A+o*P+c*D,s[6]=a*m+o*T+c*U,s[1]=u*w+p*I+_*z,s[4]=u*A+p*P+_*D,s[7]=u*m+p*T+_*U,s[2]=g*w+x*I+y*z,s[5]=g*A+x*P+y*D,s[8]=g*m+x*T+y*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],p=e[8];return t*a*p-t*o*u-n*s*p+n*o*c+r*s*u-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],p=e[8],_=p*a-o*u,g=o*c-p*s,x=u*s-a*c,y=t*_+n*g+r*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/y;return e[0]=_*w,e[1]=(r*u-p*n)*w,e[2]=(o*n-r*a)*w,e[3]=g*w,e[4]=(p*t-r*c)*w,e[5]=(r*s-o*t)*w,e[6]=x*w,e[7]=(n*c-u*t)*w,e[8]=(a*t-n*s)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(vs.makeScale(e,t)),this}rotate(e){return this.premultiply(vs.makeRotation(-e)),this}translate(e,t){return this.premultiply(vs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vs=new We;function ec(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function as(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dh(){const i=as("canvas");return i.style.display="block",i}const yo={};function ns(i){i in yo||(yo[i]=!0,console.warn(i))}function Lh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Ih(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Fh(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const bo=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wo=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uh(){const i={enabled:!0,workingColorSpace:Oi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===at&&(r.r=yn(r.r),r.g=yn(r.g),r.b=yn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(r.r=Di(r.r),r.g=Di(r.g),r.b=Di(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Bn?rs:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Oi]:{primaries:e,whitePoint:n,transfer:rs,toXYZ:bo,fromXYZ:wo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:n,transfer:at,toXYZ:bo,fromXYZ:wo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),i}const tt=Uh();function yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Di(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let fi;class Nh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fi===void 0&&(fi=as("canvas")),fi.width=e.width,fi.height=e.height;const r=fi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=fi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=as("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=yn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yn(t[n]/255)*255):t[n]=yn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Oh=0;class no{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=pr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(xs(r[a].image)):s.push(xs(r[a]))}else s=xs(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function xs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bh=0;class Ht extends oi{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=ei,r=ei,s=cn,a=ti,o=rn,c=bn,u=Ht.DEFAULT_ANISOTROPY,p=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=pr(),this.name="",this.source=new no(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pa:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pa:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Vl;Ht.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,u=c[0],p=c[4],_=c[8],g=c[1],x=c[5],y=c[9],w=c[2],A=c[6],m=c[10];if(Math.abs(p-g)<.01&&Math.abs(_-w)<.01&&Math.abs(y-A)<.01){if(Math.abs(p+g)<.1&&Math.abs(_+w)<.1&&Math.abs(y+A)<.1&&Math.abs(u+x+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(u+1)/2,T=(x+1)/2,z=(m+1)/2,D=(p+g)/4,U=(_+w)/4,k=(y+A)/4;return P>T&&P>z?P<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(P),r=D/n,s=U/n):T>z?T<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),n=D/r,s=k/r):z<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(z),n=U/s,r=k/s),this.set(n,r,s,t),this}let I=Math.sqrt((A-y)*(A-y)+(_-w)*(_-w)+(g-p)*(g-p));return Math.abs(I)<.001&&(I=1),this.x=(A-y)/I,this.y=(_-w)/I,this.z=(g-p)/I,this.w=Math.acos((u+x+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zh extends oi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ht(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new no(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends zh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class tc extends Ht{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gh extends Ht{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class si{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],u=n[r+1],p=n[r+2],_=n[r+3];const g=s[a+0],x=s[a+1],y=s[a+2],w=s[a+3];if(o===0){e[t+0]=c,e[t+1]=u,e[t+2]=p,e[t+3]=_;return}if(o===1){e[t+0]=g,e[t+1]=x,e[t+2]=y,e[t+3]=w;return}if(_!==w||c!==g||u!==x||p!==y){let A=1-o;const m=c*g+u*x+p*y+_*w,I=m>=0?1:-1,P=1-m*m;if(P>Number.EPSILON){const z=Math.sqrt(P),D=Math.atan2(z,m*I);A=Math.sin(A*D)/z,o=Math.sin(o*D)/z}const T=o*I;if(c=c*A+g*T,u=u*A+x*T,p=p*A+y*T,_=_*A+w*T,A===1-o){const z=1/Math.sqrt(c*c+u*u+p*p+_*_);c*=z,u*=z,p*=z,_*=z}}e[t]=c,e[t+1]=u,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],u=n[r+2],p=n[r+3],_=s[a],g=s[a+1],x=s[a+2],y=s[a+3];return e[t]=o*y+p*_+c*x-u*g,e[t+1]=c*y+p*g+u*_-o*x,e[t+2]=u*y+p*x+o*g-c*_,e[t+3]=p*y-o*_-c*g-u*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(n/2),p=o(r/2),_=o(s/2),g=c(n/2),x=c(r/2),y=c(s/2);switch(a){case"XYZ":this._x=g*p*_+u*x*y,this._y=u*x*_-g*p*y,this._z=u*p*y+g*x*_,this._w=u*p*_-g*x*y;break;case"YXZ":this._x=g*p*_+u*x*y,this._y=u*x*_-g*p*y,this._z=u*p*y-g*x*_,this._w=u*p*_+g*x*y;break;case"ZXY":this._x=g*p*_-u*x*y,this._y=u*x*_+g*p*y,this._z=u*p*y+g*x*_,this._w=u*p*_-g*x*y;break;case"ZYX":this._x=g*p*_-u*x*y,this._y=u*x*_+g*p*y,this._z=u*p*y-g*x*_,this._w=u*p*_+g*x*y;break;case"YZX":this._x=g*p*_+u*x*y,this._y=u*x*_+g*p*y,this._z=u*p*y-g*x*_,this._w=u*p*_-g*x*y;break;case"XZY":this._x=g*p*_-u*x*y,this._y=u*x*_-g*p*y,this._z=u*p*y+g*x*_,this._w=u*p*_+g*x*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],u=t[2],p=t[6],_=t[10],g=n+o+_;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(p-c)*x,this._y=(s-u)*x,this._z=(a-r)*x}else if(n>o&&n>_){const x=2*Math.sqrt(1+n-o-_);this._w=(p-c)/x,this._x=.25*x,this._y=(r+a)/x,this._z=(s+u)/x}else if(o>_){const x=2*Math.sqrt(1+o-n-_);this._w=(s-u)/x,this._x=(r+a)/x,this._y=.25*x,this._z=(c+p)/x}else{const x=2*Math.sqrt(1+_-n-o);this._w=(a-r)/x,this._x=(s+u)/x,this._y=(c+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,u=t._z,p=t._w;return this._x=n*p+a*o+r*u-s*c,this._y=r*p+a*c+s*o-n*u,this._z=s*p+a*u+n*c-r*o,this._w=a*p-n*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const x=1-t;return this._w=x*a+t*this._w,this._x=x*n+t*this._x,this._y=x*r+t*this._y,this._z=x*s+t*this._z,this.normalize(),this}const u=Math.sqrt(c),p=Math.atan2(u,o),_=Math.sin((1-t)*p)/u,g=Math.sin(t*p)/u;return this._w=a*_+this._w*g,this._x=n*_+this._x*g,this._y=r*_+this._y*g,this._z=s*_+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(To.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(To.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*n),p=2*(o*t-s*r),_=2*(s*n-a*t);return this.x=t+c*u+a*_-o*p,this.y=n+c*p+o*u-s*_,this.z=r+c*_+s*p-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Es.copy(this).projectOnVector(e),this.sub(Es)}reflect(e){return this.sub(Es.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Es=new W,To=new si;class mr{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$t):$t.fromBufferAttribute(s,a),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wr.copy(n.boundingBox)),wr.applyMatrix4(e.matrixWorld),this.union(wr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ji),Tr.subVectors(this.max,ji),pi.subVectors(e.a,ji),mi.subVectors(e.b,ji),_i.subVectors(e.c,ji),Rn.subVectors(mi,pi),Cn.subVectors(_i,mi),Wn.subVectors(pi,_i);let t=[0,-Rn.z,Rn.y,0,-Cn.z,Cn.y,0,-Wn.z,Wn.y,Rn.z,0,-Rn.x,Cn.z,0,-Cn.x,Wn.z,0,-Wn.x,-Rn.y,Rn.x,0,-Cn.y,Cn.x,0,-Wn.y,Wn.x,0];return!Ms(t,pi,mi,_i,Tr)||(t=[1,0,0,0,1,0,0,0,1],!Ms(t,pi,mi,_i,Tr))?!1:(Rr.crossVectors(Rn,Cn),t=[Rr.x,Rr.y,Rr.z],Ms(t,pi,mi,_i,Tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pn=[new W,new W,new W,new W,new W,new W,new W,new W],$t=new W,wr=new mr,pi=new W,mi=new W,_i=new W,Rn=new W,Cn=new W,Wn=new W,ji=new W,Tr=new W,Rr=new W,Xn=new W;function Ms(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Xn.fromArray(i,s);const o=r.x*Math.abs(Xn.x)+r.y*Math.abs(Xn.y)+r.z*Math.abs(Xn.z),c=e.dot(Xn),u=t.dot(Xn),p=n.dot(Xn);if(Math.max(-Math.max(c,u,p),Math.min(c,u,p))>o)return!1}return!0}const Vh=new mr,Zi=new W,Ss=new W;class io{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Vh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zi.subVectors(e,this.center);const t=Zi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Zi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ss.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zi.copy(e.center).add(Ss)),this.expandByPoint(Zi.copy(e.center).sub(Ss))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new W,ys=new W,Cr=new W,Pn=new W,bs=new W,Pr=new W,ws=new W;class ro{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mn.copy(this.origin).addScaledVector(this.direction,t),mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ys.copy(e).add(t).multiplyScalar(.5),Cr.copy(t).sub(e).normalize(),Pn.copy(this.origin).sub(ys);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Cr),o=Pn.dot(this.direction),c=-Pn.dot(Cr),u=Pn.lengthSq(),p=Math.abs(1-a*a);let _,g,x,y;if(p>0)if(_=a*c-o,g=a*o-c,y=s*p,_>=0)if(g>=-y)if(g<=y){const w=1/p;_*=w,g*=w,x=_*(_+a*g+2*o)+g*(a*_+g+2*c)+u}else g=s,_=Math.max(0,-(a*g+o)),x=-_*_+g*(g+2*c)+u;else g=-s,_=Math.max(0,-(a*g+o)),x=-_*_+g*(g+2*c)+u;else g<=-y?(_=Math.max(0,-(-a*s+o)),g=_>0?-s:Math.min(Math.max(-s,-c),s),x=-_*_+g*(g+2*c)+u):g<=y?(_=0,g=Math.min(Math.max(-s,-c),s),x=g*(g+2*c)+u):(_=Math.max(0,-(a*s+o)),g=_>0?s:Math.min(Math.max(-s,-c),s),x=-_*_+g*(g+2*c)+u);else g=a>0?-s:s,_=Math.max(0,-(a*g+o)),x=-_*_+g*(g+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(ys).addScaledVector(Cr,g),x}intersectSphere(e,t){mn.subVectors(e.center,this.origin);const n=mn.dot(this.direction),r=mn.dot(mn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const u=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,g=this.origin;return u>=0?(n=(e.min.x-g.x)*u,r=(e.max.x-g.x)*u):(n=(e.max.x-g.x)*u,r=(e.min.x-g.x)*u),p>=0?(s=(e.min.y-g.y)*p,a=(e.max.y-g.y)*p):(s=(e.max.y-g.y)*p,a=(e.min.y-g.y)*p),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),_>=0?(o=(e.min.z-g.z)*_,c=(e.max.z-g.z)*_):(o=(e.max.z-g.z)*_,c=(e.min.z-g.z)*_),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,mn)!==null}intersectTriangle(e,t,n,r,s){bs.subVectors(t,e),Pr.subVectors(n,e),ws.crossVectors(bs,Pr);let a=this.direction.dot(ws),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pn.subVectors(this.origin,e);const c=o*this.direction.dot(Pr.crossVectors(Pn,Pr));if(c<0)return null;const u=o*this.direction.dot(bs.cross(Pn));if(u<0||c+u>a)return null;const p=-o*Pn.dot(ws);return p<0?null:this.at(p/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,n,r,s,a,o,c,u,p,_,g,x,y,w,A){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u,p,_,g,x,y,w,A)}set(e,t,n,r,s,a,o,c,u,p,_,g,x,y,w,A){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=u,m[6]=p,m[10]=_,m[14]=g,m[3]=x,m[7]=y,m[11]=w,m[15]=A,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/gi.setFromMatrixColumn(e,0).length(),s=1/gi.setFromMatrixColumn(e,1).length(),a=1/gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),u=Math.sin(r),p=Math.cos(s),_=Math.sin(s);if(e.order==="XYZ"){const g=a*p,x=a*_,y=o*p,w=o*_;t[0]=c*p,t[4]=-c*_,t[8]=u,t[1]=x+y*u,t[5]=g-w*u,t[9]=-o*c,t[2]=w-g*u,t[6]=y+x*u,t[10]=a*c}else if(e.order==="YXZ"){const g=c*p,x=c*_,y=u*p,w=u*_;t[0]=g+w*o,t[4]=y*o-x,t[8]=a*u,t[1]=a*_,t[5]=a*p,t[9]=-o,t[2]=x*o-y,t[6]=w+g*o,t[10]=a*c}else if(e.order==="ZXY"){const g=c*p,x=c*_,y=u*p,w=u*_;t[0]=g-w*o,t[4]=-a*_,t[8]=y+x*o,t[1]=x+y*o,t[5]=a*p,t[9]=w-g*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const g=a*p,x=a*_,y=o*p,w=o*_;t[0]=c*p,t[4]=y*u-x,t[8]=g*u+w,t[1]=c*_,t[5]=w*u+g,t[9]=x*u-y,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const g=a*c,x=a*u,y=o*c,w=o*u;t[0]=c*p,t[4]=w-g*_,t[8]=y*_+x,t[1]=_,t[5]=a*p,t[9]=-o*p,t[2]=-u*p,t[6]=x*_+y,t[10]=g-w*_}else if(e.order==="XZY"){const g=a*c,x=a*u,y=o*c,w=o*u;t[0]=c*p,t[4]=-_,t[8]=u*p,t[1]=g*_+w,t[5]=a*p,t[9]=x*_-y,t[2]=y*_-x,t[6]=o*p,t[10]=w*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kh,e,Hh)}lookAt(e,t,n){const r=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Dn.crossVectors(n,Yt),Dn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Dn.crossVectors(n,Yt)),Dn.normalize(),Dr.crossVectors(Yt,Dn),r[0]=Dn.x,r[4]=Dr.x,r[8]=Yt.x,r[1]=Dn.y,r[5]=Dr.y,r[9]=Yt.y,r[2]=Dn.z,r[6]=Dr.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],p=n[1],_=n[5],g=n[9],x=n[13],y=n[2],w=n[6],A=n[10],m=n[14],I=n[3],P=n[7],T=n[11],z=n[15],D=r[0],U=r[4],k=r[8],C=r[12],b=r[1],N=r[5],K=r[9],X=r[13],Y=r[2],oe=r[6],$=r[10],he=r[14],Q=r[3],fe=r[7],ie=r[11],pe=r[15];return s[0]=a*D+o*b+c*Y+u*Q,s[4]=a*U+o*N+c*oe+u*fe,s[8]=a*k+o*K+c*$+u*ie,s[12]=a*C+o*X+c*he+u*pe,s[1]=p*D+_*b+g*Y+x*Q,s[5]=p*U+_*N+g*oe+x*fe,s[9]=p*k+_*K+g*$+x*ie,s[13]=p*C+_*X+g*he+x*pe,s[2]=y*D+w*b+A*Y+m*Q,s[6]=y*U+w*N+A*oe+m*fe,s[10]=y*k+w*K+A*$+m*ie,s[14]=y*C+w*X+A*he+m*pe,s[3]=I*D+P*b+T*Y+z*Q,s[7]=I*U+P*N+T*oe+z*fe,s[11]=I*k+P*K+T*$+z*ie,s[15]=I*C+P*X+T*he+z*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],p=e[2],_=e[6],g=e[10],x=e[14],y=e[3],w=e[7],A=e[11],m=e[15];return y*(+s*c*_-r*u*_-s*o*g+n*u*g+r*o*x-n*c*x)+w*(+t*c*x-t*u*g+s*a*g-r*a*x+r*u*p-s*c*p)+A*(+t*u*_-t*o*x-s*a*_+n*a*x+s*o*p-n*u*p)+m*(-r*o*p-t*c*_+t*o*g+r*a*_-n*a*g+n*c*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],p=e[8],_=e[9],g=e[10],x=e[11],y=e[12],w=e[13],A=e[14],m=e[15],I=_*A*u-w*g*u+w*c*x-o*A*x-_*c*m+o*g*m,P=y*g*u-p*A*u-y*c*x+a*A*x+p*c*m-a*g*m,T=p*w*u-y*_*u+y*o*x-a*w*x-p*o*m+a*_*m,z=y*_*c-p*w*c-y*o*g+a*w*g+p*o*A-a*_*A,D=t*I+n*P+r*T+s*z;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/D;return e[0]=I*U,e[1]=(w*g*s-_*A*s-w*r*x+n*A*x+_*r*m-n*g*m)*U,e[2]=(o*A*s-w*c*s+w*r*u-n*A*u-o*r*m+n*c*m)*U,e[3]=(_*c*s-o*g*s-_*r*u+n*g*u+o*r*x-n*c*x)*U,e[4]=P*U,e[5]=(p*A*s-y*g*s+y*r*x-t*A*x-p*r*m+t*g*m)*U,e[6]=(y*c*s-a*A*s-y*r*u+t*A*u+a*r*m-t*c*m)*U,e[7]=(a*g*s-p*c*s+p*r*u-t*g*u-a*r*x+t*c*x)*U,e[8]=T*U,e[9]=(y*_*s-p*w*s-y*n*x+t*w*x+p*n*m-t*_*m)*U,e[10]=(a*w*s-y*o*s+y*n*u-t*w*u-a*n*m+t*o*m)*U,e[11]=(p*o*s-a*_*s-p*n*u+t*_*u+a*n*x-t*o*x)*U,e[12]=z*U,e[13]=(p*w*r-y*_*r+y*n*g-t*w*g-p*n*A+t*_*A)*U,e[14]=(y*o*r-a*w*r-y*n*c+t*w*c+a*n*A-t*o*A)*U,e[15]=(a*_*r-p*o*r+p*n*c-t*_*c-a*n*g+t*o*g)*U,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,u=s*a,p=s*o;return this.set(u*a+n,u*o-r*c,u*c+r*o,0,u*o+r*c,p*o+n,p*c-r*a,0,u*c-r*o,p*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,u=s+s,p=a+a,_=o+o,g=s*u,x=s*p,y=s*_,w=a*p,A=a*_,m=o*_,I=c*u,P=c*p,T=c*_,z=n.x,D=n.y,U=n.z;return r[0]=(1-(w+m))*z,r[1]=(x+T)*z,r[2]=(y-P)*z,r[3]=0,r[4]=(x-T)*D,r[5]=(1-(g+m))*D,r[6]=(A+I)*D,r[7]=0,r[8]=(y+P)*U,r[9]=(A-I)*U,r[10]=(1-(g+w))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=gi.set(r[0],r[1],r[2]).length();const a=gi.set(r[4],r[5],r[6]).length(),o=gi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Jt.copy(this);const u=1/s,p=1/a,_=1/o;return Jt.elements[0]*=u,Jt.elements[1]*=u,Jt.elements[2]*=u,Jt.elements[4]*=p,Jt.elements[5]*=p,Jt.elements[6]*=p,Jt.elements[8]*=_,Jt.elements[9]*=_,Jt.elements[10]*=_,t.setFromRotationMatrix(Jt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Sn){const c=this.elements,u=2*s/(t-e),p=2*s/(n-r),_=(t+e)/(t-e),g=(n+r)/(n-r);let x,y;if(o===Sn)x=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===ss)x=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=_,c[12]=0,c[1]=0,c[5]=p,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Sn){const c=this.elements,u=1/(t-e),p=1/(n-r),_=1/(a-s),g=(t+e)*u,x=(n+r)*p;let y,w;if(o===Sn)y=(a+s)*_,w=-2*_;else if(o===ss)y=s*_,w=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-g,c[1]=0,c[5]=2*p,c[9]=0,c[13]=-x,c[2]=0,c[6]=0,c[10]=w,c[14]=-y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gi=new W,Jt=new pt,kh=new W(0,0,0),Hh=new W(1,1,1),Dn=new W,Dr=new W,Yt=new W,Ro=new pt,Co=new si;class un{constructor(e=0,t=0,n=0,r=un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],p=r[9],_=r[2],g=r[6],x=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(g,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,x),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-_,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ke(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,u),this._y=Math.atan2(-_,s)):(this._x=0,this._y=Math.atan2(o,x));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(g,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ro.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ro,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Co.setFromEuler(this),this.setFromQuaternion(Co,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class so{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wh=0;const Po=new W,Ai=new si,_n=new pt,Lr=new W,Ki=new W,Xh=new W,Yh=new si,Do=new W(1,0,0),Lo=new W(0,1,0),Io=new W(0,0,1),Fo={type:"added"},qh={type:"removed"},vi={type:"childadded",child:null},Ts={type:"childremoved",child:null};class Ot extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new W,t=new un,n=new si,r=new W(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new We}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new so,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis(Do,e)}rotateY(e){return this.rotateOnAxis(Lo,e)}rotateZ(e){return this.rotateOnAxis(Io,e)}translateOnAxis(e,t){return Po.copy(e).applyQuaternion(this.quaternion),this.position.add(Po.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Do,e)}translateY(e){return this.translateOnAxis(Lo,e)}translateZ(e){return this.translateOnAxis(Io,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Lr.copy(e):Lr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Ki,Lr,this.up):_n.lookAt(Lr,Ki,this.up),this.quaternion.setFromRotationMatrix(_n),r&&(_n.extractRotation(r.matrixWorld),Ai.setFromRotationMatrix(_n),this.quaternion.premultiply(Ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fo),vi.child=e,this.dispatchEvent(vi),vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qh),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fo),vi.child=e,this.dispatchEvent(vi),vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,e,Xh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,Yh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,p=c.length;u<p;u++){const _=c[u];s(e.shapes,_)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),u=a(e.textures),p=a(e.images),_=a(e.shapes),g=a(e.skeletons),x=a(e.animations),y=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),p.length>0&&(n.images=p),_.length>0&&(n.shapes=_),g.length>0&&(n.skeletons=g),x.length>0&&(n.animations=x),y.length>0&&(n.nodes=y)}return n.object=r,n;function a(o){const c=[];for(const u in o){const p=o[u];delete p.metadata,c.push(p)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Ot.DEFAULT_UP=new W(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new W,gn=new W,Rs=new W,An=new W,xi=new W,Ei=new W,Uo=new W,Cs=new W,Ps=new W,Ds=new W,Ls=new _t,Is=new _t,Fs=new _t;class nn{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),en.subVectors(e,t),r.cross(en);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){en.subVectors(r,t),gn.subVectors(n,t),Rs.subVectors(e,t);const a=en.dot(en),o=en.dot(gn),c=en.dot(Rs),u=gn.dot(gn),p=gn.dot(Rs),_=a*u-o*o;if(_===0)return s.set(0,0,0),null;const g=1/_,x=(u*c-o*p)*g,y=(a*p-o*c)*g;return s.set(1-x-y,y,x)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,An)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,An.x),c.addScaledVector(a,An.y),c.addScaledVector(o,An.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Ls.setScalar(0),Is.setScalar(0),Fs.setScalar(0),Ls.fromBufferAttribute(e,t),Is.fromBufferAttribute(e,n),Fs.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ls,s.x),a.addScaledVector(Is,s.y),a.addScaledVector(Fs,s.z),a}static isFrontFacing(e,t,n,r){return en.subVectors(n,t),gn.subVectors(e,t),en.cross(gn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),en.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return nn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;xi.subVectors(r,n),Ei.subVectors(s,n),Cs.subVectors(e,n);const c=xi.dot(Cs),u=Ei.dot(Cs);if(c<=0&&u<=0)return t.copy(n);Ps.subVectors(e,r);const p=xi.dot(Ps),_=Ei.dot(Ps);if(p>=0&&_<=p)return t.copy(r);const g=c*_-p*u;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(xi,a);Ds.subVectors(e,s);const x=xi.dot(Ds),y=Ei.dot(Ds);if(y>=0&&x<=y)return t.copy(s);const w=x*u-c*y;if(w<=0&&u>=0&&y<=0)return o=u/(u-y),t.copy(n).addScaledVector(Ei,o);const A=p*y-x*_;if(A<=0&&_-p>=0&&x-y>=0)return Uo.subVectors(s,r),o=(_-p)/(_-p+(x-y)),t.copy(r).addScaledVector(Uo,o);const m=1/(A+w+g);return a=w*m,o=g*m,t.copy(n).addScaledVector(xi,a).addScaledVector(Ei,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function Us(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class it{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=tt.workingColorSpace){if(e=Ch(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Us(a,s,e+1/3),this.g=Us(a,s,e),this.b=Us(a,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,t=jt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const n=nc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yn(e.r),this.g=yn(e.g),this.b=yn(e.b),this}copyLinearToSRGB(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return tt.fromWorkingColorSpace(Ut.copy(this),e),Math.round(Ke(Ut.r*255,0,255))*65536+Math.round(Ke(Ut.g*255,0,255))*256+Math.round(Ke(Ut.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Ut.copy(this),t);const n=Ut.r,r=Ut.g,s=Ut.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,u;const p=(o+a)/2;if(o===a)c=0,u=0;else{const _=a-o;switch(u=p<=.5?_/(a+o):_/(2-a-o),a){case n:c=(r-s)/_+(r<s?6:0);break;case r:c=(s-n)/_+2;break;case s:c=(n-r)/_+4;break}c/=6}return e.h=c,e.s=u,e.l=p,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=jt){tt.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,r=Ut.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ln),this.setHSL(Ln.h+e,Ln.s+t,Ln.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ln),e.getHSL(Ir);const n=As(Ln.h,Ir.h,t),r=As(Ln.s,Ir.s,t),s=As(Ln.l,Ir.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new it;it.NAMES=nc;let Qh=0;class _r extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=pr(),this.name="",this.type="Material",this.blending=Pi,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ia,this.blendDst=ra,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ia&&(n.blendSrc=this.blendSrc),this.blendDst!==ra&&(n.blendDst=this.blendDst),this.blendEquation!==$n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ic extends _r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new W,Fr=new ke;let jh=0;class an{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mo,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.applyMatrix3(e),this.setXY(t,Fr.x,Fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),r=Gt(r,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mo&&(e.usage=this.usage),e}}class rc extends an{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class sc extends an{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ni extends an{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Zh=0;const Qt=new pt,Ns=new Ot,Mi=new W,qt=new mr,$i=new mr,Lt=new W;class li extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=pr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ec(e)?sc:rc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return Ns.lookAt(e),Ns.updateMatrix(),this.applyMatrix4(Ns.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ni(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new io);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];$i.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(qt.min,$i.min),qt.expandByPoint(Lt),Lt.addVectors(qt.max,$i.max),qt.expandByPoint(Lt)):(qt.expandByPoint($i.min),qt.expandByPoint($i.max))}qt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Lt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let u=0,p=o.count;u<p;u++)Lt.fromBufferAttribute(o,u),c&&(Mi.fromBufferAttribute(e,u),Lt.add(Mi)),r=Math.max(r,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let k=0;k<n.count;k++)o[k]=new W,c[k]=new W;const u=new W,p=new W,_=new W,g=new ke,x=new ke,y=new ke,w=new W,A=new W;function m(k,C,b){u.fromBufferAttribute(n,k),p.fromBufferAttribute(n,C),_.fromBufferAttribute(n,b),g.fromBufferAttribute(s,k),x.fromBufferAttribute(s,C),y.fromBufferAttribute(s,b),p.sub(u),_.sub(u),x.sub(g),y.sub(g);const N=1/(x.x*y.y-y.x*x.y);isFinite(N)&&(w.copy(p).multiplyScalar(y.y).addScaledVector(_,-x.y).multiplyScalar(N),A.copy(_).multiplyScalar(x.x).addScaledVector(p,-y.x).multiplyScalar(N),o[k].add(w),o[C].add(w),o[b].add(w),c[k].add(A),c[C].add(A),c[b].add(A))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let k=0,C=I.length;k<C;++k){const b=I[k],N=b.start,K=b.count;for(let X=N,Y=N+K;X<Y;X+=3)m(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const P=new W,T=new W,z=new W,D=new W;function U(k){z.fromBufferAttribute(r,k),D.copy(z);const C=o[k];P.copy(C),P.sub(z.multiplyScalar(z.dot(C))).normalize(),T.crossVectors(D,C);const N=T.dot(c[k])<0?-1:1;a.setXYZW(k,P.x,P.y,P.z,N)}for(let k=0,C=I.length;k<C;++k){const b=I[k],N=b.start,K=b.count;for(let X=N,Y=N+K;X<Y;X+=3)U(e.getX(X+0)),U(e.getX(X+1)),U(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,x=n.count;g<x;g++)n.setXYZ(g,0,0,0);const r=new W,s=new W,a=new W,o=new W,c=new W,u=new W,p=new W,_=new W;if(e)for(let g=0,x=e.count;g<x;g+=3){const y=e.getX(g+0),w=e.getX(g+1),A=e.getX(g+2);r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,w),a.fromBufferAttribute(t,A),p.subVectors(a,s),_.subVectors(r,s),p.cross(_),o.fromBufferAttribute(n,y),c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,A),o.add(p),c.add(p),u.add(p),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(w,c.x,c.y,c.z),n.setXYZ(A,u.x,u.y,u.z)}else for(let g=0,x=t.count;g<x;g+=3)r.fromBufferAttribute(t,g+0),s.fromBufferAttribute(t,g+1),a.fromBufferAttribute(t,g+2),p.subVectors(a,s),_.subVectors(r,s),p.cross(_),n.setXYZ(g+0,p.x,p.y,p.z),n.setXYZ(g+1,p.x,p.y,p.z),n.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,c){const u=o.array,p=o.itemSize,_=o.normalized,g=new u.constructor(c.length*p);let x=0,y=0;for(let w=0,A=c.length;w<A;w++){o.isInterleavedBufferAttribute?x=c[w]*o.data.stride+o.offset:x=c[w]*p;for(let m=0;m<p;m++)g[y++]=u[x++]}return new an(g,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new li,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=e(c,n);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let p=0,_=u.length;p<_;p++){const g=u[p],x=e(g,n);c.push(x)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],p=[];for(let _=0,g=u.length;_<g;_++){const x=u[_];p.push(x.toJSON(e.data))}p.length>0&&(r[c]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const u in r){const p=r[u];this.setAttribute(u,p.clone(t))}const s=e.morphAttributes;for(const u in s){const p=[],_=s[u];for(let g=0,x=_.length;g<x;g++)p.push(_[g].clone(t));this.morphAttributes[u]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,p=a.length;u<p;u++){const _=a[u];this.addGroup(_.start,_.count,_.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const No=new pt,Yn=new ro,Ur=new io,Oo=new W,Nr=new W,Or=new W,Br=new W,Os=new W,zr=new W,Bo=new W,Gr=new W;class hn extends Ot{constructor(e=new li,t=new ic){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){zr.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const p=o[c],_=s[c];p!==0&&(Os.fromBufferAttribute(_,e),a?zr.addScaledVector(Os,p):zr.addScaledVector(Os.sub(t),p))}t.add(zr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(s),Yn.copy(e.ray).recast(e.near),!(Ur.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(Ur,Oo)===null||Yn.origin.distanceToSquared(Oo)>(e.far-e.near)**2))&&(No.copy(s).invert(),Yn.copy(e.ray).applyMatrix4(No),!(n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,p=s.attributes.uv1,_=s.attributes.normal,g=s.groups,x=s.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,w=g.length;y<w;y++){const A=g[y],m=a[A.materialIndex],I=Math.max(A.start,x.start),P=Math.min(o.count,Math.min(A.start+A.count,x.start+x.count));for(let T=I,z=P;T<z;T+=3){const D=o.getX(T),U=o.getX(T+1),k=o.getX(T+2);r=Vr(this,m,e,n,u,p,_,D,U,k),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=A.materialIndex,t.push(r))}}else{const y=Math.max(0,x.start),w=Math.min(o.count,x.start+x.count);for(let A=y,m=w;A<m;A+=3){const I=o.getX(A),P=o.getX(A+1),T=o.getX(A+2);r=Vr(this,a,e,n,u,p,_,I,P,T),r&&(r.faceIndex=Math.floor(A/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let y=0,w=g.length;y<w;y++){const A=g[y],m=a[A.materialIndex],I=Math.max(A.start,x.start),P=Math.min(c.count,Math.min(A.start+A.count,x.start+x.count));for(let T=I,z=P;T<z;T+=3){const D=T,U=T+1,k=T+2;r=Vr(this,m,e,n,u,p,_,D,U,k),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=A.materialIndex,t.push(r))}}else{const y=Math.max(0,x.start),w=Math.min(c.count,x.start+x.count);for(let A=y,m=w;A<m;A+=3){const I=A,P=A+1,T=A+2;r=Vr(this,a,e,n,u,p,_,I,P,T),r&&(r.faceIndex=Math.floor(A/3),t.push(r))}}}}function Kh(i,e,t,n,r,s,a,o){let c;if(e.side===kt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Vn,o),c===null)return null;Gr.copy(o),Gr.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Gr);return u<t.near||u>t.far?null:{distance:u,point:Gr.clone(),object:i}}function Vr(i,e,t,n,r,s,a,o,c,u){i.getVertexPosition(o,Nr),i.getVertexPosition(c,Or),i.getVertexPosition(u,Br);const p=Kh(i,e,t,n,Nr,Or,Br,Bo);if(p){const _=new W;nn.getBarycoord(Bo,Nr,Or,Br,_),r&&(p.uv=nn.getInterpolatedAttribute(r,o,c,u,_,new ke)),s&&(p.uv1=nn.getInterpolatedAttribute(s,o,c,u,_,new ke)),a&&(p.normal=nn.getInterpolatedAttribute(a,o,c,u,_,new W),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const g={a:o,b:c,c:u,normal:new W,materialIndex:0};nn.getNormal(Nr,Or,Br,g.normal),p.face=g,p.barycoord=_}return p}class gr extends li{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],p=[],_=[];let g=0,x=0;y("z","y","x",-1,-1,n,t,e,a,s,0),y("z","y","x",1,-1,n,t,-e,a,s,1),y("x","z","y",1,1,e,n,t,r,a,2),y("x","z","y",1,-1,e,n,-t,r,a,3),y("x","y","z",1,-1,e,t,n,r,s,4),y("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ni(u,3)),this.setAttribute("normal",new ni(p,3)),this.setAttribute("uv",new ni(_,2));function y(w,A,m,I,P,T,z,D,U,k,C){const b=T/U,N=z/k,K=T/2,X=z/2,Y=D/2,oe=U+1,$=k+1;let he=0,Q=0;const fe=new W;for(let ie=0;ie<$;ie++){const pe=ie*N-X;for(let Oe=0;Oe<oe;Oe++){const Xe=Oe*b-K;fe[w]=Xe*I,fe[A]=pe*P,fe[m]=Y,u.push(fe.x,fe.y,fe.z),fe[w]=0,fe[A]=0,fe[m]=D>0?1:-1,p.push(fe.x,fe.y,fe.z),_.push(Oe/U),_.push(1-ie/k),he+=1}}for(let ie=0;ie<k;ie++)for(let pe=0;pe<U;pe++){const Oe=g+pe+oe*ie,Xe=g+pe+oe*(ie+1),Z=g+(pe+1)+oe*(ie+1),le=g+(pe+1)+oe*ie;c.push(Oe,Xe,le),c.push(Xe,Z,le),Q+=6}o.addGroup(x,Q,C),x+=Q,g+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function zt(i){const e={};for(let t=0;t<i.length;t++){const n=Bi(i[t]);for(const r in n)e[r]=n[r]}return e}function $h(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ac(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const Jh={clone:Bi,merge:zt};var eu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends _r{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eu,this.fragmentShader=tu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bi(e.uniforms),this.uniformsGroups=$h(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class oc extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Sn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const In=new W,zo=new ke,Go=new ke;class Zt extends oc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ka*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ka*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(In.x,In.y).multiplyScalar(-e/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-e/In.z)}getViewSize(e,t){return this.getViewBounds(e,zo,Go),t.subVectors(Go,zo)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ts*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/u,r*=a.width/c,n*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Si=-90,yi=1;class nu extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zt(Si,yi,e,t);r.layers=this.layers,this.add(r);const s=new Zt(Si,yi,e,t);s.layers=this.layers,this.add(s);const a=new Zt(Si,yi,e,t);a.layers=this.layers,this.add(a);const o=new Zt(Si,yi,e,t);o.layers=this.layers,this.add(o);const c=new Zt(Si,yi,e,t);c.layers=this.layers,this.add(c);const u=new Zt(Si,yi,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const u of t)this.remove(u);if(e===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,p]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,u),n.texture.generateMipmaps=w,e.setRenderTarget(n,5,r),e.render(t,p),e.setRenderTarget(_,g,x),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class lc extends Ht{constructor(e=[],t=Ui,n,r,s,a,o,c,u,p){super(e,t,n,r,s,a,o,c,u,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iu extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new lc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new gr(5,5,5),s=new kn({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:zn});s.uniforms.tEquirect.value=t;const a=new hn(r,s),o=t.minFilter;return t.minFilter===ti&&(t.minFilter=cn),new nu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class kr extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ru={type:"move"};class Bs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const w of e.hand.values()){const A=t.getJointPose(w,n),m=this._getHandJoint(u,w);A!==null&&(m.matrix.fromArray(A.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=A.radius),m.visible=A!==null}const p=u.joints["index-finger-tip"],_=u.joints["thumb-tip"],g=p.position.distanceTo(_.position),x=.02,y=.005;u.inputState.pinching&&g>x+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&g<=x-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ru)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new kr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class su extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const zs=new W,au=new W,ou=new We;class On{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=zs.subVectors(n,t).cross(au.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(zs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ou.getNormalMatrix(e),r=this.coplanarPoint(zs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new io,Hr=new W;class ao{constructor(e=new On,t=new On,n=new On,r=new On,s=new On,a=new On){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Sn){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],u=r[4],p=r[5],_=r[6],g=r[7],x=r[8],y=r[9],w=r[10],A=r[11],m=r[12],I=r[13],P=r[14],T=r[15];if(n[0].setComponents(c-s,g-u,A-x,T-m).normalize(),n[1].setComponents(c+s,g+u,A+x,T+m).normalize(),n[2].setComponents(c+a,g+p,A+y,T+I).normalize(),n[3].setComponents(c-a,g-p,A-y,T-I).normalize(),n[4].setComponents(c-o,g-_,A-w,T-P).normalize(),t===Sn)n[5].setComponents(c+o,g+_,A+w,T+P).normalize();else if(t===ss)n[5].setComponents(o,_,w,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(e){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Hr.x=r.normal.x>0?e.max.x:e.min.x,Hr.y=r.normal.y>0?e.max.y:e.min.y,Hr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cc extends Ht{constructor(e,t,n=ii,r,s,a,o=sn,c=sn,u,p=or){if(p!==or&&p!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,a,o,c,p,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new no(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class us extends li{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),u=o+1,p=c+1,_=e/o,g=t/c,x=[],y=[],w=[],A=[];for(let m=0;m<p;m++){const I=m*g-a;for(let P=0;P<u;P++){const T=P*_-s;y.push(T,-I,0),w.push(0,0,1),A.push(P/o),A.push(1-m/c)}}for(let m=0;m<c;m++)for(let I=0;I<o;I++){const P=I+u*m,T=I+u*(m+1),z=I+1+u*(m+1),D=I+1+u*m;x.push(P,T,D),x.push(T,z,D)}this.setIndex(x),this.setAttribute("position",new ni(y,3)),this.setAttribute("normal",new ni(w,3)),this.setAttribute("uv",new ni(A,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.width,e.height,e.widthSegments,e.heightSegments)}}class lu extends _r{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$l,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cu extends _r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hu extends _r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class hc extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Gs=new pt,Vo=new W,ko=new W;class uu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ao,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Vo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vo),ko.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ko),t.updateMatrixWorld(),Gs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class uc extends oc{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=p*this.view.offsetY,c=o-p*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class du extends uu{constructor(){super(new uc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fu extends hc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new du}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class pu extends hc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class mu extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const Ho=new pt;class _u{constructor(e,t,n=0,r=1/0){this.ray=new ro(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new so,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ho.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ho),this}intersectObject(e,t=!0,n=[]){return Ha(e,this,n,t),n.sort(Wo),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Ha(e[r],this,n,t);return n.sort(Wo),n}}function Wo(i,e){return i.distance-e.distance}function Ha(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Ha(s[a],e,t,!0)}}class Xo{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class gu extends oi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Yo(i,e,t,n){const r=Au(n);switch(t){case Xl:return i*e;case ql:return i*e;case Ql:return i*e*2;case jl:return i*e/r.components*r.byteLength;case Ja:return i*e/r.components*r.byteLength;case Zl:return i*e*2/r.components*r.byteLength;case eo:return i*e*2/r.components*r.byteLength;case Yl:return i*e*3/r.components*r.byteLength;case rn:return i*e*4/r.components*r.byteLength;case to:return i*e*4/r.components*r.byteLength;case Zr:case Kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $r:case Jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ga:case va:return Math.max(i,16)*Math.max(e,8)/4;case _a:case Aa:return Math.max(i,8)*Math.max(e,8)/2;case xa:case Ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ya:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case wa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Pa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case La:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Na:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case es:case Oa:case Ba:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Kl:case za:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ga:case Va:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Au(i){switch(i){case bn:case kl:return{byteLength:1,components:1};case sr:case Hl:case fr:return{byteLength:2,components:1};case Ka:case $a:return{byteLength:2,components:4};case ii:case Za:case Mn:return{byteLength:4,components:1};case Wl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ja}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ja);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dc(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function vu(i){const e=new WeakMap;function t(o,c){const u=o.array,p=o.usage,_=u.byteLength,g=i.createBuffer();i.bindBuffer(c,g),i.bufferData(c,u,p),o.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:_}}function n(o,c,u){const p=c.array,_=c.updateRanges;if(i.bindBuffer(u,o),_.length===0)i.bufferSubData(u,0,p);else{_.sort((x,y)=>x.start-y.start);let g=0;for(let x=1;x<_.length;x++){const y=_[g],w=_[x];w.start<=y.start+y.count+1?y.count=Math.max(y.count,w.start+w.count-y.start):(++g,_[g]=w)}_.length=g+1;for(let x=0,y=_.length;x<y;x++){const w=_[x];i.bufferSubData(u,w.start*p.BYTES_PER_ELEMENT,p,w.start,w.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const p=e.get(o);(!p||p.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,t(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}var xu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Su=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ru=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Cu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Du=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Iu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ku=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Hu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ju=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ku=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$u=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ju=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ed=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,td=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ad=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,od=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ld=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ud=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,md=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_d=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ad=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ed=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Md=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Td=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ld=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Id=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ud=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Nd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Od=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$d=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ef=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,nf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,af=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,of=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,df=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ff=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ef=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Rf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Df=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,If=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ff=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Uf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Of=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$f=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:xu,alphahash_pars_fragment:Eu,alphamap_fragment:Mu,alphamap_pars_fragment:Su,alphatest_fragment:yu,alphatest_pars_fragment:bu,aomap_fragment:wu,aomap_pars_fragment:Tu,batching_pars_vertex:Ru,batching_vertex:Cu,begin_vertex:Pu,beginnormal_vertex:Du,bsdfs:Lu,iridescence_fragment:Iu,bumpmap_pars_fragment:Fu,clipping_planes_fragment:Uu,clipping_planes_pars_fragment:Nu,clipping_planes_pars_vertex:Ou,clipping_planes_vertex:Bu,color_fragment:zu,color_pars_fragment:Gu,color_pars_vertex:Vu,color_vertex:ku,common:Hu,cube_uv_reflection_fragment:Wu,defaultnormal_vertex:Xu,displacementmap_pars_vertex:Yu,displacementmap_vertex:qu,emissivemap_fragment:Qu,emissivemap_pars_fragment:ju,colorspace_fragment:Zu,colorspace_pars_fragment:Ku,envmap_fragment:$u,envmap_common_pars_fragment:Ju,envmap_pars_fragment:ed,envmap_pars_vertex:td,envmap_physical_pars_fragment:dd,envmap_vertex:nd,fog_vertex:id,fog_pars_vertex:rd,fog_fragment:sd,fog_pars_fragment:ad,gradientmap_pars_fragment:od,lightmap_pars_fragment:ld,lights_lambert_fragment:cd,lights_lambert_pars_fragment:hd,lights_pars_begin:ud,lights_toon_fragment:fd,lights_toon_pars_fragment:pd,lights_phong_fragment:md,lights_phong_pars_fragment:_d,lights_physical_fragment:gd,lights_physical_pars_fragment:Ad,lights_fragment_begin:vd,lights_fragment_maps:xd,lights_fragment_end:Ed,logdepthbuf_fragment:Md,logdepthbuf_pars_fragment:Sd,logdepthbuf_pars_vertex:yd,logdepthbuf_vertex:bd,map_fragment:wd,map_pars_fragment:Td,map_particle_fragment:Rd,map_particle_pars_fragment:Cd,metalnessmap_fragment:Pd,metalnessmap_pars_fragment:Dd,morphinstance_vertex:Ld,morphcolor_vertex:Id,morphnormal_vertex:Fd,morphtarget_pars_vertex:Ud,morphtarget_vertex:Nd,normal_fragment_begin:Od,normal_fragment_maps:Bd,normal_pars_fragment:zd,normal_pars_vertex:Gd,normal_vertex:Vd,normalmap_pars_fragment:kd,clearcoat_normal_fragment_begin:Hd,clearcoat_normal_fragment_maps:Wd,clearcoat_pars_fragment:Xd,iridescence_pars_fragment:Yd,opaque_fragment:qd,packing:Qd,premultiplied_alpha_fragment:jd,project_vertex:Zd,dithering_fragment:Kd,dithering_pars_fragment:$d,roughnessmap_fragment:Jd,roughnessmap_pars_fragment:ef,shadowmap_pars_fragment:tf,shadowmap_pars_vertex:nf,shadowmap_vertex:rf,shadowmask_pars_fragment:sf,skinbase_vertex:af,skinning_pars_vertex:of,skinning_vertex:lf,skinnormal_vertex:cf,specularmap_fragment:hf,specularmap_pars_fragment:uf,tonemapping_fragment:df,tonemapping_pars_fragment:ff,transmission_fragment:pf,transmission_pars_fragment:mf,uv_pars_fragment:_f,uv_pars_vertex:gf,uv_vertex:Af,worldpos_vertex:vf,background_vert:xf,background_frag:Ef,backgroundCube_vert:Mf,backgroundCube_frag:Sf,cube_vert:yf,cube_frag:bf,depth_vert:wf,depth_frag:Tf,distanceRGBA_vert:Rf,distanceRGBA_frag:Cf,equirect_vert:Pf,equirect_frag:Df,linedashed_vert:Lf,linedashed_frag:If,meshbasic_vert:Ff,meshbasic_frag:Uf,meshlambert_vert:Nf,meshlambert_frag:Of,meshmatcap_vert:Bf,meshmatcap_frag:zf,meshnormal_vert:Gf,meshnormal_frag:Vf,meshphong_vert:kf,meshphong_frag:Hf,meshphysical_vert:Wf,meshphysical_frag:Xf,meshtoon_vert:Yf,meshtoon_frag:qf,points_vert:Qf,points_frag:jf,shadow_vert:Zf,shadow_frag:Kf,sprite_vert:$f,sprite_frag:Jf},ge={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ln={basic:{uniforms:zt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:zt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new it(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:zt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:zt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:zt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new it(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:zt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:zt([ge.points,ge.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:zt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:zt([ge.common,ge.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:zt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:zt([ge.sprite,ge.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:zt([ge.common,ge.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:zt([ge.lights,ge.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};ln.physical={uniforms:zt([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Wr={r:0,b:0,g:0},Qn=new un,ep=new pt;function tp(i,e,t,n,r,s,a){const o=new it(0);let c=s===!0?0:1,u,p,_=null,g=0,x=null;function y(P){let T=P.isScene===!0?P.background:null;return T&&T.isTexture&&(T=(P.backgroundBlurriness>0?t:e).get(T)),T}function w(P){let T=!1;const z=y(P);z===null?m(o,c):z&&z.isColor&&(m(z,1),T=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(P,T){const z=y(T);z&&(z.isCubeTexture||z.mapping===hs)?(p===void 0&&(p=new hn(new gr(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Bi(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(D,U,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),Qn.copy(T.backgroundRotation),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),p.material.uniforms.envMap.value=z,p.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(ep.makeRotationFromEuler(Qn)),p.material.toneMapped=tt.getTransfer(z.colorSpace)!==at,(_!==z||g!==z.version||x!==i.toneMapping)&&(p.material.needsUpdate=!0,_=z,g=z.version,x=i.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):z&&z.isTexture&&(u===void 0&&(u=new hn(new us(2,2),new kn({name:"BackgroundMaterial",uniforms:Bi(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=z,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.toneMapped=tt.getTransfer(z.colorSpace)!==at,z.matrixAutoUpdate===!0&&z.updateMatrix(),u.material.uniforms.uvTransform.value.copy(z.matrix),(_!==z||g!==z.version||x!==i.toneMapping)&&(u.material.needsUpdate=!0,_=z,g=z.version,x=i.toneMapping),u.layers.enableAll(),P.unshift(u,u.geometry,u.material,0,0,null))}function m(P,T){P.getRGB(Wr,ac(i)),n.buffers.color.setClear(Wr.r,Wr.g,Wr.b,T,a)}function I(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(P,T=1){o.set(P),c=T,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(P){c=P,m(o,c)},render:w,addToRenderList:A,dispose:I}}function np(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=g(null);let s=r,a=!1;function o(b,N,K,X,Y){let oe=!1;const $=_(X,K,N);s!==$&&(s=$,u(s.object)),oe=x(b,X,K,Y),oe&&y(b,X,K,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(oe||a)&&(a=!1,T(b,N,K,X),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return i.createVertexArray()}function u(b){return i.bindVertexArray(b)}function p(b){return i.deleteVertexArray(b)}function _(b,N,K){const X=K.wireframe===!0;let Y=n[b.id];Y===void 0&&(Y={},n[b.id]=Y);let oe=Y[N.id];oe===void 0&&(oe={},Y[N.id]=oe);let $=oe[X];return $===void 0&&($=g(c()),oe[X]=$),$}function g(b){const N=[],K=[],X=[];for(let Y=0;Y<t;Y++)N[Y]=0,K[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:K,attributeDivisors:X,object:b,attributes:{},index:null}}function x(b,N,K,X){const Y=s.attributes,oe=N.attributes;let $=0;const he=K.getAttributes();for(const Q in he)if(he[Q].location>=0){const ie=Y[Q];let pe=oe[Q];if(pe===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(pe=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(pe=b.instanceColor)),ie===void 0||ie.attribute!==pe||pe&&ie.data!==pe.data)return!0;$++}return s.attributesNum!==$||s.index!==X}function y(b,N,K,X){const Y={},oe=N.attributes;let $=0;const he=K.getAttributes();for(const Q in he)if(he[Q].location>=0){let ie=oe[Q];ie===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(ie=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(ie=b.instanceColor));const pe={};pe.attribute=ie,ie&&ie.data&&(pe.data=ie.data),Y[Q]=pe,$++}s.attributes=Y,s.attributesNum=$,s.index=X}function w(){const b=s.newAttributes;for(let N=0,K=b.length;N<K;N++)b[N]=0}function A(b){m(b,0)}function m(b,N){const K=s.newAttributes,X=s.enabledAttributes,Y=s.attributeDivisors;K[b]=1,X[b]===0&&(i.enableVertexAttribArray(b),X[b]=1),Y[b]!==N&&(i.vertexAttribDivisor(b,N),Y[b]=N)}function I(){const b=s.newAttributes,N=s.enabledAttributes;for(let K=0,X=N.length;K<X;K++)N[K]!==b[K]&&(i.disableVertexAttribArray(K),N[K]=0)}function P(b,N,K,X,Y,oe,$){$===!0?i.vertexAttribIPointer(b,N,K,Y,oe):i.vertexAttribPointer(b,N,K,X,Y,oe)}function T(b,N,K,X){w();const Y=X.attributes,oe=K.getAttributes(),$=N.defaultAttributeValues;for(const he in oe){const Q=oe[he];if(Q.location>=0){let fe=Y[he];if(fe===void 0&&(he==="instanceMatrix"&&b.instanceMatrix&&(fe=b.instanceMatrix),he==="instanceColor"&&b.instanceColor&&(fe=b.instanceColor)),fe!==void 0){const ie=fe.normalized,pe=fe.itemSize,Oe=e.get(fe);if(Oe===void 0)continue;const Xe=Oe.buffer,Z=Oe.type,le=Oe.bytesPerElement,be=Z===i.INT||Z===i.UNSIGNED_INT||fe.gpuType===Za;if(fe.isInterleavedBufferAttribute){const ue=fe.data,Le=ue.stride,He=fe.offset;if(ue.isInstancedInterleavedBuffer){for(let Ie=0;Ie<Q.locationSize;Ie++)m(Q.location+Ie,ue.meshPerAttribute);b.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ie=0;Ie<Q.locationSize;Ie++)A(Q.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let Ie=0;Ie<Q.locationSize;Ie++)P(Q.location+Ie,pe/Q.locationSize,Z,ie,Le*le,(He+pe/Q.locationSize*Ie)*le,be)}else{if(fe.isInstancedBufferAttribute){for(let ue=0;ue<Q.locationSize;ue++)m(Q.location+ue,fe.meshPerAttribute);b.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ue=0;ue<Q.locationSize;ue++)A(Q.location+ue);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let ue=0;ue<Q.locationSize;ue++)P(Q.location+ue,pe/Q.locationSize,Z,ie,pe*le,pe/Q.locationSize*ue*le,be)}}else if($!==void 0){const ie=$[he];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(Q.location,ie);break;case 3:i.vertexAttrib3fv(Q.location,ie);break;case 4:i.vertexAttrib4fv(Q.location,ie);break;default:i.vertexAttrib1fv(Q.location,ie)}}}}I()}function z(){k();for(const b in n){const N=n[b];for(const K in N){const X=N[K];for(const Y in X)p(X[Y].object),delete X[Y];delete N[K]}delete n[b]}}function D(b){if(n[b.id]===void 0)return;const N=n[b.id];for(const K in N){const X=N[K];for(const Y in X)p(X[Y].object),delete X[Y];delete N[K]}delete n[b.id]}function U(b){for(const N in n){const K=n[N];if(K[b.id]===void 0)continue;const X=K[b.id];for(const Y in X)p(X[Y].object),delete X[Y];delete K[b.id]}}function k(){C(),a=!0,s!==r&&(s=r,u(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:k,resetDefaultState:C,dispose:z,releaseStatesOfGeometry:D,releaseStatesOfProgram:U,initAttributes:w,enableAttribute:A,disableUnusedAttributes:I}}function ip(i,e,t){let n;function r(u){n=u}function s(u,p){i.drawArrays(n,u,p),t.update(p,n,1)}function a(u,p,_){_!==0&&(i.drawArraysInstanced(n,u,p,_),t.update(p,n,_))}function o(u,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,p,0,_);let x=0;for(let y=0;y<_;y++)x+=p[y];t.update(x,n,1)}function c(u,p,_,g){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<u.length;y++)a(u[y],p[y],g[y]);else{x.multiDrawArraysInstancedWEBGL(n,u,0,p,0,g,0,_);let y=0;for(let w=0;w<_;w++)y+=p[w]*g[w];t.update(y,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function rp(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(U){return!(U!==rn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){const k=U===fr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==bn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Mn&&!k)}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const p=c(u);p!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",p,"instead."),u=p);const _=t.logarithmicDepthBuffer===!0,g=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),A=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),I=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),z=y>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:_,reverseDepthBuffer:g,maxTextures:x,maxVertexTextures:y,maxTextureSize:w,maxCubemapSize:A,maxAttributes:m,maxVertexUniforms:I,maxVaryings:P,maxFragmentUniforms:T,vertexTextures:z,maxSamples:D}}function sp(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new On,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const x=_.length!==0||g||n!==0||r;return r=g,n=_.length,x},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(_,g){t=p(_,g,0)},this.setState=function(_,g,x){const y=_.clippingPlanes,w=_.clipIntersection,A=_.clipShadows,m=i.get(_);if(!r||y===null||y.length===0||s&&!A)s?p(null):u();else{const I=s?0:n,P=I*4;let T=m.clippingState||null;c.value=T,T=p(y,g,P,x);for(let z=0;z!==P;++z)T[z]=t[z];m.clippingState=T,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(_,g,x,y){const w=_!==null?_.length:0;let A=null;if(w!==0){if(A=c.value,y!==!0||A===null){const m=x+w*4,I=g.matrixWorldInverse;o.getNormalMatrix(I),(A===null||A.length<m)&&(A=new Float32Array(m));for(let P=0,T=x;P!==w;++P,T+=4)a.copy(_[P]).applyMatrix4(I,o),a.normal.toArray(A,T),A[T+3]=a.constant}c.value=A,c.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,A}}function ap(i){let e=new WeakMap;function t(a,o){return o===da?a.mapping=Ui:o===fa&&(a.mapping=Ni),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===da||o===fa)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new iu(c.height);return u.fromEquirectangularTexture(i,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ri=4,qo=[.125,.215,.35,.446,.526,.582],Jn=20,Vs=new uc,Qo=new it;let ks=null,Hs=0,Ws=0,Xs=!1;const Kn=(1+Math.sqrt(5))/2,bi=1/Kn,jo=[new W(-Kn,bi,0),new W(Kn,bi,0),new W(-bi,0,Kn),new W(bi,0,Kn),new W(0,Kn,-bi),new W(0,Kn,bi),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],op=new W;class Zo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=op}=s;ks=this._renderer.getRenderTarget(),Hs=this._renderer.getActiveCubeFace(),Ws=this._renderer.getActiveMipmapLevel(),Xs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$o(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ks,Hs,Ws),this._renderer.xr.enabled=Xs,e.scissorTest=!1,Xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ui||e.mapping===Ni?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ks=this._renderer.getRenderTarget(),Hs=this._renderer.getActiveCubeFace(),Ws=this._renderer.getActiveMipmapLevel(),Xs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:fr,format:rn,colorSpace:Oi,depthBuffer:!1},r=Ko(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ko(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lp(s)),this._blurMaterial=cp(s,e,t)}return r}_compileMaterial(e){const t=new hn(this._lodPlanes[0],e);this._renderer.compile(t,Vs)}_sceneToCubeUV(e,t,n,r,s){const c=new Zt(90,1,t,n),u=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,x=_.toneMapping;_.getClearColor(Qo),_.toneMapping=Gn,_.autoClear=!1;const y=new ic({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),w=new hn(new gr,y);let A=!1;const m=e.background;m?m.isColor&&(y.color.copy(m),e.background=null,A=!0):(y.color.copy(Qo),A=!0);for(let I=0;I<6;I++){const P=I%3;P===0?(c.up.set(0,u[I],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+p[I],s.y,s.z)):P===1?(c.up.set(0,0,u[I]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+p[I],s.z)):(c.up.set(0,u[I],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+p[I]));const T=this._cubeSize;Xr(r,P*T,I>2?T:0,T,T),_.setRenderTarget(r),A&&_.render(w,c),_.render(e,c)}w.geometry.dispose(),w.material.dispose(),_.toneMapping=x,_.autoClear=g,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ui||e.mapping===Ni;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$o());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new hn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Xr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Vs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=jo[(r-s-1)%jo.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new hn(this._lodPlanes[r],u),g=u.uniforms,x=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*x):2*Math.PI/(2*Jn-1),w=s/y,A=isFinite(s)?1+Math.floor(p*w):Jn;A>Jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${A} samples when the maximum is set to ${Jn}`);const m=[];let I=0;for(let U=0;U<Jn;++U){const k=U/w,C=Math.exp(-k*k/2);m.push(C),U===0?I+=C:U<A&&(I+=2*C)}for(let U=0;U<m.length;U++)m[U]=m[U]/I;g.envMap.value=e.texture,g.samples.value=A,g.weights.value=m,g.latitudinal.value=a==="latitudinal",o&&(g.poleAxis.value=o);const{_lodMax:P}=this;g.dTheta.value=y,g.mipInt.value=P-n;const T=this._sizeLods[r],z=3*T*(r>P-Ri?r-P+Ri:0),D=4*(this._cubeSize-T);Xr(t,z,D,3*T,2*T),c.setRenderTarget(t),c.render(_,Vs)}}function lp(i){const e=[],t=[],n=[];let r=i;const s=i-Ri+1+qo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-Ri?c=qo[a-i+Ri-1]:a===0&&(c=0),n.push(c);const u=1/(o-2),p=-u,_=1+u,g=[p,p,_,p,_,_,p,p,_,_,p,_],x=6,y=6,w=3,A=2,m=1,I=new Float32Array(w*y*x),P=new Float32Array(A*y*x),T=new Float32Array(m*y*x);for(let D=0;D<x;D++){const U=D%3*2/3-1,k=D>2?0:-1,C=[U,k,0,U+2/3,k,0,U+2/3,k+1,0,U,k,0,U+2/3,k+1,0,U,k+1,0];I.set(C,w*y*D),P.set(g,A*y*D);const b=[D,D,D,D,D,D];T.set(b,m*y*D)}const z=new li;z.setAttribute("position",new an(I,w)),z.setAttribute("uv",new an(P,A)),z.setAttribute("faceIndex",new an(T,m)),e.push(z),r>Ri&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ko(i,e,t){const n=new ri(i,e,t);return n.texture.mapping=hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function cp(i,e,t){const n=new Float32Array(Jn),r=new W(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function $o(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Jo(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function oo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,u=c===da||c===fa,p=c===Ui||c===Ni;if(u||p){let _=e.get(o);const g=_!==void 0?_.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==g)return t===null&&(t=new Zo(i)),_=u?t.fromEquirectangular(o,_):t.fromCubemap(o,_),_.texture.pmremVersion=o.pmremVersion,e.set(o,_),_.texture;if(_!==void 0)return _.texture;{const x=o.image;return u&&x&&x.height>0||p&&x&&r(x)?(t===null&&(t=new Zo(i)),_=u?t.fromEquirectangular(o):t.fromCubemap(o),_.texture.pmremVersion=o.pmremVersion,e.set(o,_),o.addEventListener("dispose",s),_.texture):null}}}return o}function r(o){let c=0;const u=6;for(let p=0;p<u;p++)o[p]!==void 0&&c++;return c===u}function s(o){const c=o.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function up(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ns("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function dp(i,e,t,n){const r={},s=new WeakMap;function a(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const y in g.attributes)e.remove(g.attributes[y]);g.removeEventListener("dispose",a),delete r[g.id];const x=s.get(g);x&&(e.remove(x),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function o(_,g){return r[g.id]===!0||(g.addEventListener("dispose",a),r[g.id]=!0,t.memory.geometries++),g}function c(_){const g=_.attributes;for(const x in g)e.update(g[x],i.ARRAY_BUFFER)}function u(_){const g=[],x=_.index,y=_.attributes.position;let w=0;if(x!==null){const I=x.array;w=x.version;for(let P=0,T=I.length;P<T;P+=3){const z=I[P+0],D=I[P+1],U=I[P+2];g.push(z,D,D,U,U,z)}}else if(y!==void 0){const I=y.array;w=y.version;for(let P=0,T=I.length/3-1;P<T;P+=3){const z=P+0,D=P+1,U=P+2;g.push(z,D,D,U,U,z)}}else return;const A=new(ec(g)?sc:rc)(g,1);A.version=w;const m=s.get(_);m&&e.remove(m),s.set(_,A)}function p(_){const g=s.get(_);if(g){const x=_.index;x!==null&&g.version<x.version&&u(_)}else u(_);return s.get(_)}return{get:o,update:c,getWireframeAttribute:p}}function fp(i,e,t){let n;function r(g){n=g}let s,a;function o(g){s=g.type,a=g.bytesPerElement}function c(g,x){i.drawElements(n,x,s,g*a),t.update(x,n,1)}function u(g,x,y){y!==0&&(i.drawElementsInstanced(n,x,s,g*a,y),t.update(x,n,y))}function p(g,x,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,x,0,s,g,0,y);let A=0;for(let m=0;m<y;m++)A+=x[m];t.update(A,n,1)}function _(g,x,y,w){if(y===0)return;const A=e.get("WEBGL_multi_draw");if(A===null)for(let m=0;m<g.length;m++)u(g[m]/a,x[m],w[m]);else{A.multiDrawElementsInstancedWEBGL(n,x,0,s,g,0,w,0,y);let m=0;for(let I=0;I<y;I++)m+=x[I]*w[I];t.update(m,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=p,this.renderMultiDrawInstances=_}function pp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function mp(i,e,t){const n=new WeakMap,r=new _t;function s(a,o,c){const u=a.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,_=p!==void 0?p.length:0;let g=n.get(o);if(g===void 0||g.count!==_){let C=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",C)};g!==void 0&&g.texture.dispose();const x=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,w=o.morphAttributes.color!==void 0,A=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],I=o.morphAttributes.color||[];let P=0;x===!0&&(P=1),y===!0&&(P=2),w===!0&&(P=3);let T=o.attributes.position.count*P,z=1;T>e.maxTextureSize&&(z=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const D=new Float32Array(T*z*4*_),U=new tc(D,T,z,_);U.type=Mn,U.needsUpdate=!0;const k=P*4;for(let b=0;b<_;b++){const N=A[b],K=m[b],X=I[b],Y=T*z*4*b;for(let oe=0;oe<N.count;oe++){const $=oe*k;x===!0&&(r.fromBufferAttribute(N,oe),D[Y+$+0]=r.x,D[Y+$+1]=r.y,D[Y+$+2]=r.z,D[Y+$+3]=0),y===!0&&(r.fromBufferAttribute(K,oe),D[Y+$+4]=r.x,D[Y+$+5]=r.y,D[Y+$+6]=r.z,D[Y+$+7]=0),w===!0&&(r.fromBufferAttribute(X,oe),D[Y+$+8]=r.x,D[Y+$+9]=r.y,D[Y+$+10]=r.z,D[Y+$+11]=X.itemSize===4?r.w:1)}}g={count:_,texture:U,size:new ke(T,z)},n.set(o,g),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let x=0;for(let w=0;w<u.length;w++)x+=u[w];const y=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:s}}function _p(i,e,t,n){let r=new WeakMap;function s(c){const u=n.render.frame,p=c.geometry,_=e.get(c,p);if(r.get(_)!==u&&(e.update(_),r.set(_,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const g=c.skeleton;r.get(g)!==u&&(g.update(),r.set(g,u))}return _}function a(){r=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}const fc=new Ht,el=new cc(1,1),pc=new tc,mc=new Gh,_c=new lc,tl=[],nl=[],il=new Float32Array(16),rl=new Float32Array(9),sl=new Float32Array(4);function zi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=tl[r];if(s===void 0&&(s=new Float32Array(r),tl[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ds(i,e){let t=nl[e];t===void 0&&(t=new Int32Array(e),nl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function gp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function vp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function Ep(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;sl.set(n),i.uniformMatrix2fv(this.addr,!1,sl),Pt(t,n)}}function Mp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;rl.set(n),i.uniformMatrix3fv(this.addr,!1,rl),Pt(t,n)}}function Sp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;il.set(n),i.uniformMatrix4fv(this.addr,!1,il),Pt(t,n)}}function yp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function Tp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function Rp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Cp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function Pp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function Dp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function Lp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(el.compareFunction=Jl,s=el):s=fc,t.setTexture2D(e||s,r)}function Ip(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||mc,r)}function Fp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||_c,r)}function Up(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||pc,r)}function Np(i){switch(i){case 5126:return gp;case 35664:return Ap;case 35665:return vp;case 35666:return xp;case 35674:return Ep;case 35675:return Mp;case 35676:return Sp;case 5124:case 35670:return yp;case 35667:case 35671:return bp;case 35668:case 35672:return wp;case 35669:case 35673:return Tp;case 5125:return Rp;case 36294:return Cp;case 36295:return Pp;case 36296:return Dp;case 35678:case 36198:case 36298:case 36306:case 35682:return Lp;case 35679:case 36299:case 36307:return Ip;case 35680:case 36300:case 36308:case 36293:return Fp;case 36289:case 36303:case 36311:case 36292:return Up}}function Op(i,e){i.uniform1fv(this.addr,e)}function Bp(i,e){const t=zi(e,this.size,2);i.uniform2fv(this.addr,t)}function zp(i,e){const t=zi(e,this.size,3);i.uniform3fv(this.addr,t)}function Gp(i,e){const t=zi(e,this.size,4);i.uniform4fv(this.addr,t)}function Vp(i,e){const t=zi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function kp(i,e){const t=zi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Hp(i,e){const t=zi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Wp(i,e){i.uniform1iv(this.addr,e)}function Xp(i,e){i.uniform2iv(this.addr,e)}function Yp(i,e){i.uniform3iv(this.addr,e)}function qp(i,e){i.uniform4iv(this.addr,e)}function Qp(i,e){i.uniform1uiv(this.addr,e)}function jp(i,e){i.uniform2uiv(this.addr,e)}function Zp(i,e){i.uniform3uiv(this.addr,e)}function Kp(i,e){i.uniform4uiv(this.addr,e)}function $p(i,e,t){const n=this.cache,r=e.length,s=ds(t,r);Ct(n,s)||(i.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||fc,s[a])}function Jp(i,e,t){const n=this.cache,r=e.length,s=ds(t,r);Ct(n,s)||(i.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||mc,s[a])}function em(i,e,t){const n=this.cache,r=e.length,s=ds(t,r);Ct(n,s)||(i.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||_c,s[a])}function tm(i,e,t){const n=this.cache,r=e.length,s=ds(t,r);Ct(n,s)||(i.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||pc,s[a])}function nm(i){switch(i){case 5126:return Op;case 35664:return Bp;case 35665:return zp;case 35666:return Gp;case 35674:return Vp;case 35675:return kp;case 35676:return Hp;case 5124:case 35670:return Wp;case 35667:case 35671:return Xp;case 35668:case 35672:return Yp;case 35669:case 35673:return qp;case 5125:return Qp;case 36294:return jp;case 36295:return Zp;case 36296:return Kp;case 35678:case 36198:case 36298:case 36306:case 35682:return $p;case 35679:case 36299:case 36307:return Jp;case 35680:case 36300:case 36308:case 36293:return em;case 36289:case 36303:case 36311:case 36292:return tm}}class im{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Np(t.type)}}class rm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nm(t.type)}}class sm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Ys=/(\w+)(\])?(\[|\.)?/g;function al(i,e){i.seq.push(e),i.map[e.id]=e}function am(i,e,t){const n=i.name,r=n.length;for(Ys.lastIndex=0;;){const s=Ys.exec(n),a=Ys.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){al(t,u===void 0?new im(o,i,e):new rm(o,i,e));break}else{let _=t.map[o];_===void 0&&(_=new sm(o),al(t,_)),t=_}}}class is{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);am(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function ol(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const om=37297;let lm=0;function cm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const ll=new We;function hm(i){tt._getMatrix(ll,tt.workingColorSpace,i);const e=`mat3( ${ll.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case rs:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function cl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+cm(i.getShaderSource(e),a)}else return r}function um(i,e){const t=hm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function dm(i,e){let t;switch(e){case uh:t="Linear";break;case dh:t="Reinhard";break;case fh:t="Cineon";break;case ph:t="ACESFilmic";break;case _h:t="AgX";break;case gh:t="Neutral";break;case mh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Yr=new W;function fm(){tt.getLuminanceCoefficients(Yr);const i=Yr.x.toFixed(4),e=Yr.y.toFixed(4),t=Yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function mm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _m(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ir(i){return i!==""}function hl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ul(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wa(i){return i.replace(gm,vm)}const Am=new Map;function vm(i,e){let t=Ye[e];if(t===void 0){const n=Am.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wa(t)}const xm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dl(i){return i.replace(xm,Em)}function Em(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Mm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Wc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vn&&(e="SHADOWMAP_TYPE_VSM"),e}function Sm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ui:case Ni:e="ENVMAP_TYPE_CUBE";break;case hs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ym(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ni:e="ENVMAP_MODE_REFRACTION";break}return e}function bm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gl:e="ENVMAP_BLENDING_MULTIPLY";break;case ch:e="ENVMAP_BLENDING_MIX";break;case hh:e="ENVMAP_BLENDING_ADD";break}return e}function wm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Tm(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Mm(t),u=Sm(t),p=ym(t),_=bm(t),g=wm(t),x=pm(t),y=mm(s),w=r.createProgram();let A,m,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(A=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ir).join(`
`),A.length>0&&(A+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ir).join(`
`),m.length>0&&(m+=`
`)):(A=[fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),m=[fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Gn?dm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,um("linearToOutputTexel",t.outputColorSpace),fm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ir).join(`
`)),a=Wa(a),a=hl(a,t),a=ul(a,t),o=Wa(o),o=hl(o,t),o=ul(o,t),a=dl(a),o=dl(o),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,A=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,m=["#define varying in",t.glslVersion===So?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===So?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const P=I+A+a,T=I+m+o,z=ol(r,r.VERTEX_SHADER,P),D=ol(r,r.FRAGMENT_SHADER,T);r.attachShader(w,z),r.attachShader(w,D),t.index0AttributeName!==void 0?r.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(w,0,"position"),r.linkProgram(w);function U(N){if(i.debug.checkShaderErrors){const K=r.getProgramInfoLog(w).trim(),X=r.getShaderInfoLog(z).trim(),Y=r.getShaderInfoLog(D).trim();let oe=!0,$=!0;if(r.getProgramParameter(w,r.LINK_STATUS)===!1)if(oe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,w,z,D);else{const he=cl(r,z,"vertex"),Q=cl(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(w,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+K+`
`+he+`
`+Q)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(X===""||Y==="")&&($=!1);$&&(N.diagnostics={runnable:oe,programLog:K,vertexShader:{log:X,prefix:A},fragmentShader:{log:Y,prefix:m}})}r.deleteShader(z),r.deleteShader(D),k=new is(r,w),C=_m(r,w)}let k;this.getUniforms=function(){return k===void 0&&U(this),k};let C;this.getAttributes=function(){return C===void 0&&U(this),C};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(w,om)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lm++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=z,this.fragmentShader=D,this}let Rm=0;class Cm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Pm(e),t.set(e,n)),n}}class Pm{constructor(e){this.id=Rm++,this.code=e,this.usedTimes=0}}function Dm(i,e,t,n,r,s,a){const o=new so,c=new Cm,u=new Set,p=[],_=r.logarithmicDepthBuffer,g=r.vertexTextures;let x=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return u.add(C),C===0?"uv":`uv${C}`}function A(C,b,N,K,X){const Y=K.fog,oe=X.geometry,$=C.isMeshStandardMaterial?K.environment:null,he=(C.isMeshStandardMaterial?t:e).get(C.envMap||$),Q=he&&he.mapping===hs?he.image.height:null,fe=y[C.type];C.precision!==null&&(x=r.getMaxPrecision(C.precision),x!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",x,"instead."));const ie=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,pe=ie!==void 0?ie.length:0;let Oe=0;oe.morphAttributes.position!==void 0&&(Oe=1),oe.morphAttributes.normal!==void 0&&(Oe=2),oe.morphAttributes.color!==void 0&&(Oe=3);let Xe,Z,le,be;if(fe){const nt=ln[fe];Xe=nt.vertexShader,Z=nt.fragmentShader}else Xe=C.vertexShader,Z=C.fragmentShader,c.update(C),le=c.getVertexShaderID(C),be=c.getFragmentShaderID(C);const ue=i.getRenderTarget(),Le=i.state.buffers.depth.getReversed(),He=X.isInstancedMesh===!0,Ie=X.isBatchedMesh===!0,ut=!!C.map,ct=!!C.matcap,je=!!he,F=!!C.aoMap,xt=!!C.lightMap,Ze=!!C.bumpMap,Ge=!!C.normalMap,Pe=!!C.displacementMap,$e=!!C.emissiveMap,we=!!C.metalnessMap,R=!!C.roughnessMap,E=C.anisotropy>0,H=C.clearcoat>0,ne=C.dispersion>0,ae=C.iridescence>0,J=C.sheen>0,me=C.transmission>0,_e=E&&!!C.anisotropyMap,Se=H&&!!C.clearcoatMap,et=H&&!!C.clearcoatNormalMap,ce=H&&!!C.clearcoatRoughnessMap,Te=ae&&!!C.iridescenceMap,Fe=ae&&!!C.iridescenceThicknessMap,Be=J&&!!C.sheenColorMap,Me=J&&!!C.sheenRoughnessMap,Ve=!!C.specularMap,ze=!!C.specularColorMap,qe=!!C.specularIntensityMap,G=me&&!!C.transmissionMap,Ae=me&&!!C.thicknessMap,j=!!C.gradientMap,te=!!C.alphaMap,Ee=C.alphaTest>0,ve=!!C.alphaHash,Ne=!!C.extensions;let dt=Gn;C.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(dt=i.toneMapping);const yt={shaderID:fe,shaderType:C.type,shaderName:C.name,vertexShader:Xe,fragmentShader:Z,defines:C.defines,customVertexShaderID:le,customFragmentShaderID:be,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:x,batching:Ie,batchingColor:Ie&&X._colorsTexture!==null,instancing:He,instancingColor:He&&X.instanceColor!==null,instancingMorph:He&&X.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:ue===null?i.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Oi,alphaToCoverage:!!C.alphaToCoverage,map:ut,matcap:ct,envMap:je,envMapMode:je&&he.mapping,envMapCubeUVHeight:Q,aoMap:F,lightMap:xt,bumpMap:Ze,normalMap:Ge,displacementMap:g&&Pe,emissiveMap:$e,normalMapObjectSpace:Ge&&C.normalMapType===Eh,normalMapTangentSpace:Ge&&C.normalMapType===$l,metalnessMap:we,roughnessMap:R,anisotropy:E,anisotropyMap:_e,clearcoat:H,clearcoatMap:Se,clearcoatNormalMap:et,clearcoatRoughnessMap:ce,dispersion:ne,iridescence:ae,iridescenceMap:Te,iridescenceThicknessMap:Fe,sheen:J,sheenColorMap:Be,sheenRoughnessMap:Me,specularMap:Ve,specularColorMap:ze,specularIntensityMap:qe,transmission:me,transmissionMap:G,thicknessMap:Ae,gradientMap:j,opaque:C.transparent===!1&&C.blending===Pi&&C.alphaToCoverage===!1,alphaMap:te,alphaTest:Ee,alphaHash:ve,combine:C.combine,mapUv:ut&&w(C.map.channel),aoMapUv:F&&w(C.aoMap.channel),lightMapUv:xt&&w(C.lightMap.channel),bumpMapUv:Ze&&w(C.bumpMap.channel),normalMapUv:Ge&&w(C.normalMap.channel),displacementMapUv:Pe&&w(C.displacementMap.channel),emissiveMapUv:$e&&w(C.emissiveMap.channel),metalnessMapUv:we&&w(C.metalnessMap.channel),roughnessMapUv:R&&w(C.roughnessMap.channel),anisotropyMapUv:_e&&w(C.anisotropyMap.channel),clearcoatMapUv:Se&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:et&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:Me&&w(C.sheenRoughnessMap.channel),specularMapUv:Ve&&w(C.specularMap.channel),specularColorMapUv:ze&&w(C.specularColorMap.channel),specularIntensityMapUv:qe&&w(C.specularIntensityMap.channel),transmissionMapUv:G&&w(C.transmissionMap.channel),thicknessMapUv:Ae&&w(C.thicknessMap.channel),alphaMapUv:te&&w(C.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(Ge||E),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!oe.attributes.uv&&(ut||te),fog:!!Y,useFog:C.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Le,skinning:X.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Oe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:C.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,decodeVideoTexture:ut&&C.map.isVideoTexture===!0&&tt.getTransfer(C.map.colorSpace)===at,decodeVideoTextureEmissive:$e&&C.emissiveMap.isVideoTexture===!0&&tt.getTransfer(C.emissiveMap.colorSpace)===at,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===xn,flipSided:C.side===kt,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ne&&C.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&C.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return yt.vertexUv1s=u.has(1),yt.vertexUv2s=u.has(2),yt.vertexUv3s=u.has(3),u.clear(),yt}function m(C){const b=[];if(C.shaderID?b.push(C.shaderID):(b.push(C.customVertexShaderID),b.push(C.customFragmentShaderID)),C.defines!==void 0)for(const N in C.defines)b.push(N),b.push(C.defines[N]);return C.isRawShaderMaterial===!1&&(I(b,C),P(b,C),b.push(i.outputColorSpace)),b.push(C.customProgramCacheKey),b.join()}function I(C,b){C.push(b.precision),C.push(b.outputColorSpace),C.push(b.envMapMode),C.push(b.envMapCubeUVHeight),C.push(b.mapUv),C.push(b.alphaMapUv),C.push(b.lightMapUv),C.push(b.aoMapUv),C.push(b.bumpMapUv),C.push(b.normalMapUv),C.push(b.displacementMapUv),C.push(b.emissiveMapUv),C.push(b.metalnessMapUv),C.push(b.roughnessMapUv),C.push(b.anisotropyMapUv),C.push(b.clearcoatMapUv),C.push(b.clearcoatNormalMapUv),C.push(b.clearcoatRoughnessMapUv),C.push(b.iridescenceMapUv),C.push(b.iridescenceThicknessMapUv),C.push(b.sheenColorMapUv),C.push(b.sheenRoughnessMapUv),C.push(b.specularMapUv),C.push(b.specularColorMapUv),C.push(b.specularIntensityMapUv),C.push(b.transmissionMapUv),C.push(b.thicknessMapUv),C.push(b.combine),C.push(b.fogExp2),C.push(b.sizeAttenuation),C.push(b.morphTargetsCount),C.push(b.morphAttributeCount),C.push(b.numDirLights),C.push(b.numPointLights),C.push(b.numSpotLights),C.push(b.numSpotLightMaps),C.push(b.numHemiLights),C.push(b.numRectAreaLights),C.push(b.numDirLightShadows),C.push(b.numPointLightShadows),C.push(b.numSpotLightShadows),C.push(b.numSpotLightShadowsWithMaps),C.push(b.numLightProbes),C.push(b.shadowMapType),C.push(b.toneMapping),C.push(b.numClippingPlanes),C.push(b.numClipIntersection),C.push(b.depthPacking)}function P(C,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),C.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),C.push(o.mask)}function T(C){const b=y[C.type];let N;if(b){const K=ln[b];N=Jh.clone(K.uniforms)}else N=C.uniforms;return N}function z(C,b){let N;for(let K=0,X=p.length;K<X;K++){const Y=p[K];if(Y.cacheKey===b){N=Y,++N.usedTimes;break}}return N===void 0&&(N=new Tm(i,b,C,s),p.push(N)),N}function D(C){if(--C.usedTimes===0){const b=p.indexOf(C);p[b]=p[p.length-1],p.pop(),C.destroy()}}function U(C){c.remove(C)}function k(){c.dispose()}return{getParameters:A,getProgramCacheKey:m,getUniforms:T,acquireProgram:z,releaseProgram:D,releaseShaderCache:U,programs:p,dispose:k}}function Lm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Im(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function pl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ml(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(_,g,x,y,w,A){let m=i[e];return m===void 0?(m={id:_.id,object:_,geometry:g,material:x,groupOrder:y,renderOrder:_.renderOrder,z:w,group:A},i[e]=m):(m.id=_.id,m.object=_,m.geometry=g,m.material=x,m.groupOrder=y,m.renderOrder=_.renderOrder,m.z=w,m.group=A),e++,m}function o(_,g,x,y,w,A){const m=a(_,g,x,y,w,A);x.transmission>0?n.push(m):x.transparent===!0?r.push(m):t.push(m)}function c(_,g,x,y,w,A){const m=a(_,g,x,y,w,A);x.transmission>0?n.unshift(m):x.transparent===!0?r.unshift(m):t.unshift(m)}function u(_,g){t.length>1&&t.sort(_||Im),n.length>1&&n.sort(g||pl),r.length>1&&r.sort(g||pl)}function p(){for(let _=e,g=i.length;_<g;_++){const x=i[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:p,sort:u}}function Fm(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new ml,i.set(n,[a])):r>=s.length?(a=new ml,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Um(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new it};break;case"SpotLight":t={position:new W,direction:new W,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function Nm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Om=0;function Bm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function zm(i){const e=new Um,t=Nm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new W);const r=new W,s=new pt,a=new pt;function o(u){let p=0,_=0,g=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let x=0,y=0,w=0,A=0,m=0,I=0,P=0,T=0,z=0,D=0,U=0;u.sort(Bm);for(let C=0,b=u.length;C<b;C++){const N=u[C],K=N.color,X=N.intensity,Y=N.distance,oe=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)p+=K.r*X,_+=K.g*X,g+=K.b*X;else if(N.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(N.sh.coefficients[$],X);U++}else if(N.isDirectionalLight){const $=e.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const he=N.shadow,Q=t.get(N);Q.shadowIntensity=he.intensity,Q.shadowBias=he.bias,Q.shadowNormalBias=he.normalBias,Q.shadowRadius=he.radius,Q.shadowMapSize=he.mapSize,n.directionalShadow[x]=Q,n.directionalShadowMap[x]=oe,n.directionalShadowMatrix[x]=N.shadow.matrix,I++}n.directional[x]=$,x++}else if(N.isSpotLight){const $=e.get(N);$.position.setFromMatrixPosition(N.matrixWorld),$.color.copy(K).multiplyScalar(X),$.distance=Y,$.coneCos=Math.cos(N.angle),$.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),$.decay=N.decay,n.spot[w]=$;const he=N.shadow;if(N.map&&(n.spotLightMap[z]=N.map,z++,he.updateMatrices(N),N.castShadow&&D++),n.spotLightMatrix[w]=he.matrix,N.castShadow){const Q=t.get(N);Q.shadowIntensity=he.intensity,Q.shadowBias=he.bias,Q.shadowNormalBias=he.normalBias,Q.shadowRadius=he.radius,Q.shadowMapSize=he.mapSize,n.spotShadow[w]=Q,n.spotShadowMap[w]=oe,T++}w++}else if(N.isRectAreaLight){const $=e.get(N);$.color.copy(K).multiplyScalar(X),$.halfWidth.set(N.width*.5,0,0),$.halfHeight.set(0,N.height*.5,0),n.rectArea[A]=$,A++}else if(N.isPointLight){const $=e.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),$.distance=N.distance,$.decay=N.decay,N.castShadow){const he=N.shadow,Q=t.get(N);Q.shadowIntensity=he.intensity,Q.shadowBias=he.bias,Q.shadowNormalBias=he.normalBias,Q.shadowRadius=he.radius,Q.shadowMapSize=he.mapSize,Q.shadowCameraNear=he.camera.near,Q.shadowCameraFar=he.camera.far,n.pointShadow[y]=Q,n.pointShadowMap[y]=oe,n.pointShadowMatrix[y]=N.shadow.matrix,P++}n.point[y]=$,y++}else if(N.isHemisphereLight){const $=e.get(N);$.skyColor.copy(N.color).multiplyScalar(X),$.groundColor.copy(N.groundColor).multiplyScalar(X),n.hemi[m]=$,m++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=_,n.ambient[2]=g;const k=n.hash;(k.directionalLength!==x||k.pointLength!==y||k.spotLength!==w||k.rectAreaLength!==A||k.hemiLength!==m||k.numDirectionalShadows!==I||k.numPointShadows!==P||k.numSpotShadows!==T||k.numSpotMaps!==z||k.numLightProbes!==U)&&(n.directional.length=x,n.spot.length=w,n.rectArea.length=A,n.point.length=y,n.hemi.length=m,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=I,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=T+z-D,n.spotLightMap.length=z,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=U,k.directionalLength=x,k.pointLength=y,k.spotLength=w,k.rectAreaLength=A,k.hemiLength=m,k.numDirectionalShadows=I,k.numPointShadows=P,k.numSpotShadows=T,k.numSpotMaps=z,k.numLightProbes=U,n.version=Om++)}function c(u,p){let _=0,g=0,x=0,y=0,w=0;const A=p.matrixWorldInverse;for(let m=0,I=u.length;m<I;m++){const P=u[m];if(P.isDirectionalLight){const T=n.directional[_];T.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(A),_++}else if(P.isSpotLight){const T=n.spot[x];T.position.setFromMatrixPosition(P.matrixWorld),T.position.applyMatrix4(A),T.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(A),x++}else if(P.isRectAreaLight){const T=n.rectArea[y];T.position.setFromMatrixPosition(P.matrixWorld),T.position.applyMatrix4(A),a.identity(),s.copy(P.matrixWorld),s.premultiply(A),a.extractRotation(s),T.halfWidth.set(P.width*.5,0,0),T.halfHeight.set(0,P.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),y++}else if(P.isPointLight){const T=n.point[g];T.position.setFromMatrixPosition(P.matrixWorld),T.position.applyMatrix4(A),g++}else if(P.isHemisphereLight){const T=n.hemi[w];T.direction.setFromMatrixPosition(P.matrixWorld),T.direction.transformDirection(A),w++}}}return{setup:o,setupView:c,state:n}}function _l(i){const e=new zm(i),t=[],n=[];function r(p){u.camera=p,t.length=0,n.length=0}function s(p){t.push(p)}function a(p){n.push(p)}function o(){e.setup(t)}function c(p){e.setupView(t,p)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Gm(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new _l(i),e.set(r,[o])):s>=a.length?(o=new _l(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Vm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,km=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Hm(i,e,t){let n=new ao;const r=new ke,s=new ke,a=new _t,o=new cu({depthPacking:xh}),c=new hu,u={},p=t.maxTextureSize,_={[Vn]:kt,[kt]:Vn,[xn]:xn},g=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Vm,fragmentShader:km}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const y=new li;y.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new hn(y,g),A=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zl;let m=this.type;this.render=function(D,U,k){if(A.enabled===!1||A.autoUpdate===!1&&A.needsUpdate===!1||D.length===0)return;const C=i.getRenderTarget(),b=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),K=i.state;K.setBlending(zn),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const X=m!==vn&&this.type===vn,Y=m===vn&&this.type!==vn;for(let oe=0,$=D.length;oe<$;oe++){const he=D[oe],Q=he.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;r.copy(Q.mapSize);const fe=Q.getFrameExtents();if(r.multiply(fe),s.copy(Q.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/fe.x),r.x=s.x*fe.x,Q.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/fe.y),r.y=s.y*fe.y,Q.mapSize.y=s.y)),Q.map===null||X===!0||Y===!0){const pe=this.type!==vn?{minFilter:sn,magFilter:sn}:{};Q.map!==null&&Q.map.dispose(),Q.map=new ri(r.x,r.y,pe),Q.map.texture.name=he.name+".shadowMap",Q.camera.updateProjectionMatrix()}i.setRenderTarget(Q.map),i.clear();const ie=Q.getViewportCount();for(let pe=0;pe<ie;pe++){const Oe=Q.getViewport(pe);a.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),K.viewport(a),Q.updateMatrices(he,pe),n=Q.getFrustum(),T(U,k,Q.camera,he,this.type)}Q.isPointLightShadow!==!0&&this.type===vn&&I(Q,k),Q.needsUpdate=!1}m=this.type,A.needsUpdate=!1,i.setRenderTarget(C,b,N)};function I(D,U){const k=e.update(w);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,x.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ri(r.x,r.y)),g.uniforms.shadow_pass.value=D.map.texture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(U,null,k,g,w,null),x.uniforms.shadow_pass.value=D.mapPass.texture,x.uniforms.resolution.value=D.mapSize,x.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(U,null,k,x,w,null)}function P(D,U,k,C){let b=null;const N=k.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(N!==void 0)b=N;else if(b=k.isPointLight===!0?c:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const K=b.uuid,X=U.uuid;let Y=u[K];Y===void 0&&(Y={},u[K]=Y);let oe=Y[X];oe===void 0&&(oe=b.clone(),Y[X]=oe,U.addEventListener("dispose",z)),b=oe}if(b.visible=U.visible,b.wireframe=U.wireframe,C===vn?b.side=U.shadowSide!==null?U.shadowSide:U.side:b.side=U.shadowSide!==null?U.shadowSide:_[U.side],b.alphaMap=U.alphaMap,b.alphaTest=U.alphaTest,b.map=U.map,b.clipShadows=U.clipShadows,b.clippingPlanes=U.clippingPlanes,b.clipIntersection=U.clipIntersection,b.displacementMap=U.displacementMap,b.displacementScale=U.displacementScale,b.displacementBias=U.displacementBias,b.wireframeLinewidth=U.wireframeLinewidth,b.linewidth=U.linewidth,k.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const K=i.properties.get(b);K.light=k}return b}function T(D,U,k,C,b){if(D.visible===!1)return;if(D.layers.test(U.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&b===vn)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,D.matrixWorld);const X=e.update(D),Y=D.material;if(Array.isArray(Y)){const oe=X.groups;for(let $=0,he=oe.length;$<he;$++){const Q=oe[$],fe=Y[Q.materialIndex];if(fe&&fe.visible){const ie=P(D,fe,C,b);D.onBeforeShadow(i,D,U,k,X,ie,Q),i.renderBufferDirect(k,null,X,ie,D,Q),D.onAfterShadow(i,D,U,k,X,ie,Q)}}}else if(Y.visible){const oe=P(D,Y,C,b);D.onBeforeShadow(i,D,U,k,X,oe,null),i.renderBufferDirect(k,null,X,oe,D,null),D.onAfterShadow(i,D,U,k,X,oe,null)}}const K=D.children;for(let X=0,Y=K.length;X<Y;X++)T(K[X],U,k,C,b)}function z(D){D.target.removeEventListener("dispose",z);for(const k in u){const C=u[k],b=D.target.uuid;b in C&&(C[b].dispose(),delete C[b])}}}const Wm={[sa]:aa,[oa]:ha,[la]:ua,[Fi]:ca,[aa]:sa,[ha]:oa,[ua]:la,[ca]:Fi};function Xm(i,e){function t(){let G=!1;const Ae=new _t;let j=null;const te=new _t(0,0,0,0);return{setMask:function(Ee){j!==Ee&&!G&&(i.colorMask(Ee,Ee,Ee,Ee),j=Ee)},setLocked:function(Ee){G=Ee},setClear:function(Ee,ve,Ne,dt,yt){yt===!0&&(Ee*=dt,ve*=dt,Ne*=dt),Ae.set(Ee,ve,Ne,dt),te.equals(Ae)===!1&&(i.clearColor(Ee,ve,Ne,dt),te.copy(Ae))},reset:function(){G=!1,j=null,te.set(-1,0,0,0)}}}function n(){let G=!1,Ae=!1,j=null,te=null,Ee=null;return{setReversed:function(ve){if(Ae!==ve){const Ne=e.get("EXT_clip_control");ve?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),Ae=ve;const dt=Ee;Ee=null,this.setClear(dt)}},getReversed:function(){return Ae},setTest:function(ve){ve?ue(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(ve){j!==ve&&!G&&(i.depthMask(ve),j=ve)},setFunc:function(ve){if(Ae&&(ve=Wm[ve]),te!==ve){switch(ve){case sa:i.depthFunc(i.NEVER);break;case aa:i.depthFunc(i.ALWAYS);break;case oa:i.depthFunc(i.LESS);break;case Fi:i.depthFunc(i.LEQUAL);break;case la:i.depthFunc(i.EQUAL);break;case ca:i.depthFunc(i.GEQUAL);break;case ha:i.depthFunc(i.GREATER);break;case ua:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}te=ve}},setLocked:function(ve){G=ve},setClear:function(ve){Ee!==ve&&(Ae&&(ve=1-ve),i.clearDepth(ve),Ee=ve)},reset:function(){G=!1,j=null,te=null,Ee=null,Ae=!1}}}function r(){let G=!1,Ae=null,j=null,te=null,Ee=null,ve=null,Ne=null,dt=null,yt=null;return{setTest:function(nt){G||(nt?ue(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(nt){Ae!==nt&&!G&&(i.stencilMask(nt),Ae=nt)},setFunc:function(nt,ft,Kt){(j!==nt||te!==ft||Ee!==Kt)&&(i.stencilFunc(nt,ft,Kt),j=nt,te=ft,Ee=Kt)},setOp:function(nt,ft,Kt){(ve!==nt||Ne!==ft||dt!==Kt)&&(i.stencilOp(nt,ft,Kt),ve=nt,Ne=ft,dt=Kt)},setLocked:function(nt){G=nt},setClear:function(nt){yt!==nt&&(i.clearStencil(nt),yt=nt)},reset:function(){G=!1,Ae=null,j=null,te=null,Ee=null,ve=null,Ne=null,dt=null,yt=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,u=new WeakMap;let p={},_={},g=new WeakMap,x=[],y=null,w=!1,A=null,m=null,I=null,P=null,T=null,z=null,D=null,U=new it(0,0,0),k=0,C=!1,b=null,N=null,K=null,X=null,Y=null;const oe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,he=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(Q)[1]),$=he>=1):Q.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),$=he>=2);let fe=null,ie={};const pe=i.getParameter(i.SCISSOR_BOX),Oe=i.getParameter(i.VIEWPORT),Xe=new _t().fromArray(pe),Z=new _t().fromArray(Oe);function le(G,Ae,j,te){const Ee=new Uint8Array(4),ve=i.createTexture();i.bindTexture(G,ve),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<j;Ne++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Ae,0,i.RGBA,1,1,te,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(Ae+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return ve}const be={};be[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(i.DEPTH_TEST),a.setFunc(Fi),Ze(!1),Ge(go),ue(i.CULL_FACE),F(zn);function ue(G){p[G]!==!0&&(i.enable(G),p[G]=!0)}function Le(G){p[G]!==!1&&(i.disable(G),p[G]=!1)}function He(G,Ae){return _[G]!==Ae?(i.bindFramebuffer(G,Ae),_[G]=Ae,G===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=Ae),G===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ie(G,Ae){let j=x,te=!1;if(G){j=g.get(Ae),j===void 0&&(j=[],g.set(Ae,j));const Ee=G.textures;if(j.length!==Ee.length||j[0]!==i.COLOR_ATTACHMENT0){for(let ve=0,Ne=Ee.length;ve<Ne;ve++)j[ve]=i.COLOR_ATTACHMENT0+ve;j.length=Ee.length,te=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,te=!0);te&&i.drawBuffers(j)}function ut(G){return y!==G?(i.useProgram(G),y=G,!0):!1}const ct={[$n]:i.FUNC_ADD,[Yc]:i.FUNC_SUBTRACT,[qc]:i.FUNC_REVERSE_SUBTRACT};ct[Qc]=i.MIN,ct[jc]=i.MAX;const je={[Zc]:i.ZERO,[Kc]:i.ONE,[$c]:i.SRC_COLOR,[ia]:i.SRC_ALPHA,[rh]:i.SRC_ALPHA_SATURATE,[nh]:i.DST_COLOR,[eh]:i.DST_ALPHA,[Jc]:i.ONE_MINUS_SRC_COLOR,[ra]:i.ONE_MINUS_SRC_ALPHA,[ih]:i.ONE_MINUS_DST_COLOR,[th]:i.ONE_MINUS_DST_ALPHA,[sh]:i.CONSTANT_COLOR,[ah]:i.ONE_MINUS_CONSTANT_COLOR,[oh]:i.CONSTANT_ALPHA,[lh]:i.ONE_MINUS_CONSTANT_ALPHA};function F(G,Ae,j,te,Ee,ve,Ne,dt,yt,nt){if(G===zn){w===!0&&(Le(i.BLEND),w=!1);return}if(w===!1&&(ue(i.BLEND),w=!0),G!==Xc){if(G!==A||nt!==C){if((m!==$n||T!==$n)&&(i.blendEquation(i.FUNC_ADD),m=$n,T=$n),nt)switch(G){case Pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ao:i.blendFunc(i.ONE,i.ONE);break;case vo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ao:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case vo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}I=null,P=null,z=null,D=null,U.set(0,0,0),k=0,A=G,C=nt}return}Ee=Ee||Ae,ve=ve||j,Ne=Ne||te,(Ae!==m||Ee!==T)&&(i.blendEquationSeparate(ct[Ae],ct[Ee]),m=Ae,T=Ee),(j!==I||te!==P||ve!==z||Ne!==D)&&(i.blendFuncSeparate(je[j],je[te],je[ve],je[Ne]),I=j,P=te,z=ve,D=Ne),(dt.equals(U)===!1||yt!==k)&&(i.blendColor(dt.r,dt.g,dt.b,yt),U.copy(dt),k=yt),A=G,C=!1}function xt(G,Ae){G.side===xn?Le(i.CULL_FACE):ue(i.CULL_FACE);let j=G.side===kt;Ae&&(j=!j),Ze(j),G.blending===Pi&&G.transparent===!1?F(zn):F(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),s.setMask(G.colorWrite);const te=G.stencilWrite;o.setTest(te),te&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),$e(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(G){b!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),b=G)}function Ge(G){G!==kc?(ue(i.CULL_FACE),G!==N&&(G===go?i.cullFace(i.BACK):G===Hc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),N=G}function Pe(G){G!==K&&($&&i.lineWidth(G),K=G)}function $e(G,Ae,j){G?(ue(i.POLYGON_OFFSET_FILL),(X!==Ae||Y!==j)&&(i.polygonOffset(Ae,j),X=Ae,Y=j)):Le(i.POLYGON_OFFSET_FILL)}function we(G){G?ue(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function R(G){G===void 0&&(G=i.TEXTURE0+oe-1),fe!==G&&(i.activeTexture(G),fe=G)}function E(G,Ae,j){j===void 0&&(fe===null?j=i.TEXTURE0+oe-1:j=fe);let te=ie[j];te===void 0&&(te={type:void 0,texture:void 0},ie[j]=te),(te.type!==G||te.texture!==Ae)&&(fe!==j&&(i.activeTexture(j),fe=j),i.bindTexture(G,Ae||be[G]),te.type=G,te.texture=Ae)}function H(){const G=ie[fe];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ne(){try{i.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ae(){try{i.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function J(){try{i.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{i.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{i.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{i.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(){try{i.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{i.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(){try{i.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{i.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Be(G){Xe.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Xe.copy(G))}function Me(G){Z.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),Z.copy(G))}function Ve(G,Ae){let j=u.get(Ae);j===void 0&&(j=new WeakMap,u.set(Ae,j));let te=j.get(G);te===void 0&&(te=i.getUniformBlockIndex(Ae,G.name),j.set(G,te))}function ze(G,Ae){const te=u.get(Ae).get(G);c.get(Ae)!==te&&(i.uniformBlockBinding(Ae,te,G.__bindingPointIndex),c.set(Ae,te))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},fe=null,ie={},_={},g=new WeakMap,x=[],y=null,w=!1,A=null,m=null,I=null,P=null,T=null,z=null,D=null,U=new it(0,0,0),k=0,C=!1,b=null,N=null,K=null,X=null,Y=null,Xe.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ue,disable:Le,bindFramebuffer:He,drawBuffers:Ie,useProgram:ut,setBlending:F,setMaterial:xt,setFlipSided:Ze,setCullFace:Ge,setLineWidth:Pe,setPolygonOffset:$e,setScissorTest:we,activeTexture:R,bindTexture:E,unbindTexture:H,compressedTexImage2D:ne,compressedTexImage3D:ae,texImage2D:Te,texImage3D:Fe,updateUBOMapping:Ve,uniformBlockBinding:ze,texStorage2D:et,texStorage3D:ce,texSubImage2D:J,texSubImage3D:me,compressedTexSubImage2D:_e,compressedTexSubImage3D:Se,scissor:Be,viewport:Me,reset:qe}}function Ym(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ke,p=new WeakMap;let _;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,E){return x?new OffscreenCanvas(R,E):as("canvas")}function w(R,E,H){let ne=1;const ae=we(R);if((ae.width>H||ae.height>H)&&(ne=H/Math.max(ae.width,ae.height)),ne<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(ne*ae.width),me=Math.floor(ne*ae.height);_===void 0&&(_=y(J,me));const _e=E?y(J,me):_;return _e.width=J,_e.height=me,_e.getContext("2d").drawImage(R,0,0,J,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+J+"x"+me+")."),_e}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),R;return R}function A(R){return R.generateMipmaps}function m(R){i.generateMipmap(R)}function I(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function P(R,E,H,ne,ae=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=E;if(E===i.RED&&(H===i.FLOAT&&(J=i.R32F),H===i.HALF_FLOAT&&(J=i.R16F),H===i.UNSIGNED_BYTE&&(J=i.R8)),E===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.R8UI),H===i.UNSIGNED_SHORT&&(J=i.R16UI),H===i.UNSIGNED_INT&&(J=i.R32UI),H===i.BYTE&&(J=i.R8I),H===i.SHORT&&(J=i.R16I),H===i.INT&&(J=i.R32I)),E===i.RG&&(H===i.FLOAT&&(J=i.RG32F),H===i.HALF_FLOAT&&(J=i.RG16F),H===i.UNSIGNED_BYTE&&(J=i.RG8)),E===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RG8UI),H===i.UNSIGNED_SHORT&&(J=i.RG16UI),H===i.UNSIGNED_INT&&(J=i.RG32UI),H===i.BYTE&&(J=i.RG8I),H===i.SHORT&&(J=i.RG16I),H===i.INT&&(J=i.RG32I)),E===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGB8UI),H===i.UNSIGNED_SHORT&&(J=i.RGB16UI),H===i.UNSIGNED_INT&&(J=i.RGB32UI),H===i.BYTE&&(J=i.RGB8I),H===i.SHORT&&(J=i.RGB16I),H===i.INT&&(J=i.RGB32I)),E===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),H===i.UNSIGNED_INT&&(J=i.RGBA32UI),H===i.BYTE&&(J=i.RGBA8I),H===i.SHORT&&(J=i.RGBA16I),H===i.INT&&(J=i.RGBA32I)),E===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),E===i.RGBA){const me=ae?rs:tt.getTransfer(ne);H===i.FLOAT&&(J=i.RGBA32F),H===i.HALF_FLOAT&&(J=i.RGBA16F),H===i.UNSIGNED_BYTE&&(J=me===at?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function T(R,E){let H;return R?E===null||E===ii||E===ar?H=i.DEPTH24_STENCIL8:E===Mn?H=i.DEPTH32F_STENCIL8:E===sr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ii||E===ar?H=i.DEPTH_COMPONENT24:E===Mn?H=i.DEPTH_COMPONENT32F:E===sr&&(H=i.DEPTH_COMPONENT16),H}function z(R,E){return A(R)===!0||R.isFramebufferTexture&&R.minFilter!==sn&&R.minFilter!==cn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function D(R){const E=R.target;E.removeEventListener("dispose",D),k(E),E.isVideoTexture&&p.delete(E)}function U(R){const E=R.target;E.removeEventListener("dispose",U),b(E)}function k(R){const E=n.get(R);if(E.__webglInit===void 0)return;const H=R.source,ne=g.get(H);if(ne){const ae=ne[E.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&C(R),Object.keys(ne).length===0&&g.delete(H)}n.remove(R)}function C(R){const E=n.get(R);i.deleteTexture(E.__webglTexture);const H=R.source,ne=g.get(H);delete ne[E.__cacheKey],a.memory.textures--}function b(R){const E=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(E.__webglFramebuffer[ne]))for(let ae=0;ae<E.__webglFramebuffer[ne].length;ae++)i.deleteFramebuffer(E.__webglFramebuffer[ne][ae]);else i.deleteFramebuffer(E.__webglFramebuffer[ne]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ne])}else{if(Array.isArray(E.__webglFramebuffer))for(let ne=0;ne<E.__webglFramebuffer.length;ne++)i.deleteFramebuffer(E.__webglFramebuffer[ne]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ne=0;ne<E.__webglColorRenderbuffer.length;ne++)E.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ne]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const H=R.textures;for(let ne=0,ae=H.length;ne<ae;ne++){const J=n.get(H[ne]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(H[ne])}n.remove(R)}let N=0;function K(){N=0}function X(){const R=N;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),N+=1,R}function Y(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function oe(R,E){const H=n.get(R);if(R.isVideoTexture&&Pe(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const ne=R.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(H,R,E);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+E)}function $(R,E){const H=n.get(R);if(R.version>0&&H.__version!==R.version){Z(H,R,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+E)}function he(R,E){const H=n.get(R);if(R.version>0&&H.__version!==R.version){Z(H,R,E);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+E)}function Q(R,E){const H=n.get(R);if(R.version>0&&H.__version!==R.version){le(H,R,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+E)}const fe={[pa]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[ma]:i.MIRRORED_REPEAT},ie={[sn]:i.NEAREST,[Ah]:i.NEAREST_MIPMAP_NEAREST,[br]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[gs]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},pe={[Mh]:i.NEVER,[Rh]:i.ALWAYS,[Sh]:i.LESS,[Jl]:i.LEQUAL,[yh]:i.EQUAL,[Th]:i.GEQUAL,[bh]:i.GREATER,[wh]:i.NOTEQUAL};function Oe(R,E){if(E.type===Mn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===cn||E.magFilter===gs||E.magFilter===br||E.magFilter===ti||E.minFilter===cn||E.minFilter===gs||E.minFilter===br||E.minFilter===ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,fe[E.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,fe[E.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,fe[E.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ie[E.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ie[E.minFilter]),E.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,pe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===sn||E.minFilter!==br&&E.minFilter!==ti||E.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Xe(R,E){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",D));const ne=E.source;let ae=g.get(ne);ae===void 0&&(ae={},g.set(ne,ae));const J=Y(E);if(J!==R.__cacheKey){ae[J]===void 0&&(ae[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ae[J].usedTimes++;const me=ae[R.__cacheKey];me!==void 0&&(ae[R.__cacheKey].usedTimes--,me.usedTimes===0&&C(E)),R.__cacheKey=J,R.__webglTexture=ae[J].texture}return H}function Z(R,E,H){let ne=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ne=i.TEXTURE_3D);const ae=Xe(R,E),J=E.source;t.bindTexture(ne,R.__webglTexture,i.TEXTURE0+H);const me=n.get(J);if(J.version!==me.__version||ae===!0){t.activeTexture(i.TEXTURE0+H);const _e=tt.getPrimaries(tt.workingColorSpace),Se=E.colorSpace===Bn?null:tt.getPrimaries(E.colorSpace),et=E.colorSpace===Bn||_e===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let ce=w(E.image,!1,r.maxTextureSize);ce=$e(E,ce);const Te=s.convert(E.format,E.colorSpace),Fe=s.convert(E.type);let Be=P(E.internalFormat,Te,Fe,E.colorSpace,E.isVideoTexture);Oe(ne,E);let Me;const Ve=E.mipmaps,ze=E.isVideoTexture!==!0,qe=me.__version===void 0||ae===!0,G=J.dataReady,Ae=z(E,ce);if(E.isDepthTexture)Be=T(E.format===lr,E.type),qe&&(ze?t.texStorage2D(i.TEXTURE_2D,1,Be,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,Be,ce.width,ce.height,0,Te,Fe,null));else if(E.isDataTexture)if(Ve.length>0){ze&&qe&&t.texStorage2D(i.TEXTURE_2D,Ae,Be,Ve[0].width,Ve[0].height);for(let j=0,te=Ve.length;j<te;j++)Me=Ve[j],ze?G&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Me.width,Me.height,Te,Fe,Me.data):t.texImage2D(i.TEXTURE_2D,j,Be,Me.width,Me.height,0,Te,Fe,Me.data);E.generateMipmaps=!1}else ze?(qe&&t.texStorage2D(i.TEXTURE_2D,Ae,Be,ce.width,ce.height),G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce.width,ce.height,Te,Fe,ce.data)):t.texImage2D(i.TEXTURE_2D,0,Be,ce.width,ce.height,0,Te,Fe,ce.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ze&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Be,Ve[0].width,Ve[0].height,ce.depth);for(let j=0,te=Ve.length;j<te;j++)if(Me=Ve[j],E.format!==rn)if(Te!==null)if(ze){if(G)if(E.layerUpdates.size>0){const Ee=Yo(Me.width,Me.height,E.format,E.type);for(const ve of E.layerUpdates){const Ne=Me.data.subarray(ve*Ee/Me.data.BYTES_PER_ELEMENT,(ve+1)*Ee/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,ve,Me.width,Me.height,1,Te,Ne)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Me.width,Me.height,ce.depth,Te,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Be,Me.width,Me.height,ce.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Me.width,Me.height,ce.depth,Te,Fe,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,Be,Me.width,Me.height,ce.depth,0,Te,Fe,Me.data)}else{ze&&qe&&t.texStorage2D(i.TEXTURE_2D,Ae,Be,Ve[0].width,Ve[0].height);for(let j=0,te=Ve.length;j<te;j++)Me=Ve[j],E.format!==rn?Te!==null?ze?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,Me.width,Me.height,Te,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,j,Be,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?G&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Me.width,Me.height,Te,Fe,Me.data):t.texImage2D(i.TEXTURE_2D,j,Be,Me.width,Me.height,0,Te,Fe,Me.data)}else if(E.isDataArrayTexture)if(ze){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Be,ce.width,ce.height,ce.depth),G)if(E.layerUpdates.size>0){const j=Yo(ce.width,ce.height,E.format,E.type);for(const te of E.layerUpdates){const Ee=ce.data.subarray(te*j/ce.data.BYTES_PER_ELEMENT,(te+1)*j/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,ce.width,ce.height,1,Te,Fe,Ee)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Te,Fe,ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Be,ce.width,ce.height,ce.depth,0,Te,Fe,ce.data);else if(E.isData3DTexture)ze?(qe&&t.texStorage3D(i.TEXTURE_3D,Ae,Be,ce.width,ce.height,ce.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Te,Fe,ce.data)):t.texImage3D(i.TEXTURE_3D,0,Be,ce.width,ce.height,ce.depth,0,Te,Fe,ce.data);else if(E.isFramebufferTexture){if(qe)if(ze)t.texStorage2D(i.TEXTURE_2D,Ae,Be,ce.width,ce.height);else{let j=ce.width,te=ce.height;for(let Ee=0;Ee<Ae;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,Be,j,te,0,Te,Fe,null),j>>=1,te>>=1}}else if(Ve.length>0){if(ze&&qe){const j=we(Ve[0]);t.texStorage2D(i.TEXTURE_2D,Ae,Be,j.width,j.height)}for(let j=0,te=Ve.length;j<te;j++)Me=Ve[j],ze?G&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Te,Fe,Me):t.texImage2D(i.TEXTURE_2D,j,Be,Te,Fe,Me);E.generateMipmaps=!1}else if(ze){if(qe){const j=we(ce);t.texStorage2D(i.TEXTURE_2D,Ae,Be,j.width,j.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,Fe,ce)}else t.texImage2D(i.TEXTURE_2D,0,Be,Te,Fe,ce);A(E)&&m(ne),me.__version=J.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function le(R,E,H){if(E.image.length!==6)return;const ne=Xe(R,E),ae=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+H);const J=n.get(ae);if(ae.version!==J.__version||ne===!0){t.activeTexture(i.TEXTURE0+H);const me=tt.getPrimaries(tt.workingColorSpace),_e=E.colorSpace===Bn?null:tt.getPrimaries(E.colorSpace),Se=E.colorSpace===Bn||me===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const et=E.isCompressedTexture||E.image[0].isCompressedTexture,ce=E.image[0]&&E.image[0].isDataTexture,Te=[];for(let te=0;te<6;te++)!et&&!ce?Te[te]=w(E.image[te],!0,r.maxCubemapSize):Te[te]=ce?E.image[te].image:E.image[te],Te[te]=$e(E,Te[te]);const Fe=Te[0],Be=s.convert(E.format,E.colorSpace),Me=s.convert(E.type),Ve=P(E.internalFormat,Be,Me,E.colorSpace),ze=E.isVideoTexture!==!0,qe=J.__version===void 0||ne===!0,G=ae.dataReady;let Ae=z(E,Fe);Oe(i.TEXTURE_CUBE_MAP,E);let j;if(et){ze&&qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,Ve,Fe.width,Fe.height);for(let te=0;te<6;te++){j=Te[te].mipmaps;for(let Ee=0;Ee<j.length;Ee++){const ve=j[Ee];E.format!==rn?Be!==null?ze?G&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,0,0,ve.width,ve.height,Be,ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,Ve,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,0,0,ve.width,ve.height,Be,Me,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,Ve,ve.width,ve.height,0,Be,Me,ve.data)}}}else{if(j=E.mipmaps,ze&&qe){j.length>0&&Ae++;const te=we(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,Ve,te.width,te.height)}for(let te=0;te<6;te++)if(ce){ze?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Te[te].width,Te[te].height,Be,Me,Te[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ve,Te[te].width,Te[te].height,0,Be,Me,Te[te].data);for(let Ee=0;Ee<j.length;Ee++){const Ne=j[Ee].image[te].image;ze?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,0,0,Ne.width,Ne.height,Be,Me,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,Ve,Ne.width,Ne.height,0,Be,Me,Ne.data)}}else{ze?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Be,Me,Te[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ve,Be,Me,Te[te]);for(let Ee=0;Ee<j.length;Ee++){const ve=j[Ee];ze?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,0,0,Be,Me,ve.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,Ve,Be,Me,ve.image[te])}}}A(E)&&m(i.TEXTURE_CUBE_MAP),J.__version=ae.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function be(R,E,H,ne,ae,J){const me=s.convert(H.format,H.colorSpace),_e=s.convert(H.type),Se=P(H.internalFormat,me,_e,H.colorSpace),et=n.get(E),ce=n.get(H);if(ce.__renderTarget=E,!et.__hasExternalTextures){const Te=Math.max(1,E.width>>J),Fe=Math.max(1,E.height>>J);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,J,Se,Te,Fe,E.depth,0,me,_e,null):t.texImage2D(ae,J,Se,Te,Fe,0,me,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Ge(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ae,ce.__webglTexture,0,Ze(E)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,ae,ce.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(R,E,H){if(i.bindRenderbuffer(i.RENDERBUFFER,R),E.depthBuffer){const ne=E.depthTexture,ae=ne&&ne.isDepthTexture?ne.type:null,J=T(E.stencilBuffer,ae),me=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=Ze(E);Ge(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,J,E.width,E.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,J,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,J,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,R)}else{const ne=E.textures;for(let ae=0;ae<ne.length;ae++){const J=ne[ae],me=s.convert(J.format,J.colorSpace),_e=s.convert(J.type),Se=P(J.internalFormat,me,_e,J.colorSpace),et=Ze(E);H&&Ge(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,Se,E.width,E.height):Ge(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,Se,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Se,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=n.get(E.depthTexture);ne.__renderTarget=E,(!ne.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),oe(E.depthTexture,0);const ae=ne.__webglTexture,J=Ze(E);if(E.depthTexture.format===or)Ge(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(E.depthTexture.format===lr)Ge(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function He(R){const E=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const ne=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ne){const ae=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ne.removeEventListener("dispose",ae)};ne.addEventListener("dispose",ae),E.__depthDisposeCallback=ae}E.__boundDepthTexture=ne}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Le(E.__webglFramebuffer,R)}else if(H){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]===void 0)E.__webglDepthbuffer[ne]=i.createRenderbuffer(),ue(E.__webglDepthbuffer[ne],R,!1);else{const ae=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,J)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ue(E.__webglDepthbuffer,R,!1);else{const ne=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(R,E,H){const ne=n.get(R);E!==void 0&&be(ne.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&He(R)}function ut(R){const E=R.texture,H=n.get(R),ne=n.get(E);R.addEventListener("dispose",U);const ae=R.textures,J=R.isWebGLCubeRenderTarget===!0,me=ae.length>1;if(me||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=E.version,a.memory.textures++),J){H.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[_e]=[];for(let Se=0;Se<E.mipmaps.length;Se++)H.__webglFramebuffer[_e][Se]=i.createFramebuffer()}else H.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let _e=0;_e<E.mipmaps.length;_e++)H.__webglFramebuffer[_e]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(me)for(let _e=0,Se=ae.length;_e<Se;_e++){const et=n.get(ae[_e]);et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Ge(R)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let _e=0;_e<ae.length;_e++){const Se=ae[_e];H.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[_e]);const et=s.convert(Se.format,Se.colorSpace),ce=s.convert(Se.type),Te=P(Se.internalFormat,et,ce,Se.colorSpace,R.isXRRenderTarget===!0),Fe=Ze(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,Te,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,H.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),ue(H.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,E);for(let _e=0;_e<6;_e++)if(E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)be(H.__webglFramebuffer[_e][Se],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Se);else be(H.__webglFramebuffer[_e],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);A(E)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let _e=0,Se=ae.length;_e<Se;_e++){const et=ae[_e],ce=n.get(et);t.bindTexture(i.TEXTURE_2D,ce.__webglTexture),Oe(i.TEXTURE_2D,et),be(H.__webglFramebuffer,R,et,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,0),A(et)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_e=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,ne.__webglTexture),Oe(_e,E),E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)be(H.__webglFramebuffer[Se],R,E,i.COLOR_ATTACHMENT0,_e,Se);else be(H.__webglFramebuffer,R,E,i.COLOR_ATTACHMENT0,_e,0);A(E)&&m(_e),t.unbindTexture()}R.depthBuffer&&He(R)}function ct(R){const E=R.textures;for(let H=0,ne=E.length;H<ne;H++){const ae=E[H];if(A(ae)){const J=I(R),me=n.get(ae).__webglTexture;t.bindTexture(J,me),m(J),t.unbindTexture()}}}const je=[],F=[];function xt(R){if(R.samples>0){if(Ge(R)===!1){const E=R.textures,H=R.width,ne=R.height;let ae=i.COLOR_BUFFER_BIT;const J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(R),_e=E.length>1;if(_e)for(let Se=0;Se<E.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Se=0;Se<E.length;Se++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),_e){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[Se]);const et=n.get(E[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,H,ne,0,0,H,ne,ae,i.NEAREST),c===!0&&(je.length=0,F.length=0,je.push(i.COLOR_ATTACHMENT0+Se),R.depthBuffer&&R.resolveDepthBuffer===!1&&(je.push(J),F.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let Se=0;Se<E.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,me.__webglColorRenderbuffer[Se]);const et=n.get(E[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,et,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const E=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Ze(R){return Math.min(r.maxSamples,R.samples)}function Ge(R){const E=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Pe(R){const E=a.render.frame;p.get(R)!==E&&(p.set(R,E),R.update())}function $e(R,E){const H=R.colorSpace,ne=R.format,ae=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==Oi&&H!==Bn&&(tt.getTransfer(H)===at?(ne!==rn||ae!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}function we(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=X,this.resetTextureUnits=K,this.setTexture2D=oe,this.setTexture2DArray=$,this.setTexture3D=he,this.setTextureCube=Q,this.rebindTextures=Ie,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Ge}function qm(i,e){function t(n,r=Bn){let s;const a=tt.getTransfer(r);if(n===bn)return i.UNSIGNED_BYTE;if(n===Ka)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$a)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kl)return i.BYTE;if(n===Hl)return i.SHORT;if(n===sr)return i.UNSIGNED_SHORT;if(n===Za)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===fr)return i.HALF_FLOAT;if(n===Xl)return i.ALPHA;if(n===Yl)return i.RGB;if(n===rn)return i.RGBA;if(n===ql)return i.LUMINANCE;if(n===Ql)return i.LUMINANCE_ALPHA;if(n===or)return i.DEPTH_COMPONENT;if(n===lr)return i.DEPTH_STENCIL;if(n===jl)return i.RED;if(n===Ja)return i.RED_INTEGER;if(n===Zl)return i.RG;if(n===eo)return i.RG_INTEGER;if(n===to)return i.RGBA_INTEGER;if(n===Zr||n===Kr||n===$r||n===Jr)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Zr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Zr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Kr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$r)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_a||n===ga||n===Aa||n===va)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===_a)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ga)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Aa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===va)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xa||n===Ea||n===Ma)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===xa||n===Ea)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ma)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sa||n===ya||n===ba||n===wa||n===Ta||n===Ra||n===Ca||n===Pa||n===Da||n===La||n===Ia||n===Fa||n===Ua||n===Na)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Sa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ya)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ba)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ta)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ra)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ca)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Da)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===La)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ia)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ua)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Na)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===es||n===Oa||n===Ba)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===es)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ba)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kl||n===za||n===Ga||n===Va)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===es)return s.COMPRESSED_RED_RGTC1_EXT;if(n===za)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ga)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Va)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ar?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Qm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Zm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Ht,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new kn({vertexShader:Qm,fragmentShader:jm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new hn(new us(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Km extends oi{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,p=null,_=null,g=null,x=null,y=null;const w=new Zm,A=t.getContextAttributes();let m=null,I=null;const P=[],T=[],z=new ke;let D=null;const U=new Zt;U.viewport=new _t;const k=new Zt;k.viewport=new _t;const C=[U,k],b=new mu;let N=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let le=P[Z];return le===void 0&&(le=new Bs,P[Z]=le),le.getTargetRaySpace()},this.getControllerGrip=function(Z){let le=P[Z];return le===void 0&&(le=new Bs,P[Z]=le),le.getGripSpace()},this.getHand=function(Z){let le=P[Z];return le===void 0&&(le=new Bs,P[Z]=le),le.getHandSpace()};function X(Z){const le=T.indexOf(Z.inputSource);if(le===-1)return;const be=P[le];be!==void 0&&(be.update(Z.inputSource,Z.frame,u||a),be.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",oe);for(let Z=0;Z<P.length;Z++){const le=T[Z];le!==null&&(T[Z]=null,P[Z].disconnect(le))}N=null,K=null,w.reset(),e.setRenderTarget(m),x=null,g=null,_=null,r=null,I=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(z.width,z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return _},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",oe),A.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(z),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,ue=null,Le=null;A.depth&&(Le=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=A.stencil?lr:or,ue=A.stencil?ar:ii);const He={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:s};_=new XRWebGLBinding(r,t),g=_.createProjectionLayer(He),r.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),I=new ri(g.textureWidth,g.textureHeight,{format:rn,type:bn,depthTexture:new cc(g.textureWidth,g.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const be={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};x=new XRWebGLLayer(r,t,be),r.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),I=new ri(x.framebufferWidth,x.framebufferHeight,{format:rn,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),Xe.setContext(r),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function oe(Z){for(let le=0;le<Z.removed.length;le++){const be=Z.removed[le],ue=T.indexOf(be);ue>=0&&(T[ue]=null,P[ue].disconnect(be))}for(let le=0;le<Z.added.length;le++){const be=Z.added[le];let ue=T.indexOf(be);if(ue===-1){for(let He=0;He<P.length;He++)if(He>=T.length){T.push(be),ue=He;break}else if(T[He]===null){T[He]=be,ue=He;break}if(ue===-1)break}const Le=P[ue];Le&&Le.connect(be)}}const $=new W,he=new W;function Q(Z,le,be){$.setFromMatrixPosition(le.matrixWorld),he.setFromMatrixPosition(be.matrixWorld);const ue=$.distanceTo(he),Le=le.projectionMatrix.elements,He=be.projectionMatrix.elements,Ie=Le[14]/(Le[10]-1),ut=Le[14]/(Le[10]+1),ct=(Le[9]+1)/Le[5],je=(Le[9]-1)/Le[5],F=(Le[8]-1)/Le[0],xt=(He[8]+1)/He[0],Ze=Ie*F,Ge=Ie*xt,Pe=ue/(-F+xt),$e=Pe*-F;if(le.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX($e),Z.translateZ(Pe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Le[10]===-1)Z.projectionMatrix.copy(le.projectionMatrix),Z.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const we=Ie+Pe,R=ut+Pe,E=Ze-$e,H=Ge+(ue-$e),ne=ct*ut/R*we,ae=je*ut/R*we;Z.projectionMatrix.makePerspective(E,H,ne,ae,we,R),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function fe(Z,le){le===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(le.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let le=Z.near,be=Z.far;w.texture!==null&&(w.depthNear>0&&(le=w.depthNear),w.depthFar>0&&(be=w.depthFar)),b.near=k.near=U.near=le,b.far=k.far=U.far=be,(N!==b.near||K!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),N=b.near,K=b.far),U.layers.mask=Z.layers.mask|2,k.layers.mask=Z.layers.mask|4,b.layers.mask=U.layers.mask|k.layers.mask;const ue=Z.parent,Le=b.cameras;fe(b,ue);for(let He=0;He<Le.length;He++)fe(Le[He],ue);Le.length===2?Q(b,U,k):b.projectionMatrix.copy(U.projectionMatrix),ie(Z,b,ue)};function ie(Z,le,be){be===null?Z.matrix.copy(le.matrixWorld):(Z.matrix.copy(be.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(le.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(le.projectionMatrix),Z.projectionMatrixInverse.copy(le.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ka*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(g===null&&x===null))return c},this.setFoveation=function(Z){c=Z,g!==null&&(g.fixedFoveation=Z),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Z)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(b)};let pe=null;function Oe(Z,le){if(p=le.getViewerPose(u||a),y=le,p!==null){const be=p.views;x!==null&&(e.setRenderTargetFramebuffer(I,x.framebuffer),e.setRenderTarget(I));let ue=!1;be.length!==b.cameras.length&&(b.cameras.length=0,ue=!0);for(let Ie=0;Ie<be.length;Ie++){const ut=be[Ie];let ct=null;if(x!==null)ct=x.getViewport(ut);else{const F=_.getViewSubImage(g,ut);ct=F.viewport,Ie===0&&(e.setRenderTargetTextures(I,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(I))}let je=C[Ie];je===void 0&&(je=new Zt,je.layers.enable(Ie),je.viewport=new _t,C[Ie]=je),je.matrix.fromArray(ut.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(ut.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(ct.x,ct.y,ct.width,ct.height),Ie===0&&(b.matrix.copy(je.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ue===!0&&b.cameras.push(je)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){const Ie=_.getDepthInformation(be[0]);Ie&&Ie.isValid&&Ie.texture&&w.init(e,Ie,r.renderState)}}for(let be=0;be<P.length;be++){const ue=T[be],Le=P[be];ue!==null&&Le!==void 0&&Le.update(ue,le,u||a)}pe&&pe(Z,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),y=null}const Xe=new dc;Xe.setAnimationLoop(Oe),this.setAnimationLoop=function(Z){pe=Z},this.dispose=function(){}}}const jn=new un,$m=new pt;function Jm(i,e){function t(A,m){A.matrixAutoUpdate===!0&&A.updateMatrix(),m.value.copy(A.matrix)}function n(A,m){m.color.getRGB(A.fogColor.value,ac(i)),m.isFog?(A.fogNear.value=m.near,A.fogFar.value=m.far):m.isFogExp2&&(A.fogDensity.value=m.density)}function r(A,m,I,P,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(A,m):m.isMeshToonMaterial?(s(A,m),_(A,m)):m.isMeshPhongMaterial?(s(A,m),p(A,m)):m.isMeshStandardMaterial?(s(A,m),g(A,m),m.isMeshPhysicalMaterial&&x(A,m,T)):m.isMeshMatcapMaterial?(s(A,m),y(A,m)):m.isMeshDepthMaterial?s(A,m):m.isMeshDistanceMaterial?(s(A,m),w(A,m)):m.isMeshNormalMaterial?s(A,m):m.isLineBasicMaterial?(a(A,m),m.isLineDashedMaterial&&o(A,m)):m.isPointsMaterial?c(A,m,I,P):m.isSpriteMaterial?u(A,m):m.isShadowMaterial?(A.color.value.copy(m.color),A.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(A,m){A.opacity.value=m.opacity,m.color&&A.diffuse.value.copy(m.color),m.emissive&&A.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(A.map.value=m.map,t(m.map,A.mapTransform)),m.alphaMap&&(A.alphaMap.value=m.alphaMap,t(m.alphaMap,A.alphaMapTransform)),m.bumpMap&&(A.bumpMap.value=m.bumpMap,t(m.bumpMap,A.bumpMapTransform),A.bumpScale.value=m.bumpScale,m.side===kt&&(A.bumpScale.value*=-1)),m.normalMap&&(A.normalMap.value=m.normalMap,t(m.normalMap,A.normalMapTransform),A.normalScale.value.copy(m.normalScale),m.side===kt&&A.normalScale.value.negate()),m.displacementMap&&(A.displacementMap.value=m.displacementMap,t(m.displacementMap,A.displacementMapTransform),A.displacementScale.value=m.displacementScale,A.displacementBias.value=m.displacementBias),m.emissiveMap&&(A.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,A.emissiveMapTransform)),m.specularMap&&(A.specularMap.value=m.specularMap,t(m.specularMap,A.specularMapTransform)),m.alphaTest>0&&(A.alphaTest.value=m.alphaTest);const I=e.get(m),P=I.envMap,T=I.envMapRotation;P&&(A.envMap.value=P,jn.copy(T),jn.x*=-1,jn.y*=-1,jn.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),A.envMapRotation.value.setFromMatrix4($m.makeRotationFromEuler(jn)),A.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,A.reflectivity.value=m.reflectivity,A.ior.value=m.ior,A.refractionRatio.value=m.refractionRatio),m.lightMap&&(A.lightMap.value=m.lightMap,A.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,A.lightMapTransform)),m.aoMap&&(A.aoMap.value=m.aoMap,A.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,A.aoMapTransform))}function a(A,m){A.diffuse.value.copy(m.color),A.opacity.value=m.opacity,m.map&&(A.map.value=m.map,t(m.map,A.mapTransform))}function o(A,m){A.dashSize.value=m.dashSize,A.totalSize.value=m.dashSize+m.gapSize,A.scale.value=m.scale}function c(A,m,I,P){A.diffuse.value.copy(m.color),A.opacity.value=m.opacity,A.size.value=m.size*I,A.scale.value=P*.5,m.map&&(A.map.value=m.map,t(m.map,A.uvTransform)),m.alphaMap&&(A.alphaMap.value=m.alphaMap,t(m.alphaMap,A.alphaMapTransform)),m.alphaTest>0&&(A.alphaTest.value=m.alphaTest)}function u(A,m){A.diffuse.value.copy(m.color),A.opacity.value=m.opacity,A.rotation.value=m.rotation,m.map&&(A.map.value=m.map,t(m.map,A.mapTransform)),m.alphaMap&&(A.alphaMap.value=m.alphaMap,t(m.alphaMap,A.alphaMapTransform)),m.alphaTest>0&&(A.alphaTest.value=m.alphaTest)}function p(A,m){A.specular.value.copy(m.specular),A.shininess.value=Math.max(m.shininess,1e-4)}function _(A,m){m.gradientMap&&(A.gradientMap.value=m.gradientMap)}function g(A,m){A.metalness.value=m.metalness,m.metalnessMap&&(A.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,A.metalnessMapTransform)),A.roughness.value=m.roughness,m.roughnessMap&&(A.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,A.roughnessMapTransform)),m.envMap&&(A.envMapIntensity.value=m.envMapIntensity)}function x(A,m,I){A.ior.value=m.ior,m.sheen>0&&(A.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),A.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(A.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,A.sheenColorMapTransform)),m.sheenRoughnessMap&&(A.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,A.sheenRoughnessMapTransform))),m.clearcoat>0&&(A.clearcoat.value=m.clearcoat,A.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(A.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,A.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(A.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,A.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(A.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,A.clearcoatNormalMapTransform),A.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===kt&&A.clearcoatNormalScale.value.negate())),m.dispersion>0&&(A.dispersion.value=m.dispersion),m.iridescence>0&&(A.iridescence.value=m.iridescence,A.iridescenceIOR.value=m.iridescenceIOR,A.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],A.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(A.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,A.iridescenceMapTransform)),m.iridescenceThicknessMap&&(A.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,A.iridescenceThicknessMapTransform))),m.transmission>0&&(A.transmission.value=m.transmission,A.transmissionSamplerMap.value=I.texture,A.transmissionSamplerSize.value.set(I.width,I.height),m.transmissionMap&&(A.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,A.transmissionMapTransform)),A.thickness.value=m.thickness,m.thicknessMap&&(A.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,A.thicknessMapTransform)),A.attenuationDistance.value=m.attenuationDistance,A.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(A.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(A.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,A.anisotropyMapTransform))),A.specularIntensity.value=m.specularIntensity,A.specularColor.value.copy(m.specularColor),m.specularColorMap&&(A.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,A.specularColorMapTransform)),m.specularIntensityMap&&(A.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,A.specularIntensityMapTransform))}function y(A,m){m.matcap&&(A.matcap.value=m.matcap)}function w(A,m){const I=e.get(m).light;A.referencePosition.value.setFromMatrixPosition(I.matrixWorld),A.nearDistance.value=I.shadow.camera.near,A.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function e0(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(I,P){const T=P.program;n.uniformBlockBinding(I,T)}function u(I,P){let T=r[I.id];T===void 0&&(y(I),T=p(I),r[I.id]=T,I.addEventListener("dispose",A));const z=P.program;n.updateUBOMapping(I,z);const D=e.render.frame;s[I.id]!==D&&(g(I),s[I.id]=D)}function p(I){const P=_();I.__bindingPointIndex=P;const T=i.createBuffer(),z=I.__size,D=I.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,z,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,P,T),T}function _(){for(let I=0;I<o;I++)if(a.indexOf(I)===-1)return a.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(I){const P=r[I.id],T=I.uniforms,z=I.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let D=0,U=T.length;D<U;D++){const k=Array.isArray(T[D])?T[D]:[T[D]];for(let C=0,b=k.length;C<b;C++){const N=k[C];if(x(N,D,C,z)===!0){const K=N.__offset,X=Array.isArray(N.value)?N.value:[N.value];let Y=0;for(let oe=0;oe<X.length;oe++){const $=X[oe],he=w($);typeof $=="number"||typeof $=="boolean"?(N.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,K+Y,N.__data)):$.isMatrix3?(N.__data[0]=$.elements[0],N.__data[1]=$.elements[1],N.__data[2]=$.elements[2],N.__data[3]=0,N.__data[4]=$.elements[3],N.__data[5]=$.elements[4],N.__data[6]=$.elements[5],N.__data[7]=0,N.__data[8]=$.elements[6],N.__data[9]=$.elements[7],N.__data[10]=$.elements[8],N.__data[11]=0):($.toArray(N.__data,Y),Y+=he.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,K,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(I,P,T,z){const D=I.value,U=P+"_"+T;if(z[U]===void 0)return typeof D=="number"||typeof D=="boolean"?z[U]=D:z[U]=D.clone(),!0;{const k=z[U];if(typeof D=="number"||typeof D=="boolean"){if(k!==D)return z[U]=D,!0}else if(k.equals(D)===!1)return k.copy(D),!0}return!1}function y(I){const P=I.uniforms;let T=0;const z=16;for(let U=0,k=P.length;U<k;U++){const C=Array.isArray(P[U])?P[U]:[P[U]];for(let b=0,N=C.length;b<N;b++){const K=C[b],X=Array.isArray(K.value)?K.value:[K.value];for(let Y=0,oe=X.length;Y<oe;Y++){const $=X[Y],he=w($),Q=T%z,fe=Q%he.boundary,ie=Q+fe;T+=fe,ie!==0&&z-ie<he.storage&&(T+=z-ie),K.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=T,T+=he.storage}}}const D=T%z;return D>0&&(T+=z-D),I.__size=T,I.__cache={},this}function w(I){const P={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(P.boundary=4,P.storage=4):I.isVector2?(P.boundary=8,P.storage=8):I.isVector3||I.isColor?(P.boundary=16,P.storage=12):I.isVector4?(P.boundary=16,P.storage=16):I.isMatrix3?(P.boundary=48,P.storage=48):I.isMatrix4?(P.boundary=64,P.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),P}function A(I){const P=I.target;P.removeEventListener("dispose",A);const T=a.indexOf(P.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(r[P.id]),delete r[P.id],delete s[P.id]}function m(){for(const I in r)i.deleteBuffer(r[I]);a=[],r={},s={}}return{bind:c,update:u,dispose:m}}class t0{constructor(e={}){const{canvas:t=Dh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;const y=new Uint32Array(4),w=new Int32Array(4);let A=null,m=null;const I=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let z=!1;this._outputColorSpace=jt;let D=0,U=0,k=null,C=-1,b=null;const N=new _t,K=new _t;let X=null;const Y=new it(0);let oe=0,$=t.width,he=t.height,Q=1,fe=null,ie=null;const pe=new _t(0,0,$,he),Oe=new _t(0,0,$,he);let Xe=!1;const Z=new ao;let le=!1,be=!1;const ue=new pt,Le=new pt,He=new W,Ie=new _t,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function je(){return k===null?Q:1}let F=n;function xt(l,f){return t.getContext(l,f)}try{const l={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ja}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",ve,!1),F===null){const f="webgl2";if(F=xt(f,l),F===null)throw xt(f)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(l){throw console.error("THREE.WebGLRenderer: "+l.message),l}let Ze,Ge,Pe,$e,we,R,E,H,ne,ae,J,me,_e,Se,et,ce,Te,Fe,Be,Me,Ve,ze,qe,G;function Ae(){Ze=new up(F),Ze.init(),ze=new qm(F,Ze),Ge=new rp(F,Ze,e,ze),Pe=new Xm(F,Ze),Ge.reverseDepthBuffer&&g&&Pe.buffers.depth.setReversed(!0),$e=new pp(F),we=new Lm,R=new Ym(F,Ze,Pe,we,Ge,ze,$e),E=new ap(T),H=new hp(T),ne=new vu(F),qe=new np(F,ne),ae=new dp(F,ne,$e,qe),J=new _p(F,ae,ne,$e),Be=new mp(F,Ge,R),ce=new sp(we),me=new Dm(T,E,H,Ze,Ge,qe,ce),_e=new Jm(T,we),Se=new Fm,et=new Gm(Ze),Fe=new tp(T,E,H,Pe,J,x,c),Te=new Hm(T,J,Ge),G=new e0(F,$e,Ge,Pe),Me=new ip(F,Ze,$e),Ve=new fp(F,Ze,$e),$e.programs=me.programs,T.capabilities=Ge,T.extensions=Ze,T.properties=we,T.renderLists=Se,T.shadowMap=Te,T.state=Pe,T.info=$e}Ae();const j=new Km(T,F);this.xr=j,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const l=Ze.get("WEBGL_lose_context");l&&l.loseContext()},this.forceContextRestore=function(){const l=Ze.get("WEBGL_lose_context");l&&l.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(l){l!==void 0&&(Q=l,this.setSize($,he,!1))},this.getSize=function(l){return l.set($,he)},this.setSize=function(l,f,v=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=l,he=f,t.width=Math.floor(l*Q),t.height=Math.floor(f*Q),v===!0&&(t.style.width=l+"px",t.style.height=f+"px"),this.setViewport(0,0,l,f)},this.getDrawingBufferSize=function(l){return l.set($*Q,he*Q).floor()},this.setDrawingBufferSize=function(l,f,v){$=l,he=f,Q=v,t.width=Math.floor(l*v),t.height=Math.floor(f*v),this.setViewport(0,0,l,f)},this.getCurrentViewport=function(l){return l.copy(N)},this.getViewport=function(l){return l.copy(pe)},this.setViewport=function(l,f,v,M){l.isVector4?pe.set(l.x,l.y,l.z,l.w):pe.set(l,f,v,M),Pe.viewport(N.copy(pe).multiplyScalar(Q).round())},this.getScissor=function(l){return l.copy(Oe)},this.setScissor=function(l,f,v,M){l.isVector4?Oe.set(l.x,l.y,l.z,l.w):Oe.set(l,f,v,M),Pe.scissor(K.copy(Oe).multiplyScalar(Q).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(l){Pe.setScissorTest(Xe=l)},this.setOpaqueSort=function(l){fe=l},this.setTransparentSort=function(l){ie=l},this.getClearColor=function(l){return l.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(l=!0,f=!0,v=!0){let M=0;if(l){let S=!1;if(k!==null){const O=k.texture.format;S=O===to||O===eo||O===Ja}if(S){const O=k.texture.type,V=O===bn||O===ii||O===sr||O===ar||O===Ka||O===$a,L=Fe.getClearColor(),B=Fe.getClearAlpha(),q=L.r,re=L.g,se=L.b;V?(y[0]=q,y[1]=re,y[2]=se,y[3]=B,F.clearBufferuiv(F.COLOR,0,y)):(w[0]=q,w[1]=re,w[2]=se,w[3]=B,F.clearBufferiv(F.COLOR,0,w))}else M|=F.COLOR_BUFFER_BIT}f&&(M|=F.DEPTH_BUFFER_BIT),v&&(M|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(M)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Fe.dispose(),Se.dispose(),et.dispose(),we.dispose(),E.dispose(),H.dispose(),J.dispose(),qe.dispose(),G.dispose(),me.dispose(),j.dispose(),j.removeEventListener("sessionstart",Ar),j.removeEventListener("sessionend",vr),dn.stop()};function te(l){l.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const l=$e.autoReset,f=Te.enabled,v=Te.autoUpdate,M=Te.needsUpdate,S=Te.type;Ae(),$e.autoReset=l,Te.enabled=f,Te.autoUpdate=v,Te.needsUpdate=M,Te.type=S}function ve(l){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",l.statusMessage)}function Ne(l){const f=l.target;f.removeEventListener("dispose",Ne),dt(f)}function dt(l){yt(l),we.remove(l)}function yt(l){const f=we.get(l).programs;f!==void 0&&(f.forEach(function(v){me.releaseProgram(v)}),l.isShaderMaterial&&me.releaseShaderCache(l))}this.renderBufferDirect=function(l,f,v,M,S,O){f===null&&(f=ut);const V=S.isMesh&&S.matrixWorld.determinant()<0,L=ht(l,f,v,M,S);Pe.setMaterial(M,V);let B=v.index,q=1;if(M.wireframe===!0){if(B=ae.getWireframeAttribute(v),B===void 0)return;q=2}const re=v.drawRange,se=v.attributes.position;let de=re.start*q,ye=(re.start+re.count)*q;O!==null&&(de=Math.max(de,O.start*q),ye=Math.min(ye,(O.start+O.count)*q)),B!==null?(de=Math.max(de,0),ye=Math.min(ye,B.count)):se!=null&&(de=Math.max(de,0),ye=Math.min(ye,se.count));const Ce=ye-de;if(Ce<0||Ce===1/0)return;qe.setup(S,M,L,v,B);let Re,De=Me;if(B!==null&&(Re=ne.get(B),De=Ve,De.setIndex(Re)),S.isMesh)M.wireframe===!0?(Pe.setLineWidth(M.wireframeLinewidth*je()),De.setMode(F.LINES)):De.setMode(F.TRIANGLES);else if(S.isLine){let xe=M.linewidth;xe===void 0&&(xe=1),Pe.setLineWidth(xe*je()),S.isLineSegments?De.setMode(F.LINES):S.isLineLoop?De.setMode(F.LINE_LOOP):De.setMode(F.LINE_STRIP)}else S.isPoints?De.setMode(F.POINTS):S.isSprite&&De.setMode(F.TRIANGLES);if(S.isBatchedMesh)if(S._multiDrawInstances!==null)ns("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),De.renderMultiDrawInstances(S._multiDrawStarts,S._multiDrawCounts,S._multiDrawCount,S._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))De.renderMultiDraw(S._multiDrawStarts,S._multiDrawCounts,S._multiDrawCount);else{const xe=S._multiDrawStarts,Je=S._multiDrawCounts,Ue=S._multiDrawCount,st=B?ne.get(B).bytesPerElement:1,Et=we.get(M).currentProgram.getUniforms();for(let lt=0;lt<Ue;lt++)Et.setValue(F,"_gl_DrawID",lt),De.render(xe[lt]/st,Je[lt])}else if(S.isInstancedMesh)De.renderInstances(de,Ce,S.count);else if(v.isInstancedBufferGeometry){const xe=v._maxInstanceCount!==void 0?v._maxInstanceCount:1/0,Je=Math.min(v.instanceCount,xe);De.renderInstances(de,Ce,Je)}else De.render(de,Ce)};function nt(l,f,v){l.transparent===!0&&l.side===xn&&l.forceSinglePass===!1?(l.side=kt,l.needsUpdate=!0,hi(l,f,v),l.side=Vn,l.needsUpdate=!0,hi(l,f,v),l.side=xn):hi(l,f,v)}this.compile=function(l,f,v=null){v===null&&(v=l),m=et.get(v),m.init(f),P.push(m),v.traverseVisible(function(S){S.isLight&&S.layers.test(f.layers)&&(m.pushLight(S),S.castShadow&&m.pushShadow(S))}),l!==v&&l.traverseVisible(function(S){S.isLight&&S.layers.test(f.layers)&&(m.pushLight(S),S.castShadow&&m.pushShadow(S))}),m.setupLights();const M=new Set;return l.traverse(function(S){if(!(S.isMesh||S.isPoints||S.isLine||S.isSprite))return;const O=S.material;if(O)if(Array.isArray(O))for(let V=0;V<O.length;V++){const L=O[V];nt(L,v,S),M.add(L)}else nt(O,v,S),M.add(O)}),m=P.pop(),M},this.compileAsync=function(l,f,v=null){const M=this.compile(l,f,v);return new Promise(S=>{function O(){if(M.forEach(function(V){we.get(V).currentProgram.isReady()&&M.delete(V)}),M.size===0){S(l);return}setTimeout(O,10)}Ze.get("KHR_parallel_shader_compile")!==null?O():setTimeout(O,10)})};let ft=null;function Kt(l){ft&&ft(l)}function Ar(){dn.stop()}function vr(){dn.start()}const dn=new dc;dn.setAnimationLoop(Kt),typeof self<"u"&&dn.setContext(self),this.setAnimationLoop=function(l){ft=l,j.setAnimationLoop(l),l===null?dn.stop():dn.start()},j.addEventListener("sessionstart",Ar),j.addEventListener("sessionend",vr),this.render=function(l,f){if(f!==void 0&&f.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(l.matrixWorldAutoUpdate===!0&&l.updateMatrixWorld(),f.parent===null&&f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(f),f=j.getCamera()),l.isScene===!0&&l.onBeforeRender(T,l,f,k),m=et.get(l,P.length),m.init(f),P.push(m),Le.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),Z.setFromProjectionMatrix(Le),be=this.localClippingEnabled,le=ce.init(this.clippingPlanes,be),A=Se.get(l,I.length),A.init(),I.push(A),j.enabled===!0&&j.isPresenting===!0){const O=T.xr.getDepthSensingMesh();O!==null&&Gi(O,f,-1/0,T.sortObjects)}Gi(l,f,0,T.sortObjects),A.finish(),T.sortObjects===!0&&A.sort(fe,ie),ct=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,ct&&Fe.addToRenderList(A,l),this.info.render.frame++,le===!0&&ce.beginShadows();const v=m.state.shadowsArray;Te.render(v,l,f),le===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const M=A.opaque,S=A.transmissive;if(m.setupLights(),f.isArrayCamera){const O=f.cameras;if(S.length>0)for(let V=0,L=O.length;V<L;V++){const B=O[V];Er(M,S,l,B)}ct&&Fe.render(l);for(let V=0,L=O.length;V<L;V++){const B=O[V];xr(A,l,B,B.viewport)}}else S.length>0&&Er(M,S,l,f),ct&&Fe.render(l),xr(A,l,f);k!==null&&U===0&&(R.updateMultisampleRenderTarget(k),R.updateRenderTargetMipmap(k)),l.isScene===!0&&l.onAfterRender(T,l,f),qe.resetDefaultState(),C=-1,b=null,P.pop(),P.length>0?(m=P[P.length-1],le===!0&&ce.setGlobalState(T.clippingPlanes,m.state.camera)):m=null,I.pop(),I.length>0?A=I[I.length-1]:A=null};function Gi(l,f,v,M){if(l.visible===!1)return;if(l.layers.test(f.layers)){if(l.isGroup)v=l.renderOrder;else if(l.isLOD)l.autoUpdate===!0&&l.update(f);else if(l.isLight)m.pushLight(l),l.castShadow&&m.pushShadow(l);else if(l.isSprite){if(!l.frustumCulled||Z.intersectsSprite(l)){M&&Ie.setFromMatrixPosition(l.matrixWorld).applyMatrix4(Le);const V=J.update(l),L=l.material;L.visible&&A.push(l,V,L,v,Ie.z,null)}}else if((l.isMesh||l.isLine||l.isPoints)&&(!l.frustumCulled||Z.intersectsObject(l))){const V=J.update(l),L=l.material;if(M&&(l.boundingSphere!==void 0?(l.boundingSphere===null&&l.computeBoundingSphere(),Ie.copy(l.boundingSphere.center)):(V.boundingSphere===null&&V.computeBoundingSphere(),Ie.copy(V.boundingSphere.center)),Ie.applyMatrix4(l.matrixWorld).applyMatrix4(Le)),Array.isArray(L)){const B=V.groups;for(let q=0,re=B.length;q<re;q++){const se=B[q],de=L[se.materialIndex];de&&de.visible&&A.push(l,V,de,v,Ie.z,se)}}else L.visible&&A.push(l,V,L,v,Ie.z,null)}}const O=l.children;for(let V=0,L=O.length;V<L;V++)Gi(O[V],f,v,M)}function xr(l,f,v,M){const S=l.opaque,O=l.transmissive,V=l.transparent;m.setupLightsView(v),le===!0&&ce.setGlobalState(T.clippingPlanes,v),M&&Pe.viewport(N.copy(M)),S.length>0&&ci(S,f,v),O.length>0&&ci(O,f,v),V.length>0&&ci(V,f,v),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Er(l,f,v,M){if((v.isScene===!0?v.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[M.id]===void 0&&(m.state.transmissionRenderTarget[M.id]=new ri(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?fr:bn,minFilter:ti,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const O=m.state.transmissionRenderTarget[M.id],V=M.viewport||N;O.setSize(V.z*T.transmissionResolutionScale,V.w*T.transmissionResolutionScale);const L=T.getRenderTarget();T.setRenderTarget(O),T.getClearColor(Y),oe=T.getClearAlpha(),oe<1&&T.setClearColor(16777215,.5),T.clear(),ct&&Fe.render(v);const B=T.toneMapping;T.toneMapping=Gn;const q=M.viewport;if(M.viewport!==void 0&&(M.viewport=void 0),m.setupLightsView(M),le===!0&&ce.setGlobalState(T.clippingPlanes,M),ci(l,v,M),R.updateMultisampleRenderTarget(O),R.updateRenderTargetMipmap(O),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let se=0,de=f.length;se<de;se++){const ye=f[se],Ce=ye.object,Re=ye.geometry,De=ye.material,xe=ye.group;if(De.side===xn&&Ce.layers.test(M.layers)){const Je=De.side;De.side=kt,De.needsUpdate=!0,Mr(Ce,v,M,Re,De,xe),De.side=Je,De.needsUpdate=!0,re=!0}}re===!0&&(R.updateMultisampleRenderTarget(O),R.updateRenderTargetMipmap(O))}T.setRenderTarget(L),T.setClearColor(Y,oe),q!==void 0&&(M.viewport=q),T.toneMapping=B}function ci(l,f,v){const M=f.isScene===!0?f.overrideMaterial:null;for(let S=0,O=l.length;S<O;S++){const V=l[S],L=V.object,B=V.geometry,q=V.group;let re=V.material;re.allowOverride===!0&&M!==null&&(re=M),L.layers.test(v.layers)&&Mr(L,f,v,B,re,q)}}function Mr(l,f,v,M,S,O){l.onBeforeRender(T,f,v,M,S,O),l.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,l.matrixWorld),l.normalMatrix.getNormalMatrix(l.modelViewMatrix),S.onBeforeRender(T,f,v,M,l,O),S.transparent===!0&&S.side===xn&&S.forceSinglePass===!1?(S.side=kt,S.needsUpdate=!0,T.renderBufferDirect(v,f,M,S,l,O),S.side=Vn,S.needsUpdate=!0,T.renderBufferDirect(v,f,M,S,l,O),S.side=xn):T.renderBufferDirect(v,f,M,S,l,O),l.onAfterRender(T,f,v,M,S,O)}function hi(l,f,v){f.isScene!==!0&&(f=ut);const M=we.get(l),S=m.state.lights,O=m.state.shadowsArray,V=S.state.version,L=me.getParameters(l,S.state,O,f,v),B=me.getProgramCacheKey(L);let q=M.programs;M.environment=l.isMeshStandardMaterial?f.environment:null,M.fog=f.fog,M.envMap=(l.isMeshStandardMaterial?H:E).get(l.envMap||M.environment),M.envMapRotation=M.environment!==null&&l.envMap===null?f.environmentRotation:l.envMapRotation,q===void 0&&(l.addEventListener("dispose",Ne),q=new Map,M.programs=q);let re=q.get(B);if(re!==void 0){if(M.currentProgram===re&&M.lightsStateVersion===V)return Vi(l,L),re}else L.uniforms=me.getUniforms(l),l.onBeforeCompile(L,T),re=me.acquireProgram(L,B),q.set(B,re),M.uniforms=L.uniforms;const se=M.uniforms;return(!l.isShaderMaterial&&!l.isRawShaderMaterial||l.clipping===!0)&&(se.clippingPlanes=ce.uniform),Vi(l,L),M.needsLights=ui(l),M.lightsStateVersion=V,M.needsLights&&(se.ambientLightColor.value=S.state.ambient,se.lightProbe.value=S.state.probe,se.directionalLights.value=S.state.directional,se.directionalLightShadows.value=S.state.directionalShadow,se.spotLights.value=S.state.spot,se.spotLightShadows.value=S.state.spotShadow,se.rectAreaLights.value=S.state.rectArea,se.ltc_1.value=S.state.rectAreaLTC1,se.ltc_2.value=S.state.rectAreaLTC2,se.pointLights.value=S.state.point,se.pointLightShadows.value=S.state.pointShadow,se.hemisphereLights.value=S.state.hemi,se.directionalShadowMap.value=S.state.directionalShadowMap,se.directionalShadowMatrix.value=S.state.directionalShadowMatrix,se.spotShadowMap.value=S.state.spotShadowMap,se.spotLightMatrix.value=S.state.spotLightMatrix,se.spotLightMap.value=S.state.spotLightMap,se.pointShadowMap.value=S.state.pointShadowMap,se.pointShadowMatrix.value=S.state.pointShadowMatrix),M.currentProgram=re,M.uniformsList=null,re}function Sr(l){if(l.uniformsList===null){const f=l.currentProgram.getUniforms();l.uniformsList=is.seqWithValue(f.seq,l.uniforms)}return l.uniformsList}function Vi(l,f){const v=we.get(l);v.outputColorSpace=f.outputColorSpace,v.batching=f.batching,v.batchingColor=f.batchingColor,v.instancing=f.instancing,v.instancingColor=f.instancingColor,v.instancingMorph=f.instancingMorph,v.skinning=f.skinning,v.morphTargets=f.morphTargets,v.morphNormals=f.morphNormals,v.morphColors=f.morphColors,v.morphTargetsCount=f.morphTargetsCount,v.numClippingPlanes=f.numClippingPlanes,v.numIntersection=f.numClipIntersection,v.vertexAlphas=f.vertexAlphas,v.vertexTangents=f.vertexTangents,v.toneMapping=f.toneMapping}function ht(l,f,v,M,S){f.isScene!==!0&&(f=ut),R.resetTextureUnits();const O=f.fog,V=M.isMeshStandardMaterial?f.environment:null,L=k===null?T.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Oi,B=(M.isMeshStandardMaterial?H:E).get(M.envMap||V),q=M.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,re=!!v.attributes.tangent&&(!!M.normalMap||M.anisotropy>0),se=!!v.morphAttributes.position,de=!!v.morphAttributes.normal,ye=!!v.morphAttributes.color;let Ce=Gn;M.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ce=T.toneMapping);const Re=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,De=Re!==void 0?Re.length:0,xe=we.get(M),Je=m.state.lights;if(le===!0&&(be===!0||l!==b)){const vt=l===b&&M.id===C;ce.setState(M,l,vt)}let Ue=!1;M.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==Je.state.version||xe.outputColorSpace!==L||S.isBatchedMesh&&xe.batching===!1||!S.isBatchedMesh&&xe.batching===!0||S.isBatchedMesh&&xe.batchingColor===!0&&S.colorTexture===null||S.isBatchedMesh&&xe.batchingColor===!1&&S.colorTexture!==null||S.isInstancedMesh&&xe.instancing===!1||!S.isInstancedMesh&&xe.instancing===!0||S.isSkinnedMesh&&xe.skinning===!1||!S.isSkinnedMesh&&xe.skinning===!0||S.isInstancedMesh&&xe.instancingColor===!0&&S.instanceColor===null||S.isInstancedMesh&&xe.instancingColor===!1&&S.instanceColor!==null||S.isInstancedMesh&&xe.instancingMorph===!0&&S.morphTexture===null||S.isInstancedMesh&&xe.instancingMorph===!1&&S.morphTexture!==null||xe.envMap!==B||M.fog===!0&&xe.fog!==O||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==ce.numPlanes||xe.numIntersection!==ce.numIntersection)||xe.vertexAlphas!==q||xe.vertexTangents!==re||xe.morphTargets!==se||xe.morphNormals!==de||xe.morphColors!==ye||xe.toneMapping!==Ce||xe.morphTargetsCount!==De)&&(Ue=!0):(Ue=!0,xe.__version=M.version);let st=xe.currentProgram;Ue===!0&&(st=hi(M,f,S));let Et=!1,lt=!1,bt=!1;const Qe=st.getUniforms(),At=xe.uniforms;if(Pe.useProgram(st.program)&&(Et=!0,lt=!0,bt=!0),M.id!==C&&(C=M.id,lt=!0),Et||b!==l){Pe.buffers.depth.getReversed()?(ue.copy(l.projectionMatrix),Ih(ue),Fh(ue),Qe.setValue(F,"projectionMatrix",ue)):Qe.setValue(F,"projectionMatrix",l.projectionMatrix),Qe.setValue(F,"viewMatrix",l.matrixWorldInverse);const Mt=Qe.map.cameraPosition;Mt!==void 0&&Mt.setValue(F,He.setFromMatrixPosition(l.matrixWorld)),Ge.logarithmicDepthBuffer&&Qe.setValue(F,"logDepthBufFC",2/(Math.log(l.far+1)/Math.LN2)),(M.isMeshPhongMaterial||M.isMeshToonMaterial||M.isMeshLambertMaterial||M.isMeshBasicMaterial||M.isMeshStandardMaterial||M.isShaderMaterial)&&Qe.setValue(F,"isOrthographic",l.isOrthographicCamera===!0),b!==l&&(b=l,lt=!0,bt=!0)}if(S.isSkinnedMesh){Qe.setOptional(F,S,"bindMatrix"),Qe.setOptional(F,S,"bindMatrixInverse");const vt=S.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),Qe.setValue(F,"boneTexture",vt.boneTexture,R))}S.isBatchedMesh&&(Qe.setOptional(F,S,"batchingTexture"),Qe.setValue(F,"batchingTexture",S._matricesTexture,R),Qe.setOptional(F,S,"batchingIdTexture"),Qe.setValue(F,"batchingIdTexture",S._indirectTexture,R),Qe.setOptional(F,S,"batchingColorTexture"),S._colorsTexture!==null&&Qe.setValue(F,"batchingColorTexture",S._colorsTexture,R));const Dt=v.morphAttributes;if((Dt.position!==void 0||Dt.normal!==void 0||Dt.color!==void 0)&&Be.update(S,v,st),(lt||xe.receiveShadow!==S.receiveShadow)&&(xe.receiveShadow=S.receiveShadow,Qe.setValue(F,"receiveShadow",S.receiveShadow)),M.isMeshGouraudMaterial&&M.envMap!==null&&(At.envMap.value=B,At.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1),M.isMeshStandardMaterial&&M.envMap===null&&f.environment!==null&&(At.envMapIntensity.value=f.environmentIntensity),lt&&(Qe.setValue(F,"toneMappingExposure",T.toneMappingExposure),xe.needsLights&&_s(At,bt),O&&M.fog===!0&&_e.refreshFogUniforms(At,O),_e.refreshMaterialUniforms(At,M,Q,he,m.state.transmissionRenderTarget[l.id]),is.upload(F,Sr(xe),At,R)),M.isShaderMaterial&&M.uniformsNeedUpdate===!0&&(is.upload(F,Sr(xe),At,R),M.uniformsNeedUpdate=!1),M.isSpriteMaterial&&Qe.setValue(F,"center",S.center),Qe.setValue(F,"modelViewMatrix",S.modelViewMatrix),Qe.setValue(F,"normalMatrix",S.normalMatrix),Qe.setValue(F,"modelMatrix",S.matrixWorld),M.isShaderMaterial||M.isRawShaderMaterial){const vt=M.uniformsGroups;for(let Mt=0,fn=vt.length;Mt<fn;Mt++){const Xt=vt[Mt];G.update(Xt,st),G.bind(Xt,st)}}return st}function _s(l,f){l.ambientLightColor.needsUpdate=f,l.lightProbe.needsUpdate=f,l.directionalLights.needsUpdate=f,l.directionalLightShadows.needsUpdate=f,l.pointLights.needsUpdate=f,l.pointLightShadows.needsUpdate=f,l.spotLights.needsUpdate=f,l.spotLightShadows.needsUpdate=f,l.rectAreaLights.needsUpdate=f,l.hemisphereLights.needsUpdate=f}function ui(l){return l.isMeshLambertMaterial||l.isMeshToonMaterial||l.isMeshPhongMaterial||l.isMeshStandardMaterial||l.isShadowMaterial||l.isShaderMaterial&&l.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(l,f,v){const M=we.get(l);M.__autoAllocateDepthBuffer=l.resolveDepthBuffer===!1,M.__autoAllocateDepthBuffer===!1&&(M.__useRenderToTexture=!1),we.get(l.texture).__webglTexture=f,we.get(l.depthTexture).__webglTexture=M.__autoAllocateDepthBuffer?void 0:v,M.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(l,f){const v=we.get(l);v.__webglFramebuffer=f,v.__useDefaultFramebuffer=f===void 0};const gt=F.createFramebuffer();this.setRenderTarget=function(l,f=0,v=0){k=l,D=f,U=v;let M=!0,S=null,O=!1,V=!1;if(l){const B=we.get(l);if(B.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(F.FRAMEBUFFER,null),M=!1;else if(B.__webglFramebuffer===void 0)R.setupRenderTarget(l);else if(B.__hasExternalTextures)R.rebindTextures(l,we.get(l.texture).__webglTexture,we.get(l.depthTexture).__webglTexture);else if(l.depthBuffer){const se=l.depthTexture;if(B.__boundDepthTexture!==se){if(se!==null&&we.has(se)&&(l.width!==se.image.width||l.height!==se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(l)}}const q=l.texture;(q.isData3DTexture||q.isDataArrayTexture||q.isCompressedArrayTexture)&&(V=!0);const re=we.get(l).__webglFramebuffer;l.isWebGLCubeRenderTarget?(Array.isArray(re[f])?S=re[f][v]:S=re[f],O=!0):l.samples>0&&R.useMultisampledRTT(l)===!1?S=we.get(l).__webglMultisampledFramebuffer:Array.isArray(re)?S=re[v]:S=re,N.copy(l.viewport),K.copy(l.scissor),X=l.scissorTest}else N.copy(pe).multiplyScalar(Q).floor(),K.copy(Oe).multiplyScalar(Q).floor(),X=Xe;if(v!==0&&(S=gt),Pe.bindFramebuffer(F.FRAMEBUFFER,S)&&M&&Pe.drawBuffers(l,S),Pe.viewport(N),Pe.scissor(K),Pe.setScissorTest(X),O){const B=we.get(l.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+f,B.__webglTexture,v)}else if(V){const B=we.get(l.texture),q=f;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,B.__webglTexture,v,q)}else if(l!==null&&v!==0){const B=we.get(l.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,B.__webglTexture,v)}C=-1},this.readRenderTargetPixels=function(l,f,v,M,S,O,V){if(!(l&&l.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let L=we.get(l).__webglFramebuffer;if(l.isWebGLCubeRenderTarget&&V!==void 0&&(L=L[V]),L){Pe.bindFramebuffer(F.FRAMEBUFFER,L);try{const B=l.texture,q=B.format,re=B.type;if(!Ge.textureFormatReadable(q)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}f>=0&&f<=l.width-M&&v>=0&&v<=l.height-S&&F.readPixels(f,v,M,S,ze.convert(q),ze.convert(re),O)}finally{const B=k!==null?we.get(k).__webglFramebuffer:null;Pe.bindFramebuffer(F.FRAMEBUFFER,B)}}},this.readRenderTargetPixelsAsync=async function(l,f,v,M,S,O,V){if(!(l&&l.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let L=we.get(l).__webglFramebuffer;if(l.isWebGLCubeRenderTarget&&V!==void 0&&(L=L[V]),L)if(f>=0&&f<=l.width-M&&v>=0&&v<=l.height-S){Pe.bindFramebuffer(F.FRAMEBUFFER,L);const B=l.texture,q=B.format,re=B.type;if(!Ge.textureFormatReadable(q))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const se=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,se),F.bufferData(F.PIXEL_PACK_BUFFER,O.byteLength,F.STREAM_READ),F.readPixels(f,v,M,S,ze.convert(q),ze.convert(re),0);const de=k!==null?we.get(k).__webglFramebuffer:null;Pe.bindFramebuffer(F.FRAMEBUFFER,de);const ye=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Lh(F,ye,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,se),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,O),F.deleteBuffer(se),F.deleteSync(ye),O}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(l,f=null,v=0){const M=Math.pow(2,-v),S=Math.floor(l.image.width*M),O=Math.floor(l.image.height*M),V=f!==null?f.x:0,L=f!==null?f.y:0;R.setTexture2D(l,0),F.copyTexSubImage2D(F.TEXTURE_2D,v,0,0,V,L,S,O),Pe.unbindTexture()};const h=F.createFramebuffer(),d=F.createFramebuffer();this.copyTextureToTexture=function(l,f,v=null,M=null,S=0,O=null){O===null&&(S!==0?(ns("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),O=S,S=0):O=0);let V,L,B,q,re,se,de,ye,Ce;const Re=l.isCompressedTexture?l.mipmaps[O]:l.image;if(v!==null)V=v.max.x-v.min.x,L=v.max.y-v.min.y,B=v.isBox3?v.max.z-v.min.z:1,q=v.min.x,re=v.min.y,se=v.isBox3?v.min.z:0;else{const Dt=Math.pow(2,-S);V=Math.floor(Re.width*Dt),L=Math.floor(Re.height*Dt),l.isDataArrayTexture?B=Re.depth:l.isData3DTexture?B=Math.floor(Re.depth*Dt):B=1,q=0,re=0,se=0}M!==null?(de=M.x,ye=M.y,Ce=M.z):(de=0,ye=0,Ce=0);const De=ze.convert(f.format),xe=ze.convert(f.type);let Je;f.isData3DTexture?(R.setTexture3D(f,0),Je=F.TEXTURE_3D):f.isDataArrayTexture||f.isCompressedArrayTexture?(R.setTexture2DArray(f,0),Je=F.TEXTURE_2D_ARRAY):(R.setTexture2D(f,0),Je=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,f.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,f.unpackAlignment);const Ue=F.getParameter(F.UNPACK_ROW_LENGTH),st=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Et=F.getParameter(F.UNPACK_SKIP_PIXELS),lt=F.getParameter(F.UNPACK_SKIP_ROWS),bt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Re.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Re.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,q),F.pixelStorei(F.UNPACK_SKIP_ROWS,re),F.pixelStorei(F.UNPACK_SKIP_IMAGES,se);const Qe=l.isDataArrayTexture||l.isData3DTexture,At=f.isDataArrayTexture||f.isData3DTexture;if(l.isDepthTexture){const Dt=we.get(l),vt=we.get(f),Mt=we.get(Dt.__renderTarget),fn=we.get(vt.__renderTarget);Pe.bindFramebuffer(F.READ_FRAMEBUFFER,Mt.__webglFramebuffer),Pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,fn.__webglFramebuffer);for(let Xt=0;Xt<B;Xt++)Qe&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,we.get(l).__webglTexture,S,se+Xt),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,we.get(f).__webglTexture,O,Ce+Xt)),F.blitFramebuffer(q,re,V,L,de,ye,V,L,F.DEPTH_BUFFER_BIT,F.NEAREST);Pe.bindFramebuffer(F.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(S!==0||l.isRenderTargetTexture||we.has(l)){const Dt=we.get(l),vt=we.get(f);Pe.bindFramebuffer(F.READ_FRAMEBUFFER,h),Pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,d);for(let Mt=0;Mt<B;Mt++)Qe?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Dt.__webglTexture,S,se+Mt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Dt.__webglTexture,S),At?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,vt.__webglTexture,O,Ce+Mt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,vt.__webglTexture,O),S!==0?F.blitFramebuffer(q,re,V,L,de,ye,V,L,F.COLOR_BUFFER_BIT,F.NEAREST):At?F.copyTexSubImage3D(Je,O,de,ye,Ce+Mt,q,re,V,L):F.copyTexSubImage2D(Je,O,de,ye,q,re,V,L);Pe.bindFramebuffer(F.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else At?l.isDataTexture||l.isData3DTexture?F.texSubImage3D(Je,O,de,ye,Ce,V,L,B,De,xe,Re.data):f.isCompressedArrayTexture?F.compressedTexSubImage3D(Je,O,de,ye,Ce,V,L,B,De,Re.data):F.texSubImage3D(Je,O,de,ye,Ce,V,L,B,De,xe,Re):l.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,O,de,ye,V,L,De,xe,Re.data):l.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,O,de,ye,Re.width,Re.height,De,Re.data):F.texSubImage2D(F.TEXTURE_2D,O,de,ye,V,L,De,xe,Re);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ue),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,st),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Et),F.pixelStorei(F.UNPACK_SKIP_ROWS,lt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,bt),O===0&&f.generateMipmaps&&F.generateMipmap(Je),Pe.unbindTexture()},this.copyTextureToTexture3D=function(l,f,v=null,M=null,S=0){return ns('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(l,f,v,M,S)},this.initRenderTarget=function(l){we.get(l).__webglFramebuffer===void 0&&R.setupRenderTarget(l)},this.initTexture=function(l){l.isCubeTexture?R.setTextureCube(l,0):l.isData3DTexture?R.setTexture3D(l,0):l.isDataArrayTexture||l.isCompressedArrayTexture?R.setTexture2DArray(l,0):R.setTexture2D(l,0),Pe.unbindTexture()},this.resetState=function(){D=0,U=0,k=null,Pe.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}const gl={type:"change"},lo={type:"start"},gc={type:"end"},qr=new ro,Al=new On,n0=Math.cos(70*Ph.DEG2RAD),Tt=new W,Vt=2*Math.PI,ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qs=1e-6;class i0 extends gu{constructor(e,t=null){super(e,t),this.state=ot.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ci.ROTATE,MIDDLE:Ci.DOLLY,RIGHT:Ci.PAN},this.touches={ONE:Ti.ROTATE,TWO:Ti.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new si,this._lastTargetPosition=new W,this._quat=new si().setFromUnitVectors(e.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xo,this._sphericalDelta=new Xo,this._scale=1,this._panOffset=new W,this._rotateStart=new ke,this._rotateEnd=new ke,this._rotateDelta=new ke,this._panStart=new ke,this._panEnd=new ke,this._panDelta=new ke,this._dollyStart=new ke,this._dollyEnd=new ke,this._dollyDelta=new ke,this._dollyDirection=new W,this._mouse=new ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=s0.bind(this),this._onPointerDown=r0.bind(this),this._onPointerUp=a0.bind(this),this._onContextMenu=f0.bind(this),this._onMouseWheel=c0.bind(this),this._onKeyDown=h0.bind(this),this._onTouchStart=u0.bind(this),this._onTouchMove=d0.bind(this),this._onMouseDown=o0.bind(this),this._onMouseMove=l0.bind(this),this._interceptControlDown=p0.bind(this),this._interceptControlUp=m0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gl),this.update(),this.state=ot.NONE}update(e=null){const t=this.object.position;Tt.copy(t).sub(this.target),Tt.applyQuaternion(this._quat),this._spherical.setFromVector3(Tt),this.autoRotate&&this.state===ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Vt:n>Math.PI&&(n-=Vt),r<-Math.PI?r+=Vt:r>Math.PI&&(r-=Vt),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Tt.setFromSpherical(this._spherical),Tt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Tt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Tt.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new W(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const u=new W(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(o),this.object.updateMatrixWorld(),a=Tt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(qr.origin.copy(this.object.position),qr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qr.direction))<n0?this.object.lookAt(this.target):(Al.setFromNormalAndCoplanarPoint(this.object.up,this.target),qr.intersectPlane(Al,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>qs||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qs||this._lastTargetPosition.distanceToSquared(this.target)>qs?(this.dispatchEvent(gl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Vt/60*this.autoRotateSpeed*e:Vt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Tt.setFromMatrixColumn(t,0),Tt.multiplyScalar(-e),this._panOffset.add(Tt)}_panUp(e,t){this.screenSpacePanning===!0?Tt.setFromMatrixColumn(t,1):(Tt.setFromMatrixColumn(t,0),Tt.crossVectors(this.object.up,Tt)),Tt.multiplyScalar(e),this._panOffset.add(Tt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Tt.copy(r).sub(this.target);let s=Tt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Vt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Vt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Vt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Vt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Vt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Vt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ke,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function r0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function s0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function a0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gc),this.state=ot.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function o0(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ci.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ot.DOLLY;break;case Ci.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ot.ROTATE}break;case Ci.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ot.PAN}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(lo)}function l0(i){switch(this.state){case ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function c0(i){this.enabled===!1||this.enableZoom===!1||this.state!==ot.NONE||(i.preventDefault(),this.dispatchEvent(lo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(gc))}function h0(i){this.enabled!==!1&&this._handleKeyDown(i)}function u0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ti.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ot.TOUCH_ROTATE;break;case Ti.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ot.TOUCH_PAN;break;default:this.state=ot.NONE}break;case 2:switch(this.touches.TWO){case Ti.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ot.TOUCH_DOLLY_PAN;break;case Ti.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ot.TOUCH_DOLLY_ROTATE;break;default:this.state=ot.NONE}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(lo)}function d0(i){switch(this._trackPointer(i),this.state){case ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ot.NONE}}function f0(i){this.enabled!==!1&&i.preventDefault()}function p0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function m0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}/**
 * @license
 * webxr-polyfill
 * Copyright (c) 2017 Google
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * cardboard-vr-display
 * Copyright (c) 2015-2017 Google
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * webvr-polyfill-dpdb 
 * Copyright (c) 2017 Google
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * wglu-preserve-state
 * Copyright (c) 2016, Brandon Jones.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *//**
 * @license
 * nosleep.js
 * Copyright (c) 2017, Rich Tibbett
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const Ac=typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{},Ji=Symbol("@@webxr-polyfill/EventTarget");class co{constructor(){this[Ji]={listeners:new Map}}addEventListener(e,t){if(typeof e!="string")throw new Error("`type` must be a string");if(typeof t!="function")throw new Error("`listener` must be a function");const n=this[Ji].listeners.get(e)||[];n.push(t),this[Ji].listeners.set(e,n)}removeEventListener(e,t){if(typeof e!="string")throw new Error("`type` must be a string");if(typeof t!="function")throw new Error("`listener` must be a function");const n=this[Ji].listeners.get(e)||[];for(let r=n.length;r>=0;r--)n[r]===t&&n.pop()}dispatchEvent(e,t){const n=this[Ji].listeners.get(e)||[],r=[];for(let s=0;s<n.length;s++)r[s]=n[s];for(let s of r)s(t);typeof this[`on${e}`]=="function"&&this[`on${e}`](t)}}const _0=1e-6;let Wt=typeof Float32Array<"u"?Float32Array:Array;function ai(){let i=new Wt(16);return Wt!=Float32Array&&(i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0),i[0]=1,i[5]=1,i[10]=1,i[15]=1,i}function g0(i,e){return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=e[7],i[8]=e[8],i[9]=e[9],i[10]=e[10],i[11]=e[11],i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15],i}function Li(i){return i[0]=1,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=1,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=1,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function os(i,e){let t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],p=e[8],_=e[9],g=e[10],x=e[11],y=e[12],w=e[13],A=e[14],m=e[15],I=t*o-n*a,P=t*c-r*a,T=t*u-s*a,z=n*c-r*o,D=n*u-s*o,U=r*u-s*c,k=p*w-_*y,C=p*A-g*y,b=p*m-x*y,N=_*A-g*w,K=_*m-x*w,X=g*m-x*A,Y=I*X-P*K+T*N+z*b-D*C+U*k;return Y?(Y=1/Y,i[0]=(o*X-c*K+u*N)*Y,i[1]=(r*K-n*X-s*N)*Y,i[2]=(w*U-A*D+m*z)*Y,i[3]=(g*D-_*U-x*z)*Y,i[4]=(c*b-a*X-u*C)*Y,i[5]=(t*X-r*b+s*C)*Y,i[6]=(A*T-y*U-m*P)*Y,i[7]=(p*U-g*T+x*P)*Y,i[8]=(a*K-o*b+u*k)*Y,i[9]=(n*b-t*K-s*k)*Y,i[10]=(y*D-w*T+m*I)*Y,i[11]=(_*T-p*D-x*I)*Y,i[12]=(o*C-a*N-c*k)*Y,i[13]=(t*N-n*C+r*k)*Y,i[14]=(w*P-y*z-A*I)*Y,i[15]=(p*z-_*P+g*I)*Y,i):null}function Ii(i,e,t){let n=e[0],r=e[1],s=e[2],a=e[3],o=e[4],c=e[5],u=e[6],p=e[7],_=e[8],g=e[9],x=e[10],y=e[11],w=e[12],A=e[13],m=e[14],I=e[15],P=t[0],T=t[1],z=t[2],D=t[3];return i[0]=P*n+T*o+z*_+D*w,i[1]=P*r+T*c+z*g+D*A,i[2]=P*s+T*u+z*x+D*m,i[3]=P*a+T*p+z*y+D*I,P=t[4],T=t[5],z=t[6],D=t[7],i[4]=P*n+T*o+z*_+D*w,i[5]=P*r+T*c+z*g+D*A,i[6]=P*s+T*u+z*x+D*m,i[7]=P*a+T*p+z*y+D*I,P=t[8],T=t[9],z=t[10],D=t[11],i[8]=P*n+T*o+z*_+D*w,i[9]=P*r+T*c+z*g+D*A,i[10]=P*s+T*u+z*x+D*m,i[11]=P*a+T*p+z*y+D*I,P=t[12],T=t[13],z=t[14],D=t[15],i[12]=P*n+T*o+z*_+D*w,i[13]=P*r+T*c+z*g+D*A,i[14]=P*s+T*u+z*x+D*m,i[15]=P*a+T*p+z*y+D*I,i}function cr(i,e,t){let n=e[0],r=e[1],s=e[2],a=e[3],o=n+n,c=r+r,u=s+s,p=n*o,_=n*c,g=n*u,x=r*c,y=r*u,w=s*u,A=a*o,m=a*c,I=a*u;return i[0]=1-(x+w),i[1]=_+I,i[2]=g-m,i[3]=0,i[4]=_-I,i[5]=1-(p+w),i[6]=y+A,i[7]=0,i[8]=g+m,i[9]=y-A,i[10]=1-(p+x),i[11]=0,i[12]=t[0],i[13]=t[1],i[14]=t[2],i[15]=1,i}function vc(i,e){return i[0]=e[12],i[1]=e[13],i[2]=e[14],i}function xc(i,e){let t=e[0]+e[5]+e[10],n=0;return t>0?(n=Math.sqrt(t+1)*2,i[3]=.25*n,i[0]=(e[6]-e[9])/n,i[1]=(e[8]-e[2])/n,i[2]=(e[1]-e[4])/n):e[0]>e[5]&&e[0]>e[10]?(n=Math.sqrt(1+e[0]-e[5]-e[10])*2,i[3]=(e[6]-e[9])/n,i[0]=.25*n,i[1]=(e[1]+e[4])/n,i[2]=(e[8]+e[2])/n):e[5]>e[10]?(n=Math.sqrt(1+e[5]-e[0]-e[10])*2,i[3]=(e[8]-e[2])/n,i[0]=(e[1]+e[4])/n,i[1]=.25*n,i[2]=(e[6]+e[9])/n):(n=Math.sqrt(1+e[10]-e[0]-e[5])*2,i[3]=(e[1]-e[4])/n,i[0]=(e[8]+e[2])/n,i[1]=(e[6]+e[9])/n,i[2]=.25*n),i}function Ec(i,e,t,n,r){let s=1/Math.tan(e/2),a;return i[0]=s/t,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=s,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[11]=-1,i[12]=0,i[13]=0,i[15]=0,r!=null&&r!==1/0?(a=1/(n-r),i[10]=(r+n)*a,i[14]=2*r*n*a):(i[10]=-1,i[14]=-2*n),i}function En(){let i=new Wt(3);return Wt!=Float32Array&&(i[0]=0,i[1]=0,i[2]=0),i}function vl(i){var e=new Wt(3);return e[0]=i[0],e[1]=i[1],e[2]=i[2],e}function A0(i){let e=i[0],t=i[1],n=i[2];return Math.sqrt(e*e+t*t+n*n)}function on(i,e,t){let n=new Wt(3);return n[0]=i,n[1]=e,n[2]=t,n}function xl(i,e){return i[0]=e[0],i[1]=e[1],i[2]=e[2],i}function er(i,e,t){return i[0]=e[0]+t[0],i[1]=e[1]+t[1],i[2]=e[2]+t[2],i}function El(i,e,t){return i[0]=e[0]*t,i[1]=e[1]*t,i[2]=e[2]*t,i}function Xa(i,e){let t=e[0],n=e[1],r=e[2],s=t*t+n*n+r*r;return s>0&&(s=1/Math.sqrt(s),i[0]=e[0]*s,i[1]=e[1]*s,i[2]=e[2]*s),i}function ho(i,e){return i[0]*e[0]+i[1]*e[1]+i[2]*e[2]}function Qs(i,e,t){let n=e[0],r=e[1],s=e[2],a=t[0],o=t[1],c=t[2];return i[0]=r*c-s*o,i[1]=s*a-n*c,i[2]=n*o-r*a,i}function wi(i,e,t){let n=t[0],r=t[1],s=t[2],a=t[3],o=e[0],c=e[1],u=e[2],p=r*u-s*c,_=s*o-n*u,g=n*c-r*o,x=r*g-s*_,y=s*p-n*g,w=n*_-r*p,A=a*2;return p*=A,_*=A,g*=A,x*=2,y*=2,w*=2,i[0]=o+p+x,i[1]=c+_+y,i[2]=u+g+w,i}function v0(i,e){let t=on(i[0],i[1],i[2]),n=on(e[0],e[1],e[2]);Xa(t,t),Xa(n,n);let r=ho(t,n);return r>1?0:r<-1?Math.PI:Math.acos(r)}const x0=A0;(function(){let i=En();return function(e,t,n,r,s,a){let o,c;for(t||(t=3),n||(n=0),r?c=Math.min(r*t+n,e.length):c=e.length,o=n;o<c;o+=t)i[0]=e[o],i[1]=e[o+1],i[2]=e[o+2],s(i,i,a),e[o]=i[0],e[o+1]=i[1],e[o+2]=i[2];return e}})();function E0(){let i=new Wt(9);return Wt!=Float32Array&&(i[1]=0,i[2]=0,i[3]=0,i[5]=0,i[6]=0,i[7]=0),i[0]=1,i[4]=1,i[8]=1,i}function M0(){let i=new Wt(4);return Wt!=Float32Array&&(i[0]=0,i[1]=0,i[2]=0,i[3]=0),i}function S0(i){let e=new Wt(4);return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e}function y0(i,e,t,n){let r=new Wt(4);return r[0]=i,r[1]=e,r[2]=t,r[3]=n,r}function b0(i,e){return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i}function w0(i,e){let t=e[0],n=e[1],r=e[2],s=e[3],a=t*t+n*n+r*r+s*s;return a>0&&(a=1/Math.sqrt(a),i[0]=t*a,i[1]=n*a,i[2]=r*a,i[3]=s*a),i}(function(){let i=M0();return function(e,t,n,r,s,a){let o,c;for(t||(t=4),n||(n=0),r?c=Math.min(r*t+n,e.length):c=e.length,o=n;o<c;o+=t)i[0]=e[o],i[1]=e[o+1],i[2]=e[o+2],i[3]=e[o+3],s(i,i,a),e[o]=i[0],e[o+1]=i[1],e[o+2]=i[2],e[o+3]=i[3];return e}})();function tn(){let i=new Wt(4);return Wt!=Float32Array&&(i[0]=0,i[1]=0,i[2]=0),i[3]=1,i}function T0(i,e,t){t=t*.5;let n=Math.sin(t);return i[0]=n*e[0],i[1]=n*e[1],i[2]=n*e[2],i[3]=Math.cos(t),i}function Ml(i,e,t){let n=e[0],r=e[1],s=e[2],a=e[3],o=t[0],c=t[1],u=t[2],p=t[3];return i[0]=n*p+a*o+r*u-s*c,i[1]=r*p+a*c+s*o-n*u,i[2]=s*p+a*u+n*c-r*o,i[3]=a*p-n*o-r*c-s*u,i}function rr(i,e,t,n){let r=e[0],s=e[1],a=e[2],o=e[3],c=t[0],u=t[1],p=t[2],_=t[3],g,x,y,w,A;return x=r*c+s*u+a*p+o*_,x<0&&(x=-x,c=-c,u=-u,p=-p,_=-_),1-x>_0?(g=Math.acos(x),y=Math.sin(g),w=Math.sin((1-n)*g)/y,A=Math.sin(n*g)/y):(w=1-n,A=n),i[0]=w*r+A*c,i[1]=w*s+A*u,i[2]=w*a+A*p,i[3]=w*o+A*_,i}function Sl(i,e){let t=e[0],n=e[1],r=e[2],s=e[3],a=t*t+n*n+r*r+s*s,o=a?1/a:0;return i[0]=-t*o,i[1]=-n*o,i[2]=-r*o,i[3]=s*o,i}function R0(i,e){let t=e[0]+e[4]+e[8],n;if(t>0)n=Math.sqrt(t+1),i[3]=.5*n,n=.5/n,i[0]=(e[5]-e[7])*n,i[1]=(e[6]-e[2])*n,i[2]=(e[1]-e[3])*n;else{let r=0;e[4]>e[0]&&(r=1),e[8]>e[r*3+r]&&(r=2);let s=(r+1)%3,a=(r+2)%3;n=Math.sqrt(e[r*3+r]-e[s*3+s]-e[a*3+a]+1),i[r]=.5*n,n=.5/n,i[3]=(e[s*3+a]-e[a*3+s])*n,i[s]=(e[s*3+r]+e[r*3+s])*n,i[a]=(e[a*3+r]+e[r*3+a])*n}return i}function C0(i,e,t,n){let r=.5*Math.PI/180;e*=r,t*=r,n*=r;let s=Math.sin(e),a=Math.cos(e),o=Math.sin(t),c=Math.cos(t),u=Math.sin(n),p=Math.cos(n);return i[0]=s*c*p-a*o*u,i[1]=a*o*p+s*c*u,i[2]=a*c*u-s*o*p,i[3]=a*c*p+s*o*u,i}const yl=S0,P0=y0,js=b0,ls=w0;(function(){let i=En(),e=on(1,0,0),t=on(0,1,0);return function(n,r,s){let a=ho(r,s);return a<-.999999?(Qs(i,e,r),x0(i)<1e-6&&Qs(i,t,r),Xa(i,i),T0(n,i,Math.PI),n):a>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(Qs(i,r,s),n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=1+a,ls(n,n))}})();(function(){let i=tn(),e=tn();return function(t,n,r,s,a,o){return rr(i,n,a,o),rr(e,r,s,o),rr(t,i,e,2*o*(1-o)),t}})();(function(){let i=E0();return function(e,t,n,r){return i[0]=n[0],i[3]=n[1],i[6]=n[2],i[1]=r[0],i[4]=r[1],i[7]=r[2],i[2]=-t[0],i[5]=-t[1],i[8]=-t[2],ls(e,R0(e,i))}})();const rt=Symbol("@@webxr-polyfill/XRRigidTransform");class fs{constructor(){if(this[rt]={matrix:null,position:null,orientation:null,inverse:null},arguments.length===0)this[rt].matrix=Li(new Float32Array(16));else if(arguments.length===1)arguments[0]instanceof Float32Array?this[rt].matrix=arguments[0]:(this[rt].position=this._getPoint(arguments[0]),this[rt].orientation=DOMPointReadOnly.fromPoint({x:0,y:0,z:0,w:1}));else if(arguments.length===2)this[rt].position=this._getPoint(arguments[0]),this[rt].orientation=this._getPoint(arguments[1]);else throw new Error("Too many arguments!");if(this[rt].matrix){let e=En();vc(e,this[rt].matrix),this[rt].position=DOMPointReadOnly.fromPoint({x:e[0],y:e[1],z:e[2]});let t=tn();xc(t,this[rt].matrix),this[rt].orientation=DOMPointReadOnly.fromPoint({x:t[0],y:t[1],z:t[2],w:t[3]})}else this[rt].matrix=Li(new Float32Array(16)),cr(this[rt].matrix,P0(this[rt].orientation.x,this[rt].orientation.y,this[rt].orientation.z,this[rt].orientation.w),on(this[rt].position.x,this[rt].position.y,this[rt].position.z))}_getPoint(e){return e instanceof DOMPointReadOnly?e:DOMPointReadOnly.fromPoint(e)}get matrix(){return this[rt].matrix}get position(){return this[rt].position}get orientation(){return this[rt].orientation}get inverse(){if(this[rt].inverse===null){let e=Li(new Float32Array(16));os(e,this[rt].matrix),this[rt].inverse=new fs(e),this[rt].inverse[rt].inverse=this}return this[rt].inverse}}const mt=Symbol("@@webxr-polyfill/XRSpace");class hr{constructor(e=null,t=null){this[mt]={specialType:e,inputSource:t,baseMatrix:null,inverseBaseMatrix:null,lastFrameId:-1}}get _specialType(){return this[mt].specialType}get _inputSource(){return this[mt].inputSource}_ensurePoseUpdated(e,t){t!=this[mt].lastFrameId&&(this[mt].lastFrameId=t,this._onPoseUpdate(e))}_onPoseUpdate(e){this[mt].specialType=="viewer"&&(this._baseMatrix=e.getBasePoseMatrix())}set _baseMatrix(e){this[mt].baseMatrix=e,this[mt].inverseBaseMatrix=null}get _baseMatrix(){return this[mt].baseMatrix||this[mt].inverseBaseMatrix&&(this[mt].baseMatrix=new Float32Array(16),os(this[mt].baseMatrix,this[mt].inverseBaseMatrix)),this[mt].baseMatrix}set _inverseBaseMatrix(e){this[mt].inverseBaseMatrix=e,this[mt].baseMatrix=null}get _inverseBaseMatrix(){return this[mt].inverseBaseMatrix||this[mt].baseMatrix&&(this[mt].inverseBaseMatrix=new Float32Array(16),os(this[mt].inverseBaseMatrix,this[mt].baseMatrix)),this[mt].inverseBaseMatrix}_getSpaceRelativeTransform(e){if(!this._inverseBaseMatrix||!e._baseMatrix)return null;let t=new Float32Array(16);return Ii(t,this._inverseBaseMatrix,e._baseMatrix),new fs(t)}}const D0=1.6,Fn=Symbol("@@webxr-polyfill/XRReferenceSpace"),cs=["viewer","local","local-floor","bounded-floor","unbounded"];function L0(i){return i==="bounded-floor"||i==="local-floor"}class ur extends hr{constructor(e,t=null){if(!cs.includes(e))throw new Error(`XRReferenceSpaceType must be one of ${cs}`);if(super(e),e==="bounded-floor"&&!t)throw new Error("XRReferenceSpace cannot use 'bounded-floor' type if the platform does not provide the floor level");L0(e)&&!t&&(t=Li(new Float32Array(16)),t[13]=D0),this._inverseBaseMatrix=t||Li(new Float32Array(16)),this[Fn]={type:e,transform:t,originOffset:Li(new Float32Array(16))}}_transformBasePoseMatrix(e,t){Ii(e,this._inverseBaseMatrix,t)}_originOffsetMatrix(){return this[Fn].originOffset}_adjustForOriginOffset(e){let t=new Float32Array(16);os(t,this[Fn].originOffset),Ii(e,t,e)}_getSpaceRelativeTransform(e){let t=super._getSpaceRelativeTransform(e);return this._adjustForOriginOffset(t.matrix),new XRRigidTransform(t.matrix)}getOffsetReferenceSpace(e){let t=new ur(this[Fn].type,this[Fn].transform,this[Fn].bounds);return Ii(t[Fn].originOffset,this[Fn].originOffset,e.matrix),t}}const Bt=Symbol("@@webxr-polyfill/XR"),I0=["inline","immersive-vr","immersive-ar"],F0={inline:{requiredFeatures:["viewer"],optionalFeatures:[]},"immersive-vr":{requiredFeatures:["viewer","local"],optionalFeatures:[]},"immersive-ar":{requiredFeatures:["viewer","local"],optionalFeatures:[]}},U0=`Polyfill Error: Must call navigator.xr.isSessionSupported() with any XRSessionMode
or navigator.xr.requestSession('inline') prior to requesting an immersive
session. This is a limitation specific to the WebXR Polyfill and does not apply
to native implementations of the API.`;class N0 extends co{constructor(e){super(),this[Bt]={device:null,devicePromise:e,immersiveSession:null,inlineSessions:new Set},e.then(t=>{this[Bt].device=t})}async isSessionSupported(e){return this[Bt].device||await this[Bt].devicePromise,e!="inline"?Promise.resolve(this[Bt].device.isSessionSupported(e)):Promise.resolve(!0)}async requestSession(e,t){if(!this[Bt].device){if(e!="inline")throw new Error(U0);await this[Bt].devicePromise}if(!I0.includes(e))throw new TypeError(`The provided value '${e}' is not a valid enum value of type XRSessionMode`);const n=F0[e],r=n.requiredFeatures.concat(t&&t.requiredFeatures?t.requiredFeatures:[]),s=n.optionalFeatures.concat(t&&t.optionalFeatures?t.optionalFeatures:[]),a=new Set;let o=!1;for(let _ of r)this[Bt].device.isFeatureSupported(_)?a.add(_):(console.error(`The required feature '${_}' is not supported`),o=!0);if(o)throw new DOMException("Session does not support some required features","NotSupportedError");for(let _ of s)this[Bt].device.isFeatureSupported(_)?a.add(_):console.log(`The optional feature '${_}' is not supported`);const c=await this[Bt].device.requestSession(e,a),u=new XRSession(this[Bt].device,e,c);e=="inline"?this[Bt].inlineSessions.add(u):this[Bt].immersiveSession=u;const p=()=>{e=="inline"?this[Bt].inlineSessions.delete(u):this[Bt].immersiveSession=null,u.removeEventListener("end",p)};return u.addEventListener("end",p),u}}let Ya;if("performance"in Ac)Ya=()=>performance.now();else{let i=Date.now();Ya=()=>Date.now()-i}var Mc=Ya;const Zs=Symbol("@@webxr-polyfill/XRPose");class Sc{constructor(e,t){this[Zs]={transform:e,emulatedPosition:t}}get transform(){return this[Zs].transform}get emulatedPosition(){return this[Zs].emulatedPosition}}const bl=Symbol("@@webxr-polyfill/XRViewerPose");class yc extends Sc{constructor(e,t,n=!1){super(e,n),this[bl]={views:t}}get views(){return this[bl].views}}const tr=Symbol("@@webxr-polyfill/XRViewport");class bc{constructor(e){this[tr]={target:e}}get x(){return this[tr].target.x}get y(){return this[tr].target.y}get width(){return this[tr].target.width}get height(){return this[tr].target.height}}const wl=["left","right","none"],Un=Symbol("@@webxr-polyfill/XRView");class wc{constructor(e,t,n,r){if(!wl.includes(n))throw new Error(`XREye must be one of: ${wl}`);const s=Object.create(null),a=new bc(s);this[Un]={device:e,eye:n,viewport:a,temp:s,sessionId:r,transform:t}}get eye(){return this[Un].eye}get projectionMatrix(){return this[Un].device.getProjectionMatrix(this.eye)}get transform(){return this[Un].transform}_getViewport(e){if(this[Un].device.getViewport(this[Un].sessionId,this.eye,e,this[Un].temp))return this[Un].viewport}}const Rt=Symbol("@@webxr-polyfill/XRFrame"),Tl="XRFrame access outside the callback that produced it is invalid.",O0="getViewerPose can only be called on XRFrame objects passed to XRSession.requestAnimationFrame callbacks.";let B0=0;class qa{constructor(e,t,n){this[Rt]={id:++B0,active:!1,animationFrame:!1,device:e,session:t,sessionId:n}}get session(){return this[Rt].session}getViewerPose(e){if(!this[Rt].animationFrame)throw new DOMException(O0,"InvalidStateError");if(!this[Rt].active)throw new DOMException(Tl,"InvalidStateError");const t=this[Rt].device,n=this[Rt].session;n[ee].viewerSpace._ensurePoseUpdated(t,this[Rt].id),e._ensurePoseUpdated(t,this[Rt].id);let r=e._getSpaceRelativeTransform(n[ee].viewerSpace);const s=[];for(let o of n[ee].viewSpaces){o._ensurePoseUpdated(t,this[Rt].id);let c=e._getSpaceRelativeTransform(o),u=new wc(t,c,o.eye,this[Rt].sessionId);s.push(u)}return new yc(r,s,!1)}getPose(e,t){if(!this[Rt].active)throw new DOMException(Tl,"InvalidStateError");const n=this[Rt].device;if(e._specialType==="target-ray"||e._specialType==="grip")return n.getInputPose(e._inputSource,t,e._specialType);{e._ensurePoseUpdated(n,this[Rt].id),t._ensurePoseUpdated(n,this[Rt].id);let r=t._getSpaceRelativeTransform(e);return r?new XRPose(r,!1):null}}}const nr=Symbol("@@webxr-polyfill/XRRenderState"),z0=Object.freeze({depthNear:.1,depthFar:1e3,inlineVerticalFieldOfView:null,baseLayer:null});class Qa{constructor(e={}){const t=Object.assign({},z0,e);this[nr]={config:t}}get depthNear(){return this[nr].config.depthNear}get depthFar(){return this[nr].config.depthFar}get inlineVerticalFieldOfView(){return this[nr].config.inlineVerticalFieldOfView}get baseLayer(){return this[nr].config.baseLayer}}const Tc=Symbol("@@webxr-polyfill/polyfilled-xr-compatible"),uo=Symbol("@@webxr-polyfill/xr-compatible"),Zn=Symbol("@@webxr-polyfill/XRWebGLLayer"),G0=Object.freeze({antialias:!0,depth:!1,stencil:!1,alpha:!0,multiview:!1,ignoreDepthValues:!1,framebufferScaleFactor:1});let V0=class{constructor(e,t,n={}){const r=Object.assign({},G0,n);if(!(e instanceof Rc))throw new Error("session must be a XRSession");if(e.ended)throw new Error("InvalidStateError");if(t[Tc]&&t[uo]!==!0)throw new Error("InvalidStateError");const s=t.getParameter(t.FRAMEBUFFER_BINDING);this[Zn]={context:t,config:r,framebuffer:s,session:e}}get context(){return this[Zn].context}get antialias(){return this[Zn].config.antialias}get ignoreDepthValues(){return!0}get framebuffer(){return this[Zn].framebuffer}get framebufferWidth(){return this[Zn].context.drawingBufferWidth}get framebufferHeight(){return this[Zn].context.drawingBufferHeight}get _session(){return this[Zn].session}getViewport(e){return e._getViewport(this)}static getNativeFramebufferScaleFactor(e){if(!e)throw new TypeError("getNativeFramebufferScaleFactor must be passed a session.");return e[ee].ended?0:1}};const Ks=Symbol("@@webxr-polyfill/XRInputSourceEvent");class ps extends Event{constructor(e,t){super(e,t),this[Ks]={frame:t.frame,inputSource:t.inputSource},Object.setPrototypeOf(this,ps.prototype)}get frame(){return this[Ks].frame}get inputSource(){return this[Ks].inputSource}}const Rl=Symbol("@@webxr-polyfill/XRSessionEvent");class dr extends Event{constructor(e,t){super(e,t),this[Rl]={session:t.session},Object.setPrototypeOf(this,dr.prototype)}get session(){return this[Rl].session}}const Qr=Symbol("@@webxr-polyfill/XRInputSourcesChangeEvent");class ms extends Event{constructor(e,t){super(e,t),this[Qr]={session:t.session,added:t.added,removed:t.removed},Object.setPrototypeOf(this,ms.prototype)}get session(){return this[Qr].session}get added(){return this[Qr].added}get removed(){return this[Qr].removed}}const ee=Symbol("@@webxr-polyfill/XRSession");class $s extends hr{constructor(e){super(e)}get eye(){return this._specialType}_onPoseUpdate(e){this._inverseBaseMatrix=e.getBaseViewMatrix(this._specialType)}}class Rc extends co{constructor(e,t,n){super();let r=t!="inline",s=new Qa({inlineVerticalFieldOfView:r?null:Math.PI*.5});this[ee]={device:e,mode:t,immersive:r,ended:!1,suspended:!1,frameCallbacks:[],currentFrameCallbacks:null,frameHandle:0,deviceFrameHandle:null,id:n,activeRenderState:s,pendingRenderState:null,viewerSpace:new ur("viewer"),viewSpaces:[],currentInputSources:[]},r?this[ee].viewSpaces.push(new $s("left"),new $s("right")):this[ee].viewSpaces.push(new $s("none")),this[ee].onDeviceFrame=()=>{if(this[ee].ended||this[ee].suspended||(this[ee].deviceFrameHandle=null,this[ee].startDeviceFrameLoop(),this[ee].pendingRenderState!==null&&(this[ee].activeRenderState=new Qa(this[ee].pendingRenderState),this[ee].pendingRenderState=null,this[ee].activeRenderState.baseLayer&&this[ee].device.onBaseLayerSet(this[ee].id,this[ee].activeRenderState.baseLayer)),this[ee].activeRenderState.baseLayer===null))return;const a=new qa(e,this,this[ee].id),o=this[ee].currentFrameCallbacks=this[ee].frameCallbacks;this[ee].frameCallbacks=[],a[Rt].active=!0,a[Rt].animationFrame=!0,this[ee].device.onFrameStart(this[ee].id,this[ee].activeRenderState),this._checkInputSourcesChange();const c=Mc();for(let u=0;u<o.length;u++)try{!o[u].cancelled&&typeof o[u].callback=="function"&&o[u].callback(c,a)}catch(p){console.error(p)}this[ee].currentFrameCallbacks=null,a[Rt].active=!1,this[ee].device.onFrameEnd(this[ee].id)},this[ee].startDeviceFrameLoop=()=>{this[ee].deviceFrameHandle===null&&(this[ee].deviceFrameHandle=this[ee].device.requestAnimationFrame(this[ee].onDeviceFrame))},this[ee].stopDeviceFrameLoop=()=>{const a=this[ee].deviceFrameHandle;a!==null&&(this[ee].device.cancelAnimationFrame(a),this[ee].deviceFrameHandle=null)},this[ee].onPresentationEnd=a=>{if(a!==this[ee].id){this[ee].suspended=!1,this[ee].startDeviceFrameLoop(),this.dispatchEvent("focus",{session:this});return}this[ee].ended=!0,this[ee].stopDeviceFrameLoop(),e.removeEventListener("@@webxr-polyfill/vr-present-end",this[ee].onPresentationEnd),e.removeEventListener("@@webxr-polyfill/vr-present-start",this[ee].onPresentationStart),e.removeEventListener("@@webxr-polyfill/input-select-start",this[ee].onSelectStart),e.removeEventListener("@@webxr-polyfill/input-select-end",this[ee].onSelectEnd),this.dispatchEvent("end",new dr("end",{session:this}))},e.addEventListener("@@webxr-polyfill/vr-present-end",this[ee].onPresentationEnd),this[ee].onPresentationStart=a=>{a!==this[ee].id&&(this[ee].suspended=!0,this[ee].stopDeviceFrameLoop(),this.dispatchEvent("blur",{session:this}))},e.addEventListener("@@webxr-polyfill/vr-present-start",this[ee].onPresentationStart),this[ee].onSelectStart=a=>{a.sessionId===this[ee].id&&this[ee].dispatchInputSourceEvent("selectstart",a.inputSource)},e.addEventListener("@@webxr-polyfill/input-select-start",this[ee].onSelectStart),this[ee].onSelectEnd=a=>{a.sessionId===this[ee].id&&(this[ee].dispatchInputSourceEvent("selectend",a.inputSource),this[ee].dispatchInputSourceEvent("select",a.inputSource))},e.addEventListener("@@webxr-polyfill/input-select-end",this[ee].onSelectEnd),this[ee].onSqueezeStart=a=>{a.sessionId===this[ee].id&&this[ee].dispatchInputSourceEvent("squeezestart",a.inputSource)},e.addEventListener("@@webxr-polyfill/input-squeeze-start",this[ee].onSqueezeStart),this[ee].onSqueezeEnd=a=>{a.sessionId===this[ee].id&&(this[ee].dispatchInputSourceEvent("squeezeend",a.inputSource),this[ee].dispatchInputSourceEvent("squeeze",a.inputSource))},e.addEventListener("@@webxr-polyfill/input-squeeze-end",this[ee].onSqueezeEnd),this[ee].dispatchInputSourceEvent=(a,o)=>{const c=new qa(e,this,this[ee].id),u=new ps(a,{frame:c,inputSource:o});c[Rt].active=!0,this.dispatchEvent(a,u),c[Rt].active=!1},this[ee].startDeviceFrameLoop(),this.onblur=void 0,this.onfocus=void 0,this.onresetpose=void 0,this.onend=void 0,this.onselect=void 0,this.onselectstart=void 0,this.onselectend=void 0}get renderState(){return this[ee].activeRenderState}get environmentBlendMode(){return this[ee].device.environmentBlendMode||"opaque"}async requestReferenceSpace(e){if(this[ee].ended)return;if(!cs.includes(e))throw new TypeError(`XRReferenceSpaceType must be one of ${cs}`);if(!this[ee].device.doesSessionSupportReferenceSpace(this[ee].id,e))throw new DOMException(`The ${e} reference space is not supported by this session.`,"NotSupportedError");if(e==="viewer")return this[ee].viewerSpace;let t=await this[ee].device.requestFrameOfReferenceTransform(e);if(e==="bounded-floor")throw t?this[ee].device.requestStageBounds()?new DOMException(`The WebXR polyfill does not support the ${e} reference space yet.`,"NotSupportedError"):new DOMException(`${e} XRReferenceSpace not supported by this device.`,"NotSupportedError"):new DOMException(`${e} XRReferenceSpace not supported by this device.`,"NotSupportedError");return new ur(e,t)}requestAnimationFrame(e){if(this[ee].ended)return;const t=++this[ee].frameHandle;return this[ee].frameCallbacks.push({handle:t,callback:e,cancelled:!1}),t}cancelAnimationFrame(e){let t=this[ee].frameCallbacks,n=t.findIndex(r=>r&&r.handle===e);n>-1&&(t[n].cancelled=!0,t.splice(n,1)),t=this[ee].currentFrameCallbacks,t&&(n=t.findIndex(r=>r&&r.handle===e),n>-1&&(t[n].cancelled=!0))}get inputSources(){return this[ee].device.getInputSources()}async end(){if(!this[ee].ended)return this[ee].immersive&&(this[ee].ended=!0,this[ee].device.removeEventListener("@@webxr-polyfill/vr-present-start",this[ee].onPresentationStart),this[ee].device.removeEventListener("@@webxr-polyfill/vr-present-end",this[ee].onPresentationEnd),this[ee].device.removeEventListener("@@webxr-polyfill/input-select-start",this[ee].onSelectStart),this[ee].device.removeEventListener("@@webxr-polyfill/input-select-end",this[ee].onSelectEnd),this.dispatchEvent("end",new dr("end",{session:this}))),this[ee].stopDeviceFrameLoop(),this[ee].device.endSession(this[ee].id)}updateRenderState(e){if(this[ee].ended){const n="Can't call updateRenderState on an XRSession that has already ended.";throw new Error(n)}if(e.baseLayer&&e.baseLayer._session!==this){const n="Called updateRenderState with a base layer that was created by a different session.";throw new Error(n)}if(e.inlineVerticalFieldOfView!==null&&e.inlineVerticalFieldOfView!==void 0)if(this[ee].immersive){const n="inlineVerticalFieldOfView must not be set for an XRRenderState passed to updateRenderState for an immersive session.";throw new Error(n)}else e.inlineVerticalFieldOfView=Math.min(3.13,Math.max(.01,e.inlineVerticalFieldOfView));if(this[ee].pendingRenderState===null){const n=this[ee].activeRenderState;this[ee].pendingRenderState={depthNear:n.depthNear,depthFar:n.depthFar,inlineVerticalFieldOfView:n.inlineVerticalFieldOfView,baseLayer:n.baseLayer}}Object.assign(this[ee].pendingRenderState,e)}_checkInputSourcesChange(){const e=[],t=[],n=this.inputSources,r=this[ee].currentInputSources;for(const s of n)r.includes(s)||e.push(s);for(const s of r)n.includes(s)||t.push(s);(e.length>0||t.length>0)&&this.dispatchEvent("inputsourceschange",new ms("inputsourceschange",{session:this,added:e,removed:t})),this[ee].currentInputSources.length=0;for(const s of n)this[ee].currentInputSources.push(s)}}const Nn=Symbol("@@webxr-polyfill/XRInputSource");class Cc{constructor(e){this[Nn]={impl:e,gripSpace:new hr("grip",this),targetRaySpace:new hr("target-ray",this)}}get handedness(){return this[Nn].impl.handedness}get targetRayMode(){return this[Nn].impl.targetRayMode}get gripSpace(){let e=this[Nn].impl.targetRayMode;return e==="gaze"||e==="screen"?null:this[Nn].gripSpace}get targetRaySpace(){return this[Nn].targetRaySpace}get profiles(){return this[Nn].impl.profiles}get gamepad(){return this[Nn].impl.gamepad}}const Js=Symbol("@@webxr-polyfill/XRReferenceSpaceEvent");class fo extends Event{constructor(e,t){super(e,t),this[Js]={referenceSpace:t.referenceSpace,transform:t.transform||null},Object.setPrototypeOf(this,fo.prototype)}get referenceSpace(){return this[Js].referenceSpace}get transform(){return this[Js].transform}}var ea={XRSystem:N0,XRSession:Rc,XRSessionEvent:dr,XRFrame:qa,XRView:wc,XRViewport:bc,XRViewerPose:yc,XRWebGLLayer:V0,XRSpace:hr,XRReferenceSpace:ur,XRReferenceSpaceEvent:fo,XRInputSource:Cc,XRInputSourceEvent:ps,XRInputSourcesChangeEvent:ms,XRRenderState:Qa,XRRigidTransform:fs,XRPose:Sc};const Cl=i=>typeof i.prototype.makeXRCompatible=="function"?!1:(i.prototype.makeXRCompatible=function(){return this[uo]=!0,Promise.resolve()},!0),Pl=i=>{const e=i.prototype.getContext;i.prototype.getContext=function(t,n){const r=e.call(this,t,n);return r&&(r[Tc]=!0,n&&"xrCompatible"in n&&(r[uo]=n.xrCompatible)),r}},k0=i=>!!(i.ImageBitmapRenderingContext&&i.createImageBitmap),H0=i=>{var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(i.navigator.userAgent||i.navigator.vendor||i.opera),e},W0=i=>{i.style.display="block",i.style.position="absolute",i.style.width=i.style.height="1px",i.style.top=i.style.left="0px"};var ta=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function X0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Y0(i,e){return e={exports:{}},i(e,e.exports),e.exports}var q0=Y0(function(i,e){(function(t,n){i.exports=n()})(ta,function(){var t=function(h,d){if(!(h instanceof d))throw new TypeError("Cannot call a class as a function")},n=function(){function h(d,l){for(var f=0;f<l.length;f++){var v=l[f];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(d,v.key,v)}}return function(d,l,f){return l&&h(d.prototype,l),f&&h(d,f),d}}(),r=function(){function h(d,l){var f=[],v=!0,M=!1,S=void 0;try{for(var O=d[Symbol.iterator](),V;!(v=(V=O.next()).done)&&(f.push(V.value),!(l&&f.length===l));v=!0);}catch(L){M=!0,S=L}finally{try{!v&&O.return&&O.return()}finally{if(M)throw S}}return f}return function(d,l){if(Array.isArray(d))return d;if(Symbol.iterator in Object(d))return h(d,l);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=.001,a=1,o=function(d,l){return"data:"+d+","+encodeURIComponent(l)},c=function(d,l,f){return d+(l-d)*f},u=function(){var h=/iPad|iPhone|iPod/.test(navigator.platform);return function(){return h}}(),p=function(){var h=navigator.userAgent.indexOf("Version")!==-1&&navigator.userAgent.indexOf("Android")!==-1&&navigator.userAgent.indexOf("Chrome")!==-1;return function(){return h}}(),_=function(){var h=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);return function(){return h}}(),g=function(){var h=navigator.userAgent.indexOf("Firefox")!==-1&&navigator.userAgent.indexOf("Android")!==-1;return function(){return h}}(),x=function(){var h=navigator.userAgent.match(/.*Chrome\/([0-9]+)/),d=h?parseInt(h[1],10):null;return function(){return d}}(),y=function(){var h=!1;return h=u()&&_()&&navigator.userAgent.indexOf("13_4")!==-1,function(){return h}}(),w=function(){var h=!1;if(x()===65){var d=navigator.userAgent.match(/.*Chrome\/([0-9\.]*)/);if(d){var l=d[1].split("."),f=r(l,4);f[0],f[1];var v=f[2],M=f[3];h=parseInt(v,10)===3325&&parseInt(M,10)<148}}return function(){return h}}(),A=function(){var h=navigator.userAgent.indexOf("R7 Build")!==-1;return function(){return h}}(),m=function(){var d=window.orientation==90||window.orientation==-90;return A()?!d:d},I=function(d){return!(isNaN(d)||d<=s||d>a)},P=function(){return Math.max(window.screen.width,window.screen.height)*window.devicePixelRatio},T=function(){return Math.min(window.screen.width,window.screen.height)*window.devicePixelRatio},z=function(d){if(p())return!1;if(d.requestFullscreen)d.requestFullscreen();else if(d.webkitRequestFullscreen)d.webkitRequestFullscreen();else if(d.mozRequestFullScreen)d.mozRequestFullScreen();else if(d.msRequestFullscreen)d.msRequestFullscreen();else return!1;return!0},D=function(){if(document.exitFullscreen)document.exitFullscreen();else if(document.webkitExitFullscreen)document.webkitExitFullscreen();else if(document.mozCancelFullScreen)document.mozCancelFullScreen();else if(document.msExitFullscreen)document.msExitFullscreen();else return!1;return!0},U=function(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement},k=function(d,l,f,v){var M=d.createShader(d.VERTEX_SHADER);d.shaderSource(M,l),d.compileShader(M);var S=d.createShader(d.FRAGMENT_SHADER);d.shaderSource(S,f),d.compileShader(S);var O=d.createProgram();d.attachShader(O,M),d.attachShader(O,S);for(var V in v)d.bindAttribLocation(O,v[V],V);return d.linkProgram(O),d.deleteShader(M),d.deleteShader(S),O},C=function(d,l){for(var f={},v=d.getProgramParameter(l,d.ACTIVE_UNIFORMS),M="",S=0;S<v;S++){var O=d.getActiveUniform(l,S);M=O.name.replace("[0]",""),f[M]=d.getUniformLocation(l,M)}return f},b=function(d,l,f,v,M,S,O){var V=1/(l-f),L=1/(v-M),B=1/(S-O);return d[0]=-2*V,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=-2*L,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=2*B,d[11]=0,d[12]=(l+f)*V,d[13]=(M+v)*L,d[14]=(O+S)*B,d[15]=1,d},N=function(){var d=!1;return function(l){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(l)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(l.substr(0,4)))&&(d=!0)}(navigator.userAgent||navigator.vendor||window.opera),d},K=function(d,l){for(var f in l)l.hasOwnProperty(f)&&(d[f]=l[f]);return d},X=function(d){if(u()){var l=d.style.width,f=d.style.height;d.style.width=parseInt(l)+1+"px",d.style.height=parseInt(f)+"px",setTimeout(function(){d.style.width=l,d.style.height=f},100)}window.canvas=d},Y=function(){var h=Math.PI/180,d=Math.PI*.25;function l(L,B,q,re){var se=Math.tan(B?B.upDegrees*h:d),de=Math.tan(B?B.downDegrees*h:d),ye=Math.tan(B?B.leftDegrees*h:d),Ce=Math.tan(B?B.rightDegrees*h:d),Re=2/(ye+Ce),De=2/(se+de);return L[0]=Re,L[1]=0,L[2]=0,L[3]=0,L[4]=0,L[5]=De,L[6]=0,L[7]=0,L[8]=-((ye-Ce)*Re*.5),L[9]=(se-de)*De*.5,L[10]=re/(q-re),L[11]=-1,L[12]=0,L[13]=0,L[14]=re*q/(q-re),L[15]=0,L}function f(L,B,q){var re=B[0],se=B[1],de=B[2],ye=B[3],Ce=re+re,Re=se+se,De=de+de,xe=re*Ce,Je=re*Re,Ue=re*De,st=se*Re,Et=se*De,lt=de*De,bt=ye*Ce,Qe=ye*Re,At=ye*De;return L[0]=1-(st+lt),L[1]=Je+At,L[2]=Ue-Qe,L[3]=0,L[4]=Je-At,L[5]=1-(xe+lt),L[6]=Et+bt,L[7]=0,L[8]=Ue+Qe,L[9]=Et-bt,L[10]=1-(xe+st),L[11]=0,L[12]=q[0],L[13]=q[1],L[14]=q[2],L[15]=1,L}function v(L,B,q){var re=q[0],se=q[1],de=q[2],ye,Ce,Re,De,xe,Je,Ue,st,Et,lt,bt,Qe;return B===L?(L[12]=B[0]*re+B[4]*se+B[8]*de+B[12],L[13]=B[1]*re+B[5]*se+B[9]*de+B[13],L[14]=B[2]*re+B[6]*se+B[10]*de+B[14],L[15]=B[3]*re+B[7]*se+B[11]*de+B[15]):(ye=B[0],Ce=B[1],Re=B[2],De=B[3],xe=B[4],Je=B[5],Ue=B[6],st=B[7],Et=B[8],lt=B[9],bt=B[10],Qe=B[11],L[0]=ye,L[1]=Ce,L[2]=Re,L[3]=De,L[4]=xe,L[5]=Je,L[6]=Ue,L[7]=st,L[8]=Et,L[9]=lt,L[10]=bt,L[11]=Qe,L[12]=ye*re+xe*se+Et*de+B[12],L[13]=Ce*re+Je*se+lt*de+B[13],L[14]=Re*re+Ue*se+bt*de+B[14],L[15]=De*re+st*se+Qe*de+B[15]),L}function M(L,B){var q=B[0],re=B[1],se=B[2],de=B[3],ye=B[4],Ce=B[5],Re=B[6],De=B[7],xe=B[8],Je=B[9],Ue=B[10],st=B[11],Et=B[12],lt=B[13],bt=B[14],Qe=B[15],At=q*Ce-re*ye,Dt=q*Re-se*ye,vt=q*De-de*ye,Mt=re*Re-se*Ce,fn=re*De-de*Ce,Xt=se*De-de*Re,ki=xe*lt-Je*Et,Hi=xe*bt-Ue*Et,Wi=xe*Qe-st*Et,Xi=Je*bt-Ue*lt,Yi=Je*Qe-st*lt,qi=Ue*Qe-st*bt,wt=At*qi-Dt*Yi+vt*Xi+Mt*Wi-fn*Hi+Xt*ki;return wt?(wt=1/wt,L[0]=(Ce*qi-Re*Yi+De*Xi)*wt,L[1]=(se*Yi-re*qi-de*Xi)*wt,L[2]=(lt*Xt-bt*fn+Qe*Mt)*wt,L[3]=(Ue*fn-Je*Xt-st*Mt)*wt,L[4]=(Re*Wi-ye*qi-De*Hi)*wt,L[5]=(q*qi-se*Wi+de*Hi)*wt,L[6]=(bt*vt-Et*Xt-Qe*Dt)*wt,L[7]=(xe*Xt-Ue*vt+st*Dt)*wt,L[8]=(ye*Yi-Ce*Wi+De*ki)*wt,L[9]=(re*Wi-q*Yi-de*ki)*wt,L[10]=(Et*fn-lt*vt+Qe*At)*wt,L[11]=(Je*vt-xe*fn-st*At)*wt,L[12]=(Ce*Hi-ye*Xi-Re*ki)*wt,L[13]=(q*Xi-re*Hi+se*ki)*wt,L[14]=(lt*Dt-Et*Mt-bt*At)*wt,L[15]=(xe*Mt-Je*Dt+Ue*At)*wt,L):null}var S=new Float32Array([0,0,0,1]),O=new Float32Array([0,0,0]);function V(L,B,q,re,se,de){l(L,re||null,de.depthNear,de.depthFar);var ye=q.orientation||S,Ce=q.position||O;f(B,ye,Ce),se&&v(B,B,se),M(B,B)}return function(L,B,q){return!L||!B?!1:(L.pose=B,L.timestamp=B.timestamp,V(L.leftProjectionMatrix,L.leftViewMatrix,B,q._getFieldOfView("left"),q._getEyeOffset("left"),q),V(L.rightProjectionMatrix,L.rightViewMatrix,B,q._getFieldOfView("right"),q._getEyeOffset("right"),q),!0)}}(),oe=function(){var d=window.self!==window.top,l=$(document.referrer),f=$(window.location.href);return d&&l!==f},$=function(d){var l,f=d.indexOf("://");f!==-1?l=f+3:l=0;var v=d.indexOf("/",l);return v===-1&&(v=d.length),d.substring(0,v)},he=function(d){if(d.w>1)return console.warn("getQuaternionAngle: w > 1"),0;var l=2*Math.acos(d.w);return l},Q=function(){var h={};return function(d,l){h[d]===void 0&&(console.warn("webvr-polyfill: "+l),h[d]=!0)}}(),fe=function(d,l){var f=l?"Please use "+l+" instead.":"";Q(d,d+" has been deprecated. This may not work on native WebVR displays. "+f)};function ie(h,d,l){if(!d){l(h);return}for(var f=[],v=null,M=0;M<d.length;++M){var S=d[M];switch(S){case h.TEXTURE_BINDING_2D:case h.TEXTURE_BINDING_CUBE_MAP:var O=d[++M];if(O<h.TEXTURE0||O>h.TEXTURE31){console.error("TEXTURE_BINDING_2D or TEXTURE_BINDING_CUBE_MAP must be followed by a valid texture unit"),f.push(null,null);break}v||(v=h.getParameter(h.ACTIVE_TEXTURE)),h.activeTexture(O),f.push(h.getParameter(S),null);break;case h.ACTIVE_TEXTURE:v=h.getParameter(h.ACTIVE_TEXTURE),f.push(null);break;default:f.push(h.getParameter(S));break}}l(h);for(var M=0;M<d.length;++M){var S=d[M],V=f[M];switch(S){case h.ACTIVE_TEXTURE:break;case h.ARRAY_BUFFER_BINDING:h.bindBuffer(h.ARRAY_BUFFER,V);break;case h.COLOR_CLEAR_VALUE:h.clearColor(V[0],V[1],V[2],V[3]);break;case h.COLOR_WRITEMASK:h.colorMask(V[0],V[1],V[2],V[3]);break;case h.CURRENT_PROGRAM:h.useProgram(V);break;case h.ELEMENT_ARRAY_BUFFER_BINDING:h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,V);break;case h.FRAMEBUFFER_BINDING:h.bindFramebuffer(h.FRAMEBUFFER,V);break;case h.RENDERBUFFER_BINDING:h.bindRenderbuffer(h.RENDERBUFFER,V);break;case h.TEXTURE_BINDING_2D:var O=d[++M];if(O<h.TEXTURE0||O>h.TEXTURE31)break;h.activeTexture(O),h.bindTexture(h.TEXTURE_2D,V);break;case h.TEXTURE_BINDING_CUBE_MAP:var O=d[++M];if(O<h.TEXTURE0||O>h.TEXTURE31)break;h.activeTexture(O),h.bindTexture(h.TEXTURE_CUBE_MAP,V);break;case h.VIEWPORT:h.viewport(V[0],V[1],V[2],V[3]);break;case h.BLEND:case h.CULL_FACE:case h.DEPTH_TEST:case h.SCISSOR_TEST:case h.STENCIL_TEST:V?h.enable(S):h.disable(S);break;default:console.log("No GL restore behavior for 0x"+S.toString(16));break}v&&h.activeTexture(v)}}var pe=ie,Oe=["attribute vec2 position;","attribute vec3 texCoord;","varying vec2 vTexCoord;","uniform vec4 viewportOffsetScale[2];","void main() {","  vec4 viewport = viewportOffsetScale[int(texCoord.z)];","  vTexCoord = (texCoord.xy * viewport.zw) + viewport.xy;","  gl_Position = vec4( position, 1.0, 1.0 );","}"].join(`
`),Xe=["precision mediump float;","uniform sampler2D diffuse;","varying vec2 vTexCoord;","void main() {","  gl_FragColor = texture2D(diffuse, vTexCoord);","}"].join(`
`);function Z(h,d,l,f){this.gl=h,this.cardboardUI=d,this.bufferScale=l,this.dirtySubmitFrameBindings=f,this.ctxAttribs=h.getContextAttributes(),this.instanceExt=h.getExtension("ANGLE_instanced_arrays"),this.meshWidth=20,this.meshHeight=20,this.bufferWidth=h.drawingBufferWidth,this.bufferHeight=h.drawingBufferHeight,this.realBindFramebuffer=h.bindFramebuffer,this.realEnable=h.enable,this.realDisable=h.disable,this.realColorMask=h.colorMask,this.realClearColor=h.clearColor,this.realViewport=h.viewport,u()||(this.realCanvasWidth=Object.getOwnPropertyDescriptor(h.canvas.__proto__,"width"),this.realCanvasHeight=Object.getOwnPropertyDescriptor(h.canvas.__proto__,"height")),this.isPatched=!1,this.lastBoundFramebuffer=null,this.cullFace=!1,this.depthTest=!1,this.blend=!1,this.scissorTest=!1,this.stencilTest=!1,this.viewport=[0,0,0,0],this.colorMask=[!0,!0,!0,!0],this.clearColor=[0,0,0,0],this.attribs={position:0,texCoord:1},this.program=k(h,Oe,Xe,this.attribs),this.uniforms=C(h,this.program),this.viewportOffsetScale=new Float32Array(8),this.setTextureBounds(),this.vertexBuffer=h.createBuffer(),this.indexBuffer=h.createBuffer(),this.indexCount=0,this.renderTarget=h.createTexture(),this.framebuffer=h.createFramebuffer(),this.depthStencilBuffer=null,this.depthBuffer=null,this.stencilBuffer=null,this.ctxAttribs.depth&&this.ctxAttribs.stencil?this.depthStencilBuffer=h.createRenderbuffer():this.ctxAttribs.depth?this.depthBuffer=h.createRenderbuffer():this.ctxAttribs.stencil&&(this.stencilBuffer=h.createRenderbuffer()),this.patch(),this.onResize()}Z.prototype.destroy=function(){var h=this.gl;this.unpatch(),h.deleteProgram(this.program),h.deleteBuffer(this.vertexBuffer),h.deleteBuffer(this.indexBuffer),h.deleteTexture(this.renderTarget),h.deleteFramebuffer(this.framebuffer),this.depthStencilBuffer&&h.deleteRenderbuffer(this.depthStencilBuffer),this.depthBuffer&&h.deleteRenderbuffer(this.depthBuffer),this.stencilBuffer&&h.deleteRenderbuffer(this.stencilBuffer),this.cardboardUI&&this.cardboardUI.destroy()},Z.prototype.onResize=function(){var h=this.gl,d=this,l=[h.RENDERBUFFER_BINDING,h.TEXTURE_BINDING_2D,h.TEXTURE0];pe(h,l,function(f){d.realBindFramebuffer.call(f,f.FRAMEBUFFER,null),d.scissorTest&&d.realDisable.call(f,f.SCISSOR_TEST),d.realColorMask.call(f,!0,!0,!0,!0),d.realViewport.call(f,0,0,f.drawingBufferWidth,f.drawingBufferHeight),d.realClearColor.call(f,0,0,0,1),f.clear(f.COLOR_BUFFER_BIT),d.realBindFramebuffer.call(f,f.FRAMEBUFFER,d.framebuffer),f.bindTexture(f.TEXTURE_2D,d.renderTarget),f.texImage2D(f.TEXTURE_2D,0,d.ctxAttribs.alpha?f.RGBA:f.RGB,d.bufferWidth,d.bufferHeight,0,d.ctxAttribs.alpha?f.RGBA:f.RGB,f.UNSIGNED_BYTE,null),f.texParameteri(f.TEXTURE_2D,f.TEXTURE_MAG_FILTER,f.LINEAR),f.texParameteri(f.TEXTURE_2D,f.TEXTURE_MIN_FILTER,f.LINEAR),f.texParameteri(f.TEXTURE_2D,f.TEXTURE_WRAP_S,f.CLAMP_TO_EDGE),f.texParameteri(f.TEXTURE_2D,f.TEXTURE_WRAP_T,f.CLAMP_TO_EDGE),f.framebufferTexture2D(f.FRAMEBUFFER,f.COLOR_ATTACHMENT0,f.TEXTURE_2D,d.renderTarget,0),d.ctxAttribs.depth&&d.ctxAttribs.stencil?(f.bindRenderbuffer(f.RENDERBUFFER,d.depthStencilBuffer),f.renderbufferStorage(f.RENDERBUFFER,f.DEPTH_STENCIL,d.bufferWidth,d.bufferHeight),f.framebufferRenderbuffer(f.FRAMEBUFFER,f.DEPTH_STENCIL_ATTACHMENT,f.RENDERBUFFER,d.depthStencilBuffer)):d.ctxAttribs.depth?(f.bindRenderbuffer(f.RENDERBUFFER,d.depthBuffer),f.renderbufferStorage(f.RENDERBUFFER,f.DEPTH_COMPONENT16,d.bufferWidth,d.bufferHeight),f.framebufferRenderbuffer(f.FRAMEBUFFER,f.DEPTH_ATTACHMENT,f.RENDERBUFFER,d.depthBuffer)):d.ctxAttribs.stencil&&(f.bindRenderbuffer(f.RENDERBUFFER,d.stencilBuffer),f.renderbufferStorage(f.RENDERBUFFER,f.STENCIL_INDEX8,d.bufferWidth,d.bufferHeight),f.framebufferRenderbuffer(f.FRAMEBUFFER,f.STENCIL_ATTACHMENT,f.RENDERBUFFER,d.stencilBuffer)),!f.checkFramebufferStatus(f.FRAMEBUFFER)===f.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer incomplete!"),d.realBindFramebuffer.call(f,f.FRAMEBUFFER,d.lastBoundFramebuffer),d.scissorTest&&d.realEnable.call(f,f.SCISSOR_TEST),d.realColorMask.apply(f,d.colorMask),d.realViewport.apply(f,d.viewport),d.realClearColor.apply(f,d.clearColor)}),this.cardboardUI&&this.cardboardUI.onResize()},Z.prototype.patch=function(){if(!this.isPatched){var h=this,d=this.gl.canvas,l=this.gl;u()||(d.width=P()*this.bufferScale,d.height=T()*this.bufferScale,Object.defineProperty(d,"width",{configurable:!0,enumerable:!0,get:function(){return h.bufferWidth},set:function(v){h.bufferWidth=v,h.realCanvasWidth.set.call(d,v),h.onResize()}}),Object.defineProperty(d,"height",{configurable:!0,enumerable:!0,get:function(){return h.bufferHeight},set:function(v){h.bufferHeight=v,h.realCanvasHeight.set.call(d,v),h.onResize()}})),this.lastBoundFramebuffer=l.getParameter(l.FRAMEBUFFER_BINDING),this.lastBoundFramebuffer==null&&(this.lastBoundFramebuffer=this.framebuffer,this.gl.bindFramebuffer(l.FRAMEBUFFER,this.framebuffer)),this.gl.bindFramebuffer=function(f,v){h.lastBoundFramebuffer=v||h.framebuffer,h.realBindFramebuffer.call(l,f,h.lastBoundFramebuffer)},this.cullFace=l.getParameter(l.CULL_FACE),this.depthTest=l.getParameter(l.DEPTH_TEST),this.blend=l.getParameter(l.BLEND),this.scissorTest=l.getParameter(l.SCISSOR_TEST),this.stencilTest=l.getParameter(l.STENCIL_TEST),l.enable=function(f){switch(f){case l.CULL_FACE:h.cullFace=!0;break;case l.DEPTH_TEST:h.depthTest=!0;break;case l.BLEND:h.blend=!0;break;case l.SCISSOR_TEST:h.scissorTest=!0;break;case l.STENCIL_TEST:h.stencilTest=!0;break}h.realEnable.call(l,f)},l.disable=function(f){switch(f){case l.CULL_FACE:h.cullFace=!1;break;case l.DEPTH_TEST:h.depthTest=!1;break;case l.BLEND:h.blend=!1;break;case l.SCISSOR_TEST:h.scissorTest=!1;break;case l.STENCIL_TEST:h.stencilTest=!1;break}h.realDisable.call(l,f)},this.colorMask=l.getParameter(l.COLOR_WRITEMASK),l.colorMask=function(f,v,M,S){h.colorMask[0]=f,h.colorMask[1]=v,h.colorMask[2]=M,h.colorMask[3]=S,h.realColorMask.call(l,f,v,M,S)},this.clearColor=l.getParameter(l.COLOR_CLEAR_VALUE),l.clearColor=function(f,v,M,S){h.clearColor[0]=f,h.clearColor[1]=v,h.clearColor[2]=M,h.clearColor[3]=S,h.realClearColor.call(l,f,v,M,S)},this.viewport=l.getParameter(l.VIEWPORT),l.viewport=function(f,v,M,S){h.viewport[0]=f,h.viewport[1]=v,h.viewport[2]=M,h.viewport[3]=S,h.realViewport.call(l,f,v,M,S)},this.isPatched=!0,X(d)}},Z.prototype.unpatch=function(){if(this.isPatched){var h=this.gl,d=this.gl.canvas;u()||(Object.defineProperty(d,"width",this.realCanvasWidth),Object.defineProperty(d,"height",this.realCanvasHeight)),d.width=this.bufferWidth,d.height=this.bufferHeight,h.bindFramebuffer=this.realBindFramebuffer,h.enable=this.realEnable,h.disable=this.realDisable,h.colorMask=this.realColorMask,h.clearColor=this.realClearColor,h.viewport=this.realViewport,this.lastBoundFramebuffer==this.framebuffer&&h.bindFramebuffer(h.FRAMEBUFFER,null),this.isPatched=!1,setTimeout(function(){X(d)},1)}},Z.prototype.setTextureBounds=function(h,d){h||(h=[0,0,.5,1]),d||(d=[.5,0,.5,1]),this.viewportOffsetScale[0]=h[0],this.viewportOffsetScale[1]=h[1],this.viewportOffsetScale[2]=h[2],this.viewportOffsetScale[3]=h[3],this.viewportOffsetScale[4]=d[0],this.viewportOffsetScale[5]=d[1],this.viewportOffsetScale[6]=d[2],this.viewportOffsetScale[7]=d[3]},Z.prototype.submitFrame=function(){var h=this.gl,d=this,l=[];if(this.dirtySubmitFrameBindings||l.push(h.CURRENT_PROGRAM,h.ARRAY_BUFFER_BINDING,h.ELEMENT_ARRAY_BUFFER_BINDING,h.TEXTURE_BINDING_2D,h.TEXTURE0),pe(h,l,function(v){d.realBindFramebuffer.call(v,v.FRAMEBUFFER,null);var M=0,S=0;d.instanceExt&&(M=v.getVertexAttrib(d.attribs.position,d.instanceExt.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE),S=v.getVertexAttrib(d.attribs.texCoord,d.instanceExt.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE)),d.cullFace&&d.realDisable.call(v,v.CULL_FACE),d.depthTest&&d.realDisable.call(v,v.DEPTH_TEST),d.blend&&d.realDisable.call(v,v.BLEND),d.scissorTest&&d.realDisable.call(v,v.SCISSOR_TEST),d.stencilTest&&d.realDisable.call(v,v.STENCIL_TEST),d.realColorMask.call(v,!0,!0,!0,!0),d.realViewport.call(v,0,0,v.drawingBufferWidth,v.drawingBufferHeight),(d.ctxAttribs.alpha||u())&&(d.realClearColor.call(v,0,0,0,1),v.clear(v.COLOR_BUFFER_BIT)),v.useProgram(d.program),v.bindBuffer(v.ELEMENT_ARRAY_BUFFER,d.indexBuffer),v.bindBuffer(v.ARRAY_BUFFER,d.vertexBuffer),v.enableVertexAttribArray(d.attribs.position),v.enableVertexAttribArray(d.attribs.texCoord),v.vertexAttribPointer(d.attribs.position,2,v.FLOAT,!1,20,0),v.vertexAttribPointer(d.attribs.texCoord,3,v.FLOAT,!1,20,8),d.instanceExt&&(M!=0&&d.instanceExt.vertexAttribDivisorANGLE(d.attribs.position,0),S!=0&&d.instanceExt.vertexAttribDivisorANGLE(d.attribs.texCoord,0)),v.activeTexture(v.TEXTURE0),v.uniform1i(d.uniforms.diffuse,0),v.bindTexture(v.TEXTURE_2D,d.renderTarget),v.uniform4fv(d.uniforms.viewportOffsetScale,d.viewportOffsetScale),v.drawElements(v.TRIANGLES,d.indexCount,v.UNSIGNED_SHORT,0),d.cardboardUI&&d.cardboardUI.renderNoState(),d.realBindFramebuffer.call(d.gl,v.FRAMEBUFFER,d.framebuffer),d.ctxAttribs.preserveDrawingBuffer||(d.realClearColor.call(v,0,0,0,0),v.clear(v.COLOR_BUFFER_BIT)),d.dirtySubmitFrameBindings||d.realBindFramebuffer.call(v,v.FRAMEBUFFER,d.lastBoundFramebuffer),d.cullFace&&d.realEnable.call(v,v.CULL_FACE),d.depthTest&&d.realEnable.call(v,v.DEPTH_TEST),d.blend&&d.realEnable.call(v,v.BLEND),d.scissorTest&&d.realEnable.call(v,v.SCISSOR_TEST),d.stencilTest&&d.realEnable.call(v,v.STENCIL_TEST),d.realColorMask.apply(v,d.colorMask),d.realViewport.apply(v,d.viewport),(d.ctxAttribs.alpha||!d.ctxAttribs.preserveDrawingBuffer)&&d.realClearColor.apply(v,d.clearColor),d.instanceExt&&(M!=0&&d.instanceExt.vertexAttribDivisorANGLE(d.attribs.position,M),S!=0&&d.instanceExt.vertexAttribDivisorANGLE(d.attribs.texCoord,S))}),u()){var f=h.canvas;(f.width!=d.bufferWidth||f.height!=d.bufferHeight)&&(d.bufferWidth=f.width,d.bufferHeight=f.height,d.onResize())}},Z.prototype.updateDeviceInfo=function(h){var d=this.gl,l=this,f=[d.ARRAY_BUFFER_BINDING,d.ELEMENT_ARRAY_BUFFER_BINDING];pe(d,f,function(v){var M=l.computeMeshVertices_(l.meshWidth,l.meshHeight,h);if(v.bindBuffer(v.ARRAY_BUFFER,l.vertexBuffer),v.bufferData(v.ARRAY_BUFFER,M,v.STATIC_DRAW),!l.indexCount){var S=l.computeMeshIndices_(l.meshWidth,l.meshHeight);v.bindBuffer(v.ELEMENT_ARRAY_BUFFER,l.indexBuffer),v.bufferData(v.ELEMENT_ARRAY_BUFFER,S,v.STATIC_DRAW),l.indexCount=S.length}})},Z.prototype.computeMeshVertices_=function(h,d,l){for(var f=new Float32Array(2*h*d*5),v=l.getLeftEyeVisibleTanAngles(),M=l.getLeftEyeNoLensTanAngles(),S=l.getLeftEyeVisibleScreenRect(M),O=0,V=0;V<2;V++){for(var L=0;L<d;L++)for(var B=0;B<h;B++,O++){var q=B/(h-1),re=L/(d-1),se=q,de=re,ye=c(v[0],v[2],q),Ce=c(v[3],v[1],re),Re=Math.sqrt(ye*ye+Ce*Ce),De=l.distortion.distortInverse(Re),xe=ye*De/Re,Je=Ce*De/Re;q=(xe-M[0])/(M[2]-M[0]),re=(Je-M[3])/(M[1]-M[3]),q=(S.x+q*S.width-.5)*2,re=(S.y+re*S.height-.5)*2,f[O*5+0]=q,f[O*5+1]=re,f[O*5+2]=se,f[O*5+3]=de,f[O*5+4]=V}var Ue=v[2]-v[0];v[0]=-(Ue+v[0]),v[2]=Ue-v[2],Ue=M[2]-M[0],M[0]=-(Ue+M[0]),M[2]=Ue-M[2],S.x=1-(S.x+S.width)}return f},Z.prototype.computeMeshIndices_=function(h,d){for(var l=new Uint16Array(2*(h-1)*(d-1)*6),f=h/2,v=d/2,M=0,S=0,O=0;O<2;O++)for(var V=0;V<d;V++)for(var L=0;L<h;L++,M++)L==0||V==0||(L<=f==V<=v?(l[S++]=M,l[S++]=M-h-1,l[S++]=M-h,l[S++]=M-h-1,l[S++]=M,l[S++]=M-1):(l[S++]=M-1,l[S++]=M-h,l[S++]=M,l[S++]=M-h,l[S++]=M-1,l[S++]=M-h-1));return l},Z.prototype.getOwnPropertyDescriptor_=function(h,d){var l=Object.getOwnPropertyDescriptor(h,d);return(l.get===void 0||l.set===void 0)&&(l.configurable=!0,l.enumerable=!0,l.get=function(){return this.getAttribute(d)},l.set=function(f){this.setAttribute(d,f)}),l};var le=["attribute vec2 position;","uniform mat4 projectionMat;","void main() {","  gl_Position = projectionMat * vec4( position, -1.0, 1.0 );","}"].join(`
`),be=["precision mediump float;","uniform vec4 color;","void main() {","  gl_FragColor = color;","}"].join(`
`),ue=Math.PI/180,Le=60,He=12,Ie=20,ut=1,ct=.75,je=.3125,F=4,xt=28,Ze=1.5;function Ge(h){this.gl=h,this.attribs={position:0},this.program=k(h,le,be,this.attribs),this.uniforms=C(h,this.program),this.vertexBuffer=h.createBuffer(),this.gearOffset=0,this.gearVertexCount=0,this.arrowOffset=0,this.arrowVertexCount=0,this.projMat=new Float32Array(16),this.listener=null,this.onResize()}Ge.prototype.destroy=function(){var h=this.gl;this.listener&&h.canvas.removeEventListener("click",this.listener,!1),h.deleteProgram(this.program),h.deleteBuffer(this.vertexBuffer)},Ge.prototype.listen=function(h,d){var l=this.gl.canvas;this.listener=function(f){var v=l.clientWidth/2,M=xt*Ze;f.clientX>v-M&&f.clientX<v+M&&f.clientY>l.clientHeight-M?h(f):f.clientX<M&&f.clientY<M&&d(f)},l.addEventListener("click",this.listener,!1)},Ge.prototype.onResize=function(){var h=this.gl,d=this,l=[h.ARRAY_BUFFER_BINDING];pe(h,l,function(f){var v=[],M=f.drawingBufferWidth/2,S=Math.max(screen.width,screen.height)*window.devicePixelRatio,O=f.drawingBufferWidth/S,V=O*window.devicePixelRatio,L=F*V/2,B=xt*Ze*V,q=xt*V/2,re=(xt*Ze-xt)*V;v.push(M-L,B),v.push(M-L,f.drawingBufferHeight),v.push(M+L,B),v.push(M+L,f.drawingBufferHeight),d.gearOffset=v.length/2;function se(De,xe){var Je=(90-De)*ue,Ue=Math.cos(Je),st=Math.sin(Je);v.push(je*Ue*q+M,je*st*q+q),v.push(xe*Ue*q+M,xe*st*q+q)}for(var de=0;de<=6;de++){var ye=de*Le;se(ye,ut),se(ye+He,ut),se(ye+Ie,ct),se(ye+(Le-Ie),ct),se(ye+(Le-He),ut)}d.gearVertexCount=v.length/2-d.gearOffset,d.arrowOffset=v.length/2;function Ce(De,xe){v.push(re+De,f.drawingBufferHeight-re-xe)}var Re=L/Math.sin(45*ue);Ce(0,q),Ce(q,0),Ce(q+Re,Re),Ce(Re,q+Re),Ce(Re,q-Re),Ce(0,q),Ce(q,q*2),Ce(q+Re,q*2-Re),Ce(Re,q-Re),Ce(0,q),Ce(Re,q-L),Ce(xt*V,q-L),Ce(Re,q+L),Ce(xt*V,q+L),d.arrowVertexCount=v.length/2-d.arrowOffset,f.bindBuffer(f.ARRAY_BUFFER,d.vertexBuffer),f.bufferData(f.ARRAY_BUFFER,new Float32Array(v),f.STATIC_DRAW)})},Ge.prototype.render=function(){var h=this.gl,d=this,l=[h.CULL_FACE,h.DEPTH_TEST,h.BLEND,h.SCISSOR_TEST,h.STENCIL_TEST,h.COLOR_WRITEMASK,h.VIEWPORT,h.CURRENT_PROGRAM,h.ARRAY_BUFFER_BINDING];pe(h,l,function(f){f.disable(f.CULL_FACE),f.disable(f.DEPTH_TEST),f.disable(f.BLEND),f.disable(f.SCISSOR_TEST),f.disable(f.STENCIL_TEST),f.colorMask(!0,!0,!0,!0),f.viewport(0,0,f.drawingBufferWidth,f.drawingBufferHeight),d.renderNoState()})},Ge.prototype.renderNoState=function(){var h=this.gl;h.useProgram(this.program),h.bindBuffer(h.ARRAY_BUFFER,this.vertexBuffer),h.enableVertexAttribArray(this.attribs.position),h.vertexAttribPointer(this.attribs.position,2,h.FLOAT,!1,8,0),h.uniform4f(this.uniforms.color,1,1,1,1),b(this.projMat,0,h.drawingBufferWidth,0,h.drawingBufferHeight,.1,1024),h.uniformMatrix4fv(this.uniforms.projectionMat,!1,this.projMat),h.drawArrays(h.TRIANGLE_STRIP,0,4),h.drawArrays(h.TRIANGLE_STRIP,this.gearOffset,this.gearVertexCount),h.drawArrays(h.TRIANGLE_STRIP,this.arrowOffset,this.arrowVertexCount)};function Pe(h){this.coefficients=h}Pe.prototype.distortInverse=function(h){for(var d=0,l=1,f=h-this.distort(d);Math.abs(l-d)>1e-4;){var v=h-this.distort(l),M=l-v*((l-d)/(v-f));d=l,l=M,f=v}return l},Pe.prototype.distort=function(h){for(var d=h*h,l=0,f=0;f<this.coefficients.length;f++)l=d*(l+this.coefficients[f]);return(l+1)*h};var $e=Math.PI/180,we=180/Math.PI,R=function(d,l,f){this.x=d||0,this.y=l||0,this.z=f||0};R.prototype={constructor:R,set:function(d,l,f){return this.x=d,this.y=l,this.z=f,this},copy:function(d){return this.x=d.x,this.y=d.y,this.z=d.z,this},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},normalize:function(){var d=this.length();if(d!==0){var l=1/d;this.multiplyScalar(l)}else this.x=0,this.y=0,this.z=0;return this},multiplyScalar:function(d){this.x*=d,this.y*=d,this.z*=d},applyQuaternion:function(d){var l=this.x,f=this.y,v=this.z,M=d.x,S=d.y,O=d.z,V=d.w,L=V*l+S*v-O*f,B=V*f+O*l-M*v,q=V*v+M*f-S*l,re=-M*l-S*f-O*v;return this.x=L*V+re*-M+B*-O-q*-S,this.y=B*V+re*-S+q*-M-L*-O,this.z=q*V+re*-O+L*-S-B*-M,this},dot:function(d){return this.x*d.x+this.y*d.y+this.z*d.z},crossVectors:function(d,l){var f=d.x,v=d.y,M=d.z,S=l.x,O=l.y,V=l.z;return this.x=v*V-M*O,this.y=M*S-f*V,this.z=f*O-v*S,this}};var E=function(d,l,f,v){this.x=d||0,this.y=l||0,this.z=f||0,this.w=v!==void 0?v:1};E.prototype={constructor:E,set:function(d,l,f,v){return this.x=d,this.y=l,this.z=f,this.w=v,this},copy:function(d){return this.x=d.x,this.y=d.y,this.z=d.z,this.w=d.w,this},setFromEulerXYZ:function(d,l,f){var v=Math.cos(d/2),M=Math.cos(l/2),S=Math.cos(f/2),O=Math.sin(d/2),V=Math.sin(l/2),L=Math.sin(f/2);return this.x=O*M*S+v*V*L,this.y=v*V*S-O*M*L,this.z=v*M*L+O*V*S,this.w=v*M*S-O*V*L,this},setFromEulerYXZ:function(d,l,f){var v=Math.cos(d/2),M=Math.cos(l/2),S=Math.cos(f/2),O=Math.sin(d/2),V=Math.sin(l/2),L=Math.sin(f/2);return this.x=O*M*S+v*V*L,this.y=v*V*S-O*M*L,this.z=v*M*L-O*V*S,this.w=v*M*S+O*V*L,this},setFromAxisAngle:function(d,l){var f=l/2,v=Math.sin(f);return this.x=d.x*v,this.y=d.y*v,this.z=d.z*v,this.w=Math.cos(f),this},multiply:function(d){return this.multiplyQuaternions(this,d)},multiplyQuaternions:function(d,l){var f=d.x,v=d.y,M=d.z,S=d.w,O=l.x,V=l.y,L=l.z,B=l.w;return this.x=f*B+S*O+v*L-M*V,this.y=v*B+S*V+M*O-f*L,this.z=M*B+S*L+f*V-v*O,this.w=S*B-f*O-v*V-M*L,this},inverse:function(){return this.x*=-1,this.y*=-1,this.z*=-1,this.normalize(),this},normalize:function(){var d=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return d===0?(this.x=0,this.y=0,this.z=0,this.w=1):(d=1/d,this.x=this.x*d,this.y=this.y*d,this.z=this.z*d,this.w=this.w*d),this},slerp:function(d,l){if(l===0)return this;if(l===1)return this.copy(d);var f=this.x,v=this.y,M=this.z,S=this.w,O=S*d.w+f*d.x+v*d.y+M*d.z;if(O<0?(this.w=-d.w,this.x=-d.x,this.y=-d.y,this.z=-d.z,O=-O):this.copy(d),O>=1)return this.w=S,this.x=f,this.y=v,this.z=M,this;var V=Math.acos(O),L=Math.sqrt(1-O*O);if(Math.abs(L)<.001)return this.w=.5*(S+this.w),this.x=.5*(f+this.x),this.y=.5*(v+this.y),this.z=.5*(M+this.z),this;var B=Math.sin((1-l)*V)/L,q=Math.sin(l*V)/L;return this.w=S*B+this.w*q,this.x=f*B+this.x*q,this.y=v*B+this.y*q,this.z=M*B+this.z*q,this},setFromUnitVectors:function(){var h,d,l=1e-6;return function(f,v){return h===void 0&&(h=new R),d=f.dot(v)+1,d<l?(d=0,Math.abs(f.x)>Math.abs(f.z)?h.set(-f.y,f.x,0):h.set(0,-f.z,f.y)):h.crossVectors(f,v),this.x=h.x,this.y=h.y,this.z=h.z,this.w=d,this.normalize(),this}}()};function H(h){this.width=h.width||P(),this.height=h.height||T(),this.widthMeters=h.widthMeters,this.heightMeters=h.heightMeters,this.bevelMeters=h.bevelMeters}var ne=new H({widthMeters:.11,heightMeters:.062,bevelMeters:.004}),ae=new H({widthMeters:.1038,heightMeters:.0584,bevelMeters:.004}),J={CardboardV1:new _e({id:"CardboardV1",label:"Cardboard I/O 2014",fov:40,interLensDistance:.06,baselineLensDistance:.035,screenLensDistance:.042,distortionCoefficients:[.441,.156],inverseCoefficients:[-.4410035,.42756155,-.4804439,.5460139,-.58821183,.5733938,-.48303202,.33299083,-.17573841,.0651772,-.01488963,.001559834]}),CardboardV2:new _e({id:"CardboardV2",label:"Cardboard I/O 2015",fov:60,interLensDistance:.064,baselineLensDistance:.035,screenLensDistance:.039,distortionCoefficients:[.34,.55],inverseCoefficients:[-.33836704,-.18162185,.862655,-1.2462051,1.0560602,-.58208317,.21609078,-.05444823,.009177956,-.0009904169,6183535e-11,-16981803e-13]})};function me(h,d){this.viewer=J.CardboardV2,this.updateDeviceParams(h),this.distortion=new Pe(this.viewer.distortionCoefficients);for(var l=0;l<d.length;l++){var f=d[l];J[f.id]=new _e(f)}}me.prototype.updateDeviceParams=function(h){this.device=this.determineDevice_(h)||this.device},me.prototype.getDevice=function(){return this.device},me.prototype.setViewer=function(h){this.viewer=h,this.distortion=new Pe(this.viewer.distortionCoefficients)},me.prototype.determineDevice_=function(h){if(!h)return u()?(console.warn("Using fallback iOS device measurements."),ae):(console.warn("Using fallback Android device measurements."),ne);var d=.0254,l=d/h.xdpi,f=d/h.ydpi,v=P(),M=T();return new H({widthMeters:l*v,heightMeters:f*M,bevelMeters:h.bevelMm*.001})},me.prototype.getDistortedFieldOfViewLeftEye=function(){var h=this.viewer,d=this.device,l=this.distortion,f=h.screenLensDistance,v=(d.widthMeters-h.interLensDistance)/2,M=h.interLensDistance/2,S=h.baselineLensDistance-d.bevelMeters,O=d.heightMeters-S,V=we*Math.atan(l.distort(v/f)),L=we*Math.atan(l.distort(M/f)),B=we*Math.atan(l.distort(S/f)),q=we*Math.atan(l.distort(O/f));return{leftDegrees:Math.min(V,h.fov),rightDegrees:Math.min(L,h.fov),downDegrees:Math.min(B,h.fov),upDegrees:Math.min(q,h.fov)}},me.prototype.getLeftEyeVisibleTanAngles=function(){var h=this.viewer,d=this.device,l=this.distortion,f=Math.tan(-$e*h.fov),v=Math.tan($e*h.fov),M=Math.tan($e*h.fov),S=Math.tan(-$e*h.fov),O=d.widthMeters/4,V=d.heightMeters/2,L=h.baselineLensDistance-d.bevelMeters-V,B=h.interLensDistance/2-O,q=-L,re=h.screenLensDistance,se=l.distort((B-O)/re),de=l.distort((q+V)/re),ye=l.distort((B+O)/re),Ce=l.distort((q-V)/re),Re=new Float32Array(4);return Re[0]=Math.max(f,se),Re[1]=Math.min(v,de),Re[2]=Math.min(M,ye),Re[3]=Math.max(S,Ce),Re},me.prototype.getLeftEyeNoLensTanAngles=function(){var h=this.viewer,d=this.device,l=this.distortion,f=new Float32Array(4),v=l.distortInverse(Math.tan(-$e*h.fov)),M=l.distortInverse(Math.tan($e*h.fov)),S=l.distortInverse(Math.tan($e*h.fov)),O=l.distortInverse(Math.tan(-$e*h.fov)),V=d.widthMeters/4,L=d.heightMeters/2,B=h.baselineLensDistance-d.bevelMeters-L,q=h.interLensDistance/2-V,re=-B,se=h.screenLensDistance,de=(q-V)/se,ye=(re+L)/se,Ce=(q+V)/se,Re=(re-L)/se;return f[0]=Math.max(v,de),f[1]=Math.min(M,ye),f[2]=Math.min(S,Ce),f[3]=Math.max(O,Re),f},me.prototype.getLeftEyeVisibleScreenRect=function(h){var d=this.viewer,l=this.device,f=d.screenLensDistance,v=(l.widthMeters-d.interLensDistance)/2,M=d.baselineLensDistance-l.bevelMeters,S=(h[0]*f+v)/l.widthMeters,O=(h[1]*f+M)/l.heightMeters,V=(h[2]*f+v)/l.widthMeters,L=(h[3]*f+M)/l.heightMeters;return{x:S,y:L,width:V-S,height:O-L}},me.prototype.getFieldOfViewLeftEye=function(h){return h?this.getUndistortedFieldOfViewLeftEye():this.getDistortedFieldOfViewLeftEye()},me.prototype.getFieldOfViewRightEye=function(h){var d=this.getFieldOfViewLeftEye(h);return{leftDegrees:d.rightDegrees,rightDegrees:d.leftDegrees,upDegrees:d.upDegrees,downDegrees:d.downDegrees}},me.prototype.getUndistortedFieldOfViewLeftEye=function(){var h=this.getUndistortedParams_();return{leftDegrees:we*Math.atan(h.outerDist),rightDegrees:we*Math.atan(h.innerDist),downDegrees:we*Math.atan(h.bottomDist),upDegrees:we*Math.atan(h.topDist)}},me.prototype.getUndistortedViewportLeftEye=function(){var h=this.getUndistortedParams_(),d=this.viewer,l=this.device,f=d.screenLensDistance,v=l.widthMeters/f,M=l.heightMeters/f,S=l.width/v,O=l.height/M,V=Math.round((h.eyePosX-h.outerDist)*S),L=Math.round((h.eyePosY-h.bottomDist)*O);return{x:V,y:L,width:Math.round((h.eyePosX+h.innerDist)*S)-V,height:Math.round((h.eyePosY+h.topDist)*O)-L}},me.prototype.getUndistortedParams_=function(){var h=this.viewer,d=this.device,l=this.distortion,f=h.screenLensDistance,v=h.interLensDistance/2/f,M=d.widthMeters/f,S=d.heightMeters/f,O=M/2-v,V=(h.baselineLensDistance-d.bevelMeters)/f,L=h.fov,B=l.distortInverse(Math.tan($e*L)),q=Math.min(O,B),re=Math.min(v,B),se=Math.min(V,B),de=Math.min(S-V,B);return{outerDist:q,innerDist:re,topDist:de,bottomDist:se,eyePosX:O,eyePosY:V}};function _e(h){this.id=h.id,this.label=h.label,this.fov=h.fov,this.interLensDistance=h.interLensDistance,this.baselineLensDistance=h.baselineLensDistance,this.screenLensDistance=h.screenLensDistance,this.distortionCoefficients=h.distortionCoefficients,this.inverseCoefficients=h.inverseCoefficients}me.Viewers=J;var Se=1,et="2019-11-09T17:36:14Z",ce=[{type:"android",rules:[{mdmh:"asus/*/Nexus 7/*"},{ua:"Nexus 7"}],dpi:[320.8,323],bw:3,ac:500},{type:"android",rules:[{mdmh:"asus/*/ASUS_X00PD/*"},{ua:"ASUS_X00PD"}],dpi:245,bw:3,ac:500},{type:"android",rules:[{mdmh:"asus/*/ASUS_X008D/*"},{ua:"ASUS_X008D"}],dpi:282,bw:3,ac:500},{type:"android",rules:[{mdmh:"asus/*/ASUS_Z00AD/*"},{ua:"ASUS_Z00AD"}],dpi:[403,404.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Google/*/Pixel 2 XL/*"},{ua:"Pixel 2 XL"}],dpi:537.9,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Google/*/Pixel 3 XL/*"},{ua:"Pixel 3 XL"}],dpi:[558.5,553.8],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Google/*/Pixel XL/*"},{ua:"Pixel XL"}],dpi:[537.9,533],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Google/*/Pixel 3/*"},{ua:"Pixel 3"}],dpi:442.4,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Google/*/Pixel 2/*"},{ua:"Pixel 2"}],dpi:441,bw:3,ac:500},{type:"android",rules:[{mdmh:"Google/*/Pixel/*"},{ua:"Pixel"}],dpi:[432.6,436.7],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"HTC/*/HTC6435LVW/*"},{ua:"HTC6435LVW"}],dpi:[449.7,443.3],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"HTC/*/HTC One XL/*"},{ua:"HTC One XL"}],dpi:[315.3,314.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"htc/*/Nexus 9/*"},{ua:"Nexus 9"}],dpi:289,bw:3,ac:500},{type:"android",rules:[{mdmh:"HTC/*/HTC One M9/*"},{ua:"HTC One M9"}],dpi:[442.5,443.3],bw:3,ac:500},{type:"android",rules:[{mdmh:"HTC/*/HTC One_M8/*"},{ua:"HTC One_M8"}],dpi:[449.7,447.4],bw:3,ac:500},{type:"android",rules:[{mdmh:"HTC/*/HTC One/*"},{ua:"HTC One"}],dpi:472.8,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Huawei/*/Nexus 6P/*"},{ua:"Nexus 6P"}],dpi:[515.1,518],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Huawei/*/BLN-L24/*"},{ua:"HONORBLN-L24"}],dpi:480,bw:4,ac:500},{type:"android",rules:[{mdmh:"Huawei/*/BKL-L09/*"},{ua:"BKL-L09"}],dpi:403,bw:3.47,ac:500},{type:"android",rules:[{mdmh:"LENOVO/*/Lenovo PB2-690Y/*"},{ua:"Lenovo PB2-690Y"}],dpi:[457.2,454.713],bw:3,ac:500},{type:"android",rules:[{mdmh:"LGE/*/Nexus 5X/*"},{ua:"Nexus 5X"}],dpi:[422,419.9],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"LGE/*/LGMS345/*"},{ua:"LGMS345"}],dpi:[221.7,219.1],bw:3,ac:500},{type:"android",rules:[{mdmh:"LGE/*/LG-D800/*"},{ua:"LG-D800"}],dpi:[422,424.1],bw:3,ac:500},{type:"android",rules:[{mdmh:"LGE/*/LG-D850/*"},{ua:"LG-D850"}],dpi:[537.9,541.9],bw:3,ac:500},{type:"android",rules:[{mdmh:"LGE/*/VS985 4G/*"},{ua:"VS985 4G"}],dpi:[537.9,535.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"LGE/*/Nexus 5/*"},{ua:"Nexus 5 B"}],dpi:[442.4,444.8],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"LGE/*/Nexus 4/*"},{ua:"Nexus 4"}],dpi:[319.8,318.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"LGE/*/LG-P769/*"},{ua:"LG-P769"}],dpi:[240.6,247.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"LGE/*/LGMS323/*"},{ua:"LGMS323"}],dpi:[206.6,204.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"LGE/*/LGLS996/*"},{ua:"LGLS996"}],dpi:[403.4,401.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Micromax/*/4560MMX/*"},{ua:"4560MMX"}],dpi:[240,219.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Micromax/*/A250/*"},{ua:"Micromax A250"}],dpi:[480,446.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Micromax/*/Micromax AQ4501/*"},{ua:"Micromax AQ4501"}],dpi:240,bw:3,ac:500},{type:"android",rules:[{mdmh:"motorola/*/G5/*"},{ua:"Moto G (5) Plus"}],dpi:[403.4,403],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/DROID RAZR/*"},{ua:"DROID RAZR"}],dpi:[368.1,256.7],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/XT830C/*"},{ua:"XT830C"}],dpi:[254,255.9],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/XT1021/*"},{ua:"XT1021"}],dpi:[254,256.7],bw:3,ac:500},{type:"android",rules:[{mdmh:"motorola/*/XT1023/*"},{ua:"XT1023"}],dpi:[254,256.7],bw:3,ac:500},{type:"android",rules:[{mdmh:"motorola/*/XT1028/*"},{ua:"XT1028"}],dpi:[326.6,327.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/XT1034/*"},{ua:"XT1034"}],dpi:[326.6,328.4],bw:3,ac:500},{type:"android",rules:[{mdmh:"motorola/*/XT1053/*"},{ua:"XT1053"}],dpi:[315.3,316.1],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/XT1562/*"},{ua:"XT1562"}],dpi:[403.4,402.7],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/Nexus 6/*"},{ua:"Nexus 6 B"}],dpi:[494.3,489.7],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/XT1063/*"},{ua:"XT1063"}],dpi:[295,296.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/XT1064/*"},{ua:"XT1064"}],dpi:[295,295.6],bw:3,ac:500},{type:"android",rules:[{mdmh:"motorola/*/XT1092/*"},{ua:"XT1092"}],dpi:[422,424.1],bw:3,ac:500},{type:"android",rules:[{mdmh:"motorola/*/XT1095/*"},{ua:"XT1095"}],dpi:[422,423.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/G4/*"},{ua:"Moto G (4)"}],dpi:401,bw:4,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/A0001/*"},{ua:"A0001"}],dpi:[403.4,401],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONE E1001/*"},{ua:"ONE E1001"}],dpi:[442.4,441.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONE E1003/*"},{ua:"ONE E1003"}],dpi:[442.4,441.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONE E1005/*"},{ua:"ONE E1005"}],dpi:[442.4,441.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONE A2001/*"},{ua:"ONE A2001"}],dpi:[391.9,405.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONE A2003/*"},{ua:"ONE A2003"}],dpi:[391.9,405.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONE A2005/*"},{ua:"ONE A2005"}],dpi:[391.9,405.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A3000/*"},{ua:"ONEPLUS A3000"}],dpi:401,bw:3,ac:500},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A3003/*"},{ua:"ONEPLUS A3003"}],dpi:401,bw:3,ac:500},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A3010/*"},{ua:"ONEPLUS A3010"}],dpi:401,bw:3,ac:500},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A5000/*"},{ua:"ONEPLUS A5000 "}],dpi:[403.411,399.737],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONE A5010/*"},{ua:"ONEPLUS A5010"}],dpi:[403,400],bw:2,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A6000/*"},{ua:"ONEPLUS A6000"}],dpi:401,bw:3,ac:500},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A6003/*"},{ua:"ONEPLUS A6003"}],dpi:401,bw:3,ac:500},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A6010/*"},{ua:"ONEPLUS A6010"}],dpi:401,bw:2,ac:500},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A6013/*"},{ua:"ONEPLUS A6013"}],dpi:401,bw:2,ac:500},{type:"android",rules:[{mdmh:"OPPO/*/X909/*"},{ua:"X909"}],dpi:[442.4,444.1],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/GT-I9082/*"},{ua:"GT-I9082"}],dpi:[184.7,185.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G360P/*"},{ua:"SM-G360P"}],dpi:[196.7,205.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/Nexus S/*"},{ua:"Nexus S"}],dpi:[234.5,229.8],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/GT-I9300/*"},{ua:"GT-I9300"}],dpi:[304.8,303.9],bw:5,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-T230NU/*"},{ua:"SM-T230NU"}],dpi:216,bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SGH-T399/*"},{ua:"SGH-T399"}],dpi:[217.7,231.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SGH-M919/*"},{ua:"SGH-M919"}],dpi:[440.8,437.7],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-N9005/*"},{ua:"SM-N9005"}],dpi:[386.4,387],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SAMSUNG-SM-N900A/*"},{ua:"SAMSUNG-SM-N900A"}],dpi:[386.4,387.7],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/GT-I9500/*"},{ua:"GT-I9500"}],dpi:[442.5,443.3],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/GT-I9505/*"},{ua:"GT-I9505"}],dpi:439.4,bw:4,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G900F/*"},{ua:"SM-G900F"}],dpi:[415.6,431.6],bw:5,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G900M/*"},{ua:"SM-G900M"}],dpi:[415.6,431.6],bw:5,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G800F/*"},{ua:"SM-G800F"}],dpi:326.8,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G906S/*"},{ua:"SM-G906S"}],dpi:[562.7,572.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/GT-I9300/*"},{ua:"GT-I9300"}],dpi:[306.7,304.8],bw:5,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-T535/*"},{ua:"SM-T535"}],dpi:[142.6,136.4],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-N920C/*"},{ua:"SM-N920C"}],dpi:[515.1,518.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-N920P/*"},{ua:"SM-N920P"}],dpi:[386.3655,390.144],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-N920W8/*"},{ua:"SM-N920W8"}],dpi:[515.1,518.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/GT-I9300I/*"},{ua:"GT-I9300I"}],dpi:[304.8,305.8],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/GT-I9195/*"},{ua:"GT-I9195"}],dpi:[249.4,256.7],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SPH-L520/*"},{ua:"SPH-L520"}],dpi:[249.4,255.9],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SAMSUNG-SGH-I717/*"},{ua:"SAMSUNG-SGH-I717"}],dpi:285.8,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SPH-D710/*"},{ua:"SPH-D710"}],dpi:[217.7,204.2],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/GT-N7100/*"},{ua:"GT-N7100"}],dpi:265.1,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SCH-I605/*"},{ua:"SCH-I605"}],dpi:265.1,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/Galaxy Nexus/*"},{ua:"Galaxy Nexus"}],dpi:[315.3,314.2],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-N910H/*"},{ua:"SM-N910H"}],dpi:[515.1,518],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-N910C/*"},{ua:"SM-N910C"}],dpi:[515.2,520.2],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G130M/*"},{ua:"SM-G130M"}],dpi:[165.9,164.8],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G928I/*"},{ua:"SM-G928I"}],dpi:[515.1,518.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G920F/*"},{ua:"SM-G920F"}],dpi:580.6,bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G920P/*"},{ua:"SM-G920P"}],dpi:[522.5,577],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G925F/*"},{ua:"SM-G925F"}],dpi:580.6,bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G925V/*"},{ua:"SM-G925V"}],dpi:[522.5,576.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G930F/*"},{ua:"SM-G930F"}],dpi:576.6,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G935F/*"},{ua:"SM-G935F"}],dpi:533,bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G950F/*"},{ua:"SM-G950F"}],dpi:[562.707,565.293],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G955U/*"},{ua:"SM-G955U"}],dpi:[522.514,525.762],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G955F/*"},{ua:"SM-G955F"}],dpi:[522.514,525.762],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G960F/*"},{ua:"SM-G960F"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G9600/*"},{ua:"SM-G9600"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G960T/*"},{ua:"SM-G960T"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G960N/*"},{ua:"SM-G960N"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G960U/*"},{ua:"SM-G960U"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G9608/*"},{ua:"SM-G9608"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G960FD/*"},{ua:"SM-G960FD"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G960W/*"},{ua:"SM-G960W"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G965F/*"},{ua:"SM-G965F"}],dpi:529,bw:2,ac:1e3},{type:"android",rules:[{mdmh:"Sony/*/C6903/*"},{ua:"C6903"}],dpi:[442.5,443.3],bw:3,ac:500},{type:"android",rules:[{mdmh:"Sony/*/D6653/*"},{ua:"D6653"}],dpi:[428.6,427.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Sony/*/E6653/*"},{ua:"E6653"}],dpi:[428.6,425.7],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Sony/*/E6853/*"},{ua:"E6853"}],dpi:[403.4,401.9],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Sony/*/SGP321/*"},{ua:"SGP321"}],dpi:[224.7,224.1],bw:3,ac:500},{type:"android",rules:[{mdmh:"TCT/*/ALCATEL ONE TOUCH Fierce/*"},{ua:"ALCATEL ONE TOUCH Fierce"}],dpi:[240,247.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"THL/*/thl 5000/*"},{ua:"thl 5000"}],dpi:[480,443.3],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Fly/*/IQ4412/*"},{ua:"IQ4412"}],dpi:307.9,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"ZTE/*/ZTE Blade L2/*"},{ua:"ZTE Blade L2"}],dpi:240,bw:3,ac:500},{type:"android",rules:[{mdmh:"BENEVE/*/VR518/*"},{ua:"VR518"}],dpi:480,bw:3,ac:500},{type:"ios",rules:[{res:[640,960]}],dpi:[325.1,328.4],bw:4,ac:1e3},{type:"ios",rules:[{res:[640,1136]}],dpi:[317.1,320.2],bw:3,ac:1e3},{type:"ios",rules:[{res:[750,1334]}],dpi:326.4,bw:4,ac:1e3},{type:"ios",rules:[{res:[1242,2208]}],dpi:[453.6,458.4],bw:4,ac:1e3},{type:"ios",rules:[{res:[1125,2001]}],dpi:[410.9,415.4],bw:4,ac:1e3},{type:"ios",rules:[{res:[1125,2436]}],dpi:458,bw:4,ac:1e3},{type:"android",rules:[{mdmh:"Huawei/*/EML-L29/*"},{ua:"EML-L29"}],dpi:428,bw:3.45,ac:500},{type:"android",rules:[{mdmh:"Nokia/*/Nokia 7.1/*"},{ua:"Nokia 7.1"}],dpi:[432,431.9],bw:3,ac:500},{type:"ios",rules:[{res:[1242,2688]}],dpi:458,bw:4,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G570M/*"},{ua:"SM-G570M"}],dpi:320,bw:3.684,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G970F/*"},{ua:"SM-G970F"}],dpi:438,bw:2.281,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G973F/*"},{ua:"SM-G973F"}],dpi:550,bw:2.002,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G975F/*"},{ua:"SM-G975F"}],dpi:522,bw:2.054,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G977F/*"},{ua:"SM-G977F"}],dpi:505,bw:2.334,ac:500},{type:"ios",rules:[{res:[828,1792]}],dpi:326,bw:5,ac:500}],Te={format:Se,last_updated:et,devices:ce};function Fe(h,d){if(this.dpdb=Te,this.recalculateDeviceParams_(),h){this.onDeviceParamsUpdated=d;var l=new XMLHttpRequest,f=this;l.open("GET",h,!0),l.addEventListener("load",function(){f.loading=!1,l.status>=200&&l.status<=299?(f.dpdb=JSON.parse(l.response),f.recalculateDeviceParams_()):console.error("Error loading online DPDB!")}),l.send()}}Fe.prototype.getDeviceParams=function(){return this.deviceParams},Fe.prototype.recalculateDeviceParams_=function(){var h=this.calcDeviceParams_();h?(this.deviceParams=h,this.onDeviceParamsUpdated&&this.onDeviceParamsUpdated(this.deviceParams)):console.error("Failed to recalculate device parameters.")},Fe.prototype.calcDeviceParams_=function(){var h=this.dpdb;if(!h)return console.error("DPDB not available."),null;if(h.format!=1)return console.error("DPDB has unexpected format version."),null;if(!h.devices||!h.devices.length)return console.error("DPDB does not have a devices section."),null;var d=navigator.userAgent||navigator.vendor||window.opera,l=P(),f=T();if(!h.devices)return console.error("DPDB has no devices section."),null;for(var v=0;v<h.devices.length;v++){var M=h.devices[v];if(!M.rules){console.warn("Device["+v+"] has no rules section.");continue}if(M.type!="ios"&&M.type!="android"){console.warn("Device["+v+"] has invalid type.");continue}if(u()==(M.type=="ios")){for(var S=!1,O=0;O<M.rules.length;O++){var V=M.rules[O];if(this.ruleMatches_(V,d,l,f)){S=!0;break}}if(S){var L=M.dpi[0]||M.dpi,B=M.dpi[1]||M.dpi;return new Be({xdpi:L,ydpi:B,bevelMm:M.bw})}}}return console.warn("No DPDB device match."),null},Fe.prototype.ruleMatches_=function(h,d,l,f){if(!h.ua&&!h.res||(h.ua&&h.ua.substring(0,2)==="SM"&&(h.ua=h.ua.substring(0,7)),h.ua&&d.indexOf(h.ua)<0))return!1;if(h.res){if(!h.res[0]||!h.res[1])return!1;var v=h.res[0],M=h.res[1];if(Math.min(l,f)!=Math.min(v,M)||Math.max(l,f)!=Math.max(v,M))return!1}return!0};function Be(h){this.xdpi=h.xdpi,this.ydpi=h.ydpi,this.bevelMm=h.bevelMm}function Me(h,d){this.set(h,d)}Me.prototype.set=function(h,d){this.sample=h,this.timestampS=d},Me.prototype.copy=function(h){this.set(h.sample,h.timestampS)};function Ve(h,d){this.kFilter=h,this.isDebug=d,this.currentAccelMeasurement=new Me,this.currentGyroMeasurement=new Me,this.previousGyroMeasurement=new Me,u()?this.filterQ=new E(-1,0,0,1):this.filterQ=new E(1,0,0,1),this.previousFilterQ=new E,this.previousFilterQ.copy(this.filterQ),this.accelQ=new E,this.isOrientationInitialized=!1,this.estimatedGravity=new R,this.measuredGravity=new R,this.gyroIntegralQ=new E}Ve.prototype.addAccelMeasurement=function(h,d){this.currentAccelMeasurement.set(h,d)},Ve.prototype.addGyroMeasurement=function(h,d){this.currentGyroMeasurement.set(h,d);var l=d-this.previousGyroMeasurement.timestampS;I(l)&&this.run_(),this.previousGyroMeasurement.copy(this.currentGyroMeasurement)},Ve.prototype.run_=function(){if(!this.isOrientationInitialized){this.accelQ=this.accelToQuaternion_(this.currentAccelMeasurement.sample),this.previousFilterQ.copy(this.accelQ),this.isOrientationInitialized=!0;return}var h=this.currentGyroMeasurement.timestampS-this.previousGyroMeasurement.timestampS,d=this.gyroToQuaternionDelta_(this.currentGyroMeasurement.sample,h);this.gyroIntegralQ.multiply(d),this.filterQ.copy(this.previousFilterQ),this.filterQ.multiply(d);var l=new E;l.copy(this.filterQ),l.inverse(),this.estimatedGravity.set(0,0,-1),this.estimatedGravity.applyQuaternion(l),this.estimatedGravity.normalize(),this.measuredGravity.copy(this.currentAccelMeasurement.sample),this.measuredGravity.normalize();var f=new E;f.setFromUnitVectors(this.estimatedGravity,this.measuredGravity),f.inverse(),this.isDebug&&console.log("Delta: %d deg, G_est: (%s, %s, %s), G_meas: (%s, %s, %s)",we*he(f),this.estimatedGravity.x.toFixed(1),this.estimatedGravity.y.toFixed(1),this.estimatedGravity.z.toFixed(1),this.measuredGravity.x.toFixed(1),this.measuredGravity.y.toFixed(1),this.measuredGravity.z.toFixed(1));var v=new E;v.copy(this.filterQ),v.multiply(f),this.filterQ.slerp(v,1-this.kFilter),this.previousFilterQ.copy(this.filterQ)},Ve.prototype.getOrientation=function(){return this.filterQ},Ve.prototype.accelToQuaternion_=function(h){var d=new R;d.copy(h),d.normalize();var l=new E;return l.setFromUnitVectors(new R(0,0,-1),d),l.inverse(),l},Ve.prototype.gyroToQuaternionDelta_=function(h,d){var l=new E,f=new R;return f.copy(h),f.normalize(),l.setFromAxisAngle(f,h.length()*d),l};function ze(h,d){this.predictionTimeS=h,this.isDebug=d,this.previousQ=new E,this.previousTimestampS=null,this.deltaQ=new E,this.outQ=new E}ze.prototype.getPrediction=function(h,d,l){if(!this.previousTimestampS)return this.previousQ.copy(h),this.previousTimestampS=l,h;var f=new R;f.copy(d),f.normalize();var v=d.length();if(v<$e*20)return this.isDebug&&console.log("Moving slowly, at %s deg/s: no prediction",(we*v).toFixed(1)),this.outQ.copy(h),this.previousQ.copy(h),this.outQ;var M=v*this.predictionTimeS;return this.deltaQ.setFromAxisAngle(f,M),this.outQ.copy(this.previousQ),this.outQ.multiply(this.deltaQ),this.previousQ.copy(h),this.previousTimestampS=l,this.outQ};function qe(h,d,l,f){this.yawOnly=l,this.accelerometer=new R,this.gyroscope=new R,this.filter=new Ve(h,f),this.posePredictor=new ze(d,f),this.isFirefoxAndroid=g(),this.isIOS=u();var v=x();this.isDeviceMotionInRadians=!this.isIOS&&v&&v<66,this.isWithoutDeviceMotion=w()||y(),this.filterToWorldQ=new E,u()?this.filterToWorldQ.setFromAxisAngle(new R(1,0,0),Math.PI/2):this.filterToWorldQ.setFromAxisAngle(new R(1,0,0),-Math.PI/2),this.inverseWorldToScreenQ=new E,this.worldToScreenQ=new E,this.originalPoseAdjustQ=new E,this.originalPoseAdjustQ.setFromAxisAngle(new R(0,0,1),-window.orientation*Math.PI/180),this.setScreenTransform_(),m()&&this.filterToWorldQ.multiply(this.inverseWorldToScreenQ),this.resetQ=new E,this.orientationOut_=new Float32Array(4),this.start()}qe.prototype.getPosition=function(){return null},qe.prototype.getOrientation=function(){var h=void 0;if(this.isWithoutDeviceMotion&&this._deviceOrientationQ){this.deviceOrientationFixQ=this.deviceOrientationFixQ||function(){var v=new E().setFromAxisAngle(new R(0,0,-1),0),M=new E;return window.orientation===-90?M.setFromAxisAngle(new R(0,1,0),Math.PI/-2):M.setFromAxisAngle(new R(0,1,0),Math.PI/2),v.multiply(M)}(),this.deviceOrientationFilterToWorldQ=this.deviceOrientationFilterToWorldQ||function(){var v=new E;return v.setFromAxisAngle(new R(1,0,0),-Math.PI/2),v}(),h=this._deviceOrientationQ;var l=new E;return l.copy(h),l.multiply(this.deviceOrientationFilterToWorldQ),l.multiply(this.resetQ),l.multiply(this.worldToScreenQ),l.multiplyQuaternions(this.deviceOrientationFixQ,l),this.yawOnly&&(l.x=0,l.z=0,l.normalize()),this.orientationOut_[0]=l.x,this.orientationOut_[1]=l.y,this.orientationOut_[2]=l.z,this.orientationOut_[3]=l.w,this.orientationOut_}else{var d=this.filter.getOrientation();h=this.posePredictor.getPrediction(d,this.gyroscope,this.previousTimestampS)}var l=new E;return l.copy(this.filterToWorldQ),l.multiply(this.resetQ),l.multiply(h),l.multiply(this.worldToScreenQ),this.yawOnly&&(l.x=0,l.z=0,l.normalize()),this.orientationOut_[0]=l.x,this.orientationOut_[1]=l.y,this.orientationOut_[2]=l.z,this.orientationOut_[3]=l.w,this.orientationOut_},qe.prototype.resetPose=function(){this.resetQ.copy(this.filter.getOrientation()),this.resetQ.x=0,this.resetQ.y=0,this.resetQ.z*=-1,this.resetQ.normalize(),m()&&this.resetQ.multiply(this.inverseWorldToScreenQ),this.resetQ.multiply(this.originalPoseAdjustQ)},qe.prototype.onDeviceOrientation_=function(h){this._deviceOrientationQ=this._deviceOrientationQ||new E;var d=h.alpha,l=h.beta,f=h.gamma;d=(d||0)*Math.PI/180,l=(l||0)*Math.PI/180,f=(f||0)*Math.PI/180,this._deviceOrientationQ.setFromEulerYXZ(l,d,-f)},qe.prototype.onDeviceMotion_=function(h){this.updateDeviceMotion_(h)},qe.prototype.updateDeviceMotion_=function(h){var d=h.accelerationIncludingGravity,l=h.rotationRate,f=h.timeStamp/1e3,v=f-this.previousTimestampS;if(v<0){Q("fusion-pose-sensor:invalid:non-monotonic","Invalid timestamps detected: non-monotonic timestamp from devicemotion"),this.previousTimestampS=f;return}else if(v<=s||v>a){Q("fusion-pose-sensor:invalid:outside-threshold","Invalid timestamps detected: Timestamp from devicemotion outside expected range."),this.previousTimestampS=f;return}this.accelerometer.set(-d.x,-d.y,-d.z),l&&(A()?this.gyroscope.set(-l.beta,l.alpha,l.gamma):this.gyroscope.set(l.alpha,l.beta,l.gamma),this.isDeviceMotionInRadians||this.gyroscope.multiplyScalar(Math.PI/180),this.filter.addGyroMeasurement(this.gyroscope,f)),this.filter.addAccelMeasurement(this.accelerometer,f),this.previousTimestampS=f},qe.prototype.onOrientationChange_=function(h){this.setScreenTransform_()},qe.prototype.onMessage_=function(h){var d=h.data;if(!(!d||!d.type)){var l=d.type.toLowerCase();l==="devicemotion"&&this.updateDeviceMotion_(d.deviceMotionEvent)}},qe.prototype.setScreenTransform_=function(){switch(this.worldToScreenQ.set(0,0,0,1),window.orientation){case 0:break;case 90:this.worldToScreenQ.setFromAxisAngle(new R(0,0,1),-Math.PI/2);break;case-90:this.worldToScreenQ.setFromAxisAngle(new R(0,0,1),Math.PI/2);break}this.inverseWorldToScreenQ.copy(this.worldToScreenQ),this.inverseWorldToScreenQ.inverse()},qe.prototype.start=function(){this.onDeviceMotionCallback_=this.onDeviceMotion_.bind(this),this.onOrientationChangeCallback_=this.onOrientationChange_.bind(this),this.onMessageCallback_=this.onMessage_.bind(this),this.onDeviceOrientationCallback_=this.onDeviceOrientation_.bind(this),u()&&oe()&&window.addEventListener("message",this.onMessageCallback_),window.addEventListener("orientationchange",this.onOrientationChangeCallback_),this.isWithoutDeviceMotion?window.addEventListener("deviceorientation",this.onDeviceOrientationCallback_):window.addEventListener("devicemotion",this.onDeviceMotionCallback_)},qe.prototype.stop=function(){window.removeEventListener("devicemotion",this.onDeviceMotionCallback_),window.removeEventListener("deviceorientation",this.onDeviceOrientationCallback_),window.removeEventListener("orientationchange",this.onOrientationChangeCallback_),window.removeEventListener("message",this.onMessageCallback_)};var G=60,Ae=new R(1,0,0),j=new R(0,0,1),te=new E;te.setFromAxisAngle(Ae,-Math.PI/2),te.multiply(new E().setFromAxisAngle(j,Math.PI/2));var Ee=function(){function h(d){t(this,h),this.config=d,this.sensor=null,this.fusionSensor=null,this._out=new Float32Array(4),this.api=null,this.errors=[],this._sensorQ=new E,this._outQ=new E,this._onSensorRead=this._onSensorRead.bind(this),this._onSensorError=this._onSensorError.bind(this),this.init()}return n(h,[{key:"init",value:function(){var l=null;try{l=new RelativeOrientationSensor({frequency:G,referenceFrame:"screen"}),l.addEventListener("error",this._onSensorError)}catch(f){this.errors.push(f),f.name==="SecurityError"?(console.error("Cannot construct sensors due to the Feature Policy"),console.warn('Attempting to fall back using "devicemotion"; however this will fail in the future without correct permissions.'),this.useDeviceMotion()):f.name==="ReferenceError"?this.useDeviceMotion():console.error(f)}l&&(this.api="sensor",this.sensor=l,this.sensor.addEventListener("reading",this._onSensorRead),this.sensor.start())}},{key:"useDeviceMotion",value:function(){this.api="devicemotion",this.fusionSensor=new qe(this.config.K_FILTER,this.config.PREDICTION_TIME_S,this.config.YAW_ONLY,this.config.DEBUG),this.sensor&&(this.sensor.removeEventListener("reading",this._onSensorRead),this.sensor.removeEventListener("error",this._onSensorError),this.sensor=null)}},{key:"getOrientation",value:function(){if(this.fusionSensor)return this.fusionSensor.getOrientation();if(!this.sensor||!this.sensor.quaternion)return this._out[0]=this._out[1]=this._out[2]=0,this._out[3]=1,this._out;var l=this.sensor.quaternion;this._sensorQ.set(l[0],l[1],l[2],l[3]);var f=this._outQ;return f.copy(te),f.multiply(this._sensorQ),this.config.YAW_ONLY&&(f.x=f.z=0,f.normalize()),this._out[0]=f.x,this._out[1]=f.y,this._out[2]=f.z,this._out[3]=f.w,this._out}},{key:"_onSensorError",value:function(l){this.errors.push(l.error),l.error.name==="NotAllowedError"?console.error("Permission to access sensor was denied"):l.error.name==="NotReadableError"?console.error("Sensor could not be read"):console.error(l.error),this.useDeviceMotion()}},{key:"_onSensorRead",value:function(){}}]),h}(),ve="<svg width='198' height='240' viewBox='0 0 198 240' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><path d='M149.625 109.527l6.737 3.891v.886c0 .177.013.36.038.549.01.081.02.162.027.242.14 1.415.974 2.998 2.105 3.999l5.72 5.062.081-.09s4.382-2.53 5.235-3.024l25.97 14.993v54.001c0 .771-.386 1.217-.948 1.217-.233 0-.495-.076-.772-.236l-23.967-13.838-.014.024-27.322 15.775-.85-1.323c-4.731-1.529-9.748-2.74-14.951-3.61a.27.27 0 0 0-.007.024l-5.067 16.961-7.891 4.556-.037-.063v27.59c0 .772-.386 1.217-.948 1.217-.232 0-.495-.076-.772-.236l-42.473-24.522c-.95-.549-1.72-1.877-1.72-2.967v-1.035l-.021.047a5.111 5.111 0 0 0-1.816-.399 5.682 5.682 0 0 0-.546.001 13.724 13.724 0 0 1-1.918-.041c-1.655-.153-3.2-.6-4.404-1.296l-46.576-26.89.005.012-10.278-18.75c-1.001-1.827-.241-4.216 1.698-5.336l56.011-32.345a4.194 4.194 0 0 1 2.099-.572c1.326 0 2.572.659 3.227 1.853l.005-.003.227.413-.006.004a9.63 9.63 0 0 0 1.477 2.018l.277.27c1.914 1.85 4.468 2.801 7.113 2.801 1.949 0 3.948-.517 5.775-1.572.013 0 7.319-4.219 7.319-4.219a4.194 4.194 0 0 1 2.099-.572c1.326 0 2.572.658 3.226 1.853l3.25 5.928.022-.018 6.785 3.917-.105-.182 46.881-26.965m0-1.635c-.282 0-.563.073-.815.218l-46.169 26.556-5.41-3.124-3.005-5.481c-.913-1.667-2.699-2.702-4.66-2.703-1.011 0-2.02.274-2.917.792a3825 3825 0 0 1-7.275 4.195l-.044.024a9.937 9.937 0 0 1-4.957 1.353c-2.292 0-4.414-.832-5.976-2.342l-.252-.245a7.992 7.992 0 0 1-1.139-1.534 1.379 1.379 0 0 0-.06-.122l-.227-.414a1.718 1.718 0 0 0-.095-.154c-.938-1.574-2.673-2.545-4.571-2.545-1.011 0-2.02.274-2.917.792L3.125 155.502c-2.699 1.559-3.738 4.94-2.314 7.538l10.278 18.75c.177.323.448.563.761.704l46.426 26.804c1.403.81 3.157 1.332 5.072 1.508a15.661 15.661 0 0 0 2.146.046 4.766 4.766 0 0 1 .396 0c.096.004.19.011.283.022.109 1.593 1.159 3.323 2.529 4.114l42.472 24.522c.524.302 1.058.455 1.59.455 1.497 0 2.583-1.2 2.583-2.852v-26.562l7.111-4.105a1.64 1.64 0 0 0 .749-.948l4.658-15.593c4.414.797 8.692 1.848 12.742 3.128l.533.829a1.634 1.634 0 0 0 2.193.531l26.532-15.317L193 192.433c.523.302 1.058.455 1.59.455 1.497 0 2.583-1.199 2.583-2.852v-54.001c0-.584-.312-1.124-.818-1.416l-25.97-14.993a1.633 1.633 0 0 0-1.636.001c-.606.351-2.993 1.73-4.325 2.498l-4.809-4.255c-.819-.725-1.461-1.933-1.561-2.936a7.776 7.776 0 0 0-.033-.294 2.487 2.487 0 0 1-.023-.336v-.886c0-.584-.312-1.123-.817-1.416l-6.739-3.891a1.633 1.633 0 0 0-.817-.219' fill='#455A64'/><path d='M96.027 132.636l46.576 26.891c1.204.695 1.979 1.587 2.242 2.541l-.01.007-81.374 46.982h-.001c-1.654-.152-3.199-.6-4.403-1.295l-46.576-26.891 83.546-48.235' fill='#FAFAFA'/><path d='M63.461 209.174c-.008 0-.015 0-.022-.002-1.693-.156-3.228-.609-4.441-1.309l-46.576-26.89a.118.118 0 0 1 0-.203l83.546-48.235a.117.117 0 0 1 .117 0l46.576 26.891c1.227.708 2.021 1.612 2.296 2.611a.116.116 0 0 1-.042.124l-.021.016-81.375 46.981a.11.11 0 0 1-.058.016zm-50.747-28.303l46.401 26.79c1.178.68 2.671 1.121 4.32 1.276l81.272-46.922c-.279-.907-1.025-1.73-2.163-2.387l-46.517-26.857-83.313 48.1z' fill='#607D8B'/><path d='M148.327 165.471a5.85 5.85 0 0 1-.546.001c-1.894-.083-3.302-1.038-3.145-2.132a2.693 2.693 0 0 0-.072-1.105l-81.103 46.822c.628.058 1.272.073 1.918.042.182-.009.364-.009.546-.001 1.894.083 3.302 1.038 3.145 2.132l79.257-45.759' fill='#FFF'/><path d='M69.07 211.347a.118.118 0 0 1-.115-.134c.045-.317-.057-.637-.297-.925-.505-.61-1.555-1.022-2.738-1.074a5.966 5.966 0 0 0-.535.001 14.03 14.03 0 0 1-1.935-.041.117.117 0 0 1-.103-.092.116.116 0 0 1 .055-.126l81.104-46.822a.117.117 0 0 1 .171.07c.104.381.129.768.074 1.153-.045.316.057.637.296.925.506.61 1.555 1.021 2.739 1.073.178.008.357.008.535-.001a.117.117 0 0 1 .064.218l-79.256 45.759a.114.114 0 0 1-.059.016zm-3.405-2.372c.089 0 .177.002.265.006 1.266.056 2.353.488 2.908 1.158.227.274.35.575.36.882l78.685-45.429c-.036 0-.072-.001-.107-.003-1.267-.056-2.354-.489-2.909-1.158-.282-.34-.402-.724-.347-1.107a2.604 2.604 0 0 0-.032-.91L63.846 208.97a13.91 13.91 0 0 0 1.528.012c.097-.005.194-.007.291-.007z' fill='#607D8B'/><path d='M2.208 162.134c-1.001-1.827-.241-4.217 1.698-5.337l56.011-32.344c1.939-1.12 4.324-.546 5.326 1.281l.232.41a9.344 9.344 0 0 0 1.47 2.021l.278.27c3.325 3.214 8.583 3.716 12.888 1.23l7.319-4.22c1.94-1.119 4.324-.546 5.325 1.282l3.25 5.928-83.519 48.229-10.278-18.75z' fill='#FAFAFA'/><path d='M12.486 181.001a.112.112 0 0 1-.031-.005.114.114 0 0 1-.071-.056L2.106 162.19c-1.031-1.88-.249-4.345 1.742-5.494l56.01-32.344a4.328 4.328 0 0 1 2.158-.588c1.415 0 2.65.702 3.311 1.882.01.008.018.017.024.028l.227.414a.122.122 0 0 1 .013.038 9.508 9.508 0 0 0 1.439 1.959l.275.266c1.846 1.786 4.344 2.769 7.031 2.769 1.977 0 3.954-.538 5.717-1.557a.148.148 0 0 1 .035-.013l7.284-4.206a4.321 4.321 0 0 1 2.157-.588c1.427 0 2.672.716 3.329 1.914l3.249 5.929a.116.116 0 0 1-.044.157l-83.518 48.229a.116.116 0 0 1-.059.016zm49.53-57.004c-.704 0-1.41.193-2.041.557l-56.01 32.345c-1.882 1.086-2.624 3.409-1.655 5.179l10.221 18.645 83.317-48.112-3.195-5.829c-.615-1.122-1.783-1.792-3.124-1.792a4.08 4.08 0 0 0-2.04.557l-7.317 4.225a.148.148 0 0 1-.035.013 11.7 11.7 0 0 1-5.801 1.569c-2.748 0-5.303-1.007-7.194-2.835l-.278-.27a9.716 9.716 0 0 1-1.497-2.046.096.096 0 0 1-.013-.037l-.191-.347a.11.11 0 0 1-.023-.029c-.615-1.123-1.783-1.793-3.124-1.793z' fill='#607D8B'/><path d='M42.434 155.808c-2.51-.001-4.697-1.258-5.852-3.365-1.811-3.304-.438-7.634 3.059-9.654l12.291-7.098a7.599 7.599 0 0 1 3.789-1.033c2.51 0 4.697 1.258 5.852 3.365 1.811 3.304.439 7.634-3.059 9.654l-12.291 7.098a7.606 7.606 0 0 1-3.789 1.033zm13.287-20.683a7.128 7.128 0 0 0-3.555.971l-12.291 7.098c-3.279 1.893-4.573 5.942-2.883 9.024 1.071 1.955 3.106 3.122 5.442 3.122a7.13 7.13 0 0 0 3.556-.97l12.291-7.098c3.279-1.893 4.572-5.942 2.883-9.024-1.072-1.955-3.106-3.123-5.443-3.123z' fill='#607D8B'/><path d='M149.588 109.407l6.737 3.89v.887c0 .176.013.36.037.549.011.081.02.161.028.242.14 1.415.973 2.998 2.105 3.999l7.396 6.545c.177.156.358.295.541.415 1.579 1.04 2.95.466 3.062-1.282.049-.784.057-1.595.023-2.429l-.003-.16v-1.151l25.987 15.003v54c0 1.09-.77 1.53-1.72.982l-42.473-24.523c-.95-.548-1.72-1.877-1.72-2.966v-34.033' fill='#FAFAFA'/><path d='M194.553 191.25c-.257 0-.54-.085-.831-.253l-42.472-24.521c-.981-.567-1.779-1.943-1.779-3.068v-34.033h.234v34.033c0 1.051.745 2.336 1.661 2.866l42.473 24.521c.424.245.816.288 1.103.122.285-.164.442-.52.442-1.002v-53.933l-25.753-14.868.003 1.106c.034.832.026 1.654-.024 2.439-.054.844-.396 1.464-.963 1.746-.619.309-1.45.173-2.28-.373a5.023 5.023 0 0 1-.553-.426l-7.397-6.544c-1.158-1.026-1.999-2.625-2.143-4.076a9.624 9.624 0 0 0-.027-.238 4.241 4.241 0 0 1-.038-.564v-.82l-6.68-3.856.117-.202 6.738 3.89.058.034v.954c0 .171.012.351.036.533.011.083.021.165.029.246.138 1.395.948 2.935 2.065 3.923l7.397 6.545c.173.153.35.289.527.406.758.499 1.504.63 2.047.359.49-.243.786-.795.834-1.551.05-.778.057-1.591.024-2.417l-.004-.163v-1.355l.175.1 25.987 15.004.059.033v54.068c0 .569-.198.996-.559 1.204a1.002 1.002 0 0 1-.506.131' fill='#607D8B'/><path d='M145.685 163.161l24.115 13.922-25.978 14.998-1.462-.307c-6.534-2.17-13.628-3.728-21.019-4.616-4.365-.524-8.663 1.096-9.598 3.62a2.746 2.746 0 0 0-.011 1.928c1.538 4.267 4.236 8.363 7.995 12.135l.532.845-25.977 14.997-24.115-13.922 75.518-43.6' fill='#FFF'/><path d='M94.282 220.818l-.059-.033-24.29-14.024.175-.101 75.577-43.634.058.033 24.29 14.024-26.191 15.122-.045-.01-1.461-.307c-6.549-2.174-13.613-3.725-21.009-4.614a13.744 13.744 0 0 0-1.638-.097c-3.758 0-7.054 1.531-7.837 3.642a2.62 2.62 0 0 0-.01 1.848c1.535 4.258 4.216 8.326 7.968 12.091l.016.021.526.835.006.01.064.102-.105.061-25.977 14.998-.058.033zm-23.881-14.057l23.881 13.788 24.802-14.32c.546-.315.846-.489 1.017-.575l-.466-.74c-3.771-3.787-6.467-7.881-8.013-12.168a2.851 2.851 0 0 1 .011-2.008c.815-2.199 4.203-3.795 8.056-3.795.557 0 1.117.033 1.666.099 7.412.891 14.491 2.445 21.041 4.621.836.175 1.215.254 1.39.304l25.78-14.884-23.881-13.788-75.284 43.466z' fill='#607D8B'/><path d='M167.23 125.979v50.871l-27.321 15.773-6.461-14.167c-.91-1.996-3.428-1.738-5.624.574a10.238 10.238 0 0 0-2.33 4.018l-6.46 21.628-27.322 15.774v-50.871l75.518-43.6' fill='#FFF'/><path d='M91.712 220.567a.127.127 0 0 1-.059-.016.118.118 0 0 1-.058-.101v-50.871c0-.042.023-.08.058-.101l75.519-43.6a.117.117 0 0 1 .175.101v50.871c0 .041-.023.08-.059.1l-27.321 15.775a.118.118 0 0 1-.094.01.12.12 0 0 1-.071-.063l-6.46-14.168c-.375-.822-1.062-1.275-1.934-1.275-1.089 0-2.364.686-3.5 1.881a10.206 10.206 0 0 0-2.302 3.972l-6.46 21.627a.118.118 0 0 1-.054.068L91.77 220.551a.12.12 0 0 1-.058.016zm.117-50.92v50.601l27.106-15.65 6.447-21.583a10.286 10.286 0 0 1 2.357-4.065c1.18-1.242 2.517-1.954 3.669-1.954.969 0 1.731.501 2.146 1.411l6.407 14.051 27.152-15.676v-50.601l-75.284 43.466z' fill='#607D8B'/><path d='M168.543 126.213v50.87l-27.322 15.774-6.46-14.168c-.91-1.995-3.428-1.738-5.624.574a10.248 10.248 0 0 0-2.33 4.019l-6.461 21.627-27.321 15.774v-50.87l75.518-43.6' fill='#FFF'/><path d='M93.025 220.8a.123.123 0 0 1-.059-.015.12.12 0 0 1-.058-.101v-50.871c0-.042.023-.08.058-.101l75.518-43.6a.112.112 0 0 1 .117 0c.036.02.059.059.059.1v50.871a.116.116 0 0 1-.059.101l-27.321 15.774a.111.111 0 0 1-.094.01.115.115 0 0 1-.071-.062l-6.46-14.168c-.375-.823-1.062-1.275-1.935-1.275-1.088 0-2.363.685-3.499 1.881a10.19 10.19 0 0 0-2.302 3.971l-6.461 21.628a.108.108 0 0 1-.053.067l-27.322 15.775a.12.12 0 0 1-.058.015zm.117-50.919v50.6l27.106-15.649 6.447-21.584a10.293 10.293 0 0 1 2.357-4.065c1.179-1.241 2.516-1.954 3.668-1.954.969 0 1.732.502 2.147 1.412l6.407 14.051 27.152-15.676v-50.601l-75.284 43.466z' fill='#607D8B'/><path d='M169.8 177.083l-27.322 15.774-6.46-14.168c-.91-1.995-3.428-1.738-5.625.574a10.246 10.246 0 0 0-2.329 4.019l-6.461 21.627-27.321 15.774v-50.87l75.518-43.6v50.87z' fill='#FAFAFA'/><path d='M94.282 220.917a.234.234 0 0 1-.234-.233v-50.871c0-.083.045-.161.117-.202l75.518-43.601a.234.234 0 1 1 .35.202v50.871a.233.233 0 0 1-.116.202l-27.322 15.775a.232.232 0 0 1-.329-.106l-6.461-14.168c-.36-.789-.992-1.206-1.828-1.206-1.056 0-2.301.672-3.415 1.844a10.099 10.099 0 0 0-2.275 3.924l-6.46 21.628a.235.235 0 0 1-.107.136l-27.322 15.774a.23.23 0 0 1-.116.031zm.233-50.969v50.331l26.891-15.525 6.434-21.539a10.41 10.41 0 0 1 2.384-4.112c1.201-1.265 2.569-1.991 3.753-1.991 1.018 0 1.818.526 2.253 1.48l6.354 13.934 26.982-15.578v-50.331l-75.051 43.331z' fill='#607D8B'/><path d='M109.894 199.943c-1.774 0-3.241-.725-4.244-2.12a.224.224 0 0 1 .023-.294.233.233 0 0 1 .301-.023c.78.547 1.705.827 2.75.827 1.323 0 2.754-.439 4.256-1.306 5.311-3.067 9.631-10.518 9.631-16.611 0-1.927-.442-3.56-1.278-4.724a.232.232 0 0 1 .323-.327c1.671 1.172 2.591 3.381 2.591 6.219 0 6.242-4.426 13.863-9.865 17.003-1.574.908-3.084 1.356-4.488 1.356zm-2.969-1.542c.813.651 1.82.877 2.968.877h.001c1.321 0 2.753-.327 4.254-1.194 5.311-3.067 9.632-10.463 9.632-16.556 0-1.979-.463-3.599-1.326-4.761.411 1.035.625 2.275.625 3.635 0 6.243-4.426 13.883-9.865 17.023-1.574.909-3.084 1.317-4.49 1.317-.641 0-1.243-.149-1.799-.341z' fill='#607D8B'/><path d='M113.097 197.23c5.384-3.108 9.748-10.636 9.748-16.814 0-2.051-.483-3.692-1.323-4.86-1.784-1.252-4.374-1.194-7.257.47-5.384 3.108-9.748 10.636-9.748 16.814 0 2.051.483 3.692 1.323 4.86 1.784 1.252 4.374 1.194 7.257-.47' fill='#FAFAFA'/><path d='M108.724 198.614c-1.142 0-2.158-.213-3.019-.817-.021-.014-.04.014-.055-.007-.894-1.244-1.367-2.948-1.367-4.973 0-6.242 4.426-13.864 9.865-17.005 1.574-.908 3.084-1.363 4.49-1.363 1.142 0 2.158.309 3.018.913a.23.23 0 0 1 .056.056c.894 1.244 1.367 2.972 1.367 4.997 0 6.243-4.426 13.783-9.865 16.923-1.574.909-3.084 1.276-4.49 1.276zm-2.718-1.109c.774.532 1.688.776 2.718.776 1.323 0 2.754-.413 4.256-1.28 5.311-3.066 9.631-10.505 9.631-16.598 0-1.909-.434-3.523-1.255-4.685-.774-.533-1.688-.799-2.718-.799-1.323 0-2.755.441-4.256 1.308-5.311 3.066-9.631 10.506-9.631 16.599 0 1.909.434 3.517 1.255 4.679z' fill='#607D8B'/><path d='M149.318 114.262l-9.984 8.878 15.893 11.031 5.589-6.112-11.498-13.797' fill='#FAFAFA'/><path d='M169.676 120.84l-9.748 5.627c-3.642 2.103-9.528 2.113-13.147.024-3.62-2.089-3.601-5.488.041-7.591l9.495-5.608-6.729-3.885-81.836 47.071 45.923 26.514 3.081-1.779c.631-.365.869-.898.618-1.39-2.357-4.632-2.593-9.546-.683-14.262 5.638-13.92 24.509-24.815 48.618-28.07 8.169-1.103 16.68-.967 24.704.394.852.145 1.776.008 2.407-.357l3.081-1.778-25.825-14.91' fill='#FAFAFA'/><path d='M113.675 183.459a.47.47 0 0 1-.233-.062l-45.924-26.515a.468.468 0 0 1 .001-.809l81.836-47.071a.467.467 0 0 1 .466 0l6.729 3.885a.467.467 0 0 1-.467.809l-6.496-3.75-80.9 46.533 44.988 25.973 2.848-1.644c.192-.111.62-.409.435-.773-2.416-4.748-2.658-9.814-.7-14.65 2.806-6.927 8.885-13.242 17.582-18.263 8.657-4.998 19.518-8.489 31.407-10.094 8.198-1.107 16.79-.97 24.844.397.739.125 1.561.007 2.095-.301l2.381-1.374-25.125-14.506a.467.467 0 0 1 .467-.809l25.825 14.91a.467.467 0 0 1 0 .809l-3.081 1.779c-.721.417-1.763.575-2.718.413-7.963-1.351-16.457-1.486-24.563-.392-11.77 1.589-22.512 5.039-31.065 9.977-8.514 4.916-14.456 11.073-17.183 17.805-1.854 4.578-1.623 9.376.666 13.875.37.725.055 1.513-.8 2.006l-3.081 1.78a.476.476 0 0 1-.234.062' fill='#455A64'/><path d='M153.316 128.279c-2.413 0-4.821-.528-6.652-1.586-1.818-1.049-2.82-2.461-2.82-3.975 0-1.527 1.016-2.955 2.861-4.02l9.493-5.607a.233.233 0 1 1 .238.402l-9.496 5.609c-1.696.979-2.628 2.263-2.628 3.616 0 1.34.918 2.608 2.585 3.571 3.549 2.049 9.343 2.038 12.914-.024l9.748-5.628a.234.234 0 0 1 .234.405l-9.748 5.628c-1.858 1.072-4.296 1.609-6.729 1.609' fill='#607D8B'/><path d='M113.675 182.992l-45.913-26.508M113.675 183.342a.346.346 0 0 1-.175-.047l-45.913-26.508a.35.35 0 1 1 .35-.607l45.913 26.508a.35.35 0 0 1-.175.654' fill='#455A64'/><path d='M67.762 156.484v54.001c0 1.09.77 2.418 1.72 2.967l42.473 24.521c.95.549 1.72.11 1.72-.98v-54.001' fill='#FAFAFA'/><path d='M112.727 238.561c-.297 0-.62-.095-.947-.285l-42.473-24.521c-1.063-.613-1.895-2.05-1.895-3.27v-54.001a.35.35 0 1 1 .701 0v54.001c0 .96.707 2.18 1.544 2.663l42.473 24.522c.344.198.661.243.87.122.206-.119.325-.411.325-.799v-54.001a.35.35 0 1 1 .7 0v54.001c0 .655-.239 1.154-.675 1.406a1.235 1.235 0 0 1-.623.162' fill='#455A64'/><path d='M112.86 147.512h-.001c-2.318 0-4.499-.522-6.142-1.471-1.705-.984-2.643-2.315-2.643-3.749 0-1.445.952-2.791 2.68-3.788l12.041-6.953c1.668-.962 3.874-1.493 6.212-1.493 2.318 0 4.499.523 6.143 1.472 1.704.984 2.643 2.315 2.643 3.748 0 1.446-.952 2.791-2.68 3.789l-12.042 6.952c-1.668.963-3.874 1.493-6.211 1.493zm12.147-16.753c-2.217 0-4.298.497-5.861 1.399l-12.042 6.952c-1.502.868-2.33 1.998-2.33 3.182 0 1.173.815 2.289 2.293 3.142 1.538.889 3.596 1.378 5.792 1.378h.001c2.216 0 4.298-.497 5.861-1.399l12.041-6.953c1.502-.867 2.33-1.997 2.33-3.182 0-1.172-.814-2.288-2.292-3.142-1.539-.888-3.596-1.377-5.793-1.377z' fill='#607D8B'/><path d='M165.63 123.219l-5.734 3.311c-3.167 1.828-8.286 1.837-11.433.02-3.147-1.817-3.131-4.772.036-6.601l5.734-3.31 11.397 6.58' fill='#FAFAFA'/><path d='M154.233 117.448l9.995 5.771-4.682 2.704c-1.434.827-3.352 1.283-5.399 1.283-2.029 0-3.923-.449-5.333-1.263-1.29-.744-2-1.694-2-2.674 0-.991.723-1.955 2.036-2.713l5.383-3.108m0-.809l-5.734 3.31c-3.167 1.829-3.183 4.784-.036 6.601 1.568.905 3.623 1.357 5.684 1.357 2.077 0 4.159-.46 5.749-1.377l5.734-3.311-11.397-6.58M145.445 179.667c-1.773 0-3.241-.85-4.243-2.245-.067-.092-.057-.275.023-.356.08-.081.207-.12.3-.055.781.548 1.706.812 2.751.811 1.322 0 2.754-.446 4.256-1.313 5.31-3.066 9.631-10.522 9.631-16.615 0-1.927-.442-3.562-1.279-4.726a.235.235 0 0 1 .024-.301.232.232 0 0 1 .3-.027c1.67 1.172 2.59 3.38 2.59 6.219 0 6.242-4.425 13.987-9.865 17.127-1.573.908-3.083 1.481-4.488 1.481zM142.476 178c.814.651 1.82 1.002 2.969 1.002 1.322 0 2.753-.452 4.255-1.32 5.31-3.065 9.631-10.523 9.631-16.617 0-1.98-.463-3.63-1.325-4.793.411 1.035.624 2.26.624 3.62 0 6.242-4.425 13.875-9.865 17.015-1.573.909-3.084 1.376-4.489 1.376a5.49 5.49 0 0 1-1.8-.283z' fill='#607D8B'/><path d='M148.648 176.704c5.384-3.108 9.748-10.636 9.748-16.813 0-2.052-.483-3.693-1.322-4.861-1.785-1.252-4.375-1.194-7.258.471-5.383 3.108-9.748 10.636-9.748 16.813 0 2.051.484 3.692 1.323 4.86 1.785 1.253 4.374 1.195 7.257-.47' fill='#FAFAFA'/><path d='M144.276 178.276c-1.143 0-2.158-.307-3.019-.911a.217.217 0 0 1-.055-.054c-.895-1.244-1.367-2.972-1.367-4.997 0-6.241 4.425-13.875 9.865-17.016 1.573-.908 3.084-1.369 4.489-1.369 1.143 0 2.158.307 3.019.91a.24.24 0 0 1 .055.055c.894 1.244 1.367 2.971 1.367 4.997 0 6.241-4.425 13.875-9.865 17.016-1.573.908-3.084 1.369-4.489 1.369zm-2.718-1.172c.773.533 1.687.901 2.718.901 1.322 0 2.754-.538 4.256-1.405 5.31-3.066 9.631-10.567 9.631-16.661 0-1.908-.434-3.554-1.256-4.716-.774-.532-1.688-.814-2.718-.814-1.322 0-2.754.433-4.256 1.3-5.31 3.066-9.631 10.564-9.631 16.657 0 1.91.434 3.576 1.256 4.738z' fill='#607D8B'/><path d='M150.72 172.361l-.363-.295a24.105 24.105 0 0 0 2.148-3.128 24.05 24.05 0 0 0 1.977-4.375l.443.149a24.54 24.54 0 0 1-2.015 4.46 24.61 24.61 0 0 1-2.19 3.189M115.917 191.514l-.363-.294a24.174 24.174 0 0 0 2.148-3.128 24.038 24.038 0 0 0 1.976-4.375l.443.148a24.48 24.48 0 0 1-2.015 4.461 24.662 24.662 0 0 1-2.189 3.188M114 237.476V182.584 237.476' fill='#607D8B'/><g><path d='M81.822 37.474c.017-.135-.075-.28-.267-.392-.327-.188-.826-.21-1.109-.045l-6.012 3.471c-.131.076-.194.178-.191.285.002.132.002.461.002.578v.043l-.007.128-6.591 3.779c-.001 0-2.077 1.046-2.787 5.192 0 0-.912 6.961-.898 19.745.015 12.57.606 17.07 1.167 21.351.22 1.684 3.001 2.125 3.001 2.125.331.04.698-.027 1.08-.248l75.273-43.551c1.808-1.069 2.667-3.719 3.056-6.284 1.213-7.99 1.675-32.978-.275-39.878-.196-.693-.51-1.083-.868-1.282l-2.086-.79c-.727.028-1.416.467-1.534.535L82.032 37.072l-.21.402' fill='#FFF'/><path d='M144.311 1.701l2.085.79c.358.199.672.589.868 1.282 1.949 6.9 1.487 31.887.275 39.878-.39 2.565-1.249 5.215-3.056 6.284L69.21 93.486a1.78 1.78 0 0 1-.896.258l-.183-.011c0 .001-2.782-.44-3.003-2.124-.56-4.282-1.151-8.781-1.165-21.351-.015-12.784.897-19.745.897-19.745.71-4.146 2.787-5.192 2.787-5.192l6.591-3.779.007-.128v-.043c0-.117 0-.446-.002-.578-.003-.107.059-.21.191-.285l6.012-3.472a.98.98 0 0 1 .481-.11c.218 0 .449.053.627.156.193.112.285.258.268.392l.211-.402 60.744-34.836c.117-.068.806-.507 1.534-.535m0-.997l-.039.001c-.618.023-1.283.244-1.974.656l-.021.012-60.519 34.706a2.358 2.358 0 0 0-.831-.15c-.365 0-.704.084-.98.244l-6.012 3.471c-.442.255-.699.69-.689 1.166l.001.15-6.08 3.487c-.373.199-2.542 1.531-3.29 5.898l-.006.039c-.009.07-.92 7.173-.906 19.875.014 12.62.603 17.116 1.172 21.465l.002.015c.308 2.355 3.475 2.923 3.836 2.98l.034.004c.101.013.204.019.305.019a2.77 2.77 0 0 0 1.396-.392l75.273-43.552c1.811-1.071 2.999-3.423 3.542-6.997 1.186-7.814 1.734-33.096-.301-40.299-.253-.893-.704-1.527-1.343-1.882l-.132-.062-2.085-.789a.973.973 0 0 0-.353-.065' fill='#455A64'/><path d='M128.267 11.565l1.495.434-56.339 32.326' fill='#FFF'/><path d='M74.202 90.545a.5.5 0 0 1-.25-.931l18.437-10.645a.499.499 0 1 1 .499.864L74.451 90.478l-.249.067M75.764 42.654l-.108-.062.046-.171 5.135-2.964.17.045-.045.171-5.135 2.964-.063.017M70.52 90.375V46.421l.063-.036L137.84 7.554v43.954l-.062.036L70.52 90.375zm.25-43.811v43.38l66.821-38.579V7.985L70.77 46.564z' fill='#607D8B'/><path d='M86.986 83.182c-.23.149-.612.384-.849.523l-11.505 6.701c-.237.139-.206.252.068.252h.565c.275 0 .693-.113.93-.252L87.7 83.705c.237-.139.428-.253.425-.256a11.29 11.29 0 0 1-.006-.503c0-.274-.188-.377-.418-.227l-.715.463' fill='#607D8B'/><path d='M75.266 90.782H74.7c-.2 0-.316-.056-.346-.166-.03-.11.043-.217.215-.317l11.505-6.702c.236-.138.615-.371.844-.519l.715-.464a.488.488 0 0 1 .266-.089c.172 0 .345.13.345.421 0 .214.001.363.003.437l.006.004-.004.069c-.003.075-.003.075-.486.356l-11.505 6.702a2.282 2.282 0 0 1-.992.268zm-.6-.25l.034.001h.566c.252 0 .649-.108.866-.234l11.505-6.702c.168-.098.294-.173.361-.214-.004-.084-.004-.218-.004-.437l-.095-.171-.131.049-.714.463c-.232.15-.616.386-.854.525l-11.505 6.702-.029.018z' fill='#607D8B'/><path d='M75.266 89.871H74.7c-.2 0-.316-.056-.346-.166-.03-.11.043-.217.215-.317l11.505-6.702c.258-.151.694-.268.993-.268h.565c.2 0 .316.056.346.166.03.11-.043.217-.215.317l-11.505 6.702a2.282 2.282 0 0 1-.992.268zm-.6-.25l.034.001h.566c.252 0 .649-.107.866-.234l11.505-6.702.03-.018-.035-.001h-.565c-.252 0-.649.108-.867.234l-11.505 6.702-.029.018zM74.37 90.801v-1.247 1.247' fill='#607D8B'/><path d='M68.13 93.901c-.751-.093-1.314-.737-1.439-1.376-.831-4.238-1.151-8.782-1.165-21.352-.015-12.784.897-19.745.897-19.745.711-4.146 2.787-5.192 2.787-5.192l74.859-43.219c.223-.129 2.487-1.584 3.195.923 1.95 6.9 1.488 31.887.275 39.878-.389 2.565-1.248 5.215-3.056 6.283L69.21 93.653c-.382.221-.749.288-1.08.248 0 0-2.781-.441-3.001-2.125-.561-4.281-1.152-8.781-1.167-21.351-.014-12.784.898-19.745.898-19.745.71-4.146 2.787-5.191 2.787-5.191l6.598-3.81.871-.119 6.599-3.83.046-.461L68.13 93.901' fill='#FAFAFA'/><path d='M68.317 94.161l-.215-.013h-.001l-.244-.047c-.719-.156-2.772-.736-2.976-2.292-.568-4.34-1.154-8.813-1.168-21.384-.014-12.654.891-19.707.9-19.777.725-4.231 2.832-5.338 2.922-5.382l6.628-3.827.87-.119 6.446-3.742.034-.334a.248.248 0 0 1 .273-.223.248.248 0 0 1 .223.272l-.059.589-6.752 3.919-.87.118-6.556 3.785c-.031.016-1.99 1.068-2.666 5.018-.007.06-.908 7.086-.894 19.702.014 12.539.597 16.996 1.161 21.305.091.691.689 1.154 1.309 1.452a1.95 1.95 0 0 1-.236-.609c-.781-3.984-1.155-8.202-1.17-21.399-.014-12.653.891-19.707.9-19.777.725-4.231 2.832-5.337 2.922-5.382-.004.001 74.444-42.98 74.846-43.212l.028-.017c.904-.538 1.72-.688 2.36-.433.555.221.949.733 1.172 1.52 2.014 7.128 1.46 32.219.281 39.983-.507 3.341-1.575 5.515-3.175 6.462L69.335 93.869a2.023 2.023 0 0 1-1.018.292zm-.147-.507c.293.036.604-.037.915-.217l75.273-43.551c1.823-1.078 2.602-3.915 2.934-6.106 1.174-7.731 1.731-32.695-.268-39.772-.178-.631-.473-1.032-.876-1.192-.484-.193-1.166-.052-1.921.397l-.034.021-74.858 43.218c-.031.017-1.989 1.069-2.666 5.019-.007.059-.908 7.085-.894 19.702.015 13.155.386 17.351 1.161 21.303.09.461.476.983 1.037 1.139.114.025.185.037.196.039h.001z' fill='#455A64'/><path d='M69.317 68.982c.489-.281.885-.056.885.505 0 .56-.396 1.243-.885 1.525-.488.282-.884.057-.884-.504 0-.56.396-1.243.884-1.526' fill='#FFF'/><path d='M68.92 71.133c-.289 0-.487-.228-.487-.625 0-.56.396-1.243.884-1.526a.812.812 0 0 1 .397-.121c.289 0 .488.229.488.626 0 .56-.396 1.243-.885 1.525a.812.812 0 0 1-.397.121m.794-2.459a.976.976 0 0 0-.49.147c-.548.317-.978 1.058-.978 1.687 0 .486.271.812.674.812a.985.985 0 0 0 .491-.146c.548-.317.978-1.057.978-1.687 0-.486-.272-.813-.675-.813' fill='#8097A2'/><path d='M68.92 70.947c-.271 0-.299-.307-.299-.439 0-.491.361-1.116.79-1.363a.632.632 0 0 1 .303-.096c.272 0 .301.306.301.438 0 .491-.363 1.116-.791 1.364a.629.629 0 0 1-.304.096m.794-2.086a.812.812 0 0 0-.397.121c-.488.283-.884.966-.884 1.526 0 .397.198.625.487.625a.812.812 0 0 0 .397-.121c.489-.282.885-.965.885-1.525 0-.397-.199-.626-.488-.626' fill='#8097A2'/><path d='M69.444 85.35c.264-.152.477-.031.477.272 0 .303-.213.67-.477.822-.263.153-.477.031-.477-.271 0-.302.214-.671.477-.823' fill='#FFF'/><path d='M69.23 86.51c-.156 0-.263-.123-.263-.337 0-.302.214-.671.477-.823a.431.431 0 0 1 .214-.066c.156 0 .263.124.263.338 0 .303-.213.67-.477.822a.431.431 0 0 1-.214.066m.428-1.412c-.1 0-.203.029-.307.09-.32.185-.57.618-.57.985 0 .309.185.524.449.524a.63.63 0 0 0 .308-.09c.32-.185.57-.618.57-.985 0-.309-.185-.524-.45-.524' fill='#8097A2'/><path d='M69.23 86.322l-.076-.149c0-.235.179-.544.384-.661l.12-.041.076.151c0 .234-.179.542-.383.66l-.121.04m.428-1.038a.431.431 0 0 0-.214.066c-.263.152-.477.521-.477.823 0 .214.107.337.263.337a.431.431 0 0 0 .214-.066c.264-.152.477-.519.477-.822 0-.214-.107-.338-.263-.338' fill='#8097A2'/><path d='M139.278 7.769v43.667L72.208 90.16V46.493l67.07-38.724' fill='#455A64'/><path d='M72.083 90.375V46.421l.063-.036 67.257-38.831v43.954l-.062.036-67.258 38.831zm.25-43.811v43.38l66.821-38.579V7.985L72.333 46.564z' fill='#607D8B'/></g><path d='M125.737 88.647l-7.639 3.334V84l-11.459 4.713v8.269L99 100.315l13.369 3.646 13.368-15.314' fill='#455A64'/></g></svg>";function Ne(){this.loadIcon_();var h=document.createElement("div"),S=h.style;S.position="fixed",S.top=0,S.right=0,S.bottom=0,S.left=0,S.backgroundColor="gray",S.fontFamily="sans-serif",S.zIndex=1e6;var d=document.createElement("img");d.src=this.icon;var S=d.style;S.marginLeft="25%",S.marginTop="25%",S.width="50%",h.appendChild(d);var l=document.createElement("div"),S=l.style;S.textAlign="center",S.fontSize="16px",S.lineHeight="24px",S.margin="24px 25%",S.width="50%",l.innerHTML="Place your phone into your Cardboard viewer.",h.appendChild(l);var f=document.createElement("div"),S=f.style;S.backgroundColor="#CFD8DC",S.position="fixed",S.bottom=0,S.width="100%",S.height="48px",S.padding="14px 24px",S.boxSizing="border-box",S.color="#656A6B",h.appendChild(f);var v=document.createElement("div");v.style.float="left",v.innerHTML="No Cardboard viewer?";var M=document.createElement("a");M.href="https://www.google.com/get/cardboard/get-cardboard/",M.innerHTML="get one",M.target="_blank";var S=M.style;S.float="right",S.fontWeight=600,S.textTransform="uppercase",S.borderLeft="1px solid gray",S.paddingLeft="24px",S.textDecoration="none",S.color="#656A6B",f.appendChild(v),f.appendChild(M),this.overlay=h,this.text=l,this.hide()}Ne.prototype.show=function(h){!h&&!this.overlay.parentElement?document.body.appendChild(this.overlay):h&&(this.overlay.parentElement&&this.overlay.parentElement!=h&&this.overlay.parentElement.removeChild(this.overlay),h.appendChild(this.overlay)),this.overlay.style.display="block";var d=this.overlay.querySelector("img"),l=d.style;m()?(l.width="20%",l.marginLeft="40%",l.marginTop="3%"):(l.width="50%",l.marginLeft="25%",l.marginTop="25%")},Ne.prototype.hide=function(){this.overlay.style.display="none"},Ne.prototype.showTemporarily=function(h,d){this.show(d),this.timer=setTimeout(this.hide.bind(this),h)},Ne.prototype.disableShowTemporarily=function(){clearTimeout(this.timer)},Ne.prototype.update=function(){this.disableShowTemporarily(),!m()&&N()?this.show():this.hide()},Ne.prototype.loadIcon_=function(){this.icon=o("image/svg+xml",ve)};var dt="CardboardV1",yt="WEBVR_CARDBOARD_VIEWER",nt="webvr-polyfill-viewer-selector";function ft(h){try{this.selectedKey=localStorage.getItem(yt)}catch(d){console.error("Failed to load viewer profile: %s",d)}this.selectedKey||(this.selectedKey=h||dt),this.dialog=this.createDialog_(me.Viewers),this.root=null,this.onChangeCallbacks_=[]}ft.prototype.show=function(h){this.root=h,h.appendChild(this.dialog);var d=this.dialog.querySelector("#"+this.selectedKey);d.checked=!0,this.dialog.style.display="block"},ft.prototype.hide=function(){this.root&&this.root.contains(this.dialog)&&this.root.removeChild(this.dialog),this.dialog.style.display="none"},ft.prototype.getCurrentViewer=function(){return me.Viewers[this.selectedKey]},ft.prototype.getSelectedKey_=function(){var h=this.dialog.querySelector("input[name=field]:checked");return h?h.id:null},ft.prototype.onChange=function(h){this.onChangeCallbacks_.push(h)},ft.prototype.fireOnChange_=function(h){for(var d=0;d<this.onChangeCallbacks_.length;d++)this.onChangeCallbacks_[d](h)},ft.prototype.onSave_=function(){if(this.selectedKey=this.getSelectedKey_(),!this.selectedKey||!me.Viewers[this.selectedKey]){console.error("ViewerSelector.onSave_: this should never happen!");return}this.fireOnChange_(me.Viewers[this.selectedKey]);try{localStorage.setItem(yt,this.selectedKey)}catch(h){console.error("Failed to save viewer profile: %s",h)}this.hide()},ft.prototype.createDialog_=function(h){var d=document.createElement("div");d.classList.add(nt),d.style.display="none";var l=document.createElement("div"),M=l.style;M.position="fixed",M.left=0,M.top=0,M.width="100%",M.height="100%",M.background="rgba(0, 0, 0, 0.3)",l.addEventListener("click",this.hide.bind(this));var f=280,v=document.createElement("div"),M=v.style;M.boxSizing="border-box",M.position="fixed",M.top="24px",M.left="50%",M.marginLeft=-280/2+"px",M.width=f+"px",M.padding="24px",M.overflow="hidden",M.background="#fafafa",M.fontFamily="'Roboto', sans-serif",M.boxShadow="0px 5px 20px #666",v.appendChild(this.createH1_("Select your viewer"));for(var S in h)v.appendChild(this.createChoice_(S,h[S].label));return v.appendChild(this.createButton_("Save",this.onSave_.bind(this))),d.appendChild(l),d.appendChild(v),d},ft.prototype.createH1_=function(h){var d=document.createElement("h1"),l=d.style;return l.color="black",l.fontSize="20px",l.fontWeight="bold",l.marginTop=0,l.marginBottom="24px",d.innerHTML=h,d},ft.prototype.createChoice_=function(h,d){var l=document.createElement("div");l.style.marginTop="8px",l.style.color="black";var f=document.createElement("input");f.style.fontSize="30px",f.setAttribute("id",h),f.setAttribute("type","radio"),f.setAttribute("value",h),f.setAttribute("name","field");var v=document.createElement("label");return v.style.marginLeft="4px",v.setAttribute("for",h),v.innerHTML=d,l.appendChild(f),l.appendChild(v),l},ft.prototype.createButton_=function(h,d){var l=document.createElement("button");l.innerHTML=h;var f=l.style;return f.float="right",f.textTransform="uppercase",f.color="#1094f7",f.fontSize="14px",f.letterSpacing=0,f.border=0,f.background="none",f.marginTop="16px",l.addEventListener("click",d),l};var Kt=typeof window<"u"?window:typeof ta<"u"?ta:typeof self<"u"?self:{};function Ar(h){return h&&h.__esModule&&Object.prototype.hasOwnProperty.call(h,"default")?h.default:h}function vr(h,d){return d={exports:{}},h(d,d.exports),d.exports}var dn=vr(function(h,d){(function(f,v){h.exports=v()})(Kt,function(){return function(l){var f={};function v(M){if(f[M])return f[M].exports;var S=f[M]={i:M,l:!1,exports:{}};return l[M].call(S.exports,S,S.exports,v),S.l=!0,S.exports}return v.m=l,v.c=f,v.d=function(M,S,O){v.o(M,S)||Object.defineProperty(M,S,{configurable:!1,enumerable:!0,get:O})},v.n=function(M){var S=M&&M.__esModule?function(){return M.default}:function(){return M};return v.d(S,"a",S),S},v.o=function(M,S){return Object.prototype.hasOwnProperty.call(M,S)},v.p="",v(v.s=0)}([function(l,f,v){var M=function(){function B(q,re){for(var se=0;se<re.length;se++){var de=re[se];de.enumerable=de.enumerable||!1,de.configurable=!0,"value"in de&&(de.writable=!0),Object.defineProperty(q,de.key,de)}}return function(q,re,se){return re&&B(q.prototype,re),se&&B(q,se),q}}();function S(B,q){if(!(B instanceof q))throw new TypeError("Cannot call a class as a function")}var O=v(1),V=typeof navigator<"u"&&parseFloat((""+(/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))<10&&!window.MSStream,L=function(){function B(){S(this,B),V?this.noSleepTimer=null:(this.noSleepVideo=document.createElement("video"),this.noSleepVideo.setAttribute("playsinline",""),this.noSleepVideo.setAttribute("src",O),this.noSleepVideo.addEventListener("timeupdate",(function(q){this.noSleepVideo.currentTime>.5&&(this.noSleepVideo.currentTime=Math.random())}).bind(this)))}return M(B,[{key:"enable",value:function(){V?(this.disable(),this.noSleepTimer=window.setInterval(function(){window.location.href="/",window.setTimeout(window.stop,0)},15e3)):this.noSleepVideo.play()}},{key:"disable",value:function(){V?this.noSleepTimer&&(window.clearInterval(this.noSleepTimer),this.noSleepTimer=null):this.noSleepVideo.pause()}}]),B}();l.exports=L},function(l,f,v){l.exports="data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAACKBtZGF0AAAC8wYF///v3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0MiByMjQ3OSBkZDc5YTYxIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTEgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MToweDExMSBtZT1oZXggc3VibWU9MiBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0wIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MCA4eDhkY3Q9MCBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0wIHRocmVhZHM9NiBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MSBrZXlpbnQ9MzAwIGtleWludF9taW49MzAgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD0xMCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIwLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IHZidl9tYXhyYXRlPTIwMDAwIHZidl9idWZzaXplPTI1MDAwIGNyZl9tYXg9MC4wIG5hbF9ocmQ9bm9uZSBmaWxsZXI9MCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAOWWIhAA3//p+C7v8tDDSTjf97w55i3SbRPO4ZY+hkjD5hbkAkL3zpJ6h/LR1CAABzgB1kqqzUorlhQAAAAxBmiQYhn/+qZYADLgAAAAJQZ5CQhX/AAj5IQADQGgcIQADQGgcAAAACQGeYUQn/wALKCEAA0BoHAAAAAkBnmNEJ/8ACykhAANAaBwhAANAaBwAAAANQZpoNExDP/6plgAMuSEAA0BoHAAAAAtBnoZFESwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBnqVEJ/8ACykhAANAaBwAAAAJAZ6nRCf/AAsoIQADQGgcIQADQGgcAAAADUGarDRMQz/+qZYADLghAANAaBwAAAALQZ7KRRUsK/8ACPkhAANAaBwAAAAJAZ7pRCf/AAsoIQADQGgcIQADQGgcAAAACQGe60Qn/wALKCEAA0BoHAAAAA1BmvA0TEM//qmWAAy5IQADQGgcIQADQGgcAAAAC0GfDkUVLCv/AAj5IQADQGgcAAAACQGfLUQn/wALKSEAA0BoHCEAA0BoHAAAAAkBny9EJ/8ACyghAANAaBwAAAANQZs0NExDP/6plgAMuCEAA0BoHAAAAAtBn1JFFSwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBn3FEJ/8ACyghAANAaBwAAAAJAZ9zRCf/AAsoIQADQGgcIQADQGgcAAAADUGbeDRMQz/+qZYADLkhAANAaBwAAAALQZ+WRRUsK/8ACPghAANAaBwhAANAaBwAAAAJAZ+1RCf/AAspIQADQGgcAAAACQGft0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bm7w0TEM//qmWAAy4IQADQGgcAAAAC0Gf2kUVLCv/AAj5IQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHAAAAAkBn/tEJ/8ACykhAANAaBwAAAANQZvgNExDP/6plgAMuSEAA0BoHCEAA0BoHAAAAAtBnh5FFSwr/wAI+CEAA0BoHAAAAAkBnj1EJ/8ACyghAANAaBwhAANAaBwAAAAJAZ4/RCf/AAspIQADQGgcAAAADUGaJDRMQz/+qZYADLghAANAaBwAAAALQZ5CRRUsK/8ACPkhAANAaBwhAANAaBwAAAAJAZ5hRCf/AAsoIQADQGgcAAAACQGeY0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bmmg0TEM//qmWAAy5IQADQGgcAAAAC0GehkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGepUQn/wALKSEAA0BoHAAAAAkBnqdEJ/8ACyghAANAaBwAAAANQZqsNExDP/6plgAMuCEAA0BoHCEAA0BoHAAAAAtBnspFFSwr/wAI+SEAA0BoHAAAAAkBnulEJ/8ACyghAANAaBwhAANAaBwAAAAJAZ7rRCf/AAsoIQADQGgcAAAADUGa8DRMQz/+qZYADLkhAANAaBwhAANAaBwAAAALQZ8ORRUsK/8ACPkhAANAaBwAAAAJAZ8tRCf/AAspIQADQGgcIQADQGgcAAAACQGfL0Qn/wALKCEAA0BoHAAAAA1BmzQ0TEM//qmWAAy4IQADQGgcAAAAC0GfUkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGfcUQn/wALKCEAA0BoHAAAAAkBn3NEJ/8ACyghAANAaBwhAANAaBwAAAANQZt4NExC//6plgAMuSEAA0BoHAAAAAtBn5ZFFSwr/wAI+CEAA0BoHCEAA0BoHAAAAAkBn7VEJ/8ACykhAANAaBwAAAAJAZ+3RCf/AAspIQADQGgcAAAADUGbuzRMQn/+nhAAYsAhAANAaBwhAANAaBwAAAAJQZ/aQhP/AAspIQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHAAACiFtb292AAAAbG12aGQAAAAA1YCCX9WAgl8AAAPoAAAH/AABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAGGlvZHMAAAAAEICAgAcAT////v7/AAAF+XRyYWsAAABcdGtoZAAAAAPVgIJf1YCCXwAAAAEAAAAAAAAH0AAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAygAAAMoAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAB9AAABdwAAEAAAAABXFtZGlhAAAAIG1kaGQAAAAA1YCCX9WAgl8AAV+QAAK/IFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAUcbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAE3HN0YmwAAACYc3RzZAAAAAAAAAABAAAAiGF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAygDKAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAyYXZjQwFNQCj/4QAbZ01AKOyho3ySTUBAQFAAAAMAEAAr8gDxgxlgAQAEaO+G8gAAABhzdHRzAAAAAAAAAAEAAAA8AAALuAAAABRzdHNzAAAAAAAAAAEAAAABAAAB8GN0dHMAAAAAAAAAPAAAAAEAABdwAAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAAC7gAAAAAQAAF3AAAAABAAAAAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAEEc3RzegAAAAAAAAAAAAAAPAAAAzQAAAAQAAAADQAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAANAAAADQAAAQBzdGNvAAAAAAAAADwAAAAwAAADZAAAA3QAAAONAAADoAAAA7kAAAPQAAAD6wAAA/4AAAQXAAAELgAABEMAAARcAAAEbwAABIwAAAShAAAEugAABM0AAATkAAAE/wAABRIAAAUrAAAFQgAABV0AAAVwAAAFiQAABaAAAAW1AAAFzgAABeEAAAX+AAAGEwAABiwAAAY/AAAGVgAABnEAAAaEAAAGnQAABrQAAAbPAAAG4gAABvUAAAcSAAAHJwAAB0AAAAdTAAAHcAAAB4UAAAeeAAAHsQAAB8gAAAfjAAAH9gAACA8AAAgmAAAIQQAACFQAAAhnAAAIhAAACJcAAAMsdHJhawAAAFx0a2hkAAAAA9WAgl/VgIJfAAAAAgAAAAAAAAf8AAAAAAAAAAAAAAABAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAACsm1kaWEAAAAgbWRoZAAAAADVgIJf1YCCXwAArEQAAWAAVcQAAAAAACdoZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU3RlcmVvAAAAAmNtaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAidzdGJsAAAAZ3N0c2QAAAAAAAAAAQAAAFdtcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAADNlc2RzAAAAAAOAgIAiAAIABICAgBRAFQAAAAADDUAAAAAABYCAgAISEAaAgIABAgAAABhzdHRzAAAAAAAAAAEAAABYAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAGAAAAWAAAAXBzdGNvAAAAAAAAAFgAAAOBAAADhwAAA5oAAAOtAAADswAAA8oAAAPfAAAD5QAAA/gAAAQLAAAEEQAABCgAAAQ9AAAEUAAABFYAAARpAAAEgAAABIYAAASbAAAErgAABLQAAATHAAAE3gAABPMAAAT5AAAFDAAABR8AAAUlAAAFPAAABVEAAAVXAAAFagAABX0AAAWDAAAFmgAABa8AAAXCAAAFyAAABdsAAAXyAAAF+AAABg0AAAYgAAAGJgAABjkAAAZQAAAGZQAABmsAAAZ+AAAGkQAABpcAAAauAAAGwwAABskAAAbcAAAG7wAABwYAAAcMAAAHIQAABzQAAAc6AAAHTQAAB2QAAAdqAAAHfwAAB5IAAAeYAAAHqwAAB8IAAAfXAAAH3QAAB/AAAAgDAAAICQAACCAAAAg1AAAIOwAACE4AAAhhAAAIeAAACH4AAAiRAAAIpAAACKoAAAiwAAAItgAACLwAAAjCAAAAFnVkdGEAAAAObmFtZVN0ZXJlbwAAAHB1ZHRhAAAAaG1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAAO2lsc3QAAAAzqXRvbwAAACtkYXRhAAAAAQAAAABIYW5kQnJha2UgMC4xMC4yIDIwMTUwNjExMDA="}])})}),Gi=Ar(dn),xr=1e3,Er=[0,0,.5,1],ci=[.5,0,.5,1],Mr=window.requestAnimationFrame,hi=window.cancelAnimationFrame;function Sr(){this.leftProjectionMatrix=new Float32Array(16),this.leftViewMatrix=new Float32Array(16),this.rightProjectionMatrix=new Float32Array(16),this.rightViewMatrix=new Float32Array(16),this.pose=null}function Vi(h){Object.defineProperties(this,{hasPosition:{writable:!1,enumerable:!0,value:h.hasPosition},hasExternalDisplay:{writable:!1,enumerable:!0,value:h.hasExternalDisplay},canPresent:{writable:!1,enumerable:!0,value:h.canPresent},maxLayers:{writable:!1,enumerable:!0,value:h.maxLayers},hasOrientation:{enumerable:!0,get:function(){return fe("VRDisplayCapabilities.prototype.hasOrientation","VRDisplay.prototype.getFrameData"),h.hasOrientation}}})}function ht(h){h=h||{};var d="wakelock"in h?h.wakelock:!0;this.isPolyfilled=!0,this.displayId=xr++,this.displayName="",this.depthNear=.01,this.depthFar=1e4,this.isPresenting=!1,Object.defineProperty(this,"isConnected",{get:function(){return fe("VRDisplay.prototype.isConnected","VRDisplayCapabilities.prototype.hasExternalDisplay"),!1}}),this.capabilities=new Vi({hasPosition:!1,hasOrientation:!1,hasExternalDisplay:!1,canPresent:!1,maxLayers:1}),this.stageParameters=null,this.waitingForPresent_=!1,this.layer_=null,this.originalParent_=null,this.fullscreenElement_=null,this.fullscreenWrapper_=null,this.fullscreenElementCachedStyle_=null,this.fullscreenEventTarget_=null,this.fullscreenChangeHandler_=null,this.fullscreenErrorHandler_=null,d&&N()&&(this.wakelock_=new Gi)}ht.prototype.getFrameData=function(h){return Y(h,this._getPose(),this)},ht.prototype.getPose=function(){return fe("VRDisplay.prototype.getPose","VRDisplay.prototype.getFrameData"),this._getPose()},ht.prototype.resetPose=function(){return fe("VRDisplay.prototype.resetPose"),this._resetPose()},ht.prototype.getImmediatePose=function(){return fe("VRDisplay.prototype.getImmediatePose","VRDisplay.prototype.getFrameData"),this._getPose()},ht.prototype.requestAnimationFrame=function(h){return Mr(h)},ht.prototype.cancelAnimationFrame=function(h){return hi(h)},ht.prototype.wrapForFullscreen=function(h){if(u())return h;if(!this.fullscreenWrapper_){this.fullscreenWrapper_=document.createElement("div");var d=["height: "+Math.min(screen.height,screen.width)+"px !important","top: 0 !important","left: 0 !important","right: 0 !important","border: 0","margin: 0","padding: 0","z-index: 999999 !important","position: fixed"];this.fullscreenWrapper_.setAttribute("style",d.join("; ")+";"),this.fullscreenWrapper_.classList.add("webvr-polyfill-fullscreen-wrapper")}if(this.fullscreenElement_==h)return this.fullscreenWrapper_;if(this.fullscreenElement_&&(this.originalParent_?this.originalParent_.appendChild(this.fullscreenElement_):this.fullscreenElement_.parentElement.removeChild(this.fullscreenElement_)),this.fullscreenElement_=h,this.originalParent_=h.parentElement,this.originalParent_||document.body.appendChild(h),!this.fullscreenWrapper_.parentElement){var l=this.fullscreenElement_.parentElement;l.insertBefore(this.fullscreenWrapper_,this.fullscreenElement_),l.removeChild(this.fullscreenElement_)}this.fullscreenWrapper_.insertBefore(this.fullscreenElement_,this.fullscreenWrapper_.firstChild),this.fullscreenElementCachedStyle_=this.fullscreenElement_.getAttribute("style");var f=this;function v(){if(f.fullscreenElement_){var M=["position: absolute","top: 0","left: 0","width: "+Math.max(screen.width,screen.height)+"px","height: "+Math.min(screen.height,screen.width)+"px","border: 0","margin: 0","padding: 0"];f.fullscreenElement_.setAttribute("style",M.join("; ")+";")}}return v(),this.fullscreenWrapper_},ht.prototype.removeFullscreenWrapper=function(){if(this.fullscreenElement_){var h=this.fullscreenElement_;this.fullscreenElementCachedStyle_?h.setAttribute("style",this.fullscreenElementCachedStyle_):h.removeAttribute("style"),this.fullscreenElement_=null,this.fullscreenElementCachedStyle_=null;var d=this.fullscreenWrapper_.parentElement;return this.fullscreenWrapper_.removeChild(h),this.originalParent_===d?d.insertBefore(h,this.fullscreenWrapper_):this.originalParent_&&this.originalParent_.appendChild(h),d.removeChild(this.fullscreenWrapper_),h}},ht.prototype.requestPresent=function(h){var d=this.isPresenting,l=this;return h instanceof Array||(fe("VRDisplay.prototype.requestPresent with non-array argument","an array of VRLayers as the first argument"),h=[h]),new Promise(function(f,v){if(!l.capabilities.canPresent){v(new Error("VRDisplay is not capable of presenting."));return}if(h.length==0||h.length>l.capabilities.maxLayers){v(new Error("Invalid number of layers."));return}var M=h[0];if(!M.source){f();return}var S=M.leftBounds||Er,O=M.rightBounds||ci;if(d){var V=l.layer_;V.source!==M.source&&(V.source=M.source);for(var L=0;L<4;L++)V.leftBounds[L]=S[L],V.rightBounds[L]=O[L];l.wrapForFullscreen(l.layer_.source),l.updatePresent_(),f();return}if(l.layer_={predistorted:M.predistorted,source:M.source,leftBounds:S.slice(0),rightBounds:O.slice(0)},l.waitingForPresent_=!1,l.layer_&&l.layer_.source){var B=l.wrapForFullscreen(l.layer_.source),q=function(){var de=U();l.isPresenting=B===de,l.isPresenting?(screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape-primary").catch(function(ye){console.error("screen.orientation.lock() failed due to",ye.message)}),l.waitingForPresent_=!1,l.beginPresent_(),f()):(screen.orientation&&screen.orientation.unlock&&screen.orientation.unlock(),l.removeFullscreenWrapper(),l.disableWakeLock(),l.endPresent_(),l.removeFullscreenListeners_()),l.fireVRDisplayPresentChange_()},re=function(){l.waitingForPresent_&&(l.removeFullscreenWrapper(),l.removeFullscreenListeners_(),l.disableWakeLock(),l.waitingForPresent_=!1,l.isPresenting=!1,v(new Error("Unable to present.")))};l.addFullscreenListeners_(B,q,re),z(B)?(l.enableWakeLock(),l.waitingForPresent_=!0):(u()||p())&&(l.enableWakeLock(),l.isPresenting=!0,l.beginPresent_(),l.fireVRDisplayPresentChange_(),f())}!l.waitingForPresent_&&!u()&&(D(),v(new Error("Unable to present.")))})},ht.prototype.exitPresent=function(){var h=this.isPresenting,d=this;return this.isPresenting=!1,this.layer_=null,this.disableWakeLock(),new Promise(function(l,f){h?(!D()&&u()&&(d.endPresent_(),d.fireVRDisplayPresentChange_()),p()&&(d.removeFullscreenWrapper(),d.removeFullscreenListeners_(),d.endPresent_(),d.fireVRDisplayPresentChange_()),l()):f(new Error("Was not presenting to VRDisplay."))})},ht.prototype.getLayers=function(){return this.layer_?[this.layer_]:[]},ht.prototype.fireVRDisplayPresentChange_=function(){var h=new CustomEvent("vrdisplaypresentchange",{detail:{display:this}});window.dispatchEvent(h)},ht.prototype.fireVRDisplayConnect_=function(){var h=new CustomEvent("vrdisplayconnect",{detail:{display:this}});window.dispatchEvent(h)},ht.prototype.addFullscreenListeners_=function(h,d,l){this.removeFullscreenListeners_(),this.fullscreenEventTarget_=h,this.fullscreenChangeHandler_=d,this.fullscreenErrorHandler_=l,d&&(document.fullscreenEnabled?h.addEventListener("fullscreenchange",d,!1):document.webkitFullscreenEnabled?h.addEventListener("webkitfullscreenchange",d,!1):document.mozFullScreenEnabled?document.addEventListener("mozfullscreenchange",d,!1):document.msFullscreenEnabled&&h.addEventListener("msfullscreenchange",d,!1)),l&&(document.fullscreenEnabled?h.addEventListener("fullscreenerror",l,!1):document.webkitFullscreenEnabled?h.addEventListener("webkitfullscreenerror",l,!1):document.mozFullScreenEnabled?document.addEventListener("mozfullscreenerror",l,!1):document.msFullscreenEnabled&&h.addEventListener("msfullscreenerror",l,!1))},ht.prototype.removeFullscreenListeners_=function(){if(this.fullscreenEventTarget_){var h=this.fullscreenEventTarget_;if(this.fullscreenChangeHandler_){var d=this.fullscreenChangeHandler_;h.removeEventListener("fullscreenchange",d,!1),h.removeEventListener("webkitfullscreenchange",d,!1),document.removeEventListener("mozfullscreenchange",d,!1),h.removeEventListener("msfullscreenchange",d,!1)}if(this.fullscreenErrorHandler_){var l=this.fullscreenErrorHandler_;h.removeEventListener("fullscreenerror",l,!1),h.removeEventListener("webkitfullscreenerror",l,!1),document.removeEventListener("mozfullscreenerror",l,!1),h.removeEventListener("msfullscreenerror",l,!1)}this.fullscreenEventTarget_=null,this.fullscreenChangeHandler_=null,this.fullscreenErrorHandler_=null}},ht.prototype.enableWakeLock=function(){this.wakelock_&&this.wakelock_.enable()},ht.prototype.disableWakeLock=function(){this.wakelock_&&this.wakelock_.disable()},ht.prototype.beginPresent_=function(){},ht.prototype.endPresent_=function(){},ht.prototype.submitFrame=function(h){},ht.prototype.getEyeParameters=function(h){return null};var _s={ADDITIONAL_VIEWERS:[],DEFAULT_VIEWER:"",MOBILE_WAKE_LOCK:!0,DEBUG:!1,DPDB_URL:"https://dpdb.webvr.rocks/dpdb.json",K_FILTER:.98,PREDICTION_TIME_S:.04,CARDBOARD_UI_DISABLED:!1,ROTATE_INSTRUCTIONS_DISABLED:!1,YAW_ONLY:!1,BUFFER_SCALE:.5,DIRTY_SUBMIT_FRAME_BINDINGS:!1},ui={LEFT:"left",RIGHT:"right"};function gt(h){var d=K({},_s);h=K(d,h||{}),ht.call(this,{wakelock:h.MOBILE_WAKE_LOCK}),this.config=h,this.displayName="Cardboard VRDisplay",this.capabilities=new Vi({hasPosition:!1,hasOrientation:!0,hasExternalDisplay:!1,canPresent:!0,maxLayers:1}),this.stageParameters=null,this.bufferScale_=this.config.BUFFER_SCALE,this.poseSensor_=new Ee(this.config),this.distorter_=null,this.cardboardUI_=null,this.dpdb_=new Fe(this.config.DPDB_URL,this.onDeviceParamsUpdated_.bind(this)),this.deviceInfo_=new me(this.dpdb_.getDeviceParams(),h.ADDITIONAL_VIEWERS),this.viewerSelector_=new ft(h.DEFAULT_VIEWER),this.viewerSelector_.onChange(this.onViewerChanged_.bind(this)),this.deviceInfo_.setViewer(this.viewerSelector_.getCurrentViewer()),this.config.ROTATE_INSTRUCTIONS_DISABLED||(this.rotateInstructions_=new Ne),u()&&window.addEventListener("resize",this.onResize_.bind(this))}return gt.prototype=Object.create(ht.prototype),gt.prototype._getPose=function(){return{position:null,orientation:this.poseSensor_.getOrientation(),linearVelocity:null,linearAcceleration:null,angularVelocity:null,angularAcceleration:null}},gt.prototype._resetPose=function(){this.poseSensor_.resetPose&&this.poseSensor_.resetPose()},gt.prototype._getFieldOfView=function(h){var d;if(h==ui.LEFT)d=this.deviceInfo_.getFieldOfViewLeftEye();else if(h==ui.RIGHT)d=this.deviceInfo_.getFieldOfViewRightEye();else return console.error("Invalid eye provided: %s",h),null;return d},gt.prototype._getEyeOffset=function(h){var d;if(h==ui.LEFT)d=[-this.deviceInfo_.viewer.interLensDistance*.5,0,0];else if(h==ui.RIGHT)d=[this.deviceInfo_.viewer.interLensDistance*.5,0,0];else return console.error("Invalid eye provided: %s",h),null;return d},gt.prototype.getEyeParameters=function(h){var d=this._getEyeOffset(h),l=this._getFieldOfView(h),f={offset:d,renderWidth:this.deviceInfo_.device.width*.5*this.bufferScale_,renderHeight:this.deviceInfo_.device.height*this.bufferScale_};return Object.defineProperty(f,"fieldOfView",{enumerable:!0,get:function(){return fe("VRFieldOfView","VRFrameData's projection matrices"),l}}),f},gt.prototype.onDeviceParamsUpdated_=function(h){this.config.DEBUG&&console.log("DPDB reported that device params were updated."),this.deviceInfo_.updateDeviceParams(h),this.distorter_&&this.distorter_.updateDeviceInfo(this.deviceInfo_)},gt.prototype.updateBounds_=function(){this.layer_&&this.distorter_&&(this.layer_.leftBounds||this.layer_.rightBounds)&&this.distorter_.setTextureBounds(this.layer_.leftBounds,this.layer_.rightBounds)},gt.prototype.beginPresent_=function(){var h=this.layer_.source.getContext("webgl");h||(h=this.layer_.source.getContext("experimental-webgl")),h||(h=this.layer_.source.getContext("webgl2")),h&&(this.layer_.predistorted?this.config.CARDBOARD_UI_DISABLED||(h.canvas.width=P()*this.bufferScale_,h.canvas.height=T()*this.bufferScale_,this.cardboardUI_=new Ge(h)):(this.config.CARDBOARD_UI_DISABLED||(this.cardboardUI_=new Ge(h)),this.distorter_=new Z(h,this.cardboardUI_,this.config.BUFFER_SCALE,this.config.DIRTY_SUBMIT_FRAME_BINDINGS),this.distorter_.updateDeviceInfo(this.deviceInfo_)),this.cardboardUI_&&this.cardboardUI_.listen((function(d){this.viewerSelector_.show(this.layer_.source.parentElement),d.stopPropagation(),d.preventDefault()}).bind(this),(function(d){this.exitPresent(),d.stopPropagation(),d.preventDefault()}).bind(this)),this.rotateInstructions_&&(m()&&N()?this.rotateInstructions_.showTemporarily(3e3,this.layer_.source.parentElement):this.rotateInstructions_.update()),this.orientationHandler=this.onOrientationChange_.bind(this),window.addEventListener("orientationchange",this.orientationHandler),this.vrdisplaypresentchangeHandler=this.updateBounds_.bind(this),window.addEventListener("vrdisplaypresentchange",this.vrdisplaypresentchangeHandler),this.fireVRDisplayDeviceParamsChange_())},gt.prototype.endPresent_=function(){this.distorter_&&(this.distorter_.destroy(),this.distorter_=null),this.cardboardUI_&&(this.cardboardUI_.destroy(),this.cardboardUI_=null),this.rotateInstructions_&&this.rotateInstructions_.hide(),this.viewerSelector_.hide(),window.removeEventListener("orientationchange",this.orientationHandler),window.removeEventListener("vrdisplaypresentchange",this.vrdisplaypresentchangeHandler)},gt.prototype.updatePresent_=function(){this.endPresent_(),this.beginPresent_()},gt.prototype.submitFrame=function(h){if(this.distorter_)this.updateBounds_(),this.distorter_.submitFrame();else if(this.cardboardUI_&&this.layer_){var d=this.layer_.source.getContext("webgl");d||(d=this.layer_.source.getContext("experimental-webgl")),d||(d=this.layer_.source.getContext("webgl2"));var l=d.canvas;(l.width!=this.lastWidth||l.height!=this.lastHeight)&&this.cardboardUI_.onResize(),this.lastWidth=l.width,this.lastHeight=l.height,this.cardboardUI_.render()}},gt.prototype.onOrientationChange_=function(h){this.viewerSelector_.hide(),this.rotateInstructions_&&this.rotateInstructions_.update(),this.onResize_()},gt.prototype.onResize_=function(h){if(this.layer_){var d=this.layer_.source.getContext("webgl");d||(d=this.layer_.source.getContext("experimental-webgl")),d||(d=this.layer_.source.getContext("webgl2"));var l=["position: absolute","top: 0","left: 0","width: 100vw","height: 100vh","border: 0","margin: 0","padding: 0px","box-sizing: content-box"];d.canvas.setAttribute("style",l.join("; ")+";"),X(d.canvas)}},gt.prototype.onViewerChanged_=function(h){this.deviceInfo_.setViewer(h),this.distorter_&&this.distorter_.updateDeviceInfo(this.deviceInfo_),this.fireVRDisplayDeviceParamsChange_()},gt.prototype.fireVRDisplayDeviceParamsChange_=function(){var h=new CustomEvent("vrdisplaydeviceparamschange",{detail:{vrdisplay:this,deviceInfo:this.deviceInfo_}});window.dispatchEvent(h)},gt.VRFrameData=Sr,gt.VRDisplay=ht,gt})}),Q0=X0(q0);class Pc extends co{constructor(e){super(),this.global=e,this.onWindowResize=this.onWindowResize.bind(this),this.global.window.addEventListener("resize",this.onWindowResize),this.environmentBlendMode="opaque"}onBaseLayerSet(e,t){throw new Error("Not implemented")}isSessionSupported(e){throw new Error("Not implemented")}isFeatureSupported(e){throw new Error("Not implemented")}async requestSession(e,t){throw new Error("Not implemented")}requestAnimationFrame(e){throw new Error("Not implemented")}onFrameStart(e){throw new Error("Not implemented")}onFrameEnd(e){throw new Error("Not implemented")}doesSessionSupportReferenceSpace(e,t){throw new Error("Not implemented")}requestStageBounds(){throw new Error("Not implemented")}async requestFrameOfReferenceTransform(e,t){}cancelAnimationFrame(e){throw new Error("Not implemented")}endSession(e){throw new Error("Not implemented")}getViewport(e,t,n,r){throw new Error("Not implemented")}getProjectionMatrix(e){throw new Error("Not implemented")}getBasePoseMatrix(){throw new Error("Not implemented")}getBaseViewMatrix(e){throw new Error("Not implemented")}getInputSources(){throw new Error("Not implemented")}getInputPose(e,t,n){throw new Error("Not implemented")}onWindowResize(){this.onWindowResize()}}let j0={mapping:"",profiles:["google-daydream","generic-trigger-touchpad"],buttons:{length:3,0:null,1:null,2:0}},Z0={mapping:"xr-standard",profiles:["htc-vive-focus","generic-trigger-touchpad"],buttons:{length:3,0:1,1:null,2:0}},K0={mapping:"xr-standard",profiles:["oculus-go","generic-trigger-touchpad"],buttons:{length:3,0:1,1:null,2:0},gripTransform:{orientation:[Math.PI*.11,0,0,1]}},Dl={mapping:"xr-standard",displayProfiles:{"Oculus Quest":["oculus-touch-v2","oculus-touch","generic-trigger-squeeze-thumbstick"]},profiles:["oculus-touch","generic-trigger-squeeze-thumbstick"],axes:{length:4,0:null,1:null,2:0,3:1},buttons:{length:7,0:1,1:2,2:null,3:0,4:3,5:4,6:null},gripTransform:{position:[0,-.02,.04,1],orientation:[Math.PI*.11,0,0,1]}},$0={mapping:"xr-standard",profiles:["htc-vive","generic-trigger-squeeze-touchpad"],displayProfiles:{"HTC Vive":["htc-vive","generic-trigger-squeeze-touchpad"],"HTC Vive DVT":["htc-vive","generic-trigger-squeeze-touchpad"],"Valve Index":["valve-index","generic-trigger-squeeze-touchpad-thumbstick"]},buttons:{length:3,0:1,1:2,2:0},gripTransform:{position:[0,0,.05,1]},targetRayTransform:{orientation:[Math.PI*-.08,0,0,1]},userAgentOverrides:{Firefox:{axes:{invert:[1,3]}}}},J0={mapping:"xr-standard",profiles:["samsung-gearvr","generic-trigger-touchpad"],buttons:{length:3,0:1,1:null,2:0},gripTransform:{orientation:[Math.PI*.11,0,0,1]}},e_={mapping:"xr-standard",profiles:["samsung-odyssey","microsoft-mixed-reality","generic-trigger-squeeze-touchpad-thumbstick"],buttons:{length:4,0:1,1:0,2:2,3:4},gripTransform:{position:[0,-.02,.04,1],orientation:[Math.PI*.11,0,0,1]}},na={mapping:"xr-standard",profiles:["microsoft-mixed-reality","generic-trigger-squeeze-touchpad-thumbstick"],buttons:{length:4,0:1,1:0,2:2,3:4},gripTransform:{position:[0,-.02,.04,1],orientation:[Math.PI*.11,0,0,1]}},t_={"Daydream Controller":j0,"Gear VR Controller":J0,"HTC Vive Focus Controller":Z0,"Oculus Go Controller":K0,"Oculus Touch (Right)":Dl,"Oculus Touch (Left)":Dl,"OpenVR Gamepad":$0,"Spatial Controller (Spatial Interaction Source) 045E-065A":na,"Spatial Controller (Spatial Interaction Source) 045E-065D":e_,"Windows Mixed Reality (Right)":na,"Windows Mixed Reality (Left)":na};const Ll=on(.155,-.465,-.15),n_=on(-.155,-.465,-.15),i_=on(0,0,-.25),r_=on(0,0,.05),Il=on(-.08,.14,.08),Fl=.4,s_=.4,a_=.61,o_=.175,l_=.12,c_=.87,Ul=180/Math.PI;function h_(i,e,t){function n(c,u,p){return c<u?u:c>p?p:c}var r=e[0]*e[0],s=e[1]*e[1],a=e[2]*e[2],o=e[3]*e[3];i[0]=Math.asin(n(2*(e[0]*e[3]-e[1]*e[2]),-1,1)),i[1]=Math.atan2(2*(e[0]*e[2]+e[1]*e[3]),o-r-s+a),i[2]=Math.atan2(2*(e[0]*e[1]+e[2]*e[3]),o-r+s-a)}class u_{constructor(){this.hand="right",this.headElbowOffset=Ll,this.controllerQ=tn(),this.lastControllerQ=tn(),this.headQ=tn(),this.headPos=En(),this.elbowPos=En(),this.wristPos=En(),this.time=null,this.lastTime=null,this.rootQ=tn(),this.position=En()}setHandedness(e){this.hand!=e&&(this.hand=e,this.hand=="left"?this.headElbowOffset=n_:this.headElbowOffset=Ll)}update(e,t){this.time=Mc(),e&&(js(this.lastControllerQ,this.controllerQ),js(this.controllerQ,e)),t&&(vc(this.headPos,t),xc(this.headQ,t));let n=this.getHeadYawOrientation_(),r=this.quatAngle_(this.lastControllerQ,this.controllerQ),s=(this.time-this.lastTime)/1e3;r/s>a_?rr(this.rootQ,this.rootQ,n,Math.min(r/o_,1)):js(this.rootQ,n);let o=on(0,0,-1);wi(o,o,this.controllerQ);let c=ho(o,[0,1,0]),u=this.clamp_((c-l_)/c_,0,1),p=yl(this.rootQ);Sl(p,p),Ml(p,p,this.controllerQ);let _=this.elbowPos;xl(_,this.headPos),er(_,_,this.headElbowOffset);let g=vl(Il);El(g,g,u),er(_,_,g);let y=this.quatAngle_(p,tn())*Ul,w=1-Math.pow(y/180,4),A=Fl,m=1-Fl,I=w*(A+m*u*s_),P=tn();rr(P,P,p,I);let T=Sl(tn(),P),z=yl(p);Ml(z,z,T);let D=this.wristPos;xl(D,r_),wi(D,D,P),er(D,D,i_),wi(D,D,z),er(D,D,_);let U=vl(Il);El(U,U,u),er(this.position,this.wristPos,U),wi(this.position,this.position,this.rootQ),this.lastTime=this.time}getPosition(){return this.position}getHeadYawOrientation_(){let e=En();return h_(e,this.headQ),C0(tn(),0,e[1]*Ul,0)}clamp_(e,t,n){return Math.min(Math.max(e,t),n)}quatAngle_(e,t){let n=[0,0,-1],r=[0,0,-1];return wi(n,n,e),wi(r,r,t),v0(n,r)}}const Nt=Symbol("@@webxr-polyfill/XRRemappedGamepad"),Dc={pressed:!1,touched:!1,value:0};Object.freeze(Dc);class d_{constructor(e,t,n){if(n||(n={}),n.userAgentOverrides){for(let u in n.userAgentOverrides)if(navigator.userAgent.includes(u)){let p=n.userAgentOverrides[u];for(let _ in p)_ in n?Object.assign(n[_],p[_]):n[_]=p[_];break}}let r=new Array(n.axes&&n.axes.length?n.axes.length:e.axes.length),s=new Array(n.buttons&&n.buttons.length?n.buttons.length:e.buttons.length),a=null;if(n.gripTransform){let u=n.gripTransform.orientation||[0,0,0,1];a=ai(),cr(a,ls(u,u),n.gripTransform.position||[0,0,0])}let o=null;if(n.targetRayTransform){let u=n.targetRayTransform.orientation||[0,0,0,1];o=ai(),cr(o,ls(u,u),n.targetRayTransform.position||[0,0,0])}let c=n.profiles;n.displayProfiles&&t.displayName in n.displayProfiles&&(c=n.displayProfiles[t.displayName]),this[Nt]={gamepad:e,map:n,profiles:c||[e.id],mapping:n.mapping||e.mapping,axes:r,buttons:s,gripTransform:a,targetRayTransform:o},this._update()}_update(){let e=this[Nt].gamepad,t=this[Nt].map,n=this[Nt].axes;for(let s=0;s<n.length;++s)t.axes&&s in t.axes?t.axes[s]===null?n[s]=0:n[s]=e.axes[t.axes[s]]:n[s]=e.axes[s];if(t.axes&&t.axes.invert)for(let s of t.axes.invert)s<n.length&&(n[s]*=-1);let r=this[Nt].buttons;for(let s=0;s<r.length;++s)t.buttons&&s in t.buttons?t.buttons[s]===null?r[s]=Dc:r[s]=e.buttons[t.buttons[s]]:r[s]=e.buttons[s]}get id(){return""}get _profiles(){return this[Nt].profiles}get index(){return-1}get connected(){return this[Nt].gamepad.connected}get timestamp(){return this[Nt].gamepad.timestamp}get mapping(){return this[Nt].mapping}get axes(){return this[Nt].axes}get buttons(){return this[Nt].buttons}get hapticActuators(){return this[Nt].gamepad.hapticActuators}}class f_{constructor(e,t,n=0,r=-1){this.polyfill=e,this.display=t,this.nativeGamepad=null,this.gamepad=null,this.inputSource=new Cc(this),this.lastPosition=En(),this.emulatedPosition=!1,this.basePoseMatrix=ai(),this.outputMatrix=ai(),this.primaryButtonIndex=n,this.primaryActionPressed=!1,this.primarySqueezeButtonIndex=r,this.primarySqueezeActionPressed=!1,this.handedness="",this.targetRayMode="gaze",this.armModel=null}get profiles(){return this.gamepad?this.gamepad._profiles:[]}updateFromGamepad(e){this.nativeGamepad!==e&&(this.nativeGamepad=e,e?this.gamepad=new d_(e,this.display,t_[e.id]):this.gamepad=null),this.handedness=e.hand===""?"none":e.hand,this.gamepad&&this.gamepad._update(),e.pose?(this.targetRayMode="tracked-pointer",this.emulatedPosition=!e.pose.hasPosition):e.hand===""&&(this.targetRayMode="gaze",this.emulatedPosition=!1)}updateBasePoseMatrix(){if(this.nativeGamepad&&this.nativeGamepad.pose){let e=this.nativeGamepad.pose,t=e.position,n=e.orientation;if(!t&&!n)return;t?(this.lastPosition[0]=t[0],this.lastPosition[1]=t[1],this.lastPosition[2]=t[2]):e.hasPosition?t=this.lastPosition:(this.armModel||(this.armModel=new u_),this.armModel.setHandedness(this.nativeGamepad.hand),this.armModel.update(n,this.polyfill.getBasePoseMatrix()),t=this.armModel.getPosition()),cr(this.basePoseMatrix,n,t)}else g0(this.basePoseMatrix,this.polyfill.getBasePoseMatrix());return this.basePoseMatrix}getXRPose(e,t){switch(this.updateBasePoseMatrix(),t){case"target-ray":e._transformBasePoseMatrix(this.outputMatrix,this.basePoseMatrix),this.gamepad&&this.gamepad[Nt].targetRayTransform&&Ii(this.outputMatrix,this.outputMatrix,this.gamepad[Nt].targetRayTransform);break;case"grip":if(!this.nativeGamepad||!this.nativeGamepad.pose)return null;e._transformBasePoseMatrix(this.outputMatrix,this.basePoseMatrix),this.gamepad&&this.gamepad[Nt].gripTransform&&Ii(this.outputMatrix,this.outputMatrix,this.gamepad[Nt].gripTransform);break;default:return null}return e._adjustForOriginOffset(this.outputMatrix),new XRPose(new XRRigidTransform(this.outputMatrix),this.emulatedPosition)}}const Nl={highRefreshRate:!0},Ol={oculus:1,openvr:1,"spatial controller (spatial interaction source)":1};let p_=0;class m_{constructor(e,t,n={}){if(this.mode=e,this.enabledFeatures=t,this.outputContext=null,this.immersive=e=="immersive-vr"||e=="immersive-ar",this.ended=null,this.baseLayer=null,this.id=++p_,this.modifiedCanvasLayer=!1,this.outputContext){const r=n.renderContextType||"2d";this.renderContext=this.outputContext.canvas.getContext(r)}}}class Lc extends Pc{constructor(e,t){const{canPresent:n}=t.capabilities;super(e),this.display=t,this.frame=new e.VRFrameData,this.sessions=new Map,this.immersiveSession=null,this.canPresent=n,this.baseModelMatrix=ai(),this.gamepadInputSources={},this.tempVec3=new Float32Array(3),this.onVRDisplayPresentChange=this.onVRDisplayPresentChange.bind(this),e.window.addEventListener("vrdisplaypresentchange",this.onVRDisplayPresentChange),this.CAN_USE_GAMEPAD=e.navigator&&"getGamepads"in e.navigator,this.HAS_BITMAP_SUPPORT=k0(e)}get depthNear(){return this.display.depthNear}set depthNear(e){this.display.depthNear=e}get depthFar(){return this.display.depthFar}set depthFar(e){this.display.depthFar=e}onBaseLayerSet(e,t){const n=this.sessions.get(e),r=t.context.canvas;if(n.immersive){const s=this.display.getEyeParameters("left"),a=this.display.getEyeParameters("right");r.width=Math.max(s.renderWidth,a.renderWidth)*2,r.height=Math.max(s.renderHeight,a.renderHeight),this.display.requestPresent([{source:r,attributes:Nl}]).then(()=>{this.global.document.body.contains(r)||(n.modifiedCanvasLayer=!0,this.global.document.body.appendChild(r),W0(r)),n.baseLayer=t})}else n.baseLayer=t}isSessionSupported(e){return!(e=="immersive-ar"||e=="immersive-vr"&&this.canPresent===!1)}isFeatureSupported(e){switch(e){case"viewer":return!0;case"local":return!0;case"local-floor":return!0;case"bounded":return!1;case"unbounded":return!1;default:return!1}}async requestSession(e,t){if(!this.isSessionSupported(e))return Promise.reject();let n=e=="immersive-vr";if(n){const s=this.global.document.createElement("canvas");s.getContext("webgl"),await this.display.requestPresent([{source:s,attributes:Nl}])}const r=new m_(e,t,{renderContextType:this.HAS_BITMAP_SUPPORT?"bitmaprenderer":"2d"});return this.sessions.set(r.id,r),n&&(this.immersiveSession=r,this.dispatchEvent("@@webxr-polyfill/vr-present-start",r.id)),Promise.resolve(r.id)}requestAnimationFrame(e){return this.display.requestAnimationFrame(e)}getPrimaryButtonIndex(e){let t=0,n=e.id.toLowerCase();for(let r in Ol)if(n.includes(r)){t=Ol[r];break}return Math.min(t,e.buttons.length-1)}onFrameStart(e,t){this.display.depthNear=t.depthNear,this.display.depthFar=t.depthFar,this.display.getFrameData(this.frame);const n=this.sessions.get(e);if(n.immersive&&this.CAN_USE_GAMEPAD){let r=this.gamepadInputSources;this.gamepadInputSources={};let s=this.global.navigator.getGamepads();for(let a=0;a<s.length;++a){let o=s[a];if(o&&o.displayId>0){let c=r[a];if(c||(c=new f_(this,this.display,this.getPrimaryButtonIndex(o))),c.updateFromGamepad(o),this.gamepadInputSources[a]=c,c.primaryButtonIndex!=-1){let u=o.buttons[c.primaryButtonIndex].pressed;u&&!c.primaryActionPressed?this.dispatchEvent("@@webxr-polyfill/input-select-start",{sessionId:n.id,inputSource:c.inputSource}):!u&&c.primaryActionPressed&&this.dispatchEvent("@@webxr-polyfill/input-select-end",{sessionId:n.id,inputSource:c.inputSource}),c.primaryActionPressed=u}if(c.primarySqueezeButtonIndex!=-1){let u=o.buttons[c.primarySqueezeButtonIndex].pressed;u&&!c.primarySqueezeActionPressed?this.dispatchEvent("@@webxr-polyfill/input-squeeze-start",{sessionId:n.id,inputSource:c.inputSource}):!u&&c.primarySqueezeActionPressed&&this.dispatchEvent("@@webxr-polyfill/input-squeeze-end",{sessionId:n.id,inputSource:c.inputSource}),c.primarySqueezeActionPressed=u}}}}if(!n.immersive&&n.baseLayer){const r=n.baseLayer.context.canvas;Ec(this.frame.leftProjectionMatrix,t.inlineVerticalFieldOfView,r.width/r.height,t.depthNear,t.depthFar)}}onFrameEnd(e){const t=this.sessions.get(e);if(!(t.ended||!t.baseLayer)){if(t.outputContext&&!(t.immersive&&!this.display.capabilities.hasExternalDisplay)){const n=t.immersive&&this.display.capabilities.hasExternalDisplay,r=t.baseLayer.context.canvas,s=n?r.width/2:r.width,a=r.height;{const o=t.outputContext.canvas,c=o.width,u=o.height,p=t.renderContext;this.HAS_BITMAP_SUPPORT?r.transferToImageBitmap?p.transferFromImageBitmap(r.transferToImageBitmap()):this.global.createImageBitmap(r,0,0,s,a,{resizeWidth:c,resizeHeight:u}).then(_=>p.transferFromImageBitmap(_)):p.drawImage(r,0,0,s,a,0,0,c,u)}}t.immersive&&t.baseLayer&&this.display.submitFrame()}}cancelAnimationFrame(e){this.display.cancelAnimationFrame(e)}async endSession(e){const t=this.sessions.get(e);if(!t.ended){if(t.immersive)return this.display.exitPresent();t.ended=!0}}doesSessionSupportReferenceSpace(e,t){const n=this.sessions.get(e);return n.ended?!1:n.enabledFeatures.has(t)}requestStageBounds(){if(this.display.stageParameters){const e=this.display.stageParameters.sizeX,t=this.display.stageParameters.sizeZ,n=[];return n.push(-e/2),n.push(-t/2),n.push(e/2),n.push(-t/2),n.push(e/2),n.push(t/2),n.push(-e/2),n.push(t/2),n}return null}async requestFrameOfReferenceTransform(e,t){return(e==="local-floor"||e==="bounded-floor")&&this.display.stageParameters&&this.display.stageParameters.sittingToStandingTransform?this.display.stageParameters.sittingToStandingTransform:null}getProjectionMatrix(e){if(e==="left")return this.frame.leftProjectionMatrix;if(e==="right")return this.frame.rightProjectionMatrix;if(e==="none")return this.frame.leftProjectionMatrix;throw new Error("eye must be of type 'left' or 'right'")}getViewport(e,t,n,r){const s=this.sessions.get(e),{width:a,height:o}=n.context.canvas;if(!s.immersive)return r.x=r.y=0,r.width=a,r.height=o,!0;if(t==="left"||t==="none")r.x=0;else if(t==="right")r.x=a/2;else return!1;return r.y=0,r.width=a/2,r.height=o,!0}getBasePoseMatrix(){let{position:e,orientation:t}=this.frame.pose;return!e&&!t?this.baseModelMatrix:(e||(e=this.tempVec3,e[0]=e[1]=e[2]=0),cr(this.baseModelMatrix,t,e),this.baseModelMatrix)}getBaseViewMatrix(e){if(e==="left"||e==="none")return this.frame.leftViewMatrix;if(e==="right")return this.frame.rightViewMatrix;throw new Error("eye must be of type 'left' or 'right'")}getInputSources(){let e=[];for(let t in this.gamepadInputSources)e.push(this.gamepadInputSources[t].inputSource);return e}getInputPose(e,t,n){if(!t)return null;for(let r in this.gamepadInputSources){let s=this.gamepadInputSources[r];if(s.inputSource===e)return s.getXRPose(t,n)}return null}onWindowResize(){}onVRDisplayPresentChange(e){this.display.isPresenting||this.sessions.forEach(t=>{if(t.immersive&&!t.ended){if(t.modifiedCanvasLayer){const n=t.baseLayer.context.canvas;document.body.removeChild(n),n.setAttribute("style","")}this.immersiveSession===t&&(this.immersiveSession=null),this.dispatchEvent("@@webxr-polyfill/vr-present-end",t.id)}})}}class __ extends Lc{constructor(e,t){const n=new Q0(t||{});super(e,n),this.display=n,this.frame={rightViewMatrix:new Float32Array(16),leftViewMatrix:new Float32Array(16),rightProjectionMatrix:new Float32Array(16),leftProjectionMatrix:new Float32Array(16),pose:null,timestamp:null}}}let g_=0;class A_{constructor(e,t){this.mode=e,this.enabledFeatures=t,this.ended=null,this.baseLayer=null,this.id=++g_}}class v_ extends Pc{constructor(e){super(e),this.sessions=new Map,this.projectionMatrix=ai(),this.identityMatrix=ai()}onBaseLayerSet(e,t){const n=this.sessions.get(e);n.baseLayer=t}isSessionSupported(e){return e=="inline"}isFeatureSupported(e){switch(e){case"viewer":return!0;default:return!1}}async requestSession(e,t){if(!this.isSessionSupported(e))return Promise.reject();const n=new A_(e,t);return this.sessions.set(n.id,n),Promise.resolve(n.id)}requestAnimationFrame(e){return window.requestAnimationFrame(e)}cancelAnimationFrame(e){window.cancelAnimationFrame(e)}onFrameStart(e,t){const n=this.sessions.get(e);if(n.baseLayer){const r=n.baseLayer.context.canvas;Ec(this.projectionMatrix,t.inlineVerticalFieldOfView,r.width/r.height,t.depthNear,t.depthFar)}}onFrameEnd(e){}async endSession(e){const t=this.sessions.get(e);t.ended=!0}doesSessionSupportReferenceSpace(e,t){const n=this.sessions.get(e);return n.ended?!1:n.enabledFeatures.has(t)}requestStageBounds(){return null}async requestFrameOfReferenceTransform(e,t){return null}getProjectionMatrix(e){return this.projectionMatrix}getViewport(e,t,n,r){this.sessions.get(e);const{width:s,height:a}=n.context.canvas;return r.x=r.y=0,r.width=s,r.height=a,!0}getBasePoseMatrix(){return this.identityMatrix}getBaseViewMatrix(e){return this.identityMatrix}getInputSources(){return[]}getInputPose(e,t,n){return null}onWindowResize(){}}const x_=async function(i){let e=null;if("getVRDisplays"in i.navigator)try{const t=await i.navigator.getVRDisplays();t&&t.length&&(e=new Lc(i,t[0]))}catch{}return e},E_=async function(i,e){if(e.webvr){let n=await x_(i);if(n)return n}let t=H0(i);return t&&e.cardboard||!t&&e.allowCardboardOnDesktop?(i.VRFrameData||(i.VRFrameData=function(){this.rightViewMatrix=new Float32Array(16),this.leftViewMatrix=new Float32Array(16),this.rightProjectionMatrix=new Float32Array(16),this.leftProjectionMatrix=new Float32Array(16),this.pose=null}),new __(i,e.cardboardConfig)):new v_(i)},M_={global:Ac,webvr:!0,cardboard:!0,cardboardConfig:null,allowCardboardOnDesktop:!1},jr=["navigator","HTMLCanvasElement","WebGLRenderingContext"];class Bl{constructor(e={}){this.config=Object.freeze(Object.assign({},M_,e)),this.global=this.config.global,this.nativeWebXR="xr"in this.global.navigator,this.injected=!1,this.nativeWebXR?this._injectCompatibilityShims(this.global):this._injectPolyfill(this.global)}_injectPolyfill(e){if(!jr.every(t=>!!e[t]))throw new Error(`Global must have the following attributes : ${jr}`);for(const t of Object.keys(ea))e[t]!==void 0?console.warn(`${t} already defined on global.`):e[t]=ea[t];Cl(e.WebGLRenderingContext)&&(Pl(e.HTMLCanvasElement),e.OffscreenCanvas&&Pl(e.OffscreenCanvas),e.WebGL2RenderingContext&&Cl(e.WebGL2RenderingContext),window.isSecureContext||console.warn(`WebXR Polyfill Warning:
This page is not running in a secure context (https:// or localhost)!
This means that although the page may be able to use the WebXR Polyfill it will
not be able to use native WebXR implementations, and as such will not be able to
access dedicated VR or AR hardware, and will not be able to take advantage of
any performance improvements a native WebXR implementation may offer. Please
host this content on a secure origin for the best user experience.
`)),this.injected=!0,this._patchNavigatorXR()}_patchNavigatorXR(){let e=E_(this.global,this.config);this.xr=new ea.XRSystem(e),Object.defineProperty(this.global.navigator,"xr",{value:this.xr,configurable:!0})}_injectCompatibilityShims(e){if(!jr.every(t=>!!e[t]))throw new Error(`Global must have the following attributes : ${jr}`);if(e.navigator.xr&&"supportsSession"in e.navigator.xr&&!("isSessionSupported"in e.navigator.xr)){let t=e.navigator.xr.supportsSession;e.navigator.xr.isSessionSupported=function(n){return t.call(this,n).then(()=>!0).catch(()=>!1)},e.navigator.xr.supportsSession=function(n){return console.warn("navigator.xr.supportsSession() is deprecated. Please call navigator.xr.isSessionSupported() instead and check the boolean value returned when the promise resolves."),t.call(this,n)}}}}const S_={setup(){const i=Hn(null),e=new su,t=new Zt(75,window.innerWidth/window.innerHeight,.1,1e3),n=new t0({antialias:!0});let r=null,s=null,a=new _u,o=new ke,c=!1,u=null,p=null,_=!1;const g=Hn(!1),x=Hn(!1),y=Hn(null),w=Hn(null),A=Hn([{name:"Anger",icon:"🔥",color:"#ff4757",secondaryColor:"#ff6b81",intensity:8,density:.9,sound:"sharp_crash"},{name:"Calm",icon:"🌊",color:"#70a1ff",secondaryColor:"#7bed9f",intensity:3,density:.3,sound:"water_drop"},{name:"Joy",icon:"✨",color:"#fffa65",secondaryColor:"#ff7f50",intensity:5,density:.5,sound:"bell_chime"},{name:"Sadness",icon:"🌧️",color:"#57606f",secondaryColor:"#a4b0be",intensity:7,density:.7,sound:"distant_thunder"},{name:"Anxiety",icon:"🌀",color:"#eccc68",secondaryColor:"#ff6348",intensity:6,density:.6,sound:"wind_howling"}]),m=Hn([{name:"Sculpt",icon:"fas fa-hand-paper",action:"add"},{name:"Smooth",icon:"fas fa-brush",action:"smooth"},{name:"Pinch",icon:"fas fa-hand-pointer",action:"pinch"},{name:"Flatten",icon:"fas fa-vector-square",action:"flatten"},{name:"Inflate",icon:"fas fa-expand",action:"inflate"}]);Gc(()=>{P(),T(),oe(),I(),y.value=m.value[0],w.value=A.value[0]}),Vc(()=>{window.removeEventListener("resize",$),n.xr.isPresenting&&n.xr.getSession().end()});const I=()=>{"xr"in navigator?navigator.xr.isSessionSupported("immersive-vr").then(ie=>{x.value=ie,ie||(console.warn("WebXR VR not supported, using polyfill"),new Bl)}):(console.warn("WebXR not available, using polyfill"),new Bl)},P=()=>{n.setSize(i.value.clientWidth,i.value.clientHeight),n.setClearColor(16316922),n.xr.enabled=!0,i.value.appendChild(n.domElement),t.position.z=5;const ie=new fu(16777215,1);ie.position.set(1,1,1),e.add(ie);const pe=new pu(4210752);e.add(pe),r=new i0(t,n.domElement),r.enableDamping=!0,n.setAnimationLoop(C)},T=()=>{const ie=new(void 0)(1,64,64),pe=new Float32Array(ie.attributes.position.count);for(let Xe=0;Xe<pe.length;Xe++)pe[Xe]=Math.random()*.1;ie.setAttribute("displacement",new an(pe,1));const Oe=new lu({color:16729943,roughness:.7,metalness:.1,flatShading:!1});s=new hn(ie,Oe),e.add(s)},z=()=>{u=n.xr.getController(0),u.addEventListener("selectstart",D),u.addEventListener("selectend",U),u.addEventListener("squeezestart",D),u.addEventListener("squeezeend",U),e.add(u),p=n.xr.getController(1),p.addEventListener("selectstart",D),p.addEventListener("selectend",U),e.add(p)},D=()=>{_=!0;const ie=k(u);ie.length>0&&b(ie[0].point,y.value.action)},U=()=>{_=!1},k=ie=>{const pe=new pt;return pe.identity().extractRotation(ie.matrixWorld),a.ray.origin.setFromMatrixPosition(ie.matrixWorld),a.ray.direction.set(0,0,-1).applyMatrix4(pe),a.intersectObject(s)},C=(ie,pe)=>{if(n.xr.isPresenting){if(_&&u){const Oe=k(u);Oe.length>0&&b(Oe[0].point,y.value.action)}}else r.update();n.render(e,t)},b=(ie,pe)=>{const Oe=s.geometry,Xe=Oe.attributes.position,Z=Xe.array.slice(),le=new W;for(let be=0;be<Xe.count;be++){const ue=be*3;le.set(Z[ue],Z[ue+1],Z[ue+2]);const Le=le.distanceTo(ie);if(Le<.5){const He=(.5-Le)*2*(w.value.intensity/5),Ie=new W().subVectors(le,ie).normalize();switch(pe){case"add":le.add(Ie.multiplyScalar(.1*He));break;case"smooth":le.lerp(ie,.05*He);break;case"pinch":le.add(Ie.multiplyScalar(-.15*He));break;case"flatten":le.y=ie.y*(1-He)+le.y*He;break;case"inflate":le.add(Ie.multiplyScalar(-.2*He));break}Xe.array[ue]=le.x,Xe.array[ue+1]=le.y,Xe.array[ue+2]=le.z}}Xe.needsUpdate=!0,Oe.computeVertexNormals()},N=ie=>{c=!0,Y(ie)},K=ie=>{c&&Y(ie)},X=()=>{c=!1},Y=ie=>{o.x=ie.clientX/n.domElement.clientWidth*2-1,o.y=-(ie.clientY/n.domElement.clientHeight)*2+1,a.setFromCamera(o,t);const pe=a.intersectObject(s);pe.length>0&&b(pe[0].point,y.value.action)},oe=()=>{window.addEventListener("resize",$),n.domElement.addEventListener("mousedown",N),n.domElement.addEventListener("mousemove",K),n.domElement.addEventListener("mouseup",X),n.domElement.addEventListener("mouseleave",X)},$=()=>{t.aspect=i.value.clientWidth/i.value.clientHeight,t.updateProjectionMatrix(),n.setSize(i.value.clientWidth,i.value.clientHeight)};return{canvasContainer:i,vrMode:g,isWebXRAvailable:x,enhancedEmotions:A,tools:m,currentTool:y,selectedEmotion:w,toggleVR:async()=>{if(n.xr.enabled){const ie=n.xr.getSession();ie&&await ie.end(),n.xr.enabled=!1,g.value=!1,r.enabled=!0,t.position.set(0,0,5)}else try{n.xr.enabled=!0,z();const ie={optionalFeatures:["local-floor","hand-tracking"]},pe=await navigator.xr.requestSession("immersive-vr",ie);await n.xr.setSession(pe),g.value=!0,r.enabled=!1,t.position.set(0,1.6,3)}catch(ie){console.error("Error entering VR:",ie),n.xr.enabled=!1,g.value=!1}},selectEmotion:ie=>{w.value=ie,s.material.color.set(ie.color),navigator.vibrate&&navigator.vibrate([50,100,50])},selectTool:ie=>{y.value=ie}}}},y_={class:"emotion-sculptor"},b_={class:"vr-toggle"},w_=["disabled"],T_={key:0,class:"tooltip"},R_={key:0,class:"desktop-interface"},C_={ref:"canvasContainer",class:"canvas-container"},P_={class:"controls"},D_={class:"emotion-palette"},L_=["onClick"],I_={class:"emotion-icon"},F_={class:"emotion-name"},U_={class:"emotion-intensity"},N_=["onUpdate:modelValue"],O_={class:"tool-palette"},B_=["onClick"],z_={key:1,class:"vr-interface"},G_={class:"vr-notice"};function V_(i,e,t,n,r,s){return Tn(),wn("div",y_,[It("div",b_,[It("button",{onClick:e[0]||(e[0]=(...a)=>n.toggleVR&&n.toggleVR(...a)),disabled:!n.isWebXRAvailable},[Fc(yr(n.vrMode?"Exit VR":"Enter VR")+" ",1),e[3]||(e[3]=It("i",{class:"fas fa-vr-cardboard"},null,-1)),n.isWebXRAvailable?Uc("",!0):(Tn(),wn("span",T_,"WebXR not available in your browser"))],8,w_)]),n.vrMode?(Tn(),wn("div",z_,[It("div",G_,[e[4]||(e[4]=It("p",null,"Put on your VR headset and use motion controllers to sculpt",-1)),It("button",{onClick:e[2]||(e[2]=(...a)=>n.toggleVR&&n.toggleVR(...a))},"Exit VR")])])):(Tn(),wn("div",R_,[It("div",C_,null,512),It("div",P_,[It("div",D_,[(Tn(!0),wn(po,null,mo(n.enhancedEmotions,a=>{var o;return Tn(),wn("div",{key:a.name,class:"emotion-card",onClick:c=>n.selectEmotion(a),style:Nc({background:`linear-gradient(135deg, ${a.color} 0%, ${a.secondaryColor} 100%)`,transform:((o=n.selectedEmotion)==null?void 0:o.name)===a.name?"scale(1.05)":"scale(1)"})},[It("div",I_,yr(a.icon),1),It("div",F_,yr(a.name),1),It("div",U_,[Oc(It("input",{type:"range","onUpdate:modelValue":c=>a.intensity=c,min:"1",max:"10",onClick:e[1]||(e[1]=zc(()=>{},["stop"]))},null,8,N_),[[Bc,a.intensity]])])],12,L_)}),128))]),It("div",O_,[(Tn(!0),wn(po,null,mo(n.tools,a=>{var o;return Tn(),wn("button",{key:a.name,onClick:c=>n.selectTool(a),class:_o({active:((o=n.currentTool)==null?void 0:o.name)===a.name})},[It("i",{class:_o(a.icon)},null,2),It("span",null,yr(a.name),1)],10,B_)}),128))])])]))])}const W_=Ic(S_,[["render",V_],["__scopeId","data-v-f2cb69d2"]]);export{W_ as default};
