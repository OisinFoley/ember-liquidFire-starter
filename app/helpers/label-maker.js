import Ember from 'ember';

export function labelMaker(params/*, hash*/) {


  // if(params[0]){
  // 	  if(params[0].club) == 'chelsea'{
		// return 'btn btn-success';  	
	 //  } else {
	 //  	return '';
	 //  }
  // }

  if(params[0]) {
        
    var row = params[0],
      class_names = [];
          
    if(row.club === 'chelsea'){

      class_names.push('btn btn-success');
    }
    //some other conditions if needed

    return class_names.join(' ');
  }

  return 'btn btn-info';


  

  
}

export default Ember.Helper.helper(labelMaker);
