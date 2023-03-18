import { object, string, number, date, InferType } from 'yup';

let userSchema = object({

  email: string().email(),

});

  export default validations;