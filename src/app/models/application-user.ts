export class ApplicationUser {
  constructor(
    public hawkId: string,
    public univId?: string,
    public isAdmin?: boolean
  ) {}
}
