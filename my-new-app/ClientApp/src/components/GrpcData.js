import React, { Component } from 'react';
import {MyTestParameter,MyTestResponse} from './grpc/Test_pb';
import {MyTestClient} from './grpc/Test_grpc_web_pb';
export class GrpcData extends Component {
   

  constructor(props) {
    super(props);
    this.state = { responseTest : "",responseTestStreaming : "", loading: true };
  }

  componentDidMount() {
    this.getGrpcTestData();
    this.getGrpcTestStreamData();
  }

  static renderGrpcTest(responseTest,responseTestStreaming) {
    return (
      <div>

      {responseTest}

      <br/>
      {responseTestStreaming}
      </div>

    );
  }

  render() {
    let contents = GrpcData.renderGrpcTest(this.state.responseTest,this.state.responseTestStreaming);
    return (
     
      <div>
        {contents}
      </div>
    );
  }

    getGrpcTestData() {
      let client = new MyTestClient('https://localhost:5001');

      let request = new MyTestParameter();
      
      request.setPar('test');
      
      client.getTest(request, {}, (err, response) => {
        // console.log(err);
        //console.log(response);
        if(response)
        { 
          let getRes = "";
          getRes = response.getRes();
          //console.log( "get response" + getres);
          this.setState({ responseTest: getRes, loading: false });
          console.log("update state" + this.state.responseTest);
        }
        else
          console.log("unkown response (responseTest)");
      });

  }
  getGrpcTestStreamData()
  {
    let client = new MyTestClient('https://localhost:5001');

    let request = new MyTestParameter();
    
    request.setPar('test');
    var stream = client.getTestStream(request,{});
    stream.on('data', function(response) {
      let getRes = response.getRes();
      console.log(getRes);
      this.setState({ responseTestStreaming: getRes, loading: false });

    });
    stream.on('status', function(status) {
      // console.log(status.code);
      // console.log(status.details);
      // console.log(status.metadata);
    });
    stream.on('end', function(end) {
      // stream end signal
    });
  }

}
