export function checkResult(result: string, bet: string) {
  if (result === "" || result === null) {
    return 0;
  }

  if (result === bet) {
    return 3;
  } else {
    const r = result.split("-");
    let res = 0;
    if (parseInt(r[0]) === parseInt(r[1])) {
      res = 0;
    }
    if (parseInt(r[0]) > parseInt(r[1])) {
      res = 1;
    }
    if (parseInt(r[0]) < parseInt(r[1])) {
      res = 2;
    }

    const b = bet.split("-");
    let be = 0;
    if (parseInt(b[0]) === parseInt(b[1])) {
      be = 0;
    }
    if (parseInt(b[0]) > parseInt(b[1])) {
      be = 1;
    }
    if (parseInt(b[0]) < parseInt(b[1])) {
      be = 2;
    }

    if (be === res) {
      return 1;
    } else {
      return 0;
    }
  }
}
