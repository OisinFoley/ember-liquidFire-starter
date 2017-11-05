import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	club: DS.attr('string')
});
