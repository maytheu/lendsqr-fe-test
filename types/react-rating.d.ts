declare module 'react-rating' {
    import { Component } from 'react';
  
    interface RatingProps {
      readonly?: boolean;
      initialRating?: number;
      stop?: number;
      emptySymbol?: React.ReactNode;
      fullSymbol?: React.ReactNode;
    }
  
    export default class Rating extends Component<RatingProps> {}
  }
  