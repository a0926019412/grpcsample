/**
 * @fileoverview gRPC-Web generated client stub for test.grpc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck
// @ts-ignore 
const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.test = {};
proto.test.grpc = require('./Test_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.test.grpc.MyTestClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.test.grpc.MyTestPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.test.grpc.MyTestParameter,
 *   !proto.test.grpc.MyTestResponse>}
 */
const methodDescriptor_MyTest_GetTest = new grpc.web.MethodDescriptor(
  '/test.grpc.MyTest/GetTest',
  grpc.web.MethodType.UNARY,
  proto.test.grpc.MyTestParameter,
  proto.test.grpc.MyTestResponse,
  /**
   * @param {!proto.test.grpc.MyTestParameter} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.test.grpc.MyTestResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.test.grpc.MyTestParameter,
 *   !proto.test.grpc.MyTestResponse>}
 */
const methodInfo_MyTest_GetTest = new grpc.web.AbstractClientBase.MethodInfo(
  proto.test.grpc.MyTestResponse,
  /**
   * @param {!proto.test.grpc.MyTestParameter} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.test.grpc.MyTestResponse.deserializeBinary
);


/**
 * @param {!proto.test.grpc.MyTestParameter} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.test.grpc.MyTestResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.test.grpc.MyTestResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.test.grpc.MyTestClient.prototype.getTest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/test.grpc.MyTest/GetTest',
      request,
      metadata || {},
      methodDescriptor_MyTest_GetTest,
      callback);
};


/**
 * @param {!proto.test.grpc.MyTestParameter} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.test.grpc.MyTestResponse>}
 *     Promise that resolves to the response
 */
proto.test.grpc.MyTestPromiseClient.prototype.getTest =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/test.grpc.MyTest/GetTest',
      request,
      metadata || {},
      methodDescriptor_MyTest_GetTest);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.test.grpc.MyTestParameter,
 *   !proto.test.grpc.MyTestResponse>}
 */
const methodDescriptor_MyTest_GetTestStream = new grpc.web.MethodDescriptor(
  '/test.grpc.MyTest/GetTestStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.test.grpc.MyTestParameter,
  proto.test.grpc.MyTestResponse,
  /**
   * @param {!proto.test.grpc.MyTestParameter} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.test.grpc.MyTestResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.test.grpc.MyTestParameter,
 *   !proto.test.grpc.MyTestResponse>}
 */
const methodInfo_MyTest_GetTestStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.test.grpc.MyTestResponse,
  /**
   * @param {!proto.test.grpc.MyTestParameter} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.test.grpc.MyTestResponse.deserializeBinary
);


/**
 * @param {!proto.test.grpc.MyTestParameter} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.test.grpc.MyTestResponse>}
 *     The XHR Node Readable Stream
 */
proto.test.grpc.MyTestClient.prototype.getTestStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/test.grpc.MyTest/GetTestStream',
      request,
      metadata || {},
      methodDescriptor_MyTest_GetTestStream);
};


/**
 * @param {!proto.test.grpc.MyTestParameter} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.test.grpc.MyTestResponse>}
 *     The XHR Node Readable Stream
 */
proto.test.grpc.MyTestPromiseClient.prototype.getTestStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/test.grpc.MyTest/GetTestStream',
      request,
      metadata || {},
      methodDescriptor_MyTest_GetTestStream);
};


module.exports = proto.test.grpc;

