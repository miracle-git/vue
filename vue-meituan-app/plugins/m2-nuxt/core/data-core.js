const _data_core = {
  is: (type, primitive = false) => {
    return function (obj) {
      return primitive ? typeof obj == type.toLowerCase() : {}.toString.call(obj) == '[object ' + type + ']';
    }
  }
};

export class DataType {

  static isObject(item) {
    return _data_core.is('Object')(item);
  }

  static isArray(item) {
    return Array.isArray(item) || _data_core.is('Array')(item);
  }

  static isEmptyArray(item) {
    return !this.isArray(item) || item.length === 0;
  }

  static isFunction(item) {
    return _data_core.is('Function')(item);
  }

  static isString(item) {
    return _data_core.is('String', true)(item);
  }

  static isNumber(item) {
    return _data_core.is('Number', true)(item);
  }

  static isBoolean(item) {
    return _data_core.is('Boolean', true)(item);
  }

  static isGuid(item) {
    const regex = new RegExp('^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$');
    return regex.test(item);
  }

  static isMobilePhone(item) {
    const regex = new RegExp('^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\\d{8}$');
    return regex.test(item);
  }

  static isTelPhone(item) {
    const regex = new RegExp('^(\\d{3,4}-\\d{7,8}-\\d{1,5})|(^\\d{3,4}-\\d{7,8})$');
    return regex.test(item);
  }

  static isPhone(item) {
    return this.isMobilePhone(item) || this.isTelPhone(item);
  }

  static isEmail(item) {
    const regex = new RegExp('^[0-9a-z][_.0-9a-z-]{0,31}@([0-9a-z][0-9a-z-]{0,30}[0-9a-z]\\.){1,4}[a-z]{2,4}$');
    return regex.test(item);
  }

  static isIdCard(item) {
    const regex = new RegExp('^\\d{18,18}|\\d{15,15}|\\d{17,17}x|\\d{17,17}X$');
    return regex.test(item);
  }

  static defaultVal(item, defaultValue) {
    return item === undefined ? defaultValue : item;
  }

  static pick(item, ...props) {
    return props.reduce((prop, val) => (val in item && (prop[val] = item[val]), prop), {});
  }

}
