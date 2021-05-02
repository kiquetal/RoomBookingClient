export class Room {
  id: number | undefined;
  name: string | undefined;
  location: string | undefined;
  capacities: Array<LayoutContainer> | undefined


}

export class LayoutContainer {

  layout: Layout | undefined;
  capacity: number | undefined;

}
export enum Layout {

  THEATER= 'Thearter',
  USHAPE = 'U-shape',
  BOARD = 'board'
}
