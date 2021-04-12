"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports[
  "default"
] = exports.MessageTypeEnum = exports.SizeEnum = exports.StatusEnum = void 0;
var StatusEnum = [
  "available",
  "unavailable",
  "away",
  "dnd",
  "invisible",
  "eager",
];
exports.StatusEnum = StatusEnum;
var SizeEnum = ["xs", "sm", "md", "lg", "fluid"];
exports.SizeEnum = SizeEnum;
var MessageTypeEnum = ["html", "text", "image", "custom"];
exports.MessageTypeEnum = MessageTypeEnum;
var _default = {
  SizeEnum: SizeEnum,
  StatusEnum: StatusEnum,
  MessageTypeEnum: MessageTypeEnum,
};
exports["default"] = _default;
