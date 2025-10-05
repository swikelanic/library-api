"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMember = exports.updateMember = exports.addMember = exports.getMemberById = exports.getAllMembers = void 0;
// Sample data
let members = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', membershipDate: new Date('2024-01-15') },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', membershipDate: new Date('2023-09-10') },
];
// Helper to get next ID
const getNextId = () => members.length ? members[members.length - 1].id + 1 : 1;
const getAllMembers = () => members;
exports.getAllMembers = getAllMembers;
const getMemberById = (id) => members.find(m => m.id === id);
exports.getMemberById = getMemberById;
const addMember = (member) => {
    const newMember = { ...member, id: getNextId() };
    members.push(newMember);
    return newMember;
};
exports.addMember = addMember;
const updateMember = (id, updatedMember) => {
    const member = members.find(m => m.id === id);
    if (member)
        Object.assign(member, updatedMember);
    return member;
};
exports.updateMember = updateMember;
const deleteMember = (id) => {
    const index = members.findIndex(m => m.id === id);
    if (index !== -1) {
        members.splice(index, 1);
        return true;
    }
    return false;
};
exports.deleteMember = deleteMember;
//# sourceMappingURL=memberService.js.map