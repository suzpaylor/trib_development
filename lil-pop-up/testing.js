<div id="page1" class="template-container">
  <div class="header">
    <div class="stop-sign">
      <img src="https://sltrib-sandbox.origin.arcpublishing.com/pb/resources/assets/img/vectors/disable_ad_block.svg">
    </div>
    <div class="masthead">
      <img src="https://sltrib-sandbox.origin.arcpublishing.com/pb/resources/assets/img/sltrib.com-logo.png">
    </div>
  </div>
  <div class="notice spaceborder">
    To unlock, unblock
  </div>
  <div class="spaceborder">
    <div class="message">
      Please whitelist sltrib.com to continue reading.
    </div>
    <div class="message">
      Or subscribe, and we'll let you keep your ad blocker on.
    </div>
  </div>
  <div class="request spaced-letters">
    <span class="uppercase"><a href="https://sltrib-sandbox.origin.arcpublishing.com/footer/2017/11/16/disable-adblock-on-sltrib/">Click here</a> to learn how to disable ad blocker</span>
  </div>
  <!--<a ng-click="startCheckout(terms[0].termId)" class="white">-->
    <div id="subscribe-button" class="subscribe spaced-letters">
      <span class="uppercase">Subscribe</span>
      <span class="uppercase price">99¢ first month</span>  
    </div>  
  </a>
  <div class="spaced-letters uppercase">
    <span>Already a subscriber? </span><span class="lightblue" ng-click="login()">Sign In</span>
  </div>
  <div class="spaced-letters uppercase">
    <a href="https://sltrib-sandbox.origin.arcpublishing.com/subscribe/">More options</a>
  </div>

</div>

<div id="page2" class="row default-offer">
    <div class="indents-from-border">
      <div account-header-component >

      </div>
      <div id="back-button" class="previous-button-wrapper">
        <a href="javascript:void(0)" class="button back"></a>
      </div>

      <div class="row account-head">
        <div class="business-logo" ng-show="app.image1">
          <img class="logo-img" ng-src="{{app.image1}}" />
        </div>
        <div class="account-head-contentcol" ng-class="!app.image1 ? 'no-logo' : ''">
          <h1><t>Subscribe now for unlimited access</t></h1>
          <p class="lead">
            <t>
              <p class="description">
                Digital subscribers have access to all of The Salt Lake Tribune’s content at sltrib.com and on our mobile app.
              </p>
              <p class="description">
                A monthly subscription costs $7.99, but new subscribers can try it for just 99 cents for one month.
              </p>
              <p class="description">
                Current print subscribers can add digital access for a discounted rate of $1.99 per month. <a href="https://sltrib-sandbox.origin.arcpublishing.com/subscribe/verify-print/">Click here to verify your subscription.</a>
              </p>
              <p class="description">
                You may cancel any time, but there are no refunds.
              </p>
              <p class="description">
                For more information on our subscription packages, click <a href="https://sltrib-sandbox.origin.arcpublishing.com/subscribe/">here</a>.
              </p>
            </t>
          </p>
        </div>
      </div>
    </div>

    <div class="start-screen-content">
        <h1 class="choose-specific-term"><t>Pick the sltrib.com subscription that's right for you:</t></h1>
        <div desktop>
            <div class="account-terms-section">
                <table class="start-screen-terms account-terms" cellspacing="0" cellpadding="0">
                    <tbody>
                    <tr ng-repeat="term in terms | filter: {restrictCheckoutProcess:false}">
                        <td class="title">
                            <h2>{{term.name | tc:'term.name'}}</h2>
                            <span class="period" ng-if="term.newCustomersOnly"><t>for new consumer only</t></span>
                        </td>
                        <td class="choose detail">
                          <a ng-if="term.termId !== 'TMCLHDQMJEI5'" ng-click="startCheckout(term.termId)" class="button start-new-checkout big">
                            <span ng-show="isPayableTerm(term)">
                              <span class="price">
                                <span ng-if="term.hasFreeTrial"><t>Free</t></span>
                                <span ng-if="!term.hasFreeTrial">{{term.firstRealPrice}}</span>
                              </span>
                              <span class="period"><t>/ {{term.firstPeriod}}</t></span>
                            </span>
                            <span ng-hide="isPayableTerm(term)" class="non-payment">
                              <t>Whatever you do, don't click this button.</t>
                            </span>
                          </a>
                          <a id="{{term.termId}}" ng-if="term.termId === 'TMCLHDQMJEI5'" class="button start-new-checkout big">
                            <span ng-show="isPayableTerm(term)">
                              <span class="price">
                                <span ng-if="term.hasFreeTrial"><t>Free</t></span>
                                <span ng-if="!term.hasFreeTrial">{{term.firstRealPrice}}</span>
                              </span>
                              <span class="period"><t>/ {{term.firstPeriod}}</t></span>
                            </span>
                          </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div mobile>
            <div class="mobile-account-terms-section">
                <table class="start-screen-terms account-terms" cellspacing="0" cellpadding="0">
                    <tbody>
                    <tr ng-repeat="term in terms">
                        <td class="title">
                            <h2>{{term.name | tc:'term.name'}}</h2>
                            <span class="detail" ng-show="isPayableTerm(term)">
                                <span class="price">
                                    <span ng-if="term.hasFreeTrial"><t>Free</t></span>
                                    <span ng-if="!term.hasFreeTrial">{{term.firstRealPrice}}</span>
                                </span>
                                <span class="period"><t>for {{term.firstPeriod}}</t></span>
                            </span>
                        </td>
                        <td class="choose">
                            <a ng-if="term.termId !== 'TMCLHDQMJEI5'" ng-click="startCheckout(term.termId)" class="button start-new-checkout big">
                                <t>Subscribe now</t>
                            </a>
                            <a id="{{term.termId}}" ng-if="term.termId === 'TMCLHDQMJEI5'" class="button start-new-checkout big">
                              <t>Subscribe now</t>
                            </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="maybe-already-purchased" ng-show="!isUserValid() && !canInitCheckoutWithAnon()">
            <t>Already purchased?</t>
            <a ng-click="login()"><t>Log in to your account</t></a>
        </div>
    </div>
    <div class="offer-redemption" ng-show="allowRedemption()">
        <table>
            <tr>
                <td class="title">
                    <t>Did you receive a voucher?</t>
                </td>
                <td class="choose">
                    <a ng-click="startRedemption()" class="button big fixed"><t>Redeem</t></a>
                </td>
            </tr>
        </table>
    </div>
