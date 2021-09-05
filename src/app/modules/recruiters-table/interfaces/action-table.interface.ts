import { Recruiter } from '@shared/interfaces/recruiter.interface';

export interface ActionTable {
  result: Recruiter,
  type: 'REMOVE' | 'EDIT'
}