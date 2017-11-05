import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return {
			url: 'https://dummy-url.org',
			category: 'non-profit',
			holdingCompany:'oisin productions ltd.'
		}
	}
});
