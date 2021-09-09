import React, { Component } from 'react';
import {MyTestParameter,MyTestResponse} from './grpc/Test_pb';
import {MyTestClient} from './grpc/Test_grpc_web_pb';
export class GrpcData extends Component {
   

  constructor(props) {
    super(props);
    this.state = { responsetest : "", loading: true };
  }

  componentDidMount() {
    this.getGrpcTestData();
  }

  static renderGrpcTest(responsetest) {
    return (
      <div>{responsetest}</div>
    );
  }

  render() {
    let contents = GrpcData.renderGrpcTest(this.state.responsetest);
    return (
     
      <div>
        {contents}
      </div>
    );
  }

    getGrpcTestData() {
      var client = new MyTestClient('https://localhost:5001');

      var request = new MyTestParameter();
      var getres = "";
      request.setPar('test');
      
      client.getTest(request, {}, (err, response) => {
        // console.log(err);
        //console.log(response);
        if(response)
        { 
          getres = response.getRes();
          //console.log( "get response" + getres);
          this.setState({ responsetest: getres, loading: false });
          console.log("update state" + this.state.responsetest);
        }
        else
        console.log("unkown response");
          
    
      });
     
   
  }
}
