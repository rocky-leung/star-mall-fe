webpackJsonp([7],{0:function(e,r,t){e.exports=t(80)},2:function(e,r,t){"use strict";var s=t(1),c={login:function(e,r,t){s.request({url:s.getServerUrl("/user/login"),data:e,method:"POST",success:r,error:t})},checkUsername:function(e,r,t){s.request({url:s.getServerUrl("/user/checkValid"),data:{type:"username",str:e},method:"POST",success:r,error:t})},register:function(e,r,t){s.request({url:s.getServerUrl("/user/register"),data:e,method:"POST",success:r,error:t})},checkLogin:function(e,r){s.request({url:s.getServerUrl("/user/get_user_info"),method:"POST",success:e,error:r})},getQuestion:function(e,r,t){s.request({url:s.getServerUrl("/user/forget_get_question"),data:{username:e},method:"POST",success:r,error:t})},checkAnswer:function(e,r,t){s.request({url:s.getServerUrl("/user/forget_check_answer"),data:e,method:"POST",success:r,error:t})},resetPassword:function(e,r,t){s.request({url:s.getServerUrl("/user/forget_reset_password"),data:e,method:"POST",success:r,error:t})},getUserInfo:function(e,r){s.request({url:s.getServerUrl("/user/get_information"),method:"POST",success:e,error:r})},updateUserInfo:function(e,r,t){s.request({url:s.getServerUrl("/user/update_information"),data:e,method:"POST",success:r,error:t})},updatePassword:function(e,r,t){s.request({url:s.getServerUrl("/user/reset_password"),data:e,method:"POST",success:r,error:t})},logout:function(e,r){s.request({url:s.getServerUrl("/user/logout"),method:"POST",success:e,error:r})}};e.exports=c},3:function(e,r,t){"use strict";var s=t(1),c={getCartCount:function(e,r){s.request({url:s.getServerUrl("/cart/get_cart_product_count"),success:e,error:r})},addToCart:function(e,r,t){s.request({url:s.getServerUrl("/cart/add"),data:e,success:r,error:t})},getCartList:function(e,r){s.request({url:s.getServerUrl("/cart/list"),success:e,error:r})},selectProduct:function(e,r,t){s.request({url:s.getServerUrl("/cart/select"),data:{productId:e},success:r,error:t})},unselectProduct:function(e,r,t){s.request({url:s.getServerUrl("/cart/un_select"),data:{productId:e},success:r,error:t})},selectAllProduct:function(e,r){s.request({url:s.getServerUrl("/cart/select_all"),success:e,error:r})},unselectAllProduct:function(e,r){s.request({url:s.getServerUrl("/cart/un_select_all"),success:e,error:r})},updateProduct:function(e,r,t){s.request({url:s.getServerUrl("/cart/update"),data:e,success:r,error:t})},deleteProduct:function(e,r,t){s.request({url:s.getServerUrl("/cart/deleteProduct"),data:{productIds:e},success:r,error:t})}};e.exports=c},4:function(e,r,t){"use strict";var s=t(1),c={getUserLevel:function(e,r){s.request({url:s.getServerUrl("/level/get_user_level"),success:e,error:r})}};e.exports=c},5:function(e,r){},6:function(e,r){},7:function(e,r,t){"use strict";t(5);var s=t(1),c={init:function(){this.onLoad(),this.bindEvent()},onLoad:function(){var e=s.getUrlParam("keyword");e&&$("#search-input").val(e)},bindEvent:function(){var e=this;$("#search-btn").click(function(){e.searchSubmit()}),$("#search-input").keyup(function(r){13===r.keyCode&&e.searchSubmit()})},searchSubmit:function(){var e=$.trim($("#search-input").val());e?window.location.href="./list.html?keyword="+e:s.goHome()}};c.init()},8:function(e,r,t){"use strict";t(6);var s=t(1),c=t(2),n=t(4),o=t(3),i={init:function(){return this.bindEvent(),this.loadUserInfo(),this.loadCartCount(),this},bindEvent:function(){$(".js-login").click(function(){window.location.href="./user-login.html?redirect="+encodeURIComponent(window.location.href)}),$(".js-register").click(function(){window.location.href="./user-register.html"}),$(".js-logout").click(function(){c.logout(function(e){window.location.reload()},function(e){s.errorTips(e)})})},loadUserInfo:function(){c.checkLogin(function(e){n.getUserLevel(function(e){$(".user-level").text(e)},function(e){}),$(".user.not-login").hide().siblings(".user.login").show().find(".username").text(e.username)},function(e){})},loadCartCount:function(){o.getCartCount(function(e){$(".nav .cart-count").text(e||0)},function(e){$(".nav .cart-count").text(0)})}};e.exports=i.init()},9:function(e,r){},10:function(e,r){e.exports='{{#navList}} {{#isActive}} <li class="nav-item active"> {{/isActive}} {{^isActive}} </li><li class="nav-item"> {{/isActive}} <a class="link" href="{{href}}">{{desc}}</a> </li> {{/navList}} '},11:function(e,r,t){"use strict";t(9);var s=t(1),c=t(10),n={option:{name:"",navList:[{name:"user-center",desc:"个人中心",href:"./user-center.html"},{name:"order-list",desc:"我的订单",href:"./order-list.html"},{name:"user-pass-update",desc:"修改密码",href:"./user-pass-update.html"},{name:"customer-service",desc:"售后管理",href:"./customer-service.html"},{name:"about",desc:"关于麦乐",href:"./about.html"}]},init:function(e){$.extend(this.option,e),this.renderNav()},renderNav:function(){for(var e=0,r=this.option.navList.length;e<r;e++)this.option.navList[e].name===this.option.name&&(this.option.navList[e].isActive=!0);var t=s.renderHtml(c,{navList:this.option.navList});$(".nav-side").html(t)}};e.exports=n},16:function(e,r,t){"use strict";var s=t(1),c={getProductList:function(e,r){s.request({url:s.getServerUrl("/order/get_order_cart_product"),success:e,error:r})},createOrder:function(e,r,t){s.request({url:s.getServerUrl("/order/create"),data:e,success:r,error:t})},getOrderList:function(e,r,t){s.request({url:s.getServerUrl("/order/list"),data:e,success:r,error:t})},getOrderDetail:function(e,r,t){s.request({url:s.getServerUrl("/order/detail"),data:{orderNo:e},success:r,error:t})},cancelOrder:function(e,r,t){s.request({url:s.getServerUrl("/order/cancel"),data:{orderNo:e},success:r,error:t})},orderSuccess:function(e,r,t){s.request({url:s.getServerUrl("/order/order_success"),data:{orderNo:e},success:r,error:t})}};e.exports=c},35:function(e,r){},57:function(e,r){e.exports='<div class="panel"> <div class="panel-title">订单信息</div> <div class="panel-body"> <div class="order-info"> <div class="text-link"> <span class="text">订单号：{{orderNo}}</span> <span class="text">创建时间：{{createTime}}</span> </div> <div class="text-link"> <span class="text"> 收件人： {{receiverName}} {{shippingVo.receiverProvince}} {{shippingVo.receiverCity}} {{shippingVo.receiverAddress}} {{shippingVo.receiverMobile}} </span> </div> <div class="text-link"> <span class="text">订单状态：{{statusDesc}}</span> </div> <div class="text-link"> <span class="text">支付方式：{{paymentTypeDesc}}</span> </div> <div class="text-link"> {{#needPay}} <a class="btn" href="./payment.html?orderNumber={{orderNo}}">去支付</a> {{/needPay}} {{#isCancelable}} <a class="btn order-cancel">取消订单</a> {{/isCancelable}} {{#isShipped}} <a class="btn order-success">确认收货</a> {{/isShipped}} {{#orderService}} <a class="btn order-service" href="./customer-service-form.html?orderNumber={{orderNo}}">申请售后</a> {{/orderService}} {{#handling}} <a class="btn handling" style="background:#ccc">售后中</a> {{/handling}} </div> </div> </div> </div> <div class="panel"> <div class="panel-title">商品清单</div> <div class="panel-body"> <table class="product-table"> <tr> <th class="cell-th cell-img">&nbsp;</th> <th class="cell-th cell-info">商品信息</th> <th class="cell-th cell-price">单价</th> <th class="cell-th cell-count">数量</th> <th class="cell-th cell-total">小计</th> </tr> {{#orderItemVoList}} <tr> <td class="cell cell-img"> <a href="./detail.html?productId={{productId}}" target="_blank"> <img class="p-img" src="{{imageHost}}{{productImage}}" alt="{{productName}}"/> </a> </td> <td class="cell cell-info"> <a class="link" href="./detail.html?productId={{productId}}" target="_blank"> {{productName}} </a> </td> <td class="cell cell-price">￥{{currentUnitPrice}}</td> <td class="cell cell-count">{{quantity}}</td> <td class="cell cell-total">￥{{totalPrice}}</td> </tr> {{/orderItemVoList}} </table> <p class="total"> <span>订单总价：</span> <span class="total-price">￥{{payment}}</span> </p> </div> </div>'},80:function(e,r,t){"use strict";t(35),t(8),t(7);var s=t(11),c=t(1),n=t(16),o=t(57),i={data:{orderNumber:c.getUrlParam("orderNumber")},init:function(){this.onload(),this.bindEvent()},onload:function(){s.init({name:"order-list"}),this.loadDetail()},bindEvent:function(){var e=this;$(document).on("click",".order-cancel",function(){window.confirm("确实要取消该订单吗？")&&n.cancelOrder(e.data.orderNumber,function(r){c.successTips("该订单取消成功"),e.loadDetail()},function(e){c.errorTips(e)})}),$(document).on("click",".order-success",function(){window.confirm("确实要确认收货吗？")&&n.orderSuccess(e.data.orderNumber,function(r){c.successTips("确认收货成功"),e.loadDetail()},function(e){c.errorTips(e)})}),$(document).on("click",".handling",function(){alert("请等候处理！")})},loadDetail:function(){var e=this,r="",t=$(".content");t.html('<div class="loading"></div>'),n.getOrderDetail(e.data.orderNumber,function(s){e.dataFileter(s),r=c.renderHtml(o,s),t.html(r)},function(e){t.html('<p class="err-tip">'+e+"</p>")})},dataFileter:function(e){e.needPay=10==e.status,e.isCancelable=10==e.status,e.isShipped=40==e.status,e.orderService=50==e.status,e.handling=70==e.status}};$(function(){i.init()})}});