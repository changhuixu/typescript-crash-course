import { Demographic } from './demographic.enum';
import { DrivingAuthorizationStatus } from './driving-authorization-status.enum';

export class DrivingAssignment {
  constructor(
    public readonly id: number,
    public readonly driverId: number,
    public driverName: string,
    public hawkId: string,
    public orgDept: string,
    public demographic: Demographic,
    public isRequiredToDrive: boolean,
    public createdBy: string,
    public createdAt: Date,
    public status: DrivingAuthorizationStatus
  ) {}
}
