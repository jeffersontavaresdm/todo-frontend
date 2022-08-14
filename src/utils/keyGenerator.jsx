const keyGenerator = () => {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < 10; i++) {
    let x = Math.random() * charactersLength;
    let y = Math.floor(x);

    result = result + characters.charAt(y);
  }

  return result.toUpperCase();
}

export default keyGenerator;