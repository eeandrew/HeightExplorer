
Template.Controller.helpers({
	cssHeight : function(){
		return Template.currentData().ctrl.cssHeight.get();
	},
	padding : function() {
		return Template.currentData().ctrl.padding.get();
	},
	margin : function() {
		return Template.currentData().ctrl.margin.get();
	},
	border : function() {
		return Template.currentData().ctrl.border.get();
	},
	hScroll : function() {
		return Template.currentData().ctrl.hScroll.get();
	},
	vScroll : function() {
		return Template.currentData().ctrl.vScroll.get();
	},
	boxsizing : function() {
		return Template.currentData().ctrl.boxsizing.get();
	}
});

Template.Controller.events({
	'change [target="hscroll"]' : function(events){
		Template.currentData().ctrl.hScroll.set(events.target.checked);
	},
	'change [target="vscroll"]' : function(events){
		Template.currentData().ctrl.vScroll.set(events.target.checked);
	},
	'keyup [target="border"]' : function(events) {
		Template.currentData().ctrl.border.set(events.target.value);
	},
	'keyup [target="margin"]' : function(events) {
		Template.currentData().ctrl.margin.set(events.target.value);
	},
	'keyup [target="padding"]' : function(events) {
		Template.currentData().ctrl.padding.set(events.target.value);
	},
	'keyup [target="cssHeight"]' : function(events) {
		Template.currentData().ctrl.cssHeight.set(events.target.value);
	},
	'change [target="boxsizing"]' : function(events) {
		console.log(events.target.value);
		Template.currentData().ctrl.boxsizing.set(parseInt(events.target.value));
	}
});