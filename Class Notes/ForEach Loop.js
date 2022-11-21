const teacherNames = ['Matina','Jamal']
const printNames = (teacherName, i) => {
  console.log(`${i+1}. ${teacherName}`);
}
teacherNames.forEach(printNames);