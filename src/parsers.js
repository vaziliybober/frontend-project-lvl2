import yaml from 'js-yaml';
import ini from 'ini';

const getParser = (extension) => {
  switch (extension) {
    case '.json':
      return JSON.parse;
    case '.yml':
      return yaml.safeLoad;
    case '.ini':
      return ini.parse;
    default:
      return null;
  }
};

export default getParser;
