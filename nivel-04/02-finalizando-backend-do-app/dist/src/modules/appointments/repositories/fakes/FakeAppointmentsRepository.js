"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var uuidv4_1 = require("uuidv4");
var date_fns_1 = require("date-fns");
var Appointment_1 = __importDefault(require("@modules/appointments/infra/typeorm/entities/Appointment"));
var FakeAppointmentsRepository = /** @class */ (function () {
    function FakeAppointmentsRepository() {
        this.appointments = [];
    }
    FakeAppointmentsRepository.prototype.findByDate = function (date, provider_id) {
        return __awaiter(this, void 0, void 0, function () {
            var findAppointment;
            return __generator(this, function (_a) {
                findAppointment = this.appointments.find(function (appointment) {
                    return date_fns_1.isEqual(appointment.date, date) &&
                        appointment.provider_id === provider_id;
                });
                return [2 /*return*/, findAppointment];
            });
        });
    };
    FakeAppointmentsRepository.prototype.findAllInMonthFromProvider = function (_a) {
        var provider_id = _a.provider_id, month = _a.month, year = _a.year;
        return __awaiter(this, void 0, void 0, function () {
            var appointments;
            return __generator(this, function (_b) {
                appointments = this.appointments.filter(function (appointment) {
                    return appointment.provider_id === provider_id &&
                        date_fns_1.getMonth(appointment.date) + 1 === month &&
                        date_fns_1.getYear(appointment.date) === year;
                });
                return [2 /*return*/, appointments];
            });
        });
    };
    FakeAppointmentsRepository.prototype.findAllInDayFromProvider = function (_a) {
        var provider_id = _a.provider_id, day = _a.day, month = _a.month, year = _a.year;
        return __awaiter(this, void 0, void 0, function () {
            var appointments;
            return __generator(this, function (_b) {
                appointments = this.appointments.filter(function (appointment) {
                    return appointment.provider_id === provider_id &&
                        date_fns_1.getDate(appointment.date) === day &&
                        date_fns_1.getMonth(appointment.date) + 1 === month &&
                        date_fns_1.getYear(appointment.date) === year;
                });
                return [2 /*return*/, appointments];
            });
        });
    };
    FakeAppointmentsRepository.prototype.create = function (_a) {
        var provider_id = _a.provider_id, user_id = _a.user_id, date = _a.date;
        return __awaiter(this, void 0, void 0, function () {
            var appointment;
            return __generator(this, function (_b) {
                appointment = new Appointment_1.default();
                Object.assign(appointment, { id: uuidv4_1.uuid(), date: date, provider_id: provider_id, user_id: user_id });
                this.appointments.push(appointment);
                return [2 /*return*/, appointment];
            });
        });
    };
    return FakeAppointmentsRepository;
}());
exports.default = FakeAppointmentsRepository;
