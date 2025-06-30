export interface SalesVisitDto {
  visitId: number;
  retailerId: number;
  salespersonId: number;
  visitDate: string;
  latitude: number;
  visitCount?: number;
  longitude: number;
  location?: string;
  color?: string;
}
