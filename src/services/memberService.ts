import { Member } from '../models/member';

// Sample data
let members: Member[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', membershipDate: new Date('2024-01-15') },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', membershipDate: new Date('2023-09-10') },
];

// Helper to get next ID
const getNextId = (): number => members.length ? members[members.length - 1].id + 1 : 1;

export const getAllMembers = (): Member[] => members;
export const getMemberById = (id: number): Member | undefined => members.find(m => m.id === id);
export const addMember = (member: Omit<Member, 'id'>): Member => {
  const newMember: Member = { ...member, id: getNextId() };
  members.push(newMember);
  return newMember;
};
export const updateMember = (id: number, updatedMember: Partial<Member>): Member | undefined => {
  const member = members.find(m => m.id === id);
  if (member) Object.assign(member, updatedMember);
  return member;
};
export const deleteMember = (id: number): boolean => {
  const index = members.findIndex(m => m.id === id);
  if (index !== -1) {
    members.splice(index, 1);
    return true;
  }
  return false;
};
