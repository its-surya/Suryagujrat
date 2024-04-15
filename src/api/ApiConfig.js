export const API_BASE_URL = 'https://api.guvnl.staging.ahasolar.co.in/api';

export const API_ENDPOINTS = {
  getInstallers: '/common/getInstallerList',
  getBillings: '/application/parameters',
  getDiscoms: '/master/discom-list',
  getOfficers: '/common/getNodalOfficerList',
  getCalculations: '/common/getCalculationDetails',
  getUpdatedCalculations: '/common/getUpdatedCapacity',
  getApplication: '/common/getApplicationByID',
  sendQuery: '/common/getContactUsDetails',
};

function BASE_RESPONSE(success, statusCode, status, message, data) {
  this.success = success;
  this.statusCode = statusCode;
  this.status = status;
  this.message = message;
  this.data = data || null;
}
