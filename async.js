async function getAfterDelay() {
  setTimeout(() => {
    console.log("RESULT AFTER 3 SECONDS");
  }, 3000);
}

async function awaitShower() {
  console.log("IMMEDIATE RESULT");
  const res = await getAfterDelay();
  return res;
}

awaitShower();

async function delay(ms) {
  setTimeout(() => {
    console.log(`EXECUTED AFTER ${ms} MS`);
  }, ms);
}

async function shower() {
  const response = await delay(5000);
  return response;
}

shower();
