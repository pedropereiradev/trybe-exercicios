const yearSeasons = {
  spring: ["March", "April", "May"],
  summer: ["June", "July", "August"],
  autumn: ["September", "October", "November"],
  winter: ["December", "January", "February"],
};

const { spring, summer, autumn, winter } = yearSeasons;

const months = [...winter, ...spring, ...summer, ...autumn, winter[0]];
months.splice(0, 1);

console.log(months);