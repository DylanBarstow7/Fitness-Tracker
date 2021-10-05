const validate = (state)=>{
  const ret = [];
  if(state.type==="cardio"){} 
  else if(state.type==="resistance") {} 
  else {
  if (!state.type){}
  }
  if (!state.name){}
  if (!state.duration){}
  return ret;
};

const validateNum = ()=>({});

export default {
  createExercise(){
    const errors = validate(newExercise);
    if (errors.length){
      throw new Error(`User error: ${errors.join(", ")}`);
    }
    return {}

}