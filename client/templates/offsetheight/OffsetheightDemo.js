Template.OffsetHeightDemo.onCreated(function(){
	this.realOffsetHeight = new ReactiveVar(0);
	this.realClientHeight = new ReactiveVar(0);
	this.realScrollHeight = new ReactiveVar(0);
});

Template.OffsetHeightDemo.onRendered(function(){
	var self = this;
	this.autorun(function(){
		Template.currentData().ctrl.cssHeight.get();
		Template.currentData().ctrl.padding.get();
		Template.currentData().ctrl.margin.get();
		Template.currentData().ctrl.border.get();
		Template.currentData().ctrl.hScroll.get();
		Template.currentData().ctrl.vScroll.get();
		Template.currentData().ctrl.boxsizing.get();
		Meteor.setTimeout(function(){
			self.realOffsetHeight.set(self.find('.offset-height-div').offsetHeight);
			self.realClientHeight.set(self.find('.offset-height-div').clientHeight);
			self.realScrollHeight.set(self.find('.offset-height-div').scrollHeight);
		},150);
	})
});

Template.OffsetHeightDemo.helpers({
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
		return Template.currentData().ctrl.boxsizing.get() === 1 ? 'border-box' : 'content-box';
	},
	getCalculatedOffsetHeight : function() {
		//border-box
		if(Template.currentData().ctrl.boxsizing.get() === 1){
			return 'offsetHeight=CSSHeight + scroll = ' + Template.currentData().ctrl.cssHeight.get();
		}else {
			//content-box
			return 'offsetHeight=CSSHeight + borders*2 + padding*2 + scroll = ' + 
			(parseInt(Template.currentData().ctrl.cssHeight.get()) + 
			parseInt(Template.currentData().ctrl.padding.get() * 2) +
			parseInt(Template.currentData().ctrl.border.get() * 2 ));
		}
	},
	getRealOffsetHeight : function() {
		return Template.instance().realOffsetHeight.get();
	},
	getCalculatedClientHeight : function() {
		//border-box
		if(Template.currentData().ctrl.boxsizing.get() === 1){
			return 'clientHeight=CSSHeight - border*2 = ' + 
			(parseInt(Template.currentData().ctrl.cssHeight.get()) - 
				parseInt(Template.currentData().ctrl.border.get()*2));
		}else {
			//content-box
			return 'clientHeight=CSSHeight + + padding*2 = ' + 
			(parseInt(Template.currentData().ctrl.cssHeight.get()) + 
			parseInt(Template.currentData().ctrl.padding.get() * 2));
		}
	},
	getRealClientHeight : function() {
		return Template.instance().realClientHeight.get();
	},
	getRealScrollHeight : function() {
		return Template.instance().realScrollHeight.get();
	},
});