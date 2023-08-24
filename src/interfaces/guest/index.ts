import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface GuestInterface {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  applied_position: string;
  status: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  _count?: {};
}

export interface GuestGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  applied_position?: string;
  status?: string;
  company_id?: string;
}
