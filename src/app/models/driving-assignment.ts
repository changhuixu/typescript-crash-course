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

  static cast(obj: DrivingAssignment): DrivingAssignment {
    return new DrivingAssignment(
      obj.id,
      obj.driverId,
      obj.driverName,
      obj.hawkId,
      obj.orgDept,
      obj.demographic,
      obj.isRequiredToDrive,
      obj.createdBy,
      obj.createdAt,
      obj.status
    );
  }
}
