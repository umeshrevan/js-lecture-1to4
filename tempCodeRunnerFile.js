function callEverySecond(seconds) {
  let elapsedSeconds = 0;
  return new Promise((resolve, reject) => {
    const intervalId = setInterval(() => {
      console.log(`elapsed after every ${elapsedSeconds} seconds`);
      elapsedSeconds++;
      if (elapsedSeconds === seconds) {
        clearInterval(intervalId);
        resolve();
      }
    }, 1000);
  });
}

callEverySecond(5)
  .then(() => {
    console.log('Elapsed time is over!');
  });