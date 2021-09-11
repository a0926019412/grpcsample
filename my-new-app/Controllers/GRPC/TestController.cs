using System;
using System.Threading.Tasks;
using Grpc.Core;
using Test.GRPC;
namespace my_new_app.Controllers.GRPC
{
    public class TestController : MyTest.MyTestBase
    {
        private static int counter = 0;
        public override Task<MyTestResponse> GetTest(MyTestParameter request, ServerCallContext context)
        {
            ;
            //myTestResponse.Res = 0;
            Console.WriteLine("grpc get test");
            return Task.FromResult(new MyTestResponse() { Res = ++counter });
        }
        public override async Task GetTestStream(MyTestParameter request, IServerStreamWriter<MyTestResponse> responseStream, ServerCallContext context)
        {
            for (var i = 0; i < 5; i++)
            {
                await responseStream.WriteAsync(new MyTestResponse(){Res = i});
                await Task.Delay(1000);
            }
        }
    }
}