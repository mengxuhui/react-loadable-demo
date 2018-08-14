export default class Loading extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        
      // normal
      
      /* return (
            <div>Loading ...</div>
      ); */


      // error 
      if (props.error) {

          return <div>Error! <button onClick={ props.retry }>Retry</button></div>;

      // timeout
      } else if (props.timedOut) {

          return <div>Taking a long time... <button onClick={ props.retry }>Retry</button></div>;
      // pastDelay
      } else if (props.pastDelay) {

          return <div>Loading...</div>;
          
      } else {
          return null;
      }
    }
  }


  