'use strict';

var url = require('url');

var Service = require('../service/ServiceService');

module.exports.createService = function createService (req, res, next) {
  Service.createService(req, res, next);
};

module.exports.deleteService = function deleteService (req, res, next) {
  Service.deleteService(req, res, next);
};

module.exports.listService = function listService (req, res, next) {
  Service.listService(req, res, next);
};

module.exports.patchService = function patchService (req, res, next) {
  Service.patchService(req, res, next);
};

module.exports.retrieveService = function retrieveService (req, res, next) {
  Service.retrieveService(req, res, next);
};
