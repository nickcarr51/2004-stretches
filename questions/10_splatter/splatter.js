//write the splatter function

const splatter = () => {
  let args = Array.from(arguments);
  let total;
  args.forEach(obj => {
    for (let key in obj) {
      total += obj[key];
    }
  })
  return total;
};

module.exports = { splatter };
