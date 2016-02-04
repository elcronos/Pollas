if(Meteor.isClient) {
	Accounts.onLogin(function() {
		FlowRouter.go('mis-pollas');
	});

	Accounts.onLogout(function() {
		FlowRouter.go('home');
	});

	Accounts.ui.config({
	  passwordSignupFields: 'USERNAME_ONLY'
	});
}

FlowRouter.triggers.enter([function(context, redirect) {
	if(!Meteor.userId()) {
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/', {
	name: 'home',
	action() {
		if(Meteor.userId()) {
			FlowRouter.go('mi-pollas');
		}
		BlazeLayout.render('HomeLayout', {main:'login'});
	}
});

FlowRouter.route('/mis-pollas', {
	name: 'mis-pollas',
	action() {
		BlazeLayout.render('HomeLayout', {main: 'MisPollas'});
	}
});

FlowRouter.route('/crear-pollas', {
	name: 'crear-pollas',
	action() {
		BlazeLayout.render('HomeLayout', {main: 'CrearPollas'});
	}
});

FlowRouter.route('/pollas-participo', {
	name: 'pollas-participo',
	action() {
		BlazeLayout.render('HomeLayout', {main: 'PollasParticipo'});
	}
});
