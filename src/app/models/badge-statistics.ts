export class BadgeStatistics {
  constructor(
    public authorizedCount: number,
    public pendingCount: number,
    public notAuthorizedCount: number
  ) {}

  static Default(): BadgeStatistics {
    return new BadgeStatistics(0, 0, 0);
  }
}
