let time = process.argv.slice(2);

time = time.map(i => {
  return Number(i);
});


const beeper = function (delay) {

  setTimeout(() => {
    process.stdout.write('!!');
    process.stdout.write('\n')

  }, (delay * 1000)
  );
};

for (const val of time) {
  if (val === Number || val <= 0) {
  beeper(val);
  };

};

