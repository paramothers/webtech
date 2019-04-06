try {
  let a = doesnotExist;
} catch (e) {
  console.log(e.message);
  throw new Error('Summa');
}
