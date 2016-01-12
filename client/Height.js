Template.Height.onCreated(function(){
	this.ctrlObj = {
		cssHeight:new ReactiveVar(400),
		padding:new ReactiveVar(0),
		margin:new ReactiveVar(0),
		border:new ReactiveVar(0),
		hScroll: new ReactiveVar(false),
		vScroll: new ReactiveVar(false),
		boxsizing: new ReactiveVar(1),
	}
});

Template.Height.helpers({
	controller: function(){
		return Template.instance().ctrlObj;
	}
});