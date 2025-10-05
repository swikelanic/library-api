import { Member } from '../models/member';
export declare const getAllMembers: () => Member[];
export declare const getMemberById: (id: number) => Member | undefined;
export declare const addMember: (member: Omit<Member, "id">) => Member;
export declare const updateMember: (id: number, updatedMember: Partial<Member>) => Member | undefined;
export declare const deleteMember: (id: number) => boolean;
//# sourceMappingURL=memberService.d.ts.map