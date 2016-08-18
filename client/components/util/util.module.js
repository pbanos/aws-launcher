'use strict';

import {
  UtilService
} from './util.service';

export default angular.module('awsApp.util', [])
  .factory('Util', UtilService)
  .name;
