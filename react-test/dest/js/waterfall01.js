define(["require","exports","module","react","jquery"],function(e,t,n){var r=e("react"),i=e("jquery"),s=r.createClass({displayName:"Item",render:function(){return r.createElement("div",{className:"waterfall-item"},this.props.pics.map(function(e){return r.createElement("img",{src:e})}),r.createElement("p",null,this.props.content))}}),o=r.createClass({displayName:"List",render:function(){return r.createElement("div",{className:"waterfall-list",style:{width:this.props.width}},this.props.items.map(function(e){return r.createElement(s,r.__spread({},e))}))}}),u=r.createClass({displayName:"Waterfall",getInitialState:function(){return{width:0}},componentDidMount:function(){this.reflow(this.props.itemLength)},reflow:function(e){var t=i(this.refs.waterfall.getDOMNode()),n=t.width(),r=n/e;this.setState({width:r})},componentWillReceiveProps:function(e){e.itemLength!==this.props.itemLength&&this.reflow(e.itemLength)},assign:function(){var e=[],t=this.props.itemLength,n=this.props.dataList;for(var r=0,i=n.length;r<i;r+=1){var s=e[r%t]=e[r%t]||[];s.push(n[r])}return e},render:function(){return r.createElement("div",{className:"waterfall",ref:"waterfall"},this.assign().map(function(e){return r.createElement(o,{width:this.state.width,items:e})}.bind(this)))}}),a={page:2,onAjax:!1,lastMid:"",$loading:i("<div>加载中……</div>"),$end:i("<div>加载完毕</di>"),getData:function(){if(this.onAjax)return;i("#container").append(this.$loading),this.onAjax=!0,i.ajax({url:"http://photo.weibo.com/page/waterfall",type:"get",dataType:"jsonp",data:{ajwvr:6,filter:"wbphoto|||v6",page:this.page++,count:20,module_id:"profile_photo",oid:0x39216efd9df4d,uid:"",lastMid:this.lastMid,lang:"zh-cn",_t:1},success:function(e){this.$loading.remove();var t=e.data;this.lastMid=t.lastMid,+t.page===+t.pagesize&&(i("#container").append(this.$end),i(window).off("scroll")),this.onAjax=!1;var n=this.convertData(t.html.join(""));this.dataList=this.dataList.concat(n),this.render()}.bind(this),error:function(){i("body").html("error")}})},convertData:function(e){var t=i("<div/>").html(e),n=[];return t.find(".WB_cardwrap").each(function(){var e=i(this),t=[];e.find(".photoArea img.photo_pic").each(function(){t.push(this.src)}),n.push({pics:t,content:e.find(".box_plus .describe span").attr("title")})}),n},render:function(){var e=+(location.hash.match(/list\=\d+/)||[""])[0].replace("list=","");r.render(r.createElement(u,{itemLength:e||2,dataList:this.dataList}),document.getElementById("container"))},dataList:[],nearBottom:function(){return this.getData(),this},onScroll:function(){return i(window).on("scroll",function(){setTimeout(function(){var e=i(window),t=e.scrollTop(),n=e.height(),r=i(document).height(),s=t+n-r;Math.abs(s)<=50&&this.nearBottom()}.bind(this),0)}.bind(this)),this},init:function(){this.nearBottom().onScroll(),i(window).on("hashchange",this.render.bind(this))}};n.exports=a});