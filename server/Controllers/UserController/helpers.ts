
  import bcrypt from 'bcrypt';
  
  export async function EncryptPassword(p:string) {
    const salt: string = await bcrypt.genSalt(10)
    const password: string = await bcrypt.hash(p, salt);
    return password;
  }
