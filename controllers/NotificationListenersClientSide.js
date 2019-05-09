'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToServiceAttributeValueChangeNotification = function listenToServiceAttributeValueChangeNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceAttributeValueChangeNotification(req, res, next);
};

module.exports.listenToServiceBatchNotification = function listenToServiceBatchNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceBatchNotification(req, res, next);
};

module.exports.listenToServiceCreateNotification = function listenToServiceCreateNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceCreateNotification(req, res, next);
};

module.exports.listenToServiceDeleteNotification = function listenToServiceDeleteNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceDeleteNotification(req, res, next);
};

module.exports.listenToServiceStateChangeNotification = function listenToServiceStateChangeNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceStateChangeNotification(req, res, next);
};
