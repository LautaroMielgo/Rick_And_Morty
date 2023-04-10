
const validation = (userData) =>{
      const errors = {};

      if(!/\S+@\S+\.\S+/.test(userData.email)){
            errors.email = 'El email esta mal rey/reina';
      }
      if(!userData.email){
            errors.email = 'Escribi tu email rey/reina'
      }
      if(userData.email.length > 35){
            errors.email = 'Son 35 letras nada mas rey/reina'
      }
      if(!/.*\d+.+/.test(userData.password)){
            errors.password = 'Si o si tiene que tener un numero rey/reina'
      }
      if(userData.password.length < 6 || userData.password.length > 10){
            errors.password = 'tiene que tener entre 6 y 10 caracteres rey/reina'
      }

      return errors;
}

export default validation