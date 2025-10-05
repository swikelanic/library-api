import { Request, Response } from 'express';
import * as memberService from '../services/memberService';

export const getMembers = (req: Request, res: Response) => {
  res.json(memberService.getAllMembers());
};

export const getMember = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const member = memberService.getMemberById(id);
  if (member) res.json(member);
  else res.status(404).json({ message: 'Member not found' });
};

export const createMember = (req: Request, res: Response) => {
  memberService.addMember(req.body);
  res.status(201).json({ message: 'Member added' });
};

export const updateMember = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updated = memberService.updateMember(id, req.body);
  if (updated) res.json(updated);
  else res.status(404).json({ message: 'Member not found' });
};

export const deleteMember = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (memberService.deleteMember(id)) res.json({ message: 'Member deleted' });
  else res.status(404).json({ message: 'Member not found' });
};
