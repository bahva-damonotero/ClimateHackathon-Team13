import { v4 as uuid } from 'uuid';

export default class AlertInstance {
  constructor({ closable, content, heading, icon, role, slim, timeout, type }) {
    this.closable = closable !== undefined ? closable : false;
    this.content = content;
    this.fadeOut = false;
    this.heading = heading;
    this.icon = icon !== undefined ? icon : true;
    this.role = role;
    this.slim = slim !== undefined ? slim : false;
    this.timeout = timeout;
    this.type = type;
    this.uuid = uuid();
  }
}
