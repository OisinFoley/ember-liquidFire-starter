import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return [{
			name: 'oisin',
			club: 'chelsea'
		}, {
			name: 'curbish',
			club: 'o\'hehirs'
		}];

	}
});
