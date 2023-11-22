/**
 *
 * @param {*} value
 * @param {*} ppcm
 * @returns string
 */
const pgcdOrPpcm = (value, ppcm) => {
  const searchReplace = ppcm ? "PPCM" : "PGCD";
  let val = value;
  let splitValue = val.split(searchReplace).filter((e) => e.startsWith("("));
  let splitLength = splitValue.length;
  let j = 0;
  let diviseur = 0;
  let resultReturn = value.replaceAll(searchReplace, "");
  for (j; j < splitLength; j++) {
    const include = splitValue[j];
    let splitWord = include.split(";");
    let val1 = splitWord[0];
    val1 = eval(val1.split("(")[1]);
    let val2 = splitWord[1];
    val2 = eval(val2.split(")")[0]);

    if (val1 > 0 && val2 > 0) {
      if (ppcm) {
        let i = val1 * val2;
        for (i; i >= val1; i--) {
          if (i % val1 == 0 && i % val2 == 0) {
            diviseur = i;
          }
        }
      } else {
        let i = 1;
        for (i; i <= val1; i++) {
          if (val1 % i == 0 && val2 % i == 0) {
            diviseur = i;
          }
        }
      }
    }
    const pgcd = resultReturn.substring(
      resultReturn.indexOf("("),
      resultReturn.indexOf(")") + 1
    );
    resultReturn = resultReturn.replace(pgcd, diviseur);
  }

  return resultReturn;
};

/**
 *
 * @param {*} number
 * @param {*} decimals
 * @returns
 */
const roundNumber = function (number, decimals) {
  decimals = decimals || 15;
  return Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
};

/**
 *
 * @param {*} degree
 * @returns
 */
const toRadians = function (degree) {
  return degree * (Math.PI / 180);
};

/**
 *
 * @param {*} radians
 * @returns
 */
const toDegree = function (radians) {
  return radians * (180 / Math.PI);
};

const MathD = {
  sin: function (number) {
    return roundNumber(Math.sin(toRadians(number)));
  },
  cos: function (number) {
    return roundNumber(Math.cos(toRadians(number)));
  },
  tan: function (number) {
    return roundNumber(Math.tan(toRadians(number)));
  },
  asin: function (number) {
    return Math.round(toDegree(Math.asin(number)));
  },
  acos: function (number) {
    return Math.round(toDegree(Math.acos(number)));
  },
  atan: function (number) {
    return Math.round(toDegree(Math.atan(number)));
  },
};

/**
 *
 * @param {*} val
 * @param {*} arr
 * @returns
 */
const replaceVal = async (val, arr) => {
  let i = 0;
  let l = arr.length;
  let value = val;

  for (i; i < l; i++) {
    const element = arr[i];
    if (value.includes(element.val)) {
      value = await value.replaceAll(element.val, element.rep);
    }
  }
  return value;
};
/**
 *
 * @param {*} n
 * @returns
 */
function factorielle(n) {
  var ans = 1;

  for (var i = 2; i <= n; i++) {
    ans = ans * i;
  }
  return ans;
}

const handleDelete = async (value, arrayVal) => {
  let l = arrayVal.length;
  let i = 0;
  let val = value;
  for (i; i < l; i++) {
    const element = arrayVal[i].val;
    const eLength = element.length;

    if (eLength > 1 && val.lastIndexOf(element) > -1) {
      return val.substring(0, val.length - eLength);
    }
  }
  return val.substring(0, val.length - 1);
};

export { pgcdOrPpcm, MathD, handleDelete, replaceVal, factorielle };