</div>

<div id="page3" class="row default-offer">
  <div class="indents-from-border">
    <div account-header-component >
    </div>
    <div id="back-button2" class="previous-button-wrapper">
      <a href="javascript:void(0)" class="button back"></a>
    </div>
    <div class="row account-head">
      <div class="business-logo" ng-show="app.image1">
        <img class="logo-img" ng-src="{{app.image1}}" />
      </div>
      <div class="account-head-contentcol" ng-class="!app.image1 ? 'no-logo' : ''">
        <h1><t>New Print & Digital subscription — Friday through Sunday</t></h1>
        <p class="lead black-text">
          <t>
            Your print subscription also includes home delivery on 1/15, 2/19, 5/28, 7/4, 7/24, 9/3, 10/8, 11/12, 11/19, 11/20, 11/21, 11/22, 11/23, 11/24, 12/19, 12/20, 12/21, 12/22, 12/24, 12/25, 12/26, 12/27, 12/28, 12/29, 12/31/2018, 1/1/2019 editions.
          </t>
        </p>
        <p class="black-text">
          <t>
            Print subscriptions are only available to Utah residents, and are not available in Daggett, Garfield, Grand, Kane, Piute, Rich and San Juan counties. Also not available in Mendon (84325), Richmond (84333), Tremonton (84337) or Kanosh (84637). 
          </t>
        </p>
        <p>
          <a ng-click="startCheckout('TMCLHDQMJEI5')" class="button start-new-checkout big">
            <t>Subscribe</t>
          </a>  
        </p>
        <p class="border-top">
          <t>
            This is a continuous subscription to The Salt Lake Tribune for as long as the service is offered. You will be charged monthly. You may cancel by logging into your “Account” page at sltrib.com or by calling Customer Service at 801-204-6100. You must cancel before the end of your monthly billing term to avoid charges for an additional term. No unused portion of a term will be refunded. No credit is offered for vacation service interruptions. Future prices are subject to change. 
          </t>
        </p>
      </div>
    </div>
  </div>
</div>

<div custom-script>
  
  function goToPage1() { // back button on page 1
  	$("#page1").show();
  	$("#page2").hide();
    $("#page3").hide();
  	document.getElementById("TMCLHDQMJEI5").removeEventListener("click", goToPage3, true);
  }
  
  function goToPage2() { // subscribe button
  	$(".template-container").hide();
  	$("#page1").hide();
  	$("#page2").show();
    $("#page3").hide();
  	document.getElementById("TMCLHDQMJEI5").addEventListener("click", goToPage3);
  	document.getElementById("back-button2").removeEventListener("click", goToPage2);
  }
  
  function goToPage3() {
  	$("#page1").hide();
  	$("#page2").hide();
    $("#page3").show();
	document.getElementById("back-button2").addEventListener("click", goToPage2);
  }
  
  function init() {
    $("#page1").show();
  	$("#page2").hide();
    $("#page3").hide();
	document.getElementById("subscribe-button").addEventListener("click", goToPage2);
  	document.getElementById("back-button").addEventListener("click", goToPage1);
  }
  
  init();
  
</div>