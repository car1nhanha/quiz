export interface navigationProps {
  navigation: {
    navigate: Function;
    goBack: Function;
  };
  state?: {
    routeNames: Array<string>;
    index: number;
  };
  route: {
    params: any;
  };
}
