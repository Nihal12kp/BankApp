// trim data
export const trimData = (obj) => {
  let finalObj = {};
  for (let key in obj) {
    finalObj[key] = onj[key]?.trim().toLowerCase();
  }
  return finalObj;
};




