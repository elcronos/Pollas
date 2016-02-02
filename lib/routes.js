
FlowRouter.route('/', {
  name: "home",
  action: function(params, queryParams) {
    if(Meteor.userId()){
      BlazeLayout.render('HomeLayout', {
        footer: "footer",
        body: "dashboard",
        nav: "nav",
      });
    }else{
      BlazeLayout.render('HomeLayout', {
        footer: "footer",
        body: "main",
        nav: "nav",
      });
    }
  }
});

FlowRouter.route('/signout', {
  name: "signout",
  action: function(params, queryParams) {
    if(Meteor.userId()){
      Accounts.logout();
      BlazeLayout.render('HomeLayout', {
        footer: "footer",
        body: "signin",
        nav: "nav",
      });
    }
  },
  triggersExit: [triggerSignout]
});

FlowRouter.route('/signin', {
  name: "signin",
  action: function(params, queryParams) {
    if(!Meteor.userId()){
      BlazeLayout.render('HomeLayout', {
        footer: "footer",
        body: "signin",
        nav: "nav",
      });
    }
  }
});

FlowRouter.notFound = {
  action: function() {
    BlazeLayout.render('HomeLayout', {
      footer: "footer",
      body: "pageNotFound",
      nav: "nav",
    });
  }
};

function triggerSignout(context) {
  FlowRouter.redirect('/');
}
//Routes
/*
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');
*/
