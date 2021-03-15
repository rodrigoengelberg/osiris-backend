"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongodb = require("mongodb");

var _Notification = _interopRequireDefault(require("../../infra/typeorm/schemas/Notification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class NotificationsRepository {
  notifications = [];

  async create({
    recipient_id,
    content
  }) {
    const notification = new _Notification.default();
    Object.assign(notification, {
      id: new _mongodb.ObjectID(),
      recipient_id,
      content
    });
    this.notifications.push(notification);
    return notification;
  }

}

var _default = NotificationsRepository;
exports.default = _default;