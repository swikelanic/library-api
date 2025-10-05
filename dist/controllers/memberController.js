"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMember = exports.updateMember = exports.createMember = exports.getMember = exports.getMembers = void 0;
const memberService = __importStar(require("../services/memberService"));
const getMembers = (req, res) => {
    res.json(memberService.getAllMembers());
};
exports.getMembers = getMembers;
const getMember = (req, res) => {
    const id = Number(req.params.id);
    const member = memberService.getMemberById(id);
    if (member)
        res.json(member);
    else
        res.status(404).json({ message: 'Member not found' });
};
exports.getMember = getMember;
const createMember = (req, res) => {
    memberService.addMember(req.body);
    res.status(201).json({ message: 'Member added' });
};
exports.createMember = createMember;
const updateMember = (req, res) => {
    const id = Number(req.params.id);
    const updated = memberService.updateMember(id, req.body);
    if (updated)
        res.json(updated);
    else
        res.status(404).json({ message: 'Member not found' });
};
exports.updateMember = updateMember;
const deleteMember = (req, res) => {
    const id = Number(req.params.id);
    if (memberService.deleteMember(id))
        res.json({ message: 'Member deleted' });
    else
        res.status(404).json({ message: 'Member not found' });
};
exports.deleteMember = deleteMember;
//# sourceMappingURL=memberController.js.map